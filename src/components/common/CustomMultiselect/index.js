import React from 'react';
import Select from 'react-select';
import './style.scss';

function MultiSelect(props) {
    const handleChange = (selectedOptions,action) => {
        const { changeHandler, id } = props;
        if(selectedOptions){
            changeHandler(id,selectedOptions);
        }
        else{
            changeHandler(id,[]);
        }
    };
    const { options, label, required, id, placeholder, selectedOptions, isAutoFocus, errMsg, listRef } = props;
    return (
    <div className='multi-select-container'>
        {
            label && <label htmlFor={id}>
                {label}
                <span className={ required ? "required" : "notRequired"}>
                    *
                </span>
            </label>
        }
        <Select
            isMulti
            placeholder={placeholder}
            defaultValue={selectedOptions}
            // onChange={handleChange}
            ref={listRef}
            options={options}
            id={id}
            autoFocus= {isAutoFocus}
            className= {'multiSelect-container'}
            classNamePrefix= {'multiSelect'}
            getOptionLabel ={(options)=>options.name}
            getOptionValue ={(options)=>options.id}
        />
        {
            errMsg && <span className='err'>{errMsg}</span>
        }
    </div>
    );
}

export default MultiSelect;
