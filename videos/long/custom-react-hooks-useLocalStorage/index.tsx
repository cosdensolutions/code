import { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

const Demo = () => {
  const [value, setValue] = useState("");

  const { getItem, setItem, removeItem } = useLocalStorage();

  return (
    <div className="tutorial-shorts">
      <h1 className="mb-2 text-3xl font-bold">useLocalStorage</h1>
      <input
        className="mb-4"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-row gap-4">
        <button onClick={() => setItem("myKey", value)}>Set</button>
        <button onClick={() => console.log(getItem("myKey"))}>Get</button>
        <button onClick={() => removeItem("myKey")}>Remove</button>
      </div>
    </div>
  );
};

export default Demo;
