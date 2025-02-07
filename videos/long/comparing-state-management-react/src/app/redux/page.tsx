"use client";

import { store } from "@/features/redux/store";
import { Todo } from "@/features/redux/Todo";
import { Provider } from "react-redux";

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Redux Toolkit Example</h2>
        <Todo />
      </div>
    </Provider>
  );
}
