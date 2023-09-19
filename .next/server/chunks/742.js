exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 220:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6917, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7855, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2061, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1624, 23))

/***/ }),

/***/ 6594:
/***/ (() => {



/***/ }),

/***/ 2712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "inter": () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default.a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1658);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3918);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7057);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5789);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: "bg-black text-slate-12 font-sans",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().variable), "font-sans"),
                children: children
            })
        })
    });
}



/***/ }),

/***/ 7324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getEmails),
/* harmony export */   "q": () => (/* binding */ CONTENT_DIR)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const CONTENT_DIR = "emails";
const getEmails = async ()=>{
    const emailsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), CONTENT_DIR);
    const filenames = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(emailsDirectory);
    const emails = filenames.map((file)=>file.replace(/\.(jsx|tsx)$/g, "")).filter((file)=>file !== "components");
    return {
        emails,
        filenames
    };
};


/***/ }),

/***/ 1313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default.a)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5666);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7641);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function RootLayout({ children  }) {
    return /*#__PURE__*/ _jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ _jsx("body", {
            className: "bg-black text-slate-12 font-sans",
            children: /*#__PURE__*/ _jsx("div", {
                className: classnames(inter.variable, "font-sans"),
                children: children
            })
        })
    });
}



/***/ }),

/***/ 5725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7641);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2416);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8447);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__);





const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ asChild , appearance ="white" , className , children , size ="2" , ...props }, forwardedRef)=>{
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(getSize(size), getAppearance(appearance), "inline-flex items-center justify-center border font-medium", className);
    return asChild ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {
        ref: forwardedRef,
        ...props,
        className: classNames,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slottable, {
            children: children
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ref: forwardedRef,
        className: classNames,
        ...props,
        children: children
    });
});
Button.displayName = "Button";
const getAppearance = (appearance)=>{
    switch(appearance){
        case undefined:
        case "white":
            return [
                "bg-white text-black",
                "hover:bg-white/90",
                "focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-white/90"
            ];
        case "gradient":
            return [
                "bg-gradient backdrop-blur-[20px] border-[#34343A]",
                "hover:bg-gradientHover",
                "focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-gradientHover"
            ];
        default:
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(appearance);
    }
};
const getSize = (size)=>{
    switch(size){
        case "1":
            return "";
        case undefined:
        case "2":
            return "text-[14px] h-8 px-3 rounded-md gap-2";
        case "3":
            return "text-[14px] h-10 px-4 rounded-md gap-2";
        case "4":
            return "text-base h-11 px-4 rounded-md gap-2";
        default:
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(size);
    }
};


/***/ }),

/***/ 9145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7641);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1107);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const theme = {
    plain: {
        color: "#EDEDEF",
        fontSize: 13,
        fontFamily: "MonoLisa, Menlo, monospace"
    },
    styles: [
        {
            types: [
                "comment"
            ],
            style: {
                color: "#706F78"
            }
        },
        {
            types: [
                "atrule",
                "keyword",
                "attr-name",
                "selector"
            ],
            style: {
                color: "#7E7D86"
            }
        },
        {
            types: [
                "punctuation",
                "operator"
            ],
            style: {
                color: "#706F78"
            }
        },
        {
            types: [
                "class-name",
                "function",
                "tag",
                "key-white"
            ],
            style: {
                color: "#EDEDEF"
            }
        }
    ]
};
const Code = ({ children , language ="html"  })=>{
    const [isCopied, setIsCopied] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
    const value = children.trim();
    const file = new File([
        value
    ], `email.${language}`);
    const url = URL.createObjectURL(file);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        ...prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__/* .defaultProps */ .lG,
        theme: theme,
        code: value,
        language: language,
        children: ({ tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute right-0 top-0 h-px w-[200px]",
                        style: {
                            background: "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.6719) 64.41%, rgba(236, 72, 153, 0) 98.93%)"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-4 h-[650px] overflow-auto",
                        children: tokens.map((line, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ...getLineProps({
                                    line,
                                    key: i
                                }),
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("whitespace-pre", {
                                    "before:text-slate-11 before:mr-2 before:content-['$']": language === "bash" && tokens && tokens.length === 1
                                }),
                                children: line.map((token, key)=>{
                                    const isException = token.content === "from" && line[key + 1]?.content === ":";
                                    const newTypes = isException ? [
                                        ...token.types,
                                        "key-white"
                                    ] : token.types;
                                    token.types = newTypes;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            ...getTokenProps({
                                                token,
                                                key
                                            })
                                        })
                                    }, key);
                                })
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute left-0 bottom-0 h-px w-[200px]",
                        style: {
                            background: "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.6719) 64.41%, rgba(236, 72, 153, 0) 98.93%)"
                        }
                    })
                ]
            })
    });
};


