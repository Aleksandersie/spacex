"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-client)/./src/app/admin/page.tsx":
/*!********************************!*\
  !*** ./src/app/admin/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-client)/./src/app/admin/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/pageTextApi */ \"(app-client)/./src/app/store/pageTextApi.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AdminPage() {\n    var _getPageText_data, _getPageText_data1;\n    _s();\n    const getPageText = (0,_store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__.useGetPageTextQuery)(\"\");\n    console.log(getPageText.data);\n    const [menu1, setMenu1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [menu2, setMenu2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"321\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().back),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().admnBody),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Обратно на сайт\"\n                        }, void 0, false, {\n                            fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainPlate),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Имена пунктов меню\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menus),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: (_getPageText_data = getPageText.data) === null || _getPageText_data === void 0 ? void 0 : _getPageText_data.menu1\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                                value: menu1,\n                                                onChange: (e)=>setMenu1(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: (_getPageText_data1 = getPageText.data) === null || _getPageText_data1 === void 0 ? void 0 : _getPageText_data1.menu2\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                                value: menu1,\n                                                onChange: (e)=>setMenu1(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(AdminPage, \"jZOTcMFimAE1/VwOCyc9wzAe644=\", false, function() {\n    return [\n        _store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__.useGetPageTextQuery\n    ];\n});\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9hZG1pbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QjtBQUNhO0FBQ0U7QUFHZ0I7QUFNNUMsU0FBU0k7UUFvQlFDLG1CQUlBQTs7SUFyQjVCLE1BQU1BLGNBQWNGLHVFQUFtQkEsQ0FBQztJQUN4Q0csUUFBUUMsR0FBRyxDQUFDRixZQUFZRyxJQUFJO0lBRzVCLE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUztJQUMxQyxNQUFNLENBQUNTLE9BQU1DLFNBQVMsR0FBR1YsK0NBQVFBLENBQVM7SUFHMUMscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVdiLGlFQUFXO2tCQUN2Qiw0RUFBQ1k7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVdiLHFFQUFlOztrQ0FDM0IsOERBQUNnQjtrQ0FBRyw0RUFBQ2pCLGtEQUFJQTs0QkFBQ2tCLE1BQU07c0NBQUs7Ozs7Ozs7Ozs7O2tDQUNyQiw4REFBQ0w7d0JBQUlDLFdBQVdiLHNFQUFnQjs7MENBQzVCLDhEQUFDbUI7MENBQUc7Ozs7OzswQ0FDUiw4REFBQ1A7Z0NBQUlDLFdBQVdiLGtFQUFZOztrREFDeEIsOERBQUNZOzswREFDRyw4REFBQ1M7MkRBQUdqQixvQkFBQUEsWUFBWUcsSUFBSSxjQUFoQkgsd0NBQUFBLGtCQUFrQkksS0FBSzs7Ozs7OzBEQUMzQiw4REFBQ2M7Z0RBQU1DLE1BQUs7Z0RBQU9WLFdBQVdiLGtFQUFZO2dEQUFFd0IsT0FBT2hCO2dEQUFPaUIsVUFBVSxDQUFDQyxJQUFJakIsU0FBU2lCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tEQUVwRyw4REFBQ1o7OzBEQUNHLDhEQUFDUzsyREFBR2pCLHFCQUFBQSxZQUFZRyxJQUFJLGNBQWhCSCx5Q0FBQUEsbUJBQWtCTSxLQUFLOzs7Ozs7MERBQzNCLDhEQUFDWTtnREFBTUMsTUFBSztnREFBT1YsV0FBV2Isa0VBQVk7Z0RBQUV3QixPQUFPaEI7Z0RBQU9pQixVQUFVLENBQUNDLElBQUlqQixTQUFTaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTVIO0dBbkN3QnJCOztRQUdBRCxtRUFBbUJBOzs7S0FIbkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vcGFnZS50c3g/Njc3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBnZXRUZXh0IH0gZnJvbSBcIi4uL2F4aW9zXCI7XG5pbXBvcnQgeyBNQUlOX0hPU1QgfSBmcm9tIFwiLi4vaG9zdFwiO1xuaW1wb3J0IHsgdXNlR2V0UGFnZVRleHRRdWVyeSB9IGZyb20gXCIuLi9zdG9yZS9wYWdlVGV4dEFwaVwiO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluUGFnZSgpe1xuXG5cbiAgICBjb25zdCBnZXRQYWdlVGV4dCA9IHVzZUdldFBhZ2VUZXh0UXVlcnkoJycpXG4gICAgY29uc29sZS5sb2coZ2V0UGFnZVRleHQuZGF0YSlcblxuXG4gICAgY29uc3QgW21lbnUxLHNldE1lbnUxXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gICAgY29uc3QgW21lbnUyLHNldE1lbnUyXSA9IHVzZVN0YXRlPHN0cmluZz4oJzMyMScpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja30gPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbW5Cb2R5fT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPjxMaW5rIGhyZWY9eycvJ30+0J7QsdGA0LDRgtC90L4g0L3QsCDRgdCw0LnRgjwvTGluaz48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5QbGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+0JjQvNC10L3QsCDQv9GD0L3QutGC0L7QsiDQvNC10L3RjjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudXN9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2dldFBhZ2VUZXh0LmRhdGE/Lm1lbnUxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e21lbnUxfSBvbkNoYW5nZT17KGUpPT5zZXRNZW51MShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Z2V0UGFnZVRleHQuZGF0YT8ubWVudTJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB2YWx1ZT17bWVudTF9IG9uQ2hhbmdlPXsoZSk9PnNldE1lbnUxKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbiAgIFxufVxuXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlR2V0UGFnZVRleHRRdWVyeSIsIkFkbWluUGFnZSIsImdldFBhZ2VUZXh0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZW51MSIsInNldE1lbnUxIiwibWVudTIiLCJzZXRNZW51MiIsImRpdiIsImNsYXNzTmFtZSIsImJhY2siLCJhZG1uQm9keSIsImgyIiwiaHJlZiIsIm1haW5QbGF0ZSIsImg0IiwibWVudXMiLCJwIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/admin/page.tsx\n"));

/***/ })

});