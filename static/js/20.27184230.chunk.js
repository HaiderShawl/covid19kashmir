(this.webpackJsonpcovid19kashmir=this.webpackJsonpcovid19kashmir||[]).push([[20],{127:function(t,e,n){"use strict";var c=n(2),i=n(91),a=i.a?c.useLayoutEffect:c.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(c.useState)(null),e=t[0],n=t[1],i=Object(c.useState)(o),r=i[0],s=i[1],u=Object(c.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,c=e.y,i=e.width,a=e.height,o=e.top,r=e.left,u=e.bottom,f=e.right;s({x:n,y:c,width:i,height:a,top:o,left:r,bottom:u,right:f})}}))}),[]);return a((function(){if(e)return u.observe(e),function(){u.disconnect()}}),[e]),[n,r]}:function(){return[i.b,o]}},191:function(t,e,n){"use strict";n.r(e);var c=n(52),i=n(47),a=n(10),o=n(93),r=n.n(o),s=n(2),u=n(55),f=n.n(u),l=n(98),b=n(127),d=n(21),h=void 0,g=function(t){var e=t.mapStatistic,n=t.setMapStatistic,o=Object(b.a)(),u=Object(i.a)(o,2),g=u[0],O=u[1].width,j=Object(s.useState)(!1),p=Object(i.a)(j,2),v=p[0],m=p[1],w=Object(s.useState)(0),x=Object(i.a)(w,2),S=x[0],y=x[1],k=a.g.indexOf(e)>=0,R=Object(l.useSpring)((function(){return{opacity:0,background:"".concat(a.u[e].color,"20"),transform:k?"translate3d(".concat(O*a.g.indexOf(e)/a.g.length,"px, 0, 0)"):null,width:"calc(".concat(100/a.g.length,"%)"),config:l.config.gentle}})),E=Object(i.a)(R,2),M=E[0],N=E[1];Object(s.useEffect)((function(){if(O>0){var t=a.g.indexOf(e)>=0;f.a.unstable_batchedUpdates((function(){var n;N.start({transform:t?"translate3d(".concat(O*a.g.indexOf(e)/a.g.length,"px, 0, 0)"):null,opacity:t?1:0,background:t?"".concat(null===(n=a.u[e])||void 0===n?void 0:n.color,"20"):null,delay:0===S?1500:0,onStart:m.bind(h,!0),onRest:m.bind(h,!1)})}))}}),[S,e,N,O]);var z=Object(s.useCallback)((function(t){y((function(t){return t+1})),n(t)}),[n]);return Object(d.jsxs)("div",{className:"MapSwitcher",ref:g,children:[Object(d.jsx)(l.animated.div,{className:"highlight",style:M}),a.g.map((function(t,e){return Object(d.jsx)("div",{className:r()("clickable",Object(c.a)({},"is-".concat(t),!v)),onClick:z.bind(h,t),style:{width:"calc(".concat(100/a.g.length,"%)")}},e)}))]})},O=function(t,e){return t.mapStatistic===e.mapStatistic};e.default=Object(s.memo)(g,O)}}]);
//# sourceMappingURL=20.27184230.chunk.js.map