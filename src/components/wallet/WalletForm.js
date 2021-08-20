import React from 'react';
import PropTypes from 'prop-types';

function WalletForm({
  currencies, eventHandler, value, description, currency, method, tag, add }) {
  return (
    <form>
      <label htmlFor="value">
        Valor
        <input id="value" value={ value } onChange={ eventHandler } type="text" />
      </label>
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          value={ description }
          onChange={ eventHandler }
          type="text"
        />
      </label>
      <label htmlFor="currency">
        Moeda
        <select id="currency" onChange={ eventHandler } value={ currency }>
          {Object.entries(currencies)
            .filter((moeda) => moeda[0] !== 'USDT')
            .map((moeda) => (
              <option value={ moeda[0] } key={ moeda[0] }>{moeda[0]}</option>
            ))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento
        <select onChange={ eventHandler } id="method" value={ method }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select value={ tag } onChange={ eventHandler } id="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        { console.log(currencies)}
      </label>
      <button type="button" onClick={ add }>Adicionar despesa</button>
    </form>
  );
}

WalletForm.propTypes = {
  currencies: PropTypes.objectOf(Object),
  eventHandler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string,
  add: PropTypes.func.isRequired,
};

WalletForm.defaultProps = {
  tag: undefined,
  currencies: {},
};

export default (WalletForm);
