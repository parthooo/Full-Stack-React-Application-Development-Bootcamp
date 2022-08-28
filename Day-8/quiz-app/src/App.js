import { useState } from "react";
import "./App.css";
import QuestionCard from "./Components/QuestionCard";
import ScoreCard from "./Components/ScoreCard";
import shuffle from "./Components/Suffle";

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [endGame, setEndGame] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [pickedAnswer, setPickedAnswer] = useState(null);

  const pickAnswer = (answer) => {
    setPickedAnswer(answer);
    if (answer === correctAnswer) {
      setTotalScore((prevScore) => prevScore + 1);
    }
    console.log(answer);
  };

  const navigatenext = () => {
    //flushsync
    let currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex);
      // console.log(currentQuizIndex);
      const question = quizzes[currentQuizIndex];
      setCurrentAnswers(shuffle(question));
      setPickedAnswer(null)
      setCorrectAnswer(question.correct_answer);
    } else {
      setEndGame(true);
    }
  };

  const resetQuiz = () => {
    setQuizzes(null)
    setLoaded(false)
    setCorrectAnswer(null)
    setEndGame(false)
    setStartQuiz(false)
    setPickedAnswer(null)
    setTotalScore(0)
    setCurrentQuestionIndex(0)

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
    setCorrectAnswer(initialQuestion.correct_answer);
    setLoaded(true);
    setStartQuiz(true);
  };

  return (
    <>
      {endGame && <ScoreCard totalScore={totalScore} resetQuiz = {resetQuiz}/>}
      {!startQuiz && (
        <button onClick={fetchData} className="btn-style display-block">
          Start
        </button>
      )}
      <div className="container">
        {loaded && !endGame && (
          <QuestionCard
            quiz={quizzes[currentQuestionIndex]}
            currentAnswers={currentAnswers}
            currentQuestionIndex={currentQuestionIndex}
            quizzes={quizzes}
            navigatenext={navigatenext}
            pickAnswer={pickAnswer}
            correctAnswer={correctAnswer}
            pickedAnswer={pickedAnswer}
          />
        )}
      </div>
    </>
  );
}

export default App;
