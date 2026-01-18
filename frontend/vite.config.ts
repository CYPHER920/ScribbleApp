import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // 1. Import it

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add it here
  ],
})