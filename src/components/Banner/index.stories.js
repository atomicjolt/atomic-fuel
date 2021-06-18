import React from 'react';

import Banner, { types } from './index.jsx';
import StoryWrapper from '../_StoryWrapper';

export default {
  title: 'Banner',
  component: Banner,
};

const Template = (args) => {
  return (
    <StoryWrapper>
      <Banner {...args} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});

Default.args = {
  message: 'Hello everyone! 1 and 123 and relief',
};


export const ErrorOne  = Template.bind({});

ErrorOne.args = {
  icon: 'error',
  heading: 'Server Error 404:',
  message: 'Sorry, page not found',
  type: types.ERROR,
};

export const WarningOne = Template.bind({});

WarningOne.args = {
  message: '10 seconds to meltdown',
  type: types.WARNING,
};

export const WarningTwo = Template.bind({});

WarningTwo.args = {
  heading: 'WARNING:',
  message: '9 seconds to meltdown',
  type: types.WARNING,
};

export const WarningThree  = Template.bind({});

WarningThree.args = {
  icon: 'warning',
  heading: 'WARNING:',
  message: '8 seconds to meltdown',
  type: types.WARNING,
};

export const Relief = Template.bind({});

Relief.args = {
  icon: 'ac_unit',
  heading: 'Meltdown Aborted:',
  message: 'Added cryogenic compound to the mixture. Engines are now stable.',
  type: types.RELIEF,
};
