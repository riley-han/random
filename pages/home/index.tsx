import React, { useState, useEffect } from 'react';
import styles from '../../styles/number.module.css';
const Home: React.FC = () => {
  const [number, setNumber] = useState(0);

  const getNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumber(randomNumber);
    if (randomNumber === 29) {
      alert('You win!');
    }
  };

  return (
    <div className={styles.body}>
      <h1>Hello World</h1>
      <button onClick={getNumber} className={styles.button}>
        Get Number
      </button>
      <h2 className={styles.number}>
        Your number is {number}
      </h2>
    </div>
  );
};

export default Home;
