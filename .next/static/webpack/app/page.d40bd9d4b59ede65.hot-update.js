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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_store_pageTextApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/store/pageTextApi */ \"(app-client)/./src/app/store/pageTextApi.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-client)/./src/app/components/mainBlock/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction MainBlock() {\n    _s();\n    const getPageText = (0,_app_store_pageTextApi__WEBPACK_IMPORTED_MODULE_1__.useGetPageTextQuery)(\"\");\n    const mockRes = {\n        topSmallTextOne: \"мы\",\n        bigTextOne: \"1\",\n        bottomSmallTextOne: \"на рынке\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mainBlockWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().travelWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bigH),\n                                children: \"ПУТЕШЕСТВИЕ\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().smallText),\n                                children: \"на красную планету\"\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().startButton),\n                        children: \"Начать путешествие\"\n                    }, void 0, false, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: mockRes.topSmallTextOne\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: mockRes.bigTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: mockRes.bottomSmallTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: mockRes.topSmallTextOne\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: mockRes.bigTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: mockRes.bottomSmallTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: mockRes.topSmallTextOne\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: mockRes.bigTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: mockRes.bottomSmallTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factTopText),\n                                children: mockRes.topSmallTextOne\n                            }, void 0, false, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textBlock),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBigText),\n                                        children: mockRes.bigTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().factBottomText),\n                                        children: mockRes.bottomSmallTextOne\n                                    }, void 0, false, {\n                                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aleksander/repositories/spacex/src/app/components/mainBlock/MainBlock.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(MainBlock, \"dcIFBPwauyaDph4hpKCe59ogP9M=\", false, function() {\n    return [\n        _app_store_pageTextApi__WEBPACK_IMPORTED_MODULE_1__.useGetPageTextQuery\n    ];\n});\n_c = MainBlock;\nvar _c;\n$RefreshReg$(_c, \"MainBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW5CbG9jay9NYWluQmxvY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkQ7QUFFcEI7QUFHMUIsU0FBU0U7O0lBRXhCLE1BQU1DLGNBQWNILDJFQUFtQkEsQ0FBQztJQUV4QyxNQUFNSSxVQUFVO1FBQ1pDLGlCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxvQkFBbUI7SUFDdkI7SUFFSSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1IsNkVBQXVCOzswQkFDL0IsOERBQUNPO2dCQUFJQyxXQUFXUixpRUFBVzs7a0NBQ3ZCLDhEQUFDTzt3QkFBSUMsV0FBV1IsMEVBQW9COzswQ0FDaEMsOERBQUNZO2dDQUFHSixXQUFXUixpRUFBVzswQ0FBRTs7Ozs7OzBDQUM1Qiw4REFBQ2M7Z0NBQUVOLFdBQVdSLHNFQUFnQjswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVwQyw4REFBQ087d0JBQUlDLFdBQVdSLHdFQUFrQjtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ087Z0JBQUlDLFdBQVdSLGtFQUFZOztrQ0FFcEIsOERBQUNPO3dCQUFJQyxXQUFXUixxRUFBZTs7MENBQzNCLDhEQUFDYztnQ0FBRU4sV0FBV1Isd0VBQWtCOzBDQUFHRyxRQUFRQyxlQUFlOzs7Ozs7MENBQzFELDhEQUFDRztnQ0FBSUMsV0FBV1Isc0VBQWdCOztrREFDNUIsOERBQUNZO3dDQUFHSixXQUFXUix3RUFBa0I7a0RBQUdHLFFBQVFFLFVBQVU7Ozs7OztrREFDdEQsOERBQUNTO3dDQUFFTixXQUFXUiwyRUFBcUI7a0RBQUdHLFFBQVFHLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd4RSw4REFBQ0M7d0JBQUlDLFdBQVdSLHFFQUFlOzswQ0FDM0IsOERBQUNjO2dDQUFFTixXQUFXUix3RUFBa0I7MENBQUdHLFFBQVFDLGVBQWU7Ozs7OzswQ0FDMUQsOERBQUNHO2dDQUFJQyxXQUFXUixzRUFBZ0I7O2tEQUM1Qiw4REFBQ1k7d0NBQUdKLFdBQVdSLHdFQUFrQjtrREFBR0csUUFBUUUsVUFBVTs7Ozs7O2tEQUN0RCw4REFBQ1M7d0NBQUVOLFdBQVdSLDJFQUFxQjtrREFBR0csUUFBUUcsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3hFLDhEQUFDQzt3QkFBSUMsV0FBV1IscUVBQWU7OzBDQUMzQiw4REFBQ2M7Z0NBQUVOLFdBQVdSLHdFQUFrQjswQ0FBR0csUUFBUUMsZUFBZTs7Ozs7OzBDQUMxRCw4REFBQ0c7Z0NBQUlDLFdBQVdSLHNFQUFnQjs7a0RBQzVCLDhEQUFDWTt3Q0FBR0osV0FBV1Isd0VBQWtCO2tEQUFHRyxRQUFRRSxVQUFVOzs7Ozs7a0RBQ3RELDhEQUFDUzt3Q0FBRU4sV0FBV1IsMkVBQXFCO2tEQUFHRyxRQUFRRyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHeEUsOERBQUNDO3dCQUFJQyxXQUFXUixxRUFBZTs7MENBQzNCLDhEQUFDYztnQ0FBRU4sV0FBV1Isd0VBQWtCOzBDQUFHRyxRQUFRQyxlQUFlOzs7Ozs7MENBQzFELDhEQUFDRztnQ0FBSUMsV0FBV1Isc0VBQWdCOztrREFDNUIsOERBQUNZO3dDQUFHSixXQUFXUix3RUFBa0I7a0RBQUdHLFFBQVFFLFVBQVU7Ozs7OztrREFDdEQsOERBQUNTO3dDQUFFTixXQUFXUiwyRUFBcUI7a0RBQUdHLFFBQVFHLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hHO0dBckR3Qkw7O1FBRUpGLHVFQUFtQkE7OztLQUZmRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbkJsb2NrL01haW5CbG9jay50c3g/Y2M0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZUdldFBhZ2VUZXh0UXVlcnkgfSBmcm9tICdAL2FwcC9zdG9yZS9wYWdlVGV4dEFwaSdcclxuaW1wb3J0IEZhY3QgZnJvbSAnLi4vZmFjdC9mYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5CbG9jaygpe1xyXG5cclxuY29uc3QgZ2V0UGFnZVRleHQgPSB1c2VHZXRQYWdlVGV4dFF1ZXJ5KCcnKVxyXG5cclxuY29uc3QgbW9ja1JlcyA9IHtcclxuICAgIHRvcFNtYWxsVGV4dE9uZTon0LzRiycsXHJcbiAgICBiaWdUZXh0T25lOiAnMScsXHJcbiAgICBib3R0b21TbWFsbFRleHRPbmU6J9C90LAg0YDRi9C90LrQtSdcclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQmxvY2tXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmF2ZWxXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmJpZ0h9PtCf0KPQotCV0KjQldCh0KLQktCY0JU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbFRleHR9PtC90LAg0LrRgNCw0YHQvdGD0Y4g0L/Qu9Cw0L3QtdGC0YM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFydEJ1dHRvbn0+0J3QsNGH0LDRgtGMINC/0YPRgtC10YjQtdGB0YLQstC40LU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdFRvcFRleHR9Pnttb2NrUmVzLnRvcFNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57bW9ja1Jlcy5iaWdUZXh0T25lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9Pnttb2NrUmVzLmJvdHRvbVNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdFRvcFRleHR9Pnttb2NrUmVzLnRvcFNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57bW9ja1Jlcy5iaWdUZXh0T25lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9Pnttb2NrUmVzLmJvdHRvbVNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdFRvcFRleHR9Pnttb2NrUmVzLnRvcFNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57bW9ja1Jlcy5iaWdUZXh0T25lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9Pnttb2NrUmVzLmJvdHRvbVNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdFRvcFRleHR9Pnttb2NrUmVzLnRvcFNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmZhY3RCaWdUZXh0fT57bW9ja1Jlcy5iaWdUZXh0T25lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdEJvdHRvbVRleHR9Pnttb2NrUmVzLmJvdHRvbVNtYWxsVGV4dE9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VHZXRQYWdlVGV4dFF1ZXJ5Iiwic3R5bGVzIiwiTWFpbkJsb2NrIiwiZ2V0UGFnZVRleHQiLCJtb2NrUmVzIiwidG9wU21hbGxUZXh0T25lIiwiYmlnVGV4dE9uZSIsImJvdHRvbVNtYWxsVGV4dE9uZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5CbG9ja1dyYXBwZXIiLCJsZWZ0IiwidHJhdmVsV3JhcHBlciIsImg0IiwiYmlnSCIsInAiLCJzbWFsbFRleHQiLCJzdGFydEJ1dHRvbiIsInJpZ2h0IiwiZmFjdEJvZHkiLCJmYWN0VG9wVGV4dCIsInRleHRCbG9jayIsImZhY3RCaWdUZXh0IiwiZmFjdEJvdHRvbVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/mainBlock/MainBlock.tsx\n"));

/***/ })

});