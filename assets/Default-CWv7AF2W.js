import{p as U,r as z,s as I,c as h,a as He,w as R,o as le,b as oe,m as ke,g as G,u as Ve,d as j,e as Ce,t as $,f as Z,h as u,i as W,j as Ye,k as K,l as Oe,n as ne,q as We,v as Ue,I as Xe,x as Fe,y as Be,z as Q,A as qe,B as _e,C as Te,V as q,D as xe,F as X,E as Ge,G as Ze,H as je,J as Je,K as Ke,L as Qe,M as et,N as tt,O as at,P as lt,Q as ot,R as nt,S as rt,T as Ie,U as it,W as ut,X as st,Y as F,Z as Ee,_ as Me,$ as ct,a0 as C,a1 as B,a2 as b,a3 as vt,a4 as Y,a5 as H,a6 as x,a7 as re,a8 as J,a9 as dt,aa as mt,ab as ee,ac as M,ad as ge,ae as Pe,af as A,ag as ft,ah as De,ai as gt,aj as he,ak as ye,al as ht,am as yt,an as bt,ao as pt}from"./index-eSwy3xtz.js";import{V as wt}from"./VSlideGroup-04aVnn54.js";import{m as St,V as be}from"./VToolbar-DNJPuklC.js";import{u as $e}from"./ssrBoot-Bs0WsREi.js";import{V as kt}from"./VSlideGroupItem-BB02UQvY.js";import{V as te}from"./VTooltip-DEFrmTcV.js";import{V as ae,a as Vt,b as pe}from"./VList-Ck199v2W.js";import{V as Ct}from"./VMain-B73IPKAG.js";import{V as Bt}from"./VContainer-Clag2u1U.js";import"./index-C-zpw9ZX.js";const _t=U({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=n;let o=0;const l=z(null),a=I(0),s=I(0),c=I(0),d=I(!1),r=I(!1),i=h(()=>Number(e.scrollThreshold)),f=h(()=>He((i.value-a.value)/i.value||0)),m=()=>{const v=l.value;!v||t&&!t.value||(o=a.value,a.value="window"in v?v.pageYOffset:v.scrollTop,r.value=a.value<o,c.value=Math.abs(a.value-i.value))};return R(r,()=>{s.value=s.value||a.value}),R(d,()=>{s.value=0}),le(()=>{R(()=>e.scrollTarget,v=>{var w;const k=v?document.querySelector(v):window;k&&k!==l.value&&((w=l.value)==null||w.removeEventListener("scroll",m),l.value=k,l.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),oe(()=>{var v;(v=l.value)==null||v.removeEventListener("scroll",m)}),t&&R(t,m,{immediate:!0}),{scrollThreshold:i,currentScroll:a,currentThreshold:c,isScrollActive:d,scrollRatio:f,isScrollingUp:r,savedScroll:s}}const It=U({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...St(),...ke(),..._t(),height:{type:[Number,String],default:64}},"VAppBar"),Et=G()({name:"VAppBar",props:It(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=z(),l=Ve(e,"modelValue"),a=h(()=>{var P;const S=new Set(((P=e.scrollBehavior)==null?void 0:P.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),s=h(()=>{const S=a.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!l.value}),{currentScroll:c,scrollThreshold:d,isScrollingUp:r,scrollRatio:i}=Tt(e,{canScroll:s}),f=h(()=>e.collapse||a.value.collapse&&(a.value.inverted?i.value>0:i.value===0)),m=h(()=>e.flat||a.value.elevate&&(a.value.inverted?c.value>0:c.value===0)),v=h(()=>a.value.fadeImage?a.value.inverted?1-i.value:i.value:void 0),k=h(()=>{var E,L;if(a.value.hide&&a.value.inverted)return 0;const S=((E=o.value)==null?void 0:E.contentHeight)??0,P=((L=o.value)==null?void 0:L.extensionHeight)??0;return S+P});j(h(()=>!!e.scrollBehavior),()=>{Ye(()=>{a.value.hide?a.value.inverted?l.value=c.value>d.value:l.value=r.value||c.value<d.value:l.value=!0})});const{ssrBootStyles:w}=$e(),{layoutItemStyles:_}=Ce({id:e.name,order:h(()=>parseInt(e.order,10)),position:$(e,"location"),layoutSize:k,elementSize:I(void 0),active:l,absolute:$(e,"absolute")});return Z(()=>{const S=be.filterProps(e);return u(be,W({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":v.value,height:void 0,...w.value},e.style]},S,{collapse:f.value,flat:m.value}),t)}),{}}}),Mt=U({divider:[Number,String],...K()},"VBreadcrumbsDivider"),Pt=G()({name:"VBreadcrumbsDivider",props:Mt(),setup(e,n){let{slots:t}=n;return Z(()=>{var o;return u("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((o=t==null?void 0:t.default)==null?void 0:o.call(t))??e.divider])}),{}}}),Dt=U({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...K(),...Oe(),...ne({tag:"li"})},"VBreadcrumbsItem"),$t=G()({name:"VBreadcrumbsItem",props:Dt(),setup(e,n){let{slots:t,attrs:o}=n;const l=We(e,o),a=h(()=>{var r;return e.active||((r=l.isActive)==null?void 0:r.value)}),s=h(()=>a.value?e.activeColor:e.color),{textColorClasses:c,textColorStyles:d}=Ue(s);return Z(()=>u(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":a.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:a.value&&e.activeClass},c.value,e.class],style:[d.value,e.style],"aria-current":a.value?"page":void 0},{default:()=>{var r,i;return[l.isLink.value?u("a",{class:"v-breadcrumbs-item--link",href:l.href.value,"aria-current":a.value?"page":void 0,onClick:l.navigate},[((i=t.default)==null?void 0:i.call(t))??e.title]):((r=t.default)==null?void 0:r.call(t))??e.title]}})),{}}}),Rt=U({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:Xe,items:{type:Array,default:()=>[]},...K(),...Fe(),...Be(),...ne({tag:"ul"})},"VBreadcrumbs"),Lt=G()({name:"VBreadcrumbs",props:Rt(),setup(e,n){let{slots:t}=n;const{backgroundColorClasses:o,backgroundColorStyles:l}=Q($(e,"bgColor")),{densityClasses:a}=qe(e),{roundedClasses:s}=_e(e);Te({VBreadcrumbsDivider:{divider:$(e,"divider")},VBreadcrumbsItem:{activeClass:$(e,"activeClass"),activeColor:$(e,"activeColor"),color:$(e,"color"),disabled:$(e,"disabled")}});const c=h(()=>e.items.map(d=>typeof d=="string"?{item:{title:d},raw:d}:{item:d,raw:d}));return Z(()=>{const d=!!(t.prepend||e.icon);return u(e.tag,{class:["v-breadcrumbs",o.value,a.value,s.value,e.class],style:[l.value,e.style]},{default:()=>{var r;return[d&&u("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?u(xe,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):u(q,{key:"prepend-icon",start:!0,icon:e.icon},null)]),c.value.map((i,f,m)=>{var w;let{item:v,raw:k}=i;return u(X,null,[((w=t.item)==null?void 0:w.call(t,{item:v,index:f}))??u($t,W({key:f,disabled:f>=m.length-1},typeof v=="string"?{title:v}:v),{default:t.title?()=>{var _;return(_=t.title)==null?void 0:_.call(t,{item:v,index:f})}:void 0}),f<m.length-1&&u(Pt,null,{default:t.divider?()=>{var _;return(_=t.divider)==null?void 0:_.call(t,{item:k,index:f})}:void 0})])}),(r=t.default)==null?void 0:r.call(t)]}})}),{}}});function Nt(e){let{rootEl:n,isSticky:t,layoutItemStyles:o}=e;const l=I(!1),a=I(0),s=h(()=>{const r=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[r]:Ge(a.value)}:{top:o.value.top}]});le(()=>{R(t,r=>{r?window.addEventListener("scroll",d,{passive:!0}):window.removeEventListener("scroll",d)},{immediate:!0})}),oe(()=>{window.removeEventListener("scroll",d)});let c=0;function d(){const r=c>window.scrollY?"up":"down",i=n.value.getBoundingClientRect(),f=parseFloat(o.value.top??0),m=window.scrollY-Math.max(0,a.value-f),v=i.height+Math.max(a.value,f)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-f?(l.value="top",a.value=f):r==="up"&&l.value==="bottom"||r==="down"&&l.value==="top"?(a.value=window.scrollY+i.top-k,l.value=!0):r==="down"&&v<=0?(a.value=0,l.value="bottom"):r==="up"&&m<=0&&(k?l.value!=="top"&&(a.value=-m+k+f,l.value="top"):(a.value=i.top+m,l.value="top")),c=window.scrollY}return{isStuck:l,stickyStyles:s}}const At=100,zt=20;function we(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Se(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const o=we(n),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);n+=(l-o)*Math.abs(l),t===e.length-1&&(n*=.5)}return we(n)*1e3}function Ht(){const e={};function n(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Ze(zt))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function o(l){var r;const a=(r=e[l])==null?void 0:r.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const s=a[0],c=[],d=[];for(const i of a){if(s[0]-i[0]>At)break;c.push({t:i[0],d:i[1].clientX}),d.push({t:i[0],d:i[1].clientY})}return{x:Se(c),y:Se(d),get direction(){const{x:i,y:f}=this,[m,v]=[Math.abs(i),Math.abs(f)];return m>v&&i>=0?"right":m>v&&i<=0?"left":v>m&&f>=0?"down":v>m&&f<=0?"up":Yt()}}}return{addMovement:n,endTouch:t,getVelocity:o}}function Yt(){throw new Error}function Ot(e){let{isActive:n,isTemporary:t,width:o,touchless:l,position:a}=e;le(()=>{window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),oe(()=>{window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",E)});const s=h(()=>["left","right"].includes(a.value)),{addMovement:c,endTouch:d,getVelocity:r}=Ht();let i=!1;const f=I(!1),m=I(0),v=I(0);let k;function w(y,g){return(a.value==="left"?y:a.value==="right"?document.documentElement.clientWidth-y:a.value==="top"?y:a.value==="bottom"?document.documentElement.clientHeight-y:O())-(g?o.value:0)}function _(y){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const p=a.value==="left"?(y-v.value)/o.value:a.value==="right"?(document.documentElement.clientWidth-y-v.value)/o.value:a.value==="top"?(y-v.value)/o.value:a.value==="bottom"?(document.documentElement.clientHeight-y-v.value)/o.value:O();return g?Math.max(0,Math.min(1,p)):p}function S(y){if(l.value)return;const g=y.changedTouches[0].clientX,p=y.changedTouches[0].clientY,V=25,D=a.value==="left"?g<V:a.value==="right"?g>document.documentElement.clientWidth-V:a.value==="top"?p<V:a.value==="bottom"?p>document.documentElement.clientHeight-V:O(),N=n.value&&(a.value==="left"?g<o.value:a.value==="right"?g>document.documentElement.clientWidth-o.value:a.value==="top"?p<o.value:a.value==="bottom"?p>document.documentElement.clientHeight-o.value:O());(D||N||n.value&&t.value)&&(i=!0,k=[g,p],v.value=w(s.value?g:p,n.value),m.value=_(s.value?g:p),d(y),c(y))}function P(y){const g=y.changedTouches[0].clientX,p=y.changedTouches[0].clientY;if(i){if(!y.cancelable){i=!1;return}const D=Math.abs(g-k[0]),N=Math.abs(p-k[1]);(s.value?D>N&&D>3:N>D&&N>3)?(f.value=!0,i=!1):(s.value?N:D)>3&&(i=!1)}if(!f.value)return;y.preventDefault(),c(y);const V=_(s.value?g:p,!1);m.value=Math.max(0,Math.min(1,V)),V>1?v.value=w(s.value?g:p,!0):V<0&&(v.value=w(s.value?g:p,!1))}function E(y){if(i=!1,!f.value)return;c(y),f.value=!1;const g=r(y.changedTouches[0].identifier),p=Math.abs(g.x),V=Math.abs(g.y);(s.value?p>V&&p>400:V>p&&V>3)?n.value=g.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||O()):n.value=m.value>.5}const L=h(()=>f.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*o.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*o.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*o.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*o.value}px))`:O(),transition:"none"}:void 0);return{isDragging:f,dragProgress:m,dragStyles:L}}function O(){throw new Error}const Wt=["start","end","left","right","top","bottom"],Ut=U({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Wt.includes(e)},sticky:Boolean,...je(),...K(),...Je(),...Ke(),...ke(),...Be(),...ne({tag:"nav"}),...Qe()},"VNavigationDrawer"),Xt=G()({name:"VNavigationDrawer",props:Ut(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:t,emit:o,slots:l}=n;const{isRtl:a}=et(),{themeClasses:s}=tt(e),{borderClasses:c}=at(e),{backgroundColorClasses:d,backgroundColorStyles:r}=Q($(e,"color")),{elevationClasses:i}=lt(e),{displayClasses:f,mobile:m}=ot(e),{roundedClasses:v}=_e(e),k=nt(),w=Ve(e,"modelValue",null,T=>!!T),{ssrBootStyles:_}=$e(),{scopeId:S}=rt(),P=z(),E=I(!1),L=h(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),y=h(()=>it(e.location,a.value)),g=h(()=>!e.permanent&&(m.value||e.temporary)),p=h(()=>e.sticky&&!g.value&&y.value!=="bottom");j(()=>e.expandOnHover&&e.rail!=null,()=>{R(E,T=>o("update:rail",!T))}),j(()=>!e.disableResizeWatcher,()=>{R(g,T=>!e.permanent&&st(()=>w.value=!T))}),j(()=>!e.disableRouteWatcher&&!!k,()=>{R(k.currentRoute,()=>g.value&&(w.value=!1))}),R(()=>e.permanent,T=>{T&&(w.value=!0)}),Ie(()=>{e.modelValue!=null||g.value||(w.value=e.permanent||!m.value)});const{isDragging:V,dragProgress:D,dragStyles:N}=Ot({isActive:w,isTemporary:g,width:L,touchless:$(e,"touchless"),position:y}),ie=h(()=>{const T=g.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):L.value;return V.value?T*D.value:T}),{layoutItemStyles:ue,layoutItemScrimStyles:Re}=Ce({id:e.name,order:h(()=>parseInt(e.order,10)),position:y,layoutSize:ie,elementSize:L,active:h(()=>w.value||V.value),disableTransitions:h(()=>V.value),absolute:h(()=>e.absolute||p.value&&typeof se.value!="string")}),{isStuck:se,stickyStyles:Le}=Nt({rootEl:P,isSticky:p,layoutItemStyles:ue}),ce=Q(h(()=>typeof e.scrim=="string"?e.scrim:null)),Ne=h(()=>({...V.value?{opacity:D.value*.2,transition:"none"}:void 0,...Re.value}));Te({VList:{bgColor:"transparent"}});function Ae(){E.value=!0}function ze(){E.value=!1}return Z(()=>{const T=l.image||e.image;return u(X,null,[u(e.tag,W({ref:P,onMouseenter:Ae,onMouseleave:ze,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":g.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":p.value},s.value,d.value,c.value,f.value,i.value,v.value,e.class],style:[r.value,ue.value,N.value,_.value,Le.value,e.style]},S,t),{default:()=>{var ve,de,me,fe;return[T&&u("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(ve=l.image)==null?void 0:ve.call(l,{image:e.image}):u("img",{src:e.image,alt:""},null)]),l.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(de=l.prepend)==null?void 0:de.call(l)]),u("div",{class:"v-navigation-drawer__content"},[(me=l.default)==null?void 0:me.call(l)]),l.append&&u("div",{class:"v-navigation-drawer__append"},[(fe=l.append)==null?void 0:fe.call(l)])]}}),u(ut,{name:"fade-transition"},{default:()=>[g.value&&(V.value||w.value)&&!!e.scrim&&u("div",W({class:["v-navigation-drawer__scrim",ce.backgroundColorClasses.value],style:[Ne.value,ce.backgroundColorStyles.value],onClick:()=>w.value=!1},S),null)]})])}),{isStuck:se}}}),Ft={key:0},qt=F({__name:"AppBar",setup(e){Ee(Me());const n=ct(),t=z(!1);function o(){n.global.name.value=n.global.current.value.dark?"light":"dark",localStorage.setItem("theme",JSON.stringify(n.global.current.value)),localStorage.setItem("themeName",n.global.name.value)}const l=h(()=>n.global.current.value.dark?"mdi-white-balance-sunny":"mdi-weather-night");function a(){t.value=!0,dt().finally(()=>{t.value=!1})}const s=[{title:"Totens",icon:"mdi-monitor-vertical",route:{name:"totem.view"}},{title:"Filas",icon:"mdi-format-list-bulleted",route:{name:"queue.view"}},{icon:"mdi-sitemap-outline",title:"Tipos de Atendimento",route:{name:"attendance-type.view"}}];return(c,d)=>(C(),B(Et,{color:"nav-color",class:"position-fixed",elevation:"0"},{prepend:b(()=>[c.$vuetify.display.mobile?H("",!0):(C(),B(vt,{key:0,"aspect-ratio":"16/9",onClick:d[0]||(d[0]=r=>c.$router.push({path:"/"})),class:"pointer mx-4",src:Y(mt),width:"50"},null,8,["src"])),u(wt,{"show-arrows":""},{default:b(()=>[(C(),x(X,null,re(s,r=>u(kt,{value:r.route.name},{default:b(()=>[u(J,{class:"text-regular mx-1",onClick:i=>c.$router.push(r.route),active:c.$router.currentRoute.value.name==r.route.name},{default:b(()=>[u(q,{class:"mr-1"},{default:b(()=>[ee(M(r.icon),1)]),_:2},1024),c.$vuetify.display.mobile?H("",!0):(C(),x("span",Ft,M(r.title),1))]),_:2},1032,["onClick","active"])]),_:2},1032,["value"])),64))]),_:1})]),append:b(()=>[u(J,{onClick:o,variant:"text",icon:l.value},null,8,["icon"]),u(J,{onClick:a,loading:t.value,title:"Sair",icon:"mdi-exit-to-app"},null,8,["loading"])]),_:1}))}}),xt=F({__name:"BreadCrumb",setup(e){const{breadcrumbs:n}=Ee(ge());return ge(),(t,o)=>(C(),B(Lt,{class:"pa-0",items:Y(n)},{divider:b(()=>[u(q,{icon:"mdi-chevron-right"})]),_:1},8,["items"]))}}),Gt=Pe(xt,[["__scopeId","data-v-fcd68e9d"]]),Zt=F({__name:"Avatar",props:{user:{},size:{default:"default"},density:{default:"default"},showTooltip:{type:Boolean,default:!1},color:{default:"primary"}},setup(e){return(n,t)=>(C(),B(ft,{color:n.color,size:n.size,density:n.density},{default:b(()=>{var o;return[A("span",null,M((o=n.user)==null?void 0:o.name.split(" ").map(l=>l[0]).join("")),1),n.showTooltip?(C(),B(te,{key:0,activator:"parent",location:"top","content-class":`bg-${n.color}`},{default:b(()=>{var l;return[A("span",null,M((l=n.user)==null?void 0:l.name),1)]}),_:1},8,["content-class"])):H("",!0)]}),_:1},8,["color","size","density"]))}}),jt=F({__name:"DrawerItem",props:{item:{},rail:{type:Boolean}},setup(e){const n=De(),t=o=>n.matched.some(l=>l.name==o);return(o,l)=>{const a=gt("DrawerItem",!0);return o.item.items?(C(),B(Vt,{key:0,fluid:o.rail},{activator:b(({props:s})=>[!o.item.acl||Y(he).acl(o.item.acl)?(C(),B(ae,W({key:0,title:o.item.title},s,{active:t(o.item.route.name)}),{prepend:b(({isActive:c})=>[u(q,{size:"24",color:c?"white":void 0},{default:b(()=>[ee(M(o.item.icon),1)]),_:2},1032,["color"])]),title:b(()=>[A("span",{class:ye({"font-weight-semi-bold":t(o.item.route.name)})},M(o.item.title),3)]),default:b(()=>[o.rail?(C(),B(te,{key:0,activator:"parent",location:"top","content-class":"bg-nav-color"},{default:b(()=>[A("span",null,M(o.item.title),1)]),_:1})):H("",!0)]),_:2},1040,["title","active"])):H("",!0)]),default:b(()=>[(C(!0),x(X,null,re(o.item.items,s=>(C(),B(a,{item:s,rail:o.rail},null,8,["item","rail"]))),256))]),_:1},8,["fluid"])):!o.item.acl||Y(he).acl(o.item.acl)?(C(),B(ae,W({key:1,active:t(o.item.route.name),title:o.item.title,onClick:l[0]||(l[0]=s=>o.$router.push(o.item.route)),value:"home"},o.$attrs),{prepend:b(({isActive:s})=>[u(q,{size:"24",color:s?"white":void 0},{default:b(()=>[ee(M(o.item.icon),1)]),_:2},1032,["color"])]),title:b(()=>[A("span",{class:ye({"font-weight-semi-bold":t(o.item.route.name)})},M(o.item.title),3)]),default:b(()=>[o.rail?(C(),B(te,{key:0,activator:"parent",location:"top","content-class":"bg-nav-color"},{default:b(()=>[A("span",null,M(o.item.title),1)]),_:1})):H("",!0)]),_:1},16,["active","title"])):H("",!0)}}}),Jt={class:"pl-4 font-weight-semi-bold"},Kt=F({__name:"NavigationDrawer",props:{items:{}},setup(e){ht(c=>({"5ad86d98":o.value}));const n=z(!0),t=z(!0),o=h(()=>t.value?"73%":"94%");z({icon:"mdi-logout",title:"Sair",route:{name:"auth.logout"}}),De();const a=Me().user;function s(){t.value=!t.value,localStorage.setItem("rail",t.value.toString())}return Ie(()=>{const c=localStorage.getItem("rail");c&&(t.value=c=="true")}),(c,d)=>(C(),B(Xt,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=r=>n.value=r),rail:t.value,permanent:"",color:"nav-color",class:"position-fixed"},{default:b(()=>[u(pe,{density:"compact",nav:""},{default:b(()=>[u(ae,null,{prepend:b(()=>[u(Zt,{user:Y(a),color:"nav-color-accent",size:"24","show-tooltip":t.value},null,8,["user","show-tooltip"])]),title:b(()=>[A("span",Jt,M(Y(a).name),1)]),_:1})]),_:1}),u(yt),u(J,{color:"nav-color",variant:"flat",size:"28",class:"toggle-rail-drawer",icon:t.value?"mdi-chevron-right":"mdi-chevron-left",onClick:bt(s,["stop"])},null,8,["icon"]),u(pe,{class:"mt-3",nav:""},{default:b(()=>[(C(!0),x(X,null,re(c.items,(r,i)=>(C(),B(jt,{key:i,item:r,rail:t.value},null,8,["item","rail"]))),128))]),_:1})]),_:1},8,["modelValue","rail"]))}}),Qt=Pe(Kt,[["__scopeId","data-v-c4e15200"]]),ea={class:"flex-grow-1"},va=F({__name:"Default",setup(e){const n=z([{icon:"mdi-account-supervisor",title:"Usuário",route:{name:"user.view"}},{icon:"mdi-shield-key-outline",title:"ACL",route:{name:"management.acl"}}]);return(t,o)=>(C(),x(X,null,[u(qt),u(Qt,{items:n.value},null,8,["items"]),u(Ct,null,{default:b(()=>[u(Bt,{fluid:"",class:"d-flex flex-column overflow-auto h-100"},{default:b(()=>[u(Gt,{class:"mb-4"}),A("div",ea,[u(Y(pt))])]),_:1})]),_:1})],64))}});export{va as default};
