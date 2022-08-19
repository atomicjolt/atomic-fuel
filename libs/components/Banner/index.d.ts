export function Banner(props: any): JSX.Element;
export namespace Banner {
    namespace propTypes {
        const heading: PropTypes.Requireable<string>;
        const message: PropTypes.Validator<string>;
        const type: PropTypes.Requireable<string>;
        const icon: PropTypes.Requireable<string>;
        const overrideClass: PropTypes.Requireable<string>;
    }
}
export const BannerTypes: Readonly<{
    ERROR: "error";
    RELIEF: "relief";
    WARNING: "warning";
}>;
import PropTypes from "prop-types";
