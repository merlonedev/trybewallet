// Requisitos 1, 2 e 4 realizados com orientações do colega Josimar Souza
// Requisitos 5, 6 e 7 realizados com orientaçes do colega Erik Kreis
// Requisitos 8 e 10 realizados com orientações do colega Eduardo Teixeira
// Consultas aos sites:
// https://pt-br.reactjs.org/
// https://www.youtube.com/watch?v=zym1bkoGom4
// https://www.youtube.com/watch?v=dzhDkXiqSmM&t=3171s

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import Table from './components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // soma: 0,
    };
  }

  totalSum() {
    const { expenses } = this.props;
    const soma2 = expenses.reduce((acc, at) => {
      const soma = (at.value * at.exchangeRates[at.currency].ask);
      return acc + soma;
    }, 0);
    return soma2;
  }

  render() {
    const { email, expenses } = this.props;
    // const { soma } = this.state;
    return (
      <div>
        <header>
          <section>
            <h3 data-testid="email-field">{`${email}`}</h3>
            <h3 data-testid="total-field">
              { expenses.length === 0 ? 0 : this.totalSum() }
            </h3>
            <h3 data-testid="header-currency-field">BRL</h3>
          </section>
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
