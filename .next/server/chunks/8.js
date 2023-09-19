"use strict";
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 9008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerSubscription": () => (/* binding */ SellerSubscription),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3044);




const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const content = [
    {
        id: 1,
        text: ` I hope this email finds you well. We're delighted to see
                    your interest in subscribing to our newsletter at LynkTown.
                    We're excited to keep you in the loop with the latest
                    updates, trends, and opportunities in the world of social
                    commerce.`
    },
    {
        id: 2,
        text: `Our newsletter is designed to provide valuable insights and resources that can help you make the most of your presence on our platform. Here's what you can expect from our newsletter:`
    },
    {
        id: 3,
        heading: "1. Industry Insights",
        text: `Stay up-to-date with the latest trends and best practices in social commerce, especially tailored for sellers like you.`
    },
    {
        id: 4,
        heading: "2. Platform Updates",
        text: `Be the first to know about new features, tools, and improvements on our platform that can enhance your selling experience.`
    },
    {
        id: 5,
        heading: "3. Success Stories:",
        text: `Get inspired by success stories from fellow designers who have achieved remarkable results on our platform.`
    },
    {
        id: 6,
        heading: "4. Exclusive Offers",
        text: `Enjoy access to exclusive offers, promotions, and opportunities that can boost your business.`
    }
];
const SellerSubscription = ({ username =`[Seller's Name]`  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {
                children: "LynkTown Profile Verification"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Font, {
                fontFamily: "DM Serif Display",
                fallbackFontFamily: "Verdana",
                webFont: {
                    url: "https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2",
                    format: "woff2"
                },
                fontWeight: 400,
                fontStyle: "normal"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Font, {
                fontFamily: "DM Sans",
                fallbackFontFamily: "Verdana",
                webFont: {
                    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2",
                    format: "woff2"
                },
                fontWeight: 400,
                fontStyle: "normal"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Tailwind, {
                config: {
                    theme: {
                        extend: {
                            colors: {
                                primary: "#6A5B40",
                                primaryLight: "#857250",
                                textPrimary: "#3B3B3B"
                            },
                            fontFamily: {
                                dmSerif: "DM Serif Display",
                                dmSans: "DM Sans"
                            }
                        }
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {
                    className: " my-auto mx-auto font-sans",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        className: "my-8 mx-auto  w-[648px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {
                                className: "bg-[#f3f1ee] h-[320px] flex py-8 justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {
                                        width: 145,
                                        src: `https://i.ibb.co/zfhMv0C/lynktownlogo.png`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {
                                        style: {
                                            boxShadow: `0px 20px 25px -5px #0000001A`
                                        },
                                        className: "absolute max-w-[540px] bg-white rounded--md  top-[15%] left-[50%] translate-x-[-50%]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {
                                                className: "h-[197px] bg-primary text-center rounded-t-md flex items-center justify-center flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "50",
                                                        height: "50",
                                                        viewBox: "0 0 60 60",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                width: "60",
                                                                height: "60",
                                                                rx: "30",
                                                                fill: "#3AC267"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M13.5 30L24 40.5L45.75 18.75",
                                                                stroke: "white",
                                                                strokeWidth: "5"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                                        as: "h1",
                                                        style: {
                                                            fontFamily: "DM Serif Display"
                                                        },
                                                        className: "text-white m-0 mt-1 text-4xl font-semibold",
                                                        children: [
                                                            "You have successfully ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            " subcribed to LynkTown"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {
                                                className: "py-5 px-4 rounded-b-md font-sans text-textPrimary ",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        className: "text-lg font-bold",
                                                        children: [
                                                            "Dear ",
                                                            username,
                                                            ","
                                                        ]
                                                    }),
                                                    content.map((item)=>{
                                                        const { id , text , heading  } = item;
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                            className: "text-base  ",
                                                            children: [
                                                                heading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                                    className: "font-medium   text-base  inline",
                                                                    children: [
                                                                        heading,
                                                                        ":\xa0"
                                                                    ]
                                                                }),
                                                                " ",
                                                                text
                                                            ]
                                                        });
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        className: "text-base ",
                                                        children: [
                                                            "Warm regards, ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            " Team LynkTown ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                                href: "https://www.lynktown.com",
                                                                children: "www.lynktown.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {
                                className: "bg-white h-[680px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellerSubscription);


/***/ })

};
;