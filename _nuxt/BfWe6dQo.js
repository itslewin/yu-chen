const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DUAyuNR3.js","./B83PEUPN.js","./BZdLRukH.js","./swiper-vue.Bs3d9ZnH.css","./Bqgdslra.js","./CqWN9WdA.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{f,r as m,_ as v,e as g}from"./B83PEUPN.js";import{u as l}from"./DHfEC8lU.js";import{q as d,w as c,e as h,s as _,j as y,u as C}from"./Bqgdslra.js";import{u as w}from"./CqWN9WdA.js";import{_ as P}from"./C9cRz4QC.js";import{k as $,ab as N,l as j,aa as T,m as r}from"./BZdLRukH.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=d(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${m(a)}.${t.integrity}`}/${h(a)}.json`):c(`/navigation/${m(a)}.${t.integrity}.json`);if(_())return(await v(()=>import("./DUAyuNR3.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:y(a),previewToken:w().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=N(e),a=j(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&g("dd-navigation").value){const{navigation:n}=C();return{navigation:n}}const{data:s}=await l(`content-navigation-${m(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=T(),{navigation:a}=e,s=o=>r(P,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),S=E;export{S as default};
