---
sidebar_label: "评论模块"
sidebar_position: 1
description: 了解官方推出的评论模块，并且学习如何应用于web中
---

# NEXT Comments WC.

_**Go To GitHub Repo：https://github.com/nx-space/nx-comments-wc**_

:::tip
**此评论模块无法使用在SSR/SSG环境中，Lit依赖于 DOM，需要取 document 进行操作** *适用于 SSR/SSG 环境中的模块还待考虑中*

目前 NEXT Comments 模块尚未稳定，部分参数,HTML结构,CSS等将有可能会变化
:::

这是一个评论模块，基于 Lit 框架，只需要简单的配置，即可以在任何地方使用，同时支持 TypeScript。

## 功能

目前支持/期待的功能有：

- [X] 基础收发功能
- [X] 支持评论分页
- [ ] TypeScript 类型检查支持
- [ ] 可以自定义评论模板
- [ ] 可以自定义评论排序规则
- [ ] 可以自定义评论编辑器
- [ ] 加入 OwO / Emoji 表情选择器
- [ ] 支持前台评论管理

## 安装

### 使用 NPM

```bash
# pnpm manager (recommended)
pnpm i @nx-space/nx-comments-wc
# npm manager
npm i @nx-space/nx-comments-wc
# yarn manager
yarn add @nx-space/nx-comments-wc
```

### 使用 CDN

```html
<!-- jsDelivr CDN -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@nx-space/nx-comments-wc@latest"></script>
```

## 使用

### 使用 NPM

```ts
// main.ts
import '@nx-space/nx-comments-wc'; // 引入模块
```

```tsx
<nx-comments></nx-comments>
```

### 使用 CDN

```html
<nx-comments></nx-comments>
```