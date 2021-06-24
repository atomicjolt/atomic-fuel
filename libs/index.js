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
Object.defineProperty(exports, "Banner", {
  enumerable: true,
  get: function get() {
    return _Banner.Banner;
  }
});
Object.defineProperty(exports, "BannerTypes", {
  enumerable: true,
  get: function get() {
    return _Banner.BannerTypes;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.Button;
  }
});
Object.defineProperty(exports, "ButtonType", {
  enumerable: true,
  get: function get() {
    return _Button.ButtonType;
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

var _Banner = require("./components/Banner");

var _Button = require("./components/Button");

var _atomic_mutation = _interopRequireDefault(require("./graphql/atomic_mutation"));

var _atomic_query = _interopRequireDefault(require("./graphql/atomic_query"));

var _modal3 = _interopRequireDefault(require("./decorators/modal"));

var _resize_iframe = _interopRequireDefault(require("./libs/resize_iframe"));

var _lti_roles = require("./libs/lti_roles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUtBOztBQUlBOztBQUtBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQU1BOztBQUdBOztBQUdBOztBQUNBOztBQVFBOztBQUlBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUdBOztBQUdBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUkVEVVggQUNUSU9OU1xuZXhwb3J0IHtcbiAgYWRkRXJyb3IgYXMgYWRkRXJyb3JBY3Rpb24sXG4gIGNsZWFyRXJyb3JzIGFzIGNsZWFyRXJyb3JzQWN0aW9uLFxuICBDb25zdGFudHMgYXMgRXJyb3JDb25zdGFudHNcbn0gZnJvbSAnLi9hY3Rpb25zL2Vycm9ycyc7XG5leHBvcnQge1xuICByZWZyZXNoSnd0IGFzIHJlZnJlc2hKd3RBY3Rpb24sXG4gIENvbnN0YW50cyBhcyBKd3RDb25zdGFudHNcbn0gZnJvbSAnLi9hY3Rpb25zL2p3dCc7XG5leHBvcnQge1xuICBvcGVuTW9kYWwgYXMgb3Blbk1vZGFsQWN0aW9uLFxuICBjbG9zZU1vZGFsIGFzIGNsb3NlTW9kYWxBY3Rpb24sXG4gIENvbnN0YW50cyBhcyBNb2RhbENvbnN0YW50c1xufSBmcm9tICcuL2FjdGlvbnMvbW9kYWwnO1xuZXhwb3J0IHtcbiAgcG9zdE1lc3NhZ2UgYXMgcG9zdE1lc3NhZ2VBY3Rpb24sXG4gIENvbnN0YW50cyBhcyBQb3N0TWVzc2FnZUNvbnN0YW50c1xufSBmcm9tICcuL2FjdGlvbnMvcG9zdF9tZXNzYWdlJztcblxuLy8gUkVEVVggUkVEVUNFUlNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9lcnJvcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBqd3RSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9qd3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb2RhbFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL21vZGFsJztcbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2V0dGluZ3NSZWR1Y2VyLFxuICBnZXRJbml0aWFsU2V0dGluZ3MsXG59IGZyb20gJy4vcmVkdWNlcnMvc2V0dGluZ3MnO1xuXG4vLyBSRURVWCBNSURETEVXQVJFXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvc3RNZXNzYWdlTWlkZGxld2FyZSB9IGZyb20gJy4vbWlkZGxld2FyZS9wb3N0X21lc3NhZ2UnO1xuZXhwb3J0IHtcbiAgYXBpUmVxdWVzdCxcbiAgZGVmYXVsdCBhcyBBcGlNaWRkbGV3YXJlXG59IGZyb20gJy4vbWlkZGxld2FyZS9hcGknO1xuXG4vLyBSRURVWCBMT0FERVJTXG5leHBvcnQgeyBkZWZhdWx0IGFzIGp3dExvYWRlciB9IGZyb20gJy4vbG9hZGVycy9qd3QnO1xuXG4vLyBSRURVWCBTVE9SRVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25maWd1cmVTdG9yZSB9IGZyb20gJy4vc3RvcmUvY29uZmlndXJlX3N0b3JlJztcblxuLy8gQVBJXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwaSB9IGZyb20gJy4vYXBpL2FwaSc7XG5leHBvcnQge1xuICBkZWZhdWx0IGFzIENvbW11bmljYXRvcixcbiAgcG9zdE1lc3NhZ2UsXG4gIGJyb2FkY2FzdFJhd01lc3NhZ2UsXG4gIGJyb2FkY2FzdE1lc3NhZ2UsXG59IGZyb20gJy4vY29tbXVuaWNhdGlvbnMvY29tbXVuaWNhdG9yJztcblxuLy8gUkVBQ1QgQ09NUE9ORU5UU1xuZXhwb3J0IHtcbiAgU2V0dGluZ3NDb250ZXh0LFxuICB3aXRoU2V0dGluZ3Ncbn0gZnJvbSAnLi9jb21wb25lbnRzL3NldHRpbmdzJztcbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgQXRvbWljam9sdExvYWRlcixcbiAgTG9hZGVyIGFzIEF0b21pY2pvbHRMb2FkZXJSYXdcbn0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9hdG9taWNqb2x0X2xvYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdxbFN0YXR1cyB9IGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vZ3FsX3N0YXR1cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElmcmFtZVJlc2l6ZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL3Jlc2l6ZV93cmFwcGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5saW5lRXJyb3IgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL2Vycm9ycy9pbmxpbmVfZXJyb3InO1xuZXhwb3J0IHsgQmFubmVyLCBCYW5uZXJUeXBlcyB9IGZyb20gJy4vY29tcG9uZW50cy9CYW5uZXInO1xuZXhwb3J0IHsgQnV0dG9uLCBCdXR0b25UeXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbic7XG5cbi8vIEFQT0xMTyBSRUFDVCBDT01QT05FTlRTXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF0b21pY011dGF0aW9uIH0gZnJvbSAnLi9ncmFwaHFsL2F0b21pY19tdXRhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEF0b21pY1F1ZXJ5IH0gZnJvbSAnLi9ncmFwaHFsL2F0b21pY19xdWVyeSc7XG5cbi8vIERFQ09SQVRPUlNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbW9kYWxEZWNvcmF0b3IgfSBmcm9tICcuL2RlY29yYXRvcnMvbW9kYWwnO1xuXG4vLyBMSUJTXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlmcmFtZVJlc2l6ZUhhbmRsZXIgfSBmcm9tICcuL2xpYnMvcmVzaXplX2lmcmFtZSc7XG5leHBvcnQge1xuICBpc0x0aUluc3RydWN0b3IsXG4gIGlzTHRpQWRtaW5cbn0gZnJvbSAnLi9saWJzL2x0aV9yb2xlcyc7XG4iXX0=