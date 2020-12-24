import React, { Component } from "react";
// import cookie from 'react-cookies';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import get from "lodash/get";
import { toast } from "react-toastify";

import Button from "../../common/Button";
import InputElement from "../../common/Input";
import {
  uploadImage,
  deleteImage,
  updateUserDetails,
  viewProfile,
} from "../api/action";
import NoImgAvailable from "../../../assets/images/no_image.jpg";

import "./style.scss";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      roles: "",
      image: {
        id: null,
        path: "",
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadhandler();
  }

  loadhandler = async () => {
    // const authDetail = cookie.load('auth');
    // const { name, email, roles } = authDetail.data.user;

    const response = await this.props.viewProfile();
    // console.log(" viewprofile>>>", response.data);
    if (response && response.status) {
      const { name, email, roles, profilePicture } = response.data;
      let userRoles = [];
      roles.map((item) => {
        userRoles.push(item.name);
      });
      let profileImg = profilePicture
        ? { id: profilePicture.id, path: profilePicture.path }
        : this.state.image;
      this.setState({
        name,
        email,
        roles: userRoles.join(","),
        image: profileImg,
        isLoading: false,
      });
    }
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  fileUpload = async (e) => {
    const { name, files } = e.target;
    let data = new FormData();
    data.append("image", files[0]);
    // console.log("data>>",data.get("image"));

    // if (this.state.image.path && this.state.image.id) {
    //     await this.props.deleteImage(this.state.image.id)
    //     // const deleteResponse = await this.props.deleteImage(this.state.image.id);
    //     // if(deleteResponse){
    //     //     let payload = {...this.props.userProfile};
    //     //     payload.profilePicture = null;
    //     //     debugger;
    //     //     const res = await this.props.updateUserDetails(payload);
    //     //     console.log("<><><>",res);
    //     //     debugger;
    //     // }
    // }

    const response = await this.props.uploadImage(data, "USER_PROFILE_PICTURE");
    if (response && response.status) {
      this.setState({
        image: response.data,
      });
    }
  };

  handleUpdateProfile = async () => {
    // const userDetail = cookie.load('auth');
    const userDetail = await this.props.viewProfile();
    const { name, image } = this.state;
    let payload = { ...userDetail.data };
    payload.name = name;
    payload.profilePicture = { id: image.id };

    // console.log("userDetail", payload)

    const response = await this.props.updateUserDetails(payload);
    // console.log("update user details >>>", response)
    if (response && response.status) {
      toast.success('Your profile updated successfully');
      this.loadhandler();
    }
    else{
      toast.error('Your profile is not updated');
    }
  };

  myProfileLoader = () => {
    return (
      <>
        <div className="profileLoader">
          <div className="img-loader"></div>
          <div className="profile-rt-loader">
            <span className="profilebarLoader title-loader"></span>
            <span className="profilebarLoader"></span>
          </div>
        </div>
        <div className="userDetail-loader">
          <span className="profilebarLoader"></span>
          <span className="profilebarLoader"></span>
          <span className="profilebarLoader"></span>
          <span className="profilebarLoader btnLoader"></span>
        </div>
      </>
    );
  };

  render() {
    // const { auth } = this.props;
    const { name, email, roles, image, isLoading } = this.state;
    // console.log("*****",this.props.userProfile);
    return (
      <div className="userProfile innerContainer">
        {isLoading ? (
          this.myProfileLoader()
        ) : (
          <>
            <div className="profile">
              <img
                className="profileImg"
                src={`http://34.236.58.140/gateway/core/document?fileKey=${image.path}`}
                alt=""
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${NoImgAvailable}`;
                }}
              />
              <div className="profile-rt">
                <span>YOUR AVTAR</span>
                <label className="profileBtn" htmlFor="imgUpload">
                  CHANGE
                  <input
                    type="file"
                    id="imgUpload"
                    name="image"
                    onChange={this.fileUpload}
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>
            </div>
            <div className="userDetail">
              <InputElement
                type="text"
                name="name"
                id="userName"
                labelText="NAME"
                value={name}
                changeHandler={this.handleChange}
              />
              <InputElement
                type="email"
                name="email"
                id="userEmail"
                labelText="EMAIL"
                value={email}
                disabled={true}
                cName={"textDisable"}
              />
              <InputElement
                type="text"
                name="roles"
                id="userRoles"
                labelText="ROLES"
                value={roles}
                disabled={true}
                cName={"textDisable"}
              />
              <div className="actionBtn">
                <Button
                  cName="btn primary-btn submitBtn"
                  bValue="UPDATE"
                  clickHandler={this.handleUpdateProfile}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: get(state.userProfile, "userDetails", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        uploadImage,
        deleteImage,
        updateUserDetails,
        viewProfile,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
// export default UserProfile
