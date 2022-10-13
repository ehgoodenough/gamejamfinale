/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var frem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var frem__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frem__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yaafloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var yaafloop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yaafloop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var views_Mount_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);

frem__WEBPACK_IMPORTED_MODULE_0___default()({
  "width": 16,
  "height": 9
});



preact__WEBPACK_IMPORTED_MODULE_2__["render"](preact__WEBPACK_IMPORTED_MODULE_2__["h"](views_Mount_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]), document.body, view);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

let width = undefined
let height = undefined

module.exports = function(parameters) {
    width = parameters.width
    height = parameters.height
    resize()
}

function resize() {
    if(width !== undefined && height !== undefined) {
        const x = Math.floor(window.innerWidth / width)
        const y = Math.floor(window.innerHeight / height)
        window.document.documentElement.style.fontSize = Math.min(x, y) + "px"
    }
}

window.addEventListener("resize", resize)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Afloop = __webpack_require__(3)

module.exports = function(func) {
    this.func = func

    this.fps = 60
    this.cap = 1000

    return new Afloop((delta) => {
        // Cap the delta.
        if(typeof this.cap === "number") {
            delta = Math.min(delta, this.cap)
        }

        // Calculate the delta in
        // different units of time.
        delta = {
            ms: delta, // in milliseconds
            s: delta / 1000, // in seconds
            f: delta / (1000 / this.fps), // in frames
        }

        // Call the function
        // with the delta.
        this.func(delta)
    })
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function Afloop(func) {
    (function loop(delta) {
        func(Math.min(window.performance.now() - delta, 1000))
        window.requestAnimationFrame(loop.bind(this, window.performance.now()))
    })(window.performance.now())
}

module.exports = Afloop


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,r,o={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,r,o=arguments,f={};for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v(n,f,i,t,null)}function v(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m)}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,T(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?d(t):r,t.__h),j(u,t),t.__e!=r&&_(t)))})}function b(n,l,u,i,t,r,e,c,s,a){var h,p,_,k,m,b,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}T(n,k,_=_||o,t,r,e,c,s,a),m=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||m,k)),null!=m?(null==b&&(b=m),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,m,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=b,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)I(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?H:$,r):n.removeEventListener(l,r?H:$,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(l,u,i,t,r,o,f,e,s){var a,v,h,d,_,k,m,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?m=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=z(i.__e,u,i,t,r,o,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l,u,i)}}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function z(n,l,u,i,t,r,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=r)for(;k<r.length;k++)if((a=r[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,r[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(r=r&&f.slice.call(n.childNodes),v=(p=u.props||o).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,b(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,r,e,n.firstChild,c),null!=r)for(k=r.length;k--;)null!=r[k]&&s(r[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&L(t[o],u,i);null!=r&&s(r)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,r,e;n.__&&n.__(l,u),r=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],T(u,l=(!t&&i||u).__k=a(y,null,[l]),r||o,o,void 0!==u.ownerSVGElement,!t&&i?[i]:r?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:r?r.__e:u.firstChild,t),j(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,r,o=arguments,f=c({},n.props);for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mount; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var afloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var afloop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(afloop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keyb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var keyb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keyb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var library_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var library_parse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(views_Mount_view_less__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var EXAMPLE_GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1s0Uu0F25bJKfvDyh175VsRdVZ9csWJDlBvCExxMBC-w/edit#gid=0";

var Mount = /*#__PURE__*/function (_Preact$Component) {
  _inherits(Mount, _Preact$Component);

  var _super = _createSuper(Mount);

  function Mount() {
    _classCallCheck(this, Mount);

    return _super.apply(this, arguments);
  }

  _createClass(Mount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.retrieveState({
        "hash": window.location.hash,
        "previousState": this.state
      }).then(function (nextState) {
        _this.setState(nextState);

        console.log(nextState);
      });
      window.addEventListener("hashchange", function (event) {
        _this.retrieveState({
          "hash": window.location.hash,
          "previousState": _this.state
        }).then(function (nextState) {
          _this.setState(nextState);

          console.log(nextState);
        });
      }, false);
      afloop__WEBPACK_IMPORTED_MODULE_1___default()(function (delta) {
        if (_this.state == undefined || _this.state.route == undefined || _this.state.route.googlesheetId == undefined) {
          return undefined;
        }

        if (keyb__WEBPACK_IMPORTED_MODULE_2___default.a.wasJustPressed("<left>")) {
          window.location.hash = _this.generateHash(_this.generatePreviousRoute(_this.state.route));
        }

        if (keyb__WEBPACK_IMPORTED_MODULE_2___default.a.wasJustPressed("<right>") || keyb__WEBPACK_IMPORTED_MODULE_2___default.a.wasJustPressed("<space>")) {
          window.location.hash = _this.generateHash(_this.generateNextRoute(_this.state.route));
        }
      });
    }
  }, {
    key: "retrieveState",
    value: function retrieveState() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          hash = _ref.hash,
          previousState = _ref.previousState;

      var nextState = {};
      var hashes = hash.split("/");
      nextState.route = {
        "googlesheetId": hashes[1] || undefined,
        "entryIndex": parseInt(hashes[2]) || 0,
        "entrySlide": hashes[3] || "title"
      };

      if (previousState == undefined) {
        return Promise.resolve(nextState);
      }

      if (nextState.route.googlesheetId == undefined) {
        return Promise.resolve(nextState);
      }

      if (previousState.route != undefined && previousState.route.googlesheetId != undefined && previousState.route.googlesheetId == nextState.route.googlesheetId) {
        nextState.entries = previousState.entries;
        return Promise.resolve(nextState);
      }

      return Object(library_entries_js__WEBPACK_IMPORTED_MODULE_3__["retrieveEntries"])(nextState.route.googlesheetId).then(function (entries) {
        nextState.entries = entries;
        return nextState;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        className: "Mount",
        onClick: this.onClick
      }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
        "class": "Frame"
      }, this.screen));
    }
  }, {
    key: "generatePreviousRoute",
    value: function generatePreviousRoute(route) {
      if (route.entrySlide == "video") {
        return {
          "googlesheetId": route.googlesheetId,
          "entryIndex": route.entryIndex,
          "entrySlide": "title"
        };
      } else {
        return {
          "googlesheetId": route.googlesheetId,
          "entryIndex": route.entryIndex - 1,
          "entrySlide": "video"
        };
      }
    }
  }, {
    key: "generateNextRoute",
    value: function generateNextRoute(route) {
      if (route.entrySlide == "title") {
        return {
          "googlesheetId": route.googlesheetId,
          "entryIndex": route.entryIndex,
          "entrySlide": "video"
        };
      } else if (route.entrySlide == "video") {
        return {
          "googlesheetId": route.googlesheetId,
          "entryIndex": route.entryIndex,
          "entrySlide": "retitle"
        };
      } else {
        return {
          "googlesheetId": route.googlesheetId,
          "entryIndex": route.entryIndex + 1,
          "entrySlide": "title"
        };
      }
    }
  }, {
    key: "generateHash",
    value: function generateHash(route) {
      var hash = "#";
      if (route.googlesheetId == undefined) return hash;
      hash += "/" + route.googlesheetId;
      if (route.entryIndex == undefined) return hash;
      hash += "/" + route.entryIndex;
      if (route.entrySlide == undefined) return hash;
      hash += "/" + route.entrySlide;
      return hash;
    }
  }, {
    key: "screen",
    get: function get() {
      if (this.state == undefined || this.state.route == undefined) {
        return undefined;
      }

      if (this.state.route.googlesheetId == undefined) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "WelcomeScreen"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Blurb"
        }, "Let's generate a set of slides for your game jam finale. All we need is a public ", preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", {
          href: "http://sheets.google.com/",
          target: "_blank"
        }, "Google Sheet"), " with the ", preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", {
          "class": "Code"
        }, "Game Name"), " and ", preact__WEBPACK_IMPORTED_MODULE_0__["h"]("span", {
          "class": "Code"
        }, "Youtube Link"), ". ", preact__WEBPACK_IMPORTED_MODULE_0__["h"]("a", {
          href: "https://github.com/ehgoodenough/gamejamfinale/wiki/How-to-Use",
          target: "_blank"
        }, "Read the step-by-step instructions here!")), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("form", {
          onSubmit: this.onSubmit
        }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("label", {
          "for": "input"
        }, "Google Sheets URL or ID"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("input", {
          id: "input",
          type: "text",
          placeholder: EXAMPLE_GOOGLE_SHEET_URL
        })));
      }

      if (this.state.entries == undefined) {
        return undefined;
      }

      if (this.state.entries[this.state.route.entryIndex] == undefined) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "EndScreen"
        }, "Thanks for jamming!!");
      }

      if (this.state.route.entrySlide == "title" || this.state.route.entrySlide == "retitle") {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "TitleScreen"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Emoji"
        }, this.state.entries[this.state.route.entryIndex].emoji || "😃"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Title"
        }, this.state.entries[this.state.route.entryIndex].title));
      }

      if (this.state.route.entrySlide == "video") {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "VideoScreen"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["h"](Youtube, {
          youtubeId: this.state.entries[this.state.route.entryIndex].youtubeId
        }));
      }
    }
  }, {
    key: "onClick",
    get: function get() {
      var _this2 = this;

      return function (event) {
        if (_this2.state == undefined || _this2.state.route == undefined || _this2.state.route.googlesheetId == undefined) {
          return undefined;
        }

        window.location.hash = _this2.generateHash(_this2.generateNextRoute(_this2.state.route));
      };
    }
  }, {
    key: "onSubmit",
    get: function get() {
      var _this3 = this;

      return function (event) {
        event.preventDefault();
        var googlesheetUrl = event.target[0].value || EXAMPLE_GOOGLE_SHEET_URL;
        var googlesheetId = Object(library_parse_js__WEBPACK_IMPORTED_MODULE_4__["parseGoogleSheetsId"])(googlesheetUrl);

        if (googlesheetId == undefined) {
          // event.target[0].value = ""
          event.target[0].style.animationName = "";
          window.setTimeout(function () {
            event.target[0].style.animationName = "bad";
            event.target[0].style.animationDuration = "1s";
          });
          return;
        }

        var route = {
          "googlesheetId": googlesheetId
        };
        window.location.hash = _this3.generateHash(route);
      };
    }
  }]);

  return Mount;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var Youtube = /*#__PURE__*/function () {
  function Youtube() {
    _classCallCheck(this, Youtube);
  }

  _createClass(Youtube, [{
    key: "render",
    value: function render() {
      if (this.props.youtubeId == undefined) return;
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/" + this.props.youtubeId + "?autoplay=1&rel=0",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: true
      });
    }
  }]);

  return Youtube;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const vkey = __webpack_require__(7)

