!function(t){function e(e){for(var r,o,i=e[0],c=e[1],s=0,a=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&a.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);a.length;)a.shift()()}var r={},n={1:0};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(t){return o.p+""+t+"."+{0:"954e53edb7775d920e01",2:"0a06fad0d206be28ee5e",3:"e9597ae209d4d96152a4"}[t]+".js"}(t);var u=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(a);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}n[t]=void 0}};var a=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.libraryH3lpWebpackJsonp=window.libraryH3lpWebpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=c;o(o.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);var n,o=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function c(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new r((function(e){e(t.value)})).then(c,s)}u((n=n.apply(t,e||[])).next())}))},s=function(t,e){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function u(){var t=window.libraryh3lp.referer;return t?decodeURIComponent(t):location.href}function a(t){if(!window.URL)return t;var e=new URL(t);return e.searchParams.get("referer")||e.searchParams.set("referer",u()),e.toString()}function l(t){return t.getAttribute("data-lh3-jid")||t.getAttribute("jid")}function f(){return(jabber_resources||[]).some((function(t){return"available"===t.show||"chat"===t.show}))}function h(t){for(var e=function(){var e="lh3cb"+(new Date).getTime();return window[e]?"continue":(window[e]=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];t.apply(void 0,r),delete window[e]},{value:e})};;){var r=e();if("object"==typeof r)return r.value}}NodeList.prototype.forEach||(NodeList.prototype.forEach=function(t,e){e=e||window;for(var r=0;r<this.length;++r)t.call(e,this[r],r,this)}),r.p="/presence/js/";var p,d=function(){function t(e,r){void 0===r&&(r={}),this.root=e,this.options=r,this.setRoot(e||t.defaultRoot)}return t.prototype.start=function(){this.options.presence&&document.write('<style type="text/css">\n                    .online, .libraryh3lp_online .offline { display: none; }\n                    .offline, .libraryh3lp_online .online { display: block; }\n                 </style>'),this.addReferer(),this.startPresence()},t.prototype.openChat=function(e,r){var n=encodeURIComponent(u());if(this.options.popup){var o=i({},r,{page:location.href}),c=e;o.chat=c+(c.indexOf("?")>=0?"&":"?")+"referer="+n;var s=this.root.replace(/^https:/,location.protocol)+"/follow",a=new DOMParser,l=a.parseFromString('<form style="display:none" accept-charset="utf-8" method="post" action="'+s+'"></form>',"text/html").body.firstElementChild;for(var f in document.body.appendChild(l),o){var h=a.parseFromString('<input type="hidden" name="'+f+'" value="'+o[f]+'"/>',"text/html");l.appendChild(h.body.firstChild)}return l.submit(),!1}this.options=e;var p=i({width:400,height:320,referer:n},this.options),d="",v="";for(var f in p)if(!(t.chatParams.indexOf(f)>=0)){var y=p[f];y&&(d+=""+v+f+"="+y,v=",")}return window.open(this.chatUrl(p),"libraryh3lp",d),!1},t.prototype.checkPresence=function(){},t.prototype.setRoot=function(e){this.root=e.replace("http://","https://"),"https://us.libraryh3lp.com"===this.root&&(this.root=t.defaultRoot),"https://us.refchatter.net"===this.root&&(this.root="https://refchatter.net"),r.p=this.root+"/presence/js/"},t.prototype.addReferer=function(){var t=this.root+"/chat/",e=this.root+"/mobile/";document.querySelectorAll('iframe[src^="'+t+'"],iframe[src^="'+e+'"]').forEach((function(t){t.src=a(t.getAttribute("src"))})),document.querySelectorAll('a[href^="'+t+'"],a[href^="'+e+'"]').forEach((function(t){t.setAttribute("href",a(t.getAttribute("href")))}));var r=document.querySelectorAll("[onclick^=\"window.open('"+t+'"],[onclick^="window.open(\''+e+'"]'),n=new RegExp(/(window\.open\(['|"])([^'"]+)(.+)/);r.forEach((function(t){t.setAttribute("onclick",t.getAttribute("onclick").replace(n,(function(t,e,r,n){return""+e+a(r)+n})))}))},t.prototype.startPresence=function(){var t=this;this.options.poll&&(this.intervalId=setInterval((function(){return t.checkPresence()}),3e4)),this.checkPresence()},t.prototype.chatUrl=function(e){var r=l(document.getElementById("libraryh3lp")),n=this.root+"/chat/"+r,o="?";return t.chatParams.forEach((function(t){var r=e[t];r&&(n+=""+o+encodeURIComponent(t)+"="+encodeURIComponent(r),o="&")})),n},t.chatParams=["client_id","css","identity","lang","profile","referer","sounds","theme","title"],t.defaultRoot="https://libraryh3lp.com",t}(),v=function(t){function e(e,r){return void 0===r&&(r={}),t.call(this,e,r)||this}return o(e,t),e.prototype.checkPresence=function(){var t=this,e=document.getElementById("libraryh3lp");if(e){var r=h((function(){f()?e.classList.add("libraryh3lp_online"):(e.classList.remove("libraryh3lp_online"),t.intervalId||t.checkPresence())})),n=l(e).split("@"),o=n[0],i=n[1],c=this.root+"/presence/jid/"+o+"/"+i+"/js?cb="+r;jabber_client_id&&!this.intervalId&&(c=c+"&client_id="+jabber_client_id);var s=document.createElement("script");s.src=c,document.body.appendChild(s)}},e}(d),y=function(t){function e(e,r){return void 0===r&&(r={}),t.call(this,e,r)||this}return o(e,t),e.prototype.checkPresence=function(){var t={},e=[],r=document.querySelectorAll("[data-lh3-jid], [jid], .libraryh3lp");r.forEach((function(r){var n=l(r);t[n]||(e.push(n),t[n]=!0)})),this.checkPresenceMulti(r,e)},e.prototype.checkPresenceMulti=function(t,e){var r=this;if(e.length){var n=e.shift();if(n){var o=h((function(){f()?r.goOnline(t,n):(r.goOffline(t,n),r.checkPresenceMulti(t,e))})),i=n.split("@"),c=i[0],s=i[1],u=this.root+"/presence/jid/"+c+"/"+s+"/js?cb="+o,a=document.createElement("script");a.src=u,document.body.appendChild(a)}else this.checkPresenceMulti(t,e)}else this.goOnline(t,null)},e.prototype.goOnline=function(t,e){var r=this;t.forEach((function(t){l(t)==e?(t.style.display="",r.startProactiveTimer(t)):t.style.display="none"}))},e.prototype.goOffline=function(t,e){t.forEach((function(t){l(t)==e&&(t.style.display="none")}))},e.prototype.startProactiveTimer=function(t){var e=this;t.querySelectorAll("[data-lh3-proactive-timer]").forEach((function(t){return c(e,void 0,void 0,(function(){var e,n;return s(this,(function(o){switch(o.label){case 0:return(e=parseInt(t.getAttribute("data-lh3-proactive-timer")))>0?[4,Promise.all([r.e(0),r.e(3),r.e(2)]).then(r.bind(null,6))]:[3,2];case 1:n=o.sent().launchProactive,setTimeout((function(){return n(t)}),1e3*e),o.label=2;case 2:return[2]}}))}))}))},e}(d),m=function(t){function e(e,r){var n=t.call(this,e)||this;return n.fetchService(r),n}return o(e,t),e.prototype.fetchService=function(t){var e=this,r=new XMLHttpRequest;r.open("GET",this.root+"/presence/service/"+t),r.responseType="json",r.onreadystatechange=function(){if(4===r.readyState&&200<=r.status&&r.status<300){var t=r.response;"string"==typeof t&&(t=JSON.parse(t)),e.showService(t)}},r.setRequestHeader("Content-Type","application/json"),r.send()},e.prototype.showService=function(t){return c(this,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return this.options=i({},this.options,t.options),(e=document.querySelectorAll(".needs-js")).length&&t.body.match(/<script/)?[4,r.e(0).then(r.t.bind(null,5,7))]:[3,2];case 1:n.sent(),n.label=2;case 2:return e.forEach((function(e){var r=document.createElement("div");r.innerHTML=t.body;var n=[];r.childNodes.forEach((function(t){return n.push(t)})),n.forEach((function(t){e.parentNode.insertBefore(t,e),t.querySelectorAll&&t.querySelectorAll("script").forEach((function(t){var e=document.createElement("script");e.text=t.text,t.parentNode.replaceChild(e,t)}))})),e.parentNode.removeChild(e)})),this.start(),[2]}}))}))},e}(y);window.libraryh3lp||(window.libraryh3lp={}),function t(e){var r=document.querySelectorAll(".needs-js");if(e||r.length||"loading"!=document.readyState){r.forEach((function(t){return t.style.display="none"}));var n,o,i="https://libraryh3lp.com",c=new RegExp("/js/libraryh3lp\\.js(\\?.*)?$");if(document.querySelectorAll("script").forEach((function(t){var e=t.src;e&&e.match(c)&&(i=e.replace(c,""),(o=(o=e.match(/\?(.*)/))?o[1].split(/,|&/):[]).forEach((function(t){var e=t.split("="),r=e[0],n=e[1];r&&n&&(window.libraryh3lp[r]=n)})),n=o.find((function(t){return!!t.match(/^[0-9]+$/)})),o=o.filter((function(t){return!!t.match(/^[a-z]+$/)})))})),n)return p=new m(i,n),void(window.libraryh3lp.openChat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return p.openChat.apply(p,t)});var s={};(0==o.length?["presence","popup"]:o).forEach((function(t){return s[t]=!0}));var u=document.querySelectorAll("[data-lh3-jid], [jid], .libraryh3lp");(p=u.length?new y(i,s):new v(i,s)).start(),window.libraryh3lp.openChat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return p.openChat.apply(p,t)}}else document.addEventListener("DOMContentLoaded",t)}()},function(t,e,r){"use strict";t.exports=r(2).polyfill()},function(t,e,r){(function(e,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */var n;n=function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,c=void 0,s=function(t,e){d[o]=t,d[o+1]=e,2===(o+=2)&&(c?c(v):g())},u="undefined"!=typeof window?window:void 0,a=u||{},l=a.MutationObserver||a.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var t=setTimeout;return function(){return t(v,1)}}var d=new Array(1e3);function v(){for(var t=0;t<o;t+=2)(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0;o=0}var y,m,b,w,g=void 0;function _(t,e){var r=this,n=new this.constructor(A);void 0===n[E]&&I(n);var o=r._state;if(o){var i=arguments[o-1];s((function(){return R(o,n,i,r._result)}))}else M(r,n,t,e);return n}function j(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return O(e,t),e}f?g=function(){return e.nextTick(v)}:l?(m=0,b=new l(v),w=document.createTextNode(""),b.observe(w,{characterData:!0}),g=function(){w.data=m=++m%2}):h?((y=new MessageChannel).port1.onmessage=v,g=function(){return y.port2.postMessage(0)}):g=void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(v)}:p()}catch(t){return p()}}():p();var E=Math.random().toString(36).substring(2);function A(){}var P={error:null};function S(t){try{return t.then}catch(t){return P.error=t,P}}function T(e,r,n){r.constructor===e.constructor&&n===_&&r.constructor.resolve===j?function(t,e){1===e._state?k(t,e._result):2===e._state?C(t,e._result):M(e,void 0,(function(e){return O(t,e)}),(function(e){return C(t,e)}))}(e,r):n===P?(C(e,P.error),P.error=null):void 0===n?k(e,r):t(n)?function(t,e,r){s((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?O(t,r):k(t,r))}),(function(e){n||(n=!0,C(t,e))}),t._label);!n&&o&&(n=!0,C(t,o))}),t)}(e,r,n):k(e,r)}function O(t,e){var r,n;t===e?C(t,new TypeError("You cannot resolve a promise with itself")):(n=typeof(r=e),null===r||"object"!==n&&"function"!==n?k(t,e):T(t,e,S(e)))}function x(t){t._onerror&&t._onerror(t._result),L(t)}function k(t,e){void 0===t._state&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(L,t))}function C(t,e){void 0===t._state&&(t._state=2,t._result=e,s(x,t))}function M(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&s(L,t)}function L(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,c=0;c<e.length;c+=3)n=e[c],o=e[c+r],n?R(r,n,o,i):o(i);t._subscribers.length=0}}function R(e,r,n,o){var i=t(n),c=void 0,s=void 0,u=void 0,a=void 0;if(i){if((c=function(t,e){try{return t(e)}catch(t){return P.error=t,P}}(n,o))===P?(a=!0,s=c.error,c.error=null):u=!0,r===c)return void C(r,new TypeError("A promises callback cannot return that same promise."))}else c=o,u=!0;void 0!==r._state||(i&&u?O(r,c):a?C(r,s):1===e?k(r,c):2===e&&C(r,c))}var q=0;function I(t){t[E]=q++,t._state=void 0,t._result=void 0,t._subscribers=[]}var U=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(A),this.promise[E]||I(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&k(this.promise,this._result))):C(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;void 0===this._state&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===j){var o=S(t);if(o===_&&void 0!==t._state)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===N){var i=new r(A);T(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;void 0===n._state&&(this._remaining--,2===t?C(n,r):this._result[e]=r),0===this._remaining&&k(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;M(t,void 0,(function(t){return r._settledAt(1,e,t)}),(function(t){return r._settledAt(2,e,t)}))},t}(),N=function(){function e(t){this[E]=q++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){O(t,e)}),(function(e){C(t,e)}))}catch(e){C(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):this.then(e,e)},e}();return N.prototype.then=_,N.all=function(t){return new U(this,t).promise},N.race=function(t){var e=this;return n(t)?new e((function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))},N.resolve=j,N.reject=function(t){var e=new this(A);return C(e,t),e},N._setScheduler=function(t){c=t},N._setAsap=function(t){s=t},N._asap=s,N.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=N},N.Promise=N,N},t.exports=n()}).call(this,r(3),r(4))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(t){n=c}}();var u,a=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?a=u.concat(a):f=-1,a.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var e=a.length;e;){for(u=a,a=[];++f<e;)u&&u[f].run();f=-1,e=a.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new d(t,e)),1!==a.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}]);