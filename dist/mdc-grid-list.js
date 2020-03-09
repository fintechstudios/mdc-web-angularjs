!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mdc-grid-list"]=t():e["mdc-grid-list"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n(n.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adapter_=t}return r(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),r(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDCComponent=t.MDCFoundation=void 0;var r=i(n(0)),o=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.MDCFoundation=r.default,t.MDCComponent=o.default},function(e,t){e.exports='<div class="mdc-grid-list__tiles" ng-transclude></div>'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.strings={TILES_SELECTOR:".mdc-grid-list__tiles",TILE_SELECTOR:".mdc-grid-tile"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=n(3);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r(t.defaultAdapter,e)));return n.resizeHandler_=function(){return n.alignCenter()},n.resizeFrame_=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.MDCFoundation),o(t,null,[{key:"strings",get:function(){return u.strings}},{key:"defaultAdapter",get:function(){return{getOffsetWidth:function(){return 0},getNumberOfTiles:function(){return 0},getOffsetWidthForTileAtIndex:function(){return 0},setStyleForTilesElement:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){}}}}]),o(t,[{key:"init",value:function(){this.alignCenter(),this.adapter_.registerResizeHandler(this.resizeHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"alignCenter",value:function(){var e=this;0!==this.resizeFrame_&&cancelAnimationFrame(this.resizeFrame_),this.resizeFrame_=requestAnimationFrame(function(){e.alignCenter_(),e.resizeFrame_=0})}},{key:"alignCenter_",value:function(){if(0!=this.adapter_.getNumberOfTiles()){var e=this.adapter_.getOffsetWidth(),t=this.adapter_.getOffsetWidthForTileAtIndex(0),n=t*Math.floor(e/t);this.adapter_.setStyleForTilesElement("width",n+"px")}}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */var i=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root_=t;for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];this.initialize.apply(this,o),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return r(e,null,[{key:"attachTo",value:function(t){return new e(t,new o.default)}}]),r(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=void 0;"function"==typeof CustomEvent?r=new CustomEvent(e,{detail:t,bubbles:n}):(r=document.createEvent("CustomEvent")).initCustomEvent(e,n,!1,t),this.root_.dispatchEvent(r)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDCGridList=t.MDCGridListFoundation=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.MDCGridListFoundation=i.default;t.MDCGridList=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.MDCComponent),r(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new i.default({getOffsetWidth:function(){return e.root_.offsetWidth},getNumberOfTiles:function(){return e.root_.querySelectorAll(i.default.strings.TILE_SELECTOR).length},getOffsetWidthForTileAtIndex:function(t){return e.root_.querySelectorAll(i.default.strings.TILE_SELECTOR)[t].offsetWidth},setStyleForTilesElement:function(t,n){e.root_.querySelector(i.default.strings.TILES_SELECTOR).style[t]=n},registerResizeHandler:function(e){return window.addEventListener("resize",e)},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)}})}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.has=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BindInjections=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7);t.BindInjections=function(){function e(){var t=this,n=arguments;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.constructor.$inject.map(function(e,r){o.has.call(t,e)||(t[e]=n[r])})}return r(e,null,[{key:"$inject",get:function(){return[]}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8);t.BaseComponent=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.BindInjections),r(t,[{key:"$onChanges",value:function(e){}},{key:"$onInit",value:function(){}},{key:"$postLink",value:function(){}},{key:"$onDestroy",value:function(){}}]),t}()},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(9),i=n(6),u=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var a=["1x1","16x9","2x3","3x2","4x3","3x4"],l=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return i.root_=i.$element[0],i.foundation_=i.getDefaultFoundation(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.BaseComponent),r(t,null,[{key:"name",get:function(){return"mdcGridList"}},{key:"bindings",get:function(){return{iconAlign:"@",gutter:"@",aspect:"@"}}},{key:"template",get:function(){return u.default}},{key:"transclude",get:function(){return!0}},{key:"$inject",get:function(){return["$element","$window"]}}]),r(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new i.MDCGridListFoundation({getOffsetWidth:function(){return e.root_.offsetWidth},getNumberOfTiles:function(){return e.root_.querySelectorAll(i.MDCGridListFoundation.strings.TILE_SELECTOR).length},getOffsetWidthForTileAtIndex:function(t){return e.root_.querySelectorAll(i.MDCGridListFoundation.strings.TILE_SELECTOR)[t].offsetWidth},setStyleForTilesElement:function(t,n){e.root_.querySelector(i.MDCGridListFoundation.strings.TILES_SELECTOR).style[t]=n},registerResizeHandler:function(t){return e.$window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return e.$window.removeEventListener("resize",t)}})}},{key:"$postLink",value:function(){this.foundation_.init()}},{key:"$onChanges",value:function(e){var t=this;e.iconAlign&&(this.$element.toggleClass("mdc-grid-list--with-icon-align-start","start"===this.iconAlign),this.$element.toggleClass("mdc-grid-list--with-icon-align-end","end"===this.iconAlign)),e.gutter&&this.$element.toggleClass("mdc-grid-list--tile-gutter-1","1"==this.gutter),e.aspect&&a.forEach(function(e){t.$element.toggleClass("mdc-grid-list--tile-aspect-"+e,t.aspect===e)})}},{key:"$onDestroy",value:function(){this.foundation_.destroy()}}]),t}();angular.module("mdc.grid-list",[]).component(l.name,{controller:l,transclude:l.transclude,template:l.template,bindings:l.bindings})}])});