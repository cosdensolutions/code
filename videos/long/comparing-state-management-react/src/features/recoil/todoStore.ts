import { atom } from "recoil";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todosState = atom<Todo[]>({
  key: "TodoList",
  default: [],
});

// Helper functions for state updates
export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Date.now(),
    text,
    completed: false,
  },
];

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);
