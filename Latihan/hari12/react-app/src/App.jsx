import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/welcome";

function App() {
  const [count, setCount] = useState(0);
  let people = [
    {name: "john", job: "programmer", color: "green"},
  ]

  return (
    <>
      <Welcome name="Gaung Bhima Hamisesa" color="gold" />
      <Welcome name="jokowidodido" color="pink" />
      <Welcome name="prabowowow" color="coral" />
    </>
  );
}

export default App;
