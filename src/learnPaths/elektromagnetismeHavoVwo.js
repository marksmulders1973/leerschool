// Leerpad: Elektromagnetisme — HAVO/VWO Natuurkunde
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Magnetisch veld, Lorentzkracht,
// inductie (Faraday), transformator + wisselstroom. VWO-extra: zelfinductie.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🧲", "⚡", "🔄", "🔌", "🏆"];

const chapters = [
  { letter: "A", title: "Magnetisch veld", emoji: "🧲", from: 0, to: 0 },
  { letter: "B", title: "Lorentzkracht", emoji: "⚡", from: 1, to: 1 },
  { letter: "C", title: "Inductie (Faraday)", emoji: "🔄", from: 2, to: 2 },
  { letter: "D", title: "Transformator + wisselstroom", emoji: "🔌", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (incl. VWO-stof)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Magnetisch veld ───────────────────────────────────
  {
    title: "Magnetisch veld B — bron + richting",
    explanation:
      "**Magnetisch veld B** (tesla, T) is een vectorveld rond magneten + stroomdraden.\n\n**Bronnen**:\n• **Permanente magneet** (ijzer, neodymium): N- en Z-pool, veldlijnen lopen buiten van N naar Z.\n• **Stroomvoerende draad**: veldlijnen vormen cirkels rondom de draad (rechterhandregel: duim langs stroom-richting, vingers wijzen veld-richting).\n• **Spoel** (solenoïde): veld lijkt op staafmagneet — vlak veld in de spoel, divergerend buiten.\n• **Aarde**: zwak veld (~50 μT), geografische N-pool is magnetisch Z-pool (daarom wijst kompas-N naar geografisch N).\n\n**Veldlijnen**:\n• Beginnen op N, eindigen op Z (buiten magneet).\n• Snijden elkaar nooit.\n• Hoge dichtheid = sterk veld.\n• Tangent aan een veldlijn = richting van B.\n\n**Eenheid**: B in tesla (T). 1 T is sterk; aarde-veld ≈ 50 μT = 50·10⁻⁶ T. MRI-scanner ~1-3 T.\n\n**Magnetische flux Φ**:\n• Φ = B · A · cos(α), met A = oppervlak en α = hoek tussen B en normaal van A.\n• Eenheid: weber (Wb) = T·m².\n• Belangrijk voor inductie (stap C).\n\n**Rechterhandregel voor spoel**:\n• Vingers wijzen stroom-richting (rondom).\n• Duim wijst noordpool van spoel.\n\n**Twee permanente magneten**:\n• Gelijke polen stoten elkaar af (N-N of Z-Z).\n• Ongelijke polen trekken elkaar aan (N-Z).",
    checks: [
      {
        q: "Twee staafmagneten met **N-pool naar N-pool** doen elkaar:",
        options: ["Afstoten", "Aantrekken", "Niks", "Pas bij contact aantrekken"],
        answer: 0,
        wrongHints: [null, "Niet — gelijke polen trekken niet aan.", "Niet — er is wel een kracht.", "Niet — werkt ook op afstand."],
        uitlegPad: {
          stappen: [{ titel: "Gelijke polen = afstoten", tekst: "Net als positieve ladingen elkaar afstoten, doen N-N en Z-Z polen dat ook. Alleen N-Z trekt aan. Onthoud: tegenpolen trekken." }],
          niveaus: { basis: "N-N = afstoten. A.", simpeler: "Gelijke polen botsen tegen elkaar weg. A.", nogSimpeler: "Afstoten = A." },
        },
      },
      {
        q: "Veldlijnen van een staafmagneet lopen **buiten** de magneet:",
        options: ["Van N naar Z", "Van Z naar N", "Beide kanten op", "Geen richting"],
        answer: 0,
        wrongHints: [null, "Niet — dat is binnen de magneet.", "Niet — veldlijnen hebben een eenduidige richting.", "Niet — ze hebben wel richting."],
        uitlegPad: {
          stappen: [{ titel: "Conventie: N → Z (buiten)", tekst: "Buiten een magneet lopen veldlijnen van N naar Z. Binnen lopen ze juist van Z naar N → samen sluiten ze tot een gesloten lus. Magnetische veldlijnen zijn altijd gesloten (geen 'monopolen')." }],
          theorie: "Een kompas-naald oriëntatie is een mini-magneet: de NOORD-zoekende pool wijst de magnetische Z-pool van de aarde aan (= geografisch noord, jaja, verwarrend).",
          niveaus: { basis: "Buiten: N → Z. A.", simpeler: "Veldlijnen buiten lopen van noord naar zuid. A.", nogSimpeler: "N → Z = A." },
        },
      },
      {
        q: "Een **stroomvoerende rechte draad**: hoe lopen de magnetische veldlijnen?",
        options: [
          "In cirkels rondom de draad",
          "Recht weg van de draad",
          "Parallel aan de draad",
          "Er is geen veld"
        ],
        answer: 0,
        wrongHints: [null, "Niet — radiaal weg-veld is een elektrisch veld van punt-lading.", "Niet — veld is loodrecht op draad.", "Onjuist — stroom geeft altijd magnetisch veld."],
        uitlegPad: {
          stappen: [{ titel: "Rechterhandregel — duim langs I", tekst: "Wijs je rechter duim in de stroom-richting; je gevouwen vingers wijzen de richting van B aan (cirkels rondom de draad). Dichter bij de draad = sterker veld (B ~ 1/r)." }],
          theorie: "Ontdekt door Oersted 1820 — kompas naast draad sloeg uit toen stroom werd ingeschakeld. Eerste link tussen elektriciteit + magnetisme.",
          niveaus: { basis: "Cirkels rond draad. A.", simpeler: "Veldlijnen lopen ringen rond de draad. A.", nogSimpeler: "Cirkels = A." },
        },
      },
      {
        q: "Eenheid van magnetische flux Φ?",
        options: ["Weber (Wb)", "Tesla (T)", "Volt (V)", "Ampère (A)"],
        answer: 0,
        wrongHints: [null, "Niet — tesla is B-veld, niet flux.", "Niet — V is spanning.", "Niet — A is stroom."],
        uitlegPad: {
          stappen: [{ titel: "Φ = B · A", tekst: "Magnetische flux Φ telt 'hoeveel veldlijnen door een oppervlak gaan'. Eenheid: weber (Wb) = tesla × m². B = Φ/A → eenheid tesla = Wb/m²." }],
          theorie: "Flux is cruciaal voor inductie: een veranderende flux wekt spanning op (Faraday).",
          niveaus: { basis: "Flux in Wb. A.", simpeler: "Wb = T × m² = flux-eenheid. A.", nogSimpeler: "Weber = A." },
        },
      },
      {
        q: "Hoe versterk je het magnetisch veld in een **spoel** (geen kern-wijziging)?",
        options: [
          "Meer windingen + meer stroom",
          "Spoel langer maken bij vaste windingen",
          "Draad dunner maken",
          "Spoel buiten een elektrisch veld plaatsen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — bij vaste N: langer = veld zwakker (verdunde N/L).", "Niet — dunnere draad heeft hogere weerstand, lagere I.", "Niet — elektrisch veld doet niets voor B."],
        uitlegPad: {
          stappen: [{ titel: "B_spoel = μ₀·n·I", tekst: "Met n = N/L (windingen per meter). Meer N (bij vaste L) → hogere n → sterker veld. Meer I → ook sterker. Toevoegen ijzer-kern multipliceert nog eens met μ_r (kan factor 1000)." }],
          niveaus: { basis: "Meer N + meer I = sterker. A.", simpeler: "Veel windingen en veel stroom → sterk magneetveld. A.", nogSimpeler: "N + I op = A." },
        },
      },
    ],
  },

  // ─── B. Lorentzkracht ─────────────────────────────────────
  {
    title: "Lorentzkracht — F = q·v·B (puntlading) + F = B·I·L (draad)",
    explanation:
      "Een **bewegende lading** in een magnetisch veld voelt een kracht — de **Lorentzkracht**.\n\n**Lorentz op puntlading**: **F = q · v · B · sin(α)**\n• α = hoek tussen v en B. Bij v // B: geen kracht. Bij v ⊥ B: maximale kracht.\n• Richting: rechterhandregel of FBI-regel — F (vingers), B (handvlak), I/v (duim) voor positieve lading.\n• Negatieve lading: tegenovergestelde richting.\n\n**Bijzonder gevolg**: een geladen deeltje loodrecht op B beweegt in een **cirkel** (Lorentzkracht = centripetaal). Straal: r = m·v / (q·B). Massaspectrometers + cyclotrons gebruiken dit.\n\n**Lorentz op stroomdraad**: **F = B · I · L · sin(α)**\n• I = stroom, L = lengte in veld.\n• Loodrecht (α = 90°): F = B·I·L.\n• Toepassing: elektromotor.\n\n**FBI- of rechterhandregel** voor stroomdraad:\n• B-veld richting (vingers), I-stroom (duim, langs stroom), F-richting (handvlak duwt).\n\n**Polariteit-omkeer**:\n• Omkeren stroom → kracht omgekeerd.\n• Omkeren veld → kracht omgekeerd.\n• Beide omkeren → kracht gelijk.\n\n**Praktijk**:\n• **Elektromotor**: spoel in B-veld, stroom → koppel → draaiing. Stroom omkeren elke halve omwenteling via commutator.\n• **CRT-monitor** (oud): kathodestraal afgebogen door B-veld voor scherm-positie.\n• **Massaspectrometer**: deeltjes met andere m/q maken andere cirkel-straal.",
    checks: [
      {
        q: "Een **elektron** beweegt loodrecht door een B-veld. De Lorentzkracht is:",
        options: [
          "Maximaal en loodrecht op zowel v als B",
          "Maximaal en parallel aan v",
          "Nul (elektron is negatief)",
          "Parallel aan B"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kracht is altijd loodrecht op v.", "Niet — negatief draait richting om, maar grootte blijft.", "Niet — F staat loodrecht op B."],
        uitlegPad: {
          stappen: [{ titel: "F ⊥ v én F ⊥ B", tekst: "De Lorentzkracht staat altijd loodrecht op zowel snelheid als veld. Daarom verandert de kracht alleen de **richting** van het deeltje (cirkelbeweging), niet de **grootte** van v. Geen arbeid → kinetische energie blijft constant." }],
          niveaus: { basis: "F ⊥ v ⊥ B. A.", simpeler: "Loodrecht op alles → cirkelbeweging. A.", nogSimpeler: "Loodrecht = A." },
        },
      },
      {
        q: "Een proton met v = 2,0·10⁶ m/s, q = 1,6·10⁻¹⁹ C, in B = 0,50 T (loodrecht). Kracht?",
        options: ["1,6·10⁻¹³ N", "1,6·10⁻⁷ N", "3,2·10⁻⁶ N", "Te weinig info"],
        answer: 0,
        wrongHints: [null, "Niet — let op machten van 10.", "Niet — controleer formule.", "Wel genoeg info."],
        uitlegPad: {
          stappen: [
            { titel: "F = q·v·B", tekst: "F = 1,6·10⁻¹⁹ · 2,0·10⁶ · 0,50 = 1,6·10⁻¹³ N. Klein in absoluut, maar enorm versnelt het 1,67·10⁻²⁷ kg proton: a = F/m ≈ 10¹⁴ m/s²." },
          ],
          niveaus: { basis: "F = qvB = 1,6·10⁻¹³ N. A.", simpeler: "Vermenigvuldig: lading × snelheid × veld. A.", nogSimpeler: "1,6·10⁻¹³ = A." },
        },
      },
      {
        q: "Een draad van 0,40 m draagt I = 3,0 A loodrecht door B = 0,20 T. F op draad?",
        options: ["0,24 N", "2,4 N", "0,024 N", "1,5 N"],
        answer: 0,
        wrongHints: [null, "Niet — controleer eenheden.", "Te klein.", "Niet — formule is F=BIL, geen optellen."],
        uitlegPad: {
          stappen: [{ titel: "F = B·I·L", tekst: "F = 0,20 · 3,0 · 0,40 = **0,24 N**. Vergeet sin(α) niet wanneer hoek niet 90° is — hier wel." }],
          theorie: "Elektromotor-rotorprincipe: spoel in B-veld, F op zijdes geven koppel. Sterk veld + dikke draad (hoge I) + veel windingen = krachtige motor.",
          niveaus: { basis: "F = 0,2·3·0,4 = 0,24. A.", simpeler: "Vermenigvuldig BIL = 0,24 N. A.", nogSimpeler: "0,24 = A." },
        },
      },
      {
        q: "In een **cyclotron** beweegt een deeltje in een cirkel. De straal hangt af van:",
        options: [
          "Massa, snelheid, lading én B-sterkte",
          "Alleen de B-sterkte",
          "Alleen lading + snelheid",
          "Alleen massa"
        ],
        answer: 0,
        wrongHints: [null, "Onvolledig.", "Onvolledig.", "Niets dan massa is fout."],
        uitlegPad: {
          stappen: [{ titel: "r = mv/(qB)", tekst: "Lorentzkracht = centripetaal: qvB = mv²/r → **r = mv/(qB)**. Zwaarder of sneller → grotere cirkel; sterker veld of meer lading → kleinere cirkel. Massa-spectrometer scheidt isotopen via verschillende r." }],
          niveaus: { basis: "r = mv/(qB). A.", simpeler: "Vier grootheden bepalen r. A.", nogSimpeler: "Alle 4 = A." },
        },
      },
      {
        q: "Wanneer **draait een elektromotor om** als je een eenvoudige spoel gebruikt?",
        options: [
          "Stroomrichting omkeren, of veld-richting omkeren (één van beide)",
          "Spoel sneller laten draaien",
          "Magneten dichter bij zetten",
          "Spoel zwaarder maken"
        ],
        answer: 0,
        wrongHints: [null, "Niet — sneller draait door, geen omkering.", "Niet — sterker veld, geen omkering.", "Niet — massa irrelevant."],
        uitlegPad: {
          stappen: [{ titel: "F = B·I·L — omkeren I of B → omkeren F", tekst: "Lorentzkracht-richting volgt FBI-regel. Omkeren van stroom OF veld geeft tegenovergestelde kracht → omgekeerd koppel → motor draait andere kant op. Beide omkeren: zelfde richting." }],
          niveaus: { basis: "I omkeren of B omkeren. A.", simpeler: "Stroom-richting of magneet-pool omdraaien. A.", nogSimpeler: "I of B → A." },
        },
      },
    ],
  },

  // ─── C. Inductie (Faraday) ────────────────────────────────
  {
    title: "Inductie — Faraday's wet",
    explanation:
      "**Inductie**: een **veranderende magnetische flux** door een geleider wekt een **inductie-spanning** (EMK) op. Basis van bijna alle elektriciteits-opwekking ter wereld.\n\n**Faraday's wet**: U_ind = −N · dΦ/dt\n• N = aantal windingen.\n• dΦ/dt = snelheid-van-flux-verandering (Wb/s).\n• Minteken (Lenz): inductie-stroom werkt de oorzaak **tegen** (energiebehoud).\n\n**Drie manieren om Φ te veranderen**:\n1. **B verandert** (sterker/zwakker magneet).\n2. **A verandert** (spoel-oppervlak groter/kleiner).\n3. **Hoek α verandert** (spoel draaien in veld → wisselstroom-generator).\n\n**Lenz' wet**: inductie-stroom maakt een veld dat de oorspronkelijke flux-verandering **tegenwerkt**.\n• Magneet wordt in spoel geduwd → inductie-stroom maakt veld dat magneet afstoot → arbeid kost energie.\n• Magneet weggehaald → inductie-stroom maakt veld dat hem terugtrekt.\n\n**Wisselstroom-generator** (alternator):\n• Spoel draait met hoeksnelheid ω in vast B-veld.\n• U(t) = U_max · sin(ω·t), met U_max = N · B · A · ω.\n• Frequentie = ω/(2π). NL-net: 50 Hz.\n\n**Toepassingen**:\n• Elektriciteitscentrale (kolen/wind/water): turbine → spoel-rotatie → wisselstroom.\n• Inductie-kookplaat: hoog-frequentie wisselveld → wervelstromen in ijzeren pan → warmte.\n• Dynamo op fiets: wieldraait → magneet bij spoel → wisselstroom → lampje.\n• Transformator (volgende stap).\n\n**Examen-valkuilen**:\n• Niet veranderende flux = geen inductie (stilstaande magneet bij stilstaande spoel = niets).\n• Het is de **verandering**, niet de absolute B-waarde, die telt.",
    checks: [
      {
        q: "Een magneet ligt **stil** binnen een spoel. Inductie-stroom?",
        options: ["Nul — flux verandert niet", "Maximum", "Klein maar aanwezig", "Hangt af van magneet-grootte"],
        answer: 0,
        wrongHints: [null, "Niet — geen flux-verandering = geen spanning.", "Niet — nul = nul.", "Maakt niet uit zonder beweging."],
        uitlegPad: {
          stappen: [{ titel: "dΦ/dt = 0 → U = 0", tekst: "Inductie vereist VERANDERING van flux. Magneet stilhouden → flux constant → geen spanning. Begin de magneet te bewegen (of spoel) → er ontstaat spanning." }],
          niveaus: { basis: "Geen verandering → nul. A.", simpeler: "Stilstaand magneet = niets gebeurt. A.", nogSimpeler: "Nul = A." },
        },
      },
      {
        q: "Je duwt een magneet in een spoel. Inductie-stroom maakt een veld dat:",
        options: [
          "De magneet afstoot (Lenz)",
          "De magneet aantrekt",
          "Geen invloed heeft",
          "De spoel verwarmt zonder kracht"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Lenz: tegenwerken.", "Niet — er is wel een kracht.", "Niet — Lenz creëert wel een kracht."],
        uitlegPad: {
          stappen: [{ titel: "Lenz' wet — tegenwerken", tekst: "Bij duwen toe → flux groeit → inductie-stroom maakt **tegenkracht** → spoel werkt als 'magneet met gelijke pool' → afstoten. Bij wegtrekken: spoel trekt magneet terug. Lenz handhaaft energiebehoud (je moet ARBEID leveren tegen de tegenkracht in)." }],
          theorie: "Zonder Lenz' wet zou je gratis energie kunnen oogsten — fysica verbiedt dat.",
          niveaus: { basis: "Lenz: afstoten bij duwen. A.", simpeler: "Spoel duwt magneet weg → kost arbeid → energiebehoud. A.", nogSimpeler: "Afstoten = A." },
        },
      },
      {
        q: "Een spoel heeft N = 100 windingen. Flux verandert met dΦ/dt = 0,020 Wb/s. U_ind?",
        options: ["2,0 V", "0,2 V", "20 V", "200 V"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet N niet.", "Niet — controleer rekensom.", "Te groot."],
        uitlegPad: {
          stappen: [{ titel: "U = N · dΦ/dt", tekst: "U = 100 · 0,020 = **2,0 V** (in absolute waarde — minteken aangeeft richting via Lenz)." }],
          niveaus: { basis: "100 × 0,02 = 2 V. A.", simpeler: "Aantal windingen × snelheid van flux-verandering. A.", nogSimpeler: "2,0 V = A." },
        },
      },
      {
        q: "De fiets-dynamo werkt op:",
        options: [
          "Inductie — wielmagneet draait langs spoel",
          "Lorentzkracht zonder verandering",
          "Statische elektriciteit",
          "Batterij in dynamo"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Lorentz vereist beweging, maar inductie is het mechanisme voor spanning.", "Niet — geen wrijving-vonken.", "Niet — dynamo's hebben geen batterij."],
        uitlegPad: {
          stappen: [{ titel: "Dynamo = mini-generator", tekst: "Het wiel draait een magneet (of spoel) langs een vaste spoel (of magneet). Flux verandert continu → inductie-spanning → wisselstroom → lampje brandt. Sneller fietsen → meer flux-verandering per seconde → hogere spanning → fellere lamp." }],
          niveaus: { basis: "Inductie via bewegende magneet. A.", simpeler: "Wiel draait magneet, spoel voelt flux-verandering. A.", nogSimpeler: "Inductie = A." },
        },
      },
      {
        q: "Een rechthoekige spoel (100 windingen, A = 0,020 m²) in B = 0,50 T draait met ω = 100 rad/s. U_max?",
        options: ["100 V", "1,0 V", "0,10 V", "1000 V"],
        answer: 0,
        wrongHints: [null, "Niet — alle factoren meenemen.", "Te klein.", "Te groot — herreken."],
        uitlegPad: {
          stappen: [
            { titel: "U_max = N·B·A·ω", tekst: "U_max = 100 · 0,50 · 0,020 · 100 = **100 V**. Dat is de piek van de wisselspanning; effectieve waarde U_eff = U_max/√2 ≈ 71 V." },
          ],
          theorie: "Wisselspanning in NL is 230 V effectief, dus piek ~325 V.",
          niveaus: { basis: "U=NBAω=100. A.", simpeler: "Vermenigvuldig alle vier: 100·0,5·0,02·100=100 V. A.", nogSimpeler: "100 V = A." },
        },
      },
    ],
  },

  // ─── D. Transformator + wisselstroom ──────────────────────
  {
    title: "Transformator + wisselstroom",
    explanation:
      "**Wisselstroom** (AC): stroom + spanning veranderen sinusoïdaal in tijd. NL-net: 230 V eff, 50 Hz.\n\n**Effectieve waarden**: U_eff = U_max/√2; I_eff = I_max/√2. Voor vermogen-berekening gebruik je altijd effectieve waarden: P = U_eff · I_eff (bij ohmse belasting).\n\n**Transformator**: gebruikt **wederzijdse inductie** om wisselspanning omhoog of omlaag te zetten.\n\n**Bouw**:\n• Primaire spoel (N_p windingen) op één kant van ijzer-kern.\n• Secundaire spoel (N_s windingen) op andere kant.\n• Ijzer-kern geleidt flux van prim naar sec efficiënt.\n• Werkt **alleen op wisselstroom** (gelijkstroom = geen flux-verandering = niets).\n\n**Hoofdformule** (ideaal): **U_p / U_s = N_p / N_s**\n• Meer windingen aan secundaire → hogere spanning daar (op-trafo).\n• Minder windingen → lagere spanning (neer-trafo).\n\n**Energiebehoud** (ideaal): **P_p = P_s** → **U_p·I_p = U_s·I_s** → I_p/I_s = N_s/N_p.\n• Hoge spanning ↔ lage stroom (en omgekeerd).\n\n**Toepassing — hoogspanningsleiding**:\n• Centrales wekken 10 kV op. Trafo's verhogen naar 150-400 kV voor transport.\n• Hoge U → lage I → lage P_verlies = I²·R in draden.\n• Bij gebruiker omlaag-trafo naar 230 V.\n\n**Niet-ideale trafo**: ~95-99% rendement; verliezen door:\n• Koperverliezen (I²·R in spoelen).\n• IJzerverliezen (wervelstromen + hysteresis in kern).\n\n**Veiligheid**:\n• Aanraakspanning in NL max 50 V (12 V veilig).\n• Daarom: speelgoed via adapter (230 → 12 V).\n• Stroomonderbreker (aardlekschakelaar) detecteert lekstromen >30 mA.",
    checks: [
      {
        q: "Een trafo heeft N_p = 1000 en N_s = 100. Primair 230 V wissel. Secundair?",
        options: ["23 V", "2300 V", "130 V", "0 V"],
        answer: 0,
        wrongHints: [null, "Niet — dat is op-trafo, hier is neer-trafo.", "Niet — controleer formule.", "Niet — trafo werkt op wissel."],
        uitlegPad: {
          stappen: [{ titel: "U_s/U_p = N_s/N_p", tekst: "U_s = U_p · (N_s/N_p) = 230 · (100/1000) = **23 V**. Neer-trafo voor speelgoed/elektronica." }],
          theorie: "Een GS-batterij door een trafo geeft NIETS — geen flux-verandering.",
          niveaus: { basis: "U_s = 230·100/1000 = 23 V. A.", simpeler: "10× minder windingen aan sec → 10× lagere spanning. A.", nogSimpeler: "23 V = A." },
        },
      },
      {
        q: "Een ideale trafo: U_p·I_p = ?",
        options: ["U_s·I_s", "U_s/I_s", "N_p·I_s", "I_p²·R"],
        answer: 0,
        wrongHints: [null, "Niet — dat is geen vermogen.", "Niet — zou wel kunnen, maar verkeerde grootheden.", "Niet — dat is verlies-formule."],
        uitlegPad: {
          stappen: [{ titel: "Energiebehoud", tekst: "Ideale trafo verliest geen energie → P_p = P_s → U_p·I_p = U_s·I_s. Hoge spanning gaat samen met lage stroom (en omgekeerd)." }],
          niveaus: { basis: "P_p = P_s = U_s·I_s. A.", simpeler: "Vermogen in = vermogen uit. A.", nogSimpeler: "= A." },
        },
      },
      {
        q: "Waarom transport elektriciteit op **hoogspanning** (150-400 kV)?",
        options: [
          "Lage stroom → minder warmte-verlies (P=I²R) in draden",
          "Hogere spanning is veiliger",
          "Hogere spanning gaat sneller",
          "Apparaten werken alleen op hoogspanning"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — hoog is gevaarlijker.", "Niet — elektriciteit reist altijd ~lichtsnelheid.", "Niet — apparaten gebruiken 230 V of lager."],
        uitlegPad: {
          stappen: [{ titel: "P_verlies = I²·R", tekst: "Bij vast vermogen P=U·I: hoger U → lagere I. Verlies in draad ~ I² → verdubbel U + halveer I → verlies wordt 4× kleiner. Daarom transporteren we op honderd-duizenden volt." }],
          theorie: "Vóór wissel-stroom + transformatoren (Edison vs Tesla, 1880s) was gelijkstroom standaard — maar GS kan NIET getransformeerd worden, dus dichte centrales nodig. Tesla's AC-systeem won.",
          niveaus: { basis: "Hoog U → laag I → minder verlies. A.", simpeler: "Lage stroom = weinig warmte in draad = energiebesparing. A.", nogSimpeler: "P=I²R minimaliseren = A." },
        },
      },
      {
        q: "NL-net is 230 V effectief, 50 Hz. Piek-spanning?",
        options: ["~325 V", "230 V", "460 V", "115 V"],
        answer: 0,
        wrongHints: [null, "Niet — dat is effectief, niet piek.", "Niet — 2× is te veel.", "Niet — dat is helft."],
        uitlegPad: {
          stappen: [{ titel: "U_max = U_eff · √2", tekst: "U_max = 230 · 1,414 ≈ **325 V**. Op een oscilloscoop zie je een sinus die heen-en-weer slingert tussen +325 en −325 V." }],
          theorie: "Daarom mag in een 230V-stopcontact het isolatie-materiaal niet bij ~325 V doorslaan.",
          niveaus: { basis: "230 · √2 ≈ 325 V. A.", simpeler: "Eff × √2 = piek. A.", nogSimpeler: "325 = A." },
        },
      },
      {
        q: "Werkt een trafo op **gelijkstroom**?",
        options: [
          "Nee — geen flux-verandering, geen inductie",
          "Ja, even goed als op wisselstroom",
          "Alleen bij batterij-spanning hoger dan 100 V",
          "Alleen bij stroom >5 A"
        ],
        answer: 0,
        wrongHints: [null, "Niet — fundamenteel onmogelijk.", "Niet — spanning irrelevant.", "Niet — stroom irrelevant."],
        uitlegPad: {
          stappen: [{ titel: "Inductie vereist dΦ/dt", tekst: "GS geeft constante flux → dΦ/dt = 0 → U_ind = 0. Trafo werkt UITSLUITEND op wisselstroom. Daarom hebben we ons hele net op AC (en gebruik je gelijkrichters/adapters voor GS in apparaten)." }],
          niveaus: { basis: "Nee, vereist wisseling. A.", simpeler: "Stil veld = geen inductie = geen output. A.", nogSimpeler: "Nee = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — examen-mix",
    explanation:
      "**Examen-stijl mix** van A-D. Bonus VWO-stof:\n\n**Zelfinductie L** (VWO):\n• Elke spoel heeft zelfinductie L (henry, H).\n• Wanneer de stroom in een spoel verandert, induceert dat een spanning in dezelfde spoel: U = −L · dI/dt.\n• Daarom blijft een spoel stroom 'willen handhaven' — bij uitschakeling kan vonk-overslag plaatsvinden (relais, motor).\n\n**LC-kring** (VWO):\n• Spoel + condensator vormen oscillator-kring.\n• Resonantiefrequentie: f = 1 / (2π·√(L·C)).\n• Toepassing: radio-afstemming.\n\n**Maxwell + EM-golven**:\n• Maxwell-vergelijkingen (1865) verbinden elektrisch + magnetisch veld.\n• Veranderend E-veld → magnetisch veld (en omgekeerd) → elektromagnetische golven.\n• Lichtsnelheid c volgt uit Maxwell-constanten: c = 1/√(ε₀·μ₀) ≈ 3·10⁸ m/s.\n• Spectrum: radio → microgolf → infrarood → zichtbaar licht → UV → röntgen → gamma.",
    checks: [
      {
        q: "Een **rechte stroomdraad** in B-veld is **parallel** aan B. Lorentzkracht?",
        options: ["Nul — F=BIL·sin(0)=0", "BIL", "Maximaal", "Loodrecht op draad"],
        answer: 0,
        wrongHints: [null, "Niet — sin(0)=0.", "Niet — geen veld-loodrechte component.", "Niet — geen kracht hier."],
        uitlegPad: {
          stappen: [{ titel: "sin(0°) = 0", tekst: "F = B·I·L·sin(α). Bij parallel: α=0, sin(0)=0, dus F=0. Alleen het LOODRECHTE deel van B telt." }],
          niveaus: { basis: "Parallel = geen kracht. A.", simpeler: "Veld en stroom in dezelfde richting → geen kracht. A.", nogSimpeler: "Nul = A." },
        },
      },
      {
        q: "Een spoel met L = 0,10 H. Stroom verandert met dI/dt = 5,0 A/s. Zelfinductie-spanning?",
        options: ["0,50 V", "5,0 V", "0,050 V", "50 V"],
        answer: 0,
        wrongHints: [null, "Niet — dI/dt × L = ...", "Niet — controleer eenheden.", "Te groot."],
        uitlegPad: {
          stappen: [{ titel: "U = L · dI/dt", tekst: "U = 0,10 · 5,0 = **0,50 V**. (Met minteken volgens Lenz — werkt de stroomverandering tegen.)" }],
          theorie: "Bij snel uitschakelen kan dI/dt heel groot worden → enorme spanning → vonk over schakelaar. Daarom soms 'flyback-diode' over spoelen.",
          niveaus: { basis: "L · dI/dt = 0,5 V. A.", simpeler: "0,10 × 5 = 0,5. A.", nogSimpeler: "0,5 V = A." },
        },
      },
      {
        q: "In een **LC-kring** met L = 1 mH en C = 100 nF, resonantie-frequentie?",
        options: ["~16 kHz", "~10 kHz", "~100 kHz", "~1 MHz"],
        answer: 0,
        wrongHints: [null, "Niet — controleer rekensom.", "Niet — te hoog.", "Niet — veel te hoog."],
        uitlegPad: {
          stappen: [
            { titel: "f = 1/(2π·√(LC))", tekst: "f = 1/(2π · √(10⁻³ · 10⁻⁷)) = 1/(2π · √10⁻¹⁰) = 1/(2π · 10⁻⁵) = 10⁵/(2π) ≈ **15,9 kHz**." },
          ],
          theorie: "Variabele C in oude radio's stemde af op zenderfrequenties: L vast, C draaibaar.",
          niveaus: { basis: "f ≈ 16 kHz. A.", simpeler: "Reken 1/(2π√LC) uit. A.", nogSimpeler: "16 kHz = A." },
        },
      },
      {
        q: "Wat horen tot **elektromagnetische golven**?",
        options: [
          "Radio + microgolf + zichtbaar licht + röntgen — alle EM",
          "Alleen zichtbaar licht",
          "Alleen radio + microgolven",
          "Alle hierboven + geluid"
        ],
        answer: 0,
        wrongHints: [null, "Niet — radio is ook EM.", "Niet — röntgen + UV ook.", "Niet — geluid is GEEN EM (drukgolf in lucht)."],
        uitlegPad: {
          stappen: [{ titel: "Maxwell — alles is EM-spectrum", tekst: "Radio (~kHz-GHz), microgolf (GHz), infrarood (THz), zichtbaar licht (~500 THz), UV, röntgen, gamma — alles dezelfde fysica, verschillende frequenties. Allemaal reizen ze met c = 3·10⁸ m/s in vacuüm." }],
          basiskennis: [{ onderwerp: "Niet-EM", uitleg: "Geluid = drukgolf in materie (lucht/water/staal). Heeft medium nodig — kan niet door vacuüm. Heel anders dan EM." }],
          niveaus: { basis: "Alle EM-golven van radio tot gamma. A.", simpeler: "Hetzelfde verschijnsel, andere frequentie. A.", nogSimpeler: "Alles = A." },
        },
      },
      {
        q: "Een **proton** beweegt loodrecht door B = 0,40 T met v = 4,0·10⁶ m/s. q = 1,6·10⁻¹⁹ C, m = 1,67·10⁻²⁷ kg. Cirkel-straal?",
        options: ["~0,10 m", "~0,01 m", "~1,0 m", "~1·10⁻⁴ m"],
        answer: 0,
        wrongHints: [null, "Niet — controleer machten.", "Niet — te groot.", "Niet — te klein."],
        uitlegPad: {
          stappen: [
            { titel: "r = mv/(qB)", tekst: "r = (1,67·10⁻²⁷ · 4,0·10⁶) / (1,6·10⁻¹⁹ · 0,40) = 6,68·10⁻²¹ / 6,4·10⁻²⁰ ≈ **0,10 m**. Een cirkel van 10 cm diameter (20 cm cyclotron-orbit)." },
          ],
          niveaus: { basis: "r = mv/(qB) ≈ 0,10 m. A.", simpeler: "Vier grootheden vermenigvuldigen + delen → ~10 cm. A.", nogSimpeler: "0,10 m = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const elektromagnetismeHavoVwo = {
  id: "elektromagnetisme-havo-vwo",
  title: "Elektromagnetisme (HAVO/VWO Natuurkunde)",
  emoji: "🧲",
  level: "havo-vwo-4-5",
  subject: "natuurkunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Natuurkunde — Elektromagnetisme (CSE-onderwerp)",
  prerequisites: [
    { id: "elektriciteit-natuurkunde", title: "Elektriciteit (basis)", niveau: "vmbo-3" },
    { id: "mechanica-havo-vwo", title: "Mechanica (HAVO/VWO)", niveau: "havo-3F" },
  ],
  intro:
    "Elektromagnetisme voor HAVO/VWO eindexamen — magnetisch veld B, Lorentzkracht F=qvB en F=BIL, Faraday-inductie, transformator + wisselstroom. VWO-stof: zelfinductie + LC-kring + EM-spectrum. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "magnetisch veld", "B-veld", "tesla", "weber",
    "magneet", "permanente magneet", "noordpool", "zuidpool",
    "Lorentzkracht", "F=qvB", "F=BIL",
    "rechterhandregel", "FBI-regel",
    "elektromotor", "cyclotron", "massaspectrometer",
    "inductie", "Faraday", "Lenz",
    "magnetische flux", "weber", "Wb",
    "wisselstroom", "AC", "wisselspanning",
    "transformator", "trafo", "op-trafo", "neer-trafo",
    "230 V", "50 Hz", "hoogspanning",
    "effectieve waarde", "U_eff", "I_eff",
    "zelfinductie", "henry", "LC-kring",
    "EM-golf", "elektromagnetische golf",
    "radio", "microgolf", "infrarood", "röntgen", "gamma",
    "Maxwell", "lichtsnelheid",
  ],
  chapters,
  steps,
};

export default elektromagnetismeHavoVwo;
