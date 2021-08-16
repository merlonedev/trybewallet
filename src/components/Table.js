import React, { Component } from 'react';
import trash from '../images/trash.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleRow = this.handleRow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log()
  }

  handleRow() {
    const {expenses} = this.props;
    return (
      expenses.map((row, index) => { 
        const convertValue = (Number(row.value) * Number(row.exchangeRates[row.currency].ask)).toFixed(2);
        const curName = row.exchangeRates[row.currency].name;
        const sliced = curName.slice(0, curName.indexOf('/'))
        return (
        <tr key={index}>
          <td>{row.description}</td>
          <td>{row.tag}</td>
          <td>{row.method}</td>
          <td>{`${row.value}`}</td>
          <td>{sliced}</td>
          <td>{convertValue}</td>
          <td>{Number(row.exchangeRates[row.currency].ask).toFixed(2)}</td>
          <td>Real</td>
          <td><button type="button" onClick={console.log('i') }><img src={trash} alt="trash icon"/></button>
          </td>
        </tr>
        )
    })
    );
  }

  render() {
    return (
      <table className="tableRow">
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {this.handleRow()}
      </table>
    );
  }
}

Table.propTypes = {
delete: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {  
    delete: () => dispatch(deleteItem()),
  }
}

export default connect(null,mapDispatchToProps)(Table);
