"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[102],{162:function(e,t,r){r.d(t,{a:function(){return s}});var n,a=r(137),c=r(168),u=r(867).ZP.div(n||(n=(0,c.Z)(["\n    display: flex;\n    justify-content: center;\n    margin: 50px;\n"]))),o=r(184),s=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(a.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},102:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n,a,c=r(439),u=r(689),o=r(87),s=r(899),i=r(791),p=r(162),f=r(168),h=r(867),l=h.ZP.ul(n||(n=(0,f.Z)(["\n    margin-top: 20px;\n    margin-left: 40px;\n"]))),b=h.ZP.li(a||(a=(0,f.Z)(["\n    padding-bottom: 5px;\n"]))),d=r(184);function v(){var e,t=(0,i.useRef)(),r=(0,u.TH)(),n=(0,o.lr)(),a=(0,c.Z)(n,2),f=a[0],h=a[1],v=null!==(e=f.get("query"))&&void 0!==e?e:"",m="",x=(0,i.useState)([]),g=(0,c.Z)(x,2),y=g[0],w=g[1],Z=(0,i.useState)(!1),k=(0,c.Z)(Z,2),j=k[0],S=k[1];(0,i.useEffect)((function(){""!==v&&(S(!0),(0,s.GC)(v).then((function(e){return w(e)})).finally((function(){return S(!1)})),t.current.value="")}),[v]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h({query:m})},children:[(0,d.jsx)("input",{type:"text",ref:t,onChange:function(e){m=e.target.value.toLowerCase()}}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),(0,d.jsxs)("div",{children:[j&&(0,d.jsx)(p.a,{}),(0,d.jsx)(l,{children:y.map((function(e){var t=e.id,n=e.title,a=e.name;return(0,d.jsx)(o.rU,{to:"".concat(t),state:{from:r},children:(0,d.jsx)(b,{children:n||a})},t)}))})]})]})}},899:function(e,t,r){r.d(t,{HI:function(){return i},M1:function(){return f},tx:function(){return l},aV:function(){return o},GC:function(){return d}});var n=r(861),a=r(757),c=r.n(a),u=r(16);function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/",t=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),e.next=5,u.Z.get("".concat("https://api.themoviedb.org/3/","trending/all/day?").concat(t));case 5:return r=e.sent,e.abrupt("return",r.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),e.next=5,u.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?").concat(r));case 5:return n=e.sent,e.abrupt("return",n.data);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0.response.data.success),e.abrupt("return",e.t0.response.data.success);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),e.next=5,u.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"/credits?").concat(r));case 5:return n=e.sent,e.abrupt("return",n.data.cast);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837"}),e.next=5,u.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"/reviews?").concat(r));case 5:return n=e.sent,e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/",r=new URLSearchParams({api_key:"70e00eb52bcb7ab46f183ec1381bf837",query:t}),e.next=5,u.Z.get("".concat("https://api.themoviedb.org/3/","search/movie?").concat(r));case 5:return n=e.sent,e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=102.96a6c857.chunk.js.map