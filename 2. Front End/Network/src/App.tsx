import { useEffect, useState } from "react";
import "./App.css";
import Register from "./register";
import axios from "axios";

interface ISuperheroes {
  id: string;
  name: string;
  color: string;
}

function App() {
  const [superheroes, setSuperheroes] = useState<ISuperheroes[]>([]);
  // const [superhero, setSuperHero] = useState<ISuperheroes[]>([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/superheroes/");
    console.log(res);
    setSuperheroes(res.data);

    //fetch
    // const res = await fetch("http://localhost:3000/superheroes");
    // console.log(res);
    // const jsonParse = await res.json();
    // setData(jsonParse);
  };

  const postData = async () => {
    const checkDups = superheroes.filter((item) => item.name === "Iron Man");
    if (checkDups.length > 0) {
      alert("Data already exists");
    } else {
      const res = await axios.post("http://localhost:3000/superheroes", {
        name: "Iron Man",
      });
      console.log(res);
    }
  };

  const updateData = async () => {
    const res = await axios.patch("http://localhost:3000/superheroes/1", {
      name: "bAtMan",
    });
    console.log(res);
  };

  const deleteData = async () => {
    const res = await axios.delete("http://localhost:3000/superheroes/ad3b");
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>SuperHeroes</h1>
        {/* <div>{superhero?.name}</div> */}
        {superheroes.length > 0 &&
          superheroes.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.color}</div>
            </div>
          ))}

        <button onClick={postData}>Insert Data</button>
        <button onClick={updateData}>Update Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <hr />
        <Register />
      </div>
    </>
  );
}

export default App;
