# SEO-setup — 5 min werk na deploy

> Doel: site zichtbaar krijgen in Google + Bing + AI-engines.
> Status 2026-05-13: code-kant gefixt (kritiek 1+2 uit AI-discovery audit).
> Wat hieronder staat moet Mark **handmatig** doen — 5-10 min totaal.

## Wat ik al gedaan heb (in code)

- ✅ `index.html` — title + meta-description aangescherpt op USP
  (Doorstroomtoets + examens + 15 min) en brand-disambiguatie tov Leatherbox
- ✅ `index.html` — Open Graph + Twitter Cards bijgewerkt
- ✅ `index.html` — JSON-LD met slogan + knowsAbout-onderwerpen + duidelijke
  disambiguatie in description
- ✅ `index.html` — invisible-but-crawlable section met sterke H1 + brand-context
- ✅ `public/sitemap.xml` — alle huidige SPA-routes erin, lastmod=vandaag
- ✅ `public/llms.txt` — nieuwe AI-engine-standaard (ChatGPT/Claude/Perplexity
  lezen dit als ze je site indexeren)
- ✅ `public/robots.txt` — alle AI-crawlers expliciet toegelaten

## Wat Mark zelf moet doen (5-10 min)

### 1. Google Search Console (3 min) — HOOGSTE PRIORITEIT
Zonder dit wordt je site **nooit goed** geïndexeerd.

1. Ga naar https://search.google.com/search-console
2. Login met je Google-account
3. Klik "**Add Property**" → kies "URL prefix"
4. Voer in: `https://leerkwartier.app/`
5. Kies verificatie-methode "**HTML tag**"
6. Google geeft je een meta-tag zoals:
   `<meta name="google-site-verification" content="ABC123XYZ..." />`
7. **Kopieer alleen het token** (de `ABC123XYZ...` waarde)
8. Open `index.html` in Cursor/VS Code
9. Zoek: `REPLACE_WITH_GSC_TOKEN`
10. Vervang door het token van Google
11. Commit + push (auto-deploy via Vercel)
12. Terug naar Google Search Console → klik "**Verify**"
13. Klaar! Klik daarna links op **Sitemaps** → voer in:
    `https://leerkwartier.app/sitemap.xml` → Submit

→ Vanaf nu indexeert Google je site (kan 1-7 dagen duren voor zichtbaar
in zoekresultaten).

### 2. Bing Webmaster Tools (2 min)
Ook belangrijk: Bing-index voedt ChatGPT-Search + Microsoft Copilot.

1. Ga naar https://www.bing.com/webmasters
2. Login met je Microsoft-account (gmail werkt ook)
3. "**Add a site**" → voer `https://leerkwartier.app/` in
4. **Eenvoudigste optie**: "Import from Google Search Console" (na stap 1)
5. Of handmatig: kies "**Meta tag**", kopieer token, vervang in `index.html`:
   `REPLACE_WITH_BING_TOKEN` → het Bing-token
6. Commit + push → terug naar Bing → Verify

### 3. Google Analytics 4 (optioneel, 3 min)
Om te meten wat Google doet voor je traffic.

1. https://analytics.google.com/ → Admin → Create Property
2. Pak het Measurement ID (G-XXXXXXXXXX)
3. *(NOG NIET in code; dat kunnen we in volgende sessie toevoegen
   als je dit wilt — laat het weten)*

### 4. Bonus: claim "Leerkwartier" op socials
Om brand-disambiguatie tov Leatherbox te versterken — pak één per week:

- [ ] Twitter/X: @leerkwartier_app of @leerkwartier_nl
- [ ] Instagram: @leerkwartier.app
- [ ] LinkedIn-pagina voor Smulsoft + Leerkwartier
- [ ] YouTube-kanaal "Leerkwartier"

Hoeft niet meteen content op te staan — alleen claim de username.
Search-engines tellen consistente social-presence als trust-signaal.

## Wat na deze setup gebeurt

- **Google**: binnen 1-2 weken zichtbaar in zoekresultaten. Eerst voor
  brand-search ("leerkwartier app"), daarna langzaam voor doorstroomtoets-
  zoektermen.
- **Bing**: idem maar sneller (Bing crawlt vaak in 2-3 dagen).
- **ChatGPT-Search / Perplexity / Copilot**: gebruiken Bing-index direct
  + Google soms via API. Verschijning ~2-3 weken na Bing-indexering.
- **Claude-Web / Gemini**: putten meer uit hun training-data
  (gedateerd, kan tot 6-12 maanden duren voor brand bekend wordt).

## Volgende stappen (na deze setup is werkend)

In aflopende prioriteit:

1. **Pre-rendering** voor 5 hoofdpagina's (zodat AI-crawlers volle HTML
   zien, niet React-shell). Tool: `vite-plugin-prerender` of `react-snap`.
2. **Eigen landing pages** per kern-zoekterm: `/doorstroomtoets-oefenen`,
   `/vmbo-examens-oefenen`, `/leren-15-minuten` (eigen HTML, niet SPA-route).
3. **FAQ-content** verdiepen (1 pagina per veel-gestelde vraag).
4. **Off-page** distributie: Reddit, Wikipedia-bijdrage, gastartikel op
   onderwijssites, YouTube-video's met transcripts.
5. **AI-referrer logging** (Supabase-tabel + admin-dashboard) — zie
   eerdere aanbeveling.
