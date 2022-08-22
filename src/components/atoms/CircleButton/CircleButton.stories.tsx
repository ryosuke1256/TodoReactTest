import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CircleButton } from './CircleButton';

export default {
  title: 'Components/CircleButton',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => <CircleButton {...args} />;

export const Story = Template.bind({});