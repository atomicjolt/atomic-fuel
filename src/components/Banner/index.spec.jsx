import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './index.stories.jsx';

describe('Banner Component', () => {
  it('should render a message given a message props', () => {
    const { getByTestId } = render( <Default {...Default.args} />);
    const msgEl = getByTestId('msg');
    const text = 'Hello everyone! 1 and 123 and relief';
    expect(msgEl.textContent).toEqual(text);
  });
});