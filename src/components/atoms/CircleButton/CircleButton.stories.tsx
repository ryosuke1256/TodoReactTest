import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CircleButton } from './CircleButton';

export default {
  title: 'Components/Button',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => <CircleButton {...args} />;

export const primary = Template.bind({});
primary.args = {
  children: 'title',
};

export const attention = Template.bind({});
attention.args = {
  children: 'title',
};
