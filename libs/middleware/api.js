"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiRequest = apiRequest;
exports["default"] = void 0;

var _api = _interopRequireDefault(require("../api/api"));

var _wrapper = require("../constants/wrapper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function apiRequest(store, action) {
  var state = store.getState();

  var updatedParams = _objectSpread({
    // Add the context id from the lti launch
    context_id: state.settings.context_id,
    // Add consumer key to requests to indicate which lti app requests are originating from.
    oauth_consumer_key: state.settings.oauth_consumer_key
  }, action.params);

  var promise = _api["default"].execRequest(action.method, action.url, state.settings.api_url, state.jwt, state.settings.csrf_token, updatedParams, action.body, action.headers, action.timeout);

  if (promise) {
    promise.then(function (response) {
      store.dispatch({
        type: action.type + _wrapper.DONE,
        payload: response.body,
        original: action,
        response: response
      }); // Dispatch the new data
    }, function (error) {
      store.dispatch({
        type: action.type + _wrapper.DONE,
        payload: {},
        original: action,
        error: error
      }); // Dispatch the new error
    });
  }

  return promise;
}

var API = function API(store) {
  return function (next) {
    return function (action) {
      if (action.method) {
        apiRequest(store, action);
      } // call the next middleWare


      next(action);
    };
  };
};

