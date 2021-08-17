import React from 'react';
import './Wallet.css';
import Input from '../components/Input';
import Select from '../components/Select';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      coin: 'USD',
      tag: 'Alimentação',
      money: 'Dinheiro',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Header />
        <Select />
      </>
    );
  }
}

export default Wallet;
