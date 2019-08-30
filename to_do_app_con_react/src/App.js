import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/myComponent/myComponent";
function App() {
  let miNombre = "federico";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <MyComponent name={miNombre} />
    </div>
  );
}

export default App;
