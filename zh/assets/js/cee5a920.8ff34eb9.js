(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[48710],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14229:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"KEDA \u4f5c\u4e3a\u81ea\u52a8\u4f38\u7f29 Trait"},o={unversionedId:"platform-engineers/keda",id:"version-v1.1/platform-engineers/keda",isDocsHomePage:!1,title:"KEDA \u4f5c\u4e3a\u81ea\u52a8\u4f38\u7f29 Trait",description:"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u4e86\u89e3 Definition Objects \u548c Defining Traits with CUE \u7684\u6982\u5ff5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/keda.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/keda",permalink:"/zh/docs/platform-engineers/keda",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/keda.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"KEDA \u4f5c\u4e3a\u81ea\u52a8\u4f38\u7f29 Trait"}},p=[{value:"\u6b65\u9aa4 1: \u5b89\u88c5 KEDA controller",id:"\u6b65\u9aa4-1-\u5b89\u88c5-keda-controller",children:[]},{value:"\u6b65\u9aa4 2: \u521b\u5efa Trait Definition",id:"\u6b65\u9aa4-2-\u521b\u5efa-trait-definition",children:[{value:"1. \u63cf\u8ff0 Trait",id:"1-\u63cf\u8ff0-trait",children:[]},{value:"2. \u6ce8\u518c API \u8d44\u6e90",id:"2-\u6ce8\u518c-api-\u8d44\u6e90",children:[]},{value:"3. \u5b9a\u4e49 <code>appliesToWorkloads</code>",id:"3-\u5b9a\u4e49-appliestoworkloads",children:[]},{value:"4. \u5b9a\u4e49 Schematic",id:"4-\u5b9a\u4e49-schematic",children:[]}]},{value:"\u6b65\u9aa4 2: \u5411 KubeVela \u6ce8\u518c\u65b0\u7684 Trait",id:"\u6b65\u9aa4-2-\u5411-kubevela-\u6ce8\u518c\u65b0\u7684-trait",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u4e86\u89e3 ",(0,i.kt)("a",{parentName:"p",href:"definition-and-templates"},"Definition Objects")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"./traits/customize-trait"},"Defining Traits with CUE")," \u7684\u6982\u5ff5\u3002")),(0,i.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5c06 ",(0,i.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," \u4f5c\u4e3a\u65b0\u7684\u81ea\u52a8\u4f38\u7f29 trait \u6dfb\u52a0\u5230\u57fa\u4e8e KubeVela \u7684\u5e73\u53f0\u4e2d\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"KEDA \u662f\u57fa\u4e8e Kubernetes \u4e8b\u4ef6\u9a71\u52a8\u7684\u81ea\u52a8\u4f38\u7f29\u5de5\u5177\u3002\u4f7f\u7528 KEDA\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u8d44\u6e90\u6307\u6807\u6216\u9700\u8981\u5904\u7406\u7684\u4e8b\u4ef6\u6570\u6765\u9a71\u52a8\u4efb\u4f55\u5bb9\u5668\u7684\u4f38\u7f29\u3002")),(0,i.kt)("h2",{id:"\u6b65\u9aa4-1-\u5b89\u88c5-keda-controller"},"\u6b65\u9aa4 1: \u5b89\u88c5 KEDA controller"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://keda.sh/docs/2.2/deploy/"},"\u5b89\u88c5 KEDA controller")," \u5230 K8s \u4e2d\u3002"),(0,i.kt)("h2",{id:"\u6b65\u9aa4-2-\u521b\u5efa-trait-definition"},"\u6b65\u9aa4 2: \u521b\u5efa Trait Definition"),(0,i.kt)("p",null,"\u8981\u5728 KubeVela \u4e2d\u5c06 KEDA \u6ce8\u518c\u4e3a\u4e00\u9879\u65b0\u529f\u80fd\uff08\u5373 trait)\uff0c\u552f\u4e00\u9700\u8981\u505a\u7684\u5c31\u662f\u4e3a\u5176\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," \u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5b8c\u6574\u7684\u793a\u4f8b\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/registry/keda-scaler.yaml"},"keda.yaml")," \u4e2d\u627e\u5230\u3002\n\u4e0b\u9762\u5217\u51fa\u4e86\u51e0\u4e2a\u8981\u70b9\u3002"),(0,i.kt)("h3",{id:"1-\u63cf\u8ff0-trait"},"1. \u63cf\u8ff0 Trait"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nname: keda-scaler\nannotations:\n  definition.oam.dev/description: "keda supports multiple event to elastically scale applications, this scaler only applies to deployment as example"\n...\n')),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u6807\u7b7e ",(0,i.kt)("inlineCode",{parentName:"p"},"definition.oam.dev/description")," \u4e3a\u8be5 trait \u6dfb\u52a0\u4e00\u884c\u63cf\u8ff0\u3002\u5b83\u5c06\u663e\u793a\u5728\u5e2e\u52a9\u547d\u4ee4\u4e2d\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"$ vela traits"),"\u3002"),(0,i.kt)("h3",{id:"2-\u6ce8\u518c-api-\u8d44\u6e90"},"2. \u6ce8\u518c API \u8d44\u6e90"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  definitionRef:\n    name: scaledobjects.keda.sh\n...\n")),(0,i.kt)("p",null,"\u8fd9\u5c31\u662f\u5c06 KEDA ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaledObject")," \u7684 API \u8d44\u6e90\u58f0\u660e\u548c\u6ce8\u518c\u4e3a trait \u7684\u65b9\u5f0f\u3002"),(0,i.kt)("h3",{id:"3-\u5b9a\u4e49-appliestoworkloads"},"3. \u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"h3"},"appliesToWorkloads")),(0,i.kt)("p",null,"trait \u53ef\u4ee5\u9644\u52a0\u5230\u6307\u5b9a\u6216\u5168\u90e8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\uff08",(0,i.kt)("inlineCode",{parentName:"p"},'"*"')," \u8868\u793a\u4f60\u7684 trait \u53ef\u4ee5\u4e0e\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u4e00\u8d77\u4f7f\u7528\uff09\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e KEAD\uff0c\u6211\u4eec\u4ec5\u5141\u8bb8\u7528\u6237\u5c06\u5176\u9644\u52a0\u5230 Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u58f0\u660e\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  ...\n  appliesToWorkloads:\n    - "deployments.apps" # claim KEDA based autoscaling trait can only attach to Kubernetes Deployment workload type.\n...\n')),(0,i.kt)("h3",{id:"4-\u5b9a\u4e49-schematic"},"4. \u5b9a\u4e49 Schematic"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\u4e2d\uff0c\u6211\u4eec\u5c06\u5b9a\u4e49\u57fa\u4e8e KEDA \u81ea\u52a8\u4f38\u7f29 trait \u7684 schematic\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u7b80\u5316\u7684\u539f\u8bed\u4e3a KEDA ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaledObject")," \u521b\u5efa\u62bd\u8c61\uff0c\u56e0\u6b64\u5e73\u53f0\u7684\u6700\u7ec8\u7528\u6237\u6839\u672c\u4e0d\u9700\u8981\u77e5\u9053\u4ec0\u4e48\u662f KEDA \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nschematic:\n  cue:\n    template: |-\n      outputs: kedaScaler: {\n        apiVersion: "keda.sh/v1alpha1"\n        kind:       "ScaledObject"\n        metadata: {\n            name: context.name\n        }\n        spec: {\n            scaleTargetRef: {\n                name: context.name\n            }\n            triggers: [{\n                type: parameter.triggerType\n                metadata: {\n                    type:  "Utilization"\n                    value: parameter.value\n                }\n            }]\n        }\n      }\n      parameter: {\n        // +usage=Types of triggering application elastic scaling, Optional: cpu, memory\n        triggerType: string\n        // +usage=Value to trigger scaling actions, represented as a percentage of the requested value of the resource for the pods. like: "60"(60%)\n        value: string\n      }\n')),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e CUE \u7684\u6a21\u677f\uff0c\u4ec5\u5f00\u653e ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," \u4f5c\u4e3a trait \u7684\u5c5e\u6027\u4f9b\u7528\u6237\u8bbe\u7f6e\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"./traits/customize-trait"},"Defining Trait with CUE")," \u90e8\u5206\uff0c\u4ee5\u83b7\u53d6\u6709\u5173 CUE \u6a21\u677f\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,i.kt)("h2",{id:"\u6b65\u9aa4-2-\u5411-kubevela-\u6ce8\u518c\u65b0\u7684-trait"},"\u6b65\u9aa4 2: \u5411 KubeVela \u6ce8\u518c\u65b0\u7684 Trait"),(0,i.kt)("p",null,"\u5b9a\u4e49\u6587\u4ef6\u51c6\u5907\u5c31\u7eea\u540e\uff0c\u4f60\u53ea\u9700\u5c06\u5176\u90e8\u7f72\u5230 Kubernetes \u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/catalog/master/registry/keda-scaler.yaml\n")),(0,i.kt)("p",null,"\u7528\u6237\u5c31\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u4e2d\u7acb\u5373\u4f7f\u7528\u65b0 trait\u3002"))}s.isMDXComponent=!0}}]);