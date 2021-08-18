import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.loginCheck = this.loginCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getUserEmail = this.getUserEmail.bind(this);
  }

  getUserEmail() {
    const { email } = this.state;
    const { submitEmail } = this.props;
    this.setState({ redirect: true });
    submitEmail(email);
  }

  loginCheck() {
    const { email, password } = this.state;
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/; // regex fornecido por Rodrigo Merlone
    const minCharacters = 5;
    const validEmail = regex.test(email);
    const validPassword = password.length >= minCharacters;

    if (validEmail && validPassword) {
      this.setState({ disabled: false });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.loginCheck();
  }

  render() {
    const { email, password, disabled, redirect } = this.state;
    return (
      <section>
        <div>Login</div>
        <label htmlFor="email-input">
          Insira seu e-mail:
          <input
            data-testid="email-input"
            type="email"
            id="umail-id"
            placeholder="E-mail"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Insira sua senha:
          <input
            data-testid="password-input"
            type="password"
            id="password-id"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          id="button-submit"
          onClick={ this.getUserEmail }
          disabled={ disabled }
        >
          Entrar
        </button>
        {redirect && <Redirect to="/carteira" />}
      </section>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  submitEmail: (email) => dispatch(getUserData(email)),
});

Login.propTypes = {
  submitEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchtoProps)(Login);
