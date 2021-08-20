import React from 'react';
import PropTypes from 'prop-types';

function TotalExpField(props) {
  const { expenses } = props;
  return (
    <li data-testid="total-field">
      Gastos totais:
      {(expenses.reduce(
        (acc, e) => +e.value * +Object.values(
          e.exchangeRates,
        ).find((rate) => rate.code === e.currency).ask
          + acc, 0,
      )).toFixed(2)}
    </li>
  );
}

TotalExpField.propTypes = {
  expenses: PropTypes.arrayOf(Object),
};

TotalExpField.defaultProps = {
  expenses: [],
};
export default TotalExpField;
