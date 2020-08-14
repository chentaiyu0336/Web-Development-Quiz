import React, { Component } from 'react';
import './app.less';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Header from './component/Header';
import Orders from './component/Orders';
import Add from './component/Add';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/add' component={Add} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
