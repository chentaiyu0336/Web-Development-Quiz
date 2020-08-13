import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calculator extends Component {
  state = {
    number1: '',
    number2: '',
    result: '',
    operator: '',
  }

  handleNumChange = (event) => {
    if (!this.state.operator) {
      this.setState({ number1: this.state.number1 + event.target.value });
    }
    else {
      this.setState({ number2: this.state.number2 + event.target.value });
    }
  }

  handleOperator = (event) => {
    if (!this.state.operator) {
      this.setState({ operator: event.target.value });
    }
  }

  handleClear = () => {
    this.setState({
      number1: '',
      number2: '',
      result: '',
      operator: '',
    })
  }

  calculateResult = () => {
    let res;
    if (this.state.operator === "+") {
      res = parseInt(this.state.number1) + parseInt(this.state.number2);
    } else if (this.state.operator === "-") {
      res = parseInt(this.state.number1) - parseInt(this.state.number2);
    } else if (this.state.operator === "*") {
      res = parseInt(this.state.number1) * parseInt(this.state.number2);
    }
    this.setState({
      result: res,
      number1: '',
      number2: '',
      operator: '',
    });
  }

  render() {
    return (
      <div>
        <h1>在线计算器</h1>
        <input type="text" value={this.state.number1 + this.state.operator + this.state.number2 + this.state.result} className="inputBox" />

        <div>
          <button className="operator" value="+" onClick={this.handleOperator}>+</button>
          <button className="operator" value="-" onClick={this.handleOperator}>-</button>
          <button className="operator" value="*" onClick={this.handleOperator}>*</button>
        </div>

        <div>
          <button className="number" value="7" onClick={this.handleNumChange}>7</button>
          <button className="number" value="8" onClick={this.handleNumChange}>8</button>
          <button className="number" value="9" onClick={this.handleNumChange}>9</button>
        </div>

        <div>
          <button className="number" value="4" onClick={this.handleNumChange}>4</button>
          <button className="number" value="5" onClick={this.handleNumChange}>5</button>
          <button className="number" value="6" onClick={this.handleNumChange}>6</button>
        </div>

        <div>
          <button className="number" value="1" onClick={this.handleNumChange}>1</button>
          <button className="number" value="2" onClick={this.handleNumChange}>2</button>
          <button className="number" value="3" onClick={this.handleNumChange}>3</button>
        </div>

        <div>
          <button className="number" value="0" onClick={this.handleNumChange}>0</button>
          <button className="clear" value="clear" onClick={this.handleClear}>clear</button>
          <button className="equal" value="=" onClick={this.calculateResult}>=</button>
        </div>

        <Link to="/">回到主页</Link>

      </div>
    );
  };
}

export default Calculator;