import{g as S,j as E,h as q,e as z,c as D,t as m}from"./shared.33d42a23.js";import{d as M,q as x,aA as U,F as W}from"./vue-router.esm-bundler.d85fe05e.js";var y=a=>["mini","small","normal","large"].includes(a),_=a=>y(a)||S(a)||E(a)||q(a),$=a=>["start","end","center","space-around","space-between"].includes(a),k={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:_},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:$},inline:{type:Boolean,default:!1}};function r(a){return"calc("+a+" / 2)"}function G(a,i,p){var{direction:o,justify:n,index:e,lastIndex:l}=p,t="0";return o==="row"&&(n==="start"||n==="center"||n==="end"?e!==l?t=r(a)+" "+i+" "+r(a)+" 0":t=r(a)+" 0":n==="space-around"?t=r(a)+" "+r(i):n==="space-between"&&(e===0?t=r(a)+" "+r(i)+" "+r(a)+" 0":e===l?t=r(a)+" 0 "+r(a)+" "+r(i):t=r(a)+" "+r(i))),o==="column"&&e!==l&&(t="0 0 "+a+" 0"),t}var{n:v,classes:H}=D("space");const g=M({name:"VarSpace",props:k,setup(a,i){var{slots:p}=i,o=(e,l)=>l?["var(--space-size-"+e+"-y)","var(--space-size-"+e+"-x)"]:S(e)?e.map(m):[m(e),m(e)],n=e=>e==="start"||e==="end"?"flex-"+e:e;return()=>{var e,{inline:l,justify:t,align:j,wrap:b,direction:f,size:h}=a,u=(e=z(p.default))!=null?e:[],V=y(h),[w,I]=o(h,V),A=d=>{var c=[];return d.forEach(s=>{if(s.type!==U){if(s.type===W&&S(s.children)){s.children.forEach(B=>{c.push(B)});return}c.push(s)}}),c};u=A(u);var C=u.length-1,F=u.map((d,c)=>{var s=G(w,I,{direction:f,justify:t,index:c,lastIndex:C});return x("div",{style:{margin:s}},[d])});return x("div",{class:H(v(),v("$--box"),[l,v("--inline")]),style:{flexDirection:f,justifyContent:n(t),alignItems:n(j),flexWrap:b?"wrap":"nowrap",margin:f==="row"?"calc(-1 * "+w+" / 2) 0":void 0}},[F])}}});g.install=function(a){a.component(g.name,g)};export{g as S};
