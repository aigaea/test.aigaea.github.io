import{_ as K,a as Y,b as J}from"./Footer.vuevuetypescriptsetuptruelang.fc93bdae.js";import{a as M,E as N}from"./el-input.39d85cfd.js";import{E as O,a as G}from"./el-form.014f984d.js";import{E as H,a as W}from"./el-checkbox.8a308b60.js";import{_ as z,a as Q}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.cddfd8ce.js";import{d as X,r as v,a as Z,W as L,f as ee,o as x,c as b,b as s,e as t,k as n,l as i,ai as w,F as te,C as se,i as oe,a4 as y,E as re,A as ae,aj as le,p as ne,h as ie}from"./entry.3b866f49.js";import{c as de}from"./passwords.46d2a945.js";import{c as ce}from"./dict.2ebd4a6f.js";import{u as ue}from"./user.28799af6.js";import{v as pe,b as me,d as fe}from"./user.d18b2f2a.js";import{t as g}from"./throttle.3832cdac.js";import{g as $}from"./utils.c19ef64d.js";import{_ as _e}from"./freecompress-floor1-1.786601e4.js";import{C as I}from"./index.1735d320.js";import{_ as he}from"./plugin-vueexport-helper.c27b6911.js";import"./request.99a15d98.js";const ge=async m=>{try{const c=await(m==null?void 0:m.validate());return Promise.resolve(c)}catch(c){const E=document.getElementsByClassName("is-error");throw E.length>0&&E[0].scrollIntoView({block:"center",behavior:"smooth"}),c}},d=m=>(ne("data-v-a25e9f60"),m=m(),ie(),m),Ee={class:"w-full overflow-auto bg-black"},ve={class:"w-full h-screen bg-black overflow-auto px-12 pb-6 pt-20 relative"},xe=d(()=>s("img",{src:_e,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2"},null,-1)),we=d(()=>s("img",{src:J,alt:"",class:"w-full h-full object-contain"},null,-1)),be=[we],ye={class:"w-full h-full flex items-center"},ke={class:"w-[480px] h-fit overflow-auto relative px-8 pt-6 pb-13"},Ve={key:0,class:"w-full h-full flex flex-col space-y-2"},Pe={class:"flex justify-between space-x-2 mb-6"},De=d(()=>s("span",{class:"text-sm font-normal text-[#EDEDED]"},"Alrady have an account?",-1)),Ce={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Ue=d(()=>s("span",null," Login in",-1)),Le=d(()=>s("div",{class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},[s("span",{class:"iconfont icon-gengduo11"})],-1)),$e={class:"w-full h-[380px] pb-3 overflow-hidden flex flex-col"},Ie=d(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-email text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Ae=d(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon--username text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Re=d(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Se={class:"set_checkbox_sty text-[#2E2E2E]"},Te=d(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),qe=d(()=>s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-ico text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),Be={class:"text-opacity-80 text-xs"},Fe={class:"w-full flex justify-center mb-6 mt-3"},je=d(()=>s("span",{class:"font-medium"}," Sign up",-1)),Ke={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Ye=d(()=>s("div",{class:"flex flex-col items-center space-y-1"},[s("span",{class:"text-base font-medium text-[#2E2E2E]"}," Registered Successfully "),s("span",{class:"text-sm text-[#EDEDED] font-medium"},"Welcome to the GAEA")],-1)),Je=d(()=>s("span",{class:"font-medium"},"BACK TO LOGIN",-1)),Me={class:"adaptation-padding pb-[80px]"},Ne=X({__name:"register",setup(m){const c=v(),E=v(!1),k=v(!1),f=v(!1),_=v(ce()),V=ue(),P=Z(),o=L({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),A=L({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(r,e,a)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return a();if(!u.test(e))return a(new Error("Please enter a valid email address!"));pe({email:e}).then(p=>{p.code===200&&p.success?a():a(new Error(p.msg))}).catch(()=>{a(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(r,e,a)=>{e?me({username:e}).then(u=>{u.code===200?a():a(new Error(u.msg))}).catch(()=>{a(new Error)}):a()},trigger:"blur"}],password:[{validator:(r,e,a)=>{e===""?a(new Error("Please enter a valide password")):(o.checkList.length!==2&&a(new Error("Your password does not match")),a())},trigger:"blur"}],confirm_Password:[{validator:(r,e,a)=>{e===""?a(new Error("Please input the password again")):e!==o.password?a(new Error("Your password does not match")):a()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),R=()=>{const{password:r}=o,e=de(r);o.checkList=[],e.criteriaMet&&o.checkList.push(_==null?void 0:_.value[0]),e.lengthMet&&o.checkList.push(_==null?void 0:_.value[1])},h=async r=>{o.recaptcha_token=window.grecaptcha.getResponse();try{if(!r)return;if(!o.doYouAgree){k.value=!0,setTimeout(()=>{k.value=!1},500);return}await ge(r),f.value=!0;const e={email:o.email.trim(),username:o.uername.trim(),password:I.SHA256(o.password).toString(I.enc.Hex).trim(),referral_code:o.referral_code.trim(),recaptcha_token:o.recaptcha_token.trim()},a=await fe({...e});f.value=!1,a&&a.code===200?E.value=!0:(re.error(a.msg),D())}catch(e){console.log(e),f.value=!1,D()}},D=()=>{o.recaptcha_token="";const r=document.getElementById("register_recaptcha_token");r&&(r.innerHTML="",window.onloadTurnstileCallback())};return ee(()=>{o.referral_code=P.query.ref||"",V.clearUserInfo(),V.setInvitationCode(P.query.ref)}),(r,e)=>{const a=K,u=M,p=O,C=H,S=W,T=z,q=G,U=N,B=Q,F=Y;return x(),b("div",Ee,[s("div",ve,[xe,s("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:e[0]||(e[0]=l=>r.$router.go(0))},be),s("div",ye,[s("div",ke,[t(E)?(x(),b("div",Ke,[Ye,n(U,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(f),disabled:t(f),onClick:e[14]||(e[14]=l=>("navigateTo"in r?r.navigateTo:t(le))("/login"))},{default:i(()=>[Je]),_:1},8,["loading","disabled"])])):(x(),b("div",Ve,[s("div",Pe,[De,s("span",Ce,[Ue,n(a,{to:"/login"},{default:i(()=>[Le]),_:1})])]),s("div",$e,[n(q,{model:t(o),class:"w-full h-full overflow-auto",ref_key:"ruleFormRef",ref:c,rules:t(A),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[n(p,{prop:"email"},{default:i(()=>[n(u,{placeholder:"Enter your email",modelValue:t(o).email,"onUpdate:modelValue":e[1]||(e[1]=l=>t(o).email=l),onKeyup:e[2]||(e[2]=w(l=>("throttle"in r?r.throttle:t(g))(()=>{h(t(c))}),["enter","native"]))},{prefix:i(()=>[Ie]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"uername"},{default:i(()=>[n(u,{placeholder:"Enter your  uername",modelValue:t(o).uername,"onUpdate:modelValue":e[3]||(e[3]=l=>t(o).uername=l),onKeyup:e[4]||(e[4]=w(l=>("throttle"in r?r.throttle:t(g))(()=>{h(t(c))}),["enter","native"]))},{prefix:i(()=>[Ae]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"password",onInput:R},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",modelValue:t(o).password,"onUpdate:modelValue":e[5]||(e[5]=l=>t(o).password=l),onKeyup:e[6]||(e[6]=w(l=>("throttle"in r?r.throttle:t(g))(()=>{h(t(c))}),["enter","native"])),oncopy:"return false","show-password":""},{prefix:i(()=>[Re]),_:1},8,["modelValue"]),s("div",Se,[n(S,{modelValue:t(o).checkList,"onUpdate:modelValue":e[7]||(e[7]=l=>t(o).checkList=l)},{default:i(()=>[(x(!0),b(te,null,se(t(_),(l,j)=>(x(),ae(C,{label:l,value:l,key:j},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),n(p,{prop:"confirm_Password"},{default:i(()=>[n(u,{maxlength:50,placeholder:"Enter your password",type:"password",onKeyup:e[8]||(e[8]=w(l=>("throttle"in r?r.throttle:t(g))(()=>{h(t(c))}),["enter","native"])),modelValue:t(o).confirm_Password,"onUpdate:modelValue":e[9]||(e[9]=l=>t(o).confirm_Password=l),"show-password":"",oncopy:"return false"},{prefix:i(()=>[Te]),_:1},8,["modelValue"])]),_:1}),n(p,null,{default:i(()=>[n(u,{maxlength:20,placeholder:"Enter Code",modelValue:t(o).referral_code,"onUpdate:modelValue":e[10]||(e[10]=l=>t(o).referral_code=l),onKeyup:e[11]||(e[11]=w(l=>("throttle"in r?r.throttle:t(g))(()=>{h(t(c))}),["enter","native"]))},{prefix:i(()=>[qe]),_:1},8,["modelValue"])]),_:1}),n(p,{prop:"recaptcha_token",class:"mt-3 h-[68px]"},{default:i(()=>[n(T)]),_:1})]),_:1},8,["model","rules"]),s("div",{class:oe(["flex items-center space-x-2 text-[#2E2E2E] set_checkbox_sty px-2",{shake:!t(o).doYouAgree&&t(k)}])},[n(C,{modelValue:t(o).doYouAgree,"onUpdate:modelValue":e[12]||(e[12]=l=>t(o).doYouAgree=l)},null,8,["modelValue"]),s("span",Be,[y(" I have read and agree to "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:t($))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[y(" Terms ")]),_:1},8,["to"]),y(" and "),n(a,{class:"underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:t($))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[y(" Privacy Policy ")]),_:1},8,["to"])])],2)]),s("div",Fe,[n(U,{class:"w-2/3",style:{height:"44px"},color:"#EDEDED",round:"",onClick:e[13]||(e[13]=l=>("throttle"in r?r.throttle:t(g))(()=>{h(t(c))})),loading:t(f),disabled:t(f)},{default:i(()=>[je]),_:1},8,["loading","disabled"])]),n(B)]))])])]),s("div",Me,[n(F)])])}}});const pt=he(Ne,[["__scopeId","data-v-a25e9f60"]]);export{pt as default};
