import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {BrowserRouter, Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import { toast } from "react-toastify";
import GoogleLogo from '../../assets/images/google@2x.png';
import FbLogo from '../../assets/images/fb@2x.png';
import ForgotPassword from "./ForgotPassword";
import { userLogin, clearLoginState, forgotPassword } from './APIs/action';
import '../../styles/style.scss';
import InputElement from "../common/Input";
import Button from "../common/Button";
import LoginSlide from "../common/LoginSlide";
import LocalStorageServices from '../../utils/localstorage';


class LoginPanel extends Component {
  constructor(props){
    super(props);
   // let { history: { location: { pathname } },
     let { clearLoginState, auth, history } = props;
    
    if (auth && auth.details && auth.details.status && auth !== undefined) {
      //clear for unmount
      history.push(`/content`);
    }
    // else {
    //   history.push(`/`);
    // }
    if(LocalStorageServices.getItem('TOKEN')){
      this.props.history.push('/content');
    }
    this.state = {
      email: '',
      password: '',
      isAuth: false,
      isForgotPasswod: false,
      isSecreteLink: false,
      loginError:'',
      error:{}
    }

    //const { history } = this.props;
  }

  resetLoginInitialState = () => {
    this.setState({
      email: '',
      password: '',
    });
  };


  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }


  goToLogin = () =>{
    this.props.history.push('login');
  }

  goToRegister = () =>{
    this.props.history.push('/register');
  }
  goToForgotPassword = ()=>{
    this.setState({isForgotPasswod:true});    
  }
  backToLogin = ()=>{
    this.setState({isForgotPasswod:false}); 
  }
  handleKeyDown = (e)=>{
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }

  }
  onSubmit = async(e) => {
    e.preventDefault();
    const {email, password } = this.state;
    const {loginError } = this.state;
    const { userLogin } = this.props;
    const payload = {
      email,
      password
    };
    
    let validated = this.validate();
    if(!validated){
      return null;
    }
    this.setState({
      error: { isEmail:'', isPass:'' }
    });

    const response = await userLogin(payload);
    if(response && response.status){
      LocalStorageServices.setItem('TOKEN',response.data.jwtToken.accessToken);
      this.props.history.push('/content');
    }else{
      this.setState(
        { loginError:'Invalid username/password, please try again' }
      );
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

  render() {
    const { isForgotPasswod, isSecreteLink, error } = this.state;
    return (
        <>
          {isForgotPasswod?<ForgotPassword backToLogin={this.backToLogin}/>:
            <React.Fragment>
          {/* <LoginSlide/> */}
          <section className="right-section">
            <header className="sign-up-links d-flex justify-content-end align-items-center">
              <a>Don’t have an account?</a>
              <button type="button" className="btn btn-outline-primary" onClick={() => this.goToRegister()}>Register</button>
            </header>
            <div className="sign-in-form">
              <h3>Sign In</h3>
              {/* <p>To Boost your business with us</p> */}
              <p className="errorMsg"> { this.state.loginError } </p>
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
              </div>
              <div className="forget" onClick={() => this.goToForgotPassword()}>
                <a href>Forgot Your Password?</a>
              </div>
              <Button
                  name="Sign In"
                  cName="btn btn-primary"
                  type="button"
                  bValue="Sign In"
                  clickHandler={this.onSubmit}
              />
              {/*<button type="button" className="btn btn-primary">Sign In</button>*/}
              {/* <div className="sign-in-social">
                <span>or Sign in with</span>
                <div className="btn-group">
                  <a className="btn btn-primary btn-fb"><img src={FbLogo} alt="Facebook"/>Facebook</a>
                  <a className="btn btn-primary btn-google"><img src={GoogleLogo} alt="Facebook"/>Google</a>
                </div>
              </div> */}
            </div>
          </section>
  
        </React.Fragment>
          }
          </>
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
      userLogin,
      clearLoginState,
      forgotPassword
    }, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPanel));
