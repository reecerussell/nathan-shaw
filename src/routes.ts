import React from 'react';
import { RouteProps } from 'react-router-dom';

const HomeView = React.lazy(() => import('./components/Views/Home'));
const AboutView = React.lazy(() => import('./components/Views/About'));

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: HomeView,
  },
  {
    path: '/about',
    exact: true,
    component: AboutView,
  },
];

export default routes;
