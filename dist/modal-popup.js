window.OpenStadComponents=function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=92)}([function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(3),s=n.n(r),o=n(2),i=n.n(o);n(71);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(i){var u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n,r,o=c(i);return e=u?(t=c(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),n=this,!(r=e)||"object"!==a(r)&&"function"!=typeof r?h(n):r}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(c,i.a.Component);var t,e,n,u=p(c);function c(n){var t,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c);var o=h(t=u.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(t){var e=n.attributes[t];o[e.name]=e.value}),"string"==typeof o.config)try{o.config=JSON.parse(o.config)}catch(t){}var i=function e(n){if("object"!=a(n))return n;Object.keys(n).forEach(function(t){void 0!==n[t]&&null!=n[t]||delete n[t],"object"==a(n[t])&&(n[t]=e(n[t]))});return n}(i=n.config||{});return o.config=s.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},e,r,i),o.divId=o.divId||o.config&&o.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),o.config.divId=null,window[o.divId]=o,t}return t=c,(e=[{key:"componentDidMount",value:function(){}}])&&f(t.prototype,e),n&&f(t,n),c}()},,function(t,e){t.exports=window.React},function(t,e,n){(function(t){function e(t,e,n){var r=n[0],o=n.length;!t&&"object"===a(r)||(r={});for(var i=0;i<o;++i){var u,c=n[i];if("object"===a(c))for(var s in c){"__proto__"!==s&&(u=t?f.clone(c[s]):c[s],r[s]=e?function t(e,n){if("object"!==a(e))return n;for(var r in n)"object"===a(e[r])&&"object"===a(n[r])?e[r]=t(e[r],n[r]):e[r]=n[r];return e}(r[s],u):u)}}return r}function a(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}var n,f;n=t&&"object"==typeof t.exports&&t.exports,(f=function(t){return e(!0===t,!1,arguments)}).recursive=function(t){return e(!0===t,!0,arguments)},f.clone=function(t){var e,n,r=t,o=a(t);if("array"===o)for(r=[],n=t.length,e=0;e<n;++e)r[e]=f.clone(t[e]);else if("object"===o)for(e in r={},t)r[e]=f.clone(t[e]);return r},n?t.exports=f:window.merge=f}).call(this,n(70)(t))},function(n,t,e){(function(t){function e(t){return t&&t.Math==Math&&t}n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")()}).call(this,e(21))},,function(t,e){t.exports=window.ReactDOM},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";(function(i){var e,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,c="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),u="FormData"in self,s="ArrayBuffer"in self;function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function p(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(n){return new i(function(t,e){n.onload=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function d(t){var e=new FileReader,n=h(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:c&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:u&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&c&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||n(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,n,r=p(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=h(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},u&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}s&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),l.prototype.append=function(t,e){t=a(t),e=f(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[a(t)]},l.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},l.prototype.set=function(t,e){this.map[a(t)]=f(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var n=[];return this.forEach(function(t,e){n.push(e)}),t(n)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var n=[];return this.forEach(function(t,e){n.push([e,t])}),t(n)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var n,r,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),-1<b.indexOf(r)?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var o=new FormData;return t.trim().split("&").forEach(function(t){var e,n,r;t&&(n=(e=t.split("=")).shift().replace(/\+/g," "),r=e.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function g(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},v.call(m.prototype),v.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];g.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var x=self.DOMException;try{new x}catch(t){(x=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function O(o,u){return new i(function(r,t){var e=new m(o,u);if(e.signal&&e.signal.aborted)return t(new x("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e,n=t.split(":"),r=n.shift().trim();r&&(e=n.join(":").trim(),o.append(r,e))}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new g(n,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new x("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&c&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",n)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}O.polyfill=!0,self.fetch||(self.fetch=O,self.Headers=l,self.Request=m,self.Response=g)}).call(this,n(15))},function(t,e,n){var r=n(8),o=n(13),i=n(23);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(25),i=n(14),u=n(24),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){t.exports=n(67).Promise},function(t,e,n){var r=n(41),o=n(43);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(4),o=n(12);t.exports=function(e,n){try{o(r,e,n)}catch(t){r[e]=n}return n}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},,function(t,e){var n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(8),o=n(49),i=n(23),u=n(16),c=n(24),s=n(7),a=n(25),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=c(e,!0),a)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(10);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(8),o=n(9),i=n(26);t.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(4),o=n(10),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){var r=n(28),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(4),o=n(17),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},function(t,e,n){var r=n(30),o=n(31),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(53),o=n(28);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){function r(t){return"function"==typeof t?t:void 0}var o=n(56),i=n(4);t.exports=function(t,e){return arguments.length<2?r(o[t])||r(i[t]):o[t]&&o[t][e]||i[t]&&i[t][e]}},function(t,e,n){var u=n(7),c=n(16),s=n(34).indexOf,a=n(18);t.exports=function(t,e){var n,r=c(t),o=0,i=[];for(n in r)!u(a,n)&&u(r,n)&&i.push(n);for(;e.length>o;)u(r,n=e[o++])&&(~s(i,n)||i.push(n));return i}},function(t,e,n){function r(c){return function(t,e,n){var r,o=s(t),i=a(o.length),u=f(n,i);if(c&&e!=e){for(;u<i;)if((r=o[u++])!=r)return!0}else for(;u<i;u++)if((c||u in o)&&o[u]===e)return c||u||0;return!c&&-1}}var s=n(16),a=n(44),f=n(58);t.exports={includes:r(!0),indexOf:r(!1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e,n){var r=n(9);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},function(t,e,n){var f=n(4),l=n(22).f,p=n(12),h=n(50),d=n(17),y=n(54),v=n(60);t.exports=function(t,e){var n,r,o,i,u=t.target,c=t.global,s=t.stat,a=c?f:s?f[u]||d(u,{}):(f[u]||{}).prototype;if(a)for(n in e){if(o=e[n],r=t.noTargetGet?(i=l(a,n))&&i.value:a[n],!v(c?n:u+(s?".":"#")+n,t.forced)&&void 0!==r){if(typeof o==typeof r)continue;y(o,r)}(t.sham||r&&r.sham)&&p(o,"sham",!0),h(a,n,o,t)}}},function(t,e,n){var r=n(46),o=n(63),i=n(13),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,e,n){function u(t){throw t}var c=n(8),s=n(9),a=n(7),f=Object.defineProperty,l={};t.exports=function(t,e){if(a(l,t))return l[t];var n=[][t],r=!!a(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=a(e,0)?e[0]:u,i=a(e,1)?e[1]:void 0;return l[t]=!!n&&!s(function(){if(r&&!c)return!0;var t={length:-1};r?f(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,o,i)})}},function(t,e,n){var r=n(4),o=n(45),i=Function.call;t.exports=function(t,e,n){return o(i,r[t].prototype[e],n)}},function(t,e,n){var r=n(9),o=n(42),i="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(35),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var i=n(61);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},function(t,e,n){var r=n(4),o=n(30),i=n(7),u=n(31),c=n(36),s=n(62),a=o("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(f,t)?a[t]=f[t]:a[t]=l("Symbol."+t)),a[t]}},,,function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var c=n(4),s=n(12),a=n(7),f=n(17),r=n(27),o=n(51),i=o.get,l=o.enforce,p=String(String).split("String");(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||s(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==c?(o?!u&&t[e]&&(i=!0):delete t[e],i?t[e]=n:s(t,e,n)):i?t[e]=n:f(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||r(this)})},function(t,e,n){var r,o,i,u,c,s,a,f,l=n(52),p=n(4),h=n(10),d=n(12),y=n(7),v=n(29),b=n(18),m=p.WeakMap;a=l?(r=new m,o=r.get,i=r.has,u=r.set,c=function(t,e){return u.call(r,t,e),e},s=function(t){return o.call(r,t)||{}},function(t){return i.call(r,t)}):(b[f=v("state")]=!0,c=function(t,e){return d(t,f,e),e},s=function(t){return y(t,f)?t[f]:{}},function(t){return y(t,f)}),t.exports={set:c,get:s,has:a,enforce:function(t){return a(t)?s(t):c(t,{})},getterFor:function(n){return function(t){var e;if(!h(t)||(e=s(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(t,e,n){var r=n(4),o=n(27),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports=!1},function(t,e,n){var c=n(7),s=n(55),a=n(22),f=n(13);t.exports=function(t,e){for(var n=s(e),r=f.f,o=a.f,i=0;i<n.length;i++){var u=n[i];c(t,u)||r(t,u,o(e,u))}}},function(t,e,n){var r=n(32),o=n(57),i=n(59),u=n(14);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(4);t.exports=r},function(t,e,n){var r=n(33),o=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(35),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){function r(t,e){var n=c[u(t)];return n==a||n!=s&&("function"==typeof e?o(e):!!e)}var o=n(9),i=/#|\.prototype\./,u=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=r.data={},s=r.NATIVE="N",a=r.POLYFILL="P";t.exports=r},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(36);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){function r(){}function o(t){return"<script>"+t+"</"+d+">"}var i,u=n(14),c=n(64),s=n(19),a=n(18),f=n(66),l=n(26),p=n(29),h="prototype",d="script",y=p("IE_PROTO"),v=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=i?function(t){t.write(o("")),t.close();var e=t.parentWindow.Object;return t=null,e}(i):((e=l("iframe")).style.display="none",f.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(o("document.F=Object")),t.close(),t.F);for(var n=s.length;n--;)delete v[h][s[n]];return v()};a[y]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(r[h]=u(t),n=new r,r[h]=null,n[y]=t):n=v(),void 0===e?n:c(n,e)}},function(t,e,n){var r=n(8),u=n(13),c=n(14),s=n(65);t.exports=r?Object.defineProperties:function(t,e){c(t);for(var n,r=s(e),o=r.length,i=0;i<o;)u.f(t,n=r[i++],e[n]);return t}},function(t,e,n){var r=n(33),o=n(19);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(32);t.exports=r("document","documentElement")},function(t,e,lt){(function(st,at){var ft;t.exports=function(){"use strict";function n(t){return typeof t==="function"||typeof t==="object"&&t!==null}function a(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var r=t,o=0,i=undefined,u=undefined,c=function t(e,n){g[o]=e;g[o+1]=n;o+=2;if(o===2){if(u){u(_)}else{O()}}};function e(t){u=t}function s(t){c=t}var f=typeof window!=="undefined"?window:undefined,l=f||{},p=l.MutationObserver||l.WebKitMutationObserver,h=typeof self==="undefined"&&typeof st!=="undefined"&&{}.toString.call(st)==="[object process]",d=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return st.nextTick(_)}}function v(){return function(){i(_)}}function b(){var t=0;var e=new p(_);var n=document.createTextNode("");e.observe(n,{characterData:true});return function(){n.data=t=++t%2}}function m(){var t=new MessageChannel;t.port1.onmessage=_;return function(){return t.port2.postMessage(0)}}function w(){var t=setTimeout;return function(){return t(_,1)}}var g=new Array(1e3);function _(){for(var t=0;t<o;t+=2){var e=g[t];var n=g[t+1];e(n);g[t]=undefined;g[t+1]=undefined}o=0}function x(){try{var t=ft;var e=lt(69);i=e.runOnLoop||e.runOnContext;return v()}catch(t){return w()}}var O=undefined;if(h){O=y()}else if(p){O=b()}else if(d){O=m()}else if(f===undefined&&"function"==="function"){O=x()}else{O=w()}function j(t,e){var n=arguments;var r=this;var o=new this.constructor(A);if(o[E]===undefined){Q(o)}var i=r._state;if(i){(function(){var t=n[i-1];c(function(){return V(i,o,t,r._result)})})()}else{G(r,o,t,e)}return o}function S(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var n=new e(A);F(n,t);return n}var E=Math.random().toString(36).substring(16);function A(){}var T=void 0,P=1,R=2,k=new K;function I(){return new TypeError("You cannot resolve a promise with itself")}function M(){return new TypeError("A promises callback cannot return that same promise.")}function C(t){try{return t.then}catch(t){k.error=t;return k}}function B(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function D(t,r,o){c(function(e){var n=false;var t=B(o,r,function(t){if(n){return}n=true;if(r!==t){F(e,t)}else{q(e,t)}},function(t){if(n){return}n=true;H(e,t)},"Settle: "+(e._label||" unknown promise"));if(!n&&t){n=true;H(e,t)}},t)}function L(e,t){if(t._state===P){q(e,t._result)}else if(t._state===R){H(e,t._result)}else{G(t,undefined,function(t){return F(e,t)},function(t){return H(e,t)})}}function U(t,e,n){if(e.constructor===t.constructor&&n===j&&e.constructor.resolve===S){L(t,e)}else{if(n===k){H(t,k.error)}else if(n===undefined){q(t,e)}else if(a(n)){D(t,e,n)}else{q(t,e)}}}function F(t,e){if(t===e){H(t,I())}else if(n(e)){U(t,e,C(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}W(t)}function q(t,e){if(t._state!==T){return}t._result=e;t._state=P;if(t._subscribers.length!==0){c(W,t)}}function H(t,e){if(t._state!==T){return}t._state=R;t._result=e;c(N,t)}function G(t,e,n,r){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+P]=n;o[i+R]=r;if(i===0&&t._state){c(W,t)}}function W(t){var e=t._subscribers;var n=t._state;if(e.length===0){return}var r=undefined,o=undefined,i=t._result;for(var u=0;u<e.length;u+=3){r=e[u];o=e[u+n];if(r){V(n,r,o,i)}else{o(i)}}t._subscribers.length=0}function K(){this.error=null}var Y=new K;function z(t,e){try{return t(e)}catch(t){Y.error=t;return Y}}function V(t,e,n,r){var o=a(n),i=undefined,u=undefined,c=undefined,s=undefined;if(o){i=z(n,r);if(i===Y){s=true;u=i.error;i=null}else{c=true}if(e===i){H(e,M());return}}else{i=r;c=true}if(e._state!==T){}else if(o&&c){F(e,i)}else if(s){H(e,u)}else if(t===P){q(e,i)}else if(t===R){H(e,i)}}function X(n,t){try{t(function t(e){F(n,e)},function t(e){H(n,e)})}catch(t){H(n,t)}}var J=0;function $(){return J++}function Q(t){t[E]=J++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Z(t,e){this._instanceConstructor=t;this.promise=new t(A);if(!this.promise[E]){Q(this.promise)}if(r(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{H(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Z(this,t).promise}function nt(o){var i=this;if(r(o))return new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function rt(t){var e=new this(A);return H(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ut(t){this[E]=$();this._result=this._state=undefined;this._subscribers=[];if(A!==t){typeof t!=="function"&&ot();this instanceof ut?X(this,t):it()}}function ct(){var t=undefined;if(typeof at!=="undefined"){t=at}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if(n==="[object Promise]"&&!e.cast){return}}t.Promise=ut}return Z.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===T&&n<t;n++)this._eachEntry(e[n],n)},Z.prototype._eachEntry=function(e,t){var n,r,o=this._instanceConstructor,i=o.resolve;i===S?(n=C(e))===j&&e._state!==T?this._settledAt(e._state,t,e._result):"function"!=typeof n?(this._remaining--,this._result[t]=e):o===ut?(U(r=new o(A),e,n),this._willSettleAt(r,t)):this._willSettleAt(new o(function(t){return t(e)}),t):this._willSettleAt(i(e),t)},Z.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===T&&(this._remaining--,t===R?H(r,n):this._result[e]=n),0===this._remaining&&q(r,this._result)},Z.prototype._willSettleAt=function(t,e){var n=this;G(t,void 0,function(t){return n._settledAt(P,e,t)},function(t){return n._settledAt(R,e,t)})},ut.all=function(t){return new Z(this,t).promise},ut.race=function(o){var i=this;return r(o)?new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},ut.resolve=S,ut.reject=function(t){var e=new this(A);return H(e,t),e},ut._setScheduler=function(t){u=t},ut._setAsap=function(t){c=t},ut._asap=c,ut.prototype={constructor:ut,then:j,catch:function(t){return this.then(null,t)}},ct(),ut.polyfill=ct,ut.Promise=ut}()}).call(this,lt(68),lt(21))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,a=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?a=s.concat(a):l=-1,a.length&&h())}function h(){if(!f){var t=c(p);f=!0;for(var e=a.length;e;){for(s=a,a=[];++l<e;)s&&s[l].run();l=-1,e=a.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new d(t,e)),1!==a.length||f||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){n(72);var r=n(40);t.exports=r("Array","includes")},function(t,e,n){"use strict";var r=n(37),o=n(34).includes,i=n(38);r({target:"Array",proto:!0,forced:!n(39)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t,e){return o(this,t,1<arguments.length?e:void 0)}}),i("includes")},,,,,,,,,,function(t,e,n){function r(h){var d=1==h,y=2==h,v=3==h,b=4==h,m=6==h,w=5==h||m;return function(t,e,n,r){for(var o,i,u=x(t),c=_(u),s=g(e,n,3),a=O(c.length),f=0,l=r||j,p=d?l(t,a):y?l(t,0):void 0;f<a;f++)if((w||f in c)&&(i=s(o=c[f],f,u),h))if(d)p[f]=i;else if(i)switch(h){case 3:return!0;case 5:return o;case 6:return f;case 2:S.call(p,o)}else if(b)return!1;return m?-1:v||b?b:p}}var g=n(45),_=n(41),x=n(87),O=n(44),j=n(88),S=[].push;t.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},function(t,e,n){n(91);var r=n(40);t.exports=r("Array","findIndex")},,,,function(t,e,n){var r=n(43);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(10),o=n(89),i=n(46)("species");t.exports=function(t,e){var n;return o(t)&&("function"==typeof(n=t.constructor)&&(n===Array||o(n.prototype))||r(n)&&null===(n=n[i]))&&(n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(42);t.exports=Array.isArray||function(t){return"Array"==r(t)}},,function(t,e,n){"use strict";var r=n(37),o=n(82).findIndex,i=n(38),u=n(39),c="findIndex",s=!0,a=u(c);c in[]&&Array(1)[c](function(){s=!1}),r({target:"Array",proto:!0,forced:s||!a},{findIndex:function(t,e){return o(this,t,1<arguments.length?e:void 0)}}),i(c)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return y}),n.d(e,"ModalPopup",function(){return y});n(11),n(83);var r=n(2),o=n.n(r),i=n(6),u=n.n(i),c=(n(102),n(0));function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function f(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){var e,n,r;e=o,r=i[n=t],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(i){var u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n,r,o=d(i);return e=u?(t=d(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),n=this,!(r=e)||"object"!==s(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,c["a"]);var t,e,n,r=h(o);function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this,t,{})).state={width:300,height:200,title:"Titel",text:"Tekst",buttonAction:function(){return alert("Knop actie")},buttonText:"Knop tekst",cancelText:"Annuleren"},e}return t=o,(e=[{key:"componentDidMount",value:function(){var e=this;e.showModalPopupListener=function(t){e.showModalPopup(t.detail)},document.addEventListener("osc-show-modal-popup",e.showModalPopupListener),document.body.appendChild(this.instance)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("osc-show-modal-popup",this.showModalPopupListener)}},{key:"showModalPopup",value:function(t){var e=this;e.setState(f({},t),function(){e.instance.style.display="block"})}},{key:"hideModalPopup",value:function(){this.instance.style.display="none"}},{key:"render",value:function(){var e=this,t=(t=e.state.content||null)||React.createElement("div",{className:"osc-modal-popup-content"},React.createElement("div",{className:"osc-modal-popup-header"},e.state.title),React.createElement("div",{className:"osc-modal-popup-text"},e.state.text),React.createElement("div",{className:"osc-modal-popup-buttons"},React.createElement("button",{onClick:e.state.buttonAction,className:"osc-button-blue"},e.state.buttonText),React.createElement("button",{onClick:function(){return e.hideModalPopup()},className:"osc-button-white"},"Annuleren")));return React.createElement("div",{id:"osc-modal-popup-container",ref:function(t){return e.instance=t}},React.createElement("div",{id:"osc-modal-popup",style:{top:"calc(50% - ( ".concat(e.state.height2," / 2 )px)"),left:"calc(50% - ( ".concat(e.state.width," / 2 )px)"),width:e.state.width,height:e.state.height}},t,React.createElement("div",{className:"osc-close-button",onClick:function(){return e.hideModalPopup()}})))}}])&&l(t.prototype,e),n&&l(t,n),o}();y.renderElement=function(t,e){var n=t.attributes;u.a.render(o.a.createElement(y,{attributes:n,config:e}),t)}},,,,,,,,,,function(t,e,n){}]);