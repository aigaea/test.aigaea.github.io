import{_ as j,a as I}from"./logo.c37dda44.js";import{E as T}from"./el-input.0881ba3d.js";import{a as $,E as M}from"./el-checkbox.acfeeabc.js";import{E as S,a as U}from"./el-form.4208b5d0.js";import{E as A}from"./el-button.eb613bfd.js";import{_ as N}from"./client-only.d39a53e4.js";import{_ as H,t as Y}from"./Footer.vuevuetypescriptsetuptruelang.2d852640.js";import{d as q,r as m,a as z,I as g,o as _,c as x,b as s,l,m as i,e as a,F as G,B as J,E as p,ak as O,A as Z}from"./entry.63961fae.js";import{c as K}from"./passwords.46d2a945.js";import{c as Q}from"./dict.ce0f2911.js";import{u as W}from"./user.d886469b.js";import{h as X}from"./user.dc7af34e.js";import{C as E}from"./index.2d9eff2e.js";import"./event.2c073216.js";import"./isNil.c75b1b34.js";import"./-initCloneObject.652938a3.js";import"./request.0d03ec7e.js";import"./godhood.7ee0849d.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const ee={class:"w-full overflow-auto bg-black"},se={class:"w-full h-screen pb-5 bg-black"},oe=s("img",{src:I,alt:"",class:"w-full h-full object-contain"},null,-1),te=[oe],re={class:"w-full h-full flex justify-end items-center overflow-auto pr-32"},ae={class:"w-[480px] h-fit px-8 pt-6 pb-13 space-y-8 sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100 rounded-lg"},ne={class:"w-full flex items-center justify-between py-2"},le=s("div",{class:"text-lg font-light text-[#EDEDED]"},"Reset your password",-1),ie={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},ce=s("span",{class:"text-lg font-light"}," Login in",-1),de=s("div",{class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},[s("span",{class:"iconfont icon-gengduo11"})],-1),pe={class:"w-full flex-1"},ue=s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1),me={class:"set_checkbox_sty"},_e=s("div",{class:"flex items-center space-x-2"},[s("span",{class:"iconfont icon-cfmpassword text-[#2E2E2E] text-xl"}),s("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1),fe={class:"w-full flex justify-center mb-6 mt-3"},we=s("span",{class:"font-medium"}," Save",-1),he={class:"adaptation-padding pb-[80px]"},Ne=q({__name:"reset",emits:["update:closeDialog"],setup(ge,{emit:xe}){const f=m(),d=m(!1),c=m(Q());z();const u=W(),t=g({password_new:"",confirm_Password:"",checkList:[]}),v=g({password_new:[{validator:(r,e,o)=>{e===""?o(new Error("Please enter a valide password")):(t.checkList.length!==2&&o(new Error("Your password does not match")),o())},trigger:"blur"},{min:8,max:20,message:"Password length must be between 8 and 20 characters",trigger:"blur"}],confirm_Password:[{validator:(r,e,o)=>{e===""?o(new Error("Please input the password again")):e!==t.password_new?o(new Error("Your password does not match")):o()},trigger:"blur"}]}),b=()=>{const{password_new:r}=t,e=K(r);t.checkList=[],e.criteriaMet&&t.checkList.push(c==null?void 0:c.value[0]),e.lengthMet&&t.checkList.push(c==null?void 0:c.value[1])},k=r=>/^[A-Za-z0-9_-]+$/.test(r),y=r=>{const e=r.split(".");if(e.length!==3)return!1;for(const o of e)if(!k(o))return!1;return!0},P=async r=>{r&&await r.validate(async e=>{if(e){if(d.value)return;try{if(!u.getToken)return p.warning("Invalid link");if(!y(u.getToken))return p.warning("Parameter error");d.value=!0;const o=await X({token:u.getToken||"",password_new:E.SHA256(t.password_new).toString(E.enc.Hex)});d.value=!1,o&&o.code===200?(p.success(o.msg),O("/login")):p.error(o.msg)}catch(o){console.log(o),d.value=!1}}})};return(r,e)=>{const o=j,w=T,D=M,C=$,h=S,L=U,V=A,B=N,F=H;return _(),x("div",ee,[s("div",se,[s("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:e[0]||(e[0]=n=>r.$router.go(0))},te),l(B,null,{default:i(()=>[s("div",re,[s("div",ae,[s("div",ne,[le,s("span",ie,[ce,l(o,{to:"/login"},{default:i(()=>[de]),_:1})])]),s("div",pe,[l(L,{model:a(t),class:"space-y-8",ref_key:"ruleFormRef",ref:f,rules:a(v),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[l(h,{label:"Password",prop:"password_new",onInput:b},{default:i(()=>[l(w,{placeholder:"Enter your password",type:"password",modelValue:a(t).password_new,"onUpdate:modelValue":e[1]||(e[1]=n=>a(t).password_new=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[ue]),_:1},8,["modelValue"]),s("div",me,[l(C,{modelValue:a(t).checkList,"onUpdate:modelValue":e[2]||(e[2]=n=>a(t).checkList=n)},{default:i(()=>[(_(!0),x(G,null,J(a(c),(n,R)=>(_(),Z(D,{label:n,value:n,key:R},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(h,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[l(w,{placeholder:"Enter your password",type:"password",modelValue:a(t).confirm_Password,"onUpdate:modelValue":e[3]||(e[3]=n=>a(t).confirm_Password=n),"show-password":"",oncopy:"return false"},{prefix:i(()=>[_e]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),s("div",fe,[l(V,{class:"w-2/3",style:{height:"44px"},color:"#EDEDED",round:"",onClick:e[4]||(e[4]=n=>("throttle"in r?r.throttle:a(Y))(()=>{P(a(f))})),loading:a(d)},{default:i(()=>[we]),_:1},8,["loading"])])])])]),_:1})]),s("div",he,[l(F)])])}}});export{Ne as default};
