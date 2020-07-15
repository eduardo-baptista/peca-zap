import React from 'react';
import { Switch } from 'react-router-dom';

// layouts
import AuthLayout from 'pages/layouts/Auth';

// pages
import Login from 'pages/Login';
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
    </Switch>
  );
};

export default Routes;
