import React, {Component} from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./style.scss";

class MultiSelectBox extends Component {

  // componentDidMount() {
  //   //fix for multiple browser support
  //   const multiSelectDom = document.querySelectorAll("#multiselectContainerReact #multi-select-dropdown");
  //   const optionList = document.querySelectorAll("#multiselectContainerReact .optionListContainer");
  //   for (let i = 0; i < multiSelectDom.length; i++) {
  //     multiSelectDom[i].addEventListener("click",(e)=>{
  //       e.stopPropagation();
  //       optionList[i].style.display = 'block';
  //     });
  //     multiSelectDom[i].addEventListener("blur",(e)=>{
  //       e.stopPropagation();
  //       setTimeout(()=>{
  //         optionList[i].style.display = 'none';
  //       },500);
  //     });
  //   }
  // }

  render() {
    const { label, id, handleChange, required, options, isObject, displayValue, placeholder, showCheckbox } = this.props;
    const style = {
      chips: {
        // "font-size": "12px",
        // "font-weight": "600",
        // "font-stretch": "normal",
        // "font-style": "normal",
        // "letter-spacing": "normal",
        // "text-align": "left",
        // color: " #287a5d",
        // border: "solid 1px #bed5f7",
        // "border-radius": "3px",
        // padding: "10px",
        // backgroundColor: "#e8f6f1",
        display: "none"
      },
      searchBox: {
        border:'none',
        padding: '0px'
        // border: "solid 1px #bed5f7",
        // "border-radius": "0px",
      },
      inputField: {
        "border-radius": "2px",
        // "padding": "10px",
        "font-size": "12px",
        "text-align": "left",
        color: "#171a1f",
        "display": "block",
        width: "-webkit-fill-available"
      },
      option: {
        backgroundColor:"transparent",
        'color': "black",
        padding: "0px 10px",
        textTransform: "capitalize",
        display: "flex",
        alignItems:"center",
        marginTop: "5px",
        marginBottom: "5px",
        fontSize: "13px",
        fontFamily:`'Montserrat-Regular', sans-serif`
      },
      optionContainer: {
        // width:'10%',
        "border-radius": "0px",
        border:"none",
        "box-shadow": "4.3px 7.4px 19.4px 2.2px rgba(214, 224, 244, 0.74)"

      }
    };

    const onSelect = (values) => {
      console.log('onSelect',values, values.length);
      handleChange(values);
    };
    const onRemove = (values) => {
      console.log('onRemove',values, values.length);
      handleChange(values);
    };

    return (
        <div className="selectBox-container">
          {
            !this.props.isLabel? null: label && (
                <label htmlFor={id}>
                  {label}
                  <span
                      style={{ display: required ? "inline" : "none", color: "#ff2175" }}
                  >
            *
          </span>
                </label>
            )}
          <div className="select-input">
            <Multiselect
                options ={ options}
                isObject = {isObject}
                displayValue = {displayValue}
                style = {style}
                id="multi-select-dropdown"
                placeholder = {placeholder}
                showCheckbox={showCheckbox}
                closeOnSelect={false}
                onSelect = {onSelect}
                onRemove = {onRemove}
            />
          </div>
        </div>
    )
  }
}

export default MultiSelectBox;
