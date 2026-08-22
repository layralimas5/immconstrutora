import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      /** Duas páginas: a landing e a página de links da bio do Instagram. */
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        links: fileURLToPath(new URL('./links.html', import.meta.url)),
      },
    },
  },
})
