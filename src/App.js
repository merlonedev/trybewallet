import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotAPage from './pages/NotAPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/carteira" component={ Wallet } />
    <Route component={ NotAPage } />
  </Switch>
);

export default App;
