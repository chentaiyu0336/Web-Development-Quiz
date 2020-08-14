import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to='/'>HOME</Link>
        <Link to='/orders'>订单</Link>
        <Link to='/add'>添加商品</Link>
      </div>
    );
  };
}

export default Header;