"use strict";(self.webpackChunknx_docs=self.webpackChunknx_docs||[]).push([[100],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,x=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(x,s(s({ref:t},c),{},{components:n})):r.createElement(x,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(2081),o=(n(9496),n(9613));const a={sidebar_position:2,description:"\u4e86\u89e3 Next.js \u7684\u6587\u4ef6\u7ed3\u6784\uff0c\u4e0e\u6211\u6240\u63a8\u8350\u7684\u6587\u4ef6\u7ed3\u6784"},s="\u6587\u4ef6\u7ed3\u6784",i={unversionedId:"developer/learn-about-nextjs-dir-structure",id:"developer/learn-about-nextjs-dir-structure",title:"\u6587\u4ef6\u7ed3\u6784",description:"\u4e86\u89e3 Next.js \u7684\u6587\u4ef6\u7ed3\u6784\uff0c\u4e0e\u6211\u6240\u63a8\u8350\u7684\u6587\u4ef6\u7ed3\u6784",source:"@site/docs/developer/learn-about-nextjs-dir-structure.md",sourceDirName:"developer",slug:"/developer/learn-about-nextjs-dir-structure",permalink:"/docs/developer/learn-about-nextjs-dir-structure",draft:!1,editUrl:"https://github.com/nx-space/nx-docs/docs/developer/learn-about-nextjs-dir-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u4e86\u89e3 Next.js \u7684\u6587\u4ef6\u7ed3\u6784\uff0c\u4e0e\u6211\u6240\u63a8\u8350\u7684\u6587\u4ef6\u7ed3\u6784"},sidebar:"docs",previous:{title:"\u5bfc\u8a00",permalink:"/docs/developer/intro"},next:{title:"\u521d\u59cb\u5316",permalink:"/docs/developer/started"}},p={},l=[{value:"Next.js \u7684\u6587\u4ef6\u7ed3\u6784",id:"nextjs-\u7684\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u6211\u4e2a\u4eba\u4f7f\u7528\u7684\u6587\u4ef6\u7ed3\u6784",id:"\u6211\u4e2a\u4eba\u4f7f\u7528\u7684\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u521b\u5efa\u65b0\u7684\u9875\u9762",id:"\u521b\u5efa\u65b0\u7684\u9875\u9762",level:3},{value:"\u521b\u5efa\u65b0\u7684\u7ec4\u4ef6",id:"\u521b\u5efa\u65b0\u7684\u7ec4\u4ef6",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6587\u4ef6\u7ed3\u6784"},"\u6587\u4ef6\u7ed3\u6784"),(0,o.kt)("p",null,"\u4e86\u89e3 Next.js \u7684\u6587\u4ef6\u7ed3\u6784\u662f\u975e\u5e38\u5fc5\u8981\u7684\uff0c\u6b64\u7ae0\u8282\u5c06\u4f1a\u91cd\u70b9\u8bb2\u8ff0\u5173\u4e8e Next.js \u6a21\u677f",(0,o.kt)("strong",{parentName:"p"},"\u751f\u6210\u7684\u5927\u81f4\u7684\u6587\u4ef6\u7ed3\u6784"),"\uff0c\u4e0e\u6211",(0,o.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u4f7f\u7528\u7684\u6587\u4ef6\u7ed3\u6784")),(0,o.kt)("h2",{id:"nextjs-\u7684\u6587\u4ef6\u7ed3\u6784"},"Next.js \u7684\u6587\u4ef6\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 pages # \u9875\u9762\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.tsx # \u9996\u9875\n\u2502\xa0\xa0 \u251c\u2500\u2500 _app.tsx # \u5168\u5c40\u914d\u7f6e \n\u2502\xa0\xa0 \u251c\u2500\u2500 _document.tsx # \u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\u7684\u94a9\u5b50\n\u2502\xa0\xa0 \u2514\u2500\u2500 _error.tsx # \u9875\u9762\u6e32\u67d3\u5931\u8d25\u7684\u94a9\u5b50\n\u251c\u2500\u2500 components # \u7ec4\u4ef6\u76ee\u5f55\n\u251c\u2500\u2500 public  # \u9759\u6001\u8d44\u6e90\u76ee\u5f55\n\u251c\u2500\u2500 styles # \u6837\u5f0f\u76ee\u5f55\n\u251c\u2500\u2500 next.config.js  # \u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e Next.js \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 .eslintrc.js  # \u914d\u7f6e ESLint\uff0c\u914d\u7f6e ESLint \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 .gitignore  # \u914d\u7f6e Git\uff0c\u914d\u7f6e Git \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 tsconfig.json # \u914d\u7f6e TypeScript\uff0c\u914d\u7f6e TypeScript \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 package.json  # \u914d\u7f6e npm\uff0c\u914d\u7f6e npm \u7684\u5404\u79cd\u53c2\u6570\n")),(0,o.kt)("h2",{id:"\u6211\u4e2a\u4eba\u4f7f\u7528\u7684\u6587\u4ef6\u7ed3\u6784"},"\u6211\u4e2a\u4eba\u4f7f\u7528\u7684\u6587\u4ef6\u7ed3\u6784"),(0,o.kt)("h3",{id:"\u521b\u5efa\u65b0\u7684\u9875\u9762"},"\u521b\u5efa\u65b0\u7684\u9875\u9762"),(0,o.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4f1a\u628a\u65b0\u7684\u9875\u9762\u5148\u547d\u540d\uff0c\u6bd4\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"posts"),"\uff0c\u7136\u540e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"pages"),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u6bd4\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"posts"),"\uff0c\u63a5\u7740\u518d\u521b\u5efa\u4e24\u4e2a\u6587\u4ef6\uff0c\u5206\u522b\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"index.module.css"),"\uff0c\u8fd9\u4e24\u4e2a\u6587\u4ef6\u90fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"pages"),"\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx"),"\u662f\u9875\u9762\u7684\u4e3b\u6587\u4ef6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"index.module.css"),"\u662f\u9875\u9762\u7684\u6837\u5f0f\u6587\u4ef6\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"*.module.css")," \u662f\u4e3a\u4e86\u89e3\u51b3 React \u4e2d\u7684 CSS \u51b2\u7a81\u95ee\u9898\uff0c\u5982\u679c\u4f60\u4e0d\u9700\u8981\u4f7f\u7528 CSS Modules\uff0c\u5219",(0,o.kt)("strong",{parentName:"p"},"\u5728\u540e\u9762"),"\u4e0d\u9700\u8981\u5c06\u8fd9\u4e2a\u6587\u4ef6\u5bfc\u5165\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"import styles from './index.module.css'")," \u8fd9\u6837\u7684\u683c\u5f0f\u3002"),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},"\u5177\u4f53\u9875\u9762\u547d\u540d\u7684\u89c4\u5219\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages"},"Next.js \u6587\u6863"))),(0,o.kt)("h3",{id:"\u521b\u5efa\u65b0\u7684\u7ec4\u4ef6"},"\u521b\u5efa\u65b0\u7684\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5206\u7c7b\uff0c\u8fd9\u91cc\u6709\u56db\u79cd\u5206\u7c7b\u53ef\u4f9b\u4f60\u53c2\u8003\uff1a",(0,o.kt)("strong",{parentName:"p"},"widgets(\u5de5\u5177\u90e8\u4ef6)"),", ",(0,o.kt)("strong",{parentName:"p"},"universal(\u901a\u7528\u7ec4\u4ef6)"),", ",(0,o.kt)("strong",{parentName:"p"},"layout(\u5e03\u5c40\u7ec4\u4ef6)"),", ",(0,o.kt)("strong",{parentName:"p"},"other(\u5176\u4ed6\u7ec4\u4ef6)"),"\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u521b\u5efa\u65b0\u7684\u7ec4\u4ef6\uff0c\u4e0e\u65b0\u7684\u9875\u9762\u7c7b\u4f3c\uff0c\u5728\u8fd9\u91cc\u5c31\u4e0d\u591a\u8bf4\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 pages # \u9875\u9762\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.tsx # \u9996\u9875\n\u2502\xa0\xa0 \u251c\u2500\u2500 <xxx> # \u67d0\u4e00\u4e2a\u9875\u9762\n\uff5c\xa0\xa0 \uff5c \u251c\u2500\u2500 index.tsx # \u9875\u9762\u7684\u5165\u53e3\u6587\u4ef6\n\uff5c\xa0\xa0 \uff5c \u2514\u2500\u2500 index.module.css # \u9875\u9762\u7684\u6837\u5f0f\u6587\u4ef6\uff08\u4f7f\u7528\u4e86 CSS Modules\uff09\n\u2502\xa0\xa0 \u251c\u2500\u2500 _app.tsx # \u5168\u5c40\u914d\u7f6e \n\u2502\xa0\xa0 \u251c\u2500\u2500 _document.tsx # \u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\u7684\u94a9\u5b50\n\u2502\xa0\xa0 \u2514\u2500\u2500 _error.tsx # \u9875\u9762\u6e32\u67d3\u5931\u8d25\u7684\u94a9\u5b50\n\n\u251c\u2500\u2500 components # \u7ec4\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 <xxx> # \u67d0\u4e00\u4e2a\u7ec4\u4ef6\n\u2502\xa0\xa0 \uff5c \u251c\u2500\u2500 index.tsx # \u7ec4\u4ef6\u7684\u5165\u53e3\u6587\u4ef6\n\u2502\xa0\xa0 \uff5c \u2514\u2500\u2500 index.module.css # \u7ec4\u4ef6\u7684\u6837\u5f0f\u6587\u4ef6\uff08\u4f7f\u7528\u4e86 CSS Modules\uff09\n\n\u251c\u2500\u2500 public  # \u9759\u6001\u8d44\u6e90\u76ee\u5f55\n\u251c\u2500\u2500 utils # \u5de5\u5177\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 <xxx>.util.ts # \u67d0\u4e00\u4e2a\u5de5\u5177\n\n\u251c\u2500\u2500 styles # \u6837\u5f0f\u76ee\u5f55\n\uff5c    \u2514\u2500\u2500 global.css # \u5168\u5c40\u6837\u5f0f\u6587\u4ef6\n\n\u251c\u2500\u2500 next.config.js  # \u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e Next.js \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 .eslintrc.js  # \u914d\u7f6e ESLint\uff0c\u914d\u7f6e ESLint \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 .gitignore  # \u914d\u7f6e Git\uff0c\u914d\u7f6e Git \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 tsconfig.json # \u914d\u7f6e TypeScript\uff0c\u914d\u7f6e TypeScript \u7684\u5404\u79cd\u53c2\u6570\n\u251c\u2500\u2500 package.json  # \u914d\u7f6e npm\uff0c\u914d\u7f6e npm \u7684\u5404\u79cd\u53c2\u6570\n")))}d.isMDXComponent=!0}}]);