const DEFAULT_DELTA = 1000 / 60

const Keyb = {"data": {}}

Keyb.isPressed = function(key) {
    return this.data[key] != undefined
        && this.data[key].state == "pressed"
}

Keyb.isUnpressed = function(key) {
    return this.data[key] == undefined
        || this.data[key].state == "unpressed"
}

Keyb.wasJustPressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "pressed"
        && window.performance.now() - this.data[key].time < (delta || DEFAULT_DELTA)
}

Keyb.wasJustUnpressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "unpressed"
        && window.performance.now() - this.data[key].time < (delta || DEFAULT_DELTA)
}

Keyb.setPressed = function(keycode) {
    const key = vkey[keycode]
    if(this.isPressed(key) == false) {
        this.data[key] = {"time": window.performance.now(), "state": "pressed"}
    }
}

Keyb.setNotPressed = function(keycode) {
    const key = vkey[keycode]
    this.data[key] = {"time": window.performance.now(), "state": "unpressed"}
}

Keyb.isDown = Keyb.isPressed
Keyb.isJustDown = Keyb.wasJustPressed
Keyb.isUp = Keyb.isNotPressed
Keyb.isNotPressed = Keyb.isUnpressed

document.addEventListener("keydown", (event) => Keyb.setPressed(event.keyCode))
document.addEventListener("keyup", (event) => Keyb.setNotPressed(event.keyCode))

