import{_ as K,a as Y,b as J}from"./Footer.vuevuetypescriptsetuptruelang.2c454a25.js";import{a as M,E as N}from"./el-input.16d42ccf.js";import{E as O,a as G}from"./el-form.8ec7c4e9.js";import{E as H,a as W}from"./el-checkbox.e8bc9c14.js";import{_ as z,a as Q}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.cb285374.js";import{d as X,r as v,a as Z,W as L,f as ee,o as x,c as y,b as t,e as s,k as n,l as i,ai as w,F as te,C as se,i as oe,a4 as b,E as re,A as ae,aj as le,p as ne,h as ie}from"./entry.f1a45a9c.js";import{c as ce}from"./passwords.46d2a945.js";import{c as de}from"./dict.2ebd4a6f.js";import{u as ue}from"./user.be4bdfc4.js";import{v as pe,b as me,d as fe}from"./user.f4b6ede8.js";import{t as h}from"./throttle.3832cdac.js";import{g as $}from"./utils.06204d07.js";import{_ as _e}from"./freecompress-floor1-1.522b2018.js";import{C as I}from"./index.1735d320.js";import{_ as he}from"./plugin-vueexport-helper.c27b6911.js";import"./request.665b33d1.js";const ge=async m=>{try{const d=await(m==null?void 0:m.validate());return Promise.resolve(d)}catch(d){const g=document.getElementsByClassName("is-error");throw g.length>0&&g[0].scrollIntoView({block:"center",behavior:"smooth"}),d}},c=m=>(ne("data-v-500a9f07"),m=m(),ie(),m),Ee={class:"w-full overflow-auto bg-black"},ve={class:"w-full h-screen bg-black overflow-auto px-12 pb-6 pt-20 relative"},xe=c(()=>t("img",{src:_e,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2"},null,-1)),we=c(()=>t("img",{src:J,alt:"",class:"w-full h-full object-contain"},null,-1)),ye=[we],be={class:"w-full h-full flex items-center"},ke={class:"w-[480px] h-fit overflow-auto relative px-8 pt-6 pb-13"},Ve={key:0,class:"w-full h-full flex flex-col space-y-2"},Pe={class:"flex justify-between space-x-2 mb-6"},De=c(()=>t("span",{class:"text-sm font-normal text-[#EDEDED]"},"Alrady have an account?",-1)),Ce={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Ue=c(()=>t("span",null," Login in",-1)),Le=c(()=>t("div",{class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},[t("span",{class:"iconfont icon-gengduo11"})],-1)),$e={class:"w-full h-[400px] pb-3 overflow-hidden flex flex-col"},Ie=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-email text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Ae=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon--username text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Re=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Se={class:"set_checkbox_sty text-[#2E2E2E]"},Te=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),qe=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-ico text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Be={class:"text-opacity-80 text-xs"},Fe={class:"w-full flex justify-center mb-6 mt-3"},je=c(()=>t("span",{class:"font-medium"}," Sign up",-1)),Ke={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Ye=c(()=>t("div",{class:"flex flex-col items-center space-y-1"},[t("span",{class:"text-base font-medium text-[#2E2E2E]"}," Registered Successfully "),t("span",{class:"text-sm text-[#EDEDED] font-medium"},"Welcome to the GAEA")],-1)),Je=c(()=>t("span",{class:"font-medium"},"BACK TO LOGIN",-1)),Me={class:"adaptation-padding pb-[80px]"},Ne=X({__name:"register",setup(m){const d=v(),g=v(!1),k=v(!1),E=v(!1),f=v(de()),V=ue(),P=Z(),o=L({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),A=L({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(r,e,a)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return a();if(!u.test(e))return a(new Error("Please enter a valid email address!"));pe({email:e}).then(p=>{p.code===200&&p.success?a():a(new Error(p.msg))}).catch(()=>{a(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(r,e,a)=>{e?me({username:e}).then(u=>{u.code===200?a():a(new Error(u.msg))}).catch(()=>{a(new Error)}):a()},trigger:"blur"}],password:[{validator:(r,e,a)=>{e===""?a(new Error("Please enter a valide password")):(o.checkList.length!==2&&a(new Error("Your password does not match")),a())},trigger:"blur"}],confirm_Password:[{validator:(r,e,a)=>{e===""?a(new Error("Please input the password again")):e!==o.password?a(new Error("Your password does not match")):a()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),R=()=>{const{password:r}=o,e=ce(r);o.checkList=[],e.criteriaMet&&o.checkList.push(f==null?void 0:f.value[0]),e.lengthMet&&o.checkList.push(f==null?void 0:f.value[1])},_=async r=>{o.recaptcha_token=window.grecaptcha.getResponse();try{if(!r)return;if(!o.doYouAgree){k.value=!0,setTimeout(()=>{k.value=!1},500);return}await ge(r),E.value=!0;const e={email:o.email.trim(),username:o.uername.trim(),password:I.SHA256(o.password).toString(I.enc.Hex).trim(),referral_code:o.referral_code.trim(),recaptcha_token:o.recaptcha_token.trim()},a=await fe({...e});E.value=!1,a&&a.code===200?g.value=!0:(re.error(a.msg),D())}catch(e){console.log(e),E.value=!1,D()}},D=()=>{o.recaptcha_token="";const r=document.getElementById("register_recaptcha_token");r&&(r.innerHTML="",window.onloadTurnstileCallback())};return ee(()=>{o.referral_code=P.query.ref||"",V.clearUserInfo(),V.setInvitationCode(P.query.ref)}),(r,e)=>{const a=K,u=M,p=O,C=H,S=W,T=z,q=G,U=N,B=Q,F=Y;return x(),y("div",Ee,[t("div",ve,[xe,t("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:e[0]||(e[0]=l=>r.$router.go(0))},ye),t("div",be,[t("div",ke,[s(g)?(x(),y("div",Ke,[Ye,n(U,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:s(E),onClick:e[14]||(e[14]=l=>("navigateTo"in r?r.navigateTo:s(le))("/login"))},{default:i(()=>[Je]),_:1},8,["loading"])])):(x(),y("div",Ve,[t("div",Pe,[De,t("span",Ce,[Ue,n(a,{to:"/login"},{default:i(()=>[Le]),_:1})])]),t("div",$e,[n(q,{model:s(o),class:"w-full h-full overflow-auto",ref_key:"ruleFormRef",ref:d,rules:s(A),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[n(p,{prop:"email"},{default:i(()=>[n(u,{placeholder:"Enter your email",modelValue:s(o).email,"onUpdate:modelValue":e[1]||(e[1]=l=>s(o).email=l),onKeyup:e[2]||(e[2]=w(l=>("throttle"in r?r.throttle:s(h))(()=>{_(s(d))}),["enter","native"]))},{prefix:i(()=>[Ie]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"uername"},{default:i(()=>[n(u,{placeholder:"Enter your  uername",modelValue:s(o).uername,"onUpdate:modelValue":e[3]||(e[3]=l=>s(o).uername=l),onKeyup:e[4]||(e[4]=w(l=>("throttle"in r?r.throttle:s(h))(()=>{_(s(d))}),["enter","native"]))},{prefix:i(()=>[Ae]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"password",onInput:R},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",modelValue:s(o).password,"onUpdate:modelValue":e[5]||(e[5]=l=>s(o).password=l),onKeyup:e[6]||(e[6]=w(l=>("throttle"in r?r.throttle:s(h))(()=>{_(s(d))}),["enter","native"])),oncopy:"return false","show-password":""},{prefix:i(()=>[Re]),_:1},8,["modelValue"]),t("div",Se,[n(S,{modelValue:s(o).checkList,"onUpdate:modelValue":e[7]||(e[7]=l=>s(o).checkList=l)},{default:i(()=>[(x(!0),y(te,null,se(s(f),(l,j)=>(x(),ae(C,{label:l,value:l,key:j},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),n(p,{prop:"confirm_Password"},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",onKeyup:e[8]||(e[8]=w(l=>("throttle"in r?r.throttle:s(h))(()=>{_(s(d))}),["enter","native"])),modelValue:s(o).confirm_Password,"onUpdate:modelValue":e[9]||(e[9]=l=>s(o).confirm_Password=l),"show-password":"",oncopy:"return false"},{prefix:i(()=>[Te]),_:1},8,["modelValue"])]),_:1}),n(p,null,{default:i(()=>[n(u,{maxlength:20,placeholder:"Enter Code",modelValue:s(o).referral_code,"onUpdate:modelValue":e[10]||(e[10]=l=>s(o).referral_code=l),onKeyup:e[11]||(e[11]=w(l=>("throttle"in r?r.throttle:s(h))(()=>{_(s(d))}),["enter","native"]))},{prefix:i(()=>[qe]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"recaptcha_token",class:"mt-3 h-[68px]"},{default:i(()=>[n(T)]),_:1})]),_:1},8,["model","rules"]),t("div",{class:oe(["flex items-center space-x-2 text-[#2E2E2E] set_checkbox_sty px-2",{shake:!s(o).doYouAgree&&s(k)}])},[n(C,{modelValue:s(o).doYouAgree,"onUpdate:modelValue":e[12]||(e[12]=l=>s(o).doYouAgree=l)},null,8,["modelValue"]),t("span",Be,[b(" I have read and agree to "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:s($))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[b(" Terms ")]),_:1},8,["to"]),b(" and "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:s($))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[b(" Privacy Policy ")]),_:1},8,["to"])])],2)]),t("div",Fe,[n(U,{class:"w-2/3",style:{height:"44px"},color:"#EDEDED",round:"",onClick:e[13]||(e[13]=l=>("throttle"in r?r.throttle:s(h))(()=>{_(s(d))})),loading:s(E)},{default:i(()=>[je]),_:1},8,["loading"])]),n(B)]))])])]),t("div",Me,[n(F)])])}}});const pt=he(Ne,[["__scopeId","data-v-500a9f07"]]);export{pt as default};
