import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { fetchApi } from '../actions';

class FormsWallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
    this.getCoins = this.getCoins.bind(this);
    this.renderCoins = this.renderCoins.bind(this);
  }

  async componentDidMount() {
    await this.getCoins();
  }

  async getCoins() {
    const { requestApi } = this.props;
    await requestApi();
  }

  renderLoading() {
    const { isFetching } = this.props;
    if (isFetching) return <Loading />;
  }

  renderCoins() {
    const { resolveApi } = this.props;
    const resolveApiKeys = Object.keys(resolveApi);
    return resolveApiKeys.map((option, index) => (
      <option key={ `option${index}` }>{ option.code }</option>
    ));
  }

  renderForms() {
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input id="expense-value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input id="description" />
        </label>

        <label htmlFor="coin">
          Moeda
          <select id="coin">{ this.renderCoins() }</select>
        </label>

        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    this.renderLoading();
    return (this.renderForms());
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  resolveApi: state.fetchApi,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchApi()),
});

FormsWallet.propTypes = {
  isFetching: PropTypes.bool,
  requestApi: PropTypes.func.isRequired,
  resolveApi: PropTypes.shape({}).isRequired,
};

FormsWallet.defaultProps = {
  isFetching: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
