import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
// link consultado para aprender a fazer a tabela: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

class WalletTable extends React.Component {
  renderTableHeader() {
    const header = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return header.map((columnName) => <th key={ columnName }>{ columnName }</th>);
  }

  renderTableInfo() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      return (
        expenses.map((item) => (
          <tr key={ item.id }>
            <td>{ item.description }</td>
            <td>{ item.tag }</td>
            <td>{ item.method }</td>
            <td>{ (+item.value).toFixed(2) }</td>
            <td>{ item.exchangeRates[item.currency].name.split('/')[0] }</td>
            <td>{ (+item.exchangeRates[item.currency].ask).toFixed(2) }</td>
            <td>{ (item.exchangeRates[item.currency].ask * item.value).toFixed(2) }</td>
            <td>Real</td>
            <td>editar/excluir</td>
          </tr>))
      );
    }
  }

  render() {
    return (
      <table className="expenses-table">
        <tbody>
          <tr>{ this.renderTableHeader() }</tr>
          {this.renderTableInfo()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletTable);

WalletTable.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};
