import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  return (
    <Route path={route.path} exact={route.exact || false} render={props => {
    // pass the sub-routes down to keep nesting
      return (<route.component {...props} routes={route.routes} />)
    }} 
    />
  )
}

const createRoute = (routes) => (routes.map((route, i) => (
  <RouteWithSubRoutes key={i} {...route} />)
));

export default createRoute;