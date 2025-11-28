import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/th8-site-v2/',   // <--- ใส่ชื่อ repo ตรงนี้
})
