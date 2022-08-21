import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Todos } from './Todos';
import { INITIAL_TODOS } from '../../../constants/entity';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Todos',
  component: Todos,
} as ComponentMeta<typeof Todos>;

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  todos: INITIAL_TODOS,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteTodo: '() => void' as unknown as any,
};
