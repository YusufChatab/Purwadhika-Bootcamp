import { useContext, useState } from "react";
import { UserContext } from "../App";

function HookMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const user = useContext<string>(UserContext);

  const isNumberEven = () => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }

    return number % 2 === 0;
  };

  return (
    <>
      <div>
        <div>Hello {user}</div>
        <button onClick={() => setNumber(number + 1)}>number : {number}</button>
        <div>{isNumberEven() ? "even" : "odd"}</div>
        <button onClick={() => setCount(count + 1)}>count : {count}</button>
      </div>
    </>
  );
}

export default HookMemo;
