import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';
import RegisterPanel from './components/RegisterPanel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/style.scss';
import LocalStorageServices from './utils/localstorage';
import './App.css';
import { MainContainer } from './containers/Home/style';
import MainNavigation from './containers/MainNavigation';
import Header from './containers/Header';
import Dashboard from './containers/Dashboard';
import Content from './containers/Content';
import ScheduleClass from './containers/ScheduleClass';
import Library from './containers/Library';
import Design from './containers/Design';
import Team from './containers/Team';
import Subscribers from './containers/Subscribers';
import Settings from './containers/Settings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" title="Dashboard">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header title="Dashboard" />
                <Dashboard />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/content" title="Dashboard">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header title="Content" />
                <Content />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/schedule-class" title="schedule-class">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header title="Class Schedule" />
                <ScheduleClass />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/library" title="library">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header title="Library" />
                <Library />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/design" title="Design">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header title="Design" />
                <Design />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/team" title="Team">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header />
                <Team />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/subscribe" title="subscribe">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header />
                <Subscribers />
              </div>
            </MainContainer>
          </PrivateRoute>
          <PrivateRoute path="/team" title="settings">
            <MainContainer>
              <MainNavigation />
              <div className="content-container">
                <Header />
                <Settings />
              </div>
            </MainContainer>
          </PrivateRoute>
          <Route path="/register">
            <RegisterPanel />
          </Route>
          <Route path="/">
            <LoginPanel />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				checkAuth() ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

function checkAuth() {
	return LocalStorageServices.getItem('TOKEN') ? true : false;
	// return true;
}
function mapStateToProps(state) {
  console.log('state-->>', state)
  return {
    auth:state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({

    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);

