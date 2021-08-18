import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = { currencies: {} };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const results = await fetch(URL).then((data) => data.json());
    delete results.USDT;
    this.setState({ currencies: results });
  }

  render() {
    const { currencies } = this.state;
    return (
      <main>
        <Header />
        <Form currencies={ currencies } />
      </main>
    );
  }
}

export default Wallet;
