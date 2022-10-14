import{A as E}from"./AnimationBox.0fffc0fe.js";import{d as F,ac as R,am as j,g as c,c as s,a as u,a1 as q,af as C,w as D,p as T,f as d,h as v,M as e,q as r,Q as i,an as n,S as p,i as S,j as x,F as G,ak as K,ao as Q,ap as U,_ as W}from"./vue-router.esm-bundler.0f5b2940.js";import{w as H,g as k}from"./utils.b78aa78d.js";import"./main.85781680.js";import"./clipboard.e35c268a.js";import"./_commonjsHelpers.b8add541.js";const J=h=>(Q("data-v-fce544d2"),h=h(),U(),h),O={class:"varlet-doc-index"},X={class:"varlet-doc-index__layout"},Y={class:"varlet-doc-index__logo-container"},Z=J(()=>e("div",{class:"varlet-doc-index__logo-background-mask"},null,-1)),ee={class:"varlet-doc-index__title"},te={class:"varlet-doc-index__description"},oe={class:"varlet-doc-index__link-button-group"},ae={class:"varlet-doc-index__link-button-text"},se={key:0,class:"varlet-doc-index__features"},ne={class:"varlet-doc-index__feature"},ce={class:"varlet-doc-index__feature-name"},ie={class:"varlet-doc-index__feature-description"},le={key:1,class:"varlet-doc-index__contributors"},de={class:"varlet-doc-index__contributors-title"},re=["href"],_e=["src"],ue={class:"varlet-doc-index__footer"},ve={class:"varlet-doc-index__license"},he={class:"varlet-doc-index__copyright"},me=F({setup(h){const B=R(),b=j(),I=c(s,"pc.header.github"),l=u(q()),M=u(c(s,"pc.header.darkMode")),z=u(c(s,"title")),o=u(c(s,"defaultLanguage")),N=u(c(s,"pc.header.i18n")),a=c(s,"pc.indexPage"),L=()=>{window.open(I)},P=()=>{b.push(`/${o.value}/home`)},f=()=>({action:"theme-change",from:"pc",data:l.value}),w=t=>{l.value=t,C(s,l.value),window.localStorage.setItem(c(s,"themeKey"),l.value)},V=()=>{var t;w(l.value==="darkTheme"?"lightTheme":"darkTheme"),window.postMessage(f(),"*"),(t=document.getElementById("mobile"))==null||t.contentWindow.postMessage(f(),"*")},$=()=>{const{language:t}=k();!t||(o.value=t,document.title=c(s,"pc.title")[t])},A=()=>{const{language:t}=k(),{menuName:m}=k(),_=`/${t==="zh-CN"?"en-US":"zh-CN"}/${m}`;o.value=t,b.replace(_)};return C(s,l.value),window.postMessage(f(),"*"),H((t,m)=>{m==="mobile"&&w(t)}),D(()=>B.path,$,{immediate:!0}),(t,m)=>{const _=T("var-icon"),g=T("var-button");return d(),v("div",O,[e("div",X,[e("div",Y,[Z,r(E,{class:"varlet-doc-index__logo"})]),e("div",ee,i(z.value),1),e("div",te,i(n(a).description[o.value]),1),e("div",oe,[r(g,{class:"varlet-doc-index__link-button",text:"",outline:"",onClick:L},{default:p(()=>[r(_,{name:"github",size:"24px"})]),_:1}),M.value?(d(),S(g,{key:0,class:"varlet-doc-index__link-button",text:"",outline:"",onClick:V},{default:p(()=>[r(_,{size:"24px",name:l.value==="lightTheme"?"white-balance-sunny":"weather-night"},null,8,["name"])]),_:1})):x("v-if",!0),N.value?(d(),S(g,{key:1,class:"varlet-doc-index__link-button",text:"",outline:"",onClick:A},{default:p(()=>[r(_,{name:"translate",size:"24px"})]),_:1})):x("v-if",!0),r(g,{class:"varlet-doc-index__link-button",type:"primary",style:{"line-height":"1.2"},onClick:P},{default:p(()=>[e("span",ae,i(n(a).started[o.value]),1),r(_,{style:{transform:"rotate(-90deg)"},name:"arrow-down",size:"24px"})]),_:1})]),n(a).features?(d(),v("div",se,[(d(!0),v(G,null,K(n(a).features,y=>(d(),v("div",ne,[e("div",ce,i(y.name[o.value]),1),e("div",ie,i(y.description[o.value]),1)]))),256))])):x("v-if",!0),n(a).contributors?(d(),v("div",le,[e("div",de,i(n(a).contributors.label[o.value]),1),e("a",{class:"varlet-doc-index__contributors-link",href:n(a).contributors.link},[e("img",{class:"varlet-doc-index__contributors-image",src:n(a).contributors.image},null,8,_e)],8,re)])):x("v-if",!0),e("div",ue,[e("div",ve,i(n(a).license[o.value]),1),e("div",he,i(n(a).copyright[o.value]),1)])])])}}});const we=W(me,[["__scopeId","data-v-fce544d2"]]);export{we as default};
