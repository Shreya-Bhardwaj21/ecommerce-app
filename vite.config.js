import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ecommerce-app/',
  plugins: [react()],

  // Fix HMR/live reload on Windows
  server: {
    watch: {
      usePolling: true,
    },
  },

  // Fix refresh/404 issue on GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
