import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CustomRoute({
  component: Component,
  isClosed,
  ...rest
}) {
  // Add isClosed to private routes and change isLoggedIn
  // to true to allow access
  const isLoggedIn = true;

  if (isClosed && !isLoggedIn) return <Redirect to="/login" />;

  return <Route path={rest.path} exact={rest.exact} component={Component} />;
}

CustomRoute.defaultProps = {
  isClosed: false
};

CustomRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool
};
