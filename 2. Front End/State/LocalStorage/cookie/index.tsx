import React from "react";
import { useCookies } from "react-cookie";
function Cookie() {
  const [cookies, setCookie, removeCookie] = useCookies(["nama"]);
  return (
    <>
      <div>
        <h1>Cookies</h1>
        {cookies && <div>{cookies.nama}</div>}
        <button onClick={() => setCookie("nama", "budi")}></button>
        <button onClick={() => removeCookie("nama")}></button>
      </div>
    </>
  );
}

export default Cookie;
