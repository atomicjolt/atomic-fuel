import React from 'react';
import { mount } from 'enzyme';
import { GqlStatus } from './gql_status';

describe('GqlStatus', () => {
  it('renders loading', () => {
    const props = {
      loading: true,
      error: false,
    };
    const result = mount(
      <GqlStatus {...props} />
    );
    expect(result).toMatchSnapshot();
  });

  it('renders error', () => {
    const props = {
      loading: false,
      error: true,
      errorMessage: 'There was an error',
    };
    const result = mount(
      <GqlStatus {...props} />
    );
    expect(result).toMatchSnapshot();
  });
});


