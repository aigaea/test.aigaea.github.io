import{_ as c}from"./cursor-mask.113d3640.js";import{d as M,r as C,f as $,g as y,o as m,c as p,b as t,n as i,e as r,j,p as z,h as V}from"./entry.a6edc62c.js";import{_ as B}from"./plugin-vueexport-helper.c27b6911.js";const o=e=>(z("data-v-48a32dfd"),e=e(),V(),e),S={class:"w-full h-full relative z-10",viewBox:"0 0 48 48",fill:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},H=["id"],I=o(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),L=["id"],X=o(()=>t("path",{d:"M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z",stroke:"currentColor",fill:"none","stroke-width":"0.5","stroke-linejoin":"round"},null,-1)),Y=o(()=>t("path",{d:"M16 31L22 37L34 25",stroke:"currentColor","stroke-width":"0.5","stroke-linecap":"round",fill:"none","stroke-linejoin":"round"},null,-1)),E=o(()=>t("path",{d:"M16 5V13",stroke:"currentColor","stroke-width":"0.5","stroke-linecap":"round"},null,-1)),P=o(()=>t("path",{d:"M32 5V13",stroke:"currentColor","stroke-width":"0.5","stroke-linecap":"round"},null,-1)),q=["mask"],R=o(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -left-1"},null,-1)),Z=o(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -right-1"},null,-1)),A=o(()=>t("div",{class:"w-full h-2 bg-[black] absolute z-50 bottom-0 -right-1"},null,-1)),F=o(()=>t("div",{class:"mask"},null,-1)),N=o(()=>t("img",{src:c,class:"w-full h-full object-cover",alt:""},null,-1)),U=[N],W=o(()=>t("img",{src:c,class:"w-full h-full object-cover",alt:""},null,-1)),D=[W],G=o(()=>t("img",{src:c,class:"w-full h-full object-cover",alt:""},null,-1)),J=[G],K=M({__name:"Plan",props:{id:{default:"plan"}},setup(e){const f=e,n=C({transform:"translate(0, 0)"});return $(()=>{const s=document.querySelector(`.${f.id}_box`),d=l=>{const a=s.getBoundingClientRect(),k=l.clientX-a.left,v=l.clientY-a.top,h=20,_=20,w=a.width-h,g=a.height-_,b=Math.max(-20,Math.min(k-h/2,w)),x=Math.max(-10,Math.min(v-_/2,g));n.value={transform:`translate(${b}px, ${x}px)`}},u=l=>{requestAnimationFrame(()=>d(l))};document.addEventListener("mousemove",u),y(()=>{document.removeEventListener("mousemove",u)})}),(s,d)=>(m(),p("div",{class:j(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${s.$props.id}_box`])},[(m(),p("svg",S,[t("mask",{id:`${s.$props.id}`,fill:"black"},[I,t("path",{id:`${s.$props.id}_path`,d:"M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z",fill:"none",stroke:"currentColor","stroke-width":"0.5","stroke-linejoin":"round"},null,8,L),X,Y,E,P],8,H),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${s.$props.id})`,fill:"black"},null,8,q)])),R,Z,A,F,t("div",{class:"mask-animation",style:i(r(n))},U,4),t("div",{class:"mask-animation mask-animation-frist",style:i(r(n))},D,4),t("div",{class:"mask-animation mask-animation-second",style:i(r(n))},J,4)],2))}});const tt=B(K,[["__scopeId","data-v-48a32dfd"]]);export{tt as default};
