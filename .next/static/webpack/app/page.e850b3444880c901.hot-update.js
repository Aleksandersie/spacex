"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/mainBlock/MainBlock.tsx":
/*!****************************************************!*\
  !*** ./src/app/components/mainBlock/MainBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_store_pageTextApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/store/pageTextApi */ \"(app-client)/./src/app/store/pageTextApi.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-client)/./src/app/components/mainBlock/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction MainBlock() {\n    var _getPageText_data, _getPageText_data1, _getPageText_data2, _getPageText_data3, _getPageText_data4, _getPageText_data5, _getPageText_data6, _getPageText_data7, _getPageText_data8, _getPageText_data9, _getPageText_data10, _getPageText_data11;\n    _s();\n    const getPageText = (0,_app_store_pageTextApi__WEBPACK_IMPORTED_MODULE_1__.useGetPageTextQuery)(\"\");\n    const mockRes = {\n        topSmallTextOne: \"мы\",\n        bigTextOne: \"1\",\n        bottomSmallTextOne: \"на рынке\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mainBlockWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().travelWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bigH),\n                                children: \"ПУТЕШЕСТВИЕ\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().smallText),\n                                children: \"на красную планету\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().startButton),\n                        children: \"Начать путешествие\"\n                    }, void 0, false, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: (_getPageText_data = getPageText.data) === null || _getPageText_data === void 0 ? void 0 : _getPageText_data.fact1TopText\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: (_getPageText_data1 = getPageText.data) === null || _getPageText_data1 === void 0 ? void 0 : _getPageText_data1.fact1BigText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: (_getPageText_data2 = getPageText.data) === null || _getPageText_data2 === void 0 ? void 0 : _getPageText_data2.fact1SmallText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody2),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: (_getPageText_data3 = getPageText.data) === null || _getPageText_data3 === void 0 ? void 0 : _getPageText_data3.fact2TopText\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: (_getPageText_data4 = getPageText.data) === null || _getPageText_data4 === void 0 ? void 0 : _getPageText_data4.fact2TopText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: (_getPageText_data5 = getPageText.data) === null || _getPageText_data5 === void 0 ? void 0 : _getPageText_data5.fact2TopText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody3),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: (_getPageText_data6 = getPageText.data) === null || _getPageText_data6 === void 0 ? void 0 : _getPageText_data6.fact3TopText\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: (_getPageText_data7 = getPageText.data) === null || _getPageText_data7 === void 0 ? void 0 : _getPageText_data7.fact3BigText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: (_getPageText_data8 = getPageText.data) === null || _getPageText_data8 === void 0 ? void 0 : _getPageText_data8.fact3BigText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody4),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: (_getPageText_data9 = getPageText.data) === null || _getPageText_data9 === void 0 ? void 0 : _getPageText_data9.fact4TopText\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: (_getPageText_data10 = getPageText.data) === null || _getPageText_data10 === void 0 ? void 0 : _getPageText_data10.fact4BigText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: (_getPageText_data11 = getPageText.data) === null || _getPageText_data11 === void 0 ? void 0 : _getPageText_data11.fact4BigText\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(MainBlock, \"dcIFBPwauyaDph4hpKCe59ogP9M=\", false, function() {\n    return [\n        _app_store_pageTextApi__WEBPACK_IMPORTED_MODULE_1__.useGetPageTextQuery\n    ];\n});\n_c = MainBlock;\nvar _c;\n$RefreshReg$(_c, \"MainBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW5CbG9jay9NYWluQmxvY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkQ7QUFFcEI7QUFHMUIsU0FBU0U7UUFzQnVDQyxtQkFFS0Esb0JBQ0VBLG9CQUlQQSxvQkFFS0Esb0JBQ0VBLG9CQUlQQSxvQkFFS0Esb0JBQ0VBLG9CQUlQQSxvQkFFS0EscUJBQ0VBOztJQTVDdEUsTUFBTUEsY0FBY0gsMkVBQW1CQSxDQUFDO0lBRXhDLE1BQU1JLFVBQVU7UUFDWkMsaUJBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLG9CQUFtQjtJQUN2QjtJQUVJLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXUiw2RUFBdUI7OzBCQUMvQiw4REFBQ087Z0JBQUlDLFdBQVdSLGlFQUFXOztrQ0FDdkIsOERBQUNPO3dCQUFJQyxXQUFXUiwwRUFBb0I7OzBDQUNoQyw4REFBQ1k7Z0NBQUdKLFdBQVdSLGlFQUFXOzBDQUFFOzs7Ozs7MENBQzVCLDhEQUFDYztnQ0FBRU4sV0FBV1Isc0VBQWdCOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBRXBDLDhEQUFDTzt3QkFBSUMsV0FBV1Isd0VBQWtCO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDTztnQkFBSUMsV0FBV1Isa0VBQVk7O2tDQUVwQiw4REFBQ087d0JBQUlDLFdBQVdSLHFFQUFlOzswQ0FDM0IsOERBQUNjO2dDQUFFTixXQUFXUix3RUFBa0I7MkNBQUdFLG9CQUFBQSxZQUFZa0IsSUFBSSxjQUFoQmxCLHdDQUFBQSxrQkFBa0JtQixZQUFZOzs7Ozs7MENBQ2pFLDhEQUFDZDtnQ0FBSUMsV0FBV1Isc0VBQWdCOztrREFDNUIsOERBQUNZO3dDQUFHSixXQUFXUix3RUFBa0I7bURBQUdFLHFCQUFBQSxZQUFZa0IsSUFBSSxjQUFoQmxCLHlDQUFBQSxtQkFBa0JzQixZQUFZOzs7Ozs7a0RBQ2xFLDhEQUFDVjt3Q0FBRU4sV0FBV1IsMkVBQXFCO21EQUFHRSxxQkFBQUEsWUFBWWtCLElBQUksY0FBaEJsQix5Q0FBQUEsbUJBQWtCd0IsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc5RSw4REFBQ25CO3dCQUFJQyxXQUFXUixzRUFBZ0I7OzBDQUM1Qiw4REFBQ2M7Z0NBQUVOLFdBQVdSLHdFQUFrQjsyQ0FBR0UscUJBQUFBLFlBQVlrQixJQUFJLGNBQWhCbEIseUNBQUFBLG1CQUFrQjBCLFlBQVk7Ozs7OzswQ0FDakUsOERBQUNyQjtnQ0FBSUMsV0FBV1Isc0VBQWdCOztrREFDNUIsOERBQUNZO3dDQUFHSixXQUFXUix3RUFBa0I7bURBQUdFLHFCQUFBQSxZQUFZa0IsSUFBSSxjQUFoQmxCLHlDQUFBQSxtQkFBa0IwQixZQUFZOzs7Ozs7a0RBQ2xFLDhEQUFDZDt3Q0FBRU4sV0FBV1IsMkVBQXFCO21EQUFHRSxxQkFBQUEsWUFBWWtCLElBQUksY0FBaEJsQix5Q0FBQUEsbUJBQWtCMEIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc1RSw4REFBQ3JCO3dCQUFJQyxXQUFXUixzRUFBZ0I7OzBDQUM1Qiw4REFBQ2M7Z0NBQUVOLFdBQVdSLHdFQUFrQjsyQ0FBR0UscUJBQUFBLFlBQVlrQixJQUFJLGNBQWhCbEIseUNBQUFBLG1CQUFrQjRCLFlBQVk7Ozs7OzswQ0FDakUsOERBQUN2QjtnQ0FBSUMsV0FBV1Isc0VBQWdCOztrREFDNUIsOERBQUNZO3dDQUFHSixXQUFXUix3RUFBa0I7bURBQUdFLHFCQUFBQSxZQUFZa0IsSUFBSSxjQUFoQmxCLHlDQUFBQSxtQkFBa0I2QixZQUFZOzs7Ozs7a0RBQ2xFLDhEQUFDakI7d0NBQUVOLFdBQVdSLDJFQUFxQjttREFBR0UscUJBQUFBLFlBQVlrQixJQUFJLGNBQWhCbEIseUNBQUFBLG1CQUFrQjZCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUUsOERBQUN4Qjt3QkFBSUMsV0FBV1Isc0VBQWdCOzswQ0FDNUIsOERBQUNjO2dDQUFFTixXQUFXUix3RUFBa0I7MkNBQUdFLHFCQUFBQSxZQUFZa0IsSUFBSSxjQUFoQmxCLHlDQUFBQSxtQkFBa0IrQixZQUFZOzs7Ozs7MENBQ2pFLDhEQUFDMUI7Z0NBQUlDLFdBQVdSLHNFQUFnQjs7a0RBQzVCLDhEQUFDWTt3Q0FBR0osV0FBV1Isd0VBQWtCO21EQUFHRSxzQkFBQUEsWUFBWWtCLElBQUksY0FBaEJsQiwwQ0FBQUEsb0JBQWtCZ0MsWUFBWTs7Ozs7O2tEQUNsRSw4REFBQ3BCO3dDQUFFTixXQUFXUiwyRUFBcUI7bURBQUdFLHNCQUFBQSxZQUFZa0IsSUFBSSxjQUFoQmxCLDBDQUFBQSxvQkFBa0JnQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEc7R0FyRHdCakM7O1FBRUpGLHVFQUFtQkE7OztLQUZmRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbkJsb2NrL01haW5CbG9jay50c3g/Y2M0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZUdldFBhZ2VUZXh0UXVlcnkgfSBmcm9tICdAL2FwcC9zdG9yZS9wYWdlVGV4dEFwaSdcclxuaW1wb3J0IEZhY3QgZnJvbSAnLi4vZmFjdC9mYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5CbG9jaygpe1xyXG5cclxuY29uc3QgZ2V0UGFnZVRleHQgPSB1c2VHZXRQYWdlVGV4dFF1ZXJ5KCcnKVxyXG5cclxuY29uc3QgbW9ja1JlcyA9IHtcclxuICAgIHRvcFNtYWxsVGV4dE9uZTon0LzRiycsXHJcbiAgICBiaWdUZXh0T25lOiAnMScsXHJcbiAgICBib3R0b21TbWFsbFRleHRPbmU6J9C90LAg0YDRi9C90LrQtSdcclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQmxvY2tXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmF2ZWxXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmJpZ0h9PtCf0KPQotCV0KjQldCh0KLQktCY0JU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbFRleHR9PtC90LAg0LrRgNCw0YHQvdGD0Y4g0L/Qu9Cw0L3QtdGC0YM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFydEJ1dHRvbn0+0J3QsNGH0LDRgtGMINC/0YPRgtC10YjQtdGB0YLQstC40LU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdFRvcFRleHR9PntnZXRQYWdlVGV4dC5kYXRhPy5mYWN0MVRvcFRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5mYWN0QmlnVGV4dH0+e2dldFBhZ2VUZXh0LmRhdGE/LmZhY3QxQmlnVGV4dH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCb3R0b21UZXh0fT57Z2V0UGFnZVRleHQuZGF0YT8uZmFjdDFTbWFsbFRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCb2R5Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mYWN0VG9wVGV4dH0+e2dldFBhZ2VUZXh0LmRhdGE/LmZhY3QyVG9wVGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57Z2V0UGFnZVRleHQuZGF0YT8uZmFjdDJUb3BUZXh0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9PntnZXRQYWdlVGV4dC5kYXRhPy5mYWN0MlRvcFRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCb2R5M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mYWN0VG9wVGV4dH0+e2dldFBhZ2VUZXh0LmRhdGE/LmZhY3QzVG9wVGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57Z2V0UGFnZVRleHQuZGF0YT8uZmFjdDNCaWdUZXh0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9PntnZXRQYWdlVGV4dC5kYXRhPy5mYWN0M0JpZ1RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCb2R5NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mYWN0VG9wVGV4dH0+e2dldFBhZ2VUZXh0LmRhdGE/LmZhY3Q0VG9wVGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57Z2V0UGFnZVRleHQuZGF0YT8uZmFjdDRCaWdUZXh0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9PntnZXRQYWdlVGV4dC5kYXRhPy5mYWN0NEJpZ1RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlR2V0UGFnZVRleHRRdWVyeSIsInN0eWxlcyIsIk1haW5CbG9jayIsImdldFBhZ2VUZXh0IiwibW9ja1JlcyIsInRvcFNtYWxsVGV4dE9uZSIsImJpZ1RleHRPbmUiLCJib3R0b21TbWFsbFRleHRPbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluQmxvY2tXcmFwcGVyIiwibGVmdCIsInRyYXZlbFdyYXBwZXIiLCJoNCIsImJpZ0giLCJwIiwic21hbGxUZXh0Iiwic3RhcnRCdXR0b24iLCJyaWdodCIsImZhY3RCb2R5IiwiZmFjdFRvcFRleHQiLCJkYXRhIiwiZmFjdDFUb3BUZXh0IiwidGV4dEJsb2NrIiwiZmFjdEJpZ1RleHQiLCJmYWN0MUJpZ1RleHQiLCJmYWN0Qm90dG9tVGV4dCIsImZhY3QxU21hbGxUZXh0IiwiZmFjdEJvZHkyIiwiZmFjdDJUb3BUZXh0IiwiZmFjdEJvZHkzIiwiZmFjdDNUb3BUZXh0IiwiZmFjdDNCaWdUZXh0IiwiZmFjdEJvZHk0IiwiZmFjdDRUb3BUZXh0IiwiZmFjdDRCaWdUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/mainBlock/MainBlock.tsx\n"));

/***/ })

});