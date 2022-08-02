import { useState } from "react";
import "./App.css";
import QuestionCard from "./Components/QuestionCard";

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const fetchData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    setQuizzes(results);
    console.log(results);
    setLoaded(true);
  };

  return (
    <>
      <div className="App">
        <button onClick={fetchData}>Start</button>
      </div>
      <div className="container">
        {loaded && <QuestionCard quiz={quizzes[currentQuestionIndex]}/>}
      </div>
    </>
  );
}

export default App;
