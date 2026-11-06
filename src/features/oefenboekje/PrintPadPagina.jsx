// 🖨️ Werkblad van één leerpad — idee 60 (Mark 6 nov 2026: "goed idee").
//
// Aanleiding: Miguel vroeg via Charley om de oefening op papier, Brian oefent op
// werkbladen van school (verhoudingstabellen). Dit is de gratis, simpele versie van
// "printen": één leerpad → A4-bladen in de opmaak van het verhoudingstabellen-blad:
//   blad 1   zo werkt het: de uitleg per deel + een uitgewerkt voorbeeld
//   blad 2+  de vragen (max 20, antwoord omcirkelen, regel om uit te rekenen)
//   laatste  antwoorden met korte uitleg, voor wie nakijkt
// Bron = het leerpad zelf (zelfde helpers als het Oefenboekje op maat, dat de
// Familie-versie blijft: op maat uit de oefengeschiedenis). Kosten €0, geen AI.
// Route: /print/pad?werkblad=<id>  (niet ?pad=, dat is de globale leerpad-deeplink).
// Meten: padprint_open · padprint_print · padprint_pdf · padprint_link (PrintPadLink).
import { useEffect, useMemo, useState } from "react";
import { getLearnPath } from "../../learnPaths/pathLoaders.js";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";
import { track } from "../../utils.js";
import { schoon, bouwItems, eersteVoorbeeld } from "./OefenboekjePagina.jsx";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const MAX_VRAGEN = 20;
const PER_BLAD = 7;

function werkbladId() {
  try {
    const v = new URLSearchParams(window.location.search || "").get("werkblad") || "";
    return /^[A-Za-z0-9_-]{2,60}$/.test(v) ? v : "";
  } catch { return ""; }
}

// Uitleg van een deel: markdown-tekens weg, alinea's bewaren, niet eindeloos lang.
function alineas(tekst, max = 800) {
  const t = schoon(tekst).replace(/\n{3,}/g, "\n\n");
  const kort = t.length > max ? t.slice(0, max).replace(/\s+\S*$/, "") + " …" : t;
  return kort.split(/\n\s*\n/).map((a) => a.trim()).filter(Boolean);
}

function groepLabel(path) {
  const l = String(path?.level || "");
  const m = l.match(/groep\s*([\d-]+)/i);
  if (m) return "groep " + m[1];
  if (/klas|havo|vwo|vmbo/i.test(l)) return l.replace(/-/g, " ");
  return "";
}

