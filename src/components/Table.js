import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';
import TableTd from './TableTd';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hearder: ['Descrição', 'Tag',
        'Método de pagamento', 'Valor',
        'Moeda', 'Câmbio utilizado', 'Valor convertido',
        'Moeda de conversão', 'Editar/Excluir'],
    };
    this.sState = this.sState.bind(this);
  }

  sState() {
    const { wallet: { expenses }, getTotal } = this.props;
    if (expenses.length > 1) {
      return (
        <TableTd getTotal={ getTotal } counter={ 1 } />
      );
    }
  }

  render() {
    const { hearder } = this.state;
    const { wallet: { expenses }, getTotal } = this.props;
    if (expenses.length > 0) {
      console.log(expenses[0].id);
      return (
        <table className="table">
          <thead>
            <tr>
              {hearder.map((item, index) => (<th key={ index }>{item}</th>))}
            </tr>
          </thead>
          <tbody>
            <TableTd getTotal={ getTotal } counter={ 0 } />
          </tbody>
        </table>
      );
    }
    return (null);
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getTotal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
