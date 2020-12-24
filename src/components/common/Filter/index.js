import React, { Component } from 'react';
import Search from '../Search';

import './style.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.node = {}
    this.state = {
      showItem: '',
      isClick: false,
      FilterList: [],
      searchedText: ''
    }
  }

  componentDidMount() {
    this.loadHandler()
  }

  loadHandler = () => {
    this.setState({
      FilterList: this.props.filterList
    })
  }

  onChangeSearch = (name, value) => {
    // let tempArr = this.props.filterList;
    // let SearchValue = value.toUpperCase();
    // let result = tempArr.filter((item)=>{
    //   return (item.name.toUpperCase().indexOf(SearchValue) > -1)
    // });
    // this.setState({
    //   FilterList: result
    // })
    this.setState({
      searchedText: value
    })
  }

  handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (this.node && this.node.contains(e.target)) {
      return;
    }

    this.toggleIsClick();
  }


  toggleIsClick = () => {
    if (!this.state.isClick) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    // const {filterList, defaultValue, text} = this.props;
    //   let tempArr = filterList;
    //   if(tempArr.length > this.state.FilterList.length){
    //     tempArr.unshift({id: defaultValue, name: text})
    //   }
    this.setState({
      isClick: !this.state.isClick,
      // FilterList: tempArr
    })
  }

  optionClick = (e, value) => {
    const { changeHandler, id } = this.props;
    let name = e.currentTarget.textContent;
    this.setState({ showItem: name });
    changeHandler && changeHandler(id, value);
    this.toggleIsClick()
  }


  render() {
    const { filterList, text, defaultValue, selectedValue } = this.props;
    const { showItem, isClick, FilterList, searchedText } = this.state;
    const list = filterList
      .filter(name => {
        return name.name.toLowerCase().indexOf(searchedText.toLowerCase()) >= 0;
      })
      .map((list, index) => {
        return (
          <li
            onClick={(e, value) => this.optionClick(e, list.id)}
            key={index}
            value={list.id}
          >
            {list.name}
          </li>
        )
      })
    return (
      <div className="filter-dropdown" ref={node => { this.node = node; }}>
        <label  htmlFor="userFilter">
          <span onClick={this.toggleIsClick} className="filter-title">
            {(selectedValue && !showItem) ? selectedValue : showItem ? showItem : text}
          </span>
          <div id="userFilter" className={`menu ${isClick ? "showMenu" : "hideMenu"} ${filterList.length > 5 && "scroll"} `}>
            {
              filterList.length > 5 &&
              <Search
                  name="searchFilter"
                  placeholder="Search.."
                  changeHandler={this.onChangeSearch}
              />
            }
            <ul className="dropdown-items">
              <li onClick={(e,value)=>this.optionClick(e,defaultValue)} value={ defaultValue }>{text} </li>
              {/* {FilterList.map((list, index) => {
              return <li
                onClick={(e,value)=>this.optionClick(e,list.id)}
                key={index}
                value={list.id}
              >
                {list.name}
              </li>
            })} */}
              {list}
            </ul>
          </div>
          <i className="up-down-arrow" onClick={this.toggleIsClick}>
            <svg viewBox="0 0 20.5 13.5" width="12" height="8">
              <path fill="none" fillRule="evenodd" stroke="#5B539A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3" d="M5.063 2.102L9.942 7.45l3.904-5.348"/>
            </svg>
          </i>
        </label>
      </div>
    );
  }
}

export default Filter;
