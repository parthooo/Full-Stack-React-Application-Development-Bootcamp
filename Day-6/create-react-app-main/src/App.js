import { useState } from "react"
import Notes from "./Components/Notes"
import Count from "./Components/Count"
import IsOddOrEven from "./Components/IsOddOrEven"
import RandomCard from "./Components/RandomCard"
import './App.css';
import styles from './App.module.css';


function App() {
  // countThree
  const [countThree, setCountThree] = useState(0)

  //RandomCard
  const cardValus = [12, 15, 40, 39]
  const [pickedvalue, setPickedValue] = useState(null)

  return (
    <>
      <div className={styles.displayFlex}>
        <Notes />
        <div className={styles.textCenter}>
          <Count countThree={countThree} setCountThree={setCountThree} />
          <IsOddOrEven countThree={countThree} pickedvalue={pickedvalue} />
          <RandomCard cardValus={cardValus} setPickedValue={setPickedValue} />
        </div>
      </div>
    </>
  );
}

export default App;
