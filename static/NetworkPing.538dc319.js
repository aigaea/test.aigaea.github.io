import{E as b}from"./el-input.51dbf6d8.js";import{d as w,u as g,r,q as v,an as C,a as k,c as y,b as e,t as d,e as s,af as N,s as u,y as U,g as D,w as E,ab as S,F as V,E as B}from"./entry.be859d6b.js";import{n as I}from"./dashboard.8f02fecd.js";import"./use-form-item.54cbd813.js";const M=""+globalThis.__publicAssetsURL("images/dashboard/equipment.png"),P={class:"w-[30%] pb-[28%] relative"},j=["src"],q={class:"flex flex-col space-y-2"},z={class:"flex items-center px-5 space-x-10"},F=e("span",{class:"iconfont icon-wifi text-[#30b60b] text-5xl font-bold"},null,-1),R={class:"text-[#d9af80]"},$={class:"text-4xl font-bold"},A=e("span",{class:"text-xs"},"%",-1),H={class:"flex items-center space-x-5 text-white"},L=e("span",{class:"text-[#DCDCDC]"},"Network Score",-1),T={class:"flex items-center space-x-5 text-white"},G=e("img",{src:M,alt:"",class:"w-10 h-10"},null,-1),J={class:"text-white space-x-1 text-center"},K=e("span",{class:"text-base font-bold"},"IP:",-1),O={class:"text-base font-normal"},Z=w({__name:"NetworkPing",props:{data:{default:[]}},setup(_){const l=_,n=g(),p=n.getUuidv4,a=r(!0),i=v(()=>l.data.find(t=>t.browser_id===p)||l.data[0]||{}),o=r("");C(()=>i.value,t=>{o.value=t.name||""},{immediate:!0});const f=()=>{a.value=!a.value},m=async()=>{const t=await I({uid:n.getUserInfo.uid,name:o.value,browser_id:n.getUuidv4});a.value=!0,t.code===200&&B.success(t.data)};return(t,c)=>{const x=b;return k(),y(V,null,[e("div",P,[e("img",{src:"/images/dashboard/on_connection.gif",alt:"",class:"w-full h-full absolute top-0 left-0 object-contain"},null,8,j)]),e("div",q,[e("div",z,[F,e("div",R,[e("span",$,d(s(n).getScore||s(i).ip_score||0),1),A])]),e("div",H,[N(t.$slots,"default"),L]),e("div",T,[e("div",{class:u(["max-w-[55%] p-1 h-6 rounded border border-[#303035] flex items-center justify-between el-input-no-border duration-500",s(a)?"text-[#333]":"text-white border-white"]),style:U({"caret-color":s(a)?"transparent":"white"})},[D(x,{class:"w-full h-6",modelValue:s(o),"onUpdate:modelValue":c[0]||(c[0]=h=>S(o)?o.value=h:null),disabled:s(a),onBlur:m},{suffix:E(()=>[e("span",{class:u(["iconfont icon-edit text-xs cursor-pointer leading-[12px]",s(a)?"text-[#333]":"text-white border-white"]),onClick:f},null,2)]),_:1},8,["modelValue","disabled"])],6),G]),e("div",J,[K,e("span",O,d(`${s(i).ip_address}`),1)])])],64)}}});export{Z as default};
