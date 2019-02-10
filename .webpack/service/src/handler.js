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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webhookEvents_messagingMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webhookEvents/messagingMessage */ \"./src/webhookEvents/messagingMessage.js\");\n/* harmony import */ var _webhookEvents_messagingPostbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webhookEvents/messagingPostbacks */ \"./src/webhookEvents/messagingPostbacks.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // docClient\n\nvar docClientOptions = {\n  region: 'eu-west-1'\n};\n\nif (process.env.IS_OFFLINE) {\n  docClientOptions = {\n    region: 'localhost',\n    endpoint: 'http://localhost:8000'\n  };\n}\n\nvar fbWebhook =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(event, context) {\n    var entries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, messaging, sender, message;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!needsVerify(event)) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              statusCode: 200,\n              body: event.queryStringParameters['hub.challenge']\n            });\n\n          case 2:\n            entries = JSON.parse(event.body).entry;\n            _iteratorNormalCompletion = true;\n            _didIteratorError = false;\n            _iteratorError = undefined;\n            _context.prev = 6;\n            _iterator = entries[Symbol.iterator]();\n\n          case 8:\n            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n              _context.next = 30;\n              break;\n            }\n\n            entry = _step.value;\n            messaging = entry.messaging[0];\n            sender = messaging.sender;\n            message = messaging.message; // messages\n\n            _context.prev = 13;\n\n            if (!messaging.message) {\n              _context.next = 17;\n              break;\n            }\n\n            _context.next = 17;\n            return Object(_webhookEvents_messagingMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sender, message);\n\n          case 17:\n            if (!messaging.postback) {\n              _context.next = 20;\n              break;\n            }\n\n            _context.next = 20;\n            return Object(_webhookEvents_messagingPostbacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sender);\n\n          case 20:\n            return _context.abrupt(\"return\", {\n              statusCode: 200,\n              body: JSON.stringify({})\n            });\n\n          case 23:\n            _context.prev = 23;\n            _context.t0 = _context[\"catch\"](13);\n            console.error(_context.t0);\n            return _context.abrupt(\"return\", {\n              statusCode: 200,\n              body: JSON.stringify(_context.t0.response)\n            });\n\n          case 27:\n            _iteratorNormalCompletion = true;\n            _context.next = 8;\n            break;\n\n          case 30:\n            _context.next = 36;\n            break;\n\n          case 32:\n            _context.prev = 32;\n            _context.t1 = _context[\"catch\"](6);\n            _didIteratorError = true;\n            _iteratorError = _context.t1;\n\n          case 36:\n            _context.prev = 36;\n            _context.prev = 37;\n\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n\n          case 39:\n            _context.prev = 39;\n\n            if (!_didIteratorError) {\n              _context.next = 42;\n              break;\n            }\n\n            throw _iteratorError;\n\n          case 42:\n            return _context.finish(39);\n\n          case 43:\n            return _context.finish(36);\n\n          case 44:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[6, 32, 36, 44], [13, 23], [37,, 39, 43]]);\n  }));\n\n  return function fbWebhook(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar needsVerify = function needsVerify(event) {\n  if (event.queryStringParameters && event.queryStringParameters['hub.mode']) return true;\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fbWebhook);\n\n//# sourceURL=webpack:///./src/fbWebhook.js?");

/***/ }),

/***/ "./src/graphql/mutations.js":
/*!**********************************!*\
  !*** ./src/graphql/mutations.js ***!
  \**********************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLClient\"]('http://localhost:4000/graphqlServer');\nvar CREATE_USER = \"\\n  mutation ( $psid: String! ) {\\n    createUser( psid: $psid ) {\\n      id\\n    }\\n  }\\n\";\nvar createUser = function createUser(psid) {\n  return client.request(CREATE_USER, {\n    psid: psid\n  });\n};\n\n//# sourceURL=webpack:///./src/graphql/mutations.js?");

/***/ }),

/***/ "./src/graphql/queries.js":
/*!********************************!*\
  !*** ./src/graphql/queries.js ***!
  \********************************/
