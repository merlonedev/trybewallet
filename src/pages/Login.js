import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validation() {
    const { email, password } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const emailIsValid = emailRegex.test(email);
    const minLength = 6;
    if (emailIsValid && password.length >= minLength) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    },
    this.validation);
  }

  render() {
    const { email, disable } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <div>
        Login
        <label htmlFor="email">
          <input
            id="email"
            data-testid="email-input"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
            onClick={ () => dispatchLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
