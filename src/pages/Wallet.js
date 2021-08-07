import React from 'react';
import WalletHead from '../components/WalletHead';
import ValueInput from '../components/WalletForm/ValueInput';
import DescribeInput from '../components/WalletForm/DescribeInput';
import CurrencySelect from '../components/WalletForm/CurrencySelect';
import PaymentSelect from '../components/WalletForm/PaymentSelect';
import TagSelect from '../components/WalletForm/TagSelect';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <WalletHead />
        <form>
          <ValueInput value={ value } onChange={ this.handleChange } />
          <DescribeInput value={ description } onChange={ this.handleChange } />
          <CurrencySelect value={ currency } onChange={ this.handleChange } />
          <PaymentSelect value={ method } onChange={ this.handleChange } />
          <TagSelect value={ tag } onChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default Wallet;
