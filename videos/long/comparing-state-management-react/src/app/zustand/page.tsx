"use client";

import { Todo } from "@/features/zustand/Todo";

export default function ZustandExample() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Zustand Example</h2>
      <Todo />
    </div>
  );
}
