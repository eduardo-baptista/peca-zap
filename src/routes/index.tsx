import React from 'react';
import { Switch, Route as BaseRoute, Redirect } from 'react-router-dom';

// layouts
import AuthLayout from 'pages/layouts/Auth';
import AppLayout from 'pages/layouts/App';

// pages
import Login from 'pages/Login';
import App from 'pages/App';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        isPrivate={false}
        layout={AuthLayout}
        component={Login}
      />

      <Route path="/app" isPrivate layout={AppLayout} component={App} />

      <BaseRoute path="*">
        <Redirect to="/" />
      </BaseRoute>
    </Switch>
  );
};

export default Routes;
