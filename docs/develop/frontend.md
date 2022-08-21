---
sidebar_position: 1
description: "在本章节中，我们会讲述关于编写前端项目应当遵守的规范"
---

# 编写前端项目

<br /> 

:::tip
本文来自 Mix Space 文档 

https://mx-docs.iucky.cn/dev/frontend.html
:::

该系统采用了前端和后端分离的形式，而不提供模板呈现选项，因此开发人员可以使用任何框架和体系结构设计前端项目。

虽然开发是自由的，但也存在接口调用和数据定义、路由约定等不便。在本节中，我将介绍如何开发前端项目

## 路由约定

路由约定可以极大地保证网站因为更换不同的前端主题而导致SEO异常、死链接等问题。


| Path                     | Descrition                             | Mark        |
| ------------------------ | -------------------------------------- | ----------- |
| `/`                      | 首页                                   | 强制要求   |
| `/posts`                 | 博客文章列表                            | 强制要求   |
| `/posts/:category/:slug` | 博客文章详情页                          | 强制要求   |
| `/pages/:slug`           | 独立页面详情页                          | 强制要求   |
| `/feed`                  | RSS subscribe                          | 强制要求   |
| `/:category/:slug`       | 302 -> `/posts/:category/:slug`        | 建议       |
| `/category/:slug`        | 分类下的文章列表页面                     | 建议       |
| `/tag/:name`             | 标签下的文章列表页面                     | 建议       |
| `/links`                 | 友链页面                                | 建议       |
| `/sitemap`               | 站点地图                                | 建议       |
| `/favorite/:type`        | 附加页面                                | 可选      |

## 关于框架的选择和建议

建议选用具有SSR功能的现代框架:

- React：NextJS, [RakkasJS](https://github.com/rakkasjs/rakkasjs), umi
- Vue: Vite (vite-ssr), NuxtJS

小程序:

- React: Remax, taro
- Vue: uni-app