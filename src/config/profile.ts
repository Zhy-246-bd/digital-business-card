/**
 * ============================================================
 *  个人名片配置中心
 *  页面展示的所有文字信息都在这里修改，无需改动任何组件代码
 * ============================================================
 */

/** 作品项目 */
export interface Project {
  /** 唯一标识（保持唯一即可） */
  id: string
  /** 项目名称 */
  title: string
  /** 一句话简介（展示在卡片上） */
  description: string
  /** 项目详情（每条在弹窗中展示为一行要点） */
  detail: string[]
  /** 封面图路径（图片放在 public/ 目录下，直接写路径） */
  cover: string
  /** 技术标签 */
  tags: string[]
  /** 在线演示地址（可选，不填则隐藏按钮） */
  demoUrl?: string
  /** 代码仓库地址（可选，不填则隐藏按钮） */
  repoUrl?: string
}

export const profile = {
  /** 姓名 */
  name: '林小满',
  /** 职业 / 头衔 */
  role: '前端开发工程师',
  /** 个人简介 */
  bio: '热爱用代码创造优雅体验的前端开发者，专注于 Vue 生态与数据可视化方向。喜欢开源、写作与分享，相信好的产品源于对细节的执着。',
  /** 所在地 */
  location: '中国 · 上海',
  /** 头像（放在 public/ 目录下，可直接替换同名文件） */
  avatar: '/avatar.svg',

  /** 邮箱（点击按钮自动唤起邮件客户端） */
  email: 'linxiaoman@example.com',
  /** GitHub 主页链接 */
  github: 'https://github.com/lin-xiaoman',
  /** GitHub 用户名（按钮上展示） */
  githubHandle: '@lin-xiaoman',

  /** 精选项目列表（可自由增删） */
  projects: [
    {
      id: 'ai-note',
      title: 'AI 智能笔记',
      description: '基于大语言模型的智能笔记应用，支持语音转写、自动摘要与知识库问答。',
      detail: [
        '接入大语言模型，一键生成笔记摘要、脑图与复习要点',
        '支持语音实时转写，中英文混说也能准确识别',
        '本地优先存储 + 云端同步，离线也能流畅使用',
        '基于 Vue 3 + TypeScript 开发，响应式适配移动端'
      ],
      cover: '/covers/project-ai-note.svg',
      tags: ['Vue 3', 'TypeScript', 'Pinia', 'Vite'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com/lin-xiaoman/ai-note'
    },
    {
      id: 'dashboard',
      title: '数据可视化看板',
      description: '拖拽式实时数据大屏，内置 20+ 图表组件，支持多数据源接入与主题定制。',
      detail: [
        '拖拽式布局编辑器，所见即所得地搭建大屏页面',
        '内置 20+ 图表组件，支持大数据量下的流畅渲染',
        'WebSocket 实时推送，数据刷新延迟小于 1 秒',
        '深浅两套主题一键切换，支持自定义配色方案'
      ],
      cover: '/covers/project-dashboard.svg',
      tags: ['Vue 3', 'ECharts', 'WebSocket', 'VueUse'],
      repoUrl: 'https://github.com/lin-xiaoman/dashboard'
    },
    {
      id: 'blog',
      title: '个人博客系统',
      description: '极简风格的 Markdown 博客，支持全文搜索、深色模式与 RSS 订阅。',
      detail: [
        'Markdown 写作体验，支持代码高亮与数学公式',
        '基于倒排索引的全文搜索，秒级响应',
        '自动生成 RSS 订阅源，方便读者订阅更新',
        '首屏加载小于 1 秒，SEO 友好'
      ],
      cover: '/covers/project-blog.svg',
      tags: ['Vue 3', 'Vite', 'Node.js', 'Markdown'],
      repoUrl: 'https://github.com/lin-xiaoman/blog'
    }
  ]
}
