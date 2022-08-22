import React from 'react';
import style from './style.module.css';

type TodoListProps = {
  title: string;
  todoID: number;
  deleteTodo: (todoID: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ title, todoID, deleteTodo }) => {
  return (
    <li className={style.todoList} data-testid='todoList'>
      <input type='checkbox' onClick={() => deleteTodo(todoID)} className={style.checkbox} data-testid='todoCheckbox' />
      <div className={style.title}>{title}</div>
    </li>
  );
};
