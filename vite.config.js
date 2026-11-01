import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative assets work for both user Pages and /repository/ project Pages.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
