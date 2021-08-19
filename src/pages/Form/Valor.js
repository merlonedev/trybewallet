import React from 'react';
import PropTypes from 'prop-types';

class Valor extends React.Component {
  render() {
    const { value, handlechange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            value={ value }
            onChange={ handlechange }
            id="value"
            type="text"
            name="value"
          />
        </label>
      </div>
    );
  }
}

Valor.propTypes = {
  handlechange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Valor;
