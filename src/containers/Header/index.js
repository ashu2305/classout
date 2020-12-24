import React , {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import {HeaderWrapper} from './style';
import Notification from '../../assets/images/icons/notification.png';
import UserImage from '../../assets/images/manual.png';
import Button from '../../components/common/Button';
import { logoutUser } from '../../components/LoginPanel/APIs/action'

class Header extends Component {
    constructor(props){
        super(props);
        this.state  = {
            show: false,
        }
        this.showProfile = this.showProfile.bind(this);
        this.closeProfile = this.closeProfile.bind(this);
    }
    logout = async() =>{
        const res = await logoutUser();
        this.props.history.push('/login');
    }

    showProfile (e) {
        e.preventDefault();
        this.setState({ show: true }, () => {
            document.addEventListener('click', this.closeProfile);
          });
    }

    closeProfile() {
        this.setState({ show: false }, () => {
          document.removeEventListener('click', this.closeProfile);
        });
      }
    
    
    render(){
        return (
            <HeaderWrapper className="main-header d-flex justify-content-between align-items-center">
                <h1>{this.props.title}</h1>
                <div className="header-right d-flex align-items-center">
                    <div className="notification">
                        <span className="status"></span>
                        <img src={Notification} alt="Notification" />
                    </div>
                    <div className="profile">
                        <div onClick={this.showProfile} className = "dropbtn">
                        <img src={UserImage} alt="Profile"    /> 
                         </div>

                        {this.state.show? (
                            <div className = "dropdownx">
                                
                                <Button
                                    bType="button"
                                    bValue="Log Out"
                                    cName="btn btn-outline-primary"
                                    clickHandler={()=> {this.logout()}}
                                />
                                <Button
                                    bType="button"
                                    bValue="Profile"
                                    cName="btn btn-outline-primary"
                                />
                            </div>
                        ):(null)}
                    </div>
                </div>
            </HeaderWrapper>
        
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators({
        logoutUser
      }, dispatch),
    }
  }
  
  export default withRouter(connect( mapDispatchToProps)(Header));
  