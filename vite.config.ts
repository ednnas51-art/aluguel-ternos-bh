import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginPrerender } from 'vite-plugin-prerender'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginPrerender({
      staticDir: 'dist',
      routes: [
        '/',
      ],
    }),
  ],
})
