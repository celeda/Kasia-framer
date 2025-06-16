
import React, { useRef, useEffect, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { useEditMode } from './EditModeContext';
import parse, { domToReact } from 'html-react-parser';

export const ContentEditableProvider = ({ children, isEditMode }) => {
  return children; 
};

export const EditableElement = ({ path, children, elementType = 'div', ...props }) => {
  const { isEditMode, updateContent, getValueByPath } = useEditMode();
  const originalHtmlRef = useRef(React.Children.map(children, child => typeof child === 'string' ? child : '').join(''));
  
  const [currentHtml, setCurrentHtml] = useState(() => {
    const value = getValueByPath(path, originalHtmlRef.current);
    return typeof value === 'string' ? value : originalHtmlRef.current;
  });

  useEffect(() => {
    const value = getValueByPath(path, originalHtmlRef.current);
    const newHtml = typeof value === 'string' ? value : originalHtmlRef.current;
    if (newHtml !== currentHtml) {
      setCurrentHtml(newHtml);
    }
  }, [getValueByPath, path, currentHtml, originalHtmlRef]);

  const handleChange = (e) => {
    const newHtml = e.target.value;
    setCurrentHtml(newHtml);
    updateContent(path, newHtml);
  };

  const handleBlur = () => {
     updateContent(path, currentHtml);
  };

  const parseOptions = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'strong') {
        return <strong>{domToReact(domNode.children, parseOptions)}</strong>;
      }
      if (domNode.attribs && domNode.name === 'br') {
        return <br />;
      }
    }
  };

  if (isEditMode) {
    const Tag = elementType;
    return (
      <ContentEditable
        html={currentHtml}
        disabled={!isEditMode}
        onChange={handleChange}
        onBlur={handleBlur}
        tagName={elementType}
        {...props}
        className={`${props.className || ''} relative outline-dashed outline-1 outline-blue-500 focus:outline-solid focus:outline-2 editable-element`}
      />
    );
  }

  const Tag = elementType;
  return <Tag {...props}>{parse(currentHtml, parseOptions)}</Tag>;
};
