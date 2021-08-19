import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderWallet from '../components/HeaderWallet';
import FormsWallet from '../components/FormsWallet';
import { clickButtonFetchApi, fetchApi, saveExpenseSpecs } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.saveChange = this.saveChange.bind(this);
  }

  saveChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async runSaveExpenseSpecsAndGetCurrencies() {
    const { getCurrencies, saveExpense } = this.props;
    await getCurrencies();
    saveExpense();
  }

  render() {
    const { getCurrencies, getCurrenciesNames, wallet } = this.props;
    return (
      <div>
        <HeaderWallet />
        <FormsWallet
          saveChange={ this.saveChange }
          getCurrenciesNames={ getCurrenciesNames }
          getCurrencies={ getCurrencies }
          wallet={ wallet }
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
  getCurrencies: () => dispatch(clickButtonFetchApi()),
  saveExpense: (state) => dispatch(saveExpenseSpecs(state)),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({}).isRequired,
  getCurrenciesNames: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
