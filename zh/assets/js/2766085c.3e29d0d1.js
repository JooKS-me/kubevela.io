(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8714],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12340:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),l={title:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u6570\u636e\u6216\u73af\u5883"},i={unversionedId:"developers/config-app",id:"version-v1.0/developers/config-app",isDocsHomePage:!1,title:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u6570\u636e\u6216\u73af\u5883",description:"vela \u63d0\u4f9b config \u547d\u4ee4\u7528\u4e8e\u7ba1\u7406\u914d\u7f6e\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/developers/config-app.md",sourceDirName:"developers",slug:"/developers/config-app",permalink:"/zh/docs/v1.0/developers/config-app",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/config-app.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u6570\u636e\u6216\u73af\u5883"},sidebar:"version-v1.0/docs",previous:{title:"\u80fd\u529b\u7ba1\u7406",permalink:"/zh/docs/v1.0/developers/cap-center"},next:{title:"vela components",permalink:"/zh/docs/v1.0/cli/vela_components"}},c=[{value:"<code>vela config set</code>",id:"vela-config-set",children:[]},{value:"<code>vela config get</code>",id:"vela-config-get",children:[]},{value:"<code>vela config del</code>",id:"vela-config-del",children:[]},{value:"<code>vela config ls</code>",id:"vela-config-ls",children:[]},{value:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]}],p={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vela")," \u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," \u547d\u4ee4\u7528\u4e8e\u7ba1\u7406\u914d\u7f6e\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"vela-config-set"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config set")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b c=d\nreading existing config data and merging with user input\nconfig data saved successfully \u2705\n")),(0,o.kt)("h2",{id:"vela-config-get"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config get")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config get test\nData:\n  a: b\n  c: d\n")),(0,o.kt)("h2",{id:"vela-config-del"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config del")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config del test\nconfig (test) deleted successfully\n")),(0,o.kt)("h2",{id:"vela-config-ls"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config ls")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b\n$ vela config set test2 c=d\n$ vela config ls\nNAME\ntest\ntest2\n")),(0,o.kt)("h2",{id:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5c06\u914d\u7f6e\u6570\u636e\u8bbe\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config set demo DEMO_HELLO=helloworld\n")),(0,o.kt)("p",null,"\u5c06\u4ee5\u4e0b\u5185\u5bb9\u4fdd\u5b58\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"vela.yaml")," \u5230\u5f53\u524d\u76ee\u5f55\u4e2d\uff1a "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: testapp\nservices:\n  env-config-demo:\n    image: heroku/nodejs-hello-world\n    config: demo\n")),(0,o.kt)("p",null,"\u7136\u540e\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (env-config-demo)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc env-config-demo\n")),(0,o.kt)("p",null,"\u68c0\u67e5\u73af\u5883\u53d8\u91cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vela exec testapp -- printenv | grep DEMO_HELLO\nDEMO_HELLO=helloworld\n")))}s.isMDXComponent=!0}}]);