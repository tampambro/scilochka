var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function l(t){let e;return i(t,(t=>e=t))(),e}function a(t,e,n){t.$$.on_destroy.push(i(e,n))}function u(t,e,n,r){if(t){const o=f(t,e,n,r);return t[0](o)}}function f(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function d(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function p(t,e,n,r,o,s){if(o){const c=f(e,n,r,s);t.p(c,o)}}function h(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function m(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function $(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}function g(e){return e&&s(e.destroy)?e.destroy:t}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function _(){return b(" ")}function E(){return b("")}function L(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function R(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e){t.value=null==e?"":e}function j(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function z(t,e,n){t.classList[n?"add":"remove"](e)}let S;function H(t){S=t}function T(){if(!S)throw new Error("Function called outside component initialization");return S}function C(t){T().$$.on_mount.push(t)}function P(t,e){T().$$.context.set(t,e)}function O(t){return T().$$.context.get(t)}const q=[],N=[],I=[],B=[],U=Promise.resolve();let X=!1;function F(){X||(X=!0,U.then(D))}function K(t){I.push(t)}const V=new Set;let Y=0;function D(){const t=S;do{for(;Y<q.length;){const t=q[Y];Y++,H(t),W(t.$$)}for(H(null),q.length=0,Y=0;N.length;)N.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];V.has(e)||(V.add(e),e())}I.length=0}while(q.length);for(;B.length;)B.pop()();X=!1,V.clear(),H(t)}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const J=new Set;let G;function Q(){G={r:0,c:[],p:G}}function Z(){G.r||o(G.c),G=G.p}function tt(t,e){t&&t.i&&(J.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),G.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function nt(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function ot(t,e,r,c){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,r),c||K((()=>{const e=l.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(K)}function st(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,n,s,c,i,l,a,u=[-1]){const f=S;H(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&function(t,e){-1===t.$$.dirty[0]&&(q.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&tt(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),D()}H(f)}class it{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=t=>void 0===t,at=t=>"number"==typeof t;function ut(){let t=0;return()=>t++}const ft="undefined"==typeof window;function dt(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const pt=[];function ht(e,n=t){let r;const o=new Set;function s(t){if(c(e,t)&&(e=t,r)){const t=!pt.length;for(const t of o)t[1](),pt.push(t,e);if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return o.add(l),1===o.size&&(r=n(s)||t),c(e),()=>{o.delete(l),0===o.size&&(r(),r=null)}}}}function mt(e,n,r){const c=!Array.isArray(e),l=c?[e]:e,a=n.length<2;return u=e=>{let r=!1;const u=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=n(c?u[0]:u,e);a?e(r):d=s(r)?r:t},h=l.map(((t,e)=>i(t,(t=>{u[e]=t,f&=~(1<<e),r&&p()}),(()=>{f|=1<<e}))));return r=!0,p(),function(){o(h),d()}},{subscribe:ht(r,u).subscribe};var u}const $t=t=>`@@svnav-ctx__${t}`,gt=$t("LOCATION"),vt=$t("ROUTER"),yt=$t("ROUTE"),kt=$t("ROUTE_PARAMS"),wt=$t("FOCUS_ELEM"),xt=/^:(.+)/,bt=(t,e)=>t.substr(0,e.length)===e,_t=t=>"*"===t[0],Et=t=>t.replace(/(^\/+|\/+$)/g,"");function Lt(t,e=!1){const n=Et(t).split("/");return e?n.filter(Boolean):n}const Rt=(t,e)=>t+(e?`?${e}`:""),At=t=>`/${Et(t)}`;function Mt(...t){const e=t.map((t=>Lt(t,!0).join("/"))).join("/");return At(e)}const jt={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},zt=t=>jt[t];function St(t,e,n,r){const o=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${zt(t)} ${n||""} />`}(r||t,n),s=o?`\n\nOccurred in: ${o}`:"",c=zt(t);return`<${c}> ${"function"==typeof e?e(c):e}${s}`}const Ht=t=>(...e)=>t(St(...e)),Tt=Ht((t=>{throw new Error(t)})),Ct=Ht(console.warn);function Pt(t,e){return{route:t,score:t.default?0:Lt(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>xt.test(t))(e)?n+=2:_t(e)?n-=5:n+=3,n}),0),index:e}}function Ot(t,e){let n,r;const[o]=e.split("?"),s=Lt(o),c=""===s[0],i=function(t){return t.map(Pt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,o=i.length;t<o;t++){const{route:o}=i[t];let l=!1;const a={},u=t=>({...o,params:a,uri:t});if(o.default){r=u(e);continue}const f=Lt(o.fullPath),d=Math.max(s.length,f.length);let p=0;for(;p<d;p++){const t=f[p],e=s[p];if(!lt(t)&&_t(t)){const e="*"===t?"*":t.slice(1);a[e]=s.slice(p).map(decodeURIComponent).join("/");break}if(lt(e)){l=!0;break}const n=xt.exec(t);if(n&&!c){const t=decodeURIComponent(e);a[n[1]]=t}else if(t!==e){l=!0;break}}if(!l){n=u(Mt(...s.slice(0,p)));break}}return n||r||null}function qt(t,e){return Ot([t],e)}function Nt(t,e){const{pathname:n,hash:r="",search:o="",state:s}=t,c=Lt(e,!0),i=Lt(n,!0);for(;c.length;)c[0]!==i[0]&&Tt(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),c.shift(),i.shift();return{pathname:Mt(...i),hash:r,search:o,state:s}}const It=t=>1===t.length?"":t;function Bt(t){const e=t.indexOf("?"),n=t.indexOf("#"),r=-1!==e,o=-1!==n,s=o?It(t.substr(n)):"",c=o?t.substr(0,n):t,i=r?It(c.substr(e)):"";return{pathname:r?c.substr(0,e):c,search:i,hash:s}}function Ut(t,e,n){return Mt(n,function(t,e){if(bt(t,"/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),s=Lt(n),c=Lt(o);if(""===s[0])return Rt(o,r);if(!bt(s[0],".")){const t=c.concat(s).join("/");return Rt(("/"===o?"":"/")+t,r)}const i=c.concat(s),l=[];return i.forEach((t=>{".."===t?l.pop():"."!==t&&l.push(t)})),Rt(`/${l.join("/")}`,r)}(t,e))}function Xt(t,e){const n=At(t.replace(/\*.*$/,""));const r=Lt(n,!0),o=qt({fullPath:n},Mt(...Lt(e,!0).slice(0,r.length)));return o&&o.uri}const Ft="POP";function Kt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Vt(t,e){return{...Bt(e),state:t}}const Yt=!(ft||!window.document||!window.document.createElement),Dt=!ft&&"null"===window.location.origin,Wt=function(t){let e=[],n=Kt(t),r=Ft;const o=(t=e)=>t.forEach((t=>t({location:n,action:r})));return{get location(){return n},listen(s){e.push(s);o([s]);const c=dt(t,"popstate",(()=>{n=Kt(t),r=Ft,o([s])}));return()=>{c(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:c={},replace:i=!1}=s||{};if(r=i?"REPLACE":"PUSH",at(e))s&&Ct(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=Ft,t.history.go(e);else{const n={...c,_key:Math.random().toString(36).substring(2)};try{t.history[i?"replaceState":"pushState"](n,"",e)}catch(n){t.location[i?"replace":"assign"](e)}}n=Kt(t),o()}}}(Yt&&!Dt?window:function(t="/"){let e=0,n=[Vt(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,r,o){e++,n=n.slice(0,e),n.push(Vt(t,o))},replaceState(t,r,o){n[e]=Vt(t,o)},go(t){const r=e+t;r<0||r>n.length-1||(e=r)}}}}()),{navigate:Jt}=Wt;let Gt=null,Qt=!0;function Zt(t){(!Gt||t.level>Gt.level||t.level===Gt.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<n.length;r++){const o=n[r],s=Number(o.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,Gt.routerId))&&(Gt=t)}function te(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const r=()=>{t.removeAttribute(e),n()};n=dt(t,"blur",r)}return t.focus(),document.activeElement===t}catch(t){return!1}}function ee(t,e){return Number(t.dataset.svnavRouteEnd)===e}function ne(t,e=document){return e.querySelector(t)}function re(t){Promise.resolve(l(t.focusElement)).then((e=>{const n=e||function(t){let e=ne(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!ee(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=ne("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||Ct(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);te(n)||te(document.documentElement)}))}const oe=(t,e,n)=>(r,o)=>(F(),U).then((()=>{if(Gt&&!Qt){if(r&&re(Gt.route),t.announcements&&o){const{path:r,fullPath:o,meta:s,params:c,uri:i}=Gt.route,a=t.createAnnouncement({path:r,fullPath:o,meta:s,params:c,uri:i},l(n));Promise.resolve(a).then((t=>{e.set(t)}))}Gt=null}else Qt=!1}));function se(t){let e,n,r,o,s;const c=t[20].default,i=u(c,t,t[19],null);let l=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=w("div"),n=b(t[0]),R(e,"role","status"),R(e,"aria-atomic","true"),R(e,"aria-live","polite"),R(e,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,r){y(t,e,r),v(e,n)},p(t,e){1&e[0]&&A(n,t[0])},d(t){t&&k(e)}}}(t);return{c(){e=w("div"),n=_(),i&&i.c(),r=_(),l&&l.c(),o=E(),j(e,"display","none"),R(e,"aria-hidden","true"),R(e,"data-svnav-router",t[3])},m(t,c){y(t,e,c),y(t,n,c),i&&i.m(t,c),y(t,r,c),l&&l.m(t,c),y(t,o,c),s=!0},p(t,e){i&&i.p&&(!s||524288&e[0])&&p(i,c,t,t[19],s?d(c,t[19],e,null):h(t[19]),null),t[2]&&t[4]&&t[1].announcements&&l.p(t,e)},i(t){s||(tt(i,t),s=!0)},o(t){et(i,t),s=!1},d(t){t&&k(e),t&&k(n),i&&i.d(t),t&&k(r),l&&l.d(t),t&&k(o)}}}const ce=ut(),ie="/";function le(t,e,n){let r,o,s,c,i,{$$slots:l={},$$scope:u}=e,{basepath:f=ie}=e,{url:d=null}=e,{history:p=Wt}=e,{primary:h=!0}=e,{a11y:m={}}=e;const $={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},g=f,v=At(f),y=O(gt),k=O(vt),w=!y,x=ce(),b=h&&!(k&&!k.manageFocus),_=ht("");a(t,_,(t=>n(0,i=t)));const E=ht([]);a(t,E,(t=>n(18,c=t)));const L=ht(null);a(t,L,(t=>n(16,o=t)));let R=!1;const A=w?0:k.level+1,M=w?ht(Nt(ft?Bt(d):p.location,v)):y;a(t,M,(t=>n(15,r=t)));const j=ht(r);a(t,j,(t=>n(17,s=t)));const z=oe($,_,M),S=t=>e=>e.filter((e=>e.id!==t));return w||f===ie||Ct(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),w&&(C((()=>p.listen((t=>{const e=Nt(t.location,v);j.set(r),M.set(e)})))),P(gt,M)),P(vt,{activeRoute:L,registerRoute:function(t){if(ft){if(R)return;const e=qt(t,r.pathname);if(e)return R=!0,e}else E.update((e=>{const n=S(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){E.update(S(t))},manageFocus:b,level:A,id:x,history:w?p:k.history,basepath:w?v:k.basepath}),t.$$set=t=>{"basepath"in t&&n(10,f=t.basepath),"url"in t&&n(11,d=t.url),"history"in t&&n(12,p=t.history),"primary"in t&&n(13,h=t.primary),"a11y"in t&&n(14,m=t.a11y),"$$scope"in t&&n(19,u=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&Ct(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Ot(c,r.pathname);L.set(t)}if(163840&t.$$.dirty[0]&&w){const t=!!r.hash,e=!t&&b,n=!t||r.pathname!==s.pathname;z(e,n)}65536&t.$$.dirty[0]&&b&&o&&o.primary&&Zt({level:A,routerId:x,route:o})},[i,$,w,x,b,_,E,L,M,j,f,d,p,h,m,r,o,s,c,u,l]}var ae=class extends it{constructor(t){super(),ct(this,t,le,se,c,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function ue(t,e,n=vt,r=3){O(n)||Tt(t,(t=>`You cannot use ${t} outside of a ${zt(r)}.`),e)}function fe(){return ue(5),(t=>{const{subscribe:e}=O(t);return{subscribe:e}})(gt)}function de(){const t=O(yt);return t?mt(t,(t=>t.base)):ht("/")}function pe(){ue(7);const t=function(){ue(10);const t=de(),{basepath:e}=O(vt);return n=>Ut(n,l(t),e)}(),{navigate:e}=function(){const{history:t}=O(vt);return t}();return(n,r)=>{const o=at(n)?n:t(n);return e(o,r)}}const he=t=>({params:16&t,location:8&t}),me=t=>({params:ft?l(t[9]):t[4],location:t[3],navigate:t[10]});function $e(t){let e,n;return e=new ae({props:{primary:t[1],$$slots:{default:[ye]},$$scope:{ctx:t}}}),{c(){rt(e.$$.fragment)},m(t,r){ot(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.primary=t[1]),264217&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function ge(t){let e;const n=t[17].default,r=u(n,t,t[18],me);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,o){r&&r.p&&(!e||262168&o)&&p(r,n,t,t[18],e?d(n,t[18],o,he):h(t[18]),me)},i(t){e||(tt(r,t),e=!0)},o(t){et(r,t),e=!1},d(t){r&&r.d(t)}}}function ve(t){let n,r,o;const s=[{location:t[3]},{navigate:t[10]},ft?l(t[9]):t[4],t[11]];var c=t[0];function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&rt(n.$$.fragment),r=E()},m(t,e){n&&ot(n,t,e),y(t,r,e),o=!0},p(t,e){const o=3608&e?function(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(s,[8&e&&{location:t[3]},1024&e&&{navigate:t[10]},528&e&&nt(ft?l(t[9]):t[4]),2048&e&&nt(t[11])]):{};if(c!==(c=t[0])){if(n){Q();const t=n;et(t.$$.fragment,1,0,(()=>{st(t,1)})),Z()}c?(n=new c(i()),rt(n.$$.fragment),tt(n.$$.fragment,1),ot(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&tt(n.$$.fragment,t),o=!0)},o(t){n&&et(n.$$.fragment,t),o=!1},d(t){t&&k(r),n&&st(n,t)}}}function ye(t){let e,n,r,o;const s=[ve,ge],c=[];function i(t,e){return null!==t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=E()},m(t,n){c[e].m(t,n),y(t,r,n),o=!0},p(t,o){let l=e;e=i(t),e===l?c[e].p(t,o):(Q(),et(c[l],1,1,(()=>{c[l]=null})),Z(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){c[e].d(t),t&&k(r)}}}function ke(t){let e,n,r,o,s,c=t[2]&&$e(t);return{c(){e=w("div"),n=_(),c&&c.c(),r=_(),o=w("div"),j(e,"display","none"),R(e,"aria-hidden","true"),R(e,"data-svnav-route-start",t[5]),j(o,"display","none"),R(o,"aria-hidden","true"),R(o,"data-svnav-route-end",t[5])},m(t,i){y(t,e,i),y(t,n,i),c&&c.m(t,i),y(t,r,i),y(t,o,i),s=!0},p(t,[e]){t[2]?c?(c.p(t,e),4&e&&tt(c,1)):(c=$e(t),c.c(),tt(c,1),c.m(r.parentNode,r)):c&&(Q(),et(c,1,1,(()=>{c=null})),Z())},i(t){s||(tt(c),s=!0)},o(t){et(c),s=!1},d(t){t&&k(e),t&&k(n),c&&c.d(t),t&&k(r),t&&k(o)}}}const we=ut();function xe(t,n,r){let o;const s=["path","component","meta","primary"];let c,i,l,u,f=$(n,s),{$$slots:d={},$$scope:p}=n,{path:h=""}=n,{component:g=null}=n,{meta:v={}}=n,{primary:y=!0}=n;ue(2,n);const k=we(),{registerRoute:w,unregisterRoute:x,activeRoute:b}=O(vt);a(t,b,(t=>r(15,c=t)));const _=de();a(t,_,(t=>r(16,l=t)));const E=fe();a(t,E,(t=>r(3,i=t)));const L=ht(null);let R;const A=ht(),M=ht({});a(t,M,(t=>r(4,u=t))),P(yt,A),P(kt,M),P(wt,L);const j=pe();var z;return ft||(z=()=>x(k),T().$$.on_destroy.push(z)),t.$$set=t=>{r(23,n=e(e({},n),m(t))),r(11,f=$(n,s)),"path"in t&&r(12,h=t.path),"component"in t&&r(0,g=t.component),"meta"in t&&r(13,v=t.meta),"primary"in t&&r(1,y=t.primary),"$$scope"in t&&r(18,p=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===h,e=Mt(l,h),n={id:k,path:h,meta:v,default:t,fullPath:t?"":e,base:t?l:Xt(e,i.pathname),primary:y,focusElement:L};A.set(n),r(14,R=w(n))}if(49152&t.$$.dirty&&r(2,o=!!(R||c&&c.id===k)),49156&t.$$.dirty&&o){const{params:t}=R||c;M.set(t)}},n=m(n),[g,y,o,i,u,k,b,_,E,M,j,f,h,v,R,c,l,d,p]}var be=class extends it{constructor(t){super(),ct(this,t,xe,ke,c,{path:12,component:0,meta:13,primary:1})}};const _e=(t=>(e,n=Jt)=>({destroy:dt(e,"click",(e=>{const r=t(e);if(r&&""===r.target&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e)){e.preventDefault();const t=r.pathname+r.search+r.hash;n(t,{replace:r.hasAttribute("replace")})}}))}))((t=>t.currentTarget));function Ee(e){let n,r,o,s;return{c(){n=w("main"),r=w("a"),r.innerHTML='<div class="animated-div svelte-p42odk"><p class="intro-text svelte-p42odk">SCILOCHKA</p> \n      <div class="intro-text-underscore svelte-p42odk"></div></div>',R(r,"class","intro-wrapper svelte-p42odk"),R(r,"href","/about"),R(n,"class","intro-main svelte-p42odk")},m(t,e){y(t,n,e),v(n,r),o||(s=g(_e.call(null,r)),o=!0)},p:t,i:t,o:t,d(t){t&&k(n),o=!1,s()}}}class Le extends it{constructor(t){super(),ct(this,t,null,Ee,c,{})}}const Re=ht(!1),Ae=ht("Test test test"),Me=ht(void 0),je=ht(!1),ze=ht([]),Se=ht(),He=ht(0);function Te(e){let n,r,o,s,c,i;return{c(){n=x("svg"),r=x("rect"),o=x("rect"),s=x("rect"),R(r,"width","100"),R(r,"height","20"),R(r,"class","svelte-ue4hr6"),R(o,"y","30"),R(o,"width","100"),R(o,"height","20"),R(o,"class","svelte-ue4hr6"),R(s,"class","blue-rect svelte-ue4hr6"),R(s,"y","60"),R(s,"width","100"),R(s,"height","20"),R(n,"class","burger svelte-ue4hr6"),R(n,"width","40"),R(n,"height","40"),R(n,"viewBox","0 0 100 80")},m(t,l){y(t,n,l),v(n,r),v(n,o),v(n,s),c||(i=L(n,"click",e[0]),c=!0)},p:t,i:t,o:t,d(t){t&&k(n),c=!1,i()}}}function Ce(t){return[function(){Re.set(!0)}]}class Pe extends it{constructor(t){super(),ct(this,t,Ce,Te,c,{})}}function Oe(t){const e=e=>{t.contains(e.target)||t.dispatchEvent(new CustomEvent("outclick"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function qe(e){let n,r,s,c,i,l,a,u,f,d,p,h,m,$;return{c(){n=w("div"),r=w("nav"),s=w("a"),s.textContent="Создать сцылочку",c=_(),i=w("a"),i.textContent="Архив",l=_(),a=w("div"),a.innerHTML='<p class="help__header svelte-r2lgj1">Подсказки</p> \n    <div class="help_action"><p class="help_action_title svelte-r2lgj1">Создание сцылочки:</p> \n      <ul class="help_text svelte-r2lgj1"><li>заголовок обязателен для заполнения;</li> \n        <li>лимит для заголовка - 200 символов;</li> \n        <li>лимит для основной части - 5000 символов.</li></ul></div> \n\n    <div class="help_action"><p class="help_action_title svelte-r2lgj1">Просмотр архива:</p> \n      <ul class="help_text svelte-r2lgj1"><li>Если вы создали сцылочку, но не видите её а архиве, нажмите кнопку &quot;обновить&quot;</li></ul></div>',u=_(),f=w("footer"),d=w("a"),d.textContent="e-mail",p=_(),h=w("a"),h.textContent="О сайте",R(s,"class","side-menu_link underline-link svelte-r2lgj1"),R(s,"href","/create"),R(i,"class","side-menu_link underline-link svelte-r2lgj1"),R(i,"href","/archive"),R(r,"class","side-menu_nav svelte-r2lgj1"),R(a,"class","help"),R(d,"href","mailto:scilochka@yandex.ru"),R(d,"class","svelte-r2lgj1"),R(h,"class","footer-link svelte-r2lgj1"),R(h,"href","/about"),R(f,"class","side-menu-footer svelte-r2lgj1"),R(n,"class","side-menu_wrapper svelte-r2lgj1"),z(n,"active",e[0])},m(t,o){y(t,n,o),v(n,r),v(r,s),v(r,c),v(r,i),v(n,l),v(n,a),v(n,u),v(n,f),v(f,d),v(f,p),v(f,h),m||($=[g(_e.call(null,s)),g(_e.call(null,i)),g(_e.call(null,h)),g(Oe.call(null,n)),L(n,"outclick",e[1]),L(n,"click",e[2])],m=!0)},p(t,[e]){1&e&&z(n,"active",t[0])},i:t,o:t,d(t){t&&k(n),m=!1,o($)}}}function Ne(t,e,n){let r;function o(){Re.set(!1)}return a(t,Re,(t=>n(0,r=t))),[r,o,function(t){const e=t.target;(e.classList.contains("side-menu_link")||e.classList.contains("footer-link"))&&o()}]}class Ie extends it{constructor(t){super(),ct(this,t,Ne,qe,c,{})}}function Be(t,e){Ae.set(t),Me.set(e),je.set(!0)}function Ue(e){let n,r,o;return{c(){n=w("a"),n.innerHTML='<div class="animated-div svelte-1dxt9yr"><p class="intro-text svelte-1dxt9yr">SCILOCHKA</p> \n    <div class="intro-text-underscore svelte-1dxt9yr"></div></div>',R(n,"class","intro-wrapper svelte-1dxt9yr"),R(n,"href","/about")},m(t,e){y(t,n,e),r||(o=g(_e.call(null,n)),r=!0)},p:t,i:t,o:t,d(t){t&&k(n),r=!1,o()}}}class Xe extends it{constructor(t){super(),ct(this,t,null,Ue,c,{})}}function Fe(t){let e,n,r,s,c,i,l,a,u,f,d,p,h,m,$,g,x,E,j,z,S,H;return n=new Xe({}),{c(){e=w("main"),rt(n.$$.fragment),r=_(),s=w("button"),s.innerHTML='<span class="svelte-13f1uvo">Создать</span> \n\n    <div class="svg-wrap svelte-13f1uvo"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16"><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"></path></svg></div>',c=_(),i=w("div"),l=w("h1"),a=_(),u=w("p"),f=b(t[2]),d=b("/200"),p=_(),h=w("hr"),m=_(),$=w("textarea"),g=_(),x=w("p"),E=b(t[1]),j=b("/5000"),R(s,"class","common-btn svelte-13f1uvo"),R(s,"id","create_scilochku"),R(s,"type","button"),R(l,"class","create-header focus-elem pink svelte-13f1uvo"),R(l,"contenteditable","true"),R(u,"class","character-counter header svelte-13f1uvo"),R($,"class","create-content focus-elem blue svelte-13f1uvo"),R(x,"class","character-counter content svelte-13f1uvo"),R(i,"class","inner-wrapper"),R(e,"class","overall-wrapper")},m(o,k){y(o,e,k),ot(n,e,null),v(e,r),v(e,s),v(e,c),v(e,i),v(i,l),v(i,a),v(i,u),v(u,f),v(u,d),v(i,p),v(i,h),v(i,m),v(i,$),M($,t[0]),v(i,g),v(i,x),v(x,E),v(x,j),z=!0,S||(H=[L(s,"click",t[4]),L(l,"input",t[3]),L($,"input",t[6])],S=!0)},p(t,[e]){(!z||4&e)&&A(f,t[2]),1&e&&M($,t[0]),(!z||2&e)&&A(E,t[1])},i(t){z||(tt(n.$$.fragment,t),z=!0)},o(t){et(n.$$.fragment,t),z=!1},d(t){t&&k(e),st(n),S=!1,o(H)}}}function Ke(t,e,n){let r,o;const s=pe();let c="",i="";return C((()=>{!function(t){function e(){const t=window.pageYOffset;this.style.height="auto",this.style.height=this.scrollHeight+"px",window.scrollTo(0,t)}t.forEach((t=>{t.addEventListener("input",e,!1)}))}(document.querySelectorAll(".create-content"));const t=document.querySelector(".create-header");navigator.userAgent.match(/firefox|fxios/i)&&(t.style.display="block"),t.focus()})),t.$$.update=()=>{32&t.$$.dirty&&n(2,r=c.length),1&t.$$.dirty&&n(1,o=i.length)},[i,o,r,function(t){n(5,c=t.target.textContent)},function(){((null==c?void 0:c.length)>200?(Be("Длина заголовка не должна превышать 200 символов.",void 0),1):0===c.length?(Be("Сцылочке нужен заголовок",void 0),1):i.length>5e3&&(Be("Длина основного текста не должна превышать 5000 символов.",void 0),1))||fetch("/api/create_scilochky",{method:"post",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:c,content:i})}).then((t=>{if(404===t.status)throw new Error("404");return t.json()})).then((t=>{console.log(t),"true"===t.success?(Be("Сцылочка создана.",!0),He.set(t.scilochka_id),s(`/scilochka/${t.scilochka_id}`)):Be("Не удалось создать сцылочку.",!1)})).catch((t=>{Be(t.message,!1),console.error(t)}))},c,function(){i=this.value,n(0,i)}]}class Ve extends it{constructor(t){super(),ct(this,t,Ke,Fe,c,{})}}function Ye(t){const e=new Date(t);console.log("time_formatting");const n={day:e.getDate(),month:e.getMonth()+1,year:e.getFullYear(),hours:e.getHours(),minutes:e.getMinutes()};for(let t in n){let e=n[t];e<10&&(n[t]=`0${e}`)}return{date:`${n.day}.${n.month}.${n.year}`,time:`${n.hours}:${n.minutes}`}}function De(t){let e,n,r,o,s,c,i,l,a,u=t[0]?.title+"",f=t[0]?.content+"",d=t[1]&&We(t);return{c(){d&&d.c(),e=_(),n=w("div"),r=w("h1"),o=b(u),s=_(),c=w("hr"),i=_(),l=w("p"),a=b(f),R(r,"class","scilochka_header svelte-ilusko"),R(l,"class","scilochka_content svelte-ilusko"),R(n,"class","inner-wrapper")},m(t,u){d&&d.m(t,u),y(t,e,u),y(t,n,u),v(n,r),v(r,o),v(n,s),v(n,c),v(n,i),v(n,l),v(l,a)},p(t,n){t[1]?d?d.p(t,n):(d=We(t),d.c(),d.m(e.parentNode,e)):d&&(d.d(1),d=null),1&n&&u!==(u=t[0]?.title+"")&&A(o,u),1&n&&f!==(f=t[0]?.content+"")&&A(a,f)},d(t){d&&d.d(t),t&&k(e),t&&k(n)}}}function We(t){let e,n,r,o,s,c,i,l,a,u=t[1]?.date+"",f=t[1]?.time+"";return{c(){e=w("p"),n=b("Создано: "),r=w("br"),o=_(),s=b(u),c=_(),i=w("br"),l=_(),a=b(f),R(e,"class","scilochka-date svelte-ilusko")},m(t,u){y(t,e,u),v(e,n),v(e,r),v(e,o),v(e,s),v(e,c),v(e,i),v(e,l),v(e,a)},p(t,e){2&e&&u!==(u=t[1]?.date+"")&&A(s,u),2&e&&f!==(f=t[1]?.time+"")&&A(a,f)},d(t){t&&k(e)}}}function Je(t){let e,n,r,o;n=new Xe({});let s=t[2]&&De(t);return{c(){e=w("main"),rt(n.$$.fragment),r=_(),s&&s.c(),R(e,"class","overall-wrapper")},m(t,c){y(t,e,c),ot(n,e,null),v(e,r),s&&s.m(e,null),o=!0},p(t,[n]){t[2]?s?s.p(t,n):(s=De(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(t){o||(tt(n.$$.fragment,t),o=!0)},o(t){et(n.$$.fragment,t),o=!1},d(t){t&&k(e),st(n),s&&s.d()}}}function Ge(t,e,n){let r,o,{id:s}=e,c=!1;function i(){fetch(`/api/scilochka/${s}`,{method:"get",headers:{"X-Requested-With":"XMLHttpRequest"}}).then((t=>{if(404===t.status)throw new Error("404");return t.json()})).then((t=>{n(0,r=t),n(1,o=Ye(r.date)),n(2,c=!0)})).catch((t=>{n(0,r=function(t){return console.error(t.message),n(0,r={content:"",date:"",id:0,title:"404"===t.message?"Такой сцылочки нет, сарян :p":"Что-то пошло не так =("})}(t)),n(2,c=!0)}))}return C((()=>{const t=l(Se);if(t&&!l(He))return n(0,r=t),n(1,o=Ye(t.date)),void n(2,c=!0);l(He)&&He.set(0),i()})),t.$$set=t=>{"id"in t&&n(3,s=t.id)},[r,o,c,s]}class Qe extends it{constructor(t){super(),ct(this,t,Ge,Je,c,{id:3})}}function Ze(t){let e,n,r,o,s;return{c(){e=w("div"),n=w("div"),n.innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.2 138.2"><circle class="path circle svelte-zkdok1" fill="none" stroke-miterlimit="10" cx="69.1" cy="69.1" r="62.1"></circle><line class="path line exclamation svelte-zkdok1" fill="none" stroke-miterlimit="10" x1="69.1" y1="42" x2="69.1" y2="76.3"></line><line class="path line exclamation svelte-zkdok1" fill="none" stroke-miterlimit="10" x1="69.1" y1="86.3" x2="69.1" y2="96.3"></line></svg>',r=_(),o=w("p"),s=b(t[2]),R(n,"class","alert_img-wrap svelte-zkdok1"),R(o,"class","alert_text svelte-zkdok1"),R(e,"class","alert_warning svelte-zkdok1")},m(t,c){y(t,e,c),v(e,n),v(e,r),v(e,o),v(o,s)},p(t,e){4&e&&A(s,t[2])},d(t){t&&k(e)}}}function tn(t){let e,n,r,o,s;return{c(){e=w("div"),n=w("div"),n.innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.2 138.2"><circle class="path circle svelte-zkdok1" fill="none" stroke-miterlimit="10" cx="69.1" cy="69.1" r="62.1"></circle><line class="path line svelte-zkdok1" fill="none" stroke-miterlimit="10" x1="38.4" y1="41.9" x2="99.8" y2="96.3"></line><line class="path line svelte-zkdok1" fill="none" stroke-miterlimit="10" x1="99.8" y1="42" x2="38.4" y2="96.2"></line></svg>',r=_(),o=w("p"),s=b(t[2]),R(n,"class","alert_img-wrap svelte-zkdok1"),R(o,"class","alert_text svelte-zkdok1"),R(e,"class","alert_fail svelte-zkdok1")},m(t,c){y(t,e,c),v(e,n),v(e,r),v(e,o),v(o,s)},p(t,e){4&e&&A(s,t[2])},d(t){t&&k(e)}}}function en(t){let e,n,r,o,s;return{c(){e=w("div"),n=w("div"),n.innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.2 138.2"><circle class="path circle svelte-zkdok1" fill="none" stroke-miterlimit="10" cx="69.1" cy="69.1" r="62.1"></circle><polyline class="path check svelte-zkdok1" fill="none" stroke-miterlimit="10" points="98.2,46.2 55.5,92.8 33.8,70.5 "></polyline></svg>',r=_(),o=w("p"),s=b(t[2]),R(n,"class","alert_img-wrap svelte-zkdok1"),R(o,"class","alert_text svelte-zkdok1"),R(e,"class","alert_success svelte-zkdok1")},m(t,c){y(t,e,c),v(e,n),v(e,r),v(e,o),v(o,s)},p(t,e){4&e&&A(s,t[2])},d(t){t&&k(e)}}}function nn(e){let n,r,s;function c(t,e){return!0===t[1]?en:!1===t[1]?tn:void 0===t[1]?Ze:void 0}let i=c(e),l=i&&i(e);return{c(){n=w("div"),l&&l.c(),R(n,"class","alert svelte-zkdok1"),z(n,"active",e[0])},m(t,o){y(t,n,o),l&&l.m(n,null),r||(s=[L(n,"click",e[3]),L(n,"outclick",e[3]),g(Oe.call(null,n))],r=!0)},p(t,[e]){i===(i=c(t))&&l?l.p(t,e):(l&&l.d(1),l=i&&i(t),l&&(l.c(),l.m(n,null))),1&e&&z(n,"active",t[0])},i:t,o:t,d(t){t&&k(n),l&&l.d(),r=!1,o(s)}}}function rn(t,e,n){let r,o,s;return a(t,je,(t=>n(0,r=t))),a(t,Me,(t=>n(1,o=t))),a(t,Ae,(t=>n(2,s=t))),[r,o,s,function(){je.set(!1)}]}class on extends it{constructor(t){super(),ct(this,t,rn,nn,c,{})}}function sn(t,e,n){const r=t.slice();return r[5]=e[n],r[7]=n,r}function cn(t){let e,n,r,o,s,c,i,l,a,u,f,d,p,h,m,$,g,x,E=t[5].id+"",M=t[5].title+"",j=t[3](t[5].date)+"",z=t[5].content+"";return{c(){e=w("tr"),n=w("td"),r=b(E),o=_(),s=w("td"),c=w("a"),i=b(M),u=_(),f=w("td"),d=b(j),p=_(),h=w("div"),m=b(z),$=_(),R(n,"class","svelte-1gkef4g"),R(c,"class","tabel-link underline-link svelte-1gkef4g"),R(c,"href",l="/scilochka/"+t[5].id),R(c,"data-index",a=t[7]),R(s,"class","svelte-1gkef4g"),R(f,"class","svelte-1gkef4g"),R(h,"class","tooltip svelte-1gkef4g"),R(e,"class","svelte-1gkef4g")},m(l,a){var k;y(l,e,a),v(e,n),v(n,r),v(e,o),v(e,s),v(s,c),v(c,i),v(e,u),v(e,f),v(f,d),v(e,p),v(e,h),v(h,m),v(e,$),g||(x=L(c,"click",(k=t[1],function(t){return t.preventDefault(),k.call(this,t)})),g=!0)},p(t,e){1&e&&E!==(E=t[5].id+"")&&A(r,E),1&e&&M!==(M=t[5].title+"")&&A(i,M),1&e&&l!==(l="/scilochka/"+t[5].id)&&R(c,"href",l),1&e&&j!==(j=t[3](t[5].date)+"")&&A(d,j),1&e&&z!==(z=t[5].content+"")&&A(m,z)},d(t){t&&k(e),g=!1,x()}}}function ln(t){let e,n,r,o,s,c,i,l,a,u,f,d,p,h,m;n=new Xe({});let $=t[0],g=[];for(let e=0;e<$.length;e+=1)g[e]=cn(sn(t,$,e));return{c(){e=w("main"),rt(n.$$.fragment),r=_(),o=w("button"),o.innerHTML='<span class="svelte-1gkef4g">Обновить</span> \n\n    <div class="svg-wrap svelte-1gkef4g"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path></svg></div>',s=_(),c=w("div"),i=w("h1"),i.textContent="Архив сцылочек",l=_(),a=w("table"),u=w("thead"),u.innerHTML='<tr class="svelte-1gkef4g"><th class="svelte-1gkef4g">id</th> \n          <th class="svelte-1gkef4g">Заголовок</th> \n          <th class="svelte-1gkef4g">Дата создания</th></tr>',f=_(),d=w("tbody");for(let t=0;t<g.length;t+=1)g[t].c();R(o,"class","common-btn svelte-1gkef4g"),R(o,"id","refresh-archive-btn"),R(o,"type","button"),R(u,"class","svelte-1gkef4g"),R(d,"class","svelte-1gkef4g"),R(a,"class","svelte-1gkef4g"),R(c,"class","inner-wrapper"),R(e,"class","overall-wrapper")},m($,k){y($,e,k),ot(n,e,null),v(e,r),v(e,o),v(e,s),v(e,c),v(c,i),v(c,l),v(c,a),v(a,u),v(a,f),v(a,d);for(let t=0;t<g.length;t+=1)g[t].m(d,null);p=!0,h||(m=L(o,"click",t[2]),h=!0)},p(t,[e]){if(11&e){let n;for($=t[0],n=0;n<$.length;n+=1){const r=sn(t,$,n);g[n]?g[n].p(r,e):(g[n]=cn(r),g[n].c(),g[n].m(d,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=$.length}},i(t){p||(tt(n.$$.fragment,t),p=!0)},o(t){et(n.$$.fragment,t),p=!1},d(t){t&&k(e),st(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(g,t),h=!1,m()}}}function an(t,e,n){const r=pe();let o=[];function s(){fetch("/api/archive",{method:"get",headers:{"X-Requested-With":"XMLHttpRequest"}}).then((t=>t.json())).then((t=>{n(0,o=t),ze.set(t)})).catch((t=>{Be(t.message,!1),ze.set(o),console.error(t)}))}return C((()=>{const t=l(ze);t.length?n(0,o=t):s()})),[o,function(t){const e=+t.target.dataset.index,n=t.target.getAttribute("href");Se.set(o[e]),r(n)},s,function(t){const e=Ye(t);return`${e.date} \n ${e.time}`}]}class un extends it{constructor(t){super(),ct(this,t,an,ln,c,{})}}function fn(e){let n,r,o,s,c;return r=new Xe({}),{c(){n=w("main"),rt(r.$$.fragment),o=_(),s=w("div"),s.innerHTML='<h1>Scilochka</h1> \n\n    <h2>Делай ссылки, кидай ссылки, читай ссылки</h2> \n\n    <p class="svelte-2epx34">Главная цель этого сайта - дать возможность быстро создать ссылку на любой текст.</p> \n\n    <p class="svelte-2epx34">Scilochka была &quot;вдохновлена&quot; одним из сайтов инфометров, где можно было &quot;проверить&quot; инфу, и кидать кому-либо ссылку в качестве пруфа, особенно если выпадало 100%. Смысл scilochki абсолютно такой же, то есть - развлекательный.</p> \n\n    <p class="svelte-2epx34">Если кто-то не верит вам, что вы были на луне - создайте сцылочку и киньте своему недоверчивому собеседнику.</p> \n\n    <p class="svelte-2epx34">Ведь если на что-то есть ссылка в интернете, то это уже что-то =)</p>',R(s,"class","inner-wrapper"),R(n,"class","overall-wrapper")},m(t,e){y(t,n,e),ot(r,n,null),v(n,o),v(n,s),c=!0},p:t,i(t){c||(tt(r.$$.fragment,t),c=!0)},o(t){et(r.$$.fragment,t),c=!1},d(t){t&&k(n),st(r)}}}class dn extends it{constructor(t){super(),ct(this,t,null,fn,c,{})}}let pn=0,hn=0;function mn(t){"touchstart"==t.type?pn=t.changedTouches[0].screenX:"touchend"==t.type&&(hn=t.changedTouches[0].screenX,hn<pn&&Re.set(!1))}function $n(t){let e,n;return e=new Le({}),{c(){rt(e.$$.fragment)},m(t,r){ot(e,t,r),n=!0},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function gn(t){let e,n;return e=new Ve({}),{c(){rt(e.$$.fragment)},m(t,r){ot(e,t,r),n=!0},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function vn(t){let e,n;return e=new Qe({props:{id:+t[0].id}}),{c(){rt(e.$$.fragment)},m(t,r){ot(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.id=+t[0].id),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function yn(t){let e,n;return e=new un({}),{c(){rt(e.$$.fragment)},m(t,r){ot(e,t,r),n=!0},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function kn(t){let e,n;return e=new dn({}),{c(){rt(e.$$.fragment)},m(t,r){ot(e,t,r),n=!0},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function wn(t){let e,n,r,o,s,c,i,l,a,u,f,d;return e=new Ie({}),r=new be({props:{path:"/",$$slots:{default:[$n]},$$scope:{ctx:t}}}),s=new be({props:{path:"/create",$$slots:{default:[gn]},$$scope:{ctx:t}}}),i=new be({props:{path:"/scilochka/:id",$$slots:{default:[vn,({params:t})=>({0:t}),({params:t})=>t?1:0]},$$scope:{ctx:t}}}),a=new be({props:{path:"/archive",$$slots:{default:[yn]},$$scope:{ctx:t}}}),f=new be({props:{path:"/about",$$slots:{default:[kn]},$$scope:{ctx:t}}}),{c(){rt(e.$$.fragment),n=_(),rt(r.$$.fragment),o=_(),rt(s.$$.fragment),c=_(),rt(i.$$.fragment),l=_(),rt(a.$$.fragment),u=_(),rt(f.$$.fragment)},m(t,p){ot(e,t,p),y(t,n,p),ot(r,t,p),y(t,o,p),ot(s,t,p),y(t,c,p),ot(i,t,p),y(t,l,p),ot(a,t,p),y(t,u,p),ot(f,t,p),d=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const c={};3&e&&(c.$$scope={dirty:e,ctx:t}),i.$set(c);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),a.$set(l);const u={};2&e&&(u.$$scope={dirty:e,ctx:t}),f.$set(u)},i(t){d||(tt(e.$$.fragment,t),tt(r.$$.fragment,t),tt(s.$$.fragment,t),tt(i.$$.fragment,t),tt(a.$$.fragment,t),tt(f.$$.fragment,t),d=!0)},o(t){et(e.$$.fragment,t),et(r.$$.fragment,t),et(s.$$.fragment,t),et(i.$$.fragment,t),et(a.$$.fragment,t),et(f.$$.fragment,t),d=!1},d(t){st(e,t),t&&k(n),st(r,t),t&&k(o),st(s,t),t&&k(c),st(i,t),t&&k(l),st(a,t),t&&k(u),st(f,t)}}}function xn(t){let e,n,r,o,s,c;return e=new Pe({}),r=new ae({props:{$$slots:{default:[wn]},$$scope:{ctx:t}}}),s=new on({}),{c(){rt(e.$$.fragment),n=_(),rt(r.$$.fragment),o=_(),rt(s.$$.fragment)},m(t,i){ot(e,t,i),y(t,n,i),ot(r,t,i),y(t,o,i),ot(s,t,i),c=!0},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){c||(tt(e.$$.fragment,t),tt(r.$$.fragment,t),tt(s.$$.fragment,t),c=!0)},o(t){et(e.$$.fragment,t),et(r.$$.fragment,t),et(s.$$.fragment,t),c=!1},d(t){st(e,t),t&&k(n),st(r,t),t&&k(o),st(s,t)}}}function bn(t){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((t=>navigator.userAgent.match(t)))&&(document.addEventListener("touchstart",mn),document.addEventListener("touchend",mn)),[]}return new class extends it{constructor(t){super(),ct(this,t,bn,xn,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
