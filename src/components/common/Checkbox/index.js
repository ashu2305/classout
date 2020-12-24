import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Checkbox = (props) => {
  const {id, isChecked, disabled, name, cName, labelText} = props;
  const onChange = (event) => {
    let { name, changeHandler } = props;
    let { checked } = event.target;
    changeHandler && changeHandler(name,checked,id);
};
  return (
    <div className="checkbox">
        <input type="checkbox"
          disabled={disabled}
          name={name}
          checked={isChecked}
          id={id}
          onChange={onChange}
          className={cName}
        />
        <label></label>
        <span className="checkbox-text">{labelText}</span>
    </div>
  );
};

Checkbox.propTypes = {
  labelText: PropTypes.string,
  changeHandler : PropTypes.func,
  checked : PropTypes.bool,
  disabled : PropTypes.bool,
  name : PropTypes.string,
  cName : PropTypes.string,
  id: PropTypes.number,
}

export default Checkbox;
