import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = (url && key)
  ? createClient(url, key)
  : { from: () => ({ insert: () => Promise.resolve({}), select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: new Error("Supabase niet geconfigureerd") }) }) }) }) };

export default supabase;
