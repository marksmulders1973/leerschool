import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fallback-stub bij ontbrekende env-vars. Les van de rempahuis-storing
// (8 jul 2026): de stub miste .rpc, waardoor één aanroep (HomePage
// get_visitor_count) de HELE app liet crashen ("q.rpc is not a function")
// toen een build per ongeluk op een project zonder env-vars draaide.
// De stub moet dus alle gebruikte client-methodes netjes nabootsen:
// altijd { data: null, error } teruggeven, nooit throwen.
const _stubErr = () => ({ data: null, error: new Error("Supabase niet geconfigureerd") });
// Chainbare, thenable query-stub: elke builder-methode geeft zichzelf terug,
// await-en levert altijd { data: null, error } op (zoals supabase-js).
const _stubQuery = () => {
  const q = {};
  for (const m of ["select", "insert", "upsert", "update", "delete", "eq", "neq", "in", "is", "or", "not", "gte", "lte", "gt", "lt", "ilike", "like", "match", "filter", "contains", "order", "limit", "range", "single", "maybeSingle", "csv"]) {
    q[m] = () => q;
  }
  q.then = (resolve, reject) => Promise.resolve(_stubErr()).then(resolve, reject);
  return q;
};
const supabase = (url && key)
  ? createClient(url, key)
  : {
      from: _stubQuery,
      rpc: () => Promise.resolve(_stubErr()),
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signOut: () => Promise.resolve({ error: null }),
        signInWithOAuth: () => Promise.resolve(_stubErr()),
      },
      storage: { from: () => ({ upload: () => Promise.resolve(_stubErr()), getPublicUrl: () => ({ data: { publicUrl: "" } }) }) },
      channel: () => ({ on: function () { return this; }, subscribe: () => ({ unsubscribe: () => {} }) }),
      removeChannel: () => {},
    };

export default supabase;
