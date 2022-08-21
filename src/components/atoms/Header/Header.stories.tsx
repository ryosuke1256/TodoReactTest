import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  args: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Story = Template.bind({});
Story.args = {};
