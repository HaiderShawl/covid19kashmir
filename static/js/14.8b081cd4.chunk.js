(this.webpackJsonpcovid19kashmir=this.webpackJsonpcovid19kashmir||[]).push([[14],{133:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var a={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},c={position:"absolute",transform:"translate3d(10rem, 0, 0)"},i={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},r={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},s={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},o={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"}},164:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(47),c=(n(164),n(105)),i=n(133),r=n(2),s=n(215),o=n(216),j=n(217),d=n(218),b=n(248),l=n(56),u=n(98),h=n(213),O=n(244),p=n(214),m=n(166),f=n(21);function x(e){var t=this,n=e.pages,a=e.setExpand,i=e.darkMode,s=e.windowSize,o=Object(r.useRef)(null),j=Object(b.a)().t,d=Object(r.useCallback)((function(){s.width>=769&&a(!1)}),[a,s.width]);return Object(f.jsxs)("div",{className:"expand",ref:o,onMouseLeave:d,children:[n.map((function(e,n){return!0===e.showInNavbar?Object(f.jsx)(l.b,Object(c.a)(Object(c.a)({to:e.pageLink},s.width<769&&{onClick:a.bind(t,!1)}),{},{children:Object(f.jsx)("span",Object(c.a)(Object(c.a)({},w(e.pageLink,e.animationDelayForNavbar)),{},{children:j(e.displayName)}))}),n):null})),s.width<769&&Object(f.jsx)(k,{darkMode:i}),Object(f.jsx)("div",{className:"expand-bottom",children:Object(f.jsx)("h5",{children:j("A Non Profit initiative.")})})]})}var v=function(e){var t=this,n=e.pages,j=(e.showLanguageSwitcher,e.setShowLanguageSwitcher,Object(b.a)().t),d=Object(r.useState)(!1),v=Object(a.a)(d,2),w=v[0],S=v[1],y=Object(m.a)(!1);Object(h.a)(w);var N=Object(O.a)();Object(p.a)((function(){return S(!1)}));var L=Object(u.useTransition)(!0,{from:{opacity:0},enter:{opacity:1}}),M=Object(u.useTransition)(w,{from:N.width<769?i.d:i.c,enter:N.width<769?i.f:i.e,leave:N.width<769?i.d:i.c,config:{mass:1,tension:210,friction:26}}),C=Object(r.useCallback)((function(){N.width>=769&&S(!0)}),[N.width]);return L((function(e,a){return Object(f.jsxs)(u.animated.div,{className:"Navbar",style:e,children:[Object(f.jsx)("div",{className:"navbar-middle",children:Object(f.jsxs)(l.b,{to:"/",onClick:S.bind(t,!1),children:["Covid19",Object(f.jsx)("span",{children:"Kashmir"})]})}),Object(f.jsxs)("div",Object(c.a)(Object(c.a)({className:"navbar-right",onMouseEnter:C},N.width<769&&{onClick:S.bind(t,!w)}),{},{children:[N.width<769&&Object(f.jsx)("span",{children:j(w?"Close":"Menu")}),N.width>=769&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.b,{to:"/",children:Object(f.jsx)("span",{children:Object(f.jsx)(s.a,Object(c.a)({},g("/")))})}),Object(f.jsx)("a",{href:"https://milaap.org/fundraisers/support-covid19kashmir-1/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("span",{children:Object(f.jsx)(o.a,Object(c.a)({},g("/blog")))})}),Object(f.jsx)("span",{children:Object(f.jsx)(k,{darkMode:y})})]})]})),M((function(e,t){return t&&Object(f.jsx)(u.animated.div,{style:e,children:Object(f.jsx)(x,{pages:n,setExpand:S,darkMode:y,windowSize:N})})}))]})}))},w=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},g=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},k=function(e){var t=e.darkMode;return Object(f.jsx)("div",{className:"SunMoon",onClick:t.toggle,children:Object(f.jsx)("div",{children:t.value?Object(f.jsx)(j.a,{color:"#ffc107"}):Object(f.jsx)(d.a,{})})})},S=n(23),y=n(5),N=Object(r.lazy)((function(){return Object(S.j)((function(){return Promise.all([n.e(3),n.e(12),n.e(21)]).then(n.bind(null,219))}))})),L=Object(r.lazy)((function(){return Object(S.j)((function(){return Promise.all([n.e(3),n.e(17)]).then(n.bind(null,247))}))}));t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(y.h)(),s=[{pageLink:"/",view:N,displayName:"State",showInNavbar:!1}];return Object(r.useEffect)((function(){n&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[n]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)("div",{}),children:Object(f.jsx)(L,{showLanguageSwitcher:n,setShowLanguageSwitcher:c})}),Object(f.jsx)(v,{pages:s,showLanguageSwitcher:n,setShowLanguageSwitcher:c}),Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)("div",{}),children:Object(f.jsxs)(y.d,{location:i,children:[s.map((function(e,t){return Object(f.jsx)(y.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return Object(f.jsx)(e.view,{})}},t)})),Object(f.jsx)(y.a,{to:"/"})]})})]})}}}]);
//# sourceMappingURL=14.8b081cd4.chunk.js.map