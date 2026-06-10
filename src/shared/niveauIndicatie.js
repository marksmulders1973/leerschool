// Niveau-indicatie "onder voorbehoud" — B6 (Mark-besluit 2026-06-10).
//
// HARDE PRODUCTREGELS (niet onderhandelbaar, zie memory bugjacht-20260610):
//  1. Dit wordt NOOIT aan het kind getoond. Alleen in de wekelijkse OUDER-mail.
//     Geen import van deze module in UI-componenten.
//  2. Altijd "onder voorbehoud" + de "zo komen we hieraan"-uitleg erbij
//     (gebruik maakOuderMailSectie(), die bevat beide verplicht).
//  3. Geen giswerk: indicatie verschijnt alléén bij voldoende beantwoorde,
//     referentieniveau-getagde vragen per onderdeel (MIN_VRAGEN). Anders
//     geeft de mail eerlijk "nog te vroeg voor een indicatie".
//
// METHODE (transparant, gebaseerd op publieke informatie):
//  - De echte Doorstroomtoets telt alleen lezen, taalverzorging en rekenen.
//  - Publieke IEP-weging in het toetsadvies: rekenen 45% / lezen 30% /
//    taalverzorging 25% (bron: Bureau ICE-helpartikel, geverifieerd 2026-06-10).
//  - Vragen dragen een referentieniveau-tag: "1F" (fundamenteel) of "S"
//    (= 2F taal / 1S rekenen, het streefniveau).
//  - Beheersing 1F en S per onderdeel → gewogen somscore → bandbreedte van
//    twee aangrenzende officiële toetsadvies-categorieën.
//  - De ECHTE normering (CvTE-cesuren) is bewust niet openbaar; dit is dus
//    nadrukkelijk een indicatie op basis van referentieniveau-beheersing,
//    géén nabootsing van de officiële berekening.

export const MIN_VRAGEN = 20; // per onderdeel, anders geen indicatie

export const CATEGORIEEN = [
  "pro / vmbo-basis",
  "vmbo-basis / kader",
  "vmbo-kader / gl-tl",
  "vmbo-gl-tl / havo",
  "havo / vwo",
  "vwo",
];

const WEGING = { rekenen: 0.45, lezen: 0.30, taalverzorging: 0.25 };

// Somscore (0..1) → index in CATEGORIEEN. Drempels gedocumenteerd:
// score = 0.5 × 1F-beheersing + 0.5 × S-beheersing per onderdeel, gewogen
// over de onderdelen. 1F vrijwel volledig beheerst zonder S ≈ 0.5 → midden;
// ook S grotendeels beheerst → richting havo/vwo en vwo.
const DREMPELS = [0.30, 0.45, 0.58, 0.70, 0.82]; // grenzen tussen de 6 categorieën

export function berekenIndicatie(resultaten) {
  // resultaten: { rekenen|lezen|taalverzorging: { f1: {goed, totaal}, s: {goed, totaal} } }
  const onderdelen = Object.keys(WEGING);
  const tekort = [];
  let somscore = 0;

  for (const o of onderdelen) {
    const r = resultaten?.[o];
    const f1t = r?.f1?.totaal || 0;
    const st = r?.s?.totaal || 0;
    if (f1t + st < MIN_VRAGEN) {
      tekort.push({ onderdeel: o, gemaakt: f1t + st, nodig: MIN_VRAGEN });
      continue;
    }
    const f1 = f1t > 0 ? (r.f1.goed || 0) / f1t : 0;
    const s = st > 0 ? (r.s.goed || 0) / st : 0;
    somscore += WEGING[o] * (0.5 * f1 + 0.5 * s);
  }

  if (tekort.length > 0) {
    return { betrouwbaar: false, tekort, indicatie: null };
  }

  let idx = 0;
  for (const d of DREMPELS) { if (somscore >= d) idx++; }
  // Bandbreedte: de gevonden categorie + de aangrenzende richting de drempel
  // waar de score het dichtst bij ligt (eerlijker dan één hard label).
  const onder = idx > 0 ? DREMPELS[idx - 1] : 0;
  const boven = idx < DREMPELS.length ? DREMPELS[idx] : 1;
  const buurIdx = (somscore - onder) < (boven - somscore)
    ? Math.max(0, idx - 1)
    : Math.min(CATEGORIEEN.length - 1, idx + 1);
  const band = [...new Set([CATEGORIEEN[Math.min(idx, buurIdx)], CATEGORIEEN[Math.max(idx, buurIdx)]])];

  return { betrouwbaar: true, tekort: [], somscore, indicatie: band };
}

// Verplichte mail-sectie: indicatie (of "te vroeg") + onder-voorbehoud +
// hoe-komen-we-hieraan. Alleen voor de OUDER-mail gebruiken.
export function maakOuderMailSectie(resultaten) {
  const uit = berekenIndicatie(resultaten);
  const uitlegBlok = `
    <p style="font-size:12px;color:#667;line-height:1.6;border-top:1px solid #ddd;padding-top:10px">
      <strong>Zo komen we aan deze indicatie:</strong> we kijken per onderdeel
      (rekenen, lezen, taalverzorging — de drie onderdelen die op de echte
      Doorstroomtoets tellen) hoe goed de vragen op fundamenteel niveau (1F) en
      streefniveau (2F/1S) gemaakt zijn, en wegen dat zoals toetsaanbieders dat
      publiek beschrijven (rekenen het zwaarst). <strong>Belangrijk:</strong> de
      officiële normering is niet openbaar en de echte toets meet anders (o.a.
      adaptief). Dit is dus een hulpmiddel om samen te oefenen — géén voorspelling.
      Alleen de echte toets telt, en een schooladvies kan bovendien alleen
      <em>omhoog</em> worden bijgesteld.
    </p>`;

  if (!uit.betrouwbaar) {
    const rijen = uit.tekort
      .map((t) => `${t.onderdeel} (${t.gemaakt} van de ${t.nodig} vragen)`)
      .join(", ");
    return `
      <h3 style="margin:18px 0 6px">Niveau-indicatie: nog even te vroeg</h3>
      <p style="line-height:1.6">We geven pas een indicatie als er per onderdeel
      genoeg geoefend is — anders zou het giswerk zijn. Nog te oefenen:
      ${rijen}. Lekker bezig, het komt vanzelf!</p>${uitlegBlok}`;
  }

  const band = uit.indicatie.join(" tot ");
  return `
    <h3 style="margin:18px 0 6px">Niveau-indicatie — onder voorbehoud</h3>
    <p style="line-height:1.6">Op basis van het oefenwerk tot nu toe wijst de
    richting naar: <strong>${band}</strong>. Dit is nadrukkelijk een indicatie
    onder voorbehoud — bedoeld om te zien waar extra oefenen het meest helpt,
    niet als oordeel over uw kind.</p>${uitlegBlok}`;
}
