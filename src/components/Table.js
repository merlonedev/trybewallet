import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
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
          {expenses ? expenses.map((expense) => (
            <ExpenseTableRow key={ expenses.id } expense={ expense } />
          )) : null}
        </tbody>
      </table>
    );
  }
}
