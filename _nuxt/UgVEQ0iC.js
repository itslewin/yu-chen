import{g as y,j as w,f as g,w as D}from"./Bp6rn5o4.js";import H from"./BoXUXemB.js";import S from"./Cemzds52.js";import{u as a,c as _,n as b,k as j,aa as k,m as p}from"./B1bhxvOJ.js";import"./Z4OAZ6XD.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./Cg8GA_m_.js";import"./DRrUVWC3.js";import"./BGthPwFF.js";const d=(u,s=y())=>{const e=a(u),m=g();_(()=>a(u),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),b(()=>w(t))},{immediate:!0})},q=j({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:s}=g().public.content,e=k(),{tag:m,excerpt:f,path:n,query:t,head:r}=u,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||D(y().path),find:"one"},C=(o,i)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return p(S,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return c&&d(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:f,...this.$attrs})}:({data:o})=>(c&&d(o),p(H,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||p("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||p("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),Q=q;export{Q as default};
