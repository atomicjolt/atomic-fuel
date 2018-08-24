import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import AtomicJoltLoader from '../components/common/atomicjolt_loader';
import InlineError from '../components/common/errors/inline_error';

export default class AtomicQuery extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired,
    loadingMessage: PropTypes.string,
    hideLoader: PropTypes.bool,
  };

  render() {
    return (
      <Query {...this.props}>
        {(result) => {
          const { loading, error } = result;
          if (loading) {
            if (this.props.hideLoader) {
              return null;
            }
            return (
              <div className="text--centered">
                <AtomicJoltLoader />
                <h1 className="c-title">{this.props.loadingMessage}</h1>
              </div>
            );
          }
          if (error) {
            return (
              <InlineError error={error.message} />
            );
          }
          return this.props.children(result);
        }}
      </Query>
    );
  }

}
