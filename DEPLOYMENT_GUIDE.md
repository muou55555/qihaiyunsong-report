# GitHub Pages 部署指南

本指南将帮助你将数据分析报告网站部署到 GitHub Pages。

## 准备工作

1. **创建 GitHub 仓库**
   - 访问 [GitHub](https://github.com/new) 创建新仓库
   - 建议仓库名：`charging-survey-report`
   - 设置为 Public 或 Private 均可

2. **本地配置 Git**
   ```bash
   cd /home/ubuntu/muou/charging-survey-report/survey-report
   
   git init
   git add .
   git commit -m "Initial commit"
   
   # 添加远程仓库（替换 YOUR_USERNAME）
   git remote add origin https://github.com/YOUR_USERNAME/charging-survey-report.git
   
   git push -u origin main
   ```

## 部署方法

### 方法 1：使用 gh-pages（最简单）

```bash
# 部署到 GitHub Pages
npm run deploy
```

这会自动：
1. 运行 `npm run build` 构建项目
2. 将 `dist` 目录推送到 `gh-pages` 分支
3. 你可以通过 `https://YOUR_USERNAME.github.io/charging-survey-report/` 访问

### 方法 2：手动部署

```bash
# 1. 构建项目
npm run build

# 2. 创建并切换到 gh-pages 分支
git checkout --orphan gh-pages

# 3. 清空工作区（只保留 dist 目录）
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"

# 4. 推送到远程仓库
git push origin gh-pages

# 5. 返回主分支
git checkout main
```

### 方法 3：使用 GitHub Actions（自动化部署）

1. 在仓库中创建 `.github/workflows/deploy.yml`：

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

2. 提交并推送：
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push origin main
```

3. 在 GitHub 仓库设置中启用 GitHub Actions：
   - Settings → Actions → General
   - 选择 "Allow all actions and reusable workflows"

## 配置 GitHub Pages

无论使用哪种方法，都需要在 GitHub 仓库中启用 GitHub Pages：

1. 进入仓库的 **Settings** 页面
2. 左侧菜单选择 **Pages**
3. 在 **Source** 部分：
   - 选择 `gh-pages` 分支（如果使用方法 1 或 2）
   - 或选择 `GitHub Actions`（如果使用方法 3）
4. 点击 **Save**

## 访问网站

部署完成后，你的网站可以通过以下 URL 访问：

```
https://YOUR_USERNAME.github.io/charging-survey-report/
```

替换 `YOUR_USERNAME` 为你的 GitHub 用户名。

## 更新网站

当需要更新内容时：

### 使用方法 1 或 2：
```bash
# 修改内容后
npm run deploy
```

### 使用方法 3：
```bash
# 修改内容后，推送即可自动部署
git add .
git commit -m "Update content"
git push origin main
```

## 自定义域名（可选）

如果需要使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名注册商处添加 DNS 记录：
   - 类型：CNAME
   - 名称：www（或留空）
   - 值：`YOUR_USERNAME.github.io`

3. 在 GitHub Pages 设置中添加自定义域名

## 常见问题

### Q: 部署后页面空白？
A: 检查浏览器控制台是否有错误。可能是：
- 资源路径问题（确保 base path 正确）
- GitHub Pages 未完全部署完成（等待几分钟）

### Q: 404 错误？
A: 确保：
- GitHub Pages 已正确配置
- gh-pages 分支已成功推送
- 访问的 URL 格式正确

### Q: 如何查看部署状态？
A: 访问仓库的 **Actions** 标签页查看部署日志

## 部署检查清单

- [ ] GitHub 仓库已创建
- [ ] 项目代码已推送到 GitHub
- [ ] 构建成功（`npm run build`）
- [ ] gh-pages 分支已创建并推送
- [ ] GitHub Pages 已启用
- [ ] 可以通过 GitHub Pages URL 访问

## 技术支持

如果遇到问题，请检查：
1. GitHub 仓库设置是否正确
2. npm run deploy 是否成功执行
3. GitHub Actions 日志（如果使用自动化部署）
4. 浏览器控制台错误信息