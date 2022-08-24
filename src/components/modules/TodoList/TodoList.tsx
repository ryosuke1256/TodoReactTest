import React from 'react';
import style from './style.module.css';

type TodoListProps = {
  title: string;
  todoID: number;
  updateTodo: (titleForUpdate: string, todoID: number) => void;
  deleteTodo: (todoID: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ title, todoID, updateTodo, deleteTodo }) => {
  return (
    <label htmlFor={`hoge${todoID}`}>
      <li className={style.todoList} data-testid='todoList'>
        <input type='checkbox' onClick={() => deleteTodo(todoID)} className={style.checkbox} data-testid='todoCheckbox' />
        <input type='text' value={title} onChange={(e) => updateTodo(e.target.value, todoID)} id={`hoge${todoID}`} className={style.todoTitle} data-testid='todoTitle' />
      </li>
    </label>
  );
};
