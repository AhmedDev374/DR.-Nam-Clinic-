import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // للسماح بالوصول من أي IP
    cors: true, // للسماح بطلبات CORS
    port: 3002, // تأكد أن البورت هو 3000 أو عدله حسب حاجتك
  }
})
