"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addErrorAction", {
  enumerable: true,
  get: function get() {
    return _errors.addError;
  }
});
Object.defineProperty(exports, "clearErrorsAction", {
  enumerable: true,
  get: function get() {
    return _errors.clearErrors;
  }
});
Object.defineProperty(exports, "ErrorConstants", {
  enumerable: true,
  get: function get() {
    return _errors.Constants;
  }
});
Object.defineProperty(exports, "refreshJwtAction", {
  enumerable: true,
  get: function get() {
    return _jwt.refreshJwt;
  }
});
Object.defineProperty(exports, "JwtConstants", {
  enumerable: true,
  get: function get() {
    return _jwt.Constants;
  }
});
Object.defineProperty(exports, "openModalAction", {
  enumerable: true,
  get: function get() {
    return _modal.openModal;
  }
});
Object.defineProperty(exports, "closeModalAction", {
  enumerable: true,
  get: function get() {
    return _modal.closeModal;
  }
});
Object.defineProperty(exports, "ModalConstants", {
  enumerable: true,
  get: function get() {
    return _modal.Constants;
  }
});
Object.defineProperty(exports, "postMessageAction", {
  enumerable: true,
  get: function get() {
    return _post_message.postMessage;
  }
});
Object.defineProperty(exports, "PostMessageConstants", {
  enumerable: true,
  get: function get() {
    return _post_message.Constants;
  }
});
Object.defineProperty(exports, "errorReducer", {
  enumerable: true,
  get: function get() {
    return _errors2["default"];
  }
});
Object.defineProperty(exports, "jwtReducer", {
  enumerable: true,
  get: function get() {
    return _jwt2["default"];
  }
});
Object.defineProperty(exports, "modalReducer", {
  enumerable: true,
  get: function get() {
    return _modal2["default"];
  }
});
Object.defineProperty(exports, "settingsReducer", {
  enumerable: true,
  get: function get() {
    return _settings["default"];
  }
});
Object.defineProperty(exports, "getInitialSettings", {
  enumerable: true,
  get: function get() {
    return _settings.getInitialSettings;
  }
});
Object.defineProperty(exports, "postMessageMiddleware", {
  enumerable: true,
  get: function get() {
    return _post_message2["default"];
  }
});
Object.defineProperty(exports, "apiRequest", {
  enumerable: true,
  get: function get() {
    return _api.apiRequest;
  }
});
Object.defineProperty(exports, "ApiMiddleware", {
  enumerable: true,
  get: function get() {
    return _api["default"];
  }
});
Object.defineProperty(exports, "jwtLoader", {
  enumerable: true,
  get: function get() {
    return _jwt3["default"];
  }
});
Object.defineProperty(exports, "configureStore", {
  enumerable: true,
  get: function get() {
    return _configure_store["default"];
  }
});
Object.defineProperty(exports, "Api", {
  enumerable: true,
  get: function get() {
    return _api2["default"];
  }
});
Object.defineProperty(exports, "Communicator", {
  enumerable: true,
  get: function get() {
    return _communicator["default"];
  }
});
Object.defineProperty(exports, "postMessage", {
  enumerable: true,
  get: function get() {
    return _communicator.postMessage;
  }
});
Object.defineProperty(exports, "broadcastRawMessage", {
  enumerable: true,
  get: function get() {
    return _communicator.broadcastRawMessage;
  }
});
Object.defineProperty(exports, "broadcastMessage", {
  enumerable: true,
  get: function get() {
    return _communicator.broadcastMessage;
  }
});
Object.defineProperty(exports, "SettingsContext", {
  enumerable: true,
  get: function get() {
    return _settings2.SettingsContext;
  }
});
Object.defineProperty(exports, "withSettings", {
  enumerable: true,
  get: function get() {
    return _settings2.withSettings;
  }
});
Object.defineProperty(exports, "AtomicjoltLoader", {
  enumerable: true,
  get: function get() {
    return _atomicjolt_loader["default"];
  }
});
Object.defineProperty(exports, "AtomicjoltLoaderRaw", {
  enumerable: true,
  get: function get() {
    return _atomicjolt_loader.Loader;
  }
});
Object.defineProperty(exports, "GqlStatus", {
  enumerable: true,
  get: function get() {
    return _gql_status["default"];
  }
});
Object.defineProperty(exports, "IframeResizeWrapper", {
  enumerable: true,
  get: function get() {
    return _resize_wrapper["default"];
  }
});
Object.defineProperty(exports, "InlineError", {
  enumerable: true,
  get: function get() {
    return _inline_error["default"];
  }
});
Object.defineProperty(exports, "AtomicMutation", {
  enumerable: true,
  get: function get() {
    return _atomic_mutation["default"];
  }
});
Object.defineProperty(exports, "AtomicQuery", {
  enumerable: true,
  get: function get() {
    return _atomic_query["default"];
  }
});
Object.defineProperty(exports, "modalDecorator", {
  enumerable: true,
  get: function get() {
    return _modal3["default"];
  }
});
Object.defineProperty(exports, "iframeResizeHandler", {
  enumerable: true,
  get: function get() {
    return _resize_iframe["default"];
  }
});
Object.defineProperty(exports, "isLtiInstructor", {
  enumerable: true,
  get: function get() {
    return _lti_roles.isLtiInstructor;
  }
});
Object.defineProperty(exports, "isLtiAdmin", {
  enumerable: true,
  get: function get() {
    return _lti_roles.isLtiAdmin;
  }
});

var _errors = require("./actions/errors");

var _jwt = require("./actions/jwt");

var _modal = require("./actions/modal");

var _post_message = require("./actions/post_message");

var _errors2 = _interopRequireDefault(require("./reducers/errors"));

var _jwt2 = _interopRequireDefault(require("./reducers/jwt"));

var _modal2 = _interopRequireDefault(require("./reducers/modal"));

var _settings = _interopRequireWildcard(require("./reducers/settings"));

var _post_message2 = _interopRequireDefault(require("./middleware/post_message"));

var _api = _interopRequireWildcard(require("./middleware/api"));

var _jwt3 = _interopRequireDefault(require("./loaders/jwt"));

var _configure_store = _interopRequireDefault(require("./store/configure_store"));

var _api2 = _interopRequireDefault(require("./api/api"));

var _communicator = _interopRequireWildcard(require("./communications/communicator"));

var _settings2 = require("./components/settings");

var _atomicjolt_loader = _interopRequireWildcard(require("./components/common/atomicjolt_loader"));

var _gql_status = _interopRequireDefault(require("./components/common/gql_status"));

var _resize_wrapper = _interopRequireDefault(require("./components/common/resize_wrapper"));

var _inline_error = _interopRequireDefault(require("./components/common/errors/inline_error"));

var _atomic_mutation = _interopRequireDefault(require("./graphql/atomic_mutation"));

var _atomic_query = _interopRequireDefault(require("./graphql/atomic_query"));

var _modal3 = _interopRequireDefault(require("./decorators/modal"));

var _resize_iframe = _interopRequireDefault(require("./libs/resize_iframe"));

var _lti_roles = require("./libs/lti_roles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }