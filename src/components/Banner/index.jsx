import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

export const types = Object.freeze({
  ERROR: 'error',
  RELIEF: 'relief',
  WARNING: 'warning',
});

export default function Banner(props) {
  const { heading, message, type, icon, overrideClass } = props;
  const baseClass = Boolean(overrideClass) ? overrideClass : 'Banner';

  return (
    <div className={cn(
      `${baseClass}`,
    {[`${baseClass}--${type}`]: Boolean(type) },
    )}>
      { !!icon && <i className="material-icons">{icon}</i> }
      { !!heading && <h3>{heading}</h3> }
      <div className={`${baseClass}__content`} data-testid="msg">
        {message}
      </div>
    </div>
  );
}

Banner.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  overrideClass: PropTypes.string,
};