exports["default"] = API;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2FwaS5qcyJdLCJuYW1lcyI6WyJhcGlSZXF1ZXN0Iiwic3RvcmUiLCJhY3Rpb24iLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlZFBhcmFtcyIsImNvbnRleHRfaWQiLCJzZXR0aW5ncyIsIm9hdXRoX2NvbnN1bWVyX2tleSIsInBhcmFtcyIsInByb21pc2UiLCJhcGkiLCJleGVjUmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImFwaV91cmwiLCJqd3QiLCJjc3JmX3Rva2VuIiwiYm9keSIsImhlYWRlcnMiLCJ0aW1lb3V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGlzcGF0Y2giLCJ0eXBlIiwiRE9ORSIsInBheWxvYWQiLCJvcmlnaW5hbCIsImVycm9yIiwiQVBJIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQUVPLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQztBQUN4QyxNQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixFQUFkOztBQUNBLE1BQU1DLGFBQWE7QUFDakI7QUFDQUMsSUFBQUEsVUFBVSxFQUFFSCxLQUFLLENBQUNJLFFBQU4sQ0FBZUQsVUFGVjtBQUdqQjtBQUNBRSxJQUFBQSxrQkFBa0IsRUFBRUwsS0FBSyxDQUFDSSxRQUFOLENBQWVDO0FBSmxCLEtBS2ROLE1BQU0sQ0FBQ08sTUFMTyxDQUFuQjs7QUFPQSxNQUFNQyxPQUFPLEdBQUdDLGdCQUFJQyxXQUFKLENBQ2RWLE1BQU0sQ0FBQ1csTUFETyxFQUVkWCxNQUFNLENBQUNZLEdBRk8sRUFHZFgsS0FBSyxDQUFDSSxRQUFOLENBQWVRLE9BSEQsRUFJZFosS0FBSyxDQUFDYSxHQUpRLEVBS2RiLEtBQUssQ0FBQ0ksUUFBTixDQUFlVSxVQUxELEVBTWRaLGFBTmMsRUFPZEgsTUFBTSxDQUFDZ0IsSUFQTyxFQVFkaEIsTUFBTSxDQUFDaUIsT0FSTyxFQVNkakIsTUFBTSxDQUFDa0IsT0FUTyxDQUFoQjs7QUFZQSxNQUFJVixPQUFKLEVBQWE7QUFDWEEsSUFBQUEsT0FBTyxDQUFDVyxJQUFSLENBQ0UsVUFBQ0MsUUFBRCxFQUFjO0FBQ1pyQixNQUFBQSxLQUFLLENBQUNzQixRQUFOLENBQWU7QUFDYkMsUUFBQUEsSUFBSSxFQUFFdEIsTUFBTSxDQUFDc0IsSUFBUCxHQUFjQyxhQURQO0FBRWJDLFFBQUFBLE9BQU8sRUFBRUosUUFBUSxDQUFDSixJQUZMO0FBR2JTLFFBQUFBLFFBQVEsRUFBRXpCLE1BSEc7QUFJYm9CLFFBQUFBLFFBQVEsRUFBUkE7QUFKYSxPQUFmLEVBRFksQ0FNUjtBQUNMLEtBUkgsRUFTRSxVQUFDTSxLQUFELEVBQVc7QUFDVDNCLE1BQUFBLEtBQUssQ0FBQ3NCLFFBQU4sQ0FBZTtBQUNiQyxRQUFBQSxJQUFJLEVBQUV0QixNQUFNLENBQUNzQixJQUFQLEdBQWNDLGFBRFA7QUFFYkMsUUFBQUEsT0FBTyxFQUFFLEVBRkk7QUFHYkMsUUFBQUEsUUFBUSxFQUFFekIsTUFIRztBQUliMEIsUUFBQUEsS0FBSyxFQUFMQTtBQUphLE9BQWYsRUFEUyxDQU1MO0FBQ0wsS0FoQkg7QUFrQkQ7O0FBRUQsU0FBT2xCLE9BQVA7QUFDRDs7QUFFRCxJQUFNbUIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQzVCLEtBQUQ7QUFBQSxTQUFXLFVBQUM2QixJQUFEO0FBQUEsV0FBVSxVQUFDNUIsTUFBRCxFQUFZO0FBRTNDLFVBQUlBLE1BQU0sQ0FBQ1csTUFBWCxFQUFtQjtBQUNqQmIsUUFBQUEsVUFBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FBVjtBQUNELE9BSjBDLENBTTNDOzs7QUFDQTRCLE1BQUFBLElBQUksQ0FBQzVCLE1BQUQsQ0FBSjtBQUNELEtBUnNCO0FBQUEsR0FBWDtBQUFBLENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgRE9ORSB9IGZyb20gJy4uL2NvbnN0YW50cy93cmFwcGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwaVJlcXVlc3Qoc3RvcmUsIGFjdGlvbikge1xuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHVwZGF0ZWRQYXJhbXMgPSB7XG4gICAgLy8gQWRkIHRoZSBjb250ZXh0IGlkIGZyb20gdGhlIGx0aSBsYXVuY2hcbiAgICBjb250ZXh0X2lkOiBzdGF0ZS5zZXR0aW5ncy5jb250ZXh0X2lkLFxuICAgIC8vIEFkZCBjb25zdW1lciBrZXkgdG8gcmVxdWVzdHMgdG8gaW5kaWNhdGUgd2hpY2ggbHRpIGFwcCByZXF1ZXN0cyBhcmUgb3JpZ2luYXRpbmcgZnJvbS5cbiAgICBvYXV0aF9jb25zdW1lcl9rZXk6IHN0YXRlLnNldHRpbmdzLm9hdXRoX2NvbnN1bWVyX2tleSxcbiAgICAuLi5hY3Rpb24ucGFyYW1zXG4gIH07XG4gIGNvbnN0IHByb21pc2UgPSBhcGkuZXhlY1JlcXVlc3QoXG4gICAgYWN0aW9uLm1ldGhvZCxcbiAgICBhY3Rpb24udXJsLFxuICAgIHN0YXRlLnNldHRpbmdzLmFwaV91cmwsXG4gICAgc3RhdGUuand0LFxuICAgIHN0YXRlLnNldHRpbmdzLmNzcmZfdG9rZW4sXG4gICAgdXBkYXRlZFBhcmFtcyxcbiAgICBhY3Rpb24uYm9keSxcbiAgICBhY3Rpb24uaGVhZGVycyxcbiAgICBhY3Rpb24udGltZW91dFxuICApO1xuXG4gIGlmIChwcm9taXNlKSB7XG4gICAgcHJvbWlzZS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSArIERPTkUsXG4gICAgICAgICAgcGF5bG9hZDogcmVzcG9uc2UuYm9keSxcbiAgICAgICAgICBvcmlnaW5hbDogYWN0aW9uLFxuICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICB9KTsgLy8gRGlzcGF0Y2ggdGhlIG5ldyBkYXRhXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSArIERPTkUsXG4gICAgICAgICAgcGF5bG9hZDoge30sXG4gICAgICAgICAgb3JpZ2luYWw6IGFjdGlvbixcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSk7IC8vIERpc3BhdGNoIHRoZSBuZXcgZXJyb3JcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5jb25zdCBBUEkgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG5cbiAgaWYgKGFjdGlvbi5tZXRob2QpIHtcbiAgICBhcGlSZXF1ZXN0KHN0b3JlLCBhY3Rpb24pO1xuICB9XG5cbiAgLy8gY2FsbCB0aGUgbmV4dCBtaWRkbGVXYXJlXG4gIG5leHQoYWN0aW9uKTtcbn07XG5cbmV4cG9ydCB7IEFQSSBhcyBkZWZhdWx0IH07XG4iXX0=