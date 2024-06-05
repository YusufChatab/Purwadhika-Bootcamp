import { Route, Routes } from "react-router-dom";
import LocalStorage from "./localStorage";
import SessionStorage from "./session-storage";
// import Cookie from "./cookie";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Routes>
          <Route path="/local-storage" element={<LocalStorage />} />
          <Route path="/session-storage" element={<SessionStorage />} />
          {/* <Route path="/cookies" element={<Cookie />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
