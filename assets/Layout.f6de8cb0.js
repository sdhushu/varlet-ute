import{_ as W,f as s,h as c,M as _,d as j,a as i,g as p,c as l,a1 as ee,am as ne,b as F,ad as G,a6 as ae,af as K,k as I,p as N,ai as X,q as m,Q as C,j as M,S as L,D as b,E as D,R as B,F as A,ak as P,i as H,P as Q,N as V,G as Y,r as te,as as U,ao as se,ap as oe,ac as ie,o as re,w as le,an as J,y as z,n as ce}from"./vue-router.esm-bundler.0f5b2940.js";import{A as ue}from"./AnimationBox.0fffc0fe.js";import"./main.85781680.js";import"./clipboard.e35c268a.js";import"./_commonjsHelpers.b8add541.js";const de={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},pe={class:"varlet-site-mobile varlet-site-mobile--375"},me={class:"varlet-site-mobile-content"},ve=["src"];function ge(e,n,h,w,u,T){return s(),c("div",pe,[_("div",me,[_("iframe",{id:"mobile",src:`./mobile.html#/${h.componentName}?language=${h.language}&platform=pc&replace=${h.replace}`},null,8,ve)])])}const _e=W(de,[["render",ge],["__scopeId","data-v-4d6e488a"]]),he=j({name:"AppHeader",components:{AnimationBox:ue},props:{language:{type:String}},setup(){const e=i(p(l,"title")),n=i(p(l,"logo")),h=i(p(l,"pc.header.i18n")),w=i(p(l,"pc.header.version.current")),u=i(p(l,"pc.header.version.items")),T=i(p(l,"pc.header.playground")),f=i(p(l,"pc.header.github")),v=p(l,"pc.redirect"),r=i(p(l,"pc.header.darkMode")),t=i(ee()),o=i(!1),y=i(!1),$=ne(),a=F(()=>G(h.value)),d=F(()=>G(u.value)),k=()=>{const{language:g}=I();$.replace(`/${g}${v}`)},S=g=>{const{menuName:E}=I();$.replace(`/${g}/${E}`),o.value=!1},O=g=>{t.value=g,K(l,t.value),window.localStorage.setItem(p(l,"themeKey"),t.value)},q=()=>({action:"theme-change",from:"pc",data:t.value}),Z=()=>{O(t.value==="darkTheme"?"lightTheme":"darkTheme"),window.postMessage(q(),"*"),R("mobile")},R=g=>{(g==="window"?window:document.getElementById(g).contentWindow).postMessage(q(),"*")},x=g=>{setTimeout(()=>{window.location.href=g},350)};return ae((g,E)=>{E==="mobile"&&O(g),E==="playground"&&(O(g),R("mobile"))}),K(l,t.value),R("window"),{logo:n,title:e,currentVersion:w,languages:h,versionItems:u,nonEmptyLanguages:a,nonEmptyVersions:d,playground:T,github:f,isOpenLanguageMenu:o,isOpenVersionsMenu:y,darkMode:r,currentTheme:t,open:x,backRoot:k,handleLanguageChange:S,toggleTheme:Z}}});const ye={class:"varlet-site-header"},fe={class:"varlet-site-header__lead"},be={class:"varlet-site-header__tail"},Te={style:{"font-size":"14px"}},ke=["href"],we=["href"];function $e(e,n,h,w,u,T){const f=N("animation-box"),v=N("var-icon"),r=N("var-cell"),t=X("ripple");return s(),c("div",ye,[_("div",fe,[m(f,{class:"varlet-site-header__logo",onClick:e.backRoot},null,8,["onClick"]),e.title?(s(),c("div",{key:0,class:"varlet-site-header__title",onClick:n[0]||(n[0]=(...o)=>e.backRoot&&e.backRoot(...o))},C(e.title),1)):M("v-if",!0)]),_("div",be,[e.versionItems?(s(),c("div",{key:0,class:"varlet-site-header__versions",onMouseenter:n[1]||(n[1]=o=>e.isOpenVersionsMenu=!0),onMouseleave:n[2]||(n[2]=o=>e.isOpenVersionsMenu=!1)},[_("span",Te,C(e.currentVersion),1),m(v,{name:"chevron-down"}),m(Y,{name:"fade"},{default:L(()=>[b(_("div",{class:"varlet-site-header__animation-list varlet-site-header__animation-versions var-site-elevation--5",style:B({pointerEvents:e.isOpenVersionsMenu?"auto":"none"})},[(s(!0),c(A,null,P(e.nonEmptyVersions,(o,y)=>b((s(),H(r,{key:y,class:V({"varlet-site-header__animation-list--active":e.currentVersion===y}),onClick:$=>e.open(o)},{default:L(()=>[Q(C(y),1)]),_:2},1032,["class","onClick"])),[[t]])),128))],4),[[D,e.isOpenVersionsMenu]])]),_:1})],32)):M("v-if",!0),e.playground?b((s(),c("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:e.playground},[m(v,{name:"code-json",size:24})],8,ke)),[[t]]):M("v-if",!0),e.github?b((s(),c("a",{key:2,class:"varlet-site-header__link",target:"_blank",href:e.github},[m(v,{name:"github",size:28})],8,we)),[[t]]):M("v-if",!0),e.darkMode?b((s(),c("div",{key:3,class:"varlet-site-header__theme",onClick:n[3]||(n[3]=(...o)=>e.toggleTheme&&e.toggleTheme(...o))},[m(v,{size:"26px",name:e.currentTheme==="lightTheme"?"white-balance-sunny":"weather-night",style:B({marginBottom:e.currentTheme==="darkTheme"&&"2px",marginTop:e.currentTheme==="lightTheme"&&"2px"})},null,8,["name","style"])])),[[t]]):M("v-if",!0),e.languages?(s(),c("div",{key:4,class:"varlet-site-header__language",onMouseenter:n[4]||(n[4]=o=>e.isOpenLanguageMenu=!0),onMouseleave:n[5]||(n[5]=o=>e.isOpenLanguageMenu=!1)},[m(v,{name:"translate",size:"26px"}),m(v,{name:"chevron-down"}),m(Y,{name:"fade"},{default:L(()=>[b(_("div",{class:"varlet-site-header__animation-list var-site-elevation--5",style:B({pointerEvents:e.isOpenLanguageMenu?"auto":"none"})},[(s(!0),c(A,null,P(e.nonEmptyLanguages,(o,y)=>b((s(),H(r,{key:y,class:V({"varlet-site-header__animation-list--active":e.language===y}),onClick:$=>e.handleLanguageChange(y)},{default:L(()=>[Q(C(o),1)]),_:2},1032,["class","onClick"])),[[t]])),128))],4),[[D,e.isOpenLanguageMenu]])]),_:1})],32)):M("v-if",!0)])])}const Me=W(he,[["render",$e],["__scopeId","data-v-f557bc25"]]),Ce=j({name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(e,{emit:n}){return{menuTypes:te(U),changeRoute:u=>{u.type===U.TITLE||e.menuName===u.doc||n("change",u)}}}});const Le=e=>(se("data-v-d3ae8392"),e=e(),oe(),e),Ne={class:"varlet-site-sidebar var-elevation--3"},Se=Le(()=>_("span",{class:"varlet-site-sidebar__indicator"},null,-1)),Ee={key:0,class:"varlet-site-sidebar__item--title"},Ie={key:1};function Ae(e,n,h,w,u,T){const f=N("var-cell"),v=X("ripple");return s(),c("div",Ne,[(s(!0),c(A,null,P(e.menu,(r,t)=>b((s(),H(f,{class:V(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":r.doc===e.menuName,"varlet-site-sidebar__link":r.type!==e.menuTypes.TITLE,"varlet-site-sidebar__title":r.type===e.menuTypes.TITLE}]),id:r.doc,key:t,onClick:o=>e.changeRoute(r)},{default:L(()=>[Se,r.type===e.menuTypes.TITLE?(s(),c("span",Ee,C(r.text[e.language]),1)):(s(),c("span",Ie,C(r.text[e.language]),1))]),_:2},1032,["id","class","onClick"])),[[v,{disabled:r.type===e.menuTypes.TITLE}]])),128))])}const Ve=W(Ce,[["render",Ae],["__scopeId","data-v-d3ae8392"]]),Oe={class:"varlet-site"},Re={class:"varlet-site-content"},Be={class:"varlet-site-playground-container"},ze=["src"],je=j({setup(e){const n=i(p(l,"pc.menu",[])),h=i(p(l,"useMobile")),w=p(l,"mobile.redirect"),u=i(""),T=i(null),f=i(""),v=i(null),r=ie(),t=a=>{const d=n.value.find(k=>k.doc===a);return(d==null?void 0:d.type)===U.COMPONENT?a:w.slice(1)},o=()=>{const{menuName:a}=I();ce(()=>{const d=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-site-cell"),k=n.value.findIndex(S=>S.doc===a);k!==-1&&d[k].scrollIntoView({block:"center",inline:"start"})})},y=a=>{v.value.scrollTop=0,T.value=t(a.doc),f.value=a.doc},$=()=>{const a="VARLET_UI_PLAYGROUND_HAS_BEEN_CLOSED";!localStorage.getItem(a)&&!window.confirm("The code will no longer be saved after closing. Are you sure you want to close?")||(localStorage.setItem(a,"true"),z.showPlayground=!1)};return re(()=>{o(),window.addEventListener("message",a=>{const{data:d}=a;d.action==="playground-close"&&$()})}),le(()=>r.path,()=>{const{language:a,menuName:d}=I();!a||!d||(T.value=t(d),f.value=d,u.value=a,document.title=p(l,"pc.title")[a])},{immediate:!0}),(a,d)=>{const k=N("router-view"),S=N("var-popup");return s(),c(A,null,[_("div",Oe,[m(Me,{language:u.value},null,8,["language"]),_("div",Re,[m(Ve,{language:u.value,menu:n.value,"menu-name":f.value,onChange:y},null,8,["language","menu","menu-name"]),_("div",{class:V(["varlet-site-doc-container",[!h.value&&"varlet-site-doc-container--pc-only"]]),ref_key:"doc",ref:v},[m(k)],2),b(m(_e,{"component-name":T.value,language:u.value,replace:f.value},null,8,["component-name","language","replace"]),[[D,h.value]])])]),m(S,{position:"right",show:J(z).showPlayground,onClickOverlay:$},{default:L(()=>[_("div",Be,[_("iframe",{id:"playground",class:"varlet-site-playground-iframe",src:J(z).playgroundURL,frameborder:"0"},null,8,ze)])]),_:1},8,["show"])],64)}}});export{je as default};
