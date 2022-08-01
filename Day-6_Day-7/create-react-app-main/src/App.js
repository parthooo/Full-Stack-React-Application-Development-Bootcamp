import { useState } from "react"
import Notes from "./Components/Notes"
import Count from "./Components/Count"
import IsOddOrEven from "./Components/IsOddOrEven"


function App() {
  // countThree
  const [countThree, setCountThree] = useState(0)

  return (
    <>
        <Notes />
        <Count countThree={countThree} setCountThree={setCountThree}/>
        <IsOddOrEven countThree={countThree}/>
    </>
  );
}

export default App;
