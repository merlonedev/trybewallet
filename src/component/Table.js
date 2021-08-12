import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newTotal } from '../actions';

class Table extends React.Component {
  onClick(e) {
    // const { Total } = this.props;
    const { id } = e.target;
    const linha = document.getElementById(id);
    console.log(linha.children[6]);
    linha.remove();
  }

  listExpenses() {
    const { expenses } = this.props;
    const result = expenses.map((expense) => {
      const { currency, description, method, tag, value, exchangeRates, id } = expense;
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
          <td data-testid="delete-btn">
            <button type="button" id={ id } onClick={ this.onClick }>Excluir</button>
          </td>
        </tr>
      );
    });
    return result;
  }

  render() {
    return (
      <table>
        <tbody>
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
          {this.listExpenses()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  Total: (value) => dispatch(newTotal(value)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
