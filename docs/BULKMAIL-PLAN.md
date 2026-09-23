# 📬 Bulkmail-plan op datum (stand wo 23 sep 2026)

> Spelregels: max 60 per werkdag (Resend-dagbudget 95) · organisaties op **maandagochtend 08:00-09:30** (idee B, 15 sep) · elke batch pas na Marks woord · warme leads nooit nudgen vóór de zachte-check-datum · Mark 16 sep: scholen batch 2 en het Enschede-bedankje blijven liggen tot hij het zelf zegt.

| Datum | Wat | Aantal | Kanaal | Stand |
|---|---|---|---|---|
| ✅ wo 16 sep | LOWAN batch 4 | 45 | Resend hallo@ | verstuurd 09:05 |
| ✅ ma 21 sep | LOWAN batch 5 | 45 | Resend | verstuurd 14:49 (Windows-taak liep pas bij de eerste start; log in LOWAN-BATCH-5.md) |
| ma 21 sep | Zachte checks: Voedselbank Lelystad (Dick Nauta), Leergeld Twenterand, Saba (adres flyers), School's cool Twente | 4 | Zapier-Gmail (reply in thread) | concepten eerst tonen |
| **wacht op "ga"** | LOWAN batch 6 (`LOWAN-BATCH-6.md`, klaargezet 23 sep, ontdubbeld t.o.v. 1-5) | 45 | Resend | `node scripts/outreach-send-lowan.mjs 45 docs/outreach/LOWAN-BATCH-6.md` — één woord van Mark |
| dag ná batch 6 | LOWAN batch 7 (`LOWAN-BATCH-7.md`, laatste 44; 4 scholen met kapotte namen overgeslagen) | 44 | Resend | na batch 6 → LOWAN compleet (325 in de lijst, 224+89 benaderd) |
| do 24 sep → ma 28 sep | Zachte checks Leudal + Ichthus gaan op in het 1 oktober-venster (één bericht i.p.v. twee) · evaluatie twee-weken-plan | 0 | — | concepten staan in `docs/outreach/1-oktober-venster.md` |
| vr 25 sep | Kinderzwerfboek zachte herinnering als nog stil (adres voor 50 flyers, vóór 1 okt op de post) | 1 | Gmail (reply in thread) | ✅ concept klaar (`1-oktober-venster.md` #4), na "ga" |
| ma 28 sep 08:00 | **1 oktober-venster** (Actie Pepernoot): kort berichtje aan de vijf organisaties die zelf materiaal vroegen — Leudal, Ichthus, VluchtelingenWerk, Kinderzwerfboek, (Ommeriek niet: gewone lezer) — met eigen code + toetsdatum + tag | 3 | Gmail (reply in thread) | ✅ concepten klaar (`docs/outreach/1-oktober-venster.md` #1-3: Leudal, Ichthus, VluchtelingenWerk), na "ga" |
| 23 sep ✅ / wacht | **S&O lokale aanbod-platforms** (OCW-tip 23 sep): Zoetermeer ✅ aangemeld 23 sep · Den Haag (andersomdenhaag.nl) antwoorden klaar, wacht op "doe maar" · daarna Amsterdam · Gouda via vrije mail | 3 | webformulier | één per keer, tekst eerst tonen |
| na Marks 3 keuzes | **Woningcorporaties ingang 1 (bewonersblad)** — concept klaar in `docs/outreach/woningcorporaties.md`; test met 2 (Staedion, Woonstad) of batch 8 | 2-8 | Resend/Gmail | codes + flyer-PDF per corporatie ná keuze |
| ma 28 sep (na 12:15) | KvK-nummer aan Esther (Ooievaarspas), informatieplicht | 1 | Zapier-Gmail | concept ligt klaar |
| ma 28 sep – vr 2 okt | **Scholen batch 2** (96, rij 16-111) — alléén als Mark het zelf weer wil; dan 60 op maandag + 36 op dinsdag | 96 | Resend | ⏸️ Mark 16 sep: niet |
| ma 5 okt 08:00 | **Fondsen-ronde** met het Kinderhulp-bewijs: Sam& (eerst), Stichting Armoedefonds, Quiet, SUN Nederland, Jeugdfonds Sport & Cultuur, Stichting Jarige Job, Leergeld Nederland, VluchtelingenWerk landelijk — per fonds eigen code + nieuwsbrief-tag | 8 | Resend/Gmail | concepten 5 klaar, 3 nog; na "stuur maar" |
| ~5 okt | Stadjerspas Groningen nudge · SUN Middelburg herbenaderen mét Ooievaarspas-keurmerk ("hoe was de startbijeenkomst van 10 sep?") | 2 | Zapier-Gmail | na KvK |
| ma 12 okt 08:00 | **Stadspassen-batch** (4-6 gemeenten/kindpakketten: "Den Haag doet al mee") + leveranciers-aanmeldingen | ~6 | Resend | na KvK + Esther-mail; concepten + adressen liggen klaar |
| ma 19 okt 08:00 | **Leergeld-mail mét prijs** (partner-aanbod 2028: €25/kind/jaar, gemeente betaalt) naar de 115 Leergeld-stichtingen — 60 + 55 op ma/di | 115 | Resend | tekst-akkoord Mark nodig; partner-rapport v1 eerst |
| di 20 okt | Spark Fest-napost + Inez bedanken (festival zo 18 okt) | 1 | LinkedIn/Gmail | Mark post zelf |
| okt | Check Leergeld Apeldoorn-Voorst (site + oktober-nieuwsbrief) | 0 | — | alleen kijken |
| half nov | **Kinderhulp januari-editie** aanvragen bij Marion (ánder item: "Doorstroomtoets over zes weken — gratis Kwartiercheck") — pas ná KvK én Stripe | 1 | Zapier-Gmail | concept Claude, Mark "stuur maar" |
| nov | Gemeentegesprekken (Amsterdam mét OKT-bewijs, Den Haag via Ooievaarspas) | 2-3 | Gmail | na KvK, vóór de begrotingen |
| **ma 1 dec 08:00** | **Opvolgbronnen-ronde** (1.235 organisaties: 8 weken tot de Doorstroomtoets) — 60/werkdag = ruim 4 weken, dus starten 1 dec en doorlopen t/m ~24 dec | 1.235 | Resend | vaste cadans (1 sep/1 dec/1 mei); tekst-akkoord Mark ~25 nov |
| dec | Voorverkoop Seizoenspas naar de e-maillijst (40) + weekmail-lezers | ~40 | Resend | na Stripe live |
| ~1 dec 2027 | Afloop-mail naar alle partnercodes (25+): hoe beviel het, verlengen? | 25+ | Resend | Mark-go |

**Niet mailen (bewust):** Marion/Kinderhulp (ere-blokje, tot 15 nov) · VluchtelingenWerk (wacht, dag 3) · Buurtgezinnen/Froukje · DPG/Tubantia · OKT Amsterdam (geen centraal adres; bewijsstuk voor het gemeentegesprek) · Rolf Zwart/Ommeriek (gewone lezer) · regionale pers vóór de KvK.

**Wat elke batch nodig heeft:** tekst-akkoord (één keer per reeks) → adressen ontdubbeld tegen `opvolgbronnen` en eerdere batches → verzendlog in het batch-doc → WACHT-OP + agenda bijgewerkt → reacties in het dagrapport (mail-check via browser zolang de Gmail-koppeling verlopen is).
