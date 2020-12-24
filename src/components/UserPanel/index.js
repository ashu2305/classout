import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import cookie from 'react-cookies';
import MyProfile from './MyProfile';

import { logoutUser } from '../LoginPanel/APIs/action';
import {viewProfile} from './api/action';
import './style.scss';

const User = (props) => {
  // const backgroundValue = '';

  useEffect(() => {
    props.viewProfile()

  }, [])

  // let profilePic = {
  //   backgroundImage : `url(${backgroundValue})`,
  // };

  const onLogout = async () => {
    const { logoutUser, history } = props;
    await logoutUser();
    let { auth } = props;
    const logoutUrl = '/';
    !cookie.load('accessToken') &&  history.push(logoutUrl);
  }

  const { details, auth, userProfile } = props;
  const userName = cookie.load('auth').data.user.name;

  let backgroundValue ;
  if(userProfile && userProfile.profilePicture){
    backgroundValue = `http://34.236.58.140/gateway/core/document?fileKey=${userProfile.profilePicture.path}`;
  }

  let profilePic = {
    backgroundImage : `url(${backgroundValue})`
  };
  return (
    <div className="vr-user-panel">
      <span className="user-icon" style={profilePic}>
        <span className="profile-image">
          <i className="icon-profile" />
        </span>
      </span>
      <ul className="menu-dropdown">
        <li>
          <div className="user">
            <span className="user-name">
              {userProfile && userProfile.name}
            </span>
            <i className="up-down-arrow">
              <svg width="20" height="13">
                <path fill="none" fillRule="evenodd" stroke="#5B539A" opacity=".6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2" d="M5.063 2.102L9.942 7.45l3.904-5.348"/>
              </svg>
            </i>
          </div>
          <ul className="menu-dropdown-list">
            <li>
              <Link to={'/myprofile'}> MY PROFILE </Link>
            </li>
          <li onClick={onLogout}>SIGN OUT</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
   auth: state.auth,
   userProfile: {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({
        logoutUser,
        viewProfile
    }, dispatch),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(User);
