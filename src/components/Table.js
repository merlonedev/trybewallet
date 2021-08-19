import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import DelEditButton from './DelEditButton';

class Table extends React.Component {
  render() {
    const { props: { expenses } } = this;
    return (
      <table>
        <TableHeader />
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>
                { expense.description }
              </td>
              <td>
                { expense.tag }
              </td>
              <td>
                { expense.method }
              </td>
              <td>
                { expense.currency }
                { expense.value }
              </td>
              <td>
                {
                  (Object.entries(expense.exchangeRates).find(
                    (coin) => coin[0] === expense.currency,
                  )[1].name).split('/')[0]
                }
              </td>
              <td>
                {
                  parseFloat((Object.entries(expense.exchangeRates).find(
                    (coin) => coin[0] === expense.currency,
                  )[1].ask)).toFixed(2)
                }
              </td>
              <td>
                {
                  ((Object.entries(expense.exchangeRates).find(
                    (coin) => coin[0] === expense.currency,
                  )[1].ask) * parseFloat(expense.value)).toFixed(2)
                }
              </td>
              <DelEditButton target={ expense.id } />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const { arrayOf, string, object, oneOfType } = PropTypes;
Table.propTypes = {
  expenses: oneOfType([arrayOf(string), arrayOf(object)]),
};

Table.defaultProps = {
  expenses: [],
};

const mapStateToProps = (state) => {
  const { expenses } = state.wallet;
  return {
    expenses,
  };
};

export default connect(mapStateToProps)(Table);
