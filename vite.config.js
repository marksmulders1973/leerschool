/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
