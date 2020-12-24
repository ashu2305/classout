import React, { Component } from "react";
import './style.scss'

class Editable extends Component {
  state = {
    value: this.props.value,
    isInEditMode: false,
    editError: ''
  };

  handleChange = (event) => {
    let { name, changeHandler, dValue } = this.props;
    let { value } = event.target;
    this.setState({
      value,
    });
  };

  changeEditMode = () => {
    let { cancelHandler, name } = this.props;
    // cancelHandler(name);
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  updateComponentValue = () => {
    if( this.state.value.trim() !== '' ){
      this.setState({
        // value: this.props.value,
        isInEditMode: false,
        editError: ''
      });
      this.props.updateHandler(this.state.value, this.props.row);
    }
    else{
      this.setState({
        editError: "name is required"
      });
    }
    
  };

  renderEditView = () => {
    const { type, name, id, placeholder, value, cName, dValue } = this.props;
    return (
      <div className="form-input">
        <input
          type={type}
          name={name}
          id={id}
          autoFocus={true}
          className={cName}
          placeholder={placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          // defaultValue={dValue}
          onBlur={this.updateComponentValue}
        />
        <span className="error">{this.state.editError}</span>
      </div>
    );
  };

  renderDefaultView = () => {
    const { value } = this.props;
    return <div onDoubleClick={this.changeEditMode}>{value}</div>;
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Editable;