/***/ }),

/***/ 9121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8447);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7641);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2416);





const Heading = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ as: Tag = "h1" , size ="3" , className , color ="white" , children , weight ="bold" , ...props }, forwardedRef)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {
        ref: forwardedRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, getSizesClassNames(size), getColorClassNames(color), getWeightClassNames(weight)),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
            children: children
        })
    }));
const getSizesClassNames = (size)=>{
    switch(size){
        case "1":
            return "text-xs";
        case "2":
            return "text-sm";
        case undefined:
        case "3":
            return "text-base";
        case "4":
            return "text-lg";
        case "5":
            return "text-xl tracking-[-0.16px]";
        case "6":
            return "text-2xl tracking-[-0.288px]";
        case "7":
            return "text-[28px] leading-[34px] tracking-[-0.416px]";
        case "8":
            return "text-[35px] leading-[42px] tracking-[-0.64px]";
        case "9":
            return "text-6xl leading-[73px] tracking-[-0.896px]";
        case "10":
            return [
                "text-[38px] leading-[46px]",
                "md:text-[70px] md:leading-[85px] tracking-[-1.024px;]"
            ];
        default:
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(size);
    }
};
const getColorClassNames = (color)=>{
    switch(color){
        case "gray":
            return "text-slate-11";
        case "white":
        case undefined:
            return "text-slate-12";
        default:
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(color);
    }
};
const getWeightClassNames = (weight)=>{
    switch(weight){
        case "medium":
            return "font-medium";
        case "bold":
        case undefined:
            return "font-bold";
        default:
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(weight);
    }
};
Heading.displayName = "Heading";


/***/ }),

