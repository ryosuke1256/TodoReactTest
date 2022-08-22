import React from 'react';
import style from './style.module.css';

type TodoListProps = {
  title: string;
  todoID: number;
  deleteTodo: (todoID: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ title, todoID, deleteTodo }) => {
  return (
    <li className={style.todoList} data-test-id='todoList'>
      <input type='checkbox' onClick={() => deleteTodo(todoID)} className={style.checkbox} />
      <div className={style.title}>{title}</div>
    </li>
  );
};
