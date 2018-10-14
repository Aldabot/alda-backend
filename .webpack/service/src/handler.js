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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webhookEvents_messagingMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webhookEvents/messagingMessage */ \"./src/webhookEvents/messagingMessage.js\");\n/* harmony import */ var _webhookEvents_messagingPostbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webhookEvents/messagingPostbacks */ \"./src/webhookEvents/messagingPostbacks.js\");\n\n\n\n // docClient\n\nlet docClientOptions = {\n  region: 'eu-west-1'\n};\n\nif (process.env.IS_OFFLINE) {\n  docClientOptions = {\n    region: 'localhost',\n    endpoint: 'http://localhost:8000'\n  };\n}\n\nconst fbWebhook = async (event, context) => {\n  // verify FB webhook\n  if (needsVerify(event)) return {\n    statusCode: 200,\n    body: event.queryStringParameters['hub.challenge']\n  };\n  const entries = JSON.parse(event.body).entry;\n\n  for (const entry of entries) {\n    const messaging = entry.messaging[0];\n    const sender = messaging.sender; // messages\n\n    try {\n      if (messaging.message) await Object(_webhookEvents_messagingMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sender);\n      if (messaging.postback) await Object(_webhookEvents_messagingPostbacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sender);\n      return {\n        statusCode: 200,\n        body: JSON.stringify({})\n      };\n    } catch (e) {\n      console.error(e);\n      return {\n        statusCode: 200,\n        body: JSON.stringify(e.response)\n      };\n    }\n  }\n};\n\nconst needsVerify = event => {\n  if (event.queryStringParameters && event.queryStringParameters['hub.mode']) return true;\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fbWebhook);\n\n//# sourceURL=webpack:///./src/fbWebhook.js?");

/***/ }),

/***/ "./src/graphql/mutations.js":
/*!**********************************!*\
  !*** ./src/graphql/mutations.js ***!
  \**********************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLClient\"]('https://uwl3s322de.execute-api.eu-west-1.amazonaws.com/dev/');\nconst CREATE_USER = `\n  mutation ( $psid: String! ) {\n    createUser( psid: $psid ) {\n      id\n    }\n  }\n`;\nconst createUser = psid => {\n  return client.request(CREATE_USER, {\n    psid\n  });\n};\n\n//# sourceURL=webpack:///./src/graphql/mutations.js?");

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! exports provided: fbWebhook, dialogflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fbWebhook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fbWebhook.js */ \"./src/fbWebhook.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fbWebhook\", function() { return _fbWebhook_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var alda_dialogflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alda-dialogflow */ \"alda-dialogflow\");\n/* harmony import */ var alda_dialogflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alda_dialogflow__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"dialogflow\", function() { return alda_dialogflow__WEBPACK_IMPORTED_MODULE_1___default.a; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/handler.js?");

/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/*! exports provided: sendTextMsg, sendBtnMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendTextMsg\", function() { return sendTextMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendBtnMsg\", function() { return sendBtnMsg; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sendTextMsg = (recipientId, text) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        text\n      }\n    }\n  });\n};\nconst sendBtnMsg = (recipientId, text, url, title) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        attachment: {\n          type: 'template',\n          payload: {\n            template_type: 'button',\n            text,\n            buttons: [{\n              type: 'web_url',\n              url,\n              title,\n              webview_height_ratio: 'full',\n              messenger_extensions: true\n            }]\n          }\n        }\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/messages.js?");

/***/ }),

/***/ "./src/webhookEvents/messagingMessage.js":
/*!***********************************************!*\
  !*** ./src/webhookEvents/messagingMessage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messages */ \"./src/messages.js\");\n\n\nconst messagingMessage = async sender => {\n  try {\n    await Object(_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendTextMsg\"])(sender.id, 'hello');\n    await Object(_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendBtnMsg\"])(sender.id, 'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬', 'https://6fcd19de.ngrok.io', 'Click para syncronizar');\n  } catch (e) {\n    throw e;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messagingMessage);\n\n//# sourceURL=webpack:///./src/webhookEvents/messagingMessage.js?");

/***/ }),

/***/ "./src/webhookEvents/messagingPostbacks.js":
/*!*************************************************!*\
  !*** ./src/webhookEvents/messagingPostbacks.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messages */ \"./src/messages.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/mutations */ \"./src/graphql/mutations.js\");\n\n\n\nconst messagingPostbacks = async sender => {\n  await Object(_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendTextMsg\"])(sender.id, 'Bienvenido!');\n  await Object(_graphql_mutations__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"])(sender.id).catch(err => console.error(err)); // if user exists handle error\n\n  await Object(_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendBtnMsg\"])(sender.id, 'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬', 'https://6fcd19de.ngrok.io', 'Click para syncronizar');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messagingPostbacks);\n\n//# sourceURL=webpack:///./src/webhookEvents/messagingPostbacks.js?");

/***/ }),

/***/ "alda-dialogflow":
/*!**********************************!*\
  !*** external "alda-dialogflow" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"alda-dialogflow\");\n\n//# sourceURL=webpack:///external_%22alda-dialogflow%22?");

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