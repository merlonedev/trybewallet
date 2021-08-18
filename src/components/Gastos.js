import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Gastos extends React.Component {
  valorConvertido() {
    const { expense } = this.props;
    const { value, currency, exchangeRates } = expense;
    const { [currency]: moeda } = exchangeRates;
    const valorConvertido = moeda.ask * Number(value);
    return valorConvertido;
  }

  render() {
    const { expense } = this.props;
    const { exchangeRates, currency } = expense;
    const { [currency]: moeda } = exchangeRates;
    const { name, ask } = moeda;
    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{name.split('/')[0]}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{this.valorConvertido().toFixed(2)}</td>
        <td>Real</td>
        <td>Editar/Excluir</td>
      </tr>
    );
  }
}

Gastos.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect()(Gastos);
