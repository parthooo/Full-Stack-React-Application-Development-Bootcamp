import React from 'react';
import AnswerCard from './AnswerCard';

const QuestionCard = ({
    quiz,
    currentAnswers,
    currentQuestionIndex,
    quizzes,
    navigatenext
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
                />
            ))}
            <button onClick={navigatenext} className="btn-style">Next</button>
        </div>
    );
};

export default QuestionCard;