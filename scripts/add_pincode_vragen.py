#!/usr/bin/env python3
"""
Voegt 3 extra vragen per stap toe aan elk van de 8 Pincode-leerpaden.
Resultaat: van 2 -> 5 vragen per stap (72 nieuwe vragen totaal).

Niveau: VMBO-GT klas 4. WrongHints geven richting zonder antwoord weg te geven.
Idempotent: kijkt of de eerste extra vraag al voorkomt en slaat dan over.
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / "src" / "learnPaths"

# Per pad: dict van stap-titel -> list van extra check-objecten.
# Elk check: {q, options(list[4]), answer(int 0-3), wrongHints(list[4] met null op answer-positie)}
VRAGEN = {
    "pincodeInkomenWelvaart.js": {
        "Schaarste, behoeften en goederen": [
            {"q": "Een nieuwe smartphone — voor een 16-jarige is dat een **primaire** of **secundaire** behoefte?",
             "options": ["Secundaire behoefte", "Primaire behoefte", "Vrije behoefte", "Geen behoefte"],
             "answer": 0,
             "wrongHints": [None, "Primaire = nodig om te leven (eten, drinken, onderdak). Een telefoon hoort daar niet bij.",
                            "'Vrij' is een type goed (lucht), geen type behoefte.",
                            "Een leerling wil de telefoon wel — dus is er behoefte."]},
            {"q": "Een fabriekshal waar koekjes worden gebakken is een voorbeeld van een **kapitaalgoed**. Welke productiefactor levert hem?",
             "options": ["Kapitaal", "Arbeid", "Natuur", "Ondernemerschap"],
             "answer": 0,
             "wrongHints": [None, "Arbeid = werk dat mensen leveren, niet de hal zelf.",
                            "Natuur = grondstoffen, niet een gebouw.",
                            "Ondernemerschap = het idee + risico, niet het gebouw."]},
            {"q": "Brood dat je in de winkel koopt om vandaag op te eten — welk soort goed?",
             "options": ["Consumptiegoed", "Kapitaalgoed", "Vrij goed", "Productiegoed"],
             "answer": 0,
             "wrongHints": [None, "Kapitaalgoed = waarmee je iets anders maakt (oven, machine).",
                            "Brood is niet gratis of in overvloed.",
                            "Productiegoed bestaat niet als categorie — denk consumptie/kapitaal."]},
        ],
        "Soorten inkomen — bruto, netto, primair, secundair": [
            {"q": "Iemand verhuurt een appartement en ontvangt €1200 huur per maand. Welk soort inkomen is dat?",
             "options": ["Primair inkomen (uit kapitaal/natuur)", "Secundair inkomen", "Brutoloon", "Toeslag"],
             "answer": 0,
             "wrongHints": [None, "Secundair = zonder een productiefactor te leveren. Verhuren = je biedt natuur/kapitaal aan.",
                            "Loon krijg je voor arbeid, niet voor verhuur.",
                            "Toeslagen krijg je van de overheid, niet van een huurder."]},
            {"q": "Bij wie hoort de **zorgtoeslag** thuis?",
             "options": ["Secundair inkomen — zonder productiefactor te leveren",
                         "Primair inkomen — voor je werk",
                         "Loon",
                         "Winst"],
             "answer": 0,
             "wrongHints": [None, "Voor de zorgtoeslag werk je niet — die krijg je van de overheid.",
                            "Loon is voor arbeid, toeslag niet.",
                            "Winst is voor ondernemers, geen overheidsbijdrage."]},
            {"q": "Brutoloon €3.000, loonheffing en premies samen €750. Wat is het **nettoloon**?",
             "options": ["€2.250", "€3.750", "€2.750", "€2.000"],
             "answer": 0,
             "wrongHints": [None, "Bij netto haal je inhoudingen ER AF, niet op.",
                            "Net niet — alle €750 moet eraf.",
                            "Te veel afgetrokken — controleer 3000 - 750."]},
        ],
        "Welvaart, inflatie en koopkracht": [
            {"q": "Het CBS meet voor 2025 een **CPI van 108** (basis 2023 = 100). Hoeveel zijn de prijzen sinds 2023 gestegen?",
             "options": ["8%", "108%", "0,8%", "1,08%"],
             "answer": 0,
             "wrongHints": [None, "Dat zou betekenen dat een brood van €1 nu €2,08 kost — te veel.",
                            "Te klein — CPI gaat in hele procenten.",
                            "Dat is de factor (1,08) niet het percentage."]},
            {"q": "Je loon stijgt 4%, prijzen stijgen ook 4%. Wat gebeurt er met je **koopkracht**?",
             "options": ["Blijft ongeveer gelijk", "Stijgt met 4%", "Daalt met 8%", "Stijgt met 8%"],
             "answer": 0,
             "wrongHints": [None, "Loon en prijzen stijgen even hard — dan kun je niet meer kopen.",
                            "Niet de twee percentages optellen.",
                            "Stijging zou betekenen dat je netto meer kunt kopen."]},
            {"q": "**Welvaart in ruime zin** omvat naast inkomen ook:",
             "options": ["Gezondheid, milieu, vrije tijd, veiligheid", "Alleen spaargeld", "Alleen inkomen per maand", "Alleen vakanties"],
             "answer": 0,
             "wrongHints": [None, "Spaargeld is wel materieel — dat valt onder enge zin.",
                            "Inkomen alleen = welvaart in enge zin.",
                            "Vrije tijd is een onderdeel maar niet alles."]},
        ],
    },
    "pincodeGeldSparenLenen.js": {
        "Functies van geld": [
            {"q": "Een prijskaartje van €12,50 op een T-shirt — welke functie van geld?",
             "options": ["Rekenmiddel", "Ruilmiddel", "Spaarmiddel", "Productiemiddel"],
             "answer": 0,
             "wrongHints": [None, "Ruilen doe je bij de kassa, niet bij het lezen van een prijskaartje.",
                            "Sparen = bewaren voor later — niet vergelijken.",
                            "Productiemiddel is geen geldfunctie."]},
            {"q": "Wat is **chartaal geld**?",
             "options": ["Munten en bankbiljetten", "Geld op een bankrekening", "Een bankoverschrijving", "Geld dat je hebt verdiend"],
             "answer": 0,
             "wrongHints": [None, "Dat heet giraal geld.",
                            "Een overschrijving is een handeling, geen geldsoort.",
                            "Inkomen zegt iets over hoe je het kreeg, niet over de soort."]},
            {"q": "Waarom is **ruilhandel** lastig?",
             "options": ["Je moet iemand vinden die jouw spullen wil EN heeft wat jij wilt",
                         "Het is verboden",
                         "Goederen zijn te duur",
                         "Je hebt internet nodig"],
             "answer": 0,
             "wrongHints": [None, "Ruilhandel is niet verboden, alleen onhandig.",
                            "Prijs heeft niets met het ruil-mechaniek te maken.",
                            "Ruilhandel was er ver vóór internet."]},
        ],
        "Banken — sparen en rente": [
            {"q": "Je zet **€2.000** op een spaarrekening met **1,5% rente** per jaar. Hoeveel staat er na 1 jaar?",
             "options": ["€2.030", "€2.015", "€2.300", "€2.150"],
             "answer": 0,
             "wrongHints": [None, "1,5% van €2.000 is €30, niet €15.",
                            "Te veel — dat zou 15% rente zijn.",
                            "Ook te veel — 7,5% rente is onrealistisch hoog."]},
            {"q": "Waarom betaalt de bank jou **rente** op je spaargeld?",
             "options": ["Omdat de bank jouw geld weer kan uitlenen aan anderen",
                         "Uit dankbaarheid",
                         "Verplicht door de overheid",
                         "Omdat geld duurder wordt"],
             "answer": 0,
             "wrongHints": [None, "Banken doen het uit eigenbelang, niet uit dankbaarheid.",
                            "Rente-percentage is geen overheidsregel.",
                            "Geld 'duurder worden' is geen reden — bank verdient aan uitlenen."]},
            {"q": "Wat is een **betaalrekening** (anders dan een spaarrekening)?",
             "options": ["Een rekening voor dagelijkse betalingen, met meestal weinig of geen rente",
                         "Een rekening waar je niet bij kan",
                         "Hetzelfde als een spaarrekening",
                         "Alleen voor bedrijven"],
             "answer": 0,
             "wrongHints": [None, "Bij een betaalrekening kun je juist altijd geld halen.",
                            "Verschil zit in het doel: dagelijks vs. opzij zetten.",
                            "Iedereen heeft een betaalrekening, niet alleen bedrijven."]},
        ],
        "Lenen — kredietvormen en risico": [
            {"q": "Welke leenvorm heeft meestal de **hoogste rente**?",
             "options": ["Rood staan", "Hypotheek", "Studielening DUO", "Persoonlijke lening"],
             "answer": 0,
             "wrongHints": [None, "Hypotheek heeft juist lage rente (huis als onderpand).",
                            "DUO heeft een gunstig laag tarief.",
                            "Persoonlijke lening is hoger dan hypotheek, maar rood staan is nog hoger."]},
            {"q": "Wat is een **BKR-toets**?",
             "options": ["Check of je al andere schulden hebt of betalingsproblemen",
                         "Examen voor bankmedewerkers",
                         "Belastingaanslag",
                         "Spaarrekening met bonus"],
             "answer": 0,
             "wrongHints": [None, "BKR is geen opleiding maar een register.",
                            "Niets met belasting — BKR is van Bureau Krediet Registratie.",
                            "Geen spaarproduct — het is een controle bij lenen."]},
            {"q": "Vuistregel: max **30% van netto-inkomen** aan vaste maandlasten. Bij netto €2.000 — wat is je maximum?",
             "options": ["€600", "€2.000", "€300", "€1.000"],
             "answer": 0,
             "wrongHints": [None, "Dat zou je hele inkomen zijn — niet duurzaam.",
                            "Te weinig — dat is 15%.",
                            "Net te veel — dat is 50%, dubbel zoveel als de regel."]},
        ],
    },
    "pincodeOndernemen.js": {
        "Wat is ondernemen?": [
            {"q": "Welke 3 stappen volgen meestal als je een eigen bedrijf wilt starten?",
             "options": ["Marktonderzoek → ondernemingsplan → inschrijven KvK",
                         "Reclame maken → product maken → klanten zoeken",
                         "Geld lenen → personeel werven → kantoor huren",
                         "Belasting betalen → BV oprichten → vakantie"],
             "answer": 0,
             "wrongHints": [None, "Reclame komt later — eerst weten wat de markt wil.",
                            "Geld lenen kan, maar je begint met onderzoek/plan.",
                            "Belasting komt pas als je iets verdient."]},
            {"q": "Een webshop in handgemaakte sieraden — welk type onderneming?",
             "options": ["Productie (je maakt zelf)", "Handel (alleen kopen en doorverkopen)", "Diensten", "Geen van deze"],
             "answer": 0,
             "wrongHints": [None, "Handel = inkopen en doorverkopen zonder zelf te maken.",
                            "Diensten = iets ongrijpbaars (kapsel, advies).",
                            "Het past wel — sieraden maken is productie."]},
            {"q": "Een ondernemer **neemt risico**. Wat betekent dat?",
             "options": ["Hij kan zijn investering kwijtraken als het bedrijf verliest",
                         "Hij krijgt altijd zijn geld terug",
                         "Hij betaalt geen belasting",
                         "Hij hoeft niet te werken"],
             "answer": 0,
             "wrongHints": [None, "Als er garantie was, was het geen risico.",
                            "Ondernemers betalen wél belasting (IB of VPB).",
                            "Ondernemers werken meestal hard, juist door het risico."]},
        ],
        "Omzet, kosten en winst": [
            {"q": "Een ondernemer verkoopt 200 stuks à €5. De kosten zijn €600. Wat is de **winst**?",
             "options": ["€400", "€1.000", "€600", "€200"],
             "answer": 0,
             "wrongHints": [None, "Dat is de omzet — vergeet niet de kosten af te trekken.",
                            "Kosten zijn input, geen winst.",
                            "Reken: 200 × 5 = €1.000 omzet; minus €600 kosten."]},
            {"q": "Welke kosten **veranderen niet** als je meer maakt?",
             "options": ["Constante (vaste) kosten zoals huur", "Variabele kosten zoals grondstof",
                         "Totale kosten", "Inkoopkosten"],
             "answer": 0,
             "wrongHints": [None, "Variabele kosten gaan omhoog bij meer productie — meer grondstof nodig.",
                            "Totaal = vast + variabel, dus die wijzigt wel.",
                            "Inkoop is variabel — meer inkopen voor meer producten."]},
            {"q": "Het **break-even-punt** is het punt waar:",
             "options": ["Omzet precies gelijk is aan totale kosten (geen winst, geen verlies)",
                         "De winst maximaal is",
                         "Je het meest verkoopt",
                         "De ondernemer stopt"],
             "answer": 0,
             "wrongHints": [None, "Maximale winst zit later, niet bij quitte draaien.",
                            "Aantal zegt niets — break-even gaat over geld.",
                            "Stoppen is geen economisch begrip."]},
        ],
        "Rechtsvormen — eenmanszaak, vof, bv": [
            {"q": "Twee vrienden starten samen een **VOF**. Wat is het belangrijkste risico?",
             "options": ["Beide vennoten zijn privé aansprakelijk — ook voor schulden van de ander",
                         "Ze mogen geen winst maken",
                         "Ze betalen dubbele belasting",
                         "Ze moeten een notaris bezoeken"],
             "answer": 0,
             "wrongHints": [None, "Winst maken mag — dat is juist het doel.",
                            "Bij VOF betaalt elk apart IB over zijn deel — geen dubbele belasting.",
                            "Notaris is verplicht bij BV, niet bij VOF."]},
            {"q": "Wat is verplicht bij het oprichten van een **BV**?",
             "options": ["Een notaris (oprichtingsakte)", "Twee oprichters", "Een eigen pand", "Vooraf €100.000 omzet"],
             "answer": 0,
             "wrongHints": [None, "Een BV kan ook met 1 oprichter.",
                            "Geen pand verplicht — BV mag thuis zitten.",
                            "Geen omzet-eis — je begint juist vanaf nul."]},
            {"q": "Je wilt zelfstandig ondernemen, klein, met **zo min mogelijk risico** voor je privé-geld. Welke rechtsvorm?",
             "options": ["BV (geen privé aansprakelijkheid)",
                         "Eenmanszaak (privé aansprakelijk)",
                         "VOF (privé aansprakelijk)",
                         "Stichting"],
             "answer": 0,
             "wrongHints": [None, "Bij eenmanszaak is je privégeld juist wel aansprakelijk.",
                            "VOF erger nog — ook voor de andere vennoot.",
                            "Stichting is voor non-profit doelen, niet voor winst."]},
        ],
    },
    "pincodeWerkArbeidsmarkt.js": {
        "Werkgevers en werknemers": [
            {"q": "Hoe lang mag een **proeftijd** maximaal duren?",
             "options": ["1 of 2 maanden, afhankelijk van het contract",
                         "1 jaar",
                         "Onbeperkt",
                         "1 week"],
             "answer": 0,
             "wrongHints": [None, "Proeftijd is bewust kort.",
                            "Onbeperkt zou werknemers geen zekerheid geven.",
                            "Te kort om elkaar te leren kennen."]},
            {"q": "Welk contract geeft een werknemer de **meeste zekerheid**?",
             "options": ["Vast contract (onbepaalde tijd)",
                         "Oproepcontract",
                         "Uitzendcontract",
                         "Tijdelijk contract van 6 maanden"],
             "answer": 0,
             "wrongHints": [None, "Oproep = werken alleen als baas je belt — onzeker.",
                            "Uitzend = werk via bureau, snel klaar.",
                            "Tijdelijk eindigt na 6 maanden — minder zeker dan vast."]},
            {"q": "Belangrijk verschil **zzp'er vs werknemer**?",
             "options": ["Zzp'er werkt voor opdrachtgevers, regelt zelf belasting + verzekeringen",
                         "Zzp'er hoeft niet te werken",
                         "Zzp'er heeft altijd een vast loon",
                         "Werknemer regelt zelf zijn belasting"],
             "answer": 0,
             "wrongHints": [None, "Zzp'er moet juist hard werken om opdrachten te vinden.",
                            "Zzp-inkomen is wisselend, niet vast.",
                            "Voor werknemers houdt de werkgever loonheffing in."]},
        ],
        "De arbeidsmarkt en CAO": [
            {"q": "Veel openstaande vacatures, weinig werklozen. Wat noem je deze situatie?",
             "options": ["Krapte op de arbeidsmarkt", "Ruime arbeidsmarkt", "Recessie", "Evenwicht"],
             "answer": 0,
             "wrongHints": [None, "Ruim = juist veel zoekers, weinig werk.",
                            "Recessie = slechte economie; veel werkloosheid.",
                            "Evenwicht is precies passend, niet 'tekort aan werkers'."]},
            {"q": "Voor wie geldt een CAO?",
             "options": ["Voor iedereen in een hele sector (bv. alle horecamedewerkers)",
                         "Alleen voor leden van een vakbond",
                         "Alleen voor werkgevers",
                         "Alleen voor parttimers"],
             "answer": 0,
             "wrongHints": [None, "Niet alleen leden — geldt sector-breed.",
                            "Werkgevers zitten erbij, maar werknemers ook.",
                            "Geen onderscheid parttime/fulltime."]},
            {"q": "Wat is een **vakbond**?",
             "options": ["Organisatie die opkomt voor de belangen van werknemers",
                         "Een groep werkgevers",
                         "Een uitzendbureau",
                         "Een afdeling van de Belastingdienst"],
             "answer": 0,
             "wrongHints": [None, "Werkgevers hebben hun eigen organisaties (VNO-NCW etc).",
                            "Uitzendbureau zoekt mensen voor werk, geen belangenbehartiger.",
                            "Vakbonden zijn los van de overheid."]},
        ],
        "Werkloosheid en productiviteit": [
            {"q": "Door een recessie zijn er minder banen. Welke werkloosheid?",
             "options": ["Conjuncturele werkloosheid", "Frictie", "Structureel", "Seizoens"],
             "answer": 0,
             "wrongHints": [None, "Frictie = kort, tussen twee banen — niet door recessie.",
                            "Structureel = vaardigheden mismatch met markt.",
                            "Seizoens = afhankelijk van het jaar (ijscoman)."]},
            {"q": "**100.000 werklozen**, beroepsbevolking **5.000.000**. Wat is het werkloosheidspercentage?",
             "options": ["2%", "20%", "0,2%", "5%"],
             "answer": 0,
             "wrongHints": [None, "Veel te hoog — controleer 100.000 / 5.000.000.",
                            "Te laag met factor 10.",
                            "Reken: 100.000 / 5.000.000 = 0,02 = 2%."]},
            {"q": "Wat verhoogt de **productiviteit**?",
             "options": ["Betere machines en betere opleiding",
                         "Minder vakantiedagen",
                         "Hogere belasting",
                         "Meer werknemers in dienst"],
             "answer": 0,
             "wrongHints": [None, "Minder vakantie = meer uren, niet productiever per uur.",
                            "Belasting heeft niets met productie per uur te maken.",
                            "Meer werknemers = totaal meer output, niet per persoon."]},
        ],
    },
    "pincodeOverheid.js": {
        "Taken van de overheid": [
            {"q": "**Politie** valt onder welke overheidstaak?",
             "options": ["Wetten en orde (veiligheid)", "Onderwijs", "Sociale zekerheid", "Inkomensverdeling"],
             "answer": 0,
             "wrongHints": [None, "Onderwijs gaat over scholen.",
                            "Sociale zekerheid = uitkeringen.",
                            "Inkomensverdeling = belasting heffen om verschillen te verkleinen."]},
            {"q": "**Subsidie voor een hogeschool** — onder welke overheidstaak?",
             "options": ["Onderwijs en zorg betaalbaar maken voor iedereen",
                         "Marktregels",
                         "Wetten en orde",
                         "Defensie"],
             "answer": 0,
             "wrongHints": [None, "Marktregels = eerlijke concurrentie bewaken.",
                            "Wetten en orde = politie/rechters.",
                            "Defensie = leger, niet onderwijs."]},
            {"q": "Wat doet de **provincie** vooral?",
             "options": ["Regionale zaken zoals provinciale wegen en natuur",
                         "Wetten maken voor heel Nederland",
                         "Vuilnis ophalen",
                         "Belasting innen"],
             "answer": 0,
             "wrongHints": [None, "Landelijke wetten maakt het Rijk.",
                            "Vuilnis is een gemeente-taak.",
                            "Belasting innen doet vooral de Belastingdienst."]},
        ],
        "De Rijksbegroting": [
            {"q": "Wat is verreweg de **grootste inkomstenbron** van de Rijksoverheid?",
             "options": ["Belastingen", "Aardgasbaten", "Gemeenten", "Loterijen"],
             "answer": 0,
             "wrongHints": [None, "Aardgasbaten worden steeds kleiner.",
                            "Gemeenten krijgen juist GELD van het Rijk, geven het niet.",
                            "Loterijen leveren wat op, maar niet veel in vergelijking."]},
            {"q": "Wat is de **Miljoenennota**?",
             "options": ["Het document met de plannen voor de Rijksbegroting van het komende jaar",
                         "Een toespraak van de koning",
                         "Een rekening voor 1 miljoen",
                         "Een Europese richtlijn"],
             "answer": 0,
             "wrongHints": [None, "De Troonrede is de toespraak; de Miljoenennota is het cijferdocument.",
                            "De NAAM komt van de bedragen, het is geen rekening.",
                            "Het is puur Nederlands, geen Europees stuk."]},
            {"q": "Een **begrotingsoverschot** — wat kan de overheid daarmee?",
             "options": ["De staatsschuld aflossen of geld reserveren",
                         "Niets — geld is niet van de overheid",
                         "Verplicht uitgeven",
                         "Aan inwoners terugbetalen elke maand"],
             "answer": 0,
             "wrongHints": [None, "Een overschot is wel beschikbaar — daar kan iets mee gebeuren.",
                            "Verplicht uitgeven is geen regel — het kan ook gespaard.",
                            "Maandelijks terugbetalen is geen praktijk in NL."]},
        ],
        "Staatsschuld": [
            {"q": "Wat is **BBP**?",
             "options": ["De totale productie in Nederland in 1 jaar",
                         "Belasting op binnenlandse producten",
                         "Bonus voor parttime werkers",
                         "Beroepsbevolking als percentage"],
             "answer": 0,
             "wrongHints": [None, "Niet specifiek belasting — het is alle productie samen.",
                            "Geen werknemer-bonus — pure economische maatstaf.",
                            "Beroepsbevolking is iets anders (= mensen die werken/willen werken)."]},
            {"q": "Een land heeft staatsschuld van **80% van het BBP**. Wat zegt de EMU-norm?",
             "options": ["Het is hoger dan de afgesproken 60%-grens",
                         "Het is precies goed",
                         "Het is veel te laag",
                         "EMU-norm bestaat niet"],
             "answer": 0,
             "wrongHints": [None, "60% is de grens, 80% zit erboven.",
                            "Schuld kan altijd lager — 0% is geen norm.",
                            "EMU-norm bestaat — afspraak in Stabiliteits- en Groeipact."]},
            {"q": "Waarom kost staatsschuld geld?",
             "options": ["Er moet jaarlijks rente betaald worden",
                         "De schuld vermindert vanzelf",
                         "Er wordt belasting over geheven",
                         "De schuld groeit door erfenissen"],
             "answer": 0,
             "wrongHints": [None, "Een schuld lost niet vanzelf op — moet juist afgelost.",
                            "Belasting over schuld bestaat niet — wel rente.",
                            "Erfenissen hebben hier niets mee te maken."]},
        ],
    },
    "pincodeBelasting.js": {
        "Soorten belastingen": [
            {"q": "**AOW-premie** — is dit een belasting of een premie?",
             "options": ["Premie — voor een specifiek doel (latere AOW-uitkering)",
                         "Belasting — gaat naar algemene pot",
                         "Allebei tegelijk",
                         "Geen van beide"],
             "answer": 0,
             "wrongHints": [None, "Voor de AOW is het juist gekoppeld aan een specifiek doel.",
                            "Het is een duidelijke premie, geen mengvorm.",
                            "Het bestaat wel — staat op je loonstrookje."]},
            {"q": "**Erfbelasting** — direct of indirect?",
             "options": ["Direct (op basis van wat je krijgt)",
                         "Indirect (zit in een prijs)",
                         "Premie",
                         "Geen van beide"],
             "answer": 0,
             "wrongHints": [None, "Erfbelasting zit niet in de prijs van iets.",
                            "Geen specifiek doel — algemene belasting.",
                            "Het bestaat zeker als belasting."]},
            {"q": "**BTW** — direct of indirect?",
             "options": ["Indirect — verstopt in de prijs",
                         "Direct — op je inkomen",
                         "Premie",
                         "Geen belasting"],
             "answer": 0,
             "wrongHints": [None, "BTW betaal je niet over je inkomen, maar bij elke aankoop.",
                            "Geen premie — geen specifiek doel als terugkrijgen.",
                            "BTW is wél belasting — staat op elke kassabon."]},
        ],
        "BTW en accijns": [
            {"q": "Welk **BTW-tarief** geldt voor boodschappen (eten/drinken)?",
             "options": ["9% (laag tarief)", "21% (algemeen tarief)", "0%", "25%"],
             "answer": 0,
             "wrongHints": [None, "21% is voor andere dingen (kleding, elektronica).",
                            "0% is voor specifieke gevallen (export, sommige zorg).",
                            "25% bestaat niet als NL-tarief."]},
            {"q": "Een product kost **€100 zonder BTW**. Wat is de prijs **inclusief 21% BTW**?",
             "options": ["€121", "€100", "€79", "€79"],
             "answer": 0,
             "wrongHints": [None, "Inclusief BTW is meer dan zonder.",
                            "Dat zou aftrek zijn, niet bijtelling.",
                            "Reken: €100 × 1,21."]},
            {"q": "Waarom heft de overheid **hoge accijns op brandstof**?",
             "options": ["Inkomsten + ontmoediging vanwege milieu/CO2",
                         "Brandstof is duur om te produceren",
                         "Internationale verplichting",
                         "Om automakers te helpen"],
             "answer": 0,
             "wrongHints": [None, "Productiekosten zijn relatief laag, accijns zit erbovenop.",
                            "Geen verplichting van bovenaf — eigen keuze NL.",
                            "Eerder andersom — accijns ontmoedigt rijden."]},
        ],
        "Inkomstenbelasting en premies": [
            {"q": "Wie houdt **loonheffing** in op je salaris?",
             "options": ["De werkgever", "De werknemer zelf", "De Belastingdienst direct", "De vakbond"],
             "answer": 0,
             "wrongHints": [None, "Werknemers krijgen het netto bedrag — werkgever doet de inhouding.",
                            "Belastingdienst krijgt het via de werkgever.",
                            "Vakbond doet aan onderhandelingen, geen inhouding."]},
            {"q": "Persoon A verdient €30.000, persoon B €100.000. Door **progressieve belasting** betaalt:",
             "options": ["Persoon B verhoudingsgewijs een hoger percentage",
                         "Beide hetzelfde percentage",
                         "Persoon A meer percentage",
                         "Allebei vrijgesteld"],
             "answer": 0,
             "wrongHints": [None, "Bij vlaktaks is dat zo, maar NL heeft schijven.",
                            "Tegenovergesteld — zwakkere schouders dragen lichter.",
                            "Niemand boven minimum is helemaal vrijgesteld."]},
            {"q": "**Arbeidskorting** krijg je als:",
             "options": ["Je een baan hebt en arbeidsinkomen verdient",
                         "Je geen werk hebt",
                         "Je gepensioneerd bent",
                         "Je zelfstandige bent zonder personeel"],
             "answer": 0,
             "wrongHints": [None, "Arbeids = werken — geen werk, geen arbeidskorting.",
                            "Pensioen is geen arbeidsinkomen.",
                            "Zzp'ers krijgen wel arbeidskorting — als ze winst maken uit arbeid."]},
        ],
    },
    "pincodeBuitenlandEu.js": {
        "Internationale handel — import en export": [
            {"q": "Een land heeft een **handelsoverschot**. Wat betekent dat?",
             "options": ["De export is groter dan de import",
                         "De import is groter dan de export",
                         "Schulden zijn afgelost",
                         "Er is recessie"],
             "answer": 0,
             "wrongHints": [None, "Dat is juist een handelsTEKORT.",
                            "Schulden zijn iets anders dan handelsbalans.",
                            "Recessie = economische krimp; los van handel."]},
            {"q": "Waarom is Nederland een uitgesproken **handelsland**?",
             "options": ["Grote havens (Rotterdam) + Schiphol + ligging in Europa",
                         "Veel goud in de bodem",
                         "Lage belastingen wereldwijd het laagst",
                         "Geen import nodig"],
             "answer": 0,
             "wrongHints": [None, "NL heeft geen goud van betekenis.",
                            "NL-belasting is normaal, niet wereldwijd het laagst.",
                            "NL importeert juist heel veel (bv. olie)."]},
            {"q": "Wat is **re-export**?",
             "options": ["Goederen komen Nederland binnen en gaan via NL door naar een ander land",
                         "Twee keer hetzelfde product exporteren",
                         "Export naar landen buiten Europa",
                         "Een soort belastingvoordeel"],
             "answer": 0,
             "wrongHints": [None, "Niet 'twee keer' — wel doorvoer via NL.",
                            "Niet beperkt tot buiten Europa — meeste re-export gaat juist naar EU-landen.",
                            "Geen belasting — een handelsstroom."]},
        ],
        "De Europese Unie": [
            {"q": "**Eén markt** in de EU — wat betekent dat voor handel?",
             "options": ["Geen invoerheffingen tussen EU-landen, vrij handelen alsof het 1 land is",
                         "Iedereen heeft dezelfde munteenheid",
                         "Alle prijzen zijn gelijk",
                         "Geen import van buiten Europa toegestaan"],
             "answer": 0,
             "wrongHints": [None, "Niet alle EU-landen hebben de euro — denk aan Zweden of Polen.",
                            "Prijzen verschillen, maar er zijn geen invoerheffingen tussen EU-landen.",
                            "Import van buiten mag wel — alleen met heffingen."]},
            {"q": "**Brexit** was:",
             "options": ["Het Verenigd Koninkrijk dat de EU verliet (2020)",
                         "Een nieuw EU-lid",
                         "Een Europese munteenheid",
                         "Een handelsverdrag met de VS"],
             "answer": 0,
             "wrongHints": [None, "Tegenovergesteld — UK ging er juist uit.",
                            "Brexit = 'Britain exit', dus geen valuta.",
                            "Brexit ging tussen UK en EU, niet tussen EU en VS."]},
            {"q": "Voordeel van de **euro** voor een Nederlandse toerist die in Spanje is?",
             "options": ["Geen wisselkosten of -koersrisico — euro is overal hetzelfde",
                         "Hogere prijzen in Spanje",
                         "Lagere belasting",
                         "Gratis hotelkamer"],
             "answer": 0,
             "wrongHints": [None, "Prijzen zijn niet hoger door de euro.",
                            "Belasting in andere land verandert niet door jouw munteenheid.",
                            "Vakantie kost gewoon geld."]},
        ],
        "Wisselkoersen en de euro": [
            {"q": "Koers €1 = $1,10. Je wilt **$220 dollar** kopen. Hoeveel euro heb je nodig?",
             "options": ["€200", "€220", "€242", "€242"],
             "answer": 0,
             "wrongHints": [None, "1 euro = $1,10, niet $1. Reken: 220 / 1,10.",
                            "Te veel betaald — dat is alsof je 220 keer 1,10 doet.",
                            "Reken in plaats van schat."]},
            {"q": "Wat is het **inflatiedoel** van de ECB?",
             "options": ["Ongeveer 2%", "0%", "5%", "10%"],
             "answer": 0,
             "wrongHints": [None, "0% is te krap — beetje inflatie helpt de economie.",
                            "5% is te hoog — koopkracht zou snel dalen.",
                            "10% is hyperinflatie-niveau."]},
            {"q": "Waardoor stijgt de **wisselkoers** van de euro tegenover de dollar?",
             "options": ["Veel vraag naar euro's (bv. door hogere rente in EU)",
                         "Veel inflatie in EU",
                         "EU verkoopt minder",
                         "Brand op een schip"],
             "answer": 0,
             "wrongHints": [None, "Hoge inflatie verzwakt juist een munt.",
                            "Minder export = minder vraag naar euro's = zwakker.",
                            "Een incident heeft geen blijvende invloed."]},
        ],
    },
    "pincodeOntwikkelingslanden.js": {
        "Verschillen tussen rijke en arme landen": [
            {"q": "Welk land scoort verwacht het **hoogst** op HDI?",
             "options": ["Nederland", "Mali", "Bangladesh", "Niger"],
             "answer": 0,
             "wrongHints": [None, "Mali heeft een lage HDI (lage levensverwachting + onderwijs).",
                            "Bangladesh middeninkomen, lager dan NL.",
                            "Niger staat heel laag op HDI-lijsten."]},
            {"q": "**Levensverwachting** in een arm land ligt vaak rond:",
             "options": ["~60 jaar", "~80 jaar", "~100 jaar", "~40 jaar"],
             "answer": 0,
             "wrongHints": [None, "~80 is het rijke-landen-niveau (NL).",
                            "100 jaar is erg uitzonderlijk — geen gemiddelde.",
                            "~40 is extreem laag, dat is meer middeleeuws."]},
            {"q": "**Welvaart in enge zin** = ?",
             "options": ["Alleen materiële zaken (geld, spullen)",
                         "Alleen geluk",
                         "Alleen gezondheid",
                         "Alles wat met natuur te maken heeft"],
             "answer": 0,
             "wrongHints": [None, "Geluk valt onder welvaart in ruime zin.",
                            "Gezondheid valt onder welvaart in ruime zin.",
                            "Natuur is een element van ruime zin, geen aparte definitie."]},
        ],
        "Oorzaken van armoede": [
            {"q": "Waarom is een **vicieuze cirkel van armoede** moeilijk te doorbreken?",
             "options": ["Elk probleem versterkt het volgende — geen geld voor scholen, geen opgeleid personeel, geen industrie",
                         "Mensen willen niet werken",
                         "Het is altijd kortstondig",
                         "De cirkel breekt vanzelf"],
             "answer": 0,
             "wrongHints": [None, "Wil om te werken is meestal aanwezig — kansen ontbreken.",
                            "Vicieuze cirkels duren juist lang.",
                            "Vanzelf breken is het tegendeel — daarom heet het vicieus."]},
            {"q": "**Kolonisatie-erfenis** als oorzaak van armoede betekent:",
             "options": ["Grenzen door koloniale machten getrokken zonder oog voor volkeren → conflicten + economie afhankelijk van 1 product",
                         "Te veel kolonies",
                         "Een soort belasting",
                         "Niet relevant in de moderne tijd"],
             "answer": 0,
             "wrongHints": [None, "Het gaat niet om aantal, maar om de gevolgen voor latere staten.",
                            "Geen belasting — historisch erfgoed.",
                            "Wel relevant — sommige conflicten zijn nog steeds koloniaal-historisch."]},
            {"q": "Waarom zijn **schulden** zo slecht voor arme landen?",
             "options": ["Rente eet jaarlijks geld op dat anders naar onderwijs/zorg kon",
                         "Schulden zijn altijd te groot om af te lossen",
                         "De rente is altijd 0%",
                         "Schulden komen nooit voor"],
             "answer": 0,
             "wrongHints": [None, "Soms zijn schulden wel haalbaar — het probleem is welke uitgave je opoffert.",
                            "Rente is juist hoog voor arme landen (hoger risico).",
                            "Veel arme landen hebben juist hoge schulden."]},
        ],
        "Duurzame ontwikkeling en hulp": [
            {"q": "**Fair Trade** zorgt ervoor dat:",
             "options": ["Boeren in arme landen een eerlijke prijs krijgen, niet de laagst mogelijke",
                         "Producten gratis worden",
                         "Geen handel meer plaatsvindt",
                         "Alleen rijke landen erbij verdienen"],
             "answer": 0,
             "wrongHints": [None, "Producten worden juist iets duurder in de winkel.",
                            "Fair Trade is JUIST handel — eerlijker.",
                            "Tegenovergesteld — boeren in arme landen krijgen meer."]},
            {"q": "**SDG** staat voor:",
             "options": ["Sustainable Development Goals — 17 VN-doelen voor 2030",
                         "Sociale Druk Geld",
                         "Schoolse Doelen Groep",
                         "Specifieke Donatie Geld"],
             "answer": 0,
             "wrongHints": [None, "SDG is een internationale afkorting (Engels).",
                            "Niet onderwijs-specifiek — de 17 doelen zijn breed.",
                            "Geen donaties — het zijn doelstellingen voor landen."]},
            {"q": "**Microkrediet** werkt vooral goed voor:",
             "options": ["Beginnende kleine ondernemers in arme landen",
                         "Internationale grote bedrijven",
                         "Studenten in NL",
                         "Hele dorpen tegelijk"],
             "answer": 0,
             "wrongHints": [None, "Grote bedrijven hebben gewone bankleningen, geen 'micro'.",
                            "Studenten in NL gaan naar DUO.",
                            "Microkrediet is per persoon, niet per dorp."]},
        ],
    },
}


def render_check(c):
    """Genereer een check-object als JS-string (geïndenteerd voor in checks-array)."""
    options_str = ", ".join([f'"{o}"' for o in c["options"]])
    hints = []
    for h in c["wrongHints"]:
        if h is None:
            hints.append("null")
        else:
            hints.append(f'"{h}"')
    hints_str = ", ".join(hints)
    return (
        '      {\n'
        f'        q: "{c["q"]}",\n'
        f'        options: [{options_str}],\n'
        f'        answer: {c["answer"]},\n'
        f'        wrongHints: [{hints_str}],\n'
        '      },'
    )


def inject_into_step(text, step_title, extra_checks_js):
    """Vind de checks-array van een specifieke stap (op title-match) en voeg
    de extra checks toe vóór de afsluitende '],' van die array.

    De stap-titel komt voor als `title: "..."`. We vinden de eerstvolgende
    `checks: [` daarna, en de matching `],` (closing van die array, gezien dit
    de eerste sluitende array op stap-niveau is).
    """
    # Escape special chars in title
    title_pat = re.escape(step_title)
    # Vind 'title: "<step_title>"'
    title_match = re.search(rf'title:\s*"{title_pat}"', text)
    if not title_match:
        return None  # not found
    # Vind eerstvolgende 'checks: [' daarna
    checks_match = re.search(r'checks:\s*\[', text[title_match.end():])
    if not checks_match:
        return None
    checks_open_pos = title_match.end() + checks_match.end()
    # Vind matching ']' — we tellen brackets vanaf hier
    depth = 1
    i = checks_open_pos
    while i < len(text) and depth > 0:
        ch = text[i]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                break
        elif ch == '"':
            # skip string
            j = i + 1
            while j < len(text) and text[j] != '"':
                if text[j] == '\\':
                    j += 2
                else:
                    j += 1
            i = j
        i += 1
    if depth != 0:
        return None
    # Bepaal of er al iets in zit + sluit netjes af
    closing_pos = i
    # Idempotent check: kijk of de eerste extra-check al in deze step zit
    first_q = extra_checks_js.split('q: "', 1)[1].split('"', 1)[0][:40]
    if first_q in text[checks_open_pos:closing_pos]:
        return text  # already injected
    # Insert: extra checks vóór ']'
    insert_str = "\n" + extra_checks_js + "\n    "
    return text[:closing_pos] + insert_str + text[closing_pos:]


def process_file(file_name, step_dict):
    path = SRC / file_name
    text = path.read_text(encoding="utf-8")
    original = text
    added_count = 0
    skipped_count = 0
    for step_title, checks in step_dict.items():
        checks_js = "\n".join([render_check(c) for c in checks])
        new_text = inject_into_step(text, step_title, checks_js)
        if new_text is None:
            print(f"      ! NIET GEVONDEN: stap '{step_title}' in {file_name}")
            continue
        if new_text == text:
            # Idempotent: al toegevoegd
            skipped_count += 1
        else:
            added_count += len(checks)
        text = new_text
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"  OK {file_name}: +{added_count} vragen toegevoegd ({skipped_count} stappen al gedaan)")
    else:
        print(f"  -- {file_name}: niets te doen ({skipped_count} stappen al gedaan)")


def main():
    print("Voeg extra Pincode-vragen toe...")
    for file_name, step_dict in VRAGEN.items():
        process_file(file_name, step_dict)
    print("\nKLAAR. Run npm run build om te valideren.")


if __name__ == "__main__":
    main()
