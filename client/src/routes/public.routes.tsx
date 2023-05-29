import { lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

const publicRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Public/Home')),
    exact: true,
  },
];

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map((route, id) => {
        return <Route key={String(id)} {...route} />;
      })}
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default PublicRoutes;
