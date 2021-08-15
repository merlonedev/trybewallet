import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginInput from './LoginInput';
import Button from './Button';

class Form extends Component {
  render() {
    const { email, password, handleChange, disabled, handleClick } = this.props;
    return (
      <form>
        <LoginInput
          name="email"
          labelText="Email:"
          testId="email-input"
          type="email"
          value={ email }
          onChange={ handleChange }
        />
        <LoginInput
          name="password"
          labelText="Password:"
          testId="password-input"
          type="password"
          value={ password }
          onChange={ handleChange }
        />
        <Button
          disabled={ disabled }
          onClick={ handleClick }
          buttonText="Entrar"
          linkTo="/carteira"
        />
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
