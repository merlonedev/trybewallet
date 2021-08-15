import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: 0,
  isDisable: true,
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateInput());
  }

  validateInput() {
    const { password, email } = this.state;
    const validateEmail = /(.*)@(.*).com/;
    const minLength = 6;

    if (validateEmail.test(email) && password.length >= minLength) {
      this.setState({
        isDisable: false,
      });
      return true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      email: '',
      password: '',
      isDisable: false,
    }));
  }

  render() {
    const { password, isDisable, email } = this.state;
    const { saveUserProps } = this.props;
    return (
      <div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ isDisable }
              onClick={ () => saveUserProps(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  saveUserProps: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserProps: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
