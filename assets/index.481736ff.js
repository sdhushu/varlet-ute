import{B as S}from"./index.4653a389.js";import{C}from"./checkbox.41fdca1a.js";import{C as z}from"./CheckboxGroupSfc.ecb05471.js";import{C as D}from"./CounterSfc.fb30811f.js";import{a as h,u as A}from"./provide.deebc008.js";import{c as Q,O as Y,B as q,P as T,y as L,D as H,Q as J,u as K}from"./shared.33d42a23.js";import{d as W,b as x,f as O,h as I,O as X,N as Z,_ as j,r as ee,a as _,q as o,S as n,an as e,F as le,P as d,Q as i,ao as ae,ap as re,M as oe}from"./vue-router.esm-bundler.d85fe05e.js";import{I as M}from"./input.8ec45e2e.js";import{S as F,O as y}from"./OptionSfc.8584d738.js";import{R as te,a as B}from"./RadioGroupSfc.4901e9fd.js";import{R as se}from"./RateSfc.6ec9714a.js";import{S as ne}from"./SliderSfc.207a2490.js";import{S as P}from"./index.503716e0.js";import{S as ue}from"./SwitchSfc.7b523510.js";import{U as de}from"./UploaderSfc.f09d0427.js";import{A as E}from"./AppType.f8465208.js";import{a as ie}from"./utils.2cef13e3.js";import{p as r,u as me}from"./index.c2f243bc.js";import{u as pe}from"./sync.83941c14.js";/* empty css                  *//* empty css               *//* empty css                *//* empty css               */import"./ButtonSfc.d73b10b3.js";/* empty css              *//* empty css             *//* empty css                    */import"./InputSfc.2bd9e868.js";import"./menu.b31c1a6f.js";/* empty css             */import"./SelectSfc.b28266b2.js";import"./popup.85f9f6fe.js";import"./imagePreview.b08ef9c0.js";import"./index.38f8c4d5.js";import"./index.a5af30e7.js";import"./index.b51730c4.js";import"./index.8b6b6a08.js";import"./_commonjsHelpers.b8add541.js";import"./index.a2465966.js";import"./AppType.vue_vue_type_style_index_0_lang.21bca85e.js";import"./index.734f0786.js";import"./zIndex.7d374186.js";import"./lock.fe41208f.js";import"./index.ebc926f5.js";function fe(s){return["start","end"].includes(s)}var ve={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},scrollToError:{type:String,validator:fe},scrollToErrorOffsetY:{type:[String,Number],default:0}};function N(s,t,m,u,p,v,a){try{var l=s[v](a),c=l.value}catch($){m($);return}l.done?t(c):Promise.resolve(c).then(u,p)}function ce(s){return function(){var t=this,m=arguments;return new Promise(function(u,p){var v=s.apply(t,m);function a(c){N(v,u,p,a,l,"next",c)}function l(c){N(v,u,p,a,l,"throw",c)}a(void 0)})}}var{n:ge}=Q("form");function Ve(s,t){return O(),I("div",{class:Z(s.n())},[X(s.$slots,"default")],2)}const b=W({render:Ve,name:"VarForm",props:ve,setup(s){var t=x(()=>s.disabled),m=x(()=>s.readonly),{formItems:u,bindFormItems:p}=h(),v=(V,f)=>{setTimeout(()=>{var g=q(f),U=g===window?0:T(g),w=T(f)-U-L(s.scrollToErrorOffsetY);H(g,{top:w,animation:J})},300)},a=function(){var V=ce(function*(){var f=yield Promise.all(u.map(k=>{var{validate:G}=k;return G()}));if(s.scrollToError){var[,g]=Y(f,k=>k===!1,s.scrollToError),U=g>-1;if(U){var w,R=(w=u[g].instance.proxy)==null?void 0:w.$el;v(g,R)}return!U}return f.every(k=>k===!0)});return function(){return V.apply(this,arguments)}}(),l=()=>u.forEach(V=>{var{reset:f}=V;return f()}),c=()=>u.forEach(V=>{var{resetValidation:f}=V;return f()}),$={disabled:t,readonly:m};return p($),{n:ge,validate:a,reset:l,resetValidation:c}}});b.install=function(s){s.component(b.name,b)};b.useValidation=K;b.useForm=A;const ye=s=>(ae("data-v-8c301fe0"),s=s(),re(),s),be=ye(()=>oe("div",{class:"space"},null,-1)),ke={setup(s){const t=ee({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),m=_(null),u=_(!1),p=_(!1);return ie(v=>{var a;me(v),(a=m.value)==null||a.reset()}),pe(),(v,a)=>(O(),I(le,null,[o(E,null,{default:n(()=>[d(i(e(r).example),1)]),_:1}),o(e(b),{ref_key:"form",ref:m,disabled:u.value,readonly:p.value},{default:n(()=>[o(e(P),{direction:"column",size:["4vw",0]},{default:n(()=>[o(e(M),{placeholder:e(r).username,rules:[l=>!!l||e(r).usernameMessage],modelValue:e(t).username,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).username=l)},null,8,["placeholder","rules","modelValue"]),o(e(M),{type:"password",placeholder:e(r).password,rules:[l=>!!l||e(r).passwordMessage],modelValue:e(t).password,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).password=l)},null,8,["placeholder","rules","modelValue"]),o(e(F),{placeholder:e(r).department,rules:[l=>!!l||e(r).departmentMessage],modelValue:e(t).department,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).department=l)},{default:n(()=>[o(e(y),{label:`${e(r).eat}${e(r).departmentUnit}`},null,8,["label"]),o(e(y),{label:`${e(r).sleep}${e(r).departmentUnit}`},null,8,["label"]),o(e(y),{label:`${e(r).play}${e(r).departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),o(e(F),{multiple:"",placeholder:e(r).group,rules:[l=>l.length>=1||e(r).groupMessage],modelValue:e(t).group,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).group=l)},{default:n(()=>[o(e(y),{label:`${e(r).eat}${e(r).groupUnit}`},null,8,["label"]),o(e(y),{label:`${e(r).sleep}${e(r).groupUnit}`},null,8,["label"]),o(e(y),{label:`${e(r).play}${e(r).groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),o(e(te),{rules:[l=>!!l||e(r).genderMessage],modelValue:e(t).gender,"onUpdate:modelValue":a[4]||(a[4]=l=>e(t).gender=l)},{default:n(()=>[o(e(B),{"checked-value":1},{default:n(()=>[d(i(e(r).male),1)]),_:1}),o(e(B),{"checked-value":2},{default:n(()=>[d(i(e(r).female),1)]),_:1})]),_:1},8,["rules","modelValue"]),o(e(z),{rules:[l=>l.length>0||e(r).likeMessage],modelValue:e(t).like,"onUpdate:modelValue":a[5]||(a[5]=l=>e(t).like=l)},{default:n(()=>[o(e(C),{"checked-value":1},{default:n(()=>[d(i(e(r).eat),1)]),_:1}),o(e(C),{"checked-value":2},{default:n(()=>[d(i(e(r).sleep),1)]),_:1}),o(e(C),{"checked-value":3},{default:n(()=>[d(i(e(r).play),1)]),_:1})]),_:1},8,["rules","modelValue"]),o(e(se),{rules:[l=>l>=3||e(r).rateMessage],modelValue:e(t).score,"onUpdate:modelValue":a[6]||(a[6]=l=>e(t).score=l)},null,8,["rules","modelValue"]),o(e(ue),{rules:[l=>!!l||e(r).licenseMessage],modelValue:e(t).license,"onUpdate:modelValue":a[7]||(a[7]=l=>e(t).license=l)},null,8,["rules","modelValue"]),o(e(D),{rules:[l=>l>10||e(r).countMessage],modelValue:e(t).count,"onUpdate:modelValue":a[8]||(a[8]=l=>e(t).count=l)},null,8,["rules","modelValue"]),o(e(ne),{rules:[l=>l>10||e(r).rangeMessage],modelValue:e(t).range,"onUpdate:modelValue":a[9]||(a[9]=l=>e(t).range=l)},null,8,["rules","modelValue"]),o(e(de),{rules:[l=>l.length>=1||e(r).filesMessage],modelValue:e(t).files,"onUpdate:modelValue":a[10]||(a[10]=l=>e(t).files=l)},null,8,["rules","modelValue"])]),_:1})]),_:1},8,["disabled","readonly"]),o(E,null,{default:n(()=>[d(i(e(r).controller),1)]),_:1}),o(e(P),{direction:"column",size:["4vw",0]},{default:n(()=>[o(e(S),{block:"",type:"danger",onClick:a[11]||(a[11]=l=>m.value.reset())},{default:n(()=>[d(i(e(r).reset),1)]),_:1}),o(e(S),{block:"",type:"warning",onClick:a[12]||(a[12]=l=>m.value.resetValidation())},{default:n(()=>[d(i(e(r).resetValidation),1)]),_:1}),o(e(S),{block:"",type:"success",onClick:a[13]||(a[13]=l=>m.value.validate())},{default:n(()=>[d(i(e(r).validate),1)]),_:1}),o(e(S),{block:"",type:"info",onClick:a[14]||(a[14]=l=>u.value=!u.value)},{default:n(()=>[d(i(e(r).disabled),1)]),_:1}),o(e(S),{block:"",type:"primary",onClick:a[15]||(a[15]=l=>p.value=!p.value)},{default:n(()=>[d(i(e(r).readonly),1)]),_:1})]),_:1}),be],64))}},ml=j(ke,[["__scopeId","data-v-8c301fe0"]]);export{ml as default};
