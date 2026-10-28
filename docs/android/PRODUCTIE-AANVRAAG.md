# Productie-aanvraag Play Store — antwoorden klaar (28 okt 2026)

Stand 28 okt 07:40: dashboard "12 testers zijn op dit moment voor **13** achtereenvolgende dagen aangemeld" → aanvraag kan op z'n vroegst **wo 29 okt** (mits niemand zich afmeldt). Google beoordeelt de aanvraag, daarna productie-release maken (zelfde AAB 1 (1.0.0) promoten of nieuwe bundel) en opnieuw ter beoordeling sturen (≤ 7 dagen).

## Antwoorden op de vragen van Google (eerlijk, uit onze eigen cijfers)
**Hoe makkelijk was het om testers te werven?** Lastig. Een persoonlijk netwerk (gezin, WhatsApp-groep "Leerkwartier tips", ouders uit de app) leverde na een week 9 testers; pas na een mailronde naar 35 bestaande gebruikers en een oproep in de app kwamen we op 12. De lijst telt nu 57 toegestane adressen; precies 12 bleven de hele periode aangemeld. Grootste hobbel: testers moeten een Google-account hebben en de opt-in-stap apart doen.

**Hoe heb je testers geworven?** 1) Familie en vrienden via WhatsApp; 2) bestaande gebruikers van de website (ouders en leerkrachten) per e-mail met de testlink; 3) een oproep op de eigen pagina in de web-app voor Android-bezoekers; 4) Facebook-post met video. Alle testers kregen dezelfde stappen: Google-account, opt-in-link, installeren.

**Hoe hebben testers je app gebruikt?** De app is een Trusted Web Activity om leerkwartier.app; wij meten app-openingen aan de bron `app.leerkwartier.twa`. 7-8 okt: 7 apparaten openden de app, één tester oefende 20 minuten en maakte 59 vragen; 14-15 okt 5 apparaten; 19 okt 1; daarna af en toe. Eén ouder (via de app) maakte een account voor haar zoon en vroeg zelf om de Play Store-versie. Gebruik was dus vooral de eerste dagen na installatie, daarna via de website verder.

**Welke feedback kreeg je en wat heb je ermee gedaan?** (1) Taalfout op het welkomstscherm (tester Jeremy) → dezelfde dag hersteld. (2) Groene adresbalk in de app (tester zag een Chrome-tabblad in plaats van een volledig scherm) → oorzaak: de Play App Signing-vingerafdruk ontbrak in `assetlinks.json`; hersteld in versie 068 (26 okt), daarna volledig scherm. (3) Ouders vroegen om één-tik koppelen zonder account → gebouwd (versie 071, 27 okt). (4) Kinderen vonden de startpagina te druk → vereenvoudigd (versie 066-069). Daarnaast liep een inhoudsronde over alle basisschoolvragen tijdens de test.

**Is je app klaar voor productie? Waarom?** Ja. De webversie draait sinds juni 2026 met ruim 1.200 actieve apparaten per 28 dagen en wordt dagelijks bijgewerkt; de app verschilt daar alleen in het jasje van. Crashes: geen (TWA). Privacybeleid, gezinsbeleid, data-safety en leeftijdsclassificatie zijn ingevuld; geen advertenties, geen in-app-aankopen. Wat we na productie nog doen: minSdk 24-herbouw zodat de automatische beveiliging weer aan kan, en een nl-NL-standaardtaal voor de winkelvermelding.

## Checklist vóór indienen (29 okt)
- [ ] Dashboard: 14 dagen vol (vinkje bij "ten minste 14 dagen").
- [ ] "Toegang tot productie aanvragen" → vragen beantwoorden met bovenstaande (kort, eigen woorden).
- [ ] Na goedkeuring: Productie → release maken → bundel uit Alpha kiezen (1 (1.0.0)) of nieuwe .aab; landen NL + BE; release-opmerkingen nl-NL.
- [ ] Winkelvermelding: standaardtaal nl-NL (open sinds 7 okt), teksten uit PLAY-STORE.md.
- [ ] Na publicatie: link in bedankt.html, voor-organisaties, Ooievaarspas-pagina (1 jan), socials; TesterOproep in de app uitzetten.
