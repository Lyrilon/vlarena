import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 添加这一行来指定基础路径
  base: '/vlarena/', 
  plugins: [react(), tailwindcss()],
})