import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSumTotal } from '../actions/index.login';

class Table extends Component {
  resultsTable() {
    const { expenses } = this.props;
    const valueResult = expenses.map((expense) => {
      const { currency, tag, id, value, description, exchangeRates, method } = expense;
      return (
        <tr key={ id } id={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{parseFloat(value)}</td>
          <td>{parseFloat(value * exchangeRates[currency].ask).toFixed(2)}</td>
          <td>Real</td>
        </tr>
      );
    });
    return valueResult;
  }

  handlerClick(expenses) {
    const { setResults } = this.props;
    setResults(expenses.id);
  }

  render() {
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {this.resultsTable()}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setResults: (payload) => dispatch(userSumTotal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setResults: PropTypes.func.isRequired,
};
