import{bL as G,r as t,s as o,bM as K,w as H}from"./entry.e1b27368.js";const z=G("user",()=>{const l=t(""),r=t({}),s=t(""),v=t(!0),a=t(600),n=t(null),c=t(null),m=t(),S=t("1.0.1"),I=t(!1),i=t(0),u=t(),A=o(()=>l.value),f=o(()=>r.value),T=o(()=>s.value),_=o(()=>v.value),R=o(()=>a.value),N=o(()=>n.value),D=o(()=>c.value),E=o(()=>m.value),p=o(()=>S.value),O=o(()=>I.value),w=o(()=>i.value),U=o(()=>u.value),L=e=>{l.value=e},B=e=>{v.value=e},P=e=>{s.value=e},k=e=>{r.value=e},C=e=>{m.value=e},F=e=>{S.value=e},W=e=>{i.value=e},V=e=>{I.value=e},b=e=>{u.value=e},h=e=>{a.value=e},M=e=>{n.value=e},Y=e=>{c.value=e},x=e=>{g();const d=()=>{n.value=setInterval(()=>{e()},a.value)};d(),H(a,(j,q)=>{g(),d()})},g=()=>{n.value&&(clearInterval(n.value),n.value=null)};return{token:l,userInfo:r,pingInfo:c,uuidv4:s,interval:a,version:S,updateBrowserId:I,pingIntervalId:n,pingNetworkInfo:u,disconnect:v,invitationCode:m,timeDifference:i,getToken:A,getUserInfo:f,getUuidv4:T,getPingInfo:D,getDisconnect:_,getPingIntervalId:N,getPingInterval:R,getInvitationCode:E,getVersion:p,getUpdateBrowserId:O,getTimeDifference:w,getPingNetworkInfo:U,setInvitationCode:C,setVersion:F,setUpdateBrowserId:V,setToken:L,setUserInfo:k,setUuidv4:P,setDisconnect:B,setPingInfo:Y,setPingIntervalId:M,clearUserInfo:()=>{l.value="",s.value="",v.value=!0,r.value={},u.value={},g(),i.value=0,a.value=3e4,localStorage.removeItem("gaea_token"),localStorage.removeItem("browser_id"),localStorage.removeItem("REFERRAL_INFO_DATA"),localStorage.removeItem("REFERRAL_REWARDS"),localStorage.removeItem("MISSION_DATA"),localStorage.removeItem("TABLE_DATA_ARR_HISTORY"),localStorage.removeItem("INTEGRAL_DATA"),localStorage.removeItem("DAILY_STATISTIC"),localStorage.removeItem("NETWORK_INFO_LIST"),localStorage.removeItem("ANNOUNCEMENT"),localStorage.removeItem("TABLE_DATA_ARR"),localStorage.removeItem("REWARD_ERA_INFO"),localStorage.removeItem("PLUGIN_DATA_INFO"),localStorage.removeItem("NETWORK_COUNTRY"),localStorage.removeItem("TABLE_SOUL_RECORD"),localStorage.removeItem("TABLE_USD_RECORD"),localStorage.removeItem("TABLE_BIND_BOX"),localStorage.removeItem("version"),localStorage.removeItem("updateBrowserId"),c.value=null,I.value=!1},setPingInterval:h,setPingIntervalTime:x,setPingNetworkInfo:b,clearPingIntervalTime:g,setTimeDifference:W}},{persist:[{paths:["userInfo","token","uuidv4","disconnect","interval","pingIntervalId","invitationCode","pingInfo","version","updateBrowserId","pingNetworkInfo","timeDifference"],storage:K.cookiesWithOptions({maxAge:604800})}]});export{z as u};
