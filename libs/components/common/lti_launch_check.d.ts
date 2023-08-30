declare function LtiLaunchCheck(props: any): any;
declare namespace LtiLaunchCheck {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const stateValidation: PropTypes.Requireable<PropTypes.InferProps<{
            state: PropTypes.Requireable<string>;
            stateVerified: PropTypes.Requireable<boolean>;
            ltiStorageParams: PropTypes.Requireable<PropTypes.InferProps<{
                target: PropTypes.Requireable<string>;
                originSupportBroken: PropTypes.Requireable<boolean>;
                platformOIDCUrl: PropTypes.Requireable<string>;
            }>>;
        }>>;
    }
}
export default LtiLaunchCheck;
import PropTypes from "prop-types";
