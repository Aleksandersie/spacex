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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-client)/./src/app/admin/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/pageTextApi */ \"(app-client)/./src/app/store/pageTextApi.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AdminPage() {\n    var _getPageText_data, _getPageText_data1;\n    _s();\n    const getPageText = (0,_store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__.useGetPageTextQuery)(\"\");\n    const [updatePageText] = (0,_store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__.useUpdatePageTextMutation)();\n    const [menu1, setMenu1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [menu2, setMenu2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    function newText() {\n        var _getPageText_data, _getPageText_data1;\n        updatePageText({\n            menu1: menu1 || ((_getPageText_data = getPageText.data) === null || _getPageText_data === void 0 ? void 0 : _getPageText_data.menu1),\n            menu2: menu2 || ((_getPageText_data1 = getPageText.data) === null || _getPageText_data1 === void 0 ? void 0 : _getPageText_data1.menu2)\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().back),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().admnBody),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Обратно на сайт\"\n                        }, void 0, false, {\n                            fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainPlate),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Введите новое название и нажмите кнопку сохранить\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Имена пунктов меню\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menus),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Текущее имя\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: (_getPageText_data = getPageText.data) === null || _getPageText_data === void 0 ? void 0 : _getPageText_data.menu1\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Новое имя\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                                value: menu1,\n                                                onChange: (e)=>setMenu1(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: (_getPageText_data1 = getPageText.data) === null || _getPageText_data1 === void 0 ? void 0 : _getPageText_data1.menu2\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                                value: menu2,\n                                                onChange: (e)=>setMenu2(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: newText,\n                                        children: \"go\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aleksander/repositories/spacex/src/app/admin/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(AdminPage, \"AawJbwgXGVA2s1A2QIdWU0QhMts=\", false, function() {\n    return [\n        _store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__.useGetPageTextQuery,\n        _store_pageTextApi__WEBPACK_IMPORTED_MODULE_3__.useUpdatePageTextMutation\n    ];\n});\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9hZG1pbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QjtBQUNhO0FBQ0U7QUFHMkM7QUFNdkUsU0FBU0s7UUEyQlFDLG1CQUtBQTs7SUE3QjVCLE1BQU1BLGNBQWNILHVFQUFtQkEsQ0FBQztJQUN4QyxNQUFNLENBQUNJLGVBQWUsR0FBR0gsNkVBQXlCQTtJQUdsRCxNQUFNLENBQUNJLE9BQU1DLFNBQVMsR0FBR1AsK0NBQVFBLENBQVM7SUFDMUMsTUFBTSxDQUFDUSxPQUFNQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFTO0lBRTFDLFNBQVNVO1lBRVlOLG1CQUNBQTtRQUZqQkMsZUFBZTtZQUNYQyxPQUFNQSxXQUFPRixvQkFBQUEsWUFBWU8sSUFBSSxjQUFoQlAsd0NBQUFBLGtCQUFrQkUsS0FBSztZQUNwQ0UsT0FBTUEsV0FBT0oscUJBQUFBLFlBQVlPLElBQUksY0FBaEJQLHlDQUFBQSxtQkFBa0JJLEtBQUs7UUFDeEM7SUFDSjtJQUNBLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFXZCxpRUFBVztrQkFDdkIsNEVBQUNhO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFXZCxxRUFBZTs7a0NBQzNCLDhEQUFDaUI7a0NBQUcsNEVBQUNsQixrREFBSUE7NEJBQUNtQixNQUFNO3NDQUFLOzs7Ozs7Ozs7OztrQ0FDckIsOERBQUNMO3dCQUFJQyxXQUFXZCxzRUFBZ0I7OzBDQUM1Qiw4REFBQ29COzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ1IsOERBQUNQO2dDQUFJQyxXQUFXZCxrRUFBWTs7a0RBQ3hCLDhEQUFDYTs7MERBQ0csOERBQUNTOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNBOzJEQUFHakIsb0JBQUFBLFlBQVlPLElBQUksY0FBaEJQLHdDQUFBQSxrQkFBa0JFLEtBQUs7Ozs7OzswREFDM0IsOERBQUNlOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNDO2dEQUFNQyxNQUFLO2dEQUFPVixXQUFXZCxrRUFBWTtnREFBRXlCLE9BQU9sQjtnREFBT21CLFVBQVUsQ0FBQ0MsSUFBSW5CLFNBQVNtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrREFFcEcsOERBQUNaOzswREFDRyw4REFBQ1M7MkRBQUdqQixxQkFBQUEsWUFBWU8sSUFBSSxjQUFoQlAseUNBQUFBLG1CQUFrQkksS0FBSzs7Ozs7OzBEQUMzQiw4REFBQ2M7Z0RBQU1DLE1BQUs7Z0RBQU9WLFdBQVdkLGtFQUFZO2dEQUFFeUIsT0FBT2hCO2dEQUFPaUIsVUFBVSxDQUFDQyxJQUFJakIsU0FBU2lCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tEQUVwRyw4REFBQ0k7d0NBQU9DLFNBQVNuQjtrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsRDtHQTVDd0JQOztRQUdBRixtRUFBbUJBO1FBQ2RDLHlFQUF5QkE7OztLQUo5QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hZG1pbi9wYWdlLnRzeD82Nzc2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGdldFRleHQgfSBmcm9tIFwiLi4vYXhpb3NcIjtcbmltcG9ydCB7IE1BSU5fSE9TVCB9IGZyb20gXCIuLi9ob3N0XCI7XG5pbXBvcnQgeyB1c2VHZXRQYWdlVGV4dFF1ZXJ5LCB1c2VVcGRhdGVQYWdlVGV4dE11dGF0aW9uIH0gZnJvbSBcIi4uL3N0b3JlL3BhZ2VUZXh0QXBpXCI7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5QYWdlKCl7XG5cblxuICAgIGNvbnN0IGdldFBhZ2VUZXh0ID0gdXNlR2V0UGFnZVRleHRRdWVyeSgnJylcbiAgICBjb25zdCBbdXBkYXRlUGFnZVRleHRdID0gdXNlVXBkYXRlUGFnZVRleHRNdXRhdGlvbigpXG5cblxuICAgIGNvbnN0IFttZW51MSxzZXRNZW51MV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICAgIGNvbnN0IFttZW51MixzZXRNZW51Ml0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuXG4gICAgZnVuY3Rpb24gbmV3VGV4dCgpe1xuICAgICAgICB1cGRhdGVQYWdlVGV4dCh7XG4gICAgICAgICAgICBtZW51MTptZW51MXx8Z2V0UGFnZVRleHQuZGF0YT8ubWVudTEsXG4gICAgICAgICAgICBtZW51MjptZW51Mnx8Z2V0UGFnZVRleHQuZGF0YT8ubWVudTJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrfSA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtbkJvZHl9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+PExpbmsgaHJlZj17Jy8nfT7QntCx0YDQsNGC0L3QviDQvdCwINGB0LDQudGCPC9MaW5rPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpblBsYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND7QktCy0LXQtNC40YLQtSDQvdC+0LLQvtC1INC90LDQt9Cy0LDQvdC40LUg0Lgg0L3QsNC20LzQuNGC0LUg0LrQvdC+0L/QutGDINGB0L7RhdGA0LDQvdC40YLRjDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+0JjQvNC10L3QsCDQv9GD0L3QutGC0L7QsiDQvNC10L3RjjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudXN9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0KLQtdC60YPRidC10LUg0LjQvNGPPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntnZXRQYWdlVGV4dC5kYXRhPy5tZW51MX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0J3QvtCy0L7QtSDQuNC80Y88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXttZW51MX0gb25DaGFuZ2U9eyhlKT0+c2V0TWVudTEoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2dldFBhZ2VUZXh0LmRhdGE/Lm1lbnUyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e21lbnUyfSBvbkNoYW5nZT17KGUpPT5zZXRNZW51MihlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXdUZXh0fT5nbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG4gICBcbn1cblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUdldFBhZ2VUZXh0UXVlcnkiLCJ1c2VVcGRhdGVQYWdlVGV4dE11dGF0aW9uIiwiQWRtaW5QYWdlIiwiZ2V0UGFnZVRleHQiLCJ1cGRhdGVQYWdlVGV4dCIsIm1lbnUxIiwic2V0TWVudTEiLCJtZW51MiIsInNldE1lbnUyIiwibmV3VGV4dCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJiYWNrIiwiYWRtbkJvZHkiLCJoMiIsImhyZWYiLCJtYWluUGxhdGUiLCJoNCIsIm1lbnVzIiwicCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/admin/page.tsx\n"));

/***/ })

});