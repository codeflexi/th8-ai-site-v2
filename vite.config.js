// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/th8-ai-site-v2/',  // 👈 สำคัญมาก ต้องตรงกับชื่อ repo
})
