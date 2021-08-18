import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginTest = this.loginTest.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }
    ));
  }

  emailValidator(email) {
    // regex tirado da thread do Merlone no slack da turma;
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    return regex.test(email);
  }

  passwordValidator(password) {
    const minLength = 6;
    return password.length >= minLength;
  }

  loginTest() {
    const { password, email } = this.state;
    const test = this.passwordValidator(password) && this.emailValidator(email);
    return test;
  }

  render() {
    const { email, password } = this.state;
    const { reduxSaveEmail } = this.props;
    const loginIsPossible = this.loginTest();
    return (
      <form>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="e-mail"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            value={ password }
            placeholder="senha"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <Link
          onClick={ () => reduxSaveEmail(email) }
          to="/carteira"
        >
          <button type="button" disabled={ !loginIsPossible }>
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  reduxSaveEmail: (email) => dispatch(addEmail(email)),
});

Login.propTypes = {
  reduxSaveEmail: PropTypes.func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
