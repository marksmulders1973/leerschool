/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Vervangt `__SW_VERSION__` in dist/sw.js door een build-timestamp.
// Zonder dit blijft de SW byte-identiek tussen deploys → browser ziet geen
// update → user moet handmatig cache wissen.
function injectSwVersion() {
  return {
    name: 'inject-sw-version',
    apply: 'build',
    closeBundle() {
      const swPath = resolve('dist/sw.js')
      try {
        const original = readFileSync(swPath, 'utf8')
        const version = String(Date.now())
        const updated = original.replace(/__SW_VERSION__/g, version)
        writeFileSync(swPath, updated)
        // eslint-disable-next-line no-console
        console.log(`[inject-sw-version] sw.js → version ${version}`)
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
          // Leerpaden — grote bundel JSX/MD met SVG; één pad per file maar
          // alle paden samen ~64 files. Hou ze in één lazy chunk zodat de
          // hoofd-bundle vrij blijft van leerpaad-data totdat user 'em opent.
          if (id.includes('src/learnPaths/')) return 'data-learnpaths';
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
