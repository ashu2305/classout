import React, { Component } from "react";

import Button from "../Button";
import Checkbox from "../Checkbox/index";
import Tooltip from "../Tooltip";
import NoImgAvailable from "../../../assets/images/no_img_available.png";
import "./style.scss";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDelete: false,
      idToDelete: -1,
      isUnpublish: false,
      idToUnpublish: -1,
    };
  }
  handleDeleteView = (id) => {
    const { isDelete } = this.state;
    if (isDelete) {
      this.setState({
        isDelete: !isDelete,
        idToDelete: -1,
      });
    } else {
      this.setState({
        isDelete: !isDelete,
        idToDelete: id,
      });
    }
  };

  handleUnpublishView = (id) => {
    console.log("is unpublish");
    const { isUnpublish } = this.state;
    if (isUnpublish) {
      this.setState({
        isUnpublish: !isUnpublish,
        idToUnpublish: -1,
      });
    } else {
      this.setState({
        isUnpublish: !isUnpublish,
        idToUnpublish: id,
      });
    }
  };

  handleUnpublish =()=>{
      this.props.handleUnpublishClick();
  }
  joinUrl = (string) => {
    return "http://34.236.58.140/gateway/core/document?fileKey=" + string;
  };
  render() {
    const { isDelete, isUnpublish } = this.state;
    let {
      date,
      time,
      thumbnail,
      title,
      category,
      handleViewClick,
      id,
      markSelected,
      handleUnpublishClick,
      handlePublishUnpublish,
      isButton,
      contentId,
      handleEdit,
      selected,
      cardType,
      published,
      handleDeleteContent
    } = this.props;
    return (
      <div
        className={`movieCard ${cardType === "small" ? "smallCard" : cardType === "LandScape"? 'landscape': ''  } ${!published? 'greyScale': ''} ${selected ? 'selected' : ''}`}
        id={id}
      >
        <div className={date ? "cardHeader" : "hideHeader"}>
          <span>{date}</span>
          <span>&middot;</span>
          <span>{time}</span>
        </div>
        <div className={`cardImage ${!thumbnail ? "no-img-available" : ""}`}>
          <div className="img-overlay">
            <img
                src={
                  thumbnail && thumbnail !== null
                      ? this.joinUrl(thumbnail)
                      : `${NoImgAvailable}`
                }
                alt="thumbnail"
                className="movieThumbnail"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${NoImgAvailable}`;
                  e.target.className = `no-img-available`;
                }}
            />
          </div>
          <div
            className={`buttons ${!isButton ? "hideMe" : ""} ${
              selected || isDelete || isUnpublish ? "selected" : ""
            }
            `}
          >
            <div className="buttons-header">
              <div className="checkBoxBtn">
                <Checkbox
                  cName="check-box"
                  id={id}
                  name={title}
                  isChecked={selected && true}
                  changeHandler={markSelected}
                />
                {/* <div className="icon-menu" onClick={()=>markSelected(id)}></div> */}
              </div>
              <div className="icons-btn">
                <div
                  className={`toolsBtn ${
                    published ? "icon-unpublish" : "icon-published"
                  }`}
                  onClick={this.handleUnpublishView}
                >
                  <span className="tooltiptext">
                    {published ? "Unpublish" : "Publish"}
                  </span>
                </div>
                <div
                  className="toolsBtn icon-edit"
                  onClick={() => handleEdit(contentId)}
                >
                  <span className="tooltiptext">Edit</span>
                </div>
                <div
                  className="toolsBtn icon-del"
                  onClick={() => this.handleDeleteView(id)}
                >
                  <span className="tooltiptext">Delete</span>
                </div>
              </div>
            </div>
            <div className="view-button">
              <Button
                clickHandler={handleViewClick}
                cName="btn viewBtn"
                bValue="View"
                bType="button"
              />
            </div>
            <div className={`deleteOptions ${isDelete ? "showPopUp" : ""}`}>
              <div className="del-text">
                <p>Delete this Movie?</p>
                <small>This cannot be undo.</small>
              </div>
              <div className="del-btn">
                <Button
                  clickHandler={()=>handleDeleteContent(id)}
                  cName="btn popup-del-btn"
                  bValue="Yes, Delete"
                  bType="button"
                />
                <Button
                  clickHandler={this.handleDeleteView}
                  cName="btn cancel-btn"
                  bValue="Cancel"
                  bType="button"
                />
              </div>
            </div>
            <div
              className={`unpublishOptions ${isUnpublish ? "showPopUp" : ""}`}
            >
              <div className="unpublish-text">
                <p>{published ? 'Unpublish this Movie ?' : 'Publish this Movie ?'}</p>
              </div>
              <div className="unpublish-btn">
                <Button
                  clickHandler={this.handleUnpublish}
                  cName="btn popup-btn"
                  bValue="Yes"
                  bType="button"
                  //clickHandler={handleUnpublishClick}
                />
                <Button
                  clickHandler={this.handleUnpublishView}
                  cName="btn cancel-btn"
                  bValue="Cancel"
                  bType="button"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="headings">
          <div className="subHeading">
            <p>{category}</p>
          </div>
          <div className="mainHeading">
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
