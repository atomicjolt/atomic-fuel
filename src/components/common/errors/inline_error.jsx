import React from 'react';
import PropTypes from 'prop-types';

export default class InlineError extends React.PureComponent {

  static propTypes = {
    error: PropTypes.string,
  };

  render() {
    return (
      <div className="error-banner">
        <i className="material-icons">error</i>
        <h3>Error</h3>
        <div className="error-banner__content">
          { this.props.error }
        </div>
      </div>
    );
  }
}
