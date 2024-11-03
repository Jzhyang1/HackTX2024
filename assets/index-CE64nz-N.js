(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const mn=!1;var je=Array.isArray,lt=Array.from,wn=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyDescriptors,Lt=Object.prototype,bn=Array.prototype,we=Object.getPrototypeOf;const le=()=>{};function An(e){return e()}function et(e){for(var t=0;t<e.length;t++)e[t]()}const G=2,Ft=4,xe=8,at=16,J=32,Qe=64,te=128,Re=256,D=512,z=1024,ke=2048,B=4096,Ce=8192,En=16384,Be=32768,xn=1<<18,Vt=1<<19,he=Symbol("$state"),kn=Symbol("");function jt(e){return e===this.v}function Qt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Cn(e){return!Qt(e,this.v)}function Sn(e){throw new Error("effect_in_teardown")}function On(){throw new Error("effect_in_unowned_derived")}function Tn(e){throw new Error("effect_orphan")}function In(){throw new Error("effect_update_depth_exceeded")}function Dn(){throw new Error("state_descriptors_fixed")}function Nn(){throw new Error("state_prototype_fixed")}function Mn(){throw new Error("state_unsafe_local_read")}function Rn(){throw new Error("state_unsafe_mutation")}function P(e){return{f:0,v:e,reactions:null,equals:jt,version:0}}function ue(e){return Pn(P(e))}function Bt(e,t=!1){var r;const n=P(e);return t||(n.equals=Cn),k!==null&&k.l!==null&&((r=k.l).s??(r.s=[])).push(n),n}function Pn(e){return w!==null&&w.f&G&&(H===null?Xn([e]):H.push(e)),e}function S(e,t){return w!==null&&Ke()&&w.f&(G|at)&&(H===null||!H.includes(e))&&Rn(),tt(e,t)}function tt(e,t){return e.equals(t)||(e.v=t,e.version=ln(),Ht(e,z),Ke()&&m!==null&&m.f&D&&!(m.f&J)&&(T!==null&&T.includes(e)?(K(m,z),Ge(m)):X===null?zn([e]):X.push(e))),t}function Ht(e,t){var n=e.reactions;if(n!==null)for(var r=Ke(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;a&z||!r&&o===m||(K(o,t),a&(D|te)&&(a&G?Ht(o,ke):Ge(o)))}}const ut=1,ft=2,Jt=4,qn=8,Ln=16,Fn=1,Vn=2,M=Symbol();let jn=!1;function W(e,t=null,n){if(typeof e!="object"||e===null||he in e)return e;const r=we(e);if(r!==Lt&&r!==bn)return e;var i=new Map,s=je(e),o=P(0);s&&i.set("length",P(e.length));var a;return new Proxy(e,{defineProperty(u,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Dn();var v=i.get(l);return v===void 0?(v=P(f.value),i.set(l,v)):S(v,W(f.value,a)),!0},deleteProperty(u,l){var f=i.get(l);if(f===void 0)l in u&&i.set(l,P(M));else{if(s&&typeof l=="string"){var v=i.get("length"),c=Number(l);Number.isInteger(c)&&c<v.v&&S(v,c)}S(f,M),xt(o)}return!0},get(u,l,f){var _;if(l===he)return e;var v=i.get(l),c=l in u;if(v===void 0&&(!c||(_=pe(u,l))!=null&&_.writable)&&(v=P(W(c?u[l]:M,a)),i.set(l,v)),v!==void 0){var d=h(v);return d===M?void 0:d}return Reflect.get(u,l,f)},getOwnPropertyDescriptor(u,l){var f=Reflect.getOwnPropertyDescriptor(u,l);if(f&&"value"in f){var v=i.get(l);v&&(f.value=h(v))}else if(f===void 0){var c=i.get(l),d=c==null?void 0:c.v;if(c!==void 0&&d!==M)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(u,l){var d;if(l===he)return!0;var f=i.get(l),v=f!==void 0&&f.v!==M||Reflect.has(u,l);if(f!==void 0||m!==null&&(!v||(d=pe(u,l))!=null&&d.writable)){f===void 0&&(f=P(v?W(u[l],a):M),i.set(l,f));var c=h(f);if(c===M)return!1}return v},set(u,l,f,v){var I;var c=i.get(l),d=l in u;if(s&&l==="length")for(var _=f;_<c.v;_+=1){var g=i.get(_+"");g!==void 0?S(g,M):_ in u&&(g=P(M),i.set(_+"",g))}c===void 0?(!d||(I=pe(u,l))!=null&&I.writable)&&(c=P(void 0),S(c,W(f,a)),i.set(l,c)):(d=c.v!==M,S(c,W(f,a)));var p=Reflect.getOwnPropertyDescriptor(u,l);if(p!=null&&p.set&&p.set.call(v,f),!d){if(s&&typeof l=="string"){var A=i.get("length"),N=Number(l);Number.isInteger(N)&&N>=A.v&&S(A,N+1)}xt(o)}return!0},ownKeys(u){h(o);var l=Reflect.ownKeys(u).filter(c=>{var d=i.get(c);return d===void 0||d.v!==M});for(var[f,v]of i)v.v!==M&&!(f in u)&&l.push(f);return l},setPrototypeOf(){Nn()}})}function xt(e,t=1){S(e,e.v+t)}var kt,Kt,Wt;function Qn(){if(kt===void 0){kt=window;var e=Element.prototype,t=Node.prototype;Kt=pe(t,"firstChild").get,Wt=pe(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function ct(e=""){return document.createTextNode(e)}function be(e){return Kt.call(e)}function He(e){return Wt.call(e)}function y(e,t){return be(e)}function Je(e,t){{var n=be(e);return n instanceof Comment&&n.data===""?He(n):n}}function E(e,t=1,n=!1){let r=e;for(;t--;)r=He(r);return r}function Bn(e){e.textContent=""}function L(e){var t=G|z;m===null?t|=te:m.f|=Vt;const n={children:null,ctx:k,deps:null,equals:jt,f:t,fn:e,reactions:null,v:null,version:0,parent:m};if(w!==null&&w.f&G){var r=w;(r.children??(r.children=[])).push(n)}return n}function Gt(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&G?vt(r):$(r)}}}function Ut(e){var t,n=m;ce(e.parent);try{Gt(e),t=an(e)}finally{ce(n)}return t}function Yt(e){var t=Ut(e),n=(oe||e.f&te)&&e.deps!==null?ke:D;K(e,n),e.equals(t)||(e.v=t,e.version=ln())}function vt(e){Gt(e),Ae(e,0),K(e,Ce),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Xt(e){m===null&&w===null&&Tn(),w!==null&&w.f&te&&On(),_t&&Sn()}function Hn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function de(e,t,n,r=!0){var i=(e&Qe)!==0,s=m,o={ctx:k,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|z,first:null,fn:t,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var a=ae;try{Ct(!0),We(o),o.f|=En}catch(f){throw $(o),f}finally{Ct(a)}}else t!==null&&Ge(o);var u=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Vt)===0;if(!u&&!i&&r&&(s!==null&&Hn(o,s),w!==null&&w.f&G)){var l=w;(l.children??(l.children=[])).push(o)}return o}function Jn(e){const t=de(xe,null,!1);return K(t,D),t.teardown=e,t}function Pe(e){Xt();var t=m!==null&&(m.f&J)!==0&&k!==null&&!k.m;if(t){var n=k;(n.e??(n.e=[])).push({fn:e,effect:m,reaction:w})}else{var r=zt(e);return r}}function Kn(e){return Xt(),Zt(e)}function Wn(e){const t=de(Qe,e,!0);return()=>{$(t)}}function zt(e){return de(Ft,e,!1)}function Zt(e){return de(xe,e,!0)}function Z(e){return Se(e)}function Se(e,t=0){return de(xe|at|t,e,!0)}function ee(e,t=!0){return de(xe|J,e,!0,t)}function $t(e){var t=e.teardown;if(t!==null){const n=_t,r=w;St(!0),fe(null);try{t.call(null)}finally{St(n),fe(r)}}}function en(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)vt(t[n])}}function tn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;$(n,t),n=r}}function Gn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&J||$(t),t=n}}function $(e,t=!0){var n=!1;if((t||e.f&xn)&&e.nodes_start!==null){for(var r=e.nodes_start,i=e.nodes_end;r!==null;){var s=r===i?null:He(r);r.remove(),r=s}n=!0}tn(e,t&&!n),en(e),Ae(e,0),K(e,Ce);var o=e.transitions;if(o!==null)for(const u of o)u.stop();$t(e);var a=e.parent;a!==null&&a.first!==null&&nn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function nn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function qe(e,t){var n=[];dt(e,n,!0),rn(n,()=>{$(e),t&&t()})}function rn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function dt(e,t,n){if(!(e.f&B)){if(e.f^=B,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Be)!==0||(r.f&J)!==0;dt(r,t,s?n:!1),r=i}}}function Le(e){sn(e,!0)}function sn(e,t){if(e.f&B){Oe(e)&&We(e),e.f^=B;for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Be)!==0||(n.f&J)!==0;sn(n,i?t:!1),n=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let nt=!1,rt=[];function Un(){nt=!1;const e=rt.slice();rt=[],et(e)}function Yn(e){nt||(nt=!0,queueMicrotask(Un)),rt.push(e)}let Fe=!1,ae=!1,_t=!1;function Ct(e){ae=e}function St(e){_t=e}let it=[],ge=0;let w=null;function fe(e){w=e}let m=null;function ce(e){m=e}let H=null;function Xn(e){H=e}let T=null,R=0,X=null;function zn(e){X=e}let on=0,oe=!1,k=null;function ln(){return++on}function Ke(){return k!==null&&k.l===null}function Oe(e){var o,a;var t=e.f;if(t&z)return!0;if(t&ke){var n=e.deps,r=(t&te)!==0;if(n!==null){var i;if(t&Re){for(i=0;i<n.length;i++)((o=n[i]).reactions??(o.reactions=[])).push(e);e.f^=Re}for(i=0;i<n.length;i++){var s=n[i];if(Oe(s)&&Yt(s),r&&m!==null&&!oe&&!((a=s==null?void 0:s.reactions)!=null&&a.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}r||K(e,D)}return!1}function Zn(e,t,n){throw e}function an(e){var c;var t=T,n=R,r=X,i=w,s=oe,o=H,a=k,u=e.f;T=null,R=0,X=null,w=u&(J|Qe)?null:e,oe=!ae&&(u&te)!==0,H=null,k=e.ctx;try{var l=(0,e.fn)(),f=e.deps;if(T!==null){var v;if(Ae(e,R),f!==null&&R>0)for(f.length=R+T.length,v=0;v<T.length;v++)f[R+v]=T[v];else e.deps=f=T;if(!oe)for(v=R;v<f.length;v++)((c=f[v]).reactions??(c.reactions=[])).push(e)}else f!==null&&R<f.length&&(Ae(e,R),f.length=R);return l}finally{T=t,R=n,X=r,w=i,oe=s,H=o,k=a}}function $n(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&t.f&G&&(T===null||!T.includes(t))&&(K(t,ke),t.f&(te|Re)||(t.f^=Re),Ae(t,0))}function Ae(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)$n(e,n[r])}function We(e){var t=e.f;if(!(t&Ce)){K(e,D);var n=m;m=e;try{t&at?Gn(e):tn(e),en(e),$t(e);var r=an(e);e.teardown=typeof r=="function"?r:null,e.version=on}catch(i){Zn(i)}finally{m=n}}}function er(){ge>1e3&&(ge=0,In()),ge++}function tr(e){var t=e.length;if(t!==0){er();var n=ae;ae=!0;try{for(var r=0;r<t;r++){var i=e[r];i.f&D||(i.f^=D);var s=[];un(i,s),nr(s)}}finally{ae=n}}}function nr(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];!(r.f&(Ce|B))&&Oe(r)&&(We(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?nn(r):r.fn=null))}}function rr(){if(Fe=!1,ge>1001)return;const e=it;it=[],tr(e),Fe||(ge=0)}function Ge(e){Fe||(Fe=!0,queueMicrotask(rr));for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(Qe|J)){if(!(n&D))return;t.f^=D}}it.push(t)}function un(e,t){var n=e.first,r=[];e:for(;n!==null;){var i=n.f,s=(i&J)!==0,o=s&&(i&D)!==0;if(!o&&!(i&B))if(i&xe){s?n.f^=D:Oe(n)&&We(n);var a=n.first;if(a!==null){n=a;continue}}else i&Ft&&r.push(n);var u=n.next;if(u===null){let v=n.parent;for(;v!==null;){if(e===v)break e;var l=v.next;if(l!==null){n=l;continue e}v=v.parent}}n=u}for(var f=0;f<r.length;f++)a=r[f],t.push(a),un(a,t)}function h(e){var a;var t=e.f,n=(t&G)!==0;if(n&&t&Ce){var r=Ut(e);return vt(e),r}if(w!==null){H!==null&&H.includes(e)&&Mn();var i=w.deps;T===null&&i!==null&&i[R]===e?R++:T===null?T=[e]:T.push(e),X!==null&&m!==null&&m.f&D&&!(m.f&J)&&X.includes(e)&&(K(m,z),Ge(m))}else if(n&&e.deps===null){var s=e,o=s.parent;o!==null&&!((a=o.deriveds)!=null&&a.includes(s))&&(o.deriveds??(o.deriveds=[])).push(s)}return n&&(s=e,Oe(s)&&Yt(s)),e.v}function fn(e){const t=w;try{return w=null,e()}finally{w=t}}const ir=~(z|ke|D);function K(e,t){e.f=e.f&ir|t}function sr(e,t=1){var n=+h(e);return S(e,n+t),n}function V(e,t=!1,n){k={p:k,c:null,e:null,m:!1,s:e,x:null,l:null},t||(k.l={s:null,u:null,r1:[],r2:P(!1)})}function j(e){const t=k;if(t!==null){const o=t.e;if(o!==null){var n=m,r=w;t.e=null;try{for(var i=0;i<o.length;i++){var s=o[i];ce(s.effect),fe(s.reaction),zt(s.fn)}}finally{ce(n),fe(r)}}k=t.p,t.m=!0}return{}}function or(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(he in e)st(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&he in n&&st(n)}}}function st(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{st(e[r],t)}catch{}const n=we(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=qt(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}const cn=new Set,ot=new Set;function ne(e){for(var t=0;t<e.length;t++)cn.add(e[t]);for(var n of ot)n(e)}function Ne(e){var N;var t=this,n=t.ownerDocument,r=e.type,i=((N=e.composedPath)==null?void 0:N.call(e))||[],s=i[0]||e.target,o=0,a=e.__root;if(a){var u=i.indexOf(a);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var l=i.indexOf(t);if(l===-1)return;u<=l&&(o=u)}if(s=i[o]||e.target,s!==t){wn(e,"currentTarget",{configurable:!0,get(){return s||n}});var f=w,v=m;fe(null),ce(null);try{for(var c,d=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+r];if(g!==void 0&&!s.disabled)if(je(g)){var[p,...A]=g;p.apply(s,[e,...A])}else g.call(s,e)}catch(I){c?d.push(I):c=I}if(e.cancelBubble||_===t||_===null)break;s=_}if(c){for(let I of d)queueMicrotask(()=>{throw I});throw c}}finally{e.__root=t,delete e.currentTarget,fe(f),ce(v)}}}function vn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ve(e,t){var n=m;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function O(e,t){var n=(t&Fn)!==0,r=(t&Vn)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=vn(s?e:"<!>"+e),n||(i=be(i)));var o=r?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=be(o),u=o.lastChild;Ve(a,u)}else Ve(o,o);return o}}function lr(){var e=document.createDocumentFragment(),t=document.createComment(""),n=ct();return e.append(t,n),Ve(t,n),e}function C(e,t){e!==null&&e.before(t)}const ar=["touchstart","touchmove"];function ur(e){return ar.includes(e)}function F(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function fr(e,t){return cr(e,t)}const ie=new Map;function cr(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){Qn();var a=new Set,u=v=>{for(var c=0;c<v.length;c++){var d=v[c];if(!a.has(d)){a.add(d);var _=ur(d);t.addEventListener(d,Ne,{passive:_});var g=ie.get(d);g===void 0?(document.addEventListener(d,Ne,{passive:_}),ie.set(d,1)):ie.set(d,g+1)}}};u(lt(cn)),ot.add(u);var l=void 0,f=Wn(()=>{var v=n??t.appendChild(ct());return ee(()=>{if(s){V({});var c=k;c.c=s}i&&(r.$$events=i),l=e(v,r)||{},s&&j()}),()=>{var _;for(var c of a){t.removeEventListener(c,Ne);var d=ie.get(c);--d===0?(document.removeEventListener(c,Ne),ie.delete(c)):ie.set(c,d)}ot.delete(u),Ot.delete(l),v!==n&&((_=v.parentNode)==null||_.removeChild(v))}});return Ot.set(l,f),l}let Ot=new WeakMap;function vr(e,t=!1){return Me(e,new Map)}function Me(e,t,n,r){if(typeof e=="object"&&e!==null){const s=t.get(e);if(s!==void 0)return s;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(je(e)){const o=[];t.set(e,o);for(let a=0;a<e.length;a+=1)o.push(Me(e[a],t));return o}if(we(e)===Lt){const o={};t.set(e,o);for(var i in e)o[i]=Me(e[i],t);return o}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return Me(e.toJSON(),t)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function Ee(e,t,n,r=null,i=!1){var s=e,o=null,a=null,u=null,l=i?Be:0;Se(()=>{u!==(u=!!t())&&(u?(o?Le(o):o=ee(()=>n(s)),a&&qe(a,()=>{a=null})):(a?Le(a):r&&(a=ee(()=>r(s))),o&&qe(o,()=>{o=null})))},l)}let Ze=null;function dn(e,t){return t}function dr(e,t,n,r){for(var i=[],s=t.length,o=0;o<s;o++)dt(t[o].e,i,!0);var a=s>0&&i.length===0&&n!==null;if(a){var u=n.parentNode;Bn(u),u.append(n),r.clear(),Y(e,t[0].prev,t[s-1].next)}rn(i,()=>{for(var l=0;l<s;l++){var f=t[l];a||(r.delete(f.k),Y(e,f.prev,f.next)),$(f.e,!a)}})}function Ue(e,t,n,r,i,s=null){var o=e,a={flags:t,items:new Map,first:null},u=(t&Jt)!==0;if(u){var l=e;o=l.appendChild(ct())}var f=null,v=!1;Se(()=>{var c=n(),d=je(c)?c:c==null?[]:lt(c),_=d.length;if(!(v&&_===0)){v=_===0;{var g=w;_r(d,a,o,i,t,(g.f&B)!==0,r)}s!==null&&(_===0?f?Le(f):f=ee(()=>s(o)):f!==null&&qe(f,()=>{f=null})),n()}})}function _r(e,t,n,r,i,s,o){var mt,wt,bt,At;var a=(i&qn)!==0,u=(i&(ut|ft))!==0,l=e.length,f=t.items,v=t.first,c=v,d,_=null,g,p=[],A=[],N,I,b,x;if(a)for(x=0;x<l;x+=1)N=e[x],I=o(N,x),b=f.get(I),b!==void 0&&((mt=b.a)==null||mt.measure(),(g??(g=new Set)).add(b));for(x=0;x<l;x+=1){if(N=e[x],I=o(N,x),b=f.get(I),b===void 0){var gn=c?c.e.nodes_start:n;_=hr(gn,t,_,_===null?t.first:_.next,N,I,x,r,i),f.set(I,_),p=[],A=[],c=_.next;continue}if(u&&pr(b,N,x,i),b.e.f&B&&(Le(b.e),a&&((wt=b.a)==null||wt.unfix(),(g??(g=new Set)).delete(b))),b!==c){if(d!==void 0&&d.has(b)){if(p.length<A.length){var De=A[0],U;_=De.prev;var yt=p[0],Xe=p[p.length-1];for(U=0;U<p.length;U+=1)Tt(p[U],De,n);for(U=0;U<A.length;U+=1)d.delete(A[U]);Y(t,yt.prev,Xe.next),Y(t,_,yt),Y(t,Xe,De),c=De,_=Xe,x-=1,p=[],A=[]}else d.delete(b),Tt(b,c,n),Y(t,b.prev,b.next),Y(t,b,_===null?t.first:_.next),Y(t,_,b),_=b;continue}for(p=[],A=[];c!==null&&c.k!==I;)(s||!(c.e.f&B))&&(d??(d=new Set)).add(c),A.push(c),c=c.next;if(c===null)continue;b=c}p.push(b),_=b,c=b.next}if(c!==null||d!==void 0){for(var _e=d===void 0?[]:lt(d);c!==null;)(s||!(c.e.f&B))&&_e.push(c),c=c.next;var ze=_e.length;if(ze>0){var yn=i&Jt&&l===0?n:null;if(a){for(x=0;x<ze;x+=1)(bt=_e[x].a)==null||bt.measure();for(x=0;x<ze;x+=1)(At=_e[x].a)==null||At.fix()}dr(t,_e,yn,f)}}a&&Yn(()=>{var Et;if(g!==void 0)for(b of g)(Et=b.a)==null||Et.apply()}),m.first=t.first&&t.first.e,m.last=_&&_.e}function pr(e,t,n,r){r&ut&&tt(e.v,t),r&ft?tt(e.i,n):e.i=n}function hr(e,t,n,r,i,s,o,a,u){var l=Ze;try{var f=(u&ut)!==0,v=(u&Ln)===0,c=f?v?Bt(i):P(i):i,d=u&ft?P(o):o,_={i:d,v:c,k:s,a:null,e:null,prev:n,next:r};return Ze=_,_.e=ee(()=>a(e,c,d),jn),_.e.prev=n&&n.e,_.e.next=r&&r.e,n===null?t.first=_:(n.next=_,n.e.next=_.e),r!==null&&(r.prev=_,r.e.prev=_.e),_}finally{Ze=l}}function Tt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;s!==r;){var o=He(s);i.before(s),s=o}}function Y(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function gr(e,t,n,r,i){var s=e,o="",a;Se(()=>{o!==(o=t()??"")&&(a!==void 0&&($(a),a=void 0),o!==""&&(a=ee(()=>{var u=o+"",l=vn(u);Ve(be(l),l.lastChild),s.before(l)})))})}function yr(e,t,n){var r=e,i,s;Se(()=>{i!==(i=t())&&(s&&(qe(s),s=null),i&&(s=ee(()=>n(r,i))))},Be)}let It=!1;function mr(){It||(It=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function ve(e,t,n,r){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[kn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&wr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}var Dt=new Map;function wr(e){var t=Dt.get(e.nodeName);if(t)return t;Dt.set(e.nodeName,t=[]);for(var n,r=we(e),i=Element.prototype;i!==r;){n=qt(r);for(var s in n)n[s].set&&t.push(s);r=we(r)}return t}function br(e,t,n,r=n){e.addEventListener(t,n);const i=e.__on_r;i?e.__on_r=()=>{i(),r()}:e.__on_r=r,mr()}function _n(e,t,n=t){var r=Ke();br(e,"input",()=>{var i=Nt(e)?Mt(e.value):e.value;n(i),r&&i!==(i=t())&&(e.value=i??"")}),Zt(()=>{var i=t();Nt(e)&&i===Mt(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Nt(e){var t=e.type;return t==="number"||t==="range"}function Mt(e){return e===""?null:+e}function Ar(e=!1){const t=k,n=t.l.u;if(!n)return;let r=()=>or(t.s);if(e){let i=0,s={};const o=L(()=>{let a=!1;const u=t.s;for(const l in u)u[l]!==s[l]&&(s[l]=u[l],a=!0);return a&&i++,i});r=()=>h(o)}n.b.length&&Kn(()=>{Rt(t,r),et(n.b)}),Pe(()=>{const i=fn(()=>n.m.map(An));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Pe(()=>{Rt(t,r),et(n.a)})}function Rt(e,t){if(e.l.s)for(const n of e.l.s)h(n);t()}function Er(e,t,n){if(e==null)return t(void 0),le;const r=fn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function pt(e,t,n){const r=n[t]??(n[t]={store:null,source:Bt(void 0),unsubscribe:le});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=le;else{var i=!0;r.unsubscribe=Er(e,s=>{i?r.source.v=s:S(r.source,s)}),i=!1}return h(r.source)}function ht(){const e={};return Jn(()=>{for(var t in e)e[t].unsubscribe()}),e}const xr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xr);const Te=new WebSocket("https://8641-128-62-70-92.ngrok-free.app/ws"),ye={};Te||alert("can't connect to the server...");Te.onopen=e=>console.log("created websocket:",e);Te.onerror=e=>console.warn("websocket err! ",e);Te.onmessage=e=>{const t=JSON.parse(e.data);console.log("received message: value = ",t);const n=t.type,r=ye[n];if(r!==void 0){const i=[];for(let s=0;s<r.length;(s+=1)-1)r[s](t)!==0&&i.push(r[s]);ye[n]=i}};function re(e,t){ye[e]?ye[e].push(t):ye[e]=[t]}async function Ye(e){const t=JSON.stringify(e);console.log("sending message to server: value = ",t),Te.send(t)}const $e=102;function kr(e){return(Array.from(e).reduce((t,n)=>n.charCodeAt(0)+(t<<6)+(t<<16)-t,0)%$e+$e)%$e}function pn(e){return`icons/${kr(e)}.png`}var Cr=O('<div class="svelte-1u25x3l"><img alt="an icon" class="svelte-1u25x3l"> <p class="svelte-1u25x3l"> </p> <span class="svelte-1u25x3l"> </span></div>');function Sr(e,t){V(t,!0);let n=L(()=>Q.data[t.name]),r=L(()=>h(n)?"#209820":"#dc0a38"),i=L(()=>h(n)?"ready!":"waiting");const s=pn(t.name);var o=Cr(),a=y(o);ve(a,"src",s);var u=E(a,2),l=y(u),f=E(u,2),v=y(f);Z(()=>{F(l,t.name),ve(f,"style",`color: ${h(r)??""}`),F(v,h(i))}),C(e,o),j()}function Or(e,t){Ye({type:"lobby_readiness_data",newReadiness:!h(t)})}var Tr=O('<div class="center svelte-1a1n37y"><div class="holder svelte-1a1n37y"><p><!> </p> <img src="WalkingCat.gif" alt="a walking cat animation"> <button class="svelte-1a1n37y"> </button> <!></div></div>');function Ir(e,t){V(t,!0);let n=ue(0),r=L(()=>Q.data[Q.name]);const i=L(()=>Object.keys(Q.data).length>=3);let s=L(()=>h(i)?"Waiting for more players":"Waiting for everyone to be ready"),o=L(()=>h(r)?"unready":"ready");Pe(()=>{const p=setInterval(()=>{sr(n),S(n,h(n)%4)},800);return()=>clearInterval(p)});const a=[];for(let p=0;p<4;(p+=1)-1)a[p]="&nbsp".repeat(p);var u=Tr(),l=y(u),f=y(l),v=y(f);gr(v,()=>a[h(n)]);var c=E(v);Z(()=>F(c,`${h(s)??""}${"..".repeat(h(n))??""}`));var d=E(f,4);d.__click=[Or,r];var _=y(d),g=E(d,2);Ue(g,16,()=>Object.keys(Q.data),p=>p,(p,A)=>{Sr(p,{get name(){return A}})}),Z(()=>{d.disabled=!h(i),F(_,h(o))}),C(e,u),j()}ne(["click"]);var Dr=O('<li class="svelte-erodjw"><span style="color: #aa16ff"> </span> <span> </span></li>');function Nr(e,t){V(t,!0);var n=Dr(),r=y(n),i=y(r),s=E(r,2),o=y(s);Z(()=>{F(i,`${t.data.username??""}:`),F(o,t.data.text)}),C(e,n),j()}async function Mr(e,t,n){e.key==="Enter"&&(console.log("user is sending msg",h(t)),await Ye({type:"thread_send",id:n.thread.id,text:h(t)}),S(t,""))}var Rr=O("<!> <br>",1),Pr=O('<div class="holder svelte-10ixmgu"><div class="scrolling svelte-10ixmgu"><h1> </h1> <p> </p> <!></div> <input placeholder="say anything!" class="svelte-10ixmgu"></div>');function qr(e,t){V(t,!0);let n=ue(""),r=L(()=>q.threads[t.thread.id].msgs);var i=Pr(),s=y(i),o=y(s),a=y(o),u=E(o,2),l=y(u),f=E(u,2);Ue(f,17,()=>h(r),dn,(c,d)=>{var _=Rr(),g=Je(_);Nr(g,{get data(){return h(d)}}),C(c,_)});var v=E(s,2);v.__keydown=[Mr,n,t],Z(()=>{F(a,t.thread.question),F(l,`Asked by ${t.thread.asker??""} to ${t.thread.receiver??""}`)}),_n(v,()=>h(n),c=>S(n,c)),C(e,i),j()}ne(["keydown"]);var Lr=O('<button class="svelte-1slytg1">select</button>'),Fr=O('<div class="svelte-1slytg1"><img alt="an icon" class="svelte-1slytg1"> <span class="svelte-1slytg1"> </span> <!></div>');function Vr(e,t){V(t,!0);const n=ht(),r=()=>pt(me,"$selectPlayer",n);let i=L(()=>t.name===Q.name);console.log("for player: ",t.name," but we are ",Q.name);let s=L(()=>t.name+(h(i)?"(you)":""));const o=q.base,a=(o==null?void 0:o.imposters)&&(o==null?void 0:o.imposters.indexOf(t.name))!==-1,u=pn(t.name),l=a?"#dc0a38":"white";function f(){console.log("selected player ",t.name),me.set(t.name)}var v=Fr(),c=y(v);ve(c,"src",u);var d=E(c,2);ve(d,"style",`color: ${l??""}`);var _=y(d),g=E(d,2);Ee(g,()=>r()===0&&!h(i),p=>{var A=Lr();A.__click=f,C(p,A)}),Z(()=>F(_,h(s))),C(e,v),j()}ne(["click"]);async function jr(){await Ye({type:"vote_session_req"})}var Qr=O('<div class="container svelte-1wdyj4c"><div class="players svelte-1wdyj4c">Players: <!></div> <div class="data svelte-1wdyj4c"><p class="svelte-1wdyj4c"> </p> <p class="svelte-1wdyj4c"> </p></div> <button class="vote svelte-1wdyj4c">Vote</button> <div class="voting svelte-1wdyj4c"><p class="timer"> </p></div></div>');function Br(e,t){V(t,!0);let n=L(()=>{var p;return((p=q.base)==null?void 0:p.players)??[]}),r=ue("");setInterval(()=>{const p=Math.floor((Date.now()-q.base.lastVoteTime)/1e3);S(r,String(Math.floor(p/60)).padStart(2,"0")+":"+String(p%60).padStart(2,"0"))},33);var i=Qr(),s=y(i),o=E(y(s));Ue(o,17,()=>h(n),dn,(p,A)=>{Vr(p,{get name(){return h(A)}})});var a=E(s,2),u=y(a),l=y(u),f=E(u,2),v=y(f),c=E(a,2);c.__click=[jr];var d=E(c,2),_=y(d),g=y(_);Z(()=>{var p,A;F(l,`Topic: ${((p=q.base)==null?void 0:p.gameTopic)??""}`),F(v,`Word: ${((A=q.base)==null?void 0:A.gameWord)??"???"??""}`),F(g,h(r))}),C(e,i),j()}ne(["click"]);var Hr=O('<div class="emptyDiv svelte-3g5edq"><p class="svelte-3g5edq">No conversations yet! Press "ask" to ask someone something!</p></div>'),Jr=O('<div class="thread_div2 svelte-3g5edq"></div>'),Kr=O('<div class="container svelte-3g5edq"><div class="thread-div svelte-3g5edq"><!></div> <!> <div class="btm svelte-3g5edq"><input placeholder="enter a question here" class="svelte-3g5edq"> <button class="svelte-3g5edq">ask</button></div></div>');function gt(e,t){V(t,!0);const n=ht(),r=()=>pt(me,"$selectPlayer",n);let i=ue("");function s(){const d=vr(h(i));me.set(0);const _=me.subscribe(async g=>{typeof g=="string"&&(console.log("creating new thread with values: ",d,r()),await Ye({type:"thread_create",question:d,user:r()}),_())})}var o=Kr(),a=y(o),u=y(a);Ee(u,()=>q.threads.length===0,d=>{var _=Hr();C(d,_)},d=>{var _=Jr();Ue(_,21,()=>q.threads,g=>g.id,(g,p)=>{qr(g,{get thread(){return h(p)}})}),C(d,_)});var l=E(a,2);Br(l,{});var f=E(l,2),v=y(f),c=E(v,2);c.__click=s,Z(()=>c.disabled=r()===0),_n(v,()=>h(i),d=>S(i,d)),C(e,o),j()}ne(["click"]);const Wr="/assets/win-CWShILV4.gif",Gr="data:image/gif;base64,R0lGODlhMAAnAPMMAKHJ+p+n5JvK6v7y1QAAAdva1f7rvufXqfLSmPmtnwAAA5/C0gAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAMACwDAAsALQAcAAAE/5DJSSu5OJPKu7dXMRhkSQ7F9a1dOLxvkphwirFrKL4GYcgl2CtVsG1wFEJROMAADbULyldMIZNKISYoLByUvpL1OpG+CAKfj0lChExjMiN7DpAITB4CsRv15BJ0IwJ3CHkjfEIGcVeCBmkEe4eHd4COAkWRk5SMOIJomIKbhiOdOXQYaX2jiVNILjCpm0wHB26uHAG6uqJnaQICszAGtim4EgEAyssAsDwEAcBCtbUmJl/HDMnMywHOI9EwX0pV5V4HRAQLARTJ293ejgFD5xoZ5QTdFdzKuxgFj8xVgbbL3wV4ACroAlCwoQI0GgrCe8fMA0VmuyY2pCiRYQd+IDD7XeQ2st+HkChDLiSp64rIlBo3sgOELKU7kS1p5lqJs2RCnRz4zWSAcihQmgWvRAAAIfkEBQoAAwAsCAASABoAEAAAAiycjybJ7Q9ZiNTMirPevKNwOUt1Ad4Rno35dcD7vHBqlewgw6gDgrxP6dEcBQAh+QQFCgADACwIABQAFgAOAAACJZyPJsl966KctJpgHWYAZN5t3+CNDRCIX4eKqsS2acxGMVfRegEAOw==";var Ur=O('<div class="win-graphic svelte-1lbih4e"><text class="text-label win svelte-1lbih4e">You WIN</text> <img class="visual svelte-1lbih4e" width="350px" height="350px" alt=""></div>'),Yr=O('<div class="lose-graphic svelte-1lbih4e"><text class="text-label lose svelte-1lbih4e">You LOSE</text> <img class="visual svelte-1lbih4e" width="75px" height="75px" alt=""></div>'),Xr=O("<!> <div><button>Return</button></div>",1);function zr(e,t){V(t,!0);function n(){Ie.page=Ir}var r=Xr(),i=Je(r);Ee(i,()=>t.isWinner,a=>{var u=Ur(),l=E(y(u),2);ve(l,"src",Wr),C(a,u)},a=>{var u=Yr(),l=E(y(u),2);ve(l,"src",Gr),C(a,u)});var s=E(i,2),o=y(s);o.__click=n,C(e,r),j()}ne(["click"]);const se=[];function hn(e,t=le){let n=null;const r=new Set;function i(a){if(Qt(e,a)&&(e=a,n)){const u=!se.length;for(const l of r)l[1](),se.push(l,e);if(u){for(let l=0;l<se.length;l+=2)se[l][0](se[l+1]);se.length=0}}}function s(a){i(a(e))}function o(a,u=le){const l=[a,u];return r.add(l),r.size===1&&(n=t(i,s)||le),a(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}let Ie=W({page:zr}),Q=W({data:{}});re("lobby_data",e=>{Q.data=e.readiness});re("new_settings",e=>{Q.settings=e.settings});let q=W({threads:[]});re("game_state",e=>{q.base=e,Ie.page=gt,Zr()});re("game_role",e=>{q.base=e,Ie.page=gt});function Zr(){console.log("moving to the game view now"),Q.data={},Ie.page=gt}re("new_thread",e=>{q.threads.push({...e,msgs:[]}),console.log("created new thread state!")});re("new_msg",e=>{q.threads[e.threadId].msgs.push({username:e.user,text:e.text}),console.log("received message for thread")});re("thread_set",e=>{q.threads=e.threadInfo,console.log("setting entire thread information")});let me=hn(void 0);const Pt=hn([]);var $r=O('<div class="top-panel svelte-1w1iw3"><button class="svelte-1w1iw3">X</button></div>'),ei=O('<div class="full-popup svelte-1w1iw3"><div class="popup svelte-1w1iw3"><!></div></div>');function ti(e,t){V(t,!0);const n=ht(),r=()=>pt(Pt,"$popupQueue",n);let i=ue(!1),s=ue(void 0);function o(){S(i,!1)}function a(){var f;!h(i)&&r().length>0&&(S(s,W(r().shift())),(f=h(s))!=null&&f.timed&&(h(s).blocking=!0,setTimeout(o,4500)))}Pt.subscribe(()=>{h(i)||a()}),Pe(a);var u=lr(),l=Je(u);Ee(l,()=>h(i),f=>{var v=ei(),c=y(v),d=y(c);Ee(d,()=>h(s)&&!h(s).blocking,_=>{var g=$r(),p=y(g);p.__click=o,C(_,g)}),C(f,v)}),C(e,u),j()}ne(["click"]);var ni=O("<!> <main><!></main>",1);function ri(e,t){V(t,!1),Ar();var n=ni(),r=Je(n);ti(r,{});var i=E(r,2),s=y(i);yr(s,()=>Ie.page,(o,a)=>{a(o,{})}),C(e,n),j()}fr(ri,{target:document.getElementById("app")});
