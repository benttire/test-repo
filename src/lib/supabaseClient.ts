import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xzytbiukrjdolrymcmrd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6eXRiaXVrcmpkb2xyeW1jbXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjQxMTEsImV4cCI6MjA2Mzg0MDExMX0.oEf2LfJLGBP_cNWhAAuGicUT8lXS1vI-ayhIBs8vN0k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);