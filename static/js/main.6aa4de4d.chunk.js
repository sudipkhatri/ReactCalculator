(this.webpackJsonpreactcalculator=this.webpackJsonpreactcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var _Users_sudipkhatri_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Calc_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_Calc_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Calc_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_Users_sudipkhatri_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),cal=_useState2[0],setCal=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_Users_sudipkhatri_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","+","-","."],updatecalc=function updatecalc(value){ops.includes(value)&&""===cal||ops.includes(value)&&ops.includes(cal.slice(-1))||(setCal(cal+value),ops.includes(value)||setResult(eval(cal+value).toString()))},createDigits=function(){for(var _=[],e=function(e){_.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{onClick:function(){return updatecalc(e.toString())},children:[" ",e," "]},e))},t=1;t<10;t++)e(t);return _},calculate=function calculate(){setCal(eval(cal).toString())},deleteLast=function(){if(""!==cal){var _=cal.slice(0,-1);setCal(_)}},clearAll=function(){setResult(""),setCal("")};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"display",children:[result?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[" ",result," "]}):"",cal||0]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"operators",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updatecalc("/")},children:" / "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updatecalc("*")},children:" *  "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updatecalc("+")},children:"  + "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updatecalc("-")},children:" - "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:deleteLast,children:" DEL "})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"digits",children:[createDigits(),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updatecalc("0")},children:" 0 "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updatecalc(".")},children:" . "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:calculate,children:" = "})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"row",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:clearAll,children:" Clear"})})]})})}},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var c=t(1),a=t.n(c),r=t(4),s=t.n(r),n=(t(10),t(5)),u=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;t(_),c(_),a(_),r(_),s(_)}))},l=t(0);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(n.a,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.6aa4de4d.chunk.js.map