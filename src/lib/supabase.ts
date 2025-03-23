import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pugizycvhnhatbnyhauv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1Z2l6eWN2aG5oYXRibnloYXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjkxNTIsImV4cCI6MjA1ODI0NTE1Mn0.BkVZelS5TWAdquaW8CvFLwgqDAROBC9XJhl5zAktOpM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
}); 