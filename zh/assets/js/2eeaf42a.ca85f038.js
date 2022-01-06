(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[43896],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95963:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l={title:"Rollout Plan"},i={unversionedId:"end-user/scopes/rollout-plan",id:"version-v1.0/end-user/scopes/rollout-plan",isDocsHomePage:!1,title:"Rollout Plan",description:"In this documentation, we will show how to use the rollout plan to rolling update an application.",source:"@site/versioned_docs/version-v1.0/end-user/scopes/rollout-plan.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/rollout-plan",permalink:"/zh/docs/v1.0/end-user/scopes/rollout-plan",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/scopes/rollout-plan.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625208237,formattedLastUpdatedAt:"2021/7/2",frontMatter:{title:"Rollout Plan"},sidebar:"version-v1.0/docs",previous:{title:"Want More?",permalink:"/zh/docs/v1.0/end-user/traits/more"},next:{title:"Define Application Health Probe",permalink:"/zh/docs/v1.0/end-user/scopes/health"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this documentation, we will show how to use the rollout plan to rolling update an application."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"By default, when we update the properties of application, KubeVela will update the underlying instances directly. The availability of the application will be guaranteed by rollout traits (if any)."),(0,a.kt)("p",null,"Though KubeVela also provides a rolling style update mechanism, you can specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.rolloutPlan")," in application to do so."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy application to the cluster"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\nname: test-rolling\nspec:\ncomponents:\n  - name: metrics-provider\n    type: worker\n    properties:\n      cmd:\n        - ./podinfo\n        - stress-cpu=1.0\n      image: stefanprodan/podinfo:4.0.6\n      port: 8080\nrolloutPlan:\n  rolloutStrategy: "IncreaseFirst"\n  rolloutBatches:\n    - replicas: 50%\n    - replicas: 50%\n  targetSize: 6\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"User can  modify the application container command and apply"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\nname: test-rolling\nspec:\ncomponents:\n  - name: metrics-provider\n    type: worker\n    properties:\n      cmd:\n        - ./podinfo\n        - stress-cpu=2.0\n      image: stefanprodan/podinfo:4.0.6\n      port: 8080\nrolloutPlan:\n  rolloutStrategy: "IncreaseFirst"\n  rolloutBatches:\n    - replicas: 50%\n    - replicas: 50%\n  targetSize: 6\n')))),(0,a.kt)("p",null,"User can check the status of the application and see the rollout completes, and the\napplication's ",(0,a.kt)("inlineCode",{parentName:"p"},"status.rollout.rollingState")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"rolloutSucceed"),"."))}s.isMDXComponent=!0}}]);