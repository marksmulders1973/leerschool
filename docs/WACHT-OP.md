# ⏳ Wacht-op / prio-lijst

*Alle open lussen: waar wachten we op een "ja", een antwoord of een levering. Dit is de single source of truth voor het prio-blok in elk dagrapport. Bijwerken bij elke mail-check: antwoord binnen → regel afvoeren + vervolgactie erbij zetten.*

## 🔴 Prio 1 — actie zodra antwoord binnenkomt
| Wat | Wacht op | Sinds | Daarna |
|---|---|---|---|
| **Spark Fest flyers (1.000 goodybags, festival zo 18 okt)** | 📦✅ **BEZORGD 31 jul 14:25 — bij de BUREN op Saskerstraat 225** (Inez woont op 227; PostNL T&T 3SDLTJ101142281, 4,18 kg, order 15653885, €43,56). 4 dagen eerder dan verwacht (di 4 aug). **Heads-up-mail naar Inez verstuurd 31 jul** (thread, incl. T&T-code) zodat ze weet dat ze bij de buren moet aanbellen. A5, 1.000 st., dubbelzijdig, 135 g/m² glans. Druk-PDF: `flyer-HAARLEMMERMEER2027-DRUK.pdf` (generator `scripts/maak-drukpdf-haarlemmermeer.mjs`) | 29 jul | (1) Wachten op Inez' bevestiging dat ze het pakket bij de buren heeft opgehaald; (2) **toestemming bedankt-pagina gevraagd ✅ 29 jul** — bij "ja" het klaarstaande Spark Fest-blok in `bedankt.html` activeren (uitgecommentarieerd onder Leergeld-sectie, evt. logo erbij); (3) LinkedIn-concept `Desktop\linkedin-sparkfest-post.md` POST 1 kan live — Mark plakt zelf; (4) september: Inez maakt tasjes, festival zo 18 okt → daarna scan-teller volgen (≥25 scans = goodybag-model uitrollen) |
| **Ooievaarspas Den Haag (vriend-status)** | ✅ 27 jul: Rob bevestigt "formulier goed binnengekomen"; **accountmanager Esther doet de beoordeling, "komen er z.s.m. op terug"** | 27 jul | Zij sturen vriend-overeenkomst via ValidSign (tekenen!) → plaatsing in OP-aanbod → stadspassen-batch naar andere gemeenten + /ooievaarspas.html-tekst omzetten naar "vriend van". |

## 🟠 Prio 2 — loopt, geduld
| Wat | Wacht op | Sinds | Daarna |
|---|---|---|---|
| Outreach-reacties (~355 mails: Leergeld, scholen, voedselbanken, huiswerkclubs, bibliotheken) | Zomervakantie voorbij | jul | Reacties verwacht v.a. eind aug; warme reacties → warme-leads-lijst + reply |
| **Voedselbank Lelystad** (voorzitter Theo Grootjen + heel bestuur in cc) vroeg 28 jul wat de band met Stichting Leergeld is | Besluit bestuur na onze uitleg (reply verstuurd 28 jul: geen formele band, wel samenwerkingen — eerlijk uitgelegd) | 28 jul | Bij "ja" → code LELYSTAD2027 aanmaken + flyer-aanbod |
| Leergeld Haarlemmermeer team-overleg over breder inzetten aanbod | Inez' team | 21 jul | Meenemen in Spark Fest-thread |
| Anthropic DPA/ZDR-addendum (privacy-fundament, o.a. voor OP-beoordeling) | Antwoord van Anthropic (sales@ + cc privacy@) | 27 jul | ZDR-addendum tekenen → DPIA §3 + privacy.html bijwerken; ~1-2 wkn |

## ✨ Familie-abonnement — BÈTA-LIVE (elke sessie 1 dagrapport-regel)
*Mark 1 aug: niet meer geheim. **Deel voor deel bouwen; per feature bij ~80% LIVE** (bèta-badge); grote coherentie-slag later in één Fable-pass. Vindbaar in de app via "✨ Familie-extra's (bèta)" op home + StudentHome (geen `?familie=1` meer nodig). Onafgemaakte features = "binnenkort"-tegels met beschrijving. Bron-memory: `project_studiebol_familie_tier_features` + `idea_studiebol_premium_printbare_hulp`.*

