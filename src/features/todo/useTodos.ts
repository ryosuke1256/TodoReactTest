import { useState, useCallback } from 'react';
import { INITIAL_TODOS } from '../../constants/entity';
import type { Todo, Todos } from '~/types/Todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos>(INITIAL_TODOS);
  const [submitText, setSubmitText] = useState<string>(''); // TODO : Rename

  const changeSubmitText = useCallback((submitText: string) => {
    setSubmitText(submitText);
  }, []);

  const addTodo = useCallback(() => {
    setTodos([...todos, { id: 4, title: submitText }]);
    setSubmitText('');
  }, [todos, submitText]);

  const updateTodo = useCallback(
    (titleForUpdate: string, todoID: number) => {
      const copiedTodos = [...todos];
      todos.find((todo: Todo, index: number) => {
        if (todo.id === todoID) {
          copiedTodos.splice(index, 1, { id: todo.id, title: titleForUpdate });
          setTodos(copiedTodos);
        }
      });
    },
    [todos],
  );

  const deleteTodo = useCallback(
    (todoID: number) => {
      const deletedTodos = todos.filter((todo) => todo.id !== todoID);
      setTodos(deletedTodos);
    },
    [todos],
  );

  return { todos, submitText, changeSubmitText, addTodo, updateTodo, deleteTodo } as const;
};
