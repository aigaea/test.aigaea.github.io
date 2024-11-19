import{a as j,_ as T}from"./logo.13a7d9ca.js";import{E as J,t as g}from"./throttle.1c60ea09.js";import{c as M,E as H,a as O}from"./el-form.6c8edd70.js";import{E as G,a as z}from"./el-checkbox.a9ab0dcd.js";import{_ as W,a as X,b as D}from"./login-successful.5221567b.js";import{_ as Q}from"./Btn.vuevuetypescriptsetuptruelang.071d0fad.js";import{d as Z,f as w,a as ee,G as L,q as te,o as x,c as b,b as l,e as t,i as n,j as i,H as y,af as E,X as oe,Y as se,n as re,l as ae,E as le,m as ne,ag as ie,z as de,A as ce}from"./entry.e22b88b6.js";import{c as ue}from"./passwords.46d2a945.js";import{u as me}from"./user.f5eb9062.js";import{v as pe,b as fe,d as _e}from"./user.5e80e708.js";import{g as B}from"./utils.8345021d.js";import{_ as he}from"./bg-img.ed2002a8.js";import{C as I}from"./index.1735d320.js";import{_ as ge}from"./plugin-vueexport-helper.c27b6911.js";import"./request.d0335fdc.js";const ve=async p=>{try{const d=await(p==null?void 0:p.validate());return Promise.resolve(d)}catch(d){const v=document.getElementsByClassName("is-error");throw v.length>0&&v[0].scrollIntoView({block:"center",behavior:"smooth"}),d}},c=p=>(de("data-v-fe178f46"),p=p(),ce(),p),we={class:"w-full h-screen bg-black overflow-auto"},xe=c(()=>l("video",{src:he,muted:"",autoplay:"",loop:"",playsinline:"",class:"w-full h-full fixed inset-0 object-cover"},null,-1)),ye=c(()=>l("img",{src:T,alt:"",class:"fixed top-8 left-8 w-52 h-16"},null,-1)),Ee={class:"w-full h-full flex justify-end pr-32 items-center"},be={class:"w-[480px] h-fit overflow-auto relative px-8 pt-6 pb-13 scale-[0.7] sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100 rounded-lg"},ke=c(()=>l("div",{class:"flex items-center justify-center"},[l("img",{src:T,alt:"",class:"w-52 h-16"})],-1)),Fe={key:0,class:"w-full h-full flex flex-col space-y-2"},Ve={class:"w-full flex flex-col items-center justify-center"},Pe=c(()=>l("div",{class:"text-3xl font-normal text-[#FFE099]"},"Sign UP ",-1)),Ue={class:"flex items-center space-x-2"},Ce=c(()=>l("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Alrady have an account?",-1)),Le={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},Be={class:"w-full h-[380px] pb-3 overflow-hidden flex flex-col"},Ie=c(()=>l("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),Te=c(()=>l("span",{class:"iconfont icon--username text-[#FFE099] text-xl"},null,-1)),Ae=c(()=>l("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),$e={class:"set_checkbox_sty"},Se=c(()=>l("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),qe=c(()=>l("span",{class:"iconfont icon-ico text-[#FFE099] text-xl"},null,-1)),Re={class:"text-opacity-80 text-xs"},Ye=c(()=>l("span",{class:"text-lg",style:{"letter-spacing":"0.1em"}},"Sign up",-1)),Ke={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},Ne=ae('<div class="w-[266px] h-72" data-v-fe178f46><img src="'+D+'" alt="" class="w-full h-full" data-v-fe178f46></div><div class="flex flex-col items-center space-y-1" data-v-fe178f46><span class="text-base font-normal text-[#FFE099]" data-v-fe178f46> Registered Successfully </span><span class="text-sm font-normal text-white" data-v-fe178f46>Welcome to the GAEA</span></div>',2),je=c(()=>l("span",{class:"text-lg",style:{"letter-spacing":"0.1em"}},"BACK TO LOGIN",-1)),Je=Z({__name:"register",setup(p){const d=w(),v=w(!1),k=w(!1),f=w(!1),_=w(M()),F=me(),V=ee(),s=L({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),A=L({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(o,e,r)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return r();if(!u.test(e))return r(new Error("Please enter a valid email address!"));pe({email:e}).then(m=>{m.code===200&&m.success?r():r(new Error(m.msg))}).catch(()=>{r(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(o,e,r)=>{e?fe({username:e}).then(u=>{u.code===200?r():r(new Error(u.msg))}).catch(()=>{r(new Error)}):r()},trigger:"blur"}],password:[{validator:(o,e,r)=>{e===""?r(new Error("Please enter a valide password")):(s.checkList.length!==2&&r(new Error("Your password does not match")),r())},trigger:"blur"}],confirm_Password:[{validator:(o,e,r)=>{e===""?r(new Error("Please input the password again")):e!==s.password?r(new Error("Your password does not match")):r()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),$=()=>{const{password:o}=s,e=ue(o);s.checkList=[],e.criteriaMet&&s.checkList.push(_==null?void 0:_.value[0]),e.lengthMet&&s.checkList.push(_==null?void 0:_.value[1])},h=async o=>{try{if(!o)return;if(!s.doYouAgree){k.value=!0,setTimeout(()=>{k.value=!1},500);return}await ve(o),f.value=!0;const e={email:s.email.trim(),username:s.uername.trim(),password:I.SHA256(s.password).toString(I.enc.Hex).trim(),referral_code:s.referral_code.trim(),recaptcha_token:s.recaptcha_token.trim()},r=await _e({...e});f.value=!1,r.code===200?v.value=!0:(le.error(r.msg),P())}catch(e){console.log(e),f.value=!1,P()}},S=o=>{s.recaptcha_token=o,d.value.clearValidate("recaptcha_token")},P=()=>{s.recaptcha_token="";const o=document.getElementById("register_recaptcha_token");o&&(o.innerHTML="",window.onloadTurnstileCallback())};return te(()=>{s.referral_code=V.query.ref||"",F.clearUserInfo(),F.setInvitationCode(V.query.ref)}),(o,e)=>{const r=j,u=J,m=H,U=G,q=z,R=W,Y=O,K=X,C=Q;return x(),b("div",we,[xe,ye,l("div",Ee,[l("div",be,[ke,t(v)?(x(),b("div",Ke,[Ne,n(C,{style:{height:"45px"},round:!1,bg:"transparent",hoverBg:"transparent",border:"1px solid #ffffffaf",hoverColor:"#FFE099",hoverBgBorder:"1px solid #FFE099","btn-loading":t(f),disabled:t(f),title:"","hover-title":"",onClick:e[13]||(e[13]=a=>("navigateTo"in o?o.navigateTo:t(ie))("/login"))},{default:i(()=>[je]),_:1},8,["btn-loading","disabled"])])):(x(),b("div",Fe,[l("div",Ve,[Pe,l("div",Ue,[Ce,l("span",Le,[n(r,{to:"/login"},{default:i(()=>[y("Log in")]),_:1})])])]),l("div",Be,[n(Y,{model:t(s),class:"w-full h-full overflow-auto",ref_key:"ruleFormRef",ref:d,rules:t(A),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[n(m,{label:"Email",prop:"email"},{default:i(()=>[n(u,{placeholder:"Enter your email",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=a=>t(s).email=a),onKeyup:e[1]||(e[1]=E(a=>("throttle"in o?o.throttle:t(g))(()=>{h(t(d))}),["enter","native"]))},{prefix:i(()=>[Ie]),_:1},8,["modelValue"])]),_:1}),n(m,{label:"Username",prop:"uername"},{default:i(()=>[n(u,{placeholder:"Enter your  uername",modelValue:t(s).uername,"onUpdate:modelValue":e[2]||(e[2]=a=>t(s).uername=a),onKeyup:e[3]||(e[3]=E(a=>("throttle"in o?o.throttle:t(g))(()=>{h(t(d))}),["enter","native"]))},{prefix:i(()=>[Te]),_:1},8,["modelValue"])]),_:1}),n(m,{label:"Password",prop:"password",onInput:$},{default:i(()=>[n(u,{placeholder:"Enter your password",type:"password",modelValue:t(s).password,"onUpdate:modelValue":e[4]||(e[4]=a=>t(s).password=a),onKeyup:e[5]||(e[5]=E(a=>("throttle"in o?o.throttle:t(g))(()=>{h(t(d))}),["enter","native"])),oncopy:"return false","show-password":""},{prefix:i(()=>[Ae]),_:1},8,["modelValue"]),l("div",$e,[n(q,{modelValue:t(s).checkList,"onUpdate:modelValue":e[6]||(e[6]=a=>t(s).checkList=a)},{default:i(()=>[(x(!0),b(oe,null,se(t(_),(a,N)=>(x(),ne(U,{label:a,value:a,key:N},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),n(m,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[n(u,{placeholder:"Enter your password",type:"password",onKeyup:e[7]||(e[7]=E(a=>("throttle"in o?o.throttle:t(g))(()=>{h(t(d))}),["enter","native"])),modelValue:t(s).confirm_Password,"onUpdate:modelValue":e[8]||(e[8]=a=>t(s).confirm_Password=a),"show-password":"",oncopy:"return false"},{prefix:i(()=>[Se]),_:1},8,["modelValue"])]),_:1}),n(m,null,{default:i(()=>[n(u,{placeholder:"Enter Code",modelValue:t(s).referral_code,"onUpdate:modelValue":e[9]||(e[9]=a=>t(s).referral_code=a),onKeyup:e[10]||(e[10]=E(a=>("throttle"in o?o.throttle:t(g))(()=>{h(t(d))}),["enter","native"]))},{prefix:i(()=>[qe]),_:1},8,["modelValue"])]),_:1}),n(m,{prop:"recaptcha_token",class:"mt-8 h-[68px]"},{default:i(()=>[n(R,{onToUpdate:S,id:"register_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),n(K)]),l("div",{class:re(["flex items-center space-x-2 text-white",{shake:!t(s).doYouAgree&&t(k)}])},[n(U,{modelValue:t(s).doYouAgree,"onUpdate:modelValue":e[11]||(e[11]=a=>t(s).doYouAgree=a)},null,8,["modelValue"]),l("span",Re,[y(" I have read and agree to "),n(r,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in o?o.getJumpURL:t(B))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[y(" Terms ")]),_:1},8,["to"]),y(" and "),n(r,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in o?o.getJumpURL:t(B))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[y(" Privacy Policy ")]),_:1},8,["to"])])],2),n(C,{style:{height:"45px"},round:!1,bg:"transparent",hoverBg:"transparent",border:"1px solid #ffffffaf",hoverColor:"#FFE099",hoverBgBorder:"1px solid #FFE099","btn-loading":t(f),disabled:t(f),title:"","hover-title":"",onClickHandle:e[12]||(e[12]=a=>("throttle"in o?o.throttle:t(g))(()=>{h(t(d))}))},{default:i(()=>[Ye]),_:1},8,["btn-loading","disabled"])]))])])])}}});const dt=ge(Je,[["__scopeId","data-v-fe178f46"]]);export{dt as default};
