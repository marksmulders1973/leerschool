# Twijfels groep I — drukwerk (public/drukwerk/*.html, 43 bestanden)

Legenda: **[S]** = sjabloon (staat in meerdere varianten), **[P]** = eenmalige partnerflyer/-poster.

1. **[S] Deelknoppen doen niets (ernst 3, logica — niet zelf gefixt)** — `flyer-DONGEN2027.html:92-96`, `flyer-DONGEN2027-drukwerk.html:92`, `flyer-ICHTHUS2027.html:67`, `flyer-KINDERZWERFBOEK2027.html:67`, `flyer-LEUDAL2027.html:67`, `flyer-OOIEVAAR2027.html:67`, `flyer-VLUCHTELINGEN2027.html:67`.
   Huidig: balk "📲 Digitaal delen …" met "WhatsApp" (`href="#"`), "🔗 Kopieer link", "📷 Toon QR". Er staat in deze bestanden geen script dat de knoppen koppelt; `.qr-toon` blijft `display:none`. In `public/leergeld-flyer.html:163` staat dat script wél (bij het kopiëren weggevallen).
   Voorstel: het deel-script uit leergeld-flyer.html meekopiëren (met de juiste URL per flyer), of de deel-balk weghalen.

2. **[S] Wie wordt aangesproken? (hulporganisaties-sjabloon, 14 flyers + bulk)** — bv. `flyer-BREDA2027.html:76-90`. De flyer spreekt eerst de organisatie aan ("Voor de gezinnen die u helpt …", "Vragen van uw stichting beantwoord ik persoonlijk") en daarna ineens het gezin ("Scan … uw telefoon … voor uw gezin óók heel 2027 gratis"). De lezer weet niet of hij hulpverlener of ouder is.
   Voorstel: cadeau-blok richten aan het gezin ("Gezinnen scannen de QR-code …"), of twee aparte versies (organisatie / gezin).

3. **[S] "Oefenboeken kosten €27 tot €40. Bijles kost €37 per uur. Onderzoeksjournalistiek liet zien …"** — alle hulp-flyers r.76/82/107, bulk r.49, folder-enschede r.66 ("al snel €30"). Prijzen en de bron-claim kan ik niet verifiëren; geen bron genoemd. Bulk: "Zo vergroot betaalde toetstraining …" volgt niet logisch uit twee prijzen. Voorstel: bron checken of afzwakken ("Oefenboeken en bijles kosten al snel tientallen euro's").

4. **[S] "Ook voor de bovenbouw: echte VMBO-examenvragen"** — hulp-flyers r.103/109/134, bulk r.63, folder-enschede r.94. "Bovenbouw" betekent voor een basisschool-ouder groep 6-8; hier is VMBO-bovenbouw bedoeld. Voorstel: "Ook voor oudere kinderen: echte VMBO-examenvragen met uitleg" (zoals de B1-flyers).

5. **[S] Gratis-periodes lopen uiteen (datums niet zelf gewijzigd)**:
   - `_template-flyer-b1.html:78,94`: "gratis in heel 2027 én 2028" — terwijl andere codes "t/m de Doorstroomtoets 2027" / "t/m 31-12-2027" beloven (CLAUDE.md: recht t/m 31-12-2027).
   - `flyer-ALMELO2027(-logo).html:55/57` [P]: "tot en met 2028".
   - `flyer-OOIEVAAR2027.html` [P]: "óók heel 2027 gratis, tot en met de Doorstroomtoets", terwijl OOIEVAAR-codes volgens CLAUDE.md "blijvend" recht geven.
   - Stickervellen [S] (4×): "Cadeau: scan → gratis t/m de Doorstroomtoets 2027" — leest alsof de hele app daarna betaald is (oefenen blijft gratis t/m 2031).
   Voorstel: Mark laat één regel per code vaststellen; sjabloon-tekst daarop afstemmen.

6. **[S] u- vs je-vorm** — huisregel zegt ouderteksten in "je"-vorm, geen "u". Vrijwel al het drukwerk (B1-flyers, hulp-sjabloon, folder, juf-start, nieuwkomers-brief, begeleidend briefje) gebruikt "u"; Buurtgezinnen-A/B/C, ALMELO, dia en posters gebruiken "je". Bewuste B1-keuze? Niet massaal omgezet. Kleine mengvormen binnen één bestand wél gefixt (fixes-I.json).

7. **[S] `juf-start-A4.html:95`** — "De leerkracht-functies kunt u de komende twee jaar kosteloos testen en gebruiken (tot en met de zomer van 2028)." Botst met huisregel "Scholen betalen niets" en met PrintHubPage ("voor scholen gratis, gegarandeerd t/m 2031"); suggereert betaling na 2028. Voorstel: "Voor scholen is Leerkwartier gratis, gegarandeerd t/m 2031."

8. **[P] `begeleidend-briefje.html:36`** — "maker van Leerkwartier — vader, geen bedrijf". Sinds de eenmanszaak/KvK-inschrijving mogelijk niet meer waar. Voorstel: "maker van Leerkwartier — een vader uit Nederland". (Persoonsnaam staat alleen als ondertekening; contact = hallo@, dat is goed.)
   Ook r.24: "Beste ___ ," — invulveld; bij leeg laten staat er "Beste ," (komma los). Alleen een aandachtspunt bij printen.

9. **[P] Saba (`flyer-SABA2027.html:61`, `poster-SABA2027.html:64`)** — Engelse payoff "Fifteen minutes a day — really understand what you learn." is geen vertaling van de slogan. Voorstel: "Fifteen minutes of learning a day, a lifetime of being smarter." (of de Nederlandse slogan laten staan). Poster opent met "A calm tutor in your pocket." (vertaling payoff — prima).

10. **[S] "Elke dag een gratis vraag van de dag met uitleg"** (hulp-flyers, folder) — dubbelop ("elke dag … van de dag"). Stijl; voorstel: "Elke dag een nieuwe gratis vraag, met uitleg".

11. **[P] `folder-enschede.html:98`** — "Printbare werkboeken … vraag ernaar bij uw bibliotheek" — liggen die werkboeken echt bij de bibliotheek in Enschede? Niet te verifiëren.

12. **[S] "geen proefperiode"** (hulp-sjabloon, bulk, folder, Saba "No trial") — Familie heeft een proefweek van 7 dagen. Voor codehouders klopt "geen proefperiode" wel; laten staan, maar let op bij een generieke druk.

13. **Nieuwkomers-thuisbrief vertalingen (gefixt in JSON: 2028 → 2031)** — de jaartallen in Arabisch/Oekraïens/Turks/Engels zijn aangepast naar de Nederlandse tekst ("gegarandeerd tot en met 2031", ook NieuwkomersPage). Graag even door een moedertaalspreker laten nalezen; als 2028 juist bedoeld was, de NL-regel aanpassen in plaats daarvan.

14. **Dev-jargon**: geen "leerpad/module" in het drukwerk gevonden. "Leermaatje", "Leesladder", "Familie-pakket" zijn productnamen — prima.
