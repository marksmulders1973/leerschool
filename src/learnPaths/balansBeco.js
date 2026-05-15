// Leerpad: Balans en winst-en-verliesrekening — Bedrijfseconomie havo/vwo
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  debet: "#42a5f5", credit: "#ef5350", winst: "#00c853", verlies: "#e53935",
};

const stepEmojis = ["🏢", "📋", "🏠", "💳", "⚖️", "💰", "📊", "📈", "🧮", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een onderneming?", emoji: "🏢", from: 0, to: 0 },
  { letter: "B", title: "De balans", emoji: "⚖️", from: 1, to: 4 },
  { letter: "C", title: "Winst-en-verliesrekening", emoji: "📊", from: 5, to: 7 },
  { letter: "D", title: "Toepassen + eindopdracht", emoji: "🏆", from: 8, to: 9 },
];

const steps = [
  {
    title: "Wat is een onderneming?",
    explanation: "Een **onderneming** (of bedrijf) is een organisatie die producten of diensten verkoopt om **winst** te maken.\n\nElke onderneming heeft te maken met:\n• **Geld erin** (geld dat binnenkomt: omzet, lening, eigen geld).\n• **Geld eruit** (kosten: inkoop, salarissen, huur, belasting).\n• **Bezittingen** (gebouw, auto's, voorraad, geld op de bank).\n• **Schulden** (rekening die nog niet betaald is, lening bij de bank).\n\nDe **bedrijfseconomie** vraagt: \n• Hoe maakt deze onderneming winst?\n• Hoe staat ze er financieel voor?\n\nTwee belangrijke overzichten beantwoorden die vragen:\n1. **Balans** — momentopname: wat heeft het bedrijf, wat is het schuldig?\n2. **Winst-en-verliesrekening** (W&V) — periode-overzicht: hoeveel kwam er binnen, hoeveel ging eruit, en wat blijft over (winst of verlies)?\n\nIn dit leerpad leren we beide overzichten begrijpen.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="120" height="100" rx="10" fill="${COLORS.debet}" opacity="0.15" stroke="${COLORS.debet}" stroke-width="2"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.debet}" font-size="13" font-family="Arial" font-weight="bold">BALANS</text>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">momentopname</text>
<text x="80" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bezittingen vs</text>
<text x="80" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">schulden</text>
<rect x="160" y="40" width="120" height="100" rx="10" fill="${COLORS.winst}" opacity="0.15" stroke="${COLORS.winst}" stroke-width="2"/>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.winst}" font-size="13" font-family="Arial" font-weight="bold">W&V</text>
<text x="220" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">periode-overzicht</text>
<text x="220" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">opbrengsten −</text>
<text x="220" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kosten = winst</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **onderneming**?",
        options: [
          "Organisatie die producten/diensten verkoopt om winst te maken",
          "Een bank",
          "Een privépersoon",
          "De overheid",
        ],
        answer: 0,
        wrongHints: [null, "Bank is wel een soort onderneming, maar niet alle ondernemingen.", "Een privépersoon doet niet automatisch business.", "Overheid maakt geen winst — geen onderneming."],
        uitlegPad: {
          stappen: [{ titel: "Onderneming = winst-doel", tekst: "Een onderneming is een organisatie die producten of diensten verkoopt om winst te maken. Privé-personen + overheid horen er niet bij." }],
          woorden: [{ woord: "winstdoel", uitleg: "doel om meer geld terug te krijgen dan uitgegeven" }],
          theorie: "Soorten: eenmanszaak, vof, bv, nv. Allemaal ondernemingen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bakker, ASML, Lidl: ondernemingen. School + ministerie: niet." }],
          basiskennis: [{ onderwerp: "winst", uitleg: "opbrengsten > kosten" }],
          niveaus: { basis: "Organisatie met winstdoel.", simpeler: "Bedrijf.", nogSimpeler: "Maakt winst." },
        },
      },
      {
        q: "Wat doet een balans?",
        options: [
          "Toont op één moment wat het bedrijf heeft + schuldig is",
          "Berekent winst over een jaar",
          "Voorspelt verkoop",
          "Lijst klanten",
        ],
        answer: 0,
        wrongHints: [null, "Dat doet de winst-en-verliesrekening.", "Balans is achteraf, geen voorspelling.", "Dat is een klantenbestand, geen balans."],
        uitlegPad: {
          stappen: [{ titel: "Balans = momentopname", tekst: "Een balans toont op één moment (vaak 31 december) wat een bedrijf BEZIT (debet) en wat het SCHULDIG is + EV (credit). Geen periodisch resultaat — een 'foto'." }],
          woorden: [{ woord: "balansdatum", uitleg: "moment waarop de balans is opgemaakt" }],
          theorie: "Balans = foto. W&V = film over een jaar.",
          voorbeelden: [{ type: "voorbeeld", tekst: "1 jan vs 31 dec geeft jaarverandering van bezit + schuld" }],
          basiskennis: [{ onderwerp: "moment vs periode", uitleg: "balans = punt, W&V = lijn" }],
          niveaus: { basis: "Toont moment.", simpeler: "Foto van bezit/schuld.", nogSimpeler: "Foto." },
        },
      },
    ],
  },
  {
    title: "De balans — een T-vorm",
    explanation: "Een **balans** lijkt op een grote 'T':\n\n• **Linkerkant (debet)** = **bezittingen / activa**: alles wat het bedrijf **heeft**.\n• **Rechterkant (credit)** = **schulden + eigen vermogen / passiva**: hoe dat is **gefinancierd**.\n\n**Belangrijk**: links = rechts. Dat is altijd zo. Want elke euro die het bedrijf bezit, komt ergens vandaan (eigen geld of geleend).\n\n**Voorbeeld** — bakker Jan begint zijn zaak:\n• Hij stopt €10.000 eigen geld erin.\n• Hij leent €5.000 bij de bank.\n• Met dat geld koopt hij een oven (€8.000), een auto (€4.000) en houdt €3.000 op de bank.\n\nBalans bakker Jan:\n\n| Debet (bezit) | | Credit (financiering) | |\n|---|---|---|---|\n| Oven | 8.000 | Eigen vermogen | 10.000 |\n| Auto | 4.000 | Lening bank | 5.000 |\n| Bank | 3.000 | | |\n| **Totaal** | **15.000** | **Totaal** | **15.000** |\n\nLet op: links 15.000 = rechts 15.000. **Sluitend**.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="6" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="150" y1="30" x2="150" y2="150" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="20" y1="55" x2="280" y2="55" stroke="${COLORS.text}" stroke-width="1"/>
<text x="85" y="48" text-anchor="middle" fill="${COLORS.debet}" font-size="12" font-family="Arial" font-weight="bold">DEBET</text>
<text x="215" y="48" text-anchor="middle" fill="${COLORS.credit}" font-size="12" font-family="Arial" font-weight="bold">CREDIT</text>
<text x="85" y="75" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bezittingen</text>
<text x="85" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">(activa)</text>
<text x="215" y="75" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">eigen vermogen</text>
<text x="215" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ schulden</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">links = rechts</text>
</svg>`,
    checks: [
      {
        q: "Wat staat op de **debetzijde** (links) van de balans?",
        options: ["Bezittingen", "Schulden", "Winst", "Klanten"],
        answer: 0,
        wrongHints: [null, "Schulden staan rechts (credit).", "Winst is geen balanspost (komt uit W&V).", "Klanten staan niet op de balans."],
        uitlegPad: {
          stappen: [{ titel: "Debet = bezit", tekst: "Links (debet) staan alle bezittingen van het bedrijf: gebouw, voorraad, kas, bank, debiteuren. Rechts (credit) staat hoe dat gefinancierd is." }],
          woorden: [{ woord: "debet/credit", uitleg: "boekhoudkundig links/rechts" }],
          theorie: "Debet = bezit. Credit = EV + VV.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Oven (debet) gefinancierd door lening (credit)" }],
          basiskennis: [{ onderwerp: "ezelsbrug", uitleg: "Debet = wat ik HEB" }],
          niveaus: { basis: "Bezittingen.", simpeler: "Links = bezit.", nogSimpeler: "Bezit." },
        },
      },
      {
        q: "Wat is altijd waar voor een balans?",
        options: [
          "Debetzijde = creditzijde",
          "Debet > credit",
          "Credit > debet",
          "Beide kunnen verschillen",
        ],
        answer: 0,
        wrongHints: [null, "Niet logisch — bezit moet altijd komen ergens vandaan.", "Niet logisch.", "Een balans moet sluiten."],
        uitlegPad: {
          stappen: [{ titel: "Debet = Credit altijd", tekst: "Elke euro bezit komt ergens vandaan (EV of VV). Daarom: bezittingen (links) = financiering (rechts). Een balans is per definitie sluitend." }],
          woorden: [{ woord: "sluitend", uitleg: "totaal links = totaal rechts" }],
          theorie: "A = EV + VV is de basis-vergelijking van boekhouden.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Links niet gelijk aan rechts = fout in boekhouding" }],
          basiskennis: [{ onderwerp: "evenwicht", uitleg: "geen geld uit niets" }],
          niveaus: { basis: "Debet = Credit.", simpeler: "Links = Rechts.", nogSimpeler: "Gelijk." },
        },
      },
    ],
  },
  {
    title: "Activa — wat het bedrijf heeft",
    explanation: "**Activa** (debet) zijn de bezittingen. Twee soorten:\n\n**Vaste activa** (vaste bezittingen):\n• Lang in gebruik (>1 jaar).\n• Voorbeelden: gebouw, machines, auto's, computers, oven.\n\n**Vlottende activa** (vlottende bezittingen):\n• Korter in gebruik (<1 jaar) — verandert vaak.\n• Voorbeelden:\n  - **Voorraad** — producten die nog verkocht moeten worden.\n  - **Debiteuren** — klanten die nog moeten betalen.\n  - **Liquide middelen** — geld in kas of op de bank.\n\n**Volgorde op de balans**: vaste activa boven, vlottende eronder. Binnen vlottende: van minst tot meest liquide (eerst voorraad, dan debiteuren, dan kas/bank).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="260" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.debet}" stroke-width="1.5"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.debet}" font-size="12" font-family="Arial" font-weight="bold">ACTIVA (debet)</text>
<text x="40" y="80" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Vaste activa</text>
<text x="40" y="98" fill="${COLORS.text}" font-size="10" font-family="Arial">• gebouw, machines</text>
<text x="40" y="114" fill="${COLORS.text}" font-size="10" font-family="Arial">• auto, oven</text>
<text x="40" y="142" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Vlottende activa</text>
<text x="40" y="160" fill="${COLORS.text}" font-size="10" font-family="Arial">• voorraad</text>
<text x="40" y="176" fill="${COLORS.text}" font-size="10" font-family="Arial">• debiteuren, kas, bank</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **vaste activa**?",
        options: [
          "Gebouw of machine",
          "Voorraad",
          "Bankrekening",
          "Klant die nog moet betalen",
        ],
        answer: 0,
        wrongHints: [null, "Voorraad = vlottend (verandert snel).", "Bank = vlottend (kan zo veranderen).", "Debiteur = vlottend (komt snel binnen)."],
        uitlegPad: {
          stappen: [{ titel: "Vast = lang in gebruik", tekst: "Vaste activa: gebouw, machine, auto, oven — meer dan 1 jaar in gebruik. Vlottende activa: voorraad, debiteuren, kas — korter dan 1 jaar." }],
          woorden: [{ woord: "liquide", uitleg: "snel om te zetten in geld" }],
          theorie: "Op balans: vaste boven, vlottende eronder van minst tot meest liquide.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Een truck (vast) vs broodjes in vitrine (vlottend)" }],
          basiskennis: [{ onderwerp: "1 jaar grens", uitleg: ">1 jaar = vast" }],
          niveaus: { basis: "Gebouw of machine.", simpeler: "Lange duur.", nogSimpeler: "Lang gebruik." },
        },
      },
      {
        q: "Wat zijn **debiteuren**?",
        options: [
          "Klanten die nog moeten betalen",
          "Leveranciers die nog moeten ontvangen",
          "Banken",
          "Personeel",
        ],
        answer: 0,
        wrongHints: [null, "Dat zijn crediteuren.", "Bank is een aparte post.", "Personeelskosten zijn iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Debiteur = klant met openstaande rekening", tekst: "Debiteuren zijn klanten die nog moeten betalen. Het bedrijf 'krijgt nog geld' van hen → vlottende activa (komt binnen). Crediteuren zijn het tegenovergestelde: leveranciers." }],
          woorden: [{ woord: "debet vs credit", uitleg: "boekhouding-perspectief" }],
          theorie: "Debiteuren = wij krijgen nog. Crediteuren = wij moeten nog betalen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Klant koopt op rekening € 1000 → klant = debiteur" }],
          basiskennis: [{ onderwerp: "ezelsbrug", uitleg: "D van debiteur = D van Door betalen (door klant)" }],
          niveaus: { basis: "Klant die nog moet betalen.", simpeler: "Krijg geld terug.", nogSimpeler: "Wachten op geld." },
        },
      },
    ],
  },
  {
    title: "Passiva — hoe is het gefinancierd?",
    explanation: "**Passiva** (credit) tonen hoe de bezittingen zijn gefinancierd. Twee groepen:\n\n**Eigen vermogen (EV)**\n• Geld van de eigenaar(s) zelf.\n• Inclusief gemaakte winst die nog niet uitgekeerd is.\n• Het bedrijf hoeft dit niet 'terug' te betalen.\n\n**Vreemd vermogen (VV)** = schulden\n• **Lang vreemd vermogen** (LVV): schulden langer dan 1 jaar.\n  - Hypotheek, langlopende lening.\n• **Kort vreemd vermogen** (KVV): schulden korter dan 1 jaar.\n  - **Crediteuren** — leveranciers die nog moeten worden betaald.\n  - Belastingschuld.\n  - Rood staan op de bank.\n\n**Onthoud**: Bezittingen (activa) = Eigen vermogen + Vreemd vermogen.\n\nDit is de **balansvergelijking**: \nA = EV + VV",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="260" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.credit}" stroke-width="1.5"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.credit}" font-size="12" font-family="Arial" font-weight="bold">PASSIVA (credit)</text>
<text x="40" y="80" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Eigen vermogen</text>
<text x="40" y="98" fill="${COLORS.text}" font-size="10" font-family="Arial">• inleg eigenaar</text>
<text x="40" y="114" fill="${COLORS.text}" font-size="10" font-family="Arial">• gespaarde winst</text>
<text x="40" y="142" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Vreemd vermogen</text>
<text x="40" y="160" fill="${COLORS.text}" font-size="10" font-family="Arial">• lang: hypotheek, lening</text>
<text x="40" y="176" fill="${COLORS.text}" font-size="10" font-family="Arial">• kort: crediteuren, btw</text>
</svg>`,
    checks: [
      {
        q: "Wat is **eigen vermogen**?",
        options: [
          "Geld van de eigenaar zelf, dat hoeft niet terug",
          "Een lening van de bank",
          "Voorraad in het magazijn",
          "Kas en bank",
        ],
        answer: 0,
        wrongHints: [null, "Lening = vreemd vermogen.", "Voorraad = activa.", "Kas/bank = activa."],
        uitlegPad: {
          stappen: [{ titel: "EV = eigen ingelegde geld", tekst: "Eigen vermogen is geld van de eigenaar(s) zelf — inleg + ingehouden winst. Hoeft niet terugbetaald. Vreemd vermogen = schulden (wel terug)." }],
          woorden: [{ woord: "ingehouden winst", uitleg: "winst die in het bedrijf blijft" }],
          theorie: "Bij faillissement betalen schuldeisers eerst — eigen vermogen-bezitters laatst.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Aandeelhouders bij beursgenoteerde bedrijven leveren EV" }],
          basiskennis: [{ onderwerp: "geen rente", uitleg: "geen rente op EV (wel op VV)" }],
          niveaus: { basis: "Geld eigenaar.", simpeler: "Eigen geld.", nogSimpeler: "Van eigenaar." },
        },
      },
      {
        q: "Wat zijn **crediteuren**?",
        options: [
          "Leveranciers die nog betaald moeten worden",
          "Klanten die nog moeten betalen",
          "Een bank",
          "Personeel",
        ],
        answer: 0,
        wrongHints: [null, "Dat zijn debiteuren.", "Bank is geen leverancier.", "Personeelskosten zijn aparte posten."],
        uitlegPad: {
          stappen: [{ titel: "Crediteur = leverancier met openstaande factuur", tekst: "Crediteuren zijn leveranciers die het bedrijf nog moet betalen. Schuld → vreemd vermogen (kort). Op de creditkant van de balans." }],
          woorden: [{ woord: "kort vreemd vermogen", uitleg: "schulden <1 jaar" }],
          theorie: "Tegenovergestelde van debiteuren.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bestelling meel ontvangen, nog niet betaald → bakker = crediteur naar melders" }],
          basiskennis: [{ onderwerp: "C van Crediteur", uitleg: "C van betalen aan derden" }],
          niveaus: { basis: "Leverancier nog te betalen.", simpeler: "Wij moeten nog betalen.", nogSimpeler: "Schuld." },
        },
      },
    ],
  },
  {
    title: "Balans opstellen — voorbeeld",
    explanation: "**Voorbeeld**: bakker Lisa op 1 januari.\n\n**Bezittingen**:\n• Bakkerij (gebouw): €120.000\n• Oven: €15.000\n• Bestelauto: €12.000\n• Voorraad meel + ingrediënten: €2.000\n• Klanten die nog moeten betalen: €500\n• Bank: €3.500\n• Kas: €1.000\n\n**Schulden + eigen vermogen**:\n• Hypotheek bakkerij: €80.000\n• Banklening voor oven: €10.000\n• Leverancier nog te betalen: €1.500\n• Eigen vermogen: €62.500\n\n**Balans**:\n\n| Debet | € | Credit | € |\n|---|---|---|---|\n| Bakkerij | 120.000 | Eigen vermogen | 62.500 |\n| Oven | 15.000 | Hypotheek | 80.000 |\n| Bestelauto | 12.000 | Banklening | 10.000 |\n| Voorraad | 2.000 | Crediteuren | 1.500 |\n| Debiteuren | 500 | | |\n| Bank | 3.500 | | |\n| Kas | 1.000 | | |\n| **Totaal** | **154.000** | **Totaal** | **154.000** |\n\n✓ Sluitend.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">balans bakker Lisa</text>
<rect x="20" y="40" width="120" height="120" rx="6" fill="${COLORS.debet}" opacity="0.10" stroke="${COLORS.debet}" stroke-width="1.5"/>
<text x="80" y="60" text-anchor="middle" fill="${COLORS.debet}" font-size="11" font-family="Arial" font-weight="bold">DEBET</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Bakkerij 120.000</text>
<text x="80" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Oven 15.000</text>
<text x="80" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Auto 12.000</text>
<text x="80" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ rest 7.000</text>
<text x="80" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Σ 154.000</text>
<rect x="160" y="40" width="120" height="120" rx="6" fill="${COLORS.credit}" opacity="0.10" stroke="${COLORS.credit}" stroke-width="1.5"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.credit}" font-size="11" font-family="Arial" font-weight="bold">CREDIT</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">EV 62.500</text>
<text x="220" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Hyp 80.000</text>
<text x="220" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Lening 10.000</text>
<text x="220" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Cred 1.500</text>
<text x="220" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Σ 154.000</text>
</svg>`,
    checks: [
      {
        q: "Een bedrijf heeft €40.000 aan bezittingen en €25.000 aan schulden. Hoeveel is het eigen vermogen?",
        options: ["€15.000", "€65.000", "€25.000", "€40.000"],
        answer: 0,
        wrongHints: [null, "Optellen i.p.v. aftrekken. EV = bezit − schuld.", "Dat is de schuld zelf.", "Dat is het totaal aan bezit."],
        uitlegPad: {
          stappen: [{ titel: "EV = Activa − VV = 40.000 − 25.000 = 15.000", tekst: "Eigen vermogen is wat er overblijft als je alle schulden van het bezit aftrekt. 40.000 − 25.000 = 15.000." }],
          woorden: [{ woord: "balansvergelijking", uitleg: "A = EV + VV omgeschreven" }],
          theorie: "Drie vormen: A = EV + VV. EV = A − VV. VV = A − EV.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Huis €300k, hypotheek €240k → EV = €60k" }],
          basiskennis: [{ onderwerp: "aftrekken", uitleg: "schuld eraf om EV te vinden" }],
          niveaus: { basis: "15.000.", simpeler: "40 − 25.", nogSimpeler: "Verschil." },
        },
      },
      {
        q: "Welke balansvergelijking klopt?",
        options: ["A = EV + VV", "EV = A + VV", "VV = EV + A", "A = EV − VV"],
        answer: 0,
        wrongHints: [null, "Nee — bezit = eigen + vreemd vermogen.", "Niet juist.", "Niet aftrekken — optellen."],
        uitlegPad: {
          stappen: [{ titel: "A = EV + VV", tekst: "De fundamentele balansvergelijking: Activa (bezit) = Eigen Vermogen + Vreemd Vermogen. Komt uit het feit dat elke euro bezit financiering nodig heeft." }],
          woorden: [{ woord: "balansvergelijking", uitleg: "basis-formule boekhouding" }],
          theorie: "Drie afgeleide vormen: EV = A − VV. VV = A − EV.",
          voorbeelden: [{ type: "voorbeeld", tekst: "A=100k, EV=40k → VV=60k" }],
          basiskennis: [{ onderwerp: "optellen, niet aftrekken", uitleg: "+ tussen EV en VV" }],
          niveaus: { basis: "A = EV + VV.", simpeler: "Bezit = eigen + vreemd.", nogSimpeler: "Optellen." },
        },
      },
    ],
  },

  // C
  {
    title: "Winst-en-verliesrekening (W&V)",
    explanation: "De **W&V-rekening** (winst-en-verliesrekening) toont over een **periode** (vaak 1 jaar):\n• Wat het bedrijf heeft **verdiend** (opbrengsten / omzet).\n• Wat het heeft **uitgegeven** (kosten).\n• Het verschil = **winst** (positief) of **verlies** (negatief).\n\n**Formule**:\n> Winst = Opbrengsten − Kosten\n\n**Voorbeeld**: bakker Lisa over 1 jaar.\n\n| | € |\n|---|---|\n| Omzet (verkochte broden) | 200.000 |\n| Inkoopkosten meel/eieren | −80.000 |\n| Loonkosten | −60.000 |\n| Huur (geen, eigen pand) | 0 |\n| Energiekosten | −20.000 |\n| Afschrijving oven/auto | −5.000 |\n| Rente bank | −3.000 |\n| **Resultaat (winst)** | **32.000** |\n\nDeze 32.000 winst kan ze:\n1. In het bedrijf laten zitten (verhoogt eigen vermogen).\n2. Als loon naar zichzelf overmaken.\n3. Een combinatie.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="260" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.winst}" stroke-width="1.5"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.winst}" font-size="12" font-family="Arial" font-weight="bold">W&V-REKENING</text>
<text x="40" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">Omzet</text>
<text x="240" y="80" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">200.000</text>
<text x="40" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">– Kosten</text>
<text x="240" y="100" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">−168.000</text>
<line x1="40" y1="115" x2="260" y2="115" stroke="${COLORS.text}" stroke-width="1"/>
<text x="40" y="135" fill="${COLORS.winst}" font-size="12" font-family="Arial" font-weight="bold">= Winst</text>
<text x="240" y="135" text-anchor="end" fill="${COLORS.winst}" font-size="12" font-family="Arial" font-weight="bold">32.000</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">over een periode (vaak 1 jaar)</text>
</svg>`,
    checks: [
      {
        q: "Wat is de **formule voor winst**?",
        options: [
          "Winst = Opbrengsten − Kosten",
          "Winst = Opbrengsten + Kosten",
          "Winst = Activa − Passiva",
          "Winst = Eigen vermogen × 2",
        ],
        answer: 0,
        wrongHints: [null, "Optellen geeft geen winst.", "Dat is geen winstformule.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Winst = Opbrengsten − Kosten", tekst: "Winst is wat overblijft van de opbrengsten (omzet, etc.) nadat alle kosten zijn afgetrokken. Positief = winst. Negatief = verlies." }],
          woorden: [{ woord: "resultaat", uitleg: "ander woord voor winst (of verlies)" }],
          theorie: "Komt uit de W&V-rekening (over een periode).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Omzet €100k, kosten €70k → winst €30k" }],
          basiskennis: [{ onderwerp: "minteken", uitleg: "kosten worden afgetrokken" }],
          niveaus: { basis: "Opbrengsten − Kosten.", simpeler: "Omzet min kosten.", nogSimpeler: "Omzet min kosten. → Min." },
        },
      },
      {
        q: "Een bedrijf heeft omzet €50.000 en totale kosten €38.000. Wat is de winst?",
        options: ["€12.000", "€88.000", "€38.000", "€50.000"],
        answer: 0,
        wrongHints: [null, "Optellen i.p.v. aftrekken.", "Dat zijn de kosten.", "Dat is de omzet."],
        uitlegPad: {
          stappen: [{ titel: "50.000 − 38.000 = 12.000", tekst: "Omzet (50k) min kosten (38k) = winst 12k." }],
          woorden: [{ woord: "omzet", uitleg: "totale opbrengst uit verkopen" }],
          theorie: "Formule: W = O − K. Hoe meer omzet of minder kosten, hoe meer winst.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Omzet €120k, kosten €100k → winst €20k" }],
          basiskennis: [{ onderwerp: "aftrekken", uitleg: "omzet eerst, kosten af" }],
          niveaus: { basis: "€12.000.", simpeler: "50k − 38k.", nogSimpeler: "Verschil." },
        },
      },
    ],
  },
  {
    title: "Soorten kosten",
    explanation: "Kosten zijn niet allemaal hetzelfde. Belangrijk onderscheid:\n\n**Constante kosten** (vaste kosten)\n• Veranderen niet met de productie.\n• Voorbeelden: huur, salarissen vast personeel, abonnementen, afschrijvingen.\n• Ook bij 0 producten betaal je ze.\n\n**Variabele kosten**\n• Stijgen mee met hoeveel je produceert.\n• Voorbeelden: grondstoffen, inkoop, energie per machine, vrachtkosten per zending.\n• Bij 0 producten = €0 variabele kosten.\n\n**Totale kosten** = constant + variabel.\n\n**Andere belangrijke onderscheidingen**:\n• **Inkoopkosten**: kosten voor producten die je doorverkoopt.\n• **Loonkosten**: salarissen.\n• **Afschrijvingen**: waardevermindering van vaste activa (auto, oven) over jaren.\n• **Rente**: kosten voor geleend geld.\n\n**Break-even**: het punt waarop omzet = totale kosten. Daarboven maak je winst.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="120" height="100" rx="10" fill="${COLORS.warm}" opacity="0.18" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">CONSTANT</text>
<text x="80" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">huur</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vast salaris</text>
<text x="80" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">altijd hetzelfde</text>
<rect x="160" y="40" width="120" height="100" rx="10" fill="${COLORS.alt}" opacity="0.18" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">VARIABEL</text>
<text x="220" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">grondstoffen</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">inkoop</text>
<text x="220" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">stijgt met productie</text>
</svg>`,
    checks: [
      {
        q: "Een fietsenmaker betaalt €1.000 huur per maand. Wat voor kosten?",
        options: [
          "Constant",
          "Variabel",
          "Geen kosten",
          "Inkoopkosten",
        ],
        answer: 0,
        wrongHints: [null, "Huur verandert niet met aantal verkochte fietsen.", "Niet bestaand.", "Niet voor inkoop van fietsen — voor het pand."],
        uitlegPad: {
          stappen: [{ titel: "Huur = constant", tekst: "Huur betaal je elke maand hetzelfde bedrag, ongeacht hoeveel fietsen verkocht. Daarom: constante (vaste) kost." }],
          woorden: [{ woord: "constant", uitleg: "verandert niet met productievolume" }],
          theorie: "Andere constante kosten: vast salaris, abonnementen, afschrijvingen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "0 fietsen verkocht → toch €1000 huur" }],
          basiskennis: [{ onderwerp: "ezelsbrug", uitleg: "kun je niet vermijden door minder te produceren" }],
          niveaus: { basis: "Constant.", simpeler: "Vast bedrag.", nogSimpeler: "Altijd hetzelfde." },
        },
      },
      {
        q: "Inkoop van leren zadels voor de fietsen. Wat voor kosten?",
        options: ["Variabel", "Constant", "Eenmalig", "Geen kosten"],
        answer: 0,
        wrongHints: [null, "Hoe meer fietsen, hoe meer zadels nodig — variabel.", "Niet eenmalig.", "Het zijn echte kosten."],
        uitlegPad: {
          stappen: [{ titel: "Zadels = variabel", tekst: "Per verkochte fiets heb je 1 zadel nodig. Meer fietsen = meer inkoop zadels. Dus variabele kost (schaalt mee met productie)." }],
          woorden: [{ woord: "variabel", uitleg: "verandert met productievolume" }],
          theorie: "Inkoop, grondstoffen, vracht, energie per machine — meestal variabel.",
          voorbeelden: [{ type: "voorbeeld", tekst: "0 fietsen verkocht → 0 zadels inkopen → €0 zadel-kosten" }],
          basiskennis: [{ onderwerp: "per stuk", uitleg: "× aantal eenheden" }],
          niveaus: { basis: "Variabel.", simpeler: "Stijgt met productie.", nogSimpeler: "Per fiets." },
        },
      },
    ],
  },
  {
    title: "Afschrijven — kosten over jaren spreiden",
    explanation: "Stel je koopt een **machine van €10.000** die 5 jaar meegaat. Hoor je dan in jaar 1 alle kosten te boeken? Nee.\n\n**Afschrijven**: je verspreidt de kosten over de **gebruiksduur**.\n\n**Formule (lineair)**:\n> Afschrijving per jaar = (Aanschafprijs − Restwaarde) / Gebruiksduur\n\n**Voorbeeld**:\n• Bestelauto kost €30.000.\n• Restwaarde na 5 jaar: €5.000.\n• Afschrijving per jaar = (30.000 − 5.000) / 5 = **€5.000**.\n\nElk jaar:\n• De auto is op de balans **€5.000 minder** waard (vaste activa daalt).\n• In de W&V staat €5.000 aan **afschrijvingskosten**.\n\n**Waarom doen we dit?**\n• De machine slijt en verliest waarde — dat moet zichtbaar zijn op de balans.\n• Anders zou de winst in jaar 1 te laag (door alle kosten ineens), en in jaar 2-5 te hoog zijn.\n\nAfschrijving is **geen geld dat weggaat** — het is een boekhoudkundige kostenpost.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">auto €30.000, 5 jaar</text>
<rect x="40" y="40" width="220" height="40" rx="6" fill="${COLORS.debet}" opacity="0.40"/>
<text x="150" y="65" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">jaar 0: €30.000 (boekwaarde)</text>
${[1, 2, 3, 4, 5].map(i => `<rect x="${40 + (i - 1) * 44}" y="90" width="44" height="${50 - i * 8}" fill="${COLORS.alt}" opacity="0.45"/>
<text x="${62 + (i - 1) * 44}" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">j${i}</text>
<text x="${62 + (i - 1) * 44}" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">${30 - i * 5}k</text>`).join("")}
<text x="150" y="190" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">€5.000 per jaar afschrijven</text>
</svg>`,
    checks: [
      {
        q: "Machine kost €20.000, geen restwaarde, gaat 4 jaar mee. Afschrijving per jaar?",
        options: ["€5.000", "€20.000", "€4.000", "€80.000"],
        answer: 0,
        wrongHints: [null, "Dat is in 1 jaar — verkeerd, je moet spreiden.", "Verkeerd. (20.000 − 0) / 4 = 5.000.", "Vermenigvuldigd i.p.v. gedeeld."],
        uitlegPad: {
          stappen: [{ titel: "Afschrijving = (aanschaf − rest) / jaren", tekst: "Lineaire afschrijving: (20.000 − 0) / 4 = €5.000 per jaar. Verspreid de kosten over de gebruiksduur." }],
          woorden: [{ woord: "lineair", uitleg: "elk jaar zelfde bedrag" }],
          theorie: "Formule: (aanschafprijs − restwaarde) / gebruiksduur.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Auto €30k, rest €5k, 5 jr → afschr €5k/jr" }],
          basiskennis: [{ onderwerp: "spreiden", uitleg: "niet alles in jaar 1" }],
          niveaus: { basis: "€5.000.", simpeler: "20.000 / 4.", nogSimpeler: "Vierde deel." },
        },
      },
      {
        q: "Wat klopt over **afschrijven**?",
        options: [
          "Het is een kostenpost, geen daadwerkelijke geldstroom",
          "Het is geld dat van de bank gaat",
          "Het is een soort belasting",
          "Alleen banken doen het",
        ],
        answer: 0,
        wrongHints: [null, "Het geld is al uitgegeven bij aankoop.", "Geen belasting.", "Elk bedrijf doet het."],
        uitlegPad: {
          stappen: [{ titel: "Afschrijven = boekhoudkundige kost", tekst: "Bij aanschaf geef je het geld al uit. Afschrijving is alleen een KOSTENPOST in de boeken — geen werkelijke geldstroom. Wel verlaagt het de boekwaarde op de balans." }],
          woorden: [{ woord: "boekwaarde", uitleg: "huidige waarde op de balans" }],
          theorie: "Geen cashflow-effect — wel winst-effect (verlaagt winst). Daarom lagere winstbelasting!",
          voorbeelden: [{ type: "voorbeeld", tekst: "€10k machine, 5 jr: elk jaar €2k kosten op W&V, geen geldstroom" }],
          basiskennis: [{ onderwerp: "verschil cash vs profit", uitleg: "boekhoudtruc" }],
          niveaus: { basis: "Kostenpost, geen geldstroom.", simpeler: "Alleen op papier.", nogSimpeler: "Boeking." },
        },
      },
    ],
  },

  // D
  {
    title: "Toepassen — kostprijs en marge",
    explanation: "Twee belangrijke begrippen voor elk bedrijf:\n\n**Kostprijs**: hoeveel het kost om 1 product te maken/inkopen.\n• Voor een handelsbedrijf: meestal de inkoopprijs + transport.\n• Voor een productiebedrijf: grondstoffen + arbeid + machine-uren + deel van vaste kosten.\n\n**Verkoopprijs**: wat de klant betaalt.\n\n**Brutowinst per product** = Verkoopprijs − Kostprijs.\n\n**Voorbeeld** — kledingwinkel:\n• T-shirt inkoopprijs: €5.\n• Verkoopprijs: €15.\n• Brutowinst: €10 per shirt.\n\nMaar: van die €10 moeten ook constante kosten (huur, salarissen) betaald worden. Daarom de **opslag-percentage**: hoeveel boven kostprijs zet je erop?\n\n**Brutomarge** = Brutowinst / Verkoopprijs × 100%.\n• In voorbeeld: 10 / 15 × 100% = 67%.\n\n**Btw** (omzetbelasting): wettelijk percentage bovenop de prijs (in NL meestal 21% of 9%). Niet de winst van het bedrijf — dat moeten ze afdragen aan de Belastingdienst.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="40" width="220" height="40" rx="6" fill="${COLORS.alt}" opacity="0.4"/>
<text x="150" y="65" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">verkoopprijs €15</text>
<rect x="40" y="90" width="73" height="40" rx="6" fill="${COLORS.warm}" opacity="0.4"/>
<text x="76" y="115" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">€5</text>
<text x="76" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial">kostprijs</text>
<rect x="113" y="90" width="147" height="40" rx="6" fill="${COLORS.winst}" opacity="0.4"/>
<text x="186" y="115" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">€10</text>
<text x="186" y="148" text-anchor="middle" fill="${COLORS.winst}" font-size="10" font-family="Arial">brutowinst</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">brutomarge: 10/15 = 67%</text>
</svg>`,
    checks: [
      {
        q: "Een schoen kost €40 inkoop en gaat €100 over de toonbank. Brutowinst?",
        options: ["€60", "€140", "€40", "€100"],
        answer: 0,
        wrongHints: [null, "Optellen i.p.v. aftrekken.", "Dat is de kostprijs.", "Dat is de verkoopprijs."],
        uitlegPad: {
          stappen: [{ titel: "Brutowinst = Verkoopprijs − Kostprijs", tekst: "100 − 40 = 60 euro brutowinst per schoen. Daarvan moeten dan nog vaste kosten betaald — pas dan blijft 'echte' winst over." }],
          woorden: [{ woord: "brutomarge", uitleg: "brutowinst / verkoopprijs × 100%" }],
          theorie: "Brutowinst nog ZONDER vaste kosten. Netto-winst = brutowinst − overige kosten.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Brutomarge 60/100 = 60%" }],
          basiskennis: [{ onderwerp: "per product", uitleg: "berekend per verkocht stuk" }],
          niveaus: { basis: "€60.", simpeler: "100 − 40.", nogSimpeler: "Verschil." },
        },
      },
      {
        q: "Wat is **btw**?",
        options: [
          "Belasting die het bedrijf afdraagt aan de Belastingdienst",
          "Winst van het bedrijf",
          "Kostprijs",
          "Vaste kosten",
        ],
        answer: 0,
        wrongHints: [null, "Btw is niet voor het bedrijf — moet afgedragen worden.", "Btw is geen kostprijsbestanddeel in de boekhouding.", "Btw is niet vast — het is een percentage."],
        uitlegPad: {
          stappen: [{ titel: "Btw = belasting voor de Staat", tekst: "Btw (omzetbelasting) wordt door het bedrijf bij de klant geheven (21% of 9% in NL) maar moet daarna worden afgedragen aan de Belastingdienst. Geen winst voor het bedrijf zelf." }],
          woorden: [{ woord: "21% / 9% / 0%", uitleg: "tarieven in NL" }],
          theorie: "Hoog tarief (21%): luxe + diensten. Laag (9%): voedsel, boeken. Nul (0%): export.",
          voorbeelden: [{ type: "voorbeeld", tekst: "€100 product + 21% = €121 voor klant. €21 gaat naar Belastingdienst" }],
          basiskennis: [{ onderwerp: "doorgeven", uitleg: "bedrijf is inner, niet betaler" }],
          niveaus: { basis: "Belasting afdragen.", simpeler: "Voor Belastingdienst.", nogSimpeler: "Niet eigen geld." },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — financieel inzicht",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Begrip | Wat |\n|---|---|\n| Balans | Momentopname: bezit + financiering |\n| Debet | Bezittingen (activa) |\n| Credit | Eigen vermogen + schulden |\n| Vaste activa | Lang in gebruik (gebouw, machine) |\n| Vlottende activa | Kort in gebruik (voorraad, kas) |\n| Eigen vermogen | Geld eigenaar |\n| Vreemd vermogen | Schulden (lang/kort) |\n| W&V | Periode: opbrengsten − kosten = winst |\n| Constante kosten | Niet afhankelijk van productie |\n| Variabele kosten | Stijgen met productie |\n| Afschrijving | Kosten over gebruiksduur spreiden |\n| Brutowinst | Verkoopprijs − Kostprijs |\n\n**Balansvergelijking**: A = EV + VV\n**Winstformule**: Winst = Opbrengsten − Kosten\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Balans of W&V?</text>
<text x="20" y="68" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Welke posten zijn er?</text>
<text x="20" y="86" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Klopt de balans (links = rechts)?</text>
<text x="20" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Winst of verlies?</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.winst}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Bedrijf heeft activa €60.000, vreemd vermogen €25.000. EV?",
        options: ["€35.000", "€85.000", "€25.000", "€60.000"],
        answer: 0,
        wrongHints: [null, "Optellen — moet aftrekken.", "Dat is de schuld zelf.", "Dat is het totaal aan bezit."],
        uitlegPad: {
          stappen: [{ titel: "EV = A − VV = 60k − 25k = 35k", tekst: "Eigen vermogen = bezit min schulden. 60.000 − 25.000 = 35.000." }],
          woorden: [{ woord: "vreemd vermogen", uitleg: "alle schulden samen" }],
          theorie: "Balansvergelijking: A = EV + VV → EV = A − VV.",
          voorbeelden: [{ type: "voorbeeld", tekst: "A=100k, VV=40k → EV = 60k" }],
          basiskennis: [{ onderwerp: "aftrekken", uitleg: "schuld eraf" }],
          niveaus: { basis: "€35.000.", simpeler: "60 − 25.", nogSimpeler: "Verschil." },
        },
      },
      {
        q: "Wat hoort op de **debetzijde**?",
        options: ["Voorraad", "Hypotheek", "Eigen vermogen", "Crediteuren"],
        answer: 0,
        wrongHints: [null, "Hypotheek = vreemd vermogen = credit.", "EV = credit.", "Crediteuren = credit."],
        uitlegPad: {
          stappen: [{ titel: "Voorraad = bezit = debet", tekst: "Voorraad (spullen die nog niet verkocht zijn) is een bezit van het bedrijf → vlottende activa → debetzijde van de balans." }],
          woorden: [{ woord: "voorraad", uitleg: "ingekochte goederen niet verkocht" }],
          theorie: "Bezit op debet. Financiering (EV + schulden) op credit.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Kledingwinkel: kledingvoorraad in magazijn = debet" }],
          basiskennis: [{ onderwerp: "bezit op links", uitleg: "debet = wat ik HEB" }],
          niveaus: { basis: "Voorraad.", simpeler: "Bezit.", nogSimpeler: "Spullen." },
        },
      },
      {
        q: "Welke is een **constante kost**?",
        options: ["Maandhuur winkel", "Inkoop kleding", "Vrachtkosten", "Energie per machine"],
        answer: 0,
        wrongHints: [null, "Inkoop = variabel.", "Vracht varieert met aantal zendingen.", "Energie per machine ook variabel."],
        uitlegPad: {
          stappen: [{ titel: "Maandhuur = constant", tekst: "Huur betaal je elke maand hetzelfde — ongeacht hoeveel je verkoopt. Constante kost. Andere voorbeelden in de vraag (inkoop, vracht, energie per machine) zijn variabel." }],
          woorden: [{ woord: "constant vs variabel", uitleg: "wel/niet schalend met productie" }],
          theorie: "Constant: huur, vast salaris, abonnementen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Maand met 0 omzet: nog steeds €X huur" }],
          basiskennis: [{ onderwerp: "verbinding met activiteit", uitleg: "huur niet, inkoop wel" }],
          niveaus: { basis: "Maandhuur.", simpeler: "Vast bedrag huur.", nogSimpeler: "Huur." },
        },
      },
      {
        q: "Omzet €100.000, kosten €70.000. Resultaat?",
        options: ["Winst €30.000", "Verlies €30.000", "Winst €170.000", "Geen winst"],
        answer: 0,
        wrongHints: [null, "Omzet > kosten = winst, geen verlies.", "Optellen i.p.v. aftrekken.", "Er is wel winst."],
        uitlegPad: {
          stappen: [{ titel: "100k − 70k = 30k winst", tekst: "Omzet hoger dan kosten = winst. 100.000 − 70.000 = 30.000 winst." }],
          woorden: [{ woord: "resultaat", uitleg: "winst of verlies" }],
          theorie: "Omzet > kosten = winst. Omzet < kosten = verlies.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Omzet 50k, kosten 60k → verlies 10k" }],
          basiskennis: [{ onderwerp: "Winst = O − K", uitleg: "minteken kosten" }],
          niveaus: { basis: "Winst €30.000.", simpeler: "100k − 70k.", nogSimpeler: "Winst." },
        },
      },
      {
        q: "Wat staat aan de **DEBET-kant** van een balans?",
        options: ["Bezittingen (activa)","Schulden","Winst","Inkomen"],
        answer: 0,
        wrongHints: [null, "Niet — schulden = credit (rechts).", "Niet — winst = onderdeel eigen vermogen, credit-kant.", "Niet — inkomen staat op winst-en-verliesrekening, niet balans."],
        uitlegPad: {
          stappen: [
            { titel: "Balans-structuur", tekst: "Een **balans** heeft 2 kanten:\n• **Debet (links)** = **bezittingen** (activa): gebouwen, voorraad, geld in kas, auto's, computers\n• **Credit (rechts)** = **eigen vermogen + schulden** (passiva): kapitaal eigenaar + leningen + crediteuren\n\n**Regel**: debet = credit (altijd in evenwicht). Vandaar 'balans'." },
            { titel: "Voorbeelden activa/passiva", tekst: "**Activa (debet)**:\n• Gebouw waarde €500.000\n• Voorraad waarde €50.000\n• Kasgeld €5.000\n• Bank-saldo €20.000\n• Auto's €30.000\n• Totaal: €605.000\n\n**Passiva (credit)** moet ook €605.000:\n• Eigen vermogen €200.000\n• Hypotheek €350.000\n• Leveranciers-schuld €55.000" },
            { titel: "Cito-feit: ezelsbruggetje", tekst: "**'D-A en C-P'** = Debet-Activa + Credit-Passiva. Onthoud deze!\n\nIn boekhoud-software (Exact, AFAS): debet + credit altijd zichtbaar. Bij verkoop: debet kas, credit voorraad. Bij inkoop: debet voorraad, credit kas/schuld. Symmetrisch boekhouden = dubbel boekhouden, uitvinding 1494 door Luca Pacioli (Italiaans monnik)." },
          ],
          woorden: [
            { woord: "debet", uitleg: "Linker-kant balans: bezittingen + uitgaven." },
            { woord: "credit", uitleg: "Rechter-kant balans: vermogen + inkomsten." },
            { woord: "activa", uitleg: "Bezittingen van bedrijf (debet)." },
            { woord: "passiva", uitleg: "Hoe activa zijn gefinancierd: eigen geld + schulden (credit)." },
          ],
          theorie: "Balans-vergelijking:\nActiva = Eigen Vermogen + Schulden\nLinks (Debet) = Rechts (Credit)\n\nVerschillende balans-types:\n• Begin-balans (start jaar)\n• Eindbalans (einde jaar)\n• Tussenbalans (kwartaal)\n• Voortgangsbalans (controle)",
          voorbeelden: [
            { type: "stap", tekst: "Bakker koopt oven €10.000 contant. Debet: oven +€10.000 (activa). Credit: kas -€10.000 (ook activa, dus verschuiving binnen debet). Balans nog steeds in evenwicht." },
          ],
          basiskennis: [{ onderwerp: "Altijd in balans", uitleg: "Debet = credit. Anders is er een fout in boekhouding." }],
          niveaus: { basis: "Bezittingen. = A.", simpeler: "Debet (links) van balans = activa = wat bedrijf bezit (gebouw, voorraad, geld). = A.", nogSimpeler: "Bezittingen = A." },
        },
      },
      {
        q: "Wat is **liquiditeit**?",
        options: ["Snel kunnen omzetten naar geld (kas + bank)","Hoeveelheid winst","Hoeveel je verdient","Tijd op kantoor"],
        answer: 0,
        wrongHints: [null, "Niet — dat is winst.", "Niet — dat is inkomen.", "Niet — geen tijd-meting."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is liquiditeit?", tekst: "**Liquiditeit** = **mate waarin bezittingen snel naar geld omgezet kunnen worden**. Belangrijk voor bedrijven om rekeningen te betalen.\n\n**Liquide volgorde** (snelst naar langzaamst):\n• **Kas** (direct beschikbaar)\n• **Bank** (binnen 1 dag)\n• **Vorderingen** (klanten betalen binnen 30-60 dagen)\n• **Voorraad** (moet eerst verkocht)\n• **Gebouwen** (kost maanden om te verkopen)" },
            { titel: "Liquiditeitsratio's", tekst: "Bedrijven berekenen **liquiditeit-ratio's** om gezondheid te checken:\n• **Current Ratio** = vlottende activa ÷ kortlopende schulden. Streven: >1.0 (kan schulden betalen)\n• **Quick Ratio** = (vlottende activa - voorraad) ÷ kortlopende schulden. Strenger\n• **Kas-ratio** = kas + bank ÷ kortlopende schulden\n\nLage ratio = bedrijf kan rekeningen niet betalen = faillissement-risico." },
            { titel: "Cito-feit: bedrijven failliet", tekst: "Veel bedrijven gaan **failliet** ondanks winst! Reden: te lage liquiditeit. Voorbeeld:\n• Winst van €100.000\n• Maar al je geld zit in voorraad\n• Geen geld om huur/lonen te betalen\n• Failliet\n\nLes voor Cito: winst ≠ liquiditeit. **Cashflow is koning**." },
          ],
          woorden: [
            { woord: "liquide", uitleg: "Snel naar geld om te zetten (kas, bank)." },
            { woord: "illiquide", uitleg: "Moeilijk naar geld om te zetten (gebouw, kunstwerk)." },
            { woord: "cashflow", uitleg: "Geldstroom in/uit bedrijf — niet hetzelfde als winst." },
          ],
          theorie: "Liquiditeits-hiërarchie balans:\n• **Vlottende activa** (1 jaar of korter): kas, bank, voorraad, vorderingen\n• **Vaste activa** (>1 jaar): gebouwen, machines, vrachtwagens\n\nWel-liquide bedrijven kunnen storm doorstaan. Niet-liquide = kwetsbaar.",
          voorbeelden: [
            { type: "stap", tekst: "Restaurant met €10k kas, €30k voorraad, €100k gebouw. Liquide = €10k. Bij plotselinge schuld €20k → ZIE direct probleem ondanks veel totale activa." },
          ],
          basiskennis: [{ onderwerp: "Goud regel", uitleg: "Houd 3-6 maanden kosten in kas/bank. Voor noodgevallen." }],
          niveaus: { basis: "Snel naar geld omzetten. = A.", simpeler: "Liquiditeit = hoe snel kun je bezittingen naar geld omzetten. Kas = direct, gebouw = maanden. = A.", nogSimpeler: "Snel geld = A." },
        },
      },
      {
        q: "Wat is **afschrijven** (boekhoudkundig)?",
        options: ["Waarde-vermindering vaste activa over levensduur","Iets weggooien","Korting","Belasting"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afvoeren, andere term.", "Niet — korting is iets anders.", "Niet — wel mag afschrijving belastbaar zijn."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is afschrijven?", tekst: "**Afschrijven** = de **waarde van een vast actief (auto, machine, gebouw) over de jaren verlagen** op de balans. Reden: deze spullen slijten + verouderen.\n\nVoorbeeld: bedrijf koopt **vrachtwagen €60.000**, gebruikt 6 jaar:\n• Afschrijving: €60.000 ÷ 6 jaar = **€10.000/jaar**\n• Jaar 1 op balans: €50.000\n• Jaar 2: €40.000\n• ...\n• Jaar 6: €0 (boekwaarde)" },
            { titel: "Waarom afschrijven?", tekst: "**Doelen**:\n• Reëel beeld van bedrijfswaarde\n• Verspreid kosten over gebruiksjaren\n• **Belasting-voordeel**: afschrijving = kosten = minder winst = minder belasting\n• Voorbereid op vervanging (sparen voor nieuwe machine)\n\nElke vaste activa heeft eigen **levensduur**:\n• Auto: 5 jaar\n• Computer: 3 jaar\n• Gebouw: 33 jaar\n• Machine: 10 jaar" },
            { titel: "Cito-feit: methodes", tekst: "**Afschrijvingsmethoden**:\n• **Lineair**: gelijke € per jaar (simpelste)\n• **Degressief**: meer eerste jaren, minder later (versneld)\n• **Productie-eenheden**: op basis van gebruik (km of uren)\n\nKeuze afhankelijk van bedrijfsbeleid + belasting-regels. Cito-VMBO: meestal lineair." },
          ],
          woorden: [
            { woord: "afschrijven", uitleg: "Waarde-vermindering van vast actief over levensduur." },
            { woord: "boekwaarde", uitleg: "Waarde op balans NA afschrijving (origineel min cumulatieve afschrijving)." },
            { woord: "levensduur", uitleg: "Hoeveel jaar een actief economisch bruikbaar is." },
          ],
          theorie: "Lineaire afschrijving formule:\nAfschrijving per jaar = (Aanschaf - Restwaarde) ÷ Levensduur\n\nBv: machine €50.000, restwaarde €5.000, 5 jaar.\n→ (50.000 - 5.000) ÷ 5 = **€9.000 per jaar**",
          voorbeelden: [
            { type: "stap", tekst: "Bedrijfsauto €30.000, 5 jaar, restwaarde €0. → €6.000/jaar afschrijven. Na 3 jaar boekwaarde €12.000." },
          ],
          basiskennis: [{ onderwerp: "Cito-economie-stof", uitleg: "Afschrijven = examen-VMBO-stof. Lineair-formule moeten kunnen toepassen." }],
          niveaus: { basis: "Waarde-vermindering vast actief. = A.", simpeler: "Afschrijven = waarde van auto/machine over jaren verlagen op balans. Lineair: gelijke € per jaar. = A.", nogSimpeler: "Waarde dalen = A." },
        },
      },
      { q: "Welke is een **vast actief**?", options: ["Gebouw","Voorraad","Banksaldo","Klant-vordering"], answer: 0, wrongHints: [null, "Vlottend.", "Liquide.", "Vlottend."] },
      { q: "Welke is een **vlottend actief**?", options: ["Voorraad","Gebouw","Machine","Auto"], answer: 0, wrongHints: [null, "Vast.", "Vast.", "Vast."] },
      { q: "Welke is een **schuld op lange termijn**?", options: ["Hypotheek","Crediteur","Belasting","Salaris"], answer: 0, wrongHints: [null, "Kort.", "Kort.", "Kort."] },
      { q: "Een **balans** bestaat uit welke 2 kanten?", options: ["Activa (links) + Passiva (rechts)","Inkomsten + Uitgaven","Winst + Verlies","Eigen + vermogen"], answer: 0, wrongHints: [null, "Resultatenrekening.", "Resultatenrekening.", "Onvolledig."] },
      { q: "Balanstotaal **links = rechts** moet altijd ___?", options: ["Gelijk zijn","Verschillen","Links groter","Rechts groter"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Tegenovergesteld."] },
      { q: "**Eigen vermogen** = ?", options: ["Activa − Vreemd vermogen","Activa + Schulden","Schulden alleen","Winst alleen"], answer: 0, wrongHints: [null, "Niet primair.", "Niet primair.", "Niet primair."] },
      { q: "**Winst & Verliesrekening** toont?", options: ["Opbrengsten − kosten over een periode","Bezittingen op balans-datum","Schulden alleen","Eigen vermogen"], answer: 0, wrongHints: [null, "Balans.", "Balans.", "Balans."] },
      { q: "**Crediteur** = ?", options: ["Iemand aan wie het bedrijf geld moet","Iemand die geld krijgt van bedrijf","Bank","Klant"], answer: 0, wrongHints: [null, "Debiteur.", "Niet primair.", "Debiteur."] },
      { q: "**Debiteur** = ?", options: ["Klant die nog moet betalen","Leverancier","Eigenaar","Bank"], answer: 0, wrongHints: [null, "Crediteur.", "Niet primair.", "Niet primair."] },
      { q: "**Open vraag**: machine €40.000, restwaarde €0, levensduur 4 jaar — lineaire afschrijving per jaar in euro? (typ alleen getal)", kind: "open", acceptedAnswers: ["10000", "10.000", "10000 euro"], explanation: "(40.000 − 0) / 4 = 10.000 per jaar." },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const balansBeco = {
  id: "balans-beco",
  title: "Balans en winst-en-verliesrekening",
  emoji: "📊",
  level: "havo3-4",
  subject: "beco",
  referentieNiveau: "HAVO",
  sloThema: "Bedrijfseconomie — balans & winst-verliesrekening",
  prerequisites: [
    { id: "pincode-ondernemen", title: "Pincode — ondernemen", niveau: "vmbo-onderbouw" },
    { id: "pincode-belasting", title: "Pincode — belasting", niveau: "vmbo-onderbouw" },
  ],
  intro:
    "De twee kern-overzichten van elke onderneming: de balans (debet = credit) en de winst-en-verliesrekening (omzet − kosten = winst). Met activa, passiva, eigen vs vreemd vermogen, kosten-soorten en afschrijven. Eerste pad bedrijfseconomie.",
  triggerKeywords: [
    "balans", "debet", "credit",
    "activa", "passiva",
    "vaste activa", "vlottende activa", "voorraad", "debiteuren",
    "eigen vermogen", "vreemd vermogen", "lening", "hypotheek",
    "crediteuren", "schulden",
    "winst", "verlies", "winst en verliesrekening", "wv", "w&v",
    "opbrengsten", "kosten",
    "constante kosten", "variabele kosten", "vaste kosten",
    "afschrijven", "afschrijving", "boekwaarde",
    "kostprijs", "verkoopprijs", "brutowinst", "marge",
    "btw", "omzetbelasting",
    "bedrijfseconomie", "beco",
  ],
  chapters,
  steps,
};

export default balansBeco;
