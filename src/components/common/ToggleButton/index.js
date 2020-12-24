import React, { Component } from 'react';

import './style.scss';

class ToggleButton extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      isChecked: null
    }
  }

  componentWillMount () {
		this.setState({ 
      isChecked: this.props.defaultChecked 
    });
  }
  
  handleChange = (e) => {
    let { name, onChange, id } = this.props,
      {value, checked} = e.target;
    onChange && onChange(checked, id);

    this.setState( { isChecked: !this.state.isChecked } );
  };
  
  render() {
    const { cName, onText, offText, defaultChecked, value, switchIcon, 
            onIcon, offIcon, onClassName, offClassName, ...others } = this.props;
    return (
      <label className="switch-button">
        <input {...others} 
          type="checkbox" 
          name="switch" 
          onChange={this.handleChange} 
          checked = {this.state.isChecked}
          value = {value} />
        <div className={`switch-slider switch-round ${this.state.isChecked ? onClassName : offClassName}`}>
          <span className="isChecked">{onText}</span>
          <span className="isUnChecked">{offText}</span>
        </div>
      </label>
    );
  }
}

export default ToggleButton;