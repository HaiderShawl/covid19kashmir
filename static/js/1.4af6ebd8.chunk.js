(this.webpackJsonpcovid19kashmir=this.webpackJsonpcovid19kashmir||[]).push([[1],{110:function(t,n,e){"use strict";function r(t,n){var e,r=0,u=(t=t.slice()).length-1,i=t[r],o=t[u];return o<i&&(e=r,r=u,u=e,e=i,i=o,o=e),t[r]=n.floor(i),t[u]=n.ceil(o),t}e.d(n,"a",(function(){return r}))},111:function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},112:function(t,n,e){"use strict";Array.prototype.slice;n.a=function(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}},122:function(t,n,e){"use strict";function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"===typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,u=function(){};return{s:u,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(a)throw i}}}}function a(t,n){var e=[],r=[];return t.length&&function t(n,u){if(1===n.length)e.push(n[0]),r.push(n[0]);else{for(var i=Array(n.length-1),o=0;o<i.length;o++)0===o&&e.push(n[0]),o===i.length-1&&r.push(n[o+1]),i[o]=[(1-u)*n[o][0]+u*n[o+1][0],(1-u)*n[o][1]+u*n[o+1][1]];t(i,u)}}(t,n),{left:e,right:r.reverse()}}function f(t){var n={};return 4===t.length&&(n.x2=t[2][0],n.y2=t[2][1]),t.length>=3&&(n.x1=t[1][0],n.y1=t[1][1]),n.x=t[t.length-1][0],n.y=t[t.length-1][1],4===t.length?n.type="C":3===t.length?n.type="Q":n.type="L",n}function s(t,n,e){var r=[[t.x,t.y]];return null!=n.x1&&r.push([n.x1,n.y1]),null!=n.x2&&r.push([n.x2,n.y2]),r.push([n.x,n.y]),function(t,n){for(var e=[],r=t,u=1/(n=n||2),i=0;i<n-1;i++){var o=a(r,u/(1-u*i));e.push(o.left),r=o.right}return e.push(r),e}(r,e).map(f)}e.d(n,"a",(function(){return x}));var l=/[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g,h={M:["x","y"],L:["x","y"],H:["x"],V:["y"],C:["x1","y1","x2","y2","x","y"],S:["x2","y2","x","y"],Q:["x1","y1","x","y"],T:["x","y"],A:["rx","ry","xAxisRotation","largeArcFlag","sweepFlag","x","y"],Z:[]};function g(t,n){for(var e=Array(t),r=0;r<t;r++)e[r]=n;return e}function y(t){return"".concat(t.type).concat(h[t.type].map((function(n){return t[n]})).join(","))}function v(t,n,e){var r=t.length-1,u=n.length-1,o=r/u,c=g(u).reduce((function(n,r,u){var i=Math.floor(o*u);if(e&&i<t.length-1&&e(t[i],t[i+1])){var c=o*u%1<.5;n[i]&&(c?i>0?i-=1:i<t.length-1&&(i+=1):i<t.length-1?i+=1:i>0&&(i-=1))}return n[i]=(n[i]||0)+1,n}),[]).reduce((function(n,e,r){if(r===t.length-1){var u=g(e,i({},t[t.length-1]));return"M"===u[0].type&&u.forEach((function(t){t.type="L"})),n.concat(u)}return n.concat(function(t,n,e){var r=[];if("L"===n.type||"Q"===n.type||"C"===n.type)r=r.concat(s(t,n,e));else{var u=i({},t);"M"===u.type&&(u.type="L"),(r=r.concat(g(e-1).map((function(){return u})))).push(n)}return r}(t[r],t[r+1],e))}),[]);return c.unshift(t[0]),c}function p(t){for(var n,e,r=(t||"").match(l)||[],u=[],i=0;i<r.length;++i)if(n=h[r[i]]){e={type:r[i]};for(var o=0;o<n.length;++o)e[n[o]]=+r[i+o+1];i+=n.length,u.push(e)}return u}function _(t,n,e){var i=null==t?[]:t.slice(),o=null==n?[]:n.slice();if(!i.length&&!o.length)return function(){return[]};var a=(0===i.length||"Z"===i[i.length-1].type)&&(0===o.length||"Z"===o[o.length-1].type);i.length>0&&"Z"===i[i.length-1].type&&i.pop(),o.length>0&&"Z"===o[o.length-1].type&&o.pop(),i.length?o.length||o.push(i[0]):i.push(o[0]),0!==Math.abs(o.length-i.length)&&(o.length>i.length?i=v(i,o,e):o.length<i.length&&(o=v(o,i,e)));var f=(i=i.map((function(t,n){return function(t,n){var e={x1:"x",y1:"y",x2:"x",y2:"y"},r=["xAxisRotation","largeArcFlag","sweepFlag"];if(t.type!==n.type&&"M"!==n.type.toUpperCase()){var u={};Object.keys(n).forEach((function(i){var o=n[i],c=t[i];void 0===c&&(r.includes(i)?c=o:(void 0===c&&e[i]&&(c=t[e[i]]),void 0===c&&(c=0))),u[i]=c})),u.type=n.type,t=u}return t}(t,o[n])}))).map((function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t)}));return a&&(f.push({type:"Z"}),i.push({type:"Z"})),function(t){if(1===t)return null==n?[]:n;if(0===t)return i;for(var e=0;e<f.length;++e){var r,u=i[e],a=o[e],s=f[e],l=c(h[s.type]);try{for(l.s();!(r=l.n()).done;){var g=r.value;s[g]=(1-t)*u[g]+t*a[g],"largeArcFlag"!==g&&"sweepFlag"!==g||(s[g]=Math.round(s[g]))}}catch(y){l.e(y)}finally{l.f()}}return f}}function x(t,n,e){var r=p(t),u=p(n);if(!r.length&&!u.length)return function(){return""};var i=_(r,u,e);return function(t){if(1===t)return null==n?"":n;var e,r="",u=c(i(t));try{for(u.s();!(e=u.n()).done;){r+=y(e.value)}}catch(o){u.e(o)}finally{u.f()}return r}}Object.keys(h).forEach((function(t){h[t.toLowerCase()]=h[t]}))},124:function(t,n,e){"use strict";function r(t){this._context=t}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new r(t)}},125:function(t,n,e){"use strict";function r(t){return t[0]}function u(t){return t[1]}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return u}))},127:function(t,n,e){"use strict";var r=e(2),u=e(91),i=u.a?r.useLayoutEffect:r.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=u.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],u=Object(r.useState)(o),c=u[0],a=u[1],f=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,u=n.width,i=n.height,o=n.top,c=n.left,f=n.bottom,s=n.right;a({x:e,y:r,width:u,height:i,top:o,left:c,bottom:f,right:s})}}))}),[]);return i((function(){if(n)return f.observe(n),function(){f.disconnect()}}),[n]),[e,c]}:function(){return[u.b,o]}},149:function(t,n,e){"use strict";var r=e(226),u=e(112),i=e(111),o=e(124),c=e(125);n.a=function(t,n){var e=Object(i.a)(!0),a=null,f=o.a,s=null;function l(i){var o,c,l,h=(i=Object(u.a)(i)).length,g=!1;for(null==a&&(s=f(l=Object(r.a)())),o=0;o<=h;++o)!(o<h&&e(c=i[o],o,i))===g&&((g=!g)?s.lineStart():s.lineEnd()),g&&s.point(+t(c,o,i),+n(c,o,i));if(l)return s=null,l+""||null}return t="function"===typeof t?t:void 0===t?c.a:Object(i.a)(t),n="function"===typeof n?n:void 0===n?c.b:Object(i.a)(n),l.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(i.a)(+n),l):t},l.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(i.a)(+t),l):n},l.defined=function(t){return arguments.length?(e="function"===typeof t?t:Object(i.a)(!!t),l):e},l.curve=function(t){return arguments.length?(f=t,null!=a&&(s=f(a)),l):f},l.context=function(t){return arguments.length?(null==t?a=s=null:s=f(a=t),l):a},l}},226:function(t,n,e){"use strict";var r=Math.PI,u=2*r,i=1e-6,o=u-i;function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new c}c.prototype=a.prototype={constructor:c,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,u,i){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+u)+","+(this._y1=+i)},arcTo:function(t,n,e,u,o){t=+t,n=+n,e=+e,u=+u,o=+o;var c=this._x1,a=this._y1,f=e-t,s=u-n,l=c-t,h=a-n,g=l*l+h*h;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(g>i)if(Math.abs(h*f-s*l)>i&&o){var y=e-c,v=u-a,p=f*f+s*s,_=y*y+v*v,x=Math.sqrt(p),T=Math.sqrt(g),d=o*Math.tan((r-Math.acos((p+g-_)/(2*x*T)))/2),M=d/T,b=d/x;Math.abs(M-1)>i&&(this._+="L"+(t+M*l)+","+(n+M*h)),this._+="A"+o+","+o+",0,0,"+ +(h*y>l*v)+","+(this._x1=t+b*f)+","+(this._y1=n+b*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,c,a,f){t=+t,n=+n,f=!!f;var s=(e=+e)*Math.cos(c),l=e*Math.sin(c),h=t+s,g=n+l,y=1^f,v=f?c-a:a-c;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+g:(Math.abs(this._x1-h)>i||Math.abs(this._y1-g)>i)&&(this._+="L"+h+","+g),e&&(v<0&&(v=v%u+u),v>o?this._+="A"+e+","+e+",0,1,"+y+","+(t-s)+","+(n-l)+"A"+e+","+e+",0,1,"+y+","+(this._x1=h)+","+(this._y1=g):v>i&&(this._+="A"+e+","+e+",0,"+ +(v>=r)+","+y+","+(this._x1=t+e*Math.cos(a))+","+(this._y1=n+e*Math.sin(a))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},n.a=a},227:function(t,n,e){"use strict";function r(t){return t<0?-1:1}function u(t,n,e){var u=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(u||i<0&&-0),c=(e-t._y1)/(i||u<0&&-0),a=(o*i+c*u)/(u+i);return(r(o)+r(c))*Math.min(Math.abs(o),Math.abs(c),.5*Math.abs(a))||0}function i(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function o(t,n,e){var r=t._x0,u=t._y0,i=t._x1,o=t._y1,c=(i-r)/3;t._context.bezierCurveTo(r+c,u+c*n,i-c,o-c*e,i,o)}function c(t){this._context=t}function a(t){this._context=new f(t)}function f(t){this._context=t}function s(t){return new c(t)}e.d(n,"a",(function(){return s})),c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,o(this,i(this,e=u(this,t,n)),e);break;default:o(this,this._t0,e=u(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(a.prototype=Object.create(c.prototype)).point=function(t,n){c.prototype.point.call(this,n,t)},f.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,u,i){this._context.bezierCurveTo(n,t,r,e,i,u)}}},239:function(t,n,e){"use strict";e.d(n,"a",(function(){return En}));var r=e(47),u=e(186),i=e(224),o=1e3,c=6e4,a=36e5,f=864e5,s=6048e5,l=2592e6,h=31536e6,g=new Date,y=new Date;function v(t,n,e,r){function u(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return u.floor=function(n){return t(n=new Date(+n)),n},u.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},u.round=function(t){var n=u(t),e=u.ceil(t);return t-n<e-t?n:e},u.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},u.range=function(e,r,i){var o,c=[];if(e=u.ceil(e),i=null==i?1:Math.floor(i),!(e<r)||!(i>0))return c;do{c.push(o=new Date(+e)),n(e,i),t(e)}while(o<e&&e<r);return c},u.filter=function(e){return v((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(u.count=function(n,r){return g.setTime(+n),y.setTime(+r),t(g),t(y),Math.floor(e(g,y))},u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(r?function(n){return r(n)%t===0}:function(n){return u.count(0,n)%t===0}):u:null}),u}var p=v((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}));p.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?v((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):p:null};var _=p,x=(p.range,v((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*o)}),(function(t,n){return(n-t)/o}),(function(t){return t.getUTCSeconds()}))),T=x,d=(x.range,v((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*o)}),(function(t,n){t.setTime(+t+n*c)}),(function(t,n){return(n-t)/c}),(function(t){return t.getMinutes()}))),M=d,b=(d.range,v((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*o-t.getMinutes()*c)}),(function(t,n){t.setTime(+t+n*a)}),(function(t,n){return(n-t)/a}),(function(t){return t.getHours()}))),m=b,C=(b.range,v((function(t){return t.setHours(0,0,0,0)}),(function(t,n){return t.setDate(t.getDate()+n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*c)/f}),(function(t){return t.getDate()-1}))),w=C;C.range;function U(t){return v((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*c)/s}))}var D=U(0),O=U(1),F=U(2),j=U(3),S=U(4),Y=U(5),A=U(6),H=(D.range,O.range,F.range,j.range,S.range,Y.range,A.range,v((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))),L=H,Z=(H.range,v((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()})));Z.every=function(t){return isFinite(t=Math.floor(t))&&t>0?v((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null};var P=Z,E=(Z.range,v((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*c)}),(function(t,n){return(n-t)/c}),(function(t){return t.getUTCMinutes()}))),k=E,z=(E.range,v((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*a)}),(function(t,n){return(n-t)/a}),(function(t){return t.getUTCHours()}))),Q=z,V=(z.range,v((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/f}),(function(t){return t.getUTCDate()-1}))),q=V;V.range;function I(t){return v((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/s}))}var N=I(0),W=I(1),J=I(2),R=I(3),X=I(4),B=I(5),G=I(6),$=(N.range,W.range,J.range,R.range,X.range,B.range,G.range,v((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))),K=$,tt=($.range,v((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()})));tt.every=function(t){return isFinite(t=Math.floor(t))&&t>0?v((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null};var nt=tt;tt.range;function et(t,n,e,g,y,v){var p=[[T,1,o],[T,5,5e3],[T,15,15e3],[T,30,3e4],[v,1,c],[v,5,3e5],[v,15,9e5],[v,30,18e5],[y,1,a],[y,3,108e5],[y,6,216e5],[y,12,432e5],[g,1,f],[g,2,1728e5],[e,1,s],[n,1,l],[n,3,7776e6],[t,1,h]];function x(n,e,o){var c=Math.abs(e-n)/o,a=Object(u.a)((function(t){return Object(r.a)(t,3)[2]})).right(p,c);if(a===p.length)return t.every(Object(i.c)(n/h,e/h,o));if(0===a)return _.every(Math.max(Object(i.c)(n,e,o),1));var f=Object(r.a)(p[c/p[a-1][2]<p[a][2]/c?a-1:a],2),s=f[0],l=f[1];return s.every(l)}return[function(t,n,e){var r=n<t;if(r){var u=[n,t];t=u[0],n=u[1]}var i=e&&"function"===typeof e.range?e:x(t,n,e),o=i?i.range(t,+n+1):[];return r?o.reverse():o},x]}var rt=et(nt,K,N,q,Q,k),ut=Object(r.a)(rt,2),it=(ut[0],ut[1],et(P,L,D,w,m,M)),ot=Object(r.a)(it,2),ct=ot[0],at=ot[1];function ft(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function st(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function lt(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}var ht,gt,yt={"-":"",_:" ",0:"0"},vt=/^\s*\d+/,pt=/^%/,_t=/[\\^$*+?|[\]().{}]/g;function xt(t,n,e){var r=t<0?"-":"",u=(r?-t:t)+"",i=u.length;return r+(i<e?new Array(e-i+1).join(n)+u:u)}function Tt(t){return t.replace(_t,"\\$&")}function dt(t){return new RegExp("^(?:"+t.map(Tt).join("|")+")","i")}function Mt(t){return new Map(t.map((function(t,n){return[t.toLowerCase(),n]})))}function bt(t,n,e){var r=vt.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function mt(t,n,e){var r=vt.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Ct(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function wt(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Ut(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Dt(t,n,e){var r=vt.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function Ot(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Ft(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function jt(t,n,e){var r=vt.exec(n.slice(e,e+1));return r?(t.q=3*r[0]-3,e+r[0].length):-1}function St(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Yt(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function At(t,n,e){var r=vt.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Ht(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Lt(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Zt(t,n,e){var r=vt.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Pt(t,n,e){var r=vt.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Et(t,n,e){var r=vt.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function kt(t,n,e){var r=pt.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function zt(t,n,e){var r=vt.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function Qt(t,n,e){var r=vt.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function Vt(t,n){return xt(t.getDate(),n,2)}function qt(t,n){return xt(t.getHours(),n,2)}function It(t,n){return xt(t.getHours()%12||12,n,2)}function Nt(t,n){return xt(1+w.count(P(t),t),n,3)}function Wt(t,n){return xt(t.getMilliseconds(),n,3)}function Jt(t,n){return Wt(t,n)+"000"}function Rt(t,n){return xt(t.getMonth()+1,n,2)}function Xt(t,n){return xt(t.getMinutes(),n,2)}function Bt(t,n){return xt(t.getSeconds(),n,2)}function Gt(t){var n=t.getDay();return 0===n?7:n}function $t(t,n){return xt(D.count(P(t)-1,t),n,2)}function Kt(t){var n=t.getDay();return n>=4||0===n?S(t):S.ceil(t)}function tn(t,n){return t=Kt(t),xt(S.count(P(t),t)+(4===P(t).getDay()),n,2)}function nn(t){return t.getDay()}function en(t,n){return xt(O.count(P(t)-1,t),n,2)}function rn(t,n){return xt(t.getFullYear()%100,n,2)}function un(t,n){return xt((t=Kt(t)).getFullYear()%100,n,2)}function on(t,n){return xt(t.getFullYear()%1e4,n,4)}function cn(t,n){var e=t.getDay();return xt((t=e>=4||0===e?S(t):S.ceil(t)).getFullYear()%1e4,n,4)}function an(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+xt(n/60|0,"0",2)+xt(n%60,"0",2)}function fn(t,n){return xt(t.getUTCDate(),n,2)}function sn(t,n){return xt(t.getUTCHours(),n,2)}function ln(t,n){return xt(t.getUTCHours()%12||12,n,2)}function hn(t,n){return xt(1+q.count(nt(t),t),n,3)}function gn(t,n){return xt(t.getUTCMilliseconds(),n,3)}function yn(t,n){return gn(t,n)+"000"}function vn(t,n){return xt(t.getUTCMonth()+1,n,2)}function pn(t,n){return xt(t.getUTCMinutes(),n,2)}function _n(t,n){return xt(t.getUTCSeconds(),n,2)}function xn(t){var n=t.getUTCDay();return 0===n?7:n}function Tn(t,n){return xt(N.count(nt(t)-1,t),n,2)}function dn(t){var n=t.getUTCDay();return n>=4||0===n?X(t):X.ceil(t)}function Mn(t,n){return t=dn(t),xt(X.count(nt(t),t)+(4===nt(t).getUTCDay()),n,2)}function bn(t){return t.getUTCDay()}function mn(t,n){return xt(W.count(nt(t)-1,t),n,2)}function Cn(t,n){return xt(t.getUTCFullYear()%100,n,2)}function wn(t,n){return xt((t=dn(t)).getUTCFullYear()%100,n,2)}function Un(t,n){return xt(t.getUTCFullYear()%1e4,n,4)}function Dn(t,n){var e=t.getUTCDay();return xt((t=e>=4||0===e?X(t):X.ceil(t)).getUTCFullYear()%1e4,n,4)}function On(){return"+0000"}function Fn(){return"%"}function jn(t){return+t}function Sn(t){return Math.floor(+t/1e3)}ht=function(t){var n=t.dateTime,e=t.date,r=t.time,u=t.periods,i=t.days,o=t.shortDays,c=t.months,a=t.shortMonths,f=dt(u),s=Mt(u),l=dt(i),h=Mt(i),g=dt(o),y=Mt(o),v=dt(c),p=Mt(c),_=dt(a),x=Mt(a),T={a:function(t){return o[t.getDay()]},A:function(t){return i[t.getDay()]},b:function(t){return a[t.getMonth()]},B:function(t){return c[t.getMonth()]},c:null,d:Vt,e:Vt,f:Jt,g:un,G:cn,H:qt,I:It,j:Nt,L:Wt,m:Rt,M:Xt,p:function(t){return u[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:jn,s:Sn,S:Bt,u:Gt,U:$t,V:tn,w:nn,W:en,x:null,X:null,y:rn,Y:on,Z:an,"%":Fn},d={a:function(t){return o[t.getUTCDay()]},A:function(t){return i[t.getUTCDay()]},b:function(t){return a[t.getUTCMonth()]},B:function(t){return c[t.getUTCMonth()]},c:null,d:fn,e:fn,f:yn,g:wn,G:Dn,H:sn,I:ln,j:hn,L:gn,m:vn,M:pn,p:function(t){return u[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:jn,s:Sn,S:_n,u:xn,U:Tn,V:Mn,w:bn,W:mn,x:null,X:null,y:Cn,Y:Un,Z:On,"%":Fn},M={a:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=y.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(t,n,e){var r=_.exec(n.slice(e));return r?(t.m=x.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=p.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(t,e,r){return C(t,n,e,r)},d:Yt,e:Yt,f:Et,g:Ot,G:Dt,H:Ht,I:Ht,j:At,L:Pt,m:St,M:Lt,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s.get(r[0].toLowerCase()),e+r[0].length):-1},q:jt,Q:zt,s:Qt,S:Zt,u:mt,U:Ct,V:wt,w:bt,W:Ut,x:function(t,n,r){return C(t,e,n,r)},X:function(t,n,e){return C(t,r,n,e)},y:Ot,Y:Dt,Z:Ft,"%":kt};function b(t,n){return function(e){var r,u,i,o=[],c=-1,a=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++c<f;)37===t.charCodeAt(c)&&(o.push(t.slice(a,c)),null!=(u=yt[r=t.charAt(++c)])?r=t.charAt(++c):u="e"===r?" ":"0",(i=n[r])&&(r=i(e,u)),o.push(r),a=c+1);return o.push(t.slice(a,c)),o.join("")}}function m(t,n){return function(e){var r,u,i=lt(1900,void 0,1);if(C(i,t,e+="",0)!=e.length)return null;if("Q"in i)return new Date(i.Q);if("s"in i)return new Date(1e3*i.s+("L"in i?i.L:0));if(n&&!("Z"in i)&&(i.Z=0),"p"in i&&(i.H=i.H%12+12*i.p),void 0===i.m&&(i.m="q"in i?i.q:0),"V"in i){if(i.V<1||i.V>53)return null;"w"in i||(i.w=1),"Z"in i?(u=(r=st(lt(i.y,0,1))).getUTCDay(),r=u>4||0===u?W.ceil(r):W(r),r=q.offset(r,7*(i.V-1)),i.y=r.getUTCFullYear(),i.m=r.getUTCMonth(),i.d=r.getUTCDate()+(i.w+6)%7):(u=(r=ft(lt(i.y,0,1))).getDay(),r=u>4||0===u?O.ceil(r):O(r),r=w.offset(r,7*(i.V-1)),i.y=r.getFullYear(),i.m=r.getMonth(),i.d=r.getDate()+(i.w+6)%7)}else("W"in i||"U"in i)&&("w"in i||(i.w="u"in i?i.u%7:"W"in i?1:0),u="Z"in i?st(lt(i.y,0,1)).getUTCDay():ft(lt(i.y,0,1)).getDay(),i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(u+5)%7:i.w+7*i.U-(u+6)%7);return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,st(i)):ft(i)}}function C(t,n,e,r){for(var u,i,o=0,c=n.length,a=e.length;o<c;){if(r>=a)return-1;if(37===(u=n.charCodeAt(o++))){if(u=n.charAt(o++),!(i=M[u in yt?n.charAt(o++):u])||(r=i(t,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}return T.x=b(e,T),T.X=b(r,T),T.c=b(n,T),d.x=b(e,d),d.X=b(r,d),d.c=b(n,d),{format:function(t){var n=b(t+="",T);return n.toString=function(){return t},n},parse:function(t){var n=m(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=b(t+="",d);return n.toString=function(){return t},n},utcParse:function(t){var n=m(t+="",!0);return n.toString=function(){return t},n}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),gt=ht.format,ht.parse,ht.utcFormat,ht.utcParse;var Yn=e(102),An=e(48),Hn=e(110);function Ln(t){return new Date(t)}function Zn(t){return t instanceof Date?+t:+new Date(+t)}function Pn(t,n,e,r,u,i,o,c,a,f){var s=Object(Yn.b)(),l=s.invert,h=s.domain,g=f(".%L"),y=f(":%S"),v=f("%I:%M"),p=f("%I %p"),_=f("%a %d"),x=f("%b %d"),T=f("%B"),d=f("%Y");function M(t){return(a(t)<t?g:c(t)<t?y:o(t)<t?v:i(t)<t?p:r(t)<t?u(t)<t?_:x:e(t)<t?T:d)(t)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(Array.from(t,Zn)):h().map(Ln)},s.ticks=function(n){var e=h();return t(e[0],e[e.length-1],null==n?10:n)},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t){var e=h();return t&&"function"===typeof t.range||(t=n(e[0],e[e.length-1],null==t?10:t)),t?h(Object(Hn.a)(e,t)):s},s.copy=function(){return Object(Yn.a)(s,Pn(t,n,e,r,u,i,o,c,a,f))},s}function En(){return An.b.apply(Pn(ct,at,P,L,D,w,m,M,T,gt).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}}}]);
//# sourceMappingURL=1.4af6ebd8.chunk.js.map