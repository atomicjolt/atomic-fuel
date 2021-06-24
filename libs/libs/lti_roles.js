"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLtiInstructor = isLtiInstructor;
exports.isLtiAdmin = isLtiAdmin;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isLtiInstructor(roles) {
  return _lodash["default"].includes(roles, 'urn:lti:role:ims/lis/Instructor');
}

function isLtiAdmin(roles) {
  return _lodash["default"].includes(roles, 'urn:lti:role:ims/lis/Administrator') || _lodash["default"].includes(roles, 'urn:lti:instrole:ims/lis/Administrator') || _lodash["default"].includes(roles, 'urn:lti:sysrole:ims/lis/SysAdmin') || _lodash["default"].includes(roles, 'urn:lti:sysrole:ims/lis/Administrator');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2x0aV9yb2xlcy5qcyJdLCJuYW1lcyI6WyJpc0x0aUluc3RydWN0b3IiLCJyb2xlcyIsIl8iLCJpbmNsdWRlcyIsImlzTHRpQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUNyQyxTQUFPQyxtQkFBRUMsUUFBRixDQUFXRixLQUFYLEVBQWtCLGlDQUFsQixDQUFQO0FBQ0Q7O0FBRU0sU0FBU0csVUFBVCxDQUFvQkgsS0FBcEIsRUFBMkI7QUFDaEMsU0FBT0MsbUJBQUVDLFFBQUYsQ0FBV0YsS0FBWCxFQUFrQixvQ0FBbEIsS0FDRkMsbUJBQUVDLFFBQUYsQ0FBV0YsS0FBWCxFQUFrQix3Q0FBbEIsQ0FERSxJQUVGQyxtQkFBRUMsUUFBRixDQUFXRixLQUFYLEVBQWtCLGtDQUFsQixDQUZFLElBR0ZDLG1CQUFFQyxRQUFGLENBQVdGLEtBQVgsRUFBa0IsdUNBQWxCLENBSEw7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0x0aUluc3RydWN0b3Iocm9sZXMpIHtcbiAgcmV0dXJuIF8uaW5jbHVkZXMocm9sZXMsICd1cm46bHRpOnJvbGU6aW1zL2xpcy9JbnN0cnVjdG9yJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0x0aUFkbWluKHJvbGVzKSB7XG4gIHJldHVybiBfLmluY2x1ZGVzKHJvbGVzLCAndXJuOmx0aTpyb2xlOmltcy9saXMvQWRtaW5pc3RyYXRvcicpXG4gICAgfHwgXy5pbmNsdWRlcyhyb2xlcywgJ3VybjpsdGk6aW5zdHJvbGU6aW1zL2xpcy9BZG1pbmlzdHJhdG9yJylcbiAgICB8fCBfLmluY2x1ZGVzKHJvbGVzLCAndXJuOmx0aTpzeXNyb2xlOmltcy9saXMvU3lzQWRtaW4nKVxuICAgIHx8IF8uaW5jbHVkZXMocm9sZXMsICd1cm46bHRpOnN5c3JvbGU6aW1zL2xpcy9BZG1pbmlzdHJhdG9yJyk7XG59XG4iXX0=