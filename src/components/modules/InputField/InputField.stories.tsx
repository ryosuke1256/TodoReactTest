/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  args: {
    submitText: 'string',
    changeSubmitText: '(submitText: string) => void' as unknown as any,
    addTodo: '() => void' as unknown as any
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Story = Template.bind({});
Story.args = {};
