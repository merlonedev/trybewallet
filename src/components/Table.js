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
  }

  render() {
    const { hearder } = this.state;
    const { wallet: { expenses }, gastos } = this.props;
    if (expenses.length > 0) {
      return (
        <table className="table">
          <thead>
            <tr>
              {hearder.map((item, index) => (<th key={ index }>{item}</th>))}
            </tr>
          </thead>
          <tbody>
            <TableTd
              counter={ 0 }
              gastos={ gastos }
            />
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
  gastos: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
