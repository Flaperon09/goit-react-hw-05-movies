"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{162:function(t,e,r){r.d(e,{a:function(){return u}});var n,a=r(137),c=r(168),o=r(867).ZP.div(n||(n=(0,c.Z)(["\n    display: flex;\n    justify-content: center;\n    margin: 50px;\n"]))),s=r(184),u=function(){return(0,s.jsx)(o,{children:(0,s.jsx)(a.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},269:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n,a,c,o=r(439),s=r(689),u=r(791),i=r(899),p=r(162),h=r(168),f=r(867),l=f.ZP.div(n||(n=(0,h.Z)(["\n    padding-top: 20px;\n"]))),b=f.ZP.li(a||(a=(0,h.Z)(["\n    padding-bottom: 20px;\n    margin-left: 30px;\n"]))),d=f.ZP.h4(c||(c=(0,h.Z)(["\n    margin-top: 0;\n    margin-bottom: 10px;\n"]))),v=r(184);function m(){var t=(0,s.UO)().id,e=(0,u.useState)([]),r=(0,o.Z)(e,2),n=r[0],a=r[1],c=(0,u.useState)(!1),h=(0,o.Z)(c,2),f=h[0],m=h[1];return(0,u.useEffect)((function(){m(!0),(0,i.tx)(t).then((function(t){return a(t)})).finally((function(){return m(!1)}))}),[t]),(0,v.jsxs)(l,{children:[f&&(0,v.jsx)(p.a,{}),(0,v.jsx)("ul",{children:n.map((function(t){var e=t.author,r=t.id,n=t.content;return(0,v.jsxs)(b,{children:[(0,v.jsxs)(d,{children:["Author: ",e]}),(0,v.jsx)("p",{children:n})]},r)}))})]})}},899:function(t,e,r){r.d(e,{HI:function(){return i},M1:function(){return h},tx:function(){return l},aV:function(){return s},GC:function(){return d}});var n=r(861),a=r(757),c=r.n(a),o=r(16);function s(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://api.themoviedb.org/3/",e=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3/","trending/all/day?").concat(e));case 5:return r=t.sent,t.abrupt("return",r.data.results);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function i(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"?").concat(r));case 5:return n=t.sent,t.abrupt("return",n.data);case 9:return t.prev=9,t.t0=t.catch(0),console.error(t.t0.response.data.success),t.abrupt("return",t.t0.response.data.success);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"/credits?").concat(r));case 5:return n=t.sent,t.abrupt("return",n.data.cast);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function l(t){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"/reviews?").concat(r));case 5:return n=t.sent,t.abrupt("return",n.data.results);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837",query:e}),t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3/","search/movie?").concat(r));case 5:return n=t.sent,t.abrupt("return",n.data.results);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=269.4ebd0c8e.chunk.js.map