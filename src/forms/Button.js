import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string, arrayOf } from 'prop-types';
import fetchExpenseApi from './FetchExpenseApi';

class Button extends Component {
  componentDidMount() {
    const { getExpenses } = this.props;
    getExpenses();
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const totalExpense = expenses
        .reduce((accumulator, current) => accumulator
          + parseFloat(current.value) * current.fetchExpenseApi[current.currency].ask, 0);
      return totalExpense;
    }

    return (
      <div>
        <button type="submit">Adicionar Despesas</button>
      </div>
    );
  }
}

Button.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  expenses: arrayOf(string).isRequired,
  // currency: arrayOf(string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getExpenses: () => dispatch(fetchExpenseApi()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
