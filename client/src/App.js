import React from "react";

import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const word = "lucky";
  const arrWord = word.split("");
  console.log(arrWord);

  const guessed = "luck";
  const arrGuessed = guessed.split("");
  console.log(arrGuessed);

  let numLettersCorrect = 0;

  arrGuessed.map((letter) => {
    const found = arrWord.find((let1) => let1 === letter);
    if (found) {
      numLettersCorrect = numLettersCorrect + 1;
    }
  });

  console.log(numLettersCorrect);

  return (
    <>
      <div data-test="component-app"></div>
      <h1 data-test="counter-display">
        The counter is currently &nbsp;<span data-test="count">{count}</span>
      </h1>

      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The Counter cannot go below 0!
      </div>

      <button
        data-test="increment-button"
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        decrement counter
      </button>
    </>
  );
}

export default App;
