"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwt = require("../actions/jwt");

var initialState = '';

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _jwt.Constants.REFRESH_JWT_DONE:
      if (action.payload.jwt) {
        // Ensure we received a valid jwt. If the server isn't available we
        // will get undefined. If there is a chance the current jwt is still
        // valid we want to leave it in place. Note that this typically happens
        // when the user loses network connectivity.
        return action.payload.jwt;
      }

      return state;

    default:
      return state;
  }
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9qd3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSnd0Q29uc3RhbnRzIiwiUkVGUkVTSF9KV1RfRE9ORSIsInBheWxvYWQiLCJqd3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7O2VBRWUsb0JBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkQsWUFBeUI7QUFBQSxNQUFYRSxNQUFXOztBQUMvQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFFRSxTQUFLQyxlQUFhQyxnQkFBbEI7QUFDRSxVQUFJSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsR0FBbkIsRUFBd0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPTCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsR0FBdEI7QUFDRDs7QUFDRCxhQUFPTixLQUFQOztBQUVGO0FBQ0UsYUFBT0EsS0FBUDtBQWJKO0FBZ0JELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgYXMgSnd0Q29uc3RhbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9qd3QnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAnJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSBKd3RDb25zdGFudHMuUkVGUkVTSF9KV1RfRE9ORTpcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5qd3QpIHtcbiAgICAgICAgLy8gRW5zdXJlIHdlIHJlY2VpdmVkIGEgdmFsaWQgand0LiBJZiB0aGUgc2VydmVyIGlzbid0IGF2YWlsYWJsZSB3ZVxuICAgICAgICAvLyB3aWxsIGdldCB1bmRlZmluZWQuIElmIHRoZXJlIGlzIGEgY2hhbmNlIHRoZSBjdXJyZW50IGp3dCBpcyBzdGlsbFxuICAgICAgICAvLyB2YWxpZCB3ZSB3YW50IHRvIGxlYXZlIGl0IGluIHBsYWNlLiBOb3RlIHRoYXQgdGhpcyB0eXBpY2FsbHkgaGFwcGVuc1xuICAgICAgICAvLyB3aGVuIHRoZSB1c2VyIGxvc2VzIG5ldHdvcmsgY29ubmVjdGl2aXR5LlxuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuand0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICB9XG59O1xuIl19