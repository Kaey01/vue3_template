import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入自动导入
import AutoImport from "unplugin-auto-import/vite";
// 自动导入UI组件
import Components from "unplugin-vue-components/vite";

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      // 不在需要导入ref，reactive等
      imports: ["vue", "vue-router"],
      // 存放的位置
      dts: "src/auto-import.d.ts",
    }),
    Components({
      // 引入组件的信息存放位置
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      '/@': resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  server: {
    proxy: {
      // 使用 proxy 实例
      '/api': {
        target: 'http://192.168.20.28:9090/asset-manage',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
