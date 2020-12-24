import React, { Fragment } from 'react';

import './style.scss';
import ToggleButton from '../ToggleButton';

const Table = (props) => {
  const { showHead, rows, headings, showNumber } = props;
 
  return (
    <table className="table">
      {showHead && headings.length > 0 && 
        <thead>
          <tr>
            {headings && headings.map((heading, index) => {
                return <th key={index}>{heading.value}</th>
              })
            }
          </tr>
        </thead>
      }
      <tbody>
      {rows && rows.length ?
        rows.map((row, index) => {
            return (
                <tr key={index} id={row.id}>
                  
                  {headings.map((item, index) => { 
                      return <td key={index}>
                        {row[item.key] ? row[item.key] :
                        item.key === 'action' && <Fragment>
                          <ToggleButton checkedLabel='No' uncheckedLabel='Yes' />
                        </Fragment>}
                      
                    </td>
                  })
                  }
                </tr>
            )
        }) : <tr>
          <td colSpan={headings.length}>
            No Data Found
          </td>
        </tr>
      }  
      </tbody>     
    </table>
  );
};

export default Table;