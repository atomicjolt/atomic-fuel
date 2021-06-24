"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errors = require("../actions/errors");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var initialState = [];

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _errors.Constants.CLEAR_ERRORS:
      return [];

    case _errors.Constants.ADD_ERROR:
      return [].concat(_toConsumableArray(state), [action.payload]);

    default:
      if (action.error) {
        var message = action.error.message;

        if (action.error.response && action.error.response.text) {
          try {
            var json = JSON.parse(action.error.response.text);

            if (json) {
              message = json.message;
            }
          } catch (ex) {// We can't parse the data as JSON just let the original error message stand
          }
        }

        return [].concat(_toConsumableArray(state), [{
          error: action.error,
          message: message,
          context: action
        }]);
      }

      return state;
  }
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9lcnJvcnMuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ29uc3RhbnRzIiwiQ0xFQVJfRVJST1JTIiwiQUREX0VSUk9SIiwicGF5bG9hZCIsImVycm9yIiwibWVzc2FnZSIsInJlc3BvbnNlIiwidGV4dCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJleCIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7O2VBRWUsb0JBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkQsWUFBeUI7QUFBQSxNQUFYRSxNQUFXOztBQUUvQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFFRSxTQUFLQyxrQkFBVUMsWUFBZjtBQUNFLGFBQU8sRUFBUDs7QUFFRixTQUFLRCxrQkFBVUUsU0FBZjtBQUNFLDBDQUFXTCxLQUFYLElBQWtCQyxNQUFNLENBQUNLLE9BQXpCOztBQUVGO0FBQ0UsVUFBSUwsTUFBTSxDQUFDTSxLQUFYLEVBQWtCO0FBQ2hCLFlBQU1DLE9BQU4sR0FBa0JQLE1BQU0sQ0FBQ00sS0FBekIsQ0FBTUMsT0FBTjs7QUFDQSxZQUFJUCxNQUFNLENBQUNNLEtBQVAsQ0FBYUUsUUFBYixJQUF5QlIsTUFBTSxDQUFDTSxLQUFQLENBQWFFLFFBQWIsQ0FBc0JDLElBQW5ELEVBQXlEO0FBQ3ZELGNBQUk7QUFDRixnQkFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osTUFBTSxDQUFDTSxLQUFQLENBQWFFLFFBQWIsQ0FBc0JDLElBQWpDLENBQWI7O0FBQ0EsZ0JBQUlDLElBQUosRUFBVTtBQUNSSCxjQUFBQSxPQUFPLEdBQUdHLElBQUksQ0FBQ0gsT0FBZjtBQUNEO0FBQ0YsV0FMRCxDQUtFLE9BQU9NLEVBQVAsRUFBVyxDQUNYO0FBQ0Q7QUFDRjs7QUFDRCw0Q0FBV2QsS0FBWCxJQUFrQjtBQUNoQk8sVUFBQUEsS0FBSyxFQUFFTixNQUFNLENBQUNNLEtBREU7QUFFaEJDLFVBQUFBLE9BQU8sRUFBUEEsT0FGZ0I7QUFHaEJPLFVBQUFBLE9BQU8sRUFBRWQ7QUFITyxTQUFsQjtBQUtEOztBQUNELGFBQU9ELEtBQVA7QUEzQko7QUE4QkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL2FjdGlvbnMvZXJyb3JzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSBDb25zdGFudHMuQ0xFQVJfRVJST1JTOlxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgY2FzZSBDb25zdGFudHMuQUREX0VSUk9SOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChhY3Rpb24uZXJyb3IpIHtcbiAgICAgICAgbGV0IHsgbWVzc2FnZSB9ID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBpZiAoYWN0aW9uLmVycm9yLnJlc3BvbnNlICYmIGFjdGlvbi5lcnJvci5yZXNwb25zZS50ZXh0KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGFjdGlvbi5lcnJvci5yZXNwb25zZS50ZXh0KTtcbiAgICAgICAgICAgIGlmIChqc29uKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBqc29uLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbid0IHBhcnNlIHRoZSBkYXRhIGFzIEpTT04ganVzdCBsZXQgdGhlIG9yaWdpbmFsIGVycm9yIG1lc3NhZ2Ugc3RhbmRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge1xuICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICBjb250ZXh0OiBhY3Rpb24sXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbn07XG4iXX0=