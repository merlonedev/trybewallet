import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderWallet from '../components/HeaderWallet';
import FormsWallet from '../components/FormsWallet';
import { clickButtonFetchApi, fetchApi } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.saveChange = this.saveChange.bind(this);
    this.clickButtonAction = this.clickButtonAction.bind(this);
    this.changeId = this.changeId.bind(this);
    this.sumTotalExpense = this.sumTotalExpense.bind(this);
  }

  saveChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async changeId() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  async clickButtonAction() {
    const { saveExpense } = this.props;
    await this.changeId();
    saveExpense(this.state);
    this.sumTotalExpense();
  }

  findCorrectCurrency(listOfCurrencies, currencyToFind) {
    return listOfCurrencies
      .find((currency) => currency.code === currencyToFind && currency.codein !== 'BRLT');
  }

  sumTotalExpense() {
    const { wallet: { expenses, currencies } } = this.props;
    if (expenses.length !== 0) {
      return expenses.reduce((totalExpenses, expense) => {
        const currencyConversion = this.findCorrectCurrency(currencies, expense.currency);
        return totalExpenses
        + (parseFloat(expense.value) * parseFloat(currencyConversion.ask));
      }, 0);
    }
    return 0;
  }

  render() {
    const { getCurrenciesNames, wallet } = this.props;
    return (
      <div>
        <HeaderWallet sumTotalExpense={ this.sumTotalExpense() } />
        <FormsWallet
          saveChange={ this.saveChange }
          getCurrenciesNames={ getCurrenciesNames }
          wallet={ wallet }
          clickButtonAction={ this.clickButtonAction }
          walletPage={ this.state }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesNames: () => dispatch(fetchApi()),
  saveExpense: (state) => dispatch(clickButtonFetchApi(state)),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    currencies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  getCurrenciesNames: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
