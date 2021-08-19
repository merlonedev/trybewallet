import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionSaveEmail } from '../actions';

const minLenghPass = 6;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
    const { email } = this.state;
    const { userLogin } = this.props;
    userLogin(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          id="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          id="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !(email.match(/(.*)@(.*).com/)
              && password.length >= minLenghPass) }
            onClick={ this.handleChange }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(actionSaveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
