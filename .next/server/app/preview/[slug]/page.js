(() => {
var exports = {};
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/Footer": [
		3044,
		44
	],
	"./components/Footer.tsx": [
		3044,
		44
	],
	"./customer-subscription": [
		9289,
		44,
		289
	],
	"./customer-subscription.tsx": [
		9289,
		44,
		289
	],
	"./profile-verified": [
		5950,
		44,
		950
	],
	"./profile-verified.tsx": [
		5950,
		44,
		950
	],
	"./seller-subscription": [
		9008,
		44,
		8
	],
	"./seller-subscription.tsx": [
		9008,
		44,
		8
	],
	"./thanks-for-contacting": [
		3358,
		44,
		358
	],
	"./thanks-for-contacting.tsx": [
		3358,
		44,
		358
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 102;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ ((module) => {

"use strict";
module.exports = require("@react-email/components");

/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1668:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 852:
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 6424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "GlobalError": () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ next_dist_compiled_react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_7__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__.staticGenerationAsyncStorage),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1735);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6807);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1954);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8873);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(929);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2055);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4653);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4580);

    const tree = {
        children: [
        '',
        {
        children: [
        'preview',
        {
        children: [
        '[slug]',
        {
        children: ['', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6217)), "D:\\Freelance\\Dhaatri Naturals\\EmailTemplate\\lynktown\\test\\.react-email\\src\\app\\preview\\[slug]\\page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2712)), "D:\\Freelance\\Dhaatri Naturals\\EmailTemplate\\lynktown\\test\\.react-email\\src\\app\\layout.tsx"],
          
        }
      ]
      }.children;
    const pages = ["D:\\Freelance\\Dhaatri Naturals\\EmailTemplate\\lynktown\\test\\.react-email\\src\\app\\preview\\[slug]\\page.tsx"];

    
    
    
    

    
    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 3188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8120))

/***/ }),

/***/ 6217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "dynamicParams": () => (/* binding */ dynamicParams),
/* harmony export */   "generateMetadata": () => (/* binding */ generateMetadata),
/* harmony export */   "generateStaticParams": () => (/* binding */ generateStaticParams)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1658);
/* harmony import */ var _utils_get_emails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7324);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_email_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1215);
/* harmony import */ var _react_email_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_email_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7478);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_preview__WEBPACK_IMPORTED_MODULE_3__);





const dynamicParams = true;
async function generateStaticParams() {
    const { emails  } = await (0,_utils_get_emails__WEBPACK_IMPORTED_MODULE_1__/* .getEmails */ .G)();
    const paths = emails.map((email)=>{
        return {
            slug: email
        };
    });
    return paths;
}
async function Page({ params  }) {
    const { emails , filenames  } = await (0,_utils_get_emails__WEBPACK_IMPORTED_MODULE_1__/* .getEmails */ .G)();
    const template = filenames.filter((email)=>{
        const [fileName] = email.split(".");
        return params.slug === fileName;
    });
    const Email = (await __webpack_require__(102)(`./${params.slug}`)).default;
    const markup = (0,_react_email_render__WEBPACK_IMPORTED_MODULE_4__.render)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Email, {}), {
        pretty: true
    });
    const plainText = (0,_react_email_render__WEBPACK_IMPORTED_MODULE_4__.render)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Email, {}), {
        plainText: true
    });
    const path = `${process.cwd()}/${_utils_get_emails__WEBPACK_IMPORTED_MODULE_1__/* .CONTENT_DIR */ .q}/${template[0]}`;
    const reactMarkup = await fs__WEBPACK_IMPORTED_MODULE_2__.promises.readFile(path, {
        encoding: "utf-8"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_preview__WEBPACK_IMPORTED_MODULE_3___default()), {
        navItems: emails,
        slug: params.slug,
        markup: markup,
        reactMarkup: reactMarkup,
        plainText: plainText
    });
}
async function generateMetadata({ params  }) {
    return {
        title: `${params.slug} — React Email`
    };
}


/***/ }),

/***/ 7478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(6750);
module.exports = createProxy("D:\\Freelance\\Dhaatri Naturals\\EmailTemplate\\lynktown\\test\\.react-email\\src\\app\\preview\\[slug]\\preview.tsx");


/***/ }),

