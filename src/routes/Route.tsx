import React from 'react';
import {
  Route as BaseRoute,
  Redirect,
  RouteProps as BaseRouteProps,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authState } from 'store/modules/auth/types';

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
  const signed = useSelector(({ auth }: { auth: authState }) => auth.signed);

  if (isPrivate && !signed) return <Redirect to="/" />;
  if (!isPrivate && signed) return <Redirect to="/chat" />;

  return (
    <BaseRoute {...rest}>
      <Layout>
        <Component />
      </Layout>
    </BaseRoute>
  );
};

export default Route;
