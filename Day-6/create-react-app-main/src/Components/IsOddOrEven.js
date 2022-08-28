import React from 'react';
import styles from '../App.module.css';

const IsOddOrEven = ({countThree, pickedvalue}) => {
    const oddOrEven = pickedvalue % 2 === 0 ? 'Even' : 'Odd'

    return (
        <div>
            <h3> Number is {countThree % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <h3> Random Number is {pickedvalue && (
                <span className={oddOrEven === 'Even' ? styles.even : styles.odd}>{oddOrEven}</span>
            )}</h3>
        </div>
    );
};

export default IsOddOrEven;