/***/ 8120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Preview)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/components/shell.tsx
var shell = __webpack_require__(7207);
// EXTERNAL MODULE: ../node_modules/next/navigation.js
var navigation = __webpack_require__(2865);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(7641);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/components/icon-button.tsx



const IconButton = /*#__PURE__*/ react_.forwardRef(({ children , className , ...props }, forwardedRef)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        ...props,
        ref: forwardedRef,
        className: classnames_default()("rounded text-slate-11 focus:text-slate-12 ease-in-out transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-8 hover:text-slate-12", className),
        children: children
    }));
IconButton.displayName = "IconButton";

;// CONCATENATED MODULE: ./src/components/icon-base.tsx


const IconBase = /*#__PURE__*/ react_.forwardRef(({ size =20 , ...props }, forwardedRef)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        ref: forwardedRef,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props
    }));
IconBase.displayName = "IconBase";

;// CONCATENATED MODULE: ./src/components/icon-clipboard.tsx



const IconClipboard = /*#__PURE__*/ react_.forwardRef(({ ...props }, forwardedRef)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconBase, {
        ref: forwardedRef,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.75 12.25H14.25",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.75 15.25H14.25",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    }));
IconClipboard.displayName = "IconClipboard";

;// CONCATENATED MODULE: ./src/components/icon-download.tsx



const IconDownload = /*#__PURE__*/ react_.forwardRef(({ ...props }, forwardedRef)=>/*#__PURE__*/ jsx_runtime_.jsx(IconBase, {
        ref: forwardedRef,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4.75 14.75v1.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-1.5M12 14.25v-9.5M8.75 10.75l3.25 3.5 3.25-3.5",
            stroke: "currentColor",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }));
IconDownload.displayName = "IconDownload";

;// CONCATENATED MODULE: ./src/components/icon-check.tsx



const IconCheck = /*#__PURE__*/ react_.forwardRef(({ ...props }, forwardedRef)=>/*#__PURE__*/ jsx_runtime_.jsx(IconBase, {
        ref: forwardedRef,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.25 8.75L10.406 15.25L7.75 12.75",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }));
IconCheck.displayName = "IconCheck";

;// CONCATENATED MODULE: ./src/utils/copy-text-to-clipboard.ts
const copyTextToClipboard = async (text)=>{
    try {
        await navigator.clipboard.writeText(text);
    } catch  {
        throw new Error("Not able to copy");
    }
};

;// CONCATENATED MODULE: ./src/utils/language-map.ts
const languageMap = {
    jsx: "React",
    markup: "HTML",
    markdown: "Plain Text"
};
/* harmony default export */ const language_map = (languageMap);

// EXTERNAL MODULE: ../node_modules/@radix-ui/react-tooltip/dist/index.js
var dist = __webpack_require__(7243);
// EXTERNAL MODULE: ./src/app/layout.tsx
var layout = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/tooltip-content.tsx





const TooltipContent = /*#__PURE__*/ react_.forwardRef(({ sideOffset =6 , children , ...props }, forwardedRef)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Portal, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(dist.Content, {
            ...props,
            ref: forwardedRef,
            className: classnames_default()("bg-black border border-slate-6 z-20 px-3 py-2 rounded-md text-xs", `${layout/* inter.variable */.i.variable} font-sans`),
            sideOffset: sideOffset,
            children: children
        })
    }));
TooltipContent.displayName = "TooltipContent";

;// CONCATENATED MODULE: ./src/components/tooltip.tsx




const TooltipRoot = ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        ...props,
        children: children
    });
const Tooltip = Object.assign(TooltipRoot, {
    Arrow: dist.TooltipArrow,
    Provider: dist.TooltipProvider,
    Content: TooltipContent,
    Trigger: dist.TooltipTrigger
});

// EXTERNAL MODULE: ./src/components/code.tsx
var code = __webpack_require__(9145);
// EXTERNAL MODULE: ../node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs + 4 modules
var LayoutGroup = __webpack_require__(2952);
// EXTERNAL MODULE: ../node_modules/framer-motion/dist/es/render/dom/motion.mjs + 185 modules
var motion = __webpack_require__(1799);
;// CONCATENATED MODULE: ./src/components/code-container.tsx











