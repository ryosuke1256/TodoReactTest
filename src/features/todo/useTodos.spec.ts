import { renderHook, act } from '@testing-library/react-hooks';
import { useTodos } from './useTodos';

describe('addTodo', () => {
  test('correct number of elements', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo();
    });

    expect(result.current.todos.length).toBe(4);
  });
});

describe('updateTodo', () => {
  test('correct todos value', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.updateTodo('updatedTitle', 3);
    });
    expect(result.current.todos).toEqual([
      { id: 1, title: 'Apple' },
      { id: 2, title: 'Grape' },
      { id: 3, title: 'updatedTitle' },
    ]);
  });
  test('correct todos value', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.updateTodo('updatedTitle', 4);
    });
    expect(result.current.todos).toEqual([
      { id: 1, title: 'Apple' },
      { id: 2, title: 'Grape' },
      { id: 3, title: 'Strawberry' },
    ]);
  });
});

describe('deleteTodo', () => {
  const existingTodoID = 3;
  const nonExistingTodoID = 100;
  test('correct number of elements', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.deleteTodo(existingTodoID);
    });
    expect(result.current.todos.length).toBe(2);
  });
  test('correct number of elements', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.deleteTodo(nonExistingTodoID);
    });
    expect(result.current.todos.length).toBe(3);
  });
});