module.exports = Keyb


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
  , isOSX = /OS X/.test(ua)
  , isOpera = /Opera/.test(ua)
  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera

var i, output = module.exports = {
  0:  isOSX ? '<menu>' : '<UNK>'
, 1:  '<mouse 1>'
, 2:  '<mouse 2>'
, 3:  '<break>'
, 4:  '<mouse 3>'
, 5:  '<mouse 4>'
, 6:  '<mouse 5>'
, 8:  '<backspace>'
, 9:  '<tab>'
, 12: '<clear>'
, 13: '<enter>'
, 16: '<shift>'
, 17: '<control>'
, 18: '<alt>'
, 19: '<pause>'
, 20: '<caps-lock>'
, 21: '<ime-hangul>'
, 23: '<ime-junja>'
, 24: '<ime-final>'
, 25: '<ime-kanji>'
, 27: '<escape>'
, 28: '<ime-convert>'
, 29: '<ime-nonconvert>'
, 30: '<ime-accept>'
, 31: '<ime-mode-change>'
, 32: '<space>'
, 33: '<page-up>'
, 34: '<page-down>'
, 35: '<end>'
, 36: '<home>'
, 37: '<left>'
, 38: '<up>'
, 39: '<right>'
, 40: '<down>'
, 41: '<select>'
, 42: '<print>'
, 43: '<execute>'
, 44: '<snapshot>'
, 45: '<insert>'
, 46: '<delete>'
, 47: '<help>'
, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
, 92: '<meta>'  // meta-right
, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
, 95: '<sleep>'
, 106: '<num-*>'
, 107: '<num-+>'
, 108: '<num-enter>'
, 109: '<num-->'
, 110: '<num-.>'
, 111: '<num-/>'
, 144: '<num-lock>'
, 145: '<scroll-lock>'
, 160: '<shift-left>'
, 161: '<shift-right>'
, 162: '<control-left>'
, 163: '<control-right>'
, 164: '<alt-left>'
, 165: '<alt-right>'
, 166: '<browser-back>'
, 167: '<browser-forward>'
, 168: '<browser-refresh>'
, 169: '<browser-stop>'
, 170: '<browser-search>'
, 171: '<browser-favorites>'
, 172: '<browser-home>'

  // ff/osx reports '<volume-mute>' for '-'
, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
, 174: '<volume-down>'
, 175: '<volume-up>'
, 176: '<next-track>'
, 177: '<prev-track>'
, 178: '<stop>'
, 179: '<play-pause>'
, 180: '<launch-mail>'
, 181: '<launch-media-select>'
, 182: '<launch-app 1>'
, 183: '<launch-app 2>'
, 186: ';'
, 187: '='
, 188: ','
, 189: '-'
, 190: '.'
, 191: '/'
, 192: '`'
, 219: '['
, 220: '\\'
, 221: ']'
, 222: "'"
, 223: '<meta>'
, 224: '<meta>'       // firefox reports meta here.
, 226: '<alt-gr>'
, 229: '<ime-process>'
, 231: isOpera ? '`' : '<unicode>'
, 246: '<attention>'
, 247: '<crsel>'
, 248: '<exsel>'
, 249: '<erase-eof>'
, 250: '<play>'
, 251: '<zoom>'
, 252: '<no-name>'
, 253: '<pa-1>'
, 254: '<clear>'
}

