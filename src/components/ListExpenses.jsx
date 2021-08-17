import React from 'react';
import PropTypes from 'prop-types';

class ListExpenses extends React.Component {
  calculateValue() {
    const { expense } = this.props;
    const { currency, value, exchangeRates } = expense;
    const { [currency]: objCurrency } = exchangeRates;
    const { ask } = objCurrency;
    const total = ask * parseInt(value, 10);
    return total;
  }

  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    const { [currency]: moeda } = exchangeRates;
    const { name, ask } = moeda;
    const cambio = this.calculateValue();
    const newName = name.split('/')[0];
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${value}`}</td>
        <td>{newName}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{cambio.toFixed(2)}</td>
        <td>Real</td>
      </tr>
    );
  }
}

ListExpenses.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape(PropTypes.object),
  }).isRequired,
};

export default ListExpenses;
