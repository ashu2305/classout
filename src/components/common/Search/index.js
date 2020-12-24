import React, { Component } from 'react';
import InputElement from '../Input/index'
import './style.scss'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false
    }
  }

  // handleOnClick = () => {
  //   const { isClick } = this.state;
  //   this.setState({ isClick: !isClick });
  // }

  render() {
    const { changeHandler, name, cName, placeholder, value } = this.props;
    const { isClick } = this.state
    return (
        <div className={'search-box'}>
          <InputElement
            id="search"
            type="text"
            changeHandler={changeHandler}
            name={name}
            cName={cName}
            placeholder={placeholder}
            value={value}
          />
        </div>
    );
  };
}

export default Search;