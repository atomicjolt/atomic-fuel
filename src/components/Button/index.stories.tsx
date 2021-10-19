import React from 'react';
import { Story, Meta } from '@storybook/react';
import StoryWrapper from '../StoryWrapper';
import { Button, ButtonType, Props } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => (
  <StoryWrapper>
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Button {...args} />
    </div>
  </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.primary,
  children: <span>Button</span>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.secondary,
  children: <span>Button</span>,
};

export const IconX = Template.bind({});
IconX.args = {
  buttonType: ButtonType.icon,
  children: <i className="material-icons-outlined">close</i>,
};

export const IconBreadCrumbs = Template.bind({});
IconBreadCrumbs.args = {
  buttonType: ButtonType.icon,
  children: <i className="material-icons-outlined">more_vert</i>,
};
