"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _superagent = _interopRequireDefault(require("superagent"));

var _network = _interopRequireDefault(require("../constants/network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pendingRequests = {};

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "get",
    value: function get(url, apiUrl, jwt, csrf, params, headers) {
      var timeout = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _network["default"].TIMEOUT;
      return Api.execRequest(_network["default"].GET, url, apiUrl, jwt, csrf, params, null, headers, timeout);
    }
  }, {
    key: "post",
    value: function post(url, apiUrl, jwt, csrf, params, body, headers) {
      var timeout = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : _network["default"].TIMEOUT;
      return Api.execRequest(_network["default"].POST, url, apiUrl, jwt, csrf, params, body, headers, timeout);
    }
  }, {
    key: "put",
    value: function put(url, apiUrl, jwt, csrf, params, body, headers) {
      var timeout = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : _network["default"].TIMEOUT;
      return Api.execRequest(_network["default"].PUT, url, apiUrl, jwt, csrf, params, body, headers, timeout);
    }
  }, {
    key: "del",
    value: function del(url, apiUrl, jwt, csrf, params, headers) {
      var timeout = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _network["default"].TIMEOUT;
      return Api.execRequest(_network["default"].DEL, url, apiUrl, jwt, csrf, params, null, headers, timeout);
    }
  }, {
    key: "execRequest",
    value: function execRequest(method, url, apiUrl, jwt, csrf, params, body, headers) {
      var timeout = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : _network["default"].TIMEOUT;
      return Api.doRequest(Api.makeUrl("".concat(url).concat(Api.queryStringFrom(params)), apiUrl), function (fullUrl) {
        var request;

        switch (method) {
          case _network["default"].GET:
            request = _superagent["default"].get(fullUrl);
            break;

          case _network["default"].POST:
            request = _superagent["default"].post(fullUrl).send(body);
            break;

          case _network["default"].PUT:
            request = _superagent["default"].put(fullUrl).send(body);
            break;

          case _network["default"].DEL:
            if (_lodash["default"].isEmpty(body)) {
              request = _superagent["default"].del(fullUrl);
            } else {
              request = _superagent["default"].del(fullUrl).send(body);
            }

            break;

          default:
            break;
        }

        request.set('Accept', 'application/json');
        request.timeout(timeout);

        if (!_lodash["default"].isNil(jwt)) {
          request.set('Authorization', "Bearer ".concat(jwt));
        }

        if (!_lodash["default"].isNil(csrf)) {
          request.set('X-CSRF-Token', csrf);
        }

        if (!_lodash["default"].isNil(headers)) {
          _lodash["default"].each(headers, function (headerValue, headerKey) {
            request.set(headerKey, headerValue);
          });
        }

        return request;
      }, method);
    }
    /**
     * Returns a complete, absolute URL by conditionally appending `path` to
     * `apiUrl`.  If `path` already contains "http", it is returned as-is.
     */

  }, {
    key: "makeUrl",
    value: function makeUrl(part, apiUrl) {
      if (_lodash["default"].startsWith(part, 'http')) {
        return part;
      }

      var slash = _lodash["default"].last(apiUrl.split('')) === '/' ? '' : '/';
      var newPart = part;

      if (part[0] === '/') {
        newPart = part.slice(1);
      }

      return apiUrl + slash + newPart;
    }
  }, {
    key: "doRequest",
    value: function doRequest(url, requestMethod, requestType) {
      // Prevent duplicate requests
      var wrapper = Api.wrapRequest(url, requestMethod, requestType);

      if (wrapper.promise) {
        // Existing request was found. Return promise from request
        return wrapper.promise;
      } // No request was found. Generate a promise, add it to the wrapper and return the promise.


      wrapper.promise = Api.promisify(wrapper.request, url); // Dispose of the request when the call is complete

      wrapper.promise.then(function () {
        Api.disposeRequest(url);
      }, function () {
        Api.disposeRequest(url);
      });
      return wrapper.promise;
    }
  }, {
    key: "wrapRequest",
    value: function wrapRequest(url, requestMethod, requestType) {
      if (requestType === _network["default"].GET) {
        if (!pendingRequests[url]) {
          pendingRequests[url] = {
            request: requestMethod(url)
          };
        }

        return pendingRequests[url];
      }

      return {
        request: requestMethod(url)
      };
    }
  }, {
    key: "disposeRequest",
    value: function disposeRequest(url) {
      delete pendingRequests[url];
    }
  }, {
    key: "promisify",
    value: function promisify(request) {
      return new Promise(function (resolve, reject) {
        request.end(function (error, res) {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        });
      });
    }
  }, {
    key: "queryStringFrom",
    value: function queryStringFrom(params) {
      var query = _lodash["default"].chain(params).map(function (val, key) {
        if (val) {
          if (_lodash["default"].isArray(val)) {
            return _lodash["default"].map(val, function (subVal) {
              return "".concat(key, "[]=").concat(subVal);
            }).join('&');
          }

          return "".concat(key, "=").concat(val);
        }

        return '';
      }).compact().value();

      if (query.length > 0) {
        return "?".concat(query.join('&'));
      }

      return '';
    }
  }]);

  return Api;
}(); // function *doCacheRequest(url, key, requestMethod, requestType){
//   var promise;
//   var fullUrl = Api.makeUrl(url);
//   if (_cache[fullUrl]) {
//     setTimeout(() => {
//       dispatchResponse(key)(null, _cache[fullUrl]);
//     }, 1);
//     promise = new Promise((resolve, reject) => {
//       resolve(_cache[fullUrl]);
//     });
//     yield promise;
//   };
//   var wrapper = Api._wrapRequest(url, requestMethod, requestType);
//   if(wrapper.promise){
//     yield wrapper.promise;
//   } else {
//     promise = Api.promisify(wrapper.request);
//     wrapper.promise = promise;
//     promise.then((result) => {
//       Api.disposeRequest(url);
//       dispatchResponse(key)(null, result);
//       _cache[fullUrl] = result;
//       _cache[fullUrl].isCached = true;
//       return result;
//     }, (err) => {
//       dispatchResponse(key)(err, err.response);
//     });
//     yield promise;
//   }
// }
//   async cacheGet(url, jwt, csrf, params, key, store, refresh){
//     url = `${url}${Api.queryStringFrom(params)}`;
//     var request = doCacheRequest(url, jwt, csrf, key, (fullUrl, jwt, csrt) => {
//       return get(fullUrl);
//     }, GET);
//     if (key) {
//       // We have a key. Invoke the generate to get data and dispatch.
//       var response = request.next();
//       while (refresh && !response.done){
//         response = request.next();
//       }
//     } else {
//       // Return the generator and let the calling code invoke it.
//       return request;
//     }
//   }


