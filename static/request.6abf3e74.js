import{r as w,bs as R,bI as $,$ as b,w as M,y as U,e as g,bJ as B,P as H,bK as A,s as F,H as j,E as T,ak as z}from"./entry.e1b27368.js";import{u as x}from"./user.6569ed3a.js";import{u as G}from"./godhood.6256444c.js";const I=()=>null;function L(...a){const o=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(o);let[t,n,s={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??I,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const e=U(),l=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],i=()=>l()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:w(l()??s.default()),pending:w(!i()),error:R(e.payload._errors,t),status:w("idle")});const r={...e._asyncData[t]};r.refresh=r.execute=(u={})=>{if(e._asyncDataPromises[t]){if(u.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((u._initial||e.isHydrating&&u._initial!==!1)&&i())return l();r.pending.value=!0,r.status.value="pending";const d=new Promise((c,f)=>{try{c(n(e))}catch(v){f(v)}}).then(c=>{if(d.cancelled)return e._asyncDataPromises[t];let f=c;s.transform&&(f=s.transform(c)),s.pick&&(f=S(f,s.pick)),r.data.value=f,r.error.value=null,r.status.value="success"}).catch(c=>{if(d.cancelled)return e._asyncDataPromises[t];r.error.value=c,r.data.value=g(s.default()),r.status.value="error"}).finally(()=>{d.cancelled||(r.pending.value=!1,e.payload.data[t]=r.data.value,r.error.value&&(e.payload._errors[t]=B(r.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=d,e._asyncDataPromises[t]};const h=()=>r.refresh({_initial:!0}),_=s.server!==!1&&e.payload.serverRendered;{const u=H();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const c=u._nuxtOnBeforeMountCbs;u&&($(()=>{c.forEach(f=>{f()}),c.splice(0,c.length)}),b(()=>c.splice(0,c.length)))}_&&e.isHydrating&&i()?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):u&&(e.payload.serverRendered&&e.isHydrating||s.lazy)&&s.immediate?u._nuxtOnBeforeMountCbs.push(h):s.immediate&&h(),s.watch&&M(s.watch,()=>r.refresh());const d=e.hook("app:data:refresh",c=>{if(!c||c.includes(t))return r.refresh()});u&&b(d)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function S(a,o){const t={};for(const n of o)t[n]=a[n];return t}function K(a,o,t){const[n={},s]=typeof o=="string"?[{},o]:[o,t],e=n.key||A([s,g(n.baseURL),typeof a=="string"?a:"",g(n.params||n.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const l=e===s?"$f"+e:e,i=F(()=>{let p=a;return typeof p=="function"&&(p=p()),g(p)});if(!n.baseURL&&typeof i.value=="string"&&i.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:r,lazy:h,default:_,transform:m,pick:u,watch:d,immediate:c,...f}=n,v=j({...f,cache:typeof n.cache=="boolean"?void 0:n.cache}),O={server:r,lazy:h,default:_,transform:m,pick:u,immediate:c,watch:d===!1?[]:[v,i,...d||[]]};let y;return L(l,()=>{var D;return(D=y==null?void 0:y.abort)==null||D.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof i.value=="string"&&i.value.startsWith("/"),(n.$fetch||globalThis.$fetch)(i.value,{signal:y.signal,...v})},O)}const q=()=>{const a=x(),o=G();a.clearUserInfo(),o.clearGodhoodInfo()},W="https://api.gaea.la";let P=!1,k=0;const J=2e4,N=a=>({"Content-Type":"application/json",Authorization:`Bearer ${a}`}),E=a=>{var s,e,l,i,r,h;const o=Date.now(),t=((s=a.data)==null?void 0:s.message)||((e=a.data)==null?void 0:e.msg)||((r=(i=(l=a.data)==null?void 0:l.detail)==null?void 0:i[0])==null?void 0:r.msg)||a.detail||((h=a.data)==null?void 0:h.detail)||"network error",n=a.statusCode;if(!((t==="network error"||n===502)&&o-k<J)&&n!==502){if(n===403)return t;T.error(t),(t==="network error"||n===502)&&(k=o)}},C=async(a,o,t)=>{const n=x(),s=N(n.getToken),e=`${W}${a}`;try{const{data:l,error:i}=await K(e,{...o,headers:s,responseType:t},"$mr5k66ooDp");if(l.value)return l.value;if(i.value)return i.value.statusCode===401&&!P?(T.error(i.value.data.detail),P=!0,z("/"),q(),!0):E(i.value)}catch(l){return E(l)}},Z=(a,o,t="json")=>C(a,{method:"GET",params:o},t),ee=(a,o,t="json")=>C(a,{method:"POST",body:o},t);export{Z as G,ee as P,q as c};
