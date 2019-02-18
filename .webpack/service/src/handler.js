(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fbWebhook.js":
/*!**************************!*\
  !*** ./src/fbWebhook.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webhookEvents_messagingMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webhookEvents/messagingMessage */ \"./src/webhookEvents/messagingMessage.js\");\n/* harmony import */ var _webhookEvents_messagingPostbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webhookEvents/messagingPostbacks */ \"./src/webhookEvents/messagingPostbacks.js\");\n\n\n\n\n\nconst fbWebhook = async (event, context) => {\n  // verify FB webhook\n  if (needsVerify(event)) return {\n    statusCode: 200,\n    body: event.queryStringParameters['hub.challenge'] // return {\n    //   statusCode: 200,\n    //   body: JSON.stringify()\n    // }\n\n  };\n  const body = JSON.parse(event.body);\n  const entries = body.entry;\n\n  for (const entry of entries) {\n    const messaging = entry.messaging[0];\n    const sender = messaging.sender;\n    const message = messaging.message; // messages\n\n    try {\n      if (messaging.message) await Object(_webhookEvents_messagingMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sender, message);\n      if (messaging.postback) await Object(_webhookEvents_messagingPostbacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sender);\n      return {\n        statusCode: 200,\n        body: JSON.stringify({})\n      };\n    } catch (e) {\n      console.error(e.response.data);\n      return {\n        statusCode: 200,\n        body: JSON.stringify()\n      };\n    }\n  }\n};\n\nconst needsVerify = event => {\n  if (event.queryStringParameters && event.queryStringParameters['hub.mode']) return true;\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fbWebhook);\n\n//# sourceURL=webpack:///./src/fbWebhook.js?");

/***/ }),

/***/ "./src/graphql/client.js":
/*!*******************************!*\
  !*** ./src/graphql/client.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLClient\"](process.env.GRAPHQL_ENDPOINT);\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n//# sourceURL=webpack:///./src/graphql/client.js?");

/***/ }),

/***/ "./src/graphql/mutations.js":
/*!**********************************!*\
  !*** ./src/graphql/mutations.js ***!
  \**********************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ \"./src/graphql/client.js\");\n\n\nconst CREATE_USER = `\n  mutation ( $psid: String! ) {\n    createUser( psid: $psid ) {\n      id\n    }\n  }\n`;\nconst createUser = psid => {\n  return _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(CREATE_USER, {\n    psid\n  });\n};\n\n//# sourceURL=webpack:///./src/graphql/mutations.js?");

/***/ }),

/***/ "./src/graphql/queries.js":
/*!********************************!*\
  !*** ./src/graphql/queries.js ***!
  \********************************/
/*! exports provided: hasValidSaltedgeLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasValidSaltedgeLogin\", function() { return hasValidSaltedgeLogin; });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ \"./src/graphql/client.js\");\n\n\nconst HAS_VALID_SALTEDGE_LOGIN = `\n  query ( $psid: String! ) {\n    hasValidSaltedgeLogin( psid: $psid )\n  }\n`;\nconst hasValidSaltedgeLogin = async psid => {\n  const {\n    hasValidSaltedgeLogin\n  } = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(HAS_VALID_SALTEDGE_LOGIN, {\n    psid\n  });\n  return hasValidSaltedgeLogin;\n};\n\n//# sourceURL=webpack:///./src/graphql/queries.js?");

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! exports provided: fbWebhook, graphqlServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fbWebhook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fbWebhook */ \"./src/fbWebhook.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fbWebhook\", function() { return _fbWebhook__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alda-graphql-server */ \"alda-graphql-server\");\n/* harmony import */ var alda_graphql_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"graphqlServer\", function() { return alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__[\"server\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/handler.js?");

/***/ }),

/***/ "./src/utils/handleDialogflow.js":
/*!***************************************!*\
  !*** ./src/utils/handleDialogflow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/messages */ \"./src/utils/messages.js\");\n // interprets dialogflow responses and sends messages\n\nconst handleDialogflow = async (res, sender) => {\n  if (res.length > 0) {\n    const fulfillmentMessages = res[0].queryResult.fulfillmentMessages;\n    var cards = []; // Only respond with messages for Facebook\n\n    const fbMessages = fulfillmentMessages.filter(msg => msg.platform === 'FACEBOOK');\n\n    for (const fMsg of fbMessages) {\n      // chk if Card\n      if (fMsg.card) {\n        console.log(fMsg.card);\n        cards.push(fMsg.card);\n        continue;\n      } // if last msg was card\n\n\n      if (cards.length > 0) {\n        await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendCards\"])(sender.id, cards);\n      } // chk if Text\n\n\n      if (fMsg.text) {\n        for (const text of fMsg.text.text) {\n          await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendTextMsg\"])(sender.id, text);\n        }\n      } // check if Quick Reply\n\n\n      if (fMsg.quickReplies) {\n        await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendQuickReplies\"])(sender.id, fMsg.quickReplies.title, fMsg.quickReplies.quickReplies);\n      }\n    } // if cards left\n\n\n    if (cards.length > 0) {\n      await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendCards\"])(sender.id, cards);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleDialogflow);\n\n//# sourceURL=webpack:///./src/utils/handleDialogflow.js?");

