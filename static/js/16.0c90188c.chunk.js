(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[16],{123:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(24);function a(t,e){var r;if(void 0===e){var a,i=Object(n.a)(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;null!=c&&(r<c||void 0===r&&c>=c)&&(r=c)}}catch(l){i.e(l)}finally{i.f()}}else{var o,u=-1,s=Object(n.a)(t);try{for(s.s();!(o=s.n()).done;){var f=o.value;null!=(f=e(f,++u,t))&&(r<f||void 0===r&&f>=f)&&(r=f)}}catch(l){s.e(l)}finally{s.f()}}return r}},192:function(t,e,r){"use strict";r.r(e);var n=r(47),a=r(10),i=r(23),c=r(93),o=r.n(c),u=r(123),s=r(122),f=r(239),l=r(126),d=r(223),j=r(149),b=r(227),O=(r(101),r(67)),v=r(80),h=r(92),p=r.n(h),y=r(2),g=r(127),m=r(21),k=10,x=10,w=2,M=10;function A(t){var e=t.timeseries,r=t.date,c=Object(y.useRef)([]),h=r||Object(i.f)(),p=Object(g.a)(),A=Object(n.a)(p,2),R=A[0],S=A[1].width;S=Math.min(S,120);var C=Object(y.useMemo)((function(){var t=Object.keys(e||{}).filter((function(t){return t<=h})),r=t[t.length-1],n=Object(O.a)(Object(v.a)(Object(i.i)(r),a.p),{representation:"date"});return t.filter((function(t){return t>=n}))}),[h,e]),E=Object(y.useCallback)((function(t,r){return Object(i.g)(null===e||void 0===e?void 0:e[t],"delta",r)}),[e]);return Object(y.useEffect)((function(){if(S){var t=C.length,e=S-x,r=75-w,n=Object(f.a)().clamp(!0).domain([Object(i.i)(C[0]||h),Object(i.i)(C[t-1])||h]).range([M,e]);c.current.forEach((function(e,c){var o,f=Object(d.a)(e),O=a.g[c],v=a.u[O].color,h=Object(u.a)(C,(function(t){return Math.abs(E(t,O))})),p=Object(l.a)().clamp(!0).domain([-h,h]).range([r,k]),y=Object(j.a)().curve(b.a).x((function(t){return n(Object(i.i)(t))})).y((function(t){return p(E(t,O))}));f.selectAll("path").data(t?[C]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",v+"99").attr("stroke-width",2.5).attr("d",y).attr("stroke-dasharray",(function(){return o=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",o).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(d.a)(this).attr("d"),r=y(t);return Object(s.a)(e,r)})).selection()})),f.selectAll("circle").data(t?[C[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",v).attr("r",2.5).attr("cx",(function(t){return n(Object(i.i)(t))})).attr("cy",(function(t){return p(E(t,O))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return n(Object(i.i)(t))})).attr("cy",(function(t){return p(E(t,O))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return n(Object(i.i)(t))})).attr("cy",(function(t){return p(E(t,O))})).style("opacity",1).selection()}))}))}}),[h,C,S,E]),Object(m.jsx)("div",{className:"Minigraph",children:a.g.map((function(t,e){return Object(m.jsx)("div",{className:o()("svg-parent"),ref:0===e?R:null,style:{width:"calc(".concat(100/a.g.length,"%)")},children:Object(m.jsx)("svg",{ref:function(t){c.current[e]=t},preserveAspectRatio:"xMidYMid meet",width:S,height:75})},t)}))})}var R=function(t,e){return!e.forceRender&&(!(e.timeseries||!t.timeseries)||!(e.timeseries&&!t.timeseries)&&(!!p()(e.stateCode,t.stateCode)&&!!p()(e.date,t.date)))};e.default=Object(y.memo)(A,R)},92:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,a,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(a=n;0!==a--;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=n;0!==a--;){var c=i[a];if(!t(e[c],r[c]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=16.0c90188c.chunk.js.map