import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Currency extends Component {
  render(){
    const { htmlFor, nome,
    array, id, onChange } = this.prop;
    return (
      <div>
        <label htmlFor={ htmlFor }>
          {nome}
          <select name={ nome } id={ id } onChange={ onChange }>
            {Object.keys(array).map((item) => (
              <option
                key={ item }
                value={ item }
              >
                { item }
              </option>
            ))}
          </select>
        </label> 
      </div>
    );
  }
}

Currency.propTypes = {
  htmlFor: Proptypes.string.isRequired,
  home: ProTypes.string.isRequired,
  array: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Currency;
