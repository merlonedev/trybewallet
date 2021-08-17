import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginUser } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.validUser = this.validUser.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value },
    () => this.validUser());
  }

  validUser() {
    const { email, password } = this.state;
    const lengthPass = 6;
    const emailLogin = email.split('@').length === 2 && email.split('.com')[1] === '';
    if (emailLogin && password.length > lengthPass) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleLogin() {
    const { email } = this.state;
    const { userEmail } = this.props;
    userEmail(email);
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            onKeyUp={ this.handleLogin }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            onKeyUp={ this.handleLogin }
          />
        </label>
        <button
          id="button"
          type="button"
          onClick={ this.handleLogin }
          disabled={ !disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (emailLogin) => dispatch(LoginUser(emailLogin)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userEmail: PropTypes.func,
}.isRequired;
