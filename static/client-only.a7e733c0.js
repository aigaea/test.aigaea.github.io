import{I as o,z as u,r as d,W as k}from"./entry.564334f4.js";const m=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(b,{slots:a,attrs:t}){const l=u(!1);return d(()=>{l.value=!0}),e=>{var r;if(l.value)return(r=a.default)==null?void 0:r.call(a);const n=a.fallback||a.placeholder;if(n)return n();const c=e.fallback||e.placeholder||"",f=e.fallbackTag||e.placeholderTag||"span";return k(f,t,c)}}});export{m as _};
