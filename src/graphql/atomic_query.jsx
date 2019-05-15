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
            if (error.networkError &&
              error.networkError.result &&
              error.networkError.result.canvas_authorization_required) {
              // This error will be handled by a Canvas reauth. Don't output an error.
              return null;
            }

            if (error.networkError &&
              error.networkError.bodyText &&
              error.networkError.bodyText.indexOf('JWT::ExpiredSignature') >= 0) {
              return (
                <InlineError error="Your authentication token has expired. Please refresh the page to enable authentication." />
              );
            }

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
