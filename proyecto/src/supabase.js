// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://xyjsnvdgfglneegrppsu.supabase.co';
const supabaseKey = 'sb_publishable_lfwhkPSu4Pj2PxMvTHJh2g_LRyr5q0T';
export const supabase = createClient(supabaseUrl, supabaseKey);