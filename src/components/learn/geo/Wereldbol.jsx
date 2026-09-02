// Wereldbol — interactieve 3D-aardbol (Mark-idee 16 jun 2026, uitgebreid 17 jun).
//
// Drie modi (prop `modus`), elk met twee standen (ontdekken / oefenen):
//   • "werelddeel" — de 7 continenten herkennen / aanwijzen.
//   • "land"       — landen herkennen / aanwijzen (continent als context).
//   • "hoofdstad"  — hoofdsteden (zwarte stippen) bij hun land leren / aanwijzen.
//
// Ontdek-stand: vrij draaien + tikken → de bol vertelt wat je aantikte (geen score).
// Oefen-stand: bol staat stil, bovenaan een opdracht ("Wijs Egypte aan" /
//   "Klik op de hoofdstad van Nederland") → tik de juiste plek op de bol.
//
// Zelf-bevattend: geen externe foto-textuur. We tekenen de wereldkaart op een
// canvas (Natural Earth, publiek domein) en plakken die op een Three.js-bol.
// Klik-detectie gebeurt via punt-in-polygoon op lengte/breedtegraad (uv → lng/lat),
// dus onafhankelijk van wat er op de textuur staat.
//
// Contract: <Wereldbol modus="land" onAnswer={(correct, naam) => ...} />

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ── Werelddelen: kleur + nette naam ──────────────────────────────────────────
const CONTINENTEN = {
  afrika:          { naam: "Afrika",         kleur: "#f0a030" },
  europa:          { naam: "Europa",         kleur: "#5bd16a" },
  azie:            { naam: "Azië",           kleur: "#e85c5c" },
  "noord-amerika": { naam: "Noord-Amerika",  kleur: "#f2d24b" },
  "zuid-amerika":  { naam: "Zuid-Amerika",   kleur: "#a07bf0" },
  oceanie:         { naam: "Oceanië",        kleur: "#ff8fb0" },
  antarctica:      { naam: "Antarctica",     kleur: "#e6eef4" },
};
const OCEAAN = "#15384f";

// Welke naam-overrides (landen die een box verkeerd zou indelen)
const OVERRIDES = {
  Russia: "azie", Iceland: "europa", Greenland: "noord-amerika", Turkey: "azie",
  Cyprus: "europa", Malta: "europa", Indonesia: "azie", "Papua New Guinea": "oceanie",
  "New Zealand": "oceanie", Australia: "oceanie", Fiji: "oceanie", Georgia: "azie",
  Armenia: "azie", Azerbaijan: "azie", Kazakhstan: "azie", Egypt: "afrika",
  "East Timor": "azie", "New Caledonia": "oceanie", "Solomon Is.": "oceanie",
  Vanuatu: "oceanie", Antarctica: "antarctica", "Fr. S. Antarctic Lands": "antarctica",
  // Midden-Oosten = Azië (ligt lng<60, lat<36 → zou anders Afrika worden)
  "Saudi Arabia": "azie", Yemen: "azie", Oman: "azie", "United Arab Emirates": "azie",
  Qatar: "azie", Kuwait: "azie", Iraq: "azie", Iran: "azie", Jordan: "azie",
  Israel: "azie", Lebanon: "azie", Syria: "azie", Palestine: "azie", Bahrain: "azie",
};

// Grove indeling van een land in een werelddeel op basis van het zwaartepunt.
function classify(naam, lat, lng) {
  if (OVERRIDES[naam]) return OVERRIDES[naam];
  if (lat < -55) return "antarctica";
  if (lng >= -170 && lng <= -30) {
    if (lat >= 13) return "noord-amerika";
    if (lat >= 7 && lng <= -77) return "noord-amerika"; // Midden-Amerika
    return "zuid-amerika";
  }
  if (lng < -170) return "oceanie";
  if (lng < 60) return lat >= 36 ? "europa" : "afrika";
  if (lat <= 0 && lng >= 110) return "oceanie";
  return "azie";
}

