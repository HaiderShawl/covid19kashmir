(this.webpackJsonpcovid19kashmir=this.webpackJsonpcovid19kashmir||[]).push([[25],{249:function(t,e,r){"use strict";r.r(e);var n=r(103),i=r(106),a=r.n(i),c=r(135),o=r(47),s=r(10),l=r(23),u=r(183),d=r(252),f=r(128),p=r(240),j=r(228),b=r(243),m=r(225),v=r(126),O=r(182),h=r(69),g=r(223),x=r(101),k=r(2),y=r(248),A=r(127),w=r(21);var C=function(t){t.data;var e=t.statistic,r=t.mapViz,n=t.mapScale,i=Object(y.a)().t,a=Object(k.useRef)(null),c=Object(k.useRef)(null),C=Object(A.a)(),N=Object(o.a)(C,2),T=N[0],R=N[1].width;return Object(k.useEffect)((function(){var t=Object(x.b)().duration(s.c);if(r!==s.o.CHOROPLETH){var e=Object(g.a)(c.current);e.select(".ramp").transition(t).attr("opacity",0).attr("display","none").attr("xlink:href",null),e.select(".bars").selectAll("rect").transition(t).attr("opacity",0).remove(),e.selectAll(".axis > *:not(.axistext)").remove(),e.select(".axistext").text("")}if(r!==s.o.BUBBLE){var n=Object(g.a)(a.current);n.select(".circles").selectAll("circle").transition(t).attr("r",0).attr("cy",0).remove(),n.selectAll(".circle-axis > *").remove()}if(r!==s.o.SPIKES){var i=Object(g.a)(a.current);i.select(".spikes").call((function(e){return e.selectAll("path").transition(t).attr("d",Object(l.k)(0)).remove()})).call((function(t){return t.selectAll("text").remove()})).transition(t).selectAll("g").remove(),i.selectAll(".spike-axis > *").remove()}}),[r]),Object(k.useEffect)((function(){if(R){var t=s.u[e],x=R/s.i[0];if(r===s.o.BUBBLE){var k=Object(g.a)(a.current),y=n.domain(),A=Object(o.a)(y,2)[1],w=k.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle"),C=[.1,.4,1].map((function(t){return t*A}));w.selectAll("circle").data(C).join("circle").attr("fill","none").attr("stroke",t.color+"70").transition(i).attr("cy",(function(t){return-n(t)})).attr("r",(function(t){return n(t)}));var N=n.copy().range([0,-2*n(A)]);k.select(".circle-axis").attr("transform","translate(48,50)").transition(i).call(Object(f.b)(N).tickSize(0).tickPadding(0).tickValues(C).tickFormat((function(e){return Object(l.e)(e,"long"===t.format?"short":t.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/x),k.select(".circle-axis").call((function(t){return t.select(".domain").remove()}))}else if(r===s.o.SPIKE){var T=Object(g.a)(a.current),S=n.ticks(3).slice(1).reverse(),M=28/x;T.select(".spikes").attr("transform","translate(32,24)").selectAll("g").data(S).join((function(t){return t.append("g").call((function(t){return t.append("path").attr("fill-opacity",.3).attr("d",(function(t){return Object(l.k)(0)}))}))})).attr("transform",(function(t,e){return"translate(".concat(e*M,",0)")})).call((function(e){return e.select("path").transition(i).attr("d",(function(t){return Object(l.k)(n(t))})).attr("fill",t.color+"70").attr("stroke",t.color+"70")}));var H=n.copy().range([M*S.length,0]);T.select(".spike-axis").attr("transform","translate(32,32)").transition(i).call(Object(f.a)(H).tickSize(0).tickPadding(0).tickValues(S).tickFormat((function(e){return Object(l.e)(e,"long"===t.format?"short":t.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/x),T.select(".spike-axis").call((function(t){return t.select(".domain").remove()}))}else{var P,B=Object(g.a)(c.current);B.call((function(){return function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.svg,n=e.color,i=e.title,a=e.tickSize,c=void 0===a?6:a,o=e.width,l=void 0===o?320:o,g=e.height,x=void 0===g?44+c:g,k=e.marginTop,y=void 0===k?18:k,A=e.marginRight,w=void 0===A?0:A,C=e.marginBottom,N=void 0===C?16+c:C,T=e.marginLeft,R=void 0===T?0:T,S=e.ticks,M=void 0===S?l/64:S,H=e.tickFormat,P=e.tickValues,B=e.ordinalWeights,L=r.transition().duration(s.c),_=function(t){t.selectAll(".tick line").attr("y1",y+N-x)};if(n.interpolate){var z=Math.min(n.domain().length,n.range().length);t=n.copy().rangeRound(Object(j.a)(Object(b.a)(R,l-w),z)),r.select(".ramp").attr("x",R).attr("y",y).attr("width",l-R-w).attr("height",x-y-N).attr("xlink:href",E(n.copy().domain(Object(j.a)(Object(b.a)(0,1),z))).toDataURL())}else if(n.interpolator){if(r.select(".bars").selectAll("rect").transition(L).attr("opacity",0).remove(),t=Object.assign(n.copy().interpolator(Object(m.a)(R,l-w)),{range:function(){return[R,l-w]}}),r.select(".ramp").attr("x",R).attr("y",y).attr("width",l-R-w).attr("height",x-y-N).attr("xlink:href",E(n.interpolator()).toDataURL()).attr("display","visible").transition(L).attr("opacity",1),!t.ticks){if(void 0===P){var F=Math.round(M+1);P=Object(u.a)(F).map((function(t){return Object(d.a)(n.domain(),t/(F-1))}))}"function"!==typeof H&&(H=Object(p.a)(void 0===H?",f":H))}}else if(n.invertExtent){var I=n.thresholds?n.thresholds():n.quantiles?n.quantiles():n.domain(),U=void 0===H?function(t){return t}:"string"===typeof H?Object(p.a)(H):H;t=Object(v.a)().domain([-1,n.range().length-1]).rangeRound([R,l-w]),r.append("g").selectAll("rect").data(n.range()).join("rect").attr("x",(function(e,r){return t(r-1)})).attr("y",y).attr("width",(function(e,r){return t(r)-t(r-1)})).attr("height",x-y-N).attr("fill",(function(t){return t})),P=Object(u.a)(-1,I.length),H=function(t){return-1===t?U(1):t!==I.length-1?t===I.length-2?U(I[t]+"+",t):U(I[t],t):void 0}}else{if(r.select(".ramp").transition(L).attr("opacity",0).attr("xlink:href",null),B){var V=Object(v.a)().domain([0,B.reduce((function(t,e){return t+e}))]).rangeRound([0,l-R-w]),D=B.map((function(t,e){return B.slice(0,e).reduce((function(t,e){return t+V(e)}),R)}));t=Object(h.a)().domain(n.domain()).range(D),r.select(".bars").selectAll("rect").data(n.domain()).join((function(e){return e.append("rect").attr("x",t).attr("width",(function(t,e){return V(B[e])}))})).attr("y",y).attr("height",x-y-N).attr("fill",n).transition(L).attr("x",t).attr("width",(function(t,e){return V(B[e])})).attr("opacity",1)}else t=Object(O.a)().domain(n.domain().filter((function(t){return t}))).rangeRound([R,l-w]),r.select(".bars").selectAll("rect").data(n.domain().filter((function(t){return t}))).join("rect").attr("x",t).attr("y",y).attr("width",Math.max(0,t.bandwidth()-1)).attr("height",x-y-N).attr("fill",n);_=function(){}}return r.select(".axis").attr("transform","translate(0,".concat(x-N,")")).transition(L).attr("class","axis").call(Object(f.a)(t).ticks(M,"string"===typeof H?H:void 0).tickFormat("function"===typeof H?H:void 0).tickSize(c).tickValues(P)).on("start",(function(){r.call(_).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",R).attr("y",y+N-x-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(i)})),r.node()}({svg:B,color:n,width:R,height:s.j,ticks:5,tickFormat:function(e,n,i){var a;return(null===t||void 0===t||null===(a=t.mapConfig)||void 0===a?void 0:a.colorScale)?e:r!==s.o.CHOROPLETH||Number.isInteger(e)?n===i.length-1?Object(l.e)(e,t.format)+"+":Object(l.e)(e,t.format):""},marginLeft:2,marginRight:0})})),B.attr("class",(null===t||void 0===t||null===(P=t.mapConfig)||void 0===P?void 0:P.colorScale)?"zone":"")}}}),[i,R,e,n,r]),Object(w.jsxs)("div",{className:"svg-parent maplegend",ref:T,style:{height:2*s.j},children:[Object(w.jsxs)("svg",{id:"legend",preserveAspectRatio:"xMinYMid meet",ref:a,viewBox:"0 0 ".concat(s.i[0]," ").concat(s.j),children:[Object(w.jsx)("g",{className:"circles"}),Object(w.jsx)("g",{className:"spikes"}),Object(w.jsx)("g",{className:"circle-axis"}),Object(w.jsx)("g",{className:"spike-axis"}),Object(w.jsx)("g",{className:"axis",children:Object(w.jsx)("text",{className:"axistext"})})]}),Object(w.jsxs)("svg",{id:"legend-choro",preserveAspectRatio:"xMinYMid meet",ref:c,children:[Object(w.jsx)("image",{className:"ramp",preserveAspectRatio:"none"}),Object(w.jsx)("g",{className:"bars"}),Object(w.jsx)("g",{className:"axis",children:Object(w.jsx)("text",{className:"axistext"})})]}),Object(w.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function E(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var N=r(95),T=r(93),R=r.n(T),S=r(123),M=r(236),H=r(242),P=r(241),B=r(194),L=r(250),_=r(229),z=r(230),F=r(231),I=r(232),U=r(233),V=r(234),D=r(235),K=r(5),Y=r(157),q=r(197);e.default=function(t){var e,r=this,i=t.mapCode,o=t.isDistrictView,u=t.mapViz,d=t.data,f=t.regionHighlighted,p=t.setRegionHighlighted,j=t.statistic,b=t.getMapStatistic,m=t.transformStatistic,O=t.noDistrictData,h=Object(y.a)().t,A=Object(k.useRef)(null),E=s.k[i],T=Object(K.g)(),W=Object(Y.a)(E.geoDataFile,function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,J=Object(k.useMemo)((function(){return b(d[i])}),[d,i,b]),G=s.u[j],Q=Object(k.useCallback)((function(t){return((null===G||void 0===G?void 0:G.color)||"#343a40")+t}),[G]),X=Object(k.useMemo)((function(){return W?(o?E.mapType===s.m.COUNTRY&&u!==s.o.CHOROPLETH?[].concat(Object(n.a)(Object(q.a)(W,W.objects.states).features),Object(n.a)(Object(q.a)(W,W.objects.districts).features)):Object(q.a)(W,W.objects.districts).features:Object(q.a)(W,W.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(i,"-").concat(r).concat(e?"-"+e:""),n})):null}),[W,i,o,u,E]),Z=Object(k.useMemo)((function(){return W&&o?Object(q.a)(W,W.objects.districts).features.reduce((function(t,e){var r=s.s[e.properties.st_nm];return t[r]||(t[r]=new Set),t[r].add(e.properties.district),t}),{}):{}}),[W,o]),$=Object(k.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t&&Object.keys(s.k).includes(t)}));if(o){var e=t.reduce((function(t,e){var r,i=Object.keys((null===(r=d[e])||void 0===r?void 0:r.districts)||[]).filter((function(t){return((null===Z||void 0===Z?void 0:Z[e])||new Set).has(t)||u!==s.o.CHOROPLETH&&t===s.A}));return t.push.apply(t,Object(n.a)(i.map((function(t){return m(b(d[e].districts[t]))})))),t}),[]);return Object(S.a)(e)}return Object(S.a)(t,(function(t){return m(b(d[t]))}))}),[d,o,b,u,Z,m]),tt=Object(k.useMemo)((function(){var t,e;return u===s.o.BUBBLE?Object(B.b)([0,Math.max(1,$||0)],[0,40]).clamp(!0).nice(3):u===s.o.SPIKE?Object(v.a)([0,Math.max(1,$||0)],[0,80]).clamp(!0).nice(3):(null===(t=s.u[j])||void 0===t||null===(e=t.mapConfig)||void 0===e?void 0:e.colorScale)?s.u[j].mapConfig.colorScale:Object(L.a)([0,Math.max(1,$||0)],function(t){var e;return"confirmed"===t?function(t){return Object(_.a)(.85*t)}:"active"===t?function(t){return Object(z.a)(.85*t)}:"recovered"===t?function(t){return Object(F.a)(.85*t)}:"deceased"===t?function(t){return Object(I.a)(.85*t)}:"tested"===t?function(t){return Object(U.a)(.85*t)}:"tpr"===t||"cfr"===t||"other"===t?function(t){return Object(V.a)(.85*t)}:"vaccinated"===(null===(e=s.u[t])||void 0===e?void 0:e.category)?function(t){return Object(D.a)(.15+.35*(1-t))}:function(t){return Object(V.a)(.85*t)}}(j)).clamp(!0)}),[u,j,$]),et=Object(k.useCallback)((function(t){if(u===s.o.CHOROPLETH){var e,r=s.s[t.properties.st_nm],n=t.properties.district,i=d[r],a=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[n],c=m(b(n?a:i));return c?tt(c):"#ffffff00"}}),[u,d,tt,b,m]),rt=Object(k.useCallback)((function(t){t.select("title").text((function(t){if(u!==s.o.CHOROPLETH&&!(null===G||void 0===G?void 0:G.nonLinear)){var e,r,n=t.properties.st_nm,i=s.s[n],a=t.properties.district,c=d[i],o=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[a];return r=b(a?o:c),"".concat(Object(l.e)(r/(J||.001)*100,"%")," from ").concat(Object(l.l)(a||n))}}))}),[u,d,b,J,G]),nt=Object(k.useRef)(null);Object(k.useEffect)((function(){Object(g.a)(A.current).attr("pointer-events","auto").on("click",(function(){nt.current=null,p({stateCode:i,districtName:null})}))}),[i,p]);var it=Object(k.useMemo)((function(){return W?Object(H.a)(Object(P.a)()):null}),[W]);Object(k.useEffect)((function(){if(W){var t=Object(g.a)(A.current),e=Object(x.b)().duration(s.c);t.select(".regions").selectAll("path").data(u===s.o.CHOROPLETH?X:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){nt.current||p({stateCode:s.s[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:s.s[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=s.s[r.properties.st_nm];!nt.current&&E.mapType!==s.m.STATE&&(null===(n=d[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),T.push("/state/".concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",et).attr("stroke",Q.bind(r,""))}))}}),[u,d,X,et,W,T,E.mapType,it,p,Q]);var at=Object(k.useMemo)((function(){return u===s.o.CHOROPLETH?[]:(X||[]).map((function(t){var e=s.s[t.properties.st_nm],r=t.properties.district,n=d[e];if(o){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=b(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[s.A])}else t.value=b(n);return t})).filter((function(t){return t.value>0})).sort((function(t,e){return e.value-e.value}))}),[u,o,b,X,d]);return Object(k.useEffect)((function(){var t=Object(g.a)(A.current),e=Object(x.b)().duration(s.c),r=t.select(".circles").selectAll("circle").data(u===s.o.BUBBLE?at:[],(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){nt.current||p({stateCode:s.s[e.properties.st_nm],districtName:o?e.properties.district||s.A:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:s.s[e.properties.st_nm],districtName:o?e.properties.district||s.A:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||E.mapType===s.m.STATE||T.push("/state/".concat(s.s[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("r",(function(t){return tt(t.value)}))}));window.requestIdleCallback((function(){rt(r)}))}),[E.mapType,u,o,at,T,tt,it,p,rt,G,b]),Object(k.useEffect)((function(){var t=Object(g.a)(A.current),e=Object(x.b)().duration(s.c),r=t.select(".spikes").selectAll("path").data(u===s.o.SPIKE?at:[],(function(t){return t.id}),(function(t){return t.id})).join((function(t){return t.append("path").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("opacity",0).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").attr("d",Object(l.k)(0)).call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("opacity",0).attr("d",Object(l.k)(0)).remove()}))})).on("mouseenter",(function(t,e){nt.current||p({stateCode:s.s[e.properties.st_nm],districtName:o?e.properties.district||s.A:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:s.s[e.properties.st_nm],districtName:o?e.properties.district||s.A:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||E.mapType===s.m.STATE||T.push("/state/".concat(s.s[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("opacity",1).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("d",(function(t){return Object(l.k)(tt(t.value))}))}));window.requestIdleCallback((function(){rt(r)}))}),[E.mapType,u,o,at,T,tt,it,p,rt,G,b]),Object(k.useEffect)((function(){if(W){var t=Object(g.a)(A.current),e=Object(x.b)().duration(s.c),n=[],a=[];E.mapType===s.m.COUNTRY&&((n=[Object(q.b)(W,W.objects.states)])[0].id="".concat(i,"-states")),(E.mapType===s.m.STATE||o&&u===s.o.CHOROPLETH)&&((a=[Object(q.b)(W,W.objects.districts)])[0].id="".concat(i,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(r,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(a,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(r,"40"))}}),[W,E,i,u,o,j,it,Q]),Object(k.useEffect)((function(){var t=f.stateCode,e=s.t[t],r=f.districtName,n=Object(g.a)(A.current);u===s.o.BUBBLE?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.A&&!n.properties.district)?1:.25})):u===s.o.SPIKE?n.select(".spikes").selectAll("path").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.A&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var a,c=e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o);c&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",c?1:0)}))}),[W,d,i,o,u,f.stateCode,f.districtName,j]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"svg-parent",children:[Object(w.jsxs)("svg",{id:"chart",className:R()({zone:!!(null===G||void 0===G||null===(e=G.mapConfig)||void 0===e?void 0:e.colorScale)}),viewBox:"0 0 ".concat(s.i[0]," ").concat(s.i[1]),preserveAspectRatio:"xMidYMid meet",ref:A,children:[Object(w.jsx)("g",{className:"regions"}),Object(w.jsx)("g",{className:"state-borders"}),Object(w.jsx)("g",{className:"district-borders"}),Object(w.jsx)("g",{className:"circles"}),Object(w.jsx)("g",{className:"spikes"})]}),O&&(null===G||void 0===G?void 0:G.hasPrimary)&&Object(w.jsxs)("div",{className:R()("disclaimer","is-".concat(j)),children:[Object(w.jsx)(N.a,{}),Object(w.jsx)("span",{children:h("District-wise data not available in state bulletin")})]})]}),tt&&Object(w.jsx)(C,{data:d,statistic:j,mapViz:u,mapScale:tt}),Object(w.jsx)("svg",{style:{position:"absolute",height:0},children:Object(w.jsx)("defs",{children:Object(w.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(w.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=25.7c04532b.chunk.js.map