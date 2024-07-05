/*! For license information please see 2da349ca.94c4b8c7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[118035],{681932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(785893),o=n(511151);const i={title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",author:"Janisa Anandamohan, Spotify",authorURL:"https://twitter.com/janisa_a"},a=void 0,r={permalink:"/blog/2020/10/22/cost-insights-plugin",source:"@site/blog/2020-10-22-cost-insights-plugin.mdx",title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",description:"How did Spotify save millions on cloud costs within a matter of months?? We made cost optimization just another part of the daily development process. Our newly open sourced Cost Insights plugin makes a team\u2019s cloud costs visible \u2014 and actionable \u2014 right inside Backstage. So engineers can see the impact of their cloud usage (down to a product and resource level) and make optimizations wherever and whenever it makes sense. By managing cloud costs from the ground up, you can make smarter decisions that let you continue to build and scale quickly, without wasting resources.",date:"2020-10-22T00:00:00.000Z",tags:[],readingTime:5.54,hasTruncateMarker:!0,authors:[{name:"Janisa Anandamohan, Spotify",url:"https://twitter.com/janisa_a"}],frontMatter:{title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",author:"Janisa Anandamohan, Spotify",authorURL:"https://twitter.com/janisa_a"},unlisted:!1,prevItem:{title:"Announcing the Backstage Stability Index",permalink:"/blog/2020/12/22/stability-index"},nextItem:{title:"How to design for Backstage (even if you\u2019re not a designer)",permalink:"/blog/2020/09/30/backstage-design-system"}},l={authorsImageUrls:[void 0]},c=[{value:"Why put a cost management tool in the hands of engineers?",id:"why-put-a-cost-management-tool-in-the-hands-of-engineers",level:2},{value:"Ground-level intelligence, data-driven solutions",id:"ground-level-intelligence-data-driven-solutions",level:2},{value:"How to turn dollars into sense",id:"how-to-turn-dollars-into-sense",level:2},{value:"Use business metrics to evaluate costs",id:"use-business-metrics-to-evaluate-costs",level:3},{value:"Illustrate costs with relatable, real-world comparisons",id:"illustrate-costs-with-relatable-real-world-comparisons",level:3},{value:"Tie spending to specific products and resources",id:"tie-spending-to-specific-products-and-resources",level:3},{value:"Driving down costs without slowing down development",id:"driving-down-costs-without-slowing-down-development",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Ready for DevSecCostOpsPlus (and whatever\u2019s next)",id:"ready-for-devseccostopsplus-and-whatevers-next",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["How did Spotify save millions on cloud costs within a matter of months?? We made cost optimization just another part of the daily development process. Our newly open sourced ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/cost-insights/plugins/cost-insights",children:"Cost Insights plugin"})," makes a team\u2019s cloud costs visible \u2014 and actionable \u2014 right inside Backstage. So engineers can see the impact of their cloud usage (down to a product and resource level) and make optimizations wherever and whenever it makes sense. By managing cloud costs from the ground up, you can make smarter decisions that let you continue to build and scale quickly, without wasting resources."]}),"\n",(0,s.jsx)("iframe",{width:"780",height:"440",src:"https://www.youtube.com/embed/YLAd5hdXR_Q",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,s.jsx)(t.p,{children:"Are we turning engineers into accountants? Nope, we\u2019re just letting engineers do what they do best, in the place that feels natural to them: inside Backstage."}),"\n","\n",(0,s.jsx)(t.h2,{id:"why-put-a-cost-management-tool-in-the-hands-of-engineers",children:"Why put a cost management tool in the hands of engineers?"}),"\n",(0,s.jsx)(t.p,{children:"Engineers are closest to the metal in terms of knowing why a specific feature, product, or service is using cloud resources. So they\u2019re in the best position to understand how costs impact ongoing development (and vice versa)."}),"\n",(0,s.jsx)(t.p,{children:"If you manage costs top-down from a 10,000-foot view of your cloud infrastructure, you\u2019re likely making decisions far removed from products, especially in larger organizations. Set a broad cost-cutting goal, and you could be creating unintended consequences \u2014 curtailing spending at the expense of growth or experimentation."}),"\n",(0,s.jsx)(t.h2,{id:"ground-level-intelligence-data-driven-solutions",children:"Ground-level intelligence, data-driven solutions"}),"\n",(0,s.jsx)(t.p,{children:"Our hypothesis at Spotify was, if you bring spending data into an engineer\u2019s everyday development workflow, they\u2019ll naturally look for cost optimizations just like they look for any other optimization. And the cost optimizations will be more efficient and effective, because the decisions are informed at the ground level."}),"\n",(0,s.jsx)(t.p,{children:"The problem is that most cloud platforms don\u2019t provide cost data at a granular enough level to make those decisions. And the bigger your organization (say, two-thousand-microservices and four-thousand-data-pipelines big, like Spotify), then the less you can attribute these large, fuzzy numbers to the right team, let alone a shipping product or internal service."}),"\n",(0,s.jsx)(t.p,{children:"That\u2019s where Cost Insights comes in. Instead of making cost management and product development separate departments on the org chart, Backstage brings them together \u2014 with a level of detail and specificity engineers relate and respond to."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-turn-dollars-into-sense",children:"How to turn dollars into sense"}),"\n",(0,s.jsx)(t.p,{children:"It\u2019s not enough to make costs visible. To be useful, the numbers need to be relevant, relatable, and actionable. In other words, not just cost information, but insights. There are several ways the plugin puts data from your cloud provider in a more helpful context."}),"\n",(0,s.jsx)(t.h3,{id:"use-business-metrics-to-evaluate-costs",children:"Use business metrics to evaluate costs"}),"\n",(0,s.jsx)(t.p,{children:"Cost Insights will show you trends at a glance and also let you compare costs quarter over quarter. More importantly, you can also evaluate costs against business metrics that you care most about. In the example below, should the upward slope shown in the first screen be cause for worry? Perhaps not \u2014 if you switch views, you\u2019ll see that cost per daily average user (DAU) is actually going down. Exactly what you hope to see as you scale."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Comparing costs to DAU",src:n(166862).Z+"",width:"960",height:"540"}),"\n",(0,s.jsx)(t.em,{children:"(Note: Screens are examples; they do not show real data.)"})]}),"\n",(0,s.jsx)(t.h3,{id:"illustrate-costs-with-relatable-real-world-comparisons",children:"Illustrate costs with relatable, real-world comparisons"}),"\n",(0,s.jsx)(t.p,{children:"In addition to dollar amounts, Cost Insights allows teams to visualize and convert cost overages into more relatable terms. In the example below, we equate the growth in costs for virtual machine instances (100% increase) to developer time spent (about 1 engineer). We use this particular comparison in the plugin because we found it resonated with our own engineers \u2014 providing a useful perspective for spending increases. You can configure what the \u201ccost of an engineer\u201d means to your organization. Or engineers can build in their own comparisons \u2014 cups of coffee, carbon offset credits, electric luxury vehicles \u2014 whatever makes costs more tangible for them."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Cost growth as engineering time",src:n(698118).Z+"",width:"1920",height:"1080"}),"\n",(0,s.jsx)(t.em,{children:"(Note: Screens are examples; they do not show real data.)"})]}),"\n",(0,s.jsx)(t.h3,{id:"tie-spending-to-specific-products-and-resources",children:"Tie spending to specific products and resources"}),"\n",(0,s.jsx)(t.p,{children:"The more detailed the cost data, the more relevant, actionable, and helpful it is. Cost Insights allows you to attribute costs to products and resources in a way that makes sense to your engineers. For example, here we see a breakdown of data processing costs by individual pipelines. This allows your team to target optimizations more precisely."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Data Processing costs by pipeline",src:n(575890).Z+"",width:"1920",height:"1080"}),"\n",(0,s.jsx)(t.em,{children:"(Note: Screens are examples; they do not show real data.)"})]}),"\n",(0,s.jsx)(t.h2,{id:"driving-down-costs-without-slowing-down-development",children:"Driving down costs without slowing down development"}),"\n",(0,s.jsx)(t.p,{children:"When it comes to cutting costs, we actually want to guard against over-optimization. Growth and costs can go hand in hand. The trick is knowing when one is out of balance and needs addressing. Our product highlights when there\u2019s been a large increase in spending, so that engineers are thinking about cost only when they must and aren\u2019t distracted from their set goals and priorities."}),"\n",(0,s.jsx)(t.p,{children:"Engineers can then determine for themselves if the time invested in an optimization was valuable compared to the costs saved. Cost Insights puts the decision in our engineers\u2019 hands for them to choose when to focus on growth efforts and when to focus on cost. Control, as ever, remains with our developers, where we think it belongs."}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(t.p,{children:["You can begin working with the Cost Insights plugin today on ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/cost-insights/plugins/cost-insights",children:"GitHub"}),". We include an example client with static data in the expected format. The ",(0,s.jsx)(t.code,{children:"CostInsightsApi"})," should talk with a cloud billing backend that aggregates billing data from your cloud provider."]}),"\n",(0,s.jsx)(t.p,{children:"The current release of Cost Insights includes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Daily cost graph by team or billing account"}),"\n",(0,s.jsx)(t.li,{children:"Cost comparisons against configurable business metrics (including an option for Daily Active Users)"}),"\n",(0,s.jsx)(t.li,{children:"Insights panels \u2014 configurable for the cloud products your company uses"}),"\n",(0,s.jsx)(t.li,{children:"Cost alerts and recommendations"}),"\n",(0,s.jsx)(t.li,{children:"Selectable time periods for month-over-month or quarter-over-quarter comparisons"}),"\n",(0,s.jsx)(t.li,{children:"Conversion of cost growth into \u201ccost of average engineer\u201d to help optimization trade-off decisions"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Our hope is to help other companies translate their cloud cost in a relatable way for their engineers to better understand their impact and accurately identify their opportunities for optimizations."}),"\n",(0,s.jsxs)(t.p,{children:["And if you\u2019re interested in contributing to our outstanding issues, you can find them in the issues queue, filtered under the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/labels/cost-insights",children:"\u2018cost-insights\u2019 label"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"ready-for-devseccostopsplus-and-whatevers-next",children:"Ready for DevSecCostOpsPlus (and whatever\u2019s next)"}),"\n",(0,s.jsxs)(t.p,{children:["There\u2019s DevOps, there\u2019s DevSecOps, and then there\u2019s Backstage: one frontend for all your infrastructure. From building, testing, and deploying to monitoring and security \u2014 Backstage helps you manage your entire tech organization and provides a seamless developer experience for engineers, from end to end to end. And now that also extends to cost management for your cloud infrastructure and tooling. Happy building and ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/cost-insights/plugins/cost-insights",children:"happy optimizing"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:r.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},166862:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cost-insights-1-dau-60d4e95a19826b72781a29f006a8134a.gif"},698118:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cost-insights-2-engineer-f6646a85ac4d05baf6a55b6cf5b5a75d.png"},575890:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cost-insights-3-data-4ac5bfe3c4402c50ce39211e16c245ed.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(667294);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);