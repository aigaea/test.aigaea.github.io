import{o as g,a6 as B,$ as R,aq as X,r as y,ax as te,d as ne,Q as se,an as w,e as T,af as oe,n as q,a7 as ce}from"./entry.9908bd26.js";import{a as re}from"./el-input.19148fd0.js";let p=[];const M=e=>{const n=e;n.key===X.esc&&p.forEach(s=>s(n))},ae=e=>{g(()=>{p.length===0&&document.addEventListener("keydown",M),B&&p.push(e)}),R(()=>{p=p.filter(n=>n!==e),p.length===0&&B&&document.removeEventListener("keydown",M)})},C="focus-trap.focus-after-trapped",O="focus-trap.focus-after-released",ue="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},W="focusAfterTrapped",J="focusAfterReleased",de=Symbol("elFocusTrap"),k=y(),P=y(0),N=y(0);let F=0;const Z=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},Q=(e,n)=>{for(const s of e)if(!fe(s,n))return s},fe=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const n=Z(e),s=Q(n,e),o=Q(n.reverse(),e);return[s,o]},ve=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),N.value=window.performance.now(),e!==s&&ve(e)&&n&&e.select()}};function Y(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const pe=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=Y(e,o),e.unshift(o)},remove:o=>{var r,d;e=Y(e,o),(d=(r=e[0])==null?void 0:r.resume)==null||d.call(r)}}},Ee=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},z=pe(),me=()=>P.value>N.value,b=()=>{k.value="pointer",P.value=window.performance.now()},G=()=>{k.value="keyboard",P.value=window.performance.now()},Te=()=>(g(()=>{F===0&&(document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),document.addEventListener("keydown",G)),F++}),R(()=>{F--,F<=0&&(document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b),document.removeEventListener("keydown",G))}),{focusReason:k,lastUserFocusTimestamp:P,lastAutomatedFocusTimestamp:N}),_=e=>new CustomEvent(ue,{...ie,detail:e}),Fe=ne({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=y();let o,r;const{focusReason:d}=Te();ae(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:c,altKey:a,ctrlKey:u,metaKey:i,currentTarget:H,shiftKey:V}=t,{loop:$}=e,ee=c===X.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const S=H,[L,h]=le(S);if(L&&h){if(!V&&m===h){const f=_({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),$&&l(L,!0))}else if(V&&[L,S].includes(m)){const f=_({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),$&&l(h,!0))}}else if(m===S){const f=_({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};se(de,{focusTrapRef:s,onKeydown:E}),w(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),w([s],([t],[c])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",U),t.addEventListener("focusout",K)),c&&(c.removeEventListener("keydown",E),c.removeEventListener("focusin",U),c.removeEventListener("focusout",K))});const I=t=>{n(W,t)},A=t=>n(J,t),U=t=>{const c=T(s);if(!c)return;const a=t.target,u=t.relatedTarget,i=a&&c.contains(a);e.trapped||u&&c.contains(u)||(o=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?r=a:l(r,!0))},K=t=>{const c=T(s);if(!(v.paused||!c))if(e.trapped){const a=t.relatedTarget;!re(a)&&!c.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=_({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(r,!0)}},0)}else{const a=t.target;a&&c.contains(a)||n("focusout",t)}};async function D(){await q();const t=T(s);if(t){z.push(v);const c=t.contains(document.activeElement)?o:document.activeElement;if(o=c,!t.contains(c)){const u=new Event(C,j);t.addEventListener(C,I),t.dispatchEvent(u),u.defaultPrevented||q(()=>{let i=e.focusStartEl;ce(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&Ee(Z(t),!0),(document.activeElement===c||i==="container")&&l(t)})}}}function x(){const t=T(s);if(t){t.removeEventListener(C,I);const c=new CustomEvent(O,{...j,detail:{focusReason:d.value}});t.addEventListener(O,A),t.dispatchEvent(c),!c.defaultPrevented&&(d.value=="keyboard"||!me()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(O,A),z.remove(v)}}return g(()=>{e.trapped&&D(),w(()=>e.trapped,t=>{t?D():x()})}),R(()=>{e.trapped&&x()}),{onKeydown:E}}});function be(e,n,s,o,r,d){return oe(e.$slots,"default",{handleKeydown:e.onKeydown})}var Se=te(Fe,[["render",be],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Se as E,de as F};
