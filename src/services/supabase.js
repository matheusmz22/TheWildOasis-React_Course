import {createClient} from "@supabase/supabase-js";
export const supabaseUrl = "https://zpqvekmiyjkykqvjscub.supabase.co";

// Safe because of Row Level Security
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwcXZla21peWpreWtxdmpzY3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNTMzMTcsImV4cCI6MjA2OTkyOTMxN30.wsxvlcWLmx6aORvBsX1nEmNQPxxwoFwKSmD7WXSG2Gg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
