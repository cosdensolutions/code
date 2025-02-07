"use client";

import { RecoilRoot } from "recoil";
import { Todo } from "@/features/recoil/Todo";

export default function RecoilExample() {
  return (
    <RecoilRoot>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recoil Example</h2>
        <Todo />
      </div>
    </RecoilRoot>
  );
}
