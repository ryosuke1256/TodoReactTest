import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    variant: 'attention',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  variant: 'primary',
  children: 'title',
};

export const attention = Template.bind({});
attention.args = {
  variant: 'attention',
  children: 'title',
};