/***/ 3514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Logo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ ...props }, forwardedRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "119",
        height: "32",
        viewBox: "0 0 119 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_27_291)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.4558 24.4853C25.2339 23.7073 25.3805 22.6549 25.2947 21.746C25.2078 20.8254 24.8697 19.8258 24.3896 18.8287C23.957 17.9302 23.3802 16.9745 22.6821 16C23.3802 15.0255 23.957 14.0698 24.3896 13.1713C24.8697 12.1742 25.2078 11.1746 25.2947 10.254C25.3805 9.34508 25.2339 8.29273 24.4558 7.51472C23.6778 6.73671 22.6255 6.59004 21.7165 6.67584C20.796 6.76273 19.7964 7.10086 18.7993 7.58094C17.9007 8.01357 16.945 8.59036 15.9706 9.28842C14.9961 8.59036 14.0404 8.01357 13.1418 7.58094C12.1447 7.10086 11.1451 6.76273 10.2246 6.67584C9.31564 6.59004 8.26329 6.73671 7.48528 7.51472C6.70727 8.29273 6.5606 9.34508 6.6464 10.254C6.7333 11.1746 7.07142 12.1742 7.5515 13.1713C7.98414 14.0698 8.56092 15.0255 9.25898 16C8.56092 16.9745 7.98414 17.9302 7.5515 18.8287C7.07142 19.8258 6.7333 20.8254 6.6464 21.746C6.5606 22.6549 6.70727 23.7073 7.48528 24.4853C8.26329 25.2633 9.31564 25.41 10.2246 25.3242C11.1451 25.2373 12.1447 24.8991 13.1418 24.4191C14.0404 23.9864 14.9961 23.4096 15.9706 22.7116C16.945 23.4096 17.9007 23.9864 18.7993 24.4191C19.7964 24.8991 20.796 25.2373 21.7165 25.3242C22.6255 25.41 23.6778 25.2633 24.4558 24.4853ZM15.9706 20.948C16.8399 20.2684 17.724 19.4874 18.591 18.6205C19.458 17.7535 20.239 16.8693 20.9186 16C20.239 15.1307 19.458 14.2465 18.591 13.3795C17.724 12.5126 16.8399 11.7316 15.9706 11.052C15.1012 11.7316 14.2171 12.5126 13.3501 13.3795C12.4831 14.2465 11.7021 15.1307 11.0225 16C11.7021 16.8693 12.4831 17.7535 13.3501 18.6205C14.2171 19.4874 15.1012 20.2684 15.9706 20.948ZM17.1498 21.8145C17.968 21.1558 18.7885 20.4195 19.5893 19.6187C20.39 18.818 21.1264 17.9974 21.7851 17.1792C23.7187 19.9919 24.4627 22.4819 23.4576 23.487C22.4524 24.4922 19.9625 23.7482 17.1498 21.8145ZM10.156 17.1792C10.8148 17.9974 11.5511 18.818 12.3518 19.6187C13.1526 20.4195 13.9731 21.1558 14.7914 21.8145C11.9786 23.7482 9.48871 24.4922 8.48355 23.487C7.47839 22.4819 8.22238 19.9919 10.156 17.1792ZM10.156 14.8208C10.8148 14.0026 11.5511 13.182 12.3518 12.3813C13.1526 11.5805 13.9731 10.8442 14.7914 10.1855C11.9786 8.25182 9.48871 7.50783 8.48355 8.51299C7.47839 9.51815 8.22238 12.0081 10.156 14.8208ZM17.1498 10.1855C17.968 10.8442 18.7885 11.5805 19.5893 12.3813C20.39 13.182 21.1264 14.0026 21.7851 14.8208C23.7187 12.0081 24.4627 9.51815 23.4576 8.51299C22.4524 7.50783 19.9625 8.25182 17.1498 10.1855Z",
                    fill: "white",
                    stroke: "white",
                    strokeWidth: "0.5"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36 22.176V13.744H37.936L37.968 16.432L37.696 15.824C37.8133 15.3973 38.016 15.0133 38.304 14.672C38.592 14.3307 38.9227 14.064 39.296 13.872C39.68 13.6693 40.08 13.568 40.496 13.568C40.6773 13.568 40.848 13.584 41.008 13.616C41.1787 13.648 41.3173 13.6853 41.424 13.728L40.896 15.888C40.7787 15.824 40.6347 15.7707 40.464 15.728C40.2933 15.6853 40.1227 15.664 39.952 15.664C39.6853 15.664 39.4293 15.7173 39.184 15.824C38.9493 15.92 38.7413 16.0587 38.56 16.24C38.3787 16.4213 38.2347 16.6347 38.128 16.88C38.032 17.1147 37.984 17.3813 37.984 17.68V22.176H36Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M45.907 22.336C45.0217 22.336 44.2377 22.1493 43.555 21.776C42.883 21.4027 42.355 20.896 41.971 20.256C41.5977 19.6053 41.411 18.864 41.411 18.032C41.411 17.3707 41.5177 16.768 41.731 16.224C41.9443 15.68 42.2377 15.2107 42.611 14.816C42.995 14.4107 43.4483 14.1013 43.971 13.888C44.5043 13.664 45.0857 13.552 45.715 13.552C46.2697 13.552 46.787 13.6587 47.267 13.872C47.747 14.0853 48.163 14.3787 48.515 14.752C48.867 15.1147 49.1337 15.552 49.315 16.064C49.507 16.5653 49.5977 17.1147 49.587 17.712L49.571 18.4H42.739L42.371 17.056H47.923L47.667 17.328V16.976C47.635 16.6453 47.5283 16.3573 47.347 16.112C47.1657 15.856 46.931 15.6587 46.643 15.52C46.3657 15.3707 46.0563 15.296 45.715 15.296C45.1923 15.296 44.7497 15.3973 44.387 15.6C44.035 15.8027 43.7683 16.096 43.587 16.48C43.4057 16.8533 43.315 17.3227 43.315 17.888C43.315 18.432 43.427 18.9067 43.651 19.312C43.8857 19.7173 44.211 20.032 44.627 20.256C45.0537 20.4693 45.5497 20.576 46.115 20.576C46.5097 20.576 46.8723 20.512 47.203 20.384C47.5337 20.256 47.891 20.0267 48.275 19.696L49.251 21.056C48.963 21.3227 48.6323 21.552 48.259 21.744C47.8963 21.9253 47.5123 22.0693 47.107 22.176C46.7017 22.2827 46.3017 22.336 45.907 22.336Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M54.094 22.336C53.4007 22.336 52.7713 22.144 52.206 21.76C51.6407 21.376 51.1873 20.8533 50.846 20.192C50.5047 19.5307 50.334 18.7787 50.334 17.936C50.334 17.0933 50.5047 16.3413 50.846 15.68C51.1873 15.0187 51.6513 14.5013 52.238 14.128C52.8247 13.7547 53.486 13.568 54.222 13.568C54.6487 13.568 55.038 13.632 55.39 13.76C55.742 13.8773 56.0513 14.048 56.318 14.272C56.5847 14.496 56.8033 14.752 56.974 15.04C57.1553 15.328 57.278 15.6373 57.342 15.968L56.91 15.856V13.744H58.894V22.176H56.894V20.16L57.358 20.08C57.2833 20.368 57.1447 20.6507 56.942 20.928C56.75 21.1947 56.5047 21.4347 56.206 21.648C55.918 21.8507 55.5927 22.016 55.23 22.144C54.878 22.272 54.4993 22.336 54.094 22.336ZM54.638 20.592C55.0967 20.592 55.502 20.48 55.854 20.256C56.206 20.032 56.478 19.7227 56.67 19.328C56.8727 18.9227 56.974 18.4587 56.974 17.936C56.974 17.424 56.8727 16.9707 56.67 16.576C56.478 16.1813 56.206 15.872 55.854 15.648C55.502 15.424 55.0967 15.312 54.638 15.312C54.1793 15.312 53.774 15.424 53.422 15.648C53.0807 15.872 52.814 16.1813 52.622 16.576C52.43 16.9707 52.334 17.424 52.334 17.936C52.334 18.4587 52.43 18.9227 52.622 19.328C52.814 19.7227 53.0807 20.032 53.422 20.256C53.774 20.48 54.1793 20.592 54.638 20.592Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M64.3716 22.336C63.5823 22.336 62.873 22.144 62.2436 21.76C61.6143 21.376 61.1183 20.8533 60.7556 20.192C60.393 19.5307 60.2116 18.784 60.2116 17.952C60.2116 17.12 60.393 16.3733 60.7556 15.712C61.1183 15.0507 61.6143 14.528 62.2436 14.144C62.873 13.76 63.5823 13.568 64.3716 13.568C65.129 13.568 65.817 13.712 66.4356 14C67.0543 14.288 67.5343 14.688 67.8756 15.2L66.7876 16.512C66.6276 16.288 66.425 16.0853 66.1796 15.904C65.9343 15.7227 65.673 15.5787 65.3956 15.472C65.1183 15.3653 64.841 15.312 64.5636 15.312C64.0943 15.312 63.673 15.4293 63.2996 15.664C62.937 15.888 62.649 16.2027 62.4356 16.608C62.2223 17.0027 62.1156 17.4507 62.1156 17.952C62.1156 18.4533 62.2223 18.9013 62.4356 19.296C62.6596 19.6907 62.9583 20.0053 63.3316 20.24C63.705 20.4747 64.121 20.592 64.5796 20.592C64.857 20.592 65.1236 20.5493 65.3796 20.464C65.6463 20.368 65.897 20.2347 66.1316 20.064C66.3663 19.8933 66.585 19.68 66.7876 19.424L67.8756 20.752C67.513 21.2213 67.0116 21.6053 66.3716 21.904C65.7423 22.192 65.0756 22.336 64.3716 22.336Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M69.8726 22.176V11.6H71.8406V22.176H69.8726ZM68.2086 15.568V13.744H73.6806V15.568H68.2086Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M82.9945 22.336C82.1092 22.336 81.3252 22.1493 80.6425 21.776C79.9705 21.4027 79.4425 20.896 79.0585 20.256C78.6852 19.6053 78.4985 18.864 78.4985 18.032C78.4985 17.3707 78.6052 16.768 78.8185 16.224C79.0318 15.68 79.3252 15.2107 79.6985 14.816C80.0825 14.4107 80.5358 14.1013 81.0585 13.888C81.5918 13.664 82.1732 13.552 82.8025 13.552C83.3572 13.552 83.8745 13.6587 84.3545 13.872C84.8345 14.0853 85.2505 14.3787 85.6025 14.752C85.9545 15.1147 86.2212 15.552 86.4025 16.064C86.5945 16.5653 86.6852 17.1147 86.6745 17.712L86.6585 18.4H79.8265L79.4585 17.056H85.0105L84.7545 17.328V16.976C84.7225 16.6453 84.6158 16.3573 84.4345 16.112C84.2532 15.856 84.0185 15.6587 83.7305 15.52C83.4532 15.3707 83.1438 15.296 82.8025 15.296C82.2798 15.296 81.8372 15.3973 81.4745 15.6C81.1225 15.8027 80.8558 16.096 80.6745 16.48C80.4932 16.8533 80.4025 17.3227 80.4025 17.888C80.4025 18.432 80.5145 18.9067 80.7385 19.312C80.9732 19.7173 81.2985 20.032 81.7145 20.256C82.1412 20.4693 82.6372 20.576 83.2025 20.576C83.5972 20.576 83.9598 20.512 84.2905 20.384C84.6212 20.256 84.9785 20.0267 85.3625 19.696L86.3385 21.056C86.0505 21.3227 85.7198 21.552 85.3465 21.744C84.9838 21.9253 84.5998 22.0693 84.1945 22.176C83.7892 22.2827 83.3892 22.336 82.9945 22.336Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M87.9655 22.176V13.744H89.9015L89.9335 15.44L89.6135 15.568C89.7095 15.2907 89.8535 15.0347 90.0455 14.8C90.2375 14.5547 90.4668 14.3467 90.7335 14.176C91.0002 13.9947 91.2828 13.856 91.5815 13.76C91.8802 13.6533 92.1842 13.6 92.4935 13.6C92.9522 13.6 93.3575 13.6747 93.7095 13.824C94.0722 13.9627 94.3708 14.1867 94.6055 14.496C94.8508 14.8053 95.0322 15.2 95.1495 15.68L94.8455 15.616L94.9735 15.36C95.0908 15.104 95.2562 14.8747 95.4695 14.672C95.6828 14.4587 95.9228 14.272 96.1895 14.112C96.4562 13.9413 96.7335 13.8133 97.0215 13.728C97.3202 13.6427 97.6135 13.6 97.9015 13.6C98.5415 13.6 99.0748 13.728 99.5015 13.984C99.9282 14.24 100.248 14.6293 100.462 15.152C100.675 15.6747 100.782 16.32 100.782 17.088V22.176H98.7975V17.216C98.7975 16.7893 98.7388 16.4373 98.6215 16.16C98.5148 15.8827 98.3442 15.68 98.1095 15.552C97.8855 15.4133 97.6028 15.344 97.2615 15.344C96.9948 15.344 96.7388 15.392 96.4935 15.488C96.2588 15.5733 96.0562 15.7013 95.8855 15.872C95.7148 16.032 95.5815 16.2187 95.4855 16.432C95.3895 16.6453 95.3415 16.88 95.3415 17.136V22.176H93.3575V17.2C93.3575 16.7947 93.2988 16.4587 93.1815 16.192C93.0642 15.9147 92.8935 15.7067 92.6695 15.568C92.4455 15.4187 92.1735 15.344 91.8535 15.344C91.5868 15.344 91.3362 15.392 91.1015 15.488C90.8668 15.5733 90.6642 15.696 90.4935 15.856C90.3228 16.016 90.1895 16.2027 90.0935 16.416C89.9975 16.6293 89.9495 16.864 89.9495 17.12V22.176H87.9655Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M105.73 22.336C105.037 22.336 104.408 22.144 103.842 21.76C103.277 21.376 102.824 20.8533 102.482 20.192C102.141 19.5307 101.97 18.7787 101.97 17.936C101.97 17.0933 102.141 16.3413 102.482 15.68C102.824 15.0187 103.288 14.5013 103.874 14.128C104.461 13.7547 105.122 13.568 105.858 13.568C106.285 13.568 106.674 13.632 107.026 13.76C107.378 13.8773 107.688 14.048 107.954 14.272C108.221 14.496 108.44 14.752 108.61 15.04C108.792 15.328 108.914 15.6373 108.978 15.968L108.546 15.856V13.744H110.53V22.176H108.53V20.16L108.994 20.08C108.92 20.368 108.781 20.6507 108.578 20.928C108.386 21.1947 108.141 21.4347 107.842 21.648C107.554 21.8507 107.229 22.016 106.866 22.144C106.514 22.272 106.136 22.336 105.73 22.336ZM106.274 20.592C106.733 20.592 107.138 20.48 107.49 20.256C107.842 20.032 108.114 19.7227 108.306 19.328C108.509 18.9227 108.61 18.4587 108.61 17.936C108.61 17.424 108.509 16.9707 108.306 16.576C108.114 16.1813 107.842 15.872 107.49 15.648C107.138 15.424 106.733 15.312 106.274 15.312C105.816 15.312 105.41 15.424 105.058 15.648C104.717 15.872 104.45 16.1813 104.258 16.576C104.066 16.9707 103.97 17.424 103.97 17.936C103.97 18.4587 104.066 18.9227 104.258 19.328C104.45 19.7227 104.717 20.032 105.058 20.256C105.41 20.48 105.816 20.592 106.274 20.592Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M112.616 22.176V13.744H114.584V22.176H112.616ZM113.576 11.952C113.181 11.952 112.872 11.856 112.648 11.664C112.435 11.4613 112.328 11.1787 112.328 10.816C112.328 10.4747 112.44 10.1973 112.664 9.984C112.888 9.77067 113.192 9.664 113.576 9.664C113.981 9.664 114.291 9.76534 114.504 9.968C114.728 10.16 114.84 10.4427 114.84 10.816C114.84 11.1467 114.728 11.4187 114.504 11.632C114.28 11.8453 113.971 11.952 113.576 11.952Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M116.675 22.176V10.336H118.659V22.176H116.675Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_27_291",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "32",
                        height: "32",
                        rx: "8",
                        fill: "white"
                    })
                })
            })
        ]
    }));
