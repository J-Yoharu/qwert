import{Y as d,ar as c,r,o as v,a1 as s,a6 as f,h as V,a2 as g,a5 as _,F as R}from"./index-qD7YzMI5.js";import{a as k,u as h}from"./acl.repository-Dv74h0J3.js";import{_ as B}from"./Role.vue_vue_type_script_setup_true_lang-Cejc1sYH.js";import{L as U}from"./Loading-DDCQjrni.js";import"./LayoutView.vue_vue_type_script_setup_true_lang-CmZlgHcX.js";import"./VRow-D8J0Kcti.js";import"./VSheet-BBLRjc8r.js";import"./validator-BWY9Mz8E.js";import"./VSlideGroup-BFjSOK57.js";import"./VTextField-Dhuq--7F.js";import"./VForm-Z8UNoJNM.js";import"./VWindowItem-xcBKYlQf.js";import"./ssrBoot-CKTcMaVY.js";import"./string-D3I3Kuho.js";import"./VContainer-D9_cgc0e.js";const z=d({__name:"RoleUpdate",props:{id:{}},setup(m){const n=m,u=c(),t=r(!1),a=r({id:"",name:"",scopes:[],users:[],level:1,is_default:!0}),p=()=>{t.value=!0,k(n.id).then(o=>{a.value=o.data,a.value.scopes=a.value.scopes.map(e=>e.slug?e.slug:e)}).catch(o=>{console.error(o)}).finally(()=>{t.value=!1})},i=()=>{h(a.value).then(()=>{u.push({name:"management.acl"})}).catch(o=>{console.error(o)})};return v(()=>{p()}),(o,e)=>(s(),f(R,null,[V(U,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l)},null,8,["modelValue"]),t.value?_("",!0):(s(),g(B,{key:0,modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),onSave:i},null,8,["modelValue"]))],64))}});export{z as default};
