---
sidebar_label: "Root"
sidebar_position: 1
---

# Root

## GET `/`

获取关于此项目的相关信息，如 Author, Version 等

**Request Method**: GET

```bash
curl -X 'GET' \
  'http://127.0.0.1:3333/' \
  -H 'accept: */*'
```

**Return**：关于此项目的相关信息，如 Author, Version 等

**Return Example**：

```json
{
  "name": "@nx-space/core",
  "author": "Wibus <https://iucky.cn>",
  "version": "dev",
  "homepage": "https://github.com/nx-space/core#readme",
  "issues": "https://github.com/nx-space/core/issues"
}
```

## GET `/info`

获取关于此项目的相关信息，如 Author, Version 等

:::info
此 API 与 `/` 相同，只是路径不一致
:::

**Request Method**: GET

```bash
curl -X 'GET' \
  'http://127.0.0.1:3333/info' \
  -H 'accept: */*'
```

**Return Example**：

```json
{
  "name": "@nx-space/core",
  "author": "Wibus <https://iucky.cn>",
  "version": "dev",
  "homepage": "https://github.com/nx-space/core#readme",
  "issues": "https://github.com/nx-space/core/issues"
}
```

## GET `/ping`

检测服务器是否正常运行

**Request Method**: GET
  
```bash
curl -X 'GET' \
  'http://127.0.0.1:3333/ping' \
  -H 'accept: */*'
```

**Return Example**：

```json
{
  "data": "pong"
}
```