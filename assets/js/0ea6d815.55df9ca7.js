(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[29593],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80476:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i={title:"Terraform Components"},c={unversionedId:"platform-engineers/components/component-terraform",id:"platform-engineers/components/component-terraform",isDocsHomePage:!1,title:"Terraform Components",description:"To enable end users to provision and consume cloud resources,",source:"@site/docs/platform-engineers/components/component-terraform.md",sourceDirName:"platform-engineers/components",slug:"/platform-engineers/components/component-terraform",permalink:"/docs/next/platform-engineers/components/component-terraform",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/components/component-terraform.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1641904389,formattedLastUpdatedAt:"1/11/2022",frontMatter:{title:"Terraform Components"},sidebar:"docs",previous:{title:"CUE Components",permalink:"/docs/next/platform-engineers/components/custom-component"},next:{title:"How-to",permalink:"/docs/next/platform-engineers/traits/customize-trait"}},l=[{value:"Develop a Terraform resource or module",id:"develop-a-terraform-resource-or-module",children:[]},{value:"Generate ComponentDefinition",id:"generate-componentdefinition",children:[]},{value:"Verify",id:"verify",children:[]},{value:"Generate documentation",id:"generate-documentation",children:[]}],s={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To enable end users to ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provider-and-consume-cloud-services"},"provision and consume cloud resources"),",\nplatform engineers need to prepare ComponentDefinitions for cloud resources if end users' requirements are beyond the\n",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provider-and-consume-cloud-services#supported-cloud-resource-list"},"built-in capabilities"),"."),(0,a.kt)("p",null,"Here is the guide to create Terraform typed ComponentDefinitions of cloud resources for cloud providers Alibaba Cloud, AWS and Azure."),(0,a.kt)("h1",{id:"alibaba-cloud"},"Alibaba Cloud"),(0,a.kt)("p",null,"Take ",(0,a.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/36016.htm"},"Elastic IP")," as an example."),(0,a.kt)("h2",{id:"develop-a-terraform-resource-or-module"},"Develop a Terraform resource or module"),(0,a.kt)("p",null,"Create a Terraform resource or module for Alibaba Cloud EIP resource and store it in a GitHub repo like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-alibaba-eip.git"},"https://github.com/oam-dev/terraform-alibaba-eip.git"),"."),(0,a.kt)("h2",{id:"generate-componentdefinition"},"Generate ComponentDefinition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ vela def init eip --type component --provider alibaba --desc "Terraform configuration for Alibaba Cloud Elastic IP" --git https://github.com/oam-dev/terraform-alibaba-eip.git\napiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud Elastic\n      IP\n  creationTimestamp: null\n  labels:\n    type: terraform\n  name: alibaba-eip\n  namespace: vela-system\nspec:\n  schematic:\n    terraform:\n      configuration: https://github.com/oam-dev/terraform-alibaba-eip.git\n      type: remote\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\nstatus: {}\n')),(0,a.kt)("p",null,"The ComponentDefinition for Alibaba Cloud EIP is generated. You are warmly welcome to contribute this extended cloud\nresource ComponentDefinition to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons/terraform-alibaba/definitions"},"oam-dev/catalog"),"."),(0,a.kt)("h2",{id:"verify"},"Verify"),(0,a.kt)("p",null,"You can quickly verify the ComponentDefinition by command ",(0,a.kt)("inlineCode",{parentName:"p"},"vela show"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela show alibaba-eip\n# Properties\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n|            NAME            |                                       DESCRIPTION                                        |                           TYPE                            | REQUIRED | DEFAULT |\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n| name                       | Name to be used on all resources as prefix. Default to 'TF-Module-EIP'.                  | string                                                    | true     |         |\n| bandwidth                  | Maximum bandwidth to the elastic public network, measured in Mbps (Mega bit per second). | number                                                    | true     |         |\n| writeConnectionSecretToRef | The secret which the cloud resource connection will be written to                        | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false    |         |\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n\n\n## writeConnectionSecretToRef\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                                 DESCRIPTION                                 |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n| name      | The secret name which the cloud resource connection will be written to      | string | true     |         |\n| namespace | The secret namespace which the cloud resource connection will be written to | string | false    |         |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n")),(0,a.kt)("p",null,"If the tables display, the ComponentDefinition should work. To take a step further, you can verify it by provision an actual EIP instance per\nthe doc ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provider-and-consume-cloud-services#provision-cloud-resources"},"Provision cloud resources"),"."),(0,a.kt)("h2",{id:"generate-documentation"},"Generate documentation"),(0,a.kt)("p",null,"You are encouraged to generate the documentation for your ComponentDefinition and submit it to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io"},"KubeVela official site"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def doc-gen alibaba-eip -n vela-system\nGenerated docs for alibaba-eip in ./kubevela.io/docs/end-user/components/cloud-services/terraform/alibaba-eip.md\n")),(0,a.kt)("p",null,"Move the file generated to oam-dev/catalog repo. Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io#contributing-to-kubevela-en-docs"},"contribution guide")," to submit the doc. "),(0,a.kt)("h1",{id:"aws-azure-and-other-cloud-providers"},"AWS, Azure and other cloud providers"),(0,a.kt)("p",null,"This only difference from Alibaba Cloud lies in the section of ",(0,a.kt)("a",{parentName:"p",href:"#generate-componentdefinition"},"Generate ComponentDefinition"),".\nPlease set ",(0,a.kt)("inlineCode",{parentName:"p"},"--provider")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"azure")," to generate the ComponentDefinition for an AWS or Azure cloud resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def init -h\n\nUsage:\n  vela def init DEF_NAME [flags]\n\nExamples:\n# Command below initiate a typed ComponentDefinition named vswitch from Alibaba Cloud.\n> vela def init vswitch --type component --provider alibaba --desc xxx --git https://github.com/kubevela-contrib/terraform-modules.git --path alibaba/vswitch\n\nFlags:\n  -d, --desc string            Specify the description of the new definition.\n      --git string             Specify which git repository the configuration(HCL) is stored in. Valid when --provider/-p is set.\n  -h, --help                   help for init\n      --path string            Specify which path the configuration(HCL) is stored in the Git repository. Valid when --git is set.\n  -p, --provider alibaba       Specify which provider the cloud resource definition belongs to. Only `alibaba`, `aws`, `azure` are supported.\n")))}p.isMDXComponent=!0}}]);