/*! exports provided: hasValidSaltedgeLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasValidSaltedgeLogin\", function() { return hasValidSaltedgeLogin; });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLClient\"]('http://localhost:4000/graphqlServer');\nvar HAS_VALID_SALTEDGE_LOGIN = \"\\n  query ( $psid: String! ) {\\n    hasValidSaltedgeLogin( psid: $psid )\\n  }\\n\";\nvar hasValidSaltedgeLogin =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(psid) {\n    var _ref2, hasValidSaltedgeLogin;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return client.request(HAS_VALID_SALTEDGE_LOGIN, {\n              psid: psid\n            });\n\n          case 2:\n            _ref2 = _context.sent;\n            hasValidSaltedgeLogin = _ref2.hasValidSaltedgeLogin;\n            return _context.abrupt(\"return\", hasValidSaltedgeLogin);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function hasValidSaltedgeLogin(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/graphql/queries.js?");

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! exports provided: fbWebhook, graphqlServer, graphqlPlayground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fbWebhook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fbWebhook */ \"./src/fbWebhook.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fbWebhook\", function() { return _fbWebhook__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alda-graphql-server */ \"alda-graphql-server\");\n/* harmony import */ var alda_graphql_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"graphqlServer\", function() { return alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__[\"server\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"graphqlPlayground\", function() { return alda_graphql_server__WEBPACK_IMPORTED_MODULE_1__[\"playground\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/handler.js?");

/***/ }),

/***/ "./src/utils/handleDialogflow.js":
/*!***************************************!*\
  !*** ./src/utils/handleDialogflow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/messages */ \"./src/utils/messages.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // interprets dialogflow responses and sends messages\n\nvar handleDialogflow =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(res, sender) {\n    var fulfillmentMessages, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fMsg, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, text;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fulfillmentMessages = res[0].queryResult.fulfillmentMessages;\n            _iteratorNormalCompletion = true;\n            _didIteratorError = false;\n            _iteratorError = undefined;\n            _context.prev = 4;\n            _iterator = fulfillmentMessages[Symbol.iterator]();\n\n          case 6:\n            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n              _context.next = 37;\n              break;\n            }\n\n            fMsg = _step.value;\n            _iteratorNormalCompletion2 = true;\n            _didIteratorError2 = false;\n            _iteratorError2 = undefined;\n            _context.prev = 11;\n            _iterator2 = fMsg.text.text[Symbol.iterator]();\n\n          case 13:\n            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {\n              _context.next = 20;\n              break;\n            }\n\n            text = _step2.value;\n            _context.next = 17;\n            return Object(_utils_messages__WEBPACK_IMPORTED_MODULE_0__[\"sendTextMsg\"])(sender.id, text);\n\n          case 17:\n            _iteratorNormalCompletion2 = true;\n            _context.next = 13;\n            break;\n\n          case 20:\n            _context.next = 26;\n            break;\n\n          case 22:\n            _context.prev = 22;\n            _context.t0 = _context[\"catch\"](11);\n            _didIteratorError2 = true;\n            _iteratorError2 = _context.t0;\n\n          case 26:\n            _context.prev = 26;\n            _context.prev = 27;\n\n            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n              _iterator2.return();\n            }\n\n          case 29:\n            _context.prev = 29;\n\n            if (!_didIteratorError2) {\n              _context.next = 32;\n              break;\n            }\n\n            throw _iteratorError2;\n\n          case 32:\n            return _context.finish(29);\n\n          case 33:\n            return _context.finish(26);\n\n          case 34:\n            _iteratorNormalCompletion = true;\n            _context.next = 6;\n            break;\n\n          case 37:\n            _context.next = 43;\n            break;\n\n          case 39:\n            _context.prev = 39;\n            _context.t1 = _context[\"catch\"](4);\n            _didIteratorError = true;\n            _iteratorError = _context.t1;\n\n          case 43:\n            _context.prev = 43;\n            _context.prev = 44;\n\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n\n          case 46:\n            _context.prev = 46;\n\n            if (!_didIteratorError) {\n              _context.next = 49;\n              break;\n            }\n\n            throw _iteratorError;\n\n          case 49:\n            return _context.finish(46);\n\n          case 50:\n            return _context.finish(43);\n\n          case 51:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[4, 39, 43, 51], [11, 22, 26, 34], [27,, 29, 33], [44,, 46, 50]]);\n  }));\n\n  return function handleDialogflow(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleDialogflow);\n\n//# sourceURL=webpack:///./src/utils/handleDialogflow.js?");

