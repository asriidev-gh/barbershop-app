import React from "react";
import "./App.css";
import { ReservationForm } from "./components/ReservationForm";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <div className="container">
        <ReservationForm />
      </div>
    </div>
  );
}

export default App;
