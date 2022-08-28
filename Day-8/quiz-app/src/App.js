import { useState } from "react";
import "./App.css";
import QuestionCard from "./Components/QuestionCard";
import shuffle from "./Components/Suffle";

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [endGame, setEndGame] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

  const navigatenext = () => {
    //flushsync
    let currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex)
      // console.log(currentQuestionIndex);
      const question = quizzes[currentQuizIndex];
      setCurrentAnswers(shuffle(question));
    } else {
      setEndGame(true)
    }
  }

  const fetchData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    setQuizzes(results);
    // console.log(results);

    // getting all Answers
    const initialQuestion = results[currentQuestionIndex];
    // const answers = [initialQuestion.correct_answer, ...initialQuestion.incorrect_answers];
    setCurrentAnswers(shuffle(initialQuestion));
    setLoaded(true);
    setStartQuiz(true);
  };

  return (
    <>
      {endGame && <p>Its time to show result</p>}
      {!startQuiz && !endGame && <button onClick={fetchData}>Start</button>}
      <div className="container">
        {loaded &&
          <QuestionCard
            quiz={quizzes[currentQuestionIndex]}
            currentAnswers={currentAnswers}
            currentQuestionIndex={currentQuestionIndex}
            quizzes={quizzes}
            navigatenext={navigatenext}
          />
        }
      </div>
    </>
  );
}

export default App;
