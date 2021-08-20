import React from 'react';
import PropTypes from 'prop-types';

function EmailField(props) {
  const { email } = props;
  return (
    <li data-testid="email-field">
      Email:
      {' '}
      {email}
    </li>
  );
}

EmailField.propTypes = {
  email: PropTypes.string,
};

EmailField.defaultProps = {
  email: '',
};

export default (EmailField);
