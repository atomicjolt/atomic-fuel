'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pendingRequests = {};

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: 'get',
    value: function get(url, apiUrl, jwt, csrf, params, headers) {
      var timeout = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _network2.default.TIMEOUT;

      return Api.execRequest(_network2.default.GET, url, apiUrl, jwt, csrf, params, null, headers, timeout);
    }
  }, {
    key: 'post',
    value: function post(url, apiUrl, jwt, csrf, params, body, headers) {
      var timeout = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : _network2.default.TIMEOUT;

      return Api.execRequest(_network2.default.POST, url, apiUrl, jwt, csrf, params, body, headers, timeout);
    }
  }, {
    key: 'put',
    value: function put(url, apiUrl, jwt, csrf, params, body, headers) {
      var timeout = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : _network2.default.TIMEOUT;

      return Api.execRequest(_network2.default.PUT, url, apiUrl, jwt, csrf, params, body, headers, timeout);
    }
  }, {
    key: 'del',
    value: function del(url, apiUrl, jwt, csrf, params, headers) {
      var timeout = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _network2.default.TIMEOUT;

      return Api.execRequest(_network2.default.DEL, url, apiUrl, jwt, csrf, params, null, headers, timeout);
    }
  }, {
    key: 'execRequest',
    value: function execRequest(method, url, apiUrl, jwt, csrf, params, body, headers) {
      var timeout = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : _network2.default.TIMEOUT;

      return Api.doRequest(Api.makeUrl('' + url + Api.queryStringFrom(params), apiUrl), function (fullUrl) {
        var request = void 0;

        switch (method) {
          case _network2.default.GET:
            request = _superagent2.default.get(fullUrl);
            break;
          case _network2.default.POST:
            request = _superagent2.default.post(fullUrl).send(body);
            break;
          case _network2.default.PUT:
            request = _superagent2.default.put(fullUrl).send(body);
            break;
          case _network2.default.DEL:
            request = _superagent2.default.del(fullUrl);
            break;
          default:
            break;
        }

        request.set('Accept', 'application/json');
        request.timeout(timeout);

        if (!_lodash2.default.isNil(jwt)) {
          request.set('Authorization', 'Bearer ' + jwt);
        }
        if (!_lodash2.default.isNil(csrf)) {
          request.set('X-CSRF-Token', csrf);
        }

        if (!_lodash2.default.isNil(headers)) {
          _lodash2.default.each(headers, function (headerValue, headerKey) {
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
    key: 'makeUrl',
    value: function makeUrl(part, apiUrl) {
      if (_lodash2.default.startsWith(part, 'http')) {
        return part;
      }

      var slash = _lodash2.default.last(apiUrl.split('')) === '/' ? '' : '/';
      var newPart = part;
      if (part[0] === '/') {
        newPart = part.slice(1);
      }
      return apiUrl + slash + newPart;
    }
  }, {
    key: 'doRequest',
    value: function doRequest(url, requestMethod, requestType) {
      // Prevent duplicate requests
      var wrapper = Api.wrapRequest(url, requestMethod, requestType);
      if (wrapper.promise) {
        // Existing request was found. Return promise from request
        return wrapper.promise;
      }

      // No request was found. Generate a promise, add it to the wrapper and return the promise.
      wrapper.promise = Api.promisify(wrapper.request, url);

      // Dispose of the request when the call is complete
      wrapper.promise.then(function () {
        Api.disposeRequest(url);
      }, function () {
        Api.disposeRequest(url);
      });

      return wrapper.promise;
    }
  }, {
    key: 'wrapRequest',
    value: function wrapRequest(url, requestMethod, requestType) {
      if (requestType === _network2.default.GET) {
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
    key: 'disposeRequest',
    value: function disposeRequest(url) {
      delete pendingRequests[url];
    }
  }, {
    key: 'promisify',
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
    key: 'queryStringFrom',
    value: function queryStringFrom(params) {
      var query = _lodash2.default.chain(params).map(function (val, key) {
        if (val) {
          if (_lodash2.default.isArray(val)) {
            return _lodash2.default.map(val, function (subVal) {
              return key + '[]=' + subVal;
            }).join('&');
          }
          return key + '=' + val;
        }
        return '';
      }).compact().value();

      if (query.length > 0) {
        return '?' + query.join('&');
      }
      return '';
    }
  }]);

  return Api;
}();

// function *doCacheRequest(url, key, requestMethod, requestType){

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


exports.default = Api;