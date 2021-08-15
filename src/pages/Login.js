import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLogin } from '../actions';

const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const six = 6;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { email } = this.state;
    const { sendLogin } = this.props;
    sendLogin(email);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChange }
            isRequired
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            isRequired
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !(validEmail.test(email) && password.length >= six) }
            onClick={ this.handleButton }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email) => dispatch(getLogin(email)),
});

Login.propTypes = {
  sendLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