// ── Landnamen (breed) ─────────────────────────────────────────────────────────
// Sleutel = Engelse naam uit world-atlas. Waarde = Nederlandse naam.
// Voor de landnamen op de kaart + de "welk land?"-modus. Veel landen benoemd.
const LAND_NL = {
  Afghanistan: "Afghanistan", Angola: "Angola", Albania: "Albanië",
  "United Arab Emirates": "Ver. Arabische Emiraten", Argentina: "Argentinië", Armenia: "Armenië",
  Australia: "Australië", Austria: "Oostenrijk", Azerbaijan: "Azerbeidzjan",
  Burundi: "Burundi", Belgium: "België", Benin: "Benin", "Burkina Faso": "Burkina Faso",
  Bangladesh: "Bangladesh", Bulgaria: "Bulgarije", Bahamas: "Bahama's",
  "Bosnia and Herz.": "Bosnië-Herz.", Belarus: "Wit-Rusland", Belize: "Belize",
  Bolivia: "Bolivia", Brazil: "Brazilië", Brunei: "Brunei", Bhutan: "Bhutan", Botswana: "Botswana",
  "Central African Rep.": "Centr.-Afrik. Rep.", Canada: "Canada", Switzerland: "Zwitserland",
  Chile: "Chili", China: "China", "Côte d'Ivoire": "Ivoorkust", Cameroon: "Kameroen",
  "Dem. Rep. Congo": "DR Congo", Congo: "Congo", Colombia: "Colombia", "Costa Rica": "Costa Rica",
  Cuba: "Cuba", Cyprus: "Cyprus", Czechia: "Tsjechië", "Czech Rep.": "Tsjechië",
  Germany: "Duitsland", Djibouti: "Djibouti", Denmark: "Denemarken", "Dominican Rep.": "Dominic. Rep.",
  Algeria: "Algerije", Ecuador: "Ecuador", Egypt: "Egypte", Eritrea: "Eritrea", Spain: "Spanje",
  Estonia: "Estland", Ethiopia: "Ethiopië", Finland: "Finland", Fiji: "Fiji", France: "Frankrijk",
  Gabon: "Gabon", "United Kingdom": "Ver. Koninkrijk", Georgia: "Georgië", Ghana: "Ghana",
  Guinea: "Guinee", Gambia: "Gambia", Greece: "Griekenland", Greenland: "Groenland",
  Guatemala: "Guatemala", Guyana: "Guyana", Honduras: "Honduras", Croatia: "Kroatië",
  Haiti: "Haïti", Hungary: "Hongarije", Indonesia: "Indonesië", India: "India", Ireland: "Ierland",
  Iran: "Iran", Iraq: "Irak", Iceland: "IJsland", Israel: "Israël", Italy: "Italië",
  Jamaica: "Jamaica", Jordan: "Jordanië", Japan: "Japan", Kazakhstan: "Kazachstan", Kenya: "Kenia",
  Kyrgyzstan: "Kirgizië", Cambodia: "Cambodja", "South Korea": "Zuid-Korea", Korea: "Zuid-Korea",
  "North Korea": "Noord-Korea", Kosovo: "Kosovo", Kuwait: "Koeweit", "Lao PDR": "Laos", Laos: "Laos",
  Lebanon: "Libanon", Liberia: "Liberia", Libya: "Libië", "Sri Lanka": "Sri Lanka", Lesotho: "Lesotho",
  Lithuania: "Litouwen", Luxembourg: "Luxemburg", Latvia: "Letland", Morocco: "Marokko",
  Moldova: "Moldavië", Madagascar: "Madagaskar", Mexico: "Mexico", Macedonia: "N.-Macedonië",
  "North Macedonia": "N.-Macedonië", Mali: "Mali", Myanmar: "Myanmar", Montenegro: "Montenegro",
  Mongolia: "Mongolië", Mozambique: "Mozambique", Mauritania: "Mauritanië", Malawi: "Malawi",
  Malaysia: "Maleisië", Namibia: "Namibië", Niger: "Niger", Nigeria: "Nigeria", Nicaragua: "Nicaragua",
  Netherlands: "Nederland", Norway: "Noorwegen", Nepal: "Nepal", "New Zealand": "Nieuw-Zeeland",
  Oman: "Oman", Pakistan: "Pakistan", Panama: "Panama", Peru: "Peru", Philippines: "Filipijnen",
  "Papua New Guinea": "Papoea-N.-Guinea", Poland: "Polen", Portugal: "Portugal", Paraguay: "Paraguay",
  Qatar: "Qatar", Romania: "Roemenië", Russia: "Rusland", Rwanda: "Rwanda",
  "Saudi Arabia": "Saoedi-Arabië", Sudan: "Soedan", "S. Sudan": "Zuid-Soedan", Senegal: "Senegal",
  "Sierra Leone": "Sierra Leone", "El Salvador": "El Salvador", Somalia: "Somalië", Serbia: "Servië",
  Suriname: "Suriname", Slovakia: "Slowakije", Slovenia: "Slovenië", Sweden: "Zweden", Syria: "Syrië",
  Chad: "Tsjaad", Togo: "Togo", Thailand: "Thailand", Tajikistan: "Tadzjikistan",
  Turkmenistan: "Turkmenistan", "Timor-Leste": "Oost-Timor", "East Timor": "Oost-Timor",
  Tunisia: "Tunesië", Turkey: "Turkije", Taiwan: "Taiwan", Tanzania: "Tanzania", Uganda: "Oeganda",
  Ukraine: "Oekraïne", Uruguay: "Uruguay", "United States of America": "Verenigde Staten",
  "United States": "Verenigde Staten", Uzbekistan: "Oezbekistan", Venezuela: "Venezuela",
  Vietnam: "Vietnam", Yemen: "Jemen", "South Africa": "Zuid-Afrika", Zambia: "Zambia",
  Zimbabwe: "Zimbabwe",
};

