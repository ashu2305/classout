import React, { Component } from 'react';

import UserProfile from '../UserProfile';
import ForgotPassword from '../ForgotPassword';

import './style.scss';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: true
        }
    }

    handleClick = (clickType) => {
        const { isClick } = this.state;
        if (clickType === "UserProfile" && !isClick) {
            this.setState({ isClick: !isClick });
        }
        if (clickType === "ForgotPassword" && isClick) {
            this.setState({ isClick: !isClick });
        }
    }

    render() {
        const { isClick } = this.state;
        return (
            <div className="vd-myprofile">
                <div className="vr-cont-head mb">
                    <div className="vr-cont-title">
                        <h2 className="breadcrum-header">MY PROFILE</h2>
                    </div>
                </div>
                <div className="vr-content-holder">
                    <header className="myprofile-header">
                        <span className={isClick && `active`} onClick={() => this.handleClick("UserProfile")}>my profile</span>
                        <span className={!isClick && `active`} onClick={() => this.handleClick("ForgotPassword")}>password</span>
                    </header>
                    <div className="myprofile-container">
                        {isClick ?
                            <UserProfile />
                            :
                            <ForgotPassword />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile
