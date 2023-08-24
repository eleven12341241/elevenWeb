import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  resolve: {
    // import 的时候@需要用到下面的这个
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
