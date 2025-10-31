# 商标管家 - 公司门户网站

基于 Astro + Tailwind CSS 构建的商标行业公司门户网站，设计简洁大方，响应式布局。

## ✨ 功能特性

- 🎨 简洁大方的设计风格
- 📱 完全响应式布局，支持移动端
- ⚡ 基于 Astro 的高性能静态站点生成
- 🎯 商标行业专业内容展示
- 💼 公司介绍、服务项目、优势展示、联系方式完整呈现

## 📦 技术栈

- [Astro](https://astro.build) - 现代化的静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架

## 🚀 项目结构

```text
/
├── public/              # 静态资源
│   └── favicon.svg
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Header.astro # 头部导航
│   │   └── Footer.astro # 底部信息
│   ├── layouts/         # 页面布局
│   │   └── Layout.astro
│   └── pages/           # 页面路由
│       └── index.astro  # 首页
├── astro.config.mjs     # Astro 配置
├── tailwind.config.mjs  # Tailwind 配置
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
