import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginUser } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      button: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.validUser = this.validUser.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    () => this.validUser());
  }

  validUser() {
    const { email, password } = this.state;
    const lengthPass = 6;
    if (email.includes('@') && email.includes('.com') && password.length >= lengthPass) {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  }

  handleLogin() {
    const { email } = this.state;
    const { userEmail } = this.props;
    userEmail(email);
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div>
        <h1>Wallet</h1>
        <form>
          <h1>Login</h1>
          <label htmlFor="email">
            Email:
            <input
              value={ email }
              name="email"
              type="email"
              id="input-email"
              data-testid="email-input"
              onChange={ this.handleChange }

            />
          </label>
          <label htmlFor="input-password">
            Senha:
            <input
              name="password"
              type="password"
              id="input-password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              id="button"
              type="button"
              disabled={ button }
              onClick={ this.handleLogin }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
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
