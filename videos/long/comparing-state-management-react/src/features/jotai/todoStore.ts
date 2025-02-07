import { atom } from "jotai";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todosAtom = atom<Todo[]>([]);

// Derived atoms for actions
export const addTodoAtom = atom(null, (get, set, text: string) => {
  const todos = get(todosAtom);
  set(todosAtom, [
    ...todos,
    {
      id: Date.now(),
      text,
      completed: false,
    },
  ]);
});

export const toggleTodoAtom = atom(null, (get, set, id: number) => {
  const todos = get(todosAtom);
  set(
    todosAtom,
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
});

export const removeTodoAtom = atom(null, (get, set, id: number) => {
  const todos = get(todosAtom);
  set(
    todosAtom,
    todos.filter((todo) => todo.id !== id)
  );
});
