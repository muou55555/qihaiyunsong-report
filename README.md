# 栖海澐颂小区电动自行车充电设施民意调查问卷数据分析报告

专业的数据分析报告网站，基于调查问卷数据可视化展示小区业主对充电设施建设方案的真实态度。

## 技术栈

- **React 18** + **TypeScript** - 现代化前端框架
- **Vite** - 极速构建工具
- **Tailwind CSS** - 原子化 CSS 框架
- **Chart.js** + **react-chartjs-2** - 专业图表库
- **Lucide React** - 精美图标库

## 功能特性

- 📊 **交互式数据可视化**
  - 饼状图：态度分布、同意度
  - 柱状图：原因分析、诉求统计
  - 环形图：保有量、可达性
  - 所有图表支持悬停提示、动画效果

- 🎨 **专业设计**
  - 深色主题 + 高对比度数据可视化配色
  - 响应式布局，适配移动端和桌面端
  - 流畅的滚动动画和过渡效果
  - 清晰的信息层级和视觉引导

- 📱 **移动端优化**
  - 移动端适配的导航菜单
  - 触摸友好的交互设计
  - 优化的移动端图表显示

- ⚡ **高性能**
  - 静态构建，无服务器依赖
  - 优化的资源打包
  - Gzip 压缩支持

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 GitHub Pages

### 方法 1：使用 gh-pages（推荐）

```bash
# 安装 gh-pages
npm install -D gh-pages

# 在 package.json 中添加部署脚本
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 部署
npm run deploy
```

### 方法 2：手动部署

1. 构建项目：
```bash
npm run build
```

2. 将 `dist` 目录内容推送到 GitHub 仓库的 `gh-pages` 分支：
```bash
git checkout -b gh-pages
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入 Settings → Pages
   - Source 选择 `gh-pages` branch
   - 保存后等待几分钟即可访问

### 方法 3：使用 GitHub Actions（自动化）

在 `.github/workflows/deploy.yml` 中创建：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 项目结构

```
survey-report/
├── src/
│   ├── components/          # React 组件
│   │   ├── ui/             # 基础 UI 组件
│   │   ├── HeroSection.tsx # 首页英雄区域
│   │   ├── ConstructionAttitude.tsx  # 建设态度分析
│   │   ├── BikeOwnership.tsx        # 保有量分析
│   │   ├── ReasonAnalysis.tsx       # 原因分析
│   │   ├── CoreRequirements.tsx     # 核心诉求
│   │   ├── ResidentSuggestions.tsx  # 居民建议
│   │   ├── PieChart.tsx             # 饼图组件
│   │   ├── BarChart.tsx             # 柱状图组件
│   │   └── DoughnutChart.tsx        # 环形图组件
│   ├── config/
│   │   └── surveyData.ts   # 调查数据配置
│   ├── lib/
│   │   └── utils.ts        # 工具函数
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 应用入口
│   └── index.css           # 全局样式
├── dist/                   # 构建输出目录
├── index.html              # HTML 模板
├── tailwind.config.js      # Tailwind 配置
├── vite.config.ts          # Vite 配置
└── package.json            # 项目配置
```

## 数据来源

本报告基于 **栖海澐颂小区电动自行车充电设施民意调查问卷** 数据：

- **调查日期**：2026年4月14日
- **有效问卷**：213份
- **参与对象**：小区真实业主
- **样本覆盖**：小区全楼栋

## 核心结论

- 83.1% 业主明确反对红线内建设
- 97.2% 业主压倒性支持红线外建设
- 80.8% 家庭拥有电动自行车
- 99.53% 业主同意项目推进

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT

## 联系方式

如有问题或建议，请联系项目维护者。