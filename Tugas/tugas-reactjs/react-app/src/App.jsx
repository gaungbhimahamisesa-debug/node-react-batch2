import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import ThingsToDo from "./components/ThingsToDo";

function App() {
  const thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance",
  ];

  return (
    <div className="container">
      <div className="card">
        <img src={logo} alt="Sanbercode Logo" className="logo" />
        <h2>THINGS TO DO</h2>
        <p>During bootcamp in sanbercode</p>
        <hr />
        <ThingsToDo list={thingsToDo} />
        <button className="btn">SEND</button>
      </div>
    </div>
  );
}

export default App;
