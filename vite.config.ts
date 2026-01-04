import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { tmpdir } from 'os'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RubikTeam/',
  server: {
    port: 3000,
    open: true
  },
  cacheDir: resolve(tmpdir(), 'vite-rubi-cache')
})
