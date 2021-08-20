import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/carteira" render={ (props) => <Wallet { ...props } /> } />
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
    </Switch>
  );
}

export default App;
