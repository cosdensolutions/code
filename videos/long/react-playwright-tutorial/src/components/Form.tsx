"use client";

import { useState } from "react";

export default function Form() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold">Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setItems([...items, inputValue]);
          setInputValue("");
        }}
      >
        <label>
          <input
            type="text"
            name="item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
          />
        </label>
        <button className="ml-2" type="submit">
          Add
        </button>
      </form>
      <ul data-testId="items-list">
        {items.map((item, index) => (
          <li key={index} data-testId="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
