export default Tooltip;
declare class Tooltip extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace Tooltip {
    namespace propTypes {
        const icon: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const placement: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const icon_1: string;
        export { icon_1 as icon };
        const placement_1: string;
        export { placement_1 as placement };
    }
}
import React from "react";
import PropTypes from "prop-types";
