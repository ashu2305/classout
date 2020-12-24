import React, { Component } from 'react'
import Select from '../SelectBox/index';
import ReactPaginate from 'react-paginate';
import './style.scss';

class Pagination extends Component {
    render() {

        const { changeHandler, pageCount, marginPagesDisplayed, pageRangeDisplayed, onPageChange, options } = this.props;
        return (
            <div className="pagination-footer">
                <div className="ftr-left">
                    <span>showing per page</span>
                    <Select
                        name='pageItem'
                        defaultOption={false}
                        options={options}
                        changeHandler={changeHandler}
                        class=""
                    />
                </div>
                <div className="ftr-right">
                    <ReactPaginate
                        previousClassName={pageCount > 5 ? 'showlabel' : 'hidelabel'}
                        nextClassName={pageCount > 5 ? 'showlabel' : 'hidelabel'}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        marginPagesDisplayed={marginPagesDisplayed}
                        pageRangeDisplayed={pageRangeDisplayed}
                        onPageChange={onPageChange}
                        pageClassName={'list-nmbr'}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        activeLinkClassName={'activeLink'} />
                </div>
            </div>
        )
    }
}

export default Pagination
