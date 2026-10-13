// Leerpad: Bedrijfseconomie kerngebieden — HAVO/VWO (M&O-opvolger)
// Eindexamen-CSE-stof: financiën + organisatie + marketing + handel.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  finan: "#42a5f5",
  org: "#ab47bc",
  marketing: "#ef6c00",
  recht: "#66bb6a",
  hl: "#ffd54f",
};

const stepEmojis = ["💼", "📊", "📈", "🛒", "🏆"];

const chapters = [
  { letter: "A", title: "Balans + V&W-rekening", emoji: "💼", from: 0, to: 0 },
  { letter: "B", title: "Kostencalculatie", emoji: "📊", from: 1, to: 1 },
  { letter: "C", title: "Financiering + investering", emoji: "📈", from: 2, to: 2 },
  { letter: "D", title: "Marketing + handel", emoji: "🛒", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Balans + V&W ──────────────────────────────────────
  {
    title: "Balans + Winst-en-Verlies-rekening",
    explanation:
      "**Bedrijfseconomie** (HAVO/VWO sinds 2018; voorheen M&O = Management + Organisatie) onderzoekt financiën + organisatie van bedrijven.\n\n**Balans** = financiële foto van bedrijf op één moment. Twee zijden — **altijd in evenwicht**.\n\n**Linkerzijde (debet) = Activa**: wat bedrijf BEZIT.\n• **Vaste activa**: > 1 jaar gebruikt. Gebouwen, machines, voertuigen, computers.\n• **Vlottende activa**: < 1 jaar. Voorraden, debiteuren (klanten die nog moeten betalen), bank/kas.\n\n**Rechterzijde (credit) = Passiva**: hoe bedrijf gefinancierd is.\n• **Eigen vermogen (EV)**: van eigenaar(s). Aandelenkapitaal + reserves.\n• **Vreemd vermogen (VV)** = schulden:\n  - **Lang VV** (> 1 jaar): hypotheek, lening.\n  - **Kort VV** (< 1 jaar): crediteuren (leveranciers nog te betalen), bankkrediet.\n\n**Balansvergelijking**: Activa = Passiva = Eigen Vermogen + Vreemd Vermogen.\n\n**Voorbeeld balans (vereenvoudigd)**:\n```\nBakkerij De Korenaar — 31 dec 2025\n\nDebet (Activa)             Credit (Passiva)\nGebouw         €200.000    Eigen vermogen   €150.000\nMachines        €50.000    Hypotheek        €100.000\nVoorraad        €10.000    Crediteuren       €20.000\nDebiteuren      €15.000    Bankkrediet       €10.000\nBank             €5.000\n────────────────────────────────────────────────\nTotaal         €280.000    Totaal           €280.000\n```\n\n**Solvabiliteit** = mate waarin bedrijf bij faillissement schulden kan betalen.\n• Formule: **EV / Totaal vermogen × 100%**.\n• Voorbeeld: 150.000 / 280.000 = ~54%.\n• Hoger = veiliger.\n• Vuistregel: minimaal 25-30% — banken eisen vaak hoger voor lening.\n\n**Liquiditeit** = mate waarin bedrijf direct kan betalen.\n• **Current ratio**: vlottende activa / kort VV. Minimaal 1, beter 1,5+.\n• **Quick ratio**: (vlottende activa − voorraad) / kort VV. Minimaal 1.\n\n**Winst-en-Verlies-rekening (W&V)** = financieel resultaat over **periode** (meestal jaar).\n\n**Structuur W&V**:\n```\nNetto-omzet                €500.000\n− Inkoopwaarde omzet       −€300.000\n──────────────────────────\nBruto winst                €200.000\n\n− Lonen                    −€80.000\n− Huur                     −€20.000\n− Afschrijvingen           −€15.000\n− Overige kosten           −€10.000\n──────────────────────────\nBedrijfsresultaat          €75.000\n\n− Rente                    −€5.000\n──────────────────────────\nResultaat vóór belasting   €70.000\n− Vennootschapsbelasting   −€17.500 (25%, vereenvoudigd)\n──────────────────────────\nNettowinst                 €52.500\n```\n\n**Belangrijke begrippen**:\n• **Omzet** = verkoopprijs × aantal verkocht.\n• **Inkoopwaarde** = wat producten kostten.\n• **Brutowinst** = omzet − inkoopwaarde.\n• **Afschrijvingen** = verlies waarde vaste activa over tijd. Lineair: (aanschaf − restwaarde) / levensduur.\n• **Vennootschapsbelasting (vpb)** = 19% NL (laag tarief tot €200k) / 25,8% hoog tarief (2024).\n\n**Rentabiliteit** (winstgevendheid):\n• **REV** (rentabiliteit eigen vermogen) = nettowinst / gem. EV × 100%.\n• **RTV** (rentabiliteit totaal vermogen) = bedrijfsresultaat / gem. totaal vermogen × 100%.\n• Hoog = goed presterend.\n\n**Toets-patroon**: balans + W&V analyseren + ratio's berekenen + advies geven 'is bedrijf gezond?'.",
    checks: [
      {
        q: "Welke zijn **passiva**?",
        options: ["Eigen + vreemd vermogen", "Gebouwen + voorraden + kas", "Debiteuren + crediteuren", "Omzet + kosten + winst"],
        answer: 0,
        wrongHints: [null, "Gebouwen, voorraden en kas zijn bezittingen van het bedrijf. Staan bezittingen links of rechts op de balans?", "Crediteuren staan wel rechts op de balans — maar debiteuren? Wie is wie geld schuldig?", "Dat zijn posten van de winst-en-verliesrekening, niet van de balans."],
        uitlegPad: {
          stappen: [{ titel: "Rechts op balans", tekst: "**Passiva** (credit-zijde balans) = **hoe** bedrijf gefinancierd is: Eigen Vermogen + Vreemd Vermogen. Tegenover **activa** (debet) = **wat** bedrijf bezit: gebouwen, voorraad, debiteuren, etc. Balans altijd in evenwicht: A = P." }],
          niveaus: { basis: "EV + VV.", simpeler: "Passiva = EV+VV", nogSimpeler: "EV + VV." },
        },
      },
      {
        q: "**Solvabiliteit** berekenen:",
        options: ["EV / totaal vermogen × 100%", "VV / eigen vermogen × 100%", "Omzet / totale kosten × 100%", "Nettowinst / omzet × 100%"],
        answer: 0,
        wrongHints: [null, "Dat is de verhouding vreemd tegenover eigen vermogen (debt-equity-ratio), niet de solvabiliteit.", "Niet — dat zegt niets over hoe het bedrijf gefinancierd is.", "Niet — dat is de winstmarge."],
        uitlegPad: {
          stappen: [{ titel: "Eigen vermogen-aandeel", tekst: "**Solvabiliteit** = **EV / Totaal vermogen × 100%**. Toont in welke mate bedrijf zijn schulden kan betalen bij faillissement. Vuistregel ≥25-30%. Banken eisen vaak 40%+ voor lening." }],
          niveaus: { basis: "EV/TV ×100.", simpeler: "Solv = EV/TV", nogSimpeler: "EV/TV ×100." },
        },
      },
      {
        q: "Wat is **brutowinst**?",
        options: ["Omzet − inkoopwaarde","Omzet − alle kosten","Omzet − constante kosten","Omzet − btw"],
        answer: 0,
        wrongHints: [null, "Als je álle kosten aftrekt, houd je de nettowinst over. Welke kosten trek je bij brutowinst als eerste af?", "Constante kosten zoals huur komen pas later aan de beurt. Welke kosten horen bij de verkochte spullen zelf?", "Omzet zonder btw heet de netto-omzet. Wat moet je nog aftrekken om te zien wat je aan de verkochte spullen verdient?"],
        uitlegPad: {
          stappen: [{ titel: "Verschil verkoop-inkoop", tekst: "**Brutowinst** = omzet − inkoopwaarde van verkochte producten. Bv: kocht voor €300k, verkocht voor €500k → brutowinst €200k. Daarvan moeten nog lonen, huur, afschrijvingen, rente, belasting af → nettowinst." }],
          niveaus: { basis: "Omzet − inkoop.", simpeler: "Bruto = O − I", nogSimpeler: "Omzet − inkoop." },
        },
      },
      {
        q: "**Afschrijving** is:",
        options: ["Waardedaling van vaste activa door gebruik", "Aangifte van de winst bij de Belastingdienst", "Uitbetaling van loon aan het personeel", "Inkoop van nieuwe voorraad grondstoffen"],
        answer: 0,
        wrongHints: [null, "Afschrijven heeft niets met de fiscus te maken — wat gebeurt er met de waarde van een machine na jaren gebruik?", "Loon is de vergoeding voor werk van mensen. Afschrijven gaat over iets wat jaren meegaat — wat gebeurt daarmee?", "Voorraad verkoop of verbruik je snel. Waarover gaat afschrijven: iets wat kort of wat lang meegaat?"],
        uitlegPad: {
          stappen: [{ titel: "Spreiding van kosten", tekst: "**Afschrijving** = jaarlijkse waardevermindering vaste activa (gebouw, machine, auto). Lineair: (aanschaf − restwaarde) / levensduur. Bv. machine €50k, restwaarde €5k, levensduur 10 jaar → €4500/jaar afschrijving. Spreiding van kosten over gebruiksperiode." }],
          niveaus: { basis: "Waardeverlies activa.", simpeler: "Afschrijving = waarde-verlies", nogSimpeler: "Waardeverlies activa." },
        },
      },
      {
        q: "**Current ratio** vlottende activa / kort vreemd vermogen. Wat is minimum?",
        options: ["1", "0,5", "0,8", "10"],
        answer: 0,
        wrongHints: [null, "Dan heb je voor elke euro korte schuld maar 50 cent aan vlottende activa. Kun je dan al je rekeningen betalen?", "Dan heb je voor elke euro korte schuld maar 80 cent aan vlottende activa. Is dat genoeg om alles te betalen?", "Dat mag, maar dan ligt er veel geld stil. De vraag is wat je mínstens nodig hebt."],
        uitlegPad: {
          stappen: [{ titel: "Liquiditeit-grens", tekst: "**Current ratio** = vlottende activa / kort VV. Indicator liquiditeit (direct betaalvermogen). **Minimaal 1** = evenveel vlottend bezit als korte schuld. **1,5+** = comfortabel. Te laag = mogelijk niet kunnen betalen op tijd. Te hoog = misschien te veel kapitaal vast (geld werkt niet)." }],
          niveaus: { basis: "~1.", simpeler: "Min current ratio = 1", nogSimpeler: "1" },
        },
      },
    ],
  },

  // ─── B. Kostencalculatie ──────────────────────────────────
  {
    title: "Kostencalculatie + Break-even",
    explanation:
      "Bedrijven moeten weten: **wat kost mijn product werkelijk?** Pas dan kun je prijs bepalen + winst maken.\n\n**Kosten-soorten**:\n\n**Constante (vaste) kosten**:\n• Onafhankelijk van productie-omvang.\n• Voorbeelden: huur pand, salaris vast personeel, verzekeringen, afschrijving machines.\n• Per stuk dalen ze als je meer produceert (gespreid).\n\n**Variabele kosten**:\n• Stijgen met productie.\n• Voorbeelden: grondstoffen, energie, productie-arbeid (uurloon).\n\n**Totale kosten** = constante + variabele kosten.\n\n**Voorbeeld T-shirts**:\n• Constante kosten /maand: €5.000 (huur + machines + vast personeel).\n• Variabele kosten /T-shirt: €4 (stof + naald + draad).\n• Verkoopprijs: €15.\n\nKostprijs / T-shirt bij 1000 stuks/maand:\n• Constant per stuk: 5000/1000 = €5.\n• Variabel: €4.\n• **Kostprijs**: €9.\n• Winst per T-shirt: 15 − 9 = **€6**.\n\nKostprijs / T-shirt bij 500 stuks/maand:\n• Constant per stuk: 5000/500 = €10.\n• Variabel: €4.\n• **Kostprijs**: €14. Winst per T-shirt: €1 — bijna geen marge.\n\n**→ Schaalvoordelen**: meer produceren verlaagt kostprijs (alleen door constante kosten gespreid).\n\n**Break-even-punt (BEP)** = aantal stuks waarbij omzet = totale kosten → geen winst, geen verlies.\n\n**Formule**: BEP = **constante kosten / (verkoopprijs − variabele kosten/stuk)**.\n\n• Noemer (P − V) = **dekkingsbijdrage per stuk** (deel van prijs dat bijdraagt aan dekken constante kosten).\n• Voorbeeld T-shirts: 5000 / (15 − 4) = 5000/11 ≈ **455 stuks/maand**.\n• Boven 455: winst. Onder: verlies.\n\n**BEP-omzet** = BEP × verkoopprijs = 455 × 15 = €6825 omzet om break-even te bereiken.\n\n**Dekkingsbijdrage (DB)**:\n• Totale DB = omzet − totale variabele kosten.\n• Eerst dekt DB de constante kosten, daarna = winst.\n\n**Verkoop-prijs-bepaling-methodes**:\n\n**Cost-plus-prijs** (kostprijs-plus):\n• Bereken kostprijs → tel winstopslag op.\n• Voorbeeld: kostprijs €9 + 30% opslag = €11,70.\n• Eenvoudig maar negeert markt.\n\n**Marktprijs**:\n• Wat concurrentie + klant accepteren.\n• Belangrijker in concurrerende markt.\n\n**Penetratiestrategie**:\n• Lage start-prijs om markt in te dringen.\n• Voorbeelden: Netflix-start NL, Aldi.\n\n**Skimming**:\n• Hoge start-prijs voor early-adopters.\n• Voorbeelden: nieuwe iPhone, Tesla-debut.\n\n**Promotionele prijs**:\n• Tijdelijke korting.\n• Acties: 1+1 gratis, 50% korting.\n\n**BTW + prijs**:\n• In NL BTW 21% (hoog), 9% (laag voor voedsel, boeken, OV, etc.), 0% (export).\n• Verkoopprijs **incl. BTW** vs **excl. BTW**.\n• Voor bedrijf is BTW doorgeefluik (consument betaalt, bedrijf draagt af).\n\n**Marges**:\n• **Brutomarge** = (omzet − inkoop) / omzet × 100%.\n• **Nettowinstmarge** = nettowinst / omzet × 100%.\n• Detailhandel: bruto 30-50%, netto 2-10%.\n• Tech: bruto 60-80%, netto 20-30%.\n• Auto-dealers: bruto 10-15%, netto 2-3%.\n\n**Toets-patroon**: bereken BEP + adviseer prijsstrategie.",
    checks: [
      {
        q: "**Constante kosten** zijn:",
        options: ["Onafhankelijk van productie-omvang", "Stijgen mee met de productie-omvang", "Worden nul zodra de productie stopt", "Verschillen elke maand in hoogte"],
        answer: 0,
        wrongHints: [null, "Kosten die meegroeien met de productie heten variabele kosten. Wat doen constante kosten dan?", "Denk aan de huur van de fabriek: loopt die door als de machines stilstaan?", "Dat kan gebeuren, maar zegt niets over de definitie. Waar hangen constante kosten wél of níét van af?"],
        uitlegPad: {
          stappen: [{ titel: "Vast = vast", tekst: "**Constante (vaste) kosten** blijven gelijk ongeacht hoeveel je produceert: huur, vaste lonen, verzekeringen, afschrijving. **Variabele kosten** stijgen met productie: grondstof, energie. Per stuk dalen constante als je meer maakt." }],
          niveaus: { basis: "Onafhankelijk productie.", simpeler: "Constant = vast", nogSimpeler: "Vast" },
        },
      },
      {
        q: "**Break-even-punt-formule**:",
        options: ["Constante kosten / (prijs − variabele kosten/stuk)", "Constante kosten / verkoopprijs per stuk", "Omzet / (totale kosten − constante kosten)", "Nettowinst / gemiddeld eigen vermogen × 100%"],
        answer: 0,
        wrongHints: [null, "Bijna — maar wat moet je van de prijs eerst nog aftrekken?", "Niet — daar komt geen aantal stuks uit.", "Niet — dat is de rentabiliteit van het eigen vermogen."],
        uitlegPad: {
          stappen: [{ titel: "Constant ÷ dekkingsbijdrage", tekst: "**BEP** = **Constante kosten / (Prijs per stuk − Variabele kosten per stuk)**. Noemer = **dekkingsbijdrage per stuk** (DB). Hoeveel stuks moet je verkopen tot DB samen = constante kosten. Pas daarboven winst." }],
          niveaus: { basis: "K/(P−V).", simpeler: "BEP = constant/DB", nogSimpeler: "K/(P−V)." },
        },
      },
      {
        q: "Constante kosten €10.000, prijs €25, variabele €5/stuk. **BEP**?",
        options: ["500 stuks", "2.000 stuks", "400 stuks", "333 stuks"],
        answer: 0,
        wrongHints: [null, "Je deelde door de variabele kosten (€5). Waardoor moet je delen: wat blijft er per stuk over?", "Je deelde alleen door de prijs (€25). Wat moet je van die prijs nog aftrekken?", "Je telde de variabele kosten bij de prijs op. Moet je ze optellen of aftrekken?"],
        uitlegPad: {
          stappen: [{ titel: "Bereken", tekst: "BEP = 10.000 / (25 − 5) = 10.000/20 = **500 stuks**. Bij 500 stuks: omzet = 500×25 = 12.500. Kosten = 10.000 + 500×5 = 12.500. ✓ Break-even." }],
          niveaus: { basis: "500.", simpeler: "10k/20 = 500", nogSimpeler: "500" },
        },
      },
      {
        q: "Welke prijsstrategie past bij **nieuwe iPhone**?",
        options: ["Skimming (hoge start-prijs)", "Penetratie (lage start-prijs)", "Cost-plus (kostprijs + opslag)", "Prijsvolger (prijs van concurrent)"],
        answer: 0,
        wrongHints: [null, "Bij een nieuwe iPhone staan fans in de rij om hem als eerste te hebben. Zou Apple dan laag instappen?", "Cost-plus kijkt alleen naar de eigen kosten. Waar let Apple bij een lancering vooral op: de kosten, of wat fans willen betalen?", "Volgt Apple bij een nieuwe lancering de prijs van een concurrent, of zet Apple zelf de toon?"],
        uitlegPad: {
          stappen: [{ titel: "Premium-strategie", tekst: "**Skimming**: hoge start-prijs voor early-adopters bereid te betalen. Later prijsverlaging. Apple-classic: nieuwe iPhone €1200+, oudere modellen blijven beschikbaar lager. Tesla-debut zelfde patroon. **Penetratie**: tegenovergestelde — lage start om markt te winnen (Aldi, Netflix-NL-start)." }],
          niveaus: { basis: "Skimming.", simpeler: "iPhone-nieuw = skimming", nogSimpeler: "Skimming." },
        },
      },
      {
        q: "NL **BTW-hoog tarief** is:",
        options: ["21%","9%","0%","19%"],
        answer: 0,
        wrongHints: [null, "9% is het lage tarief, bijvoorbeeld voor eten en boeken.", "0% geldt vooral bij export. Wat betaal je bij een gewone aankoop?", "19% was het hoge tarief tot 2012 (en is het tarief in Duitsland). Hoe hoog is het nu in Nederland?"],
        uitlegPad: {
          stappen: [{ titel: "Drie tarieven", tekst: "**NL BTW**:\n• **21% (hoog)**: meeste producten + diensten.\n• **9% (laag)**: voedsel, water, boeken, OV, geneesmiddelen, cultuur.\n• **0%**: export (geen NL-BTW heffen). Bedrijven betalen wel BTW op inkoop maar krijgen terug.\n\nBTW is **omzet-belasting** — consument draagt, bedrijf draagt af." }],
          niveaus: { basis: "21%.", simpeler: "BTW hoog = 21%", nogSimpeler: "21" },
        },
      },
    ],
  },

  // ─── C. Financiering + investering ────────────────────────
  {
    title: "Financiering + investering",
    explanation:
      "Bedrijven hebben geld nodig — voor opstart, groei, vervanging machines. **Hoe** krijg je dat? **Welke** investering doe je?\n\n**Financiering-bronnen**:\n\n**Eigen vermogen**:\n• Eigen geld eigenaren bij start.\n• Ingehouden winst (niet uitgekeerd als dividend).\n• Aandelen (publiek of privé verkocht).\n• Geen rente, geen aflossing — maar verdunning eigenaarschap.\n\n**Vreemd vermogen + andere bronnen van buiten**:\n• **Bank-lening**: vaste rente + aflossings-schema.\n• **Hypotheek**: lange-termijn-lening met onroerend goed als onderpand.\n• **Obligaties**: bedrijf geeft schuldpapieren uit, beleggers kopen.\n• **Leasen**: huren in plaats van kopen.\n• **Crediteuren**: leveranciers laten je later betalen.\n• **Crowdfunding**: vele kleine investeerders via online platform.\n• **Venture capital**: investeerders nemen aandeel in jonge bedrijven (dat is eigen vermogen van buiten, geen lening).\n• **Subsidies**: overheid (innovatie, duurzaam, regionale ontwikkeling).\n\n**Voorkeuren financiering**:\n• Starter: eigen geld + familie/vrienden + crowdfunding + soms VC.\n• MKB: bank-lening + leveranciers-krediet.\n• Beursgenoteerd: aandelen + obligaties.\n\n**Rente**:\n• **Enkelvoudig**: rente over hoofdsom alleen.\n• **Samengesteld**: rente over rente erbij. Lange termijn → enorm effect (exponentiële groei).\n• Formule: K_eind = K_start × (1 + r)^n.\n• Voorbeeld: €1000 bij 5%/jaar over 20 jaar → 1000 × 1,05²⁰ = €2653.\n\n**Investeringscriteria**:\n\n**Terugverdientijd (TVT, Payback Period)**:\n• Hoe lang om investering terug te verdienen via netto-cashflow.\n• Voorbeeld: machine €100k, jaarlijkse netto-besparing €25k → TVT = 4 jaar.\n• Simpel maar negeert lange-termijn-cashflow + tijdwaarde geld.\n\n**Netto Contante Waarde (NCW / NPV)**:\n• Toekomstige cashflows naar 'vandaag-waarde' brengen via discontering.\n• Formule: NCW = Σ (CF_t / (1+r)^t) − initiële investering.\n• Positief: investering rendabel.\n• Negatief: niet doen.\n\n**Interne Rentabiliteit (IRR)**:\n• Disconteringsvoet waarbij NCW = 0.\n• Vergelijk met vereiste rendement: hoger = doen.\n\n**Voorbeeld investerings-vraag** (Toets-patroon):\nMachine kost €50.000, levert €15.000 netto/jaar gedurende 5 jaar. TVT?\n→ 50.000 / 15.000 = **3,33 jaar**. Goed (< 5 jaar levensduur). Doen.\n\n**Werkkapitaal**:\n• Vlottende activa − kort VV.\n• Nodig om dagelijkse activiteiten te financieren (voorraad, debiteuren, kas).\n• Te weinig = liquiditeitsproblemen.\n• Te veel = kapitaal-verspilling.\n\n**Cashflow-management**:\n• **Cashflow** = werkelijke geld-in en -uit (anders dan winst!).\n• Winst kan hoog zijn maar geen cash (klanten nog niet betaald) — failliet ondanks winst.\n• 'Cash is king' — kasstroom belangrijkste indicator gezondheid.\n• Klanten sneller laten betalen (kortingen voor snel) + leveranciers later betalen = optimalisatie werkkapitaal.\n\n**Rechtsvormen**:\n• **Eenmanszaak**: 1 eigenaar, persoonlijk aansprakelijk. Eenvoudig + flexibel. Klein/start.\n• **VOF (Vennootschap onder Firma)**: 2+ vennoten, hoofdelijk aansprakelijk.\n• **BV (Besloten Vennootschap)**: aandelen niet vrij verhandelbaar. Aansprakelijkheid beperkt tot inleg. Veel MKB.\n• **NV (Naamloze Vennootschap)**: aandelen vrij verhandelbaar (kan op beurs). Voor grote bedrijven (Heineken, Philips, ASML).\n• **Coöperatie**: leden zijn eigenaar (boeren-coöperaties, bv. FrieslandCampina).\n• **Stichting**: geen winstoogmerk, geen leden, geen aandeelhouders.\n• **Vereniging**: leden, doel niet winst.\n\n**Belastingen op bedrijven**:\n• **Vennootschapsbelasting (vpb)**: 19% (laag, eerste €200k) / 25,8% (hoog) — 2024.\n• **BTW**: 21%, 9%, 0%.\n• **Loonbelasting + sociale premies**: ingehouden van werknemers-loon.\n• **Dividend**-belasting bij uitkering.\n• Bedrijven proberen door slimme structuren (NL-route, Ierland-route) belasting te minimaliseren — vaak controverse.",
    checks: [
      {
        q: "Wat is **eigen vermogen** financieren?",
        options: ["Inbreng van eigenaren en ingehouden winst", "Een lening van de bank met rente", "Een hypotheek op het bedrijfspand", "Aandelen kopen in een ander bedrijf"],
        answer: 0,
        wrongHints: [null, "Geld van de bank — is dat geld ván het bedrijf zelf, of van een buitenstaander die het terug wil?", "Ook geleend geld (met het pand als onderpand) — van wie ís dit vermogen eigenlijk?", "Dat is beleggen: daar geef je geld úít. Bij financieren gaat het om waar het geld vandaan kómt."],
        uitlegPad: {
          stappen: [{ titel: "EV-bronnen", tekst: "**Eigen vermogen** (EV) = geld eigenaren (bij oprichting + ingehouden winst + aandelen). Geen rente, geen aflossing. **Vreemd vermogen** (VV) = geleend (bank, obligaties, leveranciers) — heeft rente + aflossings-plicht. EV is duurder (verdunning) maar veiliger." }],
          niveaus: { basis: "Eigenaars + winst.", simpeler: "EV = eigenaars-geld", nogSimpeler: "Eigenaars + winst." },
        },
      },
      {
        q: "Machine €60k, netto-besparing €20k/jaar. **Terugverdientijd**?",
        options: ["3 jaar","6 jaar","4 maanden","2 jaar"],
        answer: 0,
        wrongHints: [null, "Heb je met €10.000 per jaar gerekend? De besparing is €20.000 per jaar.", "Je deelde €20.000 door €60.000. Wat moet door wat: de investering door de besparing, of andersom?", "Na 2 jaar heb je €40.000 bespaard. Is de machine dan al terugverdiend?"],
        uitlegPad: {
          stappen: [{ titel: "TVT-formule", tekst: "**TVT = investering / netto-cashflow** = 60.000 / 20.000 = **3 jaar**. Simpele methode. Beter: NCW (discontering). TVT < levensduur machine = positief signaal." }],
          niveaus: { basis: "3 jaar.", simpeler: "60k/20k=3", nogSimpeler: "3" },
        },
      },
      {
        q: "Welke rechtsvorm heeft **beperkte aansprakelijkheid + niet vrij verhandelbare aandelen**?",
        options: ["BV","NV","Eenmanszaak","VOF"],
        answer: 0,
        wrongHints: [null, "Bij een NV zijn de aandelen juist vrij verhandelbaar, bijvoorbeeld op de beurs.", "Bij een eenmanszaak sta je met je privébezit in voor de schulden. Is dat beperkt?", "Een VOF heeft geen aandelen, en de vennoten staan privé in voor de schulden."],
        uitlegPad: {
          stappen: [{ titel: "BV = Besloten", tekst: "**BV (Besloten Vennootschap)**: aandelen niet vrij verhandelbaar (alleen bij notaris + akkoord andere aandeelhouders). **Beperkte aansprakelijkheid**: alleen tot inleg aandelen. Meest gebruikte vorm MKB NL. **NV (Naamloze)** = aandelen wel vrij — voor beurshandel." }],
          niveaus: { basis: "BV.", simpeler: "Besloten = BV", nogSimpeler: "BV" },
        },
      },
      {
        q: "**Cashflow** kan negatief zijn terwijl bedrijf winst maakt. Waarom?",
        options: ["Klanten hebben nog niet betaald", "Doordat de afschrijvingen hoog waren", "Doordat de kosten dit jaar daalden", "Doordat er belasting over de winst is"],
        answer: 0,
        wrongHints: [null, "Afschrijving verlaagt de winst, maar er gaat geen geld de deur uit. Waardoor kan er wél minder geld binnenkomen dan de winst laat zien?", "Dalende kosten laten juist méér geld over.", "Belasting is een kostenpost die al in de winst zit — dat verklaart het verschil niet."],
        uitlegPad: {
          stappen: [{ titel: "Winst ≠ cash", tekst: "**Winst** is boekhoudkundig (omzet − kosten), maar **cashflow** is werkelijk geld. Als klanten op factuur kopen (op rekening) maar nog niet betaald → winst staat in boek maar geen cash. Bedrijven kunnen failliet ondanks 'winstgevend' zijn. **'Cash is king'** — focus op kasstroom." }],
          theorie: "Klassieker: snel-groeiende bedrijven (groot werkkapitaal nodig) komen vaak in cash-tekort. Daarom externe financiering nodig.",
          niveaus: { basis: "Klanten niet betaald.", simpeler: "Cashflow ≠ winst", nogSimpeler: "Klanten niet betaald." },
        },
      },
      {
        q: "**Vennootschapsbelasting NL** hoog tarief 2024:",
        options: ["25,8%","19%","21%","9%"],
        answer: 0,
        wrongHints: [null, "19% is het lage vpb-tarief, voor de eerste €200.000 winst.", "21% is het hoge btw-tarief, geen belasting op winst.", "9% is het lage btw-tarief, geen belasting op winst."],
        uitlegPad: {
          stappen: [{ titel: "Twee schijven", tekst: "**Vennootschapsbelasting** (vpb) 2024:\n• **19%** over eerste €200.000 winst.\n• **25,8%** boven €200.000.\n\nBelastingplanning groot bij grote bedrijven — controverse over multinationals (Shell, Apple-NL-route)." }],
          niveaus: { basis: "25,8%.", simpeler: "Vpb hoog = 25,8%", nogSimpeler: "25,8%." },
        },
      },
    ],
  },

  // ─── D. Marketing + handel ────────────────────────────────
  {
    title: "Marketing + handel",
    explanation:
      "**Marketing** = vraag creëren + voldoen via klantgericht denken. Niet alleen 'reclame'.\n\n**Klassieke 4 P's**:\n\n**1. Product**:\n• Wat verkoop je? Fysiek goed, dienst, ervaring.\n• **Productlevenscyclus**: introductie → groei → volwassen → verval.\n• Productdifferentiatie: USP (unique selling point).\n\n**2. Prijs**:\n• Wat kost het? (zie kostencalculatie-stap).\n• Strategie: penetratie / skimming / cost-plus / marktprijs.\n• Psychologische prijs (€9,99 ipv €10).\n• Premium vs lage-prijs-positie.\n\n**3. Plaats (distributie)**:\n• Waar verkoop je? Eigen winkel, online, via tussenpersonen.\n• Direct (DTC = Direct to Consumer, bv Tesla).\n• Indirect (via groothandel + detailhandel).\n• Omni-channel: combinatie online + offline.\n\n**4. Promotie**:\n• Hoe maak je het bekend?\n• Reclame: TV, radio, online, billboard.\n• Persoonlijke verkoop, sales-team.\n• Sales promotion: korting, samples.\n• Public relations: persberichten, sponsoring.\n• Social media + influencer-marketing.\n• Content marketing (blog, podcast, video).\n• SEO + SEA (zoekmachine-optimalisatie + zoekmachine-adverteren).\n\n**3 extra P's** (modern, vooral diensten):\n• **People** (mensen — medewerkers + cultuur).\n• **Process** (klantreis-proces).\n• **Physical evidence** (uitstraling, branding, locatie).\n\n**Doelgroep + segmentatie**:\n• **Demografisch**: leeftijd, geslacht, inkomen, gezinsgrootte.\n• **Geografisch**: regio, stad/dorp, klimaat.\n• **Psychografisch**: leefstijl, waarden, persoonlijkheid.\n• **Gedrag**: koop-frequentie, loyaliteit, voordeel-zoekend.\n• **Personas**: ideaaltypische klant-profielen.\n\n**Marktonderzoek**:\n• **Kwantitatief**: enquête, surveys, statistieken. Veel mensen.\n• **Kwalitatief**: interviews, focusgroepen. Diepgaand maar weinig mensen.\n• **Online**: A/B-tests, click-data, heatmaps.\n\n**Concurrentie-analyse**:\n• Wie zijn directe concurrenten?\n• Wat is hun **SWOT** (Strengths/Weaknesses/Opportunities/Threats)?\n• **Porter's 5 Forces**:\n  1. Concurrentie binnen sector.\n  2. Macht leveranciers.\n  3. Macht klanten.\n  4. Dreiging nieuwe toetreders.\n  5. Substituten.\n\n**Online marketing-trends**:\n• **SEO** (organisch zoeken).\n• **SEA** (Google Ads, betaald).\n• **Social media** (Insta, TikTok, LinkedIn).\n• **Influencer-marketing**.\n• **Email-marketing**.\n• **Content-marketing** (blog/video).\n• **Conversie-optimalisatie** (CRO).\n• **Marketing-automation** (mail-flows op gedrag).\n\n**Handel**:\n• **Groothandel**: B2B, kopen + doorverkopen aan winkels.\n• **Detailhandel**: B2C, eindconsument.\n• **E-commerce**: online-handel. NL groot in (Bol.com, Coolblue, Wehkamp).\n• **Cross-border**: internationale handel.\n\n**Inkoop**:\n• **Strategische inkoop**: belangrijk voor bedrijf, lange-termijn-relatie.\n• **Operationele inkoop**: dagelijks, gestandaardiseerd.\n• **Just-in-time** (JIT): voorraad minimaliseren, geleverd wanneer nodig (Toyota-pionier).\n\n**Klantloyaliteit**:\n• Een loyale klant behouden kost minder dan een nieuwe werven (~5×).\n• Loyalty-programma's, NPS (Net Promoter Score), CRM-systemen.\n• Mond-tot-mondreclame (positief + negatief) krachtig.\n\n**Duurzaamheid + maatschappelijk verantwoord ondernemen (MVO/CSR)**:\n• Druk van consumenten, NGO's, overheid.\n• Voorbeelden: Tony's Chocolonely (slavernij-vrij), Patagonia, Triodos Bank.\n• Risico greenwashing (zogenaamd duurzaam).\n• EU-CSRD (Corporate Sustainability Reporting Directive) verplicht rapportage sinds 2024.\n\n**Internationale handel**:\n• **Export** = goederen + diensten verkopen aan buitenland.\n• **Import** = kopen uit buitenland.\n• **Handelsbalans** = export − import. NL: groot positief (Rotterdam-haven).\n• **Wisselkoersrisico**: euro/dollar-fluctuatie.\n• **Hedging**: afdekken risico's via futures, opties.\n• **Globalisering**: WTO 1995, China-WTO-lid 2001, recente terugslag (Trump-tarieven, Brexit, Rusland-sancties).",
    checks: [
      {
        q: "**4 P's** van marketing zijn:",
        options: ["Product, Prijs, Plaats, Promotie","Product, Prijs, Personeel, Promotie","Product, Prijs, Plaats, Presentatie","Prijs, Plaats, Promotie, Profit"],
        answer: 0,
        wrongHints: [null, "Personeel is in de winkel soms een extra (vijfde) P. Welke van de vier klassieke P's mis je dan?", "Presentatie is in de winkel een extra P. Hoe heet alles wat je doet om je product bekend te maken?", "Profit (winst) is het doel van een bedrijf, geen onderdeel van de marketingmix. Wat bied je de klant eigenlijk aan?"],
        uitlegPad: {
          stappen: [{ titel: "McCarthy 1960", tekst: "**4 P's** (Jerome McCarthy 1960): **Product, Prijs, Plaats, Promotie**. Marketing-mix-basis. Moderne uitbreidingen: People, Process, Physical evidence (vooral diensten)." }],
          niveaus: { basis: "Prod/Prijs/Plaats/Promotie.", simpeler: "4P", nogSimpeler: "Prod/Prijs/Plaats/Promotie." },
        },
      },
      {
        q: "Wat is **psychologische prijs**?",
        options: ["Een prijs net onder een rond getal (€9,99 i.p.v. €10)","Een prijs die je pas aan de kassa te horen krijgt","Een prijs die maar kort geldt (deze week €8 i.p.v. €10)","Een prijs die per klant verschilt (vaste klant betaalt meer)"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om geheimhouding — het gaat om hoe de prijs op de klant óverkomt.", "Een prijs die kort geldt is een aanbieding. Bij deze prijs verandert niet de periode, maar hoe het bedrag in je hoofd binnenkomt.", "Dat heet een dynamische prijs. Hier betaalt iedereen hetzelfde — wat doet het bedrag zelf met je gevoel?"],
        uitlegPad: {
          stappen: [{ titel: "Net onder een rond getal", tekst: "**Psychologische prijs**: ronding net onder een rond getal (€9,99 ipv €10). Hersenen lezen vooral eerste cijfer ('9') → voelt veel lager. Uit onderzoek blijkt dat dit vaak beter verkoopt dan €10. Ook €99 vs €100, €499 vs €500." }],
          niveaus: { basis: "9,99 voelt lager.", simpeler: "Psy prijs", nogSimpeler: "9,99" },
        },
      },
      {
        q: "**Porter's 5 Forces** is voor:",
        options: ["Concurrentie-analyse", "Marketing-mix bepalen", "Boekhouding bijhouden", "Personeelsplanning"],
        answer: 0,
        wrongHints: [null, "De marketingmix gaat over je eigen keuzes (de 4 P's). Porter kijkt naar wat er óm je bedrijf heen gebeurt.", "Boekhouden is registreren wat er gebeurde — Porter analyseert de markt óm je heen.", "Personeel zit bínnen het bedrijf. Porter kijkt naar krachten van búíten — welke?"],
        uitlegPad: {
          stappen: [{ titel: "Michael Porter 1979", tekst: "**5 Forces** (Porter): analyse-framework concurrentie sector.\n1. Concurrentie binnen sector.\n2. Macht leveranciers.\n3. Macht klanten.\n4. Dreiging nieuwe toetreders.\n5. Substituten.\n\nBedrijven analyseren hun positie via deze 5 invalshoeken." }],
          niveaus: { basis: "Concurrentie.", simpeler: "5F = concurrentie-analyse", nogSimpeler: "Concurrentie." },
        },
      },
      {
        q: "**Just-in-time** (JIT) is een methode voor:",
        options: ["Voorraad minimaliseren — geleverd wanneer nodig", "Een bedrijf zo snel mogelijk opstarten", "Klanten korting geven bij snelle betaling", "Personeel precies op tijd laten beginnen"],
        answer: 0,
        wrongHints: [null, "JIT gaat niet over het opstarten van een bedrijf. Wat moet er bij JIT precies op tijd binnenkomen?", "Geen korting — het draait om wannéér spullen geleverd worden.", "Het gaat niet om mensen, maar om spullen en onderdelen. Wanneer komen die bij JIT binnen?"],
        uitlegPad: {
          stappen: [{ titel: "Toyota-methode", tekst: "**Just-in-time**: voorraad zo minimaal mogelijk; producten + onderdelen worden geleverd **op het moment dat ze nodig zijn**. Spaart opslagkosten + werkkapitaal. **Toyota pionier** vanaf jaren '50. Zwakte: kwetsbaar bij verstoring keten (COVID-19 + chiptekort 2020-22 toonde dit)." }],
          theorie: "Toets-actueel: discussie 'just-in-case' (meer voorraad voor zekerheid) als reactie op kwetsbaarheid JIT.",
          niveaus: { basis: "Voorraad min.", simpeler: "JIT = min voorraad", nogSimpeler: "Voorraad min." },
        },
      },
      {
        q: "Wat is **MVO** (CSR)?",
        options: ["Maatschappelijk Verantwoord Ondernemen", "Marketing Vereniging voor Ondernemers", "Maandelijks Verkoop-Overzicht", "Markttoezicht door de Overheid"],
        answer: 0,
        wrongHints: [null, "MVO gaat niet over een vereniging of over reclame — het zegt iets over hóé een bedrijf onderneemt. Welke woorden passen daarbij?", "Een verkoopoverzicht is gewoon administratie. Waar zou de M van MVO dan voor staan?", "Dat zou een toezichthouder zijn — MVO is iets wat een bedrijf zélf doet."],
        uitlegPad: {
          stappen: [{ titel: "Triple bottom line", tekst: "**MVO** = Maatschappelijk Verantwoord Ondernemen (Engels CSR = Corporate Social Responsibility). Bedrijven hebben verantwoordelijkheid voor **People, Planet, Profit** (triple bottom line). Voorbeelden: Tony's Chocolonely (slavernijvrije chocolade), Triodos Bank, Patagonia. EU verplicht rapportage via CSRD sinds 2024 voor grote bedrijven." }],
          niveaus: { basis: "MVO.", simpeler: "MVO = duurzaam ondernemen", nogSimpeler: "MVO." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — bedrijfseconomie mix",
    explanation:
      "Mix van balans + kosten + financiering + marketing.\n\nVeel succes!",
    checks: [
      {
        q: "Welke is **vlottend actief**?",
        options: ["Voorraad","Gebouw","Machine","Aandelenkapitaal"],
        answer: 0,
        wrongHints: [null, "Een gebouw gebruik je tientallen jaren. Is het dan vlottend of vast?", "Een machine gaat jaren mee, dus het is een vast actief. Wat ben je binnen een jaar weer kwijt?", "Aandelenkapitaal staat rechts op de balans, bij het eigen vermogen. Is het dan wel een actief?"],
        uitlegPad: {
          stappen: [{ titel: "<1 jaar = vlottend", tekst: "**Vlottende activa**: < 1 jaar gebruikt. Voorraad, debiteuren, kas, bank. **Vaste activa**: > 1 jaar. Gebouwen, machines, voertuigen. Onderscheid belangrijk voor balans-analyse + liquiditeit." }],
          niveaus: { basis: "Voorraad.", simpeler: "Voorraad = vlottend", nogSimpeler: "Voorraad." },
        },
      },
      {
        q: "**Brutomarge** = ?",
        options: ["(Omzet − inkoop) / omzet × 100%", "(Omzet − inkoop) / inkoop × 100%", "Nettowinst / eigen vermogen × 100%", "Inkoopwaarde / omzet × 100%"],
        answer: 0,
        wrongHints: [null, "Zo reken je de opslag op de inkoopprijs uit, niet de marge. Waardoor deel je bij een marge?", "Niet — dat is de rentabiliteit van het eigen vermogen (REV).", "Dit is het deel van de omzet dat aan inkoop opgaat — is dat wat er overblijft?"],
        uitlegPad: {
          stappen: [{ titel: "Bruto-rendement op omzet", tekst: "**Brutomarge** = (Omzet − Inkoopwaarde) / Omzet × 100%. Toont % van elke euro omzet dat als brutowinst overblijft. Sectoren verschillen: tech 60-80%, detailhandel 30-50%, auto's 10-15%." }],
          niveaus: { basis: "(O−I)/O ×100.", simpeler: "Bruto = (O−I)/O", nogSimpeler: "(O−I)/O ×100." },
        },
      },
      {
        q: "**Solvabiliteit van 60%** betekent:",
        options: ["60% van vermogen is eigen vermogen", "60% van vermogen is vreemd vermogen", "60% van de omzet is winst", "60% van de bezittingen is direct geld"],
        answer: 0,
        wrongHints: [null, "Bij solvabiliteit kijk je naar het deel dat níét geleend is. Welk vermogen is dat?", "Winst gedeeld door omzet is de winstmarge. Solvabiliteit gaat over hoe het bedrijf gefinancierd is.", "Hoeveel direct geld er is, zegt iets over de liquiditeit. Waar gaat solvabiliteit over?"],
        uitlegPad: {
          stappen: [{ titel: "EV-aandeel", tekst: "**Solvabiliteit 60%** = EV / Totaal vermogen = 60%. Dus 60% gefinancierd met eigen geld, 40% met schuld. Sterk solvabel, banken zullen graag lenen. Vuistregel: ≥25-30% redelijk." }],
          niveaus: { basis: "60% EV.", simpeler: "Solv 60% = 60% EV", nogSimpeler: "60% EV." },
        },
      },
      {
        q: "Bedrijf met **alleen ingehouden winst** voor groei financiert:",
        options: ["Intern (eigen vermogen)","Extern (vreemd vermogen)","Extern (eigen vermogen)","Intern (vreemd vermogen)"],
        answer: 0,
        wrongHints: [null, "Vreemd vermogen is geleend geld. Leent het bedrijf hier iets?", "Extern eigen vermogen haal je op bij nieuwe aandeelhouders. Komt ingehouden winst van buiten?", "Ingehouden winst is van de eigenaren zelf. Hoort dat bij eigen of bij vreemd vermogen?"],
        uitlegPad: {
          stappen: [{ titel: "Self-funded", tekst: "**Ingehouden winst** = niet uitgekeerd aan eigenaren, geherinvesteerd in bedrijf. Vorm van **intern EV**. Voordeel: geen rente, geen verdunning. Nadeel: groei beperkt door winst. Veel familiebedrijven groeien zo. Externe financiering nodig voor snellere groei." }],
          niveaus: { basis: "Intern.", simpeler: "Ingehouden winst = intern", nogSimpeler: "Intern." },
        },
      },
      {
        q: "Welke is **vraag-stimulerend** (geen prijs-strategie)?",
        options: ["Promotie", "Penetratie", "Skimming", "Cost-plus"],
        answer: 0,
        wrongHints: [null, "Penetratie = laag ínstappen met je prijs — de vraag zoekt juist iets dat géén prijs-strategie is.", "Skimming = afromen met een hoge príjs — dus wél een prijs-strategie.", "Cost-plus = kostprijs plus winstmarge — ook een prijs-methode. Wat stimuleert vraag zónder aan de prijs te zitten?"],
        uitlegPad: {
          stappen: [{ titel: "Promotie ≠ prijs", tekst: "**Reclame** zit in 4e P (Promotie), niet 2e (Prijs). Stimuleert vraag zonder per se prijs aan te passen. Andere genoemde opties zijn allemaal prijs-strategieën." }],
          niveaus: { basis: "Reclame = promotie.", simpeler: "Reclame ≠ prijs", nogSimpeler: "Reclame = promotie." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bedrijfseconomieHavoVwo = {
  id: "bedrijfseconomie-havo-vwo",
  title: "Bedrijfseconomie kerngebieden (HAVO/VWO)",
  emoji: "💼",
  level: "havo4-5-vwo",
  subject: "economie",
  referentieNiveau: "havo-vwo-CSE-bedrijfseconomie",
  sloThema: "Bedrijfseconomie HAVO/VWO — eindexamen (M&O-opvolger)",
  prerequisites: [
    { id: "balans-beco", title: "Balans (basis)", niveau: "klas3-4" },
    { id: "vraag-aanbod-economie", title: "Vraag + aanbod", niveau: "klas3" },
    { id: "procenten", title: "Procenten", niveau: "klas2" },
  ],
  intro:
    "Bedrijfseconomie HAVO/VWO eindexamen (sinds 2018, opvolger M&O). Balans + W&V (debet/credit + solvabiliteit/liquiditeit), kostencalculatie + BEP, financiering + investering (EV/VV + TVT + rechtsvormen), marketing (4P's + Porter + MVO). ~15-20 min.",
  triggerKeywords: [
    "bedrijfseconomie", "M&O", "MO",
    "balans", "activa", "passiva",
    "eigen vermogen", "vreemd vermogen",
    "vlottende activa", "vaste activa",
    "debiteuren", "crediteuren",
    "solvabiliteit", "liquiditeit",
    "current ratio", "quick ratio",
    "winst-en-verlies-rekening", "V&W",
    "brutowinst", "nettowinst",
    "afschrijving",
    "constante kosten", "vaste kosten", "variabele kosten",
    "kostprijs",
    "break-even", "BEP",
    "dekkingsbijdrage",
    "skimming", "penetratie",
    "BTW", "vennootschapsbelasting",
    "vpb",
    "rentabiliteit", "REV", "RTV",
    "terugverdientijd", "TVT",
    "NCW", "NPV",
    "cashflow",
    "werkkapitaal",
    "BV", "NV", "eenmanszaak", "VOF",
    "marketing", "4 P's", "4P",
    "marketing-mix",
    "Porter", "5 forces",
    "SWOT",
    "MVO", "CSR",
    "just-in-time", "JIT",
    "segmentatie",
    "USP",
  ],
  chapters,
  steps,
};

export default bedrijfseconomieHavoVwo;
