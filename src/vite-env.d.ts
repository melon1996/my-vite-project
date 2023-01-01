/*
 * @Author: chen xin
 * @Date: 2023-01-01 19:23:30
 * @LastEditors: chen xin
 * @LastEditTime: 2023-01-01 19:37:14
 * @Description: file content
 * @FilePath: \vite-project\src\vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
