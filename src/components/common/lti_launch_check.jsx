import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ltiLaunch } from '@atomicjolt/lti-client/src/client/launch';

export default function LtiLaunchCheck(props) {
  const { children, stateValidation } = props;
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    console.log('in use effect');
    const launch = async() => {
      const v = await ltiLaunch(stateValidation);
      console.log('setting valid to ', v);
      setIsValid(v);
    };
    launch();
  }, [stateValidation]);

  console.log('stateValidation', stateValidation);
  console.log('isValid', isValid);

  if (isValid === true) {
    return children;
  }

  if (isValid === false) {
    return (
      <div>
        Invalid request. Please reload the page.
      </div>
    );
  }

  return null;
}

LtiLaunchCheck.propTypes = {
  children: PropTypes.node.isRequired,
  stateValidation: PropTypes.shape({
    state: PropTypes.string,
    stateVerified: PropTypes.bool, 
    ltiStorageParams: PropTypes.shape({
      target: PropTypes.string,
      originSupportBroken: PropTypes.bool,
      platformOIDCUrl: PropTypes.string,
    }),
  }),
};
