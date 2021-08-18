import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      disable: true,
    };
  }

  render() {
    const { disable } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <div>
        Login
        <label htmlFor="email">
          <input
            id="email"
            data-testid="email-input"
            type="text"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            data-testid="password-input"
            type="password"
            minLength="6"
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
