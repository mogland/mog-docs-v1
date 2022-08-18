# 关于 PWA 安装

## manifest.json 生成

每个 pwa 应用都需要一个 `manifest.json`, 可能看成是一个配置文件。可以去 https://app-manifest.firebaseapp.com/ 生成。生成后的文件像是这样的：

```json
{
  "name": "秉松博客",
  "short_name": "秉松博客",
  "description": "有秉性且正直的松",
  "theme_color": "#ffffff",
  "background_color": "#004740",
  "display": "standalone",
  "orientation": "portrait",
  "scope": "/",
  "start_url": "/",
  "lang": "zh-cmn-Hans",
  "prefer_related_applications": true,
  "icons": [
    {
      "src": "manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
  ]
}
```

将这个文件拷贝至 public 文件夹，替换掉原本的即可

## icons 制作

制作 icons 的工具有很多，你可以使用 `pwa-asset-generator` 来生成（GitHub），当然，自己去制作也是可以的～ 我生成的比较多，你可以自行配置不要生成这么多种尺寸的

准备工作完成后，你可以有如下文件。

```
├── apple-icon-120.png 
├── apple-icon-152.png 
├── apple-icon-167.png 
├── apple-icon-180.png 
├── manifest-icon-192.png 
├── manifest-icon-512.png 
└── manifest.json
```

## 修改 `_document.tsx`

前往 `src` 文件夹，打开 `_document.tsx` 文件，查看文件内容，**如果你也是生成像我这么多且一样的图标，你可以不需要修改**，如果你需要修改，请根据自己的阅读理解，修改里面的代码使其正确。


```tsx
<link
    rel="apple-touch-startup-image"
    href="/apple-splash-2048-2732.jpg"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
<link
    rel="apple-touch-startup-image"
    href="/apple-splash-2732-2048.jpg"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    
//...
```