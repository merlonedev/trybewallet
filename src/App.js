import React from 'react';
import { Route } from 'react-router-dom';
// import Wallet from '../pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
