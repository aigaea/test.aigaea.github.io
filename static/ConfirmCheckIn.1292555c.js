import{E as g}from"./el-button.eb613bfd.js";import{E}from"./el-overlay.6967c887.js";import{_ as y}from"./client-only.d39a53e4.js";import{d as B,r as v,o as a,A as C,m as l,l as d,e as i,c as r,G as t,k as D,b as o,p as k,h as I}from"./entry.63961fae.js";import{u as w}from"./godhood.7ee0849d.js";import{_ as O}from"./plugin-vueexport-helper.c27b6911.js";import"./focus-trap.d39f7d8d.js";import"./isNil.c75b1b34.js";import"./event.2c073216.js";const e=s=>(k("data-v-072a4874"),s=s(),I(),s),V=e(()=>o("div",{class:"text-center text-[30px] font-[700] uppercase text-[#EBEBEB]"},[t(" Send emotional "),o("br"),t(" coordinates to AI ")],-1)),G={key:0,class:"text-[18px] text-[#EDEDED] py-6 px-12"},N=e(()=>o("span",{class:"text-[28px] font-bold"},"1000",-1)),S=e(()=>o("span",{class:"text-[28px] font-bold"},"1",-1)),$={key:1,class:"text-[18px] text-center text-[#EDEDED] py-6 px-12 mx-auto space-x-2"},P=e(()=>o("span",null," You have not yet obtained a GODHOOD ID. You will spend",-1)),Y=e(()=>o("span",{class:"font-bold"},"2500",-1)),A=e(()=>o("span",null,[t("points to obtain "),o("span",{class:"font-bold"},"1"),t(" soul point. Minting your ID, you only need to spend")],-1)),H=e(()=>o("span",{class:"font-bold"},"1000",-1)),M=e(()=>o("span",null,[t("points to get "),o("span",{class:"font-bold"},"1"),t(" soul point.")],-1)),j=[P,Y,A,H,M],T={class:"flex items-center justify-center pb-5"},q=e(()=>o("span",{class:"text-[16px] leading-5 text-[#EBEBEB] cursor-pointer"},"Confirm",-1)),z=e(()=>o("span",{class:"text-[16px] leading-5 text-[#EBEBEB] cursor-pointer"},"Cancel",-1)),F=B({__name:"ConfirmCheckIn",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog","update:confirm"],setup(s,{emit:c}){const p=w(),f=v(!1),_=()=>{c("update:closeDialog")};return(u,n)=>{const m=g,x=E,h=y;return a(),C(h,null,{default:l(()=>[d(x,{class:"border-box",draggable:"","model-value":u.$props.dialogVisible,"show-close":!1,width:"650px",style:{background:"rgba(255, 255, 255, 0.08)","backdrop-filter":"blur(15px)",border:"none","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:_,"append-to-body":!0},{default:l(()=>[V,i(p).getIsPayCard?(a(),r("div",G,[t(" You will spend "),N,t(" points to send emotional coordinates and gain "),S,t(" soul point. ")])):(a(),r("div",$,j)),i(p).getIsPayCard?D("",!0):(a(),r("div",{key:2,class:"text-[#EBEBEB] text-center underline underline-offset-4 mb-6 cursor-pointer hover:scale-[1.1] duration-700",onClick:n[0]||(n[0]=b=>u.$router.push("/godhoodId"))}," Mint my GODHOOD ID ")),o("div",T,[d(m,{class:"hover:scale-[1.1] duration-700",color:"none",loading:i(f),onClick:n[1]||(n[1]=b=>c("update:confirm"))},{default:l(()=>[q]),_:1},8,["loading"]),d(m,{class:"hover:scale-[1.1] duration-700",color:"none",onClick:_},{default:l(()=>[z]),_:1})])]),_:1},8,["model-value"])]),_:1})}}});const oo=O(F,[["__scopeId","data-v-072a4874"]]);export{oo as default};
