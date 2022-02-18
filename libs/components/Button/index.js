"use strict";
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
exports.Button = exports.ButtonType = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./styles.css");
var ButtonType;
(function (ButtonType) {
    ButtonType["primary"] = "primary";
    ButtonType["secondary"] = "secondary";
    ButtonType["large"] = "large";
    ButtonType["primaryLarge"] = "primary-large";
    ButtonType["small"] = "small";
    ButtonType["gray"] = "gray";
    ButtonType["icon"] = "icon";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
exports.Button = react_1.default.forwardRef(function (props, ref) {
    var _a;
    var _b = props.ariaOptions, ariaOptions = _b === void 0 ? {} : _b, children = props.children, classes = props.classes, color = props.color, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.submit, submit = _d === void 0 ? false : _d, noBold = props.noBold, rest = props.rest, _e = props.onClick, onClick = _e === void 0 ? function () { } : _e;
    var buttonType = disabled ? ButtonType.gray : props.buttonType;
    var className = (0, classnames_1.default)('aj-btn', (_a = {},
        _a["aj-btn--".concat(color)] = color,
        _a["aj-btn--".concat(buttonType)] = buttonType,
        _a['aj-btn--no-bold'] = noBold,
        _a[classes] = classes,
        _a));
    return (react_1.default.createElement("button", __assign({ ref: ref, type: submit ? 'submit' : 'button', className: className, disabled: disabled }, ariaOptions, rest, { onClick: onClick }), children));
});
//# sourceMappingURL=index.js.map