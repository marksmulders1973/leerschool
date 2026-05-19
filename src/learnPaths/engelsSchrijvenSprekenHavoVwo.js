// Leerpad: Engels schrijven + spreken — HAVO/VWO
// SE-onderdelen Engels (CSE = alleen lezen). Telt mee voor eindcijfer.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  schrijven: "#42a5f5",
  spreken: "#ef6c00",
  goud: "#ffd54f",
};

const stepEmojis = ["✍️", "📧", "🗣️", "🎤", "🏆"];

const chapters = [
  { letter: "A", title: "Schrijfvaardigheid basis", emoji: "✍️", from: 0, to: 0 },
  { letter: "B", title: "Email + formele brief", emoji: "📧", from: 1, to: 1 },
  { letter: "C", title: "Essay + opinie-stuk", emoji: "🗣️", from: 2, to: 2 },
  { letter: "D", title: "Spreekvaardigheid", emoji: "🎤", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Schrijfvaardigheid basis ──────────────────────────
  {
    title: "Schrijfvaardigheid Engels — basis",
    explanation:
      "**Engels schrijfvaardigheid** wordt op **SE** (schoolexamen) getoetst, niet CSE. **CSE Engels = alleen leesvaardigheid**. SE + CSE samen = eindcijfer Engels.\n\n**Engels is kernvak** — slagen vergt voldoende voor Engels.\n\n**Niveaus** (CEFR):\n• HAVO eind: **B1+** (zelfstandige taalgebruiker).\n• VWO eind: **B2** (vaardige taalgebruiker).\n• Native: C1-C2.\n\n**Basis schrijfvaardigheid**:\n\n**Werkwoord-tijden** (cruciaal voor Engels):\n\n**Present Simple**: regelmatige + algemene waarheden.\n• I work, you work, he work**s** (3e persoon enkelvoud = -s!).\n• 'I work in Amsterdam.'\n\n**Present Continuous**: nu bezig.\n• I am working, you are working, he is working.\n• 'I am working from home today.'\n\n**Past Simple**: voltooid in verleden.\n• Regelmatig: -ed (worked, walked).\n• **Onregelmatig**: go-went, see-saw, take-took, eat-ate, write-wrote.\n• 'I worked yesterday.'\n\n**Past Continuous**: was/were bezig.\n• I was working, you were working.\n• 'I was working when she called.'\n\n**Present Perfect**: verleden met heden-relevantie.\n• have/has + voltooid deelwoord.\n• 'I have lived in NL for 10 years.' (nog steeds).\n• Anders dan past simple ('I lived in NL' = verleden, niet meer).\n• **Cito-favoriet val**.\n\n**Past Perfect**: verleden vóór verleden.\n• had + voltooid deelwoord.\n• 'When I arrived, she had already left.'\n\n**Future Simple**: wil + zal.\n• will / shall + infinitief.\n• 'I will go tomorrow.'\n• **Going to** voor plannen: 'I'm going to study tonight.'\n\n**Werkwoord-vormen**:\n• 1e vorm: infinitief (work).\n• 2e vorm: past simple (worked).\n• 3e vorm: past participle (worked).\n• Onregelmatige werkwoorden uit hoofd: go-went-gone, see-saw-seen, take-took-taken, etc.\n\n**Articles** (lidwoorden):\n• **A/an**: onbepaald (any). *A book.* *An apple.* (an voor klinker-klank).\n• **The**: bepaald (specifiek). *The book.*\n• **Geen lidwoord**: algemeen (in algemene zin), namen, talen, vakken.\n• Belangrijk verschil met NL — gebruik van articles is anders.\n\n**Zinsbouw SVO**:\n• Subject-Verb-Object.\n• 'I (S) eat (V) apples (O).'\n• Vragen via inversie: 'Do you eat apples?'\n• Negaties met 'do not / don't': 'I don't eat apples.'\n\n**Conditional zinnen** (als-dan):\n• **Type 1** (mogelijk): If + present, ... will + infinitief.\n  - 'If it rains, I will stay home.'\n• **Type 2** (onwaarschijnlijk): If + past simple, ... would + infinitief.\n  - 'If I had money, I would travel.'\n• **Type 3** (onmogelijk verleden): If + past perfect, ... would have + participle.\n  - 'If I had studied, I would have passed.'\n\n**Veelgemaakte NL-fouten in Engels**:\n• 'It depends OF' → moet zijn 'depends ON'.\n• 'I have 16 years' → I am 16 years old.\n• 'I am born in' → I was born in.\n• 'Make a picture' → take a picture.\n• 'Become' (worden) ≠ 'become' (krijgen — dat is *get*).\n• 'Eventually' = uiteindelijk (niet 'eventueel' = perhaps).\n• 'Sympathic' bestaat niet, gebruik 'nice' of 'friendly'.\n• 'I do all my best' → I do my best.\n• 'I learn Spanish' bij school → 'I study Spanish'.\n• 'Already' (al) ≠ 'all ready' (allemaal klaar).\n\n**Spelling-regels**:\n• Briefly: -y → -ies (party → parties).\n• Doublle consonant before -ed/-ing voor korte klinker (run → running, stop → stopped).\n• Silent e weg voor -ing (write → writing, make → making).\n• -ie → -y voor -ing (lie → lying).",
    checks: [
      {
        q: "**3e persoon enkelvoud present simple** krijgt:",
        options: ["-s aan einde werkwoord","Geen verandering","-ed","-ing"],
        answer: 0,
        wrongHints: [null, "Klassieke NL-fout.", "Past simple.", "Continuous."],
        uitlegPad: {
          stappen: [{ titel: "He works", tekst: "**Present simple**: 3e persoon enkelvoud (he/she/it) krijgt **-s**. I work, you work, **he works**, we work, they work. Spelling: -es bij sis/sj-klanken (he watches, she misses). **NL-leerlingen vergeten 's' vaak**: 'He work' is fout, moet 'He works' zijn. Examencommissie strafs." }],
          niveaus: { basis: "-s. A.", simpeler: "3e p ev = -s = A.", nogSimpeler: "-s = A." },
        },
      },
      {
        q: "Welke is **present perfect**?",
        options: ["I have lived here for 10 years","I lived here 10 years ago","I am living here","I will live here"],
        answer: 0,
        wrongHints: [null, "Past simple.", "Present continuous.", "Future."],
        uitlegPad: {
          stappen: [{ titel: "Verleden met heden-relevantie", tekst: "**Present perfect**: have/has + past participle. Geeft handeling die **begon in verleden + nog relevant of doorgaand** is. 'I **have lived** here for 10 years' = ik woon hier (nog steeds) sinds 10 jaar geleden. Verschil met past simple: 'I lived here for 10 years' = verleden, niet meer." }],
          theorie: "Cito-val: 'How long have you...' altijd present perfect, niet past simple.",
          niveaus: { basis: "Have+lived. A.", simpeler: "Pres perf = have+pp = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'If I had money, I would travel'** is conditional type:",
        options: ["Type 2 (onwaarschijnlijk)","Type 1 (mogelijk)","Type 3 (verleden)","Type 0"],
        answer: 0,
        wrongHints: [null, "Type 1 = if + present + will.", "Type 3 = if had had + would have.", "Type 0 = algemeen waarheid."],
        uitlegPad: {
          stappen: [{ titel: "If + past + would", tekst: "**Type 2 conditional**: if + past simple, ... would + infinitief. Betekent **onwaarschijnlijk of hypothetisch** in heden/toekomst. 'If I **had** money (ik heb het niet), I **would travel** (ik ga niet doen)'.\n\n**Type 1** = mogelijk: 'If it rains, I will stay'.\n**Type 3** = onmogelijk verleden: 'If I had studied, I would have passed'." }],
          niveaus: { basis: "Type 2. A.", simpeler: "If+past+would = T2 = A.", nogSimpeler: "T2 = A." },
        },
      },
      {
        q: "Welke is **fout** Engels (NL-fout)?",
        options: ["'I have 16 years'","I am 16 years old","I was born in 2008","I study Spanish"],
        answer: 0,
        wrongHints: [null, "Correct.", "Correct.", "Correct."],
        uitlegPad: {
          stappen: [{ titel: "Be + age, niet have", tekst: "**'I have 16 years' = WRONG**. NL letterlijk vertaalt 'ik heb 16 jaar' (zoals FR + ES). Engels: **'I am 16 (years old)'**. Met 'be' + leeftijd, niet 'have'.\n\nAndere klassieke NL-fouten:\n• 'I am born in' → 'I was born in'.\n• 'Become' (worden) vaak verward met 'krijgen' (= get).\n• 'Eventually' = uiteindelijk, niet 'eventueel'." }],
          niveaus: { basis: "I have 16 years. A.", simpeler: "Have age = fout = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**An apple** — waarom 'an' ipv 'a'?",
        options: ["Apple begint met klinker-klank","Apple is meervoud","Apple is mannelijk","Geen regel"],
        answer: 0,
        wrongHints: [null, "Niet — enkelvoud.", "Engels heeft geen geslachten.", "Wel regel."],
        uitlegPad: {
          stappen: [{ titel: "Klinker-klank → an", tekst: "**A vs an**: 'an' voor woord beginnend met **klinker-klank** (uitspraak, niet spelling!).\n• An apple, an hour (silent h), an MP.\n• A book, a university (yu-klank, geen klinker-klank), a one (wun).\n\nLet op: uitspraak telt, niet de letter." }],
          niveaus: { basis: "Klinker-klank. A.", simpeler: "an = klinker = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Email + formele brief ─────────────────────────────
  {
    title: "Email + formele brief Engels",
    explanation:
      "**SE-onderdeel**: schrijven van zakelijke email of brief. Vaak praktische opdrachten: sollicitatie, klacht, informatie-aanvraag.\n\n**Email-structuur**:\n\n**Subject line**:\n• Kort + duidelijk.\n• Goed: 'Application for Marketing Internship Summer 2026'.\n• Slecht: 'Hi'.\n\n**Begroeting** (variatie naar formaliteit):\n\n**Zeer formeel** (naam onbekend):\n• Dear Sir or Madam,\n• To whom it may concern,\n\n**Formeel** (naam bekend):\n• Dear Mr Smith, / Dear Ms Johnson,\n• Dear Dr Brown,\n• Dear Professor Wilson,\n\n**Semi-formeel**:\n• Dear John,\n• Hello Sarah,\n\n**Informeel**:\n• Hi Tom,\n• Hey Lisa,\n\n**Openings-zinnen** (variatie):\n• 'I am writing to inquire about...'\n• 'I am writing to apply for...'\n• 'I am writing in response to your advertisement of...'\n• 'I would like to express my interest in...'\n• 'I hope this email finds you well.' (semi-formeel).\n• 'Thank you for your email of...'\n\n**Hoofdtekst** (middendeel):\n• Helder gestructureerd.\n• 1 idee per alinea.\n• Beleefd + zakelijk.\n• Specifieke informatie geven.\n\n**Afsluiting**:\n• 'I look forward to hearing from you.'\n• 'I would appreciate your prompt response.'\n• 'Please do not hesitate to contact me if you require further information.'\n• 'Thank you for your consideration.'\n\n**Sluit-groet**:\n\n**Zeer formeel**: Yours faithfully (na 'Dear Sir/Madam').\n**Formeel**: Yours sincerely (na 'Dear Mr Smith').\n**Semi-formeel**: Best regards / Kind regards.\n**Informeel**: Best / Cheers / Thanks.\n\nDan: naam.\n\n**Voorbeeld sollicitatie-email**:\n\n*Subject: Application for Junior Marketing Position*\n\n*Dear Ms Johnson,*\n\n*I am writing to apply for the Junior Marketing Position advertised on your company website on 14 May 2026.*\n\n*I am currently a final-year student at [school] in the Netherlands, studying business and economics. I have always been interested in marketing, and I believe my recent internship at [company] has provided me with valuable practical experience.*\n\n*I am particularly drawn to your company because of your innovative approach to sustainable marketing. I would welcome the opportunity to contribute to your team.*\n\n*Please find my CV attached. I would be available for an interview at your convenience.*\n\n*I look forward to hearing from you.*\n\n*Yours sincerely,*\n*[Naam]*\n\n**Sollicitatie-tips**:\n• Onderzoek bedrijf vooraf.\n• Pas 'cover letter' aan per vacature — niet copy-paste.\n• Concreet maken: welke skills, welke ervaring.\n• Beleefdheid + correctheid cruciaal.\n• Spelling-check + grammatica-check.\n• Lengte: 200-300 woorden ideaal.\n\n**Klacht-brief**:\n\n*Subject: Complaint about defective product (Order #12345)*\n\n*Dear Customer Service,*\n\n*I am writing to complain about a product I ordered from your website on 1 April 2026 (order number 12345).*\n\n*Unfortunately, when the product arrived, it was [specific problem]. I expected better quality given your company's reputation.*\n\n*I would appreciate either a full refund or a replacement product. Please let me know what you can offer.*\n\n*I look forward to your response within 14 days.*\n\n*Yours faithfully,*\n*[Naam]*\n\n**Informatie-aanvraag**:\n\n*Subject: Inquiry about Summer Programme*\n\n*Dear Programme Coordinator,*\n\n*I am writing to inquire about your summer programme for international students. I am particularly interested in the dates, fees, and accommodation arrangements.*\n\n*Could you please send me information on:*\n*- The application deadline*\n*- The total cost including accommodation*\n*- Any scholarship opportunities*\n\n*Thank you for your assistance.*\n\n*Yours sincerely,*\n*[Naam]*\n\n**Veelgemaakte fouten zakelijke email**:\n• Te informeel ('Hey, what's up?').\n• Spelfouten (verraadt slordigheid).\n• Te lang (lezer geeft op).\n• Geen subject line of vaag.\n• 'I hope you are doing well' bij elk emailsje (overdone NL-import).\n• Te indirect — wees duidelijk wat je wilt.\n• 'Looking forward' zonder 'to': *looking forward to hearing*.",
    checks: [
      {
        q: "Welke afsluiting past bij **'Dear Sir or Madam'**?",
        options: ["Yours faithfully","Yours sincerely","Best","Cheers"],
        answer: 0,
        wrongHints: [null, "Bij specifieke naam.", "Te informeel.", "Te informeel."],
        uitlegPad: {
          stappen: [{ titel: "Formele match", tekst: "**Yours faithfully** = bij 'Dear Sir or Madam' (naam onbekend). **Yours sincerely** = bij 'Dear Mr/Ms [naam]' (naam bekend). Onthouden: 'sir = faithfully' beide met 's', 'name = sincerely' beide andere paren. Onbeleefd om verkeerde pair te gebruiken in formeel verkeer." }],
          niveaus: { basis: "Yours faithfully. A.", simpeler: "Dear Sir = faithfully = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **subject line** is best?",
        options: ["Application for Marketing Internship Summer 2026","Hi","Question","Help please"],
        answer: 0,
        wrongHints: [null, "Te vaag.", "Te vaag.", "Niet zakelijk."],
        uitlegPad: {
          stappen: [{ titel: "Concreet + duidelijk", tekst: "Goede subject line: **concreet onderwerp + waarom je schrijft**. 'Application for Marketing Internship Summer 2026' geeft direct duidelijkheid. Slechte: 'Hi', 'Question', 'Important' — lezer weet niet waar over. Lange subject lines (>10 woorden) ook slecht: cruciaal eerste 6 woorden moeten alles overbrengen." }],
          niveaus: { basis: "Application. A.", simpeler: "Subject = concreet = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'Please find my CV attached'** is:",
        options: ["Standaard formele zin in sollicitatie","Te informeel","Verkeerd Engels","Te direct"],
        answer: 0,
        wrongHints: [null, "Niet — gepast.", "Wel correct.", "Niet — gepast direct."],
        uitlegPad: {
          stappen: [{ titel: "Standaard-zin", tekst: "**'Please find my CV attached'** = klassieke formele zin sollicitatie. Anders: 'I have attached my CV' (iets minder formeel). Recente trend: 'I've attached my CV for your review' (modern + helder).\n\nVermijden: 'I attach my CV' (oud), 'Here is my CV' (te informeel)." }],
          niveaus: { basis: "Standaard. A.", simpeler: "Find CV attached = standaard = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Lengte van **cover letter** (sollicitatie-brief):",
        options: ["200-300 woorden","50 woorden","1000+ woorden","Geen limiet"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Veel te lang.", "Wel impliciete limiet."],
        uitlegPad: {
          stappen: [{ titel: "Kort + krachtig", tekst: "**Cover letter ideaal: 200-300 woorden**. Reden: HR-mensen scannen — lange brief = niet gelezen. Vier alinea's: introductie, wie ik ben + vaardigheden, waarom dit bedrijf, afsluiting + actie. Geen lange CV-inhoud — die staat in CV bijgevoegd." }],
          niveaus: { basis: "200-300 w. A.", simpeler: "Cover letter = 300 w = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'Looking forward to hearing'** — wat is correct?",
        options: ["Looking forward to hearing FROM you","Looking forward HEARING you","Look forward TO HEAR","Looking forward HEAR"],
        answer: 0,
        wrongHints: [null, "Niet — TO ontbreekt.", "Niet — niet gerund.", "Niet — niet gerund."],
        uitlegPad: {
          stappen: [{ titel: "TO + -ing", tekst: "**Look forward TO + gerund (-ing)**. Bv. 'I look forward TO hearing from you.' 'TO' is **voorzetsel** hier, niet infinitief-marker → krijgt -ing-vorm na zich. Klassieke fout: 'look forward to hear' (verkeerd, moet 'to hearing'). Andere voorbeelden: 'I'm used to studying' (niet 'to study')." }],
          niveaus: { basis: "TO hearing. A.", simpeler: "Look fwd TO + -ing = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Essay + opinie-stuk ───────────────────────────────
  {
    title: "Essay + opinie-stuk Engels",
    explanation:
      "**SE-opdracht**: essay of opinion piece. Argumenteren in Engels.\n\n**Essay-typen**:\n\n**Argumentative essay**: standpunt verdedigen.\n**Discursive / discussion essay**: voor + tegen weegt.\n**Opinion essay**: persoonlijke mening centraal.\n**Expository essay**: uitleg geven.\n\n**Structuur (klassiek)**:\n\n**1. Introduction** (1 alinea):\n• Aandacht trekken (hook): vraag, citaat, statistiek, anekdote.\n• Context geven (background).\n• **Thesis statement**: jouw centrale stelling (1 zin, eind van inleiding).\n\n**2. Body paragraphs** (3 alinea's typically):\n• Elk: **topic sentence** (kerngedachte) + uitwerking + voorbeeld + link naar thesis.\n• Argument 1, 2, 3.\n• Eventueel: counter-argument + weerlegging.\n\n**3. Conclusion** (1 alinea):\n• Hervat thesis (anders geformuleerd).\n• Samenvatting kern-argumenten.\n• Slot: bredere implicatie of oproep.\n\n**Voorbeeld-thesis-statement**:\n• Zwak: 'Social media is bad.'\n• Sterk: 'Although social media offers connection, its negative impact on teenage mental health outweighs the benefits, requiring stricter age restrictions.'\n• Goede thesis: **specifiek + omstreden + onderbouwbaar**.\n\n**Connector-zinnen** (cruciaal):\n\n**Toevoegen**:\n• Furthermore, moreover, in addition, additionally.\n• Also, besides.\n\n**Contrast / tegenstelling**:\n• However, nevertheless, on the other hand, in contrast.\n• Although, even though, despite, in spite of.\n• Whereas, while.\n\n**Gevolg**:\n• Therefore, thus, consequently, as a result, hence.\n• Accordingly, so.\n\n**Voorbeeld**:\n• For example, for instance, to illustrate, such as.\n• Namely, specifically.\n\n**Tijd-volgorde**:\n• First(ly), second(ly), then, next, finally.\n• Subsequently, eventually.\n\n**Conclusie**:\n• In conclusion, to conclude, in summary, ultimately.\n• All things considered.\n\n**Voorbeeld-paragraaf** (over sociale media-debat):\n\n*One of the strongest arguments for restricting social media use among teenagers is the documented impact on mental health. Studies by Jonathan Haidt (2024) and others have shown that teenagers who spend more than three hours daily on platforms like Instagram and TikTok are significantly more likely to experience anxiety and depression. This correlation, while not necessarily causation, is supported by the timing of the mental health crisis, which began around 2010 when smartphone use became widespread. Furthermore, the algorithmic nature of these platforms exploits psychological vulnerabilities, particularly in developing brains. Therefore, if we value adolescent well-being, restrictions seem justified.*\n\n**Stijl-tips**:\n\n**Formal vs informal**:\n• Geen contracties: 'do not' ipv 'don't', 'I am' ipv 'I'm'.\n• Geen 'I think' / 'in my opinion' — laat argument spreken (behalve in echt opinion piece).\n• Geen colloquial: 'kids' → 'children', 'a lot of' → 'many', 'stuff' → 'matters'.\n• Vermijd vragen aan lezer (tenzij retorisch + bewust).\n\n**Voorkom**:\n• **Repetition**: gebruik synoniemen + variatie.\n• **Vague statements**: 'people say...' — wie?\n• **Generalisations**: 'all teenagers...' — overdrijven verzwakt.\n• **Tangential points**: blijf bij hoofdpunt.\n\n**Voor goed Engels essay**:\n• **Specific examples** versterken argument enorm.\n• **Data + sources** indien mogelijk.\n• **Counter-argument** erkennen + weerleggen (toont volwassen denken).\n• **Active voice** > passive ('Researchers found' > 'It was found').\n• **Specific verbs**: 'analyse, examine, demonstrate, illustrate' > 'show, say'.\n\n**Lengte HAVO/VWO**:\n• HAVO: ~250-300 woorden.\n• VWO: ~350-400 woorden.\n• Te kort: niet voldoende onderbouwd.\n• Te lang: gevuld zonder dikke kern.\n\n**Veelgemaakte fouten**:\n• **Wishy-washy thesis**: 'There are good and bad sides to social media.' (te neutraal — geen positie).\n• **No counter-argument**: zwakke essay leest één-zijdig.\n• **Repetition** van thesis in elke alinea.\n• **No flow**: alinea's lijken losgelaten paragrafen ipv argument-keten.\n• **Plagiarism**: AI-tools maken makkelijker → strafs voor onder andere examencommissies.",
    checks: [
      {
        q: "Goede **thesis-statement** is:",
        options: ["Specifiek + omstreden + onderbouwbaar","Algemeen + neutraal","Lang + ingewikkeld","Vraag aan lezer"],
        answer: 0,
        wrongHints: [null, "Zwak.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Drie criteria", tekst: "**Sterke thesis**:\n• **Specifiek**: niet 'social media is bad' maar 'Instagram increases anxiety in teen girls due to algorithmic body-comparison'.\n• **Omstreden**: mensen zouden ander mening kunnen hebben (anders is het feit, geen essay).\n• **Onderbouwbaar**: jij hebt bewijs/argumenten.\n\n**Plaatsing**: einde inleiding-alinea. Vaak 1 zin." }],
          niveaus: { basis: "3 criteria. A.", simpeler: "Thesis = specifiek+omstreden = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'Furthermore'** is een connector voor:",
        options: ["Toevoegen","Contrast","Gevolg","Tijd"],
        answer: 0,
        wrongHints: [null, "Niet — however.", "Niet — therefore.", "Niet — then."],
        uitlegPad: {
          stappen: [{ titel: "Adding", tekst: "**Furthermore** = bovendien, daarnaast. Voor het toevoegen van argument. Synoniemen: moreover, in addition, additionally. Tegenstelling: however, nevertheless. Gevolg: therefore, consequently. Variatie in connectors = beter Engels." }],
          niveaus: { basis: "Toevoegen. A.", simpeler: "Furthermore = + = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat moet je **vermijden** in formele essay?",
        options: ["Contractions (don't, I'm)","Topic sentences","Connector-zinnen","Voorbeelden"],
        answer: 0,
        wrongHints: [null, "Niet — wel gebruiken.", "Niet — wel gebruiken.", "Niet — wel gebruiken."],
        uitlegPad: {
          stappen: [{ titel: "Formele stijl", tekst: "**Contractions** (samentrekkingen 'don't, I'm, won't, it's') zijn **informeel** — vermijden in academische essays. Gebruik volledig: 'do not, I am, will not, it is'. Ook vermijden: spreektaal ('kids, a lot of, stuff'), persoonlijke uitspraken ('I think' in argumentative — laat argument spreken), retorische vragen (sparingly)." }],
          niveaus: { basis: "Contractions. A.", simpeler: "don't = vermijden = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Active voice** is beter dan passive omdat:",
        options: ["Directer + sterker","Korter","Engelser","Geen verschil"],
        answer: 0,
        wrongHints: [null, "Klopt deels maar primair direct.", "Niet — beide bestaan.", "Wel verschil."],
        uitlegPad: {
          stappen: [{ titel: "Voorbeeld", tekst: "**Active** (sterk): 'Researchers found that social media affects mental health.'\n**Passive** (zwakker): 'It was found by researchers that mental health is affected by social media.'\n\nActive is **directer + korter + duidelijker** wie doet wat. Passive heeft plaats (bv. wetenschappelijk gerelateerd, of als doel = focus) maar **niet als default**. Engelse stijlgidsen (Strunk + White) verdedigen active." }],
          niveaus: { basis: "Direct. A.", simpeler: "Active = direct = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**HAVO essay-lengte** SE:",
        options: ["~250-300 woorden","~50 woorden","~1000 woorden","Geen limiet"],
        answer: 0,
        wrongHints: [null, "Veel te kort.", "Te lang.", "Wel verwachting."],
        uitlegPad: {
          stappen: [{ titel: "Concreet beperkt", tekst: "**HAVO**: ~250-300 woorden. **VWO**: ~350-400 woorden. Korter = onvoldoende uitwerking, langer = padding. School-specifiek verschilt licht. **Plan: 4 alinea's** met intro + 2-3 argumenten + conclusie. Per alinea ~60-80 woorden." }],
          niveaus: { basis: "250-300. A.", simpeler: "HAVO = 300w = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Spreekvaardigheid ─────────────────────────────────
  {
    title: "Spreekvaardigheid Engels",
    explanation:
      "**Spreekvaardigheid** wordt op SE getoetst. Vaak 2 vormen:\n\n**Monoloog** (gesprek-eerste): leerling spreekt zelfstandig over thema. 3-5 min.\n**Dialoog**: gesprek met examinator over thema's. ~10 min.\n\n**Veel-voorkomende thema's**:\n• Eigen toekomst (studie, beroep, dromen).\n• Cultuur + media (boek, film, serie, muziek).\n• Maatschappij (klimaat, technologie, migratie, gender).\n• Nederland (typische cultuur uitleggen).\n• Internationale onderwerpen.\n• Eigen interesses + hobby's.\n\n**Beoordeling**:\n• **Inhoud**: relevantie, diepgang, structuur.\n• **Taalbeheersing**: woordkeus, grammatica, vloeiendheid.\n• **Uitspraak**: helderheid, intonatie.\n• **Interactie**: bij dialoog — reageren, vragen, doorgaan.\n\n**Strategieën**:\n\n**1. Niet uit hoofd leren**:\n• Examinator merkt het.\n• Examen kan zijwegen gaan — voorbereide tekst wordt vastlopend.\n• Wel: **structuur + woordenschat-zinnen** voorbereiden.\n\n**2. Speech-fillers**:\nWanneer je tijd nodig hebt:\n• 'Well, let me think...'\n• 'That's an interesting question...'\n• 'I would say that...'\n• 'You know, I believe...'\n• 'Actually, ...'\n\n**3. Paraphrasing**:\nAls je woord niet weet:\n• 'It's like a... [omschrijving]'.\n• 'It's similar to ...'\n• 'I can't remember the exact word but...'\n• 'In Dutch we say... I think in English it would be...'\n\n**4. Mening uitdrukken**:\n• 'In my opinion, ...'\n• 'I believe / I think / I feel that...'\n• 'It seems to me that...'\n• 'From my perspective, ...'\n\n**5. Eens / oneens**:\n• Eens: 'I agree with you', 'That's a good point', 'Exactly!', 'Absolutely'.\n• Oneens (beleefd): 'I see your point, but...', 'However, I think...', 'I'm not sure I agree...'\n\n**6. Vragen stellen**:\n• 'What do you think about ...?'\n• 'Could you tell me more about ...?'\n• 'Why do you say that?'\n• 'How would you describe ...?'\n\n**Uitspraak-tips**:\n• **Th-klanken**: th in 'think, three, throw' (stemloos) vs 'this, that, the' (stemloos). NL'ers verwarren vaak met 'd' of 's'.\n• **W vs V**: 'wine' (W = halfklinker) vs 'vine' (V = stemhebbende fricatief). NL'ers verwisselen.\n• **Stemloze + stemhebbende eind-medeklinkers**: 'bed' (d stemhebbend) vs 'bet' (t stemloos). NL maakt deze t aan eind woord = klassieke fout.\n• **Klemtoon op juiste lettergreep**: 'PHOtograph, phoTOgrapher, photoGRAPHic'. Verandert per vorm.\n\n**Klinkers waar NL'ers struikelen**:\n• **i:** (lang, in 'bee, see') vs **ɪ** (kort, in 'bit, sit'). 'Sheet' ≠ 'shit' — uitspraak cruciaal!\n• **æ** (in 'cat, hat') — bestaat niet in NL, klink-tussen-a-en-e.\n• **ə** (schwa, in 'about, sofa') — onbeklemtoonde klinker, vaak ingeslikt.\n\n**Intonatie**:\n• Engelse intonatie meer dan NL.\n• Vraag-zinnen stijgen aan eind (yes-no vragen).\n• Statements dalen.\n• Belang van **vloeiende** spraak boven perfecte.\n\n**Veelgemaakte fouten** spreektaal:\n• 'How looks she?' → 'How does she look?'\n• 'I have seen her yesterday' → 'I saw her yesterday' (past simple, niet present perfect bij specifieke tijd).\n• 'Make a question' → 'ask a question'.\n• 'On the foto' → 'in the photo'.\n• 'In the weekend' → 'at the weekend' (UK) / 'on the weekend' (VS).\n• 'Last weekend was nice' → vermijd Nederlands letterlijk vertalen.\n\n**Voorbereiding**:\n• Lees Engelstalig nieuws regelmatig (BBC, Guardian, NYT).\n• Kijk Engelstalige series ZONDER ondertitels (of Engelse ondertitels).\n• Luister naar podcasts.\n• Spreek hardop tegen jezelf — gewoon doen.\n• Spreek met Engelstaligen indien mogelijk.\n• Schrijf NIET uit, oefen wel structuren + key vocabulary.\n\n**Op de examen-dag**:\n• Adem rustig.\n• Glimlach (klinkt door in stem).\n• Maak oogcontact (in fysiek examen).\n• Spreek niet te snel.\n• Maak gebruik van speech-fillers bij vastlopen.\n• Beter een goed onderwerp uitwerken dan veel onderwerpen oppervlakkig.",
    checks: [
      {
        q: "Welke is een goede **speech filler** (tijd-koper)?",
        options: ["'Well, let me think...'","'Eh euh euh...'","Stil zwijgen","Praten zonder pauze"],
        answer: 0,
        wrongHints: [null, "Niet — slordig.", "Niet — examinator wacht.", "Niet — fouten worden meer."],
        uitlegPad: {
          stappen: [{ titel: "Vloeiend pauzeren", tekst: "**Goede speech fillers** (Engels):\n• 'Well, let me think for a moment...'\n• 'That's a really interesting question.'\n• 'You know, I would say that...'\n• 'Actually, I believe...'\n• 'Hmm, in my opinion...'\n\nGeeft je tijd om te denken zonder onhandige stilte. Vermijd NL 'eh euh' (klinkt onzeker). Beter rustig + bewust pauzeren met deze zinnen." }],
          niveaus: { basis: "Well let me think. A.", simpeler: "Speech filler = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **fout** Engels?",
        options: ["'I have seen her yesterday'","I saw her yesterday","I have seen her","I will see her tomorrow"],
        answer: 0,
        wrongHints: [null, "Correct.", "Correct.", "Correct."],
        uitlegPad: {
          stappen: [{ titel: "Past simple bij specifieke tijd", tekst: "**Fout**: 'I have seen her yesterday'. Reden: **'yesterday' is specifieke tijd in verleden** → vereist past simple, niet present perfect. Correct: **'I saw her yesterday'**.\n\nRegel: present perfect bij **onbepaalde tijd** ('I have seen her') of voor doorgaand effect. Past simple bij **specifieke tijd**. Cito-klassieker — NL'ers verwarren vaak." }],
          niveaus: { basis: "Have seen yesterday. A.", simpeler: "PP+yesterday=fout = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Th-klank in 'think' is:",
        options: ["Stemloos (tongtip tussen tanden)","Stemhebbend","Niet bestaand","Gelijk aan 's'"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 'this'.", "Bestaat wel.", "Anders dan s."],
        uitlegPad: {
          stappen: [{ titel: "Twee th-klanken", tekst: "**Engels heeft 2 th-klanken**:\n• **Stemloos** (zoals 'think, three, throw, mouth, tooth'): tongtip tussen tanden, **geen stem** — alleen lucht. /θ/.\n• **Stemhebbend** (zoals 'this, that, mother, father, breathe'): zelfde positie maar **met stem** — trilling. /ð/.\n\nNL'ers vervangen vaak met 'd' (denken voor think) of 's' (sink voor think) — fout. Oefenen: tongtip tussen tanden + verschil voelen tussen lucht-alleen en stem." }],
          niveaus: { basis: "Stemloos. A.", simpeler: "Think = stemloos = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat moet je **vermijden** in spreek-examen?",
        options: ["Uit hoofd leren tekst","Speech-fillers","Vragen stellen","Voorbeelden"],
        answer: 0,
        wrongHints: [null, "Wel doen.", "Wel doen.", "Wel doen."],
        uitlegPad: {
          stappen: [{ titel: "Examinator merkt het", tekst: "**Niet** uit hoofd leren tekst. Examinator merkt aan: vlotte vloed zonder pauze + onnatuurlijke stijl + vastlopen als zijweg ontstaat. **Wel doen**:\n• Structuur + outline voorbereiden.\n• Key vocabulary leren.\n• Voorbeelden + verhalen achter de hand.\n• Speech-fillers oefenen.\n• Hardop oefenen tegen jezelf of vriend.\n\nDoel: **natuurlijk klinkende, doordachte gesproken Engels**." }],
          niveaus: { basis: "Uit hoofd. A.", simpeler: "Niet uit hoofd = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **beleefde manier** om oneens te zijn?",
        options: ["'I see your point, but I think...'","'You're wrong'","'That's stupid'","'No'"],
        answer: 0,
        wrongHints: [null, "Onbeleefd.", "Onbeleefd.", "Te kort + onbeleefd."],
        uitlegPad: {
          stappen: [{ titel: "Diplomatisch oneens", tekst: "**Beleefde oneens-zinnen**:\n• 'I see your point, but I think...'\n• 'That's an interesting perspective, however...'\n• 'I understand what you mean, although...'\n• 'I'm not entirely sure I agree...'\n• 'There might be another way to look at it...'\n\nDirecte ('You're wrong') komt hard over — toont onvolwassenheid. **Diplomatie** = goed Engels-vaardigheidsteken bij examen. Erkenning andere standpunt versterkt eigen positie." }],
          niveaus: { basis: "I see your point. A.", simpeler: "Beleefd oneens = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — schrijven + spreken mix",
    explanation:
      "Mix van schrijfvaardigheid + spreekvaardigheid + grammatica + woordkeus.\n\nVeel succes!",
    checks: [
      {
        q: "Welke is **correct Engels**?",
        options: ["She works hard","She work hard","She is work hard","She does work hard"],
        answer: 0,
        wrongHints: [null, "Niet — 3e p ev = -s.", "Niet zinvol.", "Wel mogelijk maar emphatic, niet standaard."],
        uitlegPad: {
          stappen: [{ titel: "3e p ev = -s", tekst: "**She works hard** — 3e persoon enkelvoud present simple krijgt **-s** aan einde werkwoord. 'She work hard' is fout. 'She does work hard' is grammaticaal correct maar **emphatic** (nadruk: ze werkt wèl hard, in tegenstelling tot ...) — niet de neutrale standaardvorm." }],
          niveaus: { basis: "Works. A.", simpeler: "She works = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'Yours sincerely'** komt na:",
        options: ["Dear Mr Smith / Dear Ms Johnson","Dear Sir or Madam","Best regards","Hi"],
        answer: 0,
        wrongHints: [null, "Niet — bij faithfully.", "Niet — afsluiting zelf.", "Niet — informeel."],
        uitlegPad: {
          stappen: [{ titel: "Sincerely + specifieke naam", tekst: "**'Yours sincerely'** = afsluiting wanneer je naam ontvanger weet ('Dear Mr Smith'). **'Yours faithfully'** = bij onbekende naam ('Dear Sir or Madam'). Memo: 'sir = faithfully' (beide starten met 's' verschilling onthouden), 'name = sincerely' (beide 's')." }],
          niveaus: { basis: "Naam bekend. A.", simpeler: "Sincerely = naam = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'It's important TO ___'** — wat volgt?",
        options: ["Infinitief (study, work, etc.)","Gerund (-ing)","Past simple","Past participle"],
        answer: 0,
        wrongHints: [null, "Niet — 'to' is infinitief-marker.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "TO + infinitief", tekst: "**'It's important TO study'** — 'to' als infinitief-marker volgt door **bare infinitive** (eerste vorm werkwoord). Verschil met 'TO + gerund' (waar 'to' voorzetsel is): 'I look forward TO studying' (here gerund). Truc: vervangbaar door noun (NL 'studeren') → infinitief. Vervangbaar door 'this' (NL 'dit') → gerund." }],
          niveaus: { basis: "Infinitief. A.", simpeler: "Important to + inf = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'My CV is ___ (attach)'** — welke vorm?",
        options: ["attached","attaching","to attach","attach"],
        answer: 0,
        wrongHints: [null, "Niet — passieve toestand.", "Niet — niet doel.", "Niet — verbuigd."],
        uitlegPad: {
          stappen: [{ titel: "Passief past participle", tekst: "**'My CV is attached'** = passief: CV wordt **bijgevoegd** (door iemand/iets). Past participle (3e vorm) = 'attached'. Volledig: 'My CV is attached to this email'. Of formeler: 'Please find my CV attached'." }],
          niveaus: { basis: "Attached. A.", simpeler: "Is attached = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **spreekexamen** beoordeling kijkt examinator naar:",
        options: ["Inhoud + taal + uitspraak + interactie","Alleen woordenaantal","Alleen accent","Alleen grammatica"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet primair.", "Wel maar onvolledig."],
        uitlegPad: {
          stappen: [{ titel: "Vier hoofd-criteria", tekst: "**Spreekexamen** beoordeling:\n• **Inhoud**: relevantie, diepgang, voorbeelden, structuur.\n• **Taalbeheersing**: woordkeus, grammatica, vloeiendheid.\n• **Uitspraak**: helderheid, intonatie (niet perfect accent).\n• **Interactie**: bij dialoog — reageren, vragen, dialoog opbouwen.\n\nMatched score per criterium. Goede balans belangrijker dan exceleren op één punt." }],
          niveaus: { basis: "4 criteria. A.", simpeler: "Inhoud+taal+uitspr+inter = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const engelsSchrijvenSprekenHavoVwo = {
  id: "engels-schrijven-spreken-havo-vwo",
  title: "Engels schrijven + spreken (HAVO/VWO SE)",
  emoji: "✍️",
  level: "havo4-5-vwo",
  subject: "engels",
  referentieNiveau: "havo-B1+-vwo-B2",
  sloThema: "Engels HAVO/VWO — SE schrijfvaardigheid + spreekvaardigheid",
  prerequisites: [
    { id: "engels-cse-havo-vwo", title: "Engels CSE leesvaardigheid", niveau: "havo4-5-vwo" },
    { id: "present-tenses-engels", title: "Present tenses", niveau: "klas2-3" },
    { id: "past-tenses-engels", title: "Past tenses", niveau: "klas2-3" },
    { id: "conditionals-engels", title: "Conditionals", niveau: "klas3-4" },
  ],
  intro:
    "Engels schrijven + spreken HAVO/VWO SE (kernvak, gemiddeld met CSE). Schrijfvaardigheid (tijden + articles + conditionals + NL-fouten), email + formele brief (Dear Sir/Madam → faithfully, Dear Mr → sincerely, sollicitatie-template), essay + opinie (thesis-statement + connectors + actief vs passief), spreekvaardigheid (speech fillers + paraphrasing + th-klanken + intonatie). Voor SE-onderdelen, niet CSE. ~15-20 min.",
  triggerKeywords: [
    "Engels schrijven", "Engels spreken",
    "writing", "speaking",
    "Engels SE",
    "present simple", "present perfect",
    "past simple", "conditional",
    "cover letter", "sollicitatie",
    "formal letter", "email Engels",
    "Dear Sir Madam", "Yours faithfully",
    "Dear Mr Smith", "Yours sincerely",
    "thesis statement",
    "essay structure",
    "connector words", "furthermore", "however", "therefore",
    "topic sentence",
    "active voice", "passive voice",
    "speech fillers",
    "paraphrasing",
    "agreeing disagreeing English",
    "th-klank", "th sound",
    "Engels uitspraak", "pronunciation",
    "intonation",
    "Engels grammatica",
  ],
  chapters,
  steps,
};

export default engelsSchrijvenSprekenHavoVwo;
