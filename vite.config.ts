import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({

  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://m8y20l-185-247-185-62.ru.tuna.am',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/utils/variables";
          @import "@/styles/utils/mixins";
          @import "@/styles/utils/utils";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})