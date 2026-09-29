// 🕵️ Bedrieger-kamer: meedoen met een code van 4 cijfers (Mark 29 sep 2026: "andere mensen
// kunnen die code in hun tandwiel invoeren en joinen jouw lobby").
// Eén Supabase Realtime-kanaal per code: presence = wie zit er in de kamer (naam + wie de leider
// is), broadcast = de spelberichten van de leider (start/uitslag/park) en de antwoorden van gasten.
// Geen database, geen chat: een kamer bestaat zolang de leider het tabblad open heeft.
import supabase from "../../../supabase";

export function verbindKamer({ code, id, naam, host, on = {} }) {
  const channel = supabase.channel(`bedrieger:${code}`, { config: { broadcast: { self: false }, presence: { key: id } } });
  let spelers = [];
  channel.on("broadcast", { event: "k" }, ({ payload }) => {
    if (!payload || payload.c === id || !payload.d) return;
    on.bericht?.(payload.c, payload.d);
  });
  channel.on("presence", { event: "sync" }, () => {
    const st = channel.presenceState();
    spelers = Object.entries(st).map(([k, lijst]) => {
      const p = Array.isArray(lijst) ? lijst[0] : lijst;
      return { id: k, naam: p?.naam || "Speler", host: !!p?.host, t: p?.t || 0 };
    }).sort((a, b) => (b.host - a.host) || (a.t - b.t));
    on.spelers?.(spelers);
  });
  channel.subscribe(async (status, err) => {
    on.status?.(status, err);
    if (status === "SUBSCRIBED") { try { await channel.track({ naam, host, t: Date.now() }); } catch { /* */ } }
  });
  return {
    send: (d) => { try { channel.send({ type: "broadcast", event: "k", payload: { c: id, d } }); } catch { /* */ } },
    spelers: () => spelers,
    close: () => { try { supabase.removeChannel(channel); } catch { /* */ } },
  };
}

/** Stabiel id van deze speler binnen dit tabblad: kamer én park gebruiken hetzelfde, zodat de rol uit de loting meegaat. */
export function kamerSpelerId() {
  try {
    let v = sessionStorage.getItem("lk_bedrieger_id");
    if (!v) { v = "k_" + Math.random().toString(36).slice(2, 10); sessionStorage.setItem("lk_bedrieger_id", v); }
    return v;
  } catch { return "k_" + Math.random().toString(36).slice(2, 10); }
}
