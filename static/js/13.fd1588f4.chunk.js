(this.webpackJsonpcovid19kashmir=this.webpackJsonpcovid19kashmir||[]).push([[13],{121:function(t,e,r){"use strict";var n=r(2),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var i=function(t){var e=t.animate,r=t.backgroundColor,i=t.backgroundOpacity,u=t.baseUrl,c=t.children,a=t.foregroundColor,f=t.foregroundOpacity,l=t.gradientRatio,s=t.uniqueKey,p=t.interval,v=t.rtl,d=t.speed,h=t.style,y=t.title,b=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),m=s||Math.random().toString(36).substring(6),O=m+"-diff",g=m+"-animated-diff",j=m+"-aria",w=v?{transform:"scaleX(-1)"}:null,P="0; "+p+"; 1",E=d+"s";return Object(n.createElement)("svg",o({"aria-labelledby":j,role:"img",style:o(o({},h),w)},b),y?Object(n.createElement)("title",{id:j},y):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+O+")",style:{fill:"url("+u+"#"+g+")"}}),Object(n.createElement)("defs",null,Object(n.createElement)("clipPath",{id:O},c),Object(n.createElement)("linearGradient",{id:g},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},e&&Object(n.createElement)("animate",{attributeName:"offset",values:-l+"; "+-l+"; 1",keyTimes:P,dur:E,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:a,stopOpacity:f},e&&Object(n.createElement)("animate",{attributeName:"offset",values:-l/2+"; "+-l/2+"; "+(1+l/2),keyTimes:P,dur:E,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},e&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+l),keyTimes:P,dur:E,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var u=function(t){return t.children?Object(n.createElement)(i,o({},t)):Object(n.createElement)(c,o({},t))},c=function(t){return Object(n.createElement)(u,o({viewBox:"0 0 476 124"},t),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};e.a=u},128:function(t,e,r){"use strict";var n=r(2),o=r(93),i=o.a?n.useLayoutEffect:n.useEffect,u={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=o.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(n.useState)(null),e=t[0],r=t[1],o=Object(n.useState)(u),c=o[0],a=o[1],f=Object(n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,r=e.x,n=e.y,o=e.width,i=e.height,u=e.top,c=e.left,f=e.bottom,l=e.right;a({x:r,y:n,width:o,height:i,top:u,left:c,bottom:f,right:l})}}))}),[]);return i((function(){if(e)return f.observe(e),function(){f.disconnect()}}),[e]),[r,c]}:function(){return[o.b,u]}},191:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[q]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===J}(t)||Array.isArray(t)||!!t[Y]||!!t.constructor[Y]||p(t)||v(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:$)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[q];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:v(t)?3:0}function a(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function f(t,e){return 2===c(t)?t.get(e):t[e]}function l(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function s(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return K&&t instanceof Map}function v(t){return N&&t instanceof Set}function d(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=G(t);delete e[q];for(var r=$(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function y(t,e){return void 0===e&&(e=!1),m(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&u(t,(function(t,e){return y(e,!0)}),!0)),t}function b(){n(2)}function m(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function O(t){var e=B[t];return e||n(18,t),e}function g(){return I}function j(t,e){e&&(O("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){P(t),t.p.forEach(S),t.p=null}function P(t){t===I&&(I=t.l)}function E(t){return I={p:[],l:I,h:t,m:!0,_:0}}function S(t){var e=t[q];0===e.i||1===e.i?e.j():e.O=!0}function x(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||O("ES5").S(e,t,o),o?(r[q].P&&(w(e),n(4)),i(t)&&(t=k(e,t),e.l||D(e,t)),e.u&&O("Patches").M(r[q],t,e.u,e.s)):t=k(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==W?t:void 0}function k(t,e,r){if(m(e))return e;var n=e[q];if(!n)return u(e,(function(o,i){return A(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return D(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return A(t,n,o,e,i,r)})),D(t,o,!1),r&&t.u&&O("Patches").R(n,r,t.u,t.s)}return n.o}function A(t,e,r,n,u,c){if(o(u)){var f=k(t,u,c&&e&&3!==e.i&&!a(e.D,n)?c.concat(n):void 0);if(l(r,n,f),!o(f))return;t.m=!1}if(i(u)&&!m(u)){if(!t.h.F&&t._<1)return;k(t,u),e&&e.A.l||D(t,u)}}function D(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&y(e,r)}function T(t,e){var r=t[q];return(r?d(r):t)[e]}function M(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function R(t){t.P||(t.P=!0,t.l&&R(t.l))}function U(t){t.o||(t.o=h(t.t))}function C(t,e,r){var n=p(e)?O("MapSet").N(e,r):v(e)?O("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=H;r&&(o=[n],i=Q);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return n.k=a,n.j=c,a}(e,r):O("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function F(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[q],o=c(e);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=L(e,o),n.I=!1}else r=L(e,o);return u(r,(function(e,o){n&&f(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function L(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}var _,I,z="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),K="undefined"!=typeof Map,N="undefined"!=typeof Set,X="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=z?Symbol.for("immer-nothing"):((_={})["immer-nothing"]=!0,_),Y=z?Symbol.for("immer-draftable"):"__$immer_draftable",q=z?Symbol.for("immer-state"):"__$immer_state",J=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),$="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,G=Object.getOwnPropertyDescriptors||function(t){var e={};return $(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},B={},H={get:function(t,e){if(e===q)return t;var r=d(t);if(!a(r,e))return function(t,e,r){var n,o=M(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===T(t.t,e)?(U(t),t.o[e]=C(t.A.h,n,t)):n},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){var n=M(d(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=T(d(t),e),i=null==o?void 0:o[q];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(s(r,o)&&(void 0!==r||a(t.t,e)))return!0;U(t),R(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==T(t.t,e)||e in t.t?(t.D[e]=!1,U(t),R(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Q={};u(H,(function(t,e){Q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Q.deleteProperty=function(t,e){return H.deleteProperty.call(this,t[0],e)},Q.set=function(t,e,r){return H.set.call(this,t[0],e,r,t[0])};var V=new(function(){function t(t){var e=this;this.g=X,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var c=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var a;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var f=E(e),l=C(e,t,void 0),s=!0;try{a=r(l),s=!1}finally{s?w(f):P(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j(f,o),x(t,f)}),(function(t){throw w(f),t})):(j(f,o),x(a,f))}if(!t||"object"!=typeof t){if((a=r(t))===W)return;return void 0===a&&(a=t),e.F&&y(a,!0),a}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=F(t));var e=E(this),r=C(this,t,void 0);return r[q].C=!0,P(e),r},e.finishDraft=function(t,e){var r=(t&&t[q]).A;return j(r,e),x(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!X&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=O("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}()),Z=V.produce;V.produceWithPatches.bind(V),V.setAutoFreeze.bind(V),V.setUseProxies.bind(V),V.applyPatches.bind(V),V.createDraft.bind(V),V.finishDraft.bind(V);e.a=Z},192:function(t,e,r){!function(t,e){function r(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})),e.default=t,e}var n=r(e);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var i="Left",u="Right",c="Up",a="Down",f={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},l={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},s="mousemove",p="mouseup",v="touchend",d="touchmove",h="touchstart";function y(t,e,r,n){return t>e?r>0?u:i:n>0?a:c}function b(t,e){if(0===e)return t;var r=Math.PI/180*e;return[t[0]*Math.cos(r)+t[1]*Math.sin(r),t[1]*Math.cos(r)-t[0]*Math.sin(r)]}function m(t,e){var r=function(e){e&&"touches"in e&&e.touches.length>1||t((function(t,r){r.trackMouse&&(document.addEventListener(s,n),document.addEventListener(p,c));var i="touches"in e?e.touches[0]:e,u=b([i.clientX,i.clientY],r.rotationAngle);return o({},t,l,{initial:[].concat(u),xy:u,start:e.timeStamp||0})}))},n=function(e){t((function(t,r){if("touches"in e&&e.touches.length>1)return t;var n="touches"in e?e.touches[0]:e,i=b([n.clientX,n.clientY],r.rotationAngle),u=i[0],c=i[1],a=u-t.xy[0],l=c-t.xy[1],s=Math.abs(a),p=Math.abs(l),v=(e.timeStamp||0)-t.start,d=Math.sqrt(s*s+p*p)/(v||1),h=[a/(v||1),l/(v||1)],m=y(s,p,a,l),O="number"===typeof r.delta?r.delta:r.delta[m.toLowerCase()]||f.delta;if(s<O&&p<O&&!t.swiping)return t;var g={absX:s,absY:p,deltaX:a,deltaY:l,dir:m,event:e,first:t.first,initial:t.initial,velocity:d,vxvy:h};g.first&&r.onSwipeStart&&r.onSwipeStart(g),r.onSwiping&&r.onSwiping(g);var j=!1;return(r.onSwiping||r.onSwiped||"onSwiped"+m in r)&&(j=!0),j&&r.preventDefaultTouchmoveEvent&&r.trackTouch&&e.cancelable&&e.preventDefault(),o({},t,{first:!1,eventData:g,swiping:!0})}))},i=function(e){t((function(t,r){var n;if(t.swiping&&t.eventData){n=o({},t.eventData,{event:e}),r.onSwiped&&r.onSwiped(n);var i=r["onSwiped"+n.dir];i&&i(n)}else r.onTap&&r.onTap({event:e});return o({},t,l,{eventData:n})}))},u=function(){document.removeEventListener(s,n),document.removeEventListener(p,c)},c=function(t){u(),i(t)},a=function(t,e){var o=function(){};if(t&&t.addEventListener){var u=[[h,r],[d,n],[v,i]];u.forEach((function(r){var n=r[0],o=r[1];return t.addEventListener(n,o,{passive:e})})),o=function(){return u.forEach((function(e){var r=e[0],n=e[1];return t.removeEventListener(r,n)}))}}return o},m={ref:function(e){null!==e&&t((function(t,r){if(t.el===e)return t;var n={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),n.cleanUpTouch=void 0),r.trackTouch&&e&&(n.cleanUpTouch=a(e,!r.preventDefaultTouchmoveEvent)),o({},t,{el:e},n)}))}};return e.trackMouse&&(m.onMouseDown=r),[m,a]}function O(t,e,r){var n={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),n.cleanUpTouch=void 0):e.trackTouch&&!t.cleanUpTouch&&t.el&&(n.cleanUpTouch=r(t.el,!e.preventDefaultTouchmoveEvent)),o({},t,n)}function g(t){var e=t.trackMouse,r=n.useRef(o({},l)),i=n.useRef(o({},f));i.current=o({},f,t);var u=n.useMemo((function(){return m((function(t){return r.current=t(r.current,i.current)}),{trackMouse:e})}),[e]),c=u[0],a=u[1];return r.current=O(r.current,i.current,a),c}t.DOWN=a,t.LEFT=i,t.RIGHT=u,t.UP=c,t.useSwipeable=g}(e,r(2))},94:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!==o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!==o--;){var u=i[o];if(!t(e[u],r[u]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=13.fd1588f4.chunk.js.map