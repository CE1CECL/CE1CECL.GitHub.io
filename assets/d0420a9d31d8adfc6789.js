(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[3474],{57605:(e,t,r)=>{var n={"./bg.png":7532,"./cs.png":85992,"./da.png":66618,"./de.png":19256,"./el.png":83665,"./en-GB.png":39809,"./en-US.png":17038,"./es-ES.png":45324,"./fi.png":96646,"./fr.png":33023,"./hi.png":49513,"./hr.png":20401,"./hu.png":57005,"./it.png":68306,"./ja.png":67146,"./ko.png":35685,"./lt.png":6993,"./nl.png":72595,"./no.png":22956,"./pl.png":92430,"./pt-BR.png":60141,"./ro.png":46036,"./ru.png":79027,"./sv-SE.png":90276,"./th.png":58015,"./tr.png":14821,"./uk.png":7635,"./vi.png":36718,"./zh-CN.png":86588,"./zh-TW.png":41367};function o(e){var t=l(e);return r(t)}function l(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}return n[e]}o.keys=function(){return Object.keys(n)};o.resolve=l;e.exports=o;o.id=57605},31055:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0
;var n=f(r(67294)),o=u(r(94184)),l=f(r(34704)),a=u(r(49839)),i=["className"];function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(n,l,a):n[l]=e[l]}n.default=e;r&&r.set(e,n);return n}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return d.apply(this,arguments)}function s(e,t){s=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e}
;return s(e,t)}var p=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;s(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++){r=l[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,i);return n.createElement(l.default,d({},r,{className:(0,o.default)(a.default.formStatusAlert,t)}))};return t}(n.Component);t.default=p;p.displayName="FormStatusAlert";p.Types=l.AlertTypes},39855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.withLocalizedFormProvider=t.withLocalizedFormConsumer=t.LocalizedFieldProvider=void 0;var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(n,l,a):n[l]=e[l]}n.default=e;r&&r.set(e,n);return n}(r(67294)),l=r(67350),a=r(70348);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var c in l)void 0===t[c]&&(t[c]=l[c]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}
;return c.apply(this,arguments)}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var d=o.createContext({activeLocale:a.DEFAULT_LOCALE_KEY,fieldKey:0,setActiveLocale:a.NOOP,getFieldValue:a.NOOP,getLocalizedFieldValues:a.NOOP,setFieldValue:a.NOOP,setLocalizedFieldValues:a.NOOP}),s=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(t){var r;(r=e.call(this,t)||this).fieldValues={};r.getFieldValue=function(e){var t=r.state.activeLocale;return(0,l.getFieldValue)(e,r.fieldValues,t)};r.getLocalizedFieldValues=function(e){return null==e?null:(0,l.removeEmptyFields)(r.fieldValues[e])};r.setActiveLocale=function(e){r.setState((function(t){return{activeLocale:e,fieldKey:t.fieldKey+1}}))};r.setFieldValue=function(e,t,n,o){var a;void 0===n&&(n=!1);var i=r.state.activeLocale;r.fieldValues=c({},r.fieldValues,((a={})[e]=(0,l.getPatchedLocalizedFieldValues)(e,t,i,r.fieldValues[e]),a))
;n&&r.setState((function(e){return{fieldKey:e.fieldKey+1}}),o)};r.setLocalizedFieldValues=function(e,t){var n,o,l=t[a.DEFAULT_LOCALE_KEY];r.fieldValues=c({},r.fieldValues,((o={})[e]=c({},t,((n={})[a.DEFAULT_LOCALE_KEY]=" "===l?"":l,n)),o));r.setState((function(e){return{fieldKey:e.fieldKey+1}}))};r.state={activeLocale:a.DEFAULT_LOCALE_KEY,fieldKey:0,getFieldValue:r.getFieldValue,getLocalizedFieldValues:r.getLocalizedFieldValues,setActiveLocale:r.setActiveLocale,setFieldValue:r.setFieldValue,setLocalizedFieldValues:r.setLocalizedFieldValues};return r}t.prototype.render=function(){return u(d.Provider,{value:this.state},void 0,this.props.children)};return t}(o.Component);t.LocalizedFieldProvider=s;s.displayName="LocalizedFieldProvider";var p=function(e){return o.forwardRef((function(t,r){return u(d.Consumer,{},void 0,(function(n){var l=n.activeLocale,a=n.fieldKey,i=n.getFieldValue,u=n.getLocalizedFieldValues,f=n.setActiveLocale,d=n.setFieldValue,s=n.setLocalizedFieldValues
;return o.createElement(e,c({},t,{ref:r,activeLocale:l,fieldKey:a,getFieldValue:i,getLocalizedFieldValues:u,setActiveLocale:f,setFieldValue:d,setLocalizedFieldValues:s}))}))}))};t.withLocalizedFormConsumer=p;p.injectedProps=["activeLocale","fieldKey","getFieldValue","getLocalizedFieldValues","setActiveLocale","setFieldValue","setLocalizedFieldValues"];t.withLocalizedFormProvider=function(e){return function(t){return u(s,{},void 0,o.createElement(e,t))}}},88785:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=p(r(67294)),l=d(r(30250)),a=d(r(74257)),i=r(39855),u=r(70348),c=p(r(34596)),f=d(r(81529));function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e)
;var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(n,l,a):n[l]=e[l]}n.default=e;r&&r.set(e,n);return n}function v(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var c in l)void 0===t[c]&&(t[c]=l[c]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}var g=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;y(e,t)}(t,e);function t(){
for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).handleLocaleSelection=function(e){t.props.setActiveLocale(e.value)};return t}var n=t.prototype;n.getLocaleOptions=function(){return[{name:c.Messages.Locale.DEFAULT_I18N_GROUP_LABEL,value:u.DEFAULT_LOCALE_KEY}].concat(c.default.getLanguages().filter((function(e){return e.enabled})).map((function(e){return{name:e.englishName,value:e.code}})))};n.renderOption=function(e){if(e.value===u.DEFAULT_LOCALE_KEY)return e.name;var t;try{var n=r(57605)("./"+e.value+".png");t=v("img",{className:f.default.flagImage,src:n,alt:e.name})}catch(e){}return v(l.default,{align:l.default.Align.CENTER},void 0,v(l.default.Child,{grow:0,shrink:1},void 0,e.name),null!=t&&v(l.default.Child,{className:f.default.flagImageWrapper,grow:0,shrink:0},void 0,t))};n.render=function(){var e=this.props.activeLocale;return v(a.default,{value:e,clearable:!1,searchable:!1,options:this.getLocaleOptions(),
optionRenderer:this.renderOption,valueRenderer:this.renderOption,onChange:this.handleLocaleSelection})};return t}(o.Component);g.displayName="LocalizedLocalePicker";var L=(0,i.withLocalizedFormConsumer)(g);t.default=L},92705:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(n,l,a):n[l]=e[l]}n.default=e;r&&r.set(e,n);return n}(r(67294)),o=i(r(57557)),l=i(r(79950)),a=r(39855);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}
function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return c.apply(this,arguments)}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var d=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).handleFieldChange=function(e,r,n){var o=t.props,l=o.name,a=o.onChange;(0,o.setFieldValue)(l,e);null!=a&&a(e,l,n)};return t}t.prototype.render=function(){var e,t=this.props,r=t.fieldKey,i=t.getFieldValue,u=t.name,f=(0,o.default)(this.props,a.withLocalizedFormConsumer.injectedProps);return n.createElement(l.default,c({},f,{defaultValue:null!==(e=i(u))&&void 0!==e?e:"",key:r,name:u,onChange:this.handleFieldChange}))};return t}(n.Component)
;d.displayName="LocalizedTextInput";var s=(0,a.withLocalizedFormConsumer)(d);t.default=s},67350:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.removeEmptyFields=t.getPatchedLocalizedFieldValues=t.getFieldValue=void 0;var n=r(70348);function o(){o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return o.apply(this,arguments)}t.getFieldValue=function(e,t,r){return null==e||null==t[e]?null:r===n.DEFAULT_LOCALE_KEY?t[e][n.DEFAULT_LOCALE_KEY]:null!=t[e].localizations?t[e].localizations[r]:null};t.getPatchedLocalizedFieldValues=function(e,t,r,l){var a=o({},l);if(r===n.DEFAULT_LOCALE_KEY)a[n.DEFAULT_LOCALE_KEY]=t;else{null==a.localizations&&(a.localizations={});a.localizations[r]=t}return a};t.removeEmptyFields=function(e){if(null==e)return null;var t={},r=e.localizations
;null!=e[n.DEFAULT_LOCALE_KEY]&&""!==e[n.DEFAULT_LOCALE_KEY]&&(t[n.DEFAULT_LOCALE_KEY]=e[n.DEFAULT_LOCALE_KEY]);if(null!=r)for(var o in r)if(null!=r[o]&&""!==r[o]){null==t.localizations&&(t.localizations={});t.localizations[o]=r[o]}return Object.keys(t).length>0?t:null}}}]);
//# sourceMappingURL=d0420a9d31d8adfc6789.js.map