import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleValidate() {
    const { email, password } = this.state;
    const regexChecker = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const minPasswordLength = 6;
    return (regexChecker.test(email) && password.length >= minPasswordLength);
  }

  handleClick() {
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <h1>Trybe-Wallet</h1>
        <label htmlFor="email-input">
          Email:
          <br />
          <input
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha:
          <br />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ !this.handleValidate() }
            onClick={ this.handleClick }
          >
            ENTRAR
          </button>
        </Link>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
