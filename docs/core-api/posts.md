---
sidebar_label: "Posts"
sidebar_position: 2
---

# Posts

## GET `/`

获取文章列表，自带分页器

### Parameters

- `page`：分页页码，默认为 1
- `size`：每页数量，默认为 10
- `select`：字段选择，空则输出全部
- `year`：筛选年份，默认为空
- `sortBy`：排序字段，空则默认按时间倒序，可填入 `1` 或 `-1` (正序或倒序)

```bash
curl -X 'GET' \
  'http://127.0.0.1:3333/posts?size=10&page=1' \
  -H 'accept: */*'
```

### Return Example

```json
{
  "data": [
    {
      "id": "62e8a083e0a63c53aee0b252",
      "created": "2022-08-02T03:56:51.981Z",
      "comments_index": 0,
      "allow_comment": true,
      "title": "欢迎来到 NEXT",
      "text": "欢迎来到 NEXT，当你看到这条文章的时候，说明你已经成功的安装并初始化了 NEXT。",
      "modified": null,
      "slug": "welcome-to-next",
      "summary": "欢迎来到 NEXT",
      "category_id": "62bd9c1704d9a4357016c6ac",
      "count": {
        "read": 0,
        "like": 0
      },
      "tags": [],
      "images": [],
      "category": {
        "id": "62bd9c1704d9a4357016c6ac",
        "name": "默认分类",
        "type": 0,
        "slug": "default",
        "created": "2022-06-30T12:50:31.742Z"
      }
    }
  ],
  "pagination": {
    "total": 1,
    "current_page": 1,
    "total_page": 1,
    "size": 10,
    "has_next_page": false,
    "has_prev_page": false
  }
}
```

## POST `/`

:::info
此接口需要登录才能请求，请在请求头中添加 `Authorization: Bearer <YourToken>`
:::

创建一篇文章，需要`Token`


### Request Body

- `title`：文章标题
- `text`：文章内容
- `slug`：文章 slug，用于生成文章链接
- `summary`：文章摘要
- `category_id`：文章分类 ID
- `copyright`：是否署名
- `pin`：置顶时间，格式为 `YYYY-MM-DDTHH:mm:ss.SSSZ`
- `pinOrder`：置顶顺序
- `tags`：文章标签，数组
- `hide`：是否隐藏，默认为 false
- `password`：文章密码
- `rss`：是否发布到 RSS，默认为 true
- `allowComment`：是否允许评论，默认为 true

**Request Body Example**：

```json
{
  "title": "string", // 文章标题
  "text": "string", // 文章内容
  "slug": "string", // 文章 slug，必须
  "summary": "string", // 文章摘要，必须
  "categoryId": "5eb2c62a613a5ab0642f1f7a", // 文章分类Id，必须
  "copyright": true, // 是否署名，默认为 true
  "pin": "2022-08-04T08:07:10.904Z", // 置顶时间，默认为空
  "pinOrder": 0, // 置顶顺序，默认为 0
  "tags": [], // 标签
  "hide": false, // 是否隐藏，默认为 false
  "password": "", // 文章密码，默认为空
  "rss": true, // 是否发布到 RSS，默认为 true
  "allowComment": true // 是否允许评论，默认为 true
}
```

### Return Example

返回与 **Request Body** 的内容

## GET `/:id`

通过文章 ID 获取文章详情

## PUT `/:id`

:::info
此接口需要登录才能请求，请在请求头中添加 `Authorization: Bearer <YourToken>`
:::

更新一篇文章，需要`Token`

## PATCH `/:id`

:::info
此接口需要登录才能请求，请在请求头中添加 `Authorization: Bearer <YourToken>`
:::

更新一篇文章，需要`Token`

## DELETE `/:id`

:::info
此接口需要登录才能请求，请在请求头中添加 `Authorization: Bearer <YourToken>`
:::

删除一篇文章，需要`Token`

## GET `/:category/:slug`

通过分类 ID 和 自定义别名 获取文章详情

## GET `/_like`

给文章点赞