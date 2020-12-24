import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from '../components/LoginPanel';
import Register from '../components/RegisterPanel';
import Dashboard from "../containers/Dashboard";
import Content from '../containers/Content';
import ScheduleClass from '../containers/ScheduleClass';
import Library from "../containers/Library";
import Design from '../containers/Design';
import Team from "../containers/Team";
import Subscribers from '../containers/Subscribers';
import Settings from '../containers/Settings';

const Routes = () => {
  return (
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/register">
                  <Register />
              </Route>
              <Route path="/dashboard" title="Dashboard">
                  <Dashboard />
              </Route>
              <Route path="/content" title="Content">
                  <Content />
              </Route>
              <Route path="/schedule-class">
                  <ScheduleClass />
              </Route>
              <Route path="/library">
                  <Library />
              </Route>
              <Route path="/design">
                  <Design />
              </Route>
              <Route path="/team">
                      <Team />
              </Route>
              <Route path="/subscribe">
                  <Subscribers />
              </Route>
              <Route path="/settings">
                  <Settings />
              </Route>
          </Switch>
  )
}
export default Routes;
