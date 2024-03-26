import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increaseValue = () => {
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    setCounter(counter - 1);
  };

  // The below implementation of increase and decrease value will do it only once, because react uses
  // batch processing.
  // const increaseValue = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // };
  // const decreaseValue = () => {
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  // };

  // The below implementations will increase the value by 3 because we are using callbacks.
  // Every time the state is updated, it depends on the previous state, so it cannot be batched.
  // const increaseValue = () => {
  //   setCounter((prevValue) => prevValue + 1);
  //   setCounter((prevValue) => prevValue + 1);
  //   setCounter((prevValue) => prevValue + 1);
  // };
  // const decreaseValue = () => {
  //   setCounter((prevValue) => prevValue - 1);
  //   setCounter((prevValue) => prevValue - 1);
  //   setCounter((prevValue) => prevValue - 1);
  // };

  return (
    <>
      <h1>React Practice</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseValue}>Increase</button>
      {"    "} <button onClick={decreaseValue}>Decrease</button>
      <p> footer: {counter}</p>
    </>
  );
}

export default App;

// Remember that React does batch processing, it combines a set of intstructions and executes them only once
// if they are doing the same thing.
//
