/*spectre-canjs@0.28.5#paginate-widget/demo/paginate*/
define("spectre-canjs@0.28.5#paginate-widget/demo/paginate",["can-define/map/map","can-stache","spectre-canjs/paginate-widget/paginate-widget"],function(e,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=a(e),d=a(n),i=(0,d.default)(document.getElementById("demo-html").innerHTML)(new t.default({page1:0,page2:0}));document.body.appendChild(i),window.DEMO_SOURCE="\nimport 'spectre-canjs/paginate-widget/paginate-widget';\nimport DefineMap from 'can-define/map/map';\nimport stache from 'can-stache';\n\nvar frag = stache(document.getElementById('demo-html').innerHTML)(new DefineMap({\n    page1: 0,\n    page2: 0\n}));\n\ndocument.body.appendChild(frag);\n\n"});
//# sourceMappingURL=paginate.js.map