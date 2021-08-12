import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {
  render() {
    const { expenses } = this.props;
    const { description, tag, method, value, currency, ask } = expenses;
    return (
      <div>
        <tr>
          <th>{description}</th>
          <th>{tag}</th>
          <th>{method}</th>
          <th>{value}</th>
          <th>{currency}</th>
          <th>{ask}</th>
          <th>{{ value } * { ask }}</th>
          <th>Real Brasileiro</th>
          <th>
            <button className="btn-table" type="button" onClick={ this.handleEdition }>
              <span className="material-icons-outlined">
                edit
              </span>
            </button>
            <button className="btn-table" type="button" onClick={ this.handleDelete }>
              <span className="material-icons-outlined">
                delete
              </span>
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
