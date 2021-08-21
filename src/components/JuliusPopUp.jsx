import React from 'react';
import PropTypes from 'prop-types';
import troubledJuliusPopUp from '../img/troubled-julius-popup.png';

// prettier-ignore
export default class JuliusPopUp extends React.Component {
  render() {
    const { callback } = this.props;
    return (
      <div id="background-blur-popup">
        <button type="button" id="close-popup-btn" onClick={ () => callback() }>
          X
        </button>
        <div id="julius-popup">
          <img src={ troubledJuliusPopUp } alt="Julius" />
        </div>
      </div>
    );
  }
}

JuliusPopUp.propTypes = {
  callback: PropTypes.func.isRequired,
};
