import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currency } from '../actions';

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { expenses, newExpense } = this.props;
    const { valor, moeda, method, tag, describe } = this.props;
    newExpense({
      id: expenses.length,
      value: valor,
      description: describe,
      currency: moeda,
      method,
      tag,
    });
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }
}

const mapDispatchToProps = (dispacth) => ({
  newExpense: (gasto) => dispacth(currency(gasto)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Button.propTypes = {
  newExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
  valor: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
