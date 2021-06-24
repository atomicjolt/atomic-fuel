"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HandlerSingleton = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _communicator = _interopRequireDefault(require("../communications/communicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HandlerSingleton = /*#__PURE__*/function () {
  function HandlerSingleton(dispatch) {
    var _this = this;

    _classCallCheck(this, HandlerSingleton);

    _defineProperty(this, "handleComm", function (e) {
      var message = e.data;

      if (_lodash["default"].isString(e.data)) {
        try {
          message = JSON.parse(e.data);
        } catch (ex) {
          // We can't parse the data as JSON just send it through as a string
          message = e.data;
        }
      }

      _this.dispatch({
        communication: true,
        type: 'POST_MESSAGE_RECIEVED',
        message: message,
        data: e.data
      });
    });

    this.dispatch = dispatch;
  }

  _createClass(HandlerSingleton, null, [{
    key: "prepareInstance",
    value: function prepareInstance(dispatch) {
      var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      if (!HandlerSingleton.instance) {
        HandlerSingleton.communicator = new _communicator["default"](domain);
        HandlerSingleton.instance = new HandlerSingleton(dispatch);
        HandlerSingleton.communicator.enableListener(HandlerSingleton.instance);
      }
    }
  }]);

  return HandlerSingleton;
}();

exports.HandlerSingleton = HandlerSingleton;

_defineProperty(HandlerSingleton, "communicator", null);

_defineProperty(HandlerSingleton, "instance", null);

