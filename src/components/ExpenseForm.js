import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies } from '../actions';

class ExpenseForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: '',
  //     description: '',
  //     currency: '',
  //     method: '',
  //     tag: '',
  //   };
  //   this.onChange = this.onChange.bind(this);
  // }

  // onChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currenciesList } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" name="value" type="text" onChange={ this.onChange } />
        </label>
        <label htmlFor="des">
          Descrição
          <textarea id="des" name="description" type="text" onChange={ this.onChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" onChange={ this.onChange }>
            { currenciesList.map((item) => (
              <option
                key={ item }
                value={ item }
              >
                { item }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ this.onChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.onChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesList: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchApiCurrencies()),
});

ExpenseForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currenciesList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
