import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../../actions';

class TipoMoeda extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <label htmlFor="teste-moeda">
          Moeda
          <select id="teste-moeda">
            { Object.values(currencies).map((currencie, index) => (
              <option value={ currencie } key={ index }>
                {currencie}
              </option>
            )) }
          </select>
        </label>

      </div>
    );
  }
}

TipoMoeda.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])),
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipoMoeda);
