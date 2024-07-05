/*! For license information please see 62fd1945.03597ee4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[178628],{451408:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=t(785893),n=t(511151);const r={title:"Releasing Backstage Search 1.0",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},c=void 0,i={permalink:"/blog/2022/07/19/releasing-backstage-search-1.0",source:"@site/blog/2022-07-19-releasing-backstage-search-1.0.mdx",title:"Releasing Backstage Search 1.0",description:"TL;DR If you\u2019ve been waiting for Backstage Search to come out of beta, we\u2019re excited to announce that Backstage Search 1.0 is here!",date:"2022-07-19T00:00:00.000Z",tags:[],readingTime:3,hasTruncateMarker:!0,authors:[{name:"Emma Indal, Spotify",url:"https://www.linkedin.com/in/emma-indal"}],frontMatter:{title:"Releasing Backstage Search 1.0",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},unlisted:!1,prevItem:{title:"Backstage Security Audit & Updates",permalink:"/blog/2022/08/23/backstage-security-audit"},nextItem:{title:"Introducing the TechDocs Addon Framework",permalink:"/blog/2022/05/13/techdocs-addon-framework"}},o={authorsImageUrls:[void 0]},h=[{value:"So what is Backstage Search 1.0?",id:"so-what-is-backstage-search-10",level:2},{value:"Elasticsearch as the recommended engine for production usage",id:"elasticsearch-as-the-recommended-engine-for-production-usage",level:2},{value:"How to contribute",id:"how-to-contribute",level:2},{value:"How to get started",id:"how-to-get-started",level:2}];function l(e){const a={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"TL;DR"})," If you\u2019ve been waiting for Backstage Search to come out of beta, we\u2019re excited to announce that ",(0,s.jsx)(a.a,{href:"https://backstage.io/docs/features/search/#backstage-search-10",children:"Backstage Search 1.0"})," is here!"]}),"\n",(0,s.jsx)(a.p,{children:"We first released the Backstage Search Platform over a year ago. Backstage Search Platform is a search experience built for you, by you."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Releasing Backstage Search 1.0",src:t(31792).Z+"",width:"1201",height:"631"})}),"\n",(0,s.jsx)(a.p,{children:"Backstage Search Platform makes it possible for you to search across your entire software ecosystem. With a Search platform that is customizable and extendable, you can identify your needs within your organization and set up search to solve these problems. Whether it is to search through the Software Catalog or technical documentation generated by the TechDocs plugin."}),"\n","\n",(0,s.jsx)(a.h2,{id:"so-what-is-backstage-search-10",children:"So what is Backstage Search 1.0?"}),"\n",(0,s.jsx)(a.p,{children:"Since the first release of the Backstage Search Platform, we have seen a fantastic community grow around the search plugins. To mention just a few of these contributions:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["More search engine modules: ",(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-backend-module-elasticsearch",children:"Elasticsearch"})," originally ",(0,s.jsx)(a.a,{href:"https://github.com/backstage/backstage/pull/6569",children:"contributed"})," by Roadie and ",(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-backend-module-pg",children:"Postgres"})," originally ",(0,s.jsx)(a.a,{href:"https://github.com/backstage/backstage/pull/6682",children:"contributed"})," by SDA SE"]}),"\n",(0,s.jsxs)(a.li,{children:["More components: Quick search modal, originally ",(0,s.jsx)(a.a,{href:"https://github.com/backstage/backstage/pull/7316",children:"contributed"})," by Expedia Group"]}),"\n",(0,s.jsxs)(a.li,{children:["More plugin integrations: TechDocs also ",(0,s.jsx)(a.a,{href:"https://github.com/backstage/backstage/pull/6375",children:"contributed"})," by Roadie and ",(0,s.jsx)(a.a,{href:"https://github.com/backstage/backstage/pull/4515",children:"Software Catalog"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"These are just a few contributions of the countless enhancements and improvements made by contributors across the globe. With a well adopted and tested search platform we feel confident to release Backstage Search as 1.0."}),"\n",(0,s.jsx)(a.p,{children:"Packages included in Backstage Search 1.0 release are:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Core search packages"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search",children:"@backstage/plugin-search"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-react",children:"@backstage/plugin-search-react"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-common",children:"@backstage/plugin-search-common"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-backend",children:"@backstage/plugin-search-backend"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-backend-node",children:"@backstage/plugin-search-backend-node"})}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Modules"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-backend-module-elasticsearch",children:"@backstage/plugin-search-backend-module-elasticsearch"})}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"No additional features are released as part of the major release as the maintainers of the search packages focused on the following for this release:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Bug fixes and clean up of deprecations."}),"\n",(0,s.jsx)(a.li,{children:"Improved error handling for missing indices."}),"\n",(0,s.jsx)(a.li,{children:"Separation of AWS Elastic and Open Elastic support."}),"\n",(0,s.jsxs)(a.li,{children:["Refactor the packages by moving reusable components from ",(0,s.jsx)(a.code,{children:"@backstage/plugin-search"})," to ",(0,s.jsx)(a.code,{children:"@backstage/plugin-search-react"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Improved documentation including tutorials for how to ",(0,s.jsx)(a.a,{href:"https://backstage.io/docs/plugins/integrating-search-into-plugins",children:"Integrate Search into a plugin"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["You might have noticed that the ",(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-backend-module-pg",children:"@backstage/plugin-search-backend-module-pg"})," package is not part of 1.0. That\u2019s because that package is a community supported module, and therefore we have not included it as part of 1.0. If you are interested in pushing the Postgres engine to 1.0, feel free to reach out to us in the ",(0,s.jsx)(a.a,{href:"https://discord.com/channels/687207715902193673/770283289327566848",children:"#search"})," channel on Discord."]}),"\n",(0,s.jsx)(a.h2,{id:"elasticsearch-as-the-recommended-engine-for-production-usage",children:"Elasticsearch as the recommended engine for production usage"}),"\n",(0,s.jsx)(a.p,{children:"When the Backstage Search Platform was first released, it came with an in-memory search engine as default - Lunr. While this is a good engine to use on a smaller scale and for local development (to avoid having to set up a search engine instance separately), it also has its limitations such as:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Lunr does not scale well. Horizontally scaled deployments of Backstage and/or Backstage Search backend using Lunr result in either duplicated indexing processes and indices or inconsistent index state across nodes."}),"\n",(0,s.jsxs)(a.li,{children:["Lunr\u2019s filter functionality is limited, especially for ",(0,s.jsx)(a.a,{href:"https://github.com/olivernn/lunr.js/issues/353",children:"logical AND/OR operators"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Lunr has a smaller community than Elasticsearch, which could mean that adopters relying on it will have less by way of resources for iterating on and improving search."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Therefore, we recommend using Elasticsearch for production usage. Moving forward, the search maintainers will prioritize the Elasticsearch engine while we\u2019ll rely on the community to maintain the Postgres engine."}),"\n",(0,s.jsx)(a.h2,{id:"how-to-contribute",children:"How to contribute"}),"\n",(0,s.jsxs)(a.p,{children:["If you want to contribute and to further improve search, you can check out the ",(0,s.jsx)(a.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+search+label%3Asearch+is%3Aopen",children:"open issues labeled with search"})," or reach out to us at the ",(0,s.jsx)(a.a,{href:"https://discord.com/channels/687207715902193673/770283289327566848",children:"#search"})," Discord channel."]}),"\n",(0,s.jsx)(a.h2,{id:"how-to-get-started",children:"How to get started"}),"\n",(0,s.jsxs)(a.p,{children:["If you haven\u2019t adopted the Backstage Search Platform yet and feel like now is a good time. Head over to the ",(0,s.jsx)(a.a,{href:"https://backstage.io/docs/features/search/getting-started",children:"getting started docs"}),"."]})]})}function d(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,a,t)=>{var s=t(667294),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,a,t){var s,r={},h=null,l=null;for(s in void 0!==t&&(h=""+t),void 0!==a.key&&(h=""+a.key),void 0!==a.ref&&(l=a.ref),a)c.call(a,s)&&!o.hasOwnProperty(s)&&(r[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===r[s]&&(r[s]=a[s]);return{$$typeof:n,type:e,key:h,ref:l,props:r,_owner:i.current}}a.Fragment=r,a.jsx=h,a.jsxs=h},785893:(e,a,t)=>{e.exports=t(675251)},31792:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/releasing-backstage-search-v1-9712f17175a99b07d3c0fb933cc3f3a4.png"},511151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>c});var s=t(667294);const n={},r=s.createContext(n);function c(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);