// Voortgang van een kind ZONDER naam, uit wat dit apparaat al bewaart (Mark 14 okt 2026:
// "bouw Mijn pagina ook voor kinderen zonder naam"). In 28 dagen had 52% van de oefenende
// kinderen geen naam en zag op /mijn de lege pagina, terwijl de voortgang gewoon op het
// apparaat stond. Bronnen (allemaal localStorage, geen server):
//   lk_gezien_v1  - sleutel "pathId|hash" per beantwoorde vraag (geziendeVragen.js)
//   lk_lp_klaar   - { pathId: [stepIdx, ...] } afgeronde delen (LearnPath.jsx, naamloos)
//   lk_leertijd_<ymd> - oefenseconden per dag
// `storage` is injecteerbaar voor tests.

function leesJson(storage, key) {
  try { const raw = storage.getItem(key); const o = raw ? JSON.parse(raw) : null; return o && typeof o === "object" ? o : {}; } catch { return {}; }
}

export function ymdVan(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function leesGastVoortgang(manifest, storage = globalThis.localStorage, nu = new Date()) {
  if (!storage) return { heeftIets: false, vragen: 0, delenAf: 0, paden: [], perVak: [], padenAf: [], minutenVandaag: 0, minutenWeek: 0 };
  const perPad = {};
  const gezien = leesJson(storage, "lk_gezien_v1");
  for (const sleutel of Object.keys(gezien)) {
    const i = sleutel.indexOf("|"); if (i <= 0) continue;
    const id = sleutel.slice(0, i);
    perPad[id] = perPad[id] || { vragen: 0, delen: [] };
    perPad[id].vragen += 1;
  }
  const klaar = leesJson(storage, "lk_lp_klaar");
  for (const [id, delen] of Object.entries(klaar)) {
    if (!Array.isArray(delen)) continue;
    perPad[id] = perPad[id] || { vragen: 0, delen: [] };
    perPad[id].delen = [...new Set(delen.filter((n) => Number.isInteger(n)))];
  }
  const byId = {}; (manifest || []).forEach((m) => { if (m && m.id) byId[m.id] = m; });
  const paden = Object.entries(perPad)
    .filter(([id]) => byId[id])
    .map(([id, v]) => ({
      id, title: byId[id].title || id, emoji: byId[id].emoji || "", subject: byId[id].subject || "anders",
      stepCount: byId[id].stepCount || 0, delenAf: v.delen.length, vragen: v.vragen,
      af: byId[id].stepCount > 0 && v.delen.length >= byId[id].stepCount,
    }))
    .sort((a, b) => (b.vragen + b.delenAf * 5) - (a.vragen + a.delenAf * 5));
  const vak = {};
  for (const p of paden) {
    vak[p.subject] = vak[p.subject] || { subj: p.subject, vragen: 0, delenAf: 0, paden: 0, padenAf: 0 };
    vak[p.subject].vragen += p.vragen; vak[p.subject].delenAf += p.delenAf; vak[p.subject].paden += 1; if (p.af) vak[p.subject].padenAf += 1;
  }
  const perVak = Object.values(vak).sort((a, b) => b.vragen - a.vragen);
  const sec = (d) => { try { return parseInt(storage.getItem(`lk_leertijd_${ymdVan(d)}`) || "0", 10) || 0; } catch { return 0; } };
  const minutenVandaag = Math.round(sec(nu) / 60);
  let weekSec = 0; for (let i = 0; i < 7; i++) weekSec += sec(new Date(nu.getTime() - i * 86400000));
  const vragen = paden.reduce((a, p) => a + p.vragen, 0);
  const delenAf = paden.reduce((a, p) => a + p.delenAf, 0);
  return {
    heeftIets: vragen > 0 || delenAf > 0 || minutenVandaag > 0,
    vragen, delenAf, paden, perVak, padenAf: paden.filter((p) => p.af),
    minutenVandaag, secondenVandaag: sec(nu), minutenWeek: Math.round(weekSec / 60),
  };
}
