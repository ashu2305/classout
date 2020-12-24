import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Select = (props) => {
    let { label, options, name, value, required, defaultOption, cName, errMsg, selectedVal,defaultText, listRef } = props
    // if (!label || !options) {
    //     label = 'Role'   ;
    //     options = ['admin', 'user', 'superAdmin'];
    // }
    const handleChange = (event) => {
        let { name, changeHandler } = props;
        let { value } = event.target;
        changeHandler && changeHandler(name,value);
    }
    return (
        <div className={`select-box ${errMsg? `${cName} inputErr`: cName}`}>
            {
                label && <label htmlFor="selectBox">{label}<span style={{display: required? "inline": "none",color:"#ff2175",marginLeft:"5px"}}>*</span></label>
            }
            <select name={name} id="selectBox" value={value} onChange={handleChange} required={required} ref={listRef}>
                {
                    defaultOption && <option disabled={true} selected={!selectedVal&&true} value="">{defaultText? defaultText : '- Select -'}</option>
                }
                {
                    options && options.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
            {errMsg && <span className="err">{errMsg}</span>}
        </div>
    )
}

Select.propTypes = {
    changeHandler: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.any,
    value: PropTypes.any,
    label: PropTypes.string
}

export default Select;
