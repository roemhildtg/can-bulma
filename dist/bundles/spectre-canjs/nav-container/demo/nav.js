/*spectre-canjs@0.19.0#nav-container/demo/nav*/
define("spectre-canjs@0.19.0#nav-container/demo/nav",["can-stache","can-define/map/map","can-util/dom/ajax/ajax","nav-container/"],function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var l=t(e),d=t(a),c=t(n),o=l["default"](document.getElementById("demo-html").innerHTML),i=new d["default"]({people:c["default"]({url:"http://jsonplaceholder.typicode.com/users"}),pages:[{label:"List"},{label:"Create",active:!0},{label:"Other Options"}]});document.body.appendChild(o(i))});
//# sourceMappingURL=nav.js.map