import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoList } from './TodoList';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: '上野動物園に行く',
  todoID: 1,
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteTodo : '() => void' as unknown as any,
};
