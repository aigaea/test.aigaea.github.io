import{al as o,aj as a}from"./entry.3b866f49.js";import{u as i}from"./user.28799af6.js";import{h as n}from"./user.d18b2f2a.js";import"./request.99a15d98.js";const c=o((s,e)=>{const t=i();if(e.query.token){t.setToken(e.query.token);const r=t.getInvitationCode;return e.query.type==="bind"&&r&&n({referral_code:r}),a(`/${e.query.path}`)}});export{c as default};
