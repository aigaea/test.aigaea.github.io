import{_ as N,a as Y}from"./logo.3d5ca4af.js";import{E as q}from"./el-input.dd3a4118.js";import{C as F,E as J,a as $}from"./index.9c10e34a.js";import{E as M,d as O}from"./el-checkbox.432890f5.js";import{_ as G,a as H}from"./login-successful.17285933.js";import{E as W}from"./el-button.6a2c5232.js";import{I as K,z as h,b9 as X,bn as D,a1 as P,r as Q,N as g,W as w,R as s,x as a,X as l,P as i,az as x,Y as Z,ay as ee,S as te,bf as se,bx as oe,by as ae,bz as re,ba as le,O as ne,bv as ie,bd as ce,be as de,b8 as ue}from"./entry.564334f4.js";import{c as me}from"./passwords.0c085804.js";import{c as pe}from"./dict.2cf83286.js";import{g as V}from"./utils.2993277c.js";import{a as fe,b as _e,_ as C}from"./bg-kuang.1b7f8f91.js";const he=async p=>{try{const f=await(p==null?void 0:p.validate());return Promise.resolve(f)}catch(f){const _=document.getElementsByClassName("is-error");throw _.length>0&&_[0].scrollIntoView({block:"center",behavior:"smooth"}),f}},c=p=>(ce("data-v-0e17eb2c"),p=p(),de(),p),ge={class:"w-full h-screen pb-5"},xe=c(()=>s("img",{src:fe,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1)),ve={class:"w-full h-full flex flex-col overflow-auto"},we=c(()=>s("div",{class:"w-full h-12 text-base text-white font-normal px-12 flex items-center justify-between"},[s("img",{src:Y,alt:"",class:"w-52 h-16 mt-4"})],-1)),be={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},Ee={class:"w-[480px] h-[690px] relative scale-[0.7] sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},ye=c(()=>s("img",{src:_e,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1)),ke={key:0,class:"w-full h-full flex flex-col py-5"},Fe={class:"w-full h-[80px] mt-30 flex flex-col items-center justify-center"},Pe=c(()=>s("div",{class:"text-3xl font-normal text-[#FFE099]"},"Sign UP ",-1)),Ve={class:"flex items-center space-x-2"},Ce=c(()=>s("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Alrady have an account?",-1)),Ue={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},Ae={class:"w-full flex-1 px-12 pb-3 mt-14 overflow-hidden flex flex-col"},Ie=c(()=>s("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),Le=c(()=>s("span",{class:"iconfont icon--username text-[#FFE099] text-xl"},null,-1)),Te=c(()=>s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),Se={class:"set_checkbox_sty"},je=c(()=>s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),ze=c(()=>s("span",{class:"iconfont icon-ico text-[#FFE099] text-xl"},null,-1)),Be={class:"text-opacity-80 text-xs"},Re={class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10"},Ne=c(()=>s("img",{src:C,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Ye=c(()=>s("span",{class:"text-base font-normal text-[#4E4A3C]"},"Sign up",-1)),qe={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Je=se('<div class="w-[266px] h-72" data-v-0e17eb2c><img src="'+H+'" alt="" class="w-full h-full" data-v-0e17eb2c></div><div class="flex flex-col items-center space-y-1" data-v-0e17eb2c><span class="text-base font-normal text-[#FFE099]" data-v-0e17eb2c> Registered Successfully </span><span class="text-sm font-normal text-white" data-v-0e17eb2c>Welcome to the GAEA</span></div>',2),$e={class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10"},Me=c(()=>s("img",{src:C,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Oe=c(()=>s("span",{class:"text-base font-normal text-[#4E4A3C]"},"BACK TO LOGIN",-1)),Ge=K({__name:"register",setup(p){const f=h(),_=h(!1),b=h(!1),v=h(!1),d=h(pe()),U=X(),A=D(),t=P({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),I=P({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(r,e,o)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return o();if(!u.test(e))return o(new Error("Please enter a valid email address!"));oe({email:e}).then(m=>{m.code===200?o():o(new Error(m.msg))}).catch(()=>{o(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(r,e,o)=>{e?ae({username:e}).then(u=>{u.code===200?o():o(new Error(u.msg))}).catch(()=>{o(new Error)}):o()},trigger:"blur"}],password:[{validator:(r,e,o)=>{e===""?o(new Error("Please enter a valide password")):(t.checkList.length!==4&&o(new Error("Your password does not match")),o())},trigger:"blur"}],confirm_Password:[{validator:(r,e,o)=>{e===""?o(new Error("Please input the password again")):e!==t.password?o(new Error("Your password does not match")):o()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),L=()=>{const{password:r}=t,e=me(r);t.checkList=[],e.lowercase&&t.checkList.push(d==null?void 0:d.value[0]),e.uppercase&&t.checkList.push(d==null?void 0:d.value[1]),e.special&&t.checkList.push(d==null?void 0:d.value[2]),e.characters&&t.checkList.push(d==null?void 0:d.value[3])},T=async r=>{try{if(!r)return;if(!t.doYouAgree){b.value=!0,setTimeout(()=>{b.value=!1},500);return}await he(r),v.value=!0;const e={email:t.email.trim(),username:t.uername.trim(),password:F.SHA256(t.password).toString(F.enc.Hex).trim(),referral_code:t.referral_code.trim(),recaptcha_token:t.recaptcha_token.trim()},o=await re({...e});v.value=!1,o.code===200?_.value=!0:(le.error(o.msg),E())}catch(e){console.log(e),v.value=!1,E()}},S=r=>{t.recaptcha_token=r,f.value.clearValidate("recaptcha_token")},E=()=>{t.recaptcha_token="";const r=document.getElementById("register_recaptcha_token");r&&(r.innerHTML="",window.onloadTurnstileCallback())};return Q(()=>{t.referral_code=A.query.ref||"",U.clearUserInfo()}),(r,e)=>{const o=N,u=q,m=J,y=M,j=O,z=G,B=$,k=W;return g(),w("div",ge,[xe,s("div",ve,[we,s("div",be,[s("div",Ee,[ye,a(_)?(g(),w("div",qe,[Je,s("div",$e,[l(k,{type:"primary",onClick:e[8]||(e[8]=n=>("navigateTo"in r?r.navigateTo:a(ie))("/login")),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:i(()=>[Me,Oe]),_:1})])])):(g(),w("div",ke,[s("div",Fe,[Pe,s("div",Ve,[Ce,s("span",Ue,[l(o,{to:"/login"},{default:i(()=>[x("Log in")]),_:1})])])]),s("div",Ae,[l(B,{model:a(t),class:"w-full h-full overflow-auto space-y-7",ref_key:"ruleFormRef",ref:f,rules:a(I),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[l(m,{label:"Email",prop:"email"},{default:i(()=>[l(u,{placeholder:"Enter your email",modelValue:a(t).email,"onUpdate:modelValue":e[0]||(e[0]=n=>a(t).email=n)},{prefix:i(()=>[Ie]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"Username",prop:"uername"},{default:i(()=>[l(u,{placeholder:"Enter your  uername",modelValue:a(t).uername,"onUpdate:modelValue":e[1]||(e[1]=n=>a(t).uername=n)},{prefix:i(()=>[Le]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"Password",prop:"password",onInput:L},{default:i(()=>[l(u,{placeholder:"Enter your password",type:"password",modelValue:a(t).password,"onUpdate:modelValue":e[2]||(e[2]=n=>a(t).password=n),oncopy:"return false","show-password":""},{prefix:i(()=>[Te]),_:1},8,["modelValue"]),s("div",Se,[l(j,{modelValue:a(t).checkList,"onUpdate:modelValue":e[3]||(e[3]=n=>a(t).checkList=n),class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6"},{default:i(()=>[(g(!0),w(Z,null,ee(a(d),(n,R)=>(g(),ne(y,{label:n,value:n,key:R},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(m,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[l(u,{placeholder:"Enter your password",type:"password",modelValue:a(t).confirm_Password,"onUpdate:modelValue":e[4]||(e[4]=n=>a(t).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[je]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:i(()=>[l(u,{placeholder:"Enter Code",modelValue:a(t).referral_code,"onUpdate:modelValue":e[5]||(e[5]=n=>a(t).referral_code=n)},{prefix:i(()=>[ze]),_:1},8,["modelValue"])]),_:1}),l(m,{prop:"recaptcha_token",class:"mt-8 h-[68px]"},{default:i(()=>[l(z,{onToUpdate:S,id:"register_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),s("div",{class:te(["flex items-center space-x-2 text-white",{shake:!a(t).doYouAgree&&a(b)}])},[l(y,{modelValue:a(t).doYouAgree,"onUpdate:modelValue":e[6]||(e[6]=n=>a(t).doYouAgree=n)},null,8,["modelValue"]),s("span",Be,[x(" I have read and agree to "),l(o,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:a(V))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[x(" Terms ")]),_:1},8,["to"]),x(" and "),l(o,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:a(V))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[x(" Privacy Policy ")]),_:1},8,["to"])])],2)]),s("div",Re,[l(k,{type:"primary",loading:a(v),onClick:e[7]||(e[7]=n=>T(a(f))),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:i(()=>[Ne,Ye]),_:1},8,["loading"])])]))])])])])}}});const it=ue(Ge,[["__scopeId","data-v-0e17eb2c"]]);export{it as default};
