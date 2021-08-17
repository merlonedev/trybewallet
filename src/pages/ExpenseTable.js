import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    const colHeaders = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            { colHeaders
              .map((colH) => <th key={ colH }>{ colH }</th>)}
          </tr>
        </thead>
        <tbody>
          {/* /**
          * Consultei o repositório de Julio Filizzola para resolver essa parte.
          * Link: https://github.com/tryber/sd-011-project-trybewallet/pull/18/files
          */}
          {expenses
            .map(({
              description,
              tag,
              method,
              value,
              exchangeRates,
              currency,
            }, index) => (
              <tr key={ index }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>
                  { (Number(exchangeRates[currency]
                    .ask).toFixed(2)) }
                </td>
                <td>
                  { (Number(exchangeRates[currency]
                    .ask * value).toFixed(2)) }
                </td>
                <td>Real</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(ExpenseTable);
