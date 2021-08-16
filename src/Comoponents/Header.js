import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { getEmail, total } = this.props;
    return (
      <div>
        <div>
          <p
            data-testid="email-field"
          >
            {`Email: ${getEmail}`}
          </p>
        </div>
        <div>
          <div>
            <p data-testid="total-field">
              {`Despesa Total: R$ ${total}`}
            </p>
          </div>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
