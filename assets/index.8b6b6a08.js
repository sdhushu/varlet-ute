import{a as h,k as g,l as m,t as v,c as y}from"./shared.33d42a23.js";import{d,a as f,w as S,f as k,i as z,N as U,R as C,au as N,n as L}from"./vue-router.esm-bundler.d85fe05e.js";var R={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:h()};function p(n,r,s,o,t,i,e){try{var a=n[i](e),l=a.value}catch(c){s(c);return}a.done?r(l):Promise.resolve(l).then(o,t)}function w(n){return function(){var r=this,s=arguments;return new Promise(function(o,t){var i=n.apply(r,s);function e(l){p(i,o,t,e,a,"next",l)}function a(l){p(i,o,t,e,a,"throw",l)}e(void 0)})}}var{n:b,classes:I}=y("icon");function P(n,r){return k(),z(N(n.isURL(n.name)?"img":"i"),{class:U(n.classes(n.n(),[n.namespace!==n.n(),n.namespace],n.namespace+"--set",[n.isURL(n.name),n.n("image"),n.namespace+"-"+n.nextName],[n.shrinking,n.n("--shrinking")])),style:C({color:n.color,transition:"transform "+n.toNumber(n.transition)+"ms",width:n.isURL(n.name)?n.toSizeUnit(n.size):null,height:n.isURL(n.name)?n.toSizeUnit(n.size):null,fontSize:n.toSizeUnit(n.size)}),src:n.isURL(n.name)?n.nextName:null,onClick:n.onClick},null,8,["class","style","src","onClick"])}const u=d({render:P,name:"VarIcon",props:R,setup(n){var r=f(""),s=f(!1),o=function(){var t=w(function*(i,e){var{transition:a}=n;if(e==null||m(a)===0){r.value=i;return}s.value=!0,yield L(),setTimeout(()=>{e!=null&&(r.value=i),s.value=!1},m(a))});return function(e,a){return t.apply(this,arguments)}}();return S(()=>n.name,o,{immediate:!0}),{n:b,classes:I,nextName:r,shrinking:s,isURL:g,toNumber:m,toSizeUnit:v}}});u.install=function(n){n.component(u.name,u)};export{u as I,R as p};
