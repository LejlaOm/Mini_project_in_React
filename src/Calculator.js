import React, { useState } from 'react';
//import './Calculator.css';
import Button from './Button';
 
function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((symbol) => {
          return (
            <Button
              key={symbol}
              symbol={symbol}
              onClick={symbol === '=' ? handleEqual : () => handleClick(symbol)}
            />
          );
        })}
        <Button symbol="C" onClick={handleClear} />
      </div>
    </div>
  );
}

export default Calculator;