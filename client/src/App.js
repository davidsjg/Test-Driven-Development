import React from "react";

import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      {/* enzyme has a way to search for attributes with particular values within
      our shallow wrapper */}
      <div data-test="component-app"></div>
      <h1 data-test="counter-display">
        The counter is currently &nbsp;<span data-test="count">{count}</span>
      </h1>

      {count < 0 && <div>Count cannot go below zero</div>}
      {/* {count < 0 && setCount(0)} */}

      {/* {count < 0 
      ? ( )
      : ()} */}

      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        increment counter
      </button>
      <button data-test="decrement-button" onClick={() => setCount(count - 1)}>
        decrement counter
      </button>
    </>
  );
}

export default App;
