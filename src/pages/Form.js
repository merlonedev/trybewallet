import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import { fetchCurrencyAction } from '../actions/index';

class Form extends React.Component {
  componentDidMount() {
    const { func } = this.props;
    func();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <Input />
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" label="Moeda: ">
            {
              currencies
                .map((currencyName) => (
                  <option
                    key={ currencyName }
                  >
                    {currencyName}
                  </option>
                ))
            }

          </select>
        </label>
        <label htmlFor="selected-currency">
          Método de pagamento:
          <select id="selected-currency" name="method" label="Método de pagamento: ">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="selected-category-tag" label="Tag: ">
          Tag:
          <select id="selected-category-tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchtoProps = (dispatch) => ({
  func: () => dispatch(fetchCurrencyAction()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Form);
