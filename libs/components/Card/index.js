"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./styles.css");
function Card(props) {
    var classOverride = props.classOverride, classes = props.classes, title = props.title, subtitle = props.subtitle, blank = props.blank, children = props.children;
    var baseClass = classOverride || 'aj-card';
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(baseClass, classes) },
        !blank &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "".concat(baseClass, "__heading") },
                    react_1.default.createElement("h1", { className: "".concat(baseClass, "__heading-title") }, title),
                    react_1.default.createElement("h2", { className: "".concat(baseClass, "__heading-subtitle") }, subtitle)),
                react_1.default.createElement("section", { className: "".concat(baseClass, "__content") }, children)),
        blank && react_1.default.createElement(react_1.default.Fragment, null, children)));
}
exports.default = Card;
//# sourceMappingURL=index.js.map