for(i = 58; i < 65; ++i) {
  output[i] = String.fromCharCode(i)
}

// 0-9
for(i = 48; i < 58; ++i) {
  output[i] = (i - 48)+''
}

// A-Z
for(i = 65; i < 91; ++i) {
  output[i] = String.fromCharCode(i)
}

// num0-9
for(i = 96; i < 106; ++i) {
  output[i] = '<num-'+(i - 96)+'>'
}

// F1-F24
for(i = 112; i < 136; ++i) {
  output[i] = 'F'+(i-111)
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEntries", function() { return formatEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveEntries", function() { return retrieveEntries; });
/* harmony import */ var library_parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var library_fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);

 // Intakes an array of arrays parsed from a csv. The first row is the header.
// Returns an array of json objects, each representing a game jam entry:
// {
//     "title": "Swordshard",
//     "emoji": "🗡️",
//     "youtube": "TGlgNDDWzgw", // the video id of a youtube video
// }

function formatEntries(entries) {
  entries.forEach(function (entry) {
    Object.keys(entry).forEach(function (key) {
      var newkey = key.toLowerCase().replace(/\s+/g, "");
      entry[newkey] = entry[key];
    });
  });
  entries.forEach(function (entry) {
    entry.title = entry["gamename"];
    entry.emoji = entry["emoji"];
    entry.youtubeId = Object(library_parse_js__WEBPACK_IMPORTED_MODULE_0__["parseYoutubeId"])(entry["youtubelink"]);
  });
  return entries;
}
function retrieveEntries(googlesheetId) {
  return Object(library_fetch_js__WEBPACK_IMPORTED_MODULE_1__["fetchGoogleSheet"])(googlesheetId).then(function (entries) {
    return formatEntries(entries);
  });
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseYoutubeId", function() { return parseYoutubeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGoogleSheetsId", function() { return parseGoogleSheetsId; });
function parseYoutubeId(string) {
  if (string == undefined) return undefined;
  if (string == "") return undefined;
  var matches = string.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
  if (matches == undefined) return;
  var url = matches[0];
  if (url == undefined) return;
  var match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
  var id = match && match[7].length == 11 ? match[7] : undefined;
  return id;
}
function parseGoogleSheetsId(string) {
  if (string == undefined) return undefined;
  if (string == "") return undefined;
  var matches = string.match(/\/([\w-_]{15,})\/(.*?gid=(\d+))?/);
  if (matches == undefined) return;
  var id = matches[1];
  return id;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGoogleSheet", function() { return fetchGoogleSheet; });
/* harmony import */ var urrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var urrl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urrl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fetchquest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var fetchquest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fetchquest__WEBPACK_IMPORTED_MODULE_1__);

 // Read more at: https://api.fureweb.com/#/spreadsheets/spreadsheetId

