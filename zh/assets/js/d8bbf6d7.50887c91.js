(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[13183],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(i,".").concat(d)]||u[d]||c[d]||p;return t?a.createElement(f,o(o({ref:n},m),{},{components:t})):a.createElement(f,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17603:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return m}});var a=t(22122),r=t(19756),p=(t(67294),t(3905)),o={title:"\u4ea4\u4ed8\u5b8c\u6574\u6a21\u5757"},l={unversionedId:"platform-engineers/cue/advanced",id:"version-v1.1/platform-engineers/cue/advanced",isDocsHomePage:!1,title:"\u4ea4\u4ed8\u5b8c\u6574\u6a21\u5757",description:"\u73b0\u5728\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86OAM \u6a21\u578b\u548c\u6a21\u5757\u5b9a\u4e49\uff08X-Definition \uff09\u7684\u6982\u5ff5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 CUE \u4ea4\u4ed8\u5b8c\u6574\u7684\u6a21\u5757\u5316\u529f\u80fd\uff0c\u4f7f\u5f97\u4f60\u7684\u5e73\u53f0\u53ef\u4ee5\u968f\u7740\u7528\u6237\u9700\u6c42\u53d8\u5316\u52a8\u6001\u6269\u5c55\u529f\u80fd\uff0c\u9002\u5e94\u5404\u7c7b\u7528\u6237\u548c\u573a\u666f\uff0c\u6ee1\u8db3\u516c\u53f8\u4e1a\u52a1\u957f\u671f\u53d1\u5c55\u7684\u8fed\u4ee3\u8bc9\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/cue/advanced.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/advanced",permalink:"/zh/docs/platform-engineers/cue/advanced",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/cue/advanced.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u4ea4\u4ed8\u5b8c\u6574\u6a21\u5757"},sidebar:"version-v1.1/docs",previous:{title:"\u7f16\u8f91\u7ba1\u7406\u6a21\u5757\u5b9a\u4e49",permalink:"/zh/docs/platform-engineers/cue/definition-edit"},next:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8",permalink:"/zh/docs/platform-engineers/components/custom-component"}},i=[{value:"\u5c06 Kubernetes API \u5bf9\u8c61\u8f6c\u5316\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u5c06-kubernetes-api-\u5bf9\u8c61\u8f6c\u5316\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[]},{value:"\u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u5b9a\u5236\u5316\u53c2\u6570",id:"\u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u5b9a\u5236\u5316\u53c2\u6570",children:[]},{value:"\u8c03\u8bd5\u6a21\u5757\u5316\u529f\u80fd\u7684\u6b63\u786e\u6027",id:"\u8c03\u8bd5\u6a21\u5757\u5316\u529f\u80fd\u7684\u6b63\u786e\u6027",children:[]},{value:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u4fe1\u606f\u51cf\u5c11\u53c2\u6570",id:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u4fe1\u606f\u51cf\u5c11\u53c2\u6570",children:[]},{value:"\u4f7f\u7528\u8fd0\u7ef4\u80fd\u529b\u6309\u9700\u6dfb\u52a0\u914d\u7f6e",id:"\u4f7f\u7528\u8fd0\u7ef4\u80fd\u529b\u6309\u9700\u6dfb\u52a0\u914d\u7f6e",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],s={toc:i};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86",(0,p.kt)("a",{parentName:"p",href:"../oam/oam-model"},"OAM \u6a21\u578b"),"\u548c",(0,p.kt)("a",{parentName:"p",href:"../oam/x-definition"},"\u6a21\u5757\u5b9a\u4e49\uff08X-Definition \uff09"),"\u7684\u6982\u5ff5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 CUE \u4ea4\u4ed8\u5b8c\u6574\u7684\u6a21\u5757\u5316\u529f\u80fd\uff0c\u4f7f\u5f97\u4f60\u7684\u5e73\u53f0\u53ef\u4ee5\u968f\u7740\u7528\u6237\u9700\u6c42\u53d8\u5316\u52a8\u6001\u6269\u5c55\u529f\u80fd\uff0c\u9002\u5e94\u5404\u7c7b\u7528\u6237\u548c\u573a\u666f\uff0c\u6ee1\u8db3\u516c\u53f8\u4e1a\u52a1\u957f\u671f\u53d1\u5c55\u7684\u8fed\u4ee3\u8bc9\u6c42\u3002"),(0,p.kt)("h2",{id:"\u5c06-kubernetes-api-\u5bf9\u8c61\u8f6c\u5316\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u5c06 Kubernetes API \u5bf9\u8c61\u8f6c\u5316\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"KubeVela \u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"../cue/basic"},"CUE")," \u914d\u7f6e\u8bed\u8a00\u4f5c\u4e3a\u7ba1\u7406\u7528\u6237\u6a21\u5757\u5316\u4ea4\u4ed8\u7684\u6838\u5fc3\uff0c\u540c\u65f6\u4e5f\u56f4\u7ed5 CUE \u63d0\u4f9b\u4e86\u7ba1\u7406\u5de5\u5177\u6765",(0,p.kt)("a",{parentName:"p",href:"../cue/definition-edit"},"\u7f16\u8f91\u548c\u751f\u6210 KubeVela \u7684\u6a21\u5757\u5b9a\u4e49\u5bf9\u8c61"),"\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4ee5 Kubernetes \u5b98\u65b9\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet \u5bf9\u8c61"),"\u4e3a\u4f8b\uff0c\u6765\u5177\u4f53\u770b\u5982\u4f55\u4f7f\u7528 KubeVela \u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u6a21\u5757\u5316\u529f\u80fd\u5e76\u63d0\u4f9b\u80fd\u529b\u3002\n\u6211\u4eec\u5c06\u5b98\u65b9\u6587\u6863\u4e2d StatefulSet \u7684 YAML \u4f8b\u5b50\u4fdd\u5b58\u5728\u672c\u5730\uff0c\u5e76\u547d\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"my-stateful.yaml"),"\uff0c\n\u7136\u540e\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u751f\u6210\u4e00\u4e2a\u540d\u4e3a \u201cmy-stateful\u201d \u7684 Component \u6a21\u5757\u5b9a\u4e49\uff0c\u5e76\u8f93\u51fa\u5230 \u201cmy-stateful.cue\u201d \u6587\u4ef6\u4e2d\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},' vela def init my-stateful -t component --desc "My StatefulSet component." --template-yaml ./my-stateful.yaml -o my-stateful.cue\n')),(0,p.kt)("p",null,"\u67e5\u770b\u751f\u6210\u7684 \u201cmy-stateful.cue\u201d \u6587\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'$ cat my-stateful.cue\n"my-stateful": {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: "My StatefulSet component."\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        apiVersion: "v1"\n        kind:       "Service"\n            ... // \u7701\u7565\u4e00\u4e9b\u975e\u91cd\u8981\u4fe1\u606f\n    }\n    outputs: web: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n            ... // \u7701\u7565\u4e00\u4e9b\u975e\u91cd\u8981\u4fe1\u606f\n    }\n    parameter: {}\n}\n')),(0,p.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u5bf9\u8fd9\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u505a\u4e00\u4e9b\u5fae\u8c03\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"StatefulSet \u5b98\u7f51\u7684\u4f8b\u5b50\u662f\u7531 ",(0,p.kt)("inlineCode",{parentName:"li"},"StatefulSet"),"\u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"Service")," \u4e24\u4e2a\u5bf9\u8c61\u6784\u6210\u7684\u4e00\u4e2a\u590d\u5408\u7ec4\u4ef6\u3002\u800c\u6839\u636e KubeVela ",(0,p.kt)("a",{parentName:"li",href:"../components/custom-component#%E4%BA%A4%E4%BB%98%E4%B8%80%E4%B8%AA%E5%A4%8D%E5%90%88%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u89c4\u5219"),"\uff0c\u5728\u590d\u5408\u7ec4\u4ef6\u4e2d\uff0c\u6bd4\u5982 StatefulSet \u8fd9\u6837\u7684\u6838\u5fc3\u5de5\u4f5c\u8d1f\u8f7d\u9700\u8981\u7531 ",(0,p.kt)("inlineCode",{parentName:"li"},"template.output"),"\u5b57\u6bb5\u8868\u793a\uff0c\u5176\u4ed6\u8f85\u52a9\u5bf9\u8c61\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"template.outputs"),"\u8868\u793a\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u5185\u5bb9\u505a\u4e00\u4e9b\u8c03\u6574\uff0c\u5c06\u81ea\u52a8\u751f\u6210\u7684 output \u548c outputs \u4e2d\u7684\u5168\u90e8\u8c03\u6362\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u7136\u540e\u6211\u4eec\u5c06\u6838\u5fc3\u5de5\u4f5c\u8d1f\u8f7d\u7684 apiVersion \u548c kind \u6570\u636e\u586b\u5199\u5230\u6807\u6ce8\u4e3a ",(0,p.kt)("inlineCode",{parentName:"li"},"<change me>"),"\u7684\u90e8\u5206")),(0,p.kt)("p",null,"\u4fee\u6539\u540e\u53ef\u4ee5\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela def vet"),"\u505a\u4e00\u4e0b\u683c\u5f0f\u68c0\u67e5\u548c\u6821\u9a8c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela def vet my-stateful.cue\nValidation succeed.\n")),(0,p.kt)("p",null,"\u7ecf\u8fc7\u4e24\u6b65\u6539\u52a8\u540e\u7684\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'$ cat my-stateful.cue\n"my-stateful": {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n    }\n    description: "My StatefulSet component."\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n        metadata: name: "web"\n        spec: {\n            selector: matchLabels: app: "nginx"\n            replicas:    3\n            serviceName: "nginx"\n            template: {\n                metadata: labels: app: "nginx"\n                spec: {\n                    containers: [{\n                        name: "nginx"\n                        ports: [{\n                            name:          "web"\n                            containerPort: 80\n                        }]\n                        image: "k8s.gcr.io/nginx-slim:0.8"\n                        volumeMounts: [{\n                            name:      "www"\n                            mountPath: "/usr/share/nginx/html"\n                        }]\n                    }]\n                    terminationGracePeriodSeconds: 10\n                }\n            }\n            volumeClaimTemplates: [{\n                metadata: name: "www"\n                spec: {\n                    accessModes: ["ReadWriteOnce"]\n                    resources: requests: storage: "1Gi"\n                    storageClassName: "my-storage-class"\n                }\n            }]\n        }\n    }\n    outputs: web: {\n        apiVersion: "v1"\n        kind:       "Service"\n        metadata: {\n            name: "nginx"\n            labels: app: "nginx"\n        }\n        spec: {\n            clusterIP: "None"\n            ports: [{\n                name: "web"\n                port: 80\n            }]\n            selector: app: "nginx"\n        }\n    }\n    parameter: {}\n}\n')),(0,p.kt)("p",null,"\u5c06\u8be5\u7ec4\u4ef6\u5b9a\u4e49\u5b89\u88c5\u5230 Kubernetes \u96c6\u7fa4\u4e2d\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela def apply my-stateful.cue\nComponentDefinition my-stateful created in namespace vela-system.\n")),(0,p.kt)("p",null,"\u6b64\u65f6\u5e73\u53f0\u7684\u6700\u7ec8\u7528\u6237\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela components"),"\u547d\u4ee4\u770b\u5230\u6709\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"my-stateful"),"\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela components\nNAME        NAMESPACE   WORKLOAD                                DESCRIPTION\n...\nmy-stateful vela-system statefulsets.apps                       My StatefulSet component.\n... \n")),(0,p.kt)("p",null,"\u901a\u8fc7 KubeVela \u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u53d1\u5e03\u5230\u96c6\u7fa4\u4e2d\uff0c\u5c31\u53ef\u4ee5\u62c9\u8d77\u6211\u4eec\u521a\u521a\u5b9a\u4e49\u7684 StatefulSet \u548c Service \u5bf9\u8c61\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: my-component\n      type: my-stateful\nEOF\n")),(0,p.kt)("h2",{id:"\u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u5b9a\u5236\u5316\u53c2\u6570"},"\u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u5b9a\u5236\u5316\u53c2\u6570"),(0,p.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u7528\u6237\u53d8\u5316\u7684\u9700\u6c42\uff0c\u6211\u4eec\u9700\u8981\u5728\u6700\u540e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"parameter")," \u91cc\u66b4\u9732\u4e00\u4e9b\u53c2\u6570\uff0c\u5728 ",(0,p.kt)("a",{parentName:"p",href:"../cue/basic#%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA-cue-%E6%A8%A1%E6%9D%BF"},"CUE \u57fa\u7840\u5165\u95e8\u6587\u6863"),"\u4e2d\u4f60\u53ef\u4ee5\u4e86\u89e3\u5230\u53c2\u6570\u76f8\u5173\u7684\u8bed\u6cd5\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u4e3a\u7528\u6237\u66b4\u9732\u4e00\u4e0b\u53c2\u6570\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u955c\u50cf\u540d\u79f0\uff0c\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u955c\u50cf"),(0,p.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u540d\uff0c\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u751f\u6210\u7684 StatefulSet \u5bf9\u8c61\u548c Service \u5bf9\u8c61\u7684\u5b9e\u4f8b\u540d\u79f0"),(0,p.kt)("li",{parentName:"ul"},"\u526f\u672c\u6570\uff0c\u751f\u6210\u5bf9\u8c61\u7684\u526f\u672c\u6570")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'    ... # \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5 \n    template: {\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "StatefulSet"\n            metadata: name: parameter.name\n            spec: {\n                selector: matchLabels: app: "nginx"\n                replicas:    parameter.replicas\n                serviceName: "nginx"\n                template: {\n                    metadata: labels: app: "nginx"\n                    spec: {\n                        containers: [{\n                            image: parameter.image\n        \n                            ... // \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5  \n                        }]\n                    }\n                }\n                    ... // \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5\n            }\n        }\n        outputs: web: {\n            apiVersion: "v1"\n            kind:       "Service"\n            metadata: {\n                name: "nginx"\n                labels: app: "nginx"\n            }\n            spec: {\n                ... // \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5      \n            }\n        }\n        parameter: {\n            image: string\n            name: string\n            replicas: int\n        }\n    }\n')),(0,p.kt)("p",null,"\u4fee\u6539\u540e\u540c\u6837\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela def apply"),"\u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela def apply my-stateful.cue\nComponentDefinition my-stateful in namespace vela-system updated.\n")),(0,p.kt)("p",null,"\u8fd9\u4e2a\u4fee\u6539\u8fc7\u7a0b\u662f\u5b9e\u65f6\u751f\u6548\u7684\uff0c\u7528\u6237\u7acb\u5373\u53ef\u4ee5\u770b\u5230\u7cfb\u7edf\u4e2d\u7684 my-stateful \u7ec4\u4ef6\u589e\u52a0\u4e86\u65b0\u7684\u53c2\u6570\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela show my-stateful\n# Properties\n+----------+-------------+--------+----------+---------+\n|   NAME   | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+----------+-------------+--------+----------+---------+\n| name     |             | string | true     |         |\n| replicas |             | int    | true     |         |\n| image    |             | string | true     |         |\n+----------+-------------+--------+----------+---------+\n")),(0,p.kt)("p",null,"\u7ec4\u4ef6\u5b9a\u4e49\u7684\u4fee\u6539\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5df2\u7ecf\u5728\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u5f53\u4e0b\u6b21\u5e94\u7528\u4fee\u6539\u5e76\u91cd\u65b0\u90e8\u7f72\u65f6\uff0c\u65b0\u7684\u7ec4\u4ef6\u5b9a\u4e49\u5c31\u4f1a\u751f\u6548\u3002"),(0,p.kt)("p",null,"\u6700\u7ec8\u7528\u6237\u5c31\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u6307\u5b9a\u65b0\u589e\u7684\u8fd9\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"    apiVersion: core.oam.dev/v1beta1\n    kind: Application\n    metadata:\n      name: website\n    spec:\n      components:\n        - name: my-component\n          type: my-stateful\n          properties:\n            image: nginx:latest\n            replicas: 1\n            name: my-component\n")),(0,p.kt)("p",null,"\u5c06\u6587\u4ef6\u4fdd\u5b58\u5728\u672c\u5730\u5e76\u547d\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"app-stateful.yaml"),"\uff0c\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"kubectl apply -f app-stateful.yaml"),"\u66f4\u65b0\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u770b\u5230 StatefulSet \u5bf9\u8c61\u7684\u540d\u79f0\u3001\u955c\u50cf\u548c\u5b9e\u4f8b\u6570\u5747\u5df2\u66f4\u65b0\u3002"),(0,p.kt)("h2",{id:"\u8c03\u8bd5\u6a21\u5757\u5316\u529f\u80fd\u7684\u6b63\u786e\u6027"},"\u8c03\u8bd5\u6a21\u5757\u5316\u529f\u80fd\u7684\u6b63\u786e\u6027"),(0,p.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u7684\u5e94\u7528\u4f7f\u7528\u53c2\u6570\u80fd\u591f\u6b63\u786e\u8fd0\u884c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela dry-run")," \u547d\u4ee4\u5bf9\u4f60\u7684\u6a21\u677f\u8fdb\u884c\u8bd5\u8fd0\u884c\u9a8c\u8bc1\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"vela dry-run -f app-stateful.yaml\n")),(0,p.kt)("p",null,"\u67e5\u770b\u8f93\u51fa\uff0c\u4f60\u5c31\u53ef\u4ee5\u5bf9\u6bd4\u751f\u6210\u7684\u5bf9\u8c61\u548c\u4f60\u5b9e\u9645\u671f\u671b\u7684\u5bf9\u8c61\u662f\u5426\u4e00\u81f4\u3002\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u628a\u8fd9\u4e2a YAML \u6267\u884c\u5230 Kubernetes \u96c6\u7fa4\u4e2d\u4f7f\u7528\u770b\u8fd0\u884c\u7684\u7ed3\u679c\u505a\u9a8c\u8bc1\u3002"),(0,p.kt)("details",null,(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'# Application(website) -- Component(my-component)\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: nginx\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: my-component\n    app.oam.dev/name: website\n    workload.oam.dev/type: my-stateful\n  name: nginx\n  namespace: default\nspec:\n  clusterIP: None\n  ports:\n  - name: web\n    port: 80\n  selector:\n    app: nginx\n  template:\n    spec:\n      containers:\n      - image: saravak/fluentd:elastic\n        name: my-sidecar\n\n---\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: my-component\n    app.oam.dev/name: website\n    trait.oam.dev/resource: web\n    trait.oam.dev/type: AuxiliaryWorkload\n  name: web\n  namespace: default\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  serviceName: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - image: k8s.gcr.io/nginx-slim:0.8\n        name: nginx\n        ports:\n        - containerPort: 80\n          name: web\n        volumeMounts:\n        - mountPath: /usr/share/nginx/html\n          name: www\n      terminationGracePeriodSeconds: 10\n  volumeClaimTemplates:\n  - metadata:\n      name: www\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 1Gi\n      storageClassName: my-storage-class\n'))),(0,p.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela dry-run -h")," \u6765\u67e5\u770b\u66f4\u591a\u53ef\u7528\u7684\u529f\u80fd\u53c2\u6570\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528\u4e0a\u4e0b\u6587\u4fe1\u606f\u51cf\u5c11\u53c2\u6570"},"\u4f7f\u7528\u4e0a\u4e0b\u6587\u4fe1\u606f\u51cf\u5c11\u53c2\u6570"),(0,p.kt)("p",null,"\u5728\u6211\u4eec\u4e0a\u9762\u7684 Application \u4f8b\u5b50\u4e2d\uff0cproperties \u4e2d\u7684 name \u548c Component \u7684 name \u5b57\u6bb5\u662f\u76f8\u540c\u7684\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u5728\u6a21\u677f\u4e2d\u4f7f\u7528\u643a\u5e26\u4e86\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"context"),"\u5173\u952e\u5b57\uff0c\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"context.name")," \u5c31\u662f\u8fd0\u884c\u65f6\u7ec4\u4ef6\u540d\u79f0\uff0c\u6b64\u65f6 ",(0,p.kt)("inlineCode",{parentName:"p"},"parameter")," \u4e2d\u7684 name \u53c2\u6570\u5c31\u4e0d\u518d\u9700\u8981\u7684\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'... # \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5 \ntemplate: {\n    output: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n        metadata: name: context.name\n            ... // \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5\n    }\n    parameter: {\n        image: string\n        replicas: int\n    }\n}\n')),(0,p.kt)("p",null,"KubeVela \u5185\u7f6e\u4e86\u5e94\u7528",(0,p.kt)("a",{parentName:"p",href:"../oam/x-definition#%E6%A8%A1%E5%9D%97%E5%AE%9A%E4%B9%89%E8%BF%90%E8%A1%8C%E6%97%B6%E4%B8%8A%E4%B8%8B%E6%96%87"},"\u6240\u9700\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f"),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u914d\u7f6e."),(0,p.kt)("h2",{id:"\u4f7f\u7528\u8fd0\u7ef4\u80fd\u529b\u6309\u9700\u6dfb\u52a0\u914d\u7f6e"},"\u4f7f\u7528\u8fd0\u7ef4\u80fd\u529b\u6309\u9700\u6dfb\u52a0\u914d\u7f6e"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u7684\u65b0\u9700\u6c42\uff0c\u9664\u4e86\u4fee\u6539\u7ec4\u4ef6\u5b9a\u4e49\u589e\u52a0\u53c2\u6570\u4ee5\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u8fd0\u7ef4\u80fd\u529b\uff0c\u6309\u9700\u6dfb\u52a0\u914d\u7f6e\u3002\u4e00\u65b9\u9762\uff0cKubeVela \u5df2\u7ecf\u5185\u7f6e\u4e86\u5927\u91cf\u7684\u901a\u7528\u8fd0\u7ef4\u80fd\u529b\uff0c\u53ef\u4ee5\u6ee1\u8db3\u8bf8\u5982\uff1a\u6dfb\u52a0 label\u3001annotation\uff0c\u6ce8\u5165\u73af\u5883\u53d8\u91cf\u3001sidecar\uff0c\u6dfb\u52a0 volume \u7b49\u7b49\u7684\u9700\u6c42\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4f60\u53ef\u4ee5\u50cf\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e00\u6837\uff0c\u81ea\u5b9a\u4e49",(0,p.kt)("a",{parentName:"p",href:"../traits/patch-trait"},"\u8865\u4e01\u578b\u8fd0\u7ef4\u7279\u5f81"),"\uff0c\u6765\u6ee1\u8db3\u66f4\u591a\u7684\u914d\u7f6e\u7075\u6d3b\u7ec4\u88c5\u7684\u9700\u6c42\u3002"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela traits")," \u67e5\u770b\uff0c\u5e26 ",(0,p.kt)("inlineCode",{parentName:"p"},"*")," \u6807\u8bb0\u7684 trait \u5747\u4e3a\u901a\u7528 trait\uff0c\u80fd\u591f\u5bf9\u5e38\u89c1\u7684 Kubernetes \u8d44\u6e90\u5bf9\u8c61\u505a\u64cd\u4f5c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela traits\nNAME                        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION\nannotations                 vela-system *                                   true            Add annotations on K8s pod for your workload which follows\n                                                                                            the pod spec in path 'spec.template'.\nconfigmap                   vela-system *                                   true            Create/Attach configmaps on K8s pod for your workload which\n                                                                                            follows the pod spec in path 'spec.template'.\nenv                         vela-system *                                   false           add env on K8s pod for your workload which follows the pod\n                                                                                            spec in path 'spec.template.'\nhostalias                   vela-system *                                   false           Add host aliases on K8s pod for your workload which follows\n                                                                                            the pod spec in path 'spec.template'.\nlabels                      vela-system *                                   true            Add labels on K8s pod for your workload which follows the\n                                                                                            pod spec in path 'spec.template'.\nlifecycle                   vela-system *                                   true            Add lifecycle hooks for the first container of K8s pod for\n                                                                                            your workload which follows the pod spec in path\n                                                                                            'spec.template'.\nnode-affinity               vela-system *                                   true            affinity specify node affinity and toleration on K8s pod for\n                                                                                            your workload which follows the pod spec in path\n                                                                                            'spec.template'.\nscaler                      vela-system *                                   false           Manually scale K8s pod for your workload which follows the\n                                                                                            pod spec in path 'spec.template'.\nsidecar                     vela-system *                                   true            Inject a sidecar container to K8s pod for your workload\n                                                                                            which follows the pod spec in path 'spec.template'.\n")),(0,p.kt)("p",null,"\u4ee5 sidecar \u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b sidecar \u7684\u7528\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ vela show sidecar\n# Properties\n+---------+-----------------------------------------+-----------------------+----------+---------+\n|  NAME   |               DESCRIPTION               |         TYPE          | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n| name    | Specify the name of sidecar container   | string                | true     |         |\n| cmd     | Specify the commands run in the sidecar | []string              | false    |         |\n| image   | Specify the image of sidecar container  | string                | true     |         |\n| volumes | Specify the shared volume path          | [[]volumes](#volumes) | false    |         |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n\n\n## volumes\n+------+-------------+--------+----------+---------+\n| NAME | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+------+-------------+--------+----------+---------+\n| path |             | string | true     |         |\n| name |             | string | true     |         |\n+------+-------------+--------+----------+---------+\n")),(0,p.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 sidecar \u6ce8\u5165\u4e00\u4e2a\u5bb9\u5668\uff0c\u5e94\u7528\u7684\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: my-component\n      type: my-stateful\n      properties:\n        image: nginx:latest\n        replicas: 1\n        name: my-component\n      traits:\n      - type: sidecar\n        properties:\n          name: my-sidecar\n          image: saravak/fluentd:elastic\n")),(0,p.kt)("p",null,"\u90e8\u7f72\u8fd0\u884c\u8be5\u5e94\u7528\uff0c\u5c31\u53ef\u4ee5\u770b\u5230 StatefulSet \u4e2d\u5df2\u7ecf\u90e8\u7f72\u8fd0\u884c\u4e86\u4e00\u4e2a fluentd \u7684 sidecar\u3002"),(0,p.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela def")," \u83b7\u53d6 sidecar \u7684 CUE \u6e90\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u589e\u52a0\u53c2\u6570\u7b49\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"vela def get sidecar\n")),(0,p.kt)("p",null,"\u8fd0\u7ef4\u80fd\u529b\u7684\u81ea\u5b9a\u4e49\u4e0e\u7ec4\u4ef6\u81ea\u5b9a\u4e49\u7c7b\u4f3c\uff0c\u4e0d\u518d\u8d58\u8ff0\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb",(0,p.kt)("a",{parentName:"p",href:"../traits/customize-trait"},"\u8fd0\u7ef4\u80fd\u529b\u81ea\u5b9a\u4e49\u6587\u6863"),"\u4e86\u89e3\u66f4\u8be6\u7ec6\u7684\u529f\u80fd\u3002"),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 CUE \u4ea4\u4ed8\u5b8c\u6574\u7684\u6a21\u5757\u5316\u80fd\u529b\uff0c\u5176\u6838\u5fc3\u662f\u53ef\u4ee5\u968f\u7740\u7528\u6237\u7684\u9700\u6c42\uff0c\u4e0d\u65ad\u52a8\u6001\u589e\u52a0\u914d\u7f6e\u80fd\u529b\uff0c\u9010\u6b65\u66b4\u9732\u66f4\u591a\u7684\u529f\u80fd\u548c\u7528\u6cd5\uff0c\u4ee5\u4fbf\u964d\u4f4e\u7528\u6237\u6574\u4f53\u7684\u5b66\u4e60\u95e8\u69db\uff0c\u6700\u7ec8\u63d0\u5347\u7814\u53d1\u6548\u7387\u3002\nKubeVela \u80cc\u540e\u63d0\u4f9b\u7684\u5f00\u7bb1\u5373\u7528\u7684\u80fd\u529b\uff0c\u5305\u62ec\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u529f\u80fd\u3001\u7b56\u7565\u4ee5\u53ca\u5de5\u4f5c\u6d41\uff0c\u5747\u662f\u901a\u8fc7\u540c\u6837\u7684\u65b9\u5f0f\u63d0\u4f9b\u4e86\u53ef\u63d2\u62d4\u3001\u53ef\u4fee\u6539\u7684\u80fd\u529b\u3002"),(0,p.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u66f4\u591a",(0,p.kt)("a",{parentName:"li",href:"../components/custom-component"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),"\u7684\u529f\u80fd\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u66f4\u591a",(0,p.kt)("a",{parentName:"li",href:"../traits/customize-trait"},"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u80fd\u529b"),"\u7684\u529f\u80fd\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e86\u89e3",(0,p.kt)("a",{parentName:"li",href:"../workflow/workflow"},"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41"),"\u80cc\u540e\u7684\u529f\u80fd\u3002")))}m.isMDXComponent=!0}}]);