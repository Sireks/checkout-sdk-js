(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{createHostedFormService:()=>J});const n=require("lodash"),r=function(t){var e=this,n=new Promise((function(t,n){e.cancel=n}));this.promise=Promise.race([t,n])};var o,i=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});const a=function(t){function e(e){var n,r,o=this.constructor,i=t.call(this,e||"An unexpected error has occurred.")||this;return i.name="StandardError",i.type="standard",n=i,r=o.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(i,o):i.stack=new Error(i.message).stack,i}return i(e,t),e}(Error);var s=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const c=function(t){function e(e){var n=t.call(this,e||"Unable to proceed because the required element is unexpectedly detached from the page.")||this;return n.name="UnexpectedDetachmentError",n.type="unexpected_detachment",n}return s(e,t),e}(a);const u=function(){function t(t){this._mutationObserver=t}return t.prototype.ensurePresence=function(t,e){return n=this,o=void 0,a=function(){var n,o,i,a;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(s){switch(s.label){case 0:n=new r(e),(o=this._mutationObserver.create((function(e){e.forEach((function(e){0!==Array.from(e.removedNodes).filter((function(e){return t.some((function(t){return e===t||e.contains(t)}))})).length&&n.cancel(new c)}))}))).observe(document.body,{childList:!0,subtree:!0}),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,n.promise];case 2:return i=s.sent(),o.disconnect(),[2,i];case 3:throw a=s.sent(),o.disconnect(),a;case 4:return[2]}}))},new((i=void 0)||(i=Promise))((function(t,e){function r(t){try{c(a.next(t))}catch(t){e(t)}}function s(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}c((a=a.apply(n,o||[])).next())}));var n,o,i,a},t}();var l=function(){function t(t){void 0===t&&(t=window),this._window=t}return t.prototype.create=function(t){return new this._window.MutationObserver(t)},t}();const p=require("rxjs"),f=require("rxjs/operators");var h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const d=function(t){function e(e){var n=t.call(this,e||"Invalid arguments have been provided.")||this;return n.name="InvalidArgumentError",n.type="invalid_argument",n}return h(e,t),e}(a);function y(t){if(!/^(https?:)?\/\//.test(t))throw new d("The provided URL must be absolute.");var e=document.createElement("a");e.href=t;var n=e.port&&-1!==t.indexOf("".concat(e.hostname,":").concat(e.port))?e.port:"";return{hash:e.hash,hostname:e.hostname,href:e.href,origin:"".concat(e.protocol,"//").concat(e.hostname).concat(n?":".concat(n):""),pathname:e.pathname,port:n,protocol:e.protocol,search:e.search}}function _(t,e){return t.type===e}var v=function(){return v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},v.apply(this,arguments)};const b=function(){function t(t,e,n){this._targetWindow=e,this._context=n,this._targetOrigin="*"===t?"*":y(t).origin}return t.prototype.post=function(t,e){var n=this,r=this._targetWindow;if(window!==r){if(!r)throw new Error("Unable to post message because target window is not set.");var o=e&&(0,p.fromEvent)(window,"message").pipe((0,f.filter)((function(t){return t.origin===n._targetOrigin&&_(t.data,t.data.type)&&-1!==[e.successType,e.errorType].indexOf(t.data.type)})),(0,f.map)((function(t){if(e.errorType===t.data.type)throw t.data;return t.data})),(0,f.take)(1)).toPromise();return r.postMessage(v(v({},t),{context:this._context}),this._targetOrigin),o}},t.prototype.setTarget=function(t){this._targetWindow=t},t.prototype.setContext=function(t){this._context=t},t}();var m=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),w=function(){return w=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},w.apply(this,arguments)};const O=function(t,e,n){return e&&n?g(0,e,n):function(t){var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return m(e,t),e}(t);return Object.getOwnPropertyNames(t.prototype).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t.prototype,n);r&&"constructor"!==n&&Object.defineProperty(e.prototype,n,g(t.prototype,n,r))})),e}(t)};function g(t,e,n){if("function"!=typeof n.value)return n;var r=n.value;return{get:function(){var t=r.bind(this);return Object.defineProperty(this,e,w(w({},n),{value:t})),t},set:function(t){r=t}}}const E=function(){function t(t){var e;this._sourceOrigins=[y(t).origin,(e=y(t),y(0===e.hostname.indexOf("www")?e.href:e.href.replace(e.hostname,"www.".concat(e.hostname)))).origin],this._isListening=!1,this._listeners={}}return t.prototype.listen=function(){this._isListening||(this._isListening=!0,window.addEventListener("message",this._handleMessage))},t.prototype.stopListen=function(){this._isListening&&(this._isListening=!1,window.removeEventListener("message",this._handleMessage))},t.prototype.addListener=function(t,e){var n=this._listeners[t];n||(this._listeners[t]=n=[]),-1===n.indexOf(e)&&n.push(e)},t.prototype.removeListener=function(t,e){var n=this._listeners[t];if(n){var r=n.indexOf(e);r>=0&&n.splice(r,1)}},t.prototype.trigger=function(t,e){var n=this._listeners[t.type];n&&n.forEach((function(n){return e?n(t,e):n(t)}))},t.prototype._handleMessage=function(t){if(-1!==this._sourceOrigins.indexOf(t.origin)&&_(t.data,t.data.type)){var e=t.data,n=e.context,r=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(e,["context"]);this.trigger(r,n)}},function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);i>3&&a&&Object.defineProperty(e,n,a)}([O],t.prototype,"_handleMessage",null),t}();var T=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S={body:{},headers:{},status:0};const P=function(t){function e(e,n){var r=void 0===n?{}:n,o=r.message,i=r.errors,a=this,s=e||S,c=s.body,u=s.headers,l=s.status;return(a=t.call(this,o||"An unexpected error has occurred.")||this).name="RequestError",a.type="request",a.body=c,a.headers=u,a.status=l,a.errors=i||[],a}return T(e,t),e}(a);var I=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};function D(t){if(Array.isArray(t))return t.reduce((function(t,e){return e&&e.message?I(I([],t,!0),[e.message],!1):t}),[]).join(" ")}var F=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const A=function(t){function e(e){var n=t.call(this,e||"Unable to proceed due to invalid configuration provided for the hosted payment form.")||this;return n.name="InvalidHostedFormConfigError",n.type="invalid_hosted_form_config",n}return F(e,t),e}(a);var C=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const j=function(t){function e(e){var n=t.call(this,e||"Unable to proceed due to an unknown error with the hosted payment form.")||this;return n.name="InvalidHostedFormError",n.type="invalid_hosted_form",n}return C(e,t),e}(a);var x=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const L=function(t){function e(e){var r=t.call(this,function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}(["Unable to proceed due to invalid user input values"],(0,n.flatMap)((0,n.values)(e),(function(t){return(0,n.map)(t,(function(t){return t.message}))})),!0).join(". "))||this;return r.errors=e,r.name="InvalidHostedFormValueError",r.type="invalid_hosted_form_value",r}return x(e,t),e}(a);var U,N;!function(t){t.AttachRequested="HOSTED_FIELD:ATTACH_REQUESTED",t.SubmitRequested="HOSTED_FIELD:SUBMITTED_REQUESTED",t.SubmitManualOrderRequested="HOSTED_FIELD:SUBMIT_MANUAL_ORDER_REQUESTED",t.ValidateRequested="HOSTED_FIELD:VALIDATE_REQUESTED"}(U||(U={})),function(t){t.AttachSucceeded="HOSTED_INPUT:ATTACH_SUCCEEDED",t.AttachFailed="HOSTED_INPUT:ATTACH_FAILED",t.BinChanged="HOSTED_INPUT:BIN_CHANGED",t.Blurred="HOSTED_INPUT:BLURRED",t.Changed="HOSTED_INPUT:CHANGED",t.CardTypeChanged="HOSTED_INPUT:CARD_TYPE_CHANGED",t.Entered="HOSTED_INPUT:ENTERED",t.Focused="HOSTED_INPUT:FOCUSED",t.SubmitSucceeded="HOSTED_INPUT:SUBMIT_SUCCEEDED",t.SubmitFailed="HOSTED_INPUT:SUBMIT_FAILED",t.SubmitManualOrderSucceeded="HOSTED_INPUT:SUBMIT_MANUAL_ORDER_SUCCEEDED",t.SubmitManualOrderFailed="HOSTED_INPUT:SUBMIT_MANUAL_ORDER_FAILED",t.Validated="HOSTED_INPUT:VALIDATED",t.StoredCardSucceeded="HOSTED_INPUT:STORED_CARD_SUCCEEDED",t.StoredCardFailed="HOSTED_INPUT:STORED_CARD_FAILED"}(N||(N={}));var k=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},M=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const H=function(){function t(t,e,n,r,o,i,a,s,c){this._type=t,this._containerId=e,this._orderId=n,this._placeholder=r,this._accessibilityLabel=o,this._styles=i,this._eventPoster=a,this._eventListener=s,this._detachmentObserver=c,this._iframe=document.createElement("iframe"),this._iframe.src="/admin/payments/".concat(this._orderId,"/hosted-form-field?version=").concat("1.675.0"),this._iframe.style.border="none",this._iframe.style.height="100%",this._iframe.style.overflow="hidden",this._iframe.style.width="100%"}return t.prototype.getType=function(){return this._type},t.prototype.attach=function(){return k(this,void 0,void 0,(function(){var t,e,n=this;return M(this,(function(r){switch(r.label){case 0:if(!(t=document.getElementById(this._containerId)))throw new A("Unable to proceed because the provided container ID is not valid.");return t.appendChild(this._iframe),this._eventListener.listen(),e=(0,p.fromEvent)(this._iframe,"load").pipe((0,f.switchMap)((function(t){var e=t.target;return k(n,void 0,void 0,(function(){var t;return M(this,(function(n){switch(n.label){case 0:if(!(t=e&&e.contentWindow))throw new Error("The content window of the iframe cannot be accessed.");return this._eventPoster.setTarget(t),[4,this._eventPoster.post({type:U.AttachRequested,payload:{accessibilityLabel:this._accessibilityLabel,fontUrls:this._getFontUrls(),placeholder:this._placeholder,styles:this._styles,origin:document.location.origin,type:this._type}},{successType:N.AttachSucceeded,errorType:N.AttachFailed})];case 1:return n.sent(),[2]}}))}))})),(0,f.take)(1)).toPromise(),[4,this._detachmentObserver.ensurePresence([this._iframe],e)];case 1:return r.sent(),[2]}}))}))},t.prototype.detach=function(){this._iframe.parentElement&&(this._iframe.parentElement.removeChild(this._iframe),this._eventListener.stopListen())},t.prototype.submitForm=function(t,e){return k(this,void 0,void 0,(function(){var n,r;return M(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=this._eventPoster.post({type:U.SubmitRequested,payload:{fields:t,data:e}},{successType:N.SubmitSucceeded,errorType:N.SubmitFailed}),[4,this._detachmentObserver.ensurePresence([this._iframe],n)];case 1:return[2,o.sent()];case 2:if(r=o.sent(),this._isSubmitErrorEvent(r)){if("hosted_form_error"===r.payload.error.code)throw new j(r.payload.error.message);if(r.payload.response)throw function(t){var e=t.body.errors,n=void 0===e?[]:e;return new P(t,{message:D(n)||void 0,errors:n})}(r.payload.response);throw new Error(r.payload.error.message)}throw r;case 3:return[2]}}))}))},t.prototype.submitManualOrderForm=function(t){return k(this,void 0,void 0,(function(){var e,n;return M(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e=this._eventPoster.post({type:U.SubmitManualOrderRequested,payload:{data:t}},{successType:N.SubmitManualOrderSucceeded,errorType:N.SubmitManualOrderFailed}),[4,this._detachmentObserver.ensurePresence([this._iframe],e)];case 1:return[2,r.sent()];case 2:if(n=r.sent(),this._isSubmitManualOrderErrorEvent(n)){if("hosted_form_error"===n.payload.error.code)throw new j(n.payload.error.message);if(n.payload.error.message)throw new Error(n.payload.error.message);throw new Error(n.payload.error.code)}throw n;case 3:return[2]}}))}))},t.prototype.validateForm=function(){return k(this,void 0,void 0,(function(){var t,e;return M(this,(function(n){switch(n.label){case 0:return t=this._eventPoster.post({type:U.ValidateRequested},{successType:N.Validated}),[4,this._detachmentObserver.ensurePresence([this._iframe],t)];case 1:if(!(e=n.sent().payload).isValid)throw new L(e.errors);return[2]}}))}))},t.prototype._getFontUrls=function(){var t=this,e="fonts.googleapis.com",r=document.querySelectorAll("link[href*='".concat(e,"'][rel='stylesheet']"));return Array.prototype.slice.call(r).filter((function(t){return y(t.href).hostname===e})).filter((function(e){return(0,n.values)(t._styles).map((function(t){return t&&t.fontFamily})).filter((function(t){return"string"==typeof t})).some((function(t){return t.split(/,\s/).some((function(t){return-1!==e.href.indexOf(t.replace(" ","+"))}))}))})).map((function(t){return t.href}))},t.prototype._isSubmitManualOrderErrorEvent=function(t){return t instanceof Object&&null!==t&&"type"in t&&t.type===N.SubmitManualOrderFailed},t.prototype._isSubmitErrorEvent=function(t){return t.type===N.SubmitFailed},t}();var R=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},z=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const B=function(){function t(t,e,r){var o=this;this._fields=t,this._eventListener=e,this._eventCallbacks=r,this._handleEnter=function(t){var e=t.payload;return R(o,void 0,void 0,(function(){var t,r;return z(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.validate()];case 1:return o.sent(),[3,3];case 2:if((t=o.sent())instanceof Error&&"InvalidHostedFormValueError"!==t.name)throw t;return[3,3];case 3:return(void 0===(r=this._eventCallbacks.onEnter)?n.noop:r)(e),[2]}}))}))};var i=this._eventCallbacks,a=i.onBlur,s=void 0===a?n.noop:a,c=i.onCardTypeChange,u=void 0===c?n.noop:c,l=i.onFocus,p=void 0===l?n.noop:l,f=i.onValidate,h=void 0===f?n.noop:f;this._eventListener.addListener(N.Blurred,(function(t){var e=t.payload;return s(e)})),this._eventListener.addListener(N.CardTypeChanged,(function(t){var e=t.payload;return u(e)})),this._eventListener.addListener(N.Focused,(function(t){var e=t.payload;return p(e)})),this._eventListener.addListener(N.Validated,(function(t){var e=t.payload;return h(e)})),this._eventListener.addListener(N.Entered,this._handleEnter),this._eventListener.addListener(N.CardTypeChanged,(function(t){var e=t.payload;return o._cardType=e.cardType})),this._eventListener.addListener(N.BinChanged,(function(t){var e=t.payload;return o._bin=e.bin}))}return t.prototype.getBin=function(){return this._bin},t.prototype.getCardType=function(){return this._cardType},t.prototype.attach=function(){return R(this,void 0,void 0,(function(){var t,e;return z(this,(function(r){switch(r.label){case 0:return this._eventListener.listen(),t=this._getFirstField(),e=(0,n.without)(this._fields,t),[4,t.attach()];case 1:return r.sent(),[4,Promise.all(e.map((function(t){return t.attach()})))];case 2:return r.sent(),[2]}}))}))},t.prototype.detach=function(){this._eventListener.stopListen(),this._fields.forEach((function(t){t.detach()}))},t.prototype.submitManualOrderPayment=function(t){return R(this,void 0,void 0,(function(){return z(this,(function(e){return[2,this._getFirstField().submitManualOrderForm(t.data)]}))}))},t.prototype.submit=function(t,e,n,r){return R(this,void 0,void 0,(function(){var o,i;return z(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,7]),[4,this._getFirstField().submitForm(this._fields.map((function(t){return t.getType()})),n.transform(t,r))];case 1:case 6:return[2,a.sent()];case 2:return o=a.sent(),i=void 0,o instanceof Error||"string"==typeof o?[4,e.handlePaymentHumanVerification(o)]:[3,4];case 3:return i=a.sent(),[3,5];case 4:throw new Error("Unexpected error type");case 5:return[4,this._getFirstField().submitForm(this._fields.map((function(t){return t.getType()})),n.transform(t,i))];case 7:return[2]}}))}))},t.prototype.validate=function(){return R(this,void 0,void 0,(function(){return z(this,(function(t){return[2,this._getFirstField().validateForm()]}))}))},t.prototype._getFirstField=function(){var t=this._fields[0];if(!t)throw new A("Unable to proceed because the payment form has no field defined.");return t},t}();var q=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};const V=function(){function t(){}return t.prototype.create=function(t,e){var r=Object.keys(e.fields).reduce((function(n,r){var o=e.fields[r];return o?q(q([],n,!0),[new H(r,o.containerId,e.orderId,o.placeholder||"",o.accessibilityLabel||"",e.styles||{},new b(t),new E(t),new u(new l))],!1):n}),[]);return new B(r,new E(t),(0,n.pick)(e,"onBlur","onEnter","onFocus","onCardTypeChange","onValidate"))},t}();var G,Q=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(t){t[t.CheckoutButtonNotInitialized=0]="CheckoutButtonNotInitialized",t[t.CustomerNotInitialized=1]="CustomerNotInitialized",t[t.PaymentNotInitialized=2]="PaymentNotInitialized",t[t.ShippingNotInitialized=3]="ShippingNotInitialized",t[t.SpamProtectionNotInitialized=4]="SpamProtectionNotInitialized"}(G||(G={}));const W=function(t){function e(e){var n=t.call(this,function(t){switch(t){case G.CustomerNotInitialized:return"Unable to proceed because the customer step of checkout has not been initialized.";case G.PaymentNotInitialized:return"Unable to proceed because the payment step of checkout has not been initialized.";case G.ShippingNotInitialized:return"Unable to proceed because the shipping step of checkout has not been initialized.";case G.SpamProtectionNotInitialized:return"Unable to proceed because the checkout spam protection has not been initialized.";default:return"Unable to proceed because the required component has not been initialized."}}(e))||this;return n.subtype=e,n.name="NotInitializedError",n.type="not_initialized",n}return Q(e,t),e}(a);const Y=function(){function t(t,e){this._host=t,this._hostedFormFactory=e}return t.prototype.initialize=function(t){var e=this,n=this._hostedFormFactory.create(this._host,t);return n.attach().then((function(){e._hostedForm=n}))},t.prototype.deinitialize=function(){this._hostedForm&&(this._hostedForm.detach(),this._hostedForm=void 0)},t.prototype.submitManualOrderPayment=function(t){return e=this,n=void 0,o=function(){var e;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){switch(n.label){case 0:if(!(e=this._hostedForm))throw new W(G.PaymentNotInitialized);return[4,e.validate()];case 1:return n.sent(),[4,e.submitManualOrderPayment({data:t})];case 2:return n.sent(),[2]}}))},new((r=void 0)||(r=Promise))((function(t,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(a,s)}c((o=o.apply(e,n||[])).next())}));var e,n,r,o},t}();function J(t){return new Y(t,new V)}module.exports=e})();
//# sourceMappingURL=hosted-form-v2-iframe-host.js.map