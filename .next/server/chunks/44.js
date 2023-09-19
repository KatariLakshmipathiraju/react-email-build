"use strict";
exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 3044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const socialLinks = [
    {
        id: 1,
        name: "Instagram",
        href: "https://www.instagram.com"
    },
    {
        id: 2,
        name: "Linkedin",
        href: "https://www.linkedin.com"
    },
    {
        id: 3,
        name: "Facebook",
        href: "https://www.facebook.com"
    },
    {
        id: 4,
        name: "Pinterest",
        href: "https://www.pinterest.com"
    }
];
const infoLinks = [
    {
        id: 1,
        name: "Terms & conditions",
        href: "https://lynktown.com/terms-conditions"
    },
    {
        id: 2,
        name: "Privacy policy",
        href: "https://lynktown.com/privacy-policy"
    },
    {
        id: 3,
        name: "Contact us",
        href: "https://lynktown.com/contact-us"
    }
];
const Footer = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {
        className: "px-4 mx-auto  bg-[#f9f9f7] py-10 w-[648px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {
                src: `https://i.ibb.co/DkVb5XC/lynktownlogosm.png`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: "max-w-sm my-4 flex items-start mx-0 space-x-4",
                children: socialLinks.map((item)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                className: `${item.id === 1 ? "mr-4" : "mx-4"} text-[#6C6C6C] font-sans font-bold text-sm`,
                                href: item.href,
                                children: item.name
                            }, item.id),
                            item.id !== socialLinks.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: "|"
                            })
                        ]
                    }, item.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {
                className: "max-w-lg mx-0 font-sans text-textPrimary text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: "If you have questions or need help, don't hesitate to contact our support team, support@lynktown.om or call us at +91 96639 89996"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: "#33 1st main 2A cross Srinivas Nagar BSK 1st stage Bengaluru-560050, Karnataka"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "max-w-sm my-4 flex items-start mx-0 space-x-4",
                        children: infoLinks.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        className: `${item.id === 1 ? "mr-4" : "mx-4"} text-[#0A0A0A] font-sans font-bold text-sm`,
                                        href: item.href,
                                        children: item.name
                                    }, item.id),
                                    item.id !== infoLinks.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: "|"
                                    })
                                ]
                            }, item.id);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;