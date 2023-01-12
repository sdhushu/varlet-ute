import{a as f,u as P,x as l,e as t,c as W}from"./shared.33d42a23.js";import{F as j,u as q}from"./provide.deebc008.js";import{L as E}from"./index.b51730c4.js";import{v as $}from"./index.38f8c4d5.js";import{d as G,b as w,p as k,ai as H,f as g,h as S,M as h,R as m,N as u,D as I,i as J,j as K,q as O,n as Q}from"./vue-router.esm-bundler.d85fe05e.js";var X={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String},loadingColor:{type:String},closeColor:{type:String},size:{type:[String,Number]},rules:{type:Array},ripple:{type:Boolean,default:!0},onClick:f(),onChange:f(),"onUpdate:modelValue":f()},{n:Y,classes:Z}=W("switch");function _(e,v){var r=k("var-loading"),s=k("var-form-details"),c=H("ripple");return g(),S("div",{class:u(e.n())},[h("div",{class:u(e.classes(e.n("block"),[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:v[0]||(v[0]=function(){return e.switchActive&&e.switchActive(...arguments)}),style:m(e.styleComputed.switch)},[h("div",{style:m(e.styleComputed.track),class:u(e.classes(e.n("track"),[e.modelValue===e.activeValue,e.n("track--active")],[e.errorMessage,e.n("track--error")]))},null,6),I((g(),S("div",{class:u(e.classes(e.n("ripple"),[e.modelValue===e.activeValue,e.n("ripple--active")])),style:m(e.styleComputed.ripple)},[h("div",{style:m(e.styleComputed.handle),class:u(e.classes(e.n("handle"),e.n("$-elevation--2"),[e.modelValue===e.activeValue,e.n("handle--active")],[e.errorMessage,e.n("handle--error")]))},[e.loading?(g(),J(r,{key:0,radius:e.radius,color:"currentColor"},null,8,["radius"])):K("v-if",!0)],6)],6)),[[c,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),O(s,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const V=G({render:_,name:"VarSwitch",components:{VarLoading:E,VarFormDetails:j},directives:{Ripple:$},props:X,setup(e){var{bindForm:v,form:r}=q(),{errorMessage:s,validateWithTrigger:c,validate:B,resetValidation:y}=P(),D=()=>B(e.rules,e.modelValue),z=()=>Q(()=>c(["onChange"],"onChange",e.rules,e.modelValue)),M=w(()=>{var{size:a,modelValue:i,color:n,closeColor:d,loadingColor:p,activeValue:o}=e;return{handle:{width:l(a),height:l(a),backgroundColor:i===o?n:d,color:p},ripple:{left:i===o?l(a,.5):"-"+l(a,.5),color:i===o?n:d||"#999",width:l(a,2),height:l(a,2)},track:{height:l(a,.72),width:l(a,1.9),borderRadius:l(a,2/3),filter:i===o||s!=null&&s.value?void 0:"brightness(.6)",backgroundColor:i===o?n:d},switch:{height:l(a,1.2),width:l(a,2)}}}),N=w(()=>{var{size:a="5.333vw"}=e;return l(a,.4)}),F=a=>{var{onClick:i,onChange:n,disabled:d,loading:p,readonly:o,modelValue:L,activeValue:C,inactiveValue:U,"onUpdate:modelValue":T}=e;if(t(i,a),!(d||p||o||r!=null&&r.disabled.value||r!=null&&r.readonly.value)){var b=L===C?U:C;t(n,b),t(T,b),z()}},R=()=>{t(e["onUpdate:modelValue"],e.inactiveValue),y()},A={reset:R,validate:D,resetValidation:y};return t(v,A),{n:Y,classes:Z,switchActive:F,radius:N,styleComputed:M,errorMessage:s,formDisabled:r==null?void 0:r.disabled,formReadonly:r==null?void 0:r.readonly}}});V.install=function(e){e.component(V.name,V)};export{V as S};
