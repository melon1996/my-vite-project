/*
 * @Author: chen xin
 * @Date: 2023-01-01 19:23:30
 * @LastEditors: chen xin
 * @LastEditTime: 2023-01-01 20:22:06
 * @Description: file content
 * @FilePath: \my-vite-project\vite.config.ts
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'  // 配置别名需要的路径模块
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 解决手动设置组件name不方便的问题
import AutoImport from 'unplugin-auto-import/vite' // 自动引入vue函数的api
import Components from 'unplugin-vue-components/vite'  // 自动按需导入vue组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':resolve('./src'),
      '@assets':resolve('./src/assets')
    }
  },
  server:{
    host: '0.0.0.0', //通过ip的形式访问
    port: 8080, //端口号
    open:true, //自动打开浏览器
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css:{
    preprocessorOptions:{
      scss:{
        // additionalData:`@import "@/assets/style/main.scss";`
      }
    }
  }
})
