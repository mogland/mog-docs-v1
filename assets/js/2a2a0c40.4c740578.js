"use strict";(self.webpackChunknx_docs=self.webpackChunknx_docs||[]).push([[697],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||p;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=n(2081),r=(n(9496),n(9613));const p={sidebar_position:1,description:"\u5b66\u4e60\u5982\u4f55\u5728\u672c\u5730\u6216\u4e91\u4e0a\u5b89\u88c5 NEXT\uff0c\u5e76\u5373\u53ef\u542f\u52a8 NEXT"},o="\u5b89\u88c5\u6d41\u7a0b",l={unversionedId:"getting-started/install",id:"getting-started/install",title:"\u5b89\u88c5\u6d41\u7a0b",description:"\u5b66\u4e60\u5982\u4f55\u5728\u672c\u5730\u6216\u4e91\u4e0a\u5b89\u88c5 NEXT\uff0c\u5e76\u5373\u53ef\u542f\u52a8 NEXT",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/docs/getting-started/install",draft:!1,editUrl:"https://github.com/nx-space/nx-docs/docs/getting-started/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u5b66\u4e60\u5982\u4f55\u5728\u672c\u5730\u6216\u4e91\u4e0a\u5b89\u88c5 NEXT\uff0c\u5e76\u5373\u53ef\u542f\u52a8 NEXT"},sidebar:"docs",previous:{title:"\u5f00\u59cb\u4e0a\u624b",permalink:"/docs/category/\u5f00\u59cb\u4e0a\u624b"},next:{title:"\u5b89\u88c5\u524d\u7aef",permalink:"/docs/getting-started/install-web"}},i={},s=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5\u65b9\u6cd5\u5bf9\u6bd4",id:"\u5b89\u88c5\u65b9\u6cd5\u5bf9\u6bd4",level:2},{value:"\u5b89\u88c5\u670d\u52a1\u7aef",id:"\u5b89\u88c5\u670d\u52a1\u7aef",level:2},{value:"\u4f7f\u7528 Docker \u5b89\u88c5",id:"\u4f7f\u7528-docker-\u5b89\u88c5",level:3},{value:"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5",id:"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5",level:3},{value:"\u4f7f\u7528 screen \u6301\u7eed\u5316\u542f\u52a8",id:"\u4f7f\u7528-screen-\u6301\u7eed\u5316\u542f\u52a8",level:4},{value:"\u4f7f\u7528 pm2 \u6301\u7eed\u5316\u542f\u52a8",id:"\u4f7f\u7528-pm2-\u6301\u7eed\u5316\u542f\u52a8",level:4},{value:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5",id:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5",level:3},{value:"\u5b89\u88c5\u540e\u53f0\u9762\u677f",id:"\u5b89\u88c5\u540e\u53f0\u9762\u677f",level:2},{value:"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5",id:"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5-1",level:3},{value:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5",id:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5-1",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5\u6d41\u7a0b"},"\u5b89\u88c5\u6d41\u7a0b"),(0,r.kt)("p",null,"NEXT \u5b9e\u9645\u4e0a\u662f\u51e0\u4e2a\u9879\u76ee\u7684\u603b\u79f0\uff0c\u5b83\u4eec\u5c5e\u4e8e\u4e00\u4e2a\u7ec4\u5408\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u6559\u7a0b\u4ec5\u63cf\u8ff0\u5982\u4f55\u5b89\u88c5 \u670d\u52a1\u7aef \u4e0e \u540e\u53f0\u670d\u52a1\u3002\u7531\u4e8e\u524d\u7aef\u6709\u4e24\u79cd\u9009\u62e9\uff0c\u56e0\u6b64\u4e0d\u4f1a\u5728\u6b64\u5904\u63cf\u8ff0\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u5b89\u88c5\u524d\u5148\u9605\u8bfb\u5b8c\u6587\u6863\uff0c\u7136\u540e\u518d\u8fdb\u884c\u5b89\u88c5\u3002"))),(0,r.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6709\u7ec8\u7aef"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4e8b\u5148\u5b89\u88c5 ",(0,r.kt)("strong",{parentName:"li"},"MongoDB \u548c Redis")),(0,r.kt)("li",{parentName:"ul"},"Node.js v16.14 \u6216\u66f4\u9ad8\u7248\u672c\uff08\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"node -v")," \u547d\u4ee4\u67e5\u770b\u7248\u672c\u53f7\uff09\u3002 \u4f60\u53ef\u4ee5\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," \u6765\u7ba1\u7406\u540c\u4e00\u673a\u5668\u4e0a\u7684\u591a\u4e2a Node \u7248\u672c\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Node.js \u65f6\uff0c\u5efa\u8bae\u52fe\u9009\u6240\u6709\u548c\u4f9d\u8d56\u76f8\u5173\u7684\u9009\u9879\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u5e73\u53f0\uff1amacOS\u3001Linux\uff08Windows \u7406\u8bba\u4e0a\u4ec5\u652f\u6301\u90e8\u5206\u529f\u80fd\uff0c\u6b64\u5e73\u53f0\u4e0d\u8003\u8651\u7ef4\u62a4\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Docker Compose \u5b89\u88c5 NEXT \uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u7ec8\u7aef\u5df2\u7ecf\u5b89\u88c5\u4e86 Docker\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u65b9\u6cd5\u5bf9\u6bd4"},"\u5b89\u88c5\u65b9\u6cd5\u5bf9\u6bd4"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"Docker \u5b89\u88c5"),"\uff0c\u5b83\u66f4\u5bb9\u6613\u7ba1\u7406\u548c\u7ef4\u62a4\u3002\u4ec5\u9700\u8981\u51e0\u4e2a\u547d\u4ee4\uff0c\u5373\u53ef\u5b89\u88c5\uff0c\u542f\u52a8\uff0c\u505c\u6b62\u548c\u5378\u8f7d\u3002")),(0,r.kt)("p",null,"\u6587\u6863\u63d0\u4f9b\u4e86\u4e09\u79cd\u5b89\u88c5\u65b9\u6cd5\uff0c\u5b83\u4eec\u5404\u6709\u5229\u5f0a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker \u5b89\u88c5"),"\uff1a\u7ba1\u7406\u4fbf\u6377\uff0c\u4f46\u4ec5\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef"),"\u5b89\u88c5\uff0c\u5b89\u88c5\u65b9\u4fbf\uff0c\u5e76\u4e14\u6570\u636e\u5df2\u7ecf\u6302\u8f7d\u6210\u6570\u636e\u5377\uff0c\u9700\u8981\u4e00\u5b9a\u7684 Docker \u5e38\u8bc6\uff0c\u66f4\u65b0\u901f\u5ea6\u7565\u6162\uff0c\u5f53\u6700\u65b0\u7684\u529f\u80fd\u6d4b\u8bd5\u5b8c\u6210\uff0c\u786e\u8ba4\u7a33\u5b9a\u540e\uff0c\u624d\u80fd\u4eab\u53d7\u5230\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5"),"\uff1a\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u540e\u53f0"),"\u5b89\u88c5\uff0c\u66f4\u65b0\u8f83\u4e3a\u9891\u7e41\uff0c\u53ef\u4ee5\u8f83\u5feb\u7684\u4eab\u53d7\u5230\u6700\u65b0\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5"),"\uff1a\u901a\u7528\u65b9\u6848\uff0c\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u5168\u90e8\u5b89\u88c5"),"\uff0c\u53ef\u4ee5\u81ea\u5df1\u505a",(0,r.kt)("em",{parentName:"p"},"\u81ea\u5b9a\u4e49\u4fee\u6539"),"\uff0c\u66f4\u65b0\u6700\u4e3a\u9891\u7e41\uff0c\u53ef\u4ee5\u6700\u5feb\u7684\u4eab\u53d7\u5230\u6700\u65b0\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u9700\u8981\u670d\u52a1\u5668\u6709\u8db3\u591f\u7684\u6027\u80fd(Memory)\u624d\u80fd\u7f16\u8bd1\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u670d\u52a1\u7aef"},"\u5b89\u88c5\u670d\u52a1\u7aef"),(0,r.kt)("h3",{id:"\u4f7f\u7528-docker-\u5b89\u88c5"},"\u4f7f\u7528 Docker \u5b89\u88c5"),(0,r.kt)("p",null,"\u4f7f\u7528\u5df2\u7f16\u5199\u597d\u7684 docker-compose.yml \u6587\u4ef6\uff0c\u53ef\u4ee5\u5f88\u5feb\u5730\u5b89\u88c5 NEXT\uff0c\u5e76\u4e14\u65e0\u9700\u5b89\u88c5\u4efb\u4f55\u5176\u4ed6\u8f6f\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://fastly.jsdelivr.net/gh/nx-space/core@main/docker-compose.yml\ndocker compose up -d\n")),(0,r.kt)("p",null,"\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3333"},"http://localhost:3333"),", \u5982\u679c\u6b63\u5e38\u8fd4\u56de\u6570\u636e\uff0c\u5219\u8868\u793a\u670d\u52a1\u7aef\u5b89\u88c5\u6210\u529f\u5566\uff01"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 Docker \u5b89\u88c5\u670d\u52a1\u7aef\uff0c\u6570\u636e\u5e93\u548c Redis \u5bb9\u5668\u5c06\u4f1a\u5728\u5185\u90e8\u88ab\u521b\u5efa\uff0c\u5e76\u4e14\u5c06\u4f1a\u88ab\u6620\u5c04\u5230\u672c\u5730\u7684\u7aef\u53e3\uff0c\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u81ea\u884c\u4fee\u6539\u6620\u5c04\u5173\u7cfb"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u6587\u4ef6\u5df2\u7ecf\u6302\u8f7d\u6210\u6570\u636e\u5377\u505a\u6301\u4e45\u5316\u5904\u7406\uff0c\u8bf7\u4e0d\u8981\u968f\u610f\u5220\u9664 data \u76ee\u5f55\uff0c\u5426\u5219\u5c06\u4f1a\u9020\u6210\u6570\u636e\u5e93\u6587\u4ef6\u4e22\u5931\uff1b\u5982\u679c\u4f60\u9700\u8981\u5907\u4efd\u6570\u636e\uff0c\u8bf7\u8fdb\u5165\u540e\u53f0\u9762\u677f\uff0c\u5c06\u6570\u636e\u5907\u4efd\u4e0b\u8f7d\uff0c\u6216\u8005\uff0c\u5907\u4efd data \u76ee\u5f55"))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5"},"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nx-space/core/releases"},"GitHub Release")," \u9875\u9762\uff0c\u627e\u5230\u7b26\u5408\u4f60\u7684\u7cfb\u7edf\u7684\u5305\uff0c\u70b9\u51fb\u4e0b\u8f7d\u6784\u5efa\u597d\u7684\u5305\uff0c\u5efa\u8bae\u5c06\u5176\u653e\u5728\u6839\u76ee\u5f55\u4e2d\u5e76\u89e3\u538b\uff0c\u8fdb\u5165\u89e3\u538b\u7684\u76ee\u5f55\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ node index.js\n")),(0,r.kt)("p",null,"\u82e5\u8fd4\u56de\u5982\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5219\u8868\u660e\u60a8\u5df2\u542f\u52a8\u6210\u529f\uff5e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2139 [MongoDB] connecting...                                                                                             \n\u2139 [MongoDB] readied!                                                                                                  \n\u2139 ENV: undefined                                                                                                \n\u2714 [P92152] \u670d\u52a1\u5668\u6b63\u5728\u76d1\u542c: http://127.0.0.1:3333                                                                                                     \n\u2139  [NEXT]  NxServer \u5df2\u542f\u52a8. +5322ms                                                                                                    \n\u2139  [ConfigsService]  ConfigsService \u521d\u59cb\u5316\u5b8c\u6210                                                                                                         \n")),(0,r.kt)("h4",{id:"\u4f7f\u7528-screen-\u6301\u7eed\u5316\u542f\u52a8"},"\u4f7f\u7528 screen \u6301\u7eed\u5316\u542f\u52a8"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u53cd\u5411\u4ee3\u7406\uff08\u5982 Nginx\uff09\u6765\u4f7f\u7528\u57df\u540d\u8bbf\u95ee\u670d\u52a1\u5668\uff0c\u6301\u7eed\u5316\u542f\u52a8\u4f60\u53ef\u4ee5\u4f7f\u7528 screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"screen -S <session_name> # <session_name> \u81ea\u5b9a\n# example: screen -S nx-core\n")),(0,r.kt)("p",null,"\u8131\u79bb\u4f1a\u8bdd\u4f60\u53ef\u4ee5\u4f7f\u7528 Ctrl+a d \u4e5f\u53ef\u4ee5\u76f4\u63a5\u65ad\u5f00 ssh \u94fe\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"screen -ls # \u83b7\u53d6\u5168\u90e8\u7684 screen \u4f1a\u8bdd\n# \u8fd4\u56de\u4e0e\u4ee5\u4e0b\u76f8\u4f3c\uff1a\n# There are screens on:\n#     123123.xxxxxx\n#     23454.nx-core\nscreen -r <ID> # \u6b64\u5904 <ID> \u586b\u5199 `23454` \u5219\u4f1a\u8fdb\u5165 nx-core \u4f1a\u8bdd\n")),(0,r.kt)("p",null,"\u8fdb\u5165\u4f1a\u8bdd\u540e\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u6587\u6863\u6240\u63d0\u51fa\u7684\u5b89\u88c5\u65b9\u5f0f\u5b89\u88c5\u4e86\uff0c\u5bf9\u4e8e\u8fd9\u79cd\u65b9\u6cd5\u4ec5\u5efa\u8bae",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6784\u5efa\u5305\u5b89\u88c5"),"\u6216",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5\u65b9\u6cd5")),(0,r.kt)("h4",{id:"\u4f7f\u7528-pm2-\u6301\u7eed\u5316\u542f\u52a8"},"\u4f7f\u7528 pm2 \u6301\u7eed\u5316\u542f\u52a8"),(0,r.kt)("p",null,"\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 pm2\uff0c\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u53c2\u7167\u6b64\u5904:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  apps: [\n    {\n      name: 'nx-core',\n      script: 'index.js', // \u542f\u52a8\u6587\u4ef6\n      autorestart: true, // \u81ea\u52a8\u91cd\u542f\u670d\u52a1\u5668\n      watch: false, // \u5982\u679c\u60a8\u7684\u670d\u52a1\u5668\u652f\u6301\u76d1\u63a7\uff0c\u8bf7\u5c06\u6b64\u9879\u8bbe\u7f6e\u4e3a true\n      instances: 2, // \u542f\u52a8\u4e24\u4e2a\u5b9e\u4f8b, \u5982\u679c\u65e0\u6cd5\u542f\u52a8\u8bf7\u4fee\u6539\u4e3a 1\n      exec_mode: 'cluster', // \u542f\u52a8\u6a21\u5f0f\uff0ccluster \u4e3a\u591a\u8fdb\u7a0b\u6a21\u5f0f\n      max_memory_restart: '230M', // \u5185\u5b58\u9650\u5236\uff0c\u8d85\u8fc7\u5c06\u81ea\u52a8\u91cd\u542f\u670d\u52a1\u5668\n      atgs: '--color' // \u542f\u52a8\u53c2\u6570\n      env: {\n        NODE_ENV: 'production',\n        NODE_PATH: ..., // \u8bbe\u7f6e\u8def\u5f84, \u8bf7\u5728\u7ec8\u7aef\u8f93\u5165 npm root --quiet -g \u67e5\u770b\n      }\n    }\n  ]\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u5728\u542f\u52a8\u524d\u8bbe\u7f6e\u597d ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_PATH")," \u73af\u5883\u53d8\u91cf\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u547d\u4ee4\u8fd4\u56de\u7684\u4fe1\u606f\u8f93\u5165"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm root --quiet -g\n")),(0,r.kt)("p",{parentName:"admonition"},"\u8f93\u5165\u793a\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'NODE_PATH: "/usr/local/lib/node_modules"'))),(0,r.kt)("p",null,"\u63a5\u7740\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 pm2 \u542f\u52a8\u4e86\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pm2 start \u4f60\u521a\u521a\u8f93\u5165\u914d\u7f6e\u6587\u4ef6\u7684\u6587\u4ef6\u540d\n# example: pm2 start nx-core.config.js\n")),(0,r.kt)("p",null,"\u76f8\u5173\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pm2 list # \u67e5\u770b\u6240\u6709\u8fd0\u884c\u7684\u670d\u52a1\u5668\n$ pm2 start <file_name> # \u542f\u52a8\u670d\u52a1\u5668\n$ pm2 stop <name> # \u505c\u6b62\u670d\u52a1\u5668\n$ pm2 restart <name> # \u91cd\u542f\u670d\u52a1\u5668\n$ pm2 delete <name> # \u5220\u9664\u670d\u52a1\u5668\n$ pm2 logs <name> # \u67e5\u770b\u670d\u52a1\u5668\u65e5\u5fd7\n$ pm2 monitor # \u67e5\u770b\u6240\u6709\u670d\u52a1\u5668\u7684\u76d1\u63a7\u4fe1\u606f\n$ pm2 flush # \u5220\u9664\u6240\u6709\u670d\u52a1\u5668\u7684\u76d1\u63a7\u4fe1\u606f\n$ pm2 reload <name> # \u91cd\u65b0\u52a0\u8f7d\u670d\u52a1\u5668\n$ pm2 reload <name> --env <env> --script <script> --args <args> # \u91cd\u65b0\u52a0\u8f7d\u670d\u52a1\u5668\u5e76\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3001\u811a\u672c\u548c\u53c2\u6570\n\n")),(0,r.kt)("h3",{id:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5"},"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u5148\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nx-space/core.git nx-space-core --depth 1\ncd nx-space-core && git fetch --tags && git checkout $(git rev-list --tags --max-count=1) \npnpm ci\npnpm build\npnpm prod:start # \u542f\u52a8\u670d\u52a1\u5668\npnpm prod:pm2 # \u4f7f\u7528 pm2 \u542f\u52a8\u670d\u52a1\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u53cd\u5411\u4ee3\u7406\uff08\u5982 Nginx\uff09\u6765\u4f7f\u7528\u57df\u540d\u8bbf\u95ee\u670d\u52a1\u5668"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u540e\u53f0\u9762\u677f"},"\u5b89\u88c5\u540e\u53f0\u9762\u677f"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5-1"},"\u4f7f\u7528\u5df2\u6784\u5efa\u5305\u5b89\u88c5"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nx-space/nx-admin/releases"},"GitHub Release")," \u9875\u9762\u4e0b\u8f7d\u6784\u5efa\u597d\u7684\u5305\uff0c\u4e0a\u4f20\u81f3\u670d\u52a1\u5668\u6839\u76ee\u5f55\uff0c\u542f\u52a8\u670d\u52a1\uff08\u5982 Nginx\uff09\uff0c\u5373\u53ef\u6210\u529f\u5b89\u88c5"),(0,r.kt)("h3",{id:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5-1"},"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nx-space/nx-admin.git nx-space-nx-admin --depth 1\ncd nx-space-nx-admin && git fetch --tags && git checkout $(git rev-list --tags --max-count=1) \npnpm ci\npnpm build\n")),(0,r.kt)("p",null,"\u5c06 dist \u6587\u4ef6\u5939\u4e0a\u4f20\u81f3\u670d\u52a1\u5668\u6839\u76ee\u5f55\uff0c\u542f\u52a8\u670d\u52a1\uff08\u5982 Nginx\uff09\uff0c\u5373\u53ef\u6210\u529f\u5b89\u88c5"))}m.isMDXComponent=!0}}]);