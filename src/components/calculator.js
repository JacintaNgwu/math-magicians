import React, { useState } from 'react';
import './styles/calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(state, e.target.textContent);
    setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  const { total, next } = state;
  return (
    <div className="calculator">
      <div className="calculator__display">
        <div className="calculator__display__current">
          { next || total || 0}
        </div>
      </div>
      <div className="calculator__buttons">
        <div className="calculator__buttons__row">
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>AC</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>+/-</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>%</button>
          <button type="button" className="calculator__buttons__row__button  orange" onClick={handleClick}>&#247;</button>
        </div>
        <div className="calculator__buttons__row">
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>7</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>8</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>9</button>
          <button type="button" className="calculator__buttons__row__button  orange" onClick={handleClick}>x</button>
        </div>
        <div className="calculator__buttons__row">
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>4</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>5</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>6</button>
          <button type="button" className="calculator__buttons__row__button  orange" onClick={handleClick}>-</button>
        </div>
        <div className="calculator__buttons__row">
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>1</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>2</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>3</button>
          <button type="button" className="calculator__buttons__row__button  orange" onClick={handleClick}>+</button>
        </div>
        <div className="calculator__buttons__row">
          <button type="button" className="calculator__buttons__row__button  zero" onClick={handleClick}>0</button>
          <button type="button" className="calculator__buttons__row__button" onClick={handleClick}>.</button>
          <button type="button" className="calculator__buttons__row__button  orange" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
