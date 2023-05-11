import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/* auto */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
/* auto */
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@api': path.join(__dirname, 'src/api')
    },
    extensions: ['.js', 'json', '.vue']
  },
  server: {
    // port: 8080,
    proxy: {
      "/api": {
        target: "http://dreame.jinghuanqiu.com", // 所要代理的目标地址
        changeOrigin: true, //允许跨域
        ws: true, // 开启 websockets 代理
        secure: false, // 验证 SSL 证书
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写传过来的path路径
      },
    },
  },
})
