import React from 'react'
import MaskedInput from 'react-maskedinput'
import './style.scss'

const CustomInput = (props) => {
    const { mask, placeholder, size, name, changeHandler, labelText, required, id } = props
    console.log("changeHandler", changeHandler)
    return (
        <div className="customInput">
            {
                labelText && <label htmlFor={id}>{labelText}<span style={{ display: required ? "inline" : "none", color: "#ff2175" }}>*</span></label>
            }
            <MaskedInput
                id={id}
                mask={mask}
                placeholder={placeholder}
                size={size}
                name={name}
                onChange={changeHandler}
            // formatCharacters={{
            //     'W': {
            //         validate(char) { return /\w/.test(char) },
            //         transform(char) { return char.toUpperCase() }
            //     }
            // }}
            />
        </div>
    )
}

export default CustomInput
