---
sidebar_position: 2
description: "了解如何安装 NEXT 前端程序或主题"
---

# 安装前端

:::tip
此教程侧重于安装**前端程序**，对于**前端模板**安装的过程，将会使用一些**典型**的项目来**示范教程**，但是无论如何：

**一定要带着脑子来看文档**，**不要担心学不会**
:::

## 要求

- 必须事先安装好了 **NEXT Core**


## 安装 Tiny

> 一个简单、纯净、最小化的主题

虽然简单，但是基本涵盖了全部后端所支持的功能，并且使用 SSR 来渲染页面。

:::info
`SSR` 全名为 **Server Side Rendering**，是一种**服务器端渲染**的方法，它可以将页面渲染为一个**服务器端的 HTML**，然后通过**浏览器端的 JavaScript**来渲染。

---

对 SEO 较为有利
:::

### Features

- [X] 使用 [React](https://reactjs.org/) 与 [Next.js](https://nextjs.org/)
- [X] [SSR](https://nextjs.org/docs/basic-features/server-side-rendering) 支持
- [X] [SEO](https://nextjs.org/docs/basic-features/seo) 支持
- [X] 使用 [TypeScript](https://www.typescriptlang.org/) 编写，类型安全检查



### 安装要求

- Node 版本 >= 16
- 已安装 pnpm
- 已安装 `NEXT Core`
- 需要有 **服务器**

### 开始安装

```bash
pnpm i
```

输入上述命令，安装 package 依赖。

打开 `.env` 文件，修改 `NEXT_PUBLIC_API_URL` 变量为后端的地址。


```bash
pnpm build
```

输入上述命令，构建前端的生产版本。

:::warning
如果你需要修改关于此站点的一些信息，请先前往 [关于 PWA 安装](./install-pwa) 章节再进行 `pnpm build`
:::

```bash
pnpm prod:pm2
```

输入上述命令，将会启动一个持久化服务器，端口为 `2323`，请确保服务器端口号是可用的，且后端已配置 CORS

如果你不需要持久化，则可以输入 `pnpm start`

```bash
pnpm start
```

如果你需要自定义端口，可以输入 `npx next start --port=2323`

```bash
npx next start --port=2323
```

---

:::tip
你也可以根据这个方法修改使用 pm2 启动服务器的端口号
:::

## 安装 Single

> 一个简洁大气，含夜间模式的 NEXT 博客主题

主题来自保罗的 Single 主题，感谢保罗作出的贡献！[点击前往作者博客](https://paugram.com) 

关于这个主题的一些特性就不多说了，和 Tiny 都基本一致的。不过，Single 会更加大气点，后期或许会**更注重于维护此主题**。

### 安装要求

- Node 版本 >= 16
- 已安装 pnpm
- 请保证 Core 为**最新版本**
- 需要有 **服务器**，按理来说支持 Serverless 平台

### 开始安装

Single 使用 pnpm 作为包管理器。相关命令与操作与 [Tiny](#安装-tiny) 相同。

:::warning
如果你需要修改关于此站点的一些信息，请先前往 [关于 PWA 安装](./install-pwa) 章节再进行 `pnpm build`
:::