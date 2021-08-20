// Requisitos 1, 2 e 4 realizados com orientações do colega Josimar Souza
// Requisitos 5, 6 e 7 realizados com orientaçes do colega Erik Kreis
// Requisitos 8 e 10 realizados com orientações do colega Eduardo Teixeira
// Consultas aos sites:
// https://pt-br.reactjs.org/
// https://www.youtube.com/watch?v=zym1bkoGom4
// https://www.youtube.com/watch?v=dzhDkXiqSmM&t=3171s

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </section>
  );
}

export default App;