| Feature | Status | Geheime URL |
|---|---|---|
| 1 · Paraatheidsmeter 🚦 | ✅ klaar (v154) | `/familie/paraatheid?familie=1` |
| 3 · Printbaar op maat 📄 | ✅ oefenboekje (v153) + **ouderkaart "zo leg je 't uit" (v157)**; open: aanbod-kaart klaar-scherm + concept uit fout-historie | `/oefenboekje?boekje=1&pad=<id>` · `/ouderkaart?familie=1&kaart=<id>` |
| 8 · Printbaar diploma 🏅 | ✅ klaar (1 aug, v156); open: auto-prefill vanuit afgerond pad | `/diploma?familie=1&naam=<x>&onderwerp=<y>` |
| 2 · Vonk onbeperkt 🐉 | ⏳ te bouwen (framing/gating; AI zelf al gebouwd) | — |
| 4 · Weekmail 2.0 ✉️ | ⏳ te bouwen (hergebruik send-ouder-rapport) | — |
| 5 · Koelkast-weekschema 📅 | ⏳ te bouwen | — |
| 6 · Trots-momenten 🎉 | ⏳ te bouwen | — |
| 7 · Gezin — max 3 kinderen 👨‍👩‍👧 | ⏳ te bouwen | — |

**Stand: 3 van 8 klaar.** Volgende voorstel: feature 5 (koelkast-weekschema, combineert met oefenboekje + paraatheid) of feature 6 (trots-momenten).

## 🟡 Mark-acties (open)
- ✍️ **DPIA lezen + ondertekenen**: `docs/DPIA-LEERKWARTIER.md` (concept klaar 27 jul) — 15 min lezen, datum + handtekening invullen. Dan is je privacy-fundament klaar om te tonen aan gemeenten/scholen.
- ⚠️ **MoonPay-mail checken** ("Welcome to MoonPay via Pump.fun", 26 jul 22:51): heb jij dat account zelf aangemaakt? Zo niet: negeren en nergens op klikken (iemand gebruikte dan jouw mailadres). Claude navigeert niet naar financiële sites (vaste regel).
- 💼 **7 open LinkedIn-connectieverzoeken** accepteren/weigeren (jouw handwerk): Peter (Stichting Asha — mogelijk warme lead!), Mike, Ties, Leon, Harry, Daan, Henriëtte. Bij accepteren geldt de kruis-regel: nieuwe connectie → FB-uitnodiging (behalve Sonac).
- ~~Drukwerkdeal-order Spark Fest~~ ✅ 29 jul BESTELD & in productie (order 15653885, €43,56, levering di 4 aug bij Inez) — zie Prio 1-tabel.
- 👥 **Lid worden van je eigen FB-groep** Doorstroomtoets 2027 ("Lid worden"-knop, 1 tik) — je posts als persoon belanden nu in de spamfilter van de groep (ontdekt 27 jul; je dagvraag van 17 jul zat er 10 dagen in, is nu gepubliceerd).
- 👥 FB-groepen joinen (1 tik per stuk, uit 16 jul): Ouder zoekt kindercoach · Leerling in beeld - doorstroomtoets · Ouders met pubers (12-18).
- 🔔 Zelf abonneren op web-push (knop in de app).
- QR-flyer-flow zelf testen op telefoon.
- SQL `claim_link_code` draaien (audit 4 P1).
- Eind aug: LinkedIn-lanceringspost + go voor scholen-batch 2 + Leergeld-rest (55).
- Later overwegen: extra Leerkwartier-domeinen kopen (zie todo-memory).

## ✅ Recent afgerond (ter herinnering)
- 26 jul: Ooievaarspas-formulier getekend én geverifieerd voltooid.
- 23 jul: Spark Fest JA + flyer klaar en goedgekeurd.
- Supermarkt-schermen: Leerkwartier draait op 3 schermen.
