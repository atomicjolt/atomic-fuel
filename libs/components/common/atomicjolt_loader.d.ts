export class Loader extends React.PureComponent<any, any, any> {
    static propTypes: {
        message: PropTypes.Requireable<string>;
        logoColor: PropTypes.Requireable<string>;
        backgroundColor1: PropTypes.Requireable<string>;
        backgroundColor2: PropTypes.Requireable<string>;
        aj_loader: PropTypes.Requireable<PropTypes.InferProps<{
            logoColor: PropTypes.Requireable<string>;
            backgroundColor1: PropTypes.Requireable<string>;
            backgroundColor2: PropTypes.Requireable<string>;
        }>>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
declare var _default: (props: any) => JSX.Element;
export default _default;
import React from "react";
import PropTypes from "prop-types";
