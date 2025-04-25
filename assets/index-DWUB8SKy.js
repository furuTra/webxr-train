(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var bf={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function dS(){if(Lg)return mo;Lg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var Ng;function pS(){return Ng||(Ng=1,bf.exports=dS()),bf.exports}var Oa=pS(),Af={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function mS(){if(Og)return ie;Og=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function M(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function B(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||y}var O=B.prototype=new _;O.constructor=B,A(O,M.prototype),O.isPureReactComponent=!0;var L=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function I(U,$,vt,xt,Q,dt){return vt=dt.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:dt}}function Z(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var H=/\/+/g;function lt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function st(){}function _t(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,$,vt,xt,Q){var dt=typeof U;(dt==="undefined"||dt==="boolean")&&(U=null);var St=!1;if(U===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(U.$$typeof){case o:case e:St=!0;break;case g:return St=U._init,ht(St(U._payload),$,vt,xt,Q)}}if(St)return Q=Q(U),St=xt===""?"."+lt(U,0):xt,L(Q)?(vt="",St!=null&&(vt=St.replace(H,"$&/")+"/"),ht(Q,$,vt,"",function(re){return re})):Q!=null&&(w(Q)&&(Q=Z(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+St)),$.push(Q)),1;St=0;var bt=xt===""?".":xt+":";if(L(U))for(var Dt=0;Dt<U.length;Dt++)xt=U[Dt],dt=bt+lt(xt,Dt),St+=ht(xt,$,vt,dt,Q);else if(Dt=x(U),typeof Dt=="function")for(U=Dt.call(U),Dt=0;!(xt=U.next()).done;)xt=xt.value,dt=bt+lt(xt,Dt++),St+=ht(xt,$,vt,dt,Q);else if(dt==="object"){if(typeof U.then=="function")return ht(_t(U),$,vt,xt,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function P(U,$,vt){if(U==null)return U;var xt=[],Q=0;return ht(U,xt,"","",function(dt){return $.call(vt,dt,Q++)}),xt}function j(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return ie.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ie.Component=M,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=B,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ie.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},ie.cache=function(U){return function(){return U.apply(null,arguments)}},ie.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xt=A({},U.props),Q=U.key,dt=void 0;if($!=null)for(St in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(Q=""+$.key),$)!V.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(xt[St]=$[St]);var St=arguments.length-2;if(St===1)xt.children=vt;else if(1<St){for(var bt=Array(St),Dt=0;Dt<St;Dt++)bt[Dt]=arguments[Dt+2];xt.children=bt}return I(U.type,Q,void 0,void 0,dt,xt)},ie.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ie.createElement=function(U,$,vt){var xt,Q={},dt=null;if($!=null)for(xt in $.key!==void 0&&(dt=""+$.key),$)V.call($,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Q[xt]=$[xt]);var St=arguments.length-2;if(St===1)Q.children=vt;else if(1<St){for(var bt=Array(St),Dt=0;Dt<St;Dt++)bt[Dt]=arguments[Dt+2];Q.children=bt}if(U&&U.defaultProps)for(xt in St=U.defaultProps,St)Q[xt]===void 0&&(Q[xt]=St[xt]);return I(U,dt,void 0,void 0,null,Q)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(U){return{$$typeof:d,render:U}},ie.isValidElement=w,ie.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:j}},ie.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ie.startTransition=function(U){var $=G.T,vt={};G.T=vt;try{var xt=U(),Q=G.S;Q!==null&&Q(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(Mt,q)}catch(dt){q(dt)}finally{G.T=$}},ie.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ie.use=function(U){return G.H.use(U)},ie.useActionState=function(U,$,vt){return G.H.useActionState(U,$,vt)},ie.useCallback=function(U,$){return G.H.useCallback(U,$)},ie.useContext=function(U){return G.H.useContext(U)},ie.useDebugValue=function(){},ie.useDeferredValue=function(U,$){return G.H.useDeferredValue(U,$)},ie.useEffect=function(U,$,vt){var xt=G.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(U,$)},ie.useId=function(){return G.H.useId()},ie.useImperativeHandle=function(U,$,vt){return G.H.useImperativeHandle(U,$,vt)},ie.useInsertionEffect=function(U,$){return G.H.useInsertionEffect(U,$)},ie.useLayoutEffect=function(U,$){return G.H.useLayoutEffect(U,$)},ie.useMemo=function(U,$){return G.H.useMemo(U,$)},ie.useOptimistic=function(U,$){return G.H.useOptimistic(U,$)},ie.useReducer=function(U,$,vt){return G.H.useReducer(U,$,vt)},ie.useRef=function(U){return G.H.useRef(U)},ie.useState=function(U){return G.H.useState(U)},ie.useSyncExternalStore=function(U,$,vt){return G.H.useSyncExternalStore(U,$,vt)},ie.useTransition=function(){return G.H.useTransition()},ie.version="19.1.0",ie}var Pg;function Zh(){return Pg||(Pg=1,Af.exports=mS()),Af.exports}var gS=Zh(),Rf={exports:{}},go={},Cf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function _S(){return Bg||(Bg=1,function(o){function e(P,j){var q=P.length;P.push(j);t:for(;0<q;){var Mt=q-1>>>1,U=P[Mt];if(0<l(U,j))P[Mt]=j,P[q]=U,q=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],q=P.pop();if(q!==j){P[0]=q;t:for(var Mt=0,U=P.length,$=U>>>1;Mt<$;){var vt=2*(Mt+1)-1,xt=P[vt],Q=vt+1,dt=P[Q];if(0>l(xt,q))Q<U&&0>l(dt,xt)?(P[Mt]=dt,P[Q]=q,Mt=Q):(P[Mt]=xt,P[vt]=q,Mt=vt);else if(Q<U&&0>l(dt,q))P[Mt]=dt,P[Q]=q,Mt=Q;else break t}}return j}function l(P,j){var q=P.sortIndex-j.sortIndex;return q!==0?q:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function G(P){if(C=!1,L(P),!A)if(i(m)!==null)A=!0,V||(V=!0,lt());else{var j=i(p);j!==null&&ht(G,j.startTime-P)}}var V=!1,I=-1,Z=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<Z)}function H(){if(M=!1,V){var P=o.unstable_now();w=P;var j=!0;try{t:{A=!1,C&&(C=!1,B(I),I=-1),y=!0;var q=x;try{e:{for(L(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var U=Mt(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,L(P),j=!0;break e}v===i(m)&&r(m),L(P)}else r(m);v=i(m)}if(v!==null)j=!0;else{var $=i(p);$!==null&&ht(G,$.startTime-P),j=!1}}break t}finally{v=null,x=q,y=!1}j=void 0}}finally{j?lt():V=!1}}}var lt;if(typeof O=="function")lt=function(){O(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,_t=st.port2;st.port1.onmessage=H,lt=function(){_t.postMessage(null)}}else lt=function(){_(H,0)};function ht(P,j){I=_(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return j()}finally{x=q}},o.unstable_scheduleCallback=function(P,j,q){var Mt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Mt+q:Mt):q=Mt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:j,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>Mt?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(C?(B(I),I=-1):C=!0,ht(G,q-Mt))):(P.sortIndex=U,e(m,P),A||y||(A=!0,V||(V=!0,lt()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=x;return function(){var q=x;x=j;try{return P.apply(this,arguments)}finally{x=q}}}}(wf)),wf}var zg;function vS(){return zg||(zg=1,Cf.exports=_S()),Cf.exports}var Df={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function SS(){if(Ig)return Tn;Ig=1;var o=Zh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Tn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var Fg;function xS(){if(Fg)return Df.exports;Fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Df.exports=SS(),Df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function MS(){if(Hg)return go;Hg=1;var o=vS(),e=Zh(),i=xS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,E=u.child;E;){if(E===a){S=!0,a=u,s=f;break}if(E===s){S=!0,s=u,a=f;break}E=E.sibling}if(!S){for(E=f.child;E;){if(E===a){S=!0,a=f,s=u;break}if(E===s){S=!0,s=f,a=u;break}E=E.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case O:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function $(t){return{current:t}}function vt(t){0>U||(t.current=Mt[U],Mt[U]=null,U--)}function xt(t,n){U++,Mt[U]=t.current,t.current=n}var Q=$(null),dt=$(null),St=$(null),bt=$(null);function Dt(t,n){switch(xt(St,n),xt(dt,t),xt(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sg(n),t=og(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Q),xt(Q,t)}function re(){vt(Q),vt(dt),vt(St)}function Zt(t){t.memoizedState!==null&&xt(bt,t);var n=Q.current,a=og(n,t.type);n!==a&&(xt(dt,t),xt(Q,a))}function Ie(t){dt.current===t&&(vt(Q),vt(dt)),bt.current===t&&(vt(bt),uo._currentValue=q)}var Oe=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,z=o.unstable_cancelCallback,Dn=o.unstable_shouldYield,pe=o.unstable_requestPaint,ee=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,Ce=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,D=o.unstable_NormalPriority,T=o.unstable_LowPriority,tt=o.unstable_IdlePriority,pt=o.log,yt=o.unstable_setDisableYieldValue,ct=null,Nt=null;function At(t){if(typeof pt=="function"&&yt(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(ct,t)}catch{}}var Ft=Math.clz32?Math.clz32:zt,Qt=Math.log,Tt=Math.LN2;function zt(t){return t>>>=0,t===0?32:31-(Qt(t)/Tt|0)|0}var qt=256,jt=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Ot(s):(S&=E,S!==0?u=Ot(S):a||(a=E&~t,a!==0&&(u=Ot(a))))):(E=s&~f,E!==0?u=Ot(E):S!==0?u=Ot(S):a||(a=s&~t,a!==0&&(u=Ot(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function we(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=qt;return qt<<=1,(qt&4194048)===0&&(qt=256),t}function Ut(){var t=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),t}function ot(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function mt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pt(t,n,a,s,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Ft(a),gt=1<<ut;E[ut]=0,N[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var nt=et[ut];nt!==null&&(nt.lane&=-536870913)}a&=~gt}s!==0&&Lt(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Lt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ft(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ne(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ft(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Fe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qe(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Ag(t.type))}function Fn(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var cn=Math.random().toString(36).slice(2),an="__reactFiber$"+cn,gn="__reactProps$"+cn,Un="__reactContainer$"+cn,Fa="__reactEvents$"+cn,Uo="__reactListeners$"+cn,Lo="__reactHandles$"+cn,Ha="__reactResources$"+cn,ea="__reactMarker$"+cn;function na(t){delete t[an],delete t[gn],delete t[Fa],delete t[Uo],delete t[Lo]}function Ti(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Un]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=fg(t);t!==null;){if(a=t[an])return a;t=fg(t)}return n}t=a,a=t.parentNode}return null}function bi(t){if(t=t[an]||t[Un]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ga(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ia(t){var n=t[Ha];return n||(n=t[Ha]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(t){t[ea]=!0}var No=new Set,Oo={};function Ai(t,n){b(t,n),b(t+"Capture",n)}function b(t,n){for(Oo[t]=n,t=0;t<n.length;t++)No.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function Y(t){return Oe.call(at,t)?!0:Oe.call(it,t)?!1:W.test(t)?at[t]=!0:(it[t]=!0,!1)}function Et(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Rt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ct(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Bt,Jt;function kt(t){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+t+Jt}var Vt=!1;function fe(t,n){if(!t||Vt)return"";Vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(nt){var et=nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(nt){et=nt}t.call(gt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],E=f[1];if(S&&E){var N=S.split(`
`),J=E.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===J.length)for(s=N.length-1,u=J.length-1;1<=s&&0<=u&&N[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==J[u]){var ut=`
`+N[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?kt(a):""}function Me(t){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return fe(t.type,!1);case 11:return fe(t.type.render,!1);case 1:return fe(t.type,!0);case 31:return kt("Activity");default:return""}}function Xe(t){try{var n="";do n+=Me(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ge(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wt(t){var n=ge(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){t._valueTracker||(t._valueTracker=Wt(t))}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ge(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var aa=/[\n"\\]/g;function He(t){return t.replace(aa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ri(t,n,a,s,u,f,S,E){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+me(n)):t.value!==""+me(n)&&(t.value=""+me(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,me(n)):a!=null?yn(t,S,me(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+me(E):t.removeAttribute("name")}function Pe(t,n,a,s,u,f,S,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function yn(t,n,a){n==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function rn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function fn(t,n,a){if(n!=null&&(n=""+me(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+me(a):""}function _n(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=me(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ci.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function od(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&sd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&sd(t,f,n[f])}function Eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tu=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Mr=null;function ld(t){var n=bi(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ri(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+He(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[gn]||null;if(!u)throw Error(r(90));Ri(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":fn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(t,!!a.multiple,n,!1)}}}var Au=!1;function ud(t,n,a){if(Au)return t(n,a);Au=!0;try{var s=t(n);return s}finally{if(Au=!1,(xr!==null||Mr!==null)&&(xl(),xr&&(n=xr,t=Mr,Mr=xr=null,ld(n),t)))for(n=0;n<t.length;n++)ld(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(wi)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Ru=!1}var ra=null,Cu=null,Bo=null;function cd(){if(Bo)return Bo;var t,n=Cu,a=n.length,s,u="value"in ra?ra.value:ra.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Bo=u.slice(t,1<s?1-s:void 0)}function zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function fd(){return!1}function Ln(t){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:fd,this.isPropagationStopped=fd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Ln(Va),Ts=g({},Va,{view:0,detail:0}),dv=Ln(Ts),wu,Du,bs,Ho=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(wu=t.screenX-bs.screenX,Du=t.screenY-bs.screenY):Du=wu=0,bs=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),hd=Ln(Ho),pv=g({},Ho,{dataTransfer:0}),mv=Ln(pv),gv=g({},Ts,{relatedTarget:0}),Uu=Ln(gv),_v=g({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Ln(_v),Sv=g({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=Ln(Sv),Mv=g({},Va,{data:0}),dd=Ln(Mv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Tv[t])?!!n[t]:!1}function Lu(){return bv}var Av=g({},Ts,{key:function(t){if(t.key){var n=yv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rv=Ln(Av),Cv=g({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=Ln(Cv),wv=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Dv=Ln(wv),Uv=g({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Ln(Uv),Nv=g({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Ln(Nv),Pv=g({},Va,{newState:0,oldState:0}),Bv=Ln(Pv),zv=[9,13,27,32],Nu=wi&&"CompositionEvent"in window,As=null;wi&&"documentMode"in document&&(As=document.documentMode);var Iv=wi&&"TextEvent"in window&&!As,md=wi&&(!Nu||As&&8<As&&11>=As),gd=" ",_d=!1;function vd(t,n){switch(t){case"keyup":return zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Fv(t,n){switch(t){case"compositionend":return Sd(n);case"keypress":return n.which!==32?null:(_d=!0,gd);case"textInput":return t=n.data,t===gd&&_d?null:t;default:return null}}function Hv(t,n){if(yr)return t==="compositionend"||!Nu&&vd(t,n)?(t=cd(),Bo=Cu=ra=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return md&&n.locale!=="ko"?null:n.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Gv[t.type]:n==="textarea"}function Md(t,n,a,s){xr?Mr?Mr.push(s):Mr=[s]:xr=s,n=Al(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function Vv(t){eg(t,0)}function Go(t){var n=Ga(t);if(Se(n))return t}function yd(t,n){if(t==="change")return n}var Ed=!1;if(wi){var Ou;if(wi){var Pu="oninput"in document;if(!Pu){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Pu=typeof Td.oninput=="function"}Ou=Pu}else Ou=!1;Ed=Ou&&(!document.documentMode||9<document.documentMode)}function bd(){Rs&&(Rs.detachEvent("onpropertychange",Ad),Cs=Rs=null)}function Ad(t){if(t.propertyName==="value"&&Go(Cs)){var n=[];Md(n,Cs,t,bu(t)),ud(Vv,n)}}function Xv(t,n,a){t==="focusin"?(bd(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",Ad)):t==="focusout"&&bd()}function kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Cs)}function Wv(t,n){if(t==="click")return Go(n)}function qv(t,n){if(t==="input"||t==="change")return Go(n)}function Yv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:Yv;function ws(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Oe.call(n,u)||!Hn(t[u],n[u]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cd(t,n){var a=Rd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rd(a)}}function wd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mn(t.document)}return n}function Bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Zv=wi&&"documentMode"in document&&11>=document.documentMode,Er=null,zu=null,Ds=null,Iu=!1;function Ud(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||Er==null||Er!==Mn(s)||(s=Er,"selectionStart"in s&&Bu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=Al(zu,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Fu={},Ld={};wi&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function ka(t){if(Fu[t])return Fu[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ld)return Fu[t]=n[a];return t}var Nd=ka("animationend"),Od=ka("animationiteration"),Pd=ka("animationstart"),jv=ka("transitionrun"),Kv=ka("transitionstart"),Qv=ka("transitioncancel"),Bd=ka("transitionend"),zd=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function ri(t,n){zd.set(t,n),Ai(n,[t])}var Id=new WeakMap;function jn(t,n){if(typeof t=="object"&&t!==null){var a=Id.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Id.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Kn=[],br=0,Gu=0;function Vo(){for(var t=br,n=Gu=br=0;n<t;){var a=Kn[n];Kn[n++]=null;var s=Kn[n];Kn[n++]=null;var u=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&Fd(a,u,f)}}function Xo(t,n,a,s){Kn[br++]=t,Kn[br++]=n,Kn[br++]=a,Kn[br++]=s,Gu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Vu(t,n,a,s){return Xo(t,n,a,s),ko(t)}function Ar(t,n){return Xo(t,null,null,n),ko(t)}function Fd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ft(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ko(t){if(50<eo)throw eo=0,Zc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function Jv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new Jv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Di(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wo(t,n,a,s,u,f){var S=0;if(s=t,typeof t=="function")Xu(t)&&(S=1);else if(typeof t=="string")S=tS(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Gn(31,a,n,u),t.elementType=w,t.lanes=f,t;case A:return Wa(a.children,u,f,n);case C:S=8,u|=24;break;case M:return t=Gn(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case G:return t=Gn(13,a,n,u),t.elementType=G,t.lanes=f,t;case V:return t=Gn(19,a,n,u),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:S=10;break t;case B:S=9;break t;case L:S=11;break t;case I:S=14;break t;case Z:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Wa(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function ku(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function Wu(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cr=[],wr=0,qo=null,Yo=0,Qn=[],Jn=0,qa=null,Ui=1,Li="";function Ya(t,n){Cr[wr++]=Yo,Cr[wr++]=qo,qo=t,Yo=n}function Gd(t,n,a){Qn[Jn++]=Ui,Qn[Jn++]=Li,Qn[Jn++]=qa,qa=t;var s=Ui;t=Li;var u=32-Ft(s)-1;s&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ui=1<<32-Ft(n)+u|a<<u|s,Li=f+t}else Ui=1<<f|a<<u|s,Li=t}function qu(t){t.return!==null&&(Ya(t,1),Gd(t,1,0))}function Yu(t){for(;t===qo;)qo=Cr[--wr],Cr[wr]=null,Yo=Cr[--wr],Cr[wr]=null;for(;t===qa;)qa=Qn[--Jn],Qn[Jn]=null,Li=Qn[--Jn],Qn[Jn]=null,Ui=Qn[--Jn],Qn[Jn]=null}var Rn=null,qe=null,Te=!1,Za=null,mi=!1,Zu=Error(r(519));function ja(t){var n=Error(r(418,""));throw Ns(jn(n,t)),Zu}function Vd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[gn]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)de(io[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Pe(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),We(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),_n(n,s.value,s.defaultValue,s.children),We(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||rg(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Rl),n=!0):n=!1,n||ja(t)}function Xd(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Rn=Rn.return}}function Us(t){if(t!==Rn)return!1;if(!Te)return Xd(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ff(t.type,t.memoizedProps)),a=!a),a&&qe&&ja(t),Xd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){qe=oi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}qe=null}}else n===27?(n=qe,Ma(t.type)?(t=mf,mf=null,qe=t):qe=n):qe=Rn?oi(t.stateNode.nextSibling):null;return!0}function Ls(){qe=Rn=null,Te=!1}function kd(){var t=Za;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),Za=null),t}function Ns(t){Za===null?Za=[t]:Za.push(t)}var ju=$(null),Ka=null,Ni=null;function sa(t,n,a){xt(ju,n._currentValue),n._currentValue=a}function Oi(t){t._currentValue=ju.current,vt(ju)}function Ku(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var N=0;N<n.length;N++)if(E.context===n[N]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Ku(f.return,a,t),s||(S=null);break t}f=E.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ku(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Os(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var E=u.type;Hn(u.pendingProps.value,S.value)||(t!==null?t.push(E):t=[E])}}else if(u===bt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}u=u.return}t!==null&&Qu(n,t,a,s),n.flags|=262144}function Zo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,Ni=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Wd(Ka,t)}function jo(t,n){return Ka===null&&Qa(t),Wd(t,n)}function Wd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ni===null){if(t===null)throw Error(r(308));Ni=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ni=Ni.next=n;return a}var $v=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},t0=o.unstable_scheduleCallback,e0=o.unstable_NormalPriority,sn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new $v,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&t0(e0,function(){t.controller.abort()})}var Bs=null,$u=0,Dr=0,Ur=null;function n0(t,n){if(Bs===null){var a=Bs=[];$u=0,Dr=ef(),Ur={status:"pending",value:void 0,then:function(s){a.push(s)}}}return $u++,n.then(qd,qd),n}function qd(){if(--$u===0&&Bs!==null){Ur!==null&&(Ur.status="fulfilled");var t=Bs;Bs=null,Dr=0,Ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function i0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Yd=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&n0(t,n),Yd!==null&&Yd(t,n)};var Ja=$(null);function tc(){var t=Ja.current;return t!==null?t:Ge.pooledCache}function Ko(t,n){n===null?xt(Ja,Ja.current):xt(Ja,n.pool)}function Zd(){var t=tc();return t===null?null:{parent:sn._currentValue,pool:t}}var zs=Error(r(460)),jd=Error(r(474)),Qo=Error(r(542)),ec={then:function(){}};function Kd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jo(){}function Qd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$d(t),t;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$d(t),t}throw Is=n,zs}}var Is=null;function Jd(){if(Is===null)throw Error(r(459));var t=Is;return Is=null,t}function $d(t){if(t===zs||t===Qo)throw Error(r(483))}var oa=!1;function nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function la(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ko(t),Fd(t,null,a),n}return Xo(t,s,n,a),ko(t)}function Fs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ne(t,a)}}function ac(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var rc=!1;function Hs(){if(rc){var t=Ur;if(t!==null)throw t}}function Gs(t,n,a,s){rc=!1;var u=t.updateQueue;oa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var N=E,J=N.next;N.next=null,S===null?f=J:S.next=J,S=N;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==S&&(E===null?ut.firstBaseUpdate=J:E.next=J,ut.lastBaseUpdate=N))}if(f!==null){var gt=u.baseState;S=0,ut=J=N=null,E=f;do{var et=E.lane&-536870913,nt=et!==E.lane;if(nt?(ve&et)===et:(s&et)===et){et!==0&&et===Dr&&(rc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var $t=t,Yt=E;et=n;var Le=a;switch(Yt.tag){case 1:if($t=Yt.payload,typeof $t=="function"){gt=$t.call(Le,gt,et);break t}gt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Yt.payload,et=typeof $t=="function"?$t.call(Le,gt,et):$t,et==null)break t;gt=g({},gt,et);break t;case 2:oa=!0}}et=E.callback,et!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=u.callbacks,nt===null?u.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(J=ut=nt,N=gt):ut=ut.next=nt,S|=et;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;nt=E,E=nt.next,nt.next=null,u.lastBaseUpdate=nt,u.shared.pending=null}}while(!0);ut===null&&(N=gt),u.baseState=N,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),_a|=S,t.lanes=S,t.memoizedState=gt}}function tp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ep(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)tp(a[t],n)}var Lr=$(null),$o=$(0);function np(t,n){t=Gi,xt($o,t),xt(Lr,n),Gi=t|n.baseLanes}function sc(){xt($o,Gi),xt(Lr,Lr.current)}function oc(){Gi=$o.current,vt(Lr),vt($o)}var ca=0,le=null,De=null,$e=null,tl=!1,Nr=!1,$a=!1,el=0,Vs=0,Or=null,a0=0;function Ze(){throw Error(r(321))}function lc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function uc(t,n,a,s,u,f){return ca=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Fp:Hp,$a=!1,f=a(s,u),$a=!1,Nr&&(f=ap(n,a,s,u)),ip(t),f}function ip(t){P.H=ol;var n=De!==null&&De.next!==null;if(ca=0,$e=De=le=null,tl=!1,Vs=0,Or=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Zo(t)&&(hn=!0))}function ap(t,n,a,s){le=t;var u=0;do{if(Nr&&(Or=null),Vs=0,Nr=!1,25<=u)throw Error(r(301));if(u+=1,$e=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=f0,f=n(a,s)}while(Nr);return f}function r0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Xs(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(le.flags|=1024),n}function cc(){var t=el!==0;return el=0,t}function fc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hc(t){if(tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tl=!1}ca=0,$e=De=le=null,Nr=!1,Vs=el=0,Or=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?le.memoizedState=$e=t:$e=$e.next=t,$e}function tn(){if(De===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=$e===null?le.memoizedState:$e.next;if(n!==null)$e=n,De=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},$e===null?le.memoizedState=$e=t:$e=$e.next=t}return $e}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(t){var n=Vs;return Vs+=1,Or===null&&(Or=[]),t=Qd(Or,t,n),n=le,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Fp:Hp),t}function nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===O)return En(t)}throw Error(r(438,String(t)))}function pc(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dc(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Pi(t,n){return typeof n=="function"?n(t):n}function il(t){var n=tn();return mc(n,De,t)}function mc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=S=null,N=null,J=n,ut=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ve&gt)===gt:(ca&gt)===gt){var et=J.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Dr&&(ut=!0);else if((ca&et)===et){J=J.next,et===Dr&&(ut=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},N===null?(E=N=gt,S=f):N=N.next=gt,le.lanes|=et,_a|=et;gt=J.action,$a&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else et={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},N===null?(E=N=et,S=f):N=N.next=et,le.lanes|=gt,_a|=gt;J=J.next}while(J!==null&&J!==n);if(N===null?S=f:N.next=E,!Hn(f,t.memoizedState)&&(hn=!0,ut&&(a=Ur,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function gc(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Hn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function rp(t,n,a){var s=le,u=tn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Hn((De||u).memoizedState,a);S&&(u.memoizedState=a,hn=!0),u=u.queue;var E=lp.bind(null,s,u,t);if(ks(2048,8,E,[t]),u.getSnapshot!==n||S||$e!==null&&$e.memoizedState.tag&1){if(s.flags|=2048,Pr(9,al(),op.bind(null,s,u,a,n),null),Ge===null)throw Error(r(349));f||(ca&124)!==0||sp(s,n,a)}return a}function sp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=dc(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function op(t,n,a,s){n.value=a,n.getSnapshot=s,up(n)&&cp(t)}function lp(t,n,a){return a(function(){up(n)&&cp(t)})}function up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function cp(t){var n=Ar(t,2);n!==null&&qn(n,t,2)}function _c(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),$a){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},n}function fp(t,n,a,s){return t.baseState=a,mc(t,De,typeof s=="function"?s:Pi)}function s0(t,n,a,s,u){if(sl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var E=a(u,s),N=P.S;N!==null&&N(S,E),dp(t,n,E)}catch(J){vc(t,n,J)}finally{P.T=f}}else try{f=a(u,s),dp(t,n,f)}catch(J){vc(t,n,J)}}function dp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){pp(t,n,s)},function(s){return vc(t,n,s)}):pp(t,n,a)}function pp(t,n,a){n.status="fulfilled",n.value=a,mp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hp(t,a)))}function vc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,mp(n),n=n.next;while(n!==s)}t.action=null}function mp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gp(t,n){return n}function _p(t,n){if(Te){var a=Ge.formState;if(a!==null){t:{var s=le;if(Te){if(qe){e:{for(var u=qe,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=oi(u.nextSibling),s=u.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gp,lastRenderedState:n},a.queue=s,a=Bp.bind(null,le,s),s.dispatch=a,s=_c(!1),f=Ec.bind(null,le,!1,s.queue),s=Nn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=s0.bind(null,le,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function vp(t){var n=tn();return Sp(n,De,t)}function Sp(t,n,a){if(n=mc(t,n,gp)[0],t=il(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xs(n)}catch(S){throw S===zs?Qo:S}else s=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Pr(9,al(),o0.bind(null,u,a),null)),[s,f,t]}function o0(t,n){t.action=n}function xp(t){var n=tn(),a=De;if(a!==null)return Sp(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=dc(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function al(){return{destroy:void 0,resource:void 0}}function Mp(){return tn().memoizedState}function rl(t,n,a,s){var u=Nn();s=s===void 0?null:s,le.flags|=t,u.memoizedState=Pr(1|n,al(),a,s)}function ks(t,n,a,s){var u=tn();s=s===void 0?null:s;var f=u.memoizedState.inst;De!==null&&s!==null&&lc(s,De.memoizedState.deps)?u.memoizedState=Pr(n,f,a,s):(le.flags|=t,u.memoizedState=Pr(1|n,f,a,s))}function yp(t,n){rl(8390656,8,t,n)}function Ep(t,n){ks(2048,8,t,n)}function Tp(t,n){return ks(4,2,t,n)}function bp(t,n){return ks(4,4,t,n)}function Ap(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rp(t,n,a){a=a!=null?a.concat([t]):null,ks(4,4,Ap.bind(null,n,t),a)}function Sc(){}function Cp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&lc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function wp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&lc(n,s[1]))return s[0];if(s=t(),$a){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[s,n],s}function xc(t,n,a){return a===void 0||(ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Lm(),le.lanes|=t,_a|=t,a)}function Dp(t,n,a,s){return Hn(a,n)?a:Lr.current!==null?(t=xc(t,a,s),Hn(t,n)||(hn=!0),t):(ca&42)===0?(hn=!0,t.memoizedState=a):(t=Lm(),le.lanes|=t,_a|=t,n)}function Up(t,n,a,s,u){var f=j.p;j.p=f!==0&&8>f?f:8;var S=P.T,E={};P.T=E,Ec(t,!1,n,a);try{var N=u(),J=P.S;if(J!==null&&J(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ut=i0(N,s);Ws(t,n,ut,Wn(t))}else Ws(t,n,s,Wn(t))}catch(gt){Ws(t,n,{then:function(){},status:"rejected",reason:gt},Wn())}finally{j.p=f,P.T=S}}function l0(){}function Mc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Lp(t).queue;Up(t,u,n,q,a===null?l0:function(){return Np(t),a(s)})}function Lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Np(t){var n=Lp(t).next.queue;Ws(t,n,{},Wn())}function yc(){return En(uo)}function Op(){return tn().memoizedState}function Pp(){return tn().memoizedState}function u0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=la(a);var s=ua(n,t,a);s!==null&&(qn(s,n,a),Fs(s,n,a)),n={cache:Ju()},t.payload=n;return}n=n.return}}function c0(t,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},sl(t)?zp(n,a):(a=Vu(t,n,a,s),a!==null&&(qn(a,t,s),Ip(a,n,s)))}function Bp(t,n,a){var s=Wn();Ws(t,n,a,s)}function Ws(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(t))zp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,E=f(S,a);if(u.hasEagerState=!0,u.eagerState=E,Hn(E,S))return Xo(t,n,u,0),Ge===null&&Vo(),!1}catch{}finally{}if(a=Vu(t,n,u,s),a!==null)return qn(a,t,s),Ip(a,n,s),!0}return!1}function Ec(t,n,a,s){if(s={lane:2,revertLane:ef(),action:s,hasEagerState:!1,eagerState:null,next:null},sl(t)){if(n)throw Error(r(479))}else n=Vu(t,a,s,2),n!==null&&qn(n,t,2)}function sl(t){var n=t.alternate;return t===le||n!==null&&n===le}function zp(t,n){Nr=tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ip(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ne(t,a)}}var ol={readContext:En,use:nl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze},Fp={readContext:En,use:nl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:yp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,rl(4194308,4,Ap.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rl(4194308,4,t,n)},useInsertionEffect:function(t,n){rl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if($a){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var u=a(n);if($a){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=c0.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=_c(t);var n=t.queue,a=Bp.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sc,useDeferredValue:function(t,n){var a=Nn();return xc(a,t,n)},useTransition:function(){var t=_c(!1);return t=Up.bind(null,le,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,u=Nn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(ve&124)!==0||sp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,yp(lp.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,al(),op.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Ge.identifierPrefix;if(Te){var a=Li,s=Ui;a=(s&~(1<<32-Ft(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=el++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=a0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:yc,useFormState:_p,useActionState:_p,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ec.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:pc,useCacheRefresh:function(){return Nn().memoizedState=u0.bind(null,le)}},Hp={readContext:En,use:nl,useCallback:Cp,useContext:En,useEffect:Ep,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:wp,useReducer:il,useRef:Mp,useState:function(){return il(Pi)},useDebugValue:Sc,useDeferredValue:function(t,n){var a=tn();return Dp(a,De.memoizedState,t,n)},useTransition:function(){var t=il(Pi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:rp,useId:Op,useHostTransitionStatus:yc,useFormState:vp,useActionState:vp,useOptimistic:function(t,n){var a=tn();return fp(a,De,t,n)},useMemoCache:pc,useCacheRefresh:Pp},f0={readContext:En,use:nl,useCallback:Cp,useContext:En,useEffect:Ep,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:wp,useReducer:gc,useRef:Mp,useState:function(){return gc(Pi)},useDebugValue:Sc,useDeferredValue:function(t,n){var a=tn();return De===null?xc(a,t,n):Dp(a,De.memoizedState,t,n)},useTransition:function(){var t=gc(Pi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:rp,useId:Op,useHostTransitionStatus:yc,useFormState:xp,useActionState:xp,useOptimistic:function(t,n){var a=tn();return De!==null?fp(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pc,useCacheRefresh:Pp},Br=null,qs=0;function ll(t){var n=qs;return qs+=1,Br===null&&(Br=[]),Qd(Br,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gp(t){var n=t._init;return n(t._payload)}function Vp(t){function n(k,F){if(t){var K=k.deletions;K===null?(k.deletions=[F],k.flags|=16):K.push(F)}}function a(k,F){if(!t)return null;for(;F!==null;)n(k,F),F=F.sibling;return null}function s(k){for(var F=new Map;k!==null;)k.key!==null?F.set(k.key,k):F.set(k.index,k),k=k.sibling;return F}function u(k,F){return k=Di(k,F),k.index=0,k.sibling=null,k}function f(k,F,K){return k.index=K,t?(K=k.alternate,K!==null?(K=K.index,K<F?(k.flags|=67108866,F):K):(k.flags|=67108866,F)):(k.flags|=1048576,F)}function S(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function E(k,F,K,ft){return F===null||F.tag!==6?(F=ku(K,k.mode,ft),F.return=k,F):(F=u(F,K),F.return=k,F)}function N(k,F,K,ft){var It=K.type;return It===A?ut(k,F,K.props.children,ft,K.key):F!==null&&(F.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===Z&&Gp(It)===F.type)?(F=u(F,K.props),Ys(F,K),F.return=k,F):(F=Wo(K.type,K.key,K.props,null,k.mode,ft),Ys(F,K),F.return=k,F)}function J(k,F,K,ft){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=Wu(K,k.mode,ft),F.return=k,F):(F=u(F,K.children||[]),F.return=k,F)}function ut(k,F,K,ft,It){return F===null||F.tag!==7?(F=Wa(K,k.mode,ft,It),F.return=k,F):(F=u(F,K),F.return=k,F)}function gt(k,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=ku(""+F,k.mode,K),F.return=k,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case x:return K=Wo(F.type,F.key,F.props,null,k.mode,K),Ys(K,F),K.return=k,K;case y:return F=Wu(F,k.mode,K),F.return=k,F;case Z:var ft=F._init;return F=ft(F._payload),gt(k,F,K)}if(ht(F)||lt(F))return F=Wa(F,k.mode,K,null),F.return=k,F;if(typeof F.then=="function")return gt(k,ll(F),K);if(F.$$typeof===O)return gt(k,jo(k,F),K);ul(k,F)}return null}function et(k,F,K,ft){var It=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return It!==null?null:E(k,F,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===It?N(k,F,K,ft):null;case y:return K.key===It?J(k,F,K,ft):null;case Z:return It=K._init,K=It(K._payload),et(k,F,K,ft)}if(ht(K)||lt(K))return It!==null?null:ut(k,F,K,ft,null);if(typeof K.then=="function")return et(k,F,ll(K),ft);if(K.$$typeof===O)return et(k,F,jo(k,K),ft);ul(k,K)}return null}function nt(k,F,K,ft,It){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return k=k.get(K)||null,E(F,k,""+ft,It);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return k=k.get(ft.key===null?K:ft.key)||null,N(F,k,ft,It);case y:return k=k.get(ft.key===null?K:ft.key)||null,J(F,k,ft,It);case Z:var ce=ft._init;return ft=ce(ft._payload),nt(k,F,K,ft,It)}if(ht(ft)||lt(ft))return k=k.get(K)||null,ut(F,k,ft,It,null);if(typeof ft.then=="function")return nt(k,F,K,ll(ft),It);if(ft.$$typeof===O)return nt(k,F,K,jo(F,ft),It);ul(F,ft)}return null}function $t(k,F,K,ft){for(var It=null,ce=null,Gt=F,Kt=F=0,pn=null;Gt!==null&&Kt<K.length;Kt++){Gt.index>Kt?(pn=Gt,Gt=null):pn=Gt.sibling;var ye=et(k,Gt,K[Kt],ft);if(ye===null){Gt===null&&(Gt=pn);break}t&&Gt&&ye.alternate===null&&n(k,Gt),F=f(ye,F,Kt),ce===null?It=ye:ce.sibling=ye,ce=ye,Gt=pn}if(Kt===K.length)return a(k,Gt),Te&&Ya(k,Kt),It;if(Gt===null){for(;Kt<K.length;Kt++)Gt=gt(k,K[Kt],ft),Gt!==null&&(F=f(Gt,F,Kt),ce===null?It=Gt:ce.sibling=Gt,ce=Gt);return Te&&Ya(k,Kt),It}for(Gt=s(Gt);Kt<K.length;Kt++)pn=nt(Gt,k,Kt,K[Kt],ft),pn!==null&&(t&&pn.alternate!==null&&Gt.delete(pn.key===null?Kt:pn.key),F=f(pn,F,Kt),ce===null?It=pn:ce.sibling=pn,ce=pn);return t&&Gt.forEach(function(Aa){return n(k,Aa)}),Te&&Ya(k,Kt),It}function Yt(k,F,K,ft){if(K==null)throw Error(r(151));for(var It=null,ce=null,Gt=F,Kt=F=0,pn=null,ye=K.next();Gt!==null&&!ye.done;Kt++,ye=K.next()){Gt.index>Kt?(pn=Gt,Gt=null):pn=Gt.sibling;var Aa=et(k,Gt,ye.value,ft);if(Aa===null){Gt===null&&(Gt=pn);break}t&&Gt&&Aa.alternate===null&&n(k,Gt),F=f(Aa,F,Kt),ce===null?It=Aa:ce.sibling=Aa,ce=Aa,Gt=pn}if(ye.done)return a(k,Gt),Te&&Ya(k,Kt),It;if(Gt===null){for(;!ye.done;Kt++,ye=K.next())ye=gt(k,ye.value,ft),ye!==null&&(F=f(ye,F,Kt),ce===null?It=ye:ce.sibling=ye,ce=ye);return Te&&Ya(k,Kt),It}for(Gt=s(Gt);!ye.done;Kt++,ye=K.next())ye=nt(Gt,k,Kt,ye.value,ft),ye!==null&&(t&&ye.alternate!==null&&Gt.delete(ye.key===null?Kt:ye.key),F=f(ye,F,Kt),ce===null?It=ye:ce.sibling=ye,ce=ye);return t&&Gt.forEach(function(hS){return n(k,hS)}),Te&&Ya(k,Kt),It}function Le(k,F,K,ft){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var It=K.key;F!==null;){if(F.key===It){if(It=K.type,It===A){if(F.tag===7){a(k,F.sibling),ft=u(F,K.props.children),ft.return=k,k=ft;break t}}else if(F.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===Z&&Gp(It)===F.type){a(k,F.sibling),ft=u(F,K.props),Ys(ft,K),ft.return=k,k=ft;break t}a(k,F);break}else n(k,F);F=F.sibling}K.type===A?(ft=Wa(K.props.children,k.mode,ft,K.key),ft.return=k,k=ft):(ft=Wo(K.type,K.key,K.props,null,k.mode,ft),Ys(ft,K),ft.return=k,k=ft)}return S(k);case y:t:{for(It=K.key;F!==null;){if(F.key===It)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(k,F.sibling),ft=u(F,K.children||[]),ft.return=k,k=ft;break t}else{a(k,F);break}else n(k,F);F=F.sibling}ft=Wu(K,k.mode,ft),ft.return=k,k=ft}return S(k);case Z:return It=K._init,K=It(K._payload),Le(k,F,K,ft)}if(ht(K))return $t(k,F,K,ft);if(lt(K)){if(It=lt(K),typeof It!="function")throw Error(r(150));return K=It.call(K),Yt(k,F,K,ft)}if(typeof K.then=="function")return Le(k,F,ll(K),ft);if(K.$$typeof===O)return Le(k,F,jo(k,K),ft);ul(k,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(k,F.sibling),ft=u(F,K),ft.return=k,k=ft):(a(k,F),ft=ku(K,k.mode,ft),ft.return=k,k=ft),S(k)):a(k,F)}return function(k,F,K,ft){try{qs=0;var It=Le(k,F,K,ft);return Br=null,It}catch(Gt){if(Gt===zs||Gt===Qo)throw Gt;var ce=Gn(29,Gt,null,k.mode);return ce.lanes=ft,ce.return=k,ce}finally{}}}var zr=Vp(!0),Xp=Vp(!1),$n=$(null),gi=null;function fa(t){var n=t.alternate;xt(on,on.current&1),xt($n,t),gi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(gi=t)}function kp(t){if(t.tag===22){if(xt(on,on.current),xt($n,t),gi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(gi=t)}}else ha()}function ha(){xt(on,on.current),xt($n,$n.current)}function Bi(t){vt($n),gi===t&&(gi=null),vt(on)}var on=$(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||pf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Tc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var bc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=la(s);u.payload=n,a!=null&&(u.callback=a),n=ua(t,u,s),n!==null&&(qn(n,t,s),Fs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=la(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ua(t,u,s),n!==null&&(qn(n,t,s),Fs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=la(a);s.tag=2,n!=null&&(s.callback=n),n=ua(t,s,a),n!==null&&(qn(n,t,a),Fs(n,t,a))}};function Wp(t,n,a,s,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(u,f):!0}function qp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&bc.enqueueReplaceState(n,n.state,null)}function tr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Yp(t){fl(t)}function Zp(t){console.error(t)}function jp(t){fl(t)}function hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Kp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ac(t,n,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,n)},a}function Qp(t){return t=la(t),t.tag=3,t}function Jp(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Kp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Kp(n,a,s),typeof u!="function"&&(va===null?va=new Set([this]):va.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function h0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 13:return gi===null?Kc():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Jc(t,s,u)),!1;case 22:return a.flags|=65536,s===ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Jc(t,s,u)),!1}throw Error(r(435,a.tag))}return Jc(t,s,u),Kc(),!1}if(Te)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Zu&&(t=Error(r(422),{cause:s}),Ns(jn(t,a)))):(s!==Zu&&(n=Error(r(423),{cause:s}),Ns(jn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=jn(s,a),u=Ac(t.stateNode,s,u),ac(t,u),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=jn(f,a),to===null?to=[f]:to.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ac(a.stateNode,s,t),ac(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(va===null||!va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qp(u),Jp(u,t,a,s),ac(a,u),!1}a=a.return}while(a!==null);return!1}var $p=Error(r(461)),hn=!1;function vn(t,n,a,s){n.child=t===null?Xp(n,null,a,s):zr(n,t.child,a,s)}function tm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var E in s)E!=="ref"&&(S[E]=s[E])}else S=s;return Qa(n),s=uc(t,n,a,S,f,u),E=cc(),t!==null&&!hn?(fc(t,n,u),zi(t,n,u)):(Te&&E&&qu(n),n.flags|=1,vn(t,n,s,u),n.child)}function em(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,nm(t,n,f,s,u)):(t=Wo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Oc(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(S,s)&&t.ref===n.ref)return zi(t,n,u)}return n.flags|=1,t=Di(f,s),t.ref=n.ref,t.return=n,n.child=t}function nm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Oc(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,zi(t,n,u)}return Rc(t,n,a,s,u)}function im(t,n,a){var s=n.pendingProps,u=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return am(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(n,f!==null?f.cachePool:null),f!==null?np(n,f):sc(),kp(n);else return n.lanes=n.childLanes=536870912,am(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ko(n,f.cachePool),np(n,f),ha(),n.memoizedState=null):(t!==null&&Ko(n,null),sc(),ha());return vn(t,n,u,a),n.child}function am(t,n,a,s){var u=tc();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Ko(n,null),sc(),kp(n),t!==null&&Os(t,n,s,!0),null}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rc(t,n,a,s,u){return Qa(n),a=uc(t,n,a,s,void 0,u),s=cc(),t!==null&&!hn?(fc(t,n,u),zi(t,n,u)):(Te&&s&&qu(n),n.flags|=1,vn(t,n,a,u),n.child)}function rm(t,n,a,s,u,f){return Qa(n),n.updateQueue=null,a=ap(n,s,a,u),ip(t),s=cc(),t!==null&&!hn?(fc(t,n,f),zi(t,n,f)):(Te&&s&&qu(n),n.flags|=1,vn(t,n,a,f),n.child)}function sm(t,n,a,s,u){if(Qa(n),n.stateNode===null){var f=Rr,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},nc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):Rr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Tc(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&bc.enqueueReplaceState(f,f.state,null),Gs(n,s,f,u),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,N=tr(a,E);f.props=N;var J=f.context,ut=a.contextType;S=Rr,typeof ut=="object"&&ut!==null&&(S=En(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==S)&&qp(n,f,s,S),oa=!1;var et=n.memoizedState;f.state=et,Gs(n,s,f,u),Hs(),J=n.memoizedState,E||et!==J||oa?(typeof gt=="function"&&(Tc(n,a,gt,s),J=n.memoizedState),(N=oa||Wp(n,a,N,s,et,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ic(t,n),S=n.memoizedProps,ut=tr(a,S),f.props=ut,gt=n.pendingProps,et=f.context,J=a.contextType,N=Rr,typeof J=="object"&&J!==null&&(N=En(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||et!==N)&&qp(n,f,s,N),oa=!1,et=n.memoizedState,f.state=et,Gs(n,s,f,u),Hs();var nt=n.memoizedState;S!==gt||et!==nt||oa||t!==null&&t.dependencies!==null&&Zo(t.dependencies)?(typeof E=="function"&&(Tc(n,a,E,s),nt=n.memoizedState),(ut=oa||Wp(n,a,ut,s,et,nt,N)||t!==null&&t.dependencies!==null&&Zo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=N,s=ut):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=zr(n,t.child,null,u),n.child=zr(n,null,a,u)):vn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=zi(t,n,u),t}function om(t,n,a,s){return Ls(),n.flags|=256,vn(t,n,a,s),n.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(t){return{baseLanes:t,cachePool:Zd()}}function Dc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function lm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(u?fa(n):ha(),Te){var E=qe,N;if(N=E){t:{for(N=E,E=mi;N.nodeType!==8;){if(!E){E=null;break t}if(N=oi(N.nextSibling),N===null){E=null;break t}}E=N}E!==null?(n.memoizedState={dehydrated:E,treeContext:qa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},N=Gn(18,null,null,0),N.stateNode=E,N.return=n,n.child=N,Rn=n,qe=null,N=!0):N=!1}N||ja(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return pf(E)?n.lanes=32:n.lanes=536870912,null;Bi(n)}return E=s.children,s=s.fallback,u?(ha(),u=n.mode,E=pl({mode:"hidden",children:E},u),s=Wa(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,u=n.child,u.memoizedState=wc(a),u.childLanes=Dc(t,S,a),n.memoizedState=Cc,s):(fa(n),Uc(n,E))}if(N=t.memoizedState,N!==null&&(E=N.dehydrated,E!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=Lc(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),u=s.fallback,E=n.mode,s=pl({mode:"visible",children:s.children},E),u=Wa(u,E,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,zr(n,t.child,null,a),s=n.child,s.memoizedState=wc(a),s.childLanes=Dc(t,S,a),n.memoizedState=Cc,n=u);else if(fa(n),pf(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Ns({value:s,source:null,stack:null}),n=Lc(t,n,a)}else if(hn||Os(t,n,a,!1),S=(a&t.childLanes)!==0,hn||S){if(S=Ge,S!==null&&(s=a&-a,s=(s&42)!==0?1:Fe(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Ar(t,s),qn(S,t,s),$p;E.data==="$?"||Kc(),n=Lc(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=N.treeContext,qe=oi(E.nextSibling),Rn=n,Te=!0,Za=null,mi=!1,t!==null&&(Qn[Jn++]=Ui,Qn[Jn++]=Li,Qn[Jn++]=qa,Ui=t.id,Li=t.overflow,qa=n),n=Uc(n,s.children),n.flags|=4096);return n}return u?(ha(),u=s.fallback,E=n.mode,N=t.child,J=N.sibling,s=Di(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,J!==null?u=Di(J,u):(u=Wa(u,E,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,E=t.child.memoizedState,E===null?E=wc(a):(N=E.cachePool,N!==null?(J=sn._currentValue,N=N.parent!==J?{parent:J,pool:J}:N):N=Zd(),E={baseLanes:E.baseLanes|a,cachePool:N}),u.memoizedState=E,u.childLanes=Dc(t,S,a),n.memoizedState=Cc,s):(fa(n),a=t.child,t=a.sibling,a=Di(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Uc(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Lc(t,n,a){return zr(n,t.child,null,a),t=Uc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function um(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ku(t.return,n,a)}function Nc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function cm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(vn(t,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,a,n);else if(t.tag===19)um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(xt(on,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nc(n,!0,a,null,f);break;case"together":Nc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),_a|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Di(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Di(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Oc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zo(t)))}function d0(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),sa(n,sn,t.memoizedState.cache),Ls();break;case 27:case 5:Zt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:sa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lm(t,n,a):(fa(n),t=zi(t,n,a),t!==null?t.sibling:null);fa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return cm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,im(t,n,a);case 24:sa(n,sn,t.memoizedState.cache)}return zi(t,n,a)}function fm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Oc(t,a)&&(n.flags&128)===0)return hn=!1,d0(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,Te&&(n.flags&1048576)!==0&&Gd(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=tr(s,t),n.tag=1,n=sm(null,n,s,t,a)):(n.tag=0,n=Rc(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===L){n.tag=11,n=tm(null,n,s,t,a);break t}else if(u===I){n.tag=14,n=em(null,n,s,t,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return Rc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=tr(s,n.pendingProps),sm(t,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ic(t,n),Gs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,sa(n,sn,s),s!==f.cache&&Qu(n,[sn],a,!0),Hs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=om(t,n,s,a);break t}else if(s!==u){u=jn(Error(r(424)),n),Ns(u),n=om(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=oi(t.firstChild),Rn=n,Te=!0,Za=null,mi=!0,a=Xp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),s===u){n=zi(t,n,a);break t}vn(t,n,s,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=Cl(St.current).createElement(a),s[an]=n,s[gn]=t,xn(s,a,t),Je(s),n.stateNode=s):n.memoizedState=mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Te&&(s=n.stateNode=hg(n.type,n.pendingProps,St.current),Rn=n,mi=!0,u=qe,Ma(n.type)?(mf=u,qe=oi(s.firstChild)):qe=u),vn(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((u=s=qe)&&(s=G0(s,n.type,n.pendingProps,mi),s!==null?(n.stateNode=s,Rn=n,qe=oi(s.firstChild),mi=!1,u=!0):u=!1),u||ja(n)),Zt(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,ff(u,f)?s=null:S!==null&&ff(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=uc(t,n,r0,null,null,a),uo._currentValue=u),dl(t,n),vn(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=qe)&&(a=V0(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Rn=n,qe=null,t=!0):t=!1),t||ja(n)),null;case 13:return lm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zr(n,null,s,a):vn(t,n,s,a),n.child;case 11:return tm(t,n,n.type,n.pendingProps,a);case 7:return vn(t,n,n.pendingProps,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,sa(n,n.type,s.value),vn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Qa(n),u=En(u),s=s(u),n.flags|=1,vn(t,n,s,a),n.child;case 14:return em(t,n,n.type,n.pendingProps,a);case 15:return nm(t,n,n.type,n.pendingProps,a);case 19:return cm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=pl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Di(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return im(t,n,a);case 24:return Qa(n),s=En(sn),t===null?(u=tc(),u===null&&(u=Ge,f=Ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},nc(n),sa(n,sn,u)):((t.lanes&a)!==0&&(ic(t,n),Gs(n,null,null,a),Hs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),sa(n,sn,s)):(s=f.cache,sa(n,sn,s),s!==u.cache&&Qu(n,[sn],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ii(t){t.flags|=4}function hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xg(n)){if(n=$n.current,n!==null&&((ve&4194048)===ve?gi!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==gi))throw Is=ec,jd;t.flags|=8192}}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ut():536870912,t.lanes|=n,Gr|=n)}function Zs(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function p0(t,n,a){var s=n.pendingProps;switch(Yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(sn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kd())),ke(n),null;case 26:return a=n.memoizedState,t===null?(Ii(n),a!==null?(ke(n),hm(n,a)):(ke(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ii(n),ke(n),hm(n,a)):(ke(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ii(n),ke(n),n.flags&=-16777217),null;case 27:Ie(n),a=St.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}t=Q.current,Us(n)?Vd(n):(t=hg(u,s,a),n.stateNode=t,Ii(n))}return ke(n),null;case 5:if(Ie(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(t=Q.current,Us(n))Vd(n);else{switch(u=Cl(St.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[an]=n,t[gn]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(xn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ii(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||rg(t.nodeValue,a)),t||ja(n)}else t=Cl(t).createTextNode(s),t[an]=n,n.stateNode=t}return ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=kd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),ke(n),null;case 4:return re(),t===null&&sf(n.stateNode.containerInfo),ke(n),null;case 10:return Oi(n.type),ke(n),null;case 19:if(vt(on),u=n.memoizedState,u===null)return ke(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Zs(u,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,Zs(u,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hd(a,t),a=a.sibling;return xt(on,on.current&1|2),n.child}t=t.sibling}u.tail!==null&&ee()>vl&&(n.flags|=128,s=!0,Zs(u,!1),n.lanes=4194304)}else{if(!s)if(t=cl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),Zs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Te)return ke(n),null}else 2*ee()-u.renderingStartTime>vl&&a!==536870912&&(n.flags|=128,s=!0,Zs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ee(),n.sibling=null,t=on.current,xt(on,s?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return Bi(n),oc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(sn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function m0(t,n){switch(Yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oi(sn),re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(on),null;case 4:return re(),null;case 10:return Oi(n.type),null;case 22:case 23:return Bi(n),oc(),t!==null&&vt(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oi(sn),null;case 25:return null;default:return null}}function dm(t,n){switch(Yu(n),n.tag){case 3:Oi(sn),re();break;case 26:case 27:case 5:Ie(n);break;case 4:re();break;case 13:Bi(n);break;case 19:vt(on);break;case 10:Oi(n.type);break;case 22:case 23:Bi(n),oc(),t!==null&&vt(Ja);break;case 24:Oi(sn)}}function js(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(E){Be(n,n.return,E)}}function da(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var S=s.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,u=n;var N=a,J=E;try{J()}catch(ut){Be(u,N,ut)}}}s=s.next}while(s!==f)}}catch(ut){Be(n,n.return,ut)}}function pm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ep(n,a)}catch(s){Be(t,t.return,s)}}}function mm(t,n,a){a.props=tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Be(t,n,u)}}function _i(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function gm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function Pc(t,n,a){try{var s=t.stateNode;B0(s,t.type,a,n),s[gn]=n}catch(u){Be(t,t.return,u)}}function _m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ma(t.type)||t.tag===4}function Bc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Rl));else if(s!==4&&(s===27&&Ma(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zc(t,n,a),t=t.sibling;t!==null;)zc(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ma(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function vm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xn(n,s,a),n[an]=t,n[gn]=a}catch(f){Be(t,t.return,f)}}var Fi=!1,je=!1,Ic=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function g0(t,n){if(t=t.containerInfo,uf=Ol,t=Dd(t),Bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,E=-1,N=-1,J=0,ut=0,gt=t,et=null;e:for(;;){for(var nt;gt!==a||u!==0&&gt.nodeType!==3||(E=S+u),gt!==f||s!==0&&gt.nodeType!==3||(N=S+s),gt.nodeType===3&&(S+=gt.nodeValue.length),(nt=gt.firstChild)!==null;)et=gt,gt=nt;for(;;){if(gt===t)break e;if(et===a&&++J===u&&(E=S),et===f&&++ut===s&&(N=S),(nt=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=nt}a=E===-1||N===-1?null:{start:E,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(cf={focusedElem:t,selectionRange:a},Ol=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var $t=tr(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate($t,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Be(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)df(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function xm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:pa(t,a),s&4&&js(5,a);break;case 1:if(pa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Be(a,a.return,S)}else{var u=tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(a,a.return,S)}}s&64&&pm(a),s&512&&Ks(a,a.return);break;case 3:if(pa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ep(t,n)}catch(S){Be(a,a.return,S)}}break;case 27:n===null&&s&4&&vm(a);case 26:case 5:pa(t,a),n===null&&s&4&&gm(a),s&512&&Ks(a,a.return);break;case 12:pa(t,a);break;case 13:pa(t,a),s&4&&Em(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=b0.bind(null,a),X0(t,a))));break;case 22:if(s=a.memoizedState!==null||Fi,!s){n=n!==null&&n.memoizedState!==null||je,u=Fi;var f=je;Fi=s,(je=n)&&!f?ma(t,a,(a.subtreeFlags&8772)!==0):pa(t,a),Fi=u,je=f}break;case 30:break;default:pa(t,a)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&na(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ve=null,On=!1;function Hi(t,n,a){for(a=a.child;a!==null;)ym(t,n,a),a=a.sibling}function ym(t,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:je||_i(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||_i(a,n);var s=Ve,u=On;Ma(a.type)&&(Ve=a.stateNode,On=!1),Hi(t,n,a),ro(a.stateNode),Ve=s,On=u;break;case 5:je||_i(a,n);case 6:if(s=Ve,u=On,Ve=null,Hi(t,n,a),Ve=s,On=u,Ve!==null)if(On)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ve!==null&&(On?(t=Ve,cg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):cg(Ve,a.stateNode));break;case 4:s=Ve,u=On,Ve=a.stateNode.containerInfo,On=!0,Hi(t,n,a),Ve=s,On=u;break;case 0:case 11:case 14:case 15:je||da(2,a,n),je||da(4,a,n),Hi(t,n,a);break;case 1:je||(_i(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&mm(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:je=(s=je)||a.memoizedState!==null,Hi(t,n,a),je=s;break;default:Hi(t,n,a)}}function Em(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){Be(n,n.return,a)}}function _0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Sm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Sm),n;default:throw Error(r(435,t.tag))}}function Fc(t,n){var a=_0(t);n.forEach(function(s){var u=A0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,S=n,E=S;t:for(;E!==null;){switch(E.tag){case 27:if(Ma(E.type)){Ve=E.stateNode,On=!1;break t}break;case 5:Ve=E.stateNode,On=!1;break t;case 3:case 4:Ve=E.stateNode.containerInfo,On=!0;break t}E=E.return}if(Ve===null)throw Error(r(160));ym(f,S,u),Ve=null,On=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Tm(n,t),n=n.sibling}var si=null;function Tm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),Xn(t),s&4&&(da(3,t,t.return),js(3,t),da(5,t,t.return));break;case 1:Vn(n,t),Xn(t),s&512&&(je||a===null||_i(a,a.return)),s&64&&Fi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=si;if(Vn(n,t),Xn(t),s&512&&(je||a===null||_i(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ea]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),xn(f,s,a),f[an]=t,Je(f),s=f;break t;case"link":var S=vg("link","href",u).get(s+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(f=S[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=vg("meta","content",u).get(s+(a.content||""))){for(E=0;E<S.length;E++)if(f=S[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,Je(f),s=f}t.stateNode=s}else Sg(u,t.type,t.stateNode);else t.stateNode=_g(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Sg(u,t.type,t.stateNode):_g(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Pc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),Xn(t),s&512&&(je||a===null||_i(a,a.return)),a!==null&&s&4&&Pc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),Xn(t),s&512&&(je||a===null||_i(a,a.return)),t.flags&32){u=t.stateNode;try{pi(u,"")}catch(nt){Be(t,t.return,nt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Pc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Ic=!0);break;case 6:if(Vn(n,t),Xn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(nt){Be(t,t.return,nt)}}break;case 3:if(Ul=null,u=si,si=wl(n.containerInfo),Vn(n,t),si=u,Xn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(nt){Be(t,t.return,nt)}Ic&&(Ic=!1,bm(t));break;case 4:s=si,si=wl(t.stateNode.containerInfo),Vn(n,t),Xn(t),si=s;break;case 12:Vn(n,t),Xn(t);break;case 13:Vn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=ee()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fc(t,s)));break;case 22:u=t.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,J=Fi,ut=je;if(Fi=J||u,je=ut||N,Vn(n,t),je=ut,Fi=J,Xn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||N||Fi||je||er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=N.stateNode;var gt=N.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Be(N,N.return,nt)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(nt){Be(N,N.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Fc(t,a))));break;case 19:Vn(n,t),Xn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fc(t,s)));break;case 30:break;case 21:break;default:Vn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_m(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Bc(t);gl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(pi(S,""),a.flags&=-33);var E=Bc(t);gl(t,E,S);break;case 3:case 4:var N=a.stateNode.containerInfo,J=Bc(t);zc(t,J,N);break;default:throw Error(r(161))}}catch(ut){Be(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function pa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xm(t,n.alternate,n),n=n.sibling}function er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),er(n);break;case 1:_i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mm(n,n.return,a),er(n);break;case 27:ro(n.stateNode);case 26:case 5:_i(n,n.return),er(n);break;case 22:n.memoizedState===null&&er(n);break;case 30:er(n);break;default:er(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ma(u,f,a),js(4,f);break;case 1:if(ma(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Be(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)tp(N[u],E)}catch(J){Be(s,s.return,J)}}a&&S&64&&pm(f),Ks(f,f.return);break;case 27:vm(f);case 26:case 5:ma(u,f,a),a&&s===null&&S&4&&gm(f),Ks(f,f.return);break;case 12:ma(u,f,a);break;case 13:ma(u,f,a),a&&S&4&&Em(u,f);break;case 22:f.memoizedState===null&&ma(u,f,a),Ks(f,f.return);break;case 30:break;default:ma(u,f,a)}n=n.sibling}}function Hc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function Gc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Am(t,n,a,s),n=n.sibling}function Am(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&js(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(u&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,E=f.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Be(n,n.return,N)}}else vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):Qs(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,Ir(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Hc(S,n);break;case 24:vi(t,n,a,s),u&2048&&Gc(n.alternate,n);break;default:vi(t,n,a,s)}}function Ir(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,E=a,N=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(f,S,E,N,u),js(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Ir(f,S,E,N,u):Qs(f,S):(ut._visibility|=2,Ir(f,S,E,N,u)),u&&J&2048&&Hc(S.alternate,S);break;case 24:Ir(f,S,E,N,u),u&&J&2048&&Gc(S.alternate,S);break;default:Ir(f,S,E,N,u)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Qs(a,s),u&2048&&Hc(s.alternate,s);break;case 24:Qs(a,s),u&2048&&Gc(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function Fr(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Rm(t),t=t.sibling}function Rm(t){switch(t.tag){case 26:Fr(t),t.flags&Js&&t.memoizedState!==null&&nS(si,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=si;si=wl(t.stateNode.containerInfo),Fr(t),si=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Fr(t),Js=n):Fr(t));break;default:Fr(t)}}function Cm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Dm(s,t)}Cm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(t),t=t.sibling}function wm(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&da(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_l(t)):$s(t);break;default:$s(t)}}function _l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Dm(s,t)}Cm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:da(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_l(n));break;default:_l(n)}t=t.sibling}}function Dm(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=t;dn!==null;){s=dn;var u=s.sibling,f=s.return;if(Mm(s),s===a){dn=null;break t}if(u!==null){u.return=f,dn=u;break t}dn=f}}}var v0={getCacheForType:function(t){var n=En(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},S0=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ge=null,he=null,ve=0,Re=0,kn=null,ga=!1,Hr=!1,Vc=!1,Gi=0,Ye=0,_a=0,nr=0,Xc=0,ti=0,Gr=0,to=null,Pn=null,kc=!1,Wc=0,vl=1/0,Sl=null,va=null,Sn=0,Sa=null,Vr=null,Xr=0,qc=0,Yc=null,Um=null,eo=0,Zc=null;function Wn(){if((Ae&2)!==0&&ve!==0)return ve&-ve;if(P.T!==null){var t=Dr;return t!==0?t:ef()}return xe()}function Lm(){ti===0&&(ti=(ve&536870912)===0||Te?X():536870912);var t=$n.current;return t!==null&&(t.flags|=32),ti}function qn(t,n,a){(t===Ge&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(kr(t,0),xa(t,ve,ti,!1)),mt(t,a),((Ae&2)===0||t!==Ge)&&(t===Ge&&((Ae&2)===0&&(nr|=a),Ye===4&&xa(t,ve,ti,!1)),Si(t))}function Nm(t,n,a){if((Ae&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||te(t,n),u=s?y0(t,n):Qc(t,n,!0),f=s;do{if(u===0){Hr&&!s&&xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!x0(a)){u=Qc(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var E=t;u=to;var N=E.current.memoizedState.isDehydrated;if(N&&(kr(E,S).flags|=256),S=Qc(E,S,!1),S!==2){if(Vc&&!N){E.errorRecoveryDisabledLanes|=f,nr|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){kr(t,0),xa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:xa(s,n,ti,!ga);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wc+300-ee(),10<u)){if(xa(s,n,ti,!ga),oe(s,0,!0)!==0)break t;s.timeoutHandle=lg(Om.bind(null,s,a,Pn,Sl,kc,n,ti,nr,Gr,ga,f,2,-0,0),u);break t}Om(s,a,Pn,Sl,kc,n,ti,nr,Gr,ga,f,0,-0,0)}}break}while(!0);Si(t)}function Om(t,n,a,s,u,f,S,E,N,J,ut,gt,et,nt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:eS},Rm(n),gt=iS(),gt!==null)){t.cancelPendingCommit=gt(Gm.bind(null,t,n,f,a,s,u,S,E,N,ut,1,et,nt)),xa(t,f,S,!J);return}Gm(t,n,f,a,s,u,S,E,N)}function x0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Hn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(t,n,a,s){n&=~Xc,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&Lt(t,a,n)}function xl(){return(Ae&6)===0?(no(0),!1):!0}function jc(){if(he!==null){if(Re===0)var t=he.return;else t=he,Ni=Ka=null,hc(t),Br=null,qs=0,t=he;for(;t!==null;)dm(t.alternate,t),t=t.return;he=null}}function kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,I0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),jc(),Ge=t,he=a=Di(t.current,null),ve=n,Re=0,kn=null,ga=!1,Hr=te(t,n),Vc=!1,Gr=ti=Xc=nr=_a=Ye=0,Pn=to=null,kc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ft(s),f=1<<u;n|=t[u],s&=~f}return Gi=n,Vo(),a}function Pm(t,n){le=null,P.H=ol,n===zs||n===Qo?(n=Jd(),Re=3):n===jd?(n=Jd(),Re=4):Re=n===$p?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,he===null&&(Ye=1,hl(t,jn(n,t.current)))}function Bm(){var t=P.H;return P.H=ol,t===null?ol:t}function zm(){var t=P.A;return P.A=v0,t}function Kc(){Ye=4,ga||(ve&4194048)!==ve&&$n.current!==null||(Hr=!0),(_a&134217727)===0&&(nr&134217727)===0||Ge===null||xa(Ge,ve,ti,!1)}function Qc(t,n,a){var s=Ae;Ae|=2;var u=Bm(),f=zm();(Ge!==t||ve!==n)&&(Sl=null,kr(t,n)),n=!1;var S=Ye;t:do try{if(Re!==0&&he!==null){var E=he,N=kn;switch(Re){case 8:jc(),S=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var J=Re;if(Re=0,kn=null,Wr(t,E,N,J),a&&Hr){S=0;break t}break;default:J=Re,Re=0,kn=null,Wr(t,E,N,J)}}M0(),S=Ye;break}catch(ut){Pm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Ni=Ka=null,Ae=s,P.H=u,P.A=f,he===null&&(Ge=null,ve=0,Vo()),S}function M0(){for(;he!==null;)Im(he)}function y0(t,n){var a=Ae;Ae|=2;var s=Bm(),u=zm();Ge!==t||ve!==n?(Sl=null,vl=ee()+500,kr(t,n)):Hr=te(t,n);t:do try{if(Re!==0&&he!==null){n=he;var f=kn;e:switch(Re){case 1:Re=0,kn=null,Wr(t,n,f,1);break;case 2:case 9:if(Kd(f)){Re=0,kn=null,Fm(n);break}n=function(){Re!==2&&Re!==9||Ge!==t||(Re=7),Si(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Kd(f)?(Re=0,kn=null,Fm(n)):(Re=0,kn=null,Wr(t,n,f,7));break;case 5:var S=null;switch(he.tag){case 26:S=he.memoizedState;case 5:case 27:var E=he;if(!S||xg(S)){Re=0,kn=null;var N=E.sibling;if(N!==null)he=N;else{var J=E.return;J!==null?(he=J,Ml(J)):he=null}break e}}Re=0,kn=null,Wr(t,n,f,5);break;case 6:Re=0,kn=null,Wr(t,n,f,6);break;case 8:jc(),Ye=6;break t;default:throw Error(r(462))}}E0();break}catch(ut){Pm(t,ut)}while(!0);return Ni=Ka=null,P.H=s,P.A=u,Ae=a,he!==null?0:(Ge=null,ve=0,Vo(),Ye)}function E0(){for(;he!==null&&!Dn();)Im(he)}function Im(t){var n=fm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?Ml(t):he=n}function Fm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=rm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=rm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:hc(n);default:dm(a,n),n=he=Hd(n,Gi),n=fm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?Ml(t):he=n}function Wr(t,n,a,s){Ni=Ka=null,hc(n),Br=null,qs=0;var u=n.return;try{if(h0(t,u,n,a,ve)){Ye=1,hl(t,jn(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;Ye=1,hl(t,jn(a,t.current)),he=null;return}n.flags&32768?(Te||s===1?t=!0:Hr||(ve&536870912)!==0?t=!1:(ga=t=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Hm(n,t)):Ml(n)}function Ml(t){var n=t;do{if((n.flags&32768)!==0){Hm(n,ga);return}t=n.return;var a=p0(n.alternate,n,Gi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ye===0&&(Ye=5)}function Hm(t,n){do{var a=m0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ye=6,he=null}function Gm(t,n,a,s,u,f,S,E,N){t.cancelPendingCommit=null;do yl();while(Sn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Gu,Pt(t,a,f,S,E,N),t===Ge&&(he=Ge=null,ve=0),Vr=n,Sa=t,Xr=a,qc=f,Yc=u,Um=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,R0(D,function(){return qm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=j.p,j.p=2,S=Ae,Ae|=4;try{g0(t,n,a)}finally{Ae=S,j.p=u,P.T=s}}Sn=1,Vm(),Xm(),km()}}function Vm(){if(Sn===1){Sn=0;var t=Sa,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=Ae;Ae|=4;try{Tm(n,t);var f=cf,S=Dd(t.containerInfo),E=f.focusedElem,N=f.selectionRange;if(S!==E&&E&&E.ownerDocument&&wd(E.ownerDocument.documentElement,E)){if(N!==null&&Bu(E)){var J=N.start,ut=N.end;if(ut===void 0&&(ut=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ut,E.value.length);else{var gt=E.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),$t=E.textContent.length,Yt=Math.min(N.start,$t),Le=N.end===void 0?Yt:Math.min(N.end,$t);!nt.extend&&Yt>Le&&(S=Le,Le=Yt,Yt=S);var k=Cd(E,Yt),F=Cd(E,Le);if(k&&F&&(nt.rangeCount!==1||nt.anchorNode!==k.node||nt.anchorOffset!==k.offset||nt.focusNode!==F.node||nt.focusOffset!==F.offset)){var K=gt.createRange();K.setStart(k.node,k.offset),nt.removeAllRanges(),Yt>Le?(nt.addRange(K),nt.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),nt.addRange(K))}}}}for(gt=[],nt=E;nt=nt.parentNode;)nt.nodeType===1&&gt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var ft=gt[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Ol=!!uf,cf=uf=null}finally{Ae=u,j.p=s,P.T=a}}t.current=n,Sn=2}}function Xm(){if(Sn===2){Sn=0;var t=Sa,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=Ae;Ae|=4;try{xm(t,n.alternate,n)}finally{Ae=u,j.p=s,P.T=a}}Sn=3}}function km(){if(Sn===4||Sn===3){Sn=0,pe();var t=Sa,n=Vr,a=Xr,s=Um;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Vr=Sa=null,Wm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(va=null),Qe(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var E=s[S];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=u}}(Xr&3)!==0&&yl(),Si(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Zc?eo++:(eo=0,Zc=t):eo=0,no(0)}}function Wm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function yl(t){return Vm(),Xm(),km(),qm()}function qm(){if(Sn!==5)return!1;var t=Sa,n=qc;qc=0;var a=Qe(Xr),s=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=Yc,Yc=null;var f=Sa,S=Xr;if(Sn=0,Vr=Sa=null,Xr=0,(Ae&6)!==0)throw Error(r(331));var E=Ae;if(Ae|=4,wm(f.current),Am(f,f.current,S,a),Ae=E,no(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{j.p=u,P.T=s,Wm(t,n)}}function Ym(t,n,a){n=jn(a,n),n=Ac(t.stateNode,n,2),t=ua(t,n,2),t!==null&&(mt(t,2),Si(t))}function Be(t,n,a){if(t.tag===3)Ym(t,t,a);else for(;n!==null;){if(n.tag===3){Ym(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(va===null||!va.has(s))){t=jn(a,t),a=Qp(2),s=ua(n,a,2),s!==null&&(Jp(a,s,n,t),mt(s,2),Si(s));break}}n=n.return}}function Jc(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new S0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Vc=!0,u.add(a),t=T0.bind(null,t,n,a),n.then(t,t))}function T0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(ve&a)===a&&(Ye===4||Ye===3&&(ve&62914560)===ve&&300>ee()-Wc?(Ae&2)===0&&kr(t,0):Xc|=a,Gr===ve&&(Gr=0)),Si(t)}function Zm(t,n){n===0&&(n=Ut()),t=Ar(t,n),t!==null&&(mt(t,n),Si(t))}function b0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zm(t,a)}function A0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Zm(t,a)}function R0(t,n){return ue(t,n)}var El=null,qr=null,$c=!1,Tl=!1,tf=!1,ir=0;function Si(t){t!==qr&&t.next===null&&(qr===null?El=qr=t:qr=qr.next=t),Tl=!0,$c||($c=!0,w0())}function no(t,n){if(!tf&&Tl){tf=!0;do for(var a=!1,s=El;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ft(42|t)+1)-1,f&=u&~(S&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jm(s,f))}else f=ve,f=oe(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||te(s,f)||(a=!0,Jm(s,f));s=s.next}while(a);tf=!1}}function C0(){jm()}function jm(){Tl=$c=!1;var t=0;ir!==0&&(z0()&&(t=ir),ir=0);for(var n=ee(),a=null,s=El;s!==null;){var u=s.next,f=Km(s,n);f===0?(s.next=null,a===null?El=u:a.next=u,u===null&&(qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Tl=!0)),s=u}no(t)}function Km(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Ft(f),E=1<<S,N=u[S];N===-1?((E&a)===0||(E&s)!==0)&&(u[S]=we(E,n)):N<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ge,a=ve,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&z(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&z(s),Qe(a)){case 2:case 8:a=Ht;break;case 32:a=D;break;case 268435456:a=tt;break;default:a=D}return s=Qm.bind(null,t),a=ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&z(s),t.callbackPriority=2,t.callbackNode=null,2}function Qm(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(yl()&&t.callbackNode!==a)return null;var s=ve;return s=oe(t,t===Ge?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Nm(t,s,n),Km(t,ee()),t.callbackNode!=null&&t.callbackNode===a?Qm.bind(null,t):null)}function Jm(t,n){if(yl())return null;Nm(t,n,!0)}function w0(){F0(function(){(Ae&6)!==0?ue(Ce,C0):jm()})}function ef(){return ir===0&&(ir=X()),ir}function $m(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function tg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function D0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=$m((u[gn]||null).action),S=s.submitter;S&&(n=(n=S[gn]||null)?$m(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var E=new Fo("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ir!==0){var N=S?tg(u,S):new FormData(u);Mc(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(E.preventDefault(),N=S?tg(u,S):new FormData(u),Mc(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var nf=0;nf<Hu.length;nf++){var af=Hu[nf],U0=af.toLowerCase(),L0=af[0].toUpperCase()+af.slice(1);ri(U0,"on"+L0)}ri(Nd,"onAnimationEnd"),ri(Od,"onAnimationIteration"),ri(Pd,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(jv,"onTransitionRun"),ri(Kv,"onTransitionStart"),ri(Qv,"onTransitionCancel"),ri(Bd,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var E=s[S],N=E.instance,J=E.currentTarget;if(E=E.listener,N!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ut){fl(ut)}u.currentTarget=null,f=N}else for(S=0;S<s.length;S++){if(E=s[S],N=E.instance,J=E.currentTarget,E=E.listener,N!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ut){fl(ut)}u.currentTarget=null,f=N}}}}function de(t,n){var a=n[Fa];a===void 0&&(a=n[Fa]=new Set);var s=t+"__bubble";a.has(s)||(ng(n,t,2,!1),a.add(s))}function rf(t,n,a){var s=0;n&&(s|=4),ng(a,t,s,n)}var bl="_reactListening"+Math.random().toString(36).slice(2);function sf(t){if(!t[bl]){t[bl]=!0,No.forEach(function(a){a!=="selectionchange"&&(N0.has(a)||rf(a,!1,t),rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[bl]||(n[bl]=!0,rf("selectionchange",!1,n))}}function ng(t,n,a,s){switch(Ag(n)){case 2:var u=sS;break;case 8:u=oS;break;default:u=xf}a=u.bind(null,n,a,t),u=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function of(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var E=s.stateNode.containerInfo;if(E===u)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;E!==null;){if(S=Ti(E),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=f=S;continue t}E=E.parentNode}}s=s.return}ud(function(){var J=f,ut=bu(a),gt=[];t:{var et=zd.get(t);if(et!==void 0){var nt=Fo,$t=t;switch(t){case"keypress":if(zo(a)===0)break t;case"keydown":case"keyup":nt=Rv;break;case"focusin":$t="focus",nt=Uu;break;case"focusout":$t="blur",nt=Uu;break;case"beforeblur":case"afterblur":nt=Uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=Dv;break;case Nd:case Od:case Pd:nt=vv;break;case Bd:nt=Lv;break;case"scroll":case"scrollend":nt=dv;break;case"wheel":nt=Ov;break;case"copy":case"cut":case"paste":nt=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=pd;break;case"toggle":case"beforetoggle":nt=Bv}var Yt=(n&4)!==0,Le=!Yt&&(t==="scroll"||t==="scrollend"),k=Yt?et!==null?et+"Capture":null:et;Yt=[];for(var F=J,K;F!==null;){var ft=F;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||k===null||(ft=ys(F,k),ft!=null&&Yt.push(ao(F,ft,K))),Le)break;F=F.return}0<Yt.length&&(et=new nt(et,$t,null,a,ut),gt.push({event:et,listeners:Yt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",et&&a!==Tu&&($t=a.relatedTarget||a.fromElement)&&(Ti($t)||$t[Un]))break t;if((nt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,nt?($t=a.relatedTarget||a.toElement,nt=J,$t=$t?Ti($t):null,$t!==null&&(Le=c($t),Yt=$t.tag,$t!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&($t=null)):(nt=null,$t=J),nt!==$t)){if(Yt=hd,ft="onMouseLeave",k="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=pd,ft="onPointerLeave",k="onPointerEnter",F="pointer"),Le=nt==null?et:Ga(nt),K=$t==null?et:Ga($t),et=new Yt(ft,F+"leave",nt,a,ut),et.target=Le,et.relatedTarget=K,ft=null,Ti(ut)===J&&(Yt=new Yt(k,F+"enter",$t,a,ut),Yt.target=K,Yt.relatedTarget=Le,ft=Yt),Le=ft,nt&&$t)e:{for(Yt=nt,k=$t,F=0,K=Yt;K;K=Yr(K))F++;for(K=0,ft=k;ft;ft=Yr(ft))K++;for(;0<F-K;)Yt=Yr(Yt),F--;for(;0<K-F;)k=Yr(k),K--;for(;F--;){if(Yt===k||k!==null&&Yt===k.alternate)break e;Yt=Yr(Yt),k=Yr(k)}Yt=null}else Yt=null;nt!==null&&ig(gt,et,nt,Yt,!1),$t!==null&&Le!==null&&ig(gt,Le,$t,Yt,!0)}}t:{if(et=J?Ga(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var It=yd;else if(xd(et))if(Ed)It=qv;else{It=kv;var ce=Xv}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Eu(J.elementType)&&(It=yd):It=Wv;if(It&&(It=It(t,J))){Md(gt,It,a,ut);break t}ce&&ce(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&yn(et,"number",et.value)}switch(ce=J?Ga(J):window,t){case"focusin":(xd(ce)||ce.contentEditable==="true")&&(Er=ce,zu=J,Ds=null);break;case"focusout":Ds=zu=Er=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Ud(gt,a,ut);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":Ud(gt,a,ut)}var Gt;if(Nu)t:{switch(t){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else yr?vd(t,a)&&(Kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(md&&a.locale!=="ko"&&(yr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&yr&&(Gt=cd()):(ra=ut,Cu="value"in ra?ra.value:ra.textContent,yr=!0)),ce=Al(J,Kt),0<ce.length&&(Kt=new dd(Kt,t,null,a,ut),gt.push({event:Kt,listeners:ce}),Gt?Kt.data=Gt:(Gt=Sd(a),Gt!==null&&(Kt.data=Gt)))),(Gt=Iv?Fv(t,a):Hv(t,a))&&(Kt=Al(J,"onBeforeInput"),0<Kt.length&&(ce=new dd("onBeforeInput","beforeinput",null,a,ut),gt.push({event:ce,listeners:Kt}),ce.data=Gt)),D0(gt,t,J,a,ut)}eg(gt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Al(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ys(t,a),u!=null&&s.unshift(ao(t,u,f)),u=ys(t,n),u!=null&&s.push(ao(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ig(t,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var E=a,N=E.alternate,J=E.stateNode;if(E=E.tag,N!==null&&N===s)break;E!==5&&E!==26&&E!==27||J===null||(N=J,u?(J=ys(a,f),J!=null&&S.unshift(ao(a,J,N))):u||(J=ys(a,f),J!=null&&S.push(ao(a,J,N)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var O0=/\r\n?/g,P0=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(O0,`
`).replace(P0,"")}function rg(t,n){return n=ag(n),ag(t)===n}function Rl(){}function Ue(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pi(t,""+s);break;case"className":Rt(t,"class",s);break;case"tabIndex":Rt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(t,a,s);break;case"style":od(t,s,f);break;case"data":if(n!=="object"){Rt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",u.name,u,null),Ue(t,n,"formEncType",u.formEncType,u,null),Ue(t,n,"formMethod",u.formMethod,u,null),Ue(t,n,"formTarget",u.formTarget,u,null)):(Ue(t,n,"encType",u.encType,u,null),Ue(t,n,"method",u.method,u,null),Ue(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),Et(t,"popover",s);break;case"xlinkActuate":Ct(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ct(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ct(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ct(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ct(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ct(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Et(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fv.get(a)||a,Et(t,a,s))}}function lf(t,n,a,s,u,f){switch(a){case"style":od(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?pi(t,s):(typeof s=="number"||typeof s=="bigint")&&pi(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Et(t,a,s)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,S,a,null)}}u&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=S=u=null,N=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":S=ut;break;case"checked":N=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ue(t,n,s,ut,a,null)}}Pe(t,f,E,N,J,S,u,!1),We(t);return;case"select":de("invalid",t),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":S=E;break;case"multiple":s=E;default:Ue(t,n,u,E,a,null)}n=f,a=S,t.multiple=!!s,n!=null?rn(t,!!s,n,!1):a!=null&&rn(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ue(t,n,S,E,a,null)}_n(t,s,u,f),We(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(t,n,N,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)de(io[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,J,s,a,null)}return;default:if(Eu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&lf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ue(t,n,E,s,a,null))}function B0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,E=null,N=null,J=null,ut=null;for(nt in a){var gt=a[nt];if(a.hasOwnProperty(nt)&&gt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":N=gt;default:s.hasOwnProperty(nt)||Ue(t,n,nt,null,s,gt)}}for(var et in s){var nt=s[et];if(gt=a[et],s.hasOwnProperty(et)&&(nt!=null||gt!=null))switch(et){case"type":f=nt;break;case"name":u=nt;break;case"checked":J=nt;break;case"defaultChecked":ut=nt;break;case"value":S=nt;break;case"defaultValue":E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==gt&&Ue(t,n,et,nt,s,gt)}}Ri(t,S,E,N,J,ut,f,u);return;case"select":nt=S=E=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":nt=N;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":S=f;default:f!==N&&Ue(t,n,u,f,s,N)}n=E,a=S,s=nt,et!=null?rn(t,!!a,et,!1):!!s!=!!a&&(n!=null?rn(t,!!a,n,!0):rn(t,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ue(t,n,E,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":et=u;break;case"defaultValue":nt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ue(t,n,S,u,s,f)}fn(t,et,nt);return;case"option":for(var $t in a)if(et=a[$t],a.hasOwnProperty($t)&&et!=null&&!s.hasOwnProperty($t))switch($t){case"selected":t.selected=!1;break;default:Ue(t,n,$t,null,s,et)}for(N in s)if(et=s[N],nt=a[N],s.hasOwnProperty(N)&&et!==nt&&(et!=null||nt!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ue(t,n,N,et,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)et=a[Yt],a.hasOwnProperty(Yt)&&et!=null&&!s.hasOwnProperty(Yt)&&Ue(t,n,Yt,null,s,et);for(J in s)if(et=s[J],nt=a[J],s.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ue(t,n,J,et,s,nt)}return;default:if(Eu(n)){for(var Le in a)et=a[Le],a.hasOwnProperty(Le)&&et!==void 0&&!s.hasOwnProperty(Le)&&lf(t,n,Le,void 0,s,et);for(ut in s)et=s[ut],nt=a[ut],!s.hasOwnProperty(ut)||et===nt||et===void 0&&nt===void 0||lf(t,n,ut,et,s,nt);return}}for(var k in a)et=a[k],a.hasOwnProperty(k)&&et!=null&&!s.hasOwnProperty(k)&&Ue(t,n,k,null,s,et);for(gt in s)et=s[gt],nt=a[gt],!s.hasOwnProperty(gt)||et===nt||et==null&&nt==null||Ue(t,n,gt,et,s,nt)}var uf=null,cf=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function og(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hf=null;function z0(){var t=window.event;return t&&t.type==="popstate"?t===hf?!1:(hf=t,!0):(hf=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,I0=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(H0)}:lg;function H0(t){setTimeout(function(){throw t})}function Ma(t){return t==="head"}function cg(t,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&ro(S.documentElement),a&2&&ro(S.body),a&4)for(a=S.head,ro(a),S=a.firstChild;S;){var E=S.nextSibling,N=S.nodeName;S[ea]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(u===0){t.removeChild(f),po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);po(n)}function df(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":df(a),na(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function G0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ea])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function V0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function X0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var mf=null;function fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function hg(t,n,a){switch(n=Cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);na(t)}var ei=new Map,dg=new Set;function wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Vi=j.d;j.d={f:k0,r:W0,D:q0,C:Y0,L:Z0,m:j0,X:Q0,S:K0,M:J0};function k0(){var t=Vi.f(),n=xl();return t||n}function W0(t){var n=bi(t);n!==null&&n.tag===5&&n.type==="form"?Np(n):Vi.r(t)}var Zr=typeof document>"u"?null:document;function pg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var u=He(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),dg.has(u)||(dg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),xn(n,"link",t),Je(n),s.head.appendChild(n)))}}function q0(t){Vi.D(t),pg("dns-prefetch",t,null)}function Y0(t,n){Vi.C(t,n),pg("preconnect",t,n)}function Z0(t,n,a){Vi.L(t,n,a);var s=Zr;if(s&&t&&n){var u='link[rel="preload"][as="'+He(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+He(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+He(a.imageSizes)+'"]')):u+='[href="'+He(t)+'"]';var f=u;switch(n){case"style":f=jr(t);break;case"script":f=Kr(t)}ei.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(so(f))||n==="script"&&s.querySelector(oo(f))||(n=s.createElement("link"),xn(n,"link",t),Je(n),s.head.appendChild(n)))}}function j0(t,n){Vi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+He(s)+'"][href="'+He(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ei.has(f)&&(t=g({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}s=a.createElement("link"),xn(s,"link",t),Je(s),a.head.appendChild(s)}}}function K0(t,n,a){Vi.S(t,n,a);var s=Zr;if(s&&t){var u=ia(s).hoistableStyles,f=jr(t);n=n||"default";var S=u.get(f);if(!S){var E={loading:0,preload:null};if(S=s.querySelector(so(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&gf(t,a);var N=S=s.createElement("link");Je(N),xn(N,"link",t),N._p=new Promise(function(J,ut){N.onload=J,N.onerror=ut}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Dl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:E},u.set(f,S)}}}function Q0(t,n){Vi.X(t,n);var a=Zr;if(a&&t){var s=ia(a).hoistableScripts,u=Kr(t),f=s.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0},n),(n=ei.get(u))&&_f(t,n),f=a.createElement("script"),Je(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function J0(t,n){Vi.M(t,n);var a=Zr;if(a&&t){var s=ia(a).hoistableScripts,u=Kr(t),f=s.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ei.get(u))&&_f(t,n),f=a.createElement("script"),Je(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function mg(t,n,a,s){var u=(u=St.current)?wl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=ia(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=ia(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(so(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||$0(u,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=ia(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+He(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function gg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function $0(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),Je(n),t.head.appendChild(n))}function Kr(t){return'[src="'+He(t)+'"]'}function oo(t){return"script[async]"+t}function _g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+He(a.href)+'"]');if(s)return n.instance=s,Je(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Je(s),xn(s,"style",u),Dl(s,a.precedence,t),n.instance=s;case"stylesheet":u=jr(a.href);var f=t.querySelector(so(u));if(f)return n.state.loading|=4,n.instance=f,Je(f),f;s=gg(a),(u=ei.get(u))&&gf(s,u),f=(t.ownerDocument||t).createElement("link"),Je(f);var S=f;return S._p=new Promise(function(E,N){S.onload=E,S.onerror=N}),xn(f,"link",s),n.state.loading|=4,Dl(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(u=t.querySelector(oo(f)))?(n.instance=u,Je(u),u):(s=a,(u=ei.get(f))&&(s=g({},a),_f(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Je(u),xn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Dl(s,a.precedence,t));return n.instance}function Dl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var E=s[S];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ul=null;function vg(t,n,a){if(Ul===null){var s=new Map,u=Ul=new Map;u.set(a,s)}else u=Ul,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ea]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var E=s.get(S);E?E.push(f):s.set(S,[f])}}return s}function Sg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function eS(){}function nS(t,n,a){if(lo===null)throw Error(r(475));var s=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=jr(a.href),f=t.querySelector(so(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ll.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Je(f);return}f=t.ownerDocument||t,a=gg(a),(u=ei.get(u))&&gf(a,u),f=f.createElement("link"),Je(f);var S=f;S._p=new Promise(function(E,N){S.onload=E,S.onerror=N}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ll.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function iS(){if(lo===null)throw Error(r(475));var t=lo;return t.stylesheets&&t.count===0&&vf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&vf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)vf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function vf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,n.forEach(aS,t),Nl=null,Ll.call(t))}function aS(t,n){if(!(n.state.loading&4)){var a=Nl.get(t);if(a)var s=a.get(null);else{a=new Map,Nl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=Ll.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function rS(t,n,a,s,u,f,S,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Mg(t,n,a,s,u,f,S,E,N,J,ut,gt){return t=new rS(t,n,a,S,E,N,J,gt),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},nc(f),t}function yg(t){return t?(t=Rr,t):Rr}function Eg(t,n,a,s,u,f){u=yg(u),s.context===null?s.context=u:s.pendingContext=u,s=la(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ua(t,s,n),a!==null&&(qn(a,t,n),Fs(a,t,n))}function Tg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sf(t,n){Tg(t,n),(t=t.alternate)&&Tg(t,n)}function bg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&qn(n,t,67108864),Sf(t,67108864)}}var Ol=!0;function sS(t,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=2,xf(t,n,a,s)}finally{j.p=f,P.T=u}}function oS(t,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=8,xf(t,n,a,s)}finally{j.p=f,P.T=u}}function xf(t,n,a,s){if(Ol){var u=Mf(s);if(u===null)of(t,n,s,Pl,a),Rg(t,s);else if(uS(u,t,n,a,s))s.stopPropagation();else if(Rg(t,s),n&4&&-1<lS.indexOf(t)){for(;u!==null;){var f=bi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ot(f.pendingLanes);if(S!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var N=1<<31-Ft(S);E.entanglements[1]|=N,S&=~N}Si(f),(Ae&6)===0&&(vl=ee()+500,no(0))}}break;case 13:E=Ar(f,2),E!==null&&qn(E,f,2),xl(),Sf(f,2)}if(f=Mf(s),f===null&&of(t,n,s,Pl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else of(t,n,s,null,a)}}function Mf(t){return t=bu(t),yf(t)}var Pl=null;function yf(t){if(Pl=null,t=Ti(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pl=t,null}function Ag(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Ce:return 2;case Ht:return 8;case D:case T:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Ef=!1,ya=null,Ea=null,Ta=null,co=new Map,fo=new Map,ba=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(t,n){switch(t){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=bi(n),n!==null&&bg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function uS(t,n,a,s,u){switch(n){case"focusin":return ya=ho(ya,t,n,a,s,u),!0;case"dragenter":return Ea=ho(Ea,t,n,a,s,u),!0;case"mouseover":return Ta=ho(Ta,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return co.set(f,ho(co.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,u)),!0}return!1}function Cg(t){var n=Ti(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Fn(t.priority,function(){if(a.tag===13){var s=Wn();s=Fe(s);var u=Ar(a,s);u!==null&&qn(u,a,s),Sf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Mf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Tu=s,a.target.dispatchEvent(s),Tu=null}else return n=bi(a),n!==null&&bg(n),t.blockedOn=a,!1;n.shift()}return!0}function wg(t,n,a){Bl(t)&&a.delete(n)}function cS(){Ef=!1,ya!==null&&Bl(ya)&&(ya=null),Ea!==null&&Bl(Ea)&&(Ea=null),Ta!==null&&Bl(Ta)&&(Ta=null),co.forEach(wg),fo.forEach(wg)}function zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Ef||(Ef=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cS)))}var Il=null;function Dg(t){Il!==t&&(Il=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Il===t&&(Il=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(yf(s||a)===null)continue;break}var f=bi(a);f!==null&&(t.splice(n,3),n-=3,Mc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function po(t){function n(N){return zl(N,t)}ya!==null&&zl(ya,t),Ea!==null&&zl(Ea,t),Ta!==null&&zl(Ta,t),co.forEach(n),fo.forEach(n);for(var a=0;a<ba.length;a++){var s=ba[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Cg(a),a.blockedOn===null&&ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[gn]||null;if(typeof f=="function")S||Dg(a);else if(S){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[gn]||null)E=S.formAction;else if(yf(u)!==null)continue}else E=S.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Dg(a)}}}function Tf(t){this._internalRoot=t}Fl.prototype.render=Tf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();Eg(a,s,t,n,null,null)},Fl.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Eg(t.current,2,null,t,null,null),xl(),n[Un]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ba.length&&n!==0&&n<ba[a].priority;a++);ba.splice(a,0,t),a===0&&Cg(t)}};var Ug=e.version;if(Ug!=="19.1.0")throw Error(r(527,Ug,"19.1.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var fS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{ct=Hl.inject(fS),Nt=Hl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Yp,f=Zp,S=jp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Mg(t,1,!1,null,null,a,s,u,f,S,E,null),t[Un]=n.current,sf(t),new Tf(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Yp,S=Zp,E=jp,N=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Mg(t,1,!0,n,a??null,s,u,f,S,E,N,J),n.context=yg(null),a=n.current,s=Wn(),s=Fe(s),u=la(s),u.callback=null,ua(a,u,s),a=s,n.current.lanes=a,mt(n,a),Si(n),t[Un]=n.current,sf(t),new Fl(n)},go.version="19.1.0",go}var Gg;function yS(){if(Gg)return Rf.exports;Gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rf.exports=MS(),Rf.exports}var ES=yS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="176",TS=0,Vg=1,bS=2,z_=1,AS=2,Zi=3,za=0,zn=1,ji=2,Pa=0,hs=1,Xg=2,kg=3,Wg=4,RS=5,hr=100,CS=101,wS=102,DS=103,US=104,LS=200,NS=201,OS=202,PS=203,oh=204,lh=205,BS=206,zS=207,IS=208,FS=209,HS=210,GS=211,VS=212,XS=213,kS=214,uh=0,ch=1,fh=2,ps=3,hh=4,dh=5,ph=6,mh=7,I_=0,WS=1,qS=2,Ba=0,YS=1,ZS=2,jS=3,KS=4,QS=5,JS=6,$S=7,F_=300,ms=301,gs=302,gh=303,_h=304,Su=306,vh=1e3,pr=1001,Sh=1002,di=1003,tx=1004,Gl=1005,Mi=1006,Uf=1007,mr=1008,$i=1009,H_=1010,G_=1011,Eo=1012,Kh=1013,_r=1014,Ki=1015,Ro=1016,Qh=1017,Jh=1018,To=1020,V_=35902,X_=1021,k_=1022,hi=1023,bo=1026,Ao=1027,W_=1028,$h=1029,q_=1030,td=1031,ed=1033,uu=33776,cu=33777,fu=33778,hu=33779,xh=35840,Mh=35841,yh=35842,Eh=35843,Th=36196,bh=37492,Ah=37496,Rh=37808,Ch=37809,wh=37810,Dh=37811,Uh=37812,Lh=37813,Nh=37814,Oh=37815,Ph=37816,Bh=37817,zh=37818,Ih=37819,Fh=37820,Hh=37821,du=36492,Gh=36494,Vh=36495,Y_=36283,Xh=36284,kh=36285,Wh=36286,ex=3200,nx=3201,ix=0,ax=1,Na="",ii="srgb",_s="srgb-linear",gu="linear",Ne="srgb",Qr=7680,qg=519,rx=512,sx=513,ox=514,Z_=515,lx=516,ux=517,cx=518,fx=519,Yg=35044,Zg="300 es",Qi=2e3,_u=2001;class Ss{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=Math.PI/180,qh=180/Math.PI;function Co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function _e(o,e,i){return Math.max(e,Math.min(i,o))}function hx(o,e){return(o%e+e)%e}function Nf(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(e,i,r,l,c,h,d,m,p){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],A=r[8],C=l[0],M=l[3],_=l[6],B=l[1],O=l[4],L=l[7],G=l[2],V=l[5],I=l[8];return c[0]=h*C+d*B+m*G,c[3]=h*M+d*O+m*V,c[6]=h*_+d*L+m*I,c[1]=p*C+g*B+v*G,c[4]=p*M+g*O+v*V,c[7]=p*_+g*L+v*I,c[2]=x*C+y*B+A*G,c[5]=x*M+y*O+A*V,c[8]=x*_+y*L+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*c,y=p*c-h*m,A=i*v+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Of.makeScale(e,i)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,i){return this.premultiply(Of.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new ae;function j_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dx(){const o=vu("canvas");return o.style.display="block",o}const jg={};function pu(o){o in jg||(jg[o]=!0,console.warn(o))}function px(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function mx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kg=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qg=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _x(){const o={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ne&&(l.r=Ji(l.r),l.g=Ji(l.g),l.b=Ji(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ne&&(l.r=ds(l.r),l.g=ds(l.g),l.b=ds(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Na?gu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[_s]:{primaries:e,whitePoint:r,transfer:gu,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Ne,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Ee=_x();function Ji(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class vx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Jr===void 0&&(Jr=vu("canvas")),Jr.width=e.width,Jr.height=e.height;const l=Jr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=vu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ji(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ji(i[r]/255)*255):i[r]=Ji(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sx=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Pf(l[h].image)):c.push(Pf(l[h]))}else c=Pf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Pf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xx=0;class In extends Ss{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=pr,l=pr,c=Mi,h=mr,d=hi,m=$i,p=In.DEFAULT_ANISOTROPY,g=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Co(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=F_;In.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],A=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(y+1)/2,G=(_+1)/2,V=(g+x)/4,I=(v+C)/4,Z=(A+M)/4;return O>L&&O>G?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=V/r,c=I/r):L>G?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=V/l,c=Z/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=I/c,l=Z/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(v-C)/B,this.z=(x-g)/B,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this.w=_e(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this.w=_e(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mx extends Ss{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new In(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new nd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends Mx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class K_ extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yx extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(v!==C||m!==x||p!==y||g!==A){let M=1-d;const _=m*x+p*y+g*A+v*C,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const G=Math.sqrt(O),V=Math.atan2(G,_*B);M=Math.sin(M*V)/G,d=Math.sin(d*V)/G}const L=d*B;if(m=m*M+x*L,p=p*M+y*L,g=g*M+A*L,v=v*M+C*L,M===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+g*v+m*y-p*x,e[i+1]=m*A+g*x+p*v-d*y,e[i+2]=p*A+g*y+d*x-m*v,e[i+3]=g*A-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"YXZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"ZXY":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"ZYX":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"YZX":this._x=x*g*v+p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v-x*y*A;break;case"XZY":this._x=x*g*v-p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_e(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Jg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Jg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new rt,Jg=new wo;class Do{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,li):li.fromBufferAttribute(c,h),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vl.copy(r.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Xl.subVectors(this.max,vo),$r.subVectors(e.a,vo),ts.subVectors(e.b,vo),es.subVectors(e.c,vo),Ra.subVectors(ts,$r),Ca.subVectors(es,ts),ar.subVectors($r,es);let i=[0,-Ra.z,Ra.y,0,-Ca.z,Ca.y,0,-ar.z,ar.y,Ra.z,0,-Ra.x,Ca.z,0,-Ca.x,ar.z,0,-ar.x,-Ra.y,Ra.x,0,-Ca.y,Ca.x,0,-ar.y,ar.x,0];return!zf(i,$r,ts,es,Xl)||(i=[1,0,0,0,1,0,0,0,1],!zf(i,$r,ts,es,Xl))?!1:(kl.crossVectors(Ra,Ca),i=[kl.x,kl.y,kl.z],zf(i,$r,ts,es,Xl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],li=new rt,Vl=new Do,$r=new rt,ts=new rt,es=new rt,Ra=new rt,Ca=new rt,ar=new rt,vo=new rt,Xl=new rt,kl=new rt,rr=new rt;function zf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){rr.fromArray(o,c);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=e.dot(rr),p=i.dot(rr),g=r.dot(rr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Ex=new Do,So=new rt,If=new rt;class id{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ex.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(So,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(If.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(If)),this.expandByPoint(So.copy(e.center).sub(If))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new rt,Ff=new rt,Wl=new rt,wa=new rt,Hf=new rt,ql=new rt,Gf=new rt;class Tx{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,i),ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ff.copy(e).add(i).multiplyScalar(.5),Wl.copy(i).sub(e).normalize(),wa.copy(this.origin).sub(Ff);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Wl),d=wa.dot(this.direction),m=-wa.dot(Wl),p=wa.lengthSq(),g=Math.abs(1-h*h);let v,x,y,A;if(g>0)if(v=h*m-d,x=h*d-m,A=c*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ff).addScaledVector(Wl,x),y}intersectSphere(e,i){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),l=ki.dot(ki)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,i,r,l,c){Hf.subVectors(i,e),ql.subVectors(r,e),Gf.crossVectors(Hf,ql);let h=this.direction.dot(Gf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;wa.subVectors(this.origin,e);const m=d*this.direction.dot(ql.crossVectors(wa,ql));if(m<0)return null;const p=d*this.direction.dot(Hf.cross(wa));if(p<0||m+p>h)return null;const g=-d*wa.dot(Gf);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M)}set(e,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ns.setFromMatrixColumn(e,0).length(),c=1/ns.setFromMatrixColumn(e,1).length(),h=1/ns.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*g,y=h*v,A=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,A=p*g,C=p*v;i[0]=x+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,A=p*g,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*v,A=d*g,C=d*v;i[0]=m*g,i[4]=A*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=C-x*v,i[8]=A*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+A,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=h*g,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Ax)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Da.crossVectors(r,Yn),Da.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Da.crossVectors(r,Yn)),Da.normalize(),Yl.crossVectors(Yn,Da),l[0]=Da.x,l[4]=Yl.x,l[8]=Yn.x,l[1]=Da.y,l[5]=Yl.y,l[9]=Yn.y,l[2]=Da.z,l[6]=Yl.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],A=r[2],C=r[6],M=r[10],_=r[14],B=r[3],O=r[7],L=r[11],G=r[15],V=l[0],I=l[4],Z=l[8],w=l[12],R=l[1],H=l[5],lt=l[9],st=l[13],_t=l[2],ht=l[6],P=l[10],j=l[14],q=l[3],Mt=l[7],U=l[11],$=l[15];return c[0]=h*V+d*R+m*_t+p*q,c[4]=h*I+d*H+m*ht+p*Mt,c[8]=h*Z+d*lt+m*P+p*U,c[12]=h*w+d*st+m*j+p*$,c[1]=g*V+v*R+x*_t+y*q,c[5]=g*I+v*H+x*ht+y*Mt,c[9]=g*Z+v*lt+x*P+y*U,c[13]=g*w+v*st+x*j+y*$,c[2]=A*V+C*R+M*_t+_*q,c[6]=A*I+C*H+M*ht+_*Mt,c[10]=A*Z+C*lt+M*P+_*U,c[14]=A*w+C*st+M*j+_*$,c[3]=B*V+O*R+L*_t+G*q,c[7]=B*I+O*H+L*ht+G*Mt,c[11]=B*Z+O*lt+L*P+G*U,c[15]=B*w+O*st+L*j+G*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],A=e[3],C=e[7],M=e[11],_=e[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],A=e[12],C=e[13],M=e[14],_=e[15],B=v*M*p-C*x*p+C*m*y-d*M*y-v*m*_+d*x*_,O=A*x*p-g*M*p-A*m*y+h*M*y+g*m*_-h*x*_,L=g*C*p-A*v*p+A*d*y-h*C*y-g*d*_+h*v*_,G=A*v*m-g*C*m-A*d*x+h*C*x+g*d*M-h*v*M,V=i*B+r*O+l*L+c*G;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return e[0]=B*I,e[1]=(C*x*c-v*M*c-C*l*y+r*M*y+v*l*_-r*x*_)*I,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*_+r*m*_)*I,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*y-r*m*y)*I,e[4]=O*I,e[5]=(g*M*c-A*x*c+A*l*y-i*M*y-g*l*_+i*x*_)*I,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*_-i*m*_)*I,e[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*y+i*m*y)*I,e[8]=L*I,e[9]=(A*v*c-g*C*c-A*r*y+i*C*y+g*r*_-i*v*_)*I,e[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*_+i*d*_)*I,e[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*y-i*d*y)*I,e[12]=G*I,e[13]=(g*C*l-A*v*l+A*r*x-i*C*x-g*r*M+i*v*M)*I,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*I,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,y=c*g,A=c*v,C=h*g,M=h*v,_=d*v,B=m*p,O=m*g,L=m*v,G=r.x,V=r.y,I=r.z;return l[0]=(1-(C+_))*G,l[1]=(y+L)*G,l[2]=(A-O)*G,l[3]=0,l[4]=(y-L)*V,l[5]=(1-(x+_))*V,l[6]=(M+B)*V,l[7]=0,l[8]=(A+O)*I,l[9]=(M-B)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],ui.copy(this);const p=1/c,g=1/h,v=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,i.setFromRotationMatrix(ui),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Qi){const m=this.elements,p=2*c/(i-e),g=2*c/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let y,A;if(d===Qi)y=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===_u)y=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Qi){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(h-c),x=(i+e)*p,y=(r+l)*g;let A,C;if(d===Qi)A=(h+c)*v,C=-2*v;else if(d===_u)A=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ns=new rt,ui=new nn,bx=new rt(0,0,0),Ax=new rt(1,1,1),Da=new rt,Yl=new rt,Yn=new rt,$g=new nn,t_=new wo;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return $g.makeRotationFromQuaternion(e),this.setFromRotationMatrix($g,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return t_.setFromEuler(this),this.setFromQuaternion(t_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const e_=new rt,is=new wo,Wi=new nn,Zl=new rt,xo=new rt,Cx=new rt,wx=new wo,n_=new rt(1,0,0),i_=new rt(0,1,0),a_=new rt(0,0,1),r_={type:"added"},Dx={type:"removed"},as={type:"childadded",child:null},Vf={type:"childremoved",child:null};class wn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new rt,i=new ta,r=new wo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ae}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(a_,e)}translateOnAxis(e,i){return e_.copy(e).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(a_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Zl.copy(e):Zl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(xo,Zl,this.up):Wi.lookAt(Zl,xo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Wi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r_),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Dx),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r_),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new rt(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new rt,qi=new rt,Xf=new rt,Yi=new rt,rs=new rt,ss=new rt,s_=new rt,kf=new rt,Wf=new rt,qf=new rt,Yf=new Ke,Zf=new Ke,jf=new Ke;class fi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ci.subVectors(e,i),l.cross(ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){ci.subVectors(l,i),qi.subVectors(r,i),Xf.subVectors(e,i);const h=ci.dot(ci),d=ci.dot(qi),m=ci.dot(Xf),p=qi.dot(qi),g=qi.dot(Xf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,A=(h*g-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Yi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Yi.x),m.addScaledVector(h,Yi.y),m.addScaledVector(d,Yi.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Yf.setScalar(0),Zf.setScalar(0),jf.setScalar(0),Yf.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,r),jf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Yf,c.x),h.addScaledVector(Zf,c.y),h.addScaledVector(jf,c.z),h}static isFrontFacing(e,i,r,l){return ci.subVectors(r,i),qi.subVectors(e,i),ci.cross(qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ci.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return fi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return fi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(c,r),kf.subVectors(e,r);const m=rs.dot(kf),p=ss.dot(kf);if(m<=0&&p<=0)return i.copy(r);Wf.subVectors(e,l);const g=rs.dot(Wf),v=ss.dot(Wf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(rs,h);qf.subVectors(e,c);const y=rs.dot(qf),A=ss.dot(qf);if(A>=0&&y<=A)return i.copy(c);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(ss,d);const M=g*A-y*v;if(M<=0&&v-g>=0&&y-A>=0)return s_.subVectors(c,l),d=(v-g)/(v-g+(y-A)),i.copy(l).addScaledVector(s_,d);const _=1/(M+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ua={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Kf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=hx(e,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Kf(h,c,e+1/3),this.g=Kf(h,c,e),this.b=Kf(h,c,e-1/3)}return Ee.toWorkingColorSpace(this,l),this}setStyle(e,i=ii){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const r=J_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Ee.fromWorkingColorSpace(An.copy(this),e),Math.round(_e(An.r*255,0,255))*65536+Math.round(_e(An.g*255,0,255))*256+Math.round(_e(An.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.fromWorkingColorSpace(An.copy(this),i);const r=An.r,l=An.g,c=An.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ii){Ee.fromWorkingColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ua),this.setHSL(Ua.h+e,Ua.s+i,Ua.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ua),e.getHSL(jl);const r=Nf(Ua.h,jl.h,i),l=Nf(Ua.s,jl.s,i),c=Nf(Ua.l,jl.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new be;be.NAMES=J_;let Ux=0;class xu extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=hs,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==oh&&(r.blendSrc=this.blendSrc),this.blendDst!==lh&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ad extends xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=I_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new rt,Kl=new ze;let Lx=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Yg,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Kl.fromBufferAttribute(this,i),Kl.applyMatrix3(e),this.setXY(i,Kl.x,Kl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(e),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.transformDirection(e),this.setXYZ(i,en.x,en.y,en.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yg&&(e.usage=this.usage),e}}class $_ extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class tv extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gr extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Nx=0;const ni=new nn,Qf=new wn,os=new rt,Zn=new Do,Mo=new Do,mn=new rt;class Sr extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?tv:$_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ae().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return Qf.lookAt(e),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new gr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Zn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new id);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Mo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Zn.min,Mo.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,Mo.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(Mo.min),Zn.expandByPoint(Mo.max))}Zn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(e,p),mn.add(os)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new rt,m[Z]=new rt;const p=new rt,g=new rt,v=new rt,x=new ze,y=new ze,A=new ze,C=new rt,M=new rt;function _(Z,w,R){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,w),A.fromBufferAttribute(c,R),g.sub(p),v.sub(p),y.sub(x),A.sub(x);const H=1/(y.x*A.y-A.x*y.y);isFinite(H)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(H),d[Z].add(C),d[w].add(C),d[R].add(C),m[Z].add(M),m[w].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let Z=0,w=B.length;Z<w;++Z){const R=B[Z],H=R.start,lt=R.count;for(let st=H,_t=H+lt;st<_t;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const O=new rt,L=new rt,G=new rt,V=new rt;function I(Z){G.fromBufferAttribute(l,Z),V.copy(G);const w=d[Z];O.copy(w),O.sub(G.multiplyScalar(G.dot(w))).normalize(),L.crossVectors(V,w);const H=L.dot(m[Z])<0?-1:1;h.setXYZW(Z,O.x,O.y,O.z,H)}for(let Z=0,w=B.length;Z<w;++Z){const R=B[Z],H=R.start,lt=R.count;for(let st=H,_t=H+lt;st<_t;st+=3)I(e.getX(st+0)),I(e.getX(st+1)),I(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,v=new rt;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)x[A++]=p[y++]}return new Ei(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Sr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o_=new nn,sr=new Tx,Ql=new id,l_=new rt,Jl=new rt,$l=new rt,tu=new rt,Jf=new rt,eu=new rt,u_=new rt,nu=new rt;class yi extends wn{constructor(e=new Sr,i=new ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(Jf.fromBufferAttribute(v,e),h?eu.addScaledVector(Jf,g):eu.addScaledVector(Jf.sub(i),g))}i.add(eu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(c),sr.copy(e.ray).recast(e.near),!(Ql.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ql,l_)===null||sr.origin.distanceToSquared(l_)>(e.far-e.near)**2))&&(o_.copy(c).invert(),sr.copy(e.ray).applyMatrix4(o_),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],B=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=B,G=O;L<G;L+=3){const V=d.getX(L),I=d.getX(L+1),Z=d.getX(L+2);l=iu(this,_,e,r,p,g,v,V,I,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const B=d.getX(M),O=d.getX(M+1),L=d.getX(M+2);l=iu(this,h,e,r,p,g,v,B,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],B=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=B,G=O;L<G;L+=3){const V=L,I=L+1,Z=L+2;l=iu(this,_,e,r,p,g,v,V,I,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const B=M,O=M+1,L=M+2;l=iu(this,h,e,r,p,g,v,B,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Ox(o,e,i,r,l,c,h,d){let m;if(e.side===zn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===za,d),m===null)return null;nu.copy(d),nu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(nu);return p<i.near||p>i.far?null:{distance:p,point:nu.clone(),object:o}}function iu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Jl),o.getVertexPosition(m,$l),o.getVertexPosition(p,tu);const g=Ox(o,e,i,r,Jl,$l,tu,u_);if(g){const v=new rt;fi.getBarycoord(u_,Jl,$l,tu,v),l&&(g.uv=fi.getInterpolatedAttribute(l,d,m,p,v,new ze)),c&&(g.uv1=fi.getInterpolatedAttribute(c,d,m,p,v,new ze)),h&&(g.normal=fi.getInterpolatedAttribute(h,d,m,p,v,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new rt,materialIndex:0};fi.getNormal(Jl,$l,tu,x.normal),g.face=x,g.barycoord=v}return g}class xs extends Sr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new gr(p,3)),this.setAttribute("normal",new gr(g,3)),this.setAttribute("uv",new gr(v,2));function A(C,M,_,B,O,L,G,V,I,Z,w){const R=L/I,H=G/Z,lt=L/2,st=G/2,_t=V/2,ht=I+1,P=Z+1;let j=0,q=0;const Mt=new rt;for(let U=0;U<P;U++){const $=U*H-st;for(let vt=0;vt<ht;vt++){const xt=vt*R-lt;Mt[C]=xt*B,Mt[M]=$*O,Mt[_]=_t,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[M]=0,Mt[_]=V>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(vt/I),v.push(1-U/Z),j+=1}}for(let U=0;U<Z;U++)for(let $=0;$<I;$++){const vt=x+$+ht*U,xt=x+$+ht*(U+1),Q=x+($+1)+ht*(U+1),dt=x+($+1)+ht*U;m.push(vt,xt,dt),m.push(xt,Q,dt),q+=6}d.addGroup(y,q,w),y+=q,x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Cn(o){const e={};for(let i=0;i<o.length;i++){const r=vs(o[i]);for(const l in r)e[l]=r[l]}return e}function Px(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ev(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const Bx={clone:vs,merge:Cn};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class nv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Qi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new rt,c_=new ze,f_=new ze;class ai extends nv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,i){return this.getViewBounds(e,c_,f_),i.subVectors(f_,c_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Lf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,us=1;class Fx extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(ls,us,e,i);l.layers=this.layers,this.add(l);const c=new ai(ls,us,e,i);c.layers=this.layers,this.add(c);const h=new ai(ls,us,e,i);h.layers=this.layers,this.add(h);const d=new ai(ls,us,e,i);d.layers=this.layers,this.add(d);const m=new ai(ls,us,e,i);m.layers=this.layers,this.add(m);const p=new ai(ls,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_u)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class iv extends In{constructor(e=[],i=ms,r,l,c,h,d,m,p,g){super(e,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hx extends vr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new iv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new xs(5,5,5),c=new Ia({name:"CubemapFromEquirect",uniforms:vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Pa});c.uniforms.tEquirect.value=i;const h=new yi(l,c),d=i.minFilter;return i.minFilter===mr&&(i.minFilter=Mi),new Fx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class au extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new au;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Vx extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const th=new rt,Xx=new rt,kx=new ae;class cr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=th.subVectors(r,i).cross(Xx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kx.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new id,ru=new rt;class av{constructor(e=new cr,i=new cr,r=new cr,l=new cr,c=new cr,h=new cr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],y=l[8],A=l[9],C=l[10],M=l[11],_=l[12],B=l[13],O=l[14],L=l[15];if(r[0].setComponents(m-c,x-p,M-y,L-_).normalize(),r[1].setComponents(m+c,x+p,M+y,L+_).normalize(),r[2].setComponents(m+h,x+g,M+A,L+B).normalize(),r[3].setComponents(m-h,x-g,M-A,L-B).normalize(),r[4].setComponents(m-d,x-v,M-C,L-O).normalize(),i===Qi)r[5].setComponents(m+d,x+v,M+C,L+O).normalize();else if(i===_u)r[5].setComponents(d,v,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ru.x=l.normal.x>0?e.max.x:e.min.x,ru.y=l.normal.y>0?e.max.y:e.min.y,ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rv extends In{constructor(e,i,r=_r,l,c,h,d=di,m=di,p,g=bo){if(g!==bo&&g!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Mu extends Sr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],A=[],C=[],M=[];for(let _=0;_<g;_++){const B=_*x-h;for(let O=0;O<p;O++){const L=O*v-c;A.push(L,-B,0),C.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const O=B+p*_,L=B+p*(_+1),G=B+1+p*(_+1),V=B+1+p*_;y.push(O,L,V),y.push(L,G,V)}this.setIndex(y),this.setAttribute("position",new gr(A,3)),this.setAttribute("normal",new gr(C,3)),this.setAttribute("uv",new gr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wx extends xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qx extends xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yx extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Zx extends Yx{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}class jx extends nv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Kx extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function h_(o,e,i,r){const l=Qx(r);switch(i){case X_:return o*e;case W_:return o*e/l.components*l.byteLength;case $h:return o*e/l.components*l.byteLength;case q_:return o*e*2/l.components*l.byteLength;case td:return o*e*2/l.components*l.byteLength;case k_:return o*e*3/l.components*l.byteLength;case hi:return o*e*4/l.components*l.byteLength;case ed:return o*e*4/l.components*l.byteLength;case uu:case cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fu:case hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Eh:return Math.max(o,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(o,8)*Math.max(e,8)/2;case Th:case bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case du:case Gh:case Vh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Y_:case Xh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case kh:case Wh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Qx(o){switch(o){case $i:case H_:return{byteLength:1,components:1};case Eo:case G_:case Ro:return{byteLength:2,components:1};case Qh:case Jh:return{byteLength:2,components:4};case _r:case Kh:case Ki:return{byteLength:4,components:1};case V_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Jx(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<v.length;y++){const A=v[x],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var $x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:$x,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:uM,beginnormal_vertex:cM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:SM,color_pars_vertex:xM,color_vertex:MM,common:yM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:bM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:BM,fog_pars_vertex:zM,fog_fragment:IM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:XM,lights_pars_begin:kM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:ZM,lights_phong_pars_fragment:jM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:ty,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ay,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:uy,metalnessmap_pars_fragment:cy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:vy,normal_pars_vertex:Sy,normal_vertex:xy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:by,opaque_fragment:Ay,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:wy,dithering_fragment:Dy,dithering_pars_fragment:Uy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Py,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:Iy,skinning_pars_vertex:Fy,skinning_vertex:Hy,skinnormal_vertex:Gy,specularmap_fragment:Vy,specularmap_pars_fragment:Xy,tonemapping_fragment:ky,tonemapping_pars_fragment:Wy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Zy,uv_pars_vertex:jy,uv_vertex:Ky,worldpos_vertex:Qy,background_vert:Jy,background_frag:$y,backgroundCube_vert:tE,backgroundCube_frag:eE,cube_vert:nE,cube_frag:iE,depth_vert:aE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:oE,equirect_vert:lE,equirect_frag:uE,linedashed_vert:cE,linedashed_frag:fE,meshbasic_vert:hE,meshbasic_frag:dE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:_E,meshnormal_vert:vE,meshnormal_frag:SE,meshphong_vert:xE,meshphong_frag:ME,meshphysical_vert:yE,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:bE,points_vert:AE,points_frag:RE,shadow_vert:CE,shadow_frag:wE,sprite_vert:DE,sprite_frag:UE},wt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},xi={basic:{uniforms:Cn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Cn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new be(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Cn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Cn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Cn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new be(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Cn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Cn([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Cn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Cn([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Cn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Cn([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Cn([wt.common,wt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Cn([wt.lights,wt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};xi.physical={uniforms:Cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const su={r:0,b:0,g:0},lr=new ta,LE=new nn;function NE(o,e,i,r,l,c,h){const d=new be(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function A(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function C(O){let L=!1;const G=A(O);G===null?_(d,m):G&&G.isColor&&(_(G,1),L=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,L){const G=A(L);G&&(G.isCubeTexture||G.mapping===Su)?(g===void 0&&(g=new yi(new xs(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:vs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),lr.copy(L.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(lr)),g.material.toneMapped=Ee.getTransfer(G.colorSpace)!==Ne,(v!==G||x!==G.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,y=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new yi(new Mu(2,2),new Ia({name:"BackgroundMaterial",uniforms:vs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(G.colorSpace)!==Ne,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=G,x=G.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,L){O.getRGB(su,ev(o)),r.buffers.color.setClear(su.r,su.g,su.b,L,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),m=L,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:C,addToRenderList:M,dispose:B}}function OE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,H,lt,st,_t){let ht=!1;const P=v(st,lt,H);c!==P&&(c=P,p(c.object)),ht=y(R,st,lt,_t),ht&&A(R,st,lt,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,L(R,H,lt,st),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,H,lt){const st=lt.wireframe===!0;let _t=r[R.id];_t===void 0&&(_t={},r[R.id]=_t);let ht=_t[H.id];ht===void 0&&(ht={},_t[H.id]=ht);let P=ht[st];return P===void 0&&(P=x(m()),ht[st]=P),P}function x(R){const H=[],lt=[],st=[];for(let _t=0;_t<i;_t++)H[_t]=0,lt[_t]=0,st[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:lt,attributeDivisors:st,object:R,attributes:{},index:null}}function y(R,H,lt,st){const _t=c.attributes,ht=H.attributes;let P=0;const j=lt.getAttributes();for(const q in j)if(j[q].location>=0){const U=_t[q];let $=ht[q];if($===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function A(R,H,lt,st){const _t={},ht=H.attributes;let P=0;const j=lt.getAttributes();for(const q in j)if(j[q].location>=0){let U=ht[q];U===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),_t[q]=$,P++}c.attributes=_t,c.attributesNum=P,c.index=st}function C(){const R=c.newAttributes;for(let H=0,lt=R.length;H<lt;H++)R[H]=0}function M(R){_(R,0)}function _(R,H){const lt=c.newAttributes,st=c.enabledAttributes,_t=c.attributeDivisors;lt[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),_t[R]!==H&&(o.vertexAttribDivisor(R,H),_t[R]=H)}function B(){const R=c.newAttributes,H=c.enabledAttributes;for(let lt=0,st=H.length;lt<st;lt++)H[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),H[lt]=0)}function O(R,H,lt,st,_t,ht,P){P===!0?o.vertexAttribIPointer(R,H,lt,_t,ht):o.vertexAttribPointer(R,H,lt,st,_t,ht)}function L(R,H,lt,st){C();const _t=st.attributes,ht=lt.getAttributes(),P=H.defaultAttributeValues;for(const j in ht){const q=ht[j];if(q.location>=0){let Mt=_t[j];if(Mt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor)),Mt!==void 0){const U=Mt.normalized,$=Mt.itemSize,vt=e.get(Mt);if(vt===void 0)continue;const xt=vt.buffer,Q=vt.type,dt=vt.bytesPerElement,St=Q===o.INT||Q===o.UNSIGNED_INT||Mt.gpuType===Kh;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Dt=bt.stride,re=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)_(q.location+Zt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)M(q.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Zt=0;Zt<q.locationSize;Zt++)O(q.location+Zt,$/q.locationSize,Q,U,Dt*dt,(re+$/q.locationSize*Zt)*dt,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<q.locationSize;bt++)_(q.location+bt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<q.locationSize;bt++)M(q.location+bt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let bt=0;bt<q.locationSize;bt++)O(q.location+bt,$/q.locationSize,Q,U,$*dt,$/q.locationSize*bt*dt,St)}}else if(P!==void 0){const U=P[j];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(q.location,U);break;case 3:o.vertexAttrib3fv(q.location,U);break;case 4:o.vertexAttrib4fv(q.location,U);break;default:o.vertexAttrib1fv(q.location,U)}}}}B()}function G(){Z();for(const R in r){const H=r[R];for(const lt in H){const st=H[lt];for(const _t in st)g(st[_t].object),delete st[_t];delete H[lt]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const lt in H){const st=H[lt];for(const _t in st)g(st[_t].object),delete st[_t];delete H[lt]}delete r[R.id]}function I(R){for(const H in r){const lt=r[H];if(lt[R.id]===void 0)continue;const st=lt[R.id];for(const _t in st)g(st[_t].object),delete st[_t];delete lt[R.id]}}function Z(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function PE(o,e,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let A=0;A<v;A++)y+=g[A];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==hi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==$i&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ki&&!Z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:L,vertexTextures:G,maxSamples:V}}function zE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new cr,d=new ae,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?g(null):p();else{const B=c?0:r,O=B*4;let L=_.clippingState||null;m.value=L,L=g(A,x,O,y);for(let G=0;G!==O;++G)L[G]=i[G];_.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const _=y+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,L=y;O!==C;++O,L+=4)h.copy(v[O]).applyMatrix4(B,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function IE(o){let e=new WeakMap;function i(h,d){return d===gh?h.mapping=ms:d===_h&&(h.mapping=gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===gh||d===_h)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Hx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const fs=4,d_=[.125,.215,.35,.446,.526,.582],dr=20,eh=new jx,p_=new be;let nh=null,ih=0,ah=0,rh=!1;const fr=(1+Math.sqrt(5))/2,cs=1/fr,m_=[new rt(-fr,cs,0),new rt(fr,cs,0),new rt(-cs,0,fr),new rt(cs,0,fr),new rt(0,fr,-cs),new rt(0,fr,cs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],FE=new rt;class g_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=FE}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ro,format:hi,colorSpace:_s,depthBuffer:!1},l=__(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HE(c)),this._blurMaterial=GE(c,e,i)}return l}_compileMaterial(e){const i=new yi(this._lodPlanes[0],e);this._renderer.compile(i,eh)}_sceneToCubeUV(e,i,r,l,c){const m=new ai(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(p_),v.toneMapping=Ba,v.autoClear=!1;const A=new ad({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),C=new yi(new xs,A);let M=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,M=!0):(A.color.copy(p_),M=!0);for(let B=0;B<6;B++){const O=B%3;O===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[B],c.y,c.z)):O===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[B]));const L=this._cubeSize;ou(l,O*L,B>2?L:0,L,L),v.setRenderTarget(l),M&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ms||e.mapping===gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ou(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,eh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=m_[(l-c-1)%m_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new yi(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*dr-1),C=c/A,M=isFinite(c)?1+Math.floor(g*C):dr;M>dr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${dr}`);const _=[];let B=0;for(let I=0;I<dr;++I){const Z=I/C,w=Math.exp(-Z*Z/2);_.push(w),I===0?B+=w:I<M&&(B+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/B;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=A,x.mipInt.value=O-r;const L=this._sizeLods[l],G=3*L*(l>O-fs?l-O+fs:0),V=4*(this._cubeSize-L);ou(i,G,V,3*L,2*L),m.setRenderTarget(i),m.render(v,eh)}}function HE(o){const e=[],i=[],r=[];let l=o;const c=o-fs+1+d_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-fs?m=d_[h-o+fs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,A=6,C=3,M=2,_=1,B=new Float32Array(C*A*y),O=new Float32Array(M*A*y),L=new Float32Array(_*A*y);for(let V=0;V<y;V++){const I=V%3*2/3-1,Z=V>2?0:-1,w=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];B.set(w,C*A*V),O.set(x,M*A*V);const R=[V,V,V,V,V,V];L.set(R,_*A*V)}const G=new Sr;G.setAttribute("position",new Ei(B,C)),G.setAttribute("uv",new Ei(O,M)),G.setAttribute("faceIndex",new Ei(L,_)),e.push(G),l>fs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function __(o,e,i){const r=new vr(o,e,i);return r.texture.mapping=Su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ou(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function GE(o,e,i){const r=new Float32Array(dr),l=new rt(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function v_(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function S_(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===gh||m===_h,g=m===ms||m===gs;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new g_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new g_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function XE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&pu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function kE(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let O=0,L=B.length;O<L;O+=3){const G=B[O+0],V=B[O+1],I=B[O+2];x.push(G,V,V,I,I,G)}}else if(A!==void 0){const B=A.array;C=A.version;for(let O=0,L=B.length/3-1;O<L;O+=3){const G=O+0,V=O+1,I=O+2;x.push(G,V,V,I,I,G)}}else return;const M=new(j_(x)?tv:$_)(x,1);M.version=C;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function WE(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function g(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(x,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,A);let _=0;for(let B=0;B<A;B++)_+=y[B]*C[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function qE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YE(o,e,i){const r=new WeakMap,l=new Ke;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;A===!0&&(L=1),C===!0&&(L=2),M===!0&&(L=3);let G=d.attributes.position.count*L,V=1;G>e.maxTextureSize&&(V=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*V*4*v),Z=new K_(I,G,V,v);Z.type=Ki,Z.needsUpdate=!0;const w=L*4;for(let H=0;H<v;H++){const lt=_[H],st=B[H],_t=O[H],ht=G*V*4*H;for(let P=0;P<lt.count;P++){const j=P*w;A===!0&&(l.fromBufferAttribute(lt,P),I[ht+j+0]=l.x,I[ht+j+1]=l.y,I[ht+j+2]=l.z,I[ht+j+3]=0),C===!0&&(l.fromBufferAttribute(st,P),I[ht+j+4]=l.x,I[ht+j+5]=l.y,I[ht+j+6]=l.z,I[ht+j+7]=0),M===!0&&(l.fromBufferAttribute(_t,P),I[ht+j+8]=l.x,I[ht+j+9]=l.y,I[ht+j+10]=l.z,I[ht+j+11]=_t.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new ze(G,V)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ZE(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const ov=new In,x_=new rv(1,1),lv=new K_,uv=new yx,cv=new iv,M_=[],y_=[],E_=new Float32Array(16),T_=new Float32Array(9),b_=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=M_[l];if(c===void 0&&(c=new Float32Array(l),M_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function yu(o,e){let i=y_[e];i===void 0&&(i=new Int32Array(e),y_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function jE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function KE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function QE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function $E(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(ln(i,r))return;b_.set(r),o.uniformMatrix2fv(this.addr,!1,b_),un(i,r)}}function tT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(ln(i,r))return;T_.set(r),o.uniformMatrix3fv(this.addr,!1,T_),un(i,r)}}function eT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(ln(i,r))return;E_.set(r),o.uniformMatrix4fv(this.addr,!1,E_),un(i,r)}}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function cT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(x_.compareFunction=Z_,c=x_):c=ov,i.setTexture2D(e||c,l)}function fT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||uv,l)}function hT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||cv,l)}function dT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||lv,l)}function pT(o){switch(o){case 5126:return jE;case 35664:return KE;case 35665:return QE;case 35666:return JE;case 35674:return $E;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}function mT(o,e){o.uniform1fv(this.addr,e)}function gT(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function ST(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function xT(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MT(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function yT(o,e){o.uniform1iv(this.addr,e)}function ET(o,e){o.uniform2iv(this.addr,e)}function TT(o,e){o.uniform3iv(this.addr,e)}function bT(o,e){o.uniform4iv(this.addr,e)}function AT(o,e){o.uniform1uiv(this.addr,e)}function RT(o,e){o.uniform2uiv(this.addr,e)}function CT(o,e){o.uniform3uiv(this.addr,e)}function wT(o,e){o.uniform4uiv(this.addr,e)}function DT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||ov,c[h])}function UT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||uv,c[h])}function LT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||cv,c[h])}function NT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||lv,c[h])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return ST;case 35675:return xT;case 35676:return MT;case 5124:case 35670:return yT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return bT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function A_(o,e){o.seq.push(e),o.map[e.id]=e}function IT(o,e,i){const r=o.name,l=r.length;for(sh.lastIndex=0;;){const c=sh.exec(r),h=sh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){A_(i,p===void 0?new PT(d,o,e):new BT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new zT(d),A_(i,v)),i=v}}}class mu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);IT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function R_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const C_=new ae;function VT(o){Ee._getMatrix(C_,Ee.workingColorSpace,o);const e=`mat3( ${C_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case gu:return[e,"LinearTransferOETF"];case Ne:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function w_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+GT(o.getShaderSource(e),h)}else return l}function XT(o,e){const i=VT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function kT(o,e){let i;switch(e){case YS:i="Linear";break;case ZS:i="Reinhard";break;case jS:i="Cineon";break;case KS:i="ACESFilmic";break;case JS:i="AgX";break;case $S:i="Neutral";break;case QS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new rt;function WT(){Ee.getLuminanceCoefficients(lu);const o=lu.x.toFixed(4),e=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function YT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ZT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function yo(o){return o!==""}function D_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(o){return o.replace(jT,QT)}const KT=new Map;function QT(o,e){let i=se[e];if(i===void 0){const r=KT.get(e);if(r!==void 0)i=se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(o){return o.replace(JT,$T)}function $T(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function N_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===AS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function eb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case I_:e="ENVMAP_BLENDING_MULTIPLY";break;case WS:e="ENVMAP_BLENDING_MIX";break;case qS:e="ENVMAP_BLENDING_ADD";break}return e}function ab(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function rb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=tb(i),p=eb(i),g=nb(i),v=ib(i),x=ab(i),y=qT(i),A=YT(c),C=l.createProgram();let M,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(yo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(M=[N_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[N_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?se.tonemapping_pars_fragment:"",i.toneMapping!==Ba?kT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yo).join(`
`)),h=Yh(h),h=D_(h,i),h=U_(h,i),d=Yh(d),d=D_(d,i),d=U_(d,i),h=L_(h),d=L_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+M+h,L=B+_+d,G=R_(l,l.VERTEX_SHADER,O),V=R_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,G),l.attachShader(C,V),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(H){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(G).trim(),_t=l.getShaderInfoLog(V).trim();let ht=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,G,V);else{const j=w_(l,G,"vertex"),q=w_(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+j+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||_t==="")&&(P=!1);P&&(H.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:st,prefix:M},fragmentShader:{log:_t,prefix:_}})}l.deleteShader(G),l.deleteShader(V),Z=new mu(l,C),w=ZT(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,FT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=V,this}let sb=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new lb(e),i.set(e,r)),r}}class lb{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function ub(o,e,i,r,l,c,h){const d=new Q_,m=new ob,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,H,lt,st){const _t=lt.fog,ht=st.geometry,P=w.isMeshStandardMaterial?lt.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=j&&j.mapping===Su?j.image.height:null,Mt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let xt,Q,dt,St;if(Mt){const xe=xi[Mt];xt=xe.vertexShader,Q=xe.fragmentShader}else xt=w.vertexShader,Q=w.fragmentShader,m.update(w),dt=m.getVertexShaderID(w),St=m.getFragmentShaderID(w);const bt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),re=st.isInstancedMesh===!0,Zt=st.isBatchedMesh===!0,Ie=!!w.map,Oe=!!w.matcap,ue=!!j,z=!!w.aoMap,Dn=!!w.lightMap,pe=!!w.bumpMap,ee=!!w.normalMap,Xt=!!w.displacementMap,Ce=!!w.emissiveMap,Ht=!!w.metalnessMap,D=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,pt=w.dispersion>0,yt=w.iridescence>0,ct=w.sheen>0,Nt=w.transmission>0,At=T&&!!w.anisotropyMap,Ft=tt&&!!w.clearcoatMap,Qt=tt&&!!w.clearcoatNormalMap,Tt=tt&&!!w.clearcoatRoughnessMap,zt=yt&&!!w.iridescenceMap,qt=yt&&!!w.iridescenceThicknessMap,jt=ct&&!!w.sheenColorMap,Ot=ct&&!!w.sheenRoughnessMap,oe=!!w.specularMap,te=!!w.specularColorMap,we=!!w.specularIntensityMap,X=Nt&&!!w.transmissionMap,Ut=Nt&&!!w.thicknessMap,ot=!!w.gradientMap,mt=!!w.alphaMap,Pt=w.alphaTest>0,Lt=!!w.alphaHash,ne=!!w.extensions;let Fe=Ba;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Fe=o.toneMapping);const Qe={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Q,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&st._colorsTexture!==null,instancing:re,instancingColor:re&&st.instanceColor!==null,instancingMorph:re&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:Ie,matcap:Oe,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:Dn,bumpMap:pe,normalMap:ee,displacementMap:x&&Xt,emissiveMap:Ce,normalMapObjectSpace:ee&&w.normalMapType===ax,normalMapTangentSpace:ee&&w.normalMapType===ix,metalnessMap:Ht,roughnessMap:D,anisotropy:T,anisotropyMap:At,clearcoat:tt,clearcoatMap:Ft,clearcoatNormalMap:Qt,clearcoatRoughnessMap:Tt,dispersion:pt,iridescence:yt,iridescenceMap:zt,iridescenceThicknessMap:qt,sheen:ct,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:oe,specularColorMap:te,specularIntensityMap:we,transmission:Nt,transmissionMap:X,thicknessMap:Ut,gradientMap:ot,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Pt,alphaHash:Lt,combine:w.combine,mapUv:Ie&&C(w.map.channel),aoMapUv:z&&C(w.aoMap.channel),lightMapUv:Dn&&C(w.lightMap.channel),bumpMapUv:pe&&C(w.bumpMap.channel),normalMapUv:ee&&C(w.normalMap.channel),displacementMapUv:Xt&&C(w.displacementMap.channel),emissiveMapUv:Ce&&C(w.emissiveMap.channel),metalnessMapUv:Ht&&C(w.metalnessMap.channel),roughnessMapUv:D&&C(w.roughnessMap.channel),anisotropyMapUv:At&&C(w.anisotropyMap.channel),clearcoatMapUv:Ft&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&C(w.sheenRoughnessMap.channel),specularMapUv:oe&&C(w.specularMap.channel),specularColorMapUv:te&&C(w.specularColorMap.channel),specularIntensityMapUv:we&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Ut&&C(w.thicknessMap.channel),alphaMapUv:mt&&C(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ee||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ht.attributes.uv&&(Ie||mt),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Dt,skinning:st.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ie&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&w.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=p.has(1),Qe.vertexUv2s=p.has(2),Qe.vertexUv3s=p.has(3),p.clear(),Qe}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(R,w),O(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function O(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function L(w){const R=A[w.type];let H;if(R){const lt=xi[R];H=Bx.clone(lt.uniforms)}else H=w.uniforms;return H}function G(w,R){let H;for(let lt=0,st=g.length;lt<st;lt++){const _t=g[lt];if(_t.cacheKey===R){H=_t,++H.usedTimes;break}}return H===void 0&&(H=new rb(o,R,w,c),g.push(H)),H}function V(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:G,releaseProgram:V,releaseShaderCache:I,programs:g,dispose:Z}}function cb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function fb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function O_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function P_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,A,C,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||fb),r.length>1&&r.sort(x||O_),l.length>1&&l.sort(x||O_)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function hb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new P_,o.set(r,[h])):l>=c.length?(h=new P_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function db(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new be};break;case"SpotLight":i={position:new rt,direction:new rt,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function pb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let mb=0;function gb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function _b(o){const e=new db,i=pb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new nn,h=new nn;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,B=0,O=0,L=0,G=0,V=0,I=0;p.sort(gb);for(let w=0,R=p.length;w<R;w++){const H=p[w],lt=H.color,st=H.intensity,_t=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],st);I++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=H.shadow.matrix,B++}r.directional[y]=P,y++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(lt).multiplyScalar(st),P.distance=_t,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[C]=P;const j=H.shadow;if(H.map&&(r.spotLightMap[G]=H.map,G++,j.updateMatrices(H),H.castShadow&&V++),r.spotLightMatrix[C]=j.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=ht,L++}C++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(lt).multiplyScalar(st),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=P,M++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const j=H.shadow,q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ht,r.pointShadowMatrix[A]=H.shadow.matrix,O++}r.point[A]=P,A++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(st),P.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==A||Z.spotLength!==C||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==B||Z.numPointShadows!==O||Z.numSpotShadows!==L||Z.numSpotMaps!==G||Z.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+G-V,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=I,Z.directionalLength=y,Z.pointLength=A,Z.spotLength=C,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=B,Z.numPointShadows=O,Z.numSpotShadows=L,Z.numSpotMaps=G,Z.numLightProbes=I,r.version=mb++)}function m(p,g){let v=0,x=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(O.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const L=r.rectArea[A];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),A++}else if(O.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function B_(o){const e=new _b(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function vb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new B_(o),e.set(l,[d])):c>=h.length?(d=new B_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mb(o,e,i){let r=new av;const l=new ze,c=new ze,h=new Ke,d=new Wx({depthPacking:nx}),m=new qx,p={},g=i.maxTextureSize,v={[za]:zn,[zn]:za,[ji]:ji},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Sb,fragmentShader:xb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Sr;A.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yi(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z_;let _=this.type;this.render=function(V,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Pa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=_!==Zi&&this.type===Zi,_t=_===Zi&&this.type!==Zi;for(let ht=0,P=V.length;ht<P;ht++){const j=V[ht],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Mt=q.getFrameExtents();if(l.multiply(Mt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,q.mapSize.y=c.y)),q.map===null||st===!0||_t===!0){const $=this.type!==Zi?{minFilter:di,magFilter:di}:{};q.map!==null&&q.map.dispose(),q.map=new vr(l.x,l.y,$),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const U=q.getViewportCount();for(let $=0;$<U;$++){const vt=q.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),lt.viewport(h),q.updateMatrices(j,$),r=q.getFrustum(),L(I,Z,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Zi&&B(q,Z),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,H)};function B(V,I){const Z=e.update(C);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new vr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,x,C,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(I,null,Z,y,C,null)}function O(V,I,Z,w){let R=null;const H=Z.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)R=H;else if(R=Z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const lt=R.uuid,st=I.uuid;let _t=p[lt];_t===void 0&&(_t={},p[lt]=_t);let ht=_t[st];ht===void 0&&(ht=R.clone(),_t[st]=ht,I.addEventListener("dispose",G)),R=ht}if(R.visible=I.visible,R.wireframe=I.wireframe,w===Zi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=Z}return R}function L(V,I,Z,w,R){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===Zi)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,V.matrixWorld);const st=e.update(V),_t=V.material;if(Array.isArray(_t)){const ht=st.groups;for(let P=0,j=ht.length;P<j;P++){const q=ht[P],Mt=_t[q.materialIndex];if(Mt&&Mt.visible){const U=O(V,Mt,w,R);V.onBeforeShadow(o,V,I,Z,st,U,q),o.renderBufferDirect(Z,null,st,U,V,q),V.onAfterShadow(o,V,I,Z,st,U,q)}}}else if(_t.visible){const ht=O(V,_t,w,R);V.onBeforeShadow(o,V,I,Z,st,ht,null),o.renderBufferDirect(Z,null,st,ht,V,null),V.onAfterShadow(o,V,I,Z,st,ht,null)}}const lt=V.children;for(let st=0,_t=lt.length;st<_t;st++)L(lt[st],I,Z,w,R)}function G(V){V.target.removeEventListener("dispose",G);for(const Z in p){const w=p[Z],R=V.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const yb={[uh]:ch,[fh]:ph,[hh]:mh,[ps]:dh,[ch]:uh,[ph]:fh,[mh]:hh,[dh]:ps};function Eb(o,e){function i(){let X=!1;const Ut=new Ke;let ot=null;const mt=new Ke(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!X&&(o.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){X=Pt},setClear:function(Pt,Lt,ne,Fe,Qe){Qe===!0&&(Pt*=Fe,Lt*=Fe,ne*=Fe),Ut.set(Pt,Lt,ne,Fe),mt.equals(Ut)===!1&&(o.clearColor(Pt,Lt,ne,Fe),mt.copy(Ut))},reset:function(){X=!1,ot=null,mt.set(-1,0,0,0)}}}function r(){let X=!1,Ut=!1,ot=null,mt=null,Pt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ne=e.get("EXT_clip_control");Lt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const Fe=Pt;Pt=null,this.setClear(Fe)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?bt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(Lt){ot!==Lt&&!X&&(o.depthMask(Lt),ot=Lt)},setFunc:function(Lt){if(Ut&&(Lt=yb[Lt]),mt!==Lt){switch(Lt){case uh:o.depthFunc(o.NEVER);break;case ch:o.depthFunc(o.ALWAYS);break;case fh:o.depthFunc(o.LESS);break;case ps:o.depthFunc(o.LEQUAL);break;case hh:o.depthFunc(o.EQUAL);break;case dh:o.depthFunc(o.GEQUAL);break;case ph:o.depthFunc(o.GREATER);break;case mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}mt=Lt}},setLocked:function(Lt){X=Lt},setClear:function(Lt){Pt!==Lt&&(Ut&&(Lt=1-Lt),o.clearDepth(Lt),Pt=Lt)},reset:function(){X=!1,ot=null,mt=null,Pt=null,Ut=!1}}}function l(){let X=!1,Ut=null,ot=null,mt=null,Pt=null,Lt=null,ne=null,Fe=null,Qe=null;return{setTest:function(xe){X||(xe?bt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(xe){Ut!==xe&&!X&&(o.stencilMask(xe),Ut=xe)},setFunc:function(xe,Fn,cn){(ot!==xe||mt!==Fn||Pt!==cn)&&(o.stencilFunc(xe,Fn,cn),ot=xe,mt=Fn,Pt=cn)},setOp:function(xe,Fn,cn){(Lt!==xe||ne!==Fn||Fe!==cn)&&(o.stencilOp(xe,Fn,cn),Lt=xe,ne=Fn,Fe=cn)},setLocked:function(xe){X=xe},setClear:function(xe){Qe!==xe&&(o.clearStencil(xe),Qe=xe)},reset:function(){X=!1,Ut=null,ot=null,mt=null,Pt=null,Lt=null,ne=null,Fe=null,Qe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,B=null,O=null,L=null,G=null,V=null,I=new be(0,0,0),Z=0,w=!1,R=null,H=null,lt=null,st=null,_t=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=j>=2);let Mt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new Ke().fromArray($),Q=new Ke().fromArray(vt);function dt(X,Ut,ot,mt){const Pt=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(X,Lt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<ot;ne++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ut+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Lt}const St={};St[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(o.DEPTH_TEST),h.setFunc(ps),pe(!1),ee(Vg),bt(o.CULL_FACE),z(Pa);function bt(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function Dt(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function re(X,Ut){return v[X]!==Ut?(o.bindFramebuffer(X,Ut),v[X]=Ut,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Zt(X,Ut){let ot=y,mt=!1;if(X){ot=x.get(Ut),ot===void 0&&(ot=[],x.set(Ut,ot));const Pt=X.textures;if(ot.length!==Pt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,ne=Pt.length;Lt<ne;Lt++)ot[Lt]=o.COLOR_ATTACHMENT0+Lt;ot.length=Pt.length,mt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,mt=!0);mt&&o.drawBuffers(ot)}function Ie(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const Oe={[hr]:o.FUNC_ADD,[CS]:o.FUNC_SUBTRACT,[wS]:o.FUNC_REVERSE_SUBTRACT};Oe[DS]=o.MIN,Oe[US]=o.MAX;const ue={[LS]:o.ZERO,[NS]:o.ONE,[OS]:o.SRC_COLOR,[oh]:o.SRC_ALPHA,[HS]:o.SRC_ALPHA_SATURATE,[IS]:o.DST_COLOR,[BS]:o.DST_ALPHA,[PS]:o.ONE_MINUS_SRC_COLOR,[lh]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[zS]:o.ONE_MINUS_DST_ALPHA,[GS]:o.CONSTANT_COLOR,[VS]:o.ONE_MINUS_CONSTANT_COLOR,[XS]:o.CONSTANT_ALPHA,[kS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(X,Ut,ot,mt,Pt,Lt,ne,Fe,Qe,xe){if(X===Pa){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(bt(o.BLEND),C=!0),X!==RS){if(X!==M||xe!==w){if((_!==hr||L!==hr)&&(o.blendEquation(o.FUNC_ADD),_=hr,L=hr),xe)switch(X){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xg:o.blendFunc(o.ONE,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,O=null,G=null,V=null,I.set(0,0,0),Z=0,M=X,w=xe}return}Pt=Pt||Ut,Lt=Lt||ot,ne=ne||mt,(Ut!==_||Pt!==L)&&(o.blendEquationSeparate(Oe[Ut],Oe[Pt]),_=Ut,L=Pt),(ot!==B||mt!==O||Lt!==G||ne!==V)&&(o.blendFuncSeparate(ue[ot],ue[mt],ue[Lt],ue[ne]),B=ot,O=mt,G=Lt,V=ne),(Fe.equals(I)===!1||Qe!==Z)&&(o.blendColor(Fe.r,Fe.g,Fe.b,Qe),I.copy(Fe),Z=Qe),M=X,w=!1}function Dn(X,Ut){X.side===ji?Dt(o.CULL_FACE):bt(o.CULL_FACE);let ot=X.side===zn;Ut&&(ot=!ot),pe(ot),X.blending===hs&&X.transparent===!1?z(Pa):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const mt=X.stencilWrite;d.setTest(mt),mt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ce(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function ee(X){X!==TS?(bt(o.CULL_FACE),X!==H&&(X===Vg?o.cullFace(o.BACK):X===bS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),H=X}function Xt(X){X!==lt&&(P&&o.lineWidth(X),lt=X)}function Ce(X,Ut,ot){X?(bt(o.POLYGON_OFFSET_FILL),(st!==Ut||_t!==ot)&&(o.polygonOffset(Ut,ot),st=Ut,_t=ot)):Dt(o.POLYGON_OFFSET_FILL)}function Ht(X){X?bt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function D(X){X===void 0&&(X=o.TEXTURE0+ht-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function T(X,Ut,ot){ot===void 0&&(Mt===null?ot=o.TEXTURE0+ht-1:ot=Mt);let mt=U[ot];mt===void 0&&(mt={type:void 0,texture:void 0},U[ot]=mt),(mt.type!==X||mt.texture!==Ut)&&(Mt!==ot&&(o.activeTexture(ot),Mt=ot),o.bindTexture(X,Ut||St[X]),mt.type=X,mt.texture=Ut)}function tt(){const X=U[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){xt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Ot(X){Q.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function oe(X,Ut){let ot=p.get(Ut);ot===void 0&&(ot=new WeakMap,p.set(Ut,ot));let mt=ot.get(X);mt===void 0&&(mt=o.getUniformBlockIndex(Ut,X.name),ot.set(X,mt))}function te(X,Ut){const mt=p.get(Ut).get(X);m.get(Ut)!==mt&&(o.uniformBlockBinding(Ut,mt,X.__bindingPointIndex),m.set(Ut,mt))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Mt=null,U={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,B=null,O=null,L=null,G=null,V=null,I=new be(0,0,0),Z=0,w=!1,R=null,H=null,lt=null,st=null,_t=null,xt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:bt,disable:Dt,bindFramebuffer:re,drawBuffers:Zt,useProgram:Ie,setBlending:z,setMaterial:Dn,setFlipSided:pe,setCullFace:ee,setLineWidth:Xt,setPolygonOffset:Ce,setScissorTest:Ht,activeTexture:D,bindTexture:T,unbindTexture:tt,compressedTexImage2D:pt,compressedTexImage3D:yt,texImage2D:zt,texImage3D:qt,updateUBOMapping:oe,uniformBlockBinding:te,texStorage2D:Qt,texStorage3D:Tt,texSubImage2D:ct,texSubImage3D:Nt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ft,scissor:jt,viewport:Ot,reset:we}}function Tb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,T){return y?new OffscreenCanvas(D,T):vu("canvas")}function C(D,T,tt){let pt=1;const yt=Ht(D);if((yt.width>tt||yt.height>tt)&&(pt=tt/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ct=Math.floor(pt*yt.width),Nt=Math.floor(pt*yt.height);v===void 0&&(v=A(ct,Nt));const At=T?A(ct,Nt):v;return At.width=ct,At.height=Nt,At.getContext("2d").drawImage(D,0,0,ct,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ct+"x"+Nt+")."),At}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,T,tt,pt,yt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ct=T;if(T===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),T===o.RGBA){const Nt=yt?gu:Ee.getTransfer(pt);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=Nt===Ne?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function L(D,T){let tt;return D?T===null||T===_r||T===To?tt=o.DEPTH24_STENCIL8:T===Ki?tt=o.DEPTH32F_STENCIL8:T===Eo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_r||T===To?tt=o.DEPTH_COMPONENT24:T===Ki?tt=o.DEPTH_COMPONENT32F:T===Eo&&(tt=o.DEPTH_COMPONENT16),tt}function G(D,T){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function V(D){const T=D.target;T.removeEventListener("dispose",V),Z(T),T.isVideoTexture&&g.delete(T)}function I(D){const T=D.target;T.removeEventListener("dispose",I),R(T)}function Z(D){const T=r.get(D);if(T.__webglInit===void 0)return;const tt=D.source,pt=x.get(tt);if(pt){const yt=pt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(D),Object.keys(pt).length===0&&x.delete(tt)}r.remove(D)}function w(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const tt=D.source,pt=x.get(tt);delete pt[T.__cacheKey],h.memory.textures--}function R(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let yt=0;yt<T.__webglFramebuffer[pt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[pt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=D.textures;for(let pt=0,yt=tt.length;pt<yt;pt++){const ct=r.get(tt[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(tt[pt])}r.remove(D)}let H=0;function lt(){H=0}function st(){const D=H;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function _t(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ht(D,T){const tt=r.get(D);if(D.isVideoTexture&&Xt(D),D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){const pt=D.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,D,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function P(D,T){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){Q(tt,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function j(D,T){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){Q(tt,D,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function q(D,T){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){dt(tt,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const Mt={[vh]:o.REPEAT,[pr]:o.CLAMP_TO_EDGE,[Sh]:o.MIRRORED_REPEAT},U={[di]:o.NEAREST,[tx]:o.NEAREST_MIPMAP_NEAREST,[Gl]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[Uf]:o.LINEAR_MIPMAP_NEAREST,[mr]:o.LINEAR_MIPMAP_LINEAR},$={[rx]:o.NEVER,[fx]:o.ALWAYS,[sx]:o.LESS,[Z_]:o.LEQUAL,[ox]:o.EQUAL,[cx]:o.GEQUAL,[lx]:o.GREATER,[ux]:o.NOTEQUAL};function vt(D,T){if(T.type===Ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===Uf||T.magFilter===Gl||T.magFilter===mr||T.minFilter===Mi||T.minFilter===Uf||T.minFilter===Gl||T.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==Gl&&T.minFilter!==mr||T.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xt(D,T){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",V));const pt=T.source;let yt=x.get(pt);yt===void 0&&(yt={},x.set(pt,yt));const ct=_t(T);if(ct!==D.__cacheKey){yt[ct]===void 0&&(yt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),yt[ct].usedTimes++;const Nt=yt[D.__cacheKey];Nt!==void 0&&(yt[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&w(T)),D.__cacheKey=ct,D.__webglTexture=yt[ct].texture}return tt}function Q(D,T,tt){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const yt=xt(D,T),ct=T.source;i.bindTexture(pt,D.__webglTexture,o.TEXTURE0+tt);const Nt=r.get(ct);if(ct.version!==Nt.__version||yt===!0){i.activeTexture(o.TEXTURE0+tt);const At=Ee.getPrimaries(Ee.workingColorSpace),Ft=T.colorSpace===Na?null:Ee.getPrimaries(T.colorSpace),Qt=T.colorSpace===Na||At===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Tt=C(T.image,!1,l.maxTextureSize);Tt=Ce(T,Tt);const zt=c.convert(T.format,T.colorSpace),qt=c.convert(T.type);let jt=O(T.internalFormat,zt,qt,T.colorSpace,T.isVideoTexture);vt(pt,T);let Ot;const oe=T.mipmaps,te=T.isVideoTexture!==!0,we=Nt.__version===void 0||yt===!0,X=ct.dataReady,Ut=G(T,Tt);if(T.isDepthTexture)jt=L(T.format===Ao,T.type),we&&(te?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,zt,qt,null));else if(T.isDataTexture)if(oe.length>0){te&&we&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,oe[0].width,oe[0].height);for(let ot=0,mt=oe.length;ot<mt;ot++)Ot=oe[ot],te?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,zt,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,ot,jt,Ot.width,Ot.height,0,zt,qt,Ot.data);T.generateMipmaps=!1}else te?(we&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,Tt.width,Tt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,zt,qt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,zt,qt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,oe[0].width,oe[0].height,Tt.depth);for(let ot=0,mt=oe.length;ot<mt;ot++)if(Ot=oe[ot],T.format!==hi)if(zt!==null)if(te){if(X)if(T.layerUpdates.size>0){const Pt=h_(Ot.width,Ot.height,T.format,T.type);for(const Lt of T.layerUpdates){const ne=Ot.data.subarray(Lt*Pt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Lt,Ot.width,Ot.height,1,zt,ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ot.width,Ot.height,Tt.depth,zt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,jt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ot.width,Ot.height,Tt.depth,zt,qt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,jt,Ot.width,Ot.height,Tt.depth,0,zt,qt,Ot.data)}else{te&&we&&i.texStorage2D(o.TEXTURE_2D,Ut,jt,oe[0].width,oe[0].height);for(let ot=0,mt=oe.length;ot<mt;ot++)Ot=oe[ot],T.format!==hi?zt!==null?te?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,zt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,zt,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,ot,jt,Ot.width,Ot.height,0,zt,qt,Ot.data)}else if(T.isDataArrayTexture)if(te){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,jt,Tt.width,Tt.height,Tt.depth),X)if(T.layerUpdates.size>0){const ot=h_(Tt.width,Tt.height,T.format,T.type);for(const mt of T.layerUpdates){const Pt=Tt.data.subarray(mt*ot/Tt.data.BYTES_PER_ELEMENT,(mt+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,zt,qt,Pt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,qt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,zt,qt,Tt.data);else if(T.isData3DTexture)te?(we&&i.texStorage3D(o.TEXTURE_3D,Ut,jt,Tt.width,Tt.height,Tt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,qt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,zt,qt,Tt.data);else if(T.isFramebufferTexture){if(we)if(te)i.texStorage2D(o.TEXTURE_2D,Ut,jt,Tt.width,Tt.height);else{let ot=Tt.width,mt=Tt.height;for(let Pt=0;Pt<Ut;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,jt,ot,mt,0,zt,qt,null),ot>>=1,mt>>=1}}else if(oe.length>0){if(te&&we){const ot=Ht(oe[0]);i.texStorage2D(o.TEXTURE_2D,Ut,jt,ot.width,ot.height)}for(let ot=0,mt=oe.length;ot<mt;ot++)Ot=oe[ot],te?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,zt,qt,Ot):i.texImage2D(o.TEXTURE_2D,ot,jt,zt,qt,Ot);T.generateMipmaps=!1}else if(te){if(we){const ot=Ht(Tt);i.texStorage2D(o.TEXTURE_2D,Ut,jt,ot.width,ot.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,qt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,zt,qt,Tt);M(T)&&_(pt),Nt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function dt(D,T,tt){if(T.image.length!==6)return;const pt=xt(D,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+tt);const ct=r.get(yt);if(yt.version!==ct.__version||pt===!0){i.activeTexture(o.TEXTURE0+tt);const Nt=Ee.getPrimaries(Ee.workingColorSpace),At=T.colorSpace===Na?null:Ee.getPrimaries(T.colorSpace),Ft=T.colorSpace===Na||Nt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let mt=0;mt<6;mt++)!Qt&&!Tt?zt[mt]=C(T.image[mt],!0,l.maxCubemapSize):zt[mt]=Tt?T.image[mt].image:T.image[mt],zt[mt]=Ce(T,zt[mt]);const qt=zt[0],jt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),oe=O(T.internalFormat,jt,Ot,T.colorSpace),te=T.isVideoTexture!==!0,we=ct.__version===void 0||pt===!0,X=yt.dataReady;let Ut=G(T,qt);vt(o.TEXTURE_CUBE_MAP,T);let ot;if(Qt){te&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,qt.width,qt.height);for(let mt=0;mt<6;mt++){ot=zt[mt].mipmaps;for(let Pt=0;Pt<ot.length;Pt++){const Lt=ot[Pt];T.format!==hi?jt!==null?te?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,0,0,Lt.width,Lt.height,jt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,oe,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,0,0,Lt.width,Lt.height,jt,Ot,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,oe,Lt.width,Lt.height,0,jt,Ot,Lt.data)}}}else{if(ot=T.mipmaps,te&&we){ot.length>0&&Ut++;const mt=Ht(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,zt[mt].width,zt[mt].height,jt,Ot,zt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,zt[mt].width,zt[mt].height,0,jt,Ot,zt[mt].data);for(let Pt=0;Pt<ot.length;Pt++){const ne=ot[Pt].image[mt].image;te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,0,0,ne.width,ne.height,jt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,oe,ne.width,ne.height,0,jt,Ot,ne.data)}}else{te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,jt,Ot,zt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,jt,Ot,zt[mt]);for(let Pt=0;Pt<ot.length;Pt++){const Lt=ot[Pt];te?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,0,0,jt,Ot,Lt.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,oe,jt,Ot,Lt.image[mt])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),ct.__version=yt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function St(D,T,tt,pt,yt,ct){const Nt=c.convert(tt.format,tt.colorSpace),At=c.convert(tt.type),Ft=O(tt.internalFormat,Nt,At,tt.colorSpace),Qt=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!Qt.__hasExternalTextures){const zt=Math.max(1,T.width>>ct),qt=Math.max(1,T.height>>ct);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ct,Ft,zt,qt,T.depth,0,Nt,At,null):i.texImage2D(yt,ct,Ft,zt,qt,0,Nt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,yt,Tt.__webglTexture,0,pe(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,yt,Tt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(D,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const pt=T.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ct=L(T.stencilBuffer,yt),Nt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=pe(T);ee(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ct,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ct,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ct,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,D)}else{const pt=T.textures;for(let yt=0;yt<pt.length;yt++){const ct=pt[yt],Nt=c.convert(ct.format,ct.colorSpace),At=c.convert(ct.type),Ft=O(ct.internalFormat,Nt,At,ct.colorSpace),Qt=pe(T);tt&&ee(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Ft,T.width,T.height):ee(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const yt=pt.__webglTexture,ct=pe(T);if(T.depthTexture.format===bo)ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Ao)ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function re(D){const T=r.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=pt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=D.texture.mipmaps;pt&&pt.length>0?Dt(T.__webglFramebuffer[0],D):Dt(T.__webglFramebuffer,D)}else if(tt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),bt(T.__webglDepthbuffer[pt],D,!1);else{const yt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ct)}}else{const pt=D.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),bt(T.__webglDepthbuffer,D,!1);else{const yt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(D,T,tt){const pt=r.get(D);T!==void 0&&St(pt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&re(D)}function Ie(D){const T=D.texture,tt=r.get(D),pt=r.get(T);D.addEventListener("dispose",I);const yt=D.textures,ct=D.isWebGLCubeRenderTarget===!0,Nt=yt.length>1;if(Nt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,h.memory.textures++),ct){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)tt.__webglFramebuffer[At][Ft]=o.createFramebuffer()}else tt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)tt.__webglFramebuffer[At]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let At=0,Ft=yt.length;At<Ft;At++){const Qt=r.get(yt[At]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&ee(D)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<yt.length;At++){const Ft=yt[At];tt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const Qt=c.convert(Ft.format,Ft.colorSpace),Tt=c.convert(Ft.type),zt=O(Ft.internalFormat,Qt,Tt,Ft.colorSpace,D.isXRRenderTarget===!0),qt=pe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,zt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)St(tt.__webglFramebuffer[At][Ft],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ft);else St(tt.__webglFramebuffer[At],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let At=0,Ft=yt.length;At<Ft;At++){const Qt=yt[At],Tt=r.get(Qt);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),vt(o.TEXTURE_2D,Qt),St(tt.__webglFramebuffer,D,Qt,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),M(Qt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(At=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,pt.__webglTexture),vt(At,T),T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)St(tt.__webglFramebuffer[Ft],D,T,o.COLOR_ATTACHMENT0,At,Ft);else St(tt.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,At,0);M(T)&&_(At),i.unbindTexture()}D.depthBuffer&&re(D)}function Oe(D){const T=D.textures;for(let tt=0,pt=T.length;tt<pt;tt++){const yt=T[tt];if(M(yt)){const ct=B(D),Nt=r.get(yt).__webglTexture;i.bindTexture(ct,Nt),_(ct),i.unbindTexture()}}}const ue=[],z=[];function Dn(D){if(D.samples>0){if(ee(D)===!1){const T=D.textures,tt=D.width,pt=D.height;let yt=o.COLOR_BUFFER_BIT;const ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=r.get(D),At=T.length>1;if(At)for(let Qt=0;Qt<T.length;Qt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ft=D.texture.mipmaps;Ft&&Ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Qt]);const Tt=r.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,yt,o.NEAREST),m===!0&&(ue.length=0,z.length=0,ue.push(o.COLOR_ATTACHMENT0+Qt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ue.push(ct),z.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Qt=0;Qt<T.length;Qt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Qt]);const Tt=r.get(T[Qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function pe(D){return Math.min(l.maxSamples,D.samples)}function ee(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(D){const T=h.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Ce(D,T){const tt=D.colorSpace,pt=D.format,yt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==_s&&tt!==Na&&(Ee.getTransfer(tt)===Ne?(pt!==hi||yt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ht(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ee}function bb(o,e){function i(r,l=Na){let c;const h=Ee.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===Qh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Jh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===H_)return o.BYTE;if(r===G_)return o.SHORT;if(r===Eo)return o.UNSIGNED_SHORT;if(r===Kh)return o.INT;if(r===_r)return o.UNSIGNED_INT;if(r===Ki)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===X_)return o.ALPHA;if(r===k_)return o.RGB;if(r===hi)return o.RGBA;if(r===bo)return o.DEPTH_COMPONENT;if(r===Ao)return o.DEPTH_STENCIL;if(r===W_)return o.RED;if(r===$h)return o.RED_INTEGER;if(r===q_)return o.RG;if(r===td)return o.RG_INTEGER;if(r===ed)return o.RGBA_INTEGER;if(r===uu||r===cu||r===fu||r===hu)if(h===Ne)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Mh||r===yh||r===Eh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===bh||r===Ah)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Th||r===bh)return h===Ne?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ah)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===zh||r===Ih||r===Fh||r===Hh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Rh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ch)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ph)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===du||r===Gh||r===Vh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===du)return h===Ne?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Y_||r===Xh||r===kh||r===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===du)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Xh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===To?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new In,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:Ab,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new Mu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wb extends Ss{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,A=null;const C=new Cb,M=i.getContextAttributes();let _=null,B=null;const O=[],L=[],G=new ze;let V=null;const I=new ai;I.viewport=new Ke;const Z=new ai;Z.viewport=new Ke;const w=[I,Z],R=new Kx;let H=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=O[Q];return dt===void 0&&(dt=new $f,O[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=O[Q];return dt===void 0&&(dt=new $f,O[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=O[Q];return dt===void 0&&(dt=new $f,O[Q]=dt),dt.getHandSpace()};function st(Q){const dt=L.indexOf(Q.inputSource);if(dt===-1)return;const St=O[dt];St!==void 0&&(St.update(Q.inputSource,Q.frame,p||h),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function _t(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<O.length;Q++){const dt=L[Q];dt!==null&&(L[Q]=null,O[Q].disconnect(dt))}H=null,lt=null,C.reset(),e.setRenderTarget(_),y=null,x=null,v=null,l=null,B=null,xt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,bt=null,Dt=null;M.depth&&(Dt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?Ao:bo,bt=M.stencil?To:_r);const re={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(re),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new vr(x.textureWidth,x.textureHeight,{format:hi,type:$i,depthTexture:new rv(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new vr(y.framebufferWidth,y.framebufferHeight,{format:hi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(Q){for(let dt=0;dt<Q.removed.length;dt++){const St=Q.removed[dt],bt=L.indexOf(St);bt>=0&&(L[bt]=null,O[bt].disconnect(St))}for(let dt=0;dt<Q.added.length;dt++){const St=Q.added[dt];let bt=L.indexOf(St);if(bt===-1){for(let re=0;re<O.length;re++)if(re>=L.length){L.push(St),bt=re;break}else if(L[re]===null){L[re]=St,bt=re;break}if(bt===-1)break}const Dt=O[bt];Dt&&Dt.connect(St)}}const P=new rt,j=new rt;function q(Q,dt,St){P.setFromMatrixPosition(dt.matrixWorld),j.setFromMatrixPosition(St.matrixWorld);const bt=P.distanceTo(j),Dt=dt.projectionMatrix.elements,re=St.projectionMatrix.elements,Zt=Dt[14]/(Dt[10]-1),Ie=Dt[14]/(Dt[10]+1),Oe=(Dt[9]+1)/Dt[5],ue=(Dt[9]-1)/Dt[5],z=(Dt[8]-1)/Dt[0],Dn=(re[8]+1)/re[0],pe=Zt*z,ee=Zt*Dn,Xt=bt/(-z+Dn),Ce=Xt*-z;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ce),Q.translateZ(Xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ht=Zt+Xt,D=Ie+Xt,T=pe-Ce,tt=ee+(bt-Ce),pt=Oe*Ie/D*Ht,yt=ue*Ie/D*Ht;Q.projectionMatrix.makePerspective(T,tt,pt,yt,Ht,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let dt=Q.near,St=Q.far;C.texture!==null&&(C.depthNear>0&&(dt=C.depthNear),C.depthFar>0&&(St=C.depthFar)),R.near=Z.near=I.near=dt,R.far=Z.far=I.far=St,(H!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,lt=R.far),I.layers.mask=Q.layers.mask|2,Z.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|Z.layers.mask;const bt=Q.parent,Dt=R.cameras;Mt(R,bt);for(let re=0;re<Dt.length;re++)Mt(Dt[re],bt);Dt.length===2?q(R,I,Z):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,bt)};function U(Q,dt,St){St===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function vt(Q,dt){if(g=dt.getViewerPose(p||h),A=dt,g!==null){const St=g.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let bt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Zt=0;Zt<St.length;Zt++){const Ie=St[Zt];let Oe=null;if(y!==null)Oe=y.getViewport(Ie);else{const z=v.getViewSubImage(x,Ie);Oe=z.viewport,Zt===0&&(e.setRenderTargetTextures(B,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(B))}let ue=w[Zt];ue===void 0&&(ue=new ai,ue.layers.enable(Zt),ue.viewport=new Ke,w[Zt]=ue),ue.matrix.fromArray(Ie.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ie.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Zt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(ue)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(St[0]);Zt&&Zt.isValid&&Zt.texture&&C.init(e,Zt,l.renderState)}}for(let St=0;St<O.length;St++){const bt=L[St],Dt=O[St];bt!==null&&Dt!==void 0&&Dt.update(bt,dt,p||h)}$&&$(Q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),A=null}const xt=new sv;xt.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const ur=new ta,Db=new nn;function Ub(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,ev(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,O,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,L)):_.isMeshMatcapMaterial?(c(M,_),A(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,B,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===zn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===zn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=e.get(_),O=B.envMap,L=B.envMapRotation;O&&(M.envMap.value=O,ur.copy(L),ur.x*=-1,ur.y*=-1,ur.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),M.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(ur)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,B,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const B=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Lb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const L=O.program;r.uniformBlockBinding(B,L)}function p(B,O){let L=l[B.id];L===void 0&&(A(B),L=g(B),l[B.id]=L,B.addEventListener("dispose",M));const G=O.program;r.updateUBOMapping(B,G);const V=e.render.frame;c[B.id]!==V&&(x(B),c[B.id]=V)}function g(B){const O=v();B.__bindingPointIndex=O;const L=o.createBuffer(),G=B.__size,V=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,G,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const O=l[B.id],L=B.uniforms,G=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let V=0,I=L.length;V<I;V++){const Z=Array.isArray(L[V])?L[V]:[L[V]];for(let w=0,R=Z.length;w<R;w++){const H=Z[w];if(y(H,V,w,G)===!0){const lt=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let _t=0;for(let ht=0;ht<st.length;ht++){const P=st[ht],j=C(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,lt+_t,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,_t),_t+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,O,L,G){const V=B.value,I=O+"_"+L;if(G[I]===void 0)return typeof V=="number"||typeof V=="boolean"?G[I]=V:G[I]=V.clone(),!0;{const Z=G[I];if(typeof V=="number"||typeof V=="boolean"){if(Z!==V)return G[I]=V,!0}else if(Z.equals(V)===!1)return Z.copy(V),!0}return!1}function A(B){const O=B.uniforms;let L=0;const G=16;for(let I=0,Z=O.length;I<Z;I++){const w=Array.isArray(O[I])?O[I]:[O[I]];for(let R=0,H=w.length;R<H;R++){const lt=w[R],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let _t=0,ht=st.length;_t<ht;_t++){const P=st[_t],j=C(P),q=L%G,Mt=q%j.boundary,U=q+Mt;L+=Mt,U!==0&&G-U<j.storage&&(L+=G-U),lt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=L,L+=j.storage}}}const V=L%G;return V>0&&(L+=G-V),B.__size=L,B.__cache={},this}function C(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function M(B){const O=B.target;O.removeEventListener("dispose",M);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class Nb{constructor(e={}){const{canvas:i=dx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let G=!1;this._outputColorSpace=ii;let V=0,I=0,Z=null,w=-1,R=null;const H=new Ke,lt=new Ke;let st=null;const _t=new be(0);let ht=0,P=i.width,j=i.height,q=1,Mt=null,U=null;const $=new Ke(0,0,P,j),vt=new Ke(0,0,P,j);let xt=!1;const Q=new av;let dt=!1,St=!1;const bt=new nn,Dt=new nn,re=new rt,Zt=new Ke,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ue(){return Z===null?q:1}let z=r;function Dn(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jh}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),z===null){const W="webgl2";if(z=Dn(W,b),z===null)throw Dn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,ee,Xt,Ce,Ht,D,T,tt,pt,yt,ct,Nt,At,Ft,Qt,Tt,zt,qt,jt,Ot,oe,te,we,X;function Ut(){pe=new XE(z),pe.init(),te=new bb(z,pe),ee=new BE(z,pe,e,te),Xt=new Eb(z,pe),ee.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),Ce=new qE(z),Ht=new cb,D=new Tb(z,pe,Xt,Ht,ee,te,Ce),T=new IE(L),tt=new VE(L),pt=new Jx(z),we=new OE(z,pt),yt=new kE(z,pt,Ce,we),ct=new ZE(z,yt,pt,Ce),jt=new YE(z,ee,D),Tt=new zE(Ht),Nt=new ub(L,T,tt,pe,ee,we,Tt),At=new Ub(L,Ht),Ft=new hb,Qt=new vb(pe),qt=new NE(L,T,tt,Xt,ct,y,m),zt=new Mb(L,ct,ee),X=new Lb(z,Ce,ee,Xt),Ot=new PE(z,pe,Ce),oe=new WE(z,pe,Ce),Ce.programs=Nt.programs,L.capabilities=ee,L.extensions=pe,L.properties=Ht,L.renderLists=Ft,L.shadowMap=zt,L.state=Xt,L.info=Ce}Ut();const ot=new wb(L,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(P,j,!1))},this.getSize=function(b){return b.set(P,j)},this.setSize=function(b,W,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,j=W,i.width=Math.floor(b*q),i.height=Math.floor(W*q),it===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(P*q,j*q).floor()},this.setDrawingBufferSize=function(b,W,it){P=b,j=W,q=it,i.width=Math.floor(b*it),i.height=Math.floor(W*it),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,W,it,at){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,W,it,at),Xt.viewport(H.copy($).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,W,it,at){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,W,it,at),Xt.scissor(lt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){Xt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){Mt=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,it=!0){let at=0;if(b){let Y=!1;if(Z!==null){const Et=Z.texture.format;Y=Et===ed||Et===td||Et===$h}if(Y){const Et=Z.texture.type,Rt=Et===$i||Et===_r||Et===Eo||Et===To||Et===Qh||Et===Jh,Ct=qt.getClearColor(),Bt=qt.getClearAlpha(),Jt=Ct.r,kt=Ct.g,Vt=Ct.b;Rt?(A[0]=Jt,A[1]=kt,A[2]=Vt,A[3]=Bt,z.clearBufferuiv(z.COLOR,0,A)):(C[0]=Jt,C[1]=kt,C[2]=Vt,C[3]=Bt,z.clearBufferiv(z.COLOR,0,C))}else at|=z.COLOR_BUFFER_BIT}W&&(at|=z.DEPTH_BUFFER_BIT),it&&(at|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),qt.dispose(),Ft.dispose(),Qt.dispose(),Ht.dispose(),T.dispose(),tt.dispose(),ct.dispose(),we.dispose(),X.dispose(),Nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",an),ot.removeEventListener("sessionend",gn),Un.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=Ce.autoReset,W=zt.enabled,it=zt.autoUpdate,at=zt.needsUpdate,Y=zt.type;Ut(),Ce.autoReset=b,zt.enabled=W,zt.autoUpdate=it,zt.needsUpdate=at,zt.type=Y}function Lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const W=b.target;W.removeEventListener("dispose",ne),Fe(W)}function Fe(b){Qe(b),Ht.remove(b)}function Qe(b){const W=Ht.get(b).programs;W!==void 0&&(W.forEach(function(it){Nt.releaseProgram(it)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,it,at,Y,Et){W===null&&(W=Ie);const Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ct=Ga(b,W,it,at,Y);Xt.setMaterial(at,Rt);let Bt=it.index,Jt=1;if(at.wireframe===!0){if(Bt=yt.getWireframeAttribute(it),Bt===void 0)return;Jt=2}const kt=it.drawRange,Vt=it.attributes.position;let fe=kt.start*Jt,Me=(kt.start+kt.count)*Jt;Et!==null&&(fe=Math.max(fe,Et.start*Jt),Me=Math.min(Me,(Et.start+Et.count)*Jt)),Bt!==null?(fe=Math.max(fe,0),Me=Math.min(Me,Bt.count)):Vt!=null&&(fe=Math.max(fe,0),Me=Math.min(Me,Vt.count));const Xe=Me-fe;if(Xe<0||Xe===1/0)return;we.setup(Y,at,Ct,it,Bt);let me,ge=Ot;if(Bt!==null&&(me=pt.get(Bt),ge=oe,ge.setIndex(me)),Y.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*ue()),ge.setMode(z.LINES)):ge.setMode(z.TRIANGLES);else if(Y.isLine){let Wt=at.linewidth;Wt===void 0&&(Wt=1),Xt.setLineWidth(Wt*ue()),Y.isLineSegments?ge.setMode(z.LINES):Y.isLineLoop?ge.setMode(z.LINE_LOOP):ge.setMode(z.LINE_STRIP)}else Y.isPoints?ge.setMode(z.POINTS):Y.isSprite&&ge.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)pu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Wt=Y._multiDrawStarts,We=Y._multiDrawCounts,Se=Y._multiDrawCount,Mn=Bt?pt.get(Bt).bytesPerElement:1,aa=Ht.get(at).currentProgram.getUniforms();for(let He=0;He<Se;He++)aa.setValue(z,"_gl_DrawID",He),ge.render(Wt[He]/Mn,We[He])}else if(Y.isInstancedMesh)ge.renderInstances(fe,Xe,Y.count);else if(it.isInstancedBufferGeometry){const Wt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,We=Math.min(it.instanceCount,Wt);ge.renderInstances(fe,Xe,We)}else ge.render(fe,Xe)};function xe(b,W,it){b.transparent===!0&&b.side===ji&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,na(b,W,it),b.side=za,b.needsUpdate=!0,na(b,W,it),b.side=ji):na(b,W,it)}this.compile=function(b,W,it=null){it===null&&(it=b),_=Qt.get(it),_.init(W),O.push(_),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),b!==it&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const at=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const Ct=Et[Rt];xe(Ct,it,Y),at.add(Ct)}else xe(Et,it,Y),at.add(Et)}),_=O.pop(),at},this.compileAsync=function(b,W,it=null){const at=this.compile(b,W,it);return new Promise(Y=>{function Et(){if(at.forEach(function(Rt){Ht.get(Rt).currentProgram.isReady()&&at.delete(Rt)}),at.size===0){Y(b);return}setTimeout(Et,10)}pe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Fn=null;function cn(b){Fn&&Fn(b)}function an(){Un.stop()}function gn(){Un.start()}const Un=new sv;Un.setAnimationLoop(cn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(b){Fn=b,ot.setAnimationLoop(b),b===null?Un.stop():Un.start()},ot.addEventListener("sessionstart",an),ot.addEventListener("sessionend",gn),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,W,Z),_=Qt.get(b,O.length),_.init(W),O.push(_),Dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Dt),St=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,St),M=Ft.get(b,B.length),M.init(),B.push(M),ot.enabled===!0&&ot.isPresenting===!0){const Et=L.xr.getDepthSensingMesh();Et!==null&&Fa(Et,W,-1/0,L.sortObjects)}Fa(b,W,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(Mt,U),Oe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Oe&&qt.addToRenderList(M,b),this.info.render.frame++,dt===!0&&Tt.beginShadows();const it=_.state.shadowsArray;zt.render(it,b,W),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=M.opaque,Y=M.transmissive;if(_.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Y.length>0)for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Bt=Et[Rt];Lo(at,Y,b,Bt)}Oe&&qt.render(b);for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Bt=Et[Rt];Uo(M,b,Bt,Bt.viewport)}}else Y.length>0&&Lo(at,Y,b,W),Oe&&qt.render(b),Uo(M,b,W);Z!==null&&I===0&&(D.updateMultisampleRenderTarget(Z),D.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(L,b,W),we.resetDefaultState(),w=-1,R=null,O.pop(),O.length>0?(_=O[O.length-1],dt===!0&&Tt.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Fa(b,W,it,at){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){at&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Dt);const Rt=ct.update(b),Ct=b.material;Ct.visible&&M.push(b,Rt,Ct,it,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Rt=ct.update(b),Ct=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Zt.copy(Rt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ct)){const Bt=Rt.groups;for(let Jt=0,kt=Bt.length;Jt<kt;Jt++){const Vt=Bt[Jt],fe=Ct[Vt.materialIndex];fe&&fe.visible&&M.push(b,Rt,fe,it,Zt.z,Vt)}}else Ct.visible&&M.push(b,Rt,Ct,it,Zt.z,null)}}const Et=b.children;for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++)Fa(Et[Rt],W,it,at)}function Uo(b,W,it,at){const Y=b.opaque,Et=b.transmissive,Rt=b.transparent;_.setupLightsView(it),dt===!0&&Tt.setGlobalState(L.clippingPlanes,it),at&&Xt.viewport(H.copy(at)),Y.length>0&&Ha(Y,W,it),Et.length>0&&Ha(Et,W,it),Rt.length>0&&Ha(Rt,W,it),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Lo(b,W,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new vr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Ro:$i,minFilter:mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Et=_.state.transmissionRenderTarget[at.id],Rt=at.viewport||H;Et.setSize(Rt.z*L.transmissionResolutionScale,Rt.w*L.transmissionResolutionScale);const Ct=L.getRenderTarget();L.setRenderTarget(Et),L.getClearColor(_t),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),Oe&&qt.render(it);const Bt=L.toneMapping;L.toneMapping=Ba;const Jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),dt===!0&&Tt.setGlobalState(L.clippingPlanes,at),Ha(b,it,at),D.updateMultisampleRenderTarget(Et),D.updateRenderTargetMipmap(Et),pe.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Vt=0,fe=W.length;Vt<fe;Vt++){const Me=W[Vt],Xe=Me.object,me=Me.geometry,ge=Me.material,Wt=Me.group;if(ge.side===ji&&Xe.layers.test(at.layers)){const We=ge.side;ge.side=zn,ge.needsUpdate=!0,ea(Xe,it,at,me,ge,Wt),ge.side=We,ge.needsUpdate=!0,kt=!0}}kt===!0&&(D.updateMultisampleRenderTarget(Et),D.updateRenderTargetMipmap(Et))}L.setRenderTarget(Ct),L.setClearColor(_t,ht),Jt!==void 0&&(at.viewport=Jt),L.toneMapping=Bt}function Ha(b,W,it){const at=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Et=b.length;Y<Et;Y++){const Rt=b[Y],Ct=Rt.object,Bt=Rt.geometry,Jt=Rt.group;let kt=Rt.material;kt.allowOverride===!0&&at!==null&&(kt=at),Ct.layers.test(it.layers)&&ea(Ct,W,it,Bt,kt,Jt)}}function ea(b,W,it,at,Y,Et){b.onBeforeRender(L,W,it,at,Y,Et),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(L,W,it,at,b,Et),Y.transparent===!0&&Y.side===ji&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,L.renderBufferDirect(it,W,at,Y,b,Et),Y.side=za,Y.needsUpdate=!0,L.renderBufferDirect(it,W,at,Y,b,Et),Y.side=ji):L.renderBufferDirect(it,W,at,Y,b,Et),b.onAfterRender(L,W,it,at,Y,Et)}function na(b,W,it){W.isScene!==!0&&(W=Ie);const at=Ht.get(b),Y=_.state.lights,Et=_.state.shadowsArray,Rt=Y.state.version,Ct=Nt.getParameters(b,Y.state,Et,W,it),Bt=Nt.getProgramCacheKey(Ct);let Jt=at.programs;at.environment=b.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(b.isMeshStandardMaterial?tt:T).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",ne),Jt=new Map,at.programs=Jt);let kt=Jt.get(Bt);if(kt!==void 0){if(at.currentProgram===kt&&at.lightsStateVersion===Rt)return bi(b,Ct),kt}else Ct.uniforms=Nt.getUniforms(b),b.onBeforeCompile(Ct,L),kt=Nt.acquireProgram(Ct,Bt),Jt.set(Bt,kt),at.uniforms=Ct.uniforms;const Vt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),bi(b,Ct),at.needsLights=Je(b),at.lightsStateVersion=Rt,at.needsLights&&(Vt.ambientLightColor.value=Y.state.ambient,Vt.lightProbe.value=Y.state.probe,Vt.directionalLights.value=Y.state.directional,Vt.directionalLightShadows.value=Y.state.directionalShadow,Vt.spotLights.value=Y.state.spot,Vt.spotLightShadows.value=Y.state.spotShadow,Vt.rectAreaLights.value=Y.state.rectArea,Vt.ltc_1.value=Y.state.rectAreaLTC1,Vt.ltc_2.value=Y.state.rectAreaLTC2,Vt.pointLights.value=Y.state.point,Vt.pointLightShadows.value=Y.state.pointShadow,Vt.hemisphereLights.value=Y.state.hemi,Vt.directionalShadowMap.value=Y.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Vt.spotShadowMap.value=Y.state.spotShadowMap,Vt.spotLightMatrix.value=Y.state.spotLightMatrix,Vt.spotLightMap.value=Y.state.spotLightMap,Vt.pointShadowMap.value=Y.state.pointShadowMap,Vt.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=kt,at.uniformsList=null,kt}function Ti(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=mu.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function bi(b,W){const it=Ht.get(b);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Ga(b,W,it,at,Y){W.isScene!==!0&&(W=Ie),D.resetTextureUnits();const Et=W.fog,Rt=at.isMeshStandardMaterial?W.environment:null,Ct=Z===null?L.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:_s,Bt=(at.isMeshStandardMaterial?tt:T).get(at.envMap||Rt),Jt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,kt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Vt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,Me=!!it.morphAttributes.color;let Xe=Ba;at.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xe=L.toneMapping);const me=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ge=me!==void 0?me.length:0,Wt=Ht.get(at),We=_.state.lights;if(dt===!0&&(St===!0||b!==R)){const fn=b===R&&at.id===w;Tt.setState(at,b,fn)}let Se=!1;at.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==We.state.version||Wt.outputColorSpace!==Ct||Y.isBatchedMesh&&Wt.batching===!1||!Y.isBatchedMesh&&Wt.batching===!0||Y.isBatchedMesh&&Wt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Wt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Wt.instancing===!1||!Y.isInstancedMesh&&Wt.instancing===!0||Y.isSkinnedMesh&&Wt.skinning===!1||!Y.isSkinnedMesh&&Wt.skinning===!0||Y.isInstancedMesh&&Wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Wt.instancingMorph===!1&&Y.morphTexture!==null||Wt.envMap!==Bt||at.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==kt||Wt.morphTargets!==Vt||Wt.morphNormals!==fe||Wt.morphColors!==Me||Wt.toneMapping!==Xe||Wt.morphTargetsCount!==ge)&&(Se=!0):(Se=!0,Wt.__version=at.version);let Mn=Wt.currentProgram;Se===!0&&(Mn=na(at,W,Y));let aa=!1,He=!1,Ri=!1;const Pe=Mn.getUniforms(),yn=Wt.uniforms;if(Xt.useProgram(Mn.program)&&(aa=!0,He=!0,Ri=!0),at.id!==w&&(w=at.id,He=!0),aa||R!==b){Xt.buffers.depth.getReversed()?(bt.copy(b.projectionMatrix),mx(bt),gx(bt),Pe.setValue(z,"projectionMatrix",bt)):Pe.setValue(z,"projectionMatrix",b.projectionMatrix),Pe.setValue(z,"viewMatrix",b.matrixWorldInverse);const _n=Pe.map.cameraPosition;_n!==void 0&&_n.setValue(z,re.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Pe.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Pe.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,He=!0,Ri=!0)}if(Y.isSkinnedMesh){Pe.setOptional(z,Y,"bindMatrix"),Pe.setOptional(z,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Pe.setValue(z,"boneTexture",fn.boneTexture,D))}Y.isBatchedMesh&&(Pe.setOptional(z,Y,"batchingTexture"),Pe.setValue(z,"batchingTexture",Y._matricesTexture,D),Pe.setOptional(z,Y,"batchingIdTexture"),Pe.setValue(z,"batchingIdTexture",Y._indirectTexture,D),Pe.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pe.setValue(z,"batchingColorTexture",Y._colorsTexture,D));const rn=it.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&jt.update(Y,it,Mn),(He||Wt.receiveShadow!==Y.receiveShadow)&&(Wt.receiveShadow=Y.receiveShadow,Pe.setValue(z,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(yn.envMap.value=Bt,yn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),He&&(Pe.setValue(z,"toneMappingExposure",L.toneMappingExposure),Wt.needsLights&&ia(yn,Ri),Et&&at.fog===!0&&At.refreshFogUniforms(yn,Et),At.refreshMaterialUniforms(yn,at,q,j,_.state.transmissionRenderTarget[b.id]),mu.upload(z,Ti(Wt),yn,D)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(mu.upload(z,Ti(Wt),yn,D),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Pe.setValue(z,"center",Y.center),Pe.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Pe.setValue(z,"normalMatrix",Y.normalMatrix),Pe.setValue(z,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const fn=at.uniformsGroups;for(let _n=0,pi=fn.length;_n<pi;_n++){const Ci=fn[_n];X.update(Ci,Mn),X.bind(Ci,Mn)}}return Mn}function ia(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Je(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,W,it){const at=Ht.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Ht.get(b.texture).__webglTexture=W,Ht.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const it=Ht.get(b);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const No=z.createFramebuffer();this.setRenderTarget=function(b,W=0,it=0){Z=b,V=W,I=it;let at=!0,Y=null,Et=!1,Rt=!1;if(b){const Bt=Ht.get(b);if(Bt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(z.FRAMEBUFFER,null),at=!1;else if(Bt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Bt.__hasExternalTextures)D.rebindTextures(b,Ht.get(b.texture).__webglTexture,Ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Vt=b.depthTexture;if(Bt.__boundDepthTexture!==Vt){if(Vt!==null&&Ht.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Rt=!0);const kt=Ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[W])?Y=kt[W][it]:Y=kt[W],Et=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?Y=Ht.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?Y=kt[it]:Y=kt,H.copy(b.viewport),lt.copy(b.scissor),st=b.scissorTest}else H.copy($).multiplyScalar(q).floor(),lt.copy(vt).multiplyScalar(q).floor(),st=xt;if(it!==0&&(Y=No),Xt.bindFramebuffer(z.FRAMEBUFFER,Y)&&at&&Xt.drawBuffers(b,Y),Xt.viewport(H),Xt.scissor(lt),Xt.setScissorTest(st),Et){const Bt=Ht.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,it)}else if(Rt){const Bt=Ht.get(b.texture),Jt=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,it,Jt)}else if(b!==null&&it!==0){const Bt=Ht.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(b,W,it,at,Y,Et,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){Xt.bindFramebuffer(z.FRAMEBUFFER,Ct);try{const Bt=b.texture,Jt=Bt.format,kt=Bt.type;if(!ee.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-at&&it>=0&&it<=b.height-Y&&z.readPixels(W,it,at,Y,te.convert(Jt),te.convert(kt),Et)}finally{const Bt=Z!==null?Ht.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,W,it,at,Y,Et,Rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(W>=0&&W<=b.width-at&&it>=0&&it<=b.height-Y){Xt.bindFramebuffer(z.FRAMEBUFFER,Ct);const Bt=b.texture,Jt=Bt.format,kt=Bt.type;if(!ee.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),z.readPixels(W,it,at,Y,te.convert(Jt),te.convert(kt),0);const fe=Z!==null?Ht.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,fe);const Me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await px(z,Me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(Vt),z.deleteSync(Me),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,it=0){const at=Math.pow(2,-it),Y=Math.floor(b.image.width*at),Et=Math.floor(b.image.height*at),Rt=W!==null?W.x:0,Ct=W!==null?W.y:0;D.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,Rt,Ct,Y,Et),Xt.unbindTexture()};const Oo=z.createFramebuffer(),Ai=z.createFramebuffer();this.copyTextureToTexture=function(b,W,it=null,at=null,Y=0,Et=null){Et===null&&(Y!==0?(pu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let Rt,Ct,Bt,Jt,kt,Vt,fe,Me,Xe;const me=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(it!==null)Rt=it.max.x-it.min.x,Ct=it.max.y-it.min.y,Bt=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,kt=it.min.y,Vt=it.isBox3?it.min.z:0;else{const rn=Math.pow(2,-Y);Rt=Math.floor(me.width*rn),Ct=Math.floor(me.height*rn),b.isDataArrayTexture?Bt=me.depth:b.isData3DTexture?Bt=Math.floor(me.depth*rn):Bt=1,Jt=0,kt=0,Vt=0}at!==null?(fe=at.x,Me=at.y,Xe=at.z):(fe=0,Me=0,Xe=0);const ge=te.convert(W.format),Wt=te.convert(W.type);let We;W.isData3DTexture?(D.setTexture3D(W,0),We=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),We=z.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),We=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Se=z.getParameter(z.UNPACK_ROW_LENGTH),Mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),aa=z.getParameter(z.UNPACK_SKIP_PIXELS),He=z.getParameter(z.UNPACK_SKIP_ROWS),Ri=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,me.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,kt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Vt);const Pe=b.isDataArrayTexture||b.isData3DTexture,yn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const rn=Ht.get(b),fn=Ht.get(W),_n=Ht.get(rn.__renderTarget),pi=Ht.get(fn.__renderTarget);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,_n.__webglFramebuffer),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ci=0;Ci<Bt;Ci++)Pe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(b).__webglTexture,Y,Vt+Ci),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,Et,Xe+Ci)),z.blitFramebuffer(Jt,kt,Rt,Ct,fe,Me,Rt,Ct,z.DEPTH_BUFFER_BIT,z.NEAREST);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Ht.has(b)){const rn=Ht.get(b),fn=Ht.get(W);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,Oo),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ai);for(let _n=0;_n<Bt;_n++)Pe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,Y,Vt+_n):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,Y),yn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fn.__webglTexture,Et,Xe+_n):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fn.__webglTexture,Et),Y!==0?z.blitFramebuffer(Jt,kt,Rt,Ct,fe,Me,Rt,Ct,z.COLOR_BUFFER_BIT,z.NEAREST):yn?z.copyTexSubImage3D(We,Et,fe,Me,Xe+_n,Jt,kt,Rt,Ct):z.copyTexSubImage2D(We,Et,fe,Me,Jt,kt,Rt,Ct);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(We,Et,fe,Me,Xe,Rt,Ct,Bt,ge,Wt,me.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(We,Et,fe,Me,Xe,Rt,Ct,Bt,ge,me.data):z.texSubImage3D(We,Et,fe,Me,Xe,Rt,Ct,Bt,ge,Wt,me):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,fe,Me,Rt,Ct,ge,Wt,me.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,fe,Me,me.width,me.height,ge,me.data):z.texSubImage2D(z.TEXTURE_2D,Et,fe,Me,Rt,Ct,ge,Wt,me);z.pixelStorei(z.UNPACK_ROW_LENGTH,Se),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,aa),z.pixelStorei(z.UNPACK_SKIP_ROWS,He),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ri),Et===0&&W.generateMipmaps&&z.generateMipmap(We),Xt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,it=null,at=null,Y=0){return pu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,it,at,Y)},this.initRenderTarget=function(b){Ht.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Xt.unbindTexture()},this.resetState=function(){V=0,I=0,Z=null,Xt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}function Ob(){let o=null;const e=new Vx,i=new ai(70,window.innerWidth/window.innerHeight,.01,20);i.position.set(0,1.6,0),e.add(i);const r=new Zx(16777215,12303359,1);r.position.set(.5,1,.25),e.add(r);const l=new Nb({antialias:!0,alpha:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.xr.enabled=!0;const c=new xs(.1,.1,.1),h=new ad({color:65280}),d=new yi(c,h);e.add(d);const m=l.xr.getController(0);m.addEventListener("select",p),e.add(m);function p(){d.position.set(0,0,-.3).applyMatrix4(m.matrixWorld)}g();function g(){l.setAnimationLoop(v)}async function v(){d.rotation.x+=.01,d.rotation.y+=.01,l.render(e,i)}const x={domOverlay:{root:document.body}};async function y(){if(navigator.xr){if(o=await navigator.xr.requestSession("immersive-ar",x),o==null)throw new Error("Failed to start AR session");l.xr.setReferenceSpaceType("local"),l.xr.setSession(o)}else throw new Error("WebXR is not supported")}return{startARSession:y}}function Pb(){const o=Ob();return Oa.jsxs(Oa.Fragment,{children:[Oa.jsx("h1",{children:"HelloAR"}),Oa.jsx("button",{onClick:o.startARSession,children:"START!"})]})}function Bb(){return Oa.jsx("div",{children:Oa.jsx(Pb,{})})}ES.createRoot(document.getElementById("root")).render(Oa.jsx(gS.StrictMode,{children:Oa.jsx(Bb,{})}));
