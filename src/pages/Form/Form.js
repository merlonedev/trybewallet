import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPricesAction } from '../../actions';
import Valor from './Valor';
import Descrição from './Descrição';
import Pagamento from './Pagamento';
import Tag from './Tag';
import Moeda from './Moeda';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
    };
    this.handlechange = this.handlechange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
  }

  handlechange({ target }) {
    const { name, value } = target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  }

  addExpenses() {
    const { value, currency, method, description, tag } = this.state;
    const { getPrice } = this.props;
    getPrice({ value, currency, method, description, tag });
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
    });
  }

  render() {
    const { value, currency, method, description, tag } = this.state;
    return (
      <form>
        <Valor value={ value } handlechange={ this.handlechange } />
        <Moeda value={ currency } handlechange={ this.handlechange } />
        <Pagamento value={ method } handlechange={ this.handlechange } />
        <Descrição value={ description } handlechange={ this.handlechange } />
        <Tag value={ tag } handlechange={ this.handlechange } />
        <button type="button" onClick={ this.addExpenses }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  getPrice: (state) => dispatch(fetchPricesAction(state)),
});

Form.propTypes = {
  getPrice: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchtoProps)(Form);
