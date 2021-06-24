"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modal = require("../actions/modal");

var initialState = {
  currentOpenModal: ''
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _modal.Constants.OPEN_MODAL:
      {
        return {
          currentOpenModal: action.modalName
        };
      }

    case _modal.Constants.CLOSE_MODAL:
      {
        return {
          currentOpenModal: ''
        };
      }

    default:
      return state;
  }
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjdXJyZW50T3Blbk1vZGFsIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ29uc3RhbnRzIiwiT1BFTl9NT0RBTCIsIm1vZGFsTmFtZSIsIkNMT1NFX01PREFMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQURDLENBQXJCOztlQUllLG9CQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJGLFlBQXlCO0FBQUEsTUFBWEcsTUFBVzs7QUFFL0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsaUJBQVVDLFVBQWY7QUFBMkI7QUFDekIsZUFBTztBQUFFTCxVQUFBQSxnQkFBZ0IsRUFBRUUsTUFBTSxDQUFDSTtBQUEzQixTQUFQO0FBQ0Q7O0FBQ0QsU0FBS0YsaUJBQVVHLFdBQWY7QUFBNEI7QUFDMUIsZUFBTztBQUFFUCxVQUFBQSxnQkFBZ0IsRUFBRTtBQUFwQixTQUFQO0FBQ0Q7O0FBQ0Q7QUFBUyxhQUFPQyxLQUFQO0FBUFg7QUFTRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9tb2RhbCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY3VycmVudE9wZW5Nb2RhbDogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ29uc3RhbnRzLk9QRU5fTU9EQUw6IHtcbiAgICAgIHJldHVybiB7IGN1cnJlbnRPcGVuTW9kYWw6IGFjdGlvbi5tb2RhbE5hbWUgfTtcbiAgICB9XG4gICAgY2FzZSBDb25zdGFudHMuQ0xPU0VfTU9EQUw6IHtcbiAgICAgIHJldHVybiB7IGN1cnJlbnRPcGVuTW9kYWw6ICcnIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdfQ==