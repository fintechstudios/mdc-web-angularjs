!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mdc-icon"]=t():e["mdc-icon"]=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.has=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BindInjections=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0);t.BindInjections=function(){function e(){var t=this,n=arguments;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.constructor.$inject.map(function(e,o){r.has.call(t,e)||(t[e]=n[o])})}return o(e,null,[{key:"$inject",get:function(){return[]}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1);t.BaseComponent=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.BindInjections),o(t,[{key:"$onChanges",value:function(e){}},{key:"$onInit",value:function(){}},{key:"$postLink",value:function(){}},{key:"$onDestroy",value:function(){}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDCIconController=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2);var i=t.MDCIconController=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return i.$element.addClass("material-icons"),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.BaseComponent),o(t,null,[{key:"name",get:function(){return"mdcIcon"}},{key:"$inject",get:function(){return["$element"]}},{key:"require",get:function(){return{mdcTextFieldCtrl:"^^?mdcTextField"}}},{key:"bindings",get:function(){return{size:"@",ngClick:"&?"}}}]),o(t,[{key:"$onChanges",value:function(e){e.size&&(this.$element[0].style.fontSize=this.size+"px")}},{key:"$postLink",value:function(){this.$element.attr("tabindex",this.ngClick?"0":"-1")}},{key:"$onDestroy",value:function(){this.mdcTextFieldCtrl&&this.mdcTextFieldCtrl.toggleIconCtrl(this,!1)}},{key:"mdcTextFieldCtrl",get:function(){return this._mdcTextFieldCtrl},set:function(e){this._mdcTextFieldCtrl=e,e&&e.toggleIconCtrl(this,!0),this.$element.toggleClass("mdc-text-field__icon",Boolean(e))}}]),t}();angular.module("mdc.icon",[]).component(i.name,{controller:i,bindings:i.bindings,require:i.require})}])});