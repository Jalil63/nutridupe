import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_ACTUAL_SUPABASE_PROJECT_URL';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_ACTUAL_SUPABASE_PUBLISHABLE_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
