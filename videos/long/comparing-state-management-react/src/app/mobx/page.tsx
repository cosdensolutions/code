"use client";

import { Todo } from "@/features/mobx/Todo";

export default function MobXExample() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">MobX Example</h2>
      <Todo />
    </div>
  );
}
