import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvqryvsmjnsrypsgwflf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cXJ5dnNtam5zcnlwc2d3ZmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzU2MDQsImV4cCI6MjA2MzYxMTYwNH0.UEKDVn1RV80uEXOG-V9hvydGw_qTDIMrKSLogdpvn5Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: (...args) => fetch(...args),
  },
});