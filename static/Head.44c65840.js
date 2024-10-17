import{_ as S,a as Y,b as O,E as T}from"./white-discord.2df9fca8.js";import{E as P}from"./el-button.948dcb78.js";import{_ as X}from"./Btn.vuevuetypescriptsetuptruelang.84e8346c.js";import{d as H,i as N,u as $,r as y,q,bN as W,a,c,b as e,g as F,w as m,e as n,C as I,t as b,f as z,F as G,v as J,E as d}from"./entry.9908bd26.js";import{t as k}from"./throttle.a1e10328.js";import{j as K,c as Q}from"./taskConnect.d63bb318.js";import{g as Z,b as ss}from"./missions.4043812d.js";import{c as es,a as ts}from"./utils.cb815293.js";import{_ as os}from"./bi.7ba980b4.js";import"./debounce.c6d2152f.js";import"./el-input.19148fd0.js";import"./use-form-item.9264d93f.js";import"./validator.5c31eb91.js";import"./focus-trap.e750edf0.js";import"./index.849d40fb.js";import"./commonjsHelpers.d76b3730.js";import"./-initCloneObject.af247ed3.js";import"./client-only.f8f24ce6.js";import"./dict.d5728e61.js";import"./referral.e200451f.js";import"./el-loading.a6c69264.js";import"./dashboard.86964a38.js";const as={class:"w-full px-10 py-6 bg-[#0F0F0F] rounded-lg shadow-3d flex items-center justify-between text-white"},ns={class:"flex items-center space-x-5"},rs={class:"w-32 h-32 bg-black rounded-full overflow-hidden"},cs=e("div",{class:"image-slot"},[e("img",{src:S,class:"w-full h-full object-cover"})],-1),is={class:"space-y-3"},ls={class:"flex items-center text-white hover:text-[#FFE099] font-normal text-base cursor-pointer"},ds={key:0,class:"space-x-1"},_s=e("span",{class:"iconfont icon-copy text-sm text-[#6E6E6E]"},null,-1),ms=e("span",{class:"iconfont icon-lianjie text-base text-[#FFE099]"},null,-1),ps=e("span",{class:"text-sm duration-300 text-[#FFE099] ml-1"},"Connect Wallet",-1),fs={class:"flex items-center space-x-2"},us={key:0,src:Y,alt:"",class:"w-[18px] h-[18px] mr-1"},hs={key:1,src:O,alt:"",class:"w-6 h-6 mr-1"},gs={class:"flex flex-col items-end space-y-2"},vs={class:"flex items-center space-x-1"},xs=e("div",{class:"w-10 h-10"},[e("img",{src:os,alt:"",class:"w-full h-full object-contain"})],-1),Es={class:"px-2 py-1 bg-[#866c50] rounded-lg flex items-center space-x-1 cursor-pointer"},ws=e("span",{class:"iconfont icon-copy"},null,-1),ys=e("span",{class:"text-sm font-medium text-center"},"Copy Referral Link",-1),Fs=[ws,ys],Is=e("div",{class:"flex items-center text-[#6E6E6E] text-sm cursor-not-allowed"},[e("span",{class:""},"View records"),e("span",{class:"iconfont icon-gengduo"})],-1),zs=H({__name:"Head",props:{data:{default:[]},missionData:{default:[]}},emits:["toUpdate"],setup(C,{emit:D}){const p=C,U=N("reloadUserInfo"),r=$(),_=y(!1),i=y(!1),V=q(()=>p.missionData.filter(s=>["VERIFY_X","VERIFY_DISCORD"].includes(s.code))),f=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;return s.code==="VERIFY_X"&&t||s.code==="VERIFY_DISCORD"&&o||s.status==="COMPLETED"},u=s=>{const{social_x_name:t,social_dc_name:o}=r.getUserInfo;return s.code==="VERIFY_X"&&t?t:s.code==="VERIFY_DISCORD"&&o?o:s.status==="COMPLETED"?"Claimed":s.status==="AVAILABLE"?"Claim":"Add"},A=s=>{f(s)||(s.status==="AVAILABLE"?k(()=>R(s)):k(()=>K(s.code)))},R=async s=>{try{_.value=!0;const t=await Q({mission_id:`${s.id}`});_.value=!1,t.code===200?D("toUpdate"):d.error(t.msg)}catch(t){console.error(t),d.error("An error occurred while completing the mission.")}finally{_.value=!1}},B=async()=>{var s;try{if(i.value=!0,(s=r.getUserInfo)!=null&&s.eth_address)return;const t=await Z();i.value=!1;const o=await ss({address:t});i.value=!1,o.code===200?(d.success(o.data),U()):d.error(o.msg)}catch(t){i.value=!1,console.log(t)}};return(s,t)=>{var g,v,x,E,w;const o=T,M=P,L=X,h=W("copy");return a(),c("div",as,[e("div",ns,[e("div",rs,[F(o,{src:("showFaces"in s?s.showFaces:n(es))(),fit:"cover"},{error:m(()=>[cs]),_:1},8,["src"])]),e("div",is,[e("div",ls,[(g=n(r).getUserInfo)!=null&&g.eth_address?I((a(),c("div",ds,[e("span",null,b(("stringStar"in s?s.stringStar:n(ts))({value:(v=n(r).getUserInfo)==null?void 0:v.eth_address,characters:"********",start:4})),1),_s])),[[h,(x=n(r).getUserInfo)==null?void 0:x.eth_address]]):(a(),z(M,{key:1,class:"h-6",loading:n(i),onClick:B,style:{"background-color":"transparent","border-color":"#ffe09929",height:"28px"}},{default:m(()=>[ms,ps]),_:1},8,["loading"]))]),e("div",fs,[(a(!0),c(G,null,J(n(V),(l,j)=>(a(),c("div",{key:j},[F(L,{title:u(l),disabled:!!f(l),"hover-title":u(l),onClickHandle:bs=>A(l)},{default:m(()=>[l.code==="VERIFY_X"?(a(),c("img",us)):(a(),c("img",hs))]),_:2},1032,["title","disabled","hover-title","onClickHandle"])]))),128))])])]),e("div",gs,[e("div",vs,[xs,e("span",null,b(((E=p.data)==null?void 0:E.total_total)||0),1)]),I((a(),c("div",Es,Fs)),[[h,(w=n(r).getUserInfo)==null?void 0:w.referral_link]]),Is])])}}});export{zs as default};
