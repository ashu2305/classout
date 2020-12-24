import React, { Component } from 'react';
import Slider from "react-slick";
import CountUp from 'react-countup';

import Select from '../../common/SelectBox';
import {toLocaleString} from '../../../utils/common';
import Filter from '../../common/Filter';
import {publishedFilterList, contentFilterList} from '../api/constant';
import {parseNumber} from '../../../utils/common';


import './style.scss'

class MostViewedContent extends Component {
    state = {
        list: [...this.props.contentList],
        activeIndex:0
    }

    onChangePublishFilter = (name, value) => {
        console.log("name,value>>",name , value)
        this.props.filterChangeHandler(value, 'selectedPublishFilter');
    };

    onChangeContentFilter = (name, value) => {
        console.log("name,value>>",name , value)
        this.props.filterChangeHandler(value, 'selectedContentType');
        };

    handleOnclick = (menuItem,itemIndex) => {
        // const {menuItem} = this.props
        console.log("menuitem", menuItem);
        this.setState({
            list: this.props.VOD,
            activeIndex: itemIndex
        })
    }

    formatNumber=(value)=>{
        return toLocaleString(value)
    }

    render() {
        const {activeIndex} = this.state;
        const { subHead, contentList, navMenuItems, selectedContentType } = this.props;
        const gradientBarWidth = [12,100,83,74,100,83,74];
        const settings = {
            className: "slider variable-width",
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true
        };



        const arrowSettings = navMenuItems.length > 3 ? {...settings} : {...settings, prevArrow: false,
            nextArrow: false}
        return (
            <div className="mvc-box">
                <div className="mvc-header">
                    {/* <h3>Most Viewed Content</h3> */}
                    <div className="header-filter">
                        {/* <Select
                            cName="mvp-filterOne"
                            options={[{id: 1, name:'published'},{ id:2, name:'unpublished'}]}
                            name="publish"
                        /> */}
                         <Filter
                            text="Published"
                            id="publishFilter"
                            defaultValue="published"
                            filterList={publishedFilterList}
                            changeHandler={this.onChangePublishFilter}
                            />
                        <p className="content-dropdown">
                            <span className="content-label">Content in</span>
                         <Filter
                            text="Genre"
                            id="contentFilter"
                            defaultValue="GENRE"
                            filterList={contentFilterList}
                            changeHandler={this.onChangeContentFilter}
                            />
                            {/* <Select
                                cName="mvp-filterTwo"
                                options={[{ id:1, name:'Genre'}, { id:2, name:'Live tv'}, { id:3, name:'vod'}]}
                                name="publish"
                            /> */}
                        </p>
                    </div>
                    <div className={navMenuItems.length  ? "custom_slider" : 'menuItem'}>
                        <Slider {...arrowSettings}>
                            {navMenuItems.map((menuItem, index) =>
                                (
                                    <span className={`slide-item-title ${index === activeIndex ? 'active-tab':''}`} key={index} onClick={() => this.handleOnclick(menuItem, index)}>
                                        {menuItem.labelName.replace("_"," ")}
                                    </span>
                                )
                            )}
                        </Slider>
                    </div>
                </div>

                <table className="slider-tab-table">
                    <thead>
                        <tr>
                            <th>{selectedContentType} name</th>
                            <th></th>
                            <th>Numbers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentList.map((itemList, index) => (
                            <tr key={index}>
                                <td> {itemList.name}</td>
                                <td><span className="gradient_bar" style={{ width: itemList.gradientBarWidth}} /></td>
                                <td>
                                    <div className="total-views">
                                        <CountUp
                                            end={parseNumber(itemList.count)}
                                            duration={2}
                                            formattingFn={this.formatNumber}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default MostViewedContent;
