import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState, addTodo, toggleTodo, removeTodo } from "./todoStore";

export function Todo() {
  const [todos, setTodos] = useRecoilState(todosState);

  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      setTodos((todos) => addTodo(todos, text));
      setText("");
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => setTodos((todos) => toggleTodo(todos, todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => setTodos((todos) => removeTodo(todos, todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