var FUREWEB_GOOGLE_SHEET_URL = new urrl__WEBPACK_IMPORTED_MODULE_0___default.a("https://api.fureweb.com/spreadsheets/{googlesheetId}");
function fetchGoogleSheet(googlesheetId) {
  console.log(googlesheetId);
  return fetchquest__WEBPACK_IMPORTED_MODULE_1___default()({
    "method": "GET",
    "url": FUREWEB_GOOGLE_SHEET_URL({
      "googlesheetId": googlesheetId
    })
  }).then(function (response) {
    return response.data;
  });
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Urrl
// @description Builds a URL from a URI resource path.
// @accepts [string] a fully qualified path, with `{...}` as parameters
// @returns [function] a curried function, that injects parameters over the `{...}`

// @example
// const POKEMON_URRL = new Urrl("http://pokeapi.co/api/v2/pokemon/{name}")
// let url = POKEMON_URRL({"name": "bulbasaur"})
// window.fetch(url)

module.exports = function Urrl(url) {
    return function(parameters) {
        for(var key in parameters) {
            url = url.replace("{" + key + "}", parameters[key])
        }
        return url
    }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__(13)

module.exports = function FetchQuest(request) {
    if(request.body !== undefined) {
        request.body = JSON.stringify(request.body)
        request.headers = request.headers || {}
        request.headers["Content-Type"] = "application/json"
    }
    return fetch(request.url, request).then((response) => {
        return response.clone().json().catch((error) => {
            return response.text()
        }).then((value) => {
            if(response.status.toString().charAt(0) === "4"
            || response.status.toString().charAt(0) === "5") {
                throw value
            } else {
                return value
            }
        })
    })
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(15);
            var content = __webpack_require__(16);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.Mount {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  position: absolute;\n  background-color: #111;\n}\n.Frame {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  margin: auto;\n  position: fixed;\n  overflow: hidden;\n  color: #F4F8F0;\n  width: 16em;\n  height: 9em;\n  background-image: linear-gradient(135deg, #2F243A, #444054);\n}\n.WelcomeScreen {\n  top: 3em;\n  left: 0em;\n  right: 0em;\n  width: 8em;\n  margin: auto;\n  position: absolute;\n  color: #B8C5D6;\n}\n.WelcomeScreen .Blurb {\n  text-align: justify;\n  font-size: 0.33em;\n}\n.WelcomeScreen .Blurb a {\n  color: inherit;\n}\n.WelcomeScreen form {\n  font-size: 0.33em;\n  margin-top: 1em;\n  cursor: pointer;\n}\n.WelcomeScreen form input {\n  display: block;\n  width: 100%;\n  border: none;\n  font: inherit;\n  font-size: 1.33em;\n  padding: 0.2em;\n  box-sizing: border-box;\n  background-color: #EDF5FC;\n}\n.WelcomeScreen form label {\n  display: block;\n  opacity: 0.5;\n}\n.TitleScreen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.VideoScreen {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n}\n.VideoScreen iframe {\n  width: 16em;\n  height: 9em;\n}\n.EndScreen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0.5em;\n}\n@keyframes bad {\n  0% {\n    background-color: red;\n  }\n  100% {\n    background-color: #EDF5FC;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map