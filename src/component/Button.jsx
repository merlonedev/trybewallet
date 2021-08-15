import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCurrency, expense } from '../actions';

class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      moeda: 'USD',
      metodoDePagamento: 'Dinheiro',
      tag: 'Alimentação',
      describe: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { expenses, expense } = this.props;
    const { valor, moeda, metodoDePagamento, tag, describe } = this.state;
    const gasto = {
      id: expenses.lenght !== undefined ? expenses.lenght - 1 : 0,
      Value: valor,
      descripetion: describe,
      currency: moeda,
      method: metodoDePagamento,
      tag,
    };
    expense(gasto);
  }

  render() {
    console.log(this.props);
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
  expense: (gasto) => dispacth(expense(gasto)),
  coin: () => dispacth(addCurrency()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Button.propTypes = {
  expense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)))
    .isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
