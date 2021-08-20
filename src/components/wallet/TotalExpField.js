import React from 'react';
import PropTypes from 'prop-types';

function TotalExpField(props) {
  const { totalExp } = props;
  return (
    <li data-testid="total-field">
      Gastos totais:
      {totalExp.toFixed(2)}
    </li>
  );
}

TotalExpField.propTypes = {
  totalExp: PropTypes.number,
};

TotalExpField.defaultProps = {
  totalExp: 0,
};
export default TotalExpField;
