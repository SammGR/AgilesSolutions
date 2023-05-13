import React from 'react'
import Home from "./components/home";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
