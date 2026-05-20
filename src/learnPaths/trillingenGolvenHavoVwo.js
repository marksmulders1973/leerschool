// Leerpad: Trillingen + Golven — HAVO/VWO Natuurkunde
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Harmonische trilling, golfvergelijking,
// geluid, resonantie + staande golven. VWO-extra: Doppler-effect, interferentie.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["📈", "🌊", "🔊", "🎻", "🏆"];

const chapters = [
  { letter: "A", title: "Trillingen", emoji: "📈", from: 0, to: 0 },
  { letter: "B", title: "Lopende golven", emoji: "🌊", from: 1, to: 1 },
  { letter: "C", title: "Geluid", emoji: "🔊", from: 2, to: 2 },
  { letter: "D", title: "Resonantie + staande golven", emoji: "🎻", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (incl. Doppler-VWO)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Trillingen ────────────────────────────────────────
  {
    title: "Trillingen — periode, frequentie, amplitude",
    explanation:
      "**Trilling** = beweging die zich periodiek herhaalt rond een evenwichtsstand. Voorbeeld: slinger, massa aan veer, snaar.\n\n**Drie grootheden**:\n• **Periode T** (s): tijd voor één volledige trilling (heen + terug = 1 trilling).\n• **Frequentie f** (Hz): aantal trillingen per seconde. **f = 1/T**.\n• **Amplitude A** (m): maximale uitwijking uit de evenwichtsstand (NIET de totale lengte van uiterst-links naar uiterst-rechts — dat is 2A).\n\n**Harmonische trilling** = sinus-vormig: u(t) = A·sin(2π·f·t) = A·sin(ω·t).\n• **Hoekfrequentie ω** = 2π·f = 2π/T (rad/s).\n• Op t=0 vanuit evenwicht: gebruik sin. Vanuit max-uitwijking: gebruik cos.\n\n**Massa-veer-systeem** (veerconstante C in N/m, massa m in kg):\n• T = 2π·√(m/C).\n• Zwaardere massa → langere T (trager). Stijvere veer → kortere T (sneller).\n\n**Mathematische slinger** (touw-lengte L):\n• T = 2π·√(L/g), met g ≈ 9,81 m/s².\n• Periode hangt **NIET af van de massa** (Galileï's ontdekking).\n• Langere slinger → langere periode (klassieke kerkklok).\n\n**Energie in een trilling**:\n• In evenwichtsstand: alle E zit in kinetisch (max v).\n• In uiterste stand: alle E zit in potentieel (v = 0).\n• Totale energie blijft constant (zonder demping).\n\n**Cito/examen-tips**:\n• Tel altijd: 1 trilling = heen + terug. Veel leerlingen tellen alleen heen → halveerden T → fout.\n• Eenheid Hz = 1/s. 50 Hz = 50 trillingen/s.\n• Op uitwijking-t-grafiek: T is afstand tussen twee top-pieken (of nuldoorgangen met zelfde richting).",
    checks: [
      {
        q: "Een snaar trilt **20 keer per seconde**. Wat is de **periode T**?",
        options: ["0,05 s", "20 s", "0,5 s", "0,2 s"],
        answer: 0,
        wrongHints: [null, "Niet — 20 s zou heel traag zijn.", "Niet — dat zou f = 2 Hz betekenen.", "Niet — dat is 1/5, niet 1/20."],
        uitlegPad: {
          stappen: [
            { titel: "T = 1/f", tekst: "Frequentie f = 20 Hz. Periode T = 1/f = 1/20 = 0,05 s. Dus elke trilling duurt 0,05 s = 50 ms." },
          ],
          woorden: [
            { woord: "frequentie f", uitleg: "Aantal trillingen per seconde, eenheid hertz (Hz). f = 1/T." },
            { woord: "periode T", uitleg: "Tijd voor 1 volledige trilling, eenheid seconde (s). T = 1/f." },
          ],
          theorie: "T en f zijn elkaars **omgekeerde**: T = 1/f en f = 1/T. Hoge f → kleine T (snelle trilling).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Stopcontact-stroom 50 Hz → T = 1/50 = 0,02 s." }],
          niveaus: {
            basis: "T = 1/f = 1/20 = 0,05 s → A.",
            simpeler: "20 trillingen per seconde → één trilling duurt 1/20 s = 0,05 s. A.",
            nogSimpeler: "1/20 = 0,05. A.",
          },
        },
      },
      {
        q: "Een trilling heeft uiterste posities op **+8 cm** en **−8 cm**. Wat is de **amplitude**?",
        options: ["8 cm", "16 cm", "4 cm", "0 cm"],
        answer: 0,
        wrongHints: [null, "Niet — dat is de afstand van uiterst-links naar uiterst-rechts (2A).", "Niet — dat zou de helft van A zijn.", "Onmogelijk — er is wel beweging."],
        uitlegPad: {
          stappen: [
            { titel: "A = max uitwijking", tekst: "Amplitude meet je **vanuit de evenwichtsstand** tot de uiterste uitwijking. Evenwicht ligt midden tussen +8 en −8 (= 0). Vanaf 0 tot +8 = 8 cm. **Veel-gemaakte fout**: 16 cm is de **piek-tot-piek-afstand**, niet de amplitude." },
          ],
          theorie: "Amplitude is altijd **half** van de piek-tot-piek-afstand. Geluid heeft amplitude = luidheid. Licht heeft amplitude = helderheid.",
          niveaus: {
            basis: "8 cm = max afstand vanaf 0. A.",
            simpeler: "Amplitude = halve piek-tot-piek = 16/2 = 8 cm. A.",
            nogSimpeler: "Amplitude = 8 cm. A.",
          },
        },
      },
      {
        q: "Een massa aan een veer trilt met **T = 0,4 s**. Wat is **ω** (hoekfrequentie)?",
        options: ["5π rad/s", "0,4 rad/s", "2π rad/s", "2,5 rad/s"],
        answer: 0,
        wrongHints: [null, "Niet — dat is T, niet ω.", "Niet — dat zou T = 1 s zijn.", "Niet — vergeet de 2π niet."],
        uitlegPad: {
          stappen: [{ titel: "ω = 2π/T", tekst: "ω = 2π/T = 2π/0,4 = **5π rad/s** ≈ 15,7 rad/s. ω vertelt hoe snel de fase verandert (radialen per seconde)." }],
          niveaus: {
            basis: "ω = 2π/0,4 = 5π. A.",
            simpeler: "2π / 0,4 = 5π rad/s. A.",
            nogSimpeler: "5π = A.",
          },
        },
      },
      {
        q: "Een **slinger van 1,0 m** op aarde (g = 9,81 m/s²). Periode T ≈ ?",
        options: ["2,0 s", "1,0 s", "6,3 s", "0,5 s"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet de 2π niet.", "Te lang — check formule.", "Te kort."],
        uitlegPad: {
          stappen: [
            { titel: "Slinger-formule", tekst: "T = 2π·√(L/g) = 2π·√(1,0/9,81) = 2π·√0,102 = 2π·0,319 ≈ **2,0 s**. Klassiek: 1 m slinger op aarde tikt elke seconde één kant op (T/2 = 1 s = secondeslinger)." },
          ],
          woorden: [{ woord: "mathematische slinger", uitleg: "Idealisering: puntmassa aan touw zonder massa. Geldig voor kleine uitwijking (<10°)." }],
          theorie: "Periode hangt **niet** af van de massa van de bol — alleen van lengte L en zwaarteveld g. Op de maan (g ≈ 1,6 m/s²) tikt dezelfde slinger trager: T ≈ 5 s.",
          niveaus: {
            basis: "T = 2π·√(L/g) ≈ 2,0 s. A.",
            simpeler: "1,0 m slinger op aarde = ongeveer 2 s per trilling. A.",
            nogSimpeler: "2,0 s = A.",
          },
        },
      },
      {
        q: "Een massa-veer-systeem heeft T = 0,5 s. Je **verdubbelt de massa**. Nieuwe T?",
        options: ["0,71 s", "1,0 s", "0,25 s", "0,5 s"],
        answer: 0,
        wrongHints: [null, "Niet — T is √(m), niet m. Verdubbelen m geeft √2-factor.", "Niet — dat zou kwart-versie zijn.", "Niet — er verandert wel iets."],
        uitlegPad: {
          stappen: [
            { titel: "T ~ √m", tekst: "T = 2π·√(m/C). Verdubbelen van m geeft factor √2 ≈ 1,41 op T. Dus T_nieuw = 0,5 × √2 ≈ **0,71 s**." },
          ],
          theorie: "Belangrijke schaalwet: bij massa-veer-systeem groeit T met de **wortel** van de massa. 4× massa → 2× zo lange periode.",
          niveaus: {
            basis: "T ~ √m → 0,5·√2 = 0,71. A.",
            simpeler: "Massa ×2 → T × √2 = 0,5·1,41 = 0,71 s. A.",
            nogSimpeler: "√2 × 0,5 = 0,71. A.",
          },
        },
      },
    ],
  },

  // ─── B. Lopende golven ────────────────────────────────────
  {
    title: "Lopende golven — v = f·λ",
    explanation:
      "**Golf** = trilling die zich door een medium voortplant. De stof beweegt niet mee — alleen de energie reist door.\n\n**Twee soorten**:\n• **Transversaal**: trilling staat **loodrecht** op voortplantingsrichting. Voorbeeld: golf in touw, watergolf, licht (elektromagnetisch).\n• **Longitudinaal**: trilling staat **parallel** aan voortplantingsrichting. Voorbeeld: geluidsgolf in lucht, golf in veer-langs-langs.\n\n**Drie grootheden**:\n• **Golflengte λ** (m): afstand tussen twee opeenvolgende toppen (of twee compressies bij longitudinaal).\n• **Frequentie f** (Hz): aantal golven per seconde door een vast punt.\n• **Golfsnelheid v** (m/s): hoe snel de golf vooruit gaat.\n\n**Kernformule**: **v = f · λ**\n• Bij gegeven medium: v is constant. Hogere f → kortere λ.\n• Verschillende media: licht in glas is langzamer dan in lucht.\n\n**Voorbeeld geluid**:\n• v_geluid in lucht ≈ 343 m/s (20 °C, 1 atm).\n• A4 = 440 Hz → λ = 343/440 ≈ 0,78 m.\n\n**Voorbeeld licht**:\n• c = 3,0·10⁸ m/s in vacuüm.\n• Rood licht λ ≈ 700 nm → f = c/λ = 3·10⁸/7·10⁻⁷ ≈ 4,3·10¹⁴ Hz.\n\n**Reflectie + breking**:\n• Bij overgang medium kan een golf **reflecteren** (terugkaatsen) of **breken** (vanaf andere snelheid → andere richting).\n• Vaste hoekrelatie: invalshoek = reflectiehoek (vanaf de normaal).\n\n**Examen-valkuilen**:\n• Mengelmoes f, T, λ — check eenheden: f in Hz = 1/s, T in s, λ in m.\n• v hangt af van het MEDIUM, niet van de bron. Drukkere lucht/dichter medium = vaak hogere v.",
    checks: [
      {
        q: "Een watergolf heeft **f = 5 Hz** en **λ = 0,8 m**. Wat is **v**?",
        options: ["4,0 m/s", "6,25 m/s", "0,16 m/s", "40 m/s"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou f/λ zijn.", "Niet — dat is λ/f.", "Niet — eenheid in tien-tallen klopt niet."],
        uitlegPad: {
          stappen: [
            { titel: "v = f·λ", tekst: "v = 5 × 0,8 = **4,0 m/s**. Vermenigvuldigen: golven per seconde × meter per golf = meter per seconde." },
          ],
          woorden: [{ woord: "golfsnelheid v", uitleg: "Hoe snel de golf zich voortbeweegt door het medium. NIET dezelfde als deeltjessnelheid." }],
          theorie: "Onthouden via eenheden: [Hz]·[m] = [1/s]·[m] = [m/s]. ✓",
          niveaus: {
            basis: "v = 5 × 0,8 = 4,0 m/s. A.",
            simpeler: "Vermenigvuldig f × λ → 5 × 0,8 = 4 m/s. A.",
            nogSimpeler: "5·0,8=4. A.",
          },
        },
      },
      {
        q: "Een golf in een **touw** is een voorbeeld van welk type?",
        options: ["Transversaal", "Longitudinaal", "Beide", "Geen van beide"],
        answer: 0,
        wrongHints: [null, "Niet — touw schudt loodrecht op richting, niet langs.", "Niet — alleen één soort.", "Het is wel een golf."],
        uitlegPad: {
          stappen: [
            { titel: "Loodrecht = transversaal", tekst: "Bij een touw bewegen de deeltjes op-en-neer (verticaal) terwijl de golf horizontaal voortplant. Trilling **loodrecht** op richting = **transversaal**. Geluid daarentegen is langsbeweging = longitudinaal." },
          ],
          voorbeelden: [
            { type: "transversaal", tekst: "Touw, watergolf, licht (EM-golf)." },
            { type: "longitudinaal", tekst: "Geluid in lucht, golf langs veer-in-langsrichting." },
          ],
          niveaus: {
            basis: "Trilling loodrecht op richting = transversaal. A.",
            simpeler: "Touw schudt op-en-neer, golf gaat zijwaarts → loodrecht → transversaal. A.",
            nogSimpeler: "Touw = transversaal = A.",
          },
        },
      },
      {
        q: "Een geluidsgolf in lucht heeft v = 343 m/s. **A4 = 440 Hz**. Bereken λ.",
        options: ["0,78 m", "0,12 m", "1,28 m", "151 m"],
        answer: 0,
        wrongHints: [null, "Niet — controleer formule λ = v/f.", "Niet — zo'n golf zou heel laag-frequent zijn.", "Veel te groot — eenheid-check!"],
        uitlegPad: {
          stappen: [
            { titel: "λ = v/f", tekst: "Uit v = f·λ volgt λ = v/f = 343/440 ≈ **0,78 m**. Dat is dus de afstand tussen twee opeenvolgende drukpieken in lucht voor een A4-toon." },
          ],
          theorie: "Hoge toon → korte golflengte; lage toon → lange golflengte. Daarom heeft een bas-luidspreker een groot membraan.",
          niveaus: {
            basis: "λ=v/f=343/440=0,78 m. A.",
            simpeler: "Deel snelheid door frequentie: 343/440 ≈ 0,78. A.",
            nogSimpeler: "0,78 = A.",
          },
        },
      },
      {
        q: "Welke uitspraak over **golfsnelheid v** in een medium klopt?",
        options: [
          "v hangt af van het medium, niet van de frequentie (bij gelijk medium)",
          "v hangt alleen af van de bron",
          "v wordt groter als f groter wordt",
          "v wordt groter als λ groter wordt",
        ],
        answer: 0,
        wrongHints: [null, "Niet — de bron bepaalt f, niet v.", "Niet — in homogeen medium is v constant. Hogere f → kortere λ.", "Niet — bij vast medium klopt dat niet."],
        uitlegPad: {
          stappen: [
            { titel: "v = eigenschap van het medium", tekst: "Bij dezelfde lucht, dezelfde temperatuur, is v ≈ 343 m/s — onafhankelijk of een bas of fluit speelt. Hogere frequentie betekent kortere golflengte (λ = v/f), maar NIET een snellere golf." },
          ],
          basiskennis: [{ onderwerp: "Dispersie (uitzondering)", uitleg: "In sommige media (glas voor licht) hangt v licht af van f → dispersie → regenboog. Op CSE-niveau aanname: v constant per medium." }],
          niveaus: {
            basis: "v hangt af van medium, niet van bron. A.",
            simpeler: "Snelheid is medium-eigenschap. Bron bepaalt f, medium bepaalt v. A.",
            nogSimpeler: "Medium = v. A.",
          },
        },
      },
      {
        q: "Geluidsgolven zijn **longitudinaal**. Hoe weet je dat?",
        options: [
          "Lucht-deeltjes bewegen heen-en-weer in de richting van voortplanting (compressie + verdunning)",
          "Lucht-deeltjes bewegen loodrecht op de voortplanting",
          "Geluid heeft geen golfeigenschappen",
          "Geluid kan zonder medium reizen",
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat zou transversaal zijn (zoals touw).", "Onjuist — geluid is WEL een golf.", "Onjuist — geluid heeft medium nodig (geen geluid in vacuüm)."],
        uitlegPad: {
          stappen: [
            { titel: "Compressie + verdunning = langsbeweging", tekst: "Een luidspreker duwt lucht-deeltjes vooruit (compressie) en trekt ze terug (verdunning). De deeltjes bewegen **langs** de richting waarin het geluid reist → longitudinaal. Daarom kan geluid niet door vacuüm (geen deeltjes om te duwen)." },
          ],
          niveaus: {
            basis: "Deeltjes bewegen langs voortplantingsrichting = longitudinaal. A.",
            simpeler: "Lucht wordt vooruit-achteruit geduwd in dezelfde richting als de golf = longitudinaal. A.",
            nogSimpeler: "Langsbeweging = A.",
          },
        },
      },
    ],
  },

  // ─── C. Geluid ────────────────────────────────────────────
  {
    title: "Geluid — snelheid, decibel, hoorbaarheid",
    explanation:
      "**Geluid** = longitudinale drukgolf door een medium (lucht, water, vast materiaal).\n\n**Snelheid in verschillende media**:\n• Lucht (20 °C): ~343 m/s.\n• Water: ~1480 m/s (4× sneller).\n• Staal: ~5100 m/s (15× sneller).\n• **Hoe stijver het medium → hoe sneller**.\n\n**Snelheid + temperatuur** (lucht):\n• v ≈ 331 + 0,6·θ (met θ in °C). Bij 0 °C: 331 m/s; bij 20 °C: 343 m/s.\n\n**Hoorbaar frequentie-bereik mens**:\n• ~20 Hz tot 20 kHz (jong); daalt met leeftijd.\n• <20 Hz = infrageluid (olifanten gebruiken dit).\n• >20 kHz = ultrageluid (vleermuizen, echografie).\n\n**Luidheid + intensiteit**:\n• Intensiteit I (W/m²): energie per oppervlakte per tijd.\n• Decibel-schaal: **L = 10·log(I/I₀)** met I₀ = 10⁻¹² W/m² (gehoordrempel).\n• **Logaritmisch**: 10 dB erbij = 10× zo intens; 20 dB = 100× zo intens.\n• 0 dB = stilte-grens; 60 dB = gesprek; 100 dB = drilhamer; 120 dB = pijngrens.\n\n**Bron + waarnemer**:\n• Geluid wordt zwakker met afstand: I ~ 1/r² (energie verspreidt over groter oppervlak).\n• Verdubbel afstand → vier keer minder intens → −6 dB.\n\n**Echo + galm**:\n• Echo: gereflecteerd geluid, hoor je apart (oren scheiden >0,1 s = >17 m heen+terug).\n• Galm: snelle reflecties die met origineel mengen.\n\n**Snelheidsmeting**:\n• Bliksem-donder: tel seconden, deel door 3 → afstand in km (geluid ~340 m/s ≈ 1 km per 3 s).",
    checks: [
      {
        q: "Bij donder hoor je het **9 s** na de bliksem. Hoe ver is de bui? (v ≈ 340 m/s)",
        options: ["~3 km", "~9 km", "~30 km", "~1 km"],
        answer: 0,
        wrongHints: [null, "Niet — alleen de tijd in seconden direct als km is fout.", "Te groot — controleer.", "Te klein — 1 km zou 3 s zijn."],
        uitlegPad: {
          stappen: [
            { titel: "Geluid ~340 m per seconde", tekst: "Afstand = v · t = 340 × 9 = **3060 m ≈ 3 km**. Snelle vuistregel: deel seconden door 3 → km." },
          ],
          theorie: "Licht reist veel sneller (300 000 km/s) dus 'zien' is praktisch instant; alleen geluid heeft meetbare vertraging.",
          niveaus: {
            basis: "9 s × 340 m/s ≈ 3 km. A.",
            simpeler: "Donder = 1 km per 3 s. 9/3 = 3 km. A.",
            nogSimpeler: "9/3=3. A.",
          },
        },
      },
      {
        q: "Geluid van **80 dB** naar **90 dB** — hoeveel keer zo intens?",
        options: ["10×", "2×", "1,5×", "100×"],
        answer: 0,
        wrongHints: [null, "Niet — dB is logaritmisch, niet lineair.", "Te klein — dB-schaal is steiler.", "Dat zou +20 dB zijn."],
        uitlegPad: {
          stappen: [
            { titel: "+10 dB = ×10", tekst: "De decibel-schaal is **logaritmisch**: elke +10 dB betekent 10× zo grote intensiteit (W/m²). Dus 90 dB is 10× zo intens als 80 dB. Subjectief klinkt het wel maar 2× zo luid (psycho-akoestiek), maar fysiek 10× zo veel energie." },
          ],
          theorie: "Onthoud-tabel: +10 dB = ×10; +20 dB = ×100; +30 dB = ×1000.",
          niveaus: {
            basis: "+10 dB = ×10 intens. A.",
            simpeler: "10 dB erbij = 10× zo veel energie/m². A.",
            nogSimpeler: "+10 = ×10. A.",
          },
        },
      },
      {
        q: "Geluid reist het **snelst** in:",
        options: ["Staal", "Water", "Lucht (20°C)", "Vacuüm"],
        answer: 0,
        wrongHints: [null, "Niet — water is sneller dan lucht, maar staal nog sneller.", "Niet — lucht is juist het traagst van deze drie.", "Vacuüm = geen geluid (geen medium)."],
        uitlegPad: {
          stappen: [
            { titel: "Stijver medium = sneller", tekst: "Geluid plant zich voort door deeltjes tegen elkaar te duwen. In staal zitten atomen heel dicht + sterk gebonden → snelle overdracht. Volgorde: staal (~5100 m/s) > water (~1480) > lucht (~343) > vacuüm (0)." },
          ],
          basiskennis: [{ onderwerp: "Waarom vacuüm = stil?", uitleg: "Geen deeltjes = niets om te duwen. Daarom hoor je geen geluid in de ruimte (films liegen)." }],
          niveaus: {
            basis: "Stijver = sneller → staal. A.",
            simpeler: "Staal-atomen zitten heel dicht → geluid snel = A.",
            nogSimpeler: "Staal = A.",
          },
        },
      },
      {
        q: "Hoorbaar frequentie-bereik van een gezond jong mens?",
        options: ["~20 Hz – 20 kHz", "~100 Hz – 1 kHz", "~50 Hz – 5 kHz", "~1 kHz – 100 kHz"],
        answer: 0,
        wrongHints: [null, "Te smal — mensen horen veel breder.", "Te smal aan de hoge kant.", "Te hoog — 100 kHz is ultrageluid."],
        uitlegPad: {
          stappen: [{ titel: "20 Hz – 20 kHz", tekst: "Klassiek bereik. Onder 20 Hz = infrageluid (voelbaar, niet hoorbaar), boven 20 kHz = ultrageluid (vleermuizen, echo-medische apparatuur). Bovenkant zakt met leeftijd — 50-jarigen vaak max 12-15 kHz." }],
          niveaus: {
            basis: "20-20 000 Hz. A.",
            simpeler: "Van zeer lage bas (20 Hz) tot piep-hoge tonen (20 kHz). A.",
            nogSimpeler: "20 Hz tot 20 kHz = A.",
          },
        },
      },
      {
        q: "Je verdubbelt de afstand tot een geluidsbron. Intensiteit wordt:",
        options: ["4× kleiner (−6 dB)", "2× kleiner (−3 dB)", "8× kleiner", "Onveranderd"],
        answer: 0,
        wrongHints: [null, "Niet — energie verspreidt over oppervlak ~r² → 1/r²-wet.", "Niet — dat is een 3D-energie-volume-fout.", "Niet — geluid wordt wel zwakker."],
        uitlegPad: {
          stappen: [
            { titel: "1/r²-wet", tekst: "Punt-bron straalt energie uit over een **bol** met oppervlak 4π·r². Verdubbel r → oppervlak ×4 → intensiteit ÷4. In dB: 10·log(1/4) ≈ −6 dB." },
          ],
          theorie: "Geldt voor **vrije punt-bron**. In een ruimte met reflecties is afval minder steil. Wettelijk werken met **laagste blootstelling** is meestal beter dan dempen aan de bron.",
          niveaus: {
            basis: "2× verder = 4× minder = −6 dB. A.",
            simpeler: "Oppervlak groeit met r² → energie ÷4 bij ×2 afstand. A.",
            nogSimpeler: "−6 dB = A.",
          },
        },
      },
    ],
  },

  // ─── D. Resonantie + staande golven ───────────────────────
  {
    title: "Resonantie + staande golven",
    explanation:
      "**Eigentrillingen**: elk object heeft natuurlijke trillingsfrequenties (snaar, buis, brug, glas). Wordt het met die frequentie aangestoten, dan trilt het mee → **resonantie**.\n\n**Voorbeelden resonantie**:\n• Schommel: duwen op het juiste moment → steeds groter.\n• Wijnglas barst bij juiste toon (zangeres-stem).\n• Tacoma-brug 1940: wind veroorzaakte resonantie → instortte.\n• Radio-ontvanger: stem 'm op zender-frequentie via afstembare LC-kring.\n\n**Staande golf** ontstaat als een lopende golf reflecteert en zich met zichzelf overlapt → vaste patroon met **knopen** (geen trilling) en **buiken** (max trilling).\n\n**Snaar — beide einden vast** (gitaar, viool):\n• Eigenfrequenties: f_n = n·v/(2L), n = 1, 2, 3, ...\n• **Grondtoon** (n=1): f₁ = v/(2L), golflengte λ₁ = 2L.\n• Boventonen: 2·f₁, 3·f₁, ... (= **harmonisch spectrum**, geheel-getal-veelvoud).\n\n**Buis — beide kanten open** (fluit, panfluit):\n• f_n = n·v/(2L) — zelfde formule als snaar.\n• λ₁ = 2L (buik aan beide eindes).\n\n**Buis — één kant dicht** (klarinet, glasfles):\n• f_n = (2n−1)·v/(4L) — alleen ONEVEN harmonieken.\n• Grondtoon: f₁ = v/(4L). Klinkt **een octaaf lager** dan een open buis van dezelfde lengte!\n\n**Stemvork-meeneem-effect**: 2 stemvorken op zelfde frequentie naast elkaar → één laten trillen → ander begint ook (sympathische resonantie).\n\n**Examen-vraag-type**:\n• Gegeven: lengte snaar L + v-touwgolf. Wat is grondtoon?\n• Antwoord: f₁ = v/(2L).\n• Bij open of half-gesloten buis: check welke formule!",
    checks: [
      {
        q: "Een **gitaarsnaar** is L = 0,65 m. Golfsnelheid v = 286 m/s. **Grondtoon**?",
        options: ["220 Hz", "440 Hz", "143 Hz", "880 Hz"],
        answer: 0,
        wrongHints: [null, "Niet — dat is octaaf hoger.", "Niet — controleer formule f = v/(2L), niet v/L.", "Niet — 2 octaven te hoog."],
        uitlegPad: {
          stappen: [
            { titel: "f₁ = v/(2L)", tekst: "f₁ = 286 / (2 × 0,65) = 286 / 1,3 = **220 Hz**. Dat is een A3-toon — bijvoorbeeld de open A-snaar." },
          ],
          theorie: "Voor snaar: λ₁ = 2L (één buik in het midden). Korter maken (vinger op fret) → kortere λ → hogere f.",
          niveaus: {
            basis: "f = 286/1,3 = 220. A.",
            simpeler: "286 gedeeld door 2·0,65 = 220 Hz. A.",
            nogSimpeler: "220 = A.",
          },
        },
      },
      {
        q: "Resonantie betekent dat een object:",
        options: [
          "Sterk meetrilt als de aansturende frequentie zijn eigenfrequentie raakt",
          "Altijd trilt met dezelfde amplitude",
          "Geen energie kwijt raakt",
          "Zwakker reageert als de frequentie matcht",
        ],
        answer: 0,
        wrongHints: [null, "Niet — amplitude varieert wel.", "Niet — er is wel demping in de echte wereld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Eigenfrequentie raken", tekst: "Bij resonantie matcht de aandrijf-frequentie met de **natuurlijke** trillingsfrequentie van het systeem → energie wordt elke cyclus toegevoegd → amplitude groeit (tot demping/breuk)." },
          ],
          voorbeelden: [
            { type: "klein", tekst: "Schommel duwen op het juiste moment." },
            { type: "groot", tekst: "Tacoma Narrows brug 1940 — wind veroorzaakte resonantie, brug stortte in." },
          ],
          niveaus: {
            basis: "Matchen van eigenfrequentie = sterke meeresonantie. A.",
            simpeler: "Op de juiste frequentie duwen → trilling wordt steeds groter. A.",
            nogSimpeler: "Match = grote trilling = A.",
          },
        },
      },
      {
        q: "Een **open buis** heeft λ-grondtoon = 2L. Een **buis met één gesloten kant** heeft λ-grondtoon = ?",
        options: ["4L", "2L", "L", "L/2"],
        answer: 0,
        wrongHints: [null, "Niet — bij ene dichte kant is grondtoon-golflengte langer.", "Niet — dat zou een buik aan beide eindes betekenen.", "Niet — niet kleiner dan L."],
        uitlegPad: {
          stappen: [
            { titel: "Dichte kant = knoop", tekst: "Aan een dichte kant moet de lucht in rust zijn → **knoop**. Aan open kant → **buik**. Het kortste patroon dat in een buis van L past met knoop+buik = kwart-golflengte → λ = 4L." },
          ],
          theorie: "Half-gesloten buis (klarinet, glasfles) heeft alleen oneven boventonen (3f₁, 5f₁, ...) → karakteristieke 'holle' klank.",
          niveaus: {
            basis: "Half-gesloten buis: λ = 4L. A.",
            simpeler: "Dichte kant = knoop, open = buik → kortste past in 1/4 golflengte → λ = 4L. A.",
            nogSimpeler: "4L = A.",
          },
        },
      },
      {
        q: "Op een snaar met grondtoon 110 Hz krijg je een **staande golf met 3 buiken**. Welke frequentie wordt aangestuurd?",
        options: ["330 Hz", "220 Hz", "110 Hz", "440 Hz"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou 2 buiken zijn.", "Niet — dat is de grondtoon (1 buik).", "Niet — dat is 4× grondtoon."],
        uitlegPad: {
          stappen: [
            { titel: "n-de harmonische", tekst: "n buiken = n-de harmonische = n·f₁. Hier n = 3 → f = 3 × 110 = **330 Hz**." },
          ],
          niveaus: {
            basis: "3 buiken = 3·f₁ = 330. A.",
            simpeler: "3 buiken op de snaar = 3e boventoon = 3×110 = 330 Hz. A.",
            nogSimpeler: "3×110=330. A.",
          },
        },
      },
      {
        q: "Een zangeres laat een wijnglas barsten. Dit is een voorbeeld van:",
        options: [
          "Resonantie + amplitude-opbouw boven sterkte-grens",
          "Geluidssnelheid in glas",
          "Reflectie van geluid",
          "Doppler-effect",
        ],
        answer: 0,
        wrongHints: [null, "Niet — irrelevant voor barsten.", "Niet — reflectie alleen breekt geen glas.", "Niet — geen bewegende bron/waarnemer."],
        uitlegPad: {
          stappen: [
            { titel: "Toon op eigenfrequentie van glas", tekst: "Elk glas heeft een eigen-tikkende frequentie (hoor maar als je 'm tikt). Als de zangeres precies die toon haalt en lang genoeg houdt → resonantie → trilling-amplitude groeit → glas-wand kan spanning niet meer aan → barsten." },
          ],
          niveaus: {
            basis: "Resonantie laat glas-trilling exploderen. A.",
            simpeler: "Stem matcht glas-eigenfrequentie → trilling groeit → glas breekt. A.",
            nogSimpeler: "Resonantie = A.",
          },
        },
      },
    ],
  },

  // ─── E. Eindopdracht (incl. Doppler-VWO) ──────────────────
  {
    title: "Eindopdracht — examen-mix + Doppler-effect (VWO)",
    explanation:
      "**Doppler-effect** (VWO-stof, ook leuk HAVO-extra):\nWanneer bron en waarnemer ten opzichte van elkaar bewegen, **verandert de waargenomen frequentie**.\n\n• Bron komt naar je toe → golven worden samengedrukt → **hogere f**.\n• Bron beweegt weg → golven uitgerekt → **lagere f**.\n\n**Klassiek voorbeeld**: ambulance-sirene. Bij naderen hoor je hoger; bij wegrijden lager.\n\n**Formules (lucht, v_geluid = c)**:\n• Bron beweegt, waarnemer stil: f' = f · c / (c − v_bron) bij naderen; f' = f · c / (c + v_bron) bij wegbewegen.\n• Waarnemer beweegt, bron stil: f' = f · (c ± v_w) / c.\n\n**Astronomie**: roodverschuiving. Sterrenstelsels die van ons af bewegen → spectrum verschoven naar rood → uitbreiding heelal (Hubble).\n\n**Examen-Cito-tip**: bij Doppler altijd eerst tekenen + richting bepalen. 'Komt naar je toe' = hogere f.\n\n**Andere onderwerpen in deze stap**: mix van A-D met examen-stijl wiskunde.",
    checks: [
      {
        q: "Een touw heeft v = 12 m/s. De bron trilt op **6 Hz**. Wat is λ?",
        options: ["2,0 m", "0,5 m", "72 m", "6 m"],
        answer: 0,
        wrongHints: [null, "Niet — controleer formule λ=v/f.", "Veel te groot.", "Niet — dat is f, niet λ."],
        uitlegPad: {
          stappen: [{ titel: "λ = v/f", tekst: "λ = 12/6 = **2,0 m**." }],
          niveaus: {
            basis: "12/6=2. A.",
            simpeler: "Snelheid gedeeld door frequentie = 12÷6 = 2 m. A.",
            nogSimpeler: "2,0 = A.",
          },
        },
      },
      {
        q: "Een **slinger op de maan** (g_maan ≈ 1,6 m/s²) heeft dezelfde lengte als op aarde. Periode is daar:",
        options: ["Langer (slingert trager)", "Korter (slingert sneller)", "Gelijk", "Nul"],
        answer: 0,
        wrongHints: [null, "Niet — minder g betekent juist trager.", "Niet — g verandert wel.", "Slinger werkt nog."],
        uitlegPad: {
          stappen: [
            { titel: "T = 2π·√(L/g)", tekst: "Kleinere g (maan: 1,6 vs aarde 9,81) → grotere T = trager. Concreet: factor √(9,81/1,6) ≈ √6,1 ≈ 2,5× zo lang." },
          ],
          niveaus: {
            basis: "Lager g → langere T. A.",
            simpeler: "Minder zwaartekracht trekt slinger minder snel terug → langzamer. A.",
            nogSimpeler: "Langer = A.",
          },
        },
      },
      {
        q: "Een **ambulance** (sirene 500 Hz) rijdt **naar je toe** met 30 m/s. Geluidssnelheid 340 m/s. Waargenomen f?",
        options: ["~548 Hz", "~459 Hz", "~470 Hz", "500 Hz"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou bij WEGRIJDEN gelden.", "Niet — controleer richting/formule.", "Niet — Doppler doet wel iets."],
        uitlegPad: {
          stappen: [
            { titel: "f' = f · c/(c − v_bron)", tekst: "Bron naar je toe: noemer kleiner → f' hoger. f' = 500 · 340/(340−30) = 500 · 340/310 ≈ 500 · 1,097 = **~548 Hz**." },
          ],
          theorie: "Bij wegrijden: f' = 500 · 340/370 ≈ 459 Hz. Het verschil hoor je duidelijk wanneer ambulance passeert.",
          niveaus: {
            basis: "f' = 500·340/310 ≈ 548. A.",
            simpeler: "Komt naar je toe → hoger → ~548 Hz. A.",
            nogSimpeler: "548 = A.",
          },
        },
      },
      {
        q: "Een geluid van 70 dB naast een ander van 70 dB. Samen (zelfde frequentie + in fase, ideaal):",
        options: ["~73 dB", "~140 dB", "~70 dB", "~77 dB"],
        answer: 0,
        wrongHints: [null, "Niet — dB is logaritmisch, je telt NIET op tot 140.", "Niet — bij twee bronnen is intensiteit wel groter.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "2× intens = +3 dB", tekst: "Twee identieke bronnen geven 2× de intensiteit. Op dB-schaal: 10·log(2) ≈ **+3 dB**. Dus 70 + 70 dB ≈ 73 dB, niet 140 dB. Veel-gemaakte examen-fout!" },
          ],
          theorie: "Onthoud-tabel: 2× I = +3 dB; 4× I = +6 dB; 10× I = +10 dB.",
          niveaus: {
            basis: "Dubbel = +3 dB → 73 dB. A.",
            simpeler: "Twee gelijke bronnen = ×2 energie = +3 dB. A.",
            nogSimpeler: "+3 dB = A.",
          },
        },
      },
      {
        q: "Voor een **half-open buis** (één kant dicht) klinkt de grondtoon **een octaaf lager** dan een open buis van dezelfde lengte. Waarom?",
        options: [
          "Half-open: λ₁ = 4L; open: λ₁ = 2L → λ verdubbelt → f halveert (= octaaf lager)",
          "Beide hebben dezelfde grondtoon",
          "Half-open buis heeft 2× zo hoge frequentie",
          "Beide afhankelijk van temperatuur, niet van eindes",
        ],
        answer: 0,
        wrongHints: [null, "Niet — meet eindes.", "Niet — tegenovergesteld.", "Niet — eindes bepalen wel mode."],
        uitlegPad: {
          stappen: [
            { titel: "λ-verdubbeling = f-halvering", tekst: "Open buis: buik aan beide kanten → λ₁ = 2L. Half-open: knoop aan dichte kant + buik aan open → λ₁ = 4L. Dus λ verdubbelt; bij gelijke v geldt f = v/λ → f halveert → octaaf lager." },
          ],
          theorie: "Klarinet (half-open) klinkt daarom een octaaf lager dan een fluit (open) van dezelfde lengte. Daarnaast: half-open buizen hebben alleen ONEVEN harmonieken (3f₁, 5f₁, ...) → typische 'holle' klank.",
          niveaus: {
            basis: "λ verdubbelt → f halveert → octaaf lager. A.",
            simpeler: "Dichte kant trekt golf langer → halve frequentie. A.",
            nogSimpeler: "λ ×2 = f ÷2 = octaaf. A.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const trillingenGolvenHavoVwo = {
  id: "trillingen-golven-havo-vwo",
  title: "Trillingen + Golven (HAVO/VWO Natuurkunde)",
  emoji: "🌊",
  level: "havo-vwo-4-5",
  subject: "natuurkunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Natuurkunde — Trillingen + golven (CSE-onderwerp)",
  prerequisites: [
    { id: "krachten-natuurkunde", title: "Krachten + Newton-wetten", niveau: "vmbo-3" },
    { id: "mechanica-havo-vwo", title: "Mechanica (HAVO/VWO)", niveau: "havo-3F" },
  ],
  intro:
    "Trillingen + Golven voor het HAVO/VWO CSE (Centraal Schriftelijk Eindexamen) — periode, frequentie, golfvergelijking v=f·λ, geluid, resonantie, staande golven. VWO-stof: Doppler-effect. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "trilling", "frequentie", "periode", "amplitude", "Hz", "hertz",
    "harmonische trilling", "sin", "cos",
    "slinger", "massa veer", "veerconstante",
    "golf", "golflengte", "lambda", "v=f·λ",
    "transversaal", "longitudinaal",
    "geluid", "decibel", "dB",
    "geluidssnelheid", "343 m/s",
    "infrageluid", "ultrageluid", "vleermuis", "echolocatie",
    "resonantie", "staande golf", "eigenfrequentie",
    "knoop", "buik", "harmonische", "boventoon",
    "snaar", "gitaar", "viool", "fluit", "klarinet",
    "Doppler", "doppler-effect", "ambulance",
    "roodverschuiving", "Hubble",
  ],
  chapters,
  steps,
};

export default trillingenGolvenHavoVwo;
