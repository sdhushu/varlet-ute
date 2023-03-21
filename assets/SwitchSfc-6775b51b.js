import{a as f,n as $,w as l,e as t,c as G}from"./shared-128c81f0.js";import{F as I,u as J}from"./provide-982d6f56.js";import{H as K,a as Q,u as X}from"./index-fe11295e.js";import{L as Y}from"./index-d8f4ea61.js";import{v as Z}from"./index-c5f09b40.js";import{d as _,b as S,p as y,ag as B,D,f as V,h as z,M as C,R as h,N as v,i as x,j as ee,q as H,n as ae}from"./vue-router.esm-bundler-fa266481.js";var re={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String},loadingColor:{type:String},closeColor:{type:String},size:{type:[String,Number]},rules:{type:Array},ripple:{type:Boolean,default:!0},onClick:f(),onChange:f(),"onUpdate:modelValue":f()},{n:le,classes:oe}=G("switch");function ie(e,u){var r=y("var-loading"),n=y("var-hover-overlay"),c=y("var-form-details"),p=B("ripple"),m=B("hover");return D((V(),z("div",{class:v(e.n())},[C("div",{class:v(e.classes(e.n("block"),[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:u[0]||(u[0]=function(){return e.switchActive&&e.switchActive(...arguments)}),style:h(e.styleComputed.switch)},[C("div",{style:h(e.styleComputed.track),class:v(e.classes(e.n("track"),[e.modelValue===e.activeValue,e.n("track--active")],[e.errorMessage,e.n("track--error")]))},null,6),D((V(),z("div",{class:v(e.classes(e.n("ripple"),[e.modelValue===e.activeValue,e.n("ripple--active")])),style:h(e.styleComputed.ripple)},[C("div",{style:h(e.styleComputed.handle),class:v(e.classes(e.n("handle"),e.n("$-elevation--2"),[e.modelValue===e.activeValue,e.n("handle--active")],[e.errorMessage,e.n("handle--error")]))},[e.loading?(V(),x(r,{key:0,radius:e.radius,color:"currentColor"},null,8,["radius"])):ee("v-if",!0)],6),H(n,{hovering:e.hovering},null,8,["hovering"])],6)),[[p,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),H(c,{"error-message":e.errorMessage},null,8,["error-message"])],2)),[[m,e.hover,"desktop"]])}var M=_({name:"VarSwitch",components:{VarLoading:Y,VarFormDetails:I,VarHoverOverlay:K},directives:{Ripple:Z,Hover:Q},props:re,setup(e){var{bindForm:u,form:r}=J(),{errorMessage:n,validateWithTrigger:c,validate:p,resetValidation:m}=$(),{hovering:N,handleHovering:F}=X(),R=()=>p(e.rules,e.modelValue),A=()=>ae(()=>c(["onChange"],"onChange",e.rules,e.modelValue)),L=S(()=>{var{size:a,modelValue:o,color:s,closeColor:d,loadingColor:g,activeValue:i}=e;return{handle:{width:l(a),height:l(a),backgroundColor:o===i?s:d,color:g},ripple:{left:o===i?l(a,.5):"-"+l(a,.5),color:o===i?s:d||"#999",width:l(a,2),height:l(a,2)},track:{height:l(a,.72),width:l(a,1.9),borderRadius:l(a,2/3),filter:o===i||n!=null&&n.value?void 0:"brightness(.6)",backgroundColor:o===i?s:d},switch:{height:l(a,1.2),width:l(a,2)}}}),U=S(()=>{var{size:a="5.333vw"}=e;return l(a,.4)}),O=a=>{var{onClick:o,onChange:s,disabled:d,loading:g,readonly:i,modelValue:j,activeValue:w,inactiveValue:q,"onUpdate:modelValue":E}=e;if(t(o,a),!(d||g||i||r!=null&&r.disabled.value||r!=null&&r.readonly.value)){var k=j===w?q:w;t(s,k),t(E,k),A()}},T=a=>{e.disabled||r!=null&&r.disabled.value||F(a)},P=()=>{t(e["onUpdate:modelValue"],e.inactiveValue),m()},W={reset:P,validate:R,resetValidation:m};return t(u,W),{n:le,classes:oe,switchActive:O,hovering:N,hover:T,radius:U,styleComputed:L,errorMessage:n,formDisabled:r==null?void 0:r.disabled,formReadonly:r==null?void 0:r.readonly}}});M.render=ie;const b=M;b.install=function(e){e.component(b.name,b)};export{b as S};
