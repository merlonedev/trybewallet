import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from './fetchApiMoeda';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
    };

    this.renderSelect = this.renderSelect.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  renderSelect() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="coin">
        Moeda
        <select
          id="coin"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((coin) => (<option key={ coin }>{ coin }</option>)) }
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descriçao">
          Descrição
          <input
            type="text"
            name="descriçao"
            id="descriçao"
          />
        </label>
        { this.renderSelect() }
        <label htmlFor="metodopg">
          Método de pagamento
          <select name="metodopg" id="metodopg">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  currencies: PropTypes.arrayOf(string),
  getApi: PropTypes.func,
}.isRequired;
