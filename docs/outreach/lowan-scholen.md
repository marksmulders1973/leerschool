# LOWAN Nieuwkomersscholen PO — Outreach-lijst

**Datum:** 2026-07-29
**Bron:** https://www.lowan.nl/po/scholen/ — WordPress REST API (`/wp-json/wp/v2/schools_po`)
**Status:** Automatisch verzameld via API; 326 scholen opgehaald
**Methode:** REST API `schools_po` custom post type (geen blokkade); schoolspecifieke contactgegevens staan NIET in de API (ACF-velden leeg); voor eerste 30 scholen handmatig website/email opgezocht via WebSearch
**Aantallen:** 326 scholen totaal | eerste 60 geverifieerd op eigen schoolwebsite (25 aug 2026): 55 met e-mail, 3 alleen formulier/afgeschermd, 1 geen school-eigen adres, 1 site blokkeert bots | plaats + contactpersoon + e-mail van ALLE 326 scholen staat in `lowan-contactdata-alle-326.json` (bron: LOWAN ajax-endpoint)
**Blokkades (OPGELOST 25 aug 2026):** de lijst-weergave van lowan.nl/po/scholen/ laadt via `POST https://www.lowan.nl/wp-admin/admin-ajax.php` met `action=load_schools&post_type=schools_po&page_number=1&count=400` — bevat per school plaats, adres, telefoon, contactpersoon + e-mail en website. Koppeling slug→school via post-ID (`postid-NNN` op detailpagina = `school_id` in ajax-item). Volledige dump: `lowan-contactdata-alle-326.json`. E-mailkolom rij 1-60 = alléén adressen die letterlijk op de eigen schoolwebsite staan; LOWAN-db-adressen staan als opmerking achter de rij.
**Aanvulstrategie:** scholenopdekaart.nl + schoolregister.nl + directe websearch per school voor resterende 296

---

## Tabel

