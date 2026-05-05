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
