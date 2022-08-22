import { renderHook, act } from '@testing-library/react-hooks';
import { useTodos } from './useTodos';
import { INITIAL_TODOS } from '../../constants/entity';

describe('changeSubmitText', () => {
  it('correct state', () => {
    const inputValue = 'go lunch as friend';
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.changeSubmitText(inputValue);
    });

    expect(result.current.submitText).toBe(inputValue);
  });
});

describe('addTodo', () => {
  it('correct todos value', async () => {
    const inputValue = 'go lunch as friend';
    const { result } = renderHook(() => useTodos());
    await act(async () => {
      await result.current.changeSubmitText(inputValue);
      result.current.addTodo();
    });
    expect(result.current.todos.length).toBe(4);
    expect(result.current.todos).toEqual([...INITIAL_TODOS, { id: 4, title: inputValue }]);
  });
});

describe('updateTodo', () => {
  const existingTodoID = 3;
  const nonExistingTodoID = 4;
  it('correct todos value', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.updateTodo('updatedTitle', existingTodoID);
    });
    expect(result.current.todos).toEqual([INITIAL_TODOS[0], INITIAL_TODOS[1], { id: 3, title: 'updatedTitle' }]);
  });
  it('correct todos value', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.updateTodo('updatedTitle', nonExistingTodoID);
    });
    expect(result.current.todos).toEqual(INITIAL_TODOS);
  });
});

describe('deleteTodo', () => {
  const existingTodoID = 3;
  const nonExistingTodoID = 4;
  it('correct number of elements', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.deleteTodo(existingTodoID);
    });
    expect(result.current.todos.length).toBe(2);
  });
  it('correct number of elements', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.deleteTodo(nonExistingTodoID);
    });
    expect(result.current.todos.length).toBe(3);
  });
});
