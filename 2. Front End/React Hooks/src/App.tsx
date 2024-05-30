import HookState from "./hooks/index";
import HookEffect from "./hookEffect/index";
import HookRef from "./hookRef";
import HookMemo from "./hookMemo";
import { createContext, useState } from "react";

export const UserContext = createContext<string>("");

function App() {
  const [user, setUser] = useState<string>("Budi");
  return (
    <>
      <UserContext.Provider value={user}>
        <HookState />
        <HookEffect />
        <HookRef />
        <HookMemo />
      </UserContext.Provider>
    </>
  );
}

export default App;
