import React from 'react';
import Select from 'react-select';
import Button from '../../../../../components/common/Button';

const Search = ({
    totalSelected,
    addOnRail,
    itemCount,
    filterListingData
}) => {
    return (
        <div className="search-bar">
            <div className="total-items">{totalSelected} Items</div>
            <div className="search-box">
                <input 
                className="form-control" 
                onChange={(e) => {
                    filterListingData(e);
                }} 
            />
            </div>
            <div className="filter">
                <Select 
                    options={[]} 
                    isClearable={true}
                    classNamePrefix="select-menu"
                    className="select-menu"
                    placeholder="Filters"
                />
                <Button 
                    bType="button"
                    bValue="Add On Rail"
                    cName="btn btn-primary"
                    clickHandler={()=>{
                        addOnRail()
                    }}
                />
            </div>
            
        </div>
    )
}

export default Search;