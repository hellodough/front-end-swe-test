var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{S as c,i as l,s as i,D as f,c as d,a as u,d as p,b as h,f as m,E as v,F as w,k as g,e as $,j as b,t as x,I as j,n as E,m as y,g as D,o as O,x as k,u as P,v as S}from"../../chunks/vendor-271f82b2.js";import{A}from"../../chunks/article-card-6c3f4e0c.js";async function C(e){const c=`https://www.obama.org/wp-json/wp/v2/updates/${e}`,l=await fetch(c);if(l.ok){const e=await l.json();return i=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&o(e,a,t[a]);return e})({},e),f={date:new Date(e.date).toLocaleDateString(),modifiedDate:new Date(e.modified_gmt).toLocaleDateString()},t(i,a(f))}var i,f;return{status:l.status,error:new Error(`Could not load ${c}`)}}function I(e){let t,a;return{c(){t=f("svg"),a=f("path"),this.h()},l(e){t=d(e,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var r=u(t);a=d(r,"path",{"fill-rule":!0,d:!0,"clip-rule":!0},1),u(a).forEach(p),r.forEach(p),this.h()},h(){h(a,"fill-rule","evenodd"),h(a,"d","M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"),h(a,"clip-rule","evenodd"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"class","h-5 w-5"),h(t,"viewBox","0 0 20 20"),h(t,"fill","currentColor")},m(e,r){m(e,t,r),v(t,a)},p:w,i:w,o:w,d(e){e&&p(t)}}}class L extends c{constructor(e){super(),l(this,e,null,I,i,{})}}function z(e){let t,a,r,s,n,o,c,l,i,f,w,C,I;return document.title=t=e[0].title.rendered,c=new L({}),C=new A({props:{articleContent:e[0],text:e[0].content.rendered,preview:!1}}),{c(){a=g(),r=$("div"),s=$("a"),n=$("div"),o=$("span"),b(c.$$.fragment),l=g(),i=$("span"),f=x("Go back"),w=g(),b(C.$$.fragment),this.h()},l(e){j('[data-svelte="svelte-kq5rkz"]',document.head).forEach(p),a=E(e),r=d(e,"DIV",{});var t=u(r);s=d(t,"A",{href:!0,class:!0});var h=u(s);n=d(h,"DIV",{class:!0});var m=u(n);o=d(m,"SPAN",{class:!0});var v=u(o);y(c.$$.fragment,v),v.forEach(p),l=E(m),i=d(m,"SPAN",{});var g=u(i);f=D(g,"Go back"),g.forEach(p),m.forEach(p),h.forEach(p),w=E(t),y(C.$$.fragment,t),t.forEach(p),this.h()},h(){h(o,"class","w-4"),h(n,"class","flex gap-x-1"),h(s,"href","/"),h(s,"class","text-indigo-500")},m(e,t){m(e,a,t),m(e,r,t),v(r,s),v(s,n),v(n,o),O(c,o,null),v(n,l),v(n,i),v(i,f),v(r,w),O(C,r,null),I=!0},p(e,[a]){(!I||1&a)&&t!==(t=e[0].title.rendered)&&(document.title=t);const r={};1&a&&(r.articleContent=e[0]),1&a&&(r.text=e[0].content.rendered),C.$set(r)},i(e){I||(k(c.$$.fragment,e),k(C.$$.fragment,e),I=!0)},o(e){P(c.$$.fragment,e),P(C.$$.fragment,e),I=!1},d(e){e&&p(a),e&&p(r),S(c),S(C)}}}async function B({page:e}){const t=e.params.slug;return{props:{article:await C(t)}}}function G(e,t,a){let{article:r}=t;return e.$$set=e=>{"article"in e&&a(0,r=e.article)},[r]}class H extends c{constructor(e){super(),l(this,e,G,z,i,{article:0})}}export{H as default,B as load};
