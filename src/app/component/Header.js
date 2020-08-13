import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to='/'>HOME</Link>
        <Link to='/calculator'>在线计算器</Link>
        <Link to='/timer'>在线倒计时器</Link>
      </div>
    );
  };
}

export default Header;