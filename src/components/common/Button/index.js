import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Button = (props) => {
  const {disabled, cName, clickHandler, bType, leftIcon, rightIcon, bValue} = props;
  return (
    <button 
      disabled={disabled} 
      className={cName}
      onClick={clickHandler}
      type={bType}>
        {leftIcon && <i className={leftIcon}></i>}
        <span className='button-text'>{bValue}</span>
        {rightIcon && <i className={rightIcon}></i>}
    </button>
  );
};

Button.propTypes = {
  cName: PropTypes.string,
  bType: PropTypes.string,
  bIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bValue: PropTypes.string,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export default Button;