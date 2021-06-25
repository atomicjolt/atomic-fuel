import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';

class Tooltip extends React.Component {

  render() {
    return (
      <Tippy
        content={this.props.children}
        placement={this.props.placement}
        animation="shift-away-subtle"
      >
        <button className="aj-tooltip">
          <i aria-hidden="true" className="material-icons-outlined-outlined">{this.props.icon}</i>
        </button>
      </Tippy>
    );
  }
}

Tooltip.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  placement: PropTypes.string,
};

Tooltip.defaultProps = {
  icon: 'info',
  placement: 'top',
};


export default Tooltip;