exports["default"] = Api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXBpLmpzIl0sIm5hbWVzIjpbInBlbmRpbmdSZXF1ZXN0cyIsIkFwaSIsInVybCIsImFwaVVybCIsImp3dCIsImNzcmYiLCJwYXJhbXMiLCJoZWFkZXJzIiwidGltZW91dCIsIk5ldHdvcmtDb25zdGFudHMiLCJUSU1FT1VUIiwiZXhlY1JlcXVlc3QiLCJHRVQiLCJib2R5IiwiUE9TVCIsIlBVVCIsIkRFTCIsIm1ldGhvZCIsImRvUmVxdWVzdCIsIm1ha2VVcmwiLCJxdWVyeVN0cmluZ0Zyb20iLCJmdWxsVXJsIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJnZXQiLCJwb3N0Iiwic2VuZCIsInB1dCIsIl8iLCJpc0VtcHR5IiwiZGVsIiwic2V0IiwiaXNOaWwiLCJlYWNoIiwiaGVhZGVyVmFsdWUiLCJoZWFkZXJLZXkiLCJwYXJ0Iiwic3RhcnRzV2l0aCIsInNsYXNoIiwibGFzdCIsInNwbGl0IiwibmV3UGFydCIsInNsaWNlIiwicmVxdWVzdE1ldGhvZCIsInJlcXVlc3RUeXBlIiwid3JhcHBlciIsIndyYXBSZXF1ZXN0IiwicHJvbWlzZSIsInByb21pc2lmeSIsInRoZW4iLCJkaXNwb3NlUmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZW5kIiwiZXJyb3IiLCJyZXMiLCJxdWVyeSIsImNoYWluIiwibWFwIiwidmFsIiwia2V5IiwiaXNBcnJheSIsInN1YlZhbCIsImpvaW4iLCJjb21wYWN0IiwidmFsdWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxFQUF4Qjs7SUFFcUJDLEc7Ozs7Ozs7V0FFbkIsYUFBV0MsR0FBWCxFQUFnQkMsTUFBaEIsRUFBd0JDLEdBQXhCLEVBQTZCQyxJQUE3QixFQUFtQ0MsTUFBbkMsRUFBMkNDLE9BQTNDLEVBQXdGO0FBQUEsVUFBcENDLE9BQW9DLHVFQUExQkMsb0JBQWlCQyxPQUFTO0FB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VyxFQUFkOztBQWFBLFVBQUlULEtBQUssQ0FBQ1UsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCLDBCQUFXVixLQUFLLENBQUNPLElBQU4sQ0FBVyxHQUFYLENBQVg7QUFDRDs7QUFDRCxhQUFPLEVBQVA7QUFDRDs7OztLQUlIO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuXG5pbXBvcnQgTmV0d29ya0NvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMvbmV0d29yayc7XG5cbmNvbnN0IHBlbmRpbmdSZXF1ZXN0cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuXG4gIHN0YXRpYyBnZXQodXJsLCBhcGlVcmwsIGp3dCwgY3NyZiwgcGFyYW1zLCBoZWFkZXJzLCB0aW1lb3V0ID0gTmV0d29ya0NvbnN0YW50cy5USU1FT1VUKSB7XG4gICAgcmV0dXJuIEFwaS5leGVjUmVxdWVzdChcbiAgICAgIE5ldHdvcmtDb25zdGFudHMuR0VULFxuICAgICAgdXJsLFxuICAgICAgYXBpVXJsLFxuICAgICAgand0LFxuICAgICAgY3NyZixcbiAgICAgIHBhcmFtcyxcbiAgICAgIG51bGwsXG4gICAgICBoZWFkZXJzLFxuICAgICAgdGltZW91dCxcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHBvc3QodXJsLCBhcGlVcmwsIGp3dCwgY3NyZiwgcGFyYW1zLCBib2R5LCBoZWFkZXJzLCB0aW1lb3V0ID0gTmV0d29ya0NvbnN0YW50cy5USU1FT1VUKSB7XG4gICAgcmV0dXJuIEFwaS5leGVjUmVxdWVzdChcbiAgICAgIE5ldHdvcmtDb25zdGFudHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIGFwaVVybCxcbiAgICAgIGp3dCxcbiAgICAgIGNzcmYsXG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5LFxuICAgICAgaGVhZGVycyxcbiAgICAgIHRpbWVvdXQsXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBwdXQodXJsLCBhcGlVcmwsIGp3dCwgY3NyZiwgcGFyYW1zLCBib2R5LCBoZWFkZXJzLCB0aW1lb3V0ID0gTmV0d29ya0NvbnN0YW50cy5USU1FT1VUKSB7XG4gICAgcmV0dXJuIEFwaS5leGVjUmVxdWVzdChcbiAgICAgIE5ldHdvcmtDb25zdGFudHMuUFVULFxuICAgICAgdXJsLFxuICAgICAgYXBpVXJsLFxuICAgICAgand0LFxuICAgICAgY3NyZixcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHksXG4gICAgICBoZWFkZXJzLFxuICAgICAgdGltZW91dCxcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlbCh1cmwsIGFwaVVybCwgand0LCBjc3JmLCBwYXJhbXMsIGhlYWRlcnMsIHRpbWVvdXQgPSBOZXR3b3JrQ29uc3RhbnRzLlRJTUVPVVQpIHtcbiAgICByZXR1cm4gQXBpLmV4ZWNSZXF1ZXN0KFxuICAgICAgTmV0d29ya0NvbnN0YW50cy5ERUwsXG4gICAgICB1cmwsXG4gICAgICBhcGlVcmwsXG4gICAgICBqd3QsXG4gICAgICBjc3JmLFxuICAgICAgcGFyYW1zLFxuICAgICAgbnVsbCxcbiAgICAgIGhlYWRlcnMsXG4gICAgICB0aW1lb3V0LFxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZXhlY1JlcXVlc3QoXG4gICAgbWV0aG9kLFxuICAgIHVybCxcbiAgICBhcGlVcmwsXG4gICAgand0LFxuICAgIGNzcmYsXG4gICAgcGFyYW1zLFxuICAgIGJvZHksXG4gICAgaGVhZGVycyxcbiAgICB0aW1lb3V0ID0gTmV0d29ya0NvbnN0YW50cy5USU1FT1VULFxuICApIHtcbiAgICByZXR1cm4gQXBpLmRvUmVxdWVzdChBcGkubWFrZVVybChgJHt1cmx9JHtBcGkucXVlcnlTdHJpbmdGcm9tKHBhcmFtcyl9YCwgYXBpVXJsKSwgKGZ1bGxVcmwpID0+IHtcbiAgICAgIGxldCByZXF1ZXN0O1xuXG4gICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlIE5ldHdvcmtDb25zdGFudHMuR0VUOlxuICAgICAgICAgIHJlcXVlc3QgPSBSZXF1ZXN0LmdldChmdWxsVXJsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBOZXR3b3JrQ29uc3RhbnRzLlBPU1Q6XG4gICAgICAgICAgcmVxdWVzdCA9IFJlcXVlc3QucG9zdChmdWxsVXJsKS5zZW5kKGJvZHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE5ldHdvcmtDb25zdGFudHMuUFVUOlxuICAgICAgICAgIHJlcXVlc3QgPSBSZXF1ZXN0LnB1dChmdWxsVXJsKS5zZW5kKGJvZHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE5ldHdvcmtDb25zdGFudHMuREVMOlxuICAgICAgICAgIGlmIChfLmlzRW1wdHkoYm9keSkpIHtcbiAgICAgICAgICAgIHJlcXVlc3QgPSBSZXF1ZXN0LmRlbChmdWxsVXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdCA9IFJlcXVlc3QuZGVsKGZ1bGxVcmwpLnNlbmQoYm9keSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHJlcXVlc3QudGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKCFfLmlzTmlsKGp3dCkpIHsgcmVxdWVzdC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7and0fWApOyB9XG4gICAgICBpZiAoIV8uaXNOaWwoY3NyZikpIHsgcmVxdWVzdC5zZXQoJ1gtQ1NSRi1Ub2tlbicsIGNzcmYpOyB9XG5cbiAgICAgIGlmICghXy5pc05pbChoZWFkZXJzKSkge1xuICAgICAgICBfLmVhY2goaGVhZGVycywgKGhlYWRlclZhbHVlLCBoZWFkZXJLZXkpID0+IHtcbiAgICAgICAgICByZXF1ZXN0LnNldChoZWFkZXJLZXksIGhlYWRlclZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0sIG1ldGhvZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNvbXBsZXRlLCBhYnNvbHV0ZSBVUkwgYnkgY29uZGl0aW9uYWxseSBhcHBlbmRpbmcgYHBhdGhgIHRvXG4gICAqIGBhcGlVcmxgLiAgSWYgYHBhdGhgIGFscmVhZHkgY29udGFpbnMgXCJodHRwXCIsIGl0IGlzIHJldHVybmVkIGFzLWlzLlxuICAgKi9cbiAgc3RhdGljIG1ha2VVcmwocGFydCwgYXBpVXJsKSB7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwYXJ0LCAnaHR0cCcpKSB7XG4gICAgICByZXR1cm4gcGFydDtcbiAgICB9XG5cbiAgICBjb25zdCBzbGFzaCA9IF8ubGFzdChhcGlVcmwuc3BsaXQoJycpKSA9PT0gJy8nID8gJycgOiAnLyc7XG4gICAgbGV0IG5ld1BhcnQgPSBwYXJ0O1xuICAgIGlmIChwYXJ0WzBdID09PSAnLycpIHtcbiAgICAgIG5ld1BhcnQgPSBwYXJ0LnNsaWNlKDEpO1xuICAgIH1cbiAgICByZXR1cm4gYXBpVXJsICsgc2xhc2ggKyBuZXdQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGRvUmVxdWVzdCh1cmwsIHJlcXVlc3RNZXRob2QsIHJlcXVlc3RUeXBlKSB7XG4gICAgLy8gUHJldmVudCBkdXBsaWNhdGUgcmVxdWVzdHNcbiAgICBjb25zdCB3cmFwcGVyID0gQXBpLndyYXBSZXF1ZXN0KHVybCwgcmVxdWVzdE1ldGhvZCwgcmVxdWVzdFR5cGUpO1xuICAgIGlmICh3cmFwcGVyLnByb21pc2UpIHtcbiAgICAgIC8vIEV4aXN0aW5nIHJlcXVlc3Qgd2FzIGZvdW5kLiBSZXR1cm4gcHJvbWlzZSBmcm9tIHJlcXVlc3RcbiAgICAgIHJldHVybiB3cmFwcGVyLnByb21pc2U7XG4gICAgfVxuXG4gICAgLy8gTm8gcmVxdWVzdCB3YXMgZm91bmQuIEdlbmVyYXRlIGEgcHJvbWlzZSwgYWRkIGl0IHRvIHRoZSB3cmFwcGVyIGFuZCByZXR1cm4gdGhlIHByb21pc2UuXG4gICAgd3JhcHBlci5wcm9taXNlID0gQXBpLnByb21pc2lmeSh3cmFwcGVyLnJlcXVlc3QsIHVybCk7XG5cbiAgICAvLyBEaXNwb3NlIG9mIHRoZSByZXF1ZXN0IHdoZW4gdGhlIGNhbGwgaXMgY29tcGxldGVcbiAgICB3cmFwcGVyLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBBcGkuZGlzcG9zZVJlcXVlc3QodXJsKTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICBBcGkuZGlzcG9zZVJlcXVlc3QodXJsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3cmFwcGVyLnByb21pc2U7XG4gIH1cblxuICBzdGF0aWMgd3JhcFJlcXVlc3QodXJsLCByZXF1ZXN0TWV0aG9kLCByZXF1ZXN0VHlwZSkge1xuICAgIGlmIChyZXF1ZXN0VHlwZSA9PT0gTmV0d29ya0NvbnN0YW50cy5HRVQpIHtcbiAgICAgIGlmICghcGVuZGluZ1JlcXVlc3RzW3VybF0pIHtcbiAgICAgICAgcGVuZGluZ1JlcXVlc3RzW3VybF0gPSB7XG4gICAgICAgICAgcmVxdWVzdDogcmVxdWVzdE1ldGhvZCh1cmwpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBlbmRpbmdSZXF1ZXN0c1t1cmxdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWVzdDogcmVxdWVzdE1ldGhvZCh1cmwpLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZGlzcG9zZVJlcXVlc3QodXJsKSB7XG4gICAgZGVsZXRlIHBlbmRpbmdSZXF1ZXN0c1t1cmxdO1xuICB9XG5cbiAgc3RhdGljIHByb21pc2lmeShyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcXVlc3QuZW5kKChlcnJvciwgcmVzKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBxdWVyeVN0cmluZ0Zyb20ocGFyYW1zKSB7XG4gICAgY29uc3QgcXVlcnkgPSBfLmNoYWluKHBhcmFtcylcbiAgICAgIC5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBpZiAoXy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBfLm1hcCh2YWwsIChzdWJWYWwpID0+IGAke2tleX1bXT0ke3N1YlZhbH1gKS5qb2luKCcmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtrZXl9PSR7dmFsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSlcbiAgICAgIC5jb21wYWN0KClcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBgPyR7cXVlcnkuam9pbignJicpfWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uICpkb0NhY2hlUmVxdWVzdCh1cmwsIGtleSwgcmVxdWVzdE1ldGhvZCwgcmVxdWVzdFR5cGUpe1xuXG4vLyAgIHZhciBwcm9taXNlO1xuLy8gICB2YXIgZnVsbFVybCA9IEFwaS5tYWtlVXJsKHVybCk7XG5cbi8vICAgaWYgKF9jYWNoZVtmdWxsVXJsXSkge1xuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgZGlzcGF0Y2hSZXNwb25zZShrZXkpKG51bGwsIF9jYWNoZVtmdWxsVXJsXSk7XG4vLyAgICAgfSwgMSk7XG5cbi8vICAgICBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgcmVzb2x2ZShfY2FjaGVbZnVsbFVybF0pO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgeWllbGQgcHJvbWlzZTtcbi8vICAgfTtcblxuLy8gICB2YXIgd3JhcHBlciA9IEFwaS5fd3JhcFJlcXVlc3QodXJsLCByZXF1ZXN0TWV0aG9kLCByZXF1ZXN0VHlwZSk7XG4vLyAgIGlmKHdyYXBwZXIucHJvbWlzZSl7XG4vLyAgICAgeWllbGQgd3JhcHBlci5wcm9taXNlO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHByb21pc2UgPSBBcGkucHJvbWlzaWZ5KHdyYXBwZXIucmVxdWVzdCk7XG4vLyAgICAgd3JhcHBlci5wcm9taXNlID0gcHJvbWlzZTtcbi8vICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuLy8gICAgICAgQXBpLmRpc3Bvc2VSZXF1ZXN0KHVybCk7XG4vLyAgICAgICBkaXNwYXRjaFJlc3BvbnNlKGtleSkobnVsbCwgcmVzdWx0KTtcbi8vICAgICAgIF9jYWNoZVtmdWxsVXJsXSA9IHJlc3VsdDtcbi8vICAgICAgIF9jYWNoZVtmdWxsVXJsXS5pc0NhY2hlZCA9IHRydWU7XG4vLyAgICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICAgIH0sIChlcnIpID0+IHtcbi8vICAgICAgIGRpc3BhdGNoUmVzcG9uc2Uoa2V5KShlcnIsIGVyci5yZXNwb25zZSk7XG4vLyAgICAgfSk7XG4vLyAgICAgeWllbGQgcHJvbWlzZTtcbi8vICAgfVxuXG4vLyB9XG5cbi8vICAgYXN5bmMgY2FjaGVHZXQodXJsLCBqd3QsIGNzcmYsIHBhcmFtcywga2V5LCBzdG9yZSwgcmVmcmVzaCl7XG4vLyAgICAgdXJsID0gYCR7dXJsfSR7QXBpLnF1ZXJ5U3RyaW5nRnJvbShwYXJhbXMpfWA7XG4vLyAgICAgdmFyIHJlcXVlc3QgPSBkb0NhY2hlUmVxdWVzdCh1cmwsIGp3dCwgY3NyZiwga2V5LCAoZnVsbFVybCwgand0LCBjc3J0KSA9PiB7XG4vLyAgICAgICByZXR1cm4gZ2V0KGZ1bGxVcmwpO1xuLy8gICAgIH0sIEdFVCk7XG4vLyAgICAgaWYgKGtleSkge1xuLy8gICAgICAgLy8gV2UgaGF2ZSBhIGtleS4gSW52b2tlIHRoZSBnZW5lcmF0ZSB0byBnZXQgZGF0YSBhbmQgZGlzcGF0Y2guXG4vLyAgICAgICB2YXIgcmVzcG9uc2UgPSByZXF1ZXN0Lm5leHQoKTtcbi8vICAgICAgIHdoaWxlIChyZWZyZXNoICYmICFyZXNwb25zZS5kb25lKXtcbi8vICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0Lm5leHQoKTtcbi8vICAgICAgIH1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgLy8gUmV0dXJuIHRoZSBnZW5lcmF0b3IgYW5kIGxldCB0aGUgY2FsbGluZyBjb2RlIGludm9rZSBpdC5cbi8vICAgICAgIHJldHVybiByZXF1ZXN0O1xuLy8gICAgIH1cbi8vICAgfVxuIl19