import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      moeda: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      describe: '',
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
    const { coins } = this.props;
    const { valor, moeda, method, tag, describe } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" onChange={ this.handleChange }>
            {coins.length === undefined ? '' : coins.map((item) => (
              <option key={ item }>{ item }</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="describe">
          Descrição
          <input id="describe" type="text" onChange={ this.handleChange } />
        </label>
        <Button
          valor={ valor }
          moeda={ moeda }
          method={ method }
          tag={ tag }
          describe={ describe }
        />
      </form>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
