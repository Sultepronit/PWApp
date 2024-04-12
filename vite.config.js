import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['/icons/ic-48-48.png'],
      manifest: {
        name: 'My dummy PWApp',
        short_name: 'PWApp',
        description: 'My dummy PWApp!',
        theme_color: '#ffffff',
        icons: [
          {
            src: "/icons/ic-512-512.png",
            sizes: "512x512",
            type: "image/png",
          }
        ],
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
