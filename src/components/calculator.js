import React from 'react';
import './calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__display">
          <div className="calculator__display__current">
            { next || total || 0}
          </div>
        </div>
        <div className="calculator__buttons">
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>AC</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>+/-</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>%</button>
            <button type="button" className="calculator__buttons__row__button  orange" onClick={this.handleClick}>&#247;</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>7</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>8</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>9</button>
            <button type="button" className="calculator__buttons__row__button  orange" onClick={this.handleClick}>x</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>4</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>5</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>6</button>
            <button type="button" className="calculator__buttons__row__button  orange" onClick={this.handleClick}>-</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>1</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>2</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>3</button>
            <button type="button" className="calculator__buttons__row__button  orange" onClick={this.handleClick}>+</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button  zero" onClick={this.handleClick}>0</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.handleClick}>.</button>
            <button type="button" className="calculator__buttons__row__button  orange" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