// ── Hoofdsteden ───────────────────────────────────────────────────────────────
// Sleutel = Engelse naam. Waarde = [NL-naam, hoofdstad, lat, lng].
// Subset met een onomstreden hoofdstad → die krijgen een stip + hoofdstad-vraag.
const HOOFDSTEDEN = {
  // Europa
  "Netherlands": ["Nederland", "Amsterdam", 52.37, 4.90], "Belgium": ["België", "Brussel", 50.85, 4.35],
  "France": ["Frankrijk", "Parijs", 48.85, 2.35], "Germany": ["Duitsland", "Berlijn", 52.52, 13.40],
  "Spain": ["Spanje", "Madrid", 40.42, -3.70], "Portugal": ["Portugal", "Lissabon", 38.72, -9.14],
  "Italy": ["Italië", "Rome", 41.90, 12.50], "United Kingdom": ["Verenigd Koninkrijk", "Londen", 51.51, -0.13],
  "Ireland": ["Ierland", "Dublin", 53.35, -6.26], "Switzerland": ["Zwitserland", "Bern", 46.95, 7.45],
  "Austria": ["Oostenrijk", "Wenen", 48.21, 16.37], "Poland": ["Polen", "Warschau", 52.23, 21.01],
  "Czechia": ["Tsjechië", "Praag", 50.09, 14.42], "Czech Rep.": ["Tsjechië", "Praag", 50.09, 14.42],
  "Greece": ["Griekenland", "Athene", 37.98, 23.73], "Sweden": ["Zweden", "Stockholm", 59.33, 18.07],
  "Norway": ["Noorwegen", "Oslo", 59.91, 10.75], "Denmark": ["Denemarken", "Kopenhagen", 55.68, 12.57],
  "Finland": ["Finland", "Helsinki", 60.17, 24.94], "Iceland": ["IJsland", "Reykjavik", 64.15, -21.94],
  "Hungary": ["Hongarije", "Boedapest", 47.50, 19.04], "Romania": ["Roemenië", "Boekarest", 44.43, 26.10],
  "Ukraine": ["Oekraïne", "Kiev", 50.45, 30.52], "Russia": ["Rusland", "Moskou", 55.76, 37.62],
  "Croatia": ["Kroatië", "Zagreb", 45.81, 15.98], "Serbia": ["Servië", "Belgrado", 44.79, 20.45],
  "Bulgaria": ["Bulgarije", "Sofia", 42.70, 23.32],
  // Azië
  "China": ["China", "Peking", 39.90, 116.40], "India": ["India", "New Delhi", 28.61, 77.21],
  "Japan": ["Japan", "Tokio", 35.68, 139.69], "South Korea": ["Zuid-Korea", "Seoul", 37.57, 126.98],
  "Korea": ["Zuid-Korea", "Seoul", 37.57, 126.98], "North Korea": ["Noord-Korea", "Pyongyang", 39.02, 125.75],
  "Indonesia": ["Indonesië", "Jakarta", -6.21, 106.85], "Thailand": ["Thailand", "Bangkok", 13.76, 100.50],
  "Vietnam": ["Vietnam", "Hanoi", 21.03, 105.85], "Malaysia": ["Maleisië", "Kuala Lumpur", 3.14, 101.69],
  "Philippines": ["Filipijnen", "Manilla", 14.60, 120.98], "Pakistan": ["Pakistan", "Islamabad", 33.69, 73.06],
  "Iran": ["Iran", "Teheran", 35.69, 51.39], "Iraq": ["Irak", "Bagdad", 33.31, 44.36],
  "Saudi Arabia": ["Saoedi-Arabië", "Riyad", 24.71, 46.68], "Afghanistan": ["Afghanistan", "Kaboel", 34.53, 69.17],
  "Turkey": ["Turkije", "Ankara", 39.93, 32.86], "Kazakhstan": ["Kazachstan", "Astana", 51.17, 71.43],
  // Afrika
  "Egypt": ["Egypte", "Caïro", 30.04, 31.24], "Morocco": ["Marokko", "Rabat", 34.02, -6.84],
  "Algeria": ["Algerije", "Algiers", 36.75, 3.06], "South Africa": ["Zuid-Afrika", "Pretoria", -25.75, 28.19],
  "Nigeria": ["Nigeria", "Abuja", 9.08, 7.40], "Kenya": ["Kenia", "Nairobi", -1.29, 36.82],
  "Ethiopia": ["Ethiopië", "Addis Abeba", 9.03, 38.74], "Tanzania": ["Tanzania", "Dodoma", -6.16, 35.75],
  "Ghana": ["Ghana", "Accra", 5.60, -0.19], "Libya": ["Libië", "Tripoli", 32.89, 13.19],
  "Sudan": ["Soedan", "Khartoem", 15.50, 32.56],
  // Noord-Amerika
  "United States of America": ["Verenigde Staten", "Washington", 38.91, -77.04],
  "United States": ["Verenigde Staten", "Washington", 38.91, -77.04],
  "Canada": ["Canada", "Ottawa", 45.42, -75.70], "Mexico": ["Mexico", "Mexico-Stad", 19.43, -99.13],
  "Cuba": ["Cuba", "Havana", 23.11, -82.37],
  // Zuid-Amerika
  "Brazil": ["Brazilië", "Brasília", -15.79, -47.88], "Argentina": ["Argentinië", "Buenos Aires", -34.60, -58.38],
  "Chile": ["Chili", "Santiago", -33.45, -70.67], "Peru": ["Peru", "Lima", -12.05, -77.04],
  "Colombia": ["Colombia", "Bogotá", 4.71, -74.07], "Venezuela": ["Venezuela", "Caracas", 10.48, -66.90],
  // Oceanië
  "Australia": ["Australië", "Canberra", -35.28, 149.13], "New Zealand": ["Nieuw-Zeeland", "Wellington", -41.29, 174.78],
  "Papua New Guinea": ["Papoea-Nieuw-Guinea", "Port Moresby", -9.44, 147.18],
};
const ALLE_HOOFD = [...new Set(Object.values(HOOFDSTEDEN).map((v) => v[1]))];

// ── Geometrie-helpers ─────────────────────────────────────────────────────────

// Zwaartepunt + grootste ring van een feature (mainland-proxy).
function featureInfo(feature) {
  const g = feature.geometry;
  if (!g) return null;
  const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
  let best = null, bestLen = -1;
  for (const poly of polys) {
    const ring = poly[0];
    if (ring && ring.length > bestLen) { bestLen = ring.length; best = poly; }
  }
  if (!best) return null;
  let sx = 0, sy = 0, n = 0;
  for (const [x, y] of best[0]) { sx += x; sy += y; n++; }
  return { lng: sx / n, lat: sy / n, polys };
}

// Ray-casting punt-in-polygoon (lng/lat).
function puntInRing(lng, lat, ring) {
  let binnen = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if (((yi > lat) !== (yj > lat)) && (lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi)) binnen = !binnen;
  }
  return binnen;
}

// Hex → [r,g,b] en lichtere tint (mix met wit) voor land-vlakken.
const tint = (hex, f) => {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  const m = (c) => Math.round(c + (255 - c) * f);
  return `rgb(${m(r)},${m(g)},${m(b)})`;
};

