import{_ as Y,a as J}from"./logo.06bbffb9.js";import{E as M}from"./el-input.69607bdb.js";import{E as N,a as O}from"./el-form.18909dff.js";import{E as G,a as H}from"./el-checkbox.e2f9f822.js";import{_ as z,a as W}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.d49ede0a.js";import{E as Q}from"./el-button.64e4d9d4.js";import{_ as X,t as E}from"./Footer.vuevuetypescriptsetuptruelang.b41e2f9c.js";import{d as Z,r as _,a as ee,I as L,f as te,o as x,c as y,b as t,e as s,l as n,m as i,aj as w,F as se,B as oe,i as re,G as b,E as ae,A as le,ak as ne,p as ie,h as ce}from"./entry.772e1196.js";import{c as de}from"./passwords.46d2a945.js";import{c as ue}from"./dict.ce0f2911.js";import{u as pe}from"./user.fe754047.js";import{v as me,d as fe,e as _e}from"./user.75fa2f8f.js";import{g as I}from"./utils.154eefbe.js";import{_ as he}from"./freecompress-floor1-1.b700f8a7.js";import{C as $}from"./index.2d9eff2e.js";import{_ as ge}from"./plugin-vueexport-helper.c27b6911.js";import"./event.2c073216.js";import"./isNil.c75b1b34.js";import"./-initCloneObject.b3930885.js";import"./el-loading.fb7b147f.js";import"./request.94eb4bd4.js";import"./godhood.cb4d8fbb.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const Ee=async m=>{try{const d=await(m==null?void 0:m.validate());return Promise.resolve(d)}catch(d){const v=document.getElementsByClassName("is-error");throw v.length>0&&v[0].scrollIntoView({block:"center",behavior:"smooth"}),d}},c=m=>(ie("data-v-206bc896"),m=m(),ce(),m),ve={class:"w-full overflow-auto bg-black"},xe={class:"w-full h-screen bg-black overflow-auto px-12 pb-6 pt-20 relative"},we=c(()=>t("img",{src:he,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2"},null,-1)),ye=c(()=>t("img",{src:J,alt:"",class:"w-full h-full object-contain"},null,-1)),be=[ye],ke={class:"w-full h-full flex items-center"},Ve={class:"w-[480px] h-fit overflow-auto relative px-8 pt-6 pb-13"},Pe={key:0,class:"w-full h-full flex flex-col space-y-2"},De={class:"flex justify-between space-x-2 mb-6"},Ue=c(()=>t("span",{class:"text-sm font-normal text-[#EDEDED]"},"Alrady have an account?",-1)),Ce={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Le=c(()=>t("span",null," Login in",-1)),Ie=c(()=>t("div",{class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},[t("span",{class:"iconfont icon-gengduo11"})],-1)),$e={class:"w-full h-[400px] pb-3 overflow-hidden flex flex-col"},Te=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-email text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Ae=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon--username text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Se=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Be={class:"set_checkbox_sty text-[#2E2E2E]"},Re=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),qe=c(()=>t("div",{class:"flex items-center space-x-2"},[t("span",{class:"iconfont icon-ico text-[#2E2E2E] text-xl"}),t("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Fe={class:"text-opacity-80 text-xs"},je={class:"w-full flex justify-center mb-6 mt-3"},Ke=c(()=>t("span",{class:"font-medium"}," Sign up",-1)),Ye={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Je=c(()=>t("div",{class:"flex flex-col items-center space-y-1"},[t("span",{class:"text-base font-medium text-[#2E2E2E]"}," Registered Successfully "),t("span",{class:"text-sm text-[#EDEDED] font-medium"},"Welcome to the GAEA")],-1)),Me=c(()=>t("span",{class:"font-medium"},"BACK TO LOGIN",-1)),Ne={class:"adaptation-padding pb-[80px]"},Oe=Z({__name:"register",setup(m){const d=_(),v=_(!1),k=_(!1),h=_(!1),f=_(ue()),V=pe(),P=ee();_(!0),_(0);const r=L({email:"",password:"",username:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),T=L({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(o,e,a)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return a();if(!u.test(e))return a(new Error("Please enter a valid email address!"));me({email:e}).then(p=>{p.code===200&&p.success?a():a(new Error(p.msg))}).catch(()=>{a(new Error("Request was aborted."))})},trigger:"blur"}],username:[{required:!0,message:"Please enter a valide username",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(o,e,a)=>{e?fe({username:e}).then(u=>{u.code===200?a():a(new Error(u.msg))}).catch(()=>{a(new Error)}):a()},trigger:"blur"}],password:[{validator:(o,e,a)=>{e===""?a(new Error("Please enter a valide password")):(r.checkList.length!==2&&a(new Error("Your password does not match")),a())},trigger:"blur"}],confirm_Password:[{validator:(o,e,a)=>{e===""?a(new Error("Please input the password again")):e!==r.password?a(new Error("Your password does not match")):a()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),A=()=>{const{password:o}=r,e=de(o);r.checkList=[],e.criteriaMet&&r.checkList.push(f==null?void 0:f.value[0]),e.lengthMet&&r.checkList.push(f==null?void 0:f.value[1])},g=async o=>{try{if(h.value||!o)return;if(!r.doYouAgree){k.value=!0,setTimeout(()=>{k.value=!1},500);return}await Ee(o),h.value=!0;const e={email:r.email.trim(),username:r.username.trim(),password:$.SHA256(r.password).toString($.enc.Hex).trim(),referral_code:r.referral_code.trim(),recaptcha_token:r.recaptcha_token.trim()},a=await _e({...e});h.value=!1,a&&a.code===200?v.value=!0:(ae.error(a.msg),D())}catch(e){console.log(e),h.value=!1,D()}},S=o=>{r.recaptcha_token=o,d.value.clearValidate("recaptcha_token")},D=()=>{r.recaptcha_token="";const o=document.getElementById("register_recaptcha_token");o&&(o.innerHTML="",window.onloadTurnstileCallback())};return te(()=>{r.referral_code=P.query.ref||"",V.clearUserInfo(),V.setInvitationCode(P.query.ref)}),(o,e)=>{const a=Y,u=M,p=N,U=G,B=H,R=z,q=O,C=Q,F=W,j=X;return x(),y("div",ve,[t("div",xe,[we,t("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:e[0]||(e[0]=l=>o.$router.go(0))},be),t("div",ke,[t("div",Ve,[s(v)?(x(),y("div",Ye,[Je,n(C,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:s(h),onClick:e[14]||(e[14]=l=>("navigateTo"in o?o.navigateTo:s(ne))("/login"))},{default:i(()=>[Me]),_:1},8,["loading"])])):(x(),y("div",Pe,[t("div",De,[Ue,t("span",Ce,[Le,n(a,{to:"/login"},{default:i(()=>[Ie]),_:1})])]),t("div",$e,[n(q,{model:s(r),class:"w-full h-full overflow-auto",ref_key:"ruleFormRef",ref:d,rules:s(T),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[n(p,{prop:"email"},{default:i(()=>[n(u,{placeholder:"Enter your email",modelValue:s(r).email,"onUpdate:modelValue":e[1]||(e[1]=l=>s(r).email=l),onKeyup:e[2]||(e[2]=w(l=>("throttle"in o?o.throttle:s(E))(()=>{g(s(d))}),["enter","native"]))},{prefix:i(()=>[Te]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"username"},{default:i(()=>[n(u,{placeholder:"Enter your  username",modelValue:s(r).username,"onUpdate:modelValue":e[3]||(e[3]=l=>s(r).username=l),onKeyup:e[4]||(e[4]=w(l=>("throttle"in o?o.throttle:s(E))(()=>{g(s(d))}),["enter","native"]))},{prefix:i(()=>[Ae]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"password",onInput:A},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",modelValue:s(r).password,"onUpdate:modelValue":e[5]||(e[5]=l=>s(r).password=l),onKeyup:e[6]||(e[6]=w(l=>("throttle"in o?o.throttle:s(E))(()=>{g(s(d))}),["enter","native"])),oncopy:"return false","show-password":""},{prefix:i(()=>[Se]),_:1},8,["modelValue"]),t("div",Be,[n(B,{modelValue:s(r).checkList,"onUpdate:modelValue":e[7]||(e[7]=l=>s(r).checkList=l)},{default:i(()=>[(x(!0),y(se,null,oe(s(f),(l,K)=>(x(),le(U,{label:l,value:l,key:K},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),n(p,{prop:"confirm_Password"},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",onKeyup:e[8]||(e[8]=w(l=>("throttle"in o?o.throttle:s(E))(()=>{g(s(d))}),["enter","native"])),modelValue:s(r).confirm_Password,"onUpdate:modelValue":e[9]||(e[9]=l=>s(r).confirm_Password=l),"show-password":"",oncopy:"return false"},{prefix:i(()=>[Re]),_:1},8,["modelValue"])]),_:1}),n(p,null,{default:i(()=>[n(u,{maxlength:20,placeholder:"Enter Code",modelValue:s(r).referral_code,"onUpdate:modelValue":e[10]||(e[10]=l=>s(r).referral_code=l),onKeyup:e[11]||(e[11]=w(l=>("throttle"in o?o.throttle:s(E))(()=>{g(s(d))}),["enter","native"]))},{prefix:i(()=>[qe]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"recaptcha_token",class:"mt-3 h-[68px]"},{default:i(()=>[n(R,{onToUpdate:S,id:"register_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),t("div",{class:re(["flex items-center space-x-2 text-[#2E2E2E] set_checkbox_sty px-2",{shake:!s(r).doYouAgree&&s(k)}])},[n(U,{modelValue:s(r).doYouAgree,"onUpdate:modelValue":e[12]||(e[12]=l=>s(r).doYouAgree=l)},null,8,["modelValue"]),t("span",Fe,[b(" I have read and agree to "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in o?o.getJumpURL:s(I))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[b(" Terms ")]),_:1},8,["to"]),b(" and "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in o?o.getJumpURL:s(I))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[b(" Privacy Policy ")]),_:1},8,["to"])])],2)]),t("div",je,[n(C,{class:"w-2/3",style:{height:"44px"},color:"#EDEDED",round:"",onClick:e[13]||(e[13]=l=>("throttle"in o?o.throttle:s(E))(()=>{g(s(d))})),loading:s(h)},{default:i(()=>[Ke]),_:1},8,["loading"])]),n(F)]))])])]),t("div",Ne,[n(j)])])}}});const xt=ge(Oe,[["__scopeId","data-v-206bc896"]]);export{xt as default};
