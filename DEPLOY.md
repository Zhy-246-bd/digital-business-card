# 部署记录（GitHub Pages）

## 公网访问地址

**https://zhy-246-bd.github.io/digital-business-card/**

## 架构说明

- **静态托管**：GitHub Pages（Actions 模式，无需 gh-pages 分支）
- **自动部署**：推送到 `main` 分支自动触发 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- **base 路径自动适配**：GitHub Actions 注入 `GITHUB_REPOSITORY` 环境变量，[vite.config.ts](vite.config.ts) 据此把 base 设为 `/digital-business-card/`；本地开发/构建不受影响
- **SPA 404 兜底**：构建后复制 `index.html` 为 `404.html`，未知路径刷新也能正常渲染应用

## 如何更新内容

1. 修改 [src/config/profile.ts](src/config/profile.ts)（或替换 `public/` 下的图片）
2. `git add -A && git commit -m "..." && git push`
3. 等待 Actions 自动部署完成（约 1~2 分钟，可在仓库 Actions 页查看进度）

## 本次部署步骤

1. 修改 `vite.config.ts`：根据 `GITHUB_REPOSITORY` 自动设置 base
2. 新增 `.github/workflows/deploy.yml`：push 到 main 自动构建 + 部署
3. 本地打包验证 `npm run build` ✓
4. 创建公开仓库 `digital-business-card`
5. 开启 Pages（build_type: workflow）
6. 推送代码（因本机网络无法直连 GitHub，本次通过 Git Data API 推送，见下）
7. Actions 自动构建并部署成功 ✓

## 网络说明（重要）

本机网络无法直连 GitHub（DNS 解析到了被干扰的 IP 段，`github.com` 与 `api.github.com` 均不可达）。
本次部署全程通过 API + 可用 IP 完成，**未修改任何系统配置**。

以后想在本机直接 `git push`，任选其一：

1. **开启代理 / VPN** 后正常使用 git；
2. 以管理员身份编辑 `C:\Windows\System32\drivers\etc\hosts`，添加两行（GitHub 官方 IP，已验证可用）：
   ```
   140.82.112.3  github.com
   140.82.112.6  api.github.com
   ```

## 首次在本机 push 前（远程历史由 API 创建，与本地提交 SHA 不同）

```bash
git remote add origin https://github.com/zhy-246-bd/digital-business-card.git
git fetch origin && git reset --hard origin/main
```

## 安全收尾

本次部署使用的个人访问令牌（PAT）可在 https://github.com/settings/tokens 中 **Delete 撤销**。
