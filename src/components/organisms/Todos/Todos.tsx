import React from 'react';
import { TodoList } from '~/components/modules';
// FIXME
import type { Todos as TodosType } from '~/types/Todos';

type TodosProps = {
  todos: TodosType;
  deleteTodo: (todoID: number) => void;
};

export const Todos = React.memo(function CTodos({ todos, deleteTodo }: TodosProps) {
  return (
    <ul className='todo-lists'>
      {todos.map((todo) => (
        <TodoList key={todo.id} title={todo.title} todoID={todo.id} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
});
