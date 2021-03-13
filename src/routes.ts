import React from 'react';
import { RouteProps } from 'react-router-dom';

const HomeView = React.lazy(() => import('./components/Views/Home'));

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: HomeView,
  },
];

export default routes;
