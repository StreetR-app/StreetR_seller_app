// js/supabaseClient.js
const SUPABASE_URL = 'https://qdmlbedacymowcgtykvm.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbWxiZWRhY3ltb3djZ3R5a3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNjMwOTUsImV4cCI6MjA2NDgzOTA5NX0.oQ98WG4hXtlwTUaj5Aj9R6UVHPZvgR0iQnhxuVtVfRc'; // Replace with your Supabase Anon Key

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("Supabase URL or Anon Key is missing. Please check your supabaseClient.js file.");
    alert("Application is not configured correctly. Supabase credentials missing.");
}

const supabase = self.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Expose supabase client globally or export it if using modules
window.supabase = supabase;
