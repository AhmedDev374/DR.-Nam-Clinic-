// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // MUST match your GH Pages path exactly (repo name is case & punctuation sensitive)
  base: '/DR.-Nam-Clinic-/',
  plugins: [react()],
})
