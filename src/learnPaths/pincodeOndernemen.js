// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 3 (Ben jij ondernemend?)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.
// Concrete voorbeelden: foodtruck, webshop, bijles geven.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["🚀", "🔍", "🎯", "📈", "📊", "🏆", "⚖️", "🧾", "⚠️"];

const chapters = [
  { letter: "A", title: "Starten", emoji: "🚀", from: 0, to: 2 },
  { letter: "B", title: "Markt", emoji: "📊", from: 3, to: 5 },
  { letter: "C", title: "Bedrijf inrichten", emoji: "⚖️", from: 6, to: 7 },
  { letter: "D", title: "Risico", emoji: "⚠️", from: 8, to: 8 },
];

const steps = [
  // ─── Stap 1: Wat is ondernemen ────────────────────────────
  {
    title: "Wat is ondernemen? — kansen, risico en winst",
    explanation: "**Ondernemen** = met eigen middelen en risico iets produceren of verkopen om **winst** te maken.\n\n**Een ondernemer**:\n• Ziet **kansen** in de markt (wat hebben mensen nodig?)\n• Neemt **risico** (kan ook verlies maken)\n• Is **zelfstandig** (geen baas)\n• Investeert eigen geld of leent\n\n**Soorten ondernemingen** (op basis wat je doet):\n• **Productie**: maakt iets nieuws (bakker, kledingmerk, foodtruck eigenaar)\n• **Handel**: koopt en verkoopt door (winkel, webshop, supermarkt)\n• **Diensten**: levert iets onstoffelijks (kapper, IT-bedrijf, bijles geven)\n\n**Stappen voor het starten van een bedrijf**:\n1. **Idee** — wat ga je doen?\n2. **Marktonderzoek** — is er vraag naar? (volgende stap)\n3. **Ondernemingsplan** — wat ga je verkopen, voor welke prijs, wat zijn de kosten?\n4. **Inschrijven bij KvK** (Kamer van Koophandel) — verplicht\n5. **BTW-nummer** krijgen via Belastingdienst\n6. **Starten** — producten/dienst leveren, klanten werven\n\n**Voorbeeld 'Foodtruck Funky Fries' van Sam (19)**:\n• Idee: Belgische friet op evenementen\n• Marktonderzoek: praat met festival-organisatoren, kijk concurrenten\n• Plan: investering €15.000 (truck + apparatuur + voorraad)\n• KvK-inschrijving: €80\n• Eerste festival: omzet €2.400 over 2 dagen, kosten €1.600 → winst €800\n\n**Risico** = je kunt al je geïnvesteerde geld verliezen als het niet werkt.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">START EEN BEDRIJF</text>
<text x="50" y="55" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💡</text>
<text x="50" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">idee</text>
<text x="85" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="120" y="55" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🔍</text>
<text x="120" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">onderzoek</text>
<text x="160" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="200" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">📋</text>
<text x="200" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">plan</text>
<text x="232" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="265" y="55" text-anchor="middle" fill="${COLORS.alt}" font-size="22" font-family="Arial">🚀</text>
<text x="265" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">starten</text>
<text x="160" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3 soorten ondernemingen:</text>
<rect x="20" y="130" width="85" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="62" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">PRODUCTIE</text>
<text x="62" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bakker, foodtruck</text>
<rect x="118" y="130" width="85" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">HANDEL</text>
<text x="160" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">winkel, webshop</text>
<rect x="216" y="130" width="85" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="258" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">DIENST</text>
<text x="258" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">kapper, bijles</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">eigen risico → kans op winst of verlies</text>
</svg>`,
    checks: [
      {
        q: "Een **webshop in handgemaakte sieraden** — welk type onderneming?",
        options: ["Productie (je maakt zelf)", "Handel", "Diensten", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Handel = inkopen en doorverkopen zonder zelf te maken.", "Diensten = iets ongrijpbaars (kapsel, advies).", "Het past wel — sieraden maken is productie."],
      },
      {
        q: "**Bijles wiskunde geven** is welk type?",
        options: ["Diensten", "Productie", "Handel", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Je maakt geen tastbaar product.", "Je verkoopt geen ingekochte spullen door.", "Het is wel duidelijk een type — denk: tastbaar of niet?"],
      },
      {
        q: "Welke instantie schrijft je in als nieuwe ondernemer?",
        options: ["Kamer van Koophandel (KvK)", "De gemeente", "DUO", "De school"],
        answer: 0,
        wrongHints: [null, "Gemeente regelt soms vergunningen, geen inschrijving.", "DUO is voor studie.", "School heeft hier geen rol in."],
      },
      {
        q: "Een ondernemer **neemt risico**. Wat betekent dat?",
        options: ["Hij kan zijn investering verliezen als het bedrijf verliesgevend is", "Hij krijgt altijd zijn geld terug", "Hij betaalt geen belasting", "Hij hoeft niet te werken"],
        answer: 0,
        wrongHints: [null, "Geen garantie — anders was het geen risico.", "Ondernemers betalen wél belasting.", "Ondernemers werken vaak heel hard juist door risico."],
      },
      {
        q: "Sam start de Foodtruck Funky Fries. Welke stap komt VÓÓR het ondernemingsplan?",
        options: ["Marktonderzoek", "Inschrijving KvK", "Starten van verkoop", "BTW-aangifte doen"],
        answer: 0,
        wrongHints: [null, "Inschrijving komt nadat je weet wat je gaat doen.", "Verkoop is de laatste stap.", "BTW-aangifte volgt na inschrijving."],
      },
      {
        q: "Welk kenmerk hoort er NIET bij een ondernemer?",
        options: ["Heeft een baas die het werk uitdeelt", "Ziet kansen", "Investeert eigen geld of leent", "Neemt risico"],
        answer: 0,
        wrongHints: [null, "Klopt — kansen zien is kern.", "Klopt — geld is altijd nodig.", "Klopt — risico is essentieel kenmerk."],
      },
    ],
  },
  // ─── Stap 2: Marktonderzoek ─────────────────────────────────
  {
    title: "Marktonderzoek — is er vraag naar mijn idee?",
    explanation: "Voor je start: weet je dat er **vraag** is naar wat je wilt verkopen? Anders investeer je geld zonder klanten te krijgen.\n\n**Marktonderzoek** = systematisch uitzoeken: zijn er klanten, wat willen ze, wat betalen ze, wie zijn concurrenten?\n\n**Twee hoofdvormen**:\n\n**1. Deskresearch (online)**\n• Google: zoeken concurrenten\n• Sociale media: zien wat mensen zeggen\n• CBS, brancheorganisaties: cijfers\n• **Goedkoop maar algemeen**\n\n**2. Veldonderzoek (zelf doen)**\n• **Enquête**: vragenlijst aan potentiële klanten\n• **Interview**: diepgaand met enkele klanten\n• **Observatie**: kijken hoe mensen zich gedragen\n• **Test**: probeer met een klein groepje\n• **Duurder maar specifiek**\n\n**Voorbeeld Foodtruck Funky Fries**:\nSam vraagt 30 festival-bezoekers via Instagram-poll: 'Zou je €5 betalen voor verse Belgische friet op een festival?'\n• 22 zeggen ja → goede kans\n• 5 zeggen nee → te duur\n• 3 zeggen ja, maar liever €4 → prijspunt onderzoeken\n\n**Wat onderzoek je**?\n• **Doelgroep**: wie is je klant? (leeftijd, locatie, koopkracht)\n• **Concurrenten**: wat bieden zij? (prijs, kwaliteit)\n• **Trends**: groeit de markt? (bv. bezorgmarkt boomde door corona)\n• **Prijsbereidheid**: wat willen klanten betalen?\n\n**SWOT-analyse** — vat alles samen:\n• **S**trengths (sterk): wat doe ik beter?\n• **W**eaknesses (zwak): wat kan beter?\n• **O**pportunities (kansen): wat kan ik benutten?\n• **T**hreats (bedreigingen): wat kan misgaan?",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">MARKTONDERZOEK</text>
<rect x="20" y="40" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">DESK 💻</text>
<text x="87" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">online · cijfers · concurrenten</text>
<text x="87" y="85" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">goedkoop, algemeen</text>
<rect x="165" y="40" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VELD 🚶</text>
<text x="232" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">enquête · interview · test</text>
<text x="232" y="85" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">duurder, specifiek</text>
<text x="160" y="115" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">SWOT-ANALYSE</text>
<rect x="40" y="125" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="97" y="142" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">S sterk</text>
<text x="97" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat doe ik beter</text>
<rect x="165" y="125" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="222" y="142" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">W zwak</text>
<text x="222" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat kan beter</text>
<rect x="40" y="165" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="97" y="182" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">O kansen</text>
<text x="97" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat kan ik benutten</text>
<rect x="165" y="165" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="222" y="182" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">T bedreig.</text>
<text x="222" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat kan misgaan</text>
</svg>`,
    checks: [
      {
        q: "Wat is **deskresearch**?",
        options: ["Onderzoek vanachter je computer (Google, CBS, sociale media)", "Onderzoek door interviews op straat", "Een soort meubel", "Een verplichte enquête"],
        answer: 0,
        wrongHints: [null, "Dat is veldonderzoek.", "Geen meubelvraag.", "Niet verplicht — een methode."],
      },
      {
        q: "Sam zet een Instagram-poll uit. Welk type onderzoek is dat?",
        options: ["Veldonderzoek (enquête)", "Deskresearch", "SWOT-analyse", "Boekhouding"],
        answer: 0,
        wrongHints: [null, "Desk = bestaande info verzamelen.", "SWOT = analyse-methode, geen onderzoek-type.", "Boekhouding = administratie."],
      },
      {
        q: "Wat staat de **W** voor in een SWOT-analyse?",
        options: ["Weaknesses (zwakke punten)", "Wins", "Wishes", "Workers"],
        answer: 0,
        wrongHints: [null, "Niet wat het betekent.", "Niet de afkorting.", "Workers heeft niets met SWOT te maken."],
      },
      {
        q: "Wat zou een **bedreiging** (T) zijn voor een nieuwe foodtruck?",
        options: ["Een grote concurrent komt op hetzelfde festival", "Een trouwe klantenkring", "Lage huur voor parkeerplek", "Goede recensies"],
        answer: 0,
        wrongHints: [null, "Trouwe klanten = sterk punt.", "Lage huur = kans.", "Goede recensies = sterk punt."],
      },
      {
        q: "Waarom is **veldonderzoek** vaak nuttiger dan deskresearch alleen?",
        options: ["Je krijgt antwoorden van JOUW potentiële klanten, niet algemene cijfers", "Het is gratis", "Het is altijd sneller", "Het is verplicht"],
        answer: 0,
        wrongHints: [null, "Veldonderzoek kost juist meer.", "Tegendeel — interviews kosten tijd.", "Niet verplicht."],
      },
      {
        q: "Welk kenmerk hoort bij **deskresearch**?",
        options: ["Goedkoop, snel toegankelijke informatie", "Specifiek voor jouw doelgroep", "Vereist veel persoonlijke gesprekken", "Levert altijd nieuwe inzichten"],
        answer: 0,
        wrongHints: [null, "Specifiek = juist veldonderzoek.", "Persoonlijke gesprekken = veld.", "Desk = algemeen, soms al bekend."],
      },
    ],
  },
  // ─── Stap 3: Doelgroep en marketing ──────────────────────
  {
    title: "Doelgroep en marketing — wie zijn je klanten?",
    explanation: "**Doelgroep** = de mensen voor wie jouw product/dienst bedoeld is. Hoe specifieker, hoe beter je marketing werkt.\n\n**Doelgroep beschrijven** — denk aan:\n• **Demografisch**: leeftijd, geslacht, opleiding, inkomen\n• **Geografisch**: waar wonen ze (stad, dorp, regio)?\n• **Levensstijl**: wat doen ze, wat vinden ze leuk?\n• **Koopgedrag**: kopen ze online, in winkel, vaak/zelden?\n\n**Voorbeeld Foodtruck Funky Fries**:\nDoelgroep = bezoekers van outdoor festivals (16-35), willen snel lekker eten, betalen graag iets extra voor kwaliteit, delen graag op Instagram.\n\n**Marketing-mix (4 P's)** — hoe bereik je je doelgroep?\n\n**1. Product** — wat verkoop je?\n• Belgische friet, vegan saus, biologische ingrediënten\n\n**2. Prijs** — wat vraag je ervoor?\n• €5 medium, €7 large, combo's\n• Hoog = exclusief, laag = volume\n\n**3. Plaats** — waar verkoop je?\n• Festivals, weekendmarkten, bedrijfskantines\n• Geen vaste plek = lage huurkosten\n\n**4. Promotie** — hoe maak je het bekend?\n• Instagram + TikTok (waar doelgroep is)\n• Sticker op truck, gratis proefjes\n• Reviews stimuleren\n\n**USP (Unique Selling Point)** = wat maakt jou ANDERS dan de rest?\nVoor Funky Fries: 'enige foodtruck met 100% Belgische dubbel gefrituurde aardappel + glutenvrije sauzen.'\n\n**Klantenwerving** kost geld. Vuistregel: nieuwe klant kost 5× meer dan bestaande klant tevreden houden.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">MARKETING-MIX (4 P's)</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">PRODUCT 🍟</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">wat verkoop je</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">kwaliteit, variatie</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">PRIJS 💰</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">wat vraag je</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">hoog of laag</text>
<rect x="20" y="100" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="118" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">PLAATS 📍</text>
<text x="87" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">waar verkoop je</text>
<text x="87" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">festival, online</text>
<rect x="165" y="100" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="118" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">PROMOTIE 📣</text>
<text x="232" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">hoe bekend maken</text>
<text x="232" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">socials, reviews</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">USP = wat maakt JOU anders?</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **doelgroep**?",
        options: ["De mensen voor wie jouw product bedoeld is", "Het personeel", "Concurrenten", "Leveranciers"],
        answer: 0,
        wrongHints: [null, "Personeel = jouw mensen, geen klanten.", "Concurrenten zijn andere bedrijven.", "Leveranciers leveren AAN jou."],
      },
      {
        q: "De **4 P's** van marketing zijn:",
        options: ["Product, Prijs, Plaats, Promotie", "Personeel, Productiviteit, Promotie, Pensioen", "Plan, Profit, Patent, People", "Print, Pop, Pin, Product"],
        answer: 0,
        wrongHints: [null, "Personeel hoort bij personeelsbeleid.", "Internationale termen die niet in Pincode staan.", "Geen marketing-categorieën."],
      },
      {
        q: "Wat is een **USP**?",
        options: ["Unique Selling Point — wat maakt jou anders dan de rest", "Een soort BTW", "Een marktanalyse", "Een type lening"],
        answer: 0,
        wrongHints: [null, "USP heeft niets met BTW te maken.", "Een marktanalyse is iets breders.", "Geen lening-vorm."],
      },
      {
        q: "Een **hoge prijs** (€8 voor friet) past bij welke marketing-strategie?",
        options: ["Exclusieve, kwaliteit-uitstraling — kleinere doelgroep", "Massa-verkoop", "Doelgroep met laag inkomen", "Laagste-prijs-strategie"],
        answer: 0,
        wrongHints: [null, "Massa = lage prijs, hoge volume.", "Lage inkomens kunnen hoge prijs niet vaak betalen.", "Tegenovergesteld."],
      },
      {
        q: "**Vuistregel klantenwerving**:",
        options: ["Nieuwe klant kost ~5× meer dan bestaande klant tevreden houden", "Nieuwe klanten zijn altijd gratis", "Bestaande klanten kosten meer", "Alle klanten kosten hetzelfde"],
        answer: 0,
        wrongHints: [null, "Reclame en moeite kosten geld.", "Tegenovergesteld.", "Verschil is groot."],
      },
      {
        q: "Sam wil mensen op een festival bereiken. Welk promotie-kanaal werkt het beste?",
        options: ["Instagram + TikTok — daar zit de doelgroep (16-35)", "Krantenadvertentie", "Telefoongids", "Brieven sturen"],
        answer: 0,
        wrongHints: [null, "Festival-bezoekers lezen geen kranten gericht.", "Niet meer in gebruik.", "Vaak ongelezen, hoge kosten."],
      },
    ],
  },
  // ─── Stap 4: Omzet, kosten en winst ────────────────────────
  {
    title: "Omzet, kosten en winst — kan ik ermee verdienen?",
    explanation: "Drie kernbegrippen voor elke ondernemer:\n\n**Omzet** = aantal × prijs.\nVoorbeeld: 200 frieten × €5 = **€1.000 omzet** per festivaldag.\n\n**Kosten** = wat het de ondernemer kost om te produceren:\n\n**Constante kosten (vaste kosten)**\n• Blijven hetzelfde, ongeacht hoeveel je verkoopt\n• Voorbeelden: huur, verzekering, abonnementen, salaris vaste medewerkers\n\n**Variabele kosten**\n• Veranderen MET het aantal stuks\n• Voorbeelden: aardappelen, olie, sauzen, verpakking, gas\n\n**Totale kosten** = constante + variabele\n\n**Winst** = omzet − totale kosten\n• Omzet > kosten → **winst** ✓\n• Omzet < kosten → **verlies** ✗\n• Omzet = kosten → **break-even** (quitte)\n\n**Voorbeeld foodtruck-dag**:\n• Omzet: 200 friet × €5 = €1.000\n• Constante kosten (per dag): truck-afschrijving €100, verzekering €20, telefoon €5 = €125\n• Variabele kosten: ingrediënten €1,50 × 200 = €300\n• Totale kosten: €125 + €300 = **€425**\n• Winst: €1.000 - €425 = **€575** per dag 🎉\n\n**Break-even-punt** (BEP):\nHoeveel moet je verkopen om quitte te draaien?\n• Bij prijs €5, variabele kosten per stuk €1,50, vaste kosten €125 per dag\n• Per friet hou je over: €5 - €1,50 = **€3,50** (dekkingsbijdrage)\n• Vaste kosten dekken: €125 / €3,50 = **36 frieten** = break-even\n• Alles boven 36 frieten = **winst**\n\n**Brutowinstmarge** = (verkoopprijs − inkoopprijs) / verkoopprijs × 100%\nVoor friet: (€5 - €1,50) / €5 = 70%",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">FOODTRUCK 1 DAG</text>
<rect x="20" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="60" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">OMZET</text>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€1000</text>
<text x="60" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">200×€5</text>
<text x="108" y="76" fill="${COLORS.muted}" font-size="20" font-family="Arial">−</text>
<rect x="125" y="40" width="100" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="175" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">KOSTEN</text>
<text x="175" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€125 vast</text>
<text x="175" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€300 variabel</text>
<text x="232" y="76" fill="${COLORS.muted}" font-size="20" font-family="Arial">=</text>
<rect x="250" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="280" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">WINST</text>
<text x="280" y="80" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">€575</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">BREAK-EVEN-PUNT</text>
<line x1="40" y1="135" x2="40" y2="200" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="200" x2="290" y2="200" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="180" x2="290" y2="155" stroke="${COLORS.geld}" stroke-width="2"/>
<text x="295" y="155" fill="${COLORS.geld}" font-size="9" font-family="Arial">omzet</text>
<line x1="40" y1="190" x2="290" y2="170" stroke="${COLORS.aanbod}" stroke-width="2"/>
<text x="295" y="170" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">kosten</text>
<circle cx="118" cy="184" r="4" fill="${COLORS.warm}"/>
<text x="118" y="218" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">36 stuks</text>
</svg>`,
    checks: [
      {
        q: "Een ondernemer heeft omzet **€2.000**, vaste kosten **€500**, variabele kosten **€800**. Wat is de winst?",
        options: ["€700", "€1.500", "€1.200", "€500"],
        answer: 0,
        wrongHints: [null, "Vergeet niet ALLE kosten af te trekken.", "Variabele kosten ook aftrekken.", "Niet alle vaste kosten zijn afgetrokken."],
      },
      {
        q: "Welke kost is **VARIABEL** voor een foodtruck?",
        options: ["Aardappelen en olie", "Huur kraampje", "Verzekering", "Telefoon-abo"],
        answer: 0,
        wrongHints: [null, "Huur is vast.", "Verzekering is vast.", "Telefoon is vast."],
      },
      {
        q: "Het **break-even-punt** is wanneer:",
        options: ["Omzet = totale kosten (geen winst, geen verlies)", "Winst maximaal", "Verkoop maximaal", "De ondernemer stopt"],
        answer: 0,
        wrongHints: [null, "Maximale winst zit hoger dan break-even.", "Aantal zegt niets — break-even gaat over geld.", "Stoppen is geen economisch begrip."],
      },
      {
        q: "Sam verkoopt friet voor €5. Variabele kosten **€1,50** per friet. Vaste kosten **€140** per dag. **Hoeveel friet moet hij verkopen om break-even** te draaien?",
        options: ["40 friet", "28 friet", "94 friet", "100 friet"],
        answer: 0,
        wrongHints: [null, "Te weinig — €5-€1,50 = €3,50 dekking per friet, dus €140/€3,50.", "Te veel — controleer de berekening.", "Te veel — €140/€3,50 = 40."],
      },
      {
        q: "**Brutowinstmarge** voor een friet van €5 met inkoop €1,50?",
        options: ["70%", "30%", "350%", "100%"],
        answer: 0,
        wrongHints: [null, "Dat is de inkoop-percentage van prijs.", "Dat is de prijs als percentage van inkoop.", "Verkoopprijs zelf is niet de marge."],
      },
      {
        q: "Wat is **omzet**?",
        options: ["Aantal × prijs (totaal verkoopbedrag)", "Winst min belasting", "Wat de ondernemer overhoudt", "De vaste kosten"],
        answer: 0,
        wrongHints: [null, "Winst is iets anders.", "Dat is netto winst, niet omzet.", "Vaste kosten zijn input, geen omzet."],
      },
    ],
  },
  // ─── Stap 5: Vraag en aanbod ──────────────────────────────
  {
    title: "Vraag en aanbod — hoe komt de prijs tot stand?",
    explanation: "**Pincode 3.3: Vraag en aanbod.** De **prijs** van een product ontstaat door wat kopers willen betalen + wat verkopers willen aanbieden.\n\n**De vraag**: hoeveel willen kopers van iets bij verschillende prijzen?\n• **Wet van de vraag**: hoe **hoger** de prijs, hoe **minder** mensen willen kopen\n• Voorbeeld appels: €3/kg → 100 kg vraag, €1/kg → 400 kg vraag\n\n**Vraagcurve**: lijn die loopt van linksboven naar rechtsbeneden (hogere prijs = minder vraag).\n\n**Het aanbod**: hoeveel willen verkopers leveren bij verschillende prijzen?\n• **Wet van het aanbod**: hoe **hoger** de prijs, hoe **meer** verkopers willen leveren\n• Voorbeeld appels: €1/kg → boer levert weinig (lage winst), €3/kg → boer levert veel (winstgevend)\n\n**Aanbodcurve**: lijn die loopt van linksbeneden naar rechtsboven (hogere prijs = meer aanbod).\n\n**Evenwichtsprijs**: punt waar vraag = aanbod. Hier 'klikt' de markt.\n\n**Voorbeeld concert-tickets**:\n• Vraag: 50.000 mensen willen naar Taylor Swift\n• Aanbod: 35.000 zitplaatsen\n• → Officiele prijs €120, maar zwarte markt €500+ (hoge vraag, laag aanbod)\n\n**Wat als vraag of aanbod verandert?**\n\n**Vraag stijgt** (meer mensen willen het):\n• Bv. trend, reclame, hoger inkomen\n• Curve schuift naar rechts\n• Nieuwe evenwichtsprijs HOGER\n• Voorbeeld: hype rond AirPods Max → prijs blijft hoog\n\n**Vraag daalt**:\n• Bv. recessie, ander product populairder\n• Curve schuift naar links\n• Nieuwe prijs LAGER\n• Voorbeeld: handgels na corona-piek\n\n**Aanbod stijgt** (meer leveranciers):\n• Bv. nieuwe technologie, meer concurrenten\n• Curve schuift naar rechts\n• Prijs LAGER\n• Voorbeeld: zonnepanelen — China produceert massa, prijs gehalveerd\n\n**Aanbod daalt**:\n• Bv. oogst mislukt, fabriek dicht\n• Curve schuift naar links\n• Prijs HOGER\n• Voorbeeld: olieprijs steeg na sancties Rusland\n\n**Voor je dagelijks leven**:\n• Sneakers in sale: aanbod > vraag (te veel, weg ermee)\n• Festival-ticket vlak voor evenement: vraag > aanbod = prijs stijgt\n• Restaurant slechte recensie: vraag daalt, prijs zou moeten dalen of hij gaat dicht\n\n**Substituut en complement**:\n• **Substituten**: vervangbaar (Pepsi vs Coca-Cola). Prijs Coca stijgt → meer Pepsi-vraag.\n• **Complement**: hoort bij elkaar (printer + cartridge). Printer goedkoop → meer cartridges nodig.\n\n**Nuttige formule**:\n• Bij prijs P → bekijk Q_vraag en Q_aanbod\n• Als Q_vraag > Q_aanbod: prijs gaat omhoog (krapte)\n• Als Q_vraag < Q_aanbod: prijs gaat omlaag (overschot)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">VRAAG &amp; AANBOD — APPELS</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">prijs</text>
<text x="240" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal kg</text>
<line x1="60" y1="50" x2="280" y2="155" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<line x1="60" y1="155" x2="280" y2="50" stroke="${COLORS.vraag}" stroke-width="2.5"/>
<text x="240" y="58" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">aanbod</text>
<text x="240" y="135" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">vraag</text>
<circle cx="170" cy="100" r="6" fill="${COLORS.geld}"/>
<text x="180" y="92" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">evenwicht €2/kg</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">prijs ontstaat waar vraag = aanbod</text>
</svg>`,
    checks: [
      {
        q: "**Wet van de vraag**: bij hogere prijs willen kopers...",
        options: ["Minder kopen", "Meer kopen", "Hetzelfde kopen", "Sneller kopen"],
        answer: 0,
        wrongHints: [null, "Tegendeel — duurder = minder kopen.", "Wel verandering.", "Niet relevant."],
      },
      {
        q: "**Wet van het aanbod**: bij hogere prijs willen verkopers...",
        options: ["Meer leveren", "Minder leveren", "Hetzelfde", "Niets"],
        answer: 0,
        wrongHints: [null, "Tegendeel — hogere winst = meer leveren.", "Wel verandering.", "Wel reactie."],
      },
      {
        q: "**Evenwichtsprijs** is:",
        options: ["Prijs waar vraag = aanbod", "Hoogste prijs", "Laagste prijs", "Gemiddelde prijs"],
        answer: 0,
        wrongHints: [null, "Niet automatisch.", "Niet automatisch.", "Niet definitie."],
      },
      {
        q: "Veel **vraag**, weinig aanbod → prijs gaat:",
        options: ["Omhoog", "Omlaag", "Blijft gelijk", "Naar 0"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel beweging.", "Onmogelijk in normale markt."],
      },
      {
        q: "**Substituten** zijn:",
        options: ["Producten die elkaar kunnen vervangen (Pepsi vs Coca-Cola)", "Producten die bij elkaar horen", "Gratis producten", "Belastingvrije producten"],
        answer: 0,
        wrongHints: [null, "Dat zijn complementen.", "Niet relevant.", "Niet relevant."],
      },
      {
        q: "Bij €3 per kg vragen kopers 100 kg, bij €1 vragen ze 400 kg. Wat heet dit?",
        options: ["Wet van de vraag — hogere prijs, minder vraag", "Wet van het aanbod", "Inflatie", "Recessie"],
        answer: 0,
        wrongHints: [null, "Verkeerde wet.", "Inflatie is iets anders.", "Recessie is iets anders."],
      },
    ],
  },
  // ─── Stap 6: Macht op de markt — marktvormen ──────────────
  {
    title: "Macht op de markt — wie bepaalt de prijs?",
    explanation: "**Pincode 3.4: Macht op de markt.** Niet elke markt werkt hetzelfde. Hoeveel **concurrentie** er is bepaalt wie de prijs vaststelt.\n\n**4 marktvormen** (van veel naar weinig concurrentie):\n\n**1. Volkomen concurrentie**\n• **Veel** aanbieders + **veel** vragers\n• **Identiek** product (geen verschil tussen leveranciers)\n• Niemand bepaalt prijs — markt doet dat\n• Voorbeeld: tarwe, aardappel, basis-grondstoffen\n• Voor consument: laagst mogelijke prijs, weinig keuze in 'merk'\n\n**2. Monopolistische concurrentie**\n• **Veel** aanbieders\n• **Verschillende** producten (gedifferentieerd door merk, kwaliteit, design)\n• Beetje invloed op prijs door uniek karakter\n• Voorbeeld: kledingmerken (Nike vs Adidas vs Puma), restaurants, kappers\n• Voor consument: veel keuze, prijs varieert per merk\n\n**3. Oligopolie**\n• **Weinig grote** aanbieders (3-10)\n• Strategisch met elkaar — wat doet concurrent?\n• Risico: prijsafspraken (illegaal!)\n• Voorbeeld: telecom (KPN, Vodafone, T-Mobile, Odido), banken (ING, Rabo, ABN, SNS), supermarkten (AH, Jumbo, Lidl, Aldi)\n• Voor consument: beperkte keuze, prijzen vaak hoog\n\n**4. Monopolie**\n• **1** aanbieder\n• Volledige macht over prijs\n• Vaak via patenten, schaarse grondstoffen, of overheidsregulering\n• Voorbeeld: NS (treinen op de meeste lijnen), Schiphol (luchthaven Amsterdam), regionale waterleidingbedrijven\n• Voor consument: hoge prijzen, geen keuze\n\n**Vergelijking prijs en winst**:\n| Marktvorm | Prijs | Winst aanbieder |\n|---|---|---|\n| Volkomen concurr. | Laag | Klein |\n| Monopol. concurr. | Middel | Middel |\n| Oligopolie | Hoog | Hoog |\n| Monopolie | Hoogst | Hoogst |\n\n**Waarom mag een monopolie soms?**\n• Niet meer concurrenten haalbaar (treinrails dubbel aanleggen onpraktisch)\n• Onderzoek + ontwikkeling kost veel (medicijnen-patent voor 20 jaar)\n• Maar: met **prijsregulering** (overheid bepaalt max-prijs)\n\n**Wat doet de ACM (Autoriteit Consument & Markt)?**\n• Voorkomt **kartels** (prijsafspraken tussen oligopolie-spelers)\n• Goedkeuring van fusies (anders monopolie)\n• Voorbeeld: Heineken-Vrumona-fusie geblokkeerd in 2020\n• ACM legt boetes op (Apple App Store, Google)\n\n**Marktmacht en consument**:\n• Hoe meer concurrentie, hoe **beter voor de consument** (lagere prijs, meer keuze)\n• Maar: bedrijven hebben minder winst → minder R&D, minder banen?\n• Spanning tussen efficiëntie en innovatie\n\n**Voorbeelden uit het echte leven**:\n• **Volkomen concurrentie**: weekmarkt-aardappelen — alle boeren leveren ongeveer dezelfde prijs\n• **Monopolistische concurrentie**: 50 cafés in stad, elk eigen sfeer/locatie/menu\n• **Oligopolie**: Nederlandse benzine (Shell, BP, Esso, Total — vergelijkbare prijzen!)\n• **Monopolie**: gemeentelijke watermaatschappij — geen alternatief\n\n**Voor jou**:\n• Bij **volkomen concurrentie** loont vergelijken minst (alle prijzen ongeveer gelijk)\n• Bij **monopolistische concurrentie** loont MERKEN-onderzoek (kwaliteit verschilt)\n• Bij **oligopolie** loont vergelijken (kleine verschillen kunnen €100/jaar schelen — telecom!)\n• Bij **monopolie**: weinig keuze, accepteren of niet kopen",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">4 MARKTVORMEN</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VOLKOMEN</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel + veel · ident.</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">tarwe, aardappel</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">MONO. CONC.</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel · gediff.</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Nike, Adidas, café</text>
<rect x="20" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="87" y="123" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">OLIGOPOLIE</text>
<text x="87" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">3-10 grote</text>
<text x="87" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">telecom, banken</text>
<rect x="165" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="232" y="123" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">MONOPOLIE</text>
<text x="232" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 aanbieder</text>
<text x="232" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">NS, Schiphol</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">meer concurrentie → lagere prijs</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ACM bewaakt eerlijke markt</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel **aanbieders** bij volkomen concurrentie?",
        options: ["Veel", "Weinig (3-10)", "1", "Geen"],
        answer: 0,
        wrongHints: [null, "Dat is oligopolie.", "Dat is monopolie.", "Dan geen markt."],
      },
      {
        q: "**Telecom** (KPN/Vodafone/T-Mobile/Odido) is welke marktvorm?",
        options: ["Oligopolie (weinig grote)", "Volkomen concurrentie", "Monopolie", "Monopolistische concurrentie"],
        answer: 0,
        wrongHints: [null, "Te weinig spelers voor 'volkomen'.", "Niet 1, maar 4.", "Niet 'veel' aanbieders."],
      },
      {
        q: "**Monopolie** kenmerk:",
        options: ["1 aanbieder bepaalt prijs", "Veel aanbieders", "Alleen consumenten", "Lage prijs"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Onzin.", "Tegendeel — meestal hoog."],
      },
      {
        q: "Wat doet de **ACM**?",
        options: ["Voorkomt kartels + bewaakt eerlijke concurrentie", "Maakt wetten", "Int belasting", "Subsidies"],
        answer: 0,
        wrongHints: [null, "Wetten = parlement.", "Belastingdienst.", "Niet ACM."],
      },
      {
        q: "**Veel** kledingmerken (Nike, Adidas, Puma, ...): welke marktvorm?",
        options: ["Monopolistische concurrentie (veel + gedifferentieerd)", "Volkomen concurrentie", "Oligopolie", "Monopolie"],
        answer: 0,
        wrongHints: [null, "Producten verschillen wel.", "Te veel spelers.", "Veel meer dan 1."],
      },
      {
        q: "Bij welke marktvorm is **vergelijken** het meest waardevol?",
        options: ["Oligopolie — kleine verschillen kunnen €100/jr schelen", "Volkomen concurrentie", "Monopolie", "Iedere is gelijk"],
        answer: 0,
        wrongHints: [null, "Bij volkomen alles gelijke prijs.", "Geen alternatief.", "Wel verschil."],
      },
    ],
  },
  // ─── Stap 7: Rechtsvormen ─────────────────────────────────
  {
    title: "Rechtsvormen — eenmanszaak, VOF of BV?",
    explanation: "**Rechtsvorm** = de juridische opzet van een bedrijf. Belangrijk voor:\n• Wie is **aansprakelijk** voor schulden?\n• Hoeveel **belasting** betaal je?\n• Heb je **kapitaal** nodig om te starten?\n\n**Eenmanszaak** (1 ondernemer)\n• ✓ Makkelijk te starten via KvK (~€80)\n• ✓ Geen minimumkapitaal\n• ✓ Belastingvoordelen voor starters (zelfstandigenaftrek)\n• ✗ **Privé aansprakelijk**: bedrijf failliet = je huis/spaargeld in gevaar\n• Belasting: **inkomstenbelasting (IB)** over winst\n\n**VOF — Vennootschap onder Firma** (2+ ondernemers samen)\n• Net als eenmanszaak, maar met meerdere eigenaars (vennoten)\n• ✗ Iedereen privé aansprakelijk — ook voor schulden van de andere vennoot!\n• Belasting: elk apart IB over zijn winstdeel\n\n**BV — Besloten Vennootschap**\n• Apart juridisch lichaam (rechtspersoon, met aandelen)\n• ✓ **Niet privé aansprakelijk** (alleen tot ingelegd kapitaal)\n• ✗ Notaris nodig om op te richten (~€500-€1.500)\n• ✗ Apart financiele administratie + jaarverslag\n• Belasting: **vennootschapsbelasting (VPB)** over winst, en als jij loon krijgt uit de BV ook IB\n\n**Wanneer welke rechtsvorm**?\n• **Eenmanszaak**: kleinschalig starten, weinig risico (bv. bijles geven)\n• **VOF**: samen met 1-2 vrienden, vertrouwen onderling (bv. samen kapsalon)\n• **BV**: als omzet/winst groot wordt, of veel risico (bv. €100k+ omzet, juridisch riskante markt)\n\n**Vuistregel**: tot ~€100.000 winst is eenmanszaak fiscaal voordeliger. Erboven wordt BV interessanter.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">3 RECHTSVORMEN</text>
<rect x="15" y="40" width="95" height="135" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="62" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">EENMANSZAAK</text>
<text x="62" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 eigenaar</text>
<text x="62" y="93" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial" font-weight="bold">⚠ privé aansprak.</text>
<text x="62" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">betaalt IB</text>
<text x="62" y="123" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">starters-aftrek</text>
<text x="62" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">€80 KvK</text>
<text x="62" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">klein/start</text>
<rect x="115" y="40" width="95" height="135" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="162" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VOF</text>
<text x="162" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2+ vennoten</text>
<text x="162" y="93" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial" font-weight="bold">⚠⚠ allen aansprak.</text>
<text x="162" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">IB per persoon</text>
<text x="162" y="123" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vennootschap</text>
<text x="162" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">contract slim!</text>
<text x="162" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">samen klein</text>
<rect x="215" y="40" width="95" height="135" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="262" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">BV</text>
<text x="262" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">rechtspersoon</text>
<text x="262" y="93" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">✓ NIET privé</text>
<text x="262" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">betaalt VPB</text>
<text x="262" y="123" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">notaris nodig</text>
<text x="262" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">jaarverslag</text>
<text x="262" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">groot/risico</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">~€100k winst: eenmanszaak fiscaal voordeliger</text>
</svg>`,
    checks: [
      {
        q: "Bij welke rechtsvorm is de eigenaar **NIET privé aansprakelijk**?",
        options: ["BV", "Eenmanszaak", "VOF", "Allemaal"],
        answer: 0,
        wrongHints: [null, "Eenmanszaak: privé wel aansprakelijk.", "VOF: nog erger — ook voor de andere vennoot.", "Niet allemaal — alleen BV."],
      },
      {
        q: "Twee vrienden starten een **VOF** voor hun foodtruck. Wat is het belangrijkste risico?",
        options: ["Beide vennoten zijn privé aansprakelijk — ook voor schulden van de ander", "Ze mogen geen winst maken", "Ze betalen dubbele belasting", "Ze hebben een notaris nodig"],
        answer: 0,
        wrongHints: [null, "Winst maken is juist het doel.", "Bij VOF betaalt elk apart IB.", "Notaris is voor BV, niet VOF."],
      },
      {
        q: "Welke belasting betaalt een **BV**?",
        options: ["Vennootschapsbelasting (VPB)", "Inkomstenbelasting", "Alleen BTW", "Geen"],
        answer: 0,
        wrongHints: [null, "Eigenaars BV betalen IB over loon, BV zelf VPB.", "BTW betalen alle ondernemingen.", "BV's betalen wél belasting."],
      },
      {
        q: "Sam wil zelfstandig starten met **lage start-kosten**. Welke rechtsvorm is meest geschikt?",
        options: ["Eenmanszaak (~€80 KvK, geen notaris)", "BV (notaris vereist)", "VOF (2 vennoten nodig)", "Stichting"],
        answer: 0,
        wrongHints: [null, "BV heeft notariskosten van €500-€1.500.", "VOF heeft 2 personen nodig — hij wil alleen.", "Stichting is voor non-profit, niet ondernemen."],
      },
      {
        q: "Bij welk winst-niveau wordt een **BV vaak interessanter** dan eenmanszaak?",
        options: ["Boven ongeveer €100.000 winst per jaar", "Vanaf €1 winst", "Pas bij €1 miljoen", "Nooit"],
        answer: 0,
        wrongHints: [null, "Onder €100k is eenmanszaak (met aftrek) voordeliger.", "Te hoog — al ruim voor €1 miljoen omslagpunt.", "BV kan zeker voordeliger worden."],
      },
      {
        q: "Wat is een **rechtspersoon**?",
        options: ["Een bedrijf dat juridisch een aparte 'persoon' is — zoals een BV", "Een advocaat", "Een ondernemer met een diploma", "Een werknemer"],
        answer: 0,
        wrongHints: [null, "Advocaat is een beroep, niet rechtsvorm.", "Niet diplomastatus.", "Werknemer = geen rechtspersoon."],
      },
    ],
  },
  // ─── Stap 8: BTW en facturen ───────────────────────────────
  {
    title: "BTW, facturen en boekhouden — basics",
    explanation: "Als ondernemer moet je BTW (omzetbelasting) **innen voor de overheid** en **administratie** bijhouden.\n\n**BTW (Belasting Toegevoegde Waarde)**:\n• Je rekent BTW bovenop je prijs aan klanten\n• Je houdt deze BTW apart\n• Je drukt af en toe (per kwartaal) op je belastingdienst\n\n**3 BTW-tarieven in NL**:\n• **21%** — algemeen tarief (kleding, elektronica, restaurant, koeriersdienst)\n• **9%** — laag tarief (boodschappen, water, boeken, kapper, OV)\n• **0%** — export en sommige zorg\n\n**Voorbeeld friet €5 inclusief 9% BTW**:\n• Excl BTW: €5 / 1,09 = **€4,59** voor jou\n• BTW: **€0,41** voor de Belastingdienst\n\n**Factuur** = officieel document voor zakelijke verkoop. Verplichte items:\n• **Jouw** naam, adres, KvK-nummer, BTW-nummer\n• **Klant** naam en adres\n• **Datum** + uniek factuurnummer\n• **Omschrijving** dienst/product\n• **Prijs** (excl BTW), BTW-bedrag, totaal\n\n**Boekhouding** = administratie van inkomsten en uitgaven:\n• **Bonnetjes bewaren** — verplicht 7 jaar!\n• **Bankafschriften** koppelen aan facturen\n• **BTW-aangifte** (elk kwartaal voor de meesten)\n• **Aangifte inkomstenbelasting** (eind van het jaar)\n\n**Boekhoudprogramma's** maken het makkelijker:\n• MoneyMonk, e-Boekhouden, Exact Online\n• Vanaf €10/maand\n\n**Vuistregel zelfstandige**:\nHoud **ongeveer 30%** van je omzet apart voor belasting + BTW. Anders sta je later voor een verrassing!",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BTW-TARIEVEN</text>
<rect x="35" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="75" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="18" font-family="Arial" font-weight="bold">21%</text>
<text x="75" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algemeen</text>
<text x="75" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">restaurant, kleding</text>
<rect x="120" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="18" font-family="Arial" font-weight="bold">9%</text>
<text x="160" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">laag</text>
<text x="160" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">eten, kapper, ov</text>
<rect x="205" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="245" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="18" font-family="Arial" font-weight="bold">0%</text>
<text x="245" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">special</text>
<text x="245" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">export, zorg</text>
<rect x="20" y="120" width="280" height="40" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">FACTUUR — verplichte items</text>
<text x="160" y="153" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">jouw + klant gegevens · datum · nr · prijs · BTW · totaal</text>
<rect x="20" y="170" width="280" height="40" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="188" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">⚠ HOUD ~30% OMZET APART</text>
<text x="160" y="202" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">voor belasting + BTW — anders verrassing!</text>
</svg>`,
    checks: [
      {
        q: "Welk **BTW-tarief** geldt voor boodschappen (eten/drinken)?",
        options: ["9% (laag)", "21% (algemeen)", "0%", "25%"],
        answer: 0,
        wrongHints: [null, "21% is voor andere dingen.", "0% is alleen voor specifieke gevallen.", "25% bestaat niet als NL-tarief."],
      },
      {
        q: "Een product kost **€100 zonder BTW**. Wat is de prijs **inclusief 21% BTW**?",
        options: ["€121", "€100", "€79", "€21"],
        answer: 0,
        wrongHints: [null, "Inclusief BTW is meer dan zonder.", "Dat zou aftrek zijn.", "Dat is alleen het BTW-bedrag."],
      },
      {
        q: "Hoeveel BTW zit in een product van **€121 inclusief 21% BTW**?",
        options: ["€21", "€25,41", "€121", "€100"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €121 — dat is fout. Reken: €121/1,21 = €100, dus €21 BTW.", "Dat is de hele prijs.", "Dat is exclusief BTW."],
      },
      {
        q: "Wat is verplicht op een **factuur**?",
        options: ["KvK-nummer, BTW-nummer, datum, factuurnummer, prijs + BTW", "Alleen het bedrag", "Alleen jouw naam", "Niets — vrije keuze"],
        answer: 0,
        wrongHints: [null, "Te weinig — wettelijk verplichte items.", "Te weinig.", "Wel verplichte items."],
      },
      {
        q: "Hoe lang moet je **bonnen en administratie bewaren**?",
        options: ["7 jaar (wettelijke bewaarplicht)", "1 jaar", "Tot het volgende boekjaar", "Niet"],
        answer: 0,
        wrongHints: [null, "Veel te kort.", "Wettelijke termijn is langer.", "Wel verplicht."],
      },
      {
        q: "Sam ontvangt **€1.000 omzet inclusief 9% BTW** op een dag. Hoeveel houdt hij apart voor BTW?",
        options: ["Ongeveer €83", "€90", "€100", "€9"],
        answer: 0,
        wrongHints: [null, "Niet 9% van €1000 — dat is incl. BTW. Reken: €1000 - €1000/1,09.", "Te veel.", "Te weinig."],
      },
    ],
  },
  // ─── Stap 9: Risico, verlies en faillissement ────────────
  {
    title: "Risico, verlies en faillissement — wat als het misgaat?",
    explanation: "Niet alle bedrijven slagen. **Statistiek**: ongeveer **40% van de starters** stopt binnen 5 jaar. Dat hoort bij ondernemerschap.\n\n**Soorten risico**:\n\n**1. Marktrisico**\n• Geen vraag naar je product (verkeerd ingeschat)\n• Trends veranderen (TikTok-rage voorbij)\n• Crisis (corona, recessie)\n\n**2. Concurrentierisico**\n• Grote speler komt op jouw markt (Albert Heijn opent in jouw straat)\n• Goedkopere alternatieven\n\n**3. Kostenrisico**\n• Grondstoffen worden duurder (gas, olie)\n• Personeelskosten stijgen\n• Onverwachte uitgaven (machine kapot)\n\n**4. Financieel risico**\n• Klanten betalen niet of te laat (debiteurenrisico)\n• Lening kun je niet aflossen\n• Belastingschuld groeit\n\n**5. Persoonlijk risico**\n• Ziekte of burn-out → geen omzet\n• Bij eenmanszaak/VOF: privé-vermogen in gevaar\n\n**Wat is een faillissement?**\nJe kunt je schulden niet meer betalen. Een rechter benoemt een **curator** die:\n• Bedrijfs-bezittingen verkoopt\n• Geld eerlijk verdeelt onder schuldeisers\n• Het bedrijf opheft\n\n**Bij eenmanszaak/VOF**: ook privé-bezittingen kunnen worden verkocht (huis, auto). Bij **BV**: alleen het bedrijfs-vermogen.\n\n**Hoe risico beperken?**\n• **Buffer** (3-6 mnd kosten op spaarrekening)\n• **Verzekeringen** (arbeidsongeschiktheid, aansprakelijkheid)\n• **Diversificatie** (niet 1 grote klant maar 10 kleine)\n• **Realistische cashflow-planning**\n• **Niet te snel groeien** (niet meteen 10 medewerkers aannemen)\n\n**WSNP** (Wet Schuldsanering Natuurlijke Personen): laatste redmiddel voor particulieren in nood. Strenge regels, maar na 3 jaar 'schoon'.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">RISICO BIJ ONDERNEMEN</text>
<text x="160" y="42" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">~40% stopt binnen 5 jaar</text>
<rect x="20" y="55" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="87" y="75" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">marktrisico</text>
<rect x="165" y="55" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="75" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">concurrentie</text>
<rect x="20" y="92" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="87" y="112" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">kosten ↑</text>
<rect x="165" y="92" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="232" y="112" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">debiteuren</text>
<rect x="20" y="129" width="280" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="160" y="149" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">persoonlijk: ziekte / burn-out</text>
<rect x="20" y="170" width="280" height="40" rx="4" fill="rgba(105,240,174,0.10)" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="160" y="188" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">RISICO BEPERKEN</text>
<text x="160" y="202" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">buffer · verzekering · spreiding · realistisch</text>
</svg>`,
    checks: [
      {
        q: "Wat is **debiteurenrisico**?",
        options: ["Klanten betalen niet of te laat", "Belastingdienst stuurt brief", "Concurrenten worden goedkoper", "Personeel wordt ziek"],
        answer: 0,
        wrongHints: [null, "Belasting is een ander risico-type.", "Concurrentie-risico.", "Persoonlijk risico."],
      },
      {
        q: "Bij een **faillissement van een eenmanszaak**, wat is het belangrijkste verschil met een BV?",
        options: ["Ook privé-bezittingen (huis, auto) kunnen verkocht worden", "Geen verschil", "Bij eenmanszaak gebeurt niets", "BV is altijd erger"],
        answer: 0,
        wrongHints: [null, "Wel groot verschil — aansprakelijkheid.", "Curator komt ook bij eenmanszaak.", "BV beschermt juist meer."],
      },
      {
        q: "Wie wordt aangesteld bij een faillissement?",
        options: ["Een curator (door de rechter)", "Een nieuwe ondernemer", "De accountant", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Bedrijf wordt vaak gestopt, geen overname.", "Accountant is administratief.", "Belastingdienst is wel schuldeiser, niet curator."],
      },
      {
        q: "Welke maatregel beperkt **risico** voor een ondernemer?",
        options: ["Een buffer van 3-6 maanden kosten op spaarrekening", "Snel veel personeel aannemen", "Alleen 1 hele grote klant", "Geen verzekering nemen"],
        answer: 0,
        wrongHints: [null, "Snel groeien = juist meer risico.", "1 grote klant = afhankelijk = risico.", "Geen verzekering = blootgesteld."],
      },
      {
        q: "Wat betekent **diversificatie van klanten**?",
        options: ["Veel verschillende klanten, niet afhankelijk van 1 grote", "Alleen 1 type klant", "Klanten verschillende prijzen geven", "Veel in advertenties investeren"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — afhankelijk van 1 = risico.", "Prijsverschil heeft niets met diversificatie te maken.", "Reclame is iets anders."],
      },
      {
        q: "Wat is een belangrijk **persoonlijk risico** voor een eenmanszaak-eigenaar?",
        options: ["Ziekte of burn-out → geen omzet meer", "BTW-aangifte vergeten", "Te weinig advertentie", "Geen logo hebben"],
        answer: 0,
        wrongHints: [null, "Vergeten BTW is operationeel, niet persoonlijk.", "Marketing-issue, niet persoonlijk risico.", "Logo's zijn cosmetisch, geen risico."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOndernemen = {
  id: "pincode-ondernemen",
  title: "Ondernemen",
  emoji: "🚀",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 3",
  intro:
    "Hoofdstuk 3 van Pincode 7e ed. VMBO-GT 4 (en andere methodes): ondernemen, marktonderzoek, marketing, kosten/omzet/winst, vraag en aanbod, marktvormen, rechtsvormen, BTW + facturen, risico. 9 stappen, voorbeelden uit jongerenleven. Volledige Pincode 3.1-3.4 dekking.",
  triggerKeywords: [
    "ondernemen",
    "ondernemer",
    "kvk",
    "kamer van koophandel",
    "marktonderzoek",
    "deskresearch",
    "veldonderzoek",
    "enquete",
    "swot",
    "doelgroep",
    "marketing",
    "marketing-mix",
    "4 p's",
    "product",
    "prijs",
    "plaats",
    "promotie",
    "usp",
    "ondernemingsplan",
    "productie",
    "handel",
    "diensten",
    "omzet",
    "kosten",
    "winst",
    "verlies",
    "vaste kosten",
    "constante kosten",
    "variabele kosten",
    "totale kosten",
    "break-even",
    "brutowinstmarge",
    "vraag", "aanbod", "vraag en aanbod", "vraagcurve", "aanbodcurve",
    "evenwichtsprijs", "marktevenwicht", "wet van de vraag", "wet van het aanbod",
    "substituut", "complement", "verschuiving",
    "marktvorm", "marktvormen", "concurrentie",
    "volkomen concurrentie", "monopolistische concurrentie",
    "oligopolie", "monopolie", "kartel", "marktmacht",
    "acm", "autoriteit consument en markt",
    "rechtsvorm",
    "eenmanszaak",
    "vof",
    "vennootschap onder firma",
    "bv",
    "besloten vennootschap",
    "rechtspersoon",
    "aansprakelijk",
    "vpb",
    "vennootschapsbelasting",
    "btw",
    "factuur",
    "boekhouden",
    "boekhouding",
    "bewaarplicht",
    "faillissement",
    "curator",
    "wsnp",
    "debiteurenrisico",
    "buffer",
    "diversificatie",
    "pincode hoofdstuk 3",
    "pincode hoofdstuk c",
  ],
  chapters,
  steps,
};

export default pincodeOndernemen;
