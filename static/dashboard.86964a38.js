import{G as e,P as r}from"./entry.9908bd26.js";const i=()=>e("/api/earn/info"),s=(t,n)=>e(`/api/earn/daily-statistic?start=${t}&end=${n}`),c=(t,n,a)=>e(`/api/network/device-networks?page=${t}&limit=${n}&active=${a}`),p=()=>e("/api/network/info"),k=t=>r("/api/network/change-name",t);export{p as a,s as b,c as d,i as e,k as n};
