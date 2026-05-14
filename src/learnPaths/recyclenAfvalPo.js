// Leerpad: Recyclen + afval + duurzaamheid - groep 6-8.
// Cito-burgerschap/duurzaamheid. 1F. 4 stappen.

const stepEmojis = ["🗑️", "♻️", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Soorten afval", emoji: "🗑️", from: 0, to: 0 },
  { letter: "B", title: "Recyclen + hergebruik", emoji: "♻️", from: 1, to: 1 },
  { letter: "C", title: "Plastic + zee", emoji: "🌍", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Soorten afval + hoe scheiden",
    explanation:
      "**Afval** = wat we weggooien.\nElke Nederlander maakt **~480 kg afval per jaar** *(2024)*.\nDat is bijna **1,5 kg per dag**!\n\n**Afval scheiden** = afval verdelen in soorten zodat het **opnieuw gebruikt** kan worden.\n\n**Soorten afval in NL** *(per kleur bak)*:\n\n**🟫 Groente, Fruit en Tuinafval (GFT)** *(groene bak)*:\n• Schillen, appelklokhuizen.\n• Eierschalen.\n• Theezakjes + koffiedik.\n• Bladeren + grasmaaisel.\n• Snijbloemen.\n• **Wordt compost** *(meststof voor planten)*.\n\n**🟦 Papier + karton** *(blauwe bak)*:\n• Kranten, tijdschriften.\n• Verpakkingsdozen *(zonder voedselresten)*.\n• Reclame-folders.\n• Wel: schoon karton.\n• Niet: vette pizza-dozen, met plastic-laag.\n• **Wordt nieuw papier** *(7-10 keer recyclebaar)*.\n\n**🟧 Glas** *(glasbak in dorp/wijk)*:\n• Lege wijnflessen, jampotten, sauspotjes.\n• Verschillende kleuren *(groen/wit/bruin)* — soms apart in 3 bakken.\n• **Wordt nieuw glas** *(eindeloos recyclebaar zonder kwaliteit-verlies)*.\n\n**🟨 PMD (Plastic-Metaal-Drankkartons)** *(oranje of gele bak)*:\n• Plastic flessen + verpakkingen *(zonder statiegeld)*.\n• Blikjes *(soep, frisdrank)*.\n• Pak melk/sap *(Tetrapak)*.\n• Aluminium folie.\n• **Wordt gesorteerd** in fabriek + apart gerecycled.\n\n**🟥 Restafval** *(grijze of zwarte bak)*:\n• Wat **niet** in andere bakken kan.\n• Luiers, kattenbakvulling, vuil papier.\n• **Wordt verbrand** in afvalcentrale *(elektriciteit + warmte gemaakt)*.\n• Asfaltrest en vuile lompen daarna nog opgeslagen.\n\n**Speciaal afval**:\n• **KCA** *(Klein Chemisch Afval — gif, verf, batterijen)*: brengen naar **milieustraat** of speciale bak.\n• **Elektrisch afval** *(oude telefoon, koelkast)*: inleveren bij winkel of milieustraat.\n• **Textiel** *(oude kleding)*: in kledingcontainer.\n• **Bouwafval, oud meubilair**: milieustraat *(soms gratis)*.\n\n**Milieustraat / Afvalpunt**:\n• Plek waar je grote/bijzondere zaken brengt.\n• Meestal gemeente-faciliteit.\n• Gratis voor inwoners *(soms tegen kleine vergoeding)*.\n\n**Statiegeld**:\n• **€0,15 per glazen** flesje fris/bier.\n• **€0,25** voor grote plastic flessen *(sinds 2021)*.\n• **€0,15** voor blikjes *(sinds 2023)*.\n• Inleveren bij supermarkt → terug krijgen.\n• **Beste recycling** — kwaliteit blijft hoog.\n\n**Waarom is afval scheiden belangrijk?**\n• **Minder grondstoffen** nodig.\n• **Minder CO₂** uitstoot.\n• **Minder vervuiling** *(geen plastic in zee)*.\n• **Geld besparen** *(grondstoffen zijn duur)*.\n• **Aarde voor toekomst** bewaren.\n\n**NL is goed!**\n• 64% van NL-afval wordt gerecycled *(EU-top)*.\n• Doel 2030: 75%.\n• Duitsland: 67% — wij staan iets erachter.\n\n**Cito-feitje**:\n**1 ton papier** recyclen bespaart: **17 bomen** + 26.000 L water + 4100 kWh energie. Dus hergebruik je oude **schoolschrift**? Het zou zo helpen!",
    checks: [
      {
        q: "Hoeveel **afval** maakt gemiddelde Nederlander per jaar?",
        options: ["~480 kg", "10 kg", "10.000 kg", "100 kg"],
        answer: 0,
        wrongHints: [null, "Klopt — 1,5 kg/dag.", "Te weinig.", "Onmogelijk.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "480 kg per jaar = veel!", tekst: "Een gemiddelde Nederlander maakt ongeveer **480 kg afval per jaar** (2024). Dat is bijna **1,5 kg PER DAG** — meer dan een fles cola in gewicht!" },
            { titel: "Waar komt het vandaan?", tekst: "• **Verpakkingen** (plastic, karton)\n• **Voedselresten** (~38 kg per jaar wordt zelfs WEGGEGOOID = verspilling)\n• **Tuinafval**\n• **Wegwerp-producten** (luiers, tissues)\n• **Kleding + meubels die je weggooit**." },
            { titel: "Wat doe je ermee?", tekst: "Door **goed te scheiden** (GFT/PMD/papier/glas) kun je veel hergebruiken. NL recyclet 64% — EU-top! Doel 2030: 75%. Helpt: minder afval, minder grondstof-gebruik, minder CO₂." },
          ],
          woorden: [
            { woord: "afval", uitleg: "Wat we weggooien." },
            { woord: "voedselverspilling", uitleg: "Eten dat weggegooid wordt (~38 kg per persoon NL)." },
          ],
          theorie: "Cito-feit afval-cijfers:\n• **480 kg** per NL'er per jaar.\n• **1,5 kg** per dag.\n• **64%** wordt gerecycled.\n• **38 kg** voedsel wordt verspild per persoon.\nGetallen om te kennen voor Doorstroomtoets.",
          voorbeelden: [
            { type: "stap", tekst: "10 kg = onmogelijk (alleen verpakkingen al meer)." },
            { type: "stap", tekst: "10.000 kg = onmogelijk (=10 ton, = ~3 auto's per persoon)." },
            { type: "stap", tekst: "100 kg = te weinig (gemiddelde gezin van 4 = 4×480 = ~2000 kg!)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: ~480 kg per jaar = 1,5 kg per dag. Beide cijfers handig om te weten." }],
          niveaus: {
            basis: "~480 kg per jaar. = A.",
            simpeler: "Een Nederlander maakt elke dag ~1,5 kg afval, dat is 480 kg per jaar. = A.",
            nogSimpeler: "480 kg = A.",
          },
        },
      },
      {
        q: "Wat hoort in **GFT-bak**?",
        options: ["Schillen + grasmaaisel + eierschalen", "Plastic", "Glas", "Batterijen"],
        answer: 0,
        wrongHints: [null, "Klopt — wordt compost.", "PMD.", "Glasbak.", "KCA."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent GFT?", tekst: "**GFT** = afkorting voor **Groente, Fruit en Tuin**afval. Dit is afval dat KAN ROTTEN — biologisch materiaal." },
            { titel: "Wat hoort erin?", tekst: "Schillen (banaan, appel), groente-resten, koffiedik, theezakjes, eierschalen, gras, bladeren, takjes. Allemaal dingen die uit de natuur komen en kunnen verteren." },
            { titel: "Wat wordt ermee gedaan?", tekst: "GFT wordt naar een **composteerinstallatie** gebracht. Daar wordt het door bacteriën omgezet in **compost** (zwarte vruchtbare aarde). Die compost wordt gebruikt door boeren en in tuinen." },
          ],
          woorden: [
            { woord: "GFT", uitleg: "Groente, Fruit en Tuin-afval." },
            { woord: "compost", uitleg: "Verteerde GFT-resten = vruchtbare aarde." },
            { woord: "PMD", uitleg: "Andere bak: Plastic, Metaal, Drankkartons." },
          ],
          theorie: "Cito-tip afvalscheiding NL: GFT (rot), PMD (plastic+metaal+drank), papier, glas, restafval. Sommige gemeenten ook batterijen + chemisch afval (KCA). Goed scheiden = minder restafval = goedkoper + groener.",
          voorbeelden: [
            { type: "stap", tekst: "Bananenschil → GFT. Plastic verpakking → PMD. Glasflesje → glasbak." },
            { type: "stap", tekst: "Niet in GFT: vleesresten (trekken ratten), kattengrit, plastic zakken (zelfs biologische)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "GFT = uit natuur = kan rotten. Plastic + glas + metaal = niet in GFT (rotten niet)." }],
          niveaus: {
            basis: "GFT = Groente, Fruit, Tuin — biologisch afval.",
            simpeler: "Schillen + tuinafval = GFT (wordt compost).",
            nogSimpeler: "Wat kan rotten = GFT.",
          },
        },
      },
      {
        q: "Wat is **statiegeld**?",
        options: ["Geld dat je terug krijgt bij inleveren fles", "Belasting", "Boete", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — €0,25 grote plastic.", "Niet.", "Niet.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Statiegeld = bewaard geld", tekst: "**Statiegeld** is geen belasting + geen boete + geen extra kosten. Het is **JOUW eigen geld** dat tijdelijk bij de fles 'in bewaring' staat. Bij **inleveren** krijg je het terug." },
            { titel: "Bedragen in NL (2024)", tekst: "• **Plastic fles 0,5L**: €0,15\n• **Plastic fles 1L+**: €0,25 (sinds 2021)\n• **Glasfles bier**: €0,10\n• **Glasfles statiegeld-frisdrank**: €0,25-1,00\n• **Blikje** (sinds 2023): €0,15" },
            { titel: "Waarom werkt het?", tekst: "Mensen leveren flessen + blikjes IN (om hun geld terug te krijgen) ipv weg te gooien. Resultaat: **minder zwerfafval** + **meer recycling**. Sinds invoering blikjes-statiegeld: 70% minder blikjes in natuur." },
          ],
          woorden: [
            { woord: "statiegeld", uitleg: "Bedrag op fles/blikje, terug bij inleveren." },
            { woord: "zwerfafval", uitleg: "Afval dat in natuur/op straat ligt." },
          ],
          theorie: "Cito-feit statiegeld:\n• Bedoeld voor **minder afval** + **meer recycling**.\n• Bij Albert Heijn / Jumbo / Plus / etc. inleveren via automaat.\n• Bij groot evenement: vaak 'statiegeld' op bekers → terug bij teruggave.\n• Net als pinpas — JIJ haalt geld op.",
          voorbeelden: [
            { type: "stap", tekst: "Je koopt 6 grote colaflessen × €0,25 statiegeld = €1,50 extra betaald. Lege flessen inleveren = €1,50 terug." },
            { type: "stap", tekst: "Niet verwarren met **belasting** (geld AF naar overheid) of **boete** (straf). Statiegeld = jouw geld in bewaring." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Statiegeld = jouw geld bewaard bij fles. Inleveren = terug. Niet vergeten — gratis geld!" }],
          niveaus: {
            basis: "Statiegeld = geld terug bij inleveren fles/blikje. = A.",
            simpeler: "Je betaalt extra bij koop. Lege fles terugbrengen = geld terug. = A.",
            nogSimpeler: "Inleveren = geld terug = A.",
          },
        },
      },
      {
        q: "Hoeveel **% NL-afval** wordt gerecycled?",
        options: ["~64% (EU-top)", "10%", "100%", "1%"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel meer.", "Onmogelijk.", "Veel meer."],
      },
    ],
  },
  {
    title: "Recyclen + hergebruik + circulaire economie",
    explanation:
      "**Drie R's** *(traditioneel)*:\n• **Reduce** — minder gebruiken.\n• **Reuse** — opnieuw gebruiken.\n• **Recycle** — opnieuw maken.\n\n**Nieuwe ladder van Lansink** *(NL-afvalbeleid)*:\n1. **Voorkomen** *(geen afval maken)*.\n2. **Hergebruiken** *(zelfde object, andere keer)*.\n3. **Recyclen** *(materiaal opnieuw)*.\n4. **Energie winnen** *(verbranden = elektriciteit)*.\n5. **Storten** *(laatste optie, slechtste)*.\n\nHoe hoger = beter voor milieu.\n\n**Voorkomen** *(beste!)*:\n• **Geen extra plastic-zakken** — neem eigen.\n• **Geen 'wegwerp'-artikelen** *(plastic-rietje, plastic-bestek)*.\n• **Bulk-koop** *(minder verpakking)*.\n• **Korter douchen** — minder water.\n• **Niet te veel eten kopen** — voedselverspilling tegengaan.\n\n**Hergebruiken** *(2e beste)*:\n• **Tweedehands kleding kopen** *(Kringloopwinkel, Vinted)*.\n• **Repareren** ipv weggooien *(repair-café in dorp)*.\n• **Glazen flessen** opnieuw vullen.\n• **Doorgeven** *(speelgoed, boeken aan buren/familie)*.\n• **Marktplaats** of **doneer**.\n\n**Recyclen**:\n• Materiaal opnieuw gebruiken voor iets nieuws.\n• Voorbeelden:\n  - Plastic fles → fleecetrui.\n  - Glas → nieuw glas.\n  - Papier → nieuw papier.\n  - Metaal → nieuwe metalen voorwerpen.\n• **Niet 100% efficient** — kost energie + vaak kwaliteit-verlies.\n• Daarom: **eerst voorkomen + hergebruiken**.\n\n**Energie winnen**:\n• Wat overblijft → **afvalcentrale**.\n• **Verbranden bij hoge temperatuur** *(1200°C+)*.\n• Warmte gebruikt voor:\n  - Elektriciteit produceren.\n  - Stadsverwarming *(warmtenet)*.\n• ~1 ton afval = ~600 kWh elektriciteit.\n• Restproduct = **slak** *(asfalt + bouwmaterialen)*.\n\n**Storten** *(slechtste)*:\n• Op stortplaats stoppen.\n• In NL **bijna nooit meer** *(< 2%)*.\n• In sommige landen veel.\n• Probleem: gas + lekkage.\n\n**Circulaire economie** ♻️:\n\n**Traditioneel = lineair**:\nGrondstof → product → afval *(weggegooid)*.\n\n**Circulair**:\nGrondstof → product → gebruik → opnieuw grondstof → nieuw product → ...\n\nDoel: **niets gaat verloren**, alles wordt opnieuw gebruikt.\n\n**Voorbeelden circulair denken**:\n• **Auto's gehuurd** ipv gekocht *(Mywheels, Greenwheels)*.\n• **Refurbished telefoons** *(opgeknapt)*.\n• **Tassen van zee-plastic** *(Bottletop, Adidas)*.\n• **Tweedehands meubilair** *(Ikea-tweedehands-platform)*.\n\n**NL-bedrijven die circulair zijn**:\n• **Fairphone** *(modulaire telefoon — uit elkaar te halen)*.\n• **Mud Jeans** *(spijkerbroek-huren)*.\n• **PHILIPS** *(licht-as-a-service: bedrijven huren licht)*.\n• **Tony's Chocolonely** *(eerlijk chocolade, slave-free)*.\n\n**Voedselverspilling** 🍅:\n• ~30% van wereld-voedsel wordt weggegooid.\n• In NL: ~38 kg per persoon per jaar.\n• Tips:\n  - **Lijstje** maken voor boodschappen.\n  - **Restjes opeten**.\n  - **THT (Tenminste Houdbaar Tot)** ≠ gevaar *(meestal nog goed te eten).*\n  - **Te Goed Om Weg Te Gooien** apps *(Too Good To Go)*.\n\n**Cito-feitje**:\nDe **eerste glasbak in NL** kwam in **1972**. Voor dat ging glas in vuilniszak. Inmiddels 11.000+ glasbakken in NL. 90% van glas wordt gerecycled — een succes!",
    checks: [
      {
        q: "Wat is **beste optie** in Ladder van Lansink?",
        options: ["Voorkomen (geen afval maken)", "Recyclen", "Verbranden", "Storten"],
        answer: 0,
        wrongHints: [null, "Klopt — hoogste prioriteit.", "Wel goed maar specifiek dit.", "Niet primair.", "Slechtste."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de Ladder van Lansink?", tekst: "Een **rangorde** voor afval-aanpak, bedacht door politicus **Ad Lansink** in 1979. Van **beste** (boven) naar **slechtste** (onder)." },
            { titel: "De rangorde (boven = best)", tekst: "1) **Voorkomen** (geen afval). 2) **Hergebruiken** (zelfde product opnieuw). 3) **Recyclen** (materiaal hergebruiken). 4) **Verbranden** (energie eruit). 5) **Storten** (op vuilnisbelt — slechtste)." },
            { titel: "Beste = niet maken", tekst: "Het ALLERBESTE is: geen afval MAKEN. Bijvoorbeeld: geen plastic zakje pakken bij winkel = geen plastic afval. Beter dan recyclen — dat kost ook energie." },
          ],
          woorden: [
            { woord: "Ladder van Lansink", uitleg: "NL-rangorde voor afval-aanpak (1979)." },
            { woord: "preventie", uitleg: "Voorkomen = beste optie." },
          ],
          theorie: "Cito-tip afval-hiërarchie: PREVENTIE > HERGEBRUIK > RECYCLEN > VERBRANDEN > STORTEN. Onthoud volgorde. Politiek + bedrijven gebruiken dit nog steeds.",
          voorbeelden: [
            { type: "stap", tekst: "Eigen drinkfles gebruiken (preventie) is beter dan plastic flesje kopen + recyclen (recycle stap 3)." },
            { type: "stap", tekst: "Tweedehands kleding kopen = hergebruik (stap 2) = beter dan oude kleding wegdoen + nieuwe kopen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hoog = goed. 'Voorkomen' staat hoogst op de ladder. Recyclen pas op #3." }],
          niveaus: {
            basis: "Beste = voorkomen (geen afval maken). Slechtste = storten.",
            simpeler: "Niet maken > hergebruiken > recyclen > verbranden > storten.",
            nogSimpeler: "Voorkomen is best.",
          },
        },
      },
      {
        q: "Wat is **circulaire economie**?",
        options: ["Niets verloren — alles hergebruikt", "Cirkel-bedrijf", "Wiel", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — modern doel.", "Niet.", "Niet primair.", "Wel."],
      },
      {
        q: "Wat is **THT-datum**?",
        options: ["Tenminste Houdbaar Tot — vaak nog OK na", "Direct ongezond na", "Gewoon datum", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — niet weggooien!", "Niet altijd.", "Niet specifiek.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent THT?", tekst: "**THT** = **Tenminste Houdbaar Tot**. Dat is een datum die zegt: TOT deze datum garandeert de fabrikant dat het product GOED is. NA die datum: vaak NOG STEEDS OK, maar zonder garantie." },
            { titel: "Niet meteen weggooien!", tekst: "Veel mensen gooien automatisch weg na THT-datum. Maar voor veel producten (pasta, rijst, blikvoer, chocola, koekjes) is het nog **weken/maanden** OK. RUIK + KIJK + PROEF eerst." },
            { titel: "Verschil met TGT", tekst: "**TGT** = **Te Gebruiken Tot** = STRENGE datum, vooral op vlees, vis, eieren. Na deze datum WEL gevaar (bacteriegroei). NIET meer eten. THT = vrijblijvend, TGT = strikt." },
          ],
          woorden: [
            { woord: "THT", uitleg: "Tenminste Houdbaar Tot — vrijblijvende datum." },
            { woord: "TGT", uitleg: "Te Gebruiken Tot — STRIKTE datum (vlees/vis)." },
          ],
          theorie: "Cito-feit voedselverspilling: NL gooit per jaar **34 kg** voedsel per persoon weg. Veel daarvan door verkeerd lezen van THT-datum. Beter: ruik + proef.",
          voorbeelden: [
            { type: "stap", tekst: "Pakje pasta met THT-datum gisteren = nog gewoon eten. Smaakt OK? Eet maar." },
            { type: "stap", tekst: "Vlees met TGT-datum gisteren = WEGGOOIEN. Risico bacteriën." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "T**H**T = **H**outenswaardig (suggestie). T**G**T = **G**evaar (verplicht)." }],
          niveaus: {
            basis: "THT = Tenminste Houdbaar Tot — vaak na datum nog OK.",
            simpeler: "THT = vrijblijvend. Ruik + proef. TGT = vlees/vis = strikt.",
            nogSimpeler: "Na THT vaak nog goed.",
          },
        },
      },
      {
        q: "**% wereld-voedsel** wat weggegooid?",
        options: ["~30%", "1%", "90%", "Niet"],
        answer: 0,
        wrongHints: [null, "Klopt — veel verspilling.", "Veel meer.", "Niet zo erg.", "Wel."],
      },
    ],
  },
  {
    title: "Plastic + plastic-soup + oceanen",
    explanation:
      "**Plastic** = synthetisch *(door mens gemaakt)* materiaal van **olie**.\n\n**Voordelen plastic**:\n• Goedkoop.\n• Licht.\n• Sterk.\n• Veelzijdig *(allerlei vormen)*.\n• Hygiënisch *(verpakking)*.\n\n**Nadelen**:\n• **Vergaan langzaam** *(plastic fles = 450 jaar)*.\n• **Microplastic** *(<5 mm)* = overal in water, voedsel, lucht.\n• **Plastic-soup** in oceanen.\n• Maken kost veel olie *(fossiel)*.\n• Verbranden geeft CO₂.\n\n**Soorten plastic** *(7 codes)*:\n• Driehoekje met getal binnen op verpakking.\n• 1 = PET *(flessen, makkelijk recyclebaar)*.\n• 2 = HDPE *(stevig, melkflessen)*.\n• 3 = PVC *(buizen, niet recyclen).*\n• 4 = LDPE *(boodschappentas, folie)*.\n• 5 = PP *(yoghurt-beker, deksel)*.\n• 6 = PS *(bakje, polystyreen — niet recyclen)*.\n• 7 = Anders *(mix, moeilijk)*.\n\n**Hoe lang duurt vergaan?**\n• **Bananenschil**: 1 maand.\n• **Karton**: 2-5 maanden.\n• **Sigarettenfilter**: 10-12 jaar.\n• **Plastic-zak**: 10-20 jaar.\n• **Aluminium-blikje**: 80-200 jaar.\n• **Plastic fles**: 450 jaar.\n• **Glazen fles**: **1 miljoen jaar** *(maar wel breekbaar)*.\n• **Plastic luier**: 450 jaar.\n• **Piepschuim**: 500+ jaar.\n\n**Plastic-soup** in zeeën 🌊:\n\n**Wat is het?**\n• Plastic-resten drijven in oceaan.\n• 5 grote 'gyres' *(draaikolken)* verzamelen plastic.\n• **Great Pacific Garbage Patch**: zo groot als Frankrijk × 3 *(1,6 mln km²)*.\n• Niet zoals 'eiland' — meer als verspreide deeltjes.\n\n**Hoeveel plastic in zee?**\n• **8-12 miljoen ton** per jaar bij komt.\n• Helft komt uit **10 rivieren** *(meeste in Azië + Afrika)*.\n• Total: ~150 miljoen ton plastic in oceaan al.\n\n**Schade**:\n• **Dieren eten plastic** — vol maag.\n• Walvissen, zeeschildpadden, vogels gestikt.\n• **Microplastic in vis** → terug in mens.\n• Recente studies: microplastic in **mens-bloed** + **moeder-melk**.\n\n**Boyan Slat + The Ocean Cleanup** 🇳🇱:\n\n**Wie?**\n• Nederlander, geboren 1994.\n• Op 16 jaar idee: 'Waarom niet plastic opruimen?'\n• Op 18 oprichter **The Ocean Cleanup**.\n\n**Hoe?**\n• **Systeem 03**: U-vormige drijflijn op zee.\n• Twee schepen slepen — gebruiken stromingen.\n• Vangt plastic-deeltjes vanaf 1 cm.\n• Plastic gerecycled tot zonnebril ($199).\n\n**Resultaten**:\n• Sinds 2021 actief op Pacific.\n• **~75.000 kg plastic** opgehaald *(eind 2024)*.\n• Doel: 90% wereldwijd plastic in oceaan weg tegen 2040.\n\n**Andere oplossingen**:\n• **River Interceptors**: bij rivier-mond plastic vangen.\n• 5 actief in Indonesië + Maleisië + Dominicaanse Republiek.\n• Stopt plastic voordat het zee bereikt.\n\n**Wat KUN JIJ doen?**\n\n• **Geen plastic-zakken** — neem **stof-tas**.\n• **Eigen waterfles** — geen wegwerp.\n• **Bamboe-tandenborstel** *(natuurlijk)*.\n• **Vermijd microbeads** in cosmetica.\n• **Schoonmaak strand** *(beach-clean-up)*.\n• **Plogging** *(rennen + opruimen)*.\n• **Repareren** ipv vervangen.\n• **Tweedehands** kopen.\n• **Praat erover** + inspireer anderen.\n\n**Klimaatactivisten** *(jong)*:\n• **Greta Thunberg** *(Zweeds, 2003+)*: 'Fridays for Future', spreekt op VN.\n• **Vanessa Nakate** *(Oeganda)*.\n• **Xiye Bastida** *(Mexico/VS)*.\n\n**Cito-feitje**:\nEen **glazen fles** kan **1 miljoen jaar** in milieu blijven — maar wel **eindeloos recyclebaar**. Een **plastic fles** vergaat 'maar' 450 jaar — maar **kwaliteit zakt** elk keer dat hij gerecycled wordt *(downcycling)*. Glas wint!",
    checks: [
      {
        q: "Hoe lang duurt **plastic fles vergaan**?",
        options: ["~450 jaar", "1 maand", "10 jaar", "Eeuwig"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bananenschil.", "Plastic-tas.", "Wel lang, maar niet eeuwig."],
        uitlegPad: {
          stappen: [
            { titel: "Plastic vergaan = HEEL traag", tekst: "Een plastic fles in natuur (zee, bos, weg) duurt **~450 jaar** voor het volledig vergaan is. Tegen die tijd was 'jij' al lang dood + ook je achter-achterkleinkinderen!" },
            { titel: "Vergelijking vergaantijden", tekst: "Andere afvalsoorten:\n• **Bananenschil**: 1 maand\n• **Karton**: 2-5 maanden\n• **Sigaret-filter**: 10-12 jaar\n• **Plastic zak**: 10-20 jaar\n• **Aluminium blikje**: 80-200 jaar\n• **Plastic fles**: **450 jaar**\n• **Piepschuim**: 500+ jaar\n• **Glazen fles**: 1 miljoen jaar (maar 100% recyclebaar)." },
            { titel: "Daarom recyclen", tekst: "Plastic in natuur veroorzaakt **plastic-soup** in oceanen — 8-12 miljoen ton per jaar erbij. Dieren eten het en sterven. Recyclen + minder gebruiken = enige oplossing." },
          ],
          woorden: [
            { woord: "vergaan", uitleg: "Volledig afbreken door natuur." },
            { woord: "plastic-soup", uitleg: "Plastic-deeltjes drijvend in oceanen." },
            { woord: "microplastic", uitleg: "Kleine stukjes plastic (<5 mm) door afgebroken plastic." },
          ],
          theorie: "Cito-feit plastic-vergaan:\n• Plastic vergaat **niet** echt — breekt in steeds kleinere stukjes (microplastic).\n• Die microplastics zitten nu in **mens-bloed + moedermelk + voedsel**.\n• Eens gemaakt = altijd ergens.\n• Daarom: voorkomen > recyclen > weggooien.",
          voorbeelden: [
            { type: "stap", tekst: "Plastic fles uit 1970 zou nu in 2026 = 56 jaar oud = nog ~400 jaar te gaan voor totaal vergaan." },
            { type: "stap", tekst: "Bananenschil zelf wegrollen in bos = na 1 maand weg. Plastic flesje = jouw achter-achter-achterkleinkinderen vinden 't nog terug." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Plastic = ~450 jaar. Onthoud dit shock-cijfer. Helpt om bewust te kiezen voor minder plastic." }],
          niveaus: {
            basis: "~450 jaar. = A.",
            simpeler: "Een plastic fles in natuur duurt 450 jaar voor afgebroken — 4 eeuwen! = A.",
            nogSimpeler: "450 jaar = A.",
          },
        },
      },
      {
        q: "Wie startte **Ocean Cleanup**?",
        options: ["Boyan Slat (16 jr)", "Verstappen", "Cruijff", "Rutte"],
        answer: 0,
        wrongHints: [null, "Klopt — NL'er.", "F1.", "Voetbal.", "Politicus."],
      },
      {
        q: "**Grootste plastic-eiland** in?",
        options: ["Pacific (Great Pacific Garbage Patch)", "Atlantic", "Indische Oc", "NL kust"],
        answer: 0,
        wrongHints: [null, "Klopt — Frankrijk × 3.", "Wel deel maar niet grootst.", "Ook deel.", "Niet."],
      },
      {
        q: "**Tips** om plastic te verminderen?",
        options: ["Stof-tas + eigen waterfles + tweedehands", "Meer plastic", "Niets doen", "Verbranden"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Niet.", "Geeft CO₂."],
      },
    ],
  },
  {
    title: "Eind-toets — duurzaam mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat hoort in **GFT-bak**?", options: ["Schillen + tuinafval", "Plastic", "Glas", "Batterij"], answer: 0, wrongHints: [null, "Klopt.", "PMD.", "Glasbak.", "KCA."] },
      { q: "Wat is **statiegeld** op plastic fles?", options: ["€0,25 (sinds 2021)", "Niks", "€10", "€1"], answer: 0, wrongHints: [null, "Klopt — grote flessen.", "Wel.", "Te veel.", "Te veel."] },
      { q: "**Beste optie** Ladder van Lansink?", options: ["Voorkomen (geen afval)", "Verbranden", "Storten", "Recyclen"], answer: 0, wrongHints: [null, "Klopt.", "Slecht.", "Slechtste.", "Goed maar niet beste."] },
      { q: "**Plastic fles** vergaat in?", options: ["~450 jr", "1 maand", "10 dagen", "Eeuwig"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet exact."] },
      { q: "Wie startte **Ocean Cleanup**?", options: ["Boyan Slat", "Verstappen", "Cruijff", "Geen NL'er"], answer: 0, wrongHints: [null, "Klopt.", "F1.", "Voetbal.", "Wel NL!"] },
      { q: "Wat is **circulaire economie**?", options: ["Niets verloren — alles hergebruikt", "Auto-bedrijf", "Cirkel", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt.", "Niet primair.", "Niet.", "Wel."] },
      {
        q: "Wat hoort in **PMD-bak** (Plastic, Metaal, Drankkartons)?",
        options: ["Lege fles wasmiddel + soepblik + melkpak", "GFT", "Papier", "Batterijen"],
        answer: 0,
        wrongHints: [null, "Klopt — PMD = plastic verpakkingen, metalen blikjes, drankkartons.", "GFT = aparte bak (groen).", "Papier = papierbak (blauw of papierwagen).", "Batterijen = KCA, supermarkt-inzameling."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is PMD?", tekst: "**PMD** staat voor:\n• **P** = **Plastic** verpakkingen (flesjes shampoo, yoghurtbakje, plastic zak)\n• **M** = **Metaal** verpakkingen (soepblik, drinkblikje, deksels)\n• **D** = **Drankkartons** (melk, sap, soms soep)\n\nVroeger waren plastic + blik aparte bakken — sinds 2014 in NL samen in **oranje PMD-bak** (sommige gemeenten doopt zakken)." },
            { titel: "Wat hoort NIET in PMD?", tekst: "• **Folie** zonder verpakking (folielap zwerfvuil → restafval)\n• **Plastic speelgoed** → kringloop of restafval\n• **Plastic kledinghanger** → restafval\n• **Plastic met etensresten** → restafval (vies)\n• **Piepschuim** → soms PMD, soms restafval (gemeente-afhankelijk)\n• **Tube** met tandpasta → restafval (vermengd metaal/plastic)" },
            { titel: "Cito-feit: NL afvalsysteem", tekst: "Nederland heeft **5-7 afvalbakken** per huis (gemeente verschilt):\n• **Grijs** = restafval\n• **Groen / GFT** = groente/fruit/tuin\n• **Oranje / PMD** = plastic/metaal/drank\n• **Blauw** = papier + karton\n• **Glasbak** (in wijk)\n• **Textielcontainer** (in wijk)\n• **KCA** = klein chemisch afval (verf, batterijen — supermarkt of milieustraat)\n\nNL recyclet ~80% van plastic flessen + 95% van glas — wereldwijd top." },
          ],
          woorden: [
            { woord: "PMD", uitleg: "Plastic + Metaal + Drankkartons. Sinds 2014 samen in oranje bak." },
            { woord: "KCA", uitleg: "Klein Chemisch Afval. Batterijen, verf, medicijnen, olie. Niet in restafval." },
            { woord: "milieustraat", uitleg: "Inzamelplek voor groot afval + KCA. Elke gemeente heeft minstens 1." },
            { woord: "scheidings­percentage", uitleg: "Hoeveel % afval correct gescheiden wordt. NL: ~75% in 2024." },
          ],
          theorie: "**Volgorde van afval-verwerking** (NL beleid):\n1. **Recyclen** — beste optie (PMD/papier/glas/GFT)\n2. **Verbranden met energie­winning** — restafval naar afval­energie­centrale (AEC), wekt elektriciteit op\n3. **Storten** — slechtste optie, alleen wat anders niet kan\n\nNL stort minder dan 1% van afval — een van de laagste percentages in EU.",
          voorbeelden: [
            { type: "feit", tekst: "1 plastic fles in PMD wordt ~6-10 keer hergebruikt voordat het te beschadigd is. Daarna brandstof voor cement-industrie." },
            { type: "feit", tekst: "Wist je: 1 kg plastic recyclen bespaart 2 kg CO₂ vs nieuwe plastic maken." },
          ],
          basiskennis: [{ onderwerp: "Niet vies", uitleg: "Spoel PMD-spullen LICHT — niet super schoon nodig. Wel zo droog mogelijk (geen yoghurt-resten)." }],
          niveaus: { basis: "Plastic + metaal + drankkartons. = A.", simpeler: "PMD-bak = Plastic verpakkingen + Metaal (blikjes) + Drankkartons (melk/sap). Alles wat van plastic, blik, of kartonnen drinkpak is. = A.", nogSimpeler: "Plastic/blik/melkpak = A." },
        },
      },
      {
        q: "Wat zijn **microplastics**?",
        options: ["Heel kleine plastic-deeltjes (<5 mm) die overal komen", "Snoepje", "Computer", "Plastic auto"],
        answer: 0,
        wrongHints: [null, "Klopt — onzichtbaar bijna, gevonden in zee, drinkwater, ons bloed.", "Niet — kleine plastic-stukjes uit afgebroken zwerfvuil.", "Tegenovergesteld — micro = klein.", "Niet — micro = klein."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn microplastics?", tekst: "**Microplastics** = plastic-deeltjes **kleiner dan 5 millimeter**. Nog kleiner heten **nanoplastics**.\n\n**Waar komen ze vandaan?**\n• **Afgebroken plastic-flessen** in zee (verteren niet, breken in stukjes)\n• **Autobanden** slijten = plastic-stof in straten + lucht\n• **Synthetische kleding** in wasmachine (polyester, fleece)\n• **Microbeads** in oude cosmetica (verboden sinds 2018 in NL)\n• **Verf + lakken** die afbrokkelen" },
            { titel: "Waarom probleem?", tekst: "Microplastics zitten **OVERAL**:\n• **In zee** — vissen eten ze (en wij eten dan de vis)\n• **In drinkwater** — onderzoek 2017: ~83% wereld-kraanwater bevat plastic\n• **In zout, suiker, bier**\n• **In ons lichaam** — wetenschappers vonden microplastics in bloed (2022), placenta, longen\n\nGevolg voor gezondheid nog onbekend — onderzoek loopt." },
            { titel: "Cito-feit: NL-actie + Ocean Cleanup", tekst: "**NL acties tegen microplastics**:\n• **Microbeads** verbod (was in cosmetica, scrub-zalf — uitfaseren 2018-)\n• **Plastic-zak-verbod** gratis sinds 2016\n• **Statiegeld** op blikjes (vanaf 2023) — minder zwerfvuil\n• **The Ocean Cleanup** (Boyan Slat, NL!) — interceptors in rivieren VÓÓR ze in zee komen\n• **EU SUP-richtlijn** — verbod op single-use plastic (rietjes, bestek)\n\nElke beetje minder plastic = minder microplastics op lange termijn." },
          ],
          woorden: [
            { woord: "microplastic", uitleg: "Plastic kleiner dan 5 mm. Niet biologisch afbreekbaar." },
            { woord: "nanoplastic", uitleg: "Plastic kleiner dan 1 micrometer (1.000× kleiner dan microplastic). Onzichtbaar." },
            { woord: "biologisch afbreekbaar", uitleg: "Materiaal dat door bacteriën vergaat. Plastic = NIET (alleen breken in kleinere stukjes)." },
          ],
          theorie: "Hoe lang doet plastic erover om af te breken?\n• **Plastic fles** — ~450 jaar (alleen breken in microplastic, niet weg)\n• **Plastic tas** — 10-1.000 jaar\n• **Plastic rietje** — 200 jaar\n• **Sigarettenpeuk** — 10-12 jaar (met filter)\n• **Touw** — 600 jaar\n\nVergelijk: papier 2-6 weken, appel-klokhuis 2 maanden, ijzer 50-100 jaar.",
          voorbeelden: [
            { type: "feit", tekst: "We eten gemiddeld 5 gram microplastic per week (~1 creditcard). Vooral via drinkwater + vis." },
            { type: "feit", tekst: "WHO + EU onderzoeken nu gezondheidseffecten. Voorzorgsprincipe: zoveel mogelijk vermijden." },
          ],
          basiskennis: [{ onderwerp: "Niet zichtbaar", uitleg: "Microplastics zijn met blote oog vaak niet zichtbaar. Specialistische microscopen nodig." }],
          niveaus: { basis: "Kleine plastic-deeltjes. = A.", simpeler: "Microplastics zijn plastic-stukjes kleiner dan 5 mm. Komen van afgebroken plastic-flessen, autobanden, kleding-wasbeurt. Zitten in zee + ons drinkwater + zelfs ons bloed. = A.", nogSimpeler: "Klein plastic = A." },
        },
      },
      {
        q: "Welke **3 R's** vormen de basis van duurzaamheid?",
        options: ["Reduce, Reuse, Recycle (verminder, hergebruik, recycle)", "Rondom, Rondreis, Repetitief", "Rust, Reizen, Rennen", "Rood, Rood, Rood"],
        answer: 0,
        wrongHints: [null, "Klopt — Engels woord-trio, basis van afvalbeleid.", "Niet — bedacht antwoord.", "Niet — heeft niets met duurzaamheid te maken.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "De 3 R's", tekst: "De **3 R's van duurzaamheid** zijn (Engels, internationaal gebruikt):\n\n1. **REDUCE** (verminder) — beste! Koop minder spullen, eet minder vlees, gebruik minder energie.\n2. **REUSE** (hergebruik) — gebruik tweedehands, navulbare flesjes, repareer kleding.\n3. **RECYCLE** — wat overblijft = laat het verwerken tot nieuwe grondstof.\n\n**Volgorde belangrijk**: REDUCE = beste. RECYCLE = pas als REDUCE + REUSE niet kan." },
            { titel: "Voorbeelden in dagelijks leven", tekst: "**Reduce**:\n• Geen plastic tasje (eigen tas mee)\n• Vegetarisch eten 1× per week\n• Kortere douche\n• Geen pakketje bestellen voor 1 item\n\n**Reuse**:\n• Glazen pot voor lunch (geen aluminiumfolie)\n• Tweedehands kleding (Vinted, kringloop)\n• Repareer broek met gat\n• Compost voor tuin\n\n**Recycle**:\n• PMD/papier/glas scheiden\n• Oude telefoon naar inzamelpunt (kostbare grondstoffen)\n• Kerstboom naar gemeente" },
            { titel: "Cito-feit: 5R's of 7R's", tekst: "Sommige variatie:\n• **3R's** klassiek (Reduce-Reuse-Recycle)\n• **5R's** modern: + **Refuse** (weigeren onnodige dingen) + **Rot** (composteren)\n• **7R's** uitgebreid: + Repair + Rethink\n\nVoor Cito-PO: de **3 klassieke R's** zijn voldoende kennis. Engelse woorden onthouden = makkelijk." },
          ],
          woorden: [
            { woord: "duurzaamheid", uitleg: "Iets dat goed is voor mens, milieu, toekomst. Niet alleen NU maar ook OVER 100 jaar." },
            { woord: "Reduce", uitleg: "Engels: verminderen. Minder kopen + verbruiken." },
            { woord: "Reuse", uitleg: "Engels: hergebruiken. Tweede leven voor spullen." },
            { woord: "Recycle", uitleg: "Engels: recyclen. Verwerken tot nieuwe grondstof." },
          ],
          theorie: "Waarom volgorde Reduce > Reuse > Recycle?\n• **Reduce**: kost geen energie (gewoon niet kopen). Beste voor planeet.\n• **Reuse**: weinig energie (alleen tweedehands transport).\n• **Recycle**: KOST WEL energie (smelten, schoonmaken). Beter dan storten, maar niet beter dan reduce.\n\nVerschil:\n• **Recycling** ≠ gratis goed. Plastic recyclen kost veel water + chemicaliën.\n• **Reduce** is altijd beter.",
          voorbeelden: [
            { type: "feit", tekst: "Nederlandse gemiddelde: 1 persoon = ~500 kg afval per jaar. Helft is recyclebaar." },
            { type: "feit", tekst: "1 nieuwe spijkerbroek kost 7.500 liter water. Tweedehands = 0 liter extra. Daarom Vinted/Marktplaats = duurzaam." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen recycle", uitleg: "Veel mensen denken 'als ik recycle is het goed'. Maar Reduce is veel beter — voorkom afval überhaupt." }],
          niveaus: { basis: "Reduce, Reuse, Recycle. = A.", simpeler: "De 3 R's: 1) Reduce = minder kopen, 2) Reuse = tweedehands gebruiken, 3) Recycle = scheiden + verwerken tot nieuwe spullen. Reduce is altijd beste. = A.", nogSimpeler: "Reduce-Reuse-Recycle = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const recyclenAfvalPo = {
  id: "recyclen-afval-po",
  title: "Recyclen + afval + duurzaam (Cito groep 6-8)",
  emoji: "♻️",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / duurzaamheid",
  prerequisites: [
    { id: "klimaatverandering-aardrijkskunde", title: "Klimaatverandering", niveau: "2F" },
  ],
  intro:
    "Recyclen voor Cito groep 6-8 — afval-soorten (GFT/PMD/glas/papier/restafval) + scheiden (NL 64% recycle, EU-top) + statiegeld + Ladder van Lansink (voorkomen→hergebruiken→recyclen) + circulaire economie + plastic-soup + Boyan Slat / Ocean Cleanup. ~15 min.",
  triggerKeywords: [
    "afval", "recyclen", "recycling",
    "GFT", "PMD", "glasbak", "papier",
    "statiegeld",
    "Ladder van Lansink",
    "circulaire economie",
    "plastic", "plastic-soup", "microplastic",
    "Boyan Slat", "Ocean Cleanup",
    "duurzaamheid",
    "voedselverspilling", "THT",
  ],
  chapters,
  steps,
};

export default recyclenAfvalPo;
