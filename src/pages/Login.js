import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions';
import Button from '../components/Button';
import Input from '../components/Input';
import pattern from '../helpers/emailRegex';

const FIVE = 5;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // pattern baseado em: https://www.itsolutionstuff.com/post/react-email-validation-exampleexample.html

  handleChange(e) {
    const input = e.target;

    this.setState({
      [input.id]: input.value,
    }, () => {
      const { email, password } = this.state;
      if (password.length > FIVE && pattern.test(email)) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ redirect: true });
    const { state: { email } } = this;
    const { emailDispatch } = this.props;

    emailDispatch(email);
  }

  render() {
    const {
      state: {
        email,
        password,
        disabled,
        redirect,
      },
    } = this;
    return (
      <>
        {redirect && <Redirect to="/carteira" />}
        <form onSubmit={ this.handleSubmit }>
          <h2>Trybe Wallet</h2>
          <h3>Login de Usuário</h3>
          <Input
            htmlFor="input-email"
            id="email"
            placeholder="E-mail"
            type="email"
            value={ email }
            testId="email-input"
            onChange={ this.handleChange }
          />
          <Input
            htmlFor="input-password"
            id="password"
            placeholder="Senha"
            type="password"
            value={ password }
            testId="password-input"
            minLength="6"
            onChange={ this.handleChange }
          />
          <Button
            type="submit"
            testId="submit-button"
            disabled={ disabled }
          />
        </form>
      </>
    );
  }
}

const { func } = PropTypes;
Login.propTypes = {
  emailDispatch: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(addEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
