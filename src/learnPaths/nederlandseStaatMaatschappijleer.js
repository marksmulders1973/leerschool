// Leerpad: De Nederlandse staat — Maatschappijleer onderbouw VO
// 11 stappen in 5 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  red: "#e53935", white: "#ffffff", blue: "#1e88e5",
  good: "#00c853",
  parlement: "#26a69a", regering: "#ec407a", koning: "#ffb300", recht: "#7e57c2",
};

const stepEmojis = ["🏛️", "🗳️", "📜", "🏠", "🏛️", "👑", "📖", "⚖️", "🎫", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een democratie?", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "Wie regeert? — staatsmachten", emoji: "🏛️", from: 2, to: 5 },
  { letter: "C", title: "Wet, recht en burger", emoji: "⚖️", from: 6, to: 8 },
  { letter: "D", title: "NL in de wereld", emoji: "🌍", from: 9, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  {
    title: "Wat is een democratie?",
    explanation: "**Democratie** komt uit het Grieks: *demos* (volk) + *kratos* (macht) — de macht is van het volk.\n\nIn een democratie:\n• **Burgers kiezen** wie hen regeert (verkiezingen).\n• **Iedereen mag stemmen** (vanaf 18 jaar in NL).\n• **Vrije media** mogen kritiek geven op de regering.\n• **Mensenrechten** zijn beschermd in de grondwet.\n• **Meerderheid beslist** — maar minderheden worden ook beschermd.\n\nNederland is een **parlementaire democratie**: het volk kiest het parlement (Tweede Kamer), die controleert de regering.\n\n**Tegenpolen** van democratie:\n• **Dictatuur**: één persoon heeft alle macht.\n• **Absolute monarchie**: koning heerst zonder grondwet.\n• **Theocratie**: priesters/religie regeren.\n\n**Belangrijk**: Nederland is óók een **monarchie** (koningshuis), maar de koning heeft géén echte politieke macht. De grondwet bepaalt wat hij wel/niet mag. We noemen dit **constitutionele monarchie**.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">democratie</text>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">demos (volk) + kratos (macht)</text>
<rect x="40" y="70" width="220" height="60" rx="10" fill="${COLORS.parlement}" opacity="0.20" stroke="${COLORS.parlement}" stroke-width="2"/>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.parlement}" font-size="12" font-family="Arial" font-weight="bold">het volk kiest</text>
<text x="150" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">→ parlement → regering</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">NL = parlementaire democratie</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent **democratie**?",
        options: ["Macht van het volk","Macht van de koning","Macht van priesters","Macht van het leger"],
        answer: 0,
        wrongHints: [null, "Dat is monarchie.", "Dat is theocratie.", "Dat is militaire dictatuur."],
        uitlegPad: {
          stappen: [{ titel: "Demos + kratos", tekst: "Democratie = Grieks: demos (volk) + kratos (macht). 'Macht van het volk'. Volk kiest wie regeert via verkiezingen. Tegenovergesteld van monarchie (koning), theocratie (priesters) of dictatuur (één persoon)." }],
          woorden: [{ woord: "demos", uitleg: "Grieks voor 'volk'." }, { woord: "kratos", uitleg: "Grieks voor 'macht/heerschappij'." }],
          theorie: "Oude Griekenland (Athene 500 v.Chr.) bedacht het. Modern: NL parlementaire democratie sinds 1848 (Thorbecke).",
          voorbeelden: [{ type: "andere", tekst: "Monarchie = macht koning. Theocratie = priesters (bv. Iran). Dictatuur = 1 persoon (Hitler, Stalin)." }],
          basiskennis: [{ onderwerp: "Letterlijk", uitleg: "Vertaling = 'volk' + 'macht'. Letterlijk." }],
          niveaus: { basis: "Macht volk. A.", simpeler: "Democratie = Grieks 'macht van volk'. = A.", nogSimpeler: "Volk = A." },
        },
      },
      {
        q: "Wat is een **constitutionele monarchie**?",
        options: ["Koning heeft beperkte macht door grondwet","Koning heeft alle macht","Geen koning, alleen president","Geen wet"],
        answer: 0,
        wrongHints: [null, "Dat is absolute monarchie.", "Dat is een republiek.", "Dat is anarchie."],
        uitlegPad: {
          stappen: [{ titel: "Koning + grondwet samen", tekst: "Constitutioneel = 'volgens grondwet'. Monarchie = koningschap. Samen: koning bestaat WEL maar zijn macht is BEPERKT door grondwet. NL voorbeeld: Willem-Alexander is staatshoofd maar mag wetten niet weigeren." }],
          woorden: [{ woord: "constitutioneel", uitleg: "Volgens (grond)wet. Met regels en limieten." }, { woord: "monarchie", uitleg: "Staatsvorm met erfelijk staatshoofd (koning of koningin)." }],
          theorie: "NL is constitutionele monarchie sinds 1848 (Thorbecke-grondwet). Verschil met absolute monarchie (koning heerst zonder grondwet, zoals vroeger Lodewijk XIV Frankrijk).",
          voorbeelden: [{ type: "landen", tekst: "Constitutioneel: NL, België, Engeland, Zweden, Japan, Spanje. Absoluut: Saoedi-Arabië, Brunei. Republiek (geen koning): Frankrijk, Duitsland, VS." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Absoluut = alle macht. Republiek = president (geen koning). Anarchie = geen wet." }],
          niveaus: { basis: "Koning beperkt door wet. A.", simpeler: "Constitutionele monarchie = koning bestaat, maar grondwet beperkt zijn macht. NL is dit. = A.", nogSimpeler: "Koning + wet = A." },
        },
      },
    ],
  },
  {
    title: "Stemrecht en verkiezingen",
    explanation: "Wie mag stemmen in Nederland?\n\n**Voorwaarden**:\n• **18 jaar** of ouder.\n• **Nederlandse nationaliteit** (voor landelijke verkiezingen).\n• Niet uitgesloten van kiesrecht (zeer zeldzaam).\n\nEr zijn meerdere soorten verkiezingen:\n\n**1. Tweede Kamer** (om de 4 jaar) — voor het landelijke parlement (150 zetels).\n**2. Provinciale Staten** (om de 4 jaar) — kiest tegelijk indirect de Eerste Kamer.\n**3. Gemeenteraad** (om de 4 jaar) — voor de gemeente waar je woont.\n**4. Europees Parlement** (om de 5 jaar) — voor Europa.\n**5. Waterschap** (om de 4 jaar) — over dijken en water.\n\n**Hoe stem je?**\n• Je krijgt een **stempas** thuis.\n• Je gaat naar een **stembureau** met je legitimatie.\n• Je kiest één **kandidaat** van één partij. Dat is een persoonlijke stem voor díe persoon.\n• Geheim! Niemand mag zien op wie je stemt.\n\n**Geschiedenis**: vrouwen mogen in NL stemmen sinds **1919** (algemeen kiesrecht).",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verkiezingen</text>
<rect x="20" y="40" width="260" height="50" rx="6" fill="${COLORS.parlement}" opacity="0.15"/>
<text x="40" y="62" fill="${COLORS.text}" font-size="11" font-family="Arial">18+ Nederlandse nationaliteit</text>
<text x="40" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">→ stempas + legitimatie → stembureau</text>
<text x="20" y="112" fill="${COLORS.text}" font-size="11" font-family="Arial">5 soorten: Tweede Kamer, Provincie,</text>
<text x="20" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">Gemeente, Europa, Waterschap</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">vrouwenkiesrecht: sinds 1919</text>
</svg>`,
    checks: [
      {
        q: "Vanaf welke leeftijd mag je stemmen in Nederland?",
        options: ["18 jaar", "16 jaar", "21 jaar", "25 jaar"],
        answer: 0,
        wrongHints: [null, "16 mag bij sommige jongerenraden, niet officieel.", "21 was vroeger.", "Nooit zo hoog geweest."],
        uitlegPad: {
          stappen: [{ titel: "18+ stemt", tekst: "Vanaf 18 jaar mag je in NL stemmen voor alle verkiezingen: Tweede Kamer, gemeente, provincie, EU, waterschap. Sinds 1972 leeftijd 18 (was 21). Discussie nu over verlagen naar 16 — nog niet door." }],
          woorden: [{ woord: "kiesgerechtigde leeftijd", uitleg: "Minimum leeftijd om te mogen stemmen." }],
          theorie: "Andere landen: Oostenrijk 16, Schotland 16 voor referenda. Meeste EU-landen 18. Argument voor 16: jongeren betalen ook belasting, klimaatbeleid raakt hen. Argument tegen: rijpheid.",
          voorbeelden: [{ type: "andere leeftijden", tekst: "Stemmen: 18. ID-plicht: 14. Strafrecht volwassen: 18. Drinken alcohol: 18. Auto-rijbewijs: 18. Roken: 18." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "16 alleen voor sommige jongerenraden (geen echt stemrecht). 21 was tot 1972. 25 nooit." }],
          niveaus: { basis: "18. A.", simpeler: "Stemmen in NL = 18+. = A.", nogSimpeler: "18 = A." },
        },
      },
      {
        q: "Sinds welk jaar mogen vrouwen in Nederland stemmen?",
        options: ["1919", "1848", "1945", "1980"],
        answer: 0,
        wrongHints: [null, "1848 = grondwet Thorbecke (alleen rijke mannen).", "1945 = einde WO2.", "Te laat."],
        uitlegPad: {
          stappen: [{ titel: "1919 = algemeen kiesrecht", tekst: "1919: vrouwen mogen voor het eerst stemmen in NL (passief kiesrecht al sinds 1917). Daarvoor alleen mannen (sinds 1917 alle mannen, daarvoor alleen rijke mannen vanaf Thorbecke 1848). Aletta Jacobs streed hiervoor decennia." }],
          woorden: [{ woord: "Aletta Jacobs", uitleg: "Eerste vrouwelijke arts NL + voorvechter vrouwenkiesrecht (1854-1929)." }, { woord: "passief kiesrecht", uitleg: "Recht om gekozen te worden. Voor vrouwen NL: 1917." }, { woord: "actief kiesrecht", uitleg: "Recht om te stemmen. Voor vrouwen NL: 1919." }],
          theorie: "Internationale context: Nieuw-Zeeland eerste (1893). VS 1920. UK 1928. NL 1919 — middenmoot. Vóór 1917 alleen mannelijke 'censuskiezers' (genoeg belasting betalend).",
          voorbeelden: [{ type: "tijdlijn", tekst: "1848 Thorbecke: alleen rijke mannen. 1917 algemeen mannenstemrecht + passief vrouwenstemrecht. 1919 actief vrouwenstemrecht. 1972 leeftijd 21→18." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "1848 = mannen-stemrecht alleen. 1945 = einde WO2 (geen kiesrecht-jaar). 1980 = te laat (al 60 jaar daarvoor)." }],
          niveaus: { basis: "1919. A.", simpeler: "Vrouwen stemmen NL sinds 1919 (mannen sinds 1917). = A.", nogSimpeler: "1919 = A." },
        },
      },
    ],
  },

  // B
  {
    title: "Trias Politica — drie machten gescheiden",
    explanation: "Een goede democratie heeft **drie gescheiden machten** (Trias Politica, bedacht door **Montesquieu**, 1748):\n\n**1. Wetgevende macht** — maakt wetten.\n• In NL: **Tweede Kamer + Eerste Kamer + regering**.\n\n**2. Uitvoerende macht** — voert wetten uit.\n• In NL: **regering** (kabinet) + ministeries + politie.\n\n**3. Rechtsprekende macht** — oordeelt of wetten zijn overtreden.\n• In NL: **rechters** (onafhankelijk!).\n\n**Waarom scheiden?**\nAls dezelfde persoon wetten maakt, uitvoert én rechtspreekt → kan hij die misbruiken. Door drie aparte machten **controleren ze elkaar**. Dat heet **checks and balances**.\n\n**Voorbeeld**:\n• Tweede Kamer maakt een wet → regering voert hem uit → een rechter beoordeelt of iemand de wet heeft overtreden.\n• Geen van de drie kan in zijn eentje doen wat hij wil.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Trias Politica</text>
<rect x="20" y="40" width="80" height="120" rx="8" fill="${COLORS.parlement}" opacity="0.20" stroke="${COLORS.parlement}" stroke-width="2"/>
<text x="60" y="62" text-anchor="middle" fill="${COLORS.parlement}" font-size="11" font-family="Arial" font-weight="bold">WETGEVEND</text>
<text x="60" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Kamer +</text>
<text x="60" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">regering</text>
<text x="60" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">maakt wetten</text>
<rect x="110" y="40" width="80" height="120" rx="8" fill="${COLORS.regering}" opacity="0.20" stroke="${COLORS.regering}" stroke-width="2"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.regering}" font-size="11" font-family="Arial" font-weight="bold">UITVOEREND</text>
<text x="150" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">regering</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ politie</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">voert uit</text>
<rect x="200" y="40" width="80" height="120" rx="8" fill="${COLORS.recht}" opacity="0.20" stroke="${COLORS.recht}" stroke-width="2"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.recht}" font-size="11" font-family="Arial" font-weight="bold">RECHT-</text>
<text x="240" y="76" text-anchor="middle" fill="${COLORS.recht}" font-size="11" font-family="Arial" font-weight="bold">SPREKEND</text>
<text x="240" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">rechters</text>
<text x="240" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">oordeelt</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">de drie controleren elkaar</text>
</svg>`,
    checks: [
      {
        q: "Wie bedacht de **Trias Politica**?",
        options: ["Montesquieu", "Thorbecke", "Willem van Oranje", "Plato"],
        answer: 0,
        wrongHints: [null, "Thorbecke schreef de NL grondwet 1848.", "Willem van Oranje = Tachtigjarige Oorlog.", "Plato dacht ook over staat, maar Trias Politica = Montesquieu."],
        uitlegPad: {
          stappen: [{ titel: "Montesquieu 1748", tekst: "Charles-Louis de Montesquieu, Frans Verlichtings-filosoof. Boek 'De l'esprit des lois' (1748). Bedacht idee: macht moet in 3 delen om misbruik te voorkomen. Werd basis van moderne democratieën (VS-grondwet 1787, Frans 1791, NL via Thorbecke 1848)." }],
          woorden: [{ woord: "Montesquieu", uitleg: "Frans denker 1689-1755. Verlichting. Trias Politica is zijn belangrijkste idee." }],
          theorie: "Vóór Montesquieu: koning had alle macht. Idee was revolutionair. Werd politiek principe na Franse Revolutie 1789.",
          voorbeelden: [{ type: "context", tekst: "Trias = Latijn 'drie'. Politica = politiek. 'Drie politieke machten'. Wetgevend + uitvoerend + rechtsprekend." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Thorbecke = NL-grondwet 1848. Willem van Oranje = NL-leider 16e eeuw. Plato = Griekse filosoof (4 eeuw v.Chr., andere ideeën)." }],
          niveaus: { basis: "Montesquieu. A.", simpeler: "Trias Politica = Montesquieu (1748, Frans denker). = A.", nogSimpeler: "Montesquieu = A." },
        },
      },
      {
        q: "Welke macht **maakt** wetten?",
        options: ["Wetgevende macht", "Uitvoerende macht", "Rechtsprekende macht", "Koninklijke macht"],
        answer: 0,
        wrongHints: [null, "Uitvoerend voert uit.", "Rechtsprekend oordeelt.", "Koning heeft geen wetgevende macht in NL."],
        uitlegPad: {
          stappen: [{ titel: "Wet-gevend = wet-maken", tekst: "Wetgevende macht maakt wetten. In NL: Tweede Kamer + Eerste Kamer + regering samen. Wet wordt voorgesteld, besproken, gestemd, getekend door Koning (formaliteit), gepubliceerd. Daarna is het wet." }],
          woorden: [{ woord: "wetgevend", uitleg: "Het maken van wetten. Latijn legis = wet, ferre = dragen/maken." }],
          theorie: "Andere 2 machten: uitvoerend (=regering+politie voert wetten uit) en rechtsprekend (=rechters beoordelen). Trias Politica scheidt deze 3 om misbruik te voorkomen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Tabakswet (rookverbod horeca 2008): Tweede Kamer stemde, Eerste Kamer keurde goed, Koning ondertekende, kracht van wet." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Uitvoerend = doet wat wetten zeggen. Rechter = beslist of wet overtreden. Koning = geen wetgevende macht (alleen formele ondertekening)." }],
          niveaus: { basis: "Wetgevend. A.", simpeler: "Wetten maken = wetgevende macht (Kamer + regering). = A.", nogSimpeler: "Wetgevend = A." },
        },
      },
    ],
  },
  {
    title: "Tweede Kamer — het parlement",
    explanation: "De **Tweede Kamer** is het belangrijkste orgaan van de Nederlandse democratie. Hier worden wetten gemaakt en de regering gecontroleerd.\n\n**Feiten**:\n• **150 zetels** (kamerleden).\n• Gekozen door het volk, **om de 4 jaar**.\n• Vergadert in Den Haag, **Binnenhof**.\n• Voorzitter: de **Kamervoorzitter**.\n\n**Wat doet de Tweede Kamer?**\n• **Wetten maken**: voorstel → debat → stemmen.\n• **Regering controleren**: vragen stellen aan ministers.\n• **Begroting goedkeuren**: hoe geeft Nederland geld uit?\n\n**Politieke partijen** in 2025-2026 (~15 partijen): VVD, D66, PVV, GL-PvdA, CDA, SP, ChristenUnie, SGP, FvD, BBB, NSC, Volt, etc.\n\n**Coalitie**: meestal vormen meerdere partijen samen een meerderheid (>75 zetels) en regeren samen. Dat wordt vastgelegd in een **regeerakkoord**.\n\n**Oppositie**: partijen die niet meeregeren — zij controleren extra streng.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.parlement}" font-size="13" font-family="Arial" font-weight="bold">Tweede Kamer — 150 zetels</text>
<g>
${Array.from({ length: 30 }, (_, i) => {
  const row = Math.floor(i / 10);
  const col = i % 10;
  return `<rect x="${30 + col * 24}" y="${50 + row * 22}" width="20" height="18" rx="3" fill="${COLORS.parlement}" opacity="${0.4 + (col * 0.05)}"/>`;
}).join("")}
</g>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Binnenhof, Den Haag</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">verkiezingen elke 4 jaar</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">maakt wetten + controleert regering</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel zetels heeft de Tweede Kamer?",
        options: ["150", "75", "100", "200"],
        answer: 0,
        wrongHints: [null, "Dit is het aantal van de Eerste Kamer — niet de Tweede.", "Te weinig — dit zou geen evenwichtige verhouding zijn.", "Te veel — dit aantal komt nergens in NL voor."],
        uitlegPad: {
          stappen: [{ titel: "150 zetels", tekst: "Tweede Kamer heeft 150 zetels sinds 1956. Daarvoor 100. Aantal staat vast in grondwet. Voor meerderheid: 76+ zetels nodig. Coalitie vormt vaak meerderheid (meestal 3-4 partijen samen)." }],
          woorden: [{ woord: "zetel", uitleg: "Plek in parlement. Elk lid heeft 1 zetel." }, { woord: "meerderheid", uitleg: "Meer dan helft. Voor 150 zetels: 76+." }],
          theorie: "Eerste Kamer = 75 zetels (precies de helft). Vandaar examen-val: 150 vs 75. Onthoud: Tweede = grootste, 150. Eerste = kleinere, 75.",
          voorbeelden: [{ type: "verkiezingen 2023", tekst: "Top zetels 2023: PVV 37, GL-PvdA 25, VVD 24, NSC 20, D66 9, BBB 7. Samen vormden PVV+VVD+NSC+BBB coalitie (~88 zetels)." }],
          basiskennis: [{ onderwerp: "Niet andere getallen", uitleg: "75 = Eerste Kamer. 100 = vroeger Tweede Kamer (tot 1956). 200 = bestaat niet in NL." }],
          niveaus: { basis: "150. A.", simpeler: "Tweede Kamer = 150 zetels. Eerste = 75. = A.", nogSimpeler: "150 = A." },
        },
      },
      {
        q: "Wat is een **coalitie**?",
        options: ["Meerdere partijen die samen regeren","Een politieke partij","Een verkiezingscampagne","Een internationaal verdrag"],
        answer: 0,
        wrongHints: [null, "Coalitie = samenwerking.", "Coalitie = samenwerkende partijen, geen losse partij.", "Niet hetzelfde als campagne.", "Kan ook bestaan, maar in NL = regerings-coalitie."],
        uitlegPad: {
          stappen: [{ titel: "Samen meerderheid vormen", tekst: "In NL haalt 1 partij nooit meerderheid alleen (zou >75 zetels nodig hebben). Daarom: na verkiezingen onderhandelen partijen wie samen regeren = coalitie. Ze schrijven samen REGEERAKKOORD. Anders = oppositie (controle vanuit minderheid)." }],
          woorden: [{ woord: "coalitie", uitleg: "Samenwerking van meerdere partijen om te regeren." }, { woord: "regeerakkoord", uitleg: "Document waarin coalitiepartijen afspreken wat ze samen willen doen." }, { woord: "formatie", uitleg: "Periode waarin coalitie wordt gevormd (kan maanden duren)." }],
          theorie: "NL heeft meestal coalities van 3-4 partijen. Recent: Rutte IV = VVD+D66+CDA+CU (4 partijen). 2024+: PVV+VVD+NSC+BBB (4 partijen).",
          voorbeelden: [{ type: "voorbeelden", tekst: "Coalitiepartij = doet mee in kabinet. Oppositie = niet in kabinet maar controleert. Soms ook 'minderheidskabinet' (<76 zetels, wisselend steun)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet een aparte partij (verzameling). Niet campagne (vóór verkiezing). Niet internationaal verdrag (=ander iets)." }],
          niveaus: { basis: "Samen-regerende partijen. A.", simpeler: "Coalitie = meerdere partijen die samen regeren (= meerderheid). = A.", nogSimpeler: "Samen = A." },
        },
      },
    ],
  },
  {
    title: "Eerste Kamer + regering",
    explanation: "**Eerste Kamer** (Senaat):\n• **75 zetels**.\n• Indirect gekozen door **Provinciale Staten** (provinciale parlementen).\n• Controleert wetten van de Tweede Kamer: zijn ze grondwetelijk en uitvoerbaar?\n• Kan een wet alleen aannemen of verwerpen — niet veranderen.\n\n**Regering** (= **kabinet**):\n• Bestaat uit:\n  - **Minister-president (premier)** — leider van het kabinet.\n  - **Ministers** — elk verantwoordelijk voor een gebied (Onderwijs, Financiën, Defensie, etc.).\n  - **Staatssecretarissen** — hulp-ministers voor specifieke onderwerpen.\n• Plus de **Koning** — staatshoofd (zie volgende stap).\n\n**Wat doet de regering?**\n• Voert wetten uit (uitvoerende macht).\n• Maakt wetsvoorstellen die ze naar de Tweede Kamer stuurt.\n• Regeert het land elke dag.\n\n**Hoe komt een regering tot stand?**\n1. Verkiezingen Tweede Kamer.\n2. **Formatie** (kan maanden duren): partijen onderhandelen om een meerderheid te vormen.\n3. **Regeerakkoord** wordt geschreven.\n4. Het nieuwe kabinet wordt beëdigd door de Koning.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="60" rx="6" fill="${COLORS.parlement}" opacity="0.15" stroke="${COLORS.parlement}" stroke-width="2"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.parlement}" font-size="11" font-family="Arial" font-weight="bold">EERSTE KAMER</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">75 zetels</text>
<text x="80" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">indirect gekozen</text>
<rect x="160" y="40" width="120" height="60" rx="6" fill="${COLORS.regering}" opacity="0.15" stroke="${COLORS.regering}" stroke-width="2"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.regering}" font-size="11" font-family="Arial" font-weight="bold">REGERING</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">premier + ministers</text>
<text x="220" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ koning</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">samen vormen ze de uitvoerende macht</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">formatie → regeerakkoord → kabinet</text>
</svg>`,
    checks: [
      {
        q: "Hoe wordt de **Eerste Kamer** gekozen?",
        options: ["Indirect, door Provinciale Staten","Direct, door het volk","Door de Koning","Door de premier"],
        answer: 0,
        wrongHints: [null, "Direct = Tweede Kamer.", "Koning kiest niemand zelf.", "Premier kiest geen Kamerleden."],
        uitlegPad: {
          stappen: [{ titel: "Indirect via provincie", tekst: "Eerste Kamer (75 zetels) wordt NIET direct door volk gekozen. Werkwijze: volk kiest Provinciale Staten (12 provincies, elke 4 jaar). Provinciale Statenleden kiezen vervolgens Eerste Kamerleden. Indirect = via tussenstap." }],
          woorden: [{ woord: "indirect kiesrecht", uitleg: "Kiezen via een tussenstap. Volk kiest niet direct, maar via een ander orgaan." }, { woord: "Provinciale Staten", uitleg: "Provinciaal parlement. 12 in NL." }],
          theorie: "Reden: senaat moet 'wijzer' zijn dan Tweede Kamer. Leden vaak ervaren bestuurders. Eerste Kamer kan wet alleen ja/nee zeggen, niet wijzigen.",
          voorbeelden: [{ type: "vergelijk", tekst: "Tweede Kamer = volk direct (150 zetels). Eerste Kamer = via Provinciale Staten (75 zetels). Andere indirecte verkiezing: VS-president via 'kiesmannen'." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Direct = volk stemt op kandidaat (Tweede Kamer). Koning kiest geen Kamer. Premier ook niet." }],
          niveaus: { basis: "Via Provinciale Staten. A.", simpeler: "Eerste Kamer = indirect via Provinciale Staten (volk kiest provincie → provincie kiest senaat). = A.", nogSimpeler: "Provincie kiest = A." },
        },
      },
      {
        q: "Wie is het hoofd van de **regering**?",
        options: ["Minister-president", "De Koning", "De Tweede Kamervoorzitter", "De President"],
        answer: 0,
        wrongHints: [null, "Koning is staatshoofd, niet hoofd regering.", "Voorzitter Tweede Kamer is een ander.", "Nederland heeft geen president."],
        uitlegPad: {
          stappen: [{ titel: "Minister-president = premier", tekst: "Minister-president (afgekort MP, ook 'premier') is leider van het kabinet (=regering). Voorzit ministerraad (wekelijks vergadering ministers). Vertegenwoordigt NL in buitenland. Sinds 2024: Dick Schoof (was Mark Rutte 2010-2024)." }],
          woorden: [{ woord: "Minister-president", uitleg: "Premier. Leider regering. Eerste onder gelijken (ministers)." }, { woord: "premier", uitleg: "Engels voor MP. 'Premier' = eerste/voornaamste minister." }, { woord: "kabinet", uitleg: "Alle ministers + staatssecretarissen samen. = regering." }],
          theorie: "Onderscheid: koning = STAATSHOOFD (ceremonieel). Premier = REGERINGSLEIDER (politiek). In republieken (Duitsland, Italië) heeft je beide: president (staatshoofd) + premier (regering). NL: koning + premier.",
          voorbeelden: [{ type: "premiers NL", tekst: "Mark Rutte 2010-2024 (langste premier ooit, 14 jaar). Daarvoor: Balkenende, Kok, Lubbers, Van Agt. Sinds juli 2024: Dick Schoof." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Koning = ceremonieel staatshoofd. Tweede Kamervoorzitter = leidt vergaderingen Kamer. NL heeft GEEN president." }],
          niveaus: { basis: "Minister-president. A.", simpeler: "Regeringshoofd NL = minister-president (premier). = A.", nogSimpeler: "Premier = A." },
        },
      },
    ],
  },
  {
    title: "De Koning — wat doet hij?",
    explanation: "Nederland is een **constitutionele monarchie**. De Koning is **staatshoofd**, maar heeft **geen echte politieke macht**. Wat hij doet, doet hij volgens de grondwet.\n\n**Huidige Koning**: Willem-Alexander (sinds 2013).\n**Koningin (echtgenote)**: Máxima.\n**Troonopvolgster**: prinses Amalia.\n\n**Wat doet de Koning?**\n• **Tekent wetten** — formele handeling, hij kan ze niet weigeren.\n• **Houdt Troonrede** — opent het parlementaire jaar (3e dinsdag van september = Prinsjesdag).\n• Vertegenwoordigt Nederland bij **buitenlandse bezoeken**.\n• Beëdigt nieuwe ministers.\n• Adviseert de minister-president (vertrouwelijk overleg, wekelijks).\n\n**Wat doet hij NIET?**\n• Wetten maken.\n• Politieke uitspraken in het openbaar.\n• Stemmen voor partijen.\n• Beslissingen nemen tegen de regering in.\n\n**Belangrijk principe**: \"De koning is onschendbaar, de ministers zijn verantwoordelijk\" (artikel 42 Grondwet). Dat betekent dat ministers — niet de Koning — zich verantwoorden in de Tweede Kamer.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.koning}" font-size="14" font-family="Arial" font-weight="bold">de Koning 👑</text>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Willem-Alexander (sinds 2013)</text>
<text x="20" y="80" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Wat wel:</text>
<text x="40" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">tekent wetten · troonrede</text>
<text x="40" y="114" fill="${COLORS.text}" font-size="11" font-family="Arial">representeert NL · adviseert</text>
<text x="20" y="140" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">Wat niet:</text>
<text x="40" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">wetten maken · stemmen · politiek mengen</text>
</svg>`,
    checks: [
      {
        q: "Wie is de **huidige Koning** van Nederland?",
        options: ["Willem-Alexander", "Beatrix", "Juliana", "Amalia"],
        answer: 0,
        wrongHints: [null, "Beatrix was Koningin tot 2013.", "Juliana was tot 1980.", "Amalia is troonopvolgster."],
        uitlegPad: {
          stappen: [{ titel: "Willem-Alexander sinds 2013", tekst: "30 april 2013 abdiceerde Beatrix (afstand troon). Willem-Alexander werd koning. Eerste mannelijke staatshoofd NL sinds 1890. Geboren 1967. Getrouwd met Máxima (Argentijnse). 3 dochters: Amalia (kroonprinses), Alexia, Ariane." }],
          woorden: [{ woord: "Willem-Alexander", uitleg: "Koning der Nederlanden sinds 2013. Geboren 27 april 1967." }, { woord: "abdicatie", uitleg: "Vrijwillig afstand doen van troon. Beatrix in 2013, eerder Wilhelmina (1948) en Juliana (1980)." }, { woord: "Amalia", uitleg: "Prinses van Oranje. Kroonprinses. Geboren 2003." }],
          theorie: "Erfopvolging NL: oudste kind (sinds 1983 ook vrouw mag). Lijn: Willem-Alexander → Amalia → Alexia → Ariane. Daarna prinses Margriet's lijn.",
          voorbeelden: [{ type: "tijdlijn", tekst: "Wilhelmina 1890-1948. Juliana 1948-1980. Beatrix 1980-2013. Willem-Alexander 2013-nu. 3 koninginnen achter elkaar, daarna weer een koning." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Beatrix abdiceerde 2013 (nog leven). Juliana tot 1980 (overl. 2004). Amalia = nog troonopvolgster, niet koningin." }],
          niveaus: { basis: "Willem-Alexander. A.", simpeler: "Koning sinds 2013 = Willem-Alexander. = A.", nogSimpeler: "Willem-Alexander = A." },
        },
      },
      {
        q: "Mag de Koning wetten tegenhouden?",
        options: ["Nee, hij ondertekent wetten formeel","Ja, hij heeft veto","Alleen als hij vindt dat ze fout zijn","Bij oorlog wel"],
        answer: 0,
        wrongHints: [null, "In NL constitutionele monarchie: geen veto.", "Geen mening, geen weigering.", "Geen uitzondering."],
        uitlegPad: {
          stappen: [{ titel: "Geen veto in NL", tekst: "In NL constitutionele monarchie: Koning TEKENT wetten verplicht. Dat is symbolisch (laatste stap). Hij mag niet weigeren — geen veto. Dit zou ongrondwettelijk zijn. 'De koning is onschendbaar, de ministers zijn verantwoordelijk' (art. 42 Grondwet)." }],
          woorden: [{ woord: "veto", uitleg: "Recht om iets te blokkeren. Latijn 'ik verbied'." }, { woord: "onschendbaar", uitleg: "Niet aansprakelijk. Koning kan niet politiek verantwoordelijk worden gehouden — wel de ministers." }],
          theorie: "Vergelijk VS-president: heeft wél veto-recht over wetten (kan geblokkeerd worden door 2/3 meerderheid Congress). NL-koning: geen enkele veto. Symbolisch ondertekenen.",
          voorbeelden: [{ type: "alle koningen", tekst: "Wilhelmina, Juliana, Beatrix, Willem-Alexander: niemand heeft ooit wet geweigerd te tekenen. Dat zou grondwet schenden." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen veto = geen 'ja, hij kan weigeren'. Geen uitzondering bij eigen mening of oorlog. Strikt geen blokkade-macht." }],
          niveaus: { basis: "Ondertekent formeel. A.", simpeler: "Koning tekent wetten formeel — geen veto, kan niet weigeren. = A.", nogSimpeler: "Formaliteit = A." },
        },
      },
    ],
  },

  // C
  {
    title: "Grondwet en grondrechten",
    explanation: "De **Grondwet** is de **belangrijkste wet** van Nederland. Alle andere wetten moeten ermee in overeenstemming zijn.\n\n**Geschiedenis**:\n• 1848: **Thorbecke** schreef de moderne grondwet — basis voor parlementaire democratie.\n• 1983: laatste grote herziening.\n\n**Grondrechten** zijn rechten die iedereen heeft. Ze staan in de eerste hoofdstukken van de Grondwet:\n\n**Klassieke grondrechten** (vrijheidsrechten):\n• Vrijheid van **godsdienst** (art. 6)\n• Vrijheid van **meningsuiting** (art. 7)\n• Vrijheid van **onderwijs** (art. 23)\n• Recht op **vereniging en vergadering** (art. 8-9)\n• **Onaantastbaarheid lichaam** (art. 11)\n• **Bescherming privacy** (art. 10, 12)\n• **Gelijkheidsbeginsel** (art. 1) — niemand mag discrimineren\n\n**Sociale grondrechten** (zorgrechten):\n• Recht op **werk** (art. 19)\n• Recht op **gezondheidszorg** (art. 22)\n• Recht op **onderwijs** (art. 23)\n• Recht op **woning** (art. 22)\n\n**Verschil**: klassieke = wat de overheid niet mag doen. Sociale = wat de overheid moet zorgen.\n\n**Beroemd is artikel 1**: *\"Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld.\"*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Grondwet</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">Klassiek (vrijheidsrechten):</text>
<text x="20" y="73" fill="${COLORS.muted}" font-size="10" font-family="Arial">  godsdienst, meningsuiting, onderwijs</text>
<text x="20" y="89" fill="${COLORS.muted}" font-size="10" font-family="Arial">  privacy, gelijkheid (art. 1)</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">Sociaal (zorgrechten):</text>
<text x="20" y="133" fill="${COLORS.muted}" font-size="10" font-family="Arial">  werk, gezondheidszorg, woning</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Thorbecke 1848 → herziening 1983</text>
</svg>`,
    checks: [
      {
        q: "Wie schreef de moderne Nederlandse grondwet?",
        options: ["Thorbecke (1848)", "Willem van Oranje", "Napoleon", "Wilhelmina"],
        answer: 0,
        wrongHints: [null, "Bekend als 'vader des vaderlands' uit de 16e eeuw — toen bestond de moderne grondwet nog niet.", "Bezette Nederland rond 1800; daarvoor en daarna golden andere regels.", "Was koningin in de 20e eeuw, ruim na de grondwet-herziening."],
        uitlegPad: {
          stappen: [{ titel: "Thorbecke 1848 — in 24 uur", tekst: "Johan Rudolf Thorbecke (1798-1872) was liberaal NL-politicus. 1848 = revolutiejaar Europa. Koning Willem II (bang voor onrust) gaf Thorbecke opdracht nieuwe grondwet te schrijven. Hij deed dit in 24 uur tijdens 'nacht van Twesi'. Vanaf toen: parlement leidend, koning gebonden aan grondwet." }],
          woorden: [{ woord: "Thorbecke", uitleg: "Liberaal staatsman 1798-1872. Vader NL-grondwet." }, { woord: "grondwet", uitleg: "Hoogste wet van land. Andere wetten moeten ermee in lijn zijn." }],
          theorie: "Belang Thorbecke-grondwet: van absolute monarchie naar parlementaire democratie. Ministers verantwoordelijk aan parlement (niet koning). Basis voor moderne NL.",
          voorbeelden: [{ type: "context", tekst: "1848 zelfde jaar als revoluties in heel Europa: Frankrijk (val koning), Duitsland, Oostenrijk. NL deed het 'netjes' zonder geweld via Thorbecke." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Willem van Oranje = 16e eeuw (Tachtigjarige Oorlog). Napoleon = 1800-1815, bezette NL met andere regels. Wilhelmina = koningin 20e eeuw, lang na 1848." }],
          niveaus: { basis: "Thorbecke 1848. A.", simpeler: "Moderne NL-grondwet = Thorbecke 1848. = A.", nogSimpeler: "Thorbecke = A." },
        },
      },
      {
        q: "Wat zegt **artikel 1** van de Grondwet?",
        options: ["Iedereen wordt in gelijke gevallen gelijk behandeld","De Koning is staatshoofd","Stemmen vanaf 18 jaar","Vrijheid van godsdienst"],
        answer: 0,
        wrongHints: [null, "Artikel 24 over staatshoofd.", "Niet artikel 1.", "Vrijheid van godsdienst is artikel 6."],
        uitlegPad: {
          stappen: [{ titel: "Gelijkheidsbeginsel", tekst: "Artikel 1 Grondwet: 'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan.' Dit is BASIS van NL-rechtsstaat." }],
          woorden: [{ woord: "gelijkheidsbeginsel", uitleg: "Iedereen wordt gelijk behandeld door wet en overheid." }, { woord: "discriminatie", uitleg: "Onterecht onderscheid maken op basis van eigenschappen." }],
          theorie: "Artikel 1 staat helemaal vooraan omdat het belangrijkst is. Sinds 1983 (laatste grondwet-herziening). 2023 uitbreiding met 'handicap + seksuele gerichtheid'.",
          voorbeelden: [{ type: "toepassing", tekst: "Werkgever mag niet weigeren omdat sollicitant moslim/joods/vrouw/homoseksueel is. Artikel 1 beschermt. Overheid moet ook iedereen gelijk behandelen." }],
          basiskennis: [{ onderwerp: "Andere artikelen", uitleg: "Art. 6 = vrijheid godsdienst. Art. 7 = vrijheid meningsuiting. Art. 23 = vrijheid onderwijs. Allemaal grondrechten maar niet art. 1." }],
          niveaus: { basis: "Gelijke behandeling. A.", simpeler: "Artikel 1 = iedereen wordt gelijk behandeld + geen discriminatie. = A.", nogSimpeler: "Gelijkheid = A." },
        },
      },
    ],
  },
  {
    title: "Rechtsstaat en rechters",
    explanation: "Een **rechtsstaat** is een land waar:\n• Iedereen zich aan **dezelfde wetten** moet houden, ook de overheid.\n• **Onafhankelijke rechters** beoordelen geschillen.\n• Niemand wordt willekeurig gestraft of gevangen gezet.\n\nDit is anders dan een **politiestaat** (overheid heeft alle macht) of **wetteloze staat** (geen regels).\n\n**Soorten rechtspraak in NL**:\n\n**Strafrecht**: misdrijven (diefstal, geweld, moord).\n• Officier van Justitie klaagt aan.\n• Rechter beoordeelt schuld + straft.\n• Mogelijke straffen: boete, taakstraf, gevangenis, tbs.\n\n**Civielrecht**: geschillen tussen burgers/bedrijven.\n• Echtscheiding, schade vergoeden, contract verbroken.\n\n**Bestuursrecht**: tussen burger en overheid.\n• Bv. boete bij parkeren — je kunt naar de rechter.\n\n**Hoeveel rechtbanken?**\n1. **Rechtbank** (eerste niveau).\n2. **Gerechtshof** (hoger beroep).\n3. **Hoge Raad** (cassatie — alleen of de wet juist toegepast is).\n\n**Onafhankelijkheid**: rechters worden voor het leven benoemd door de Koning. Ze kunnen niet ontslagen worden door politici. Dat beschermt onpartijdigheid.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.recht}" font-size="13" font-family="Arial" font-weight="bold">rechtsstaat ⚖️</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">strafrecht: diefstal, geweld</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">civielrecht: tussen burgers</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">bestuursrecht: burger vs overheid</text>
<text x="20" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">3 niveaus:</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="10" font-family="Arial">rechtbank → gerechtshof → Hoge Raad</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">rechters onafhankelijk</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **rechtsstaat**?",
        options: ["Land waar iedereen zich aan dezelfde wetten moet houden","Land geleid door rechters","Land zonder politie","Land met religieuze regering"],
        answer: 0,
        wrongHints: [null, "Rechters oordelen, regeren niet.", "Politie hoort bij rechtsstaat.", "Dat is theocratie."],
        uitlegPad: {
          stappen: [{ titel: "Wet boven persoon", tekst: "Rechtsstaat = land waar IEDEREEN — ook regering, koning, rijke mensen — zich aan dezelfde wetten moet houden. Onafhankelijke rechters beoordelen. Niemand staat boven wet. Tegenovergesteld: politiestaat (overheid heeft alle macht zonder regels)." }],
          woorden: [{ woord: "rechtsstaat", uitleg: "Staatsvorm waarin overheid + burgers gelijk onder de wet staan." }, { woord: "onafhankelijke rechters", uitleg: "Rechters die door geen politicus of overheid kunnen worden ontslagen of beïnvloed." }],
          theorie: "Kenmerken rechtsstaat: (1) iedereen gelijk voor wet, (2) onafhankelijke rechters, (3) bescherming mensenrechten, (4) democratisch gekozen wetgever, (5) machtsverdeling (Trias Politica).",
          voorbeelden: [{ type: "tegenovergesteld", tekst: "Politiestaat: Noord-Korea, vroeger DDR. Theocratie: Iran (priesters). Anarchie: Somalië in chaos-jaren." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Rechters oordelen, niet regeren. Rechtsstaat HEEFT politie maar onder de wet. Theocratie = religieus, niet rechts." }],
          niveaus: { basis: "Iedereen gelijk onder wet. A.", simpeler: "Rechtsstaat = land waar iedereen zich aan zelfde wetten moet houden. = A.", nogSimpeler: "Wet voor allen = A." },
        },
      },
      {
        q: "Wat is de hoogste rechterlijke instantie in NL?",
        options: ["Hoge Raad", "Gerechtshof", "Rechtbank", "Tweede Kamer"],
        answer: 0,
        wrongHints: [null, "Gerechtshof = midden.", "Rechtbank = eerste niveau.", "Tweede Kamer is wetgevend, niet rechtsprekend."],
        uitlegPad: {
          stappen: [{ titel: "Hoge Raad — cassatie", tekst: "3 niveaus rechtspraak NL: (1) Rechtbank = 1e instantie. (2) Gerechtshof = hoger beroep. (3) Hoge Raad = hoogste, doet 'cassatie'. Hoge Raad oordeelt niet over feiten, alleen of wet JUIST is toegepast door lagere rechters." }],
          woorden: [{ woord: "Hoge Raad", uitleg: "Hoogste NL-rechter. In Den Haag. ~35 raadsheren (rechters)." }, { woord: "cassatie", uitleg: "Toetsing of lagere rechter de wet juist heeft toegepast. Niet over feiten." }, { woord: "hoger beroep", uitleg: "Tweede beoordeling. Rechtbank → gerechtshof → Hoge Raad." }],
          theorie: "Voor internationale zaken: Europees Hof voor de Rechten van de Mens (Straatsburg) of Europees Hof van Justitie (Luxemburg). Maar binnen NL = Hoge Raad hoogste.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Iemand veroordeeld door rechtbank → in hoger beroep bij gerechtshof → bij twijfel over rechtstoepassing nog naar Hoge Raad." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Gerechtshof = 2e niveau. Rechtbank = 1e. Tweede Kamer = wetgever (geen rechter)." }],
          niveaus: { basis: "Hoge Raad. A.", simpeler: "Hoogste NL-rechter = Hoge Raad (cassatie). = A.", nogSimpeler: "Hoge Raad = A." },
        },
      },
    ],
  },
  {
    title: "Burger zijn — rechten en plichten",
    explanation: "Als Nederlandse burger heb je **rechten** én **plichten**.\n\n**Belangrijkste rechten**:\n• Stemrecht (vanaf 18).\n• Vrijheid van mening, godsdienst, onderwijs.\n• Recht op een eerlijk proces.\n• Recht op gezondheidszorg, onderwijs.\n• Privacy.\n\n**Belangrijkste plichten**:\n• **Belasting betalen** (voor onderwijs, zorg, infrastructuur).\n• **Leerplicht** tot 18 jaar (of tot startkwalificatie).\n• **Wetten naleven** (geen diefstal, geweld, etc.).\n• **Identificatieplicht** vanaf 14 jaar.\n• **Getuigeplicht** als rechter dat vraagt.\n\n**Geen plicht meer (sinds 1997)**: militaire dienst (dienstplicht). Ze bestaat nog op papier maar wordt niet uitgevoerd — vrijwillig leger.\n\n**Verkiezingen**: stemmen is een **recht**, geen plicht in NL. Maar door te stemmen invloed je beleid. Niet stemmen = laten anderen voor jou kiezen.\n\n**Burgerschap**: betekenis van 'goed burger zijn' in NL:\n• Verantwoordelijkheid nemen voor je gedrag.\n• Anderen respecteren ook al ben je 't niet eens.\n• Bijdragen aan de maatschappij.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">burger zijn</text>
<rect x="20" y="40" width="120" height="120" rx="8" fill="${COLORS.good}" opacity="0.12"/>
<text x="80" y="60" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">rechten</text>
<text x="80" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">stemrecht</text>
<text x="80" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">meningsuiting</text>
<text x="80" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">eerlijk proces</text>
<text x="80" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">gezondheidszorg</text>
<rect x="160" y="40" width="120" height="120" rx="8" fill="${COLORS.alt}" opacity="0.12"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">plichten</text>
<text x="220" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">belasting betalen</text>
<text x="220" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">leerplicht</text>
<text x="220" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">wet naleven</text>
<text x="220" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">ID-plicht (14+)</text>
</svg>`,
    checks: [
      {
        q: "Wat is **geen** plicht voor Nederlandse burgers?",
        options: ["Stemmen", "Belasting betalen", "Leerplicht", "Identificatieplicht"],
        answer: 0,
        wrongHints: [null, "Stemmen is recht, niet plicht.", "Belasting wel plicht.", "Leerplicht wel.", "ID-plicht wel."],
        uitlegPad: {
          stappen: [{ titel: "Stemmen = recht", tekst: "In NL is stemmen een RECHT, geen plicht. Je MAG, niet MOET. Vroeger (1917-1970) was er wel opkomstplicht (stemplicht). Sinds 1970 afgeschaft. Vergelijk: in België is stemmen WEL verplicht." }],
          woorden: [{ woord: "recht vs plicht", uitleg: "Recht = je MAG iets doen (vrijwillig). Plicht = je MOET iets doen (verplicht)." }, { woord: "opkomstplicht", uitleg: "Verplichting om naar stembureau te gaan. NL had dit 1917-1970." }],
          theorie: "Burger-plichten NL: belasting betalen, leerplicht (5-18 jaar), wet naleven, ID-plicht (14+). Burger-rechten: stemmen, vrijheid van meningsuiting, godsdienst, eerlijk proces.",
          voorbeelden: [{ type: "vergelijk", tekst: "België: stemplicht (boete bij niet stemmen). NL: stemrecht (vrijwillig). Australië ook stemplicht. Meeste landen Europa: stemrecht (zoals NL)." }],
          basiskennis: [{ onderwerp: "Andere wel plicht", uitleg: "Belasting = WEL plicht. Leerplicht = WEL. ID-plicht = WEL (14+). Stemmen = NIET plicht." }],
          niveaus: { basis: "Stemmen is recht. A.", simpeler: "Stemmen = recht (mag), geen plicht (niet moet). = A.", nogSimpeler: "Stemmen = mag = A." },
        },
      },
      {
        q: "Vanaf welke leeftijd ID-plicht in NL?",
        options: ["14 jaar", "12 jaar", "16 jaar", "18 jaar"],
        answer: 0,
        wrongHints: [null, "Te jong.", "Niet 16 — 14.", "ID-plicht begint eerder dan stemrecht."],
        uitlegPad: {
          stappen: [{ titel: "ID vanaf 14 jaar", tekst: "Sinds 2005 (Wet op de Identificatieplicht): elke NL'er vanaf 14 jaar moet legitimatie kunnen tonen bij politie-controle. ID-bewijs = paspoort, identiteitskaart of rijbewijs. Bij niet-tonen: boete €100+." }],
          woorden: [{ woord: "ID-plicht", uitleg: "Verplichting om je te kunnen identificeren met geldig document." }, { woord: "legitimatie", uitleg: "Officieel document dat bewijst wie je bent." }],
          theorie: "Andere leeftijden: stemmen 18, drinken 18, autorijden 18, strafrecht volwassen 18, leerplicht tot 18, ID-plicht 14. ID-plicht begint dus eerder dan stemrecht.",
          voorbeelden: [{ type: "wanneer tonen", tekst: "Politie kan altijd vragen (binnen 'redelijke aanleiding'). Bv. op straat, in trein zonder kaartje, bij overtreding." }],
          basiskennis: [{ onderwerp: "Niet andere leeftijden", uitleg: "12 = te jong (kinderen). 16 = niet ID-plicht (wel rijbewijs brommer). 18 = te laat (stemmen+meer)." }],
          niveaus: { basis: "14 jaar. A.", simpeler: "ID-plicht NL = vanaf 14 jaar. = A.", nogSimpeler: "14 = A." },
        },
      },
    ],
  },

  // D
  {
    title: "Nederland in de wereld",
    explanation: "Nederland is geen eiland — we werken samen met andere landen.\n\n**Europese Unie (EU)**:\n• 27 landen, sinds 1957 (begon met 6).\n• NL is **medeoprichter**.\n• **Vrij verkeer** van personen, goederen, diensten en kapitaal binnen EU.\n• Gemeenschappelijke regels (bv. AVG-privacywet).\n• **Euro** is de munt sinds 2002 (in 20 EU-landen).\n• **Europees Parlement** kiest NL elke 5 jaar (29 NL-zetels van 720).\n\n**Verenigde Naties (VN)**:\n• 193 landen (bijna alle).\n• Opgericht 1945, na WO2.\n• Doel: vrede, mensenrechten, ontwikkeling.\n• **Veiligheidsraad** mag sancties opleggen.\n• Bekende organisaties: WHO (gezondheid), UNICEF (kinderen), UNESCO (cultuur).\n\n**NAVO**:\n• Militaire bondgenootschap, 32 landen.\n• \"Aanval op één = aanval op allen\" (artikel 5).\n• NL hoort bij sinds oprichting (1949).\n\n**Andere belangrijke organisaties**:\n• **WTO** (handel)\n• **IMF** (financiën)\n• **Internationaal Strafhof** (Den Haag!) — berecht oorlogsmisdaden.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">NL in de wereld</text>
<rect x="20" y="40" width="80" height="60" rx="6" fill="#003399" opacity="0.30" stroke="#003399" stroke-width="2"/>
<text x="60" y="62" text-anchor="middle" fill="#FFCC00" font-size="11" font-family="Arial" font-weight="bold">EU</text>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">27 landen</text>
<text x="60" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€ euro</text>
<rect x="110" y="40" width="80" height="60" rx="6" fill="${COLORS.parlement}" opacity="0.20"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.parlement}" font-size="11" font-family="Arial" font-weight="bold">VN</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">193 landen</text>
<text x="150" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrede</text>
<rect x="200" y="40" width="80" height="60" rx="6" fill="${COLORS.alt}" opacity="0.20"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">NAVO</text>
<text x="240" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">32 landen</text>
<text x="240" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">defensie</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Den Haag = ICC + ICJ + OPCW</text>
</svg>`,
    checks: [
      {
        q: "Wanneer werd de **Verenigde Naties** opgericht?",
        options: ["1945", "1919", "1957", "2002"],
        answer: 0,
        wrongHints: [null, "1919 = Volkenbond (voorganger).", "1957 = EEG.", "2002 = euro-invoering."],
        uitlegPad: {
          stappen: [{ titel: "VN — na WO2, 1945", tekst: "VN (Verenigde Naties) opgericht 24 oktober 1945, vlak na einde WO2 (15 aug 1945). Doel: 'om de gesel van de oorlog te voorkomen'. Hoofdkantoor New York. Begon met 51 landen, nu 193. Voorganger: Volkenbond (1919-1946) — mislukte, kon WO2 niet voorkomen." }],
          woorden: [{ woord: "VN", uitleg: "Verenigde Naties. Engels: United Nations (UN)." }, { woord: "Volkenbond", uitleg: "Voorganger VN, 1919-1946. Opgericht na WO1, faalde." }, { woord: "Veiligheidsraad", uitleg: "Belangrijkste VN-orgaan. 15 leden, 5 permanent (VS+UK+FR+Rusland+China)." }],
          theorie: "VN-organen: Algemene Vergadering (alle 193 landen), Veiligheidsraad (vrede + sancties), Internationaal Gerechtshof Den Haag, WHO (gezondheid), UNICEF (kinderen), UNESCO (cultuur).",
          voorbeelden: [{ type: "context", tekst: "1945: VN-handvest getekend San Francisco. NL was een van eerste 51 leden. VN-dag jaarlijks 24 oktober." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "1919 = Volkenbond (voorganger, faalde). 1957 = EEG (voorganger EU). 2002 = euro-invoering munten." }],
          niveaus: { basis: "1945. A.", simpeler: "VN opgericht 1945, vlak na WO2. = A.", nogSimpeler: "1945 = A." },
        },
      },
      {
        q: "Wat betekent **artikel 5 van de NAVO**?",
        options: ["Aanval op één lid = aanval op allen","Iedereen krijgt euro's","Vrij verkeer van personen","Geen oorlog tussen leden"],
        answer: 0,
        wrongHints: [null, "Niet euro — euro is EU.", "Vrij verkeer = EU.", "Klopt impliciet, maar niet artikel 5."],
        uitlegPad: {
          stappen: [{ titel: "Bijstandsplicht — '1 voor allen'", tekst: "NAVO art. 5: 'Een gewapende aanval tegen één of meer leden wordt beschouwd als aanval tegen alle leden.' Iedereen helpt elkaar bij aanval. Dit beschermt kleinere landen tegen grote agressors. NAVO 1949 opgericht tegen Sovjet-dreiging. Nu 32 leden." }],
          woorden: [{ woord: "NAVO", uitleg: "Noord-Atlantische Verdrags-Organisatie. Engels: NATO." }, { woord: "bijstandsplicht", uitleg: "Verplichting om elkaar te helpen. Bij NAVO: militair bij aanval." }],
          theorie: "Art. 5 één keer aangeroepen: na 9/11 (2001) voor VS. Allemaal hielpen tegen Al Qaeda in Afghanistan. Nu sinds 2022 (Rusland-Oekraïne-oorlog) zeer relevant, NAVO-uitbreiding (Zweden, Finland toegetreden).",
          voorbeelden: [{ type: "leden", tekst: "32 NAVO-leden 2026: VS + Canada + 30 Europese landen (incl. NL, België, Duitsland, UK, recent Zweden+Finland). Niet: Oostenrijk, Ierland, Zwitserland." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Euro = EU (geen NAVO). Vrij verkeer = EU. 'Geen oorlog tussen leden' = wel impliciet maar niet wat art. 5 zegt." }],
          niveaus: { basis: "Aanval op 1 = op allen. A.", simpeler: "NAVO art. 5 = aanval op één lid is aanval op allen, samen verdedigen. = A.", nogSimpeler: "1 voor allen = A." },
        },
      },
    ],
  },

  // E
  {
    title: "Eindopdracht — de Nederlandse staat",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Onderdeel | Wat |\n|---|---|\n| Tweede Kamer | 150 zetels, gekozen, maakt wetten |\n| Eerste Kamer | 75 zetels, indirect, controleert wetten |\n| Regering | Premier + ministers, voert uit |\n| Koning | Staatshoofd, geen politieke macht |\n| Trias Politica | Wetgevend / Uitvoerend / Rechtsprekend |\n| Grondwet | Hoogste wet, sinds Thorbecke 1848 |\n| Artikel 1 | Iedereen gelijke behandeling |\n| Stemmen | 18+, om de 4 jaar (TK) |\n| ID-plicht | Vanaf 14 jaar |\n| EU | 27 landen, euro, vrij verkeer |\n| VN | 193 landen, vrede + mensenrechten |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">parlement · regering · koning</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">Trias Politica · Grondwet</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">verkiezingen · burgerschap · EU/VN</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Welke macht hoort bij de **rechter**?",
        options: ["Rechtsprekend", "Wetgevend", "Uitvoerend", "Koninklijk"],
        answer: 0,
        wrongHints: [null, "Wetgevend = Kamer + regering.", "Uitvoerend = regering + politie.", "Niet bestaand binnen Trias."],
        uitlegPad: {
          stappen: [{ titel: "Rechter = rechtspreken", tekst: "Trias Politica = 3 machten: WETGEVEND (Kamer+regering, maakt wetten), UITVOEREND (regering+politie, voert uit), RECHTSPREKEND (rechters, oordeelt). De rechter hoort bij rechtsprekende macht. Beoordeelt of wet is overtreden, deelt straffen uit." }],
          woorden: [{ woord: "rechtsprekend", uitleg: "Oordelen of wet is overtreden + straf bepalen." }],
          theorie: "Onafhankelijkheid: rechters worden voor leven benoemd door Koning. Kunnen niet door politici worden ontslagen. Beschermt onpartijdigheid.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Wet zegt: niet stelen. Iemand steelt → politie pakt op (uitvoerend) → Officier van Justitie klaagt aan → rechter oordeelt (rechtsprekend) + bepaalt straf." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Wetgevend = wetten maken (Kamer). Uitvoerend = uitvoeren (regering). Koninklijk = bestaat niet als aparte macht in Trias." }],
          niveaus: { basis: "Rechtsprekend. A.", simpeler: "Rechter doet rechtsprekende macht (3e van Trias Politica). = A.", nogSimpeler: "Rechtsprekend = A." },
        },
      },
      {
        q: "Welke uitspraak is **juist**?",
        options: ["De Koning ondertekent wetten formeel","De Koning maakt zelf wetten","De Koning kan ministers ontslaan","De Koning leidt de Tweede Kamer"],
        answer: 0,
        wrongHints: [null, "Wetten maakt de Tweede Kamer.", "Koning kan ministers niet ontslaan.", "Tweede Kamer heeft eigen voorzitter."],
        uitlegPad: {
          stappen: [{ titel: "Koning ondertekent — meer niet", tekst: "Constitutionele monarchie: Koning ondertekent wetten als formaliteit (laatste handeling, kan niet weigeren). Daarbuiten: ceremonieel werk, vertegenwoordigt NL, advies aan premier. Geen wetgevende macht. Geen ministerieel ontslag-recht. Leidt geen Kamer (Tweede Kamer heeft eigen voorzitter)." }],
          woorden: [{ woord: "formele handtekening", uitleg: "Ondertekening zonder politieke macht. Verplichte handeling." }],
          theorie: "'De Koning is onschendbaar, ministers zijn verantwoordelijk' (art. 42 Grondwet). Koning kan geen politieke uitspraken doen, geen wetten maken, geen ministers ontslaan. Alle politieke macht bij gekozen Kamer + regering.",
          voorbeelden: [{ type: "wel/niet", tekst: "WEL: ondertekenen wetten, troonrede uitspreken (door regering geschreven), buitenlandse bezoeken. NIET: wetten maken, beslissen, partijen kiezen, ministers ontslaan." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Wetten maken = Tweede Kamer (niet Koning). Ministers ontslaan = formeel kan Koning dit niet zonder Kamer. Tweede Kamer leiden = Kamervoorzitter." }],
          niveaus: { basis: "Ondertekent formeel. A.", simpeler: "Koning doet alleen formaliteiten: wetten ondertekenen, ceremonieel. = A.", nogSimpeler: "Formaliteit = A." },
        },
      },
      {
        q: "In welk gebouw vergadert de Tweede Kamer?",
        options: ["Binnenhof, Den Haag", "Paleis op de Dam", "Vredespaleis", "Catshuis"],
        answer: 0,
        wrongHints: [null, "Paleis op de Dam = koninklijk paleis Amsterdam.", "Vredespaleis = Internationaal Gerechtshof.", "Catshuis = ambtswoning premier."],
        uitlegPad: {
          stappen: [{ titel: "Binnenhof — 800 jaar oud", tekst: "Tweede Kamer vergadert in Binnenhof, Den Haag. Eeuwenoud complex (ouder dan NL als land). Sinds renovatie 2021-2027 tijdelijk in andere gebouwen (Bezuidenhoutseweg). Maar STAATSRECHTELIJK is Binnenhof de plek. Ridderzaal hier (waar koning Troonrede uitspreekt op Prinsjesdag)." }],
          woorden: [{ woord: "Binnenhof", uitleg: "Historisch parlements- en regeringscomplex Den Haag." }, { woord: "Ridderzaal", uitleg: "Belangrijkste zaal Binnenhof. Troonrede Prinsjesdag." }, { woord: "Prinsjesdag", uitleg: "3e dinsdag september. Koning houdt Troonrede. Opening parlementair jaar." }],
          theorie: "Andere bekende gebouwen Den Haag: Paleis Huis ten Bosch (koning woont), Catshuis (ambtswoning premier), Vredespaleis (Internationaal Gerechtshof + ICJ). Allemaal verschillende functies.",
          voorbeelden: [{ type: "andere", tekst: "Paleis op de Dam (Amsterdam) = officieel paleis Koning voor ceremoniën. Niet politiek. Catshuis (Den Haag) = werkresidentie premier." }],
          basiskennis: [{ onderwerp: "Niet andere", uitleg: "Paleis op de Dam = koninklijk paleis Amsterdam. Vredespaleis = ICJ/PCA Den Haag. Catshuis = premier-woning." }],
          niveaus: { basis: "Binnenhof Den Haag. A.", simpeler: "Tweede Kamer = Binnenhof, Den Haag. = A.", nogSimpeler: "Binnenhof = A." },
        },
      },
      {
        q: "Wat is de **euro**?",
        options: ["De munt van 20 EU-landen","Een Nederlandse munt","Een Europese stad","Een politieke partij"],
        answer: 0,
        wrongHints: [null, "Niet alleen NL.", "Geen plaats.", "Geen partij."],
        uitlegPad: {
          stappen: [{ titel: "Euro — 20 landen", tekst: "Euro (€) is de gemeenschappelijke munt van 20 EU-landen (in 2026): NL, DE, FR, IT, ES, PT, BE, LU, IE, FI, AT, GR, MT, CY, EE, LV, LT, SI, SK, HR. Ingevoerd: 1999 (giraal), 2002 (briefjes+munten). 7 EU-landen behouden eigen munt (vb. Denemarken kroon, Zweden kroon, Polen zloty)." }],
          woorden: [{ woord: "euro", uitleg: "Gemeenschappelijke EU-munt. Symbool €." }, { woord: "Eurozone", uitleg: "EU-landen die euro hebben. Bestuurd door ECB (Europese Centrale Bank) Frankfurt." }, { woord: "ECB", uitleg: "Europese Centrale Bank. Bepaalt euro-rente + monetair beleid." }],
          theorie: "Vóór 2002 had NL gulden (ƒ). 1 euro = 2,20371 gulden. Euro maakte handel binnen EU makkelijker (geen wisselen). Mark Rutte (toen kandidaat) was ervoor. Geert Wilders (later) tegen.",
          voorbeelden: [{ type: "wisselen", tekst: "Reis naar UK: pond nodig. Reis naar DE/FR/IT/ES: euro (zelfde als NL). Reis naar Zweden: kroon. Polen: zloty." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet alleen NL (20 landen). Geen stad. Geen partij." }],
          niveaus: { basis: "Munt 20 EU-landen. A.", simpeler: "Euro = munt van 20 EU-landen, incl. NL sinds 2002. = A.", nogSimpeler: "EU-munt = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const nederlandseStaatMaatschappijleer = {
  id: "nederlandse-staat-maatschappijleer",
  title: "De Nederlandse staat",
  emoji: "🏛️",
  level: "klas3-4",
  subject: "maatschappijleer",
  referentieNiveau: "onderbouw",
  sloThema: "Maatschappijleer — Nederlandse staatsinrichting",
  prerequisites: [
    { id: "politiek-democratie-po", title: "Politiek + democratie", niveau: "po-1F" },
  ],
  intro:
    "Hoe werkt onze democratie? Tweede Kamer, Eerste Kamer, regering, Koning, Trias Politica, Grondwet en grondrechten, rechtsstaat, stemrecht, plus NL in EU/VN/NAVO. Eerste pad maatschappijleer.",
  triggerKeywords: [
    "democratie", "kiesrecht", "stemmen",
    "tweede kamer", "eerste kamer", "parlement",
    "regering", "kabinet", "minister", "premier", "minister-president",
    "koning", "willem alexander", "monarchie", "constitutionele monarchie",
    "trias politica", "montesquieu", "machtenscheiding",
    "grondwet", "thorbecke", "artikel 1", "grondrechten",
    "rechtsstaat", "rechter", "rechtbank", "hoge raad",
    "burgerrechten", "burgerplichten", "leerplicht", "id-plicht",
    "europese unie", "EU", "euro", "schengen",
    "verenigde naties", "VN", "navo",
    "binnenhof", "prinsjesdag", "troonrede",
    "verkiezingen", "coalitie", "oppositie",
    "maatschappijleer",
  ],
  chapters,
  steps,
};

export default nederlandseStaatMaatschappijleer;
