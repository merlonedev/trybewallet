import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './TableData';

// Esse requisito eu consultei o PR do Waltton Coelho e pelo site de como criar tabelas.
// https://github.com/tryber/sd-012-project-trybewallet/pull/64/files
// https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/#:~:text=Criando%20Uma%20Tabela%20Com%20O,listando%20uma%20linha%20por%20produto.&text=Aqui%2C%20aceitamos%20uma%20variedade%20de,em%20loop%20em%20nossa%20tabela.
class WalletTable extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);
    this.exchangeRatesUpdate = this.exchangeRatesUpdate.bind(this);
  }

  updateTable(item) {
    const { value } = item;
    const askItem = item.exchangeRates[item.currency].ask;
    return (askItem * value).toFixed(2);
  }

  exchangeRatesUpdate(item) {
    const { ask } = item.exchangeRates[item.currency];
    const askNumber = +ask;
    return askNumber.toFixed(2);
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            {data.map((head) => <th key={ head }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          { expenses.map((item, index) => (
            <tr key={ index }>
              <td>{ item.description }</td>
              <td>{ item.tag }</td>
              <td>{ item.method }</td>
              <td>{ item.value }</td>
              <td>{ item.exchangeRates[item.currency].name }</td>
              <td>{ this.exchangeRatesUpdate(item) }</td>
              <td>{ this.updateTable(item) }</td>
              <td>Real</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletTable);
