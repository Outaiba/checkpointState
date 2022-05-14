import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Profile from "./component/Profile";

function App() {
  const [name, setName] = useState("fatma");
  const [age, setAge] = useState(23);
  const [persone, setPersone] = useState({
    name: "outaiba",
    age: "33",
  });
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState([
    {
      name: "outaiba",
      age: "33",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Petersen_Automotive_Museum_%2848690759578%29.jpg/1200px-Petersen_Automotive_Museum_%2848690759578%29.jpg",
    },
    {
      name: "ala",
      age: "23",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Petersen_Automotive_Museum_%2848690759578%29.jpg/1200px-Petersen_Automotive_Museum_%2848690759578%29.jpg",
    },
    {
      name: "salah",
      age: "26",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Petersen_Automotive_Museum_%2848690759578%29.jpg/1200px-Petersen_Automotive_Museum_%2848690759578%29.jpg",
    },
  ]);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue", width: "40%", margin: "0 auto" }}>
        {name}
      </h1>
      <button onClick={() => setName("toto")}>
        {" "}
        click here to change name
      </button>
      <h1>{age}</h1>
      <button onClick={() => setAge(age + 1)}>
        {" "}
        click here to increment age
      </button>
      <h1>{persone.name}</h1>
      <input
        type="text"
        onChange={(e) => setPersone({ ...persone, name: e.target.value })}
      />
      <button onClick={() => setShow(!show)}> click here to show</button>
      {show ? (
        <div>
          {students.map((el) => (
            <Profile el={el} />
          ))}
        </div>
      ) : null}
      <h1>The component has been rendered for {count} seconds</h1>
      <button onClick={handleClick}>Start counting</button>{" "}
    </div>
  );
}

export default App;
