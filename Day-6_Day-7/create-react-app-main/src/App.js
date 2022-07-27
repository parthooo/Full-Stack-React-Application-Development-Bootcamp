import { useState } from "react"

function App() {
  // count variable
  const count = 0

  // countTwo varibale
  const countTwo = 5

  // countThree
  const [countThree, setCountThree] = useState(0)

  const handleIncrement = (num) => {
    setCountThree((prevCount) => prevCount + num)
  }
  const randomFunc = () => {
    handleIncrement(1)
  }

  const handleDecrement = (num) => {
    setCountThree((prevCount) => prevCount - num)
  }
  const handleReset = () => {
    setCountThree(0)
  }


  return (
    <>
      <>
        <>
          <h1>React Philosophy:</h1>
          <ul>
            <li>Composition: We develop a project composing multiple small components</li>
            <li>Declarative Code: We use map instead of loop-"Step by step copd"</li>
            <li>Unidirectional Data flow: Data will flow on a single direction</li>
            <li>Just javascript</li>
          </ul>

          <h1>Must be remembered for JSX:</h1>
          <ul>
            <li>Must have parent element</li>
            <li>Must have closing tag inside JSX</li >
            <li>Must be careful of reserved javascript keyword for html/ for classname . Reserved keyword can not be used</li>
            <li>Dynamic value(expression) must be written within { }</li>
            <li>We can add Dynamic value / js expression inside curly braces { }</li>
            <li>We can not add statement function inside curly braces { }</li>
          </ul>

          <h1>Usestate</h1>
          <ul>
            <li>If we need to Track or change or update any value/data regularly, then we should use <b>usestate</b></li>
          </ul>

          <h1>When a component rerandering?</h1>
          <ul>
            <li>at the time of state update</li>
            <li>at the time of Force update</li>
          </ul>
        </>
        <>
          {/* count variable: showing data through expression value of Count variable */}
          <h2>Count: {count}</h2>
          {/* countTwo varibale: we can write js expression inside JSX. as we plus 1 with countTwo variable  */}
          <h2>Count: {countTwo + 1}</h2>
        </>
        <>
          {/* countThree : We are updating countThree value by simply suing usestate */}
          <h2>Count: {countThree}</h2>
          <button onClick={randomFunc}>Increment</button>
          <button onClick={() => handleDecrement(1)}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </>
      </>
      <>
        <IsOddOrEven countThree={countThree}/>
      </>
    </>

  );
}

function IsOddOrEven({countThree}) {

  return <h3> Number is {countThree % 2 === 0 ? 'Even' : 'Odd'}</h3>
}

export default App;
