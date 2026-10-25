# 个人数字名片

基于 **Vue 3 + Vite + Pinia + VueUse** 的个人数字名片单页网站，PC / 移动端响应式适配，支持浅色 / 深色主题切换。

## 功能模块

| 模块 | 说明 |
| --- | --- |
| 基础信息展示 | 头像、姓名、职业、个人简介、所在地 |
| 社交链接 | 邮箱（点击唤起邮件客户端）、GitHub（点击新标签页打开） |
| 作品项目展示 | 卡片式布局，展示封面 / 名称 / 简介 / 技术标签，点击卡片弹出详情 |
| 主题切换 | 浅色 / 深色两套主题，记忆用户选择，无记录时跟随系统偏好 |

## 快速开始

```bash
npm install     # 安装依赖
npm run dev     # 启动开发服务器（默认 http://localhost:5173）
npm run build   # 构建生产版本（输出到 dist/）
npm run preview # 本地预览构建产物
```

## 自定义内容

**所有展示文字集中在一个配置文件里，改内容无需动组件代码：**

- 编辑 [src/config/profile.ts](src/config/profile.ts)：
  - `name` / `role` / `bio` / `location` —— 基础信息
  - `email` / `github` / `githubHandle` —— 社交链接
  - `projects` —— 项目列表（可增删；`demoUrl`、`repoUrl` 不填则隐藏对应按钮）
- 替换图片（或改配置里的路径）：
  - 头像：`public/avatar.svg`
  - 项目封面：`public/covers/` 目录下的 SVG 文件

## 主题机制

- 主题状态由 Pinia（[src/stores/theme.ts](src/stores/theme.ts)）管理，基于 VueUse 的 `useDark` 实现
- 选择持久化在 `localStorage`（key：`business-card-theme`）；从未选择过时自动跟随系统 `prefers-color-scheme`
- [index.html](index.html) 内联脚本会在应用加载前应用主题，避免首屏闪烁

## 性能设计（首屏 < 2s）

- 全部素材为本地 SVG，零外部网络请求
- 系统字体栈，不加载网络字体
- 图片懒加载（`loading="lazy"`），VueUse 按需引入（tree-shaking）

## 目录结构

```
├── index.html                  # 入口 HTML（含防闪烁主题脚本）
├── public/
│   ├── avatar.svg              # 头像
│   └── covers/                 # 项目封面图
├── src/
│   ├── config/profile.ts       # ★ 内容配置中心（文字信息都在这改）
│   ├── stores/theme.ts         # Pinia 主题 Store（VueUse useDark）
│   ├── components/
│   │   ├── ProfileCard.vue     # 模块一：基础信息
│   │   ├── SocialLinks.vue     # 模块二：社交链接
│   │   ├── ProjectsSection.vue # 模块三：项目列表
│   │   ├── ProjectCard.vue     # 项目卡片
│   │   ├── ProjectDetailModal.vue # 项目详情弹窗
│   │   └── ThemeToggle.vue     # 模块四：主题切换按钮
│   ├── styles/main.css         # 全局样式 + 主题变量
│   ├── App.vue
│   └── main.ts
└── vite.config.ts
```