// ── Wereldkaart-canvas bouwen (per modus/stand andere opties) ──────────────────
// Hoge resolutie (4096×2048) zodat je flink kunt inzoomen zonder dat het wazig wordt.
export function bouwKaart(features, opts, W = 4096, H = 2048) {
  const s = W / 2048; // schaalfactor t.o.v. basis-resolutie
  const cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d");
  ctx.fillStyle = OCEAAN;
  ctx.fillRect(0, 0, W, H);
  const X = (lng) => ((lng + 180) / 360) * W;
  const Y = (lat) => ((90 - lat) / 180) * H;

  const tekenRing = (ring) => {
    if (!ring || ring.length < 3) return;
    ctx.beginPath();
    let prev = null;
    for (const [lng, lat] of ring) {
      const x = X(lng), y = Y(lat);
      if (prev !== null && Math.abs(lng - prev) > 180) ctx.moveTo(x, y);
      else if (prev === null) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      prev = lng;
    }
    ctx.closePath();
  };

  // 1) Landen vullen (per continent gekleurd, iets lichter zodat tekst leesbaar blijft)
  const infos = [];
  for (const f of features) {
    const info = featureInfo(f);
    if (!info) continue;
    const key = classify(f.properties?.name || "", info.lat, info.lng);
    info.key = key;
    info.naamEn = f.properties?.name || "";
    infos.push(info);
    ctx.fillStyle = tint(CONTINENTEN[key].kleur, opts.lichter ? 0.18 : 0);
    for (const poly of info.polys) { tekenRing(poly[0]); ctx.fill(); }
  }

  // 2) Landgrenzen
  if (opts.grenzen) {
    ctx.strokeStyle = "rgba(255,255,255,0.55)";
    ctx.lineWidth = 1.4 * s;
    for (const info of infos) for (const poly of info.polys) { tekenRing(poly[0]); ctx.stroke(); }
  }

  // Tekst met donkere halo zodat het op elke kleur leesbaar is.
  const halo = (tekst, x, y, fontPx, kleur = "#fff") => {
    ctx.font = `600 ${fontPx.toFixed(1)}px 'Fredoka', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = Math.max(2, fontPx * 0.18);
    ctx.strokeStyle = "rgba(8,18,28,0.9)";
    ctx.strokeText(tekst, x, y);
    ctx.fillStyle = kleur;
    ctx.fillText(tekst, x, y);
  };

  // 3) Landnamen — allemaal even klein, midden in het land.
  if (opts.landnamen) {
    for (const info of infos) {
      const naam = LAND_NL[info.naamEn];
      if (!naam) continue;
      halo(naam, X(info.lng), Y(info.lat), 6 * s);
    }
  }

  // 4) Hoofdstad-stippen (+ optioneel hun naam)
  if (opts.stippen) {
    for (const v of Object.values(HOOFDSTEDEN)) {
      const [, hoofdstad, lat, lng] = v;
      const x = X(lng), y = Y(lat);
      ctx.beginPath();
      ctx.arc(x, y, 6 * s, 0, Math.PI * 2);
      ctx.fillStyle = "#0b0f14";
      ctx.fill();
      ctx.lineWidth = 2.2 * s;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      if (opts.hoofdstadnamen) halo(hoofdstad, x, y - 16 * s, 15 * s, "#ffe08a");
    }
  }

  return cv;
}

// Fisher-Yates shuffle (kopie, muteert niet).
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Textuur-opties per modus + stand.
function kaartOpties(modus, stand) {
  const leren = stand === "leren";
  if (modus === "hoofdstad") return { lichter: true, grenzen: true, landnamen: true, stippen: true, hoofdstadnamen: leren };
  if (modus === "land") return { lichter: false, grenzen: true, landnamen: leren, stippen: false, hoofdstadnamen: false };
  // werelddeel
  return { lichter: false, grenzen: leren, landnamen: leren, stippen: false, hoofdstadnamen: false };
}

const CONTINENT_KEYS = ["afrika", "europa", "azie", "noord-amerika", "zuid-amerika", "oceanie"];

export default function Wereldbol({ onAnswer, modus = "werelddeel" }) {
  const mountRef = useRef(null);
  const besturingRef = useRef(null);   // { setTextuur } — gezet door three-init
  const alleLandenRef = useRef([]);    // alle landen (continent-detectie)
  const landPoolRef = useRef([]);      // benoemde landen (land-modus)
  const hoofdPoolRef = useRef([]);     // landen met hoofdstad + coord (hoofdstad-modus)
  const zoekIndexRef = useRef([]);     // zoekbare plekken (land + hoofdstad) met coördinaten
  const modusRef = useRef(modus);
  const standRef = useRef("leren");
  const opdrachtenRef = useRef([]);
  const opdrachtIRef = useRef(0);
  const bezigRef = useRef(false);      // even blokkeren tijdens feedback-flits

  const [status, setStatus] = useState("laden");   // laden | klaar | fout
  const [modusState, setModusState] = useState(modus); // werelddeel | land | hoofdstad (start = prop)
  const [stand, setStand] = useState("leren");      // leren | oefenen
  const [info, setInfo] = useState(null);           // ontdek-stand: laatste tekst
  const [zoek, setZoek] = useState("");             // ontdek-stand: zoekterm
  const [suggesties, setSuggesties] = useState([]);
  const [opdrachten, setOpdrachten] = useState([]);
  const [opdrachtI, setOpdrachtI] = useState(0);
  const [fb, setFb] = useState(null);               // 'goed' | 'fout' | null
  const [klaar, setKlaar] = useState(false);

  useEffect(() => { modusRef.current = modusState; }, [modusState]);
  useEffect(() => { setModusState(modus); }, [modus]); // prop verandert (ander leerpad) → volgen
  useEffect(() => { standRef.current = stand; }, [stand]);
  useEffect(() => { opdrachtenRef.current = opdrachten; }, [opdrachten]);
  useEffect(() => { opdrachtIRef.current = opdrachtI; }, [opdrachtI]);

  // Bij wissel van modus/stand: juiste textuur opbouwen.
  useEffect(() => {
    if (besturingRef.current) besturingRef.current.setTextuur(kaartOpties(modusState, stand));
  }, [modusState, stand, status]);

  // Zoek-suggesties (land + hoofdstad) op basis van de zoekterm.
  useEffect(() => {
    const q = zoek.trim().toLowerCase().normalize("NFD").split("").filter((c) => { const x = c.charCodeAt(0); return x < 0x300 || x > 0x36f; }).join("");
    if (q.length < 2) { setSuggesties([]); return; }
    setSuggesties(zoekIndexRef.current.filter((x) => x._n.includes(q)).slice(0, 6));
  }, [zoek]);

  // ── Three.js opzetten ──
  useEffect(() => {
    let renderer, scene, camera, globe, raf;
    let ro, stop = false;
    const mount = mountRef.current;

    async function init() {
      try {
        const [topoMod, tjMod] = await Promise.all([
          import("world-atlas/countries-110m.json"),
          import("topojson-client"),
        ]);
        if (stop) return;
        const topo = topoMod.default || topoMod;
        const feature = tjMod.feature || (tjMod.default && tjMod.default.feature);
        const geo = feature(topo, topo.objects.countries);
        const features = geo.features;

        // Landen-index voor klik-detectie.
        alleLandenRef.current = features.map((f) => {
          const i = featureInfo(f);
          const naamEn = f.properties?.name || "";
          return { naamEn, key: i ? classify(naamEn, i.lat, i.lng) : "azie", polys: i ? i.polys : [], lng: i ? i.lng : 0, lat: i ? i.lat : 0 };
        });
        // Land-modus: alle benoemde landen die ook echt op de kaart staan.
        landPoolRef.current = alleLandenRef.current.reduce((acc, l) => {
          const naam = LAND_NL[l.naamEn];
          if (naam && !acc.some((x) => x.naam === naam)) acc.push({ naamEn: l.naamEn, naam, key: l.key });
          return acc;
        }, []);
        // Hoofdstad-modus: subset met hoofdstad + coördinaten.
        hoofdPoolRef.current = Object.entries(HOOFDSTEDEN).reduce((acc, [naamEn, v]) => {
          if (!acc.some((x) => x.hoofdstad === v[1])) acc.push({ naamEn, naam: v[0], hoofdstad: v[1], lat: v[2], lng: v[3], key: classify(naamEn, v[2], v[3]) });
          return acc;
        }, []);
        // Zoek-index: landen (centroïde) + hoofdsteden (coörd). Genormaliseerd voor zoeken.
        const norm = (t) => t.toLowerCase().normalize("NFD").split("").filter((c) => { const x = c.charCodeAt(0); return x < 0x300 || x > 0x36f; }).join("");
        const idx = [];
        for (const l of alleLandenRef.current) {
          const naam = LAND_NL[l.naamEn];
          if (naam && !idx.some((x) => x.type === "land" && x.label === naam)) idx.push({ label: naam, type: "land", lng: l.lng, lat: l.lat, _n: norm(naam) });
        }
        for (const b of hoofdPoolRef.current) idx.push({ label: b.hoofdstad, type: "hoofdstad", land: b.naam, lng: b.lng, lat: b.lat, _n: norm(b.hoofdstad) });
        zoekIndexRef.current = idx;

        const w = mount.clientWidth || 360;
        const h = 360;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
        camera.position.z = 3.1;
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h);
        mount.appendChild(renderer.domElement);
        renderer.domElement.style.cursor = "grab";
        renderer.domElement.style.touchAction = "none";

        globe = new THREE.Mesh(
          new THREE.SphereGeometry(1, 64, 48),
          new THREE.MeshBasicMaterial()
        );
        globe.rotation.y = -2.1;
        scene.add(globe);

        const glow = new THREE.Mesh(
          new THREE.SphereGeometry(1.06, 48, 32),
          new THREE.MeshBasicMaterial({ color: 0x5aa0ff, transparent: true, opacity: 0.10, side: THREE.BackSide })
        );
        scene.add(glow);

        // Markertje dat bij 'zoeken' op de gevonden plek verschijnt.
        const marker = new THREE.Mesh(
          new THREE.SphereGeometry(0.035, 16, 16),
          new THREE.MeshBasicMaterial({ color: 0xffe14d })
        );
        marker.visible = false;
        globe.add(marker);

        // ── Beweeg-/zoom-toestand (ook gebruikt door zoeken) ──
        const PAUZE_MS = 5000;
        const ZOOM_DICHTBIJ = 1.12, ZOOM_VER = 3.6; // dichterbij = verder inzoomen
        let dragging = false, moved = false, px = 0, py = 0, hervatAt = 0;
        let animTot = 0, doelRy = globe.rotation.y, doelRx = globe.rotation.x, doelZoom = camera.position.z;

        // Besturing exposen voor de React-laag (textuur, zoeken, marker).
        besturingRef.current = {
          setTextuur(opts) {
            const cv = bouwKaart(features, opts);
            const tex = new THREE.CanvasTexture(cv);
            tex.colorSpace = THREE.SRGBColorSpace;
            if (globe.material.map) globe.material.map.dispose();
            globe.material.map = tex;
            globe.material.needsUpdate = true;
          },
          verbergMarker() { marker.visible = false; },
          gaNaar(lng, lat) {
            // marker op het boloppervlak zetten
            const u = (lng + 180) / 360;
            const theta = ((90 - lat) * Math.PI) / 180;
            const phi = 2 * Math.PI * u;
            const r = 1.02;
            marker.position.set(-r * Math.cos(phi) * Math.sin(theta), r * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta));
            marker.visible = true;
            // doel-rotatie zodat de plek naar voren draait + inzoomen
            doelRy = -Math.PI / 2 - (Math.PI * lng) / 180;
            while (doelRy - globe.rotation.y > Math.PI) doelRy -= 2 * Math.PI;
            while (doelRy - globe.rotation.y < -Math.PI) doelRy += 2 * Math.PI;
            doelRx = Math.max(-1.2, Math.min(1.2, (lat * Math.PI) / 180));
            doelZoom = 1.9;
            const now = performance.now();
            animTot = now + 1100;
            hervatAt = now + 1100 + PAUZE_MS;
          },
        };
        besturingRef.current.setTextuur(kaartOpties(modusRef.current, standRef.current));

        // ── Slepen / draaien + zoomen ──
        const pointers = new Map();
        let pinchVorig = 0;
        const zoomNaar = (z) => { camera.position.z = Math.max(ZOOM_DICHTBIJ, Math.min(ZOOM_VER, z)); };
        const pinchAfstand = () => {
          const p = [...pointers.values()];
          return p.length < 2 ? 0 : Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
        };
        const onDown = (e) => {
          pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          hervatAt = Infinity;
          if (pointers.size === 1) { dragging = true; moved = false; px = e.clientX; py = e.clientY; renderer.domElement.style.cursor = "grabbing"; }
          else if (pointers.size === 2) { dragging = false; pinchVorig = pinchAfstand(); }
        };
        const onMove = (e) => {
          if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          if (pointers.size >= 2) {
            const d = pinchAfstand();
            if (pinchVorig && d) zoomNaar(camera.position.z * (pinchVorig / d));
            pinchVorig = d;
            return;
          }
          if (!dragging) return;
          const dx = e.clientX - px, dy = e.clientY - py;
          if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
          globe.rotation.y += dx * 0.005;
          globe.rotation.x = Math.max(-1.2, Math.min(1.2, globe.rotation.x + dy * 0.005));
          px = e.clientX; py = e.clientY;
        };
        const onUp = (e) => {
          pointers.delete(e.pointerId);
          if (pointers.size < 2) pinchVorig = 0;
          if (pointers.size === 0) {
            renderer.domElement.style.cursor = "grab";
            if (dragging && !moved) handleTap(e);
            dragging = false;
            hervatAt = performance.now() + PAUZE_MS;
          } else if (pointers.size === 1) {
            const [p] = pointers.values();
            px = p.x; py = p.y; dragging = true; moved = true;
          }
        };
        const onWheel = (e) => {
          e.preventDefault();
          zoomNaar(camera.position.z + e.deltaY * 0.002);
          hervatAt = performance.now() + PAUZE_MS;
        };
        const dom = renderer.domElement;
        dom.addEventListener("pointerdown", onDown);
        dom.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);

        const raycaster = new THREE.Raycaster();
        const ndc = new THREE.Vector2();
        const W = 2048, H = 1024;

        function vindLand(lng, lat) {
          return alleLandenRef.current.find((l) => l.polys.some((p) => puntInRing(lng, lat, p[0])));
        }
        function dichtstbijStip(lng, lat) {
          // afstand in canvas-pixels (zoom-onafhankelijk)
          const X = (g) => ((g + 180) / 360) * W, Y = (a) => ((90 - a) / 180) * H;
          const cx = X(lng), cy = Y(lat);
          let beste = null, bestD = 1e9;
          for (const b of hoofdPoolRef.current) {
            const d = Math.hypot(cx - X(b.lng), cy - Y(b.lat));
            if (d < bestD) { bestD = d; beste = b; }
          }
          return bestD < 60 ? beste : null;
        }

        function handleTap(e) {
          if (bezigRef.current) return;
          const rect = dom.getBoundingClientRect();
          ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(ndc, camera);
          const hit = raycaster.intersectObject(globe)[0];
          if (!hit || !hit.uv) return;
          const lng = hit.uv.x * 360 - 180;
          const lat = hit.uv.y * 180 - 90;

          const m = modusRef.current, s = standRef.current;

          if (m === "hoofdstad") {
            const stip = dichtstbijStip(lng, lat);
            if (s === "leren") {
              if (stip) setInfo(`📍 ${stip.hoofdstad} — hoofdstad van ${stip.naam}`);
            } else {
              const t = opdrachtenRef.current[opdrachtIRef.current];
              if (!t) return;
              beoordeel(!!stip && stip.naamEn === t.naamEn, t.hoofdstad);
            }
            return;
          }

          const land = vindLand(lng, lat);
          if (m === "werelddeel") {
            if (!land) return;
            if (s === "leren") {
              setInfo(`Dit is werelddeel ${CONTINENTEN[land.key].naam}`);
            } else {
              const t = opdrachtenRef.current[opdrachtIRef.current];
              if (!t) return;
              beoordeel(land.key === t.key, CONTINENTEN[t.key].naam);
            }
            return;
          }

          // modus === "land"
          if (!land) return;
          const bekend = landPoolRef.current.find((b) => b.naamEn === land.naamEn);
          const hs = HOOFDSTEDEN[land.naamEn];
          if (s === "leren") {
            setInfo(bekend ? `${bekend.naam}${hs ? ` — hoofdstad ${hs[1]}` : ""}` : `Dit land kennen we (nog) niet.`);
          } else {
            const t = opdrachtenRef.current[opdrachtIRef.current];
            if (!t) return;
            beoordeel(land.naamEn === t.naamEn, t.naam);
          }
        }

        // resize
        ro = new ResizeObserver(() => {
          const ww = mount.clientWidth || 360;
          camera.aspect = ww / h; camera.updateProjectionMatrix();
          renderer.setSize(ww, h);
        });
        ro.observe(mount);

        const loop = () => {
          if (stop) return;
          const now = performance.now();
          if (animTot && now < animTot) {
            // soepel naar de gezochte plek toe draaien + zoomen
            globe.rotation.y += (doelRy - globe.rotation.y) * 0.12;
            globe.rotation.x += (doelRx - globe.rotation.x) * 0.12;
            camera.position.z += (doelZoom - camera.position.z) * 0.12;
          } else {
            if (animTot) animTot = 0;
            if (!dragging && standRef.current !== "oefenen" && now >= hervatAt) globe.rotation.y += 0.0016;
          }
          renderer.render(scene, camera);
          raf = requestAnimationFrame(loop);
        };
        loop();
        setStatus("klaar");

        cleanup = () => {
          dom.removeEventListener("pointerdown", onDown);
          dom.removeEventListener("wheel", onWheel);
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
          ro && ro.disconnect();
          cancelAnimationFrame(raf);
          if (globe.material.map) globe.material.map.dispose();
          globe.geometry.dispose(); globe.material.dispose();
          // glow + marker werden eerder niet gedisposed → kleine GPU-leak
          // (sphere-geometry + materials) bij herhaald openen. (bug-jacht 2026-07-31)
          glow.geometry.dispose(); glow.material.dispose();
          marker.geometry.dispose(); marker.material.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
        };
      } catch (err) {
        console.error("Wereldbol kon niet laden:", err);
        setStatus("fout");
      }
    }
    let cleanup = () => {};
    init();
    return () => { stop = true; cleanup(); };
  }, []);

  // ── Oefen-logica ──
  function bouwOpdrachten(m) {
    if (m === "werelddeel") return shuffle(CONTINENT_KEYS).map((key) => ({ key }));
    if (m === "hoofdstad") return shuffle(hoofdPoolRef.current).slice(0, 8);
    return shuffle(landPoolRef.current).slice(0, 8);
  }
  function startStand(s) {
    setFb(null); setInfo(null); setKlaar(false); bezigRef.current = false;
    setZoek(""); setSuggesties([]); besturingRef.current?.verbergMarker();
    if (s === "oefenen") {
      const lijst = bouwOpdrachten(modusRef.current);
      setOpdrachten(lijst); opdrachtenRef.current = lijst;
      setOpdrachtI(0); opdrachtIRef.current = 0;
    }
    setStand(s);
  }
  function wisselModus(m) {
    modusRef.current = m;
    setModusState(m);
    setStand("leren"); standRef.current = "leren";
    setFb(null); setInfo(null); setKlaar(false); setOpdrachten([]);
    setZoek(""); setSuggesties([]); besturingRef.current?.verbergMarker();
    bezigRef.current = false;
  }
  function kiesZoek(sg) {
    besturingRef.current?.gaNaar(sg.lng, sg.lat);
    setInfo(sg.type === "hoofdstad" ? `📍 ${sg.label} — hoofdstad van ${sg.land}` : `🗺️ ${sg.label}`);
    setZoek(""); setSuggesties([]);
  }
  function beoordeel(goed, naam) {
    bezigRef.current = true;
    setFb(goed ? "goed" : "fout");
    onAnswer?.(goed, naam);
    setTimeout(() => {
      setFb(null);
      bezigRef.current = false;
      if (goed) {
        // Bron = de REF, niet de state-closure: beoordeel wordt aangeroepen vanuit
        // één-keer-toegevoegde handlers, dus opdrachtI in de closure is stale (0).
        // opdrachtIRef.current blijft wél actueel via de effect op [opdrachtI].
        // Eerder zat de ref-mutatie + setKlaar ín de setState-updater (side-effect,
        // dubbel in StrictMode). Nu puur en op basis van de betrouwbare ref.
        // (bug-jacht 2026-07-31)
        const next = opdrachtIRef.current + 1;
        setOpdrachtI(next);
        if (next >= opdrachtenRef.current.length) setKlaar(true);
      }
    }, goed ? 1300 : 1100);
  }

  const huidige = opdrachten[opdrachtI];
  const opdrachtTekst = () => {
    if (!huidige) return "";
    if (modusState === "werelddeel") return `Wijs ${CONTINENTEN[huidige.key].naam} aan`;
    if (modusState === "hoofdstad") return `Klik op de hoofdstad van ${huidige.naam}`;
    return `Wijs ${huidige.naam} aan${huidige.key ? ` (in ${CONTINENTEN[huidige.key].naam})` : ""}`;
  };
  // Naam van de vólgende opdracht (voor de "zoek nu …"-aankondiging na een goed
  // antwoord). null = dit was de laatste → ronde klaar.
  const volgendeNaam = () => {
    const n = opdrachten[opdrachtI + 1];
    if (!n) return null;
    if (modusState === "werelddeel") return CONTINENTEN[n.key].naam;
    if (modusState === "hoofdstad") return `de hoofdstad van ${n.naam}`;
    return n.naam;
  };

  const verbWoord = modusState === "hoofdstad" ? "hoofdstad" : modusState === "land" ? "land" : "werelddeel";

  return (
    <div style={{ width: "100%" }}>
      {/* Onderwerp-keuze (dropdown) + stand-keuze */}
      {status === "klaar" && (
        <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
          <label style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 13, color: "#9fc0e0" }}>
            Leer:{" "}
            <select
              value={modusState}
              onChange={(e) => wisselModus(e.target.value)}
              style={{
                padding: "6px 10px", borderRadius: 10, fontFamily: "'Fredoka',sans-serif",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                border: "2px solid rgba(255,255,255,0.18)", background: "#13283d", color: "#eaf2fb",
              }}
            >
              <option value="werelddeel">🌍 Werelddelen</option>
              <option value="land">🗺️ Landen</option>
              <option value="hoofdstad">🏙️ Hoofdsteden</option>
            </select>
          </label>
        </div>
      )}

      {/* Stand-keuze */}
      {status === "klaar" && (
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 8 }}>
          {[["leren", "📖 Ontdekken"], ["oefenen", "🎯 Oefenen"]].map(([s, label]) => (
            <button
              key={s}
              onClick={() => startStand(s)}
              style={{
                padding: "7px 16px", borderRadius: 999, fontSize: 14, fontWeight: 700,
                cursor: "pointer", fontFamily: "'Fredoka',sans-serif",
                border: "2px solid " + (stand === s ? "#2563eb" : "rgba(255,255,255,0.18)"),
                background: stand === s ? "rgba(37,99,235,0.30)" : "rgba(255,255,255,0.06)",
                color: "#eaf2fb",
              }}
            >{label}</button>
          ))}
        </div>
      )}

      {/* Zoekbalk (alleen in Ontdekken) */}
      {status === "klaar" && stand === "leren" && (
        <div style={{ position: "relative", maxWidth: 320, margin: "0 auto 8px" }}>
          <input
            value={zoek}
            onChange={(e) => setZoek(e.target.value)}
            placeholder="🔎 Zoek een land of hoofdstad…"
            style={{
              width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 10,
              fontFamily: "'Fredoka',sans-serif", fontSize: 14,
              border: "2px solid rgba(255,255,255,0.18)", background: "#0e2236", color: "#eaf2fb",
            }}
          />
          {suggesties.length > 0 && (
            <div style={{ position: "absolute", zIndex: 5, left: 0, right: 0, marginTop: 4, background: "#0e2236", border: "2px solid rgba(255,255,255,0.18)", borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}>
              {suggesties.map((sg, i) => (
                <button
                  key={i}
                  onClick={() => kiesZoek(sg)}
                  style={{
                    display: "block", width: "100%", textAlign: "left", padding: "9px 12px",
                    border: "none", borderTop: i ? "1px solid rgba(255,255,255,0.08)" : "none",
                    background: "transparent", color: "#eaf2fb", cursor: "pointer",
                    fontFamily: "'Fredoka',sans-serif", fontSize: 14,
                  }}
                >
                  {sg.type === "hoofdstad" ? "🏙️" : "🗺️"} {sg.label}
                  {sg.land ? <span style={{ color: "#9fc0e0" }}> — {sg.land}</span> : null}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Status / opdracht-balk */}
      <div style={{ textAlign: "center", fontSize: 14, color: "#cfe0f0", marginBottom: 6, fontFamily: "'Fredoka',sans-serif", minHeight: 22 }}>
        {status === "laden" && "🌍 De aardbol laadt…"}
        {status === "fout" && "De aardbol kon niet laden — tik op de knop hieronder."}
        {status === "klaar" && stand === "leren" && (info || `🌍 Draai (sleep/veeg), zoom (scroll/2 vingers) en tik op een ${verbWoord} om te ontdekken.`)}
        {status === "klaar" && stand === "oefenen" && !klaar && fb === "goed" && (
          <span style={{ fontSize: 19, fontWeight: 800, color: "#69f0ae" }}>
            ✅ GOED!
            {volgendeNaam()
              ? <span style={{ color: "#fff", fontWeight: 700 }}> — zoek nu {volgendeNaam()} 👇</span>
              : <span style={{ color: "#ffd54f", fontWeight: 700 }}> 🎉 Alle {verbWoord === "hoofdstad" ? "hoofdsteden" : verbWoord === "land" ? "landen" : "werelddelen"} gehad!</span>}
          </span>
        )}
        {status === "klaar" && stand === "oefenen" && !klaar && fb === "fout" && (
          <span style={{ fontSize: 16, fontWeight: 700, color: "#ff8a8a" }}>❌ Net niet — {opdrachtTekst()}</span>
        )}
        {status === "klaar" && stand === "oefenen" && !klaar && !fb && (
          <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{opdrachtTekst()}</span>
        )}
        {status === "klaar" && stand === "oefenen" && klaar && "🎉 Alle opdrachten gedaan! Kies 'Oefenen' voor een nieuwe ronde."}
      </div>

      {/* Voortgang (oefenen) */}
      {status === "klaar" && stand === "oefenen" && !klaar && (
        <div style={{ textAlign: "center", marginBottom: 6, fontFamily: "'Fredoka',sans-serif", fontSize: 13 }}>
          <span style={{ color: "#9fc0e0" }}>{opdrachtI} / {opdrachten.length} goed</span>
        </div>
      )}

      {/* De bol */}
      <div
        ref={mountRef}
        style={{
          width: "100%", height: 360, borderRadius: 16, overflow: "hidden",
          background: "radial-gradient(circle at 50% 40%, #0d2640 0%, #07111d 100%)",
          display: status === "klaar" ? "block" : "flex",
          alignItems: "center", justifyContent: "center",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
          outline: fb === "goed" ? "3px solid #2e7d32" : fb === "fout" ? "3px solid #c62828" : "none",
        }}
      >
        {status === "laden" && <span style={{ color: "#9fc0e0" }}>laden…</span>}
      </div>

      {/* Fallback als WebGL niet werkt → leerpad niet blokkeren */}
      {status === "fout" && (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button onClick={() => onAnswer?.(true, "wereld")} style={{ padding: "10px 20px", borderRadius: 10, border: "none", background: "#2563eb", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
            Ga verder
          </button>
        </div>
      )}
    </div>
  );
}
