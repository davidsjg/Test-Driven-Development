import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      {/* enzyme has a way to search for attributes with particular values within
      our shallow wrapper */}
      <div data-test="component-app"></div>
      <h1 data-test="counter-display">The counter is currently </h1>
      <button data-test="increment-button">increment counter</button>
    </>
  );
}

export default App;
