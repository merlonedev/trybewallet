import React from 'react';
import PropTypes from 'prop-types';

class Descrição extends React.Component {
  render() {
    const { description, handlechange } = this.props;
    return (
      <div>
        <label htmlFor="description">
          Descrição:
          <input
            value={ description }
            onChange={ handlechange }
            id="description"
            type="text"
            name="descricao"
          />
        </label>
      </div>
    );
  }
}

Descrição.propTypes = {
  handlechange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default Descrição;
