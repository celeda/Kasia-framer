import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';

const EditModeContext = createContext();

export const useEditMode = () => useContext(EditModeContext);

export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState({});
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  const loadFallbackContent = useCallback(async () => {
    console.warn('Supabase fetch failed or returned no data. Attempting to load from localStorage.');
    const localContent = localStorage.getItem('siteContent');
    if (localContent) {
      console.log('Loaded content from localStorage.');
      setContent(JSON.parse(localContent));
    } else {
      console.warn('No content in localStorage. Attempting to load from src/content.json.');
      try {
        const fallbackContentModule = await import('@/content.json');
        const fallbackContent = fallbackContentModule.default;
        setContent(fallbackContent);
        localStorage.setItem('siteContent', JSON.stringify(fallbackContent));
        console.log('Loaded content from src/content.json and saved to localStorage.');
      } catch (e) {
        console.error("Fatal: Error loading fallback content.json:", e);
        setContent({}); 
      }
    }
    setIsLoadingContent(false);
  }, []);

  const fetchContent = useCallback(async () => {
    setIsLoadingContent(true);
    try {
      const { data, error, status } = await supabase
        .from('site_content')
        .select('content_data')
        .eq('id', 'main_content')
        .single();

      if (error) {
        console.error('Error fetching content from Supabase:', { message: error.message, details: error.details, hint: error.hint, code: error.code, status });
        if (status === 401 || status === 403) {
          console.error('Supabase request unauthorized. Check RLS policies and API key permissions.');
        }
        await loadFallbackContent();
      } else if (data && data.content_data) {
        setContent(data.content_data);
        localStorage.setItem('siteContent', JSON.stringify(data.content_data));
        console.log('Content fetched from Supabase and saved to localStorage.');
        setIsLoadingContent(false);
      } else {
        console.warn('No data received from Supabase for main_content. Loading fallback.');
        await loadFallbackContent();
      }
    } catch (fetchError) {
      console.error('Network or other error during fetchContent:', fetchError);
      await loadFallbackContent();
    }
  }, [loadFallbackContent]);

  useEffect(() => {
    fetchContent();
    
    const params = new URLSearchParams(window.location.search);
    if (params.get('editMode') === 'true') {
      setIsEditMode(true);
    }

    const handleStorageChange = (event) => {
      if (event.key === 'siteContent') {
         if (event.newValue) {
          setContent(JSON.parse(event.newValue));
         }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };

  }, [fetchContent]);

  const updateContent = async (path, newHtml) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      let current = newContent;
      const keys = path.split('.');
      keys.forEach((key, index) => {
        const arrayMatch = key.match(/^(.*)\[(\d+)\]$/);
        if (arrayMatch) {
          const arrayKey = arrayMatch[1];
          const arrayIndex = parseInt(arrayMatch[2]);
          if (!current[arrayKey]) current[arrayKey] = [];
          if (index === keys.length - 1) {
             current[arrayKey][arrayIndex] = newHtml;
          } else {
             if (!current[arrayKey][arrayIndex] || typeof current[arrayKey][arrayIndex] !== 'object') {
                current[arrayKey][arrayIndex] = {};
             }
             current = current[arrayKey][arrayIndex];
          }
        } else {
          if (index === keys.length - 1) {
            current[key] = newHtml;
          } else {
            if (!current[key] || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
          }
        }
      });

      localStorage.setItem('siteContent', JSON.stringify(newContent));
      
      if (window.supabaseUpdateTimeout) {
        clearTimeout(window.supabaseUpdateTimeout);
      }
      window.supabaseUpdateTimeout = setTimeout(async () => {
        try {
          const { error: updateError } = await supabase
            .from('site_content')
            .update({ content_data: newContent })
            .eq('id', 'main_content');
          if (updateError) {
            console.error('Error updating content in Supabase:', updateError);
          } else {
            console.log('Content updated in Supabase successfully');
          }
        } catch (e) {
            console.error('Failed to send update to Supabase:', e);
        }
      }, 1000);

      return newContent;
    });
  };
  
  const getValueByPath = (path, defaultValue) => {
    if (isLoadingContent && !Object.keys(content).length) {
      // If content is loading and empty, try to get initial value from children (passed as defaultValue)
      // This helps prevent flicker on initial load if Supabase is slow
      return defaultValue;
    }
    if (!content) return defaultValue;

    const keys = path.split('.');
    let current = content;
    for (const key of keys) {
      const arrayMatch = key.match(/^(.*)\[(\d+)\]$/);
      if (arrayMatch) {
        const arrayKey = arrayMatch[1];
        const arrayIndex = parseInt(arrayMatch[2]);
        if (current && typeof current === 'object' && arrayKey in current && Array.isArray(current[arrayKey]) && current[arrayKey][arrayIndex] !== undefined) {
          current = current[arrayKey][arrayIndex];
        } else {
          return defaultValue;
        }
      } else {
        if (current && typeof current === 'object' && key in current) {
          current = current[key];
        } else {
          return defaultValue;
        }
      }
    }
    return current !== undefined ? current : defaultValue;
  };


  return (
    <EditModeContext.Provider value={{ isEditMode, content, updateContent, getValueByPath, fetchContent, isLoadingContent }}>
      {children}
    </EditModeContext.Provider>
  );
};