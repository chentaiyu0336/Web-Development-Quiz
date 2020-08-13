import React from 'react';
import './home.less';
import { Link } from 'react-router-dom';
import imgCalculator from '../images/calculator.png';
import imgTimer from '../images/timer.png'

const Home = () => {
  return (
    <div className="home">
      <div className="backgroundImg">
        <div className="curtain">
          <h1>在线实用工具</h1>
        </div>

      </div>

      <div className="icon">
        <img src={imgCalculator} alt="Calculator" />
        <img src={imgTimer} alt="Timer" />
      </div>

      <div className="iconLink">
        <Link to='/calculator'>计算器</Link>
        <Link to='/timer'>倒计时器</Link>
      </div>

    </div>);
};

export default Home;