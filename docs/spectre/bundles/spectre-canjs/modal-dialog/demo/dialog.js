/*spectre-canjs@0.24.4#modal-dialog/modal-dialog.stache!steal-stache@3.0.5#steal-stache*/
define("spectre-canjs@0.24.4#modal-dialog/modal-dialog.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal"]},{tokenType:"special",args:["#active"]},{tokenType:"attrValue",args:[" active"]},{tokenType:"special",args:["/active"]},{tokenType:"special",args:["#small"]},{tokenType:"attrValue",args:[" modal-sm"]},{tokenType:"special",args:["/small"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["#if backdrop"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-overlay"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"close",args:["div"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-container"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["#if customBody"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["        "]},{tokenType:"special",args:["else"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-header"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-clear float-right"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-title"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["title"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-body"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["content"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-footer"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-link"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"chars",args:["Close"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,s,n){var o={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(o),n)}});
/*spectre-canjs@0.24.4#modal-dialog/modal-dialog*/
define("spectre-canjs@0.24.4#modal-dialog/modal-dialog",["exports","can-component","can-define/map/map","can-event","can-util/js/assign/assign","./modal-dialog.stache!"],function(e,t,a,o,i,l){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var n=d(t),s=d(a),c=d(o),u=d(i),h=d(l),f=e.ViewModel=s.default.extend("ModalDialog",{active:{value:!1,type:"htmlbool"},customBody:{value:!1,type:"htmlbool"},small:{value:!1,type:"htmlbool"},backdrop:{value:!0,type:"boolean"},show:function(){this.active=!0,this.dispatch("show")},hide:function(){this.active=!1,this.dispatch("hide")},toggle:function(e){"undefined"!=typeof e?this.active=Boolean(e):this.active=!this.active}});(0,u.default)(f.prototype,c.default),n.default.extend({viewModel:f,view:h.default,tag:"modal-dialog"})});
/*spectre-canjs@0.24.4#modal-dialog/confirm-dialog.stache!steal-stache@3.0.5#steal-stache*/
define("spectre-canjs@0.24.4#modal-dialog/confirm-dialog.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(t,e,a){var r=e([{tokenType:"start",args:["modal-dialog",!1]},{tokenType:"attrStart",args:["custom-body"]},{tokenType:"attrEnd",args:["custom-body"]},{tokenType:"attrStart",args:["{(active)}"]},{tokenType:"attrValue",args:["active"]},{tokenType:"attrEnd",args:["{(active)}"]},{tokenType:"special",args:["#small"]},{tokenType:"attrStart",args:["small"]},{tokenType:"attrEnd",args:["small"]},{tokenType:"special",args:["/small"]},{tokenType:"end",args:["modal-dialog",!1]},{tokenType:"chars",args:["\n  "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-header"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["onReject()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-clear float-right"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-title"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["title"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n  "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-body"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["content"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n          "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n\n  "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-footer"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["onAccept()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-primary"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"special",args:["acceptText"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["onReject()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-link"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"special",args:["rejectText"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["modal-dialog"]},{tokenType:"chars",args:["\n"]},{tokenType:"done",args:[]}]);return function(e,s,n){var o={module:t};return s instanceof a.Options||(s=new a.Options(s||{})),r(e,s.add(o),n)}});
/*spectre-canjs@0.24.4#modal-dialog/confirm-dialog*/
define("spectre-canjs@0.24.4#modal-dialog/confirm-dialog",["exports","./modal-dialog","./confirm-dialog.stache!","can-component","can-event","object-assign"],function(e,t,i,o,c,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var l=a(i),s=a(o),r=a(c),d=a(n),u=e.ViewModel=t.ViewModel.extend("ConfirmDialog",{acceptText:{value:"Ok"},rejectText:{value:"Cancel"},_resolveAction:"*",_rejectAction:"*",actionPromise:{get:function(){var e=this;return new Promise(function(t,i){e._resolveAction=t,e._rejectAction=i})}},onAccept:function(){this._resolveAction&&this._resolveAction(!0),this.dispatch("accept",[this]),this.active=!1},onReject:function(){this._resolveAction&&this._resolveAction(!1),this.dispatch("reject",[this]),this.active=!1}});(0,d.default)(u,r.default),e.default=s.default.extend({tag:"confirm-dialog",viewModel:u,view:l.default,leakScope:!0})});
/*spectre-canjs@0.24.4#modal-dialog/demo/dialog*/
define("spectre-canjs@0.24.4#modal-dialog/demo/dialog",["can-stache","can-define/map/map","spectre-canjs/modal-dialog/modal-dialog","spectre-canjs/modal-dialog/confirm-dialog"],function(n,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=o(n),d=o(e),l=(0,a.default)(document.getElementById("demo-html").innerHTML),t=new d.default({modal1:!1,modal2:!1,modal3:!1,confirm1:!1,onAccept:function(){console.log("----- Confirmation Accepted ------"),console.log(arguments)},onReject:function(){console.log("----- Confirmation Rejected ------"),console.log(arguments)},showModal:function(n){this[n]=!0},hideModal:function(n){this[n]=!1}});document.body.appendChild(l(t)),window.DEMO_SOURCE="\nimport 'spectre-canjs/modal-dialog/modal-dialog';\nimport 'spectre-canjs/modal-dialog/confirm-dialog';\n\nimport stache from 'can-stache';\nimport DefineMap from 'can-define/map/map';\n\nvar render = stache(document.getElementById('demo-html').innerHTML);\n\nvar viewModel = new DefineMap({\n    modal1: false,\n    modal2: false,\n    modal3: false,\n    confirm1: false,\n    onAccept () {\n        console.log('----- Confirmation Accepted ------');\n        console.log(arguments);\n    },\n    onReject () {\n        console.log('----- Confirmation Rejected ------');\n        console.log(arguments);\n    },\n    showModal (name) {\n        this[name] = true;\n    },\n    hideModal (name) {\n        this[name] = false;\n    }\n});\n\ndocument.body.appendChild(render(viewModel));\n"});
//# sourceMappingURL=dialog.js.map