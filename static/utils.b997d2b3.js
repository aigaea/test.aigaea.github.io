import{u as o}from"./user.f5a36d41.js";import{m as a}from"./el-form.238e40e7.js";const c=()=>"https://aigaea.net",m=()=>"1x00000000000000000000AA",d=({value:s,characters:e="****",start:t=3,end:r=4})=>{const n=new RegExp("^(.{"+t+"}).*(.{"+r+"})$");return s?s.replace(n,`$1${e}$2`):""},_=s=>typeof s=="number"&&!isNaN(s)?!1:s?Object.keys(s).length<1:!0,i=["celestial_god","dayang_river","galactic_god","god_of_agriculture","god_of_justice","goddess_of_light","memory_goddess","ocean_goddess","shenqi_shen","sun_god","time_goddess","wisdom_god"],f=s=>{const e=o();var t=null;s?t=Number(s):t=Number(e.getUserInfo.uid);const r=t%i.length;return`/images/public/head/${i[r]}.jpg`},l=s=>{const e=a().find(t=>t.code===s);return e&&e.img?`/images/missions/${e.img}.png?v=1`:"/images/missions/email.png"};export{d as a,l as b,m as c,c as g,_ as i,f as s};