| # | School/voorziening | Plaats | LOWAN-link | Website | E-mail |
|---|-------------------|--------|-----------|---------|--------|
| 1 | ABS Middelburg | Middelburg | https://www.lowan.nl/schools_po/abs-middelburg/ | https://www.absmiddelburg.nl/contact | info@absmiddelburg.nl |
| 2 | De Bosruiter | Zeewolde | https://www.lowan.nl/schools_po/de-bosruiter/ | https://debosruiterzeewolde.nl/ouders-en-contact/ | info.bosruiter@flevion.nl | ook betty.geerse@flevion.nl (dir.)
| 3 | Dynamica XL VSO | Zaandam | https://www.lowan.nl/schools_po/dynamica-xl-vso/ | https://www.dynamicaonderwijs.nl/contact | s.beugeling@zaanprimair.nl | overkoepelend Dynamica-contact; LOWAN-db: k.nasole@zaanprimair.nl
| 4 | Monseigneur Bekkersschool | Delft | https://www.lowan.nl/schools_po/monseigneur-bekkersschool/ | https://www.mgrbekkersschool.nl/contact | mgrbekkers@laurentiusstichting.nl |
| 5 | De Parel | Zutphen | https://www.lowan.nl/schools_po/de-parel/ | https://obsdeparel.nl/ | directie.obsdeparel@archipelprimair.nl |
| 6 | IKC Kleurrijk | Waddinxveen | https://www.lowan.nl/schools_po/ikc-kleurrijk/ | https://kleurrijk-levwn.nl/ | administratiekleurrijk@levwn.nl | in footer
| 7 | De Gevers Deynootschool | Voorschoten | https://www.lowan.nl/schools_po/de-gevers-deynootschool/ | https://www.gevers.pcsv.nl/contact/ | info@gevers.pcsv.nl | plaats = Voorschoten (niet Den Haag)
| 8 | Nieuwkomersschool De Kleine Wereld | Groningen | https://www.lowan.nl/schools_po/nieuwkomersschool-de-kleine-wereld/ | https://www.kleinewereld.nl/ | info@kleinewereld.nl |
| 9 | UWC Maastricht | Maastricht | https://www.lowan.nl/schools_po/uwc-maastricht/ | https://www.uwcmaastricht.nl/contact | info@uwcmaastricht.nl |
| 10 | De Verbinding | Ureterp | https://www.lowan.nl/schools_po/de-verbinding/ | https://deverbinding-ureterp.nl/ | verbinding@noorderbasis.nl | eerder als Lent genoteerd; LOWAN = Ureterp (NoorderBasis)
| 11 | Rkbs de Regenboog | Den Haag | https://www.lowan.nl/schools_po/rkbs-de-regenboog/ | https://rkbsderegenboogdenhaag.nl/ | info@regenboog.lucasonderwijs.nl |
| 12 | Regionale taalschool | Doetinchem | https://www.lowan.nl/schools_po/regionale-taalschool/ | https://pro8.nu | — | alleen formulier op site; LOWAN-db: e.ruesink@pro8.nu
| 13 | P.I. School Hondsberg | Oisterwijk | https://www.lowan.nl/schools_po/p-i-school-hondsberg/ | https://www.pischoolhondsberg.nl | infopi@koraal.nl |
| 14 | Taalschool De Liemers | Zevenaar | https://www.lowan.nl/schools_po/taalschool-de-liemers/ | https://taalschooldeliemers.nl/contact | — | e-mail afgeschermd (JS-cloak); LOWAN-db: maria.grob@liemersnovum.nl
| 15 | De Drie Linden | Den Haag | https://www.lowan.nl/schools_po/de-drie-linden/ | https://www.basisschooldedrielinden.nl | info@drielinden.lucasonderwijs.nl |
| 16 | OBS de Notenkraker | Den Haag | https://www.lowan.nl/schools_po/obs-de-notenkraker-2/ | http://www.obsdenotenkraker.nl | info@obsdenotenkraker.nl |
| 17 | KC Diamant | Den Haag | https://www.lowan.nl/schools_po/kc-diamant/ | https://www.kcdiamant.nl | info@kcdiamant.nl |
| 18 | OBS het Galjoen | Den Haag | https://www.lowan.nl/schools_po/obs-het-galjoen/ | https://www.obs-hetgaljoen.nl/ | info@obsgaljoen.nl |
| 19 | P. Oosterleeschool | Den Haag | https://www.lowan.nl/schools_po/p-oosterleeschool/ | https://oosterleeschool.nl/ | oosterlee@scoh.nl |
| 20 | Cornelis Musiusschool | Delft | https://www.lowan.nl/schools_po/cornelis-musiusschool/ | https://www.cornelismusius.nl/ | cornelismusius@laurentiusstichting.nl |
| 21 | Regionale taalschool Mundus | Alphen aan den Rijn | https://www.lowan.nl/schools_po/regionale-taalschool-mundus/ | https://mundus.scopescholen.nl | mundus@scopescholen.nl |
| 22 | Het Karrepad | Groningen | https://www.lowan.nl/schools_po/het-karrepad/ | https://hetkarrepad.openbaaronderwijsgroningen.nl/ | administratie@karrepad.o2g2.nl |
| 23 | Prinses Ireneschool | Den Haag | https://www.lowan.nl/schools_po/prinses-ireneschool-2/ | https://prinsesireneschooldenhaag.nl/ | school@irene.scoh.nl |
| 24 | Stichting Pas | Arnhem | https://www.lowan.nl/schools_po/stichting-pas-2/ | https://www.stichtingpas.nl/ | info@stichtingpas.nl | nieuwkomersonderwijs Arnhem e.o.
| 25 | Hanevoet | Eindhoven | https://www.lowan.nl/schools_po/hanevoet/ | https://www.bs-hanevoet.nl | hanevoet@salto-eindhoven.nl |
| 26 | Buitenwijs | Zwolle | https://www.lowan.nl/schools_po/buitenwijs/ | https://www.onderwijstransformeert.nl/ | info@onderwijstransformeert.nl | valt onder Onderwijs Transformeert
| 27 | Sport OBS 't Kruisrak | Bunschoten-Spakenburg | https://www.lowan.nl/schools_po/sport-obs-t-kruisrak/ | https://kruisrak.nl/ | directie@kruisrak.nl |
| 28 | Springbok International | Den Haag | https://www.lowan.nl/schools_po/springbok-international/ | https://www.springbokinternational.nl/ | obs@springbokinternational.nl |
| 29 | PCBS de Driemaster | Voorburg | https://www.lowan.nl/schools_po/pcbs-de-driemaster/ | https://driemastervoorburg.nl/ | info@driemastervoorburg.nl |
| 30 | KC Leyenburg | Den Haag | https://www.lowan.nl/schools_po/kc-leyenburg/ | https://kcleyenburg.nl/ | leyenburg@scoh.nl |
| 31 | De Regenboog | Oldenzaal | https://www.lowan.nl/schools_po/de-regenboog-3/ | https://www.rboog.nl/contact | b.degraaf@konot.nl | directeur
| 32 | KC Oda en KC Loper | Maastricht | https://www.lowan.nl/schools_po/kc-oda-en-kc-loper/ | https://www.oda-bs.nl/contact | — | alleen formulier; LOWAN-db: i.lammerschop@mosalira.nl
| 33 | Kindcentrum Mozaïek | Helmond | https://www.lowan.nl/schools_po/kindcentrum-mozaiek/ | https://kc-mozaiek.nl/ | directie@kc-mozaiek.nl |
| 34 | Obs Houtwijk | Den Haag | https://www.lowan.nl/schools_po/obs-houtwijk/ | https://www.obshoutwijk.nl/ | info@obshoutwijk.nl |
| 35 | Wereldschool Amstelveen | Amstelveen | https://www.lowan.nl/schools_po/wereldschool-amstelveen/ | https://wereldschool-amstelveen.nl/ | — | site blokkeert geautomatiseerde toegang (403); LOWAN-db: g.vanderzon@ogamstelland.nl
| 36 | SALTO-basisschool 't Karregat | Eindhoven | https://www.lowan.nl/schools_po/salto-basisschool-t-karregat/ | https://www.bs-karregat.nl/ | karregat@salto-eindhoven.nl |
| 37 | WereldKidz Pimpelmees | Veenendaal | https://www.lowan.nl/schools_po/pimpelmees/ | https://pimpelmees.wereldkidz.nl/Contact | koenhols@wereldkidz.nl | schoolleider; team-adressen op contactpagina
| 38 | OBS Mathenesse | Rotterdam | https://www.lowan.nl/schools_po/obs-matheness/ | https://obsmathenesse.nl/ | info@obsmathenesse.nl |
| 39 | Taalatelier Nieuwegein | Nieuwegein | https://www.lowan.nl/schools_po/taalatelier-nieuwegein/ | https://sbo-evenaar.nl/contact | info@sbo-evenaar.nl | Taalatelier valt onder SBO Evenaar
| 40 | Basisschool Olof Palme | Drunen | https://www.lowan.nl/schools_po/basisschool-olof-palme/ | https://www.olof-palme.nl/contact/ | info@olof-palme.nl |
| 41 | OBS De Globe | Rotterdam | https://www.lowan.nl/schools_po/obs-de-globe/ | https://www.obsdeglobe.nl/401/726/contact-met-de-school.html | info@obsdeglobe.nl |
| 42 | IBS De Nieuwe Maan | Delft | https://www.lowan.nl/schools_po/ibs-de-nieuwe-maan/ | https://www.ibsdenieuwemaan.nl/ | info@ibsdenieuwemaan.nl |
| 43 | Saltoschool De Bergen | Eindhoven | https://www.lowan.nl/schools_po/saltoschool-de-bergen/ | https://www.bs-bergen.nl | philipsdorp@salto-eindhoven.nl |
| 44 | OBS Route 0513 | Heerenveen | https://www.lowan.nl/schools_po/obs-route-0513/ | https://www.obsroute0513.nl/nl/contact/contactgegevens | directieroute0513@ambion.nl |
| 45 | PCB De Wegwijzer | Krimpen aan de Lek | https://www.lowan.nl/schools_po/pcb-de-wegwijzer/ | https://pcb-dewegwijzer.nl/contact/ | info@pcb-dewegwijzer.nl |
| 46 | Taalschool Wereldrijk | Sprang-Capelle (gem. Waalwijk) | https://www.lowan.nl/schools_po/taalschool-wereldrijk/ | https://www.bsdevrijhoeve.nl/ | directiedevrijhoeve@leerrijk.nl | taalschool valt onder BS De Vrijhoeve
| 47 | Het Oelebred | Tynaarlo | https://www.lowan.nl/schools_po/het-oelebred/ | https://www.hetoelebred.nl | directie.hetoelebred@stichtingbaasis.nl |
| 48 | De Pelikaan | Putten | https://www.lowan.nl/schools_po/de-pelikaan/ | https://www.pcbdepelikaan.nl/ | directie.pcbdepelikaan@vpcoputten.nl |
| 49 | Adelbrecht-Windekind | Groesbeek | https://www.lowan.nl/schools_po/adelbrecht-windekind/ | https://bs-adelbrecht.nl/ | jenaplan.adelbrecht@leerenfloreer.nl |
| 50 | KC de Boog | Eindhoven | https://www.lowan.nl/schools_po/kc-de-boog/ | https://bsdeboog.nl | deboog@skpo.nl |
| 51 | 't Slingertouw | Eindhoven | https://www.lowan.nl/schools_po/t-slingertouw/ | https://basisschoolslingertouw.nl/contact | slingertouw@skpo.nl |
| 52 | De Ark | Almere | https://www.lowan.nl/schools_po/de-ark/ | https://ark-almere.nl/ | dir.ark@prisma-almere.nl |
| 53 | Aventurijn | Houten | https://www.lowan.nl/schools_po/aventurijn/ | https://www.basisschoolaventurijn.nl/ | directie@basisschoolaventurijn.nl |
| 54 | Josephschool | Pijnacker | https://www.lowan.nl/schools_po/josephschool/ | https://www.josephschoolpijnacker.nl/ | info@josephschoolpijnacker.nl | LOWAN-db taalklas: taalklaspijnacker@skoppijnacker.nl
| 55 | Ondersteuningsteam De Stipe | Wolvega | https://www.lowan.nl/schools_po/de-stipe/ | https://destipe.nl/ | info@destipe.nl |
| 56 | Basisschool Kameleon | Goirle | https://www.lowan.nl/schools_po/basisschool-kameleon/ | https://www.kameleon-goirle.nl | — | geen school-eigen adres op site (alleen stichting/BSO etuda.nl); LOWAN-db: marielle.vanoorschot@etuda.nl
| 57 | Taalcentrum Almere | Almere | https://www.lowan.nl/schools_po/taalcentrum-almere/ | https://www.taalcentrumalmere.nl/ | info@taalcentrumalmere.nl |
| 58 | De Globe Bussum | Bussum | https://www.lowan.nl/schools_po/de-globe-bussum/ | https://www.globe-school.nl/ | info.globe@proceon.nl |
| 59 | Taalschool Innoord | Amsterdam | https://www.lowan.nl/schools_po/taalschool-innoord/ | https://taalschool.innoord.nl | info.taalschool@innoord.nl |
| 60 | Aquamarijn/Feniks (De TaalBrug) | Groningen | https://www.lowan.nl/schools_po/aquamarijn-feniks/ | https://defeniks.openbaaronderwijsgroningen.nl/ | info@defeniks.o2g2.nl | TaalBrug ook op cbsaquamarijn.nl (a.rensen@vcog.nl)
| 61 | IKC Wonderwijs | — | https://www.lowan.nl/schools_po/ikc-wonderwijs/ | — | — |
| 62 | OBS De Wissel | — | https://www.lowan.nl/schools_po/obs-de-wissel/ | — | — |
| 63 | De Startbaan | — | https://www.lowan.nl/schools_po/de-startbaan/ | — | — |
| 64 | OBS Kasteel Spangen | — | https://www.lowan.nl/schools_po/obs-kasteel-spangen/ | — | — |
| 65 | Taalatelier Houten | Houten | https://www.lowan.nl/schools_po/taalatelier-houten/ | — | — |
| 66 | Wereldschool Taalrijk | — | https://www.lowan.nl/schools_po/wereldschool-taalrijk/ | — | — |
| 67 | De Bornput | — | https://www.lowan.nl/schools_po/rehobothschool/ | — | — |
| 68 | Taalschool Salland | Raalte | https://www.lowan.nl/schools_po/taalschool-salland/ | https://taalschoolsalland.nl | info@taalschoolsalland.nl |
| 69 | De Kameleon | — | https://www.lowan.nl/schools_po/kbs-kameleon/ | — | — |
| 70 | Meester Schabergschool | — | https://www.lowan.nl/schools_po/meester-schabergschool/ | — | — |
| 71 | KC de Wilgen | — | https://www.lowan.nl/schools_po/kc-de-wilgen/ | — | — |
| 72 | OBS Anne Frank | — | https://www.lowan.nl/schools_po/obs-anne-frank/ | — | — |
| 73 | Het Palet | — | https://www.lowan.nl/schools_po/het-palet/ | — | — |
| 74 | Nieuwkomersschool Zwolle | Zwolle | https://www.lowan.nl/schools_po/nieuwkomersschool-zwolle/ | http://nieuwkomersschoolzwolle.nl | info@catent.nl |
| 75 | OBS De Draaimolen | — | https://www.lowan.nl/schools_po/obs-de-draaimolen/ | — | — |
| 76 | De Kosmopoliet | — | https://www.lowan.nl/schools_po/de-kosmopoliet/ | — | — |
| 77 | De Klimop | — | https://www.lowan.nl/schools_po/de-klimop/ | — | — |
| 78 | Silvester-Bernadette | — | https://www.lowan.nl/schools_po/silvester-bernadette/ | — | — |
| 79 | De Klapwiek | — | https://www.lowan.nl/schools_po/de-klapwiek/ | — | — |
| 80 | Daltonschool Rhenen-Elst | Rhenen | https://www.lowan.nl/schools_po/daltonschool-rhenen-elst/ | — | — |
| 81 | SALTOschool 'De Hobbitstee' | — | https://www.lowan.nl/schools_po/saltoschool-de-hobbitstee/ | — | — |
| 82 | Rembrandtschool | — | https://www.lowan.nl/schools_po/rembrandtschool/ | — | — |
| 83 | Groen van Prinstererschool | — | https://www.lowan.nl/schools_po/groen-van-prinstererschool/ | — | — |
| 84 | Nieuwkomersschool West Betuwe | West Betuwe | https://www.lowan.nl/schools_po/tov-nieuwkomersschool-west-betuwe/ | — | — |
| 85 | De Wingerd | — | https://www.lowan.nl/schools_po/de-wingerd/ | — | — |
| 86 | De Vlieger | — | https://www.lowan.nl/schools_po/de-vlieger-3/ | — | — |
| 87 | KC de Horizon, Doesburg | Doesburg | https://www.lowan.nl/schools_po/kc-de-horizon-doesburg/ | — | — |
| 88 | De Drijfveer | — | https://www.lowan.nl/schools_po/de-drijfveer/ | — | — |
| 89 | MKC Anne Frankschool | — | https://www.lowan.nl/schools_po/mkc-anne-frankschool/ | — | — |
| 90 | Obs de Negen Wieken | — | https://www.lowan.nl/schools_po/obs-de-negen-wieken/ | — | — |
| 91 | EA Borgerschool | — | https://www.lowan.nl/schools_po/ea-borgerschool-2/ | — | — |
| 92 | IKC De Heerdstee | — | https://www.lowan.nl/schools_po/ikc-de-heerdstee/ | — | — |
| 93 | De Kabas | — | https://www.lowan.nl/schools_po/de-kabas/ | — | — |
| 94 | Stichting PAS | — | https://www.lowan.nl/schools_po/stichting-pas/ | — | — |
| 95 | Neuteboomschool loc. Obs. Wereldwijs | — | https://www.lowan.nl/schools_po/obs-wereldwijs/ | — | — |
| 96 | Basisschool aan 't Heike | — | https://www.lowan.nl/schools_po/basisschool-aan-t-heike/ | — | — |
| 97 | Scola | — | https://www.lowan.nl/schools_po/innova/ | — | — |
| 98 | CBS De Rank | — | https://www.lowan.nl/schools_po/cbs-de-rank-2/ | — | — |
| 99 | KC Moerschans | — | https://www.lowan.nl/schools_po/kc-moerschans/ | — | — |
| 100 | IKC de Kasteeltuyn | — | https://www.lowan.nl/schools_po/ikc-de-kasteeltuyn/ | — | — |
| 101 | Schakelklas Beverwaard | Rotterdam | https://www.lowan.nl/schools_po/schakelklas-beverwaard/ | — | — |
| 102 | Nieuwkomers Basisschool | Tilburg | https://www.lowan.nl/schools_po/oekraine-tilburg-po/ | — | — |
| 103 | KC de Pionier | — | https://www.lowan.nl/schools_po/kc-de-springplank/ | — | — |
| 104 | AZC school Het Uitzicht | — | https://www.lowan.nl/schools_po/azc-school-het-uitzicht/ | — | — |
| 105 | IKC Johannes Post | — | https://www.lowan.nl/schools_po/ikc-johannes-post/ | — | — |
| 106 | Daltonschool Eglantier Buiten | Delft | https://www.lowan.nl/schools_po/de-delftse-daltonschool/ | — | — |
| 107 | Schakelklassen KC de Rietpluim | — | https://www.lowan.nl/schools_po/schakelklassen-kc-de-rietpluim/ | — | — |
| 108 | Nieuwkomersklas Tiel | Tiel | https://www.lowan.nl/schools_po/nieuwkomersklas-tiel/ | — | — |
| 109 | 't Noorderlicht | — | https://www.lowan.nl/schools_po/t-noorderlicht/ | — | — |
| 110 | Prisma | — | https://www.lowan.nl/schools_po/prisma/ | — | — |
| 111 | Sint Bavoschool | — | https://www.lowan.nl/schools_po/sint-bavoschool-2/ | — | — |
| 112 | BS De Kleine Wereld | — | https://www.lowan.nl/schools_po/bs-de-kleine-wereld/ | — | — |
| 113 | Basisschool De Groene Wereld | — | https://www.lowan.nl/schools_po/basisschool-sint-jozef/ | — | — |
| 114 | De Globe | — | https://www.lowan.nl/schools_po/de-globe-2/ | — | — |
| 115 | De Klinkert | — | https://www.lowan.nl/schools_po/de-klinkert/ | — | — |
| 116 | IKC Triade / Taalsmeer | — | https://www.lowan.nl/schools_po/ikc-triade/ | — | — |
| 117 | Kamperfoelieschool | — | https://www.lowan.nl/schools_po/kamperfoelieschool/ | — | — |
| 118 | Stephanusschool | — | https://www.lowan.nl/schools_po/stephanusschool/ | — | — |
| 119 | Basisschool De Horizon | — | https://www.lowan.nl/schools_po/de-horizon-2/ | — | — |
| 120 | O.b.s. De Voshaar | — | https://www.lowan.nl/schools_po/o-b-s-de-voshaar/ | — | — |
| 121 | Taalklas Tholen | Tholen | https://www.lowan.nl/schools_po/taalklas-tholen/ | — | — |
| 122 | CBS de Ark | — | https://www.lowan.nl/schools_po/cbs-de-ark/ | — | — |
| 123 | WereldKidz Albatros | — | https://www.lowan.nl/schools_po/wereldkidz-albatros/ | — | — |
| 124 | Basisschool het Mozaïek (hoofdlocatie) | — | https://www.lowan.nl/schools_po/basisschool-het-mozaiek-hoofdlocatie/ | — | — |
| 125 | Kindercampus Mondriaan | — | https://www.lowan.nl/schools_po/kindercampus-mondriaan/ | — | — |
| 126 | De Kameleon | — | https://www.lowan.nl/schools_po/de-kameleon/ | — | — |
| 127 | Wereldwijs | — | https://www.lowan.nl/schools_po/wereldwijs-2/ | — | — |
| 128 | OBS de Duizendpoot | — | https://www.lowan.nl/schools_po/obs-de-duizendpoot/ | — | — |
| 129 | Opstap | — | https://www.lowan.nl/schools_po/de-opstap-2/ | — | — |
| 130 | Cbs het Palet | — | https://www.lowan.nl/schools_po/cbs-het-palet/ | — | — |
| 131 | OBS De Piramide | — | https://www.lowan.nl/schools_po/obs-de-piramide/ | — | — |
| 132 | RKBS De Rozenhorst | — | https://www.lowan.nl/schools_po/rkbs-de-rozenhorst/ | — | — |
| 133 | De Groene Vlinder | — | https://www.lowan.nl/schools_po/de-groene-vlinder/ | — | — |
| 134 | De Wereldwijzer | — | https://www.lowan.nl/schools_po/de-wereldwijzer/ | — | — |
| 135 | Kindcentrum De Wentelwiek | — | https://www.lowan.nl/schools_po/kindcentrum-de-wentelwiek/ | — | — |
| 136 | EBS de Fontein | — | https://www.lowan.nl/schools_po/ebs-de-fontein/ | — | — |
| 137 | Burgemeester de Vlugtschool | Amsterdam | https://www.lowan.nl/schools_po/burgemeester-de-vlugtschool/ | — | — |
| 138 | Interschool | — | https://www.lowan.nl/schools_po/interschool-2/ | — | — |
| 139 | De OpStap | — | https://www.lowan.nl/schools_po/de-opstap/ | — | — |
| 140 | De Weidebloesem | — | https://www.lowan.nl/schools_po/de-weidebloem/ | — | — |
| 141 | Kindcentrum Paulus | — | https://www.lowan.nl/schools_po/bs-st-paulus/ | — | — |
| 142 | Kindcentrum 't Loont (SKOV) | — | https://www.lowan.nl/schools_po/josefschool/ | — | — |
| 143 | De Feniks | — | https://www.lowan.nl/schools_po/de-feniks/ | — | — |
| 144 | OBS de Horizon | — | https://www.lowan.nl/schools_po/obs-de-horizon/ | — | — |
| 145 | Chr. Basisschool De Sleutel | — | https://www.lowan.nl/schools_po/cbs-de-sleutel/ | — | — |
| 146 | Wereldkidz Op Dreef | — | https://www.lowan.nl/schools_po/wereldkidz-op-dreef/ | — | — |
| 147 | Wereldkidz de Hoogstraat | — | https://www.lowan.nl/schools_po/wereldkidz-de-hoogstraat/ | — | — |
| 148 | UnieK | — | https://www.lowan.nl/schools_po/uniek/ | — | — |
| 149 | Toermalijn | — | https://www.lowan.nl/schools_po/toermalijn/ | — | — |
| 150 | TEC Zierikzee | Zierikzee | https://www.lowan.nl/schools_po/tec-zierikzee/ | — | — |
| 151 | TEC Terneuzen | Terneuzen | https://www.lowan.nl/schools_po/tec-terneuzen/ | — | — |
| 152 | Taalschool Voila | — | https://www.lowan.nl/schools_po/expertisecentrum-taalgroepen-voila/ | — | — |
| 153 | Taalschool Utrecht | Utrecht | https://www.lowan.nl/schools_po/taalschool-utrecht/ | — | — |
| 154 | Taalschool Midden-Groningen | — | https://www.lowan.nl/schools_po/taalschool-midden-groningen/ | — | — |
| 155 | Taalschool de WereldDelen | Heerlen | https://www.lowan.nl/schools_po/taalschool-de-werelddelen/ | https://www.taalschooldewerelddelen.nl | — |
| 156 | Taalschakelklas Lochem | Lochem | https://www.lowan.nl/schools_po/taalschakelklas-lochem/ | — | — |
| 157 | Wereldwijzer – Taalklassen | Hoogland | https://www.lowan.nl/schools_po/taalklassen-wereldwijzer-hoogland/ | https://www.wereldwijzertaalklassen.nl | — |
| 158 | Taalklas Uden | Uden | https://www.lowan.nl/schools_po/taalklas-uden/ | — | — |
| 159 | Nieuwkomersschool De Wereld | — | https://www.lowan.nl/schools_po/taalklas-duin-bollenstreek/ | — | — |
| 160 | Taalklas DRV | — | https://www.lowan.nl/schools_po/taalklas-drv/ | — | — |
| 161 | OBS De Lijster | Barneveld | https://www.lowan.nl/schools_po/taalklas-barneveld/ | — | — |
| 162 | Tec Walcheren | Walcheren | https://www.lowan.nl/schools_po/tec-walcheren/ | — | — |
| 163 | Filios Scholengroep | — | https://www.lowan.nl/schools_po/stichting-skpo-novum/ | — | — |
| 164 | St. Jozefschool | — | https://www.lowan.nl/schools_po/st-jozefschool/ | — | — |
| 165 | RKBS Sint Joseph | — | https://www.lowan.nl/schools_po/sint-joseph/ | — | — |
| 166 | Sint Bavoschool | — | https://www.lowan.nl/schools_po/sint-bavoschool/ | — | — |
| 167 | Schakelvoorziening Emmeloord | Emmeloord | https://www.lowan.nl/schools_po/schakelvoorziening-emmeloord/ | — | — |
| 168 | Schakelklas Woerden | Woerden | https://www.lowan.nl/schools_po/schakelklas-woerden/ | — | — |
| 169 | Taalschool Westland | Westland | https://www.lowan.nl/schools_po/schakelklas-westland/ | — | — |
| 170 | SBO De Lings | — | https://www.lowan.nl/schools_po/sbo-de-lings/ | — | — |
| 171 | SBO De Diamant | — | https://www.lowan.nl/schools_po/sbo-de-diamant/ | — | — |
| 172 | SALTO school De Tempel | — | https://www.lowan.nl/schools_po/salto-montessorischool-de-tempel/ | — | — |
| 173 | Rosj Pina | — | https://www.lowan.nl/schools_po/rosj-pina/ | — | — |
| 174 | RK BSO De Meule | — | https://www.lowan.nl/schools_po/rk-bso-de-meule/ | — | — |
| 175 | R. de Jagerschool | — | https://www.lowan.nl/schools_po/r-de-jagerschool/ | — | — |
| 176 | Prinses Ireneschool | — | https://www.lowan.nl/schools_po/prinses-ireneschool/ | — | — |
| 177 | Prinses Beatrixschool | — | https://www.lowan.nl/schools_po/prinses-beatrixschool/ | — | — |
| 178 | POL de Bosrand | — | https://www.lowan.nl/schools_po/pol-de-bosrandweg/ | — | — |
| 179 | De Schakel | — | https://www.lowan.nl/schools_po/pnielschool/ | — | — |
| 180 | Pieter Bas | — | https://www.lowan.nl/schools_po/pieter-bas/ | — | — |
| 181 | Het Kompas | — | https://www.lowan.nl/schools_po/pcbs-het-kompas/ | — | — |
| 182 | Paulusschool | — | https://www.lowan.nl/schools_po/paulusschool-2/ | — | — |
| 183 | Pastoor Galamaschool | — | https://www.lowan.nl/schools_po/pastoor-galamaschool/ | — | — |
| 184 | Onze Wereld | — | https://www.lowan.nl/schools_po/onze-wereld/ | — | — |
| 185 | OJBS De Omnibus, Baarlo | Baarlo | https://www.lowan.nl/schools_po/omnibus/ | — | — |
| 186 | Olympiaschool | — | https://www.lowan.nl/schools_po/olympiaschool/ | — | — |
| 187 | OBS Over de Slinge | Rotterdam | https://www.lowan.nl/schools_po/obs-over-de-slinge/ | — | — |
| 188 | MiMundo | — | https://www.lowan.nl/schools_po/obs-oosterschool/ | — | — |
| 189 | OBS Harlekijn | — | https://www.lowan.nl/schools_po/obs-harlekijn/ | — | — |
| 190 | OBS Hagen | — | https://www.lowan.nl/schools_po/obs-hagen/ | — | — |
| 191 | OBS de Wereld | — | https://www.lowan.nl/schools_po/obs-de-wereld/ | — | — |
| 192 | Jorisschool | — | https://www.lowan.nl/schools_po/obs-de-wegwijzer/ | — | — |
| 193 | Kindcentrum De Waaier | — | https://www.lowan.nl/schools_po/obs-de-waaier/ | — | — |
| 194 | OBS De Vlonder | — | https://www.lowan.nl/schools_po/obs-de-vlonder/ | — | — |
| 195 | OBS De Vlinderboom (NT2) | — | https://www.lowan.nl/schools_po/obs-de-vlinderboom-nt2-onderwijs/ | — | — |
| 196 | OBS De Verrekijker | — | https://www.lowan.nl/schools_po/obs-de-verrekijker/ | — | — |
| 197 | Obs De Veenvlinder | — | https://www.lowan.nl/schools_po/obs-de-veenvlinder/ | — | — |
| 198 | De Springplank | — | https://www.lowan.nl/schools_po/obs-de-toonladder/ | — | — |
| 199 | OBS de Tarthorst | — | https://www.lowan.nl/schools_po/obs-de-tarthorst/ | — | — |
| 200 | OBS De Straap | — | https://www.lowan.nl/schools_po/obs-de-straap/ | — | — |
| 201 | Obs de Springplank | — | https://www.lowan.nl/schools_po/obs-de-springplank/ | — | — |
| 202 | OBS De Smeltkroes | — | https://www.lowan.nl/schools_po/obs-de-smeltkroes/ | — | — |
| 203 | Kindcentrum De Vindplaats | — | https://www.lowan.nl/schools_po/kindcentrum-de-vindplaats/ | — | — |
| 204 | OBS de Poolster | — | https://www.lowan.nl/schools_po/obs-de-poolster/ | — | — |
| 205 | OBS De Notenkraker | — | https://www.lowan.nl/schools_po/obs-de-notenkraker/ | — | — |
| 206 | OBS de Meridiaan | — | https://www.lowan.nl/schools_po/obs-de-meridiaan/ | — | — |
| 207 | IKC De Kroon | — | https://www.lowan.nl/schools_po/obs-de-meerpaal/ | — | — |
| 208 | Kindcentrum Universum | — | https://www.lowan.nl/schools_po/obs-de-jules-verne/ | — | — |
| 209 | Obs De Egelantier | — | https://www.lowan.nl/schools_po/obs-de-egelantier/ | — | — |
| 210 | OBS De Dolfijn | — | https://www.lowan.nl/schools_po/obs-de-dolfijn/ | — | — |
| 211 | Obs de Dennenkamp | — | https://www.lowan.nl/schools_po/obs-de-dennenkamp/ | — | — |
| 212 | OBS de Bloemberg | — | https://www.lowan.nl/schools_po/obs-de-bloemberg/ | — | — |
| 213 | Obs Dakpark | Rotterdam | https://www.lowan.nl/schools_po/obs-dakpark/ | — | — |
| 214 | OBS 't Montferland | — | https://www.lowan.nl/schools_po/obs-t-montferland/ | — | — |
| 215 | OKC de Toermalijn | — | https://www.lowan.nl/schools_po/o-b-j-s-de-toermalijn/ | — | — |
| 216 | NT2-basisschool Het Palet | — | https://www.lowan.nl/schools_po/nt2-basisschool-het-palet/ | — | — |
| 217 | Nieuwkomersschool Het Pyriet | — | https://www.lowan.nl/schools_po/nieuwkomersschool-het-pyriet/ | — | — |
| 218 | Nieuwkomersschool De Schakel | — | https://www.lowan.nl/schools_po/nieuwkomersschool-de-schakel/ | — | — |
| 219 | Nieuwkomersvoorziening West-Friesland | — | https://www.lowan.nl/schools_po/nieuwkomersklas-t-palet/ | — | — |
| 220 | Nieuwkomersschool de Globe | — | https://www.lowan.nl/schools_po/neveninstroomproject-de-globe/ | — | — |
| 221 | WereldKidz Vlieger | — | https://www.lowan.nl/schools_po/wereldkidz-vlieger/ | — | — |
| 222 | Basisschool De Brug | — | https://www.lowan.nl/schools_po/basisschool-de-brug/ | — | — |
| 223 | Bs Mikado | — | https://www.lowan.nl/schools_po/mikado/ | — | — |
| 224 | Meerwerf BS Villa Kakelbont | — | https://www.lowan.nl/schools_po/meerwerf-basisschool-villa-kakelbont/ | — | — |
| 225 | Master Amiko | — | https://www.lowan.nl/schools_po/master-amiko/ | — | — |
| 226 | Louis Bouwmeester | — | https://www.lowan.nl/schools_po/louis-bouwmeester/ | — | — |
| 227 | Leimundo | — | https://www.lowan.nl/schools_po/leimundo/ | — | — |
| 228 | Kuna Mondo | — | https://www.lowan.nl/schools_po/kuna-mondo/ | — | — |
| 229 | Koningin Beatrixschool | — | https://www.lowan.nl/schools_po/koningin-beatrixschool/ | — | — |
| 230 | Koepelschool NMB | — | https://www.lowan.nl/schools_po/koepelschool-nmb/ | — | — |
| 231 | Kindcentrum Wijngaard | — | https://www.lowan.nl/schools_po/kindcentrum-wijngaard/ | — | — |
| 232 | Kindcentrum Sterrebos | — | https://www.lowan.nl/schools_po/kindcentrum-sterrebos/ | — | — |
| 233 | De Taalwijzer | Sittard | https://www.lowan.nl/schools_po/kindcentrum-sittard/ | — | — |
| 234 | Kindcentrum LEEF | — | https://www.lowan.nl/schools_po/kindcentrum-leef/ | — | — |
| 235 | Kindcentrum De Linge | — | https://www.lowan.nl/schools_po/kindcentrum-de-linge/ | — | — |
| 236 | Kindcentrum De Lichtbaak | — | https://www.lowan.nl/schools_po/kindcentrum-de-lichtbaak/ | — | — |
| 237 | KC de Duizendpoot | — | https://www.lowan.nl/schools_po/kc-de-duizendpoot/ | — | — |
| 238 | K. Norelschool | — | https://www.lowan.nl/schools_po/k-norelschool/ | — | — |
| 239 | OBS Jan Ligthart | — | https://www.lowan.nl/schools_po/jan-ligthartschool/ | — | — |
| 240 | Taalschool de Globe | — | https://www.lowan.nl/schools_po/iok-de-globe/ | — | — |
| 241 | Internationale Taalklas Uithoorn | Uithoorn | https://www.lowan.nl/schools_po/internationale-taalklas-uithoorn/ | — | — |
| 242 | Internationale Taalklas Haarlem | Haarlem | https://www.lowan.nl/schools_po/internationale-taalklas-haarlem/ | — | — |
| 243 | IKC Wereldwijs | — | https://www.lowan.nl/schools_po/ikc-wereldwijs/ | — | — |
| 244 | IKC Harm Smeenge | — | https://www.lowan.nl/schools_po/ikc-harm-smeenge/ | — | — |
| 245 | Hugo de Grootschool | — | https://www.lowan.nl/schools_po/hugo-de-grootschool/ | — | — |
| 246 | Wereldschool De Vlinder | — | https://www.lowan.nl/schools_po/heuvellaan/ | — | — |
| 247 | Het Rinket | — | https://www.lowan.nl/schools_po/het-rinket/ | — | — |
| 248 | IKC Het Noorderlicht | — | https://www.lowan.nl/schools_po/het-noorderlicht/ | — | — |
| 249 | Het Mozaïek (dependance POL/COA) | — | https://www.lowan.nl/schools_po/het-mozaiek-dependance-pol-locatie-coa/ | — | — |
| 250 | Basisschool het Mozaïek (tweede locatie) | — | https://www.lowan.nl/schools_po/basisschool-het-mozaiek/ | — | — |
| 251 | Hermanjozef | — | https://www.lowan.nl/schools_po/hermanjozef/ | — | — |
| 252 | Graaf Jan van Montfoortschool | — | https://www.lowan.nl/schools_po/graaf-jan-van-montfoortschool/ | — | — |
| 253 | GBS De Rank | — | https://www.lowan.nl/schools_po/gbs-de-rank/ | — | — |
| 254 | Expertisecentrum voor Anderstaligen | — | https://www.lowan.nl/schools_po/expertisecentrum-anderstaligen/ | — | — |
| 255 | Ericaschool | — | https://www.lowan.nl/schools_po/ericaschool/ | — | — |
| 256 | Emmausschool | — | https://www.lowan.nl/schools_po/emmausschool/ | — | — |
| 257 | Dynamica XL | Zaandam | https://www.lowan.nl/schools_po/dynamica-xl/ | https://dynamicaonderwijs.nl | — |
| 258 | OBS De Driepas | — | https://www.lowan.nl/schools_po/driepas-taalschool/ | — | — |
| 259 | De Zonnewijzer | — | https://www.lowan.nl/schools_po/de-zonnewijzer/ | — | — |
| 260 | De Wissel | — | https://www.lowan.nl/schools_po/de-wissel/ | — | — |
| 261 | IKC De Droomgaard | — | https://www.lowan.nl/schools_po/de-wiekslag/ | — | — |
| 262 | De Wegwijzer | — | https://www.lowan.nl/schools_po/de-wegwijzer/ | — | — |
| 263 | De Waaier | — | https://www.lowan.nl/schools_po/de-waaier/ | — | — |
| 264 | De Vlieger | — | https://www.lowan.nl/schools_po/de-vlieger/ | — | — |
| 265 | De Vijf Hoeven | — | https://www.lowan.nl/schools_po/de-vijf-hoeven/ | — | — |
| 266 | OBS De Toverbal | — | https://www.lowan.nl/schools_po/de-toverbal/ | — | — |
| 267 | De TiNtaan | — | https://www.lowan.nl/schools_po/de-tintaan/ | — | — |
| 268 | De Horizon | — | https://www.lowan.nl/schools_po/de-horizon-3/ | — | — |
| 269 | Taalklas Boekel | Boekel | https://www.lowan.nl/schools_po/de-taalklas/ | — | — |
| 270 | IKEC De Waterlelie | — | https://www.lowan.nl/schools_po/de-springplank/ | — | — |
| 271 | De Singel | — | https://www.lowan.nl/schools_po/de-singel/ | — | — |
| 272 | De Regenboog | — | https://www.lowan.nl/schools_po/de-regenboog-2/ | — | — |
| 273 | De Regenboog | — | https://www.lowan.nl/schools_po/de-regenboog/ | — | — |
| 274 | Bs Voordeldonk | — | https://www.lowan.nl/schools_po/de-piramide/ | — | — |
| 275 | De Nieuwe Wiel | — | https://www.lowan.nl/schools_po/de-nieuwe-wiel/ | — | — |
| 276 | De Krokodaris | — | https://www.lowan.nl/schools_po/de-krokodaris/ | — | — |
| 277 | De Kernschool | — | https://www.lowan.nl/schools_po/de-kernschool/ | — | — |
| 278 | De Kandelaar | — | https://www.lowan.nl/schools_po/de-kandelaar/ | — | — |
| 279 | De Horizon | — | https://www.lowan.nl/schools_po/de-horizon/ | — | — |
| 280 | De Heydonck | — | https://www.lowan.nl/schools_po/de-heydonck/ | — | — |
| 281 | De Heerdstee | — | https://www.lowan.nl/schools_po/de-heerdstee/ | — | — |
| 282 | De Globe | — | https://www.lowan.nl/schools_po/de-globe/ | — | — |
| 283 | De Gelderlandschool | — | https://www.lowan.nl/schools_po/de-gelderlandschool/ | — | — |
| 284 | De Fontein | — | https://www.lowan.nl/schools_po/de-fontein-2/ | — | — |
| 285 | De Fontein | — | https://www.lowan.nl/schools_po/de-fontein/ | — | — |
| 286 | Stichting Groeisaam NT2 | — | https://www.lowan.nl/schools_po/de-dijk/ | — | — |
| 287 | De Diamant | — | https://www.lowan.nl/schools_po/de-diamant-2/ | — | — |
| 288 | De Diamant | — | https://www.lowan.nl/schools_po/de-diamant/ | — | — |
| 289 | De Cocon | — | https://www.lowan.nl/schools_po/de-cocon/ | — | — |
| 290 | Taalschool De Brink | — | https://www.lowan.nl/schools_po/de-brink/ | — | — |
| 291 | De Blokwei | — | https://www.lowan.nl/schools_po/de-blokwei/ | — | — |
| 292 | De Bellefleur | — | https://www.lowan.nl/schools_po/de-bellefleur/ | — | — |
| 293 | Basisschool De Piramide | — | https://www.lowan.nl/schools_po/basisschool-de-piramide/ | — | — |
| 294 | Da Costa School | — | https://www.lowan.nl/schools_po/da-costa-school/ | — | — |
| 295 | CON de Wereldschool | — | https://www.lowan.nl/schools_po/con-de-wereldschool/ | — | — |
| 296 | CBS Het Baken | — | https://www.lowan.nl/schools_po/cbs-het-baken/ | — | — |
| 297 | Taalklas De Hoeksteen | — | https://www.lowan.nl/schools_po/cbs-de-hoeksteen/ | — | — |
| 298 | BS Het Kristal | — | https://www.lowan.nl/schools_po/bs-het-kristal-voor-pc-onderwijs/ | — | — |
| 299 | BS De Rots | — | https://www.lowan.nl/schools_po/bs-de-rots/ | — | — |
| 300 | Bs De Duinsprong | — | https://www.lowan.nl/schools_po/bs-de-duinsprong/ | — | — |
| 301 | BS De Cortendijck | — | https://www.lowan.nl/schools_po/bs-de-cortendijck/ | — | — |
| 302 | IKC Borgman Oosterpoort | Groningen | https://www.lowan.nl/schools_po/borgmanschool/ | — | — |
| 303 | Bataviaschool | — | https://www.lowan.nl/schools_po/bataviaschool/ | — | — |
| 304 | Basisschool Willem van Oranje | — | https://www.lowan.nl/schools_po/basisschool-willem-van-oranje/ | — | — |
| 305 | Basisschool Groeneveld | — | https://www.lowan.nl/schools_po/basisschool-taallent/ | — | — |
| 306 | Basisschool Prinsenbos | — | https://www.lowan.nl/schools_po/basisschool-prinsenbos/ | — | — |
| 307 | Basisschool Petrus Canisius | — | https://www.lowan.nl/schools_po/basisschool-petrus-canisius/ | — | — |
| 308 | Basisschool OBS de Optimist | — | https://www.lowan.nl/schools_po/basisschool-obs-de-optimist/ | — | — |
| 309 | Basisschool Jeroen | — | https://www.lowan.nl/schools_po/basisschool-jeroen/ | — | — |
| 310 | KC De Leertuin | — | https://www.lowan.nl/schools_po/basisschool-elout/ | — | — |
| 311 | Basisschool De Zuidstroom | — | https://www.lowan.nl/schools_po/basisschool-de-zuidstroom/ | — | — |
| 312 | Basisschool De Leeuw | — | https://www.lowan.nl/schools_po/basisschool-de-regenboog/ | — | — |
| 313 | Kindcentrum De Linde | — | https://www.lowan.nl/schools_po/basisschool-de-plataan/ | — | — |
| 314 | Basisschool De Kameleon | — | https://www.lowan.nl/schools_po/basisschool-de-kameleon/ | — | — |
| 315 | Basisschool De Dromenvanger | — | https://www.lowan.nl/schools_po/basisschool-de-dromenvanger/ | — | — |
| 316 | Basisschool De Appel | — | https://www.lowan.nl/schools_po/basisschool-de-appel/ | — | — |
| 317 | OBS Papilio | — | https://www.lowan.nl/schools_po/azs-papilio/ | — | — |
| 318 | AZS De Waaier | — | https://www.lowan.nl/schools_po/azcschool-de-waaier/ | — | — |
| 319 | AZC-school Oisterwijk | Oisterwijk | https://www.lowan.nl/schools_po/azc-school-oisterwijk/ | — | — |
| 320 | Kinderstad | — | https://www.lowan.nl/schools_po/antares/ | — | — |
| 321 | Anne Frank OBS | — | https://www.lowan.nl/schools_po/anne-frank/ | — | — |
| 322 | Amsteltaal-Noord | Amsterdam | https://www.lowan.nl/schools_po/amsteltaal/ | — | — |
| 323 | Al Islaah | — | https://www.lowan.nl/schools_po/al-islaah/ | — | — |
| 324 | Aan de Bron | — | https://www.lowan.nl/schools_po/aan-de-bron/ | — | — |
| 325 | Taalschool Rotterdam | Rotterdam | https://www.lowan.nl/schools_po/schakelklassen-saro/ | — | — |
| 326 | A. Hermkes | — | https://www.lowan.nl/schools_po/a-hermkes/ | — | — |

---

## Noten voor aanvulling

- **Plaatsnaam-aanvulstrategie:** Voor de ~270 scholen zonder plaatsnaam: zoek via `scholenopdekaart.nl/basisscholen/{slug}` of WebSearch `"[schoolnaam]" basisschool contact e-mail`
- **E-mail-aanvulstrategie:** LOWAN slaat zelf geen e-mails op; beste bronnen zijn (1) eigen schoolwebsite /contact, (2) scholenopdekaart.nl contactpagina, (3) schoolregister.nl
- **Batch-suggestie:** Verwerk in blokken van 50 via WebSearch; ~5 min per blok, totale aanvultijd ~30 min
- **Doorverwijsmail alternatief:** Stuur outreach naar helpdesk@lowanpo.nl met verzoek te forwarden, of gebruik de LOWAN-regio-coördinatoren als gate
