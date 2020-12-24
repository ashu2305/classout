import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const InputElement = (props) => {
    const { type, name, id, placeholder, value, cName, labelText, required, errMsg, listRef } = props;
    const onChange = (event) => {
        let { name, changeHandler } = props;
        let { value } = event.target;
        changeHandler && changeHandler(name,value);
    }
    return (
        <div className="form-group">
            {
                labelText && <label htmlFor={id}>{labelText}<span style={{display: required? "inline": "none",color:"#ff2175",marginLeft:"5px"}}>*</span></label>
            }
            <input
                required={required}
                type={type}
                onChange={onChange}
                name={name}
                className={errMsg? `${cName} error`: cName}
                id={id}
                placeholder={placeholder}
                value={value}
                autoComplete="off"
                ref={listRef}
                onKeyDown={props.onKeyDown}
                
            />
            {errMsg && <span className="error-msg">{errMsg}</span>}
        </div>
    );
};

InputElement.propTypes = {
    type: PropTypes.string,
    changeHandler: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.any,
    value: PropTypes.any,
    cName: PropTypes.string,
    labelText: PropTypes.string
}

export default InputElement;
