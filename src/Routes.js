import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function Routes() {
  return (
    <Switch>
      <Route path="/ranking" component={ Wallet } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
