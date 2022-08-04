---
sidebar_position: 2
description: "了解如何安装 NEXT 前端程序或主题"
---

# 安装前端

:::tip
此教程侧重于安装**前端程序**，对于**前端模板**安装的过程，将会使用一些**典型**的项目来**示范教程**，但是无论如何：

**一定要带着脑子来看文档**，**不要担心学不会**
:::

目前官方已推出的前端程序包括：

- [nx-A-My](https://github.com/nx-space/nx-A-My)：*😇 Be self-centered, by rz.sb*
- [effective-octo-meme](https://github.com/nx-space/effective-octo-meme)：*🥸 Haphazard Web Design, by wibus.*

## 要求

- 必须事先安装好了 **NEXT Core**
- 具体

## 安装 nx-A-My 程序

nx-A-My 基于 Next.js (React)，此为 A-My 主题的 NEXT Space 版本，使用了及其先进的 TypeScript！原样式来自[若志博客](https://rz.sb)的 *Typecho 主题 -- A-My*

使用超级好用的 `pnpm` 作为包管理器，这意味着你需要使用 `pnpm install` 来安装依赖

```bash
pnpm i
pnpm build
pnpm start:prod # 启动服务器, 非持久化
pnpm prod:pm2 # 启动服务器, 持久化
```

## 安装 effective-octo-meme 程序

effective-octo-meme 与 nx-A-My 一样，都是基于 Next.js (React)，同样使用了 TypeScript。设计样式来源于 [wibus-wee](https://github.com/wibus-wee)

项目依旧使用的是 `pnpm` 作为包管理器，这意味着你必须要使用 `pnpm install` 来安装依赖

```bash
pnpm i
pnpm build
pnpm start:prod # 启动服务器, 非持久化
pnpm prod:pm2 # 启动服务器, 持久化
```