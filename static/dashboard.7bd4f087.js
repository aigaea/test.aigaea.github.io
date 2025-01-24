import{_ as C}from"./cursor-mask.f05b4e96.js";import{d as D,r as g,f as R,g as O,o as h,c as f,b as t,n as k,p as j,h as F,w as q,e as m,t as y,i as A,j as ot,k as at,l as x,m as L,E as tt,q as wt,s as U,v as ct,x as et,y as mt,z as $t,A as rt,F as st,B as dt}from"./entry.772e1196.js";import{_ as G}from"./plugin-vueexport-helper.c27b6911.js";import{_ as K}from"./Refresh.e37cb3f4.js";import{E as yt}from"./el-button.64e4d9d4.js";import{u as V}from"./user.fe754047.js";import{n as ut}from"./ping.cece50f5.js";import{f as Et}from"./time.9211d4ff.js";import{t as Bt,_ as kt}from"./Footer.vuevuetypescriptsetuptruelang.b41e2f9c.js";import{u as ht}from"./godhood.cb4d8fbb.js";import{f as _t}from"./utils.154eefbe.js";import{g as Ct}from"./godhead.c87ba295.js";import{_ as Dt}from"./client-only.dcf6cca3.js";import{n as St,a as Rt,e as It,r as Mt,b as Tt}from"./dashboard.d0313b8c.js";import{_ as zt,E as Nt,a as Lt}from"./el-scrollbar.71f3da3a.js";import"./el-checkbox.e2f9f822.js";import"./el-popper.6887e612.js";import{v as At}from"./el-loading.fb7b147f.js";import"./referral.19ff9e7b.js";import"./request.94eb4bd4.js";import"./user.75fa2f8f.js";import"./index.2d9eff2e.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./logo.06bbffb9.js";import"./event.2c073216.js";import"./-initCloneObject.b3930885.js";import"./debounce.fea28a3a.js";import"./isNil.c75b1b34.js";import"./focus-trap.8c3f99a2.js";const P=i=>(j("data-v-3b54fc05"),i=i(),F(),i),Pt={class:"m-auto gaea_box relative cursor-pointer overflow-hidden z-[1]"},Ot=P(()=>t("svg",{class:"w-full h-full relative z-10",viewBox:"0 0 3712 1024",version:"1.1",fill:"black",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%"},[t("mask",{id:"gaea",fill:"black"},[t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"}),t("path",{id:"path",d:"M912.64 422.4V896c-117.76 61.44-247.04 87.04-380.16 87.04-282.88 0-488.96-185.6-488.96-476.16C43.52 216.32 249.6 30.72 532.48 30.72c143.36 0 270.08 32 360.96 116.48l-140.8 153.6c-53.76-56.32-119.04-85.76-220.16-85.76-170.24 0-281.6 122.88-281.6 291.84 0 168.96 111.36 291.84 281.6 291.84 87.04 0 151.04-24.32 188.16-44.8v-147.2H558.08V422.4h354.56z m81.92 537.6L1386.24 53.76h165.12L1945.6 960h-225.28l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44zM2044.16 960V53.76h615.68v184.32h-416v168.96h392.96v184.32h-392.96v184.32h439.04V960h-638.72z m705.28 0L3141.12 53.76h165.12L3700.48 960H3475.2l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44z","p-id":"4298",fill:"none",stroke:"black","stroke-width":"5"})]),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#gaea)",fill:"black"})],-1)),jt=P(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -left-1"},null,-1)),Ft=P(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -right-1"},null,-1)),Gt=P(()=>t("div",{class:"w-full h-2 bg-[black] absolute z-50 bottom-0 -right-1"},null,-1)),Wt=P(()=>t("div",{class:"mask"},null,-1)),Yt=P(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Xt=[Yt],Qt=P(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Ht=[Qt],Jt=P(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),qt=[Jt],Ut=D({__name:"Gaea",setup(i){const l=g({transform:"translate(0, 0)"});return R(()=>{const e=document.querySelector("#path"),s=e.getTotalLength();e.style.strokeDasharray=s.toString(),e.style.strokeDashoffset=s.toString(),e.classList.add("path-animation");const n=document.querySelector(".gaea_box"),a=c=>{const r=n.getBoundingClientRect(),p=c.clientX-r.left,u=c.clientY-r.top,_=200,v=200,w=r.width-_,b=r.height-v+20,$=Math.max(0,Math.min(p-_/2,w)),S=Math.max(-20,Math.min(u-v/2,b));l.value={transform:`translate(${$}px, ${S}px)`}},o=c=>{requestAnimationFrame(()=>a(c))};document.addEventListener("mousemove",o),O(()=>{document.removeEventListener("mousemove",o)})}),(e,s)=>(h(),f("div",Pt,[Ot,jt,Ft,Gt,Wt,t("div",{class:"mask-animation",style:k(l.value)},Xt,4),t("div",{class:"mask-animation mask-animation-frist",style:k(l.value)},Ht,4),t("div",{class:"mask-animation mask-animation-second",style:k(l.value)},qt,4)]))}});const ft=G(Ut,[["__scopeId","data-v-3b54fc05"]]),Kt={key:0,class:"relative w-[13vh] aspect-[1/1]"},Vt=ot('<div class="absolute inset-0 flex items-center justify-center"><div class="w-[13vh] aspect-[1/1] rounded-full border-1 border-[#EDEDED] opacity-50 animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[10vh] aspect-[1/1] rounded-full border-1 border-[#EDEDED] opacity-65 animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[12vh] aspect-[1/1] rounded-full border-1 border-[#EDEDED] border-opacity-15 [animation-duration:2s]"></div></div>',3),Zt={key:1,class:"w-[13vh] aspect-[1/1] cursor-pointer relative"},te=ot('<div class="w-full h-full absolute top-0 left-0 z-5 scale-[1.07]"><svg width="100%" height="100%" viewBox="0 0 100 100"><circle class="inner-circle" cx="50" cy="50" r="45" fill="none" stroke-width="2" stroke="#2E2E2E" stroke-dasharray="2,6" transform="rotate(50 50 50)"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#2E2E2E"><tspan class="text uppercase Regular" style="font-size:28px;"> 0 </tspan></text></svg></div>',1),ee=[te],se=D({__name:"ProgressBar",setup(i){const l=V(),e=g(0),s=g(null),n=g(!0),a=g(!1),o=()=>{const{score:c}=l.getPingNetworkInfo;a.value?e.value>c?(n.value=!1,e.value-=.05):(clearInterval(s.value),n.value=!1):e.value<100?e.value+=1:(a.value=!0,s.value=setInterval(o,50))};return q(()=>l.getDisconnect,c=>{c||(e.value=0,a.value=!1,n.value=!0,s.value=setInterval(o,40))}),R(()=>{l.getDisconnect||(e.value=0,a.value=!1,n.value=!0,s.value=setInterval(o,40))}),(c,r)=>m(l).getDisconnect?(h(),f("div",Zt,ee)):(h(),f("div",Kt,[Vt,t("span",{class:A(["absolute top-1/2 left-1/2 z-[99] -translate-y-1/2 -translate-x-1/2 Regular font-bold",m(n)||m(e)===100?"text-[14px] text-[#2E2E2E]":"text-[28px] text-[#edededa2]"])},y(m(n)||m(e)===100?"Connecting":m(e).toFixed(1)),3)]))}});const z=i=>(j("data-v-396fc6e8"),i=i(),F(),i),oe={class:"w-full h-full flex items-center justify-center pl-8 pr-12 pb-2 pt-6"},ae={key:0,class:"flex-1 h-full flex flex-col items-start"},ne=z(()=>t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"NETWORK IS CONNECTED",-1)),le={class:"grid grid-cols-2 mt-6 gap-5"},ie={class:"flex flex-col justify-start space-y-1"},ce=z(()=>t("span",{class:"text-[#EDEDED] text-[12px]"},"Verified IP",-1)),re={class:"flex items-center space-x-2"},de={key:0,class:"w-4 h-3"},ue=["src"],_e={class:"flex-1 text-[10px] Regular u-line-1 text-[#B0B0B0]"},pe={class:"flex items-center justify-start space-x-3"},me=z(()=>t("span",{class:"iconfont icon-shijian text-[#B0B0B0] text-[18px]"},null,-1)),he={class:"flex flex-col"},fe=z(()=>t("span",{class:"text-[#EBEBEB] text-[12px]"},"Today's Time",-1)),ve={class:"text-[#B0B0B0] text-[10px]"},xe={class:"flex items-center"},ge=z(()=>t("span",{class:"w-2 h-2 bg-green-500 rounded-full mr-2 glow-effect"},null,-1)),be=z(()=>t("span",{class:"text-[#EBEBEB] Regular font-medium text-[12px] py-3"}," Connected ",-1)),we={class:"flex items-center justify-start space-x-3"},$e=z(()=>t("span",{class:"iconfont icon-zuzhijiegou1 text-[#B0B0B0] text-[18px]"},null,-1)),ye={class:"flex flex-col justify-between"},Ee=z(()=>t("span",{class:"text-[#EBEBEB] text-[12px]"},"Connected Host",-1)),Be={class:"text-[#B0B0B0] text-[10px]"},ke={key:1,class:"flex-1 h-full flex flex-col items-start"},Ce=z(()=>t("div",{class:"flex flex-col items-start justify-center"},[t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Network Connection"),t("span",{class:"text-[10px] text-[#EBEBEB] Regular font-light"}," Connect to the network to start earning ")],-1)),De=z(()=>t("span",{class:"text-black Regular font-medium text-[14px]"}," CONNECTION",-1)),Se=D({__name:"NetworkPing",props:{data:{default:[]}},setup(i){const l=V(),e=g(!1),s=o=>{if(o)return o.startsWith("http")?o:`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${o}.svg`},n=async()=>{try{if(e.value)return;e.value=!0,await ut()&&(l.setPingIntervalTime(ut),l.setDisconnect(!1))}catch{e.value=!1,tt.error("Connection error, please try again later")}finally{e.value=!1}},a=()=>{l.setDisconnect(!0),tt.success("Disconnected successfully"),l.clearPingIntervalTime(),l.setPingInfo(null)};return(o,c)=>{var u,_,v,w,b;const r=yt,p=se;return h(),f("div",oe,[m(l).getDisconnect?(h(),f("div",ke,[Ce,x(r,{class:"mt-17 hover:scale-105",round:"",onClick:c[1]||(c[1]=$=>n()),loading:m(e)},{default:L(()=>[De]),_:1},8,["loading"])])):(h(),f("div",ae,[ne,t("div",le,[t("div",ie,[ce,t("div",re,[(u=m(l).getPingInfo)!=null&&u.country_icon?(h(),f("div",de,[t("img",{src:s((_=m(l).getPingInfo)==null?void 0:_.country_icon),class:"w-full h-full object-cover"},null,8,ue)])):at("",!0),t("span",_e,y((v=m(l).getPingInfo)==null?void 0:v.ip_address),1)])]),t("div",pe,[me,t("div",he,[fe,t("span",ve,y(("formatTime"in o?o.formatTime:m(Et))(((w=m(l).getPingInfo)==null?void 0:w.today_uptime)||0)),1)])]),t("div",xe,[x(r,{class:"",color:"#333",round:"",size:"small",onClick:c[0]||(c[0]=$=>("throttle"in o?o.throttle:m(Bt))(()=>{a()}))},{default:L(()=>[ge,be]),_:1})]),t("div",we,[$e,t("div",ye,[Ee,t("span",Be,y((b=m(l).getPingInfo)==null?void 0:b.host),1)])])])])),x(p)])}}});const Re=G(Se,[["__scopeId","data-v-396fc6e8"]]),J=i=>(j("data-v-dfceaaf9"),i=i(),F(),i),Ie={class:"w-full h-full relative z-10",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},Me=["id"],Te=J(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),ze=["id"],Ne=["mask"],Le=J(()=>t("div",{class:"mask"},null,-1)),Ae=J(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Pe=[Ae],Oe=J(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),je=[Oe],Fe=J(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Ge=[Fe],We=D({__name:"BrowserChrome",props:{id:{default:"browser_chrome"}},setup(i){const l=i,e=g({transform:"translate(0, 0)"});return R(()=>{const s=document.querySelector(`.${l.id}_G_box`),n=o=>{const c=s.getBoundingClientRect(),r=o.clientX-c.left,p=o.clientY-c.top,u=20,_=20,v=c.width-u,w=c.height-_+20,b=Math.max(0,Math.min(r-u/2,v)),$=Math.max(-20,Math.min(p-_/2,w));e.value={transform:`translate(${b}px, ${$}px)`}},a=o=>{requestAnimationFrame(()=>n(o))};document.addEventListener("mousemove",a),O(()=>{document.removeEventListener("mousemove",a)})}),(s,n)=>(h(),f("div",{class:A(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${s.$props.id}_G_box`])},[(h(),f("svg",Ie,[t("mask",{id:`${s.$props.id}_G`,fill:"black"},[Te,t("path",{id:`${s.$props.id}_path`,stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",fill:"none",d:"M50 31.2502C60.3554 31.2502 68.75 39.6447 68.75 50.0001C68.75 60.3556 60.3554 68.7501 50 68.7501C39.6446 68.7501 31.25 60.3556 31.25 50.0001C31.25 39.6447 39.6446 31.2502 50 31.2502ZM50 31.2502L87.2196 31.2502M35.4167 89.0435L61.7581 64.5835M12.5 31.8162L35.1565 61.5668M50 91.6668C73.0119 91.6668 91.6667 73.012 91.6667 50.0001C91.6667 26.9883 73.0119 8.3335 50 8.3335C26.9882 8.3335 8.33337 26.9883 8.33337 50.0001C8.33337 73.012 26.9882 91.6668 50 91.6668Z"},null,8,ze)],8,Me),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${s.$props.id}_G)`,fill:"black"},null,8,Ne)])),Le,t("div",{class:"mask-animation",style:k(m(e))},Pe,4),t("div",{class:"mask-animation mask-animation-frist",style:k(m(e))},je,4),t("div",{class:"mask-animation mask-animation-second",style:k(m(e))},Ge,4)],2))}});const Ye=G(We,[["__scopeId","data-v-dfceaaf9"]]),H=i=>(j("data-v-5516230a"),i=i(),F(),i),Xe={class:"w-full h-full absolute z-[10] svg left-2",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"#fff"},Qe=["id"],He=H(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),Je=H(()=>t("path",{d:"M18.5598 3.7445Q18.2154 4.60114 18.1295 5.4245L17.7198 9.3496L18.7253 9.3496L19.1241 5.5283Q19.1955 4.84422 19.4876 4.11751Q19.8545 3.20494 20.4698 2.53058Q22.1111 0.731902 25.1218 1.0461L40.5603 2.65733L54.4626 4.10822Q55.4992 4.2164 56.4482 4.57113Q57.6213 5.00959 58.4559 5.76128Q60.6219 7.71212 60.2264 11.5011L57.3692 38.8787L54.4338 67.0051Q54.2638 68.6346 53.7573 70.0206Q53.2431 71.4274 52.4427 72.4142Q51.6205 73.4279 50.571 73.8998Q49.4596 74.3995 48.1465 74.2625L38.2382 73.2284C37.8493 73.3079 37.4366 73.3496 37 73.3496L29.7654 73.3496L31.989 73.5817L48.0427 75.2571Q49.6239 75.4221 50.9811 74.8118Q52.2474 74.2424 53.2193 73.0442Q54.125 71.9276 54.6965 70.3638Q55.2455 68.8616 55.4284 67.1089L58.3638 38.9825L61.221 11.6049Q61.4574 9.33944 60.8433 7.60588Q60.3022 6.07835 59.1251 5.01823Q58.1494 4.1394 56.7984 3.63442Q55.7298 3.23504 54.5664 3.11362L40.6642 1.66273L25.2256 0.0515033Q23.3651 -0.142665 21.904 0.396554Q20.6365 0.864358 19.7311 1.85653Q18.994 2.66433 18.5598 3.7445Z",fill:"none",stroke:"black","stroke-width":"0.5"},null,-1)),qe=["id"],Ue=["mask"],Ke=H(()=>t("div",{class:"mask"},null,-1)),Ve=H(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Ze=[Ve],ts=H(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),es=[ts],ss=H(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),os=[ss],as=D({__name:"Godhood",props:{id:{default:"today"}},setup(i){const l=i,e=g({transform:"translate(0, 0)"});return R(()=>{const s=document.querySelector(`.${l.id}_G_box`),n=o=>{const c=s.getBoundingClientRect(),r=o.clientX-c.left,p=o.clientY-c.top,u=15,_=15,v=c.width-u,w=c.height-_,b=Math.max(0,Math.min(r-u/2,v)),$=Math.max(0,Math.min(p-_/2,w));e.value={transform:`translate(${b}px, ${$}px)`}},a=o=>{requestAnimationFrame(()=>n(o))};document.addEventListener("mousemove",a),O(()=>{document.removeEventListener("mousemove",a)})}),(s,n)=>(h(),f("div",{class:A(["m-auto h-full relative cursor-pointer overflow-hidden z-[1]",`${s.$props.id}_G_box`])},[(h(),f("svg",Xe,[t("mask",{id:`${s.$props.id}_G`,fill:"black"},[He,Je,t("path",{d:"M0.5 14.3496C0.5 12.8496 1.5 9.34961 6.5 9.34961C11.5 9.34961 29.025 9.34961 36 9.34961C38.5 9.34961 43 10.3496 43 15.8496C43 21.8496 43 64.8496 43 65.8496C43 69.8496 41 73.3496 37 73.3496C36 73.3496 14.2375 73.3496 7 73.3496C5.05 73.3496 0.5 73.3496 0.5 65.8496C0.5 58.3496 0.5 15.3496 0.5 14.3496Z","stroke-width":"0.5",id:`${s.$props.id}_path`,fill:"none",stroke:"black"},null,8,qe)],8,Qe),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${s.$props.id}_G)`,fill:"black"},null,8,Ue)])),Ke,t("div",{class:"mask-animation",style:k(e.value)},Ze,4),t("div",{class:"mask-animation mask-animation-frist",style:k(e.value)},es,4),t("div",{class:"mask-animation mask-animation-second",style:k(e.value)},os,4)],2))}});const ns=G(as,[["__scopeId","data-v-5516230a"]]),ls={class:"w-full grid grid-cols-2 gap-4"},is={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5 z-[10]"},cs=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 text-[14px] text-[#EBEBEB] z-[99]"},"GAEA EXTENSION"),t("span",{class:"font-bold text-[16px] text-[#EBEBEB] z-[99]"},"1.2X REWARDS")],-1),rs={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5 z-[10]"},ds=t("span",{class:"u-line-1 text-[14px] z-[99]"},"GODHOOD ID",-1),us=t("span",{class:"font-bold text-[16px] z-[99]"},"1.5X REWARDS",-1),_s=[ds,us],ps=D({__name:"RewardCategory",setup(i){const l=ht(),e=()=>{window.open("https://chromewebstore.google.com/detail/gaea-extension/cpjicfogbgognnifjgmenmaldnmeeeib","_blank")};return(s,n)=>{const a=Ye,o=ns;return h(),f("div",ls,[t("div",{class:"h-full relative cursor-pointer border-box",onClick:e},[t("div",is,[x(a,{id:"chrome"})]),cs]),t("div",{class:A(["h-full relative border-box cursor-pointer text-[#EBEBEB]",m(l).getIsPayCard?"shadow-3d-no-hover text-[#EBEBEB]":"text-[#B0B0B0]"]),onClick:n[1]||(n[1]=c=>m(l).getIsPayCard?s.$router.push("/missions"):s.$router.push("/godhoodId"))},[t("div",rs,[x(o,{id:"godhood"})]),t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5",onClick:n[0]||(n[0]=c=>s.$router.push("/godhoodId"))},_s)],2)])}}}),W=i=>(j("data-v-cef77a45"),i=i(),F(),i),ms={class:"w-full h-full relative z-10 svg",viewBox:"0 0 980 954",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%",fill:"#fff"},hs=["id"],fs=W(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),vs=["id"],xs=W(()=>t("path",{class:"cls-2",fill:"none",stroke:"black","stroke-width":"3",d:"M507.239,717.264h58.7V595.526s-17.613-115.017,128.27-128.259c21.281,0,41.308-2.174,41.308-2.174s-123.724-16.112-182.383,26.881c7.395-5.419-45.157,26.562-45.157,104.127C507.976,626.8,507.239,725,507.239,717.264Z"},null,-1)),gs=W(()=>t("path",{"stroke-width":"3",class:"cls-2",fill:"none",stroke:"black",d:"M748.56,273.791s-149.449,1.794-263.062,0c-55.194,2.606-108.4,3.227-163.451,42.978C275.5,352.9,246.923,401.237,235.48,462.919S250.328,617.249,316,669.48c27.607,21.958,91.341,52.339,167.326,49.958,0.856-3.366,0-60.433,0-71.739-65.066,1.734-117.114-25.639-145.663-65.216-25.427-35.251-31.4-80.587-23.914-117.39C346.192,352.541,437.461,343.36,485.5,345.529c56.246-.567,183.336,2.817,241.321-45.651C745.952,281.5,748.56,273.791,748.56,273.791Z"},null,-1)),bs=["mask"],ws=W(()=>t("div",{class:"mask"},null,-1)),$s=W(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),ys=[$s],Es=W(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Bs=[Es],ks=W(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Cs=[ks],Ds=D({__name:"G",props:{id:{default:"today"}},setup(i){const l=i,e=g({transform:"translate(0, 0)"});return R(()=>{const s=document.querySelector(`.${l.id}_G_box`),n=o=>{const c=s.getBoundingClientRect(),r=o.clientX-c.left,p=o.clientY-c.top,u=20,_=20,v=c.width-u,w=c.height-_,b=Math.max(0,Math.min(r-u/2,v)),$=Math.max(0,Math.min(p-_/2,w));e.value={transform:`translate(${b}px, ${$}px)`}},a=o=>{requestAnimationFrame(()=>n(o))};document.addEventListener("mousemove",a),O(()=>{document.removeEventListener("mousemove",a)})}),(s,n)=>(h(),f("div",{class:A(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${s.$props.id}_G_box`])},[(h(),f("svg",ms,[t("mask",{id:`${s.$props.id}_G`,fill:"black"},[fs,t("circle",{fill:"none",stroke:"black","stroke-width":"3",class:"glow-path",id:`${s.$props.id}_path`,cx:"490.25",cy:"475.375",r:"373.406"},null,8,vs),xs,gs],8,hs),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${s.$props.id}_G)`,fill:"black"},null,8,bs)])),ws,t("div",{class:"mask-animation",style:k(e.value)},ys,4),t("div",{class:"mask-animation mask-animation-frist",style:k(e.value)},Bs,4),t("div",{class:"mask-animation mask-animation-second",style:k(e.value)},Cs,4)],2))}});const Ss=G(Ds,[["__scopeId","data-v-cef77a45"]]),Rs={class:"w-full h-full flex flex-col items-end justify-between pb-2 pt-5 px-4 space-y-2 border-box relative z-[99]"},Is={class:"flex flex-col items-end"},Ms={class:"text-[#EBEBEB] text-[14px] uppercase z-[99]"},Ts={class:"text-[24px] text-[#EBEBEB] font-bold z-[99]"},zs={class:"flex flex-col items-end"},Ns={class:"text-[#EBEBEB] text-[14px] uppercase z-[99]"},Ls={class:"text-[24px] text-[#EBEBEB] font-bold z-[99]"},As={class:"w-[160px] aspect-[1/1] absolute -left-9 -bottom-9"},Ps=D({__name:"EarnInfoCard",props:{num:{default:0},num1:{default:0},icon:{default:"today"},title:{default:"Today"},title1:{default:"Today"}},emits:["toUpdate"],setup(i,{emit:l}){const e=i;return(s,n)=>{const a=Ss;return h(),f("div",Rs,[t("div",Is,[t("div",Ms,y(e.title),1),t("span",Ts,y(e.num===0?0:("formatNumber"in s?s.formatNumber:m(_t))(Number(e.num).toFixed(1))),1)]),t("div",zs,[t("div",Ns,y(e.title1),1),t("span",Ls,y(e.num1===0?0:("formatNumber"in s?s.formatNumber:m(_t))(Number(e.num1).toFixed(1))),1)]),t("div",As,[x(a,{id:e.icon},null,8,["id"])])])}}}),Y=i=>(j("data-v-7706a288"),i=i(),F(),i),Os={class:"w-full h-full relative z-10 svg",wwidth:"60",height:"50",viewBox:"0 0 56 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},js=["id"],Fs=Y(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),Gs=Y(()=>t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25.0069 1C38.2655 1 49 11.7483 49 25.0069C49 38.2655 38.2655 49 25.0069 49C11.7483 49 1 38.2655 1 25.0069C1 11.7483 11.7483 1 25.0069 1Z",stroke:"black",fill:"none","stroke-width":"0.3"},null,-1)),Ws=Y(()=>t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.97138 27.2062C9.97138 26.2138 10.0172 23.2726 11.1181 20.3669C12.4891 16.7487 15.7559 12.0059 23.5372 11.5281C25.2966 11.4201 27.64 11.4183 31.1239 11.4388C35.682 11.3437 39.6231 11.4733 42.2016 11.415C40.9004 12.7062 38.7962 15.6238 30.3122 15.8756C28.3445 15.9057 26.8472 15.8834 25.655 15.9309C23.8621 16.0142 22.5745 16.2357 21.6371 16.4871C20.8192 16.7064 18.3619 17.467 16.8076 19.7036C16.2745 20.5044 15.7962 21.545 15.2237 22.6501C16.9546 22.6437 39.9813 22.6263 39.9813 22.6263C39.9813 22.6263 40.1875 28.4504 37.0436 32.7714C35.9225 34.3274 34.4662 35.5818 32.8206 36.5003C29.0392 38.6108 25.0699 38.3504 23.8662 38.3936C21.2916 38.5429 8.46269 38.5129 7.79883 38.5129C10.7576 35.1249 14.6131 34.3906 16.9542 34.1678C19.2953 33.945 21.4764 34.0083 25.4657 33.8137C30.3366 33.4806 32.3407 31.1341 32.8541 30.4744C33.1503 30.0801 33.4892 29.5646 33.8217 28.9237C34.1356 28.3864 34.3864 27.8834 34.7289 27.2062C34.2002 27.2062 10.6729 27.2062 9.97138 27.2062Z",stroke:"black",fill:"none","stroke-width":"0.3"},null,-1)),Ys=[Fs,Gs,Ws],Xs=["mask"],Qs=Y(()=>t("div",{class:"mask"},null,-1)),Hs=Y(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Js=[Hs],qs=Y(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Us=[qs],Ks=Y(()=>t("img",{src:C,class:"w-full h-full object-cover",alt:""},null,-1)),Vs=[Ks],Zs=D({__name:"S",props:{id:{default:"today"}},setup(i){const l=i,e=g({transform:"translate(0, 0)"});return R(()=>{const s=document.querySelector(`.${l.id}_G_box`),n=o=>{const c=s.getBoundingClientRect(),r=o.clientX-c.left,p=o.clientY-c.top,u=10,_=20,v=c.width-u,w=c.height-_,b=Math.max(0,Math.min(r-u/2,v)),$=Math.max(0,Math.min(p-_/2,w));e.value={transform:`translate(${b}px, ${$}px)`}},a=o=>{requestAnimationFrame(()=>n(o))};document.addEventListener("mousemove",a),O(()=>{document.removeEventListener("mousemove",a)})}),(s,n)=>(h(),f("div",{class:A(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${s.$props.id}_G_box`])},[(h(),f("svg",Os,[t("mask",{id:`${s.$props.id}_G`,fill:"black"},Ys,8,js),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${s.$props.id}_G)`,fill:"black"},null,8,Xs)])),Qs,t("div",{class:"mask-animation",style:k(e.value)},Js,4),t("div",{class:"mask-animation mask-animation-frist",style:k(e.value)},Us,4),t("div",{class:"mask-animation mask-animation-second",style:k(e.value)},Vs,4)],2))}});const to=G(Zs,[["__scopeId","data-v-7706a288"]]),eo={class:"w-full h-full flex flex-col items-end justify-between pt-6 px-4 space-y-2 border-box relative"},so={class:"flex flex-col justify-between items-end"},oo=t("div",{class:"text-[#EBEBEB] text-[14px] text-center uppercase z-[99]"},"SOUL",-1),ao={class:"text-[24px] text-[#EBEBEB] font-bold z-[99] cup"},no={class:"w-[160px] aspect-[1/1] absolute -left-9 -bottom-9"},lo=D({__name:"SoulPoint",emits:["toUpdate"],setup(i,{emit:l}){const e=ht(),s=async()=>{try{const n=await Ct();if(n)if(n.code===200&&n.data){const{mood:a,godhood:o,invite_user:c}=n.data;if(a){const r=a||e.getMyCardList;e.setMyCardList(r)}e.setPointAllToday({...o,invite_user:c})}else tt.error(n.msg)}catch(n){console.log(n)}};return R(()=>{s()}),(n,a)=>{var c;const o=to;return h(),f("div",eo,[t("div",so,[oo,t("span",ao,y(((c=m(e).getPointAllToday)==null?void 0:c.total_soul)||0),1),t("div",{class:"h-[27px] border border-[#B0B0B0] rounded-[15px] text-[#EBEBEB] px-8 mt-6 text-[12px] flex items-center relative z-10 cursor-pointer",onClick:a[0]||(a[0]=r=>n.$router.push("/emotionalCheckIn"))},"GET")]),t("div",no,[x(o,{id:"S"})])])}}});let Q=null;const pt=(i,l=500,e=!1)=>{if(Q!==null&&clearTimeout(Q),e){const s=!Q;Q=setTimeout(function(){Q=null},l),s&&typeof i=="function"&&i()}else Q=setTimeout(function(){typeof i=="function"&&i()},l)},io={class:"w-full h-full min-h-[250px] border-box relative"},co={class:"absolute top-2 right-4 cursor-pointer z-50"},ro=["id"],uo={class:"text-[#EBEBEB] flex items-center space-x-1"},_o=t("div",{class:"w-2 h-2 bg-[#EBEBEB] rounded-full"},null,-1),po=t("span",{class:"text-[14px] Regular"},"ONLINE ： ",-1),mo={class:"text-[14px] Regular font-semibold text-[#EBEBEB]"},ho={class:"text-[#4D4D4D] flex items-center space-x-1"},fo=t("div",{class:"w-2 h-2 bg-[#4D4D4D] rounded-full"},null,-1),vo=t("span",{class:"text-[14px] Regular"},"WORKERS ： ",-1),xo={class:"text-[14px] Regular font-semibold text-[#4D4D4D]"},go=D({__name:"Map",props:{id:{default:"echartMap"}},setup(i){const l=i,{$eChart:e}=et(),{$worldData:s}=et(),n=s;e.registerMap("world",n);const a=g(),o=g(!0),c=g(null),r=g(JSON.parse(localStorage.getItem("NETWORK_INFO_LIST")||"{}")),p=g(JSON.parse(localStorage.getItem("NETWORK_COUNTRY")||"[]")),u=()=>{const d=new Map;for(let E=0;E<p.value.length;E++){const M=p.value[E],N=1,B=.1,Z=`rgba(235, 235, 235, ${Math.max(B,N-E/p.value.length*(N-B))})`;d.has(M.country)||d.set(M.country,{name:M.country,itemStyle:{areaColor:Z,borderColor:"none"}})}return{regionsData:Array.from(d.values())}},_=wt(()=>u()),v=async()=>{a.value&&(a.value.dispose(),a.value=null);const d=document.getElementById(l.id);if(!d||d.clientWidth===0||d.clientHeight===0)return;a.value=e.init(d);const{regionsData:E}=_.value,M={animation:!1,progressive:500,progressiveThreshold:3e3,geo:{type:"map",map:"world",zoom:1.2,roam:!1,scaleLimit:{min:1.2,max:3},itemStyle:{areaColor:"#2E2E2E",borderColor:"none",borderType:"none"},emphasis:{itemStyle:{areaColor:"none"},label:{show:!1,color:"#fff"}},regions:E.map(N=>({...N}))},series:[]};a.value.setOption(M)};q(()=>p.value,()=>{o.value&&pt(v,300)},{deep:!0});const w=async()=>{try{const d=await St();d&&d.code===200&&(r.value=d.data,localStorage.setItem("NETWORK_INFO_LIST",JSON.stringify(d.data)))}catch(d){console.error("error:",d)}},b=async()=>{try{const d=await Rt();d&&d.code===200&&(p.value=d.data,localStorage.setItem("NETWORK_COUNTRY",JSON.stringify(d.data)))}catch(d){console.error("error:",d)}},$=()=>{a.value&&a.value.resize()},S=()=>{a.value&&pt($(),300)};R(async()=>{o.value=!0,await U(),I(),v(),window.addEventListener("resize",S,{passive:!0})});const I=async()=>{await b(),w()};return O(()=>{o.value=!1,a.value&&(a.value.dispose(),a.value=null),c.value&&clearTimeout(c.value),window.removeEventListener("resize",S)}),(d,E)=>{const M=K,N=Dt;return h(),f("div",io,[t("div",co,[x(M,{onToRefresh:E[0]||(E[0]=B=>I())})]),t("div",{id:d.id,class:"w-full h-full"},null,8,ro),E[1]||(ct(-1),E[1]=t("div",{class:"flex flex-col justify-end space-y-1 absolute bottom-4 left-8 z-50"},[t("div",uo,[_o,po,x(N,null,{default:L(()=>{var B;return[t("span",mo,y(((B=m(r))==null?void 0:B.devices)||0),1)]}),_:1})]),t("div",ho,[fo,vo,x(N,null,{default:L(()=>{var B;return[t("span",xo,y(((B=m(r))==null?void 0:B.users)||0),1)]}),_:1})])]),ct(1),E[1])])}}}),bo=["id"],wo=D({__name:"ProgressBar",props:{id:{default:""},data:{default:()=>({network_points:0,referral_points:0,earned_points:0,date:""})},maxPoints:{default:200}},setup(i){const l=i,{$eChart:e}=et(),s=g(["#EBEBEB","#8C8C8C","#2B2B2B"]),n=mt(),a=g(null),o=async()=>{n.value&&n.value.dispose();const r=document.getElementById(l.id);if(!r||r.clientWidth===0||r.clientHeight===0)return;n.value=e.init(r);const p=30,u=l.maxPoints===0?100:Math.ceil(l.maxPoints/100)*100||0,_=l.data.network_points||0,v=l.data.referral_points||0,w=l.data.earned_points||0,b=_+v+w||0,$=2e3,S=5e3,I=Math.min($*(_/b),S),d=Math.min($*(v/b),S),E=Math.min($*(w/b),S),M=I,N=I+d,B=[{name:"NETWORKS",target:_,color:s.value[0]},{name:"REFERRALS",target:v,color:s.value[1]},{name:"REWARD",target:w,color:s.value[2]}],nt={backgroundColor:"black",grid:{top:"1%",left:"1%",right:"1%",bottom:"1%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0)"}},appendToBody:!0,formatter:Z=>{var lt;const xt=Z;let X=0;const gt=(lt=l.data)==null?void 0:lt.date,bt=xt.map(T=>{var it;if(T.componentSubType==="bar")return X+=Number(T.value)||0,`
           <div class="flex items-center justify-between mt-2 ">
             <div class="flex items-center space-x-1" style="color: ${T.color};">
               <span class="w-3 h-3 rounded-full" style="background-color: ${T.color};"></span>
               <span >${T.seriesName}</span>
             </div>
             <span style="color: ${T.color};">${typeof T.value=="number"?T.value==.1?0:(it=T.value)==null?void 0:it.toFixed(2):T.value}</span>
           </div>`}).join("");return`
         <div class="bg-black rounded-lg text-white text-xs ">
           <div class="flex items-center  pb-2 space-x-32">
             <span>${gt}</span>
           </div>
           <div class="flex items-center justify-between border-b border-[#2E2E2E] pb-2 space-x-32">
             <span>TOTAL:</span>
             <span class="text-[#EBEBEB]">${typeof X=="number"?X==null?void 0:X.toFixed(2):X}</span>
           </div>${bt}
         </div>`},textStyle:{color:"#FFFFFF"},borderColor:"#2E2E2E",backgroundColor:"black"},xAxis:{show:!1,type:"value",min:0,max:u,interval:25,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:[{data:[""],splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",name:B[0].name,barWidth:p,itemStyle:{color:s.value[0],shadowBlur:4,shadowColor:"none"},data:[B[0].target],z:1,stack:"total",animationDuration:I,animationDelay:0},{type:"bar",name:B[1].name,barWidth:p,itemStyle:{color:B[1].color,shadowBlur:4,shadowColor:"none"},data:[B[1].target],z:1,stack:"total",animationDuration:d,animationDelay:M},{type:"bar",name:B[2].name,barWidth:p,itemStyle:{color:B[2].color,shadowBlur:4,shadowColor:"none"},data:[B[2].target],z:1,stack:"total",animationDuration:E,animationDelay:N},{type:"pictorialBar",itemStyle:{color:"#000"},symbolRepeat:"fixed",symbolMargin:4,symbol:"rect",symbolClip:!0,symbolSize:[2,p],symbolPosition:"start",data:[_+v+w],z:2}]};n.value.setOption(nt)};q(()=>l.data,o,{deep:!0});const c=()=>{n.value&&(a.value&&clearTimeout(a.value),a.value=setTimeout(()=>{n.value.resize()},300))};return R(async()=>{await U(),setTimeout(o,500),window.addEventListener("resize",c,{passive:!0})}),O(()=>{n.value&&(window.removeEventListener("resize",c),n.value.dispose()),a.value&&clearTimeout(a.value)}),(r,p)=>(h(),f("div",{id:r.id,class:"w-full h-full"},null,8,bo))}}),vt=i=>(j("data-v-01557d2e"),i=i(),F(),i),$o={class:"bg-black Regular"},yo=vt(()=>t("div",{class:"flex items-center justify-between mt-2 mb-4"},[t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Networks Statistics")],-1)),Eo={class:"border-box py-4 relative"},Bo={class:"absolute top-2 right-4 cursor-pointer z-50"},ko={class:"text-[#EDEDED] text-[13px] font-medium"},Co={class:"w-full flex items-center"},Do={class:"flex-1 h-11"},So={class:"text-[#EDEDED] text-[13px] font-medium inline-block"},Ro=vt(()=>t("span",{class:"flex-1 text-[13px] font-medium uppercase"}," CHECK IN ",-1)),Io=[Ro],Mo={class:"flex-1 text-[13px] font-medium uppercase"},To=ot('<div class="flex items-center text-[12px] space-x-8 mt-4" data-v-01557d2e><div class="flex items-center space-x-1" data-v-01557d2e><span class="w-3 h-3 rounded-full bg-[#EBEBEB]" data-v-01557d2e></span><span class="text-[#EBEBEB]" data-v-01557d2e>NETWORKS </span></div><div class="flex items-center space-x-1" data-v-01557d2e><span class="w-3 h-3 rounded-full bg-[#8C8C8C]" data-v-01557d2e></span><span class="text-[#8C8C8C]" data-v-01557d2e>REFERRALS </span></div><div class="flex items-center space-x-1" data-v-01557d2e><span class="w-3 h-3 rounded-full bg-[#2B2B2B]" data-v-01557d2e></span><span class="text-[#2B2B2B]" data-v-01557d2e>REWARD</span></div></div>',1),zo=D({__name:"PointsRecord",setup(i){const l=g(),e=new Date,s=new Date(e);s.setDate(e.getDate()-7);const n=g(!1),a=g([s.toISOString().split("T")[0],e.toISOString().split("T")[0]]),o=g(JSON.parse(localStorage.getItem("DAILY_STATISTIC")||"[]")),c=V(),r=async()=>{try{if(n.value=!0,a.value){const u=await It();u&&u.code===200&&(o.value=u.data,localStorage.setItem("DAILY_STATISTIC",JSON.stringify(u.data)))}}catch(u){console.log(u)}finally{n.value=!1,l.value=Math.max(...o.value.map(u=>{const _=u.network_points||0+u.referral_points||0+u.earned_points||0;return parseFloat(_==null?void 0:_.toFixed(2))}))}},p=u=>{const _=new Date,v=new Date(u);return _.getFullYear()===v.getFullYear()&&_.getMonth()===v.getMonth()&&_.getDate()===v.getDate()};return q(()=>c.getDisconnect,u=>{u||setTimeout(()=>{r()},5e3)}),R(async()=>{await U(),r()}),(u,_)=>{const v=K,w=zt,b=Nt,$=wo,S=Lt,I=At;return h(),f("div",$o,[yo,t("div",Eo,[t("div",Bo,[x(v,{onToRefresh:_[0]||(_[0]=d=>r())})]),$t((h(),rt(S,{data:m(o),style:{width:"100%"},"max-height":"550px"},{empty:L(()=>[x(w)]),default:L(()=>[x(b,{prop:"date",label:"DATE",align:"center","min-width":"120px"},{default:L(d=>[t("span",ko,y(d.row.date),1)]),_:1}),x(b,{label:"EARNED POINTS","min-width":"400px",align:"center"},{default:L(d=>[t("div",Co,[t("div",Do,[m(n)?at("",!0):(h(),rt($,{key:0,id:`progressBar_${d.$index+1}`,data:d.row,maxPoints:m(l)},null,8,["id","data","maxPoints"]))]),t("span",So,y((d.row.network_points+d.row.referral_points+d.row.earned_points).toFixed(2)),1)])]),_:1}),x(b,{label:"CHECK IN",align:"center","min-width":"120px"},{default:L(d=>[p(d.row.date)&&d.row.checkin_points===0?(h(),f("div",{key:0,class:"w-[140px] text-[#EDEDED] border mx-auto border-[#EDEDED] rounded-full py-1 px-2 cursor-pointer flex items-center",onClick:_[1]||(_[1]=E=>u.$router.push("/missions"))},Io)):(h(),f("div",{key:1,class:A(["w-[140px] text-black mx-auto rounded-full py-1 px-2 flex items-center cursor-not-allowed",d.row.checkin_points===0?"bg-[#2E2E2E]":"bg-[#B0B0B0]"])},[t("span",Mo,y(d.row.checkin_points===0?"expired":"checked in"),1)],2))]),_:1})]),_:1},8,["data"])),[[I,m(n)]])]),To])}}});const No=G(zo,[["__scopeId","data-v-01557d2e"]]),Lo=""+globalThis.__publicAssetsURL("images/dashboard/line.png"),Ao={class:"w-full space-y-4 bg-black pb-[180px]"},Po=t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB]"},"GAEA ERA",-1),Oo={class:"border-box z-50 relative bg-black"},jo={class:"absolute top-2 right-4 cursor-pointer z-50"},Fo={class:"grid grid-cols-5"},Go={key:0,class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[1.5px] bg-[#EBEBEB] z-50"},Wo=t("div",{class:"w-full h-8 absolute -top-4 z-10"},[t("img",{src:Lo,class:"w-full h-full",alt:""})],-1),Yo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},Xo=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),Qo={class:"Regular text-[12px]"},Ho={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},Jo=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),qo={class:"Regular text-[12px]"},Uo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},Ko=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),Vo={class:"Regular text-[12px]"},Zo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},ta=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),ea={class:"Regular text-[12px]"},sa={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},oa={class:"Regular text-[12px]"},aa={class:"relative"},na={class:"w-[90%] h-[200px] mx-auto absolute -top-38 left-1/2 -translate-x-1/2 bg-black"},la=t("div",{class:"h-full absolute top-20 left-0 w-full z-20 rotate-180",style:{background:"linear-gradient(0.7deg, black 50.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),ia=D({__name:"CapturingTheWeb",setup(i){const l=g(["ERA","START / END DATE","REFERRALS","GAEA POINTS","WORKING HOURS"]),e=g([]),s=async()=>{e.value=JSON.parse(localStorage.getItem("REWARD_ERA_INFO"))||[];const n=await Mt();n&&n.code===200&&(e.value=n.data,localStorage.setItem("REWARD_ERA_INFO",JSON.stringify(n.data)))};return R(()=>{s()}),(n,a)=>{const o=K,c=ft;return h(),f("div",Ao,[Po,t("div",Oo,[t("div",jo,[x(o,{onToRefresh:a[0]||(a[0]=r=>s())})]),t("div",Fo,[(h(!0),f(st,null,dt(m(l),(r,p)=>(h(),f("div",{class:A(["py-6 text-[#EBEBEB] text-center relative bg-black",{"border-r border-[#B0B0B0] border-opacity-40":(p+1)%5!==0}]),key:p},[(p+1)%5!==0?(h(),f("div",Go)):at("",!0),t("span",{class:A(["",p>=5?"Regular text-[12px]":"Regular font-[600] text-[14px]"])},y(r),3)],2))),128))]),(h(!0),f(st,null,dt(m(e),(r,p)=>(h(),f("div",{class:"grid grid-cols-5 relative",key:p},[Wo,t("div",Yo,[Xo,t("span",Qo,y(r.name),1)]),t("div",Ho,[Jo,t("span",qo,y(r.start_date)+" ~ "+y((r.end_date=="-",r.end_date)),1)]),t("div",Uo,[Ko,t("span",Vo,y(r.referral_points),1)]),t("div",Zo,[ta,t("span",ea,y(r.total_points),1)]),t("div",sa,[t("span",oa,y(r.total_uptime),1)])]))),128))]),t("div",aa,[t("div",na,[x(c),la])])])}}}),ca={class:"w-full space-y-[49px] - bg-black"},ra={class:"w-[90%] mx-auto overflow-hidden relative"},da=t("div",{class:"absolute bottom-0 left-0 w-full h-full z-20",style:{background:"linear-gradient(0.37deg, black 35.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),ua={class:"w-full h-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 bg-black relative z-20 -top-34"},_a={class:"flex flex-col col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 space-y-4"},pa={class:"relative"},ma={class:"w-full min-h-[216px] border-box relative"},ha={class:"absolute top-2 right-4 cursor-pointer z-50"},fa={class:"h-full flex flex-col justify-between space-y-4"},va={class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"},xa={class:"-mt-20 flex flex-col space-y-20"},Ja=D({__name:"dashboard",setup(i){const l=V(),e=g(JSON.parse(localStorage.getItem("INTEGRAL_DATA")||"{}"));mt([]);const s=async()=>{try{const a=await Tt();if(a&&a.code===200){localStorage.setItem("INTEGRAL_DATA",JSON.stringify(a.data)),e.value=a.data;const o=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...o,...a.data})),await l.setPingInfo({...l.getPingInfo,today_uptime:a.data.today_uptime})}}catch(a){console.error("Error fetching data:",a)}},n=g(null);return R(async()=>{await U(),await s()}),(a,o)=>{var I,d,E;const c=ft,r=K,p=Re,u=ps,_=Ps,v=lo,w=go,b=No,$=ia,S=kt;return h(),f(st,null,[t("div",{class:"w-full h-full adaptation-padding",ref_key:"targetElement",ref:n},[t("div",ca,[t("div",ra,[x(c),da]),t("div",ua,[t("div",_a,[t("div",pa,[t("div",ma,[t("div",ha,[x(r,{onToRefresh:o[0]||(o[0]=M=>s())})]),x(p)])]),x(u)]),t("div",fa,[x(_,{num:(I=m(e))==null?void 0:I.today_total,title1:"ERA2",num1:(d=m(e))==null?void 0:d.total_total},null,8,["num","num1"]),x(v,{icon:"total",title:"ERA2",num:(E=m(e))==null?void 0:E.total_total,onToUpdate:o[1]||(o[1]=M=>s())},null,8,["num"])]),t("div",va,[x(w)])])]),t("div",xa,[x(b),x($)])],512),x(S)],64)}}});export{Ja as default};