Logo.displayName = "Logo";


/***/ }),

/***/ 7207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ Shell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7935);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6435);




const Shell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ title , navItems , children , markup , activeView , setActiveView  }, forwardedRef)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: forwardedRef,
        className: "flex justify-between h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__/* .Sidebar */ .Y, {
                navItems: navItems,
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "w-[calc(100%_-_275px)] bg-slate-2",
                children: [
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_topbar__WEBPACK_IMPORTED_MODULE_2__/* .Topbar */ .Z, {
                        title: title,
                        activeView: activeView,
                        setActiveView: setActiveView,
                        markup: markup
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-[calc(100vh_-_70px)] overflow-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-auto",
                            children: children
                        })
                    })
                ]
            })
        ]
    });
});
Shell.displayName = "Shell";


/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3514);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7641);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3533);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9121);
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5495);
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2952);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1799);








const Sidebar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className , navItems , title , ...props }, forwardedRef)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        ref: forwardedRef,
        className: "px-6 min-w-[275px] max-w-[275px] flex flex-col gap-4 border-r border-slate-6",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[70px] flex items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__/* .Logo */ .T, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "flex flex-col gap-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_6__.Root, {
                    defaultOpen: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_6__.Trigger, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex items-center gap-1", {
                                "cursor-default": navItems && navItems.length === 0
                            }),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    className: "text-slate-11",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center text-slate-11 transition ease-in-out duration-200 hover:text-slate-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                                            as: "h3",
                                            color: "gray",
                                            size: "2",
                                            weight: "medium",
                                            className: "transition ease-in-out duration-200 hover:text-slate-12",
                                            children: "All emails"
                                        }),
                                        navItems && navItems.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M12 15L8.5359 9.75L15.4641 9.75L12 15Z",
                                                fill: "currentColor"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        navItems && navItems.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_6__.Content, {
                            className: "relative mt-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-2.5  w-px h-full bg-slate-6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-2 flex flex-col truncate",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .LayoutGroup */ .S, {
                                        id: "sidebar",
                                        children: navItems && navItems.map((item)=>{
                                            const isCurrentPage = title === item;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: `/preview/${item}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__/* .motion.span */ .E.span, {
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("text-[14px] flex items-center font-medium gap-2 w-full pl-4 h-8 rounded-md text-slate-11 relative block transition ease-in-out duration-200", {
                                                        "text-cyan-11": isCurrentPage,
                                                        "hover:text-slate-12": title !== item
                                                    }),
                                                    children: [
                                                        isCurrentPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__/* .motion.span */ .E.span, {
                                                            layoutId: "sidebar",
                                                            className: "absolute left-0 right-0 top-0 bottom-0 rounded-md bg-cyan-5",
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            exit: {
                                                                opacity: 0
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "bg-cyan-11 w-px absolute top-1 left-2.5 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            className: "flex-shrink-0",
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z",
                                                                    stroke: "currentColor",
                                                                    strokeOpacity: "0.927",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M18 9.25H13.75V5",
                                                                    stroke: "currentColor",
                                                                    strokeOpacity: "0.927",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        }),
                                                        item
                                                    ]
                                                })
                                            }, item);
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
});
Sidebar.displayName = "Sidebar";


/***/ }),

/***/ 7896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8447);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7641);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2416);





const Text = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ as: Tag = "span" , size ="2" , color ="gray" , transform , weight ="normal" , className , children , ...props }, forwardedRef)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {
        ref: forwardedRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, transform, getSizesClassNames(size), getColorClassNames(color), getWeightClassNames(weight)),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
            children: children
        })
    }));
const getSizesClassNames = (size)=>{
    switch(size){
        case "1":
            return "text-xs";
        case undefined:
        case "2":
            return "text-sm";
        case "3":
            return "text-base";
        case "4":
            return "text-lg";
        case "5":
            return [
                "text-17px",
                "md:text-xl tracking-[-0.16px]"
            ];
        case "6":
            return "text-2xl tracking-[-0.288px]";
        case "7":
            return "text-[28px] leading-[34px] tracking-[-0.416px]";
        case "8":
            return "text-[35px] leading-[42px] tracking-[-0.64px]";
        case "9":
            return "text-6xl leading-[73px] tracking-[-0.896px]";
        default:
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(size);
    }
};
const getColorClassNames = (color)=>{
    switch(color){
        case "white":
            return "text-slate-12";
        case undefined:
        case "gray":
            return "text-slate-11";
        default:
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(color);
    }
};
const getWeightClassNames = (weight)=>{
    switch(weight){
        case undefined:
        case "normal":
            return "font-normal";
        case "medium":
            return "font-medium";
        default:
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t)(weight);
    }
};
Text.displayName = "Text";


/***/ }),

/***/ 7935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Topbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(7641);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/heading.tsx
var heading = __webpack_require__(9121);
// EXTERNAL MODULE: ./src/app/layout.tsx
var layout = __webpack_require__(1313);
// EXTERNAL MODULE: ./src/components/button.tsx
var components_button = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/components/text.tsx
var components_text = __webpack_require__(7896);
// EXTERNAL MODULE: ../node_modules/@radix-ui/react-popover/dist/index.js
var dist = __webpack_require__(1521);
;// CONCATENATED MODULE: ./src/components/send.tsx






const Send = ({ markup  })=>{
    const [to, setTo] = react_.useState("");
    const [subject, setSubject] = react_.useState("Testing React Email");
    const [isSending, setIsSending] = react_.useState(false);
    const onFormSubmit = async (e)=>{
        try {
            e.preventDefault();
            setIsSending(true);
            const response = await fetch("https://react.email/api/send/test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    to,
                    subject,
                    html: markup
                })
            });
            if (response.status === 429) {
                const { error  } = await response.json();
                alert(error);
            }
        } catch (e) {
            alert("Something went wrong. Please try again.");
        } finally{
            setIsSending(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist.Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Trigger, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "box-border outline-none self-center w-20 h-5 flex items-center justify-center rounded-lg text-center transition duration-300 ease-in-out border border-slate-6 text-slate-11 text-sm px-4 py-4 hover:border-slate-12 hover:text-slate-12 font-sans",
                    children: "Send"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Anchor, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Portal, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist.Content, {
                    align: "end",
                    className: `w-80 -mt-10 p-3 bg-black border border-slate-6 text-slate-11 rounded-lg font-sans ${layout/* inter.variable */.i.variable}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(dist.Close, {
                            "aria-label": "Close",
                            className: "absolute right-2 flex items-center justify-center w-6 h-6 text-xs text-slate-11 hover:text-slate-12 transition duration-300 ease-in-out rounded-full",
                            children: "✕"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: onFormSubmit,
                            className: "mt-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "to",
                                    className: "text-slate-10 text-xs uppercase mb-2 block",
                                    children: "Recipient"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    autoFocus: true,
                                    className: "appearance-none rounded-lg px-2 py-1 mb-3 outline-none w-full bg-slate-3 border placeholder-slate-8 border-slate-6 text-slate-12 text-sm focus:ring-1 focus:ring-slate-12 transition duration-300 ease-in-out",
                                    onChange: (e)=>setTo(e.target.value),
                                    defaultValue: to,
                                    placeholder: "you@example.com",
                                    type: "email",
                                    id: "to",
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "subject",
                                    className: "text-slate-10 text-xs uppercase mb-2 block",
                                    children: "Subject"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "appearance-none rounded-lg px-2 py-1 mb-3 outline-none w-full bg-slate-3 border placeholder-slate-8 border-slate-6 text-slate-12 text-sm focus:ring-1 focus:ring-slate-12 transition duration-300 ease-in-out",
                                    onChange: (e)=>setSubject(e.target.value),
                                    defaultValue: subject,
                                    placeholder: "My Email",
                                    type: "text",
                                    id: "subject",
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    className: "appearance-none checked:bg-blue-500"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_text/* Text */.x, {
                                            className: "inline-block",
                                            size: "1",
                                            children: [
                                                "Powered by",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "hover:text-slate-12 transition ease-in-out duration-300",
                                                    href: "https://resend.com",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Resend"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                            type: "submit",
                                            disabled: subject.length === 0 || to.length === 0 || isSending,
                                            className: "disabled:bg-slate-11 disabled:border-transparent",
                                            children: "Send"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../node_modules/@radix-ui/react-toggle-group/dist/index.js
var react_toggle_group_dist = __webpack_require__(1351);
// EXTERNAL MODULE: ../node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs + 4 modules
var LayoutGroup = __webpack_require__(2952);
// EXTERNAL MODULE: ../node_modules/framer-motion/dist/es/render/dom/motion.mjs + 185 modules
var motion = __webpack_require__(1799);
;// CONCATENATED MODULE: ./src/components/topbar.tsx







const Topbar = /*#__PURE__*/ react_.forwardRef(({ className , title , markup , activeView , setActiveView , ...props }, forwardedRef)=>{
    const columnWidth = "w-[200px]";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        ref: forwardedRef,
        className: classnames_default()("bg-black flex relative items-center px-6 justify-between h-[70px] border-b border-slate-6", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex items-center overflow-hidden ${columnWidth}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(heading/* Heading */.X, {
                    as: "h2",
                    size: "2",
                    weight: "medium",
                    className: "truncate",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${columnWidth}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutGroup/* LayoutGroup */.S, {
                    id: "topbar",
                    children: setActiveView && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_toggle_group_dist.Root, {
                        className: "inline-block items-center bg-slate-2 border border-slate-6 rounded-md overflow-hidden",
                        type: "single",
                        value: activeView,
                        "aria-label": "View mode",
                        onValueChange: (value)=>{
                            if (!value) return;
                            setActiveView(value);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_toggle_group_dist.Item, {
                                value: "desktop",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion.div */.E.div, {
                                    className: classnames_default()("text-sm font-medium px-3 py-2 transition ease-in-out duration-200 relative hover:text-slate-12", {
                                        "text-slate-11": activeView === "source",
                                        "text-slate-12": activeView === "desktop"
                                    }),
                                    children: [
                                        activeView === "desktop" && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.span */.E.span, {
                                            layoutId: "topbar",
                                            className: "absolute left-0 right-0 top-0 bottom-0 bg-slate-4",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            }
                                        }),
                                        "Desktop"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_toggle_group_dist.Item, {
                                value: "source",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion.div */.E.div, {
                                    className: classnames_default()("text-sm font-medium px-3 py-2 transition ease-in-out duration-200 relative hover:text-slate-12", {
                                        "text-slate-11": activeView === "desktop",
                                        "text-slate-12": activeView === "source"
                                    }),
                                    children: [
                                        activeView === "source" && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.span */.E.span, {
                                            layoutId: "nav",
                                            className: "absolute left-0 right-0 top-0 bottom-0 bg-slate-4",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            }
                                        }),
                                        "Source"
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            markup && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex justify-end ${columnWidth}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Send, {
                    markup: markup
                })
            })
        ]
    });
});
Topbar.displayName = "Topbar";


/***/ }),

/***/ 2416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ unreachable)
/* harmony export */ });
const unreachable = (condition, message = `Entered unreachable code. Received '${condition}'.`)=>{
    throw new TypeError(message);
};


/***/ }),

/***/ 6309:
/***/ (() => {



/***/ }),

/***/ 7057:
/***/ (() => {



/***/ })

};
;