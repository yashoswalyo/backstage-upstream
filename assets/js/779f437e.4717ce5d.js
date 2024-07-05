/*! For license information please see 779f437e.4717ce5d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[450071],{998398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(824246),o=r(511151);const s={id:"overview",title:"Kubernetes",sidebar_label:"Overview",description:"Monitoring Kubernetes based services with the software catalog"},u=void 0,a={id:"features/kubernetes/overview",title:"Kubernetes",description:"Monitoring Kubernetes based services with the software catalog",source:"@site/../docs/features/kubernetes/index.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/",permalink:"/docs/features/kubernetes/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/kubernetes/index.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Kubernetes",sidebar_label:"Overview",description:"Monitoring Kubernetes based services with the software catalog"},sidebar:"docs",previous:{title:"Creating the Catalog Graph",permalink:"/docs/features/software-catalog/creating-the-catalog-graph"},next:{title:"Installation",permalink:"/docs/features/kubernetes/installation"}},i={},c=[{value:"Let&#39;s use it!",id:"lets-use-it",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Kubernetes in Backstage is a tool that's designed around the needs of service\nowners, not cluster admins. Now developers can easily check the health of their\nservices no matter how or where those services are deployed \u2014 whether it's on a\nlocal host for testing or in production on dozens of clusters around the world."}),"\n",(0,n.jsx)(t.p,{children:"It will elevate the visibility of errors where identified, and provide drill\ndown about the deployments, pods, and other objects for a service."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Kubernetes plugin screenshot",src:r(724135).Z+"",width:"1999",height:"1092"})}),"\n",(0,n.jsxs)(t.p,{children:["The feature is made up of two plugins:\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes"})}),"\nand\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The frontend plugin exposes information to the end user in a digestible way,\nwhile the backend wraps the mechanics to connect to Kubernetes clusters to\ncollect the relevant information."}),"\n",(0,n.jsx)(t.h2,{id:"lets-use-it",children:"Let's use it!"}),"\n",(0,n.jsxs)(t.p,{children:["To get started, first you must ",(0,n.jsx)(t.a,{href:"/docs/features/kubernetes/installation",children:"install the Kubernetes plugins"}),"\nand then ",(0,n.jsx)(t.a,{href:"/docs/features/kubernetes/configuration",children:"configure them"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},724135:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-2-deployments-36ca3f831747105e25f3e69e7e459032.png"},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var g=_.prototype=new v;g.constructor=_,y(g,m.prototype),g.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,s={},u=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,o)&&!S.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(1===i)s.children=n;else if(1<i){for(var c=Array(i),l=0;l<i;l++)c[l]=arguments[l+2];s.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:a,props:s,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,s,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===s?"."+R(i,0):s,k(u)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+e)),t.push(u)),1;if(i=0,s=""===s?".":s+":",k(e))for(var c=0;c<e.length;c++){var l=s+R(a=e[c],c);i+=$(a,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)i+=$(a=a.value,t,o,l=s+R(a,c++),u);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},K={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)w.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==i?i[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){i=Array(c);for(var l=0;l<c;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:s,ref:u,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>u});var n=r(667294);const o={},s=n.createContext(o);function u(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);