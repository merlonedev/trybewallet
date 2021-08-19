import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencyCombo from './CurrencyCombo';
import MethodCombo from './MethodCombo';
import CategoryCombo from './CategoryCombo';
import { fetchCurrencies } from '../actions/index';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { apiTrigger } = this.props;
    apiTrigger();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, currency, method, description, tag } = this.state;
    const { currencies, isFetching } = this.props;
    return (
      isFetching ? <div><h3>Loaging...</h3></div>
        : (
          <form>
            <label htmlFor="valor">
              Valor
              <input
                type="text"
                id="valor"
                value={ value }
                name="value"
                onChange={ this.handleChange }
              />
            </label>

            <CurrencyCombo
              name="currency"
              value={ currency }
              handleChange={ this.handleChange }
              arrayCurrency={ currencies }
            />
            <label htmlFor="descricao">
              Descrição
              <input
                type="text"
                id="descricao"
                value={ description }
                name="description"
                onChange={ this.handleChange }
              />
            </label>
            <MethodCombo
              name="method"
              value={ method }
              handleChange={ this.handleChange }
            />
            <CategoryCombo
              name="tag"
              value={ tag }
              handleChange={ this.handleChange }
            />
          </form>
        )
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  apiTrigger: () => dispatch(fetchCurrencies()),
});

WalletForm.propTypes = {
  arrayCurrency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
