import React from 'react';
import AnswerCard from './AnswerCard';

const QuestionCard = ({
    quiz,
    currentAnswers,
    currentQuestionIndex,
    quizzes,
    navigatenext,
    pickAnswer,
    correctAnswer,
    pickedAnswer,
}) => {
    // console.log(quiz)
    return (
        <div className='question-card'>
            <p>Question : {currentQuestionIndex + 1} / {quizzes.length} {' '}</p>
            <h3> {quiz.question} </h3>
            {currentAnswers.map((answer, i) => (
                <AnswerCard 
                key={i} 
                answer={answer} 
                pickAnswer={pickAnswer}
                correctAnswer={correctAnswer}
                pickedAnswer={pickedAnswer}
                />
            ))}
            <button onClick={navigatenext} className="display-block btn-style">Next</button>
        </div>
    );
};

export default QuestionCard;