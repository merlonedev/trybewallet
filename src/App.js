import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
