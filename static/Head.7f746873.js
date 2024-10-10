import{_ as Y,a as M,b as O,E as j}from"./white-discord.c0a5a385.js";import{_ as B}from"./Btn.vuevuetypescriptsetuptruelang.4bb12563.js";import{d as T,r as P,k as X,bF as H,a,c,b as e,f as v,w as I,u as n,z as w,t as y,F as $,m as N,E as d}from"./entry.e7c6819c.js";import{u as z}from"./user.d229880b.js";import{c as W,a as q,i}from"./utils.906d875c.js";import{t as F}from"./throttle.122d89c0.js";import{j as G,c as J}from"./taskConnect.bb508bb5.js";import{g as K,b as Q}from"./missions.ac3c9108.js";import{b as Z}from"./index.b520408e.js";import{_ as ss}from"./bi.44f25bb5.js";import"./debounce.f9e3f30c.js";import"./el-input.d195d90e.js";import"./use-form-item.657578f7.js";import"./validator.bc035822.js";import"./dict.14f5c7dd.js";import"./focus-trap.e76bd3af.js";import"./client-only.a388c560.js";import"./referral.96759a07.js";import"./el-loading.b2224f9a.js";import"./dashboard.b5da954e.js";import"./-initCloneObject.634fd5fa.js";const es={class:"w-full px-10 py-6 bg-[#0F0F0F] rounded-lg shadow-3d flex items-center justify-between text-white"},ts={class:"flex items-center space-x-5"},os={class:"w-32 h-32 bg-black rounded-full overflow-hidden"},rs=e("div",{class:"image-slot"},[e("img",{src:Y,class:"w-full h-full object-cover"})],-1),as={class:"space-y-3"},cs={key:0,class:"space-x-1"},ns=e("span",{class:"iconfont icon-copy text-sm text-[#6E6E6E]"},null,-1),is={key:1,class:"border border-[#ffe09929] space-x-1 rounded px-2 text-[#FFE099] hover:border-[#FFE099]"},ls=e("span",{class:"iconfont icon-lianjie text-lg"},null,-1),ds=e("span",{class:"text-base duration-300"},"Connect Wallet",-1),_s=[ls,ds],fs={class:"flex items-center space-x-2"},ms={key:0,src:M,alt:"",class:"w-[18px] h-[18px] mr-1"},ps={key:1,src:O,alt:"",class:"w-6 h-6 mr-1"},us={class:"flex flex-col items-end space-y-2"},hs={class:"flex items-center space-x-1"},gs=e("div",{class:"w-10 h-10"},[e("img",{src:ss,alt:"",class:"w-full h-full object-contain"})],-1),xs={class:"px-2 py-1 bg-[#866c50] rounded-lg flex items-center space-x-1 cursor-pointer"},Es=e("span",{class:"iconfont icon-copy"},null,-1),vs=e("span",{class:"text-sm font-medium text-center"},"Copy Referral Link",-1),Is=[Es,vs],ws=e("div",{class:"flex items-center text-[#6E6E6E] text-sm cursor-not-allowed"},[e("span",{class:""},"View records"),e("span",{class:"iconfont icon-gengduo"})],-1),Ns=T({__name:"Head",props:{data:{default:[]},missionData:{default:[]}},emits:["toUpdate"],setup(b,{emit:D}){const f=b,r=z(),_=P(!1),C=X(()=>s=>s.filter(t=>t.code==="VERIFY_X"||t.code==="VERIFY_DISCORD")),k=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;return s.code==="VERIFY_X"&&!i(t)||s.code==="VERIFY_DISCORD"&&!i(o)?!0:s.status==="COMPLETED"},m=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;return!i(t)&&s.code==="VERIFY_X"?t:!i(o)&&s.code==="VERIFY_DISCORD"?o:s.status==="COMPLETED"?"Claimed":s.status==="AVAILABLE"?"Claim":"Add"},R=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;!i(t)&&s.code==="VERIFY_X"||!i(o)&&s.code==="VERIFY_DISCORD"||s.status!=="COMPLETED"&&(s.status==="AVAILABLE"?F(()=>V(s)):F(()=>G(s.code)))},V=async s=>{try{_.value=!0;const t=await J({mission_id:`${s.id}`});_.value=!1,t.code===200?D("toUpdate"):d.error(t.msg)}catch(t){console.error(t),d.error("An error occurred while completing the mission.")}finally{_.value=!1}},U=async()=>{var s;try{if((s=r.getUserInfo)!=null&&s.eth_address)return;const t=await K(),o=await Q({address:t});o.code===200?(d.success(o.data),A()):d.error(o.msg)}catch(t){console.log(t)}},A=async()=>{try{const s=await Z();s.code===200&&r.setUserInfo(s.data)}catch(s){console.log(s)}};return(s,t)=>{var u,h,g,x,E;const o=j,L=B,p=H("copy");return a(),c("div",es,[e("div",ts,[e("div",os,[v(o,{src:("showFaces"in s?s.showFaces:n(W))(),fit:"cover"},{error:I(()=>[rs]),_:1},8,["src"])]),e("div",as,[e("div",{class:"flex items-center text-white hover:text-[#FFE099] font-normal text-base cursor-pointer",onClick:U},[(u=n(r).getUserInfo)!=null&&u.eth_address?w((a(),c("div",cs,[e("span",null,y(("stringStar"in s?s.stringStar:n(q))({value:(h=n(r).getUserInfo)==null?void 0:h.eth_address,characters:"********",start:4})),1),ns])),[[p,(g=n(r).getUserInfo)==null?void 0:g.eth_address]]):(a(),c("div",is,_s))]),e("div",fs,[(a(!0),c($,null,N(n(C)(f.missionData),(l,S)=>(a(),c("div",{key:S},[v(L,{title:m(l),disabled:k(l),"hover-title":m(l),onClickHandle:ys=>R(l)},{default:I(()=>[l.code==="VERIFY_X"?(a(),c("img",ms)):(a(),c("img",ps))]),_:2},1032,["title","disabled","hover-title","onClickHandle"])]))),128))])])]),e("div",us,[e("div",hs,[gs,e("span",null,y(((x=f.data)==null?void 0:x.total_total)||0),1)]),w((a(),c("div",xs,Is)),[[p,(E=n(r).getUserInfo)==null?void 0:E.referral_link]]),ws])])}}});export{Ns as default};
