import{aT as re,K as Xe,aE as we,bF as We,L as ye,d as te,bX as ze,bY as ot,bZ as nt,b2 as He,Q as Ge,b6 as at,r as p,b_ as lt,y as rt,q as V,w as me,s as Ee,f as _e,o as u,A as ne,l,m as v,b as t,i as N,e,n as xe,R as it,k as M,S as se,a6 as ct,c as b,F as ae,T as dt,W as ut,b$ as pt,c0 as ft,a4 as mt,c1 as _t,c2 as gt,B as ge,z as oe,U as vt,X as ce,V as ht,bo as wt,Y as Je,bn as le,aS as ie,c3 as xt,a1 as Ke,bG as bt,t as Z,ag as yt,aX as Et,O as It,c4 as kt,p as Ie,h as ke,Z as Bt,a8 as Ct,G as ve,E as de,ak as Be,C as Dt,D as $t,I as be,a as St,u as Lt,N as Ut}from"./entry.772e1196.js";import{t as he,j as Pt,m as At,b as Tt}from"./metamask.d274e9d3.js";import{u as Nt,E as Ot}from"./el-input.69607bdb.js";import{g as Rt,E as Ce}from"./el-overlay.cd98760a.js";import{_ as De}from"./plugin-vueexport-helper.c27b6911.js";import{_ as Ft,a as zt}from"./logo.06bbffb9.js";import{_ as Vt}from"./Refresh.e37cb3f4.js";import Mt from"./Wallet.3480e334.js";import{E as Yt}from"./el-popover.fc4e5f4e.js";import jt from"./Discord.e09174af.js";import Xt from"./Twitter.9fa1fded.js";import{_ as $e}from"./client-only.dcf6cca3.js";import"./el-popper.6887e612.js";import{v as Wt}from"./el-loading.fb7b147f.js";import{u as Se}from"./godhood.cb4d8fbb.js";import{u as Le}from"./user.fe754047.js";import{b as Ze,g as Ve,s as Me,i as pe}from"./utils.154eefbe.js";import{m as Ht,c as Gt}from"./dict.ce0f2911.js";import{j as Jt,k as Kt,l as Ye,m as Zt,n as qt,a as Qt}from"./user.75fa2f8f.js";import{c as es}from"./request.94eb4bd4.js";import{E as ts,a as ss}from"./el-form.18909dff.js";import{E as os,a as ns}from"./el-checkbox.e2f9f822.js";import{E as as}from"./el-button.64e4d9d4.js";import{c as ls}from"./passwords.46d2a945.js";import{C as fe}from"./index.2d9eff2e.js";import{F as je,g as rs}from"./time.9211d4ff.js";import{g as is}from"./referral.19ff9e7b.js";import{b as cs}from"./ethers.e3db158f.js";import{E as ds}from"./index.61609870.js";import"./debounce.fea28a3a.js";import"./focus-trap.8c3f99a2.js";import"./isNil.c75b1b34.js";import"./validator.661dfae3.js";import"./event.2c073216.js";import"./-initCloneObject.b3930885.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./verification.856d912b.js";import"./godhead.c87ba295.js";const us=(f,B)=>{if(!re||!f||!B)return!1;const _=f.getBoundingClientRect();let i;return B instanceof Element?i=B.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},_.top<i.bottom&&_.bottom>i.top&&_.right>i.left&&_.left<i.right},ps=Xe({urlList:{type:we(Array),default:()=>We([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),fs={close:()=>!0,switch:f=>ye(f)},ms=["src"],_s=te({name:"ElImageViewer"}),gs=te({..._s,props:ps,emits:fs,setup(f,{expose:B,emit:_}){const i=f,P={CONTAIN:{name:"contain",icon:ze(ot)},ORIGINAL:{name:"original",icon:ze(nt)}},{t:x}=He(),o=Ge("image-viewer"),{nextZIndex:g}=at(),T=p(),$=p([]),C=lt(),A=p(!0),S=p(i.initialIndex),U=rt(P.CONTAIN),c=p({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=V(()=>{const{urlList:n}=i;return n.length<=1}),I=V(()=>S.value===0),h=V(()=>S.value===i.urlList.length-1),k=V(()=>i.urlList[S.value]),H=V(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!i.infinite&&I.value)]),K=V(()=>[o.e("btn"),o.e("next"),o.is("disabled",!i.infinite&&h.value)]),q=V(()=>{const{scale:n,deg:w,offsetX:D,offsetY:X,enableTransition:J}=c.value;let O=D/n,z=X/n;switch(w%360){case 90:case-270:[O,z]=[z,-O];break;case 180:case-180:[O,z]=[-O,-z];break;case 270:case-90:[O,z]=[-z,O];break}const ee={transform:`scale(${n}) rotate(${w}deg) translate(${O}px, ${z}px)`,transition:J?"transform .3s":""};return U.value.name===P.CONTAIN.name&&(ee.maxWidth=ee.maxHeight="100%"),ee}),G=V(()=>ye(i.zIndex)?i.zIndex:g());function R(){d(),_("close")}function m(){const n=he(D=>{switch(D.code){case le.esc:i.closeOnPressEscape&&R();break;case le.space:F();break;case le.left:Q();break;case le.up:a("zoomIn");break;case le.right:j();break;case le.down:a("zoomOut");break}}),w=he(D=>{const X=D.deltaY||D.deltaX;a(X<0?"zoomIn":"zoomOut",{zoomRate:i.zoomRate,enableTransition:!1})});C.run(()=>{ie(document,"keydown",n),ie(document,"wheel",w)})}function d(){C.stop()}function y(){A.value=!1}function s(n){A.value=!1,n.target.alt=x("el.image.error")}function r(n){if(A.value||n.button!==0||!T.value)return;c.value.enableTransition=!1;const{offsetX:w,offsetY:D}=c.value,X=n.pageX,J=n.pageY,O=he(ee=>{c.value={...c.value,offsetX:w+ee.pageX-X,offsetY:D+ee.pageY-J}}),z=ie(document,"mousemove",O);ie(document,"mouseup",()=>{z()}),n.preventDefault()}function L(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function F(){if(A.value)return;const n=xt(P),w=Object.values(P),D=U.value.name,J=(w.findIndex(O=>O.name===D)+1)%n.length;U.value=P[n[J]],L()}function E(n){const w=i.urlList.length;S.value=(n+w)%w}function Q(){I.value&&!i.infinite||E(S.value-1)}function j(){h.value&&!i.infinite||E(S.value+1)}function a(n,w={}){if(A.value)return;const{zoomRate:D,rotateDeg:X,enableTransition:J}={zoomRate:i.zoomRate,rotateDeg:90,enableTransition:!0,...w};switch(n){case"zoomOut":c.value.scale>.2&&(c.value.scale=Number.parseFloat((c.value.scale/D).toFixed(3)));break;case"zoomIn":c.value.scale<7&&(c.value.scale=Number.parseFloat((c.value.scale*D).toFixed(3)));break;case"clockwise":c.value.deg+=X;break;case"anticlockwise":c.value.deg-=X;break}c.value.enableTransition=J}return me(k,()=>{Ee(()=>{const n=$.value[0];n!=null&&n.complete||(A.value=!0)})}),me(S,n=>{L(),_("switch",n)}),_e(()=>{var n,w;m(),(w=(n=T.value)==null?void 0:n.focus)==null||w.call(n)}),B({setActiveItem:E}),(n,w)=>(u(),ne(wt,{to:"body",disabled:!n.teleported},[l(ht,{name:"viewer-fade",appear:""},{default:v(()=>[t("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:N(e(o).e("wrapper")),style:xe({zIndex:e(G)})},[t("div",{class:N(e(o).e("mask")),onClick:w[0]||(w[0]=it(D=>n.hideOnClickModal&&R(),["self"]))},null,2),M(" CLOSE "),t("span",{class:N([e(o).e("btn"),e(o).e("close")]),onClick:R},[l(e(se),null,{default:v(()=>[l(e(ct))]),_:1})],2),M(" ARROW "),e(Y)?M("v-if",!0):(u(),b(ae,{key:0},[t("span",{class:N(e(H)),onClick:Q},[l(e(se),null,{default:v(()=>[l(e(dt))]),_:1})],2),t("span",{class:N(e(K)),onClick:j},[l(e(se),null,{default:v(()=>[l(e(ut))]),_:1})],2)],64)),M(" ACTIONS "),t("div",{class:N([e(o).e("btn"),e(o).e("actions")])},[t("div",{class:N(e(o).e("actions__inner"))},[l(e(se),{onClick:w[1]||(w[1]=D=>a("zoomOut"))},{default:v(()=>[l(e(pt))]),_:1}),l(e(se),{onClick:w[2]||(w[2]=D=>a("zoomIn"))},{default:v(()=>[l(e(ft))]),_:1}),t("i",{class:N(e(o).e("actions__divider"))},null,2),l(e(se),{onClick:F},{default:v(()=>[(u(),ne(mt(e(U).icon)))]),_:1}),t("i",{class:N(e(o).e("actions__divider"))},null,2),l(e(se),{onClick:w[3]||(w[3]=D=>a("anticlockwise"))},{default:v(()=>[l(e(_t))]),_:1}),l(e(se),{onClick:w[4]||(w[4]=D=>a("clockwise"))},{default:v(()=>[l(e(gt))]),_:1})],2)],2),M(" CANVAS "),t("div",{class:N(e(o).e("canvas"))},[(u(!0),b(ae,null,ge(n.urlList,(D,X)=>oe((u(),b("img",{ref_for:!0,ref:J=>$.value[X]=J,key:D,src:D,style:xe(e(q)),class:N(e(o).e("img")),onLoad:y,onError:s,onMousedown:r},null,46,ms)),[[vt,X===S.value]])),128))],2),ce(n.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var vs=Je(gs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const hs=Ke(vs),ws=Xe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:we([String,Object])},previewSrcList:{type:we(Array),default:()=>We([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),xs={load:f=>f instanceof Event,error:f=>f instanceof Event,switch:f=>ye(f),close:()=>!0,show:()=>!0},bs=["src","loading"],ys={key:0},Es=te({name:"ElImage",inheritAttrs:!1}),Is=te({...Es,props:ws,emits:xs,setup(f,{emit:B}){const _=f;let i="";const{t:P}=He(),x=Ge("image"),o=bt(),g=Nt(),T=p(),$=p(!1),C=p(!0),A=p(!1),S=p(),U=p(),c=re&&"loading"in HTMLImageElement.prototype;let Y,I;const h=V(()=>[x.e("inner"),K.value&&x.e("preview"),C.value&&x.is("loading")]),k=V(()=>o.style),H=V(()=>{const{fit:a}=_;return re&&a?{objectFit:a}:{}}),K=V(()=>{const{previewSrcList:a}=_;return Array.isArray(a)&&a.length>0}),q=V(()=>{const{previewSrcList:a,initialIndex:n}=_;let w=n;return n>a.length-1&&(w=0),w}),G=V(()=>_.loading==="eager"?!1:!c&&_.loading==="lazy"||_.lazy),R=()=>{re&&(C.value=!0,$.value=!1,T.value=_.src)};function m(a){C.value=!1,$.value=!1,B("load",a)}function d(a){C.value=!1,$.value=!0,B("error",a)}function y(){us(S.value,U.value)&&(R(),L())}const s=kt(y,200,!0);async function r(){var a;if(!re)return;await Ee();const{scrollContainer:n}=_;Et(n)?U.value=n:It(n)&&n!==""?U.value=(a=document.querySelector(n))!=null?a:void 0:S.value&&(U.value=Rt(S.value)),U.value&&(Y=ie(U,"scroll",s),setTimeout(()=>y(),100))}function L(){!re||!U.value||!s||(Y==null||Y(),U.value=void 0)}function F(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function E(){K.value&&(I=ie("wheel",F,{passive:!1}),i=document.body.style.overflow,document.body.style.overflow="hidden",A.value=!0,B("show"))}function Q(){I==null||I(),document.body.style.overflow=i,A.value=!1,B("close")}function j(a){B("switch",a)}return me(()=>_.src,()=>{G.value?(C.value=!0,$.value=!1,L(),r()):R()}),_e(()=>{G.value?r():R()}),(a,n)=>(u(),b("div",{ref_key:"container",ref:S,class:N([e(x).b(),a.$attrs.class]),style:xe(e(k))},[$.value?ce(a.$slots,"error",{key:0},()=>[t("div",{class:N(e(x).e("error"))},Z(e(P)("el.image.error")),3)]):(u(),b(ae,{key:1},[T.value!==void 0?(u(),b("img",yt({key:0},e(g),{src:T.value,loading:a.loading,style:e(H),class:e(h),onClick:E,onLoad:m,onError:d}),null,16,bs)):M("v-if",!0),C.value?(u(),b("div",{key:1,class:N(e(x).e("wrapper"))},[ce(a.$slots,"placeholder",{},()=>[t("div",{class:N(e(x).e("placeholder"))},null,2)])],2)):M("v-if",!0)],64)),e(K)?(u(),b(ae,{key:2},[A.value?(u(),ne(e(hs),{key:0,"z-index":a.zIndex,"initial-index":e(q),infinite:a.infinite,"zoom-rate":a.zoomRate,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:Q,onSwitch:j},{default:v(()=>[a.$slots.viewer?(u(),b("div",ys,[ce(a.$slots,"viewer")])):M("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):M("v-if",!0)],64)):M("v-if",!0)],6))}});var ks=Je(Is,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const qe=Ke(ks),Bs=f=>(Ie("data-v-63503bbd"),f=f(),ke(),f),Cs={id:"mar",class:"w-full h-11 mb-3 mt-2 multiple-radius rounded-lg px-3 flex items-center"},Ds={class:"w-full overflow-hidden relative",id:"PackagingShell"},$s=Bs(()=>t("span",{class:"iconfont icon-jinggao text-[#EBEBEB] text-lg"},null,-1)),Ss=["innerHTML"],Ls=te({__name:"Announcement",props:{text:{default:""}},setup(f){const B=f;_e(()=>{_()});const _=()=>{const x=document.getElementById("scrollingContent"),o=document.getElementById("PackagingShell"),g=x.offsetWidth,T=o.offsetWidth,$=g/T*35;x.style.animationDuration=`${$}s`},i=()=>{const x=document.getElementById("scrollingContent");x.style.animationPlayState="paused"},P=()=>{const x=document.getElementById("scrollingContent");x.style.animationPlayState="running"};return(x,o)=>(u(),b("div",Cs,[t("div",Ds,[t("div",{class:"scrolling-content whitespace-nowrap flex items-center justify-center space-x-1 link-style",id:"scrollingContent",onMouseenter:i,onMouseleave:P},[$s,t("span",{class:"whitespace-nowrap Regular text-[14px] text-[#EBEBEB]",innerHTML:B.text},null,8,Ss)],32)])]))}});const Us=De(Ls,[["__scopeId","data-v-63503bbd"]]);const Qe=""+globalThis.__publicAssetsURL("images/public/head/default_head.png"),Ps=Dt(()=>$t(()=>import("./WalletSelection.faa6edf1.js"),["./WalletSelection.faa6edf1.js","./el-overlay.cd98760a.js","./entry.772e1196.js","./entry.f0bc6904.css","./focus-trap.8c3f99a2.js","./isNil.c75b1b34.js","./event.2c073216.js","./el-button.64e4d9d4.js","./el-button.2e70eb9e.css","./el-overlay.155e27a7.css","./client-only.dcf6cca3.js","./godhood.cb4d8fbb.js","./ethers.e3db158f.js","./user.fe754047.js","./verification.856d912b.js","./godhead.c87ba295.js","./request.94eb4bd4.js","./-vite-browser-externalcommonjs-proxy.0e49e858.js","./utils.154eefbe.js","./WalletSelection.c4aa2964.css"],import.meta.url).then(f=>f.default||f)),As={class:"z-[99]"},Ts={class:"space-y-6 overflow-hidden flex flex-col"},Ns={class:"flex items-center space-x-6"},Os={class:"w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#ebebeb9e]"},Rs=t("div",{class:"image-slot"},[t("img",{src:Qe,class:"w-full h-full object-cover"})],-1),Fs={class:"flex flex-col space-y-2"},zs={class:"text-base font-medium text-[#EBEBEBD]"},Vs={class:"flex items-center space-x-1 text-[#B0B0B0] text-xs font-normal"},Ms=t("span",null," UID : ",-1),Ys={class:"hover:text-white cursor-pointer"},js=t("span",{class:"iconfont icon-copy text-xs sm:text-sm"},null,-1),Xs={class:"text-xs font-normal text-[#B0B0B0]"},Ws={class:"space-y-4"},Hs={class:"h-11 flex items-center justify-between space-x-8"},Gs=t("span",{class:"text-sm font-medium text-[#E5E5E5] uppercase"},"FAQ",-1),Js=t("span",{class:"text-sm font-medium text-[#E5E5E5] uppercase"},"About Gaea",-1),Ks=t("p",{class:"text-[11px] font-normal text-[#B0B0B0]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),Zs={class:"w-full flex-1 overflow-auto"},qs={class:"flex items-center justify-end mb-4 text-[#B0B0B0]"},Qs={class:"space-y-4"},eo={class:"w-full py-3 px-4 rounded-lg border-box flex items-center justify-between cursor-pointer"},to={class:"flex items-center space-x-2"},so=t("span",{class:"text-sm font-medium text-[#B0B0B0]"},"Wallet",-1),oo={key:0,class:"space-x-1 flex items-center"},no={class:"cursor-pointer"},ao={class:"text-[#B0B0B0]"},lo=t("span",{class:"iconfont icon-copy text-xs sm:text-sm text-[#B0B0B0]"},null,-1),ro=t("span",{class:"iconfont icon-i-more text-lg cursor-pointer"},null,-1),io=t("span",{class:"text-[#EBEBEB] text-[12px] cursor-pointer"}," Update Wallet ",-1),co=[io],uo={class:"flex items-center space-x-2"},po={class:"text-sm font-medium text-[#B0B0B0]"},fo={class:"flex items-center justify-centerpx-2"},mo={class:"flex items-center space-x-2"},_o={key:0,class:"text-[#B0B0B0]"},go=["onClick"],vo=t("span",{class:"iconfont icon-i-more text-lg cursor-pointer"},null,-1),ho={class:"w-full border border-[#EDEDED] rounded-[9px] h-8 flex items-center justify-center px-4 hover:scale-[1.05] duration-700"},wo=["onClick"],xo={class:"flex items-center justify-between text-sm font-normal mt-8"},bo={class:"text-[#B0B0B0] hover:text-[#EBEBEB] space-x-1 cursor-pointer duration-500"},yo=t("span",{class:"iconfont icon-cfmpassword"},null,-1),Eo=t("span",{class:"iconfont icon-tuichu"},null,-1),Io=t("span",null," Log out",-1),ko=[Eo,Io],Bo=te({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(f,{emit:B}){const _=Se();p(!1);const i=p(!1),P=p(!1),x=Bt("reloadUserInfo"),o=Le(),g=p(),T=p(!1),$=p(),C=p(!1),A=p(!1);p(!1);const S=p(!1),U=p(null),c=()=>{B("update:closeDialog")},Y=async()=>{$.value=o.getUserInfo,await G(R()),g.value.length===0&&await m()},I=s=>{const{social_x_name:r,social_dc_name:L}=o.getUserInfo;if(!pe(r)&&s.code==="VERIFY_X")return r;if(!pe(L)&&s.code==="VERIFY_DISCORD")return L;if(s.status==="COMPLETED")return"Claimed";if(s.status==="AVAILABLE")return"Claim";{const F=Ht().find(E=>E.code===s.code);return F?F.title.split("/")[0]:"Unknown"}},h=async s=>{U.value=s.id,A.value=!0,await Pt(s).finally(()=>{A.value=!1})},k=async()=>{await x(),await m(),g.value.length===0&&R()},H=s=>{const{social_x_name:r,social_dc_name:L}=o.getUserInfo;return!pe(r)&&s.code==="VERIFY_X"||!pe(L)&&s.code==="VERIFY_DISCORD"},K=async s=>{try{if(C.value=!0,s.code==="VERIFY_DISCORD"){const r=await Jt();r&&r.code===200&&o.setUserInfo({...o.getUserInfo,social_dc_name:""})}if(s.code==="VERIFY_X"){const r=await Kt();r&&r.code===200&&o.setUserInfo({...o.getUserInfo,social_x_name:""})}}catch(r){console.error(r)}finally{C.value=!1}},q=async()=>{var s,r,L,F;S.value=!0;try{const E=[];(s=o.getUserInfo)!=null&&s.sol_address&&E.push(Ye({address:(r=o.getUserInfo)==null?void 0:r.sol_address})),(L=o.getUserInfo)!=null&&L.eth_address&&E.push(Ye({address:(F=o.getUserInfo)==null?void 0:F.eth_address})),(await Promise.all(E)).forEach(j=>{j&&(j.code===200?x():de.warning(j.msg))})}catch(E){console.error(E)}finally{S.value=!1}},G=s=>{const r=["VERIFY_X","VERIFY_DISCORD"];g.value=s.filter(L=>r.includes(L.code))},R=()=>JSON.parse(localStorage.getItem("MISSION_DATA")||"[]"),m=async()=>{T.value=!0;try{const s=await At(),r=s&&s.code===200?s.data:R();localStorage.setItem("MISSION_DATA",JSON.stringify(r)),G(r)}catch(s){console.error(s)}finally{T.value=!1}},d=async()=>{try{P.value=!0;const s=await Tt({address:_.getAccountsWalletAddress});s&&(s.code===200?(de.success(s.data),x()):s.msg&&de.error(s.msg))}catch(s){P.value=!1,console.log(s)}finally{P.value=!1}},y=()=>{Be("/login"),es()};return(s,r)=>{const L=qe,F=Ft,E=Vt,Q=Mt,j=Yt,a=jt,n=Xt,w=Ce,D=Ps,X=$e,J=Ct("copy"),O=Wt;return u(),b("div",As,[l(X,null,{default:v(()=>[l(w,{draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"black","border-radius":"10px",padding:"20px 30px",border:"1px solid #EDEDED"},"align-center":"",onClose:c,onOpen:r[2]||(r[2]=z=>Y())},{default:v(()=>{var z,ee,Ue,Pe,Ae,Te,Ne,Oe,Re,Fe;return[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:c}),t("div",Ts,[t("div",Ns,[t("div",Os,[l(L,{src:("showFaces"in s?s.showFaces:e(Ze))(),fit:"cover"},{error:v(()=>[Rs]),_:1},8,["src"])]),t("div",Fs,[t("div",null,[t("div",zs,Z((z=e($))==null?void 0:z.name),1),oe((u(),b("div",Vs,[Ms,t("div",Ys,[ve(Z((ee=e($))==null?void 0:ee.uid)+" ",1),js])])),[[J,(Ue=e($))==null?void 0:Ue.uid]])]),t("span",Xs,Z((Pe=e($))==null?void 0:Pe.email),1)])]),t("div",Ws,[t("div",Hs,[l(F,{to:`${("getJumpURL"in s?s.getJumpURL:e(Ve))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border-box rounded-lg flex items-center justify-center cursor-pointer"},{default:v(()=>[Gs]),_:1},8,["to"]),l(F,{to:`${("getJumpURL"in s?s.getJumpURL:e(Ve))()}`,target:"_blank",class:"flex-1 h-full border-box rounded-lg flex items-center justify-center cursor-pointer"},{default:v(()=>[Js]),_:1},8,["to"])]),Ks]),t("div",Zs,[t("div",qs,[l(E,{onToRefresh:k})]),oe((u(),b("div",Qs,[t("div",eo,[t("div",to,[l(Q,{color:"#B0B0B0"}),so]),(Ae=e(o).getUserInfo)!=null&&Ae.sol_address||(Te=e(o).getUserInfo)!=null&&Te.eth_address?(u(),b("div",oo,[oe((u(),b("div",no,[t("span",ao,Z(("stringStar"in s?s.stringStar:e(Me))({value:((Ne=e(o).getUserInfo)==null?void 0:Ne.sol_address)||((Oe=e(o).getUserInfo)==null?void 0:Oe.eth_address),characters:"********",start:4})),1),lo])),[[J,((Re=e(o).getUserInfo)==null?void 0:Re.sol_address)||((Fe=e(o).getUserInfo)==null?void 0:Fe.eth_address)]]),l(j,{placement:"right",title:"",width:40,style:{},trigger:"click",content:""},{reference:v(()=>[ro]),default:v(()=>[oe((u(),b("div",{class:"w-full border border-[#EDEDED] rounded-[9px] h-8 flex items-center justify-center px-4 hover:scale-[1.05] duration-700",onClick:q},co)),[[O,e(S)]])]),_:1})])):(u(),b("span",{key:1,class:"text-[#B0B0B0] hover:text-[#EDEDED] cursor-pointer",onClick:r[0]||(r[0]=W=>i.value=!0)}," Connect "))]),(u(!0),b(ae,null,ge(e(g),(W,tt)=>(u(),b("div",{class:"w-full py-3 px-4 rounded-lg border-box flex items-center justify-between",key:tt},[t("div",uo,[W.code!=="VERIFY_X"?(u(),ne(a,{key:0})):(u(),ne(n,{key:1})),t("span",po,Z(W.code==="VERIFY_X"?"X":"Discord"),1)]),t("div",fo,[t("div",mo,[I(W)!=="Connect"?(u(),b("div",_o,Z(("stringStar"in s?s.stringStar:e(Me))({value:I(W),characters:"********",start:10})),1)):M("",!0),W.status==="COMPLETED"&&!H(W)||I(W)==="Connect"?oe((u(),b("div",{key:1,class:"text-[#B0B0B0] hover:text-[#EDEDED] cursor-pointer",onClick:st=>h(W)},[ve(" Connect ")],8,go)),[[O,e(A)&&e(U)===W.id]]):M("",!0)]),H(W)?(u(),ne(j,{key:0,placement:"right",title:"",width:40,style:{},trigger:"click",content:""},{reference:v(()=>[vo]),default:v(()=>[t("div",ho,[oe((u(),b("span",{class:"text-[#EBEBEB] text-[12px] cursor-pointer",onClick:st=>K(W)},[ve(Z(W.code==="VERIFY_X"?"Update X":"Update Discord"),1)],8,wo)),[[O,e(C)]])])]),_:2},1024)):M("",!0)])]))),128))])),[[O,e(T)]]),t("div",xo,[t("div",bo,[yo,t("span",{class:"cursor-pointer",onClick:r[1]||(r[1]=()=>{B("changePassWord")})}," Change Password ")]),t("div",{class:"text-[#B0B0B0] hover:text-[#EBEBEB] space-x-1 cursor-pointer duration-500",onClick:y},ko)])])])]}),_:1},8,["model-value"]),l(D,{"dialog-visible":e(i),"onUpdate:success":r[3]||(r[3]=z=>d()),"onUpdate:closeDialog":r[4]||(r[4]=z=>i.value=!1)},null,8,["dialog-visible"])]),_:1})])}}}),ue=f=>(Ie("data-v-098eb72d"),f=f(),ke(),f),Co={class:"z-[99]"},Do={class:"space-y-5 overflow-hidden flex flex-col px-6"},$o=ue(()=>t("span",{class:"text-base font-normal text-[#EDEDED] px-5"},"Change Password",-1)),So={class:"w-full flex-1 px-5 pb-5 mt-14"},Lo=ue(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Uo=ue(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),Po={class:"set_checkbox_sty"},Ao=ue(()=>t("div",{class:"flex items-center space-x-2 text-[#666666]"},[t("span",{class:"iconfont icon-cfmpassword text-base"}),t("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1)),To={class:"flex justify-center"},No=ue(()=>t("span",{class:"text-black Regular font-semibold text-[14px]"},"Save",-1)),Oo=te({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:B}){const _=p(),i=Le(),P=p(),x=p(!1),o=p(Gt()),g=be({password:"",password_new:"",confirm_Password:"",checkList:[]}),C=be({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(I,h,k)=>{h===""?k(new Error("Please enter a valide password")):(g.checkList.length!==2&&k(new Error("Your password does not match")),k())},trigger:"blur"}],confirm_Password:[{validator:(I,h,k)=>{h===""?k(new Error("Please input the password again")):h!==g.password_new?k(new Error("Your password does not match")):k()},trigger:"blur"}]}),A=()=>{const{password_new:I}=g,h=ls(I);g.checkList=[],h.criteriaMet&&g.checkList.push(o==null?void 0:o.value[0]),h.lengthMet&&g.checkList.push(o==null?void 0:o.value[1])},S=()=>{U(_.value),g.checkList=[],B("update:closeDialog")},U=I=>{I&&I.resetFields()},c=async I=>{I&&await I.validate(async h=>{if(h)try{x.value=!0;const k=await Zt({password:fe.SHA256(g.password).toString(fe.enc.Hex).trim(),password_new:fe.SHA256(g.password_new).toString(fe.enc.Hex).trim()});x.value=!1,k&&(k.code===200?(de.success(k.data),Be("/login")):de.error(k.msg))}catch(k){console.log(k),x.value=!1}})},Y=async()=>{P.value=i.getUserInfo};return(I,h)=>{const k=Ot,H=ts,K=os,q=ns,G=as,R=ss,m=Ce,d=$e;return u(),b("div",Co,[l(d,null,{default:v(()=>[l(m,{class:"relative z-50",draggable:"","model-value":I.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"black","border-radius":"10px",border:"1px solid #EDEDED","padding-bottom":"18px"},"align-center":"",onClose:S,onOpen:h[5]||(h[5]=y=>Y())},{default:v(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:S}),t("div",Do,[$o,t("div",So,[l(R,{model:e(g),class:"space-y-3",ref_key:"ruleFormRef",ref:_,rules:e(C),"label-position":"top","hide-required-asterisk":""},{default:v(()=>[l(H,{label:"Currrent password",prop:"password"},{default:v(()=>[l(k,{style:{height:"35px"},maxlength:50,placeholder:"Enter your Currrent password",type:"password",modelValue:e(g).password,"onUpdate:modelValue":h[0]||(h[0]=y=>e(g).password=y),"show-password":"",oncopy:"return false"},{prefix:v(()=>[Lo]),_:1},8,["modelValue"])]),_:1}),l(H,{label:"Password",prop:"password_new",onInput:A},{default:v(()=>[l(k,{style:{height:"35px"},maxlength:50,placeholder:"Enter your password",type:"password",modelValue:e(g).password_new,"onUpdate:modelValue":h[1]||(h[1]=y=>e(g).password_new=y),"show-password":"",oncopy:"return false"},{prefix:v(()=>[Uo]),_:1},8,["modelValue"]),t("div",Po,[l(q,{modelValue:e(g).checkList,"onUpdate:modelValue":h[2]||(h[2]=y=>e(g).checkList=y)},{default:v(()=>[(u(!0),b(ae,null,ge(e(o),(y,s)=>(u(),ne(K,{label:y,value:y,key:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(H,{label:"Confirm Password",prop:"confirm_Password"},{default:v(()=>[l(k,{style:{height:"35px"},maxlength:50,placeholder:"Enter your password",type:"password",modelValue:e(g).confirm_Password,"onUpdate:modelValue":h[3]||(h[3]=y=>e(g).confirm_Password=y),"show-password":"",oncopy:"return false"},{prefix:v(()=>[Ao]),_:1},8,["modelValue"])]),_:1}),t("div",To,[l(G,{color:"#EDEDED",round:"",class:"w-1/2 h-full mx-auto mt-6",onClick:h[4]||(h[4]=y=>c(e(_))),loading:e(x)},{default:v(()=>[No]),_:1},8,["loading"])])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const Ro=De(Oo,[["__scopeId","data-v-098eb72d"]]),Fo={class:"text-[#EBEBEB] py-6 px-6 flex space-x-2"},zo=t("p",{class:"text-[#EBEBEB]"},"Transaction failed:",-1),Vo={class:"underline underline-offset-4"},Mo=["href"],Yo=te({__name:"Error",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:B}){const _=Se(),i=()=>{B("update:closeDialog"),_.setDialogError({show:!1,url:""})};return(P,x)=>{const o=Ce,g=$e;return u(),b("div",null,[l(g,null,{default:v(()=>[l(o,{class:"border-box",draggable:"","model-value":P.$props.dialogVisible,"show-close":!1,width:"350px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:i},{default:v(()=>[t("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:i}),t("div",Fo,[zo,t("div",Vo,[t("a",{target:"_blank",href:e(_).getDialogError.url}," Check the reason ",8,Mo)])])]),_:1},8,["model-value"])]),_:1})])}}}),et=f=>(Ie("data-v-f8f21ced"),f=f(),ke(),f),jo={class:"w-full h-screen flex flex-col bg-black overflow-hidden"},Xo={class:"w-full h-[80px] flex items-center justify-between flex-wrap adaptation-padding py-5 pointer-events-auto relative z-20"},Wo={class:"flex items-center space-x-10"},Ho=et(()=>t("img",{src:zt,alt:"",class:"w-full h-full object-contain"},null,-1)),Go=[Ho],Jo={class:"flex justify-center items-center gap-2 sm:gap-4 transform rigin-left scale-80 lg:scale-100 lg:gap-6 space-x-4"},Ko=["onClick","onMouseenter"],Zo={class:"uppercase font-bold text-[14px]"},qo={key:0,style:{"margin-left":"5px","font-size":"12px",color:"rgb(103 184 235)"}},Qo={class:"flex items-center space-x-3 absolute right-[10%]"},en={class:"text-[#EBEBEB]"},tn=et(()=>t("div",{class:"image-slot"},[t("img",{src:Qe,class:"w-full h-full object-cover"})],-1)),sn={class:"w-full flex-1 flex flex-col body-container overflow-auto scroll-smooth",ref:"targetElement"},on={key:0,class:"flex items-center w-full h-11 adaptation-padding mb-5 mt-4"},nn=te({__name:"index",setup(f){const B=p(),_=St(),i=Lt(),P=p(_.path),x=p(localStorage.getItem("ANNOUNCEMENT")||""),o=p(!1),g=p(!1),T=p(null),$=Se(),C=p(P.value.replace(/\/$/,"")),A=p(!1);V(()=>(console.log(C.value,"menuSelectedPath.value"),!C.value.startsWith("/godhoodId")&&!C.value.startsWith("/emotionalCheckIn")&&C.value!=="/godhoodId/myResultPreview")),Ut("reloadUserInfo",async()=>{q()});const U=be([{title:"Dashboard",path:"/dashboard"},{title:"Mission& Reward",path:"/missions"},{title:"GODHOOD",path:"/godhoodId"},{title:"Emotional Coordinates",path:"/emotionalCheckIn",tips:"Alpha"}]),c=Le(),Y=p(!1),I=p(!1),h=p(),k=m=>{C.value=m.path,Be(m.path)},H=()=>{Y.value=!1,I.value=!0},K=async()=>{const m=await qt();m&&m.code===200&&m.data&&m.data.length>0&&(x.value=m.data[0].announcement,localStorage.setItem("ANNOUNCEMENT",x.value),o.value=!0)},q=async()=>{try{if(!c.getToken)return;const m=await Qt();if(m&&m.code===200){await c.setUserInfo({...m.data}),localStorage.setItem("gaea_token",c.getToken);const d=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...d,...m.data}));const{uid:y}=c.getUserInfo;if(y){if(!c.getUuidv4||!c.getUpdateBrowserId){const s=await je.getFinalFingerprint(y);c.setUuidv4(s)}if(!localStorage.getItem("browser_id")||!c.getUpdateBrowserId){const s=await je.getFinalFingerprint(y,"plugIn");localStorage.setItem("browser_id",s)}c.setUpdateBrowserId(!0)}}}catch(m){console.log(m)}},G=async()=>{var m;try{clearTimeout(B.value);const d=await is();if(d&&d.code===200){const y=d&&d.code===200?d.data:{country:"Unknown",country_icon:"Unknown",ip_address:"None",host:""};await c.setPingInfo({...c.getPingInfo,...y});const r=rs()-((m=d.data)==null?void 0:m.timestamp);c.setTimeDifference(r);const L=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...L,version:c.getVersion,timeDifference:r}))}}catch(d){console.log(d)}finally{B.value=setTimeout(()=>{G()},1e3*600*18)}},R=async()=>{var m;try{if(_.path==="/godhoodId"&&(h.value=ds.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"})),!$.getIsPayCard){const d=await cs();$.setIsPayCard(d)}}catch(d){console.log(d)}finally{(m=h.value)==null||m.close()}};return _e(async()=>{await Ee(),G(),await q(),K(),R()}),me(()=>_.path,()=>{C.value=_.path.replace(/\/$/,"")}),(m,d)=>{const y=qe,s=Us,r=Bo,L=Ro,F=Yo;return u(),b("div",jo,[t("div",Xo,[t("div",Wo,[t("div",{class:"w-40 h-10 cursor-pointer",onClick:d[0]||(d[0]=E=>e(i).go(0))},Go),t("div",Jo,[(u(!0),b(ae,null,ge(e(U),(E,Q)=>(u(),b("div",{key:Q,class:N(["flex items-center hover:text-[#EBEBEB] cursor-pointer",e(C)===E.path?"text-[#EBEBEB]":"text-[#b0b0b0]"]),onClick:j=>k(E),onMouseenter:j=>T.value=Q,onMouseleave:d[1]||(d[1]=j=>T.value=null)},[t("span",Zo,Z(E.title),1),E.tips?(u(),b("span",qo,Z(E.tips),1)):M("",!0)],42,Ko))),128))])]),t("div",Qo,[t("span",en,Z(e(c).getUserInfo.name),1),t("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer bg-black border-2 border-[#ebebeb9e]",onClick:d[2]||(d[2]=E=>Y.value=!0)},[l(y,{src:("showFaces"in m?m.showFaces:e(Ze))(),fit:"fill"},{error:v(()=>[tn]),_:1},8,["src"])])])]),t("div",sn,[e(o)?(u(),b("div",on,[l(s,{text:e(x)},null,8,["text"])])):M("",!0),t("div",{class:N(["w-full flex-1",e(A)?"layouts_style":""])},[ce(m.$slots,"default",{},void 0,!0)],2)],512),l(r,{"dialog-visible":e(Y),"onUpdate:closeDialog":d[3]||(d[3]=E=>Y.value=!1),onChangePassWord:d[4]||(d[4]=E=>H())},null,8,["dialog-visible"]),l(L,{"dialog-visible":e(I),"onUpdate:closeDialog":d[5]||(d[5]=E=>I.value=!1)},null,8,["dialog-visible"]),l(F,{"dialog-visible":e($).getDialogError.show,"onUpdate:closeDialog":d[6]||(d[6]=E=>g.value=!1)},null,8,["dialog-visible"])])}}});const jn=De(nn,[["__scopeId","data-v-f8f21ced"]]);export{jn as default};