const CodeContainer = ({ markups , activeLang , setActiveLang  })=>{
    const [isCopied, setIsCopied] = react_.useState(false);
    const renderDownloadIcon = ()=>{
        let value = markups.filter((markup)=>markup.language === activeLang);
        const file = new File([
            value[0].content
        ], `email.${value[0].language}`);
        const url = URL.createObjectURL(file);
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: url,
            download: file.name,
            className: "text-slate-11 transition ease-in-out duration-200 hover:text-slate-12",
            children: /*#__PURE__*/ jsx_runtime_.jsx(IconDownload, {})
        });
    };
    const renderClipboardIcon = ()=>{
        const handleClipboard = async ()=>{
            const activeContent = markups.filter(({ language  })=>{
                return activeLang === language;
            });
            setIsCopied(true);
            await copyTextToClipboard(activeContent[0].content);
            setTimeout(()=>setIsCopied(false), 3000);
        };
        return /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
            onClick: handleClipboard,
            children: isCopied ? /*#__PURE__*/ jsx_runtime_.jsx(IconCheck, {}) : /*#__PURE__*/ jsx_runtime_.jsx(IconClipboard, {})
        });
    };
    react_.useEffect(()=>{
        setIsCopied(false);
    }, [
        activeLang
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("pre", {
        className: "border-slate-6 relative w-full items-center whitespace-pre rounded-md border text-sm backdrop-blur-md",
        style: {
            lineHeight: "130%",
            background: "linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)",
            boxShadow: "rgb(0 0 0 / 10%) 0px 5px 30px -5px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-9 border-b border-slate-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutGroup/* LayoutGroup */.S, {
                            id: "code",
                            children: markups.map(({ language  })=>{
                                const isCurrentLang = activeLang === language;
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion.button */.E.button, {
                                    className: `relative py-[8px] px-4 text-sm font-medium font-sans transition ease-in-out duration-200 hover:text-slate-12 ${activeLang !== language ? "text-slate-11" : "text-slate-12"}`,
                                    onClick: ()=>setActiveLang(language),
                                    children: [
                                        isCurrentLang && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.span */.E.span, {
                                            layoutId: "code",
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
                                        language_map[language]
                                    ]
                                }, language);
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tooltip, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Tooltip.Trigger, {
                                className: "absolute top-2 right-2 hidden md:block",
                                children: renderClipboardIcon()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Tooltip.Content, {
                                children: "Copy to Clipboard"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tooltip, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Tooltip.Trigger, {
                                className: "text-gray-11 absolute top-2 right-8 hidden md:block",
                                children: renderDownloadIcon()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Tooltip.Content, {
                                children: "Download"
                            })
                        ]
                    })
                ]
            }),
            markups.map(({ language , content  })=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${activeLang !== language && "hidden"}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(code/* Code */.E, {
                        language: language,
                        children: content
                    })
                }, language);
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/preview/[slug]/preview.tsx






function Preview({ navItems , slug , markup , reactMarkup , plainText  }) {
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    const [activeView, setActiveView] = react_default().useState("desktop");
    const [activeLang, setActiveLang] = react_default().useState("jsx");
    react_default().useEffect(()=>{
        const view = searchParams.get("view");
        const lang = searchParams.get("lang");
        if (view === "source" || view === "desktop") {
            setActiveView(view);
        }
        if (lang === "jsx" || lang === "markup" || lang === "markdown") {
            setActiveLang(lang);
        }
    }, [
        searchParams
    ]);
    const handleViewChange = (view)=>{
        setActiveView(view);
        router.push(`${pathname}?view=${view}`);
    };
    const handleLangChange = (lang)=>{
        setActiveLang(lang);
        router.push(`${pathname}?view=source&lang=${lang}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(shell/* Shell */.N, {
        navItems: navItems,
        title: slug,
        markup: markup,
        activeView: activeView,
        setActiveView: handleViewChange,
        children: activeView === "desktop" ? /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
            srcDoc: markup,
            className: "w-full h-[calc(100vh_-_70px)]"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex gap-6 mx-auto p-6 max-w-3xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Tooltip.Provider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(CodeContainer, {
                    markups: [
                        {
                            language: "jsx",
                            content: reactMarkup
                        },
                        {
                            language: "markup",
                            content: markup
                        },
                        {
                            language: "markdown",
                            content: plainText
                        }
                    ],
                    activeLang: activeLang,
                    setActiveLang: handleLangChange
                })
            })
        })
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [975,822,742], () => (__webpack_exec__(6424)));
module.exports = __webpack_exports__;

})();