import{a as R,o as A,u as M,v as X,x as J,a9 as K,r as Z,av as V,b as W,aw as F,n as L,ax as U,z as E,e as Q,C as Y,d as ee,s as te}from"./vue-router.esm-bundler.d85fe05e.js";import{c as g}from"./_commonjsHelpers.b8add541.js";const v=e=>typeof e=="string",ne=e=>typeof e=="boolean",B=e=>typeof e=="number",Ee=e=>Object.prototype.toString.call(e)==="[object Object]",re=e=>typeof e=="object"&&e!==null,T=e=>Array.isArray(e),Te=e=>e?/^(http)|(\.*\/)/.test(e):!1,Oe=e=>e==null||e===""||Array.isArray(e)&&!e.length,oe=e=>e==null?0:v(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):ne(e)?Number(e):e,I=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},Pe=(e,t=200)=>{let n,r=0;return function a(...o){const s=Date.now(),c=s-r;r||(r=s),n&&window.clearTimeout(n),c>=t?(e.apply(this,o),r=s):n=window.setTimeout(()=>{a.apply(this,o)},t-c)}},Le=()=>typeof window<"u",Se=e=>[...new Set(e)],ae=e=>e.replace(/([A-Z])/g," $1").trim().split(" ").join("-").toLowerCase(),Ce=(e,t,n="start")=>{let r=n==="start"?0:e.length-1;for(;e.length>0&&r>=0&&r<=e.length-1;){if(t(e[r],r,e))return[e[r],r];n==="start"?r++:r--}return[null,-1]};var _e=e=>e==null?!1:e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg|webp)$/.test(e),Re=e=>e==null?!1:e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),Me=e=>e,S=e=>Math.pow(e,3),Ve=e=>e<.5?S(e*2)/2:1-S((1-e)*2)/2,We=(e,t)=>e==null?t:e,ie=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self,Fe=function(e,t,n){if(e===void 0&&(e=""),n===void 0&&(n=""),e.length>=t)return e;var r=t-e.length,a=Math.floor(r/n.length);return n.repeat(a)+n.slice(0,r%n.length)+e};function Ue(e){var{left:t}=e.getBoundingClientRect();return t+(document.body.scrollLeft||document.documentElement.scrollLeft)}function Be(e){var{top:t}=e.getBoundingClientRect();return t+(document.body.scrollTop||document.documentElement.scrollTop)}function se(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function ue(e){var t="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(t,0)}function Ie(e){var{transform:t}=window.getComputedStyle(e);return+t.slice(t.lastIndexOf(",")+2,t.length-1)}function Ne(e){for(var t=e;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){var n=/(scroll|auto)/,{overflowY:r,overflow:a}=window.getComputedStyle(t);if(n.test(r)||n.test(a))return t}return window}function He(e,t){if(v(e)){var n=document.querySelector(e);if(!n)throw Error("[Varlet] "+t+": target element cannot found");return n}if(re(e))return e;throw Error("[Varlet] "+t+': type of prop "target" should be a selector or an element object')}var N=e=>v(e)&&e.endsWith("rem"),ce=e=>v(e)&&e.endsWith("px")||B(e),le=e=>v(e)&&e.endsWith("%"),H=e=>v(e)&&e.endsWith("vw"),$=e=>v(e)&&e.endsWith("vh"),de=e=>v(e)&&e.startsWith("calc("),fe=e=>v(e)&&e.startsWith("var("),pe=e=>{if(B(e))return e;if(ce(e))return+e.replace("px","");if(H(e))return+e.replace("vw","")*window.innerWidth/100;if($(e))return+e.replace("vh","")*window.innerHeight/100;if(N(e)){var t=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)}return v(e)?oe(e):0},ve=e=>{if(e!=null)return le(e)||H(e)||$(e)||N(e)||de(e)||fe(e)?e:pe(e)+"px"},$e=function(e,t){if(t===void 0&&(t=1),e!=null){var n=ve(e),r=n.match(/(vh|%|rem|px|vw)$/)[0];return""+parseFloat(n)*t+r}};function m(e){var t=ie();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,16)}function ke(e){m(()=>{m(e)})}function ze(){return new Promise(e=>{m(()=>{m(e)})})}function De(){return new Promise(e=>{m(e)})}function qe(e,t){var{top:n=0,left:r=0,duration:a=300,animation:o}=t,s=Date.now(),c=se(e),d=ue(e);return new Promise(i=>{var u=()=>{var f=(Date.now()-s)/a;if(f<1){var l=c+(n-c)*o(f),p=d+(r-d)*o(f);e.scrollTo(p,l),m(u)}else e.scrollTo(r,n),i()};m(u)})}function k(e){return Object.entries(e!=null?e:{}).reduce((t,n)=>{var[r,a]=n,o=r.startsWith("--")?r:"--"+ae(r);return t[o]=a,t},{})}function Ge(){var e=typeof window<"u";return e&&"ontouchstart"in window}var me=["collect","clear"];function C(e,t,n,r,a,o,s){try{var c=e[o](s),d=c.value}catch(i){n(i);return}c.done?t(d):Promise.resolve(d).then(r,a)}function _(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(d){C(o,r,a,s,c,"next",d)}function c(d){C(o,r,a,s,c,"throw",d)}s(void 0)})}}function he(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function Xe(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=e[r],n),{}):e[t]}function we(e){var t=K(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}function Je(e,t,n){t===void 0&&(t={}),n===void 0&&(n={});var r={setup(){return()=>U(e,y({},t,n))}},{unmount:a}=we(r);return{unmountInstance:a}}function ge(e){var t=[],n=r=>{if(r!=null&&r.component){n(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(a=>{Y(a)&&(t.push(a),n(a))})};return n(e),t}function Ke(e){var t=Z([]),n=E(),r=()=>{var c=ge(n.subTree);t.sort((d,i)=>c.indexOf(d.vnode)-c.indexOf(i.vnode))},a=c=>{t.push(c),r()},o=c=>{I(t,c)};V(e,{collect:a,clear:o,instances:t});var s=W(()=>t.length);return{length:s}}function Ze(e){if(!z(e))return{index:null};var t=F(e),{collect:n,clear:r,instances:a}=t,o=E();A(()=>{L().then(()=>n(o))}),M(()=>{L().then(()=>r(o))});var s=W(()=>a.indexOf(o));return{index:s}}function Qe(e){var t=[],n=o=>{t.push(o)},r=o=>{I(t,o)},a=o=>{V(e,y({collect:n,clear:r},o))};return{childProviders:t,bindChildren:a}}function Ye(e){if(!z(e))return{parentProvider:null,bindParent:null};var t=F(e),{collect:n,clear:r}=t,a=he(t,me),o=s=>{A(()=>n(s)),Q(()=>r(s))};return{parentProvider:a,bindParent:o}}function z(e){var t=E();return e in t.provides}function et(){var e=R(""),t=function(){var a=_(function*(o,s,c){if(!T(o)||!o.length)return!0;var d=yield Promise.all(o.map(i=>i(s,c)));return!d.some(i=>i!==!0?(e.value=String(i),!0):!1)});return function(s,c,d){return a.apply(this,arguments)}}(),n=()=>{e.value=""},r=function(){var a=_(function*(o,s,c,d,i){o.includes(s)&&(yield t(c,d,i))&&(e.value="")});return function(s,c,d,i,u){return a.apply(this,arguments)}}();return{errorMessage:e,validate:t,resetValidation:n,validateWithTrigger:r}}function tt(e){A(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),M(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function nt(){var e=R(!1);return X(()=>{e.value=!1}),J(()=>{e.value=!0}),{disabled:e}}function ye(e){var t="var",n=t+"-"+e,r=o=>o?o[0]==="$"?o.replace("$",t):o.startsWith("--")?""+n+o:n+"__"+o:n,a=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return s.map(d=>{if(T(d)){var[i,u,f=null]=d;return i?u:f}return d})};return{n:r,classes:a}}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(T(e))return e.map(a=>a(...n));if(e)return e(...n)}function rt(e){return{type:[Function,Array],default:e}}var{n:xe}=ye("style-provider");const h=ee({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},setup(e,t){var{slots:n}=t;return()=>U(e.tag,{class:xe(),style:k(e.styleVars)},be(n.default))}});var j=[];function D(e){j.forEach(n=>document.documentElement.style.removeProperty(n)),j.length=0;var t=k(e!=null?e:{});Object.entries(t).forEach(n=>{var[r,a]=n;document.documentElement.style.setProperty(r,a),j.push(r)})}D.Component=h;h.install=function(e){e.component(h.name,h)};D.install=function(e){e.component(h.name,h)};var q={exports:{}};(function(e,t){(function(n,r){r()})(g,function(){function n(i,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}function r(i,u,f){var l=new XMLHttpRequest;l.open("GET",i),l.responseType="blob",l.onload=function(){d(l.response,u,f)},l.onerror=function(){console.error("could not download file")},l.send()}function a(i){var u=new XMLHttpRequest;u.open("HEAD",i,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function o(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(u)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof g=="object"&&g.global===g?g:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(i,u,f){var l=s.URL||s.webkitURL,p=document.createElement("a");u=u||i.name||"download",p.download=u,p.rel="noopener",typeof i=="string"?(p.href=i,p.origin===location.origin?o(p):a(p.href)?r(i,u,f):o(p,p.target="_blank")):(p.href=l.createObjectURL(i),setTimeout(function(){l.revokeObjectURL(p.href)},4e4),setTimeout(function(){o(p)},0))}:"msSaveOrOpenBlob"in navigator?function(i,u,f){if(u=u||i.name||"download",typeof i!="string")navigator.msSaveOrOpenBlob(n(i,f),u);else if(a(i))r(i,u,f);else{var l=document.createElement("a");l.href=i,l.target="_blank",setTimeout(function(){o(l)})}}:function(i,u,f,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof i=="string")return r(i,u,f);var p=i.type==="application/octet-stream",G=/constructor/i.test(s.HTMLElement)||s.safari,O=/CriOS\/[\d]+/.test(navigator.userAgent);if((O||p&&G||c)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var w=b.result;w=O?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=w:location=w,l=null},b.readAsDataURL(i)}else{var P=s.URL||s.webkitURL,x=P.createObjectURL(i);l?l.location=x:location.href=x,l=null,setTimeout(function(){P.revokeObjectURL(x)},4e4)}});s.saveAs=d.saveAs=d,e.exports=d})})(q);function ot(e){return Object.entries(e).reduce((t,[n,r])=>(t={...t,...r},t),{})}async function at(e){const t=Object.keys(e).reduce((o,s)=>(o+=`  '${s}': '${e[s]}',
`,o),""),{default:n}=await te(()=>import("./jszip.min.e72b04a6.js").then(o=>o.j),["jszip.min.e72b04a6.js","_commonjsHelpers.b8add541.js"],import.meta.url),r=new n;r.file("varlet-ute-theme.js",`export default {
${t}}`);const a=await r.generateAsync({type:"blob"});q.exports.saveAs(a,"varlet-ute-theme.zip")}export{He as A,Ne as B,ue as C,qe as D,Ve as E,Pe as F,se as G,Ke as H,Ze as I,ne as J,Se as K,m as L,ke as M,Fe as N,Ce as O,Be as P,Me as Q,Ue as R,D as S,Re as T,_e as U,De as V,Ie as W,rt as a,We as b,ye as c,at as d,be as e,ot as f,T as g,v as h,Le as i,B as j,Te as k,oe as l,Je as m,Oe as n,nt as o,Xe as p,Ee as q,tt as r,Ye as s,ve as t,et as u,Qe as v,Ge as w,$e as x,pe as y,ze as z};
