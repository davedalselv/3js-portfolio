// vite.config.js
import { defineConfig } from 'vite'
import dns from 'dns'
const port = process.env.PORT || 3000

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    port: port
  }
})
