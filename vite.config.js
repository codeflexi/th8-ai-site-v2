import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/th8-ai-site-v2/', // ← ใช้ชื่อ repo
  plugins: [vue()],
})
