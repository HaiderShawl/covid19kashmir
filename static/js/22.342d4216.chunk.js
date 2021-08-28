(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{121:function(e,t,a){"use strict";var c=a(105),o=a(156),n=a(2),s=(a(147),a(148),a(21));t.a=function(e){var t=e.children,a=e.message,r=e.hold,i=void 0!==r&&r,l=e.childProps,d=void 0===l?{}:l,j=Object(n.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(s.jsx)(o.a,{className:"Tooltip",content:"string"===typeof a?Object(s.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:a.trim().split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):a,arrow:!1,animation:"shift-away",touch:!i||["hold",300],children:Object(s.jsx)("div",Object(c.a)(Object(c.a)({onClick:j},d),{},{children:t}))})}},202:function(e,t,a){"use strict";a.r(t);var c=a(121),o=a(95),n=a(248),s=a(21);var r=function(e){var t=e.title,a=e.statistic,r=e.total,i=e.formula,l=e.date,d=e.description,j=e.className,m=Object(n.a)().t;return Object(s.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(s.jsxs)("div",{className:"meta-item-top",children:[Object(s.jsx)("h3",{children:t}),Object(s.jsx)(c.a,{message:i,children:Object(s.jsx)(o.f,{size:16})})]}),Object(s.jsx)("h1",{children:a}),Object(s.jsx)("h5",{children:l}),r&&Object(s.jsx)("h5",{children:"".concat(m("India has")," ").concat(r," ").concat(m("CPL"))}),Object(s.jsx)("p",{children:d})]})},i=a(10),l=a(23),d=a(67),j=a(80),m=a(2),b=a.n(m),O=a(25),u=a.n(O);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,c,o=function(e,t){if(null==e)return{};var a,c,o={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var v=Object(m.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,o=e.size,n=void 0===o?24:o,s=p(e,["color","size"]);return b.a.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));v.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},v.displayName="Compass";var f=v;function x(e){var t=e.numerator,a=e.denominator;return Object(s.jsxs)("div",{className:"frac",children:[Object(s.jsx)("span",{children:t}),Object(s.jsx)("span",{className:"bottom",children:a})]})}function g(e){var t,a,c,o,m,b=e.stateCode,O=e.data,u=e.timeseries,h=Object(n.a)().t,p=Object(l.g)(O[b],"total","confirmed",{normalizedByPopulationPer:"lakh"}),v=Object(l.g)(O[b],"total","tested",{normalizedByPopulationPer:"lakh"}),g=Object(l.g)(O.TT,"total","confirmed",{normalizedByPopulationPer:"lakh"}),y=Object(l.g)(O[b],"total","activeRatio"),k=Object(l.g)(O[b],"total","recoveryRatio"),w=Object(l.g)(O[b],"total","cfr"),N=Object.keys(u||{}).filter((function(e){return e<=Object(l.f)()})),P=N[N.length-1],T=Object(d.a)(Object(j.a)(Object(l.i)(P),6)),C=Object(l.g)(null===u||void 0===u?void 0:u[P],"delta","tpr",{movingAverage:!0});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"StateMeta population",children:[Object(s.jsxs)("div",{className:"meta-item population",children:[Object(s.jsx)("h3",{children:h("Population")}),Object(s.jsx)("h1",{children:Object(l.e)(null===(t=O[b])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(s.jsxs)("div",{className:"alert",children:[Object(s.jsx)(f,{}),Object(s.jsxs)("div",{className:"alert-right",children:[h("Based on 2019 population projection by NCP"),Object(s.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(s.jsxs)("div",{className:"StateMeta",children:[Object(s.jsx)(r,{className:"confirmed",title:h("Confirmed Per Lakh"),statistic:Object(l.e)(p),total:Object(l.e)(g),formula:Object(s.jsxs)(s.Fragment,{children:["".concat(1e5," x "),Object(s.jsx)(x,{numerator:h("Total confirmed cases"),denominator:h("Total population")})]}),description:"\n            ~".concat(Object(l.e)(p,"long")," ").concat(h("out of every lakh people in")," ").concat(i.t[b]," ").concat(h("have tested positive for the virus."),"\n            ")}),Object(s.jsx)(r,{className:"active",title:h("Active Ratio"),statistic:"".concat(Object(l.e)(y,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:h("Total active cases right now"),denominator:h("Total confirmed cases")})]}),description:y>0?"".concat(h("For every 100 confirmed cases"),", ~").concat(Object(l.e)(y,"long")," ").concat(h("are currently infected.")):h("Currently, there are no active cases in this state.")}),Object(s.jsx)(r,{className:"recovery",title:h("Recovery Ratio"),statistic:"".concat(Object(l.e)(k,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:h("Total recovered cases"),denominator:h("Total confirmed cases")})]}),description:k>0?"".concat(h("For every 100 confirmed cases"),", ~").concat(Object(l.e)(k,"long")," ").concat(h("have recovered from the virus.")):h("Unfortunately, there are no recoveries in this state yet.")}),Object(s.jsx)(r,{className:"mortality",title:h("Case Fatality Ratio"),statistic:"".concat(Object(l.e)(w,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:h("Total deaths"),denominator:h("Total confirmed cases")})]}),description:w>0?"".concat(h("For every 100 confirmed cases"),", ~").concat(Object(l.e)(w,"long")," ").concat(h("have unfortunately passed away from the virus.")):h("Fortunately, no one has passed away from the virus in this state.")}),Object(s.jsx)(r,{className:"tpr",title:h("Test Positivity Ratio"),statistic:C>0?"".concat(Object(l.e)(C,"%")):"-",formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:h("Confirmed cases last week"),denominator:h("Samples tested last week")})]}),date:"".concat(Object(l.c)(T,"dd MMM")," - ").concat(Object(l.c)(P,"dd MMM")),description:C>0?"".concat(h("In the last one week,")," ").concat(Object(l.e)(C,"%"),"\n              ").concat(h("of samples tested came back positive.")):h("No tested sample came back positive in last one week.")}),Object(s.jsx)(r,{className:"tpl",title:h("Tests Per Lakh"),statistic:"".concat(Object(l.e)(v)),formula:Object(s.jsxs)(s.Fragment,{children:["".concat(1e5," x "),Object(s.jsx)(x,{numerator:h("Total samples tested"),denominator:h("Total population")})]}),date:v&&(null===(c=O[b])||void 0===c||null===(o=c.meta)||void 0===o||null===(m=o.tested)||void 0===m?void 0:m.date)?"".concat(h("As of")," ").concat(Object(l.d)(O[b].meta.tested.date)," ").concat(h("ago")):"",description:v>0?"".concat(h("For every lakh people in")," ").concat(i.t[b],",\n                ~").concat(Object(l.e)(v,"long")," ").concat(h("samples were tested.")):h("No tests have been conducted in this state yet.")})]})]})}var y=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(m.memo)(g,y)}}]);
//# sourceMappingURL=22.342d4216.chunk.js.map