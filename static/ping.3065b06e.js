import{u as o}from"./user.4871772a.js";import{u as n}from"./utils.9368058f.js";import{n as i}from"./referral.dcbe050f.js";const d=async()=>{const r=o();if(r.getUserInfo){r.getUuidv4||r.setUuidv4(n());try{const e=await i({uid:r.getUserInfo.uid,browser_id:r.getUuidv4,timestamp:Math.floor(Date.now()/1e3),version:"1.0.0"});if(e.code===200){const{interval:t}=e.data;r.setPingInterval(t*1e3)}}catch(e){console.error("Error during network ping:",e)}}};export{d as n};
