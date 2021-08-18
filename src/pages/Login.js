import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmail, deleteBtn } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      disabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleLogin() {
    const { email, password } = this.state;
    const emailInput = email.split('@').length === 2 && email.split('.com')[1] === '';
    const lengthPassword = 6;

    if (emailInput && password.length >= lengthPassword) {
      this.setState({
        disabled: true,
      });
      return false;
    }
  }

  render() {
    const { password, disabled } = this.state;
    const { email, emailAdd, toDelete } = this.props;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
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
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            onKeyUp={ this.handleLogin }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => emailAdd(email) }
            disabled={ !disabled }
          >
            Entrar
          </button>
          <button
            data-testind="delete-btn"
            type="button"
            onClick={ () => toDelete(id) }
          >
            Excluir
          </button>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  emailAdd: (email) => dispatch(addEmail(email)),
  toDelete: (id) => dispatch(deleteBtn(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  emailAdd: PropTypes.func,
  toDelete: PropTypes.func,
}.isRequired;
