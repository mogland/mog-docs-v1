---
sidebar_position: 2
description: "了解 Next.js 的文件结构，与我所推荐的文件结构"
---

# 文件结构

了解 Next.js 的文件结构是非常必要的，此章节将会重点讲述关于 Next.js 模板**生成的大致的文件结构**，与我**个人使用的文件结构**


## Next.js 的文件结构

```bash
.
├── pages # 页面目录
│   ├── index.tsx # 首页
│   ├── _app.tsx # 全局配置 
│   ├── _document.tsx # 页面渲染完成后的钩子
│   └── _error.tsx # 页面渲染失败的钩子
├── components # 组件目录
├── public  # 静态资源目录
├── styles # 样式目录
├── next.config.js  # 配置文件，配置 Next.js 的各种参数
├── .eslintrc.js  # 配置 ESLint，配置 ESLint 的各种参数
├── .gitignore  # 配置 Git，配置 Git 的各种参数
├── tsconfig.json # 配置 TypeScript，配置 TypeScript 的各种参数
├── package.json  # 配置 npm，配置 npm 的各种参数
```

## 我个人使用的文件结构

### 创建新的页面

一般来说，我会把新的页面先命名，比如`posts`，然后在`pages`目录下创建一个文件夹，比如`posts`，接着再创建两个文件，分别是`index.tsx`和 `index.module.css`，这两个文件都是`pages`目录下的文件，`index.tsx`是页面的主文件，`index.module.css`是页面的样式文件。

:::info
`*.module.css` 是为了解决 React 中的 CSS 冲突问题，如果你不需要使用 CSS Modules，则**在后面**不需要将这个文件导入如 `import styles from './index.module.css'` 这样的格式。

---

具体页面命名的规则，请参考[Next.js 文档](https://nextjs.org/docs/basic-features/pages)
:::

### 创建新的组件

首先需要对组件进行分类，这里有四种分类可供你参考：**widgets(工具部件)**, **universal(通用组件)**, **layout(布局组件)**, **other(其他组件)**。

对于创建新的组件，与新的页面类似，在这里就不多说了

```bash
.
├── pages # 页面目录
│   ├── index.tsx # 首页
│   ├── <xxx> # 某一个页面
｜   ｜ ├── index.tsx # 页面的入口文件
｜   ｜ └── index.module.css # 页面的样式文件（使用了 CSS Modules）
│   ├── _app.tsx # 全局配置 
│   ├── _document.tsx # 页面渲染完成后的钩子
│   └── _error.tsx # 页面渲染失败的钩子

├── components # 组件目录
│   ├── <xxx> # 某一个组件
│   ｜ ├── index.tsx # 组件的入口文件
│   ｜ └── index.module.css # 组件的样式文件（使用了 CSS Modules）

├── public  # 静态资源目录
├── utils # 工具目录
│   ├── <xxx>.util.ts # 某一个工具

├── styles # 样式目录
｜    └── global.css # 全局样式文件

├── next.config.js  # 配置文件，配置 Next.js 的各种参数
├── .eslintrc.js  # 配置 ESLint，配置 ESLint 的各种参数
├── .gitignore  # 配置 Git，配置 Git 的各种参数
├── tsconfig.json # 配置 TypeScript，配置 TypeScript 的各种参数
├── package.json  # 配置 npm，配置 npm 的各种参数
```
