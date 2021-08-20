import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTableValue extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        { expenses.map((expense) => {
          const {
            description,
            tag,
            method,
            value,
            id,
            currency,
            exchangeRates: { [currency]: { name, ask } },
          } = expense;

          const [Moeda] = name.split('/');
          const cambioUtilizado = parseFloat(ask).toFixed(2);
          const valorConvertido = parseFloat(value * ask).toFixed(2);
          const moedaDeConversão = 'Real';

          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ Moeda }</td>
              <td>{ cambioUtilizado }</td>
              <td>{ valorConvertido }</td>
              <td>{ moedaDeConversão }</td>
              <td>
                {}
              </td>
            </tr>
          );
        }) }
      </tbody>
    );
  }
}

ExpensesTableValue.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

ExpensesTableValue.defaultProps = {
  expenses: undefined,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTableValue);