export default function PrintPadPagina({ setPage }) {
  const id = useMemo(werkbladId, []);
  const [path, setPath] = useState(null);
  const [fout, setFout] = useState(false);
  const [naam, setNaam] = useState("");

  useEffect(() => {
    if (!id) { setFout(true); return; }
    let dood = false;
    getLearnPath(id).then((p) => { if (dood) return; if (!p) setFout(true); else setPath(p); }).catch(() => { if (!dood) setFout(true); });
    try { track("padprint_open", { pad: id }); } catch { /* */ }
    return () => { dood = true; };
  }, [id]);

  const items = useMemo(() => bouwItems(path, MAX_VRAGEN), [path]);
  const voorbeeld = useMemo(() => eersteVoorbeeld(path), [path]);
  const titel = path?.title ? schoon(path.title).split(/\s[—·]\s/)[0].trim() : "";
  const groep = groepLabel(path);
  const delen = (path?.steps || []).slice(0, 6);
  const bladen = [];
  for (let i = 0; i < items.length; i += PER_BLAD) bladen.push(items.slice(i, i + PER_BLAD));

  const terug = () => {
    try { if (window.history.length > 1) { window.history.back(); return; } } catch { /* */ }
    setPage && setPage("home");
  };

  const voet = (
    <div className="wb-voet">
      <span>Een kwartier per dag leren, een leven lang slimmer.</span>
      <span>leerkwartier.app{id ? ` · /leren/pad?id=${id}` : ""}</span>
    </div>
  );

  return (
    <div className="wb-wrap">
      <style>{`
        .wb-wrap{min-height:100vh;background:#eef2f7;color:#14283c;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;padding-bottom:40px}
        .wb-balk{position:sticky;top:0;z-index:5;background:#0d1b2e;color:#fff;padding:10px 16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
        .wb-balk b{font-size:16px;margin-right:auto}
        .wb-balk button.terug{border:none;background:rgba(255,255,255,.14);color:#fff;border-radius:999px;padding:8px 14px;font-weight:800;cursor:pointer}
        .wb-balk input{padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:#fff;font-size:14px;width:150px}
        .wb-balk input::placeholder{color:rgba(255,255,255,.55)}
        .wb-blad{background:#fff;width:210mm;min-height:296mm;margin:16px auto;padding:16mm 16mm 14mm;box-shadow:0 2px 14px rgba(0,0,0,.12);position:relative;page-break-after:always;color:#14283c}
        .wb-blad:last-of-type{page-break-after:auto}
        .wb-kop{display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #14283c;padding-bottom:6px;margin-bottom:12px;gap:12px}
        .wb-kop h1{font-size:19px;margin:0}
        .wb-kop span{font-size:12px;color:#5a6775;white-space:nowrap}
        .wb-naam{font-size:13px;margin:0 0 14px;color:#3a4658}
        .wb-naam i{display:inline-block;border-bottom:1px solid #14283c;width:170px;height:14px;vertical-align:bottom;margin:0 14px 0 4px;font-style:normal}
        .wb-blad h2{font-size:15px;margin:14px 0 4px;color:#1f4a1d}
        .wb-blad p{font-size:13px;line-height:1.5;margin:0 0 7px}
        .wb-vb{background:#f2f8ec;border:1.5px solid #bcd99a;border-radius:10px;padding:10px 12px;margin:6px 0 12px;font-size:13px;line-height:1.5}
        .wb-opg{margin:0 0 16px;page-break-inside:avoid}
        .wb-opg .nr{display:inline-block;width:22px;height:22px;border-radius:50%;background:#14283c;color:#fff;font-weight:800;text-align:center;line-height:22px;font-size:12.5px;margin-right:6px}
        .wb-opg .vraag{font-size:14px;font-weight:700;display:inline}
        .wb-opties{display:grid;grid-template-columns:1fr 1fr;gap:4px 18px;margin:8px 0 0 28px;font-size:13.5px}
        .wb-lijn{border-bottom:1px dotted #9aa7ba;height:22px;margin:8px 0 0 28px}
        .wb-ant{font-size:13px;line-height:1.5;margin:0 0 8px}
        .wb-ant b{color:#1f4a1d}
        .wb-tip{font-size:12.5px;color:#5a6775;border-left:3px solid #ffd54f;padding-left:8px;margin:8px 0 0}
        .wb-voet{position:absolute;left:16mm;right:16mm;bottom:8mm;font-size:11px;color:#5a6775;display:flex;justify-content:space-between;border-top:1px solid #d5dbe4;padding-top:5px}
        .wb-melding{max-width:560px;margin:40px auto;background:#fff;border-radius:12px;padding:20px}
        @media screen and (max-width:760px){.wb-blad{width:100%;min-height:0;padding:14px 12px;margin:10px 0}.wb-voet{position:static;margin-top:16px}.wb-opties{grid-template-columns:1fr}}
        @media print{
          body *{visibility:hidden!important}
          .wb-print,.wb-print *{visibility:visible!important}
          .wb-print{position:absolute;left:0;top:0;width:100%}
          .wb-wrap{background:#fff;padding:0}.wb-balk{display:none!important}
          .wb-blad{width:auto;min-height:0;margin:0;padding:12mm 14mm 16mm;box-shadow:none}
          .wb-voet{position:static;margin-top:14px}
          @page{size:A4;margin:0}
        }
      `}</style>

      <div className="wb-balk">
        <button type="button" className="terug" onClick={terug}>← Terug</button>
        <b>🖨️ Werkblad{titel ? `: ${titel}` : ""}</b>
        <input value={naam} onChange={(e) => setNaam(e.target.value.slice(0, 30))} placeholder="Naam op het blad" aria-label="Naam op het blad" />
        {items.length > 0 && <PrintKnoppen trackPrefix="padprint" trackProps={{ pad: id, n: items.length }} />}
      </div>

      {fout && (
        <div className="wb-melding">
          <b>Dit leerpad kon niet geladen worden.</b>
          <p style={{ margin: "6px 0 0", fontSize: 14 }}>Ga terug naar het leerpad en tik daar opnieuw op "Print dit leerpad".</p>
        </div>
      )}
      {!fout && !path && <div className="wb-melding">Werkblad wordt gemaakt…</div>}

      {path && (
        <div className="wb-print">
          {/* Blad 1: zo werkt het */}
          <section className="wb-blad">
            <div className="wb-kop"><h1>{titel} — zo werkt het</h1><span>Leerkwartier{groep ? ` · ${groep}` : ""}</span></div>
            <p className="wb-naam">Naam: <i>{naam ? " " + naam : ""}</i> Datum: <i></i></p>
            {delen.map((st, i) => (
              <div key={i}>
                <h2>{i + 1}. {schoon(st.title)}</h2>
                {alineas(st.explanation).map((a, k) => <p key={k}>{a}</p>)}
              </div>
            ))}
            {voorbeeld && (
              <>
                <h2>Uitgewerkt voorbeeld</h2>
                <div className="wb-vb">{voorbeeld}</div>
              </>
            )}
            <p className="wb-tip">Tip: lees eerst de uitleg, maak dan de vragen op de volgende bladen. Snap je iets niet? In de app staat bij elke vraag "Hulp bij deze vraag" op drie niveaus.</p>
            {voet}
          </section>

          {/* Vragen */}
          {bladen.map((blad, b) => (
            <section className="wb-blad" key={b}>
              <div className="wb-kop"><h1>{titel} — vragen</h1><span>blad {b + 2}{bladen.length > 1 ? ` · vragen ${b * PER_BLAD + 1}-${b * PER_BLAD + blad.length}` : ""}</span></div>
              {b === 0 && <p className="wb-naam">Zet een rondje om het goede antwoord. Op de stippellijn kun je uitrekenen of uitleggen.</p>}
              {blad.map((it, i) => {
                const nr = b * PER_BLAD + i + 1;
                return (
                  <div className="wb-opg" key={nr}>
                    <span className="nr">{nr}</span><span className="vraag">{it.vraag}</span>
                    <div className="wb-opties">
                      {it.opties.map((o, j) => <div key={j}><b>{LETTERS[j]}.</b> {o}</div>)}
                    </div>
                    <div className="wb-lijn" />
                  </div>
                );
              })}
              {voet}
            </section>
          ))}

          {/* Antwoorden */}
          <section className="wb-blad">
            <div className="wb-kop"><h1>{titel} — antwoorden</h1><span>voor wie nakijkt</span></div>
            <p className="wb-naam">Bij elke vraag het goede antwoord en, waar het helpt, één zin uitleg.</p>
            {items.map((it, i) => (
              <div className="wb-ant" key={i}>
                <b>{i + 1}. {LETTERS[it.goedIdx]} — {it.goedTekst}</b>
                {it.uitleg && <span style={{ color: "#3a4658" }}> · {it.uitleg}</span>}
              </div>
            ))}
            {voet}
          </section>
        </div>
      )}
    </div>
  );
}
