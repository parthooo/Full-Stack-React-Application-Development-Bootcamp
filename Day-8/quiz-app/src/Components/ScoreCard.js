import React from 'react';

const ScoreCard = ({totalScore, resetQuiz}) => {
    return (
        <div className='container result display-block'>
            <h3>Result page</h3>
            <p>Score {totalScore}</p>
            <button onClick={resetQuiz} className="btn restart-btn btn-style">Reset Quiz</button>
        </div>
    );
};

export default ScoreCard;