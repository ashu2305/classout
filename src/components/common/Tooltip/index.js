import React, { Component } from 'react';
import './style.scss';

class Tooltip extends Component {

    render() {
        const { tooltiptext, innerText } = this.props;
        return (
            <div className="tooltip">
                {tooltiptext}
                {   innerText.length ?
                    <div className="tooltip-wrapper">
                        <span className={innerText.length > 5 ? 'tooltiptext scroll' : 'tooltiptext'}>
                            {innerText.map((item) => {
                                return <p className="innerText">{item.name}</p>
                            })}
                        </span>
                    </div>
                    : null
                }

            </div>
        )
    }
}
export default Tooltip;
