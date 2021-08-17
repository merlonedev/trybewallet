import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const fixNumber = 6;
      const { email, password, disabled } = this.state;
      const validEmail = /(.)(.*)@(.)(.*)\.(...)(.*)/;
      if (email.match(validEmail) && password.length >= fixNumber && disabled === true) {
        this.setState({ disabled: false });
      }
    });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { login } = this.props;
    const handleClick = () => {
      login(email);
    };
    return (
      <>
        <Input
          value={ email }
          type="text"
          testID="email-input"
          name="email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <Input
          value={ password }
          type="text"
          testID="password-input"
          name="password"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <Button
          to="/carteira"
          text="Entrar"
          onClick={ handleClick }
          disabled={ disabled }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
