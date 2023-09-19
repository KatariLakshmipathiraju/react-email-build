"use strict";
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 9289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerSubscription": () => (/* binding */ CustomerSubscription),
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
        text: `I hope this message finds you well. We're thrilled to have you as a new subscriber to our newsletter! Thank you for choosing to stay connected with us and for showing interest in LynkTown.`
    },
    {
        id: 2,
        text: `Our newsletter is your gateway to a world of valuable insights, updates, and exclusive offers. Here's what you can expect from us:`
    },
    {
        id: 3,
        heading: "1. Industry Trend",
        text: `Stay ahead of the curve with the latest trends and developments in LynkTown.`
    },
    {
        id: 4,
        heading: "2. Exclusive Content",
        text: `Get access to articles, blog posts, and resources available only to our subscribers.`
    },
    {
        id: 5,
        heading: "3. Product/Service Updates",
        text: `Be the first to know about new product launches, updates, and special promotions.`
    },
    {
        id: 6,
        heading: "4. Helpful Tips",
        text: `Discover tips and tricks that can make your fashion journey even more rewarding.`
    },
    {
        id: 7,
        heading: "5. Community",
        text: `Join a community of like-minded individuals who share your passion for designer products.`
    },
    {
        id: 8,
        text: `If you ever have questions, feedback, or specific topics you'd like us to cover in our newsletter, please feel free to reach out. We're here to provide you with content that's tailored to your interests and needs.`
    },
    {
        id: 9,
        text: `Once again, thank you for subscribing to our newsletter. We look forward to delivering valuable content to your inbox and keeping you informed and inspired.`
    }
];
const CustomerSubscription = ({ username =`[Customer's Name]`  })=>{
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
                                                            "Best regards, ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            " ",
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
                                className: "bg-white h-[850px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerSubscription);


/***/ })

};
;