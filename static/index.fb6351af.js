import{b as Ie,_ as Le,a as Re,j as ve,c as Ve,m as Me,E as Ce,d as Ee}from"./el-dialog.b1d3df8d.js";import{Z as le,d as A,r as J,f as h,P as te,$ as Se,q as re,e as o,v as Be,M as q,aj as M,ak as je,al as Ye,g as Y,S as Je,am as He,o as b,m as G,j as w,c as C,n as oe,t as O,p as H,K as se,ad as Xe,an as We,a1 as Ge,b as t,z as $e,A as ke,a4 as Ke,i as v,G as Z,J as ie,Y as ce,E as K,ah as de,H as ne,a as qe,u as ze,s as Qe,h as Ze}from"./entry.806b5b7a.js";import{_ as Pe}from"./plugin-vueexport-helper.c27b6911.js";import{a as et,_ as tt}from"./logo.4767d440.js";import{_ as ot,v as st}from"./el-loading.f3e44fbc.js";import{t as we,_ as nt,E as at,a as lt}from"./throttle.c0ceb4ef.js";import{u as ae,a as N,E as rt}from"./el-popper.07fccfd1.js";import{_ as Fe}from"./client-only.047f762e.js";import{u as pe}from"./user.ef04260f.js";import{s as Ue,g as ye,i as T}from"./utils.9dc594fe.js";import{m as it,c as ct,E as dt,a as pt}from"./el-form.9ad6a6a7.js";import{i as ut,j as ft,k as _t,n as mt,l as gt}from"./user.df353ce8.js";import{E as ht,a as vt}from"./el-checkbox.d0fd545d.js";import{c as wt}from"./passwords.46d2a945.js";import{C as W}from"./index.1735d320.js";import{F as be}from"./Fingerprinter.4330d27f.js";import{g as yt}from"./referral.d5ce5368.js";import"./request.5bf52753.js";const bt=A({inheritAttrs:!1});function xt(c,u,p,_,m,l){return J(c.$slots,"default")}var It=le(bt,[["render",xt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Ct=A({name:"ElCollectionItem",inheritAttrs:!1});function Et(c,u,p,_,m,l){return J(c.$slots,"default")}var St=le(Ct,[["render",Et],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const $t="data-el-collection-item",kt=c=>{const u=`El${c}Collection`,p=`${u}Item`,_=Symbol(u),m=Symbol(p),l={...It,name:u,setup(){const a=h(null),x=new Map;te(_,{itemMap:x,getItems:()=>{const I=o(a);if(!I)return[];const r=Array.from(I.querySelectorAll(`[${$t}]`));return[...x.values()].sort((U,D)=>r.indexOf(U.ref)-r.indexOf(D.ref))},collectionRef:a})}},f={...St,name:p,setup(a,{attrs:x}){const E=h(null),I=Se(_,void 0);te(m,{collectionItemRef:E}),re(()=>{const r=o(E);r&&I.itemMap.set(r,{ref:r,...x})}),Be(()=>{const r=o(E);I.itemMap.delete(r)})}};return{COLLECTION_INJECTION_KEY:_,COLLECTION_ITEM_INJECTION_KEY:m,ElCollection:l,ElCollectionItem:f}},ee=q({trigger:ae.trigger,effect:{...N.effect,default:"light"},type:{type:M(String)},placement:{type:M(String),default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:M([Number,String]),default:0},maxHeight:{type:M([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:M(Object)},teleported:N.teleported});q({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:je}});q({onKeydown:{type:M(Function)}});kt("Dropdown");const Pt=q({trigger:ae.trigger,placement:ee.placement,disabled:ae.disabled,visible:N.visible,transition:N.transition,popperOptions:ee.popperOptions,tabindex:ee.tabindex,content:N.content,popperStyle:N.popperStyle,popperClass:N.popperClass,enterable:{...N.enterable,default:!0},effect:{...N.effect,default:"light"},teleported:N.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Ft={"update:visible":c=>Ye(c),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Ut="onUpdate:visible",Dt=A({name:"ElPopover"}),Nt=A({...Dt,props:Pt,emits:Ft,setup(c,{expose:u,emit:p}){const _=c,m=Y(()=>_[Ut]),l=Je("popover"),f=h(),a=Y(()=>{var s;return(s=o(f))==null?void 0:s.popperRef}),x=Y(()=>[{width:He(_.width)},_.popperStyle]),E=Y(()=>[l.b(),_.popperClass,{[l.m("plain")]:!!_.content}]),I=Y(()=>_.transition===`${l.namespace.value}-fade-in-linear`),r=()=>{var s;(s=f.value)==null||s.hide()},k=()=>{p("before-enter")},U=()=>{p("before-leave")},D=()=>{p("after-enter")},L=()=>{p("update:visible",!1),p("after-leave")};return u({popperRef:a,hide:r}),(s,d)=>(b(),G(o(rt),Xe({ref_key:"tooltipRef",ref:f},s.$attrs,{trigger:s.trigger,placement:s.placement,disabled:s.disabled,visible:s.visible,transition:s.transition,"popper-options":s.popperOptions,tabindex:s.tabindex,content:s.content,offset:s.offset,"show-after":s.showAfter,"hide-after":s.hideAfter,"auto-close":s.autoClose,"show-arrow":s.showArrow,"aria-label":s.title,effect:s.effect,enterable:s.enterable,"popper-class":o(E),"popper-style":o(x),teleported:s.teleported,persistent:s.persistent,"gpu-acceleration":o(I),"onUpdate:visible":o(m),onBeforeShow:k,onBeforeHide:U,onShow:D,onHide:L}),{content:w(()=>[s.title?(b(),C("div",{key:0,class:oe(o(l).e("title")),role:"title"},O(s.title),3)):H("v-if",!0),J(s.$slots,"default",{},()=>[se(O(s.content),1)])]),default:w(()=>[s.$slots.reference?J(s.$slots,"reference",{key:0}):H("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Ot=le(Nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const xe=(c,u)=>{const p=u.arg||u.value,_=p==null?void 0:p.popperRef;_&&(_.triggerRef=c)};var Tt={mounted(c,u){xe(c,u)},updated(c,u){xe(c,u)}};const At="popover",Lt=We(Tt,At),Rt=Ge(Ot,{directive:Lt}),Vt=c=>($e("data-v-e8585796"),c=c(),ke(),c),Mt={id:"mar",class:"w-full h-11 mb-3 mt-2 multiple-radius rounded-lg px-3 flex items-center"},Bt={class:"w-full overflow-hidden relative text-white",id:"PackagingShell"},jt=Vt(()=>t("span",{class:"iconfont icon-jinggao text-[#d9af80] text-xl"},null,-1)),Yt=["innerHTML"],Jt=A({__name:"Announcement",props:{text:{default:""}},setup(c){const u=c;re(()=>{p()});const p=()=>{const l=document.getElementById("scrollingContent"),f=document.getElementById("PackagingShell"),a=l.offsetWidth,x=f.offsetWidth,E=a/x*35;l.style.animationDuration=`${E}s`},_=()=>{const l=document.getElementById("scrollingContent");l.style.animationPlayState="paused"},m=()=>{const l=document.getElementById("scrollingContent");l.style.animationPlayState="running"};return(l,f)=>(b(),C("div",Mt,[t("div",Bt,[t("div",{class:"scrolling-content whitespace-nowrap flex items-center justify-center space-x-1 link-style",id:"scrollingContent",onMouseenter:_,onMouseleave:m},[jt,t("span",{class:"whitespace-nowrap text-lg",innerHTML:u.text},null,8,Yt)],32)])]))}});const Ht=Pe(Jt,[["__scopeId","data-v-e8585796"]]);const Xt=""+globalThis.__publicAssetsURL("images/home/logout.png"),Wt={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},Gt=t("span",{class:"text-base font-normal text-white"},"User Profile",-1),Kt={class:"flex flex-col items-center space-y-2"},qt={class:"w-[72px] h-[72px] rounded-full overflow-hidden"},zt=t("div",{class:"image-slot"},[t("img",{src:Ie,class:"w-full h-full object-cover"})],-1),Qt={class:"text-base font-medium text-white"},Zt={class:"text-xs font-normal text-[#999999]"},eo={class:"flex items-center space-x-1 text-[#999999] text-xs font-normal"},to=t("span",null," UID : ",-1),oo={class:"hover:text-white cursor-pointer"},so=t("span",{class:"iconfont icon-copy text-xs sm:text-sm"},null,-1),no={class:"space-y-4"},ao={class:"h-11 flex items-center justify-between space-x-8"},lo=t("span",{class:"text-sm font-medium text-[#ffe099]"},"FAQ",-1),ro=t("span",{class:"text-sm font-medium text-[#5CF3FF]"},"About Gaea",-1),io=t("p",{class:"text-xs font-normal text-[#999999]"}," If you need help, feel free to hop on our Discord server and submit a support ticket. ",-1),co={class:"w-full flex-1 space-y-5 overflow-auto"},po={class:"flex items-center justify-between"},uo=t("p",{class:"text-base font-medium text-[#ffffffcc]"},"Social Profiles",-1),fo={class:"space-y-4 h-[130px]"},_o={class:"flex items-center space-x-2"},mo={key:0,src:Le,alt:"",class:"w-[26px] h-[26px] mr-1"},go={key:1,src:Re,alt:"",class:"w-8 h-8 mr-1"},ho={class:"text-sm font-medium text-white"},vo={class:"flex items-center justify-centerpx-2"},wo={class:"flex items-center space-x-2"},yo={class:"w-5 h-5flex items-center justify-center cursor-pointer hover:text-[#ffe099]"},bo=t("span",{class:"iconfont icon-i-more text-lg"},null,-1),xo=["onClick"],Io={class:"flex items-center justify-between text-sm font-normal text-[#8C866F]"},Co=t("img",{src:Xt,alt:"",class:"w-4 h-4"},null,-1),Eo=t("span",{class:"hover:text-[#ffe099]"}," Log out",-1),So=[Co,Eo],$o=A({__name:"UserProfile",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","changePassWord"],setup(c,{emit:u}){const p=h(!1);h(!1);const _=Se("reloadUserInfo"),m=pe(),l=h(),f=h(!1),a=h(),x=h(!1),E=h(!1),I=h(!1),r=h(null),k=()=>{u("update:closeDialog")},U=async()=>{a.value=m.getUserInfo,await F(R()),l.value.length===0&&await V()},D=e=>{const{social_x_name:n,social_dc_name:S}=m.getUserInfo;if(!T(n)&&e.code==="VERIFY_X")return n;if(!T(S)&&e.code==="VERIFY_DISCORD")return S;if(e.status==="COMPLETED")return"Claimed";if(e.status==="AVAILABLE")return"Claim";{const j=it().find(z=>z.code===e.code);return j?j.title.split("/")[0]:"Unknown"}},L=e=>{r.value=e.id;const{social_x_name:n,social_dc_name:S}=m.getUserInfo;!T(n)&&e.code==="VERIFY_X"||!T(S)&&e.code==="VERIFY_DISCORD"||e.status!=="COMPLETED"&&(e.status==="AVAILABLE"?we(()=>d(e)):(I.value=!0,we(()=>{ve(e.code).finally(()=>{I.value=!1})})))},s=async e=>{r.value=e.id,E.value=!0,await ve(e.code).finally(()=>{E.value=!1})},d=async e=>{try{p.value=!0;const n=await Ve({mission_id:`${e.id}`});p.value=!1,n&&n.code===200?await V():K.error(n.msg)}catch(n){console.error(n),K.error("An error occurred while completing the mission.")}finally{p.value=!1}},g=async()=>{await _(),await V(),l.value.length===0&&R()},i=e=>{const{social_x_name:n,social_dc_name:S}=m.getUserInfo;return e.code==="VERIFY_X"&&!T(n)&&e.status!=="LOCK"||e.code==="VERIFY_DISCORD"&&!T(S)&&e.status!=="LOCK"?!0:e.status==="COMPLETED"},y=e=>{const{social_x_name:n,social_dc_name:S}=m.getUserInfo;return!T(n)&&e.code==="VERIFY_X"||!T(S)&&e.code==="VERIFY_DISCORD"},P=async e=>{try{if(x.value=!0,e.code==="VERIFY_DISCORD"){const n=await ut();n&&n.code===200&&m.setUserInfo({...m.getUserInfo,social_dc_name:""})}if(e.code==="VERIFY_X"){const n=await ft();n&&n.code===200&&m.setUserInfo({...m.getUserInfo,social_x_name:""})}}catch(n){console.error(n)}finally{x.value=!1}},F=e=>{const n=["VERIFY_X","VERIFY_DISCORD"];l.value=e.filter(S=>n.includes(S.code))},R=()=>JSON.parse(localStorage.getItem("MISSION_DATA")||"[]"),V=async()=>{f.value=!0;try{const e=await Me(),n=e&&e.code===200?e.data:R();localStorage.setItem("MISSION_DATA",JSON.stringify(n)),F(n)}catch(e){console.error(e)}finally{f.value=!1}},B=()=>{m.clearUserInfo(),de("/login")};return(e,n)=>{const S=Ce,j=et,z=ot,ue=nt,De=Rt,Ne=Ee,Oe=Fe,Te=Ke("copy"),fe=st;return b(),C("div",null,[v(Oe,null,{default:w(()=>[v(Ne,{draggable:"","model-value":e.$props.dialogVisible,"show-close":!1,width:"550px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:k,onOpen:n[1]||(n[1]=Q=>U())},{default:w(()=>{var Q,_e,me,ge;return[t("div",Wt,[t("div",{class:"flex items-center justify-between"},[Gt,t("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center mr-3 leading-5 duration-500 text-[#ffffff99] cursor-pointer hover:scale-105",onClick:k},"×")]),t("div",Kt,[t("div",qt,[v(S,{src:("showFaces"in e?e.showFaces:o(Ue))(),fit:"cover"},{error:w(()=>[zt]),_:1},8,["src"])]),t("span",Qt,O((Q=o(a))==null?void 0:Q.name),1),t("span",Zt,O((_e=o(a))==null?void 0:_e.email),1),Z((b(),C("div",eo,[to,t("div",oo,[se(O((me=o(a))==null?void 0:me.uid)+" ",1),so])])),[[Te,(ge=o(a))==null?void 0:ge.uid]])]),t("div",no,[t("div",ao,[v(j,{to:`${("getJumpURL"in e?e.getJumpURL:o(ye))()}/home?type=FAQ`,target:"_blank",class:"flex-1 h-full border border-[#8c866f] hover:border-[#ffe099] rounded-lg flex items-center justify-center cursor-pointer"},{default:w(()=>[lo]),_:1},8,["to"]),v(j,{to:`${("getJumpURL"in e?e.getJumpURL:o(ye))()}`,target:"_blank",class:"flex-1 h-full border hover:border-[#5CF3FF] border-[#5cf4ffb6] rounded-lg flex items-center justify-center cursor-pointer"},{default:w(()=>[ro]),_:1},8,["to"])]),io]),t("div",co,[t("div",po,[uo,v(z,{onToRefresh:g})]),Z((b(),C("div",fo,[(b(!0),C(ie,null,ce(o(l),($,Ae)=>(b(),C("div",{class:"w-full py-3 px-4 bg-black rounded-lg flex items-center justify-between",key:Ae},[t("div",_o,[$.code==="VERIFY_X"?(b(),C("img",mo)):(b(),C("img",go)),t("span",ho,O($.code==="VERIFY_X"?"X":"Discord"),1)]),t("div",vo,[t("div",wo,[v(ue,{title:D($),disabled:i($)||o(I),"btn-loading":o(I)&&o(r)===$.id,"hover-title":D($),onClickHandle:he=>L($)},null,8,["title","disabled","btn-loading","hover-title","onClickHandle"]),$.status==="COMPLETED"&&!y($)?(b(),G(ue,{key:0,"btn-loading":o(E)&&o(r)===$.id,title:"Connect","hover-title":"Connect",disabled:o(E),onClickHandle:he=>s($)},null,8,["btn-loading","disabled","onClickHandle"])):H("",!0)]),t("div",yo,[y($)?(b(),G(De,{key:0,placement:"top",trigger:"hover",effect:"dark"},{reference:w(()=>[bo]),default:w(()=>[Z((b(),C("div",{class:"text-center ursor-pointer px-4 py-2 hover:text-[#ffe099] cursor-pointer",onClick:he=>P($)},[se(O($.code==="VERIFY_X"?"Update X":"Update Discord"),1)],8,xo)),[[fe,o(x)]])]),_:2},1024)):H("",!0)])])]))),128))])),[[fe,o(f)]]),t("div",Io,[t("span",{class:"cursor-pointer hover:text-[#ffe099]",onClick:n[0]||(n[0]=()=>{u("changePassWord")})}," Change Password "),t("div",{class:"flex items-center space-x-1 cursor-pointer",onClick:B},So)])])])]}),_:1},8,["model-value"])]),_:1})])}}}),X=c=>($e("data-v-df5a4707"),c=c(),ke(),c),ko={class:"max-h-[90vh] space-y-5 overflow-hidden flex flex-col"},Po=X(()=>t("span",{class:"text-base font-normal text-white"},"Change Password",-1)),Fo={class:"w-full flex-1 px-5 pb-5 mt-14"},Uo=X(()=>t("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),Do=X(()=>t("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),No={class:"set_checkbox_sty"},Oo=X(()=>t("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),To=X(()=>t("span",{class:"text-white"},"Save",-1)),Ao=A({__name:"ChangePassword",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(c,{emit:u}){const p=h(),_=pe(),m=h(),l=h(!1),f=h(ct()),a=ne({password:"",password_new:"",confirm_Password:"",checkList:[]}),I=ne({password:[{required:!0,message:"Enter your Currrent password",trigger:"blur"}],password_new:[{validator:(s,d,g)=>{d===""?g(new Error("Please enter a valide password")):(a.checkList.length!==2&&g(new Error("Your password does not match")),g())},trigger:"blur"}],confirm_Password:[{validator:(s,d,g)=>{d===""?g(new Error("Please input the password again")):d!==a.password_new?g(new Error("Your password does not match")):g()},trigger:"blur"}]}),r=()=>{const{password_new:s}=a,d=wt(s);a.checkList=[],d.criteriaMet&&a.checkList.push(f==null?void 0:f.value[0]),d.lengthMet&&a.checkList.push(f==null?void 0:f.value[1])},k=()=>{U(p.value),a.checkList=[],u("update:closeDialog")},U=s=>{s&&s.resetFields()},D=async s=>{s&&await s.validate(async d=>{if(d)try{l.value=!0;const g=await _t({password:W.SHA256(a.password).toString(W.enc.Hex).trim(),password_new:W.SHA256(a.password_new).toString(W.enc.Hex).trim()});l.value=!1,g&&g.code===200?(K.success(g.data),de("/login")):K.error(g.msg)}catch(g){console.log(g),l.value=!1}})},L=async()=>{m.value=_.getUserInfo};return(s,d)=>{const g=at,i=dt,y=ht,P=vt,F=lt,R=pt,V=Ee,B=Fe;return b(),C("div",null,[v(B,null,{default:w(()=>[v(V,{draggable:"","model-value":s.$props.dialogVisible,"show-close":!1,width:"500px",style:{background:"#121212","border-radius":"10px",padding:"0"},"align-center":"",onClose:k,onOpen:d[5]||(d[5]=e=>L())},{default:w(()=>[t("div",ko,[t("div",{class:"flex items-center justify-between"},[Po,t("div",{class:"w-5 h-5 bg-[#ffffff52] rounded-full text-center leading-5 text-[#ffffff99] cursor-pointer",onClick:k},"× ")]),t("div",Fo,[v(R,{model:o(a),class:"space-y-8",ref_key:"ruleFormRef",ref:p,rules:o(I),"label-position":"top","hide-required-asterisk":""},{default:w(()=>[v(i,{label:"Currrent password",prop:"password"},{default:w(()=>[v(g,{placeholder:"Enter your Currrent password",type:"password",modelValue:o(a).password,"onUpdate:modelValue":d[0]||(d[0]=e=>o(a).password=e),"show-password":"",oncopy:"return false"},{prefix:w(()=>[Uo]),_:1},8,["modelValue"])]),_:1}),v(i,{label:"Password",prop:"password_new",onInput:r},{default:w(()=>[v(g,{placeholder:"Enter your password",type:"password",modelValue:o(a).password_new,"onUpdate:modelValue":d[1]||(d[1]=e=>o(a).password_new=e),"show-password":"",oncopy:"return false"},{prefix:w(()=>[Do]),_:1},8,["modelValue"]),t("div",No,[v(P,{modelValue:o(a).checkList,"onUpdate:modelValue":d[2]||(d[2]=e=>o(a).checkList=e)},{default:w(()=>[(b(!0),C(ie,null,ce(o(f),(e,n)=>(b(),G(y,{label:e,value:e,key:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),v(i,{label:"Confirm Password",prop:"confirm_Password"},{default:w(()=>[v(g,{placeholder:"Enter your password",type:"password",modelValue:o(a).confirm_Password,"onUpdate:modelValue":d[3]||(d[3]=e=>o(a).confirm_Password=e),"show-password":"",oncopy:"return false"},{prefix:w(()=>[Oo]),_:1},8,["modelValue"])]),_:1}),v(F,{color:"#D9AF80",round:"",class:"w-full h-full",onClick:d[4]||(d[4]=e=>D(o(p))),loading:o(l)},{default:w(()=>[To]),_:1},8,["loading"])]),_:1},8,["model","rules"])])])]),_:1},8,["model-value"])]),_:1})])}}});const Lo=Pe(Ao,[["__scopeId","data-v-df5a4707"]]),Ro={class:"w-full h-screen flex flex-col bg-black"},Vo={class:"w-full flex items-center justify-between flex-wrap adaptation-padding py-5"},Mo={class:"flex items-center space-x-10"},Bo={class:"flex justify-center items-center gap-2 sm:gap-4 text-white scale-80 transform origin-left lg:scale-100 lg:gap-6 space-x-4"},jo=["onClick","onMouseenter"],Yo=["src"],Jo={class:"flex items-center space-x-3"},Ho={class:"text-white text-sm sm:text-base"},Xo=t("div",{class:"image-slot"},[t("img",{src:Ie,class:"w-full h-full object-cover"})],-1),Wo={class:"w-full flex-1 overflow-auto"},Go={key:0,class:"flex items-center w-full h-11 adaptation-padding mb-3 mt-1 announcement-wrapper"},fs=A({__name:"index",setup(c){const u=h(),p=qe(),_=ze(),m=p.path,l=h(m.replace(/\/$/,"")),f=h(localStorage.getItem("ANNOUNCEMENT")||""),a=h(!1),x=h(null);te("reloadUserInfo",async()=>{d()});const I=ne([{title:"Dashboard",path:"/dashboard"},{title:"Mission& Reward",path:"/missions"},{title:"NFT Coming Soon",path:"/"}]),r=pe(),k=h(!1),U=h(!1),D=i=>{i.title!=="NFT Coming Soon"&&(l.value=i.path,de(i.path))},L=()=>{k.value=!1,U.value=!0},s=async()=>{const i=await mt();i&&i.code===200&&i.data&&i.data.length>0&&(f.value=i.data[0].announcement,localStorage.setItem("ANNOUNCEMENT",f.value),a.value=!0)},d=async()=>{try{if(!r.getToken)return;const i=await gt();if(i&&i.code===200){await r.setUserInfo({...i.data}),localStorage.setItem("gaea_token",r.getToken);const y=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...y,...i.data}));const{uid:P}=r.getUserInfo;if(P){if(!r.getUuidv4||!r.getUpdateBrowserId){const F=await be.getFinalFingerprint(P);r.setUuidv4(F)}if(!localStorage.getItem("browser_id")||!r.getUpdateBrowserId){const F=await be.getFinalFingerprint(P,"plugIn");localStorage.setItem("browser_id",F)}r.setUpdateBrowserId(!0)}}}catch(i){console.log(i)}},g=async()=>{try{clearTimeout(u.value);const i=await yt(),P=Date.now()-i.data.timestamp;r.setTimeDifference(P);const F=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...F,version:r.getVersion,timeDifference:P}))}catch(i){console.log(i)}finally{u.value=setTimeout(()=>{g()},1e3*600*18)}};return re(async()=>{await Qe(),g(),await d(),s()}),(i,y)=>{var B;const P=Ce,F=Ht,R=$o,V=Lo;return b(),C("div",Ro,[t("div",Vo,[t("div",Mo,[t("img",{src:tt,alt:"",class:"w-36 h-12 cursor-pointer",onClick:y[0]||(y[0]=e=>o(_).go(0))}),t("div",Bo,[(b(!0),C(ie,null,ce(o(I),(e,n)=>(b(),C("div",{key:n,class:oe(["flex items-center hover:text-[#9E8654]",{"text-[#9E8654]":o(l)===e.path,"text-white":o(l)!==e.path}]),style:Ze({cursor:n===2?"not-allowed":"pointer"}),onClick:S=>D(e),onMouseenter:S=>x.value=n,onMouseleave:y[1]||(y[1]=S=>x.value=null)},[t("img",{src:`/images/public/menu_${n}${o(l)===e.path||o(x)===n?"_selected":""}.png`,alt:"",class:"w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"},null,8,Yo),t("span",{class:oe(["text_family font-bold text-xs sm:text-sm lg:text-base",n===2?"text-[#333]":""])},O(e.title),3)],46,jo))),128))])]),t("div",Jo,[t("div",Ho,O((B=o(r).getUserInfo)==null?void 0:B.name),1),t("div",{class:"w-8 h-8 rounded-full overflow-hidden cursor-pointer",onClick:y[2]||(y[2]=e=>k.value=!0)},[v(P,{src:("showFaces"in i?i.showFaces:o(Ue))(),fit:"cover"},{error:w(()=>[Xo]),_:1},8,["src"])])])]),t("div",Wo,[o(a)?(b(),C("div",Go,[v(F,{text:o(f)},null,8,["text"])])):H("",!0),J(i.$slots,"default")]),v(R,{"dialog-visible":o(k),"onUpdate:closeDialog":y[3]||(y[3]=e=>k.value=!1),onChangePassWord:y[4]||(y[4]=e=>L())},null,8,["dialog-visible"]),v(V,{"dialog-visible":o(U),"onUpdate:closeDialog":y[5]||(y[5]=e=>U.value=!1)},null,8,["dialog-visible"])])}}});export{fs as default};
