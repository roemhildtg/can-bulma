!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("json-pretty-html@1.1.2#dist/bundle",[],e):"object"==typeof exports?exports.prettyPrint=e():t.prettyPrint=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=/["'&<>]/,u=function(t){var e=i.exec(t);if(null!==e){var n,r="",o=void 0,u=0;for(o=e.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}u!==o&&(r+=t.substring(u,o)),u=o+1,r+=n}return u!==o?r+t.substring(u,o):r}return t},c=function(){function t(t){this.buffer=[],this.indentString=t,this.objects=[]}return t.prototype.checkCircular=function(t){for(var e=0,n=this.objects;e<n.length;e++)if(t===n[e])throw new Error("Cannot pretty print object with circular reference");this.objects.push(t)},t.prototype.print=function(t){this.buffer.push(t)},t.prototype.newLine=function(){this._printSelectionEndAtNewLine?(this.printSelectionEnd(),this._printSelectionEndAtNewLine=!1):this.buffer.push("<br>")},t.prototype.space=function(){this.buffer.push("&nbsp;")},t.prototype.indent=function(t){if(t>0){for(var e="",n=0;n<t;n++)e+=this.indentString;this.buffer.push(e)}},t.prototype.printKey=function(t){this.buffer.push('"'),this.buffer.push('<span class="json-key">'+u(t)+"</span>"),this.buffer.push('"')},t.prototype.printString=function(t){this.buffer.push('"'),this.buffer.push('<span class="json-string">'+u(t)+"</span>"),this.buffer.push('"')},t.prototype.printBoolean=function(t){this.buffer.push('<span class="json-boolean">'+t+"</span>")},t.prototype.printNumber=function(t){this.buffer.push('<span class="json-number">'+t+"</span>")},t.prototype.printSelectionStart=function(){this.buffer.push("</div>"),this.buffer.push('<div class="json-pretty json-selected">')},t.prototype.printSelectionEnd=function(){this.buffer.push("</div>"),this.buffer.push('<div class="json-pretty">')},Object.defineProperty(t.prototype,"printSelectionEndAtNewLine",{set:function(t){this._printSelectionEndAtNewLine=t},enumerable:!0,configurable:!0}),t.prototype.toString=function(){return this.buffer.join("")},t}(),f=function t(e,n,o,i,u){n.checkCircular(e),n.print("{"),n.newLine();for(var c=Object.keys(e),f=0;f<c.length;f++){var s=c[f],p=e[s];switch(i===p&&n.printSelectionStart(),n.indent(o+1),n.printKey(s),n.print(":"),n.space(),void 0===p?"undefined":r(p)){case"number":n.printNumber(p);break;case"boolean":n.printBoolean(p);break;case"string":n.printString(p);break;case"object":null===p?n.print("null"):Array.isArray(p)?a(p,n,o+1,i,u):t(p,n,o+1,i,u);break;case"undefined":n.print("undefined");break;default:throw new Error("Don''t know what to do with "+(void 0===p?"undefined":r(p)))}f<c.length-1&&n.print(","),n.newLine()}n.indent(o),n.print("}"),i===e&&(n.printSelectionEndAtNewLine=!0)},a=function(t,e,n,o,i){e.checkCircular(t),e.print("["),e.newLine();for(var u=0;u<t.length;u++){var c=t[u];switch(o===c&&e.printSelectionStart(),e.indent(n+1),void 0===c?"undefined":r(c)){case"number":e.printNumber(c);break;case"boolean":e.printBoolean(c);break;case"string":e.printString(c);break;case"object":null==c?e.print("null"):f(c,e,n+1,o,i);break;case"undefined":e.print("undefined");break;default:throw new Error("Don''t know what to do with "+(void 0===c?"undefined":r(c)))}u<t.length-1&&e.print(","),e.newLine()}e.indent(n),e.print("]"),o===t&&(e.printSelectionEndAtNewLine=!0)};e.default=function(t,e,n){if(void 0!==(void 0===t?"undefined":r(t))&&null!=t){var i=o.__assign({indent:"&nbsp;&nbsp;"},n),u=new c(i.indent);return t===e?u.print('<div class="json-pretty json-selected">'):u.print('<div class="json-pretty">'),Array.isArray(t)?a(t,u,0,e,i):f(t,u,0,e,i),u.print("</div>"),u.toString()}return""}},function(t,e,n){"use strict";function r(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function i(t){return this instanceof i?(this.v=t,this):new i(t)}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.__extends=function(t,e){function n(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},e.__rest=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]]);return n},e.__decorate=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var f=t.length-1;f>=0;f--)(o=t[f])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},e.__param=function(t,e){return function(n,r){e(n,r,t)}},e.__metadata=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},e.__awaiter=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{f(r.next(t))}catch(t){i(t)}}function c(t){try{f(r.throw(t))}catch(t){i(t)}}function f(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}f((r=r.apply(t,e||[])).next())})},e.__generator=function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;f;)try{if(o=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return f.label++,{value:n[1],done:!1};case 5:f.label++,i=n[1],n=[0];continue;case 7:n=f.ops.pop(),f.trys.pop();continue;default:if(u=f.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){f=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){f.label=n[1];break}if(6===n[0]&&f.label<u[1]){f.label=u[1],u=n;break}if(u&&f.label<u[2]){f.label=u[2],f.ops.push(n);break}u[2]&&f.ops.pop(),f.trys.pop();continue}n=e.call(t,f)}catch(t){n=[6,t],i=0}finally{o=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,u,c,f={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},e.__exportStar=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},e.__values=r,e.__read=o,e.__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},e.__await=i,e.__asyncGenerator=function(t,e,n){function r(t){p[t]&&(s[t]=function(e){return new Promise(function(n,r){l.push([t,e,n,r])>1||o(t,e)})})}function o(t,e){try{u(p[t](e))}catch(t){a(l[0][3],t)}}function u(t){t.value instanceof i?Promise.resolve(t.value.v).then(c,f):a(l[0][2],t)}function c(t){o("next",t)}function f(t){o("throw",t)}function a(t,e){t(e),l.shift(),l.length&&o(l[0][0],l[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,p=n.apply(t,e||[]),l=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s},e.__asyncDelegator=function(t){function e(e,o){t[e]&&(n[e]=function(n){return(r=!r)?{value:i(t[e](n)),done:"return"===e}:o?o(n):n})}var n,r;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n},e.__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator];return e?e.call(t):"function"==typeof r?r(t):t[Symbol.iterator]()},e.__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},e.__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},e.__importDefault=function(t){return t&&t.__esModule?t:{default:t}};var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};e.__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}}])});
//# sourceMappingURL=filter-full.js.map