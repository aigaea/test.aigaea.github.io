import{c as p}from"./utils.b997d2b3.js";import{d,f as u,q as f,s as g,v as h,o as _,c as m,i as b,j as w,e as r,b as s}from"./entry.c70ce651.js";import{_ as v}from"./plugin-vueexport-helper.c27b6911.js";import{_ as x}from"./Btn.vuevuetypescriptsetuptruelang.a460ba2d.js";import{g as y}from"./user.e3a9d0e9.js";import{t as T}from"./throttle.9bd2a44e.js";const k=["id"],B=d({__name:"Turnstile",props:{id:{default:"example-container"}},emits:["toUpdate"],setup(i,{emit:o}){const n=i;u();const t=e=>new Promise((l,c)=>{const a=document.createElement("script");a.src=e,a.defer=!0,a.onload=()=>l(!0),a.onerror=()=>c(new Error("Script load error")),document.body.appendChild(a)});return f(async()=>{await g();try{await t("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"),window.onloadTurnstileCallback=function(){window.turnstile&&window.turnstile.render(`#${n.id}`,{sitekey:p(),language:"en",callback:function(e){o("toUpdate",e)}})}}catch(e){console.log(e)}}),h(()=>{const e=document.getElementById(n.id);e&&(e.innerHTML=""),delete window.onloadTurnstileCallback}),(e,l)=>(_(),m("div",{id:`${n.id}`,class:"w-full turnstile h-[68px] flex items-center justify-center"},null,8,k))}});const O=v(B,[["__scopeId","data-v-2ab66cdc"]]),C=""+globalThis.__publicAssetsURL("images/public/google.png"),N={className:"w-full space-y-2"},D=s("div",{className:"w-full flex items-center space-x-7 "},[s("div",{className:"flex-1 h-[.0625rem] bg-[#D2D2D2]"}),s("div",{className:" text-base font-medium text-white"},"Or sign in with"),s("div",{className:"flex-1 h-[.0625rem] bg-[#D2D2D2]"})],-1),E=s("img",{src:C,class:"w-5 h-5 mr-2"},null,-1),$=s("span",{className:"text-lg ml-2"},"Google",-1),R=d({__name:"OtherLoginOrRegist",setup(i){const o=u(!1),n=async()=>{try{o.value=!0;const t=await y();o.value=!1,t.code===200&&window.open(t.data.url,"_self")}catch(t){console.log(t,"error"),o.value=!1}};return(t,e)=>{const l=x;return _(),m("div",N,[D,b(l,{style:{height:"45px"},round:!1,bg:"transparent",hoverBg:"transparent",border:"1px solid #ffffffaf",hoverBgBorder:"1px solid #FFE099","btn-loading":r(o),disabled:r(o),title:"",hoverColor:"#FFE099","hover-title":"",onClickHandle:e[0]||(e[0]=c=>("throttle"in t?t.throttle:r(T))(()=>{n()}))},{default:w(()=>[E,$]),_:1},8,["btn-loading","disabled"])])}}}),I=""+globalThis.__publicAssetsURL("images/login/login_successful.png");export{O as _,R as a,I as b};
