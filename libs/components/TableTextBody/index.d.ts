export default TableTextBody;
declare function TableTextBody({ className, columns, children }: {
    className: any;
    columns: any;
    children: any;
}): JSX.Element;
declare namespace TableTextBody {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const columns: PropTypes.Requireable<number>;
        const children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import PropTypes from "prop-types";
