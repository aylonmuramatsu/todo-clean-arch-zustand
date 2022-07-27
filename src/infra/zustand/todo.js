import create from 'zustand';

export const useTodo = create(() => ({
  todos: [],
  loading: false,
}))

