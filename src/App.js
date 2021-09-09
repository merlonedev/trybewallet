import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <section className="filters">
        <img className="yoda-img" src={ yoda } alt="Mestre Yoda" />
        <img className="starwars-img" src={ starWars } alt="Star Wars" />
        <Filters />
      </section>
      <Table />
    </Provider>
  );
}

export default App;
