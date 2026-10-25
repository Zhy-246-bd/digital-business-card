import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 部署时自动设置 base 为「/仓库名/」：
  // - 本地：GITHUB_REPOSITORY 不存在 → base 为 '/'，开发/预览不受影响
  // - GitHub Actions：自动注入 "owner/repo" → base 变为 '/repo/'，无需手动维护仓库名
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/'
})
