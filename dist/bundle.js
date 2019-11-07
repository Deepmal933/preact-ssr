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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./preact/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return H; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return M; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toChildArray\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_unmount\", function() { return A; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return n; });\nvar n,l,u,i,t,o,f,r={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t,o,f,r=arguments;if(l=s({},l),arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(r[i]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===l[t]&&(l[t]=n.defaultProps[t]);return f=l.key,null!=(o=l.ref)&&delete l.ref,null!=f&&delete l.key,v(n,l,f,o)}function v(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__p:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function d(n){return n.children}function y(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__p?m(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return\"function\"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&(t=n.debounceRendering,(n.debounceRendering||i)(k))}function k(){var n,l,i,t,o,f,r;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,f=(o=(l=n).__v).__e,(r=l.__P)&&(i=[],t=T(r,o,s({},o),l.__n,void 0!==r.ownerSVGElement,null,i,null==f?m(o):f),$(i,o),t!=f&&w(o)))}function _(n,l,u,i,t,o,f,c,s){var h,v,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==r&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(d=T(n,u,p=p||r,i,t,o,f,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==w&&(w=d),null!=u.__d)d=u.__d,u.__d=null;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d);else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==d)break n;n.insertBefore(d,c)}\"option\"==l.type&&(n.value=\"\")}c=d.nextSibling,\"function\"==typeof l.type&&(l.__d=d)}}return h++,u}),l.__e=w,null!=o&&\"function\"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||\"boolean\"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l(\"string\"==typeof n||\"number\"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||P(n,o,null,u[o],i);for(o in l)t&&\"function\"!=typeof l[o]||\"value\"===o||\"checked\"===o||u[o]===l[o]||P(n,o,l[o],u[o],i)}function C(n,l,u){\"-\"===l[0]?n.setProperty(l,u):n[l]=\"number\"==typeof u&&!1===c.test(l)?u+\"px\":null==u?\"\":u}function P(n,l,u,i,t){var o,f,r,e,c;if(\"key\"===(l=t?\"className\"===l?\"class\":l:\"class\"===l?\"className\":l)||\"children\"===l);else if(\"style\"===l)if(o=n.style,\"string\"==typeof u)o.cssText=u;else{if(\"string\"==typeof i&&(o.cssText=\"\",i=null),i)for(f in i)u&&f in u||C(o,f,\"\");if(u)for(r in u)i&&u[r]===i[r]||C(o,r,u[r])}else\"o\"===l[0]&&\"n\"===l[1]?(e=l!==(l=l.replace(/Capture$/,\"\")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):\"list\"!==l&&\"tagName\"!==l&&\"form\"!==l&&!t&&l in n?n[l]=null==u?\"\":u:\"function\"!=typeof u&&\"dangerouslySetInnerHTML\"!==l&&(l!==(l=l.replace(/^xlink:?/,\"\"))?null==u||!1===u?n.removeAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase()):n.setAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,i,t,o,f,r,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if(\"function\"==typeof P){if(k=u.props,x=(a=P.contextType)&&t[a.__c],C=a?x?x.props.value:a.__p:t,i.__c?g=(h=u.__c=i.__c).__p=h.__E:(\"prototype\"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new y(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&s(h.__s==h.state?h.__s=s({},h.__s):h.__s,P.getDerivedStateFromProps(k,h.__s)),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==h.__e&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=i.__e,u.__k=i.__k,a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__p=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==d&&null==a.key?a.props.children:a),null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,f,r,e,c),h.base=u.__e,h.__h.length&&r.push(h),g&&(h.__E=h.__p=null),h.__e=null}else u.__e=j(i.__e,u,i,t,o,f,r,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,f,c){var s,a,h,v,p,d=u.props,y=l.props;if(t=\"svg\"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=t?document.createElementNS(\"http://www.w3.org/2000/svg\",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&(n.data=y);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(d=u.props||r).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,!c){if(d===r)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||\"\"))}x(n,y,d,t,c),l.__k=l.props.children,v||_(n,l,u,i,\"foreignObject\"!==l.type&&t,o,f,r,c),c||(\"value\"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?\"\":y.value),\"checked\"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))}return n}function z(l,u,i){try{\"function\"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,f;if(n.unmount&&n.unmount(l),(t=l.ref)&&z(t,null,u),i||\"function\"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=null,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(f=0;f<t.length;f++)t[f]&&A(t[f],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,f,c;n.__p&&n.__p(l,u),f=(t=i===o)?null:i&&i.__k||u.__k,l=h(d,null,[l]),c=[],T(u,(t?u:i||u).__k=l,f||r,r,void 0!==u.ownerSVGElement,i&&!t?[i]:f?null:e.slice.call(u.childNodes),c,i||r,t),$(c,l)}function I(n,l){H(n,l,o)}function L(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function M(n){var l={},u={__c:\"__cC\"+f++,__p:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));(\"function\"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},y.prototype.render=d,u=[],i=\"function\"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,t=n.debounceRendering,n.__e=function(n,l,u){for(var i;l=l.__p;)if((i=l.__c)&&!i.__p)try{if(i.constructor&&null!=i.constructor.getDerivedStateFromError)i.setState(i.constructor.getDerivedStateFromError(n));else{if(null==i.componentDidCatch)continue;i.componentDidCatch(n)}return g(i.__E=i)}catch(l){n=l}throw n},o=r,f=0;\n//# sourceMappingURL=preact.module.js.map\n\n\n//# sourceURL=webpack:///./node_modules/preact/dist/preact.module.js?");

/***/ }),

/***/ "./preact/client.js":
/*!**************************!*\
  !*** ./preact/client.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app */ \"./preact/components/app.js\");\n\n\nObject(preact__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_components_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), document.body, document.getElementById('app'));\n\n//# sourceURL=webpack:///./preact/client.js?");

/***/ }),

/***/ "./preact/components/app.js":
/*!**********************************!*\
  !*** ./preact/components/app.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n\n\nvar App = function App() {\n  return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n    \"class\": \"app\",\n    id: \"app\"\n  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"p\", null, \"\\uD83D\\uDC4BHi, There\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./preact/components/app.js?");

/***/ })

/******/ });