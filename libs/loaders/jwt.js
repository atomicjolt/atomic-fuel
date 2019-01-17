'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jwt = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function (dispatch, currentUserId) {
  setInterval(function () {
    dispatch((0, _jwt.refreshJwt)(currentUserId));
  }, REFRESH);
};

var _jwt = require('../actions/jwt');

var _api = require('../api/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REFRESH = 1000 * 60 * 60 * 23; // every 23 hours

var Jwt = exports.Jwt = function () {
  function Jwt(jwt, apiUrl) {
    var oauthConsumerKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck3.default)(this, Jwt);

    this.jwt = jwt;
    this.apiUrl = apiUrl;

    this.oauthConsumerKey = oauthConsumerKey;

    var base64Url = this.jwt.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    this._decodedJwt = JSON.parse(window.atob(base64));

    this.userId = this._decodedJwt.user_id;
    this.contextId = this._decodedJwt.context_id;
    this.oauthConsumerKey = this._decodedJwt.kid || oauthConsumerKey;
  }

  (0, _createClass3.default)(Jwt, [{
    key: 'enableRefresh',
    value: function enableRefresh() {
      var _this = this;

      var url = 'api/jwts/' + this.userId;
      var params = {
        // Add the context id from the lti launch
        context_id: this.contextId,
        // Add consumer key to requests to indicate which lti app requests are originating from.
        oauth_consumer_key: this.oauthConsumerKey
      };
      setInterval(function () {
        _api2.default.get(url, _this.apiUrl, _this.jwt, null, params, null).then(function (response) {
          _this.jwt = response.body.jwt;
        });
      }, REFRESH);
    }
  }, {
    key: 'currentJwt',
    get: function get() {
      return this.jwt;
    }
  }, {
    key: 'decodedJwt',
    get: function get() {
      return this._decodedJwt;
    }
  }, {
    key: 'isjwtExpired',
    get: function get() {
      // Rails does seconds since the epoch instead of milliseconds so we multiple by 1000
      return this.decodedJwt.exp * 1000 < Date.now();
    }
  }]);
  return Jwt;
}();