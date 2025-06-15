// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is correct for your deployment
  server: {
    open: true, // optional: opens browser automatically
  },
  build: {
    outDir: 'dist',
  },
  // fix 404 on refresh with react-router
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
