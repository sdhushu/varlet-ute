import{a as c,j as h,k as m,t as y,c as d}from"./shared-128c81f0.js";import{d as S,a as f,w as C,f as z,i as U,N as k,R as N,ar as L,n as R}from"./vue-router.esm-bundler-fa266481.js";var w={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},animationClass:{type:String},onClick:c()};function p(n,r,s,o,t,i,e){try{var a=n[i](e),l=a.value}catch(v){s(v);return}a.done?r(l):Promise.resolve(l).then(o,t)}function I(n){return function(){var r=this,s=arguments;return new Promise(function(o,t){var i=n.apply(r,s);function e(l){p(i,o,t,e,a,"next",l)}function a(l){p(i,o,t,e,a,"throw",l)}e(void 0)})}}var{n:P,classes:b}=d("icon");function T(n,r){return z(),U(L(n.isURL(n.name)?"img":"i"),{class:k(n.classes(n.n(),[n.namespace!==n.n(),n.namespace],n.namespace+"--set",[n.isURL(n.name),n.n("image"),n.namespace+"-"+n.nextName],[n.animateInProgress,n.animationClass==null?n.n("--shrinking"):n.animationClass])),style:N({color:n.color,"transition-duration":n.toNumber(n.transition)+"ms",width:n.isURL(n.name)?n.toSizeUnit(n.size):null,height:n.isURL(n.name)?n.toSizeUnit(n.size):null,fontSize:n.toSizeUnit(n.size)}),src:n.isURL(n.name)?n.nextName:null,onClick:n.onClick},null,8,["class","style","src","onClick"])}var g=S({name:"VarIcon",props:w,setup(n){var r=f(""),s=f(!1),o=function(){var t=I(function*(i,e){var{transition:a}=n;if(e==null||m(a)===0){r.value=i;return}s.value=!0,yield R(),setTimeout(()=>{e!=null&&(r.value=i),s.value=!1},m(a))});return function(e,a){return t.apply(this,arguments)}}();return C(()=>n.name,o,{immediate:!0}),{n:P,classes:b,nextName:r,animateInProgress:s,isURL:h,toNumber:m,toSizeUnit:y}}});g.render=T;const u=g;u.install=function(n){n.component(u.name,u)};export{u as I,w as p};
