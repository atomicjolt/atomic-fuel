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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL2p3dC5qcyJdLCJuYW1lcyI6WyJSRUZSRVNIIiwiZGlzcGF0Y2giLCJjdXJyZW50VXNlcklkIiwicmVmcmVzaCIsInNldEludGVydmFsIiwiSnd0Iiwiand0IiwiYXBpVXJsIiwib2F1dGhDb25zdW1lcktleSIsImJhc2U2NFVybCIsInNwbGl0IiwiYmFzZTY0IiwicmVwbGFjZSIsIl9kZWNvZGVkSnd0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwiYXRvYiIsInVzZXJJZCIsInVzZXJfaWQiLCJjb250ZXh0SWQiLCJjb250ZXh0X2lkIiwia2lkIiwiZSIsIlJvbGxiYXIiLCJvcHRpb25zIiwiZW5hYmxlZCIsImVycm9yIiwiZW5jb2RlZEp3dCIsInVybCIsImFwaSIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJvYXV0aF9jb25zdW1lcl9rZXkiLCJkZWNvZGVkSnd0IiwiZXhwIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpDLEMsQ0FBcUM7O0FBRXRCLGtCQUFTQyxRQUFULEVBQW1CQyxhQUFuQixFQUFxRDtBQUFBLE1BQW5CQyxPQUFtQix1RUFBVEgsT0FBUztBQUNsRUksRUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDaEJILElBQUFBLFFBQVEsQ0FBQyxxQkFBV0MsYUFBWCxDQUFELENBQVI7QUFDRCxHQUZVLEVBRVJDLE9BRlEsQ0FBWDtBQUdEOztJQUVZRSxHO0FBQ1gsZUFBWUMsR0FBWixFQUFpQkMsTUFBakIsRUFBcUU7QUFBQSxRQUE1Q0MsZ0JBQTRDLHVFQUF6QixJQUF5QjtBQUFBLFFBQW5CTCxPQUFtQix1RUFBVEgsT0FBUzs7QUFBQTs7QUFDbkUsU0FBS00sR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4Qjs7QUFFQSxRQUFJLEtBQUtGLEdBQVQsRUFBYztBQUNaLFVBQU1HLFNBQVMsR0FBRyxLQUFLSCxHQUFMLENBQVNJLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQWxCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRixTQUFTLENBQUNHLE9BQVYsQ0FBa0IsSUFBbEIsRUFBd0IsR0FBeEIsRUFBNkJBLE9BQTdCLENBQXFDLElBQXJDLEVBQTJDLEdBQTNDLENBQWY7O0FBQ0EsVUFBSTtBQUNGLGFBQUtDLFdBQUwsR0FBbUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sTUFBWixDQUFYLENBQW5CO0FBQ0EsYUFBS08sTUFBTCxHQUFjLEtBQUtMLFdBQUwsQ0FBaUJNLE9BQS9CO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixLQUFLUCxXQUFMLENBQWlCUSxVQUFsQztBQUNBLGFBQUtiLGdCQUFMLEdBQXdCLEtBQUtLLFdBQUwsQ0FBaUJTLEdBQWpCLElBQXdCZCxnQkFBaEQ7QUFDRCxPQUxELENBS0UsT0FBTWUsQ0FBTixFQUFTO0FBQ1QsWUFBSSxPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLE9BQXRELEVBQStEO0FBQzdERixVQUFBQSxPQUFPLENBQUNHLEtBQVIsQ0FBYyxrQ0FBZCxFQUFrRDtBQUFFQSxZQUFBQSxLQUFLLEVBQUVKLENBQVQ7QUFBWUssWUFBQUEsVUFBVSxFQUFFakI7QUFBeEIsV0FBbEQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBS1IsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7V0FFRCx5QkFBZ0I7QUFBQTs7QUFDZCxVQUFJLEtBQUtHLEdBQUwsSUFBWSxLQUFLWSxNQUFyQixFQUE2QjtBQUMzQixZQUFNVyxHQUFHLHNCQUFlLEtBQUtYLE1BQXBCLENBQVQ7QUFDQWQsUUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDaEIwQiwwQkFBSUMsR0FBSixDQUFRRixHQUFSLEVBQWEsS0FBSSxDQUFDdEIsTUFBbEIsRUFBMEIsS0FBSSxDQUFDRCxHQUEvQixFQUFvQyxJQUFwQyxFQUEwQyxLQUFJLENBQUMwQixNQUEvQyxFQUF1RCxJQUF2RCxFQUE2REMsSUFBN0QsQ0FBa0UsVUFBQ0MsUUFBRCxFQUFjO0FBQzlFLFlBQUEsS0FBSSxDQUFDNUIsR0FBTCxHQUFXNEIsUUFBUSxDQUFDQyxJQUFULENBQWM3QixHQUF6QjtBQUNELFdBRkQ7QUFHRCxTQUpVLEVBSVIsS0FBS0gsT0FKRyxDQUFYO0FBS0Q7QUFDRjs7O1NBRUQsZUFBYTtBQUNYLGFBQU87QUFDTDtBQUNBa0IsUUFBQUEsVUFBVSxFQUFFLEtBQUtELFNBRlo7QUFHTDtBQUNBZ0IsUUFBQUEsa0JBQWtCLEVBQUUsS0FBSzVCO0FBSnBCLE9BQVA7QUFNRDs7O1NBRUQsZUFBaUI7QUFDZixhQUFPLEtBQUtGLEdBQVo7QUFDRDs7O1NBRUQsZUFBaUI7QUFDZixhQUFPLEtBQUtPLFdBQVo7QUFDRDs7O1NBRUQsZUFBbUI7QUFDakI7QUFDQSxhQUFPLEtBQUt3QixVQUFMLENBQWdCQyxHQUFoQixHQUFzQixJQUF0QixHQUE2QkMsSUFBSSxDQUFDQyxHQUFMLEVBQXBDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWZyZXNoSnd0IH0gZnJvbSAnLi4vYWN0aW9ucy9qd3QnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcblxuY29uc3QgUkVGUkVTSCA9IDEwMDAgKiA2MCAqIDYwICogMjM7IC8vIGV2ZXJ5IDIzIGhvdXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRpc3BhdGNoLCBjdXJyZW50VXNlcklkLCByZWZyZXNoID0gUkVGUkVTSCkge1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVmcmVzaEp3dChjdXJyZW50VXNlcklkKSk7XG4gIH0sIHJlZnJlc2gpO1xufVxuXG5leHBvcnQgY2xhc3MgSnd0IHtcbiAgY29uc3RydWN0b3Ioand0LCBhcGlVcmwsIG9hdXRoQ29uc3VtZXJLZXkgPSBudWxsLCByZWZyZXNoID0gUkVGUkVTSCkge1xuICAgIHRoaXMuand0ID0gand0O1xuICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xuXG4gICAgdGhpcy5vYXV0aENvbnN1bWVyS2V5ID0gb2F1dGhDb25zdW1lcktleTtcblxuICAgIGlmICh0aGlzLmp3dCkge1xuICAgICAgY29uc3QgYmFzZTY0VXJsID0gdGhpcy5qd3Quc3BsaXQoJy4nKVsxXTtcbiAgICAgIGNvbnN0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fZGVjb2RlZEp3dCA9IEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5fZGVjb2RlZEp3dC51c2VyX2lkO1xuICAgICAgICB0aGlzLmNvbnRleHRJZCA9IHRoaXMuX2RlY29kZWRKd3QuY29udGV4dF9pZDtcbiAgICAgICAgdGhpcy5vYXV0aENvbnN1bWVyS2V5ID0gdGhpcy5fZGVjb2RlZEp3dC5raWQgfHwgb2F1dGhDb25zdW1lcktleTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBpZiAodHlwZW9mIFJvbGxiYXIgIT09ICd1bmRlZmluZWQnICYmIFJvbGxiYXIub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgUm9sbGJhci5lcnJvcignRmFpbGVkIHRvIGRlY29kZSBKV1QgZm9yIHJlZnJlc2gnLCB7IGVycm9yOiBlLCBlbmNvZGVkSnd0OiBiYXNlNjQgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2ggPSByZWZyZXNoO1xuICB9XG5cbiAgZW5hYmxlUmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5qd3QgJiYgdGhpcy51c2VySWQpIHtcbiAgICAgIGNvbnN0IHVybCA9IGBhcGkvand0cy8ke3RoaXMudXNlcklkfWA7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGFwaS5nZXQodXJsLCB0aGlzLmFwaVVybCwgdGhpcy5qd3QsIG51bGwsIHRoaXMucGFyYW1zLCBudWxsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuand0ID0gcmVzcG9uc2UuYm9keS5qd3Q7XG4gICAgICAgIH0pO1xuICAgICAgfSwgdGhpcy5yZWZyZXNoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBBZGQgdGhlIGNvbnRleHQgaWQgZnJvbSB0aGUgbHRpIGxhdW5jaFxuICAgICAgY29udGV4dF9pZDogdGhpcy5jb250ZXh0SWQsXG4gICAgICAvLyBBZGQgY29uc3VtZXIga2V5IHRvIHJlcXVlc3RzIHRvIGluZGljYXRlIHdoaWNoIGx0aSBhcHAgcmVxdWVzdHMgYXJlIG9yaWdpbmF0aW5nIGZyb20uXG4gICAgICBvYXV0aF9jb25zdW1lcl9rZXk6IHRoaXMub2F1dGhDb25zdW1lcktleSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRKd3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuand0O1xuICB9XG5cbiAgZ2V0IGRlY29kZWRKd3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY29kZWRKd3Q7XG4gIH1cblxuICBnZXQgaXNqd3RFeHBpcmVkKCkge1xuICAgIC8vIFJhaWxzIGRvZXMgc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggaW5zdGVhZCBvZiBtaWxsaXNlY29uZHMgc28gd2UgbXVsdGlwbGUgYnkgMTAwMFxuICAgIHJldHVybiB0aGlzLmRlY29kZWRKd3QuZXhwICogMTAwMCA8IERhdGUubm93KCk7XG4gIH1cblxufVxuIl19