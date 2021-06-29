import React from 'react';
import { LiveMessenger } from 'react-aria-live';

export default (Child) => (props) => (
  <LiveMessenger>
    {({ announceAssertive, announcePolite }) => (
      <Child {...{ announcePolite, announceAssertive, ...props }} />)}
  </LiveMessenger>
);
