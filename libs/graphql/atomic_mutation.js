"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("@apollo/client/react/components");
var prop_types_1 = __importDefault(require("prop-types"));
var inline_error_1 = __importDefault(require("../components/common/errors/inline_error"));
var AtomicMutation = /** @class */ (function (_super) {
    __extends(AtomicMutation, _super);
    function AtomicMutation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtomicMutation.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(components_1.Mutation, __assign({}, this.props), function (method, result) {
            var error = result.error;
            if (error) {
                return (react_1.default.createElement(inline_error_1.default, { error: error.message }));
            }
            return _this.props.children(method, result);
        }));
    };
    AtomicMutation.propTypes = {
        children: prop_types_1.default.func.isRequired,
    };
    return AtomicMutation;
}(react_1.default.Component));
exports.default = AtomicMutation;
//# sourceMappingURL=atomic_mutation.js.map