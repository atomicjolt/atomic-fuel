"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Jwt = void 0;

var _jwt = require("../actions/jwt");

var _api = _interopRequireDefault(require("../api/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var REFRESH = 1000 * 60 * 60 * 23; // every 23 hours

function _default(dispatch, currentUserId) {
  var refresh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : REFRESH;
  setInterval(function () {
    dispatch((0, _jwt.refreshJwt)(currentUserId));
  }, refresh);
}

var Jwt = /*#__PURE__*/function () {
  function Jwt(jwt, apiUrl) {
    var oauthConsumerKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : REFRESH;

    _classCallCheck(this, Jwt);

    this.jwt = jwt;
    this.apiUrl = apiUrl;
    this.oauthConsumerKey = oauthConsumerKey;

    if (this.jwt) {
      var base64Url = this.jwt.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

      try {
        this._decodedJwt = JSON.parse(window.atob(base64));
        this.userId = this._decodedJwt.user_id;
        this.contextId = this._decodedJwt.context_id;
        this.oauthConsumerKey = this._decodedJwt.kid || oauthConsumerKey;
      } catch (e) {
        if (typeof Rollbar !== 'undefined' && Rollbar.options.enabled) {
          Rollbar.error('Failed to decode JWT for refresh', {
            error: e,
            encodedJwt: base64
          });
        }
      }
    }

    this.refresh = refresh;
  }

  _createClass(Jwt, [{
    key: "enableRefresh",
    value: function enableRefresh() {
      var _this = this;

      if (this.jwt && this.userId) {
        var url = "api/jwts/".concat(this.userId);
        setInterval(function () {
          _api["default"].get(url, _this.apiUrl, _this.jwt, null, _this.params, null).then(function (response) {
            _this.jwt = response.body.jwt;
          });
        }, this.refresh);
      }
    }
  }, {
    key: "params",
    get: function get() {
      return {
        // Add the context id from the lti launch
        context_id: this.contextId,
        // Add consumer key to requests to indicate which lti app requests are originating from.
        oauth_consumer_key: this.oauthConsumerKey
      };
    }
  }, {
    key: "currentJwt",
    get: function get() {
      return this.jwt;
    }
  }, {
    key: "decodedJwt",
    get: function get() {
      return this._decodedJwt;
    }
  }, {
    key: "isjwtExpired",
    get: function get() {
      // Rails does seconds since the epoch instead of milliseconds so we multiple by 1000
      return this.decodedJwt.exp * 1000 < Date.now();
    }
  }]);

  return Jwt;
}();

exports.Jwt = Jwt;