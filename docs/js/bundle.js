!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/js/",t(0)}([function(e,t,n){e.exports=n(20)},function(e,t){"use strict";function n(e){return"[object Array]"===g.call(e)}function r(e){return"[object ArrayBuffer]"===g.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function a(e){return"number"==typeof e}function s(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===g.call(e)}function l(e){return"[object File]"===g.call(e)}function d(e){return"[object Blob]"===g.call(e)}function p(e){return"[object Function]"===g.call(e)}function h(e){return c(e)&&p(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function y(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)e.hasOwnProperty(i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)y(arguments[n],e);return t}var g=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:i,isString:u,isNumber:a,isObject:c,isUndefined:s,isDate:f,isFile:l,isBlob:d,isFunction:p,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:v,forEach:y,merge:w,trim:x}},function(e,t,n){"use strict";var r=n(1),o=n(11),i=n(17),u=n(3),a=n(15),s="undefined"!=typeof window&&window.btoa||n(10),c=n(18);e.exports=function(e,t,f){var l=f.data,d=f.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(f.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),f.auth){var x=f.auth.username||"",v=f.auth.password||"";d.Authorization="Basic "+s(x+":"+v)}if(p.open(f.method.toUpperCase(),o(f.url,f.params,f.paramsSerializer),!0),p.timeout=f.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&0!==p.status){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r=f.responseType&&"text"!==f.responseType?p.response:p.responseText,o={data:u(r,n,f.transformResponse),status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:f,request:p};c(e,t,o),p=null}},p.onerror=function(){t(new Error("Network Error")),p=null},p.ontimeout=function(){var e=new Error("timeout of "+f.timeout+"ms exceeded");e.timeout=f.timeout,e.code="ECONNABORTED",t(e),p=null},r.isStandardBrowserEnv()){var y=n(13),w=f.withCredentials||a(f.url)?y.read(f.xsrfCookieName):void 0;w&&(d[f.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){"undefined"==typeof l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),f.withCredentials&&(p.withCredentials=!0),f.responseType)try{p.responseType=f.responseType}catch(e){if("json"!==p.responseType)throw e}f.progress&&("post"===f.method||"put"===f.method?p.upload.addEventListener("progress",f.progress):"get"===f.method&&p.addEventListener("progress",f.progress)),void 0===l&&(l=null),p.send(l)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";function r(e){this.defaults=i.merge({},e),this.interceptors={request:new a,response:new a}}var o=n(8),i=n(1),u=n(7),a=n(6),s=n(14),c=n(12),f=n(9),l=n(3);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.withCredentials=e.withCredentials||this.defaults.withCredentials,e.data=l(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n};var d=new r(o),p=e.exports=f(r.prototype.request,d);p.request=f(r.prototype.request,d),p.Axios=r,p.defaults=d.defaults,p.interceptors=d.interceptors,p.create=function(e){return new r(e)},p.all=function(e){return Promise.all(e)},p.spread=n(19),i.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))},p[e]=f(r.prototype[e],d)}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))},p[e]=f(r.prototype[e],d)})},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(1);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){(function(t){"use strict";e.exports=function(e){return new Promise(function(r,o){try{var i;"function"==typeof e.adapter?i=e.adapter:"undefined"!=typeof XMLHttpRequest?i=n(2):"undefined"!=typeof t&&(i=n(2)),"function"==typeof i&&i(r,o,e)}catch(e){o(e)}})}}).call(t,n(24))},function(e,t,n){"use strict";function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(1),i=n(16),u=/^\)\]\}',?\n/,a={"Content-Type":"application/x-www-form-urlencoded"};e.exports={transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(u,"");try{e=JSON.parse(e)}catch(e){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:o.merge(a),post:o.merge(a),put:o.merge(a)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,i=String(e),u="",a=0,s=o;i.charAt(0|a)||(s="=",a%1);u+=s.charAt(63&t>>8-a%1*8)){if(r=i.charCodeAt(a+=.75),r>255)throw new n;t=t<<8|r}return u}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var u=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),u.push(r(t)+"="+r(e))}))}),i=u.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,u){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),u===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t){"use strict";e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(n):e(n)}},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(21);var o=n(4),i=r(o),u=n(23),a=r(u),s=n(22),c=r(s),f=document.getElementById("formSubmit"),l=document.getElementById("contactForm"),d=document.getElementById("formStatus"),p=document.querySelectorAll(".formField"),h=document.getElementById("tag"),m=document.getElementById("nav"),x=document.querySelector(".full nav ul"),v=function(){var e=window.innerHeight;window.innerWidth>=768&&(window.pageYOffset<.4*e&&"top"!==m.className?(m.classList.add("top"),h.classList.add("show")):window.pageYOffset>.4*e&&"top"===m.className&&(m.classList.remove("top"),h.classList.remove("show")))};v(),document.getElementById("mobileLink").addEventListener("click",function(){x.classList.toggle("show")},!1),window.addEventListener("scroll",(0,a.default)(v,100),!1),p.forEach(function(e){return e.addEventListener("blur",s.validateInput,!1)}),f.addEventListener("click",function(e){"undefined"!=typeof Promise&&(e.preventDefault(),(0,c.default)(l.name,l.email,l.message)?(f.innerHTML="Sending...",d.innerHTML=null,f.disabled=!0,i.default.post("/jsContact",{company:l.company.value,name:l.name.value,email:l.email.value,message:l.message.value}).then(function(){f.innerHTML="Message Sent",l.reset()}).catch(function(){f.innerHTML="Fail",d.innerHTML="It appears that something has gone terribly wrong. Please email me at error@joshuahenson.com"})):d.innerHTML="Please correct the errors shown above.")},!1)},function(e,t){"use strict";!function(t,n){e.exports=n()}(void 0,function(){if(void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var e=function(e){return"HTML"===e.nodeName?-window.pageYOffset:e.getBoundingClientRect().top+window.pageYOffset},t=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},n=function(e,n,r,o){return r>o?n:e+(n-e)*t(r/o)},r=function(t,r,o,i){r=r||500,i=i||window;var u=window.pageYOffset;if("number"==typeof t)var a=parseInt(t);else var a=e(t);var s=Date.now(),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},f=function e(){var f=Date.now()-s;i!==window?i.scrollTop=n(u,a,f,r):window.scroll(0,n(u,a,f,r)),f>r?"function"==typeof o&&o(t):c(e)};f()},o=document.querySelector(".full nav ul"),i=function(){"show"===o.className&&o.classList.remove("show")},u=function(e){e.preventDefault(),i(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var t=document.getElementById(this.hash.substring(1));t&&r(t,1e3,function(e){location.replace("#"+e.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),n=t.length;e=t[--n];)e.addEventListener("click",u,!1)}),r}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.validateInput=function(e){var t=/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,n=e.target||e,r=n.name,o=document.querySelector("[for="+r+"]");return 0===n.value.length?(o.innerHTML=r+" Required",n.parentElement.classList.add("error"),!1):"Email"!==r||t.test(n.value)?(n.parentElement.classList.remove("error"),o.innerHTML=r,!0):(o.innerHTML='Email format "user@example.com" required',n.parentElement.classList.add("error"),!1)};t.default=function(e,t,r){var o=!0;return n(e)||(o=!1),n(t)||(o=!1),n(r)||(o=!1),o}},function(e,t){(function(t){function n(e,t,n){function r(t){var n=m,r=x;return m=x=void 0,L=t,y=e.apply(r,n)}function i(e){return L=e,w=setTimeout(f,t),S?r(e):y}function u(e){var n=e-g,r=e-L,o=t-n;return j?E(o,v-r):o}function c(e){var n=e-g,r=e-L;return void 0===g||n>=t||n<0||j&&r>=v}function f(){var e=T();return c(e)?l(e):void(w=setTimeout(f,u(e)))}function l(e){return w=void 0,A&&m?r(e):(m=x=void 0,y)}function d(){void 0!==w&&clearTimeout(w),L=0,m=g=x=w=void 0}function p(){return void 0===w?y:l(T())}function h(){var e=T(),n=c(e);if(m=arguments,x=this,g=e,n){if(void 0===w)return i(g);if(j)return w=setTimeout(f,t),r(g)}return void 0===w&&(w=setTimeout(f,t)),y}var m,x,v,y,w,g,L=0,S=!1,j=!1,A=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,o(n)&&(S=!!n.leading,j="maxWait"in n,v=j?b(a(n.maxWait)||0,t):v,A="trailing"in n?!!n.trailing:A),h.cancel=d,h.flush=p,h}function r(e,t,r){var i=!0,u=!0;if("function"!=typeof e)throw new TypeError(s);return o(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),n(e,t,{leading:i,maxWait:t,trailing:u})}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function u(e){return"symbol"==typeof e||i(e)&&g.call(e)==f}function a(e){if("number"==typeof e)return e;if(u(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=p.test(e);return n||h.test(e)?m(e.slice(2),n?2:8):d.test(e)?c:+e}var s="Expected a function",c=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,x="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,y=x||v||Function("return this")(),w=Object.prototype,g=w.toString,b=Math.max,E=Math.min,T=function(){return y.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){m&&p&&(m=!1,p.length?h=p.concat(h):x=-1,h.length&&a())}function a(){if(!m){var e=o(u);m=!0;for(var t=h.length;t;){for(p=h,h=[];++x<t;)p&&p[x].run();x=-1,t=h.length}p=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var p,h=[],m=!1,x=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}}]);
