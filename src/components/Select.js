import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { handleChange, coin, money, tag } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select
            name="moeda"
            id="moeda"
            value={ coin }
            onChange={ handleChange }
          >
            <option>MoedaMap</option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de Pagamento:
          <select
            name="money"
            id="método de pagamento"
            value={ money }
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  coin: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Select;
