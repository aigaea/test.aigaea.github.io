import{b9 as t}from"./entry.564334f4.js";import{u as s}from"./utils.2993277c.js";import{n}from"./referral.30e8226c.js";const c=async()=>{const r=t();if(!r.getUserInfo)return!1;r.getUuidv4||r.setUuidv4(s());try{const e=await n({uid:r.getUserInfo.uid,browser_id:r.getUuidv4,timestamp:Math.floor(Date.now()/1e3),version:"1.0.0"});if(e.code===200){const{interval:o}=e.data;return r.setPingInterval(o*1e3),r.setScore(e.data.score),!0}else return console.error("ping error:",e.msg),!1}catch(e){return console.error("An error occurred during the network ping process:",e),!1}};export{c as n};
