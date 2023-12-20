import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ujsqxqiyxkkmzhwmlllg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc3F4cWl5eGtrbXpod21sbGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDA2NTYsImV4cCI6MjAxMjA3NjY1Nn0.He5v-fp4TzlrcY14wU2RbU6gT7ARhGyLkhDbz5h2ToU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
