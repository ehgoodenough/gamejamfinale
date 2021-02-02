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
/* harmony import */ var data_entries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(views_Mount_view_less__WEBPACK_IMPORTED_MODULE_2__);
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





function getRoute() {
  var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hash;
  var hashes = hash.split("/");
  return {
    "index": parseInt(hashes[1]) || 0,
    "screen": hashes[2] || "title"
  };
}

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

      this.setState({
        "route": getRoute(window.location.hash)
      });
      window.addEventListener("hashchange", function (event) {
        _this.setState({
          "route": getRoute(window.location.hash)
        });
      }, false);
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
    key: "onClick",
    get: function get() {
      var _this2 = this;

      return function (event) {
        if (_this2.state == undefined || _this2.state.route == undefined) {
          return undefined;
        }

        var route = _this2.state.route;

        if (route.screen != "video") {
          route.screen = "video";
        } else {
          route.index += 1;
          route.screen = "title";
        }

        window.location.hash = "#/" + route.index + "/" + route.screen;
      };
    }
  }, {
    key: "screen",
    get: function get() {
      if (this.state == undefined || this.state.route == undefined) {
        return undefined;
      }

      if (data_entries_js__WEBPACK_IMPORTED_MODULE_1__["default"][this.state.route.index] == undefined) {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "EndScreen"
        }, "Thanks for jamming!!");
      }

      if (this.state.route.screen == "title") {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "TitleScreen"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Emoji"
        }, data_entries_js__WEBPACK_IMPORTED_MODULE_1__["default"][this.state.route.index].emoji || "😃"), preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "Title"
        }, data_entries_js__WEBPACK_IMPORTED_MODULE_1__["default"][this.state.route.index].title));
      }

      if (this.state.route.screen == "video") {
        return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("div", {
          "class": "VideoScreen"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["h"](Youtube, {
          youtube: data_entries_js__WEBPACK_IMPORTED_MODULE_1__["default"][this.state.route.index].youtube
        }));
      }
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
      return preact__WEBPACK_IMPORTED_MODULE_0__["h"]("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/" + this.props.youtube + "?autoplay=1&rel=0",
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
// Exports an array of json objects, each representing a game jam entry:
// {
//     "title": "Swordshard",
//     "emoji": "🗡️",
//     "youtube": "TGlgNDDWzgw", // the video id of a youtube video
// }


var entries = __webpack_require__(8);

var headers = entries.shift();
entries = entries.map(function (entry) {
  var entry2 = {};
  headers.forEach(function (header, index) {
    if (header == "") return;
    entry2[header] = entry[index];
  });
  return entry2;
});
entries.forEach(function (entry) {
  entry.title = entry["Game Name"];
  entry.emoji = entry["Emoji"];
  entry.youtube = Object(library_parse_js__WEBPACK_IMPORTED_MODULE_0__["parseYoutube"])(entry["Youtube Link"]);
});
/* harmony default export */ __webpack_exports__["default"] = (entries);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseYoutube", function() { return parseYoutube; });
function parseYoutube(string) {
  if (string == undefined) return undefined;
  var url = string.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)[0];
  if (url == undefined) return;
  var match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
  return match && match[7].length == 11 ? match[7] : undefined;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [["Number","Estimated Time","Emoji","Game Name","Youtube Link","Global Game Jam Link","","Favorite Ice Cream","Favorite Color","Quest","","","Team"],["0","6:10 PM","🗡️","Swordshard","https://youtu.be/TGlgNDDWzgw","https://globalgamejam.org/2021/games/swordshard-1","","Mint Chocolate Chip","","","","",""],["1","6:13 PM","🔫","Lost my gun, but I found yours","https://youtu.be/IfuvAdkfktw","https://globalgamejam.org/node/80976","","Cookie Dough","","Reconnect The Port","","",""],["2","6:16 PM","🐦","Lost Bird","https://www.youtube.com/watch?v=ObwQpmF_F9Y&ab_channel=Camzoin","https://globalgamejam.org/2021/games/lost-bird-6","","Matcha ","","Be with the bois again!","","",""],["3","6:19 PM","🛹","Rolling On","https://www.youtube.com/watch?v=7oH1n3gsGlk","https://globalgamejam.org/2021/games/skate-or-cry-5","","Vanilla / Mint Choc Chip","","To find more memory because we ran out on Gameboy :(","","","GameBoyz"],["4","6:22 PM","","","","","","Spookies and Cream","","Kill all weebs","","",""],["5","6:25 PM","🤖","Ritsu & Mochi","https://youtu.be/4TgkPzFReYw","https://globalgamejam.org/2021/games/ritsu-mochi-9","","Classic Vanilla","","Finding schematics","","",""],["6","6:28 PM","🔥","The Fire Fiddler","https://youtu.be/i9SzhkeipKw","https://globalgamejam.org/2021/games/fire-fiddler-1","","Cookies and Cream","","Get back to playing Hollow Knight ","","",""],["7","6:31 PM","😻","Catnip Fever","https://www.youtube.com/watch?v=OFr8byHN-1w","https://globalgamejam.org/2021/games/catnip-fever-7","","any ben n jerry's","","","","",""],["8","6:34 PM","🍎","Found a Friend","https://www.youtube.com/watch?v=i4AgDL49i3Y","https://globalgamejam.org/2021/games/found-friend-0","","Cherry garcia?","","","","",""],["9","6:37 PM","🐟","Lost and Fishing","https://youtu.be/2eprtj_NYa4","https://globalgamejam.org/2021/games/lost-and-fishing-4","","🐟","🐟","🐟","","",""],["10","6:40 PM","🧟🏻‍♂️","Zombie Key","https://youtu.be/t0f1K7bXnko (includes narration; recommend 720p+ or will be too blurry to see characters)","https://globalgamejam.org/2021/games/zombie-key-7","","dairy free lol","","To seek the holy grail","","",""],["11","6:43 PM","🔑🔑","WHERE'S MY KEYS?!?!","https://youtu.be/pfZAmkshOXo","https://globalgamejam.org/2021/games/wheres-my-keys-2","","Sea Salt","","Find the keys, at all costs!","","","Team Bouldy"],["12","6:46 PM","🐕","GOLD RETRIEVER","https://www.youtube.com/watch?v=QbUtKPWhsYw","https://globalgamejam.org/2021/games/gold-retriever-6","","RockyRoad","","EAT 15 Green Slimes","","",""],["13","6:49 PM","⚔️","Weapon of Choice ","https://www.youtube.com/watch?v=6pynWX8fPZs","https://globalgamejam.org/2021/games/weapon-choice-5","","wasuuuuuuup?","","So far this is no choice -- but we have LAVA","","",""],["14","6:52 PM","🌼","Lost Flowers","https://youtu.be/8f3VIKEf6-0","https://globalgamejam.org/2021/games/blastin-7","","Mint Moose Tracks","","Collect the plants!","","",""],["15","6:55 PM","💦","Where's the drip?","https://www.youtube.com/watch?v=WqZY2hrHF1w&feature=youtu.be","https://globalgamejam.org/2021/games/wheres-drip-0","","🍦","","To find the drip 💦","","",""],["16","6:58 PM","🐰","Bunny Boomers","(75) Bunny Boomers (Gameplay Footage) - YouTube","Bunny Boomers | Global Game Jam Online","","Chocolate","","To seek the Holy Grail!","","",""],["17","7:01 PM","🐔","Farm Alarm!","https://youtu.be/YaiTHEp_jNA","https://globalgamejam.org/2021/games/farm-alarm-4","","Americone Dream","","Find all the animals that are lost!","","",""],["18","7:04 PM","✈️","Operation Tomagatchi","https://www.youtube.com/watch?v=6w0-qVjd9BA&feature=youtu.be","https://globalgamejam.org/2021/games/operation-tamagotchi-8","","","","Survive day 2!","","",""],["19","7:07","👥","Peer to Peer","https://youtu.be/CiCv7howUZc ","https://globalgamejam.org/2021/games/peer-peer-5","","Moose Tracks","","Find your friend and escape!","","",""],["20","710","📞","First Unheard Message","https://www.youtube.com/watch?v=1M9aqjvtX34","https://globalgamejam.org/2021/games/first-unheard-message-2","","Mango","","😩","","",""],["21","713","⁉️","Was it worth it?","https://youtu.be/IjpRRXrmczM","https://globalgamejam.org/2021/games/was-it-even-worth-it-3","","Ice Cream","","Anxiety","","",""],["22","716","🐉","Surfing Dino","","https://globalgamejam.org/2021/games/dino-plunder-lost-and-found-treasure-2","","","","Make more zergs","","","jacob?"],["23","719","🌛","Eternal Equinox","https://youtu.be/wl-8KMCUnts","https://globalgamejam.org/2021/games/eternal-equinox-5","","","","Restore Balance To The Cosmos!","","",""],["24","7:21 PM","🚀","Dark Space","https://youtu.be/Ai1kVO57ne0","https://globalgamejam.org/2021/games/dark-space-1","","Astronaut","","To figure out what's happening on this ship...","","",""],["25","724","📆","Lost Tomorrow","https://youtu.be/RW1OTtklcuo","https://globalgamejam.org/2021/games/lost-tomorrow-9","","Rocky Road","","To seek the Holy Grail","","",""],["26","727","👸","sword of life","https://youtu.be/dNsKIPjMjhI","https://globalgamejam.org/2021/games/sword-life-2","","Cookies and Cream","","Come out with pride","","",""],["27","730","🚀💾","Star Rescue","https://www.youtube.com/watch?v=PhTaS2q-hfo","https://globalgamejam.org/2021/games/star-rescue-3","","Vanilla","","","","",""],["28","733","🔭","Tale Of Two Portals","https://www.youtube.com/watch?v=xwM7fpL89es","https://globalgamejam.org/2021/games/tale-two-portals-6","","","","Oculus","","",""],["29","736","🌈","Totally Gay Awesome Rescue Game","e","https://globalgamejam.org/2021/games/totally-gay-awesome-rescue-game-0","G","Chocolate Chip","","Happiness and warmth~","","","Girl Power"],["30","739","👻","The In-Between","https://youtu.be/G1zkjC4tAXg","https://globalgamejam.org/2021/games/between-1","","Double Chocolate Fudge Brownie","","To find the pieces that make you who you are.","","","OddBoss"],["31","742","👾","OoboloO","https://www.youtube.com/watch?v=qNUtp4FSwaY&ab_channel=LeviLindsey","https://globalgamejam.org/2021/games/ooboloo-2","","","","","","",""],["32","745","🐳","The Whale's Song","https://youtu.be/zsI2mAtTQck","https://globalgamejam.org/2021/games/whales-song-2","","","","","","",""],["33","748","👁️","Clairvoyance","https://youtu.be/M7l50FHmwDw","https://globalgamejam.org/2021/games/clairvoyance-8","","Chocolate chip cookie dough","","I seek the holy grail","","",""],["34","752","📿","The Lost Necklace","https://youtu.be/pRgOnCsv5E4","https://globalgamejam.org/2021/games/thelostnecklace-9","","Vanilla","","Get to level 30 in PixArk","","",""],["35","755","💤","Somnolence","https://youtu.be/aSpLzS34Pa4","https://globalgamejam.org/2021/games/somnolence-6","","Cookie Dough","","Just tryin to get a little more sleep","","",""],["36","758","🤖","L&F Droid","https://www.youtube.com/watch?v=9zveTiLE8nY","https://globalgamejam.org/2021/games/lf-droid-0","","","","Get some sleep after all of this","","",""],["37","801","🤖😼","Xip and Xander","https://www.youtube.com/watch?v=U2OWgsFXD8E&feature=youtu.be&ab_channel=CaitlinBurt","https://globalgamejam.org/2021/games/xip-and-xander-5","","","","","","",""],["39","8:07 PM","🌊","Treacherous Waters","https://youtu.be/d9QHs2Tb6d8","https://globalgamejam.org/2021/games/treacherous-waters-6","","Mint Chocolate Ship","","Grow your ship, find other players, bully them ","","",""],["40","810","🏰","TwitchTD","https://www.youtube.com/watch?v=6hGmx-NJON8","https://globalgamejam.org/2021/games/twitchtd-4","","Spookies and Cream","","Kill all weebs","","",""],["41","813","🩳","Gym Shorts Grave Robber","https://youtu.be/UoFHV-E-Cic","https://globalgamejam.org/2021/games/gym-shorts-grave-robber-3","","Moosetracks","","Play as a Grave Robber who is on the Hunt for Gym Shorts that give Magical Bonus and also the coins in the graves. Watch out for the Ghosts as you disturb Graves. Leave the graveyard alive to claim your loot or perish.","","",""],["42","816","🦉🦉🦉","Lost Puppy Wanted","https://youtu.be/OWeO8AjxDj4","https://globalgamejam.org/2021/games/lost-puppy-wanted-9","","Cookies n Cream","","Find a lost puppy, make a granny happy today","","",""],["43","819","🏝️","Message in a Bottle","https://www.youtube.com/watch?v=lGIZWDnu4F8&feature=youtu.be","https://globalgamejam.org/2021/games/message-bottle-5","","Vanilla","","figuring it out as i go along","","","Jose"],["44","821","🍆","Lust and Found","https://www.youtube.com/watch?v=zUFpaCS_eLg","https://globalgamejam.org/2021/games/lust-and-found-7","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","Defeat 5 Green Slimes","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],["AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","AS OF 8PM PST, THIS SPREADSHEET IS NOW CLOSED","","","","","","",""],[""]]

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(11);

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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.Mount {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  position: absolute;\n  background-color: #111;\n}\n.Frame {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  margin: auto;\n  position: fixed;\n  overflow: hidden;\n  color: #F4F8F0;\n  width: 16em;\n  height: 9em;\n  background-image: linear-gradient(135deg, #2F243A, #444054);\n}\n.TitleScreen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.VideoScreen {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n}\n.VideoScreen iframe {\n  width: 16em;\n  height: 9em;\n}\n.EndScreen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0.5em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 12 */
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