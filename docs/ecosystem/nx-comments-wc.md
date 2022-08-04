---
sidebar_position: 1
description: 了解官方推出的评论模块，并且学习如何应用于web中
---

# NEXT Comments WC.

:::tip
目前 NEXT Comments 模块尚未稳定，部分参数,HTML结构,CSS等将有可能会变化
:::

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