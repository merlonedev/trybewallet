import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { TAGS, PAYMENT } from '../data';
import { fetchCoins, sendValuesToStore } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      coin: 'USD',
      payment: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getStateValues = this.getStateValues.bind(this);
  }

  componentDidMount() {
    const { setCoins } = this.props;
    setCoins();
  }

  getStateValues() {
    const { sendValues } = this.props;
    sendValues(this.state);
    this.setState({
      valor: '',
      coin: 'USD',
      payment: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { valor, coin, payment, description, tag } = this.state;
    return (
      <div>
        <form>
          <Header />
          <Input
            name="valor"
            text="Valor"
            handleChange={ this.handleChange }
            value={ valor }
          />
          <Select
            name="coin"
            text="Moeda"
            content={ currencies }
            handleChange={ this.handleChange }
            value={ coin }
          />
          <Select
            name="payment"
            text="Método de Pagamento"
            content={ PAYMENT }
            handleChange={ this.handleChange }
            value={ payment }
          />
          <Input
            name="description"
            text="Descrição"
            handleChange={ this.handleChange }
            value={ description }
          />
          <Select
            name="tag"
            text="Tag:"
            content={ TAGS }
            handleChange={ this.handleChange }
            value={ tag }
          />
          <button type="button" onClick={ this.getStateValues }>Adicionar Despesa</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCoins: () => dispatch(fetchCoins()),
  sendValues: (values) => dispatch(sendValuesToStore(values)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  sendValues: PropTypes.func.isRequired,
  setCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
