(()=>{"use strict";function e(e,t){return function(){return e.apply(t,arguments)}}const{toString:t}=Object.prototype,{getPrototypeOf:n}=Object,o=(r=Object.create(null),e=>{const n=t.call(e);return r[n]||(r[n]=n.slice(8,-1).toLowerCase())});var r;const i=e=>(e=e.toLowerCase(),t=>o(t)===e),s=e=>t=>typeof t===e,{isArray:a}=Array,c=s("undefined"),l=i("ArrayBuffer"),u=s("string"),d=s("function"),f=s("number"),p=e=>null!==e&&"object"==typeof e,h=e=>{if("object"!==o(e))return!1;const t=n(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},m=i("Date"),g=i("File"),b=i("Blob"),y=i("FileList"),w=i("URLSearchParams");function E(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let o,r;if("object"!=typeof e&&(e=[e]),a(e))for(o=0,r=e.length;o<r;o++)t.call(null,e[o],o,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let s;for(o=0;o<i;o++)s=r[o],t.call(null,e[s],s,e)}}function v(e,t){t=t.toLowerCase();const n=Object.keys(e);let o,r=n.length;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,O=e=>!c(e)&&e!==S,R=(x="undefined"!=typeof Uint8Array&&n(Uint8Array),e=>x&&e instanceof x);var x;const A=i("HTMLFormElement"),T=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C=i("RegExp"),_=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),o={};E(n,((n,r)=>{!1!==t(n,r,e)&&(o[r]=n)})),Object.defineProperties(e,o)},N="abcdefghijklmnopqrstuvwxyz",L="0123456789",j={DIGIT:L,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+L},P={isArray:a,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&d(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const n="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||t.call(e)===n||d(e.toString)&&e.toString()===n)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer),t},isString:u,isNumber:f,isBoolean:e=>!0===e||!1===e,isObject:p,isPlainObject:h,isUndefined:c,isDate:m,isFile:g,isBlob:b,isRegExp:C,isFunction:d,isStream:e=>p(e)&&d(e.pipe),isURLSearchParams:w,isTypedArray:R,isFileList:y,forEach:E,merge:function e(){const{caseless:t}=O(this)&&this||{},n={},o=(o,r)=>{const i=t&&v(n,r)||r;h(n[i])&&h(o)?n[i]=e(n[i],o):h(o)?n[i]=e({},o):a(o)?n[i]=o.slice():n[i]=o};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&E(arguments[e],o);return n},extend:(t,n,o,{allOwnKeys:r}={})=>(E(n,((n,r)=>{o&&d(n)?t[r]=e(n,o):t[r]=n}),{allOwnKeys:r}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,o,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==o&&n(e)}while(e&&(!o||o(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:i,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const o=e.indexOf(t,n);return-1!==o&&o===n},toArray:e=>{if(!e)return null;if(a(e))return e;let t=e.length;if(!f(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const n=o.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const o=[];for(;null!==(n=e.exec(t));)o.push(n);return o},isHTMLForm:A,hasOwnProperty:T,hasOwnProp:T,reduceDescriptors:_,freezeMethods:e=>{_(e,((t,n)=>{if(d(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const o=e[n];d(o)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},o=e=>{e.forEach((e=>{n[e]=!0}))};return a(e)?o(e):o(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:v,global:S,isContextDefined:O,ALPHABET:j,generateString:(e=16,t=j.ALPHA_DIGIT)=>{let n="";const{length:o}=t;for(;e--;)n+=t[Math.random()*o|0];return n},isSpecCompliantForm:function(e){return!!(e&&d(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,o)=>{if(p(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[o]=e;const r=a(e)?[]:{};return E(e,((e,t)=>{const i=n(e,o+1);!c(i)&&(r[t]=i)})),t[o]=void 0,r}}return e};return n(e,0)}};function $(e,t,n,o,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),r&&(this.response=r)}P.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U=$.prototype,D={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{D[e]={value:e}})),Object.defineProperties($,D),Object.defineProperty(U,"isAxiosError",{value:!0}),$.from=(e,t,n,o,r,i)=>{const s=Object.create(U);return P.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),$.call(s,e.message,t,n,o,r),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const k=$;function B(e){return P.isPlainObject(e)||P.isArray(e)}function F(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function I(e,t,n){return e?e.concat(t).map((function(e,t){return e=F(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const M=P.toFlatObject(P,{},null,(function(e){return/^is[A-Z]/.test(e)})),q=function(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const o=(n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!P.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(P.isDate(e))return e.toISOString();if(!a&&P.isBlob(e))throw new k("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(e)||P.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(P.endsWith(n,"{}"))n=o?n:n.slice(0,-2),e=JSON.stringify(e);else if(P.isArray(e)&&function(e){return P.isArray(e)&&!e.some(B)}(e)||(P.isFileList(e)||P.endsWith(n,"[]"))&&(a=P.toArray(e)))return n=F(n),a.forEach((function(e,o){!P.isUndefined(e)&&null!==e&&t.append(!0===s?I([n],o,i):null===s?n:n+"[]",c(e))})),!1;return!!B(e)||(t.append(I(r,n,i),c(e)),!1)}const u=[],d=Object.assign(M,{defaultVisitor:l,convertValue:c,isVisitable:B});if(!P.isObject(e))throw new TypeError("data must be an object");return function e(n,o){if(!P.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+o.join("."));u.push(n),P.forEach(n,(function(n,i){!0===(!(P.isUndefined(n)||null===n)&&r.call(t,n,P.isString(i)?i.trim():i,o,d))&&e(n,o?o.concat(i):[i])})),u.pop()}}(e),t};function H(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function z(e,t){this._pairs=[],e&&q(e,this,t)}const J=z.prototype;J.append=function(e,t){this._pairs.push([e,t])},J.toString=function(e){const t=e?function(t){return e.call(this,t,H)}:H;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const V=z;function W(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K(e,t,n){if(!t)return e;const o=n&&n.encode||W,r=n&&n.serialize;let i;if(i=r?r(t,n):P.isURLSearchParams(t)?t.toString():new V(t,n).toString(o),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const G=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){P.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},X={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Q={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:V,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},Z=function(e){function t(e,n,o,r){let i=e[r++];const s=Number.isFinite(+i),a=r>=e.length;return i=!i&&P.isArray(o)?o.length:i,a?(P.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!s):(o[i]&&P.isObject(o[i])||(o[i]=[]),t(e,n,o[i],r)&&P.isArray(o[i])&&(o[i]=function(e){const t={},n=Object.keys(e);let o;const r=n.length;let i;for(o=0;o<r;o++)i=n[o],t[i]=e[i];return t}(o[i])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,((e,o)=>{t(function(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),o,n,0)})),n}return null},Y={"Content-Type":void 0},ee={transitional:X,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",o=n.indexOf("application/json")>-1,r=P.isObject(e);if(r&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return o&&o?JSON.stringify(Z(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return q(e,new Q.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,o){return Q.isNode&&P.isBuffer(e)?(this.append(t,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=P.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return q(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||o?(t.setContentType("application/json",!1),function(e,t,n){if(P.isString(e))try{return(0,JSON.parse)(e),P.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ee.transitional,n=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&P.isString(e)&&(n&&!this.responseType||o)){const n=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw k.from(e,k.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Q.classes.FormData,Blob:Q.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],(function(e){ee.headers[e]={}})),P.forEach(["post","put","patch"],(function(e){ee.headers[e]=P.merge(Y)}));const te=ee,ne=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oe=Symbol("internals");function re(e){return e&&String(e).trim().toLowerCase()}function ie(e){return!1===e||null==e?e:P.isArray(e)?e.map(ie):String(e)}function se(e,t,n,o,r){return P.isFunction(o)?o.call(this,t,n):(r&&(t=n),P.isString(t)?P.isString(o)?-1!==t.indexOf(o):P.isRegExp(o)?o.test(t):void 0:void 0)}class ae{constructor(e){e&&this.set(e)}set(e,t,n){const o=this;function r(e,t,n){const r=re(t);if(!r)throw new Error("header name must be a non-empty string");const i=P.findKey(o,r);(!i||void 0===o[i]||!0===n||void 0===n&&!1!==o[i])&&(o[i||t]=ie(e))}const i=(e,t)=>P.forEach(e,((e,n)=>r(e,n,t)));return P.isPlainObject(e)||e instanceof this.constructor?i(e,t):P.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?i((e=>{const t={};let n,o,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),o=e.substring(r+1).trim(),!n||t[n]&&ne[n]||("set-cookie"===n?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)})),t})(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=re(e)){const n=P.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)t[o[1]]=o[2];return t}(e);if(P.isFunction(t))return t.call(this,e,n);if(P.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=re(e)){const n=P.findKey(this,e);return!(!n||void 0===this[n]||t&&!se(0,this[n],n,t))}return!1}delete(e,t){const n=this;let o=!1;function r(e){if(e=re(e)){const r=P.findKey(n,e);!r||t&&!se(0,n[r],r,t)||(delete n[r],o=!0)}}return P.isArray(e)?e.forEach(r):r(e),o}clear(e){const t=Object.keys(this);let n=t.length,o=!1;for(;n--;){const r=t[n];e&&!se(0,this[r],r,e,!0)||(delete this[r],o=!0)}return o}normalize(e){const t=this,n={};return P.forEach(this,((o,r)=>{const i=P.findKey(n,r);if(i)return t[i]=ie(o),void delete t[r];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete t[r],t[s]=ie(o),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return P.forEach(this,((n,o)=>{null!=n&&!1!==n&&(t[o]=e&&P.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[oe]=this[oe]={accessors:{}}).accessors,n=this.prototype;function o(e){const o=re(e);t[o]||(function(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach((o=>{Object.defineProperty(e,o+n,{value:function(e,n,r){return this[o].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[o]=!0)}return P.isArray(e)?e.forEach(o):o(e),this}}ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),P.freezeMethods(ae.prototype),P.freezeMethods(ae);const ce=ae;function le(e,t){const n=this||te,o=t||n,r=ce.from(o.headers);let i=o.data;return P.forEach(e,(function(e){i=e.call(n,i,r.normalize(),t?t.status:void 0)})),r.normalize(),i}function ue(e){return!(!e||!e.__CANCEL__)}function de(e,t,n){k.call(this,null==e?"canceled":e,k.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(de,k,{__CANCEL__:!0});const fe=de,pe=Q.isStandardBrowserEnv?{write:function(e,t,n,o,r,i){const s=[];s.push(e+"="+encodeURIComponent(t)),P.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),P.isString(o)&&s.push("path="+o),P.isString(r)&&s.push("domain="+r),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function he(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const me=Q.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function o(n){let o=n;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=o(window.location.href),function(e){const t=P.isString(e)?o(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ge(e,t){let n=0;const o=function(e,t){e=e||10;const n=new Array(e),o=new Array(e);let r,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=o[s];r||(r=c),n[i]=a,o[i]=c;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-r<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return r=>{const i=r.loaded,s=r.lengthComputable?r.total:void 0,a=i-n,c=o(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}const be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let o=e.data;const r=ce.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}P.isFormData(o)&&(Q.isStandardBrowserEnv||Q.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=he(e.baseURL,e.url);function u(){if(!c)return;const o=ce.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new k("Request failed with status code "+n.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:o,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),K(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new k("Request aborted",k.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new k("Network Error",k.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const o=e.transitional||X;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new k(t,o.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,e,c)),c=null},Q.isStandardBrowserEnv){const t=(e.withCredentials||me(l))&&e.xsrfCookieName&&pe.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===o&&r.setContentType(null),"setRequestHeader"in c&&P.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new fe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);d&&-1===Q.protocols.indexOf(d)?n(new k("Unsupported protocol "+d+":",k.ERR_BAD_REQUEST,e)):c.send(o||null)}))}};P.forEach(be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function ye(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fe(null,e)}function we(e){return ye(e),e.headers=ce.from(e.headers),e.data=le.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,o;for(let r=0;r<t&&(n=e[r],!(o=P.isString(n)?be[n.toLowerCase()]:n));r++);if(!o){if(!1===o)throw new k(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(P.hasOwnProp(be,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!P.isFunction(o))throw new TypeError("adapter is not a function");return o})(e.adapter||te.adapter)(e).then((function(t){return ye(e),t.data=le.call(e,e.transformResponse,t),t.headers=ce.from(t.headers),t}),(function(t){return ue(t)||(ye(e),t&&t.response&&(t.response.data=le.call(e,e.transformResponse,t.response),t.response.headers=ce.from(t.response.headers))),Promise.reject(t)}))}const Ee=e=>e instanceof ce?e.toJSON():e;function ve(e,t){t=t||{};const n={};function o(e,t,n){return P.isPlainObject(e)&&P.isPlainObject(t)?P.merge.call({caseless:n},e,t):P.isPlainObject(t)?P.merge({},t):P.isArray(t)?t.slice():t}function r(e,t,n){return P.isUndefined(t)?P.isUndefined(e)?void 0:o(void 0,e,n):o(e,t,n)}function i(e,t){if(!P.isUndefined(t))return o(void 0,t)}function s(e,t){return P.isUndefined(t)?P.isUndefined(e)?void 0:o(void 0,e):o(void 0,t)}function a(n,r,i){return i in t?o(n,r):i in e?o(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Ee(e),Ee(t),!0)};return P.forEach(Object.keys(e).concat(Object.keys(t)),(function(o){const i=c[o]||r,s=i(e[o],t[o],o);P.isUndefined(s)&&i!==a||(n[o]=s)})),n}const Se={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Oe={};Se.transitional=function(e,t,n){function o(e,t){return"[Axios v1.3.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,i)=>{if(!1===e)throw new k(o(r," has been removed"+(t?" in "+t:"")),k.ERR_DEPRECATED);return t&&!Oe[r]&&(Oe[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,i)}};const Re={assertOptions:function(e,t,n){if("object"!=typeof e)throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let r=o.length;for(;r-- >0;){const i=o[r],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new k("option "+i+" must be "+n,k.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new k("Unknown option "+i,k.ERR_BAD_OPTION)}},validators:Se},xe=Re.validators;class Ae{constructor(e){this.defaults=e,this.interceptors={request:new G,response:new G}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ve(this.defaults,t);const{transitional:n,paramsSerializer:o,headers:r}=t;let i;void 0!==n&&Re.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),void 0!==o&&Re.assertOptions(o,{encode:xe.function,serialize:xe.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=r&&P.merge(r.common,r[t.method]),i&&P.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=ce.concat(i,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[we.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=s.length;let f=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=we.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return K(he((e=ve(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}P.forEach(["delete","get","head","options"],(function(e){Ae.prototype[e]=function(t,n){return this.request(ve(n||{},{method:e,url:t,data:(n||{}).data}))}})),P.forEach(["post","put","patch"],(function(e){function t(t){return function(n,o,r){return this.request(ve(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:o}))}}Ae.prototype[e]=t(),Ae.prototype[e+"Form"]=t(!0)}));const Te=Ae;class Ce{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const o=new Promise((e=>{n.subscribe(e),t=e})).then(e);return o.cancel=function(){n.unsubscribe(t)},o},e((function(e,o,r){n.reason||(n.reason=new fe(e,o,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ce((function(t){e=t})),cancel:e}}}const _e=Ce,Ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ne).forEach((([e,t])=>{Ne[t]=e}));const Le=Ne,je=function t(n){const o=new Te(n),r=e(Te.prototype.request,o);return P.extend(r,Te.prototype,o,{allOwnKeys:!0}),P.extend(r,o,null,{allOwnKeys:!0}),r.create=function(e){return t(ve(n,e))},r}(te);je.Axios=Te,je.CanceledError=fe,je.CancelToken=_e,je.isCancel=ue,je.VERSION="1.3.4",je.toFormData=q,je.AxiosError=k,je.Cancel=je.CanceledError,je.all=function(e){return Promise.all(e)},je.spread=function(e){return function(t){return e.apply(null,t)}},je.isAxiosError=function(e){return P.isObject(e)&&!0===e.isAxiosError},je.mergeConfig=ve,je.AxiosHeaders=ce,je.formToJSON=e=>Z(P.isHTMLForm(e)?new FormData(e):e),je.HttpStatusCode=Le,je.default=je;const Pe=je,$e="d512e52ea3248a19b019f36b716c3bd1",Ue="https://api.themoviedb.org/3",De=e=>{const t=[];for(;t.length<10;){const n=e[Math.floor(Math.random()*e.length)];t.includes(n)||t.push(n)}return t},ke="\n<style>\n    .movieContiner{\n        width: 100%;\n    }\n    .movieItem{\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n        gap: 2rem;\n        margin: 1rem 0;\n    }\n    \n    .movie {\n        width: 200px;\n        padding: 1rem;\n        border-radius:5px;\n        background: #1a1a1a;\n        box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;\n    }\n    \n    .movie > img{\n        width: 12.4rem;\n        border: 1px solid black;\n    }\n    \n    .movie > h3{\n        color: #fff;\n        text-align: center;\n        font-size: 18px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n\n    .movie > p{\n        color: #fff;\n        font-size: 12px;\n        text-align: center;\n    }\n    \n    .btn-detail{\n        border:none;\n        background-color: #2c2c2c;\n        padding: 10px 15px;\n        width: 100%;\n        color: #6896c7;\n        font-size:14px;\n\n        border-radius:2px;\n    }\n    .btn-detail:hover{\n        background-color: rgba(87, 153, 239, 0.133);\n    }\n</style>\n";class Be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("template");e.innerHTML=`\n        ${ke}\n        <div class="movieContiner">\n            <div class="movieItem">\n    \n            </div>\n        </div>\n        `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}async connectedCallback(){const e=await(async()=>{const e=`${Ue}/movie/now_playing?api_key=${$e}&language=en-US&page=1`,t=await Pe.get(e);return De(t.data.results)})(),t=this.shadowRoot.querySelector(".movieItem");e.slice(0,5).forEach((e=>{const n=document.createElement("div");n.classList.add("movie"),n.innerHTML=`\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}">\n            <h3>${e.title}</h3>\n            <p>${e.release_date}</p>\n            <button class="btn-detail" data-movie-id="${e.id}">Detail</button>\n            `,t.appendChild(n)})),this.shadowRoot.querySelectorAll(".btn-detail").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-movie-id");window.location.href=`page/film.html?id=${t}`}))}))}}customElements.define("new-films",Be);class Fe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("template");e.innerHTML=`\n        ${ke}\n         <div class="movieContiner">\n            <div class="movieItem">\n            \n            </div>\n        </div>\n        `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}async connectedCallback(){const e=await(async()=>{const e=`${Ue}/movie/popular?api_key=${$e}&language=en-US&page=1`,t=await Pe.get(e);return De(t.data.results)})(),t=this.shadowRoot.querySelector(".movieItem");e.slice(0,12).forEach((e=>{const n=document.createElement("div");n.classList.add("movie"),n.innerHTML=`\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}">\n            <h3>${e.title}</h3>\n            <p>${e.release_date}</p>\n            <button class="btn-detail" data-movie-id="${e.id}">Detail</button>\n            `,t.appendChild(n)})),this.shadowRoot.querySelectorAll(".btn-detail").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-movie-id");window.location.href=`page/film.html?id=${t}`}))}))}}customElements.define("populer-film",Fe);class Ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("template");e.innerHTML=`\n        ${ke}\n        <div class="movieContiner">\n            <div class="movieItem">\n        \n            </div>\n        </div>\n        `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}async connectedCallback(){const e=await(async()=>{const e=`${Ue}/discover/movie?api_key=${$e}&with_genres=878&language=id-US&page=1`,t=await Pe.get(e);return De(t.data.results)})(),t=this.shadowRoot.querySelector(".movieItem");e.slice(0,10).forEach((e=>{const n=document.createElement("div");n.classList.add("movie"),n.innerHTML=`\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}">\n            <h3>${e.title}</h3>\n            <p>${e.release_date}</p>\n            <button class="btn-detail" data-movie-id="${e.id}">Detail</button>\n            `,t.appendChild(n)})),this.shadowRoot.querySelectorAll(".btn-detail").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-movie-id");window.location.href=`page/film.html?id=${t}`}))}))}}customElements.define("superhero-film",Ie);class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("template");e.innerHTML=`\n        ${ke}\n        <div class="movieContiner">\n            <div class="movieItem">\n        \n            </div>\n        </div>\n        `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}async connectedCallback(){const e=await(async()=>{const e=`${Ue}/discover/movie?api_key=${$e}&with_original_language=id&language=id-US&page=1`,t=await Pe.get(e);return De(t.data.results)})(),t=this.shadowRoot.querySelector(".movieItem");e.slice(0,12).forEach((e=>{const n=document.createElement("div");n.classList.add("movie"),n.innerHTML=`\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}">\n            <h3>${e.title}</h3>\n            <p>${e.release_date}</p>\n            <button class="btn-detail" data-movie-id="${e.id}">Detail</button>\n\n            `,t.appendChild(n)})),this.shadowRoot.querySelectorAll(".btn-detail").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-movie-id");window.location.href=`page/film.html?id=${t}`}))}))}}customElements.define("local-film",Me);class qe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("template");e.innerHTML=`\n        ${ke}\n        <div class="movieContiner">\n            <div class="movieItem">\n            \n            </div>\n        </div>\n        `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}async connectedCallback(){const e=await(async()=>{const e=`${Ue}/discover/tv?api_key=${$e}&with_networks=213`;return(await Pe.get(e)).data.results})(),t=this.shadowRoot.querySelector(".movieItem");e.slice(0,20).forEach((e=>{const n=document.createElement("div");n.classList.add("movie"),n.innerHTML=`\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.name}">\n            <h3>${e.name}</h3>\n            <p>${e.first_air_date}</p>\n            <button class="btn-detail" data-movie-id="${e.id}">Detail</button>\n            `,t.appendChild(n)})),this.shadowRoot.querySelectorAll(".btn-detail").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-movie-id");window.location.href=`page/film.html?id=${t}`}))}))}}customElements.define("anime-list",qe);const He=document.querySelector("#movieDetail"),ze=new URLSearchParams(window.location.search).get("id");(async()=>{const e=await(async e=>{const t=`${Ue}/movie/${e}?api_key=${$e}&language=id-US`;return(await Pe.get(t)).data})(ze),t=`\n        <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}">\n        <div class="detail-container">\n            <h2 class="txt-detail">${e.title}</h2>\n            <p class="txt-detail">${e.overview}</p>\n            <ul>\n                <li class="txt-detail">Release Date: ${e.release_date}</li>\n                <li class="txt-detail">Vote Average: ${e.vote_average}</li>\n                <li class="txt-detail">Runtime: ${e.runtime} minutes</li>\n                <li class="txt-detail">Genres: ${e.genres.map((e=>e.name)).join(", ")}</li>\n            </ul>\n        </div>\n    `;He.innerHTML=t})();const Je=document.querySelector("#movieDetail"),Ve=new URLSearchParams(window.location.search).get("id");(async()=>{const e=await(async e=>{const t=`${Ue}/tv/${e}?api_key=${$e}&language=id-US`;return(await Pe.get(t)).data})(Ve),t=`\n        <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.name}">\n        <div class="detail-container">\n            <h2 class="txt-detail">${e.name}</h2>\n            <p class="txt-detail">${e.overview}</p>\n            <ul>\n                <li class="txt-detail">First Air Date: ${e.first_air_date}</li>\n                <li class="txt-detail">Vote Average: ${e.vote_average}</li>\n                <li class="txt-detail">Number of Episodes: ${e.number_of_episodes}</li>\n                <li class="txt-detail">Number of Seasons: ${e.number_of_seasons}</li>\n                <li class="txt-detail">Genres: ${e.genres.map((e=>e.name)).join(", ")}</li>\n            </ul>\n        </div>\n    `;Je.innerHTML=t})();const We=document.createElement("new-films"),Ke=document.createElement("populer-film"),Ge=document.createElement("superhero-film"),Xe=document.createElement("local-film"),Qe=document.createElement("movieDetail"),Ze=document.createElement("tvDetails"),Ye=document.createElement("anime-list");document.getElementById("newFilm").appendChild(We),document.getElementById("populer").appendChild(Ke),document.getElementById("superHero").appendChild(Ge),document.getElementById("localFilm").appendChild(Xe),document.getElementById("netflix").appendChild(Ye),document.getElementById("movieDetail").appendChild(Qe),document.getElementById("movieDetail").appendChild(Ze)})();