"use client";

import { Provider } from "jotai";
import { Todo } from "@/features/jotai/Todo";

export default function JotaiExample() {
  return (
    <Provider>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Jotai Example</h2>
        <Todo />
      </div>
    </Provider>
  );
}
