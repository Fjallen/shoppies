(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),i=n.n(a),s=n(8),o=n.n(s),r=(n(55),n(25)),l=(n(56),n(99)),j=n(93),m=n(96),d=n(97),h=n(101),b=n(100),u=n(98);var O=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)([]),o=Object(r.a)(s,2),O=o[0],x=o[1],f=Object(a.useState)([]),v=Object(r.a)(f,2),p=v[0],g=v[1],N=Object(a.useState)(!1),S=Object(r.a)(N,2),y=S[0],I=S[1],C=Object(a.useState)(!1),T=Object(r.a)(C,2),w=T[0],k=T[1];Object(a.useEffect)((function(){localStorage.getItem("nominations")&&g(JSON.parse(localStorage.getItem("nominations")))}),[]);var D=function(e){return p.some((function(t){return t.imdbID===e.imdbID}))};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b.a,{className:"max-nom-modal",open:w,onClose:function(){return k(!1)},children:Object(c.jsx)(j.a,{children:Object(c.jsx)("h2",{className:"max-nom-text",children:"Congratulations! You have nominated 5! Movies"})})}),Object(c.jsx)(b.a,{className:"max-nom-modal",open:y,onClose:function(){return I(!1)},children:Object(c.jsx)(j.a,{children:Object(c.jsx)("h2",{className:"max-nom-text",children:"You cannot add more than 5 nominations :c"})})}),Object(c.jsx)("h2",{className:"title",children:"The Shoppies!"}),Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)(j.a,{className:"card",children:[Object(c.jsx)("h3",{children:"Movie Title"}),Object(c.jsx)(l.a,{variant:"outlined",value:n,fullWidth:!0,onKeyPress:function(e){"Enter"===e.key&&fetch("https://www.omdbapi.com/?s=".concat(n,"&apikey=").concat("f9494352","&type=movie")).then((function(e){return e.json()})).then((function(e){x(e.Search)}))},onChange:function(e){i(e.target.value)},label:"Movie Name"})]})}),Object(c.jsxs)("div",{className:"actions-area",children:[Object(c.jsx)("div",{className:"action-left",children:Object(c.jsx)(j.a,{className:"card",children:Object(c.jsxs)("div",{className:"movie-list",children:[Object(c.jsxs)("h3",{children:['Search Results for "',n,'"']}),Object(c.jsx)(m.a,{style:{maxHeight:"500px",overflow:"auto"},children:O&&O.map((function(e){return Object(c.jsxs)(d.a,{children:[Object(c.jsx)("img",{alt:e.Title,src:e.Poster}),Object(c.jsx)(h.a,{id:"movie-name",primary:e.Title,secondary:e.Year}),Object(c.jsx)(u.a,{color:"primary",disabled:D(e),onClick:function(){return function(e){if(!D(e))if(4===p.length&&k(!0),5!==p.length){var t=p.concat(e);g(t),localStorage.setItem("nominations",JSON.stringify(t))}else I(!0)}(e)},children:"Nominate"})]},e.imdbID)}))})]})})}),Object(c.jsx)("div",{className:"action-right",children:Object(c.jsxs)(j.a,{className:"card",children:[Object(c.jsx)("h3",{children:"My Nominations (Up to 5 Nominations)"}),Object(c.jsx)("div",{className:"nomination-list",children:Object(c.jsx)(m.a,{style:{maxHeight:"500px",overflow:"auto"},children:p&&p.map((function(e){return Object(c.jsxs)(d.a,{children:[Object(c.jsx)("img",{alt:e.Title,src:e.Poster}),Object(c.jsx)(h.a,{id:"movie-name",primary:e.Title,secondary:e.Year}),Object(c.jsx)(u.a,{color:"secondary",onClick:function(){return function(e){var t=p.filter((function(t){return t!==e}));g(t),localStorage.setItem("nominations",JSON.stringify(t))}(e)},children:"Unnominate"})]},e.imdbID)}))})})]})})]})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()}},[[62,1,2]]]);
//# sourceMappingURL=main.c7360745.chunk.js.map