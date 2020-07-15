import React from 'react';
import {
  Route as BaseRoute,
  Redirect,
  RouteProps as BaseRouteProps,
} from 'react-router-dom';

interface RouteProps extends BaseRouteProps {
  isPrivate: boolean;
  layout: React.FC;
  component: React.FC;
}

const Route: React.FC<RouteProps> = ({
  isPrivate,
  layout: Layout,
  component: Component,
  ...rest
}) => {
  const signed = false;

  if (isPrivate && !signed) return <Redirect to="/" />;

  return (
    <BaseRoute {...rest}>
      <Layout>
        <Component />
      </Layout>
    </BaseRoute>
  );
};

export default Route;
