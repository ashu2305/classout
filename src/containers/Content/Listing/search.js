import React from 'react';
import Select from 'react-select';
import Button from '../../../components/common/Button';

const Search = ({
    changeScreen,
    itemCount,
    filterListingData,
    filtertypeData
}) => {
    return (
        <div className="search-bar">
            <div className="total-items">{itemCount} Items</div>
            <div className="search-box">
                <input 
                className="form-control" 
                onChange={(e) => {
                    filterListingData(e);
                }} 
            />
            </div>
            <div className="filter">
                {/* <Select 
                     
                    options={[
                        { value: 'all', label: 'All' } , 
                        { value: 'EDUCATIONAL', label: 'Educational' },
                        { value: 'NON_EDUCATIONAL', label: 'Non-Educational' },
                        { value: 'LIVE_CLASS', label: 'Live Classes' } 
                    ]} 
                    onChange={(e) => {
                        filtertypeData(e);
                    }} 
                    isClearable={true}
                    classNamePrefix="select-menu"
                    className="select-menu"
                    placeholder="Filters"
                /> */}
                <Button 
                    bType="button"
                    bValue="Add New"
                    cName="btn btn-primary"
                    clickHandler={()=>{
                        changeScreen()
                    }}
                />
            </div>
        </div>
    )
}

export default Search;