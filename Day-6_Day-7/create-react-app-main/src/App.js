import { useState } from "react";

function App() {
  const countTwo = 5

  let count = 0
  const handleIncrement = () => {
    // console.log("called");
    count++
    console.log(count);
  }

  // usestate 
  const value = useState(0)
  console.log('usestate', value);

  const [count3, setCount3] = useState(0)

  const handleIncrement2 = () => {
    setCount3(count3 +1)
  }
  
  return (
    <div className="container">
      <h1>React Philosophy:</h1>
      <ul>
        <li>Composition: We develop a project composing multiple small components</li>
        <li>Declarative Code: We use map instead of loop-"Step by step copd"</li>
        <li>Unidirectional Data flow: Data will flow on a single direction</li>
        <li>Just javascript</li>
      </ul>
      <h1>Count: {countTwo + 1}</h1>
      <h1>Count: {count}</h1>
      <h1>Count: {count3}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement2}>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
