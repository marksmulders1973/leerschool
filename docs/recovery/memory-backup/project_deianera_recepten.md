---
name: App van Deianera — Aziatische recepten-site
description: Hobby-website van Deianera (vrouw van Mark) over Indonesische/Thaise/Indische gerechten met ingrediënten + waar-te-koop (toko's) info. Status 2026-04-26: scope-fase, nog niet gebouwd.
type: project
originSessionId: 877acc0d-e54b-4c71-b460-2d009efdec69
---
# App van Deianera (werknaam, voorlopig)

## Wat
Website over Aziatische/Indische gerechten — Indonesisch, Thais, evt. breder. Per gerecht:
- Foto + naam + herkomst
- Ingrediëntenlijst
- Waar elk ingrediënt te koop is (toko's, supermarkten) en wat het kost
- Beschrijving van het gerecht / wat erin zit
- Optioneel: link naar YouTube-kookkanalen
- Bereidingswijze

## Wie & doel
- **Eigenaar**: Deianera (vrouw van Mark)
- **Doel**: hobby — ze wil "een werkende site bouwen" als leuke bezigheid, geen verdienmodel
- **Bouwer**: Mark + Claude Code samen, Mark coacht Deianera door het proces

## Tech-keuzes (vastgesteld 2026-04-26)
- **Supabase**: APART nieuw project (niet gecombineerd met `studiebol`/`uxqnzrymyjbcpuzqktdm`). Reden: gratis tier per project, foto-storage isoleren, schone scheiding.
- **Hosting**: Vercel (gratis Hobby tier, kan onbeperkt projecten op Mark's account)
- **Stack**: custom build (niet Wix/WordPress) — Vercel + Supabase, zelfde toolchain als Studiebol
- **Domein**: nog te kiezen, ~€8/jaar via TransIP/Mijndomein

## Datamodel-concept (nog niet aangemaakt)
- `gerechten` — naam, land, foto_url, beschrijving, bereidingstijd, moeilijkheid, youtube_url
- `ingredienten` — naam, soort
- `gerecht_ingredient` — junction: gerecht_id, ingredient_id, hoeveelheid, eenheid
- `tokos` — naam, plaats, adres, website
- `ingredient_toko` — junction: ingredient_id, toko_id, prijs

## Pagina's-concept
- Homepage: grid met foto's, filter op land
- Gerecht-detail: foto, ingrediënten (klikbaar → toko's), bereiding, YouTube-embed
- Toko-overzicht: kaart of lijst per stad
- Admin (alleen Deianera): formulier voor recepten/ingrediënten/foto's toevoegen

## Wat moet vóór de bouw klaar zijn (huiswerk Deianera)
- [ ] Domeinnaam-suggesties (5 stuks, daarvan 1 vrij)
- [ ] Naam-stijl: gerichter op recepten, tokoshoppen, of reizen-en-eten?
- [ ] 5 startrecepten uitschrijven
- [ ] Foto's per recept (zelf maken of vrije bronnen Pexels/Unsplash)
- [ ] 3–5 toko's noemen die ze kent

## Status
2026-04-26: idee-fase. Mark wacht op input van Deianera. Wanneer naam+5 recepten klaar zijn, kan Mark/Claude in een weekend de skeleton bouwen.

## Vermoedelijke link met Studiebol-data
In `auth.users` van Studiebol staat een speler "Deianera" geregistreerd op 2026-04-21 met email `dei***@gmail.com` — vermoedelijk dezelfde persoon (ze speelt zelf ook Studiebol).
