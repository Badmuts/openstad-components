window.OpenStadComponents=function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=29)}({0:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(4),c=n.n(r),o=n(2),i=n.n(o);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(i){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n,r,o=u(i);return e=s?(t=u(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),n=this,!(r=e)||"object"!==a(r)&&"function"!=typeof r?p(n):r}}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,i.a.Component);var t,e,n,s=h(u);function u(n){var t,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var o=p(t=s.call(this,n));if(n.attributes&&Object.keys(n.attributes).forEach(function(t){var e=n.attributes[t];o[e.name]=e.value}),"string"==typeof o.config)try{o.config=JSON.parse(o.config)}catch(t){}var i=function e(n){if("object"!=a(n))return n;Object.keys(n).forEach(function(t){void 0!==n[t]&&null!=n[t]||delete n[t],"object"==a(n[t])&&(n[t]=e(n[t]))});return n}(i=n.config||{});return o.config=c.a.recursive({siteId:null,api:{url:null,headers:null,isUserLoggedIn:!1},user:{}},e,r,i),o.divId=o.divId||o.config&&o.config.divId||n.id||"openstad-component-".concat(parseInt(1e8*Math.random())),window[o.divId]=o,t}return t=u,(e=[{key:"componentDidMount",value:function(){}}])&&f(t.prototype,e),n&&f(t,n),u}()},101:function(t,e,n){},11:function(t,e,n){t.exports=n(12).Promise},12:function(t,e,lt){(function(ct,at){var ft;t.exports=function(){"use strict";function n(t){return typeof t==="function"||typeof t==="object"&&t!==null}function a(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var r=t,o=0,i=undefined,s=undefined,u=function t(e,n){_[o]=e;_[o+1]=n;o+=2;if(o===2){if(s){s(g)}else{A()}}};function e(t){s=t}function c(t){u=t}var f=typeof window!=="undefined"?window:undefined,l=f||{},h=l.MutationObserver||l.WebKitMutationObserver,p=typeof self==="undefined"&&typeof ct!=="undefined"&&{}.toString.call(ct)==="[object process]",d=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return ct.nextTick(g)}}function b(){return function(){i(g)}}function v(){var t=0;var e=new h(g);var n=document.createTextNode("");e.observe(n,{characterData:true});return function(){n.data=t=++t%2}}function m(){var t=new MessageChannel;t.port1.onmessage=g;return function(){return t.port2.postMessage(0)}}function w(){var t=setTimeout;return function(){return t(g,1)}}var _=new Array(1e3);function g(){for(var t=0;t<o;t+=2){var e=_[t];var n=_[t+1];e(n);_[t]=undefined;_[t+1]=undefined}o=0}function T(){try{var t=ft;var e=lt(14);i=e.runOnLoop||e.runOnContext;return b()}catch(t){return w()}}var A=undefined;if(p){A=y()}else if(h){A=v()}else if(d){A=m()}else if(f===undefined&&"function"==="function"){A=T()}else{A=w()}function j(t,e){var n=arguments;var r=this;var o=new this.constructor(x);if(o[O]===undefined){Q(o)}var i=r._state;if(i){(function(){var t=n[i-1];u(function(){return X(i,o,t,r._result)})})()}else{G(r,o,t,e)}return o}function E(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var n=new e(x);M(n,t);return n}var O=Math.random().toString(36).substring(16);function x(){}var S=void 0,P=1,R=2,B=new Y;function U(){return new TypeError("You cannot resolve a promise with itself")}function k(){return new TypeError("A promises callback cannot return that same promise.")}function I(t){try{return t.then}catch(t){B.error=t;return B}}function C(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function D(t,r,o){u(function(e){var n=false;var t=C(o,r,function(t){if(n){return}n=true;if(r!==t){M(e,t)}else{q(e,t)}},function(t){if(n){return}n=true;H(e,t)},"Settle: "+(e._label||" unknown promise"));if(!n&&t){n=true;H(e,t)}},t)}function L(e,t){if(t._state===P){q(e,t._result)}else if(t._state===R){H(e,t._result)}else{G(t,undefined,function(t){return M(e,t)},function(t){return H(e,t)})}}function F(t,e,n){if(e.constructor===t.constructor&&n===j&&e.constructor.resolve===E){L(t,e)}else{if(n===B){H(t,B.error)}else if(n===undefined){q(t,e)}else if(a(n)){D(t,e,n)}else{q(t,e)}}}function M(t,e){if(t===e){H(t,U())}else if(n(e)){F(t,e,I(e))}else{q(t,e)}}function N(t){if(t._onerror){t._onerror(t._result)}V(t)}function q(t,e){if(t._state!==S){return}t._result=e;t._state=P;if(t._subscribers.length!==0){u(V,t)}}function H(t,e){if(t._state!==S){return}t._state=R;t._result=e;u(N,t)}function G(t,e,n,r){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+P]=n;o[i+R]=r;if(i===0&&t._state){u(V,t)}}function V(t){var e=t._subscribers;var n=t._state;if(e.length===0){return}var r=undefined,o=undefined,i=t._result;for(var s=0;s<e.length;s+=3){r=e[s];o=e[s+n];if(r){X(n,r,o,i)}else{o(i)}}t._subscribers.length=0}function Y(){this.error=null}var J=new Y;function K(t,e){try{return t(e)}catch(t){J.error=t;return J}}function X(t,e,n,r){var o=a(n),i=undefined,s=undefined,u=undefined,c=undefined;if(o){i=K(n,r);if(i===J){c=true;s=i.error;i=null}else{u=true}if(e===i){H(e,k());return}}else{i=r;u=true}if(e._state!==S){}else if(o&&u){M(e,i)}else if(c){H(e,s)}else if(t===P){q(e,i)}else if(t===R){H(e,i)}}function z(n,t){try{t(function t(e){M(n,e)},function t(e){H(n,e)})}catch(t){H(n,t)}}var W=0;function $(){return W++}function Q(t){t[O]=W++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Z(t,e){this._instanceConstructor=t;this.promise=new t(x);if(!this.promise[O]){Q(this.promise)}if(r(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){q(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){q(this.promise,this._result)}}}else{H(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Z(this,t).promise}function nt(o){var i=this;if(r(o))return new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function rt(t){var e=new this(x);return H(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function st(t){this[O]=$();this._result=this._state=undefined;this._subscribers=[];if(x!==t){typeof t!=="function"&&ot();this instanceof st?z(this,t):it()}}function ut(){var t=undefined;if(typeof at!=="undefined"){t=at}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if(n==="[object Promise]"&&!e.cast){return}}t.Promise=st}return Z.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===S&&n<t;n++)this._eachEntry(e[n],n)},Z.prototype._eachEntry=function(e,t){var n,r,o=this._instanceConstructor,i=o.resolve;i===E?(n=I(e))===j&&e._state!==S?this._settledAt(e._state,t,e._result):"function"!=typeof n?(this._remaining--,this._result[t]=e):o===st?(F(r=new o(x),e,n),this._willSettleAt(r,t)):this._willSettleAt(new o(function(t){return t(e)}),t):this._willSettleAt(i(e),t)},Z.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===S&&(this._remaining--,t===R?H(r,n):this._result[e]=n),0===this._remaining&&q(r,this._result)},Z.prototype._willSettleAt=function(t,e){var n=this;G(t,void 0,function(t){return n._settledAt(P,e,t)},function(t){return n._settledAt(R,e,t)})},st.all=function(t){return new Z(this,t).promise},st.race=function(o){var i=this;return r(o)?new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},st.resolve=E,st.reject=function(t){var e=new this(x);return H(e,t),e},st._setScheduler=function(t){s=t},st._setAsap=function(t){u=t},st._asap=u,st.prototype={constructor:st,then:j,catch:function(t){return this.then(null,t)}},ut(),st.polyfill=ut,st.Promise=st}()}).call(this,lt(13),lt(9))},13:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,a=[],f=!1,l=-1;function h(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!f){var t=u(h);f=!0;for(var e=a.length;e;){for(c=a,a=[];++l<e;)c&&c[l].run();l=-1,e=a.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new d(t,e)),1!==a.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},14:function(t,e){},15:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},2:function(t,e){t.exports=window.React},29:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p}),n.d(e,"PreviousNextButtonBlock",function(){return p});n(6);var r=n(2),o=n.n(r),i=n(5),s=n.n(i),u=(n(101),n(0));function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(i){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n,r,o=h(i);return e=s?(t=h(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),n=this,!(r=e)||"object"!==c(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(o,u["a"]);var t,e,n,r=l(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,t,{})}return t=o,(e=[{key:"render",value:function(){var t,e,n=this,r=this,o=this.props.previousAction;this.props.previousUrl&&(o=function(){document.location.href="".concat(n.props.previousUrl)}),o&&(t=React.createElement("div",{className:"osc-previous-button",onClick:function(t){o(t)}},this.props.previousLabel||"Vorige"));var i=this.props.nextAction;return this.props.nextUrl&&(i=function(){document.location.href="".concat(n.props.nextUrl)}),i&&(e=React.createElement("div",{className:"osc-next-button",onClick:function(t){i(t)}},this.props.nextLabel||"Volgende")),React.createElement("div",{className:"osc-previous-next-button-block",ref:function(t){return r.instance=t}},t,e)}}])&&a(t.prototype,e),n&&a(t,n),o}();p.renderElement=function(t,e){var n=t.attributes;s.a.render(o.a.createElement(p,{attributes:n,config:e}),t)}},4:function(t,e,n){(function(t){function e(t,e,n){var r=n[0],o=n.length;!t&&"object"===a(r)||(r={});for(var i=0;i<o;++i){var s,u=n[i];if("object"===a(u))for(var c in u){"__proto__"!==c&&(s=t?f.clone(u[c]):u[c],r[c]=e?function t(e,n){if("object"!==a(e))return n;for(var r in n)"object"===a(e[r])&&"object"===a(n[r])?e[r]=t(e[r],n[r]):e[r]=n[r];return e}(r[c],s):s)}}return r}function a(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}var n,f;n=t&&"object"==typeof t.exports&&t.exports,(f=function(t){return e(!0===t,!1,arguments)}).recursive=function(t){return e(!0===t,!0,arguments)},f.clone=function(t){var e,n,r=t,o=a(t);if("array"===o)for(r=[],n=t.length,e=0;e<n;++e)r[e]=f.clone(t[e]);else if("object"===o)for(e in r={},t)r[e]=f.clone(t[e]);return r},n?t.exports=f:window.merge=f}).call(this,n(15)(t))},5:function(t,e){t.exports=window.ReactDOM},6:function(t,e,n){"use strict";(function(i){var e,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,c="ArrayBuffer"in self;function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(n){return new i(function(t,e){n.onload=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function d(t){var e=new FileReader,n=p(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c&&u&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(t)||n(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,n,r=h(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=p(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}c&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),l.prototype.append=function(t,e){t=a(t),e=f(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[a(t)]},l.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},l.prototype.set=function(t,e){this.map[a(t)]=f(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var n=[];return this.forEach(function(t,e){n.push(e)}),t(n)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var n=[];return this.forEach(function(t,e){n.push([e,t])}),t(n)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var n,r,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),-1<v.indexOf(r)?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var o=new FormData;return t.trim().split("&").forEach(function(t){var e,n,r;t&&(n=(e=t.split("=")).shift().replace(/\+/g," "),r=e.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function _(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},b.call(m.prototype),b.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];_.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function A(o,s){return new i(function(r,t){var e=new m(o,s);if(e.signal&&e.signal.aborted)return t(new T("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e,n=t.split(":"),r=n.shift().trim();r&&(e=n.join(":").trim(),o.append(r,e))}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new _(n,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new T("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&u&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",n)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}A.polyfill=!0,self.fetch||(self.fetch=A,self.Headers=l,self.Request=m,self.Response=_)}).call(this,n(11))},9:function(t,e){var n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}});