var _default = function _default(store) {
  return function (next) {
    return function (action) {
      if (action.postMessage) {
        // You have to call a post message action first before you will recieve messages
        HandlerSingleton.prepareInstance(store.dispatch);

        try {
          if (action.broadcast) {
            HandlerSingleton.communicator.broadcast(action.message);
          } else {
            HandlerSingleton.communicator.comm(action.message);
          }
        } catch (e) {// do nothing
        }
      }

      next(action);
    };
  };
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL3Bvc3RfbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJIYW5kbGVyU2luZ2xldG9uIiwiZGlzcGF0Y2giLCJlIiwibWVzc2FnZSIsImRhdGEiLCJfIiwiaXNTdHJpbmciLCJKU09OIiwicGFyc2UiLCJleCIsImNvbW11bmljYXRpb24iLCJ0eXBlIiwiZG9tYWluIiwiaW5zdGFuY2UiLCJjb21tdW5pY2F0b3IiLCJDb21tdW5pY2F0b3IiLCJlbmFibGVMaXN0ZW5lciIsInN0b3JlIiwibmV4dCIsImFjdGlvbiIsInBvc3RNZXNzYWdlIiwicHJlcGFyZUluc3RhbmNlIiwiYnJvYWRjYXN0IiwiY29tbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYUEsZ0I7QUFjWCw0QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBLHdDQUlULFVBQUNDLENBQUQsRUFBTztBQUNsQixVQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsSUFBaEI7O0FBQ0EsVUFBSUMsbUJBQUVDLFFBQUYsQ0FBV0osQ0FBQyxDQUFDRSxJQUFiLENBQUosRUFBd0I7QUFDdEIsWUFBSTtBQUNGRCxVQUFBQSxPQUFPLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixDQUFDLENBQUNFLElBQWIsQ0FBVjtBQUNELFNBRkQsQ0FFRSxPQUFPSyxFQUFQLEVBQVc7QUFDWDtBQUNBTixVQUFBQSxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsSUFBWjtBQUNEO0FBQ0Y7O0FBQ0QsTUFBQSxLQUFJLENBQUNILFFBQUwsQ0FBYztBQUNaUyxRQUFBQSxhQUFhLEVBQUUsSUFESDtBQUVaQyxRQUFBQSxJQUFJLEVBQUUsdUJBRk07QUFHWlIsUUFBQUEsT0FBTyxFQUFQQSxPQUhZO0FBSVpDLFFBQUFBLElBQUksRUFBRUYsQ0FBQyxDQUFDRTtBQUpJLE9BQWQ7QUFNRCxLQXBCcUI7O0FBQ3BCLFNBQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7V0FWRCx5QkFBdUJBLFFBQXZCLEVBQStDO0FBQUEsVUFBZFcsTUFBYyx1RUFBTCxHQUFLOztBQUM3QyxVQUFJLENBQUNaLGdCQUFnQixDQUFDYSxRQUF0QixFQUFnQztBQUM5QmIsUUFBQUEsZ0JBQWdCLENBQUNjLFlBQWpCLEdBQWdDLElBQUlDLHdCQUFKLENBQWlCSCxNQUFqQixDQUFoQztBQUNBWixRQUFBQSxnQkFBZ0IsQ0FBQ2EsUUFBakIsR0FBNEIsSUFBSWIsZ0JBQUosQ0FBcUJDLFFBQXJCLENBQTVCO0FBQ0FELFFBQUFBLGdCQUFnQixDQUFDYyxZQUFqQixDQUE4QkUsY0FBOUIsQ0FBNkNoQixnQkFBZ0IsQ0FBQ2EsUUFBOUQ7QUFDRDtBQUNGOzs7Ozs7OztnQkFaVWIsZ0Isa0JBRVcsSTs7Z0JBRlhBLGdCLGNBSU8sSTs7ZUFpQ0wsa0JBQUNpQixLQUFEO0FBQUEsU0FBVyxVQUFDQyxJQUFEO0FBQUEsV0FBVSxVQUFDQyxNQUFELEVBQVk7QUFDOUMsVUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3RCO0FBQ0FwQixRQUFBQSxnQkFBZ0IsQ0FBQ3FCLGVBQWpCLENBQWlDSixLQUFLLENBQUNoQixRQUF2Qzs7QUFDQSxZQUFJO0FBQ0YsY0FBSWtCLE1BQU0sQ0FBQ0csU0FBWCxFQUFzQjtBQUNwQnRCLFlBQUFBLGdCQUFnQixDQUFDYyxZQUFqQixDQUE4QlEsU0FBOUIsQ0FBd0NILE1BQU0sQ0FBQ2hCLE9BQS9DO0FBQ0QsV0FGRCxNQUVPO0FBQ0xILFlBQUFBLGdCQUFnQixDQUFDYyxZQUFqQixDQUE4QlMsSUFBOUIsQ0FBbUNKLE1BQU0sQ0FBQ2hCLE9BQTFDO0FBQ0Q7QUFDRixTQU5ELENBTUUsT0FBT0QsQ0FBUCxFQUFVLENBQ1Y7QUFDRDtBQUNGOztBQUNEZ0IsTUFBQUEsSUFBSSxDQUFDQyxNQUFELENBQUo7QUFDRCxLQWZ5QjtBQUFBLEdBQVg7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBDb21tdW5pY2F0b3IgZnJvbSAnLi4vY29tbXVuaWNhdGlvbnMvY29tbXVuaWNhdG9yJztcblxuZXhwb3J0IGNsYXNzIEhhbmRsZXJTaW5nbGV0b24ge1xuXG4gIHN0YXRpYyBjb21tdW5pY2F0b3IgPSBudWxsO1xuXG4gIHN0YXRpYyBpbnN0YW5jZSA9IG51bGw7XG5cbiAgc3RhdGljIHByZXBhcmVJbnN0YW5jZShkaXNwYXRjaCwgZG9tYWluID0gJyonKSB7XG4gICAgaWYgKCFIYW5kbGVyU2luZ2xldG9uLmluc3RhbmNlKSB7XG4gICAgICBIYW5kbGVyU2luZ2xldG9uLmNvbW11bmljYXRvciA9IG5ldyBDb21tdW5pY2F0b3IoZG9tYWluKTtcbiAgICAgIEhhbmRsZXJTaW5nbGV0b24uaW5zdGFuY2UgPSBuZXcgSGFuZGxlclNpbmdsZXRvbihkaXNwYXRjaCk7XG4gICAgICBIYW5kbGVyU2luZ2xldG9uLmNvbW11bmljYXRvci5lbmFibGVMaXN0ZW5lcihIYW5kbGVyU2luZ2xldG9uLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihkaXNwYXRjaCkge1xuICAgIHRoaXMuZGlzcGF0Y2ggPSBkaXNwYXRjaDtcbiAgfVxuXG4gIGhhbmRsZUNvbW0gPSAoZSkgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gZS5kYXRhO1xuICAgIGlmIChfLmlzU3RyaW5nKGUuZGF0YSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAvLyBXZSBjYW4ndCBwYXJzZSB0aGUgZGF0YSBhcyBKU09OIGp1c3Qgc2VuZCBpdCB0aHJvdWdoIGFzIGEgc3RyaW5nXG4gICAgICAgIG1lc3NhZ2UgPSBlLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgY29tbXVuaWNhdGlvbjogdHJ1ZSxcbiAgICAgIHR5cGU6ICdQT1NUX01FU1NBR0VfUkVDSUVWRUQnLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGRhdGE6IGUuZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi5wb3N0TWVzc2FnZSkge1xuICAgIC8vIFlvdSBoYXZlIHRvIGNhbGwgYSBwb3N0IG1lc3NhZ2UgYWN0aW9uIGZpcnN0IGJlZm9yZSB5b3Ugd2lsbCByZWNpZXZlIG1lc3NhZ2VzXG4gICAgSGFuZGxlclNpbmdsZXRvbi5wcmVwYXJlSW5zdGFuY2Uoc3RvcmUuZGlzcGF0Y2gpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYWN0aW9uLmJyb2FkY2FzdCkge1xuICAgICAgICBIYW5kbGVyU2luZ2xldG9uLmNvbW11bmljYXRvci5icm9hZGNhc3QoYWN0aW9uLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSGFuZGxlclNpbmdsZXRvbi5jb21tdW5pY2F0b3IuY29tbShhY3Rpb24ubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgfVxuICBuZXh0KGFjdGlvbik7XG59O1xuIl19