import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const TextArea = (props) => {
    const { rows, cols, name, id, placeholder, value, cName, labelText, required, wordCount, errMsg, listRef } = props;
    const onChange = (event) => {
        let { name, changeHandler } = props;
        let { value } = event.target;
        changeHandler && changeHandler(name,value);
    }
    return (
        <div className="FormTextarea">
            {
                labelText && <label htmlFor={name}>{labelText}<span style={{display: required? "inline": "none",color:"#ff2175",marginLeft:"5px"}}>*</span></label>
            }
            <textarea
                rows={rows}
                cols={cols}
                onChange={onChange}
                name={name}
                className={errMsg? `${cName} textareaErr`: cName}
                id={id}
                placeholder={placeholder}
                value={value}
                required={required}
                ref={listRef}
            />
            {wordCount&&<span className='count'>{wordCount}/1000</span>}
            {errMsg && <span className="err">{errMsg}</span>}
        </div>
    );
};

TextArea.propTypes = {
    rows: PropTypes.number,
    cols: PropTypes.number,
    changeHandler: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.any,
    value: PropTypes.any,
    cName: PropTypes.string,
    labelText: PropTypes.string
}

export default TextArea;