import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </div>
  );
}

export default Routes;
