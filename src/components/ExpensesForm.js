import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {
  render() {
    const { expenses } = this.props;
    const { description, tag, method, value, currency, ask, id } = expenses;

    return (
      <div>
        <tr key={ id }>
          <th>{description}</th>
          <th>{tag}</th>
          <th>{method}</th>
          <th>{value}</th>
          <th>{currency}</th>
          <th>{ask}</th>
          <th>{({ value } * { ask }).toFixed(2)}</th>
          <th>Real Brasileiro</th>
          <th>
            <button className="btn-table" type="button" onClick={ this.handleEdition }>
              Editar
            </button>
            <button className="btn-table" type="button" onClick={ this.handleDelete }>
              Deletar
            </button>
          </th>
        </tr>
      </div>
    );
  }
}

export default ExpensesForm;

ExpensesForm.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
