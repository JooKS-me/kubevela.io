(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[46532],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58240:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var i=n(22122),r=n(19756),o=(n(67294),n(3905)),a={title:"vela def init"},l={unversionedId:"cli/vela_def_init",id:"version-v1.1/cli/vela_def_init",isDocsHomePage:!1,title:"vela def init",description:"Init a new definition",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/cli/vela_def_init.md",sourceDirName:"cli",slug:"/cli/vela_def_init",permalink:"/zh/docs/cli/vela_def_init",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_def_init.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"vela def init"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Init a new definition"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Init a new definition with given arguments or interactively"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We support parsing a single YAML file (like kubernetes objects) into the cue-style template. However, we do not support variables in YAML file currently, which prevents users from directly feeding files like helm chart directly. We may introduce such features in the future.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela def init DEF_NAME [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Command below initiate an empty TraitDefinition named my-ingress\n> vela def init my-ingress -t trait --desc "My ingress trait definition." > ./my-ingress.cue\n# Command below initiate a definition named my-def interactively and save it to ./my-def.cue\n> vela def init my-def -i --output ./my-def.cue\n# Command below initiate a ComponentDefinition named my-webservice with the template parsed from ./template.yaml.\n> vela def init my-webservice -i --template-yaml ./template.yaml\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -d, --desc string            Specify the description of the new definition.\n  -h, --help                   help for init\n  -i, --interactive            Specify whether use interactive process to help generate definitions.\n  -o, --output string          Specify the output path of the generated definition. If empty, the definition will be printed in the console.\n  -y, --template-yaml string   Specify the template yaml file that definition will use to build the schema. If empty, a default template for the given definition type will be used.\n  -t, --type string            Specify the type of the new definition. Valid types: workload, scope, workflow-step, component, trait, policy\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage Definitions")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-19-aug-2021"},"Auto generated by spf13/cobra on 19-Aug-2021"))}s.isMDXComponent=!0}}]);