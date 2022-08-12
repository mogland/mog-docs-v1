---
sidebar_position: 4
---



# 主页

首先，你务必要**定义好你的 HTML 结构与CSS样式**！

## 获取数据

在 `Next.js` 中有三种获取数据的方式，分别是：

- `getInitialProps` 在 `pages/_app.js` 中被调用，这个方法会在服务器端执行，并且返回一个 `initialProps` 对象，这个对象会被 `pages/index.js` 使用。

```jsx
// 使用 getInitialProps
import { getInitialProps } from 'next';

// Class (不推荐)
export default class extends React.Component {
  static async getInitialProps(context) {
    const initialProps = await getInitialProps(context);
    return { ...initialProps };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

// Function (推荐)
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = await getInitialProps(ctx);
  return { pageProps };
}
```

:::info
但是如今 `getInitialProps` 方法已经被废弃了，你需要确定你到底是那一种获取方式
:::

---

- `getServerSideProps` 在 `pages/index.js` 中被调用，这个方法会在服务器端执行，并且返回一个 `props` 对象，这个对象会被 `pages/index.js` 使用。
- `getStaticProps` 在 `pages/index.js` 中被调用，这个方法会在客户端执行，并且返回一个 `props` 对象，这个对象会被 `pages/index.js` 使用。

:::warning
`getStaticProps` 不是动态的，它是在静态文件生成的时候被调用的。

而 `getServerSideProps` 和 `getInitialProps` 则是动态的，它们是在客户端或者服务器端被调用的。
:::

```tsx
import { getServerSideProps, getStaticProps } from 'next';

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return { props: { post } };
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return { props: { post } };
}

export default function Post({ post }) {
  return <div>{post.title}</div>;
}
```

**一旦使用了上面的方法，就会变成SSR（Server Side Rendering）**，这意味着你的页面将会在服务器端执行，而不是在客户端执行。

### 如何不在服务端执行

你可以使用 `useEffect` 来实现在客户端执行的功能。那这个时候就不需要使用 `getServerSideProps` 或 `getStaticProps` 了。

```jsx
import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // do something
    $fetch("xxx").then(res => {
      // do something
    });
  } [])
  return (
    <div>
      <h1>Hello Next.js</h1>
    </div>
  )
}
```

## 实际应用

### getServerSideProps 方法

```tsx

// 注意，这个 apiClient 是前文我们已封装好了的请求器，可以直接使用
async function getPost(id) {
  return await apiClient(`/posts/${id}`).then(res => res);
}


/**
 * getServerSideProps
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async ({ params }) => { // 参数是 `params`, 可以获取到 `id`
  const { id } = params; // 获取到 `id`
  const post = await getPost(id); // 获取到 `post`
  return { props: { post } }; // 返回 `props`
}

const Home: NextPage = (props) => {
  const { post } = props;
  return (
    <div>
      <h1>{post.title}</h1>
      {
        post.content.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      }
    </div>
  )
}

export default Home; // 必须要写上这一句
```

### useEffect 方法

```tsx
import React from 'react';
import { useEffect } from 'react';

// 注意，这个 apiClient 是前文我们已封装好了的请求器，可以直接使用
async function getPost(id) {
  return await apiClient(`/posts/${id}`).then(res => res);
}


export default function Home() {

  const [post, setPost] = React.useState([{}]); // 初始化 `post`

  useEffect(() => {
    const fetchData = async () => {
      const { id } = params;
      const post = await getPost(id);
      setPost(post); // 更新 `post`
    }
  } [])
  return (
    <div>
      <h1>Hello Next.js</h1>
      {
        post.content.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      }
    </div>
  )
}
```