"use client";
import { useState } from "react";

function HomeView() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    </>
  );
}

export default HomeView;
