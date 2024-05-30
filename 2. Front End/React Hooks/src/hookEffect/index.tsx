import { useState, useEffect } from "react";

function HookEffect() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const updateTitle = () => {
    document.title = input;
    console.log(count);
  };

  useEffect(() => {
    updateTitle();
  }, [input]);

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}> + </button>
        <button onClick={() => setCount(count - 1)}> - </button>
        <div>{input}</div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </>
  );
}

export default HookEffect;