/***/ }),

/***/ "./src/utils/messages.js":
/*!*******************************!*\
  !*** ./src/utils/messages.js ***!
  \*******************************/
/*! exports provided: sendTextMsg, sendBtnMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendTextMsg\", function() { return sendTextMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendBtnMsg\", function() { return sendBtnMsg; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar sendTextMsg = function sendTextMsg(recipientId, text) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        text: text\n      }\n    }\n  });\n};\nvar sendBtnMsg = function sendBtnMsg(recipientId, text, url, title) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'post',\n    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',\n    data: {\n      messaging_type: 'RESPONSE',\n      recipient: {\n        id: recipientId\n      },\n      message: {\n        attachment: {\n          type: 'template',\n          payload: {\n            template_type: 'button',\n            text: text,\n            buttons: [{\n              type: 'web_url',\n              url: url,\n              title: title,\n              webview_height_ratio: 'full',\n              messenger_extensions: true\n            }]\n          }\n        }\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/utils/messages.js?");

/***/ }),

/***/ "./src/webhookEvents/messagingMessage.js":
/*!***********************************************!*\
  !*** ./src/webhookEvents/messagingMessage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var alda_dialogflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alda-dialogflow */ \"alda-dialogflow\");\n/* harmony import */ var alda_dialogflow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alda_dialogflow__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_handleDialogflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/handleDialogflow */ \"./src/utils/handleDialogflow.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/messages */ \"./src/utils/messages.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries */ \"./src/graphql/queries.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar messagingMessage =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(sender, message) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Object(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__[\"hasValidSaltedgeLogin\"])(sender.id);\n\n          case 3:\n            if (_context.sent) {\n              _context.next = 8;\n              break;\n            }\n\n            _context.next = 6;\n            return Object(_utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"sendTextMsg\"])(sender.id, 'hello');\n\n          case 6:\n            _context.next = 8;\n            return Object(_utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"sendBtnMsg\"])(sender.id, 'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬', 'https://e041a916.ngrok.io', 'Click para syncronizar');\n\n          case 8:\n            _context.next = 10;\n            return alda_dialogflow__WEBPACK_IMPORTED_MODULE_0___default()(message.text, sender.id);\n\n          case 10:\n            res = _context.sent;\n            Object(_utils_handleDialogflow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res, sender);\n            _context.next = 18;\n            break;\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            throw _context.t0;\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 14]]);\n  }));\n\n  return function messagingMessage(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messagingMessage);\n\n//# sourceURL=webpack:///./src/webhookEvents/messagingMessage.js?");

/***/ }),

/***/ "./src/webhookEvents/messagingPostbacks.js":
/*!*************************************************!*\
  !*** ./src/webhookEvents/messagingPostbacks.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphql/mutations */ \"./src/graphql/mutations.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/messages */ \"./src/utils/messages.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar messagingPostbacks =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(sender) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(_utils_messages__WEBPACK_IMPORTED_MODULE_1__[\"sendTextMsg\"])(sender.id, 'Bienvenido!');\n\n          case 2:\n            _context.prev = 2;\n            _context.next = 5;\n            return Object(_graphql_mutations__WEBPACK_IMPORTED_MODULE_0__[\"createUser\"])(sender.id);\n\n          case 5:\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](2);\n            console.error('create User failed', _context.t0);\n\n          case 10:\n            _context.next = 12;\n            return Object(_utils_messages__WEBPACK_IMPORTED_MODULE_1__[\"sendBtnMsg\"])(sender.id, 'Hola, podemos chatear en cuando tu cuenta se ha syncronizado 🔒💬', 'https://d103ecdb.ngrok.io', 'Click para syncronizar');\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[2, 7]]);\n  }));\n\n  return function messagingPostbacks(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messagingPostbacks);\n\n//# sourceURL=webpack:///./src/webhookEvents/messagingPostbacks.js?");

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