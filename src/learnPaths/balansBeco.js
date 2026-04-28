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
      },
      {
        q: "Welke balansvergelijking klopt?",
        options: ["A = EV + VV", "EV = A + VV", "VV = EV + A", "A = EV − VV"],
        answer: 0,
        wrongHints: [null, "Nee — bezit = eigen + vreemd vermogen.", "Niet juist.", "Niet aftrekken — optellen."],
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
      },
      {
        q: "Een bedrijf heeft omzet €50.000 en totale kosten €38.000. Wat is de winst?",
        options: ["€12.000", "€88.000", "€38.000", "€50.000"],
        answer: 0,
        wrongHints: [null, "Optellen i.p.v. aftrekken.", "Dat zijn de kosten.", "Dat is de omzet."],
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
      },
      {
        q: "Inkoop van leren zadels voor de fietsen. Wat voor kosten?",
        options: ["Variabel", "Constant", "Eenmalig", "Geen kosten"],
        answer: 0,
        wrongHints: [null, "Hoe meer fietsen, hoe meer zadels nodig — variabel.", "Niet eenmalig.", "Het zijn echte kosten."],
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
      },
      {
        q: "Wat hoort op de **debetzijde**?",
        options: ["Voorraad", "Hypotheek", "Eigen vermogen", "Crediteuren"],
        answer: 0,
        wrongHints: [null, "Hypotheek = vreemd vermogen = credit.", "EV = credit.", "Crediteuren = credit."],
      },
      {
        q: "Welke is een **constante kost**?",
        options: ["Maandhuur winkel", "Inkoop kleding", "Vrachtkosten", "Energie per machine"],
        answer: 0,
        wrongHints: [null, "Inkoop = variabel.", "Vracht varieert met aantal zendingen.", "Energie per machine ook variabel."],
      },
      {
        q: "Omzet €100.000, kosten €70.000. Resultaat?",
        options: ["Winst €30.000", "Verlies €30.000", "Winst €170.000", "Geen winst"],
        answer: 0,
        wrongHints: [null, "Omzet > kosten = winst, geen verlies.", "Optellen i.p.v. aftrekken.", "Er is wel winst."],
      },
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
