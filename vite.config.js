/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Vervangt `__SW_VERSION__` + `__SW_PRECACHE_ASSETS__` in dist/sw.js na build.
// Zonder version-injectie blijft SW byte-identiek tussen deploys → geen update.
// Zonder precache-assets pre-cachet de SW alleen "/" en moet bij iedere repeat-
// visit alsnog de JS-bundle ophalen — onnodige LCP-vertraging op herhalingen.
function injectSwVersion() {
  return {
    name: 'inject-sw-version',
    apply: 'build',
    closeBundle() {
      const swPath = resolve('dist/sw.js')
      const indexHtmlPath = resolve('dist/index.html')
      try {
        let updated = readFileSync(swPath, 'utf8')
        const version = String(Date.now())
        updated = updated.replace(/__SW_VERSION__/g, version)

        // Extract de kritieke asset-paths uit dist/index.html. Vite injecteert
        // de gehashte entry-bundles + hun preload-link's daarin. We pakken het
        // entry-script + vendor-react + vendor-react-router; data-chunks niet
        // (anders worden offline-resources te zwaar voor service-worker install).
        let assets = []
        try {
          const html = readFileSync(indexHtmlPath, 'utf8')
          // Match <script src="/assets/...js"> én rel="modulepreload" entries
          const matches = html.match(/\/assets\/[^"]+?\.(?:js|css)/g) || []
          const unique = Array.from(new Set(matches))
          // Whitelist: alleen entry-bundles + react/router-vendors. data-* en
          // ObliteratorGame + vendor-three + vendor-supabase NIET pre-cachen.
          assets = unique.filter((p) =>
            /\/assets\/index-/.test(p) ||
            /\/assets\/vendor-react(?:-router)?-/.test(p)
          )
        } catch (e) {
          console.warn('[inject-sw-version] kon dist/index.html niet lezen:', e.message)
        }
        updated = updated.replace(
          /"__SW_PRECACHE_ASSETS__"/,
          JSON.stringify(JSON.stringify(assets))
        )

        writeFileSync(swPath, updated)
        // eslint-disable-next-line no-console
        console.log(`[inject-sw-version] sw.js → version ${version} + ${assets.length} precache-assets`)
      } catch (err) {
        console.warn('[inject-sw-version] kon dist/sw.js niet patchen:', err.message)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), injectSwVersion()],
  build: {
    // QA mini-audit 2026-05-06: hoofd-bundle was 1.2 MB gzip → 9-13s LCP op
    // school-wifi. Manual chunks splitsen zware vendor-libs en data-blokken
    // uit het kritieke main-pad zodat de eerste laad sneller is en er beter
    // kan worden gecachet (een nieuwe data-batch invalideert niet de hele
    // vendor-bundle).
    //
    // Audit 3 (perf-engineer): Vite voegt automatisch `<link rel="modulepreload">`
    // toe voor ALLE chunks waarvan een lazy-route afhankelijk is — inclusief
    // dikke data-chunks (data-learnpaths 591 kB, data-questions 254 kB,
    // vendor-three 129 kB). De browser laadt die ongevraagd op page-load →
    // LCP blijft 9-13s ondanks de splitsing. Fix: resolveDependencies filtert
    // de zware chunks uit de preload-lijst, zodat ze pas geladen worden
    // wanneer een lazy-route ze écht nodig heeft.
    modulePreload: {
      polyfill: false,
      resolveDependencies: (_filename, deps) =>
        deps.filter((d) =>
          // data-learnpaths-* (alle subject-chunks) niet preloaden — pas bij
          // route-bezoek laden. 'data-learnpaths' string vangt ook de
          // sub-chunks (data-learnpaths-po, -wereld, -examens, etc.).
          !d.includes('data-learnpaths') &&
          !d.includes('data-questions') &&
          !d.includes('data-topics') &&
          !d.includes('data-textbooks') &&
          !d.includes('data-curricula') &&
          !d.includes('vendor-three') &&
          !d.includes('vendor-supabase') &&
          !d.includes('ObliteratorGame')
        ),
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('@supabase')) return 'vendor-supabase';
            if (id.includes('react-router')) return 'vendor-react-router';
            if (id.includes('react-dom') || id.includes('/react/')) return 'vendor-react';
          }
          // Eigen data-blokken — grote arrays met vragen/boeken/topics
          if (id.includes('src/data/sampleQuestions')) return 'data-questions';
          if (id.includes('src/data/topics')) return 'data-topics';
          if (id.includes('src/data/textbooks')) return 'data-textbooks';
          // Leerpaden — 165+ files. Bundel was 5,4 MB → mobiel-pijn.
          // Splits per subject zodat parallel HTTP/2-streams winnen + browser
          // niet hoeft te decoderen wat hij niet nodig heeft.
          //
          // Strategie: examens + pincode apart (zwaar), talen apart, wereld
          // (geschiedenis/aardrijkskunde) apart, nask apart (biologie/scheikunde/
          // natuurkunde/economie), PO-paden apart (alle bestanden met "Po.js"-
          // suffix), rest = core (wiskunde + algemeen).
          if (id.includes('src/learnPaths/')) {
            const fname = id.split(/[/\\]src[/\\]learnPaths[/\\]/).pop() || '';
            // BUG-FIX 2026-05-14: index.js + examenLookup.js + pathLoaders.js
            // moeten in 1 dezelfde chunk als ze elkaar importeren. Anders ontstaat
            // een circulair-chunk-probleem (examens ↔ wiskunde) wat in productie
            // 'Cannot read properties of undefined (reading config)' veroorzaakt
            // zodra index.js geinitialiseerd wordt voordat data-learnpaths-wiskunde
            // afgerond is. Forceer ze in 'data-learnpaths-core'.
            if (fname === 'index.js' || fname === 'examenLookup.js' || fname === 'pathLoaders.js' || fname === 'subjectMapping.js' || fname === 'questionPathMap.generated.js' || fname === 'utils.js') {
              return 'data-learnpaths-core';
            }
            if (fname.startsWith('examen')) return 'data-learnpaths-examens';
            if (fname.startsWith('pincode')) return 'data-learnpaths-pincode';
            if (/Po\.js$/.test(fname)) return 'data-learnpaths-po';
            if (/(Engels|Frans|Duits)\.js$/.test(fname)) return 'data-learnpaths-talen';
            if (/(Geschiedenis|Aardrijkskunde)\.js$/.test(fname)) return 'data-learnpaths-wereld';
            if (/(Biologie|Natuurkunde|Scheikunde|Economie|Beco)\.js$/.test(fname)) return 'data-learnpaths-nask';
            // Nederlands-paden (taal, spelling, woordsoorten, etc.)
            if (/(^spelling|^woordsoorten|^zinsontleding|^werkwoord|^argument|^tekstanalyse|^schrijfvaardigheid|^literatuur|^begrijpend|^onregelmatigeWerkwoorden|^presentTenses|^pastTenses|woordenschatEngels|naamvallen|passeCompose)/.test(fname)) {
              return 'data-learnpaths-nederlands';
            }
            // Rest = wiskunde/algebra + algemene paden (vakken VO bovenbouw)
            return 'data-learnpaths-wiskunde';
          }
          if (id.includes('src/curricula/')) return 'data-curricula';
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    css: false,
    // Windows + Vitest kan onder load (antivirus, indexing) traag zijn met
    // jsdom-setup en module-imports. 15s ipv 5s default voorkomt vals
    // negatieve timeouts op simpele render-tests.
    testTimeout: 15000,
    hookTimeout: 15000,
  },
})
