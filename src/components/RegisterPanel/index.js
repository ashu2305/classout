import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {BrowserRouter, Link, withRouter} from "react-router-dom";
import SlideOne from '../../assets/images/slide1@2x.png';
import SlideTwo from '../../assets/images/slide2@2x.png';
import SlideThree from '../../assets/images/slide3@2x.png';
import BrandImage from '../../assets/images/virtur@2x.png';
import GoogleLogo from '../../assets/images/google@2x.png';
import FbLogo from '../../assets/images/fb@2x.png';
import LocalStorageServices from '../../utils/localstorage';

import { userSignup } from './APIs/action';
import './style.scss';
import Slider from "react-slick";
import LoginSlide from "../common/LoginSlide";
import Button from "../common/Button";
import InputElement from "../common/Input";


class RegisterPanel extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      email: "",
      error:{},
      password: "",
      mobileNumber: "",
       // isSMS: true,
       // isWhatsapp: true,
       // address: "",
       // designation: "",
       // organization: "",
       // userID: "", 
    }
  }

  resetSignupInitialState = () => {
    this.setState({
      name: "",
      email: "",
      error:{},
      password: "",
      mobileNumber: "",
       // isSMS: true,
       // isWhatsapp: true,
       // address: "",
       // designation: "",
       // organization: "",
       // userID: "", 
    });
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  handleKeyDown = (e)=>{
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }
  }

  vaildateEmail = () => {
    const {email} = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    let error = {}
    let flag = 1;
    if(!emailRegex.test(email)){
      error.isEmail = 'Please enter valid Email';
      flag = 0;
    }
    else{
      error.isEmail = '';
      flag=1;
    }
    this.setState({error});
    return flag;
  }

  validate = () => {
    const {email, password} = this.state;
    let error={};
    let flag = 1;

    if(!email && !password){
      error.isEmail = 'Please enter valid Email';
      error.isPass = 'Please enter your password';
      flag=0
    }
    else{
      if(!email){
        error.isEmail = 'Please enter valid Email';
        flag=0
      }
      if(!password){
        error.isPass = 'Please enter your password';
        flag=0
      }
    }

    this.setState({error});
    return flag;
  }

  onSubmit = async(e) => {
    e.preventDefault();
    const { name, email, password, mobileNumber} = this.state;
    const {singupError } = this.state;
    const { userSignup } = this.props;
    const payload = {
        name: name,
        email: email,
        password: password,
        mobileNumber: mobileNumber,    
        // address: address,
        // designation: designation,        
        // isSMS: isSMS,
        // isWhatsapp: isWhatsapp,   
        // organization: organization,        
        // userID: userID,
    };
    
    let validated = this.validate();
    if(!validated){
      return null;
    }
    this.setState({
      error: { isEmail:'', isPass:'' }
    });

    console.log(payload);
    const response = await userSignup(payload);
    if(response && response.status){
      LocalStorageServices.setItem('TOKEN',response.data.jwtToken.accessToken);
      this.props.history.push('/content');
    }else{
      this.setState(
        { signupError:'Something went wrong' }
      );
    }
  }


  render() {
    const { error } = this.state;
    
    return (
        <React.Fragment>
          {/* <LoginSlide/> */}
          <section className="right-section">
            <header className="sign-up-links d-flex justify-content-end align-items-center">
              <a>Already Registered?</a>
              <button type="button" className="btn btn-outline-primary" onClick={() =>  this.props.history.push('/')}>Login</button>
            </header>
            <div className="sign-in-form">
              <h3>Get started with Classout</h3>
              {/* <p>To Simple and easily convert your business into digital</p> */}
              <p className="errorMsg"> { this.state.signupError } </p>
              
                <InputElement
                      name="name"
                      placeholder="Full Name"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      errMsg={error.isName}
                      onKeyDown={this.handleKeyDown}
                  />
              {/* <div className="form-group">
                <InputElement
                      name="designation"
                      placeholder="Designation"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      errMsg={error.designation}
                  />
              </div> */}
              <div className="form-group">
                <InputElement
                      name="email"
                      placeholder="E-mail"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      onBlur={this.vaildateEmail}
                      errMsg={error.isEmail}
                      onKeyDown={this.handleKeyDown}
                  />
              </div>
              {/* <div className="form-group">
                <InputElement
                      name="address"
                      placeholder="Address"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      errMsg={error.address}
                  />
              </div> */}
              <div className="form-group">
                <InputElement
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      errMsg={error.mobileNumber}
                      onKeyDown={this.handleKeyDown}
                  />
              </div>
              {/* <div className="form-group">
                <InputElement
                      name="organization"
                      placeholder="Organization"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      errMsg={error.organization}
                  />
              </div> */}
              {/* <div className="form-group">
                <InputElement
                      name="userID"
                      placeholder="User Id"
                      cName="form-control"
                      changeHandler={this.handleChange}
                      errMsg={error.userID}
                  />
              </div> */}
              <div className="form-group">
                <InputElement
                    name="password"
                    placeholder="Password"
                    type="password"
                    cName="form-control"
                    changeHandler={this.handleChange}
                    onBlur={this.vaildateEmail}
                    errMsg={error.isPass}
                    onKeyDown={this.handleKeyDown}
                />
                <span className="eye"></span>
              </div>
              <Button
                  name="Register"
                  cName="btn btn-primary"
                  type="button"
                  bValue="Register"
                  clickHandler={this.onSubmit}
              />
              <p>By Registering, I agree to <a href="http://www.classout.co/register">Virtur’s</a> Terms of Service and Privacy Policy.</p>
            </div>
          </section>
        </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      userSignup
    }, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPanel));
