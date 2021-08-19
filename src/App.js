import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotFound from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
