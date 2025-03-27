import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qisntpqaaiggclirmsdt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpc250cHFhYWlnZ2NsaXJtc2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzODI0MjQsImV4cCI6MjA1Njk1ODQyNH0.l4zwxfw_mLznKIKxj6LB2A-bIhpyC-VLya0atBdSGhE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
