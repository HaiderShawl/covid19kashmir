(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{127:function(t,n,e){"use strict";var r=e(2),i=e(91),a=i.a?r.useLayoutEffect:r.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],i=Object(r.useState)(o),c=i[0],u=i[1],s=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,i=n.width,a=n.height,o=n.top,c=n.left,s=n.bottom,l=n.right;u({x:e,y:r,width:i,height:a,top:o,left:c,bottom:s,right:l})}}))}),[]);return a((function(){if(n)return s.observe(n),function(){s.disconnect()}}),[n]),[e,c]}:function(){return[i.b,o]}},128:function(t,n,e){"use strict";e.d(n,"b",(function(){return f})),e.d(n,"a",(function(){return d}));var r=function(t){return t},i=1e-6;function a(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function c(t){return function(n){return+t(n)}}function u(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function s(){return!this.__axis}function l(t,n){var e=[],l=null,f=null,d=6,h=6,b=3,g="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,m=1===t||4===t?-1:1,v=4===t||2===t?"x":"y",p=1===t||3===t?a:o;function O(a){var o=null==l?n.ticks?n.ticks.apply(n,e):n.domain():l,O=null==f?n.tickFormat?n.tickFormat.apply(n,e):r:f,j=Math.max(d,0)+b,y=n.range(),x=+y[0]+g,M=+y[y.length-1]+g,k=(n.bandwidth?u:c)(n.copy(),g),w=a.selection?a.selection():a,A=w.selectAll(".domain").data([null]),S=w.selectAll(".tick").data(o,n).order(),R=S.exit(),z=S.enter().append("g").attr("class","tick"),C=S.select("line"),F=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(z),C=C.merge(z.append("line").attr("stroke","currentColor").attr(v+"2",m*d)),F=F.merge(z.append("text").attr("fill","currentColor").attr(v,m*j).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==w&&(A=A.transition(a),S=S.transition(a),C=C.transition(a),F=F.transition(a),R=R.transition(a).attr("opacity",i).attr("transform",(function(t){return isFinite(t=k(t))?p(t+g):this.getAttribute("transform")})),z.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis;return p((n&&isFinite(n=n(t))?n:k(t))+g)}))),R.remove(),A.attr("d",4===t||2===t?h?"M"+m*h+","+x+"H"+g+"V"+M+"H"+m*h:"M"+g+","+x+"V"+M:h?"M"+x+","+m*h+"V"+g+"H"+M+"V"+m*h:"M"+x+","+g+"H"+M),S.attr("opacity",1).attr("transform",(function(t){return p(k(t)+g)})),C.attr(v+"2",m*d),F.attr(v,m*j).text(O),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=k}))}return O.scale=function(t){return arguments.length?(n=t,O):n},O.ticks=function(){return e=Array.from(arguments),O},O.tickArguments=function(t){return arguments.length?(e=null==t?[]:Array.from(t),O):e.slice()},O.tickValues=function(t){return arguments.length?(l=null==t?null:Array.from(t),O):l&&l.slice()},O.tickFormat=function(t){return arguments.length?(f=t,O):f},O.tickSize=function(t){return arguments.length?(d=h=+t,O):d},O.tickSizeInner=function(t){return arguments.length?(d=+t,O):d},O.tickSizeOuter=function(t){return arguments.length?(h=+t,O):h},O.tickPadding=function(t){return arguments.length?(b=+t,O):b},O.offset=function(t){return arguments.length?(g=+t,O):g},O}function f(t){return l(2,t)}function d(t){return l(3,t)}},178:function(t,n,e){"use strict";e.r(n);var r=e(47),i=e(10),a=e(23),o=e(184),c=e(128),u=e(182),s=e(126),l=e(223),f=(e(101),e(92)),d=e.n(f),h=e(2),b=e(127),g=e(21),m=50,v=0,p=50,O=0;function j(t){var n=t.timeseries,e=t.statistic,f=t.lookback,d=Object(h.useRef)(),j=Object(b.a)(),y=Object(r.a)(j,2),M=y[0],k=y[1],w=k.width,A=k.height,S=Object.keys(n||{}).filter((function(t){return t<=Object(a.f)()})).slice(-f),R=Object(h.useCallback)((function(t,e){return Object(a.g)(null===n||void 0===n?void 0:n[t],"delta",e)}),[n]);return Object(h.useEffect)((function(){if(w){var t=Object(l.a)(d.current),n=w-v,f=A-p,h=Object(u.a)().domain(S).range([O,n]).paddingInner(w/1e3),b=Object(o.a)(S,(function(t){return R(t,e)})),g=Object(r.a)(b,2),j=g[0],y=g[1],M=Object(s.a)().domain([Math.min(0,j||0),Math.max(1,y||0)]).range([f,m]),k=Object(c.a)(h).tickSize(0).tickFormat((function(t){return Object(a.c)(t,"dd MMM")})),z=t.transition().duration(i.c),C=i.u[e];t.select(".x-axis").transition(z).style("transform","translate3d(0, ".concat(M(0),"px, 0)")).call(k).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,n){return R(t,e)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",C.color),t.selectAll(".bar").data(S).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return x(h(t),M(0),h.bandwidth(),0,5)}))})).transition(z).attr("d",(function(t){return x(h(t),M(0),h.bandwidth(),M(0)-M(R(t,e)),5)})).attr("fill",(function(t,n){return n<S.length-1?C.color+"90":C.color}));var F=t.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t){return Object(a.e)(R(t,e),(null===C||void 0===C?void 0:C.showDelta)||(null===C||void 0===C?void 0:C.nonLinear)?C.format:"short")}));F.transition(z).attr("fill",C.color).attr("y",(function(t){var n=R(t,e);return M(n)+(n<0?15:-6)})),F.append("tspan").attr("dy",(function(t){return"".concat(R(t,e)<0?1.2:-1.2,"em")})).attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t,n){if(0===n)return"";var r=R(S[n-1],e);if(!r)return"";var i=R(t,e)-r;return"".concat(i>0?"+":"").concat(Object(a.e)(100*i/Math.abs(r),"%"))})).transition(z).attr("fill",C.color+"90")}}),[S,A,e,w,R]),Object(g.jsx)("div",{className:"DeltaBarGraph",ref:M,children:Object(g.jsxs)("svg",{ref:d,width:w,height:250,viewBox:"0 0 ".concat(w," ").concat(A),preserveAspectRatio:"xMidYMid meet",children:[Object(g.jsx)("g",{className:"x-axis"}),Object(g.jsx)("g",{className:"y-axis"})]})})}var y=function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!d()(t.stateCode,n.stateCode)&&(!!d()(t.lookback,n.lookback)&&!!d()(t.statistic,n.statistic))))};function x(t,n,e,r,i){return i=Math.sign(r)*Math.min(Math.abs(r),i),["M ".concat(t," ").concat(n),"v ".concat(-r+i),"q 0 ".concat(-i," ").concat(Math.abs(i)," ").concat(-i),"h ".concat(e-2*Math.abs(i)),"q ".concat(Math.abs(i)," 0 ").concat(Math.abs(i)," ").concat(i),"v ".concat(r-i),"Z"].join(" ")}n.default=Object(h.memo)(j,y)},182:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(47),i=e(183),a=e(48),o=e(69);function c(){var t,n,e=Object(o.a)().unknown(void 0),u=e.domain,s=e.range,l=0,f=1,d=!1,h=0,b=0,g=.5;function m(){var e=u().length,r=f<l,a=r?f:l,o=r?l:f;t=(o-a)/Math.max(1,e-h+2*b),d&&(t=Math.floor(t)),a+=(o-a-t*(e-h))*g,n=t*(1-h),d&&(a=Math.round(a),n=Math.round(n));var c=Object(i.a)(e).map((function(n){return a+t*n}));return s(r?c.reverse():c)}return delete e.unknown,e.domain=function(t){return arguments.length?(u(t),m()):u()},e.range=function(t){var n,e;return arguments.length?(n=t,e=Object(r.a)(n,2),l=e[0],f=e[1],l=+l,f=+f,m()):[l,f]},e.rangeRound=function(t){var n,e;return n=t,e=Object(r.a)(n,2),l=e[0],f=e[1],l=+l,f=+f,d=!0,m()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(d=!!t,m()):d},e.padding=function(t){return arguments.length?(h=Math.min(1,b=+t),m()):h},e.paddingInner=function(t){return arguments.length?(h=Math.min(1,t),m()):h},e.paddingOuter=function(t){return arguments.length?(b=+t,m()):b},e.align=function(t){return arguments.length?(g=Math.max(0,Math.min(1,t)),m()):g},e.copy=function(){return c(u(),[l,f]).round(d).paddingInner(h).paddingOuter(b).align(g)},a.b.apply(m(),arguments)}},183:function(t,n,e){"use strict";n.a=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e;return a}},184:function(t,n,e){"use strict";var r=e(24);n.a=function(t,n){var e,i;if(void 0===n){var a,o=Object(r.a)(t);try{for(o.s();!(a=o.n()).done;){var c=a.value;null!=c&&(void 0===e?c>=c&&(e=i=c):(e>c&&(e=c),i<c&&(i=c)))}}catch(d){o.e(d)}finally{o.f()}}else{var u,s=-1,l=Object(r.a)(t);try{for(l.s();!(u=l.n()).done;){var f=u.value;null!=(f=n(f,++s,t))&&(void 0===e?f>=f&&(e=i=f):(e>f&&(e=f),i<f&&(i=f)))}}catch(d){l.e(d)}finally{l.f()}}return[e,i]}},92:function(t,n,e){"use strict";t.exports=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==typeof n&&"object"==typeof e){if(n.constructor!==e.constructor)return!1;var r,i,a;if(Array.isArray(n)){if((r=n.length)!=e.length)return!1;for(i=r;0!==i--;)if(!t(n[i],e[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();if((r=(a=Object.keys(n)).length)!==Object.keys(e).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(e,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(!t(n[o],e[o]))return!1}return!0}return n!==n&&e!==e}}}]);
//# sourceMappingURL=10.cc528f33.chunk.js.map