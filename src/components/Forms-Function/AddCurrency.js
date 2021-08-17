import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddCurrency extends React.Component {
  render() {
    const { wallet: { currencies }, value, handleChange } = this.props;
    // console.log(Object.values(currencies));
    return (
      <label htmlFor="Moeda">
        Moeda
        <select
          id="Moeda"
          name="currency"
          value={ value }
          alt="Moeda"
          onChange={ handleChange }
        >
          { Object.values(currencies).map((currencie, index) => (
            <option value={ currencie } key={ index }>
              {currencie}
            </option>
          )) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({ wallet: state.wallet });

AddCurrency.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.shape(),
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
  }),
}.isRequired;

export default connect(mapStateToProps, null)(AddCurrency);
