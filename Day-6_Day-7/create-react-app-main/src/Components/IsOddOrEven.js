import React from 'react';

const IsOddOrEven = ({countThree}) => {
    return (
        <div>
            <h3> Number is {countThree % 2 === 0 ? 'Even' : 'Odd'}</h3>
        </div>
    );
};

export default IsOddOrEven;