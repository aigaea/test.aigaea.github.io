import{u as i}from"./user.091d0403.js";import{n as f,g}from"./referral.626127be.js";import{F as u}from"./Fingerprinter.53277552.js";const d=async e=>{const t=i();try{const r=await g(),o=r&&r.code===200?r.data:{longitude:-1,latitude:-1,country:"Unknown",ip_address:"None"};await t.setPingInfo({...o,browser_id:t.getUuidv4,name:"Unknown Device",network_rate:1,is_connected:1,uptime:0,points:0,ip_score:e||0})}catch(r){console.error("Error fetching IP:",r)}},l=async()=>{const e=i();if(!e.getUserInfo)return!1;if(!e.getUuidv4){const t=await u.getFinalFingerprint(e.getUserInfo.uid);e.setUuidv4(t)}try{const t=e.getUserInfo.timeDifference,r=Date.now(),s=Math.floor((r-t)/1e3)||Math.floor(r/1e3),n=await f({uid:e.getUserInfo.uid,browser_id:e.getUuidv4,timestamp:s,version:e.getVersion||"1.0.0"});if(n&&n.code===200){const{interval:a,score:c}=n.data;e.setPingInterval(a*1e3),e.getPingInfo||d(c)}return!0}catch(t){return console.error("An error occurred during the network ping process:",t),!0}};export{l as n};
