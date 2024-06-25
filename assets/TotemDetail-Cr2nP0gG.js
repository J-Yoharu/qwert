import{c as G,d as C,_ as R}from"./default-data-BiIJTTSx.js";import{Y as T,c as V,a0 as n,a1 as c,a2 as e,h as t,b2 as N,a3 as A,af as f,ac as o,b3 as E,a6 as p,F as b,a7 as y,ab as _,b0 as B,ah as F,r as S,a4 as q,a8 as x,V as O,av as $,b5 as Q,b9 as U,aF as W,bn as j,ad as L,aE as P,bo as M,o as Y}from"./index-_dW35LJ9.js";import{V as z}from"./VSheet-DiGYqssP.js";import{b as D,c as H}from"./filter-B7hWuaSj.js";import{r as J}from"./VDataTable-Dcdllbhv.js";import{V as K,a as X}from"./Welcome-B7kPz7A9.js";import{f as Z}from"./totem.repository-B6q_Fyut.js";import{a as I,V as ee}from"./VRow-Dex7Pfo1.js";import{V as te}from"./VSlideGroup-n9Q6nBr0.js";import{V as ae}from"./VSlideGroupItem-jhoGDnw1.js";import"./VList-MKxnMQsT.js";import"./ssrBoot-CQs2aLE0.js";import"./VTextField-BZDLI70u.js";import"./VWindowItem-D40mKObc.js";import"./Init.vue_vue_type_script_setup_true_lang-BdDsMihd.js";import"./VForm-C_P48-o0.js";const se={style:{"line-height":"1.5rem"},class:"text-wrap"},ne={class:"text-body-2"},le={key:0},oe={key:1},re=f("span",{class:"font-weight-bold"}," Horários de atendimento ",-1),ie=T({__name:"QueueTotem",props:{queue:{}},setup(w){const v=w,h=V(()=>{const[a,...i]=v.queue.attendance_hours,r=i.at(-1);return v.queue.attendance_hours.every((g,m)=>m===0?!0:g.start_time===a.start_time&&g.end_time===a.end_time&&g.weekday_iso-1===m)&&r?`Horario de atendimento de ${s(a.weekday_iso)} a ${s(r.weekday_iso)} das ${a.start_time} às ${a.end_time}`:!1});function s(a){return a?["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"][a-1]:void 0}return(a,i)=>(n(),c(B,{width:"100%",height:"100%"},{default:e(()=>[t(N,{class:"bg-secondary d-flex align-end justify-start pb-0 text-wrap overflow-visible",style:{"min-height":"60px"}},{default:e(()=>[t(z,{"min-height":"60","min-width":"60",class:"bg-primary pa-2 rounded mb-n4 mr-4 d-flex align-center justify-center"},{default:e(()=>[t(A,{src:a.queue.data.icon_src},null,8,["src"])]),_:1}),f("div",se,[f("p",null,o(a.queue.data.name),1),f("small",ne,o(a.queue.data.description),1)])]),_:1}),t(E,{class:"py-0"},{default:e(()=>[t(D,{"show-arrows":""},{default:e(()=>[(n(!0),p(b,null,y(a.queue.attendance_types,(r,u)=>(n(),c(H,{key:u},{default:e(()=>[_(o(r.data.name),1)]),_:2},1024))),128))]),_:1}),h.value?(n(),p("span",le,o(h.value),1)):(n(),p("div",oe,[re,t(D,{"show-arrows":""},{default:e(()=>[(n(!0),p(b,null,y(a.queue.attendance_hours,(r,u)=>(n(),c(H,{key:u},{default:e(()=>[_(o(s(r.weekday_iso))+" "+o(r.start_time)+" - "+o(r.end_time),1)]),_:2},1024))),128))]),_:1})]))]),_:1})]),_:1}))}}),ue=T({__name:"TotemScreensTable",props:{screens:{}},setup(w){const v=w,h=F(),s=V(()=>h.params.id),a=S(!1),i=S(0),r=[{title:"ID",align:"start",value:"id",width:"5%"},{title:"Nome",align:"start",value:"data.name",width:"20%"},{title:"Descrição",align:"start",value:"data.description",width:"20%"},{title:"Funcionalidades",align:"start",value:"traits",sortable:!0,width:"5%"},{title:"Campos",align:"start",value:"fields",sortable:!0,width:"5%"},{title:"",align:"start",value:"actions",sortable:!1,width:"5%"}],u=V(()=>v.screens[i.value]);function g(m){a.value=!0,i.value=m}return(m,d)=>(n(),p(b,null,[t(J,{items:m.screens,headers:r,"onClick:item":d[0]||(d[0]=()=>{}),"items-per-page":-1},{"item.data.name":e(({item:l})=>[t(q(U),{to:{name:"screen.detail",params:{id:s.value,screenId:l.id}}},{default:e(()=>[_(o(l.data.name),1)]),_:2},1032,["to"])]),"item.actions":e(({item:l,index:k})=>[t(x,{icon:"",variant:"flat",onClick:ve=>g(k)},{default:e(()=>[t(O,null,{default:e(()=>[_(" mdi-eye-outline ")]),_:1})]),_:2},1032,["onClick"])]),"item.traits":e(({item:l})=>[_(o(l.traits.length?l.traits.length:"-"),1)]),"item.fields":e(({item:l})=>[_(o(l.fields.length?l.fields.length:"-"),1)]),bottom:e(()=>[]),_:1},8,["items"]),t(Q,{modelValue:a.value,"onUpdate:modelValue":d[4]||(d[4]=l=>a.value=l)},{default:e(()=>[t(B,null,{default:e(()=>[t(N,{class:"d-flex align-center bg-primary"},{default:e(()=>[f("h2",null,o(u.value.data.name),1),t($),t(x,{icon:"mdi-close",variant:"plain",onClick:d[1]||(d[1]=l=>a.value=!1)})]),_:1}),t(K,{modelValue:i.value,"onUpdate:modelValue":d[3]||(d[3]=l=>i.value=l)},{default:e(()=>[(n(!0),p(b,null,y(m.screens,l=>(n(),c(X,null,{default:e(()=>[(n(),c(W(q(G)[l.data.component]),{class:"pointer-none",modelValue:q(C),"onUpdate:modelValue":d[2]||(d[2]=k=>j(C)?C.value=k:null)},null,8,["modelValue"]))]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])],64))}}),de={class:"d-flex align-center"},me=f("h2",null,"Filas",-1),ce={key:0},pe={class:"d-flex align-center"},fe=f("h2",null,"Telas",-1),_e={key:0},Ne=T({__name:"TotemDetail",setup(w){const{setBreadcrumbs:v}=L(),{openAlert:h}=P(),s=S({id:0,name:"",description:"",queues:[],screens:[],site:{cd_estabelecimento:0,ds_estabelecimento:""}}),a=M([{title:"Gerenciar Filas",slug:"totem.queue.view",to:{name:"queue.detail"}},{title:"Gerenciar telas",slug:"totem.screen.view",to:{name:"screen.totem.manager",params:{id:V(()=>s.value.id)}}}]),i=F();Y(()=>{r()});function r(){v([{title:"Totens",to:{name:"totem.view"}},{title:V(()=>s.value.id?s.value.name:i.params.id),to:{name:"totem.detail"}}]),Z(Number(i.params.id)).then(u=>{s.value=u.data}).catch(u=>{h("Erro",u)})}return(u,g)=>(n(),c(R,{title:s.value.name,"enable-action":"",actions:a,description:s.value.description},{default:e(()=>[t(ee,null,{default:e(()=>[t(I,{cols:"12"},{default:e(()=>[f("div",de,[me,t($),_(" total: "+o(s.value.queues.length),1)]),s.value.queues.length===0?(n(),p("div",ce,"Não há filas")):(n(),c(te,{key:1,"show-arrows":""},{default:e(()=>[(n(!0),p(b,null,y(s.value.queues,m=>(n(),c(ae,null,{default:e(()=>[t(ie,{width:"400",queue:m},null,8,["queue"])]),_:2},1024))),256))]),_:1}))]),_:1}),t(I,{cols:"12"},{default:e(()=>[f("div",pe,[fe,t($),_(" total: "+o(s.value.screens.length),1)]),s.value.screens.length===0?(n(),p("div",_e,"Não há telas")):(n(),c(ue,{key:1,screens:s.value.screens},null,8,["screens"]))]),_:1})]),_:1})]),_:1},8,["title","actions","description"]))}});export{Ne as default};
