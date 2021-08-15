import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';
import Form from '../components/Form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleVerifyInput = this.verifyLoginInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyLoginInput());
  }

  verifyLoginInput() {
    const { email, password } = this.state;
    const regex = new RegExp('^[a-z0-9]+@[a-z0-9]+.com');
    const loginInput = regex.test(email);
    const minPasswordLength = 6;
    const isLoginValid = loginInput && password.length >= minPasswordLength;
    this.setState({ disabled: !isLoginValid });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { setLoginState } = this.props;
    return (
      <div>
        <Form
          email={ email }
          password={ password }
          handleChange={ this.handleChange }
          disabled={ disabled }
          handleClick={ () => setLoginState(this.state) }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLoginState: (state) => dispatch(userLogin(state)),
});

Login.propTypes = {
  userLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
