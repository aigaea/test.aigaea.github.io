import{d as he}from"./Refresh.43c4dd7f.js";import{aJ as we,aK as Te,v as $,aA as Be,Y as Se,d as Me,S as Ie,aL as ke,aM as Re,s as S,r as M,H as Ae,aN as ne,w as te,f as Oe,g as Le,aO as $e,aP as I,o as c,B as v,q as p,A as j,m as h,b as m,j as i,n as se,R as z,c as X,a4 as N,l as k,t as L,aj as F,X as Ve,D as K,U as q,V as De,am as Pe,O as de,J as ce,aQ as fe,aR as oe,aS as ze,a0 as Ne,aT as ae,aE as le,E as G}from"./entry.e1b27368.js";import{E as Fe,u as re}from"./el-button.288b6c9e.js";import{E as Ue}from"./el-form.2e8d0871.js";import{a as He,u as je,b as Xe,c as Ke}from"./el-overlay.0204fffd.js";import{G as y,P as W}from"./request.6abf3e74.js";import{E as qe}from"./focus-trap.f5d4950e.js";const Ge='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Je=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ie=e=>Array.from(e.querySelectorAll(Ge)).filter(n=>We(n)&&Je(n)),We=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}};var Ye="Expected a function";function kn(e,n,o){var a=!0,s=!0;if(typeof e!="function")throw new TypeError(Ye);return we(o)&&(a="leading"in o?!!o.leading:a,s="trailing"in o?!!o.trailing:s),he(e,n,{leading:a,maxWait:n,trailing:s})}const Qe=e=>["",...Te].includes(e),J="_trap-focus-children",w=[],ue=e=>{if(w.length===0)return;const n=w[w.length-1][J];if(n.length>0&&e.code===Be.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const o=e.shiftKey,a=e.target===n[0],s=e.target===n[n.length-1];a&&o&&(e.preventDefault(),n[n.length-1].focus()),s&&!o&&(e.preventDefault(),n[0].focus())}},Ze={beforeMount(e){e[J]=ie(e),w.push(e),w.length<=1&&document.addEventListener("keydown",ue)},updated(e){$(()=>{e[J]=ie(e)})},unmounted(){w.shift(),w.length===0&&document.removeEventListener("keydown",ue)}},xe=Me({name:"ElMessageBox",directives:{TrapFocus:Ze},components:{ElButton:Fe,ElFocusTrap:qe,ElInput:Ue,ElOverlay:He,ElIcon:Ie,...ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Qe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:o,zIndex:a,ns:s,size:l}=Re("message-box",S(()=>e.buttonSize)),{t:d}=o,{nextZIndex:f}=a,C=M(!1),t=Ae({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),U=S(()=>{const r=t.type;return{[s.bm("icon",r)]:r&&ne[r]}}),H=re(),u=re(),pe=S(()=>t.icon||ne[t.type]||""),me=S(()=>!!t.message),T=M(),Y=M(),A=M(),D=M(),Q=M(),ge=S(()=>t.confirmButtonClass);te(()=>t.inputValue,async r=>{await $(),e.boxType==="prompt"&&r!==null&&x()},{immediate:!0}),te(()=>C.value,r=>{var g,B;r&&(e.boxType!=="prompt"&&(t.autofocus?A.value=(B=(g=Q.value)==null?void 0:g.$el)!=null?B:T.value:A.value=T.value),t.zIndex=f()),e.boxType==="prompt"&&(r?$().then(()=>{var ee;D.value&&D.value.$el&&(t.autofocus?A.value=(ee=Ce())!=null?ee:T.value:A.value=T.value)}):(t.editorErrorMessage="",t.validateError=!1))});const ve=S(()=>e.draggable);je(T,Y,ve),Oe(async()=>{await $(),e.closeOnHashChange&&window.addEventListener("hashchange",O)}),Le(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",O)});function O(){C.value&&(C.value=!1,$(()=>{t.action&&n("action",t.action)}))}const Z=()=>{e.closeOnClickModal&&P(t.distinguishCancelAndClose?"close":"cancel")},be=Ke(Z),ye=r=>{if(t.inputType!=="textarea")return r.preventDefault(),P("confirm")},P=r=>{var g;e.boxType==="prompt"&&r==="confirm"&&!x()||(t.action=r,t.beforeClose?(g=t.beforeClose)==null||g.call(t,r,t,O):O())},x=()=>{if(e.boxType==="prompt"){const r=t.inputPattern;if(r&&!r.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;const g=t.inputValidator;if(typeof g=="function"){const B=g(t.inputValue);if(B===!1)return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;if(typeof B=="string")return t.editorErrorMessage=B,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Ce=()=>{const r=D.value.$refs;return r.input||r.textarea},_=()=>{P("close")},Ee=()=>{e.closeOnPressEscape&&_()};return e.lockScroll&&Xe(C),{...$e(t),ns:s,overlayEvent:be,visible:C,hasMessage:me,typeClass:U,contentId:H,inputId:u,btnSize:l,iconComponent:pe,confirmButtonClasses:ge,rootRef:T,focusStartRef:A,headerRef:Y,inputRef:D,confirmRef:Q,doClose:O,handleClose:_,onCloseRequested:Ee,handleWrapperClick:Z,handleInputEnter:ye,handleAction:P,t:d}}}),_e=["aria-label","aria-describedby"],en=["aria-label"],nn=["id"];function tn(e,n,o,a,s,l){const d=I("el-icon"),f=I("close"),C=I("el-input"),t=I("el-button"),U=I("el-focus-trap"),H=I("el-overlay");return c(),v(De,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:p(()=>[j(h(H,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:p(()=>[m("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:i(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[h(U,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:p(()=>[m("div",{ref:"rootRef",class:i([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:se(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=z(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(c(),X("div",{key:0,ref:"headerRef",class:i(e.ns.e("header"))},[m("div",{class:i(e.ns.e("title"))},[e.iconComponent&&e.center?(c(),v(d,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:p(()=>[(c(),v(N(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),m("span",null,L(e.title),1)],2),e.showClose?(c(),X("button",{key:0,type:"button",class:i(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=F(z(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[h(d,{class:i(e.ns.e("close"))},{default:p(()=>[h(f)]),_:1},8,["class"])],42,en)):k("v-if",!0)],2)):k("v-if",!0),m("div",{id:e.contentId,class:i(e.ns.e("content"))},[m("div",{class:i(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(c(),v(d,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:p(()=>[(c(),v(N(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),e.hasMessage?(c(),X("div",{key:1,class:i(e.ns.e("message"))},[Ve(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(c(),v(N(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(c(),v(N(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:p(()=>[K(L(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):k("v-if",!0)],2),j(m("div",{class:i(e.ns.e("input"))},[h(C,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:i({invalid:e.validateError}),onKeydown:F(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),m("div",{class:i(e.ns.e("errormsg")),style:se({visibility:e.editorErrorMessage?"visible":"hidden"})},L(e.editorErrorMessage),7)],2),[[q,e.showInput]])],10,nn),m("div",{class:i(e.ns.e("btns"))},[e.showCancelButton?(c(),v(t,{key:0,loading:e.cancelButtonLoading,class:i([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=F(z(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:p(()=>[K(L(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):k("v-if",!0),j(h(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:i([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=F(z(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:p(()=>[K(L(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[q,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,_e)]),_:3},8,["z-index","overlay-class","mask"]),[[q,e.visible]])]),_:3})}var sn=Se(xe,[["render",tn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const V=new Map,on=e=>{let n=document.body;return e.appendTo&&(de(e.appendTo)&&(n=document.querySelector(e.appendTo)),le(e.appendTo)&&(n=e.appendTo),le(n)||(n=document.body)),n},an=(e,n,o=null)=>{const a=h(sn,e,ae(e.message)||ce(e.message)?{default:ae(e.message)?e.message:()=>e.message}:null);return a.appContext=o,fe(a,n),on(e).appendChild(n.firstElementChild),a.component},ln=()=>document.createElement("div"),rn=(e,n)=>{const o=ln();e.onVanish=()=>{fe(null,o),V.delete(s)},e.onAction=l=>{const d=V.get(s);let f;e.showInput?f={value:s.inputValue,action:l}:f=l,e.callback?e.callback(f,a.proxy):l==="cancel"||l==="close"?e.distinguishCancelAndClose&&l!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(f)};const a=an(e,o,n),s=a.proxy;for(const l in e)oe(e,l)&&!oe(s.$props,l)&&(s[l]=e[l]);return s.visible=!0,s};function R(e,n=null){if(!Pe)return Promise.reject();let o;return de(e)||ce(e)?e={message:e}:o=e.callback,new Promise((a,s)=>{const l=rn(e,n??R._context);V.set(l,{options:e,callback:o,resolve:a,reject:s})})}const un=["alert","confirm","prompt"],dn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};un.forEach(e=>{R[e]=cn(e)});function cn(e){return(n,o,a,s)=>{let l="";return ze(o)?(a=o,l=""):Ne(o)?l="":l=o,R(Object.assign({title:l,message:n,type:"",...dn[e]},a,{boxType:e}),s)}}R.close=()=>{V.forEach((e,n)=>{n.doClose()}),V.clear()};R._context=null;const b=R;b.install=e=>{b._context=e._context,e.config.globalProperties.$msgbox=b,e.config.globalProperties.$messageBox=b,e.config.globalProperties.$alert=b.alert,e.config.globalProperties.$confirm=b.confirm,e.config.globalProperties.$prompt=b.prompt};const fn=b;const Rn=()=>y("/api/mission/list"),An=e=>W("/api/mission/complete-mission",e),pn=()=>y("/api/auth/x/connect"),mn=()=>y("/api/auth/discord/connect"),gn=()=>W("/api/auth/email/verify"),vn=()=>y("/api/auth/telegram/connect"),bn=()=>y("/api/auth/galxe/connect"),yn=()=>y("/api/auth/questn/connect"),Cn=e=>y(`/api/auth/retweet/connect?id=${e}`),On=(e,n,o,a)=>y(`/api/transaction/history?start=${e}&end=${n}&page=${o}&limit=${a}`),E=async(e,n,o)=>{try{const a=await e();if(a&&a.code===200)return n(a.data);G.warning(a.msg)}catch{o()}},En=e=>{fn.alert(e,"",{showConfirmButton:!1,closeOnClickModal:!0})},Ln=async e=>{try{const n={TWITTER:()=>E(pn,s=>window.open(s.url,"_blank"),()=>{}),DISCORD:()=>E(mn,s=>window.open(s.url,"_blank"),()=>{G.error("Service Unavailable")}),VERIFY_EMAIL:async()=>await E(await gn,s=>En(s),()=>G.error("Failed to verify email")),JOIN_TELEGRAM:()=>E(vn,s=>window.open(s.url,"_blank"),()=>{}),JOIN_GALXESPACE:()=>E(bn,s=>window.open(s.url,"_blank"),()=>{}),JOIN_QUESTN:()=>E(yn,s=>window.open(s.url,"_blank"),()=>{}),RETWEET_X:()=>E(()=>Cn(e.id),s=>window.open(s.url,"_blank"),()=>{})},o=["VERIFY_DISCORD","JOIN_DISCORD"],a=["VERIFY_X","FOLLOW_X"];n[e.code]?await n[e.code]():o.includes(e.code)?await n.DISCORD():a.includes(e.code)&&await n.TWITTER()}catch{}},$n=e=>W("/api/bind/address",e);export{On as a,$n as b,An as c,Qe as i,Ln as j,Rn as m,kn as t};
