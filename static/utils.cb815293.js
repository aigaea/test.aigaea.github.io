import{u as o}from"./entry.9908bd26.js";import{m as a}from"./dict.d5728e61.js";const c=()=>"10000000-1000-4000-8000-100000000000".replace(/[018]/g,s=>(+s^crypto.getRandomValues(new Uint8Array(1))[0]&15>>+s/4).toString(16)),d=()=>"https://aigaea.net",m=()=>"1x00000000000000000000AA",_=({value:s,characters:e="****",start:t=3,end:r=4})=>{const i=new RegExp("^(.{"+t+"}).*(.{"+r+"})$");return s?s.replace(i,`$1${e}$2`):""},p=s=>typeof s=="number"&&!isNaN(s)?!1:s?Object.keys(s).length<1:!0,n=["celestial_god","dayang_river","galactic_god","god_of_agriculture","god_of_justice","goddess_of_light","memory_goddess","ocean_goddess","shenqi_shen","sun_god","time_goddess","wisdom_god"],f=()=>{const s=o(),t=Number(s.getUserInfo.uid)%n.length;return`/images/public/head/${n[t]}.jpg`},l=s=>{const e=a().find(t=>t.code===s);return e&&e.img?`/images/missions/${e.img}.png?v=1`:"/images/missions/email.png"};export{_ as a,m as b,f as c,d as g,p as i,l as s,c as u};
