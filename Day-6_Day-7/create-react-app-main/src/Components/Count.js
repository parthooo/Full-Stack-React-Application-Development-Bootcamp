import React from 'react';
import { useState } from "react"

const Count = () => {
      // count variable
  const countOne = 0

  // countTwo varibale
  const countTwo = 5

  // countThree
  const [countThree, setCountThree] = useState(0)

  const handleIncrement = (num) => {
    setCountThree((prevCountThree) => prevCountThree + num)
  }
  const randomFunc = () => {
    handleIncrement(1)
  }

  const handleDecrement = (num) => {
    setCountThree(prevCountThree => prevCountThree - num)
  }
  const handleReset = () => {
    setCountThree(0)
  }
    return (
        <div>
            <>
                {/* count variable: showing data through expression value of Count variable */}
                <h2>Count: {countOne}</h2>
                {/* countTwo varibale: we can write js expression inside JSX. as we plus 1 with countTwo variable  */}
                <h2>Count: {countTwo + 1}</h2>
            </>
            <>
                {/* countThree : We are updating countThree value by simply suing usestate */}
                <h2>Count: {countThree}</h2>
                <button onClick={randomFunc}>Increment</button>
                <button onClick={() => handleDecrement(3)}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </>
        </div>

    );
};

export default Count;