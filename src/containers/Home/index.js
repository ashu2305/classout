import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cookie from 'react-cookies';
import createRoute from '../../utils/createRoutes';
import Header from '../Header';
import MainNavigation from '../MainNavigation';
import { updateTheme } from '../../components/common/ThemeMode/APIs/action';
import LoginPanel from '../../components/LoginPanel';
import {MainContainer} from './style';
import Routes from '../../utils/routeConstants';

class Home extends Component {
  constructor(props) {
    super(props);
    let {
      history: {location: {pathname}},
      clearLoginState, auth, history
    } = props;

    // if (auth && auth.details && auth.details.status && auth !== undefined) {
    //   //clear for unmount
    //   history.push(`/${URL.DASHBOARD}`);
    // }
    this.state = {
      isAuth: true
    }
  }

  componentDidMount() {
    this.loadHandler();
  }

  loadHandler = () => {
    const {updateTheme} = this.props;
    updateTheme();
  }

  handleAfterLogin = () => {
    let {auth} = this.props;
    this.setState({
      isAuth: true
    })
    //this.props.history.push('/dashboard');
  }

  render() {
    const isDarkMode = this.props.darkMode;
    const {history, auth} = this.props;
    console.log(this.props);
    return (
        <React.Fragment>
          <MainContainer>
            <MainNavigation />
            <div className="content-container">
              <Header />
              <Routes />
            </div>
          </MainContainer>
        </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkMode: 'DARK_MODE',
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      updateTheme
    }, dispatch),
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
