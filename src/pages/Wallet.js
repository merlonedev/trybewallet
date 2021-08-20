import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmailField from '../components/wallet/EmailField';
import TotalExpField from '../components/wallet/TotalExpField';
import CurrencyField from '../components/wallet/CurrencyField';
import WalletForm from '../components/wallet/WalletForm';
import ExpenseField from '../components/wallet/ExpenseField';
import { addExpense, fetchCurrencies, editExpense } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.fetchMoedas = this.fetchMoedas.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      exchangeRates: '',
      totalExp: 0,
    };
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  eventHandler({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  async add() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    const { currencies, sendExpense } = this.props;
    this.setState({
      exchangeRates: currencies,
    }, () => {
      const { exchangeRates, id, value, description, currency, method, tag } = this.state;
      sendExpense({ exchangeRates, id, value, description, currency, method, tag });
    });
    this.setState((previusState) => ({
      id: previusState.id + 1,
      totalExp: parseFloat(previusState.totalExp)
        + parseFloat(previusState.value
          * previusState.exchangeRates[previusState.currency].ask),
    }));
  }

  edit(id) {
    const { editDelete, expenses } = this.props;
    console.log(expenses);
    editDelete(id);
  }

  async fetchMoedas() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  render() {
    const { email, currencies } = this.props;
    const { value, description, currency, method, tag, totalExp } = this.state;
    return (
      <>
        <header>
          <ul>
            <EmailField email={ email } />
            <TotalExpField totalExp={ totalExp } />
            <CurrencyField />
          </ul>
        </header>
        <WalletForm
          email={ email }
          value={ value }
          description={ description }
          currency={ currency }
          method={ method }
          tage={ tag }
          currencies={ currencies }
          eventHandler={ this.eventHandler }
          add={ this.add }
        />
        <ExpenseField edit={ this.edit } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  sendExpense: (value) => dispatch(addExpense(value)),
  editDelete: (value) => dispatch(editExpense(value)),
});

Wallet.propTypes = {
  sendExpense: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(Object),
  editDelete: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

Wallet.defaultProps = {
  currencies: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
