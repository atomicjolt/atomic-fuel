declare function Menu(props: any): any;
declare namespace Menu {
    namespace propTypes {
        const renderChildren: PropTypes.Validator<(...args: any[]) => any>;
    }
}
export default Menu;
import PropTypes from "prop-types";
