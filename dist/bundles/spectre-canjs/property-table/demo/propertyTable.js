/*spectre-canjs@0.19.0#property-table/demo/propertyTable*/
define("spectre-canjs@0.19.0#property-table/demo/propertyTable",["can-stache","property-table/"],function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var r=t(e),o=r["default"](document.getElementById("demo-html").innerHTML),a={fields:[{name:"prop_1",alias:"Property 1",formatter:function(e){return"<strong>"+e+"</strong>"}},"another_property_value","etc_or_misc"],data:{prop_1:"This is a property",another_property_value:"Value here",etc_or_misc:"This is a value"}};document.body.appendChild(o(a))});
//# sourceMappingURL=propertyTable.js.map