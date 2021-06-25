import React from 'react';
import { Story, Meta } from '@storybook/react';
import StoryWrapper from '../StoryWrapper';
import Card, { Props } from '.';
import { Button, ButtonType } from '../Button';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<Props> = (args) => (
  <StoryWrapper>
    <Card {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Qualtrics Surveys Setup',
  subtitle: 'Step 1 of 2',
  children: (
    <>
      <p>
        In order to use this LTI tool, we need your authorization to integrate
        with Canvas. After authorizing your Canvas account, we'll prompt you to do the
        same with your Qualtrics account.
      </p>
      <Button
        noBold
        buttonType={ButtonType.primary}
      >
        Authorize Canvas
      </Button>
    </>
  ),
};
