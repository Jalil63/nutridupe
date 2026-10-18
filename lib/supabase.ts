import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || https://xnlcdizptoxlhcdgheea.supabase.co;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || sb_publishable_iF1etBRiRac5PHAudDW_KA_Wx1neLKQ;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
