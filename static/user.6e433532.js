import{B as b,f as t,g as n,C as A,w as B}from"./entry.02a4ea65.js";const q=b("user",()=>{const a=t(""),l=t({}),u=t(""),v=t(!0),s=t(3e4),o=t(null),c=t(null),r=t(),g=n(()=>a.value),d=n(()=>l.value),f=n(()=>u.value),p=n(()=>v.value),P=n(()=>s.value),m=n(()=>o.value),U=n(()=>c.value),k=n(()=>r.value),w=e=>{a.value=e},C=e=>{v.value=e},S=e=>{u.value=e},T=e=>{l.value=e},h=e=>{r.value=e},x=e=>{s.value=e},D=e=>{o.value=e},V=e=>{c.value=e},_=e=>{i();const I=()=>{o.value=setInterval(()=>{e()},s.value)};I(),B(s,(O,W)=>{i(),I()})},i=()=>{o.value&&(clearInterval(o.value),o.value=null)};return{token:a,userInfo:l,pingInfo:c,uuidv4:u,interval:s,pingIntervalId:o,disconnect:v,invitationCode:r,getToken:g,getUserInfo:d,getUuidv4:f,getPingInfo:U,getDisconnect:p,getPingIntervalId:m,getPingInterval:P,getInvitationCode:k,setInvitationCode:h,setToken:w,setUserInfo:T,setUuidv4:S,setDisconnect:C,setPingInfo:V,setPingIntervalId:D,clearUserInfo:()=>{a.value="",u.value="",v.value=!0,l.value={},i(),s.value=3e4,localStorage.setItem("gaea_token",""),localStorage.setItem("browser_id",""),c.value=null},setPingInterval:x,setPingIntervalTime:_,clearPingIntervalTime:i}},{persist:[{paths:["token","userInfo","uuidv4","disconnect","interval","pingIntervalId","invitationCode","pingInfo"],storage:A.cookiesWithOptions({maxAge:604800})}]});export{q as u};
