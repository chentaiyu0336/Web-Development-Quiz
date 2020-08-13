import React, { Component } from 'react';
import './app.less';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Header from './component/Header';
import Calculator from './component/Calculator';
import Timer from './component/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/calculator' component={Calculator} />
            <Route exact path='/timer' component={Timer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
