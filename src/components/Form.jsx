import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { email, password, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ handleChange }
            value={ password }
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Form;
