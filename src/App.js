import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Header from './pages/Header';
import AddExpense from './pages/AddExpense';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        <Route path="/header" component={ Header } />
        <Route path="/addExpense" component={ AddExpense } />
      </Switch>
    );
  }
}
export default App;
