---
sidebar_position: 1
description: "学习使用 Next.js 开发简单的前端主题"
---

# 初始化

在这个案例中，我们使用 [Next.js](https://nextjs.org/) 开发前端主题。我使用的是 pnpm 作为管理工具，并且使用了 [Next.js](https://nextjs.org/) 的 [TypeScript](https://nextjs.org/learn/typescript) 版本。

```bash
pnpm create next-app --typescript # 如果使用 TypeScript
pnpm create next-app # 如果没有使用 TypeScript
```

安装后你即可使用 `pnpm dev` 命令来启动你的前端。

## 配置文件

使用 [YAML](https://yaml.org/) 来配置此前端需要使用的配置。你所填写的配置在后台都会展现（以可见化形式），那么你就可以通过请求来获取到自定义的配置，这里给一个 template：

```yaml
name: Tiny # 主题名称
description: Tiny is a simple, clean, and modern theme for NEXT. # 主题描述
support_version: ">=1.5.3" # 最大支持的后端版本
configs: # 主题配置
  - title: "底部 GitHub 图标链接" # 配置标题
    description: "输入 GitHub 图标链接" # 配置描述
    type: "input" # 配置键入框类型，支持 input, textarea, select, checkbox, radio, switch
    key: "footer_github_link" # 配置键名, 必须唯一
    default: "https://github.com/wibus-wee" # 配置默认值
```

在后文我们会讲述如何获取配置并且应用的方法。无非就是请求，然后获取配置，然后应用配置。

:::tip
关于前端主题的**作者**，主题**版本**，主题**仓库**，主题**反馈链接**，都会默认通过获取 *package.json* 中的相关信息来展示。如果你所编写的前端项目并没有 *package.json*，那么你可以在 yaml 中填写相关的信息。

获取的字段：`author`, `version`, `repository`, `bugs`
:::

## 封装请求器

为了更加方便的处理请求，重用代码，我们需要封装好一个请求器，它应该有以下的功能：

- 只需填写**路径**即可请求 API，即可返回一个 `Promise` 对象
- 自动**重试**
- 在请求**出现错误**时，自动抛出
- 自动配置**请求头**

在这里我推荐使用 [OhMyFetch](https://github.com/unjs/ohmyfetch) 作为请求器，它是一个简单的封装，可以让你更加方便的使用请求。并且我们可以在他的基础上继续封装，以下是一个简单的例子：

```ts
import { $fetch } from "ohmyfetch";
import { message } from "react-message-popup";

/**
 * @description 封装请求方法
 */
export const apiClient = $fetch.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // 基础 URL
  retry: 3, // 重试次数
  async onRequestError({ request, error }) { // 请求错误时的回调
    console.log('[fetch request error]', request, error)
    message.error(`[Fetch 请求错误] ${request} ${error}`)
  },
  async onResponseError({ request, error }) { // 返回错误时的回调
    console.log('[fetch response error]', request, error)
    message.error(`[Fetch 返回错误] ${request} ${error}`)
  },
  headers: { // 请求头
    'Content-Type': 'application/json', // 内容类型
    'Accept': 'application/json', // 接受类型
    'Authorization': `Bearer ${localStorage.getItem('token')}` // 授权token，如果你的项目需要用到 token，那么可以在这里配置，数据从 localStorage 中获取
  },
})
```

:::tip
`process.env` 变量是一个对象，在项目根目录下的 `.env` 文件中可以配置，在 Next.js 中，配置统一命名为 `NEXT_PUBLIC_`。例子中的`NEXT_PUBLIC_API_URL`就是配置在 `.env` 文件中的一个键名。
:::