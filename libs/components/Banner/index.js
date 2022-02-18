"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = exports.BannerTypes = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
require("./styles.css");
exports.BannerTypes = Object.freeze({
    ERROR: 'error',
    RELIEF: 'relief',
    WARNING: 'warning',
});
function Banner(props) {
    var _a;
    var heading = props.heading, message = props.message, type = props.type, icon = props.icon, overrideClass = props.overrideClass;
    var baseClass = Boolean(overrideClass) ? overrideClass : 'Banner';
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(baseClass), (_a = {}, _a["".concat(baseClass, "--").concat(type)] = Boolean(type), _a)) },
        !!icon && react_1.default.createElement("i", { className: "material-icons" }, icon),
        !!heading && react_1.default.createElement("h3", null, heading),
        react_1.default.createElement("div", { className: "".concat(baseClass, "__content"), "data-testid": "msg" }, message)));
}
exports.Banner = Banner;
Banner.propTypes = {
    heading: prop_types_1.default.string,
    message: prop_types_1.default.string.isRequired,
    type: prop_types_1.default.string,
    icon: prop_types_1.default.string,
    overrideClass: prop_types_1.default.string,
};
//# sourceMappingURL=index.js.map