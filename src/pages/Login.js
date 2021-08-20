import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { func } from 'prop-types';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      psswrd: '',
      btnDsbl: true,
      redirect: false,
    };

    this.checkValidation = this.checkValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkValidation() {
    const { email, psswrd } = this.state;
    const minLgth = 6;
    const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i; // Source: https://mailtrap.io/blog/react-native-email-validation/
    if (regEx.test(email) && psswrd.length >= minLgth) this.setState({ btnDsbl: false });
    else this.setState({ btnDsbl: true });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value }, this.checkValidation);
  }

  handleClick(event) {
    event.preventDefault();
    const { add } = this.props;
    const { email } = this.state;
    add(email);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect, btnDsbl } = this.state;
    return (
      <div>
        {redirect && <Redirect to="/carteira" />}
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              id="email-input"
              name="email"
              data-testid="email-input"
              type="email"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="pass-input">
            Password:
            <input
              id="pass-input"
              name="password"
              data-testid="password-input"
              type="password"
              onChange={ this.handleChange }
            />
          </label>
          <button type="button" disabled={ btnDsbl } onClick={ this.handleClick }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (user) => dispatch(addUser(user)),
});

Login.propTypes = {
  add: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
