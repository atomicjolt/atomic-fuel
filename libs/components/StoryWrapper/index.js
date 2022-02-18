"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function StoryWrapper(props) {
    var children = props.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            react_1.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap", rel: "stylesheet" }),
            react_1.default.createElement("link", { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet" }),
            react_1.default.createElement("link", { href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined", rel: "stylesheet" })),
        react_1.default.createElement("div", null, children)));
}
exports.default = StoryWrapper;
//# sourceMappingURL=index.js.map