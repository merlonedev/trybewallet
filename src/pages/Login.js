import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

import Input from '../Components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      disabled: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }), this.loginValidation);
  }

  /* referencia: https://regexr.com/3e48o */
  loginValidation() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const minLength = 6;

    if (emailRegex.test(email) && password.length >= minLength) {
      this.setState({ disabled: false });
    }
  }

  handleClick() {
    const { emailStore } = this.props;
    const { email } = this.state;
    emailStore(email);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { email, password, shouldRedirect, disabled } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>
        <Input
          label="Email"
          name="email"
          testId="email-input"
          type="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          label="password"
          name="password"
          testId="password-input"
          type="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  emailStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailStore: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
