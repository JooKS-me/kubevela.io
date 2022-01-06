(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9211],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||r;return t?a.createElement(f,o(o({ref:n},m),{},{components:t})):a.createElement(f,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94316:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(22122),i=t(19756),r=(t(67294),t(3905)),o={title:"How-to"},l={unversionedId:"platform-engineers/kube/component",id:"version-v1.0/platform-engineers/kube/component",isDocsHomePage:!1,title:"How-to",description:"In this section, it will introduce how to use raw K8s Object to declare app components via ComponentDefinition.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/kube/component.md",sourceDirName:"platform-engineers/kube",slug:"/platform-engineers/kube/component",permalink:"/zh/docs/v1.0/platform-engineers/kube/component",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/kube/component.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"How-to"},sidebar:"version-v1.0/docs",previous:{title:"Known Limitations",permalink:"/zh/docs/v1.0/platform-engineers/helm/known-issues"},next:{title:"\u6dfb\u52a0 Traits",permalink:"/zh/docs/v1.0/platform-engineers/kube/trait"}},p=[{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, it will introduce how to use raw K8s Object to declare app components via ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned ",(0,r.kt)("a",{parentName:"p",href:"../definition-and-templates"},"the definition and template concepts"),".")),(0,r.kt)("h2",{id:"declare-componentdefinition"},"Declare ",(0,r.kt)("inlineCode",{parentName:"h2"},"ComponentDefinition")),(0,r.kt)("p",null,"Here is a raw template based ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," example which provides a abstraction for worker workload type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: kube-worker\n  namespace: default\nspec:\n  workload: \n    definition: \n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    kube: \n      template:\n        apiVersion: apps/v1\n        kind: Deployment\n        spec:\n          selector:\n            matchLabels:\n              app: nginx\n          template:\n            metadata:\n              labels:\n                app: nginx\n            spec:\n              containers:\n              - name: nginx\n                ports:\n                - containerPort: 80 \n      parameters: \n      - name: image\n        required: true\n        type: string\n        fieldPaths: \n        - "spec.template.spec.containers[0].image"\n')),(0,r.kt)("p",null,"In detail, the ",(0,r.kt)("inlineCode",{parentName:"p"},".spec.schematic.kube")," contains template of a workload resource and\nconfigurable parameters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".spec.schematic.kube.template")," is the raw template in YAML format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".spec.schematic.kube.parameters")," contains a set of configurable parameters. The ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"type"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"fieldPaths")," are required fields, ",(0,r.kt)("inlineCode",{parentName:"li"},"description")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," are optional fields.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," must be unique in a ",(0,r.kt)("inlineCode",{parentName:"li"},"ComponentDefinition"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," indicates the data type of value set to the field. This is a required field which will help KubeVela to generate a OpenAPI JSON schema for the parameters automatically. In raw template, only basic data types are allowed, including ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", while ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," are not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldPaths")," in the parameter specifies an array of fields within the template that will be overwritten by the value of this parameter. Fields are specified as JSON field paths without a leading dot, for example\n",(0,r.kt)("inlineCode",{parentName:"li"},"spec.replicas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.containers[0].image"),".")))),(0,r.kt)("h2",{id:"declare-an-application"},"Declare an ",(0,r.kt)("inlineCode",{parentName:"h2"},"Application")),(0,r.kt)("p",null,"Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n")),(0,r.kt)("p",null,"Since parameters only support basic data type, values in ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," should be simple key-value, ",(0,r.kt)("inlineCode",{parentName:"p"},"<parameterName>: <parameterValue>"),"."),(0,r.kt)("p",null,"Deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," and verify the running workload instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\nNAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nmycomp                   1/1     1            1           66m\n")),(0,r.kt)("p",null,"And check the parameter works."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n\"nginx:1.14.0\"\n")))}m.isMDXComponent=!0}}]);