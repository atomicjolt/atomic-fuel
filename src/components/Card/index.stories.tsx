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
  title: 'Welcome Message',
  subtitle: 'Step 1 of 2',
  children: (
    <>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Integer
        posuere erat a ante venenatis dapibus posuere velit aliquet.
        Etiam porta sem malesuada magna mollis euismod. Curabitu
        blandit tempus porttitor. Duis mollis.
      </p>
      <Button
        noBold
        buttonType={ButtonType.primary}
      >
        Continue
      </Button>
    </>
  ),
};
