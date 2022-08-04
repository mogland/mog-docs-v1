"use strict";(self.webpackChunknx_docs=self.webpackChunknx_docs||[]).push([[762],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(2081),r=(n(9496),n(9613));const i={sidebar_label:"Posts",sidebar_position:2},l="Posts",o={unversionedId:"core-api/posts",id:"core-api/posts",title:"Posts",description:"GET /",source:"@site/docs/core-api/posts.md",sourceDirName:"core-api",slug:"/core-api/posts",permalink:"/docs/core-api/posts",draft:!1,editUrl:"https://github.com/nx-space/nx-docs/docs/core-api/posts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Posts",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Root",permalink:"/docs/core-api/root"}},p={},d=[{value:"GET <code>/</code>",id:"get-",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Example",id:"return-example",level:3},{value:"POST <code>/</code>",id:"post-",level:2},{value:"Request Body",id:"request-body",level:3},{value:"Return Example",id:"return-example-1",level:3},{value:"GET <code>/:id</code>",id:"get-id",level:2},{value:"PUT <code>/:id</code>",id:"put-id",level:2},{value:"PATCH <code>/:id</code>",id:"patch-id",level:2},{value:"DELETE <code>/:id</code>",id:"delete-id",level:2},{value:"GET <code>/:category/:slug</code>",id:"get-categoryslug",level:2},{value:"GET <code>/_like</code>",id:"get-_like",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"posts"},"Posts"),(0,r.kt)("h2",{id:"get-"},"GET ",(0,r.kt)("inlineCode",{parentName:"h2"},"/")),(0,r.kt)("p",null,"\u83b7\u53d6\u6587\u7ae0\u5217\u8868\uff0c\u81ea\u5e26\u5206\u9875\u5668"),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),"\uff1a\u5206\u9875\u9875\u7801\uff0c\u9ed8\u8ba4\u4e3a 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size"),"\uff1a\u6bcf\u9875\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a 10"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"select"),"\uff1a\u5b57\u6bb5\u9009\u62e9\uff0c\u7a7a\u5219\u8f93\u51fa\u5168\u90e8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"),"\uff1a\u7b5b\u9009\u5e74\u4efd\uff0c\u9ed8\u8ba4\u4e3a\u7a7a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sortBy"),"\uff1a\u6392\u5e8f\u5b57\u6bb5\uff0c\u7a7a\u5219\u9ed8\u8ba4\u6309\u65f6\u95f4\u5012\u5e8f\uff0c\u53ef\u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," (\u6b63\u5e8f\u6216\u5012\u5e8f)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'http://127.0.0.1:3333/posts?size=10&page=1' \\\n  -H 'accept: */*'\n")),(0,r.kt)("h3",{id:"return-example"},"Return Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": "62e8a083e0a63c53aee0b252",\n      "created": "2022-08-02T03:56:51.981Z",\n      "comments_index": 0,\n      "allow_comment": true,\n      "title": "\u6b22\u8fce\u6765\u5230 NEXT",\n      "text": "\u6b22\u8fce\u6765\u5230 NEXT\uff0c\u5f53\u4f60\u770b\u5230\u8fd9\u6761\u6587\u7ae0\u7684\u65f6\u5019\uff0c\u8bf4\u660e\u4f60\u5df2\u7ecf\u6210\u529f\u7684\u5b89\u88c5\u5e76\u521d\u59cb\u5316\u4e86 NEXT\u3002",\n      "modified": null,\n      "slug": "welcome-to-next",\n      "summary": "\u6b22\u8fce\u6765\u5230 NEXT",\n      "category_id": "62bd9c1704d9a4357016c6ac",\n      "count": {\n        "read": 0,\n        "like": 0\n      },\n      "tags": [],\n      "images": [],\n      "category": {\n        "id": "62bd9c1704d9a4357016c6ac",\n        "name": "\u9ed8\u8ba4\u5206\u7c7b",\n        "type": 0,\n        "slug": "default",\n        "created": "2022-06-30T12:50:31.742Z"\n      }\n    }\n  ],\n  "pagination": {\n    "total": 1,\n    "current_page": 1,\n    "total_page": 1,\n    "size": 10,\n    "has_next_page": false,\n    "has_prev_page": false\n  }\n}\n')),(0,r.kt)("h2",{id:"post-"},"POST ",(0,r.kt)("inlineCode",{parentName:"h2"},"/")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u63a5\u53e3\u9700\u8981\u767b\u5f55\u624d\u80fd\u8bf7\u6c42\uff0c\u8bf7\u5728\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YourToken>"))),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u7bc7\u6587\u7ae0\uff0c\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"Token")),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),"\uff1a\u6587\u7ae0\u6807\u9898"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text"),"\uff1a\u6587\u7ae0\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slug"),"\uff1a\u6587\u7ae0 slug\uff0c\u7528\u4e8e\u751f\u6210\u6587\u7ae0\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"summary"),"\uff1a\u6587\u7ae0\u6458\u8981"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category_id"),"\uff1a\u6587\u7ae0\u5206\u7c7b ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"copyright"),"\uff1a\u662f\u5426\u7f72\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pin"),"\uff1a\u7f6e\u9876\u65f6\u95f4\uff0c\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DDTHH:mm:ss.SSSZ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pinOrder"),"\uff1a\u7f6e\u9876\u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tags"),"\uff1a\u6587\u7ae0\u6807\u7b7e\uff0c\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hide"),"\uff1a\u662f\u5426\u9690\u85cf\uff0c\u9ed8\u8ba4\u4e3a false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password"),"\uff1a\u6587\u7ae0\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rss"),"\uff1a\u662f\u5426\u53d1\u5e03\u5230 RSS\uff0c\u9ed8\u8ba4\u4e3a true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowComment"),"\uff1a\u662f\u5426\u5141\u8bb8\u8bc4\u8bba\uff0c\u9ed8\u8ba4\u4e3a true")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Body Example"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "string", // \u6587\u7ae0\u6807\u9898\n  "text": "string", // \u6587\u7ae0\u5185\u5bb9\n  "slug": "string", // \u6587\u7ae0 slug\uff0c\u5fc5\u987b\n  "summary": "string", // \u6587\u7ae0\u6458\u8981\uff0c\u5fc5\u987b\n  "categoryId": "5eb2c62a613a5ab0642f1f7a", // \u6587\u7ae0\u5206\u7c7bId\uff0c\u5fc5\u987b\n  "copyright": true, // \u662f\u5426\u7f72\u540d\uff0c\u9ed8\u8ba4\u4e3a true\n  "pin": "2022-08-04T08:07:10.904Z", // \u7f6e\u9876\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\n  "pinOrder": 0, // \u7f6e\u9876\u987a\u5e8f\uff0c\u9ed8\u8ba4\u4e3a 0\n  "tags": [], // \u6807\u7b7e\n  "hide": false, // \u662f\u5426\u9690\u85cf\uff0c\u9ed8\u8ba4\u4e3a false\n  "password": "", // \u6587\u7ae0\u5bc6\u7801\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\n  "rss": true, // \u662f\u5426\u53d1\u5e03\u5230 RSS\uff0c\u9ed8\u8ba4\u4e3a true\n  "allowComment": true // \u662f\u5426\u5141\u8bb8\u8bc4\u8bba\uff0c\u9ed8\u8ba4\u4e3a true\n}\n')),(0,r.kt)("h3",{id:"return-example-1"},"Return Example"),(0,r.kt)("p",null,"\u8fd4\u56de\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"Request Body")," \u7684\u5185\u5bb9"),(0,r.kt)("h2",{id:"get-id"},"GET ",(0,r.kt)("inlineCode",{parentName:"h2"},"/:id")),(0,r.kt)("p",null,"\u901a\u8fc7\u6587\u7ae0 ID \u83b7\u53d6\u6587\u7ae0\u8be6\u60c5"),(0,r.kt)("h2",{id:"put-id"},"PUT ",(0,r.kt)("inlineCode",{parentName:"h2"},"/:id")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u63a5\u53e3\u9700\u8981\u767b\u5f55\u624d\u80fd\u8bf7\u6c42\uff0c\u8bf7\u5728\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YourToken>"))),(0,r.kt)("p",null,"\u66f4\u65b0\u4e00\u7bc7\u6587\u7ae0\uff0c\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"Token")),(0,r.kt)("h2",{id:"patch-id"},"PATCH ",(0,r.kt)("inlineCode",{parentName:"h2"},"/:id")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u63a5\u53e3\u9700\u8981\u767b\u5f55\u624d\u80fd\u8bf7\u6c42\uff0c\u8bf7\u5728\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YourToken>"))),(0,r.kt)("p",null,"\u66f4\u65b0\u4e00\u7bc7\u6587\u7ae0\uff0c\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"Token")),(0,r.kt)("h2",{id:"delete-id"},"DELETE ",(0,r.kt)("inlineCode",{parentName:"h2"},"/:id")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u63a5\u53e3\u9700\u8981\u767b\u5f55\u624d\u80fd\u8bf7\u6c42\uff0c\u8bf7\u5728\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YourToken>"))),(0,r.kt)("p",null,"\u5220\u9664\u4e00\u7bc7\u6587\u7ae0\uff0c\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"Token")),(0,r.kt)("h2",{id:"get-categoryslug"},"GET ",(0,r.kt)("inlineCode",{parentName:"h2"},"/:category/:slug")),(0,r.kt)("p",null,"\u901a\u8fc7\u5206\u7c7b ID \u548c \u81ea\u5b9a\u4e49\u522b\u540d \u83b7\u53d6\u6587\u7ae0\u8be6\u60c5"),(0,r.kt)("h2",{id:"get-_like"},"GET ",(0,r.kt)("inlineCode",{parentName:"h2"},"/_like")),(0,r.kt)("p",null,"\u7ed9\u6587\u7ae0\u70b9\u8d5e"))}s.isMDXComponent=!0}}]);