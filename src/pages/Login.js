import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import setEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      email: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validation() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const value = 6;
    if (emailRegex.test(email) && password.length >= value) {
      return false;
    }

    return true;
  }

  render() {
    const { handleClick } = this.props;
    const { email, password } = this.state;
    return (
      <>
        <div>Login</div>
        <label htmlFor="input-email">
          <input
            data-testid="email-input"
            type="text"
            id="input-email"
            onChange={ this.onChange }
            value={ email }
            name="email"
          />
        </label>
        <label htmlFor="input-password">
          <input
            data-testid="password-input"
            type="password"
            id="input-password"
            onChange={ this.onChange }
            value={ password }
            name="password"
          />
        </label>
        <Link to="/carteira">
          <button
            onClick={ () => { handleClick(email); } }
            disabled={ this.validation() }
            type="button"
          >
            Entrar
          </button>
        </Link>

      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleClick: (email) => dispatch(
    setEmail(email),
  ),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
