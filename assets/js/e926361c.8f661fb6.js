(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[93944],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85180:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o={title:"Rollout"},s={unversionedId:"end-user/traits/rollout",id:"version-v1.1/end-user/traits/rollout",isDocsHomePage:!1,title:"Rollout",description:"This chapter will introduce how to use Rollout Trait to perform a rolling update on Workload.",source:"@site/versioned_docs/version-v1.1/end-user/traits/rollout.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/rollout",permalink:"/docs/end-user/traits/rollout",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/rollout.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Rollout"},sidebar:"version-v1.1/docs",previous:{title:"Ingress",permalink:"/docs/end-user/traits/ingress"},next:{title:"AutoScaler",permalink:"/docs/end-user/traits/autoscaler"}},p=[{value:"How to",id:"how-to",children:[{value:"First Deployment",id:"first-deployment",children:[]},{value:"Rollout Update",id:"rollout-update",children:[]},{value:"Rollback",id:"rollback",children:[]},{value:"Scale up",id:"scale-up",children:[]},{value:"Scale down",id:"scale-down",children:[]},{value:"Rollout cloneset type Workload",id:"rollout-cloneset-type-workload",children:[]}]},{value:"Configurations",id:"configurations",children:[{value:"Supported workload type",id:"supported-workload-type",children:[]}]}],i={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter will introduce how to use Rollout Trait to perform a rolling update on Workload."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"first-deployment"},"First Deployment"),(0,a.kt)("p",null,"Apply the Application YAML below which includes a webservice-type workload with Rollout Trait, and ",(0,a.kt)("a",{parentName:"p",href:"../version-control"},"control version"),"\nof component name to be express-server-v1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v1\n      properties:\n        image: stefanprodan/podinfo:4.0.3\n      traits:\n        - type: rollout\n          properties:\n            targetSize: 5\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"This Rollout Trait has target size of 5 and two rollout batches. The first batch has 2 replicas and second batch has 3. Only after all replicas in the first batch are ready, it will start to rollout the second batch."),(0,a.kt)("p",null,"Check the Application status whether the rollout is successful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app rollout-trait-test\nNAME                 COMPONENT        TYPE         PHASE     HEALTHY   STATUS   AGE\nrollout-trait-test   express-server   webservice   running   true               2d20h\n")),(0,a.kt)("p",null,"Check component revision"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get controllerRevision  -l controller.oam.dev/component=express-server\nNAME                CONTROLLER                                    REVISION   AGE\nexpress-server-v1   application.core.oam.dev/rollout-trait-test   1          2d22h\n")),(0,a.kt)("p",null,"Check the status of Rollout Trait. The rollout is successful only if ",(0,a.kt)("inlineCode",{parentName:"p"},"ROLLING-STATE")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"rolloutSucceed"),", and all replicas are ready only if ",(0,a.kt)("inlineCode",{parentName:"p"},"BATCH-STATE")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"batchReady"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"TARGET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPGRADED")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"READY")," indicates target size of replicas is 5, updated number of replicas is 5 and all 5 replicas are ready."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get rollout express-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\nexpress-server   5        5          5       batchReady    rolloutSucceed   2d20h\n")),(0,a.kt)("p",null,"Check Workload Status (Underlying resource behind the workload is ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"deployment"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/component=express-server\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   5/5     5            5           2d20h\n")),(0,a.kt)("h3",{id:"rollout-update"},"Rollout Update"),(0,a.kt)("p",null,"Apply the YAML below to modify the image of the container. It will generate a new ControllerRevision."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v2\n      properties:\n        image: stefanprodan/podinfo:5.0.2\n      traits:\n        - type: rollout\n          properties:\n            targetSize: 5\n            batchPartition: 0\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"This Rollout Trait represents the target size of replicas is 5 and update will be performed in 2 batches. The first batch will update 2 replicas and the second batch will update 3 replicas. Only 2 replicas in first batch will be updated by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"batchPartition")," to 0."),(0,a.kt)("p",null,"Check controllerRevision and there is a new controllerRevision express-server-v2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get controllerRevision -l controller.oam.dev/component=express-server\nNAME                CONTROLLER                                    REVISION   AGE\nexpress-server-v1   application.core.oam.dev/rollout-trait-test   1          2d22h\nexpress-server-v2   application.core.oam.dev/rollout-trait-test   2          1m\n")),(0,a.kt)("p",null,"Check the status of Rollout Trait after a while when first batch has been upgraded successfully. ",(0,a.kt)("inlineCode",{parentName:"p"},"TARGET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPGREADED")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"READY")," indicates the target size of replicas for this revision is 5, there are 2 replicas sucessfully upgraded and they are ready. batchReady means replicas in the first rolloutBatch are all ready, rollingInBatches means there are batches still yet to be upgraded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get rollout express-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\nexpress-server   5        2          2       batchReady   rollingInBatches  2d20h\n")),(0,a.kt)("p",null,"Check Workload status to verify, we can see there are 2 replicas of new Workload express-server-v2 have been upgraded and old version of Workload express-server-v1 still has 3 replicas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/component=express-server\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   3/3     3            3           2d20h\nexpress-server-v2   2/2     2            2           1m\n")),(0,a.kt)("p",null,"Apply the YAML below without ",(0,a.kt)("inlineCode",{parentName:"p"},"batchPartition")," field in Rollout Trait to upgrade all replicas to latest revision."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v2\n      properties:\n        image: stefanprodan/podinfo:5.0.2\n      traits:\n        - type: rollout\n          properties:\n            targetSize: 5\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"Check Rollout Trait, we can see rollout is succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get rollout express-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\nexpress-server   5        5           5       batchReady   rolloutSucceed  2d20h\n")),(0,a.kt)("p",null,"Check Workload status, all replicas of Workload has been upgraded to a new revision and old workload has been deleted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/component=express-server\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v2   5/5     5            5           1m\n")),(0,a.kt)("h3",{id:"rollback"},"Rollback"),(0,a.kt)("p",null,"Apply the YAML below to make controllerRevision roll back to express-server-v1 by assigning ",(0,a.kt)("inlineCode",{parentName:"p"},"targetRevision")," field to express-server-v1 in Rollout Trait."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v2\n      properties:\n        image: stefanprodan/podinfo:5.0.2\n      traits:\n        - type: rollout\n          properties:\n            targetRevision: express-server-v1\n            targetSize: 5\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"Check Rollout Trait status after rollback has been succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get rollout express-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\nexpress-server   5        5          5       batchReady    rolloutSucceed  2d20h\n")),(0,a.kt)("p",null,"Check Workload status, we can see Workload has rolled back to express-server-v1. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/component=express-server\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   5/5     5            5           15s\n")),(0,a.kt)("h3",{id:"scale-up"},"Scale up"),(0,a.kt)("p",null,"Rollout Trait also be able to scale up a Workload, apply the YAML below to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"targetSize"),", in order to increase the number of replicas from 5 to 7."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v2\n      properties:\n        image: stefanprodan/podinfo:5.0.2\n      traits:\n        - type: rollout\n          properties:\n            targetRevision: express-server-v1\n            targetSize: 7\n            rolloutBatches:\n              - replicas: 1\n              - replicas: 1\nEOF\n")),(0,a.kt)("p",null,"This Rollout Trait represents this expansion consists of 2 rollout batches, each batch will scale 1 replica."),(0,a.kt)("p",null,"Check the status after expansion has been succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get rollout express-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\nexpress-server   7        7          7       batchReady    rolloutSucceed   2d20h\n\n$ kubectl get deploy -l app.oam.dev/component=express-server\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   7/7     7            7           2m\n")),(0,a.kt)("h3",{id:"scale-down"},"Scale down"),(0,a.kt)("p",null,"Apply the YAML below to scale down the size of replicas from 7 to 3."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v2\n      properties:\n        image: stefanprodan/podinfo:5.0.2\n      traits:\n        - type: rollout\n          properties:\n            targetRevision: express-server-v1\n            targetSize: 3\n            rolloutBatches:\n              - replicas: 1\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"This Rollout Trait represents this scale down consists of 2 batches, first batch will remove 1 replica and second batch will remove 3 replicas."),(0,a.kt)("p",null,"Check the status after scale up has been succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get rollout express-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\nexpress-server   3        3          3       batchReady    rolloutSucceed   2d20h\n\n$ kubectl get deploy -l app.oam.dev/component=express-server\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   3/3     3            3           5m\n")),(0,a.kt)("h3",{id:"rollout-cloneset-type-workload"},"Rollout cloneset type Workload"),(0,a.kt)("p",null,"You need to enable kruise addon\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela addon enable kruise\n")),(0,a.kt)("p",null,"Check types of components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela components\nNAME                NAMESPACE        WORKLOAD                        DESCRIPTION\ncloneset           vela-system     clonesets.apps.kruise.io\n")),(0,a.kt)("p",null,"Apply the YAML below to create an Application, this Application includes a Workload of type cloneset with a Rollout Trait."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test-cloneset\nspec:\n  components:\n    - name: cloneset-server\n      type: cloneset\n      externalRevision: cloneset-server-v1\n      properties:\n        image: stefanprodan/podinfo:4.0.3\n      traits:\n        - type: rollout\n          properties:\n            targetSize: 5\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"Check the status of related resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app rollout-trait-test-cloneset\nNAME                              COMPONENT         TYPE               PHASE      HEALTHY   STATUS     AGE\nrollout-trait-test-cloneset        cloneset   clonesetservice          running      true               4m18s\n\n$ kubectl get controllerRevision  -l controller.oam.dev/component=cloneset-server\nNAME                CONTROLLER                                           REVISION   AGE\ncloneset-server-v1   application.core.oam.dev/rollout-trait-test-cloneset   1          4m45s\n\n$ kubectl get rollout cloneset-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\ncloneset-server   5        5          5       batchReady    rolloutSucceed   5m10s\n")),(0,a.kt)("p",null,"Check the status of Workload. As cloneset Workload supports in-place upgrade, the most noticeable difference between it and webservice/worker is that the name of underlying Workload's name is exactly the component's name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get cloneset -l app.oam.dev/component=cloneset-server\nNAME             DESIRED   UPDATED   UPDATED_READY   READY   TOTAL   AGE\ncloneset-server   5         5         5               5       5       7m3s\n")),(0,a.kt)("p",null,"Check the image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get cloneset cloneset-server -o=jsonpath='{.spec.template.spec.containers[0].image}'\nstefanprodan/podinfo:4.0.3\n")),(0,a.kt)("p",null,"Apply the YAML below to upgrade the image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test-cloneset\nspec:\n  components:\n    - name: cloneset-server\n      type: cloneset\n      externalRevision: cloneset-server-v2\n      properties:\n        image: stefanprodan/podinfo:5.0.2\n      traits:\n        - type: rollout\n          properties:\n            targetSize: 5\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\nEOF\n")),(0,a.kt)("p",null,"Check the status of related resources after upgrade has been succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get controllerRevision  -l controller.oam.dev/component=cloneset-server\nNAME                CONTROLLER                                             REVISION    AGE\ncloneset-server-v1   application.core.oam.dev/rollout-trait-test-cloneset    1          6m43s\ncloneset-server-v2   application.core.oam.dev/rollout-trait-test-clonesett   2          108s\n\n$ kubectl get rollout cloneset-server\nNAME             TARGET   UPGRADED   READY   BATCH-STATE   ROLLING-STATE    AGE\ncloneset-server  5        5          5       batchReady    rolloutSucceed   6m10s\n")),(0,a.kt)("p",null,"Check the status of the Workload, we can see the name after upgrade is still cloneset-server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get cloneset -l app.oam.dev/component=cloneset-server\nNAME             DESIRED   UPDATED   UPDATED_READY   READY   TOTAL   AGE\ncloneset-server   5         5         5               5       5       7m3s\n")),(0,a.kt)("p",null,"Verify the rollout by checking the image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get cloneset cloneset-server -o=jsonpath='{.spec.template.spec.containers[0].image}'\nstefanprodan/podinfo:5.0.2\n")),(0,a.kt)("p",null,"Other operations such as Scale up, Scale down, Rollback are the same as the operations on webservice/worker."),(0,a.kt)("h2",{id:"configurations"},"Configurations"),(0,a.kt)("p",null,"All configurations for Rolling Traits."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"targetRevision"),(0,a.kt)("td",{parentName:"tr",align:null},"The target ComponentRevision"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"If this field is empty, it will always point to the latest revision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"targetSize"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of target Workload's replicas"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Nil")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rolloutBatches"),(0,a.kt)("td",{parentName:"tr",align:null},"Strategy of rolling update"),(0,a.kt)("td",{parentName:"tr",align:null},"[]rolloutBatch"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Nil")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"batchPartition"),(0,a.kt)("td",{parentName:"tr",align:null},"Partition of rolloutBatches"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Nil, if this field is empty, all batches will be updated")))),(0,a.kt)("p",null,"Configurations of rolloutBatch"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"replicas"),(0,a.kt)("td",{parentName:"tr",align:null},"number of replicas in one batch"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Nil")))),(0,a.kt)("h3",{id:"supported-workload-type"},"Supported workload type"),(0,a.kt)("p",null,"Rollout Trait supports following workload types: webservice,worker and cloneset."),(0,a.kt)("p",null,"When using webservice/worker as Workload type with Rollout Trait, Workload's name will be controllerRevision's name. And when Workload's type is cloneset, because of clonset support in-place update Workload's name will always be component's name."))}c.isMDXComponent=!0}}]);