/***/ }),

/***/ "./src/utils/messages.js":
/*!*******************************!*\
  !*** ./src/utils/messages.js ***!
  \*******************************/
/*! exports provided: sendBtnMsg, sendCards, sendTextMsg, sendQuickReplies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendBtnMsg\", function() { return sendBtnMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendCards\", function() { return sendCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendTextMsg\", function() { return sendTextMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendQuickReplies\", function() { return sendQuickReplies; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sendBtnMsg = (recipientId, text, url, title) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        attachment: {\n          type: 'template',\n          payload: {\n            template_type: 'button',\n            text,\n            buttons: [{\n              type: 'web_url',\n              url,\n              title,\n              webview_height_ratio: 'full',\n              messenger_extensions: true\n            }]\n          }\n        }\n      }\n    }\n  });\n}; // Generic Template https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic\n\nconst sendCards = (recipientId, cards) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        attachment: {\n          type: 'template',\n          payload: {\n            template_type: 'generic',\n            elements: cards.map(card => ({\n              title: card.title,\n              image_url: card.imageUri,\n              subtitle: card.subtitle,\n              buttons: card.buttons.map(button => ({\n                type: 'web_url',\n                url: button.postback,\n                title: button.text\n              }))\n            }))\n          }\n        }\n      }\n    }\n  });\n};\nconst sendTextMsg = (recipientId, text) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        text\n      }\n    }\n  });\n};\nconst sendQuickReplies = (recipientId, title, quickReplyTexts) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        text: title,\n        quick_replies: quickReplyTexts.map(text => ({\n          content_type: 'text',\n          title: text,\n          payload: text\n        }))\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/utils/messages.js?");

/***/ }),

/***/ "./src/webhookEvents/messagingMessage.js":
/*!***********************************************!*\
  !*** ./src/webhookEvents/messagingMessage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var alda_dialogflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alda-dialogflow */ \"alda-dialogflow\");\n/* harmony import */ var alda_dialogflow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alda_dialogflow__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_handleDialogflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/handleDialogflow */ \"./src/utils/handleDialogflow.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/messages */ \"./src/utils/messages.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries */ \"./src/graphql/queries.js\");\n\n\n\n\nconsole.log(process.env.WEB_VIEW_URL);\n\nconst messagingMessage = async (sender, message) => {\n  try {\n    if (!(await Object(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__[\"hasValidSaltedgeLogin\"])(sender.id))) {\n      await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"sendBtnMsg\"])(sender.id, 'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬', process.env.WEB_VIEW_URL, 'Click para syncronizar');\n      return;\n    }\n\n    const res = await alda_dialogflow__WEBPACK_IMPORTED_MODULE_0___default()(message.text, sender.id);\n    console.log(res[0].queryResult);\n    Object(_utils_handleDialogflow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res, sender);\n  } catch (e) {\n    console.log(e);\n    throw e;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messagingMessage);\n\n//# sourceURL=webpack:///./src/webhookEvents/messagingMessage.js?");

/***/ }),

/***/ "./src/webhookEvents/messagingPostbacks.js":
/*!*************************************************!*\
  !*** ./src/webhookEvents/messagingPostbacks.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphql/mutations */ \"./src/graphql/mutations.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/messages */ \"./src/utils/messages.js\");\n\n\n\nconst messagingPostbacks = async sender => {\n  await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_1__[\"sendTextMsg\"])(sender.id, 'Bienvenido!');\n\n  try {\n    await Object(_graphql_mutations__WEBPACK_IMPORTED_MODULE_0__[\"createUser\"])(sender.id);\n  } catch (e) {\n    console.error('create User failed', e);\n  }\n\n  await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_1__[\"sendBtnMsg\"])(sender.id, 'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬', process.env.WEB_VIEW_URL, 'Click para syncronizar');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messagingPostbacks);\n\n//# sourceURL=webpack:///./src/webhookEvents/messagingPostbacks.js?");

/***/ }),

/***/ "alda-dialogflow":
/*!**********************************!*\
  !*** external "alda-dialogflow" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"alda-dialogflow\");\n\n//# sourceURL=webpack:///external_%22alda-dialogflow%22?");

/***/ }),

/***/ "alda-graphql-server":
/*!**************************************!*\
  !*** external "alda-graphql-server" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"alda-graphql-server\");\n\n//# sourceURL=webpack:///external_%22alda-graphql-server%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-request\");\n\n//# sourceURL=webpack:///external_%22graphql-request%22?");

/***/ })

/******/ })));