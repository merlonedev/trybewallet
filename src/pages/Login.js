import React, { Component } from 'react';
import Form from '../components/Form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Form email={ email } password={ password } handleChange={ this.handleChange } />
    );
  }
}

export default Login;
