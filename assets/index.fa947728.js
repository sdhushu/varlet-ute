import{C as I}from"./cell.bd328a0e.js";import{L as H}from"./index.b51730c4.js";import{v as O}from"./index.38f8c4d5.js";import{a as R,B as Q,b as A,j as J,c as K,e as P,y as W}from"./shared.33d42a23.js";import{p as X}from"./index.734f0786.js";import{d as Y,a as M,o as Z,u as _,p as ee,ai as te,f as h,h as b,O as S,M as U,N as k,Q as u,q as f,j as V,D as ne,P as T,n as ae,r as ie,aB as re,S as o,an as t,aC as L,F as w,ak as $,i as x}from"./vue-router.esm-bundler.d85fe05e.js";import{T as D,a as oe,b as F,c as le}from"./TabSfc.7006cd8d.js";import{p as c,u as se}from"./index.0ff60d66.js";import"./AppType.vue_vue_type_style_index_0_lang.21bca85e.js";/* empty css               *//* empty css                *//* empty css             */import"./CellSfc.90047be6.js";/* empty css                  */import"./sticky.6aabc6cf.js";/* empty css                  */import{a as de}from"./utils.2cef13e3.js";import{u as fe}from"./sync.83941c14.js";import"./index.8b6b6a08.js";import"./index.a5af30e7.js";import"./_commonjsHelpers.b8add541.js";import"./index.ebc926f5.js";var ue={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:R(),"onUpdate:loading":R(),"onUpdate:error":R()};function z(e,n,m,i,g,p,r){try{var l=e[p](r),s=l.value}catch(C){m(C);return}l.done?n(s):Promise.resolve(s).then(i,g)}function me(e){return function(){var n=this,m=arguments;return new Promise(function(i,g){var p=e.apply(n,m);function r(s){z(p,i,g,r,l,"next",s)}function l(s){z(p,i,g,r,l,"throw",s)}r(void 0)})}}var{n:pe,classes:ge}=K("list");function ve(e,n){var m=ee("var-loading"),i=te("ripple");return h(),b("div",{class:k(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[S(e.$slots,"default"),e.loading?S(e.$slots,"loading",{key:0},()=>[U("div",{class:k(e.n("loading"))},[U("div",{class:k(e.n("loading-text"))},u(e.dt(e.loadingText,e.pack.listLoadingText)),3),f(m,{size:"mini",radius:10})],2)]):V("v-if",!0),e.finished?S(e.$slots,"finished",{key:1},()=>[U("div",{class:k(e.n("finished"))},u(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):V("v-if",!0),e.error?S(e.$slots,"error",{key:2},()=>[ne((h(),b("div",{class:k(e.n("error")),onClick:n[0]||(n[0]=function(){return e.load&&e.load(...arguments)})},[T(u(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[i]])]):V("v-if",!0),U("div",{class:k(e.n("detector")),ref:"detectorEl"},null,2)],2)}const B=Y({render:ve,name:"VarList",directives:{Ripple:O},components:{VarLoading:H},props:ue,setup(e){var n=M(null),m=M(null),i,g=()=>{P(e["onUpdate:error"],!1),P(e["onUpdate:loading"],!0),P(e.onLoad)},p=()=>{var l=i===window?window.innerHeight:i.getBoundingClientRect().bottom,{bottom:s}=m.value.getBoundingClientRect();return Math.floor(s)-W(e.offset)<=l},r=function(){var l=me(function*(){yield ae();var{loading:s,finished:C,error:N}=e;!s&&!C&&!N&&p()&&g()});return function(){return l.apply(this,arguments)}}();return Z(()=>{i=Q(n.value),e.immediateCheck&&r(),i.addEventListener("scroll",r)}),_(()=>{i.removeEventListener("scroll",r)}),{pack:X,listEl:n,detectorEl:m,dt:A,isNumber:J,load:g,check:r,n:pe,classes:ge}}});B.install=function(e){e.component(B.name,B)};const Me={setup(e){const n=ie({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:m,list2:i,list3:g,loading:p,loading2:r,loading3:l,finished:s,finished2:C,finished3:N,error:E,current:y}=re(n),G=()=>{if(n.current!==0){n.loading=!1;return}setTimeout(()=>{for(let v=0;v<20;v++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=60&&(n.finished=!0)},1e3)},j=()=>{if(n.current!==1){n.loading2=!1;return}setTimeout(()=>{if(n.list2.length===40){n.error=!0,n.loading2=!1;return}for(let v=0;v<20;v++)n.list2.push(n.list2.length+1);n.loading2=!1},1e3)},q=()=>{if(n.current!==2){n.loading3=!1;return}setTimeout(()=>{for(let v=0;v<20;v++)n.list3.push(n.list3.length+1);n.loading3=!1,n.list3.length>=60&&(n.finished3=!0)},1e3)};return de(se),fe(),(v,d)=>(h(),b(w,null,[f(t(oe),{active:t(y),"onUpdate:active":d[0]||(d[0]=a=>L(y)?y.value=a:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[f(t(D),null,{default:o(()=>[T(u(t(c).basicUsage),1)]),_:1}),f(t(D),null,{default:o(()=>[T(u(t(c).loadFail),1)]),_:1}),f(t(D),null,{default:o(()=>[T(u(t(c).tipText),1)]),_:1})]),_:1},8,["active"]),f(t(le),{active:t(y),"onUpdate:active":d[5]||(d[5]=a=>L(y)?y.value=a:null)},{default:o(()=>[f(t(F),null,{default:o(()=>[f(t(B),{finished:t(s),loading:t(p),"onUpdate:loading":d[1]||(d[1]=a=>L(p)?p.value=a:null),onLoad:G},{default:o(()=>[(h(!0),b(w,null,$(t(m),a=>(h(),x(t(I),{key:a},{default:o(()=>[T(u(t(c).listItem)+": "+u(a),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),f(t(F),null,{default:o(()=>[f(t(B),{finished:t(C),error:t(E),"onUpdate:error":d[2]||(d[2]=a=>L(E)?E.value=a:null),loading:t(r),"onUpdate:loading":d[3]||(d[3]=a=>L(r)?r.value=a:null),onLoad:j},{default:o(()=>[(h(!0),b(w,null,$(t(i),a=>(h(),x(t(I),{key:a},{default:o(()=>[T(u(t(c).listItem)+": "+u(a),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),f(t(F),null,{default:o(()=>[f(t(B),{"loading-text":t(c).loadingText,"finished-text":t(c).finishedText,"error-text":t(c).errorText,finished:t(N),loading:t(l),"onUpdate:loading":d[4]||(d[4]=a=>L(l)?l.value=a:null),onLoad:q},{default:o(()=>[(h(!0),b(w,null,$(t(g),a=>(h(),x(t(I),{key:a},{default:o(()=>[T(u(t(c).listItem)+": "+u(a),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Me as default};
