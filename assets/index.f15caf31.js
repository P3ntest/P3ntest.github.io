import{w as t,S as e,i as s,s as n,c as o,e as l,a as r,b as c,t as i,d as a,l as $,u,g as d,f as m,h as p,j as f,k as g,m as v,n as h,o as w,p as x,q as y,r as b,v as k,x as _,y as S,z as L,A as T,B as C,C as D,D as M,E as z,F as q,G as A,H as P,I,J as B,K as E,L as H,M as N,N as F,O as j,P as Y,T as V,Q as G,R as O,U as R,V as W,W as J,X,Y as Q,Z as U,_ as Z,$ as K}from"./vendor.0d9938ef.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const tt=t("home");function et(t){let e,s,n,v;const h=t[5].default,w=o(h,t,t[4],null);return{c(){e=l("button"),w&&w.c(),r(e,"color",t[1]),c(e,"class","svelte-1486g6t"),i(e,"gray",t[0])},m(o,l){a(o,e,l),w&&w.m(e,null),s=!0,n||(v=$(e,"click",t[2]),n=!0)},p(t,[n]){w&&w.p&&(!s||16&n)&&u(w,h,t,t[4],s?m(h,t[4],n,null):d(t[4]),null),(!s||2&n)&&r(e,"color",t[1]),1&n&&i(e,"gray",t[0])},i(t){s||(p(w,t),s=!0)},o(t){f(w,t),s=!1},d(t){t&&g(e),w&&w.d(t),n=!1,v()}}}function st(t,e,s){let{$$slots:n={},$$scope:o}=e,{gray:l=!1}=e,{link:r=""}=e,{color:c="#558bff"}=e;return t.$$set=t=>{"gray"in t&&s(0,l=t.gray),"link"in t&&s(3,r=t.link),"color"in t&&s(1,c=t.color),"$$scope"in t&&s(4,o=t.$$scope)},[l,c,()=>{console.log("going to",r),r&&tt.set(r)},r,o,n]}class nt extends e{constructor(t){super(),s(this,t,st,et,n,{gray:0,link:3,color:1})}}function ot(t){let e;return{c(){e=b("Join Discord")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function lt(t){let e,s,n,o,r,i,u,d,m,b,k,_,S;return d=new nt({props:{color:"#fbc403",$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=l("div"),s=l("div"),n=l("h1"),n.textContent="Lets create something awesome!",o=v(),r=l("h2"),r.textContent="Join my Discord Server and get in touch with me",i=v(),u=l("a"),h(d.$$.fragment),m=v(),b=l("div"),b.innerHTML='<svg viewBox="0 0 40 40" class="svelte-qnymg1"><path class="close-x svelte-qnymg1" d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>',c(n,"class","svelte-qnymg1"),c(r,"class","svelte-qnymg1"),c(u,"href","https://discord.gg/Vty8xCEr4P"),c(s,"class","main svelte-qnymg1"),c(b,"class","x-button svelte-qnymg1"),c(e,"class","page svelte-qnymg1")},m(l,c){a(l,e,c),w(e,s),w(s,n),w(s,o),w(s,r),w(s,i),w(s,u),x(d,u,null),w(e,m),w(e,b),k=!0,_||(S=$(b,"click",t[0]),_=!0)},p(t,[e]){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),d.$set(s)},i(t){k||(p(d.$$.fragment,t),k=!0)},o(t){f(d.$$.fragment,t),k=!1},d(t){t&&g(e),y(d),_=!1,S()}}}function rt(t){return[()=>{tt.set("home")}]}class ct extends e{constructor(t){super(),s(this,t,rt,lt,n,{})}}function it(t){let e,s;return{c(){e=l("p"),s=b(t[2]),c(e,"class","svelte-fp-slide-name")},m(t,n){a(t,e,n),w(e,s)},p(t,e){4&e&&k(s,t[2])},d(t){t&&g(e)}}}function at(t){let e,s,n,o,r,i,u=t[3]&&it(t);return{c(){e=l("li"),u&&u.c(),s=v(),n=l("button"),c(n,"class",o="svelte-fp-indicator-list-item-btn "+(t[0]===t[1]?"svelte-fp-active":"")+" svelte-afb3j2"),c(e,"class","svelte-fp-indicator-list-item svelte-afb3j2")},m(o,l){a(o,e,l),u&&u.m(e,null),w(e,s),w(e,n),r||(i=$(n,"click",t[4]),r=!0)},p(t,[l]){t[3]?u?u.p(t,l):(u=it(t),u.c(),u.m(e,s)):u&&(u.d(1),u=null),3&l&&o!==(o="svelte-fp-indicator-list-item-btn "+(t[0]===t[1]?"svelte-fp-active":"")+" svelte-afb3j2")&&c(n,"class",o)},i:_,o:_,d(t){t&&g(e),u&&u.d(),r=!1,i()}}}function $t(t,e,s){let{activeSection:n=0}=e,{index:o=0}=e,{name:l=""}=e,{names:r=!1}=e;return t.$$set=t=>{"activeSection"in t&&s(0,n=t.activeSection),"index"in t&&s(1,o=t.index),"name"in t&&s(2,l=t.name),"names"in t&&s(3,r=t.names)},[n,o,l,r,()=>{s(0,n=o)}]}class ut extends e{constructor(t){super(),s(this,t,$t,at,n,{activeSection:0,index:1,name:2,names:3})}}function dt(t,e,s){const n=t.slice();return n[3]=e[s],n[5]=s,n}function mt(t){let e,s,n;function o(e){t[2](e)}let l={index:t[5],name:t[3]};return void 0!==t[0]&&(l.activeSection=t[0]),e=new ut({props:l}),D.push((()=>M(e,"activeSection",o))),{c(){h(e.$$.fragment)},m(t,s){x(e,t,s),n=!0},p(t,n){const o={};2&n&&(o.name=t[3]),!s&&1&n&&(s=!0,o.activeSection=t[0],S((()=>s=!1))),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function pt(t){let e,s,n,o=t[1],r=[];for(let l=0;l<o.length;l+=1)r[l]=mt(dt(t,o,l));const i=t=>f(r[t],1,1,(()=>{r[t]=null}));return{c(){e=l("div"),s=l("ul");for(let t=0;t<r.length;t+=1)r[t].c();c(s,"class","svelte-fp-indicator-list svelte-dh6fo0"),c(e,"class","svelte-fp-indicator svelte-dh6fo0")},m(t,o){a(t,e,o),w(e,s);for(let e=0;e<r.length;e+=1)r[e].m(s,null);n=!0},p(t,[e]){if(3&e){let n;for(o=t[1],n=0;n<o.length;n+=1){const l=dt(t,o,n);r[n]?(r[n].p(l,e),p(r[n],1)):(r[n]=mt(l),r[n].c(),p(r[n],1),r[n].m(s,null))}for(L(),n=o.length;n<r.length;n+=1)i(n);T()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)p(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)f(r[e]);n=!1},d(t){t&&g(e),C(r,t)}}}function ft(t,e,s){let{sections:n=[]}=e,{activeSection:o=0}=e;return t.$$set=t=>{"sections"in t&&s(1,n=t.sections),"activeSection"in t&&s(0,o=t.activeSection)},[o,n,function(t){o=t,s(0,o)}]}class gt extends e{constructor(t){super(),s(this,t,ft,pt,n,{sections:1,activeSection:0})}}function vt(t){let e,s,n,r,i,b,k,_,L,T,C;const A=t[22].default,P=o(A,t,t[21],null);function I(e){t[25](e)}function B(e){t[26](e)}let E={};return void 0!==t[0]&&(E.activeSection=t[0]),void 0!==t[2]&&(E.sections=t[2]),b=new gt({props:E}),D.push((()=>M(b,"activeSection",I))),D.push((()=>M(b,"sections",B))),{c(){e=v(),s=l("div"),n=l("div"),r=l("div"),P&&P.c(),i=v(),h(b.$$.fragment),c(r,"class","svelte-fp-container svelte-ng9shq"),c(n,"class","svelte-fp-container svelte-ng9shq"),c(s,"class",z(t[5])+" svelte-ng9shq"),c(s,"style",t[1])},m(o,l){a(o,e,l),a(o,s,l),w(s,n),w(n,r),P&&P.m(r,null),t[24](r),w(n,i),x(b,n,null),L=!0,T||(C=[$(window,"keydown",t[23]),$(s,"wheel",t[27]),$(s,"touchstart",t[28]),$(s,"touchmove",t[29]),$(s,"drag",ht),$(s,"mousedown",t[30]),$(s,"mouseup",t[31])],T=!0)},p(t,e){P&&P.p&&(!L||2097152&e[0])&&u(P,A,t,t[21],L?m(A,t[21],e,null):d(t[21]),null);const n={};!k&&1&e[0]&&(k=!0,n.activeSection=t[0],S((()=>k=!1))),!_&&4&e[0]&&(_=!0,n.sections=t[2],S((()=>_=!1))),b.$set(n),(!L||2&e[0])&&c(s,"style",t[1])},i(t){L||(p(P,t),p(b.$$.fragment,t),L=!0)},o(t){f(P,t),f(b.$$.fragment,t),L=!1},d(n){n&&g(e),n&&g(s),P&&P.d(n),t[24](null),y(b),T=!1,q(C)}}}const ht=()=>!1;function wt(e,s,n){let o,{$$slots:l={},$$scope:r}=s,{class:c=""}=s,{style:i=""}=s,{activeSection:a=0}=s;const $=t(a);A(e,$,(t=>n(36,o=t)));let u,d,m,p=0,{sectionTitles:f=!1}=s,g=[],{transitionDuration:v=500}=s,{arrows:h=!1}=s,{drag:w=!1}=s,{dragThreshold:x=100}=s,{touchThreshold:y=75}=s,{pullDownToRefresh:b=!1}=s,k=`${c} svelte-fp-wrapper`,_=0;P("section",{activeSectionStore:$,getId:()=>(n(20,p++,p),p-1)});const S=t=>{let e=t.deltaY,s=(new Date).getTime();v<s-_&&(_=s,e<0?L():e>0&&T())},L=async()=>{o>0&&n(0,a--,a)},T=async()=>{o<p-1&&n(0,a++,a)},C=t=>{if(h)switch(t.key){case"ArrowDown":T();break;case"ArrowUp":L()}},M=t=>{w&&(d=t.screenY)},z=t=>{if(w){const e=t.screenY;d-e>x?T():d-e<-x&&L()}},q=t=>{m=t.touches[0].screenY},I=t=>{let e=(new Date).getTime();const s=t.touches[0].screenY;v<e-_&&(m-s>y?(T(),_=e):m-s<-y&&(L(),_=e))};return e.$$set=t=>{"class"in t&&n(12,c=t.class),"style"in t&&n(1,i=t.style),"activeSection"in t&&n(0,a=t.activeSection),"sectionTitles"in t&&n(13,f=t.sectionTitles),"transitionDuration"in t&&n(14,v=t.transitionDuration),"arrows"in t&&n(15,h=t.arrows),"drag"in t&&n(16,w=t.drag),"dragThreshold"in t&&n(17,x=t.dragThreshold),"touchThreshold"in t&&n(18,y=t.touchThreshold),"pullDownToRefresh"in t&&n(19,b=t.pullDownToRefresh),"$$scope"in t&&n(21,r=t.$$scope)},e.$$.update=()=>{if(1&e.$$.dirty[0]&&$.set(a),8192&e.$$.dirty[0]&&f&&n(2,g=f),1056780&e.$$.dirty[0]&&u&&!f){console.log(u.children.length);for(let t=0;p>t;t++)n(2,g=[...g,`Section ${t+1}`])}},[a,i,g,u,$,k,S,C,M,z,q,I,c,f,v,h,w,x,y,b,p,r,l,t=>C(t),function(t){D[t?"unshift":"push"]((()=>{u=t,n(3,u)}))},function(t){a=t,n(0,a)},function(t){g=t,n(2,g),n(13,f),n(3,u),n(20,p)},t=>S(t),t=>q(t),t=>I(t),t=>M(t),t=>z(t)]}class xt extends e{constructor(t){super(),s(this,t,wt,vt,n,{class:12,style:1,activeSection:0,sectionTitles:13,transitionDuration:14,arrows:15,drag:16,dragThreshold:17,touchThreshold:18,pullDownToRefresh:19},null,[-1,-1])}}function yt(t,e,s){const n=t.slice();return n[42]=e[s],n[44]=s,n}function bt(t){let e,s,n,r,h,x,y,b;const k=t[26].default,_=o(k,t,t[25],null);let S=t[1][0]&&kt(t);return{c(){e=l("section"),s=l("div"),_&&_.c(),n=v(),S&&S.c(),c(s,"class","svelte-fp-container svelte-fp-flexbox-expand svelte-l4liqa"),i(s,"svelte-fp-flexbox-center",t[2]),c(e,"class",r=z(t[6])+" svelte-l4liqa"),c(e,"style",t[0])},m(o,l){a(o,e,l),w(e,s),_&&_.m(s,null),w(e,n),S&&S.m(e,null),x=!0,y||(b=[$(e,"selectstart",t[9]),$(e,"mousedown",t[29]),$(e,"mouseup",t[30]),$(e,"touchstart",t[31]),$(e,"touchmove",t[32])],y=!0)},p(n,o){t=n,_&&_.p&&(!x||33554432&o[0])&&u(_,k,t,t[25],x?m(k,t[25],o,null):d(t[25]),null),4&o[0]&&i(s,"svelte-fp-flexbox-center",t[2]),t[1][0]?S?S.p(t,o):(S=kt(t),S.c(),S.m(e,null)):S&&(S.d(1),S=null),(!x||64&o[0]&&r!==(r=z(t[6])+" svelte-l4liqa"))&&c(e,"class",r),(!x||1&o[0])&&c(e,"style",t[0])},i(s){x||(p(_,s),I((()=>{h||(h=B(e,E,t[3],!0)),h.run(1)})),x=!0)},o(s){f(_,s),h||(h=B(e,E,t[3],!1)),h.run(0),x=!1},d(t){t&&g(e),_&&_.d(t),S&&S.d(),t&&h&&h.end(),y=!1,q(b)}}}function kt(t){let e,s,n=t[1],o=[];for(let l=0;l<n.length;l+=1)o[l]=_t(yt(t,n,l));return{c(){e=l("div"),s=l("ul");for(let t=0;t<o.length;t+=1)o[t].c();c(s,"class","svelte-fp-indicator-list-horizontal svelte-l4liqa"),c(e,"class","svelte-fp-indicator-horizontal svelte-l4liqa")},m(t,n){a(t,e,n),w(e,s);for(let e=0;e<o.length;e+=1)o[e].m(s,null)},p(t,e){if(1058&e[0]){let l;for(n=t[1],l=0;l<n.length;l+=1){const r=yt(t,n,l);o[l]?o[l].p(r,e):(o[l]=_t(r),o[l].c(),o[l].m(s,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){t&&g(e),C(o,t)}}}function _t(t){let e,s,n,o,r,i;function u(){return t[28](t[44])}return{c(){e=l("li"),s=l("button"),o=v(),c(s,"class",n="svelte-fp-indicator-list-item-btn "+(t[5]===t[44]?"svelte-fp-active":"")+" svelte-l4liqa"),c(e,"class","svelte-fp-indicator-list-item svelte-l4liqa")},m(t,n){a(t,e,n),w(e,s),w(e,o),r||(i=$(s,"click",u),r=!0)},p(e,o){t=e,32&o[0]&&n!==(n="svelte-fp-indicator-list-item-btn "+(t[5]===t[44]?"svelte-fp-active":"")+" svelte-l4liqa")&&c(s,"class",n)},d(t){t&&g(e),r=!1,i()}}}function St(t){let e,s,n,o,l=t[4]&&bt(t);return{c(){l&&l.c(),e=H()},m(r,c){l&&l.m(r,c),a(r,e,c),s=!0,n||(o=$(window,"keydown",t[27]),n=!0)},p(t,s){t[4]?l?(l.p(t,s),16&s[0]&&p(l,1)):(l=bt(t),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(L(),f(l,1,1,(()=>{l=null})),T())},i(t){s||(p(l),s=!0)},o(t){f(l),s=!1},d(t){l&&l.d(t),t&&g(e),n=!1,o()}}}function Lt(e,s,n){let o,l,r,{$$slots:c={},$$scope:i}=s,{class:a=""}=s,{style:$=""}=s;const{getId:u,activeSectionStore:d}=N("section");A(e,d,(t=>n(24,o=t)));let{slides:m=[]}=s,{activeSlide:p=0}=s;const f=t(p);A(e,f,(t=>n(37,l=t)));let g,{center:v=!1}=s,{arrows:h=!1}=s,{select:w=!1}=s,{transitionDuration:x=500}=s,{dragThreshold:y=100}=s,{touchThreshold:b=75}=s,{transition:k={duration:x}}=s;r=parseInt(r);let _,S,L=p,T=0,C=0,D=`${a} svelte-fp-section svelte-fp-flexbox-center`;w||(D=`${D} svelte-fp-unselectable`),P("slide",{activeSlideStore:f,getId:()=>(C++,C-1)});const M=t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}},z=()=>{const t=M(l);t.num<m.length-1?(n(5,L=t.num+1),f.set(-L)):(f.set(0),n(5,L=l))},q=()=>{const t=M(l);t.num>0?f.set(t.num-1):f.set(m.length-1),n(5,L=l)},I=t=>{if(t>L)for(;t>L;)z();else for(;t<L;)q()},B=t=>{if(h)switch(t.key){case"ArrowLeft":q();break;case"ArrowRight":z()}},E=t=>{_=t.screenX},H=t=>{const e=t.screenX;_-e>y?z():_-e<-y&&q()},j=t=>{S=t.touches[0].screenX},Y=t=>{let e=(new Date).getTime();const s=t.touches[0].screenX;x<e-T&&(S-s>b?(z(),T=e):S-s<-b&&(q(),T=e))};F((()=>{n(23,r=u())}));return e.$$set=t=>{"class"in t&&n(16,a=t.class),"style"in t&&n(0,$=t.style),"slides"in t&&n(1,m=t.slides),"activeSlide"in t&&n(17,p=t.activeSlide),"center"in t&&n(2,v=t.center),"arrows"in t&&n(18,h=t.arrows),"select"in t&&n(19,w=t.select),"transitionDuration"in t&&n(20,x=t.transitionDuration),"dragThreshold"in t&&n(21,y=t.dragThreshold),"touchThreshold"in t&&n(22,b=t.touchThreshold),"transition"in t&&n(3,k=t.transition),"$$scope"in t&&n(25,i=t.$$scope)},e.$$.update=()=>{25165824&e.$$.dirty[0]&&n(4,g=r===o),131072&e.$$.dirty[0]&&f.set(p),16&e.$$.dirty[0]&&(g||(C=0))},[$,m,v,k,g,L,D,d,f,()=>{if(!w)return!1},I,B,E,H,j,Y,a,p,h,w,x,y,b,r,o,i,c,t=>B(t),t=>I(t),t=>E(t),t=>H(t),t=>j(t),t=>Y(t)]}class Tt extends e{constructor(t){super(),s(this,t,Lt,St,n,{class:16,style:0,slides:1,activeSlide:17,center:2,arrows:18,select:19,transitionDuration:20,dragThreshold:21,touchThreshold:22,transition:3},null,[-1,-1])}}function Ct(t){let e,s;const n=t[2].default,r=o(n,t,t[1],null);return{c(){e=l("h1"),r&&r.c(),c(e,"class","svelte-14hwj8p"),i(e,"left",t[0])},m(t,n){a(t,e,n),r&&r.m(e,null),s=!0},p(t,[o]){r&&r.p&&(!s||2&o)&&u(r,n,t,t[1],s?m(n,t[1],o,null):d(t[1]),null),1&o&&i(e,"left",t[0])},i(t){s||(p(r,t),s=!0)},o(t){f(r,t),s=!1},d(t){t&&g(e),r&&r.d(t)}}}function Dt(t,e,s){let{$$slots:n={},$$scope:o}=e,{left:l=!1}=e;return t.$$set=t=>{"left"in t&&s(0,l=t.left),"$$scope"in t&&s(1,o=t.$$scope)},[l,o,n]}class Mt extends e{constructor(t){super(),s(this,t,Dt,Ct,n,{left:0})}}function zt(t){let e,s;const n=t[2].default,r=o(n,t,t[1],null);return{c(){e=l("h2"),r&&r.c(),c(e,"class","svelte-137wf7s"),i(e,"left",t[0])},m(t,n){a(t,e,n),r&&r.m(e,null),s=!0},p(t,[o]){r&&r.p&&(!s||2&o)&&u(r,n,t,t[1],s?m(n,t[1],o,null):d(t[1]),null),1&o&&i(e,"left",t[0])},i(t){s||(p(r,t),s=!0)},o(t){f(r,t),s=!1},d(t){t&&g(e),r&&r.d(t)}}}function qt(t,e,s){let{$$slots:n={},$$scope:o}=e,{left:l=!1}=e;return t.$$set=t=>{"left"in t&&s(0,l=t.left),"$$scope"in t&&s(1,o=t.$$scope)},[l,o,n]}class At extends e{constructor(t){super(),s(this,t,qt,zt,n,{left:0})}}function Pt(t){let e;return{c(){e=b("P3ntest")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function It(t){let e;return{c(){e=b("Dutch Fullstack Developer from Germany.")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function Bt(t){let e;return{c(){e=b("Contact")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function Et(t){let e;return{c(){e=b("GitHub")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function Ht(t){let e,s,n,o,r,i,$,u,d,m,b;return s=new Mt({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),o=new At({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),$=new nt({props:{link:"contact",$$slots:{default:[Bt]},$$scope:{ctx:t}}}),m=new nt({props:{gray:!0,color:"white",$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){e=l("div"),h(s.$$.fragment),n=v(),h(o.$$.fragment),r=v(),i=l("div"),h($.$$.fragment),u=v(),d=l("a"),h(m.$$.fragment),c(d,"href","https://github.com/P3ntest"),c(i,"class","buttons svelte-5x8dyx"),c(e,"class","section svelte-5x8dyx"),c(e,"id","waves")},m(t,l){a(t,e,l),x(s,e,null),w(e,n),x(o,e,null),w(e,r),w(e,i),x($,i,null),w(i,u),w(i,d),x(m,d,null),b=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),o.$set(l);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),$.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),m.$set(c)},i(t){b||(p(s.$$.fragment,t),p(o.$$.fragment,t),p($.$$.fragment,t),p(m.$$.fragment,t),b=!0)},o(t){f(s.$$.fragment,t),f(o.$$.fragment,t),f($.$$.fragment,t),f(m.$$.fragment,t),b=!1},d(t){t&&g(e),y(s),y(o),y($),y(m)}}}function Nt(t){return F((async()=>{console.log("noumt"),VANTA.WAVES({el:"#waves",mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,shininess:10,waveHeight:25,waveSpeed:.8,zoom:1.2,color:"#1b5e94"})})),j((()=>{VANTA.current.destroy()})),[]}class Ft extends e{constructor(t){super(),s(this,t,Nt,Ht,n,{})}}function jt(t){let e,s,n,r,i,$;const h=t[2].default,x=o(h,t,t[1],null);return{c(){e=l("div"),s=l("h1"),n=b(t[0]),r=v(),i=l("p"),x&&x.c(),c(s,"class","svelte-1tavywp"),c(i,"class","svelte-1tavywp"),c(e,"class","item svelte-1tavywp")},m(t,o){a(t,e,o),w(e,s),w(s,n),w(e,r),w(e,i),x&&x.m(i,null),$=!0},p(t,[e]){(!$||1&e)&&k(n,t[0]),x&&x.p&&(!$||2&e)&&u(x,h,t,t[1],$?m(h,t[1],e,null):d(t[1]),null)},i(t){$||(p(x,t),$=!0)},o(t){f(x,t),$=!1},d(t){t&&g(e),x&&x.d(t)}}}function Yt(t,e,s){let{$$slots:n={},$$scope:o}=e,{title:l="Performant"}=e;return t.$$set=t=>{"title"in t&&s(0,l=t.title),"$$scope"in t&&s(1,o=t.$$scope)},[l,o,n]}class Vt extends e{constructor(t){super(),s(this,t,Yt,jt,n,{title:0})}}function Gt(t){let e;const s=t[0].default,n=o(s,t,t[1],null);return{c(){n&&n.c()},m(t,s){n&&n.m(t,s),e=!0},p(t,o){n&&n.p&&(!e||2&o)&&u(n,s,t,t[1],e?m(s,t[1],o,null):d(t[1]),null)},i(t){e||(p(n,t),e=!0)},o(t){f(n,t),e=!1},d(t){n&&n.d(t)}}}function Ot(t){let e,s,n;return s=new Y({props:{autoplayDuration:5e3,autoplay:!0,pauseOnFocus:!0,$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){e=l("div"),h(s.$$.fragment),c(e,"class","caro-wrapper svelte-1doiju9")},m(t,o){a(t,e,o),x(s,e,null),n=!0},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){f(s.$$.fragment,t),n=!1},d(t){t&&g(e),y(s)}}}function Rt(t,e,s){let{$$slots:n={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&s(1,o=t.$$scope)},[n,o]}class Wt extends e{constructor(t){super(),s(this,t,Rt,Ot,n,{})}}function Jt(t){let e;const s=t[1].default,n=o(s,t,t[2],null);return{c(){n&&n.c()},m(t,s){n&&n.m(t,s),e=!0},p(t,o){n&&n.p&&(!e||4&o)&&u(n,s,t,t[2],e?m(s,t[2],o,null):d(t[2]),null)},i(t){e||(p(n,t),e=!0)},o(t){f(n,t),e=!1},d(t){n&&n.d(t)}}}function Xt(t){let e,s,n;return s=new Vt({props:{title:t[0],$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){e=l("div"),h(s.$$.fragment),c(e,"class","slide-content")},m(t,o){a(t,e,o),x(s,e,null),n=!0},p(t,[e]){const n={};1&e&&(n.title=t[0]),4&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){f(s.$$.fragment,t),n=!1},d(t){t&&g(e),y(s)}}}function Qt(t,e,s){let{$$slots:n={},$$scope:o}=e,{title:l}=e;return t.$$set=t=>{"title"in t&&s(0,l=t.title),"$$scope"in t&&s(2,o=t.$$scope)},[l,n,o]}class Ut extends e{constructor(t){super(),s(this,t,Qt,Xt,n,{title:0})}}function Zt(t){let e;return{c(){e=b("Discord")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function Kt(t){let e;return{c(){e=b("Professional Budget-Friendly Discord Applications")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function te(t){let e;return{c(){e=b("Order Now")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function ee(t){let e;return{c(){e=b("My Bots are written using the Discord.js Framework and\r\n                    made to perform as fast as possible. Interact with\r\n                    thousands of users on one vps!")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function se(t){let e;return{c(){e=b("View Documentation")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function ne(t){let e,s,n,o,i,$,u,d;return u=new nt({props:{color:"#36393f",$$slots:{default:[se]},$$scope:{ctx:t}}}),{c(){e=b("Integrate the power of the new discord slash commands!\r\n                        "),s=l("br"),n=v(),o=l("div"),i=v(),$=l("a"),h(u.$$.fragment),r(o,"height","40px"),c($,"href","https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ#:~:text=Slash%20Commands%20are%20the%20new,command%20right%20the%20first%20time.")},m(t,l){a(t,e,l),a(t,s,l),a(t,n,l),a(t,o,l),a(t,i,l),a(t,$,l),x(u,$,null),d=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s)},i(t){d||(p(u.$$.fragment,t),d=!0)},o(t){f(u.$$.fragment,t),d=!1},d(t){t&&g(e),t&&g(s),t&&g(n),t&&g(o),t&&g(i),t&&g($),y(u)}}}function oe(t){let e,s,n,o,i,$,u;return{c(){e=b("I can create visually stunning and customizable Discord\r\n                    Embeds\r\n                    "),s=l("br"),n=v(),o=l("div"),i=v(),$=l("img"),r(o,"height","20px"),G($.src,u="/assets/embed.f566c40b.png")||c($,"src","/assets/embed.f566c40b.png"),c($,"alt","Discord Example Embed")},m(t,l){a(t,e,l),a(t,s,l),a(t,n,l),a(t,o,l),a(t,i,l),a(t,$,l)},p:_,d(t){t&&g(e),t&&g(s),t&&g(n),t&&g(o),t&&g(i),t&&g($)}}}function le(t){let e,s,n,o,i,$,u,d;return{c(){e=b("Every aspect about my bots can be customized in a config\r\n                    afterwards. No need to edit code!\r\n                    "),s=l("br"),n=b("\r\n                    Beta: Edit the bots config directly in your web browser!\r\n                    "),o=l("br"),i=v(),$=l("div"),u=v(),d=l("div"),d.innerHTML='<span style="color: yellow;">command-name</span>:\n                        <span style="color: green;" id="typer"></span>',r($,"height","20px"),c(d,"class","code svelte-483a00")},m(t,l){a(t,e,l),a(t,s,l),a(t,n,l),a(t,o,l),a(t,i,l),a(t,$,l),a(t,u,l),a(t,d,l)},d(t){t&&g(e),t&&g(s),t&&g(n),t&&g(o),t&&g(i),t&&g($),t&&g(u),t&&g(d)}}}function re(t){let e,s,n,o,l,r,c,i;return e=new Ut({props:{title:"Performance",$$slots:{default:[ee]},$$scope:{ctx:t}}}),n=new Ut({props:{title:"Slash Commands",$$slots:{default:[ne]},$$scope:{ctx:t}}}),l=new Ut({props:{title:"Beautiful Embeds",$$slots:{default:[oe]},$$scope:{ctx:t}}}),c=new Ut({props:{title:"Fully Customizable",$$slots:{default:[le]},$$scope:{ctx:t}}}),{c(){h(e.$$.fragment),s=v(),h(n.$$.fragment),o=v(),h(l.$$.fragment),r=v(),h(c.$$.fragment)},m(t,$){x(e,t,$),a(t,s,$),x(n,t,$),a(t,o,$),x(l,t,$),a(t,r,$),x(c,t,$),i=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),n.$set(r);const i={};1&s&&(i.$$scope={dirty:s,ctx:t}),l.$set(i);const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),c.$set(a)},i(t){i||(p(e.$$.fragment,t),p(n.$$.fragment,t),p(l.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(l.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){y(e,t),t&&g(s),y(n,t),t&&g(o),y(l,t),t&&g(r),y(c,t)}}}function ce(t){let e,s,n,o,r,i,$,u,d,m,b,k,_,S,L;return i=new Mt({props:{left:!0,$$slots:{default:[Zt]},$$scope:{ctx:t}}}),u=new At({props:{left:!0,$$slots:{default:[Kt]},$$scope:{ctx:t}}}),b=new nt({props:{gray:!0,link:"contact",color:"white",$$slots:{default:[te]},$$scope:{ctx:t}}}),S=new Wt({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){e=l("div"),s=l("div"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ae57ff" fill-opacity="1" d="M0,192L30,197.3C60,203,120,213,180,213.3C240,213,300,203,360,165.3C420,128,480,64,540,80C600,96,660,192,720,218.7C780,245,840,203,900,192C960,181,1020,203,1080,218.7C1140,235,1200,245,1260,234.7C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> \n        <div class="filler svelte-483a00"></div>',n=v(),o=l("div"),r=l("div"),h(i.$$.fragment),$=v(),h(u.$$.fragment),d=v(),m=l("div"),h(b.$$.fragment),k=v(),_=l("div"),h(S.$$.fragment),c(s,"class","wave svelte-483a00"),c(m,"class","ml svelte-483a00"),c(r,"class","left svelte-483a00"),c(_,"class","caro svelte-483a00"),c(o,"class","wrapper svelte-483a00"),c(e,"class","section svelte-483a00")},m(t,l){a(t,e,l),w(e,s),w(e,n),w(e,o),w(o,r),x(i,r,null),w(r,$),x(u,r,null),w(r,d),w(r,m),x(b,m,null),w(o,k),w(o,_),x(S,_,null),L=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),u.$set(n);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),b.$set(o);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),S.$set(l)},i(t){L||(p(i.$$.fragment,t),p(u.$$.fragment,t),p(b.$$.fragment,t),p(S.$$.fragment,t),L=!0)},o(t){f(i.$$.fragment,t),f(u.$$.fragment,t),f(b.$$.fragment,t),f(S.$$.fragment,t),L=!1},d(t){t&&g(e),y(i),y(u),y(b),y(S)}}}function ie(t){return F((()=>{new V("#typer",{strings:["ban","kick","remove-user"],typeSpeed:100,loop:!0,backDelay:800})})),[]}class ae extends e{constructor(t){super(),s(this,t,ie,ce,n,{})}}function $e(t,e,s){const n=t.slice();return n[3]=e[s],n[5]=s,n}function ue(t){let e,s,n,o,r=t[3]+"";function u(){return t[2](t[5])}return{c(){e=l("li"),s=b(r),c(e,"class","svelte-1arq3t0"),i(e,"active",t[5]==t[0])},m(t,l){a(t,e,l),w(e,s),n||(o=$(e,"click",u),n=!0)},p(s,n){t=s,1&n&&i(e,"active",t[5]==t[0])},d(t){t&&g(e),n=!1,o()}}}function de(t){let e,s,n=t[1],o=[];for(let l=0;l<n.length;l+=1)o[l]=ue($e(t,n,l));return{c(){e=l("div"),s=l("ul");for(let t=0;t<o.length;t+=1)o[t].c();c(s,"class","svelte-1arq3t0"),c(e,"class","navbar svelte-1arq3t0")},m(t,n){a(t,e,n),w(e,s);for(let e=0;e<o.length;e+=1)o[e].m(s,null)},p(t,[e]){if(3&e){let l;for(n=t[1],l=0;l<n.length;l+=1){const r=$e(t,n,l);o[l]?o[l].p(r,e):(o[l]=ue(r),o[l].c(),o[l].m(s,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},i:_,o:_,d(t){t&&g(e),C(o,t)}}}function me(t,e,s){let{active:n=0}=e;return t.$$set=t=>{"active"in t&&s(0,n=t.active)},[n,["Home","Discord Bots","Websites","Minecraft"],t=>{s(0,n=t)}]}class pe extends e{constructor(t){super(),s(this,t,me,de,n,{active:0})}}function fe(t,e,s){const n=t.slice();return n[2]=e[s],n}function ge(t){let e;return{c(){e=b("Websites")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function ve(t){let e,s,n;return{c(){e=b("Web Development done right.\r\n                "),s=l("br"),n=b("From backend to frontend development, integrations with\r\n                APIs and much more.")},m(t,o){a(t,e,o),a(t,s,o),a(t,n,o)},d(t){t&&g(e),t&&g(s),t&&g(n)}}}function he(t){let e;return{c(){e=b("Order now")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function we(t){let e,s,n,o;return{c(){e=l("li"),s=l("img"),o=v(),G(s.src,n=t[2])||c(s,"src",n),c(s,"alt",""),c(s,"class","logo svelte-1vm6gbz"),c(e,"class","glide__slide svelte-1vm6gbz")},m(t,n){a(t,e,n),w(e,s),w(e,o)},p(t,e){1&e&&!G(s.src,n=t[2])&&c(s,"src",n)},d(t){t&&g(e)}}}function xe(t){let e,s,n,o,r,i,$,u,d,m,b,k,_;o=new Mt({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),i=new At({props:{$$slots:{default:[ve]},$$scope:{ctx:t}}}),u=new nt({props:{color:"#f95f45",link:"contact",$$slots:{default:[he]},$$scope:{ctx:t}}});let S=t[0],L=[];for(let l=0;l<S.length;l+=1)L[l]=we(fe(t,S,l));return{c(){e=l("div"),s=l("div"),n=l("div"),h(o.$$.fragment),r=v(),h(i.$$.fragment),$=v(),h(u.$$.fragment),d=v(),m=l("div"),b=l("div"),k=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();c(n,"class","header svelte-1vm6gbz"),c(k,"class","glide__slides"),c(b,"data-glide-el","track"),c(b,"class","glide__track"),c(m,"class","glide svelte-1vm6gbz"),c(s,"class","main-wrapper svelte-1vm6gbz"),c(e,"class","section svelte-1vm6gbz")},m(t,l){a(t,e,l),w(e,s),w(s,n),x(o,n,null),w(n,r),x(i,n,null),w(n,$),x(u,n,null),w(s,d),w(s,m),w(m,b),w(b,k);for(let e=0;e<L.length;e+=1)L[e].m(k,null);_=!0},p(t,[e]){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s);const n={};32&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n);const l={};if(32&e&&(l.$$scope={dirty:e,ctx:t}),u.$set(l),1&e){let s;for(S=t[0],s=0;s<S.length;s+=1){const n=fe(t,S,s);L[s]?L[s].p(n,e):(L[s]=we(n),L[s].c(),L[s].m(k,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=S.length}},i(t){_||(p(o.$$.fragment,t),p(i.$$.fragment,t),p(u.$$.fragment,t),_=!0)},o(t){f(o.$$.fragment,t),f(i.$$.fragment,t),f(u.$$.fragment,t),_=!1},d(t){t&&g(e),y(o),y(i),y(u),C(L,t)}}}function ye(t,e,s){let n=["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png","https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png","https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667","https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png","https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png","https://res.cloudinary.com/simple-things/image/upload/$wpsize_!_cld_full!,w_1170,h_655,c_scale/v1585784166//PWA-Progressive-Web-App-Logo.png","https://www.webrevolutionagency.com/wp-content/uploads/2021/05/Img-Logo-PHP.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png","https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png","https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png","https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"],o=[];n=n.sort((()=>Math.random()-.5));for(let l=0;l<3;l++)o=[...o,...n];return F((()=>{new O(".glide",{perView:7,type:"slider",autoplay:"1000",hoverpause:!1,rewind:!0}).mount()})),[o]}class be extends e{constructor(t){super(),s(this,t,ye,xe,n,{})}}function ke(t){let e;return{c(){e=l("div"),c(e,"id","cube-renderer"),c(e,"class","svelte-1ercid2")},m(t,s){a(t,e,s)},p:_,i:_,o:_,d(t){t&&g(e)}}}function _e(t,e,s,n){return Math.sqrt(Math.pow(t-s,2)+Math.pow(e-n,2))}function Se(t){let e=!1;const s=new R,n=new W(25,1,.2,1e3);n.position.z=11;const o=new J({alpha:!0});o.setSize(500,500);const l=new X;s.add(l),s.rotateX(.3);const r=new Q,c=r.load("/assets/command_block.c693434e.png"),i=r.load("/assets/stone.6669fb28.png"),a=r.load("/assets/diamond_ore.840c9ffa.png");function $(t){const e=new U,s=new Z({color:16777215,map:t}),n=new K(e,s);return l.add(n),n}F((()=>{e=!0,document.getElementById("cube-renderer").appendChild(o.domElement),function t(){l.rotateY(.004),function(){if(m)console.log(d.position.x,m.x),d.position.x!=m.x?(d.position.x+=.005*(d.position.x>m.x?-1:1),Math.abs(d.position.x-m.x)<.01&&(d.position.x=m.x)):d.position.z!=m.y?(d.position.z+=.005*(d.position.z>m.y?-1:1),Math.abs(d.position.z-m.y)<.01&&(d.position.z=m.y)):m=void 0;else{const t=u.filter((t=>t.diamond));t.length>0&&(m=t.sort(((t,e)=>_e(d.position.x,d.position.z,e.x,e.y)-_e(d.position.x,d.position.z,t.x,t.y)))[0])}}(),o.render(s,n),e&&requestAnimationFrame(t)}()})),j((()=>{e=!1}));const u=[];for(let p=-1;p<2;p++)for(let t=-1;t<2;t++){const e=Math.random()<.4,s=$(e?a:i);s.translateX(p),s.translateZ(t),s.translateY(-1),u.push({cube:s,diamond:e,x:p,y:t})}const d=$(c);var m;return[]}class Le extends e{constructor(t){super(),s(this,t,Se,ke,n,{})}}function Te(t){let e;return{c(){e=b("Minecraft")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function Ce(t){let e,s,n;return{c(){e=b("Highly optimized Minecraft Extensions with garanteed no memory\r\n                leaks. "),s=l("br"),n=b(" All Plugins are fully customizable and configurable")},m(t,o){a(t,e,o),a(t,s,o),a(t,n,o)},d(t){t&&g(e),t&&g(s),t&&g(n)}}}function De(t){let e;return{c(){e=b("Order now")},m(t,s){a(t,e,s)},d(t){t&&g(e)}}}function Me(t){let e,s;return{c(){e=b("I can develop plugins for Spigot, Bukkit, PaperMC, Forge and\r\n                Fabric\r\n                "),s=l("div"),s.innerHTML='<img src="http://i.imgur.com/igYbvzR.png" alt="" class="small-img svelte-rsmwyx"/> \n                    <img src="https://avatars.githubusercontent.com/u/7608950?s=200&amp;v=4" alt="" class="small-img svelte-rsmwyx"/> \n                    <img src="https://static.spigotmc.org/img/spigot-og.png" alt="" class="small-img svelte-rsmwyx"/> \n                    <img src="https://avatars.githubusercontent.com/u/1390178?s=280&amp;v=4" alt="" class="small-img svelte-rsmwyx"/> \n                    <img src="https://avatars.githubusercontent.com/u/21025855?s=280&amp;v=4" alt="" class="small-img svelte-rsmwyx"/>',c(s,"class","small-imgs svelte-rsmwyx")},m(t,n){a(t,e,n),a(t,s,n)},d(t){t&&g(e),t&&g(s)}}}function ze(t){let e,s,n,o;return{c(){e=b("I develop my plugins as light weight as possible, making them\r\n                easy on any hardware. Garanteed no memory leaks.\r\n                "),s=l("div"),n=v(),o=l("div"),o.innerHTML='Plugin <span style="color: green;">&#39;p3ntest&#39;</span> loaded in\n                    83ms.',r(s,"height","60px"),c(o,"class","code svelte-rsmwyx")},m(t,l){a(t,e,l),a(t,s,l),a(t,n,l),a(t,o,l)},d(t){t&&g(e),t&&g(s),t&&g(n),t&&g(o)}}}function qe(t){let e,s;return{c(){e=b("You can customize every last little bit about your plugin. From\r\n                the command names to the messages, every thing can be exactly\r\n                how you want it! There is no need to edit any code, every thing\r\n                will be in a config.yml.\r\n                "),s=l("div"),s.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/2048px-JSON_vector_logo.svg.png" alt="" class="small-img svelte-rsmwyx"/> \n                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/YAML_logo_in_SVG_format.svg/1200px-YAML_logo_in_SVG_format.svg.png" alt="" class="small-img svelte-rsmwyx"/>',c(s,"class","small-imgs svelte-rsmwyx")},m(t,n){a(t,e,n),a(t,s,n)},d(t){t&&g(e),t&&g(s)}}}function Ae(t){let e,s,n,o,r,i,$;return{c(){e=b("Starting from Minecraft 1.13, I will be able to implement smart\r\n                commands. Users will get autocomplete and suggestions while\r\n                typing in the command!\r\n                "),s=l("div"),n=l("img"),r=v(),i=l("img"),G(n.src,o="/assets/cmd1.fa81f643.png")||c(n,"src","/assets/cmd1.fa81f643.png"),c(n,"alt",""),c(n,"class","small-img svelte-rsmwyx"),G(i.src,$="/assets/cmd2.5cb2ab14.png")||c(i,"src","/assets/cmd2.5cb2ab14.png"),c(i,"alt",""),c(i,"class","small-img svelte-rsmwyx"),c(s,"class","small-imgs svelte-rsmwyx")},m(t,o){a(t,e,o),a(t,s,o),w(s,n),w(s,r),w(s,i)},p:_,d(t){t&&g(e),t&&g(s)}}}function Pe(t){let e,s,n,o,l,r,c,i;return e=new Ut({props:{title:"Almost all Platforms",$$slots:{default:[Me]},$$scope:{ctx:t}}}),n=new Ut({props:{title:"Performance",$$slots:{default:[ze]},$$scope:{ctx:t}}}),l=new Ut({props:{title:"Fully Configurable",$$slots:{default:[qe]},$$scope:{ctx:t}}}),c=new Ut({props:{title:"New Command API",$$slots:{default:[Ae]},$$scope:{ctx:t}}}),{c(){h(e.$$.fragment),s=v(),h(n.$$.fragment),o=v(),h(l.$$.fragment),r=v(),h(c.$$.fragment)},m(t,$){x(e,t,$),a(t,s,$),x(n,t,$),a(t,o,$),x(l,t,$),a(t,r,$),x(c,t,$),i=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),n.$set(r);const i={};1&s&&(i.$$scope={dirty:s,ctx:t}),l.$set(i);const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),c.$set(a)},i(t){i||(p(e.$$.fragment,t),p(n.$$.fragment,t),p(l.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(l.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){y(e,t),t&&g(s),y(n,t),t&&g(o),y(l,t),t&&g(r),y(c,t)}}}function Ie(t){let e,s,n,o,i,$,u,d,m,b,k,_,S,L,T,C;return o=new Mt({props:{left:!0,$$slots:{default:[Te]},$$scope:{ctx:t}}}),$=new At({props:{left:!0,$$slots:{default:[Ce]},$$scope:{ctx:t}}}),d=new nt({props:{link:"contact",color:"#349940",$$slots:{default:[De]},$$scope:{ctx:t}}}),_=new Wt({props:{$$slots:{default:[Pe]},$$scope:{ctx:t}}}),T=new Le({}),{c(){e=l("div"),s=l("div"),n=l("div"),h(o.$$.fragment),i=v(),h($.$$.fragment),u=v(),h(d.$$.fragment),m=v(),b=l("div"),k=v(),h(_.$$.fragment),S=v(),L=l("div"),h(T.$$.fragment),c(n,"class","headers svelte-rsmwyx"),r(b,"height","30px"),c(s,"class","main svelte-rsmwyx"),c(L,"class","cube-wrapper svelte-rsmwyx"),c(e,"class","section svelte-rsmwyx")},m(t,l){a(t,e,l),w(e,s),w(s,n),x(o,n,null),w(n,i),x($,n,null),w(s,u),x(d,s,null),w(s,m),w(s,b),w(s,k),x(_,s,null),w(e,S),w(e,L),x(T,L,null),C=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),d.$set(l);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),_.$set(r)},i(t){C||(p(o.$$.fragment,t),p($.$$.fragment,t),p(d.$$.fragment,t),p(_.$$.fragment,t),p(T.$$.fragment,t),C=!0)},o(t){f(o.$$.fragment,t),f($.$$.fragment,t),f(d.$$.fragment,t),f(_.$$.fragment,t),f(T.$$.fragment,t),C=!1},d(t){t&&g(e),y(o),y($),y(d),y(_),y(T)}}}class Be extends e{constructor(t){super(),s(this,t,null,Ie,n,{})}}function Ee(t){let e,s;return e=new Ft({}),{c(){h(e.$$.fragment)},m(t,n){x(e,t,n),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function He(t){let e,s;return e=new ae({}),{c(){h(e.$$.fragment)},m(t,n){x(e,t,n),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function Ne(t){let e,s;return e=new be({}),{c(){h(e.$$.fragment)},m(t,n){x(e,t,n),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function Fe(t){let e,s;return e=new Be({}),{c(){h(e.$$.fragment)},m(t,n){x(e,t,n),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function je(t){let e,s,n,o,l,r,c,i;return e=new Tt({props:{$$slots:{default:[Ee]},$$scope:{ctx:t}}}),n=new Tt({props:{$$slots:{default:[He]},$$scope:{ctx:t}}}),l=new Tt({props:{$$slots:{default:[Ne]},$$scope:{ctx:t}}}),c=new Tt({props:{$$slots:{default:[Fe]},$$scope:{ctx:t}}}),{c(){h(e.$$.fragment),s=v(),h(n.$$.fragment),o=v(),h(l.$$.fragment),r=v(),h(c.$$.fragment)},m(t,$){x(e,t,$),a(t,s,$),x(n,t,$),a(t,o,$),x(l,t,$),a(t,r,$),x(c,t,$),i=!0},p(t,s){const o={};8&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),n.$set(r);const i={};8&s&&(i.$$scope={dirty:s,ctx:t}),l.$set(i);const a={};8&s&&(a.$$scope={dirty:s,ctx:t}),c.$set(a)},i(t){i||(p(e.$$.fragment,t),p(n.$$.fragment,t),p(l.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(l.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){y(e,t),t&&g(s),y(n,t),t&&g(o),y(l,t),t&&g(r),y(c,t)}}}function Ye(t){let e,s,n,o,r,c,i;function $(e){t[1](e)}let u={};function d(e){t[2](e)}void 0!==t[0]&&(u.active=t[0]),s=new pe({props:u}),D.push((()=>M(s,"active",$)));let m={arrows:!0,$$slots:{default:[je]},$$scope:{ctx:t}};return void 0!==t[0]&&(m.activeSection=t[0]),r=new xt({props:m}),D.push((()=>M(r,"activeSection",d))),{c(){e=l("div"),h(s.$$.fragment),o=v(),h(r.$$.fragment)},m(t,n){a(t,e,n),x(s,e,null),w(e,o),x(r,e,null),i=!0},p(t,[e]){const o={};!n&&1&e&&(n=!0,o.active=t[0],S((()=>n=!1))),s.$set(o);const l={};8&e&&(l.$$scope={dirty:e,ctx:t}),!c&&1&e&&(c=!0,l.activeSection=t[0],S((()=>c=!1))),r.$set(l)},i(t){i||(p(s.$$.fragment,t),p(r.$$.fragment,t),i=!0)},o(t){f(s.$$.fragment,t),f(r.$$.fragment,t),i=!1},d(t){t&&g(e),y(s),y(r)}}}function Ve(t,e,s){let n=0;return[n,function(t){n=t,s(0,n)},function(t){n=t,s(0,n)}]}class Ge extends e{constructor(t){super(),s(this,t,Ve,Ye,n,{})}}function Oe(t){let e,s;return e=new ct({}),{c(){h(e.$$.fragment)},m(t,n){x(e,t,n),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function Re(t){let e,s;return e=new Ge({}),{c(){h(e.$$.fragment)},m(t,n){x(e,t,n),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function We(t){let e,s,n,o;const r=[Re,Oe],c=[];function i(t,e){return"home"==t[0]?0:"contact"==t[0]?1:-1}return~(s=i(t))&&(n=c[s]=r[s](t)),{c(){e=l("div"),n&&n.c()},m(t,n){a(t,e,n),~s&&c[s].m(e,null),o=!0},p(t,[o]){let l=s;s=i(t),s!==l&&(n&&(L(),f(c[l],1,1,(()=>{c[l]=null})),T()),~s?(n=c[s],n||(n=c[s]=r[s](t),n.c()),p(n,1),n.m(e,null)):n=null)},i(t){o||(p(n),o=!0)},o(t){f(n),o=!1},d(t){t&&g(e),~s&&c[s].d()}}}function Je(t,e,s){let n;A(t,tt,(t=>s(0,n=t)));let o=n;return console.log(o),[n]}new class extends e{constructor(t){super(),s(this,t,Je,We,n,{})}}({target:document.getElementById("app")});
