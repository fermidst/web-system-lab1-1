import { type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LinkButton from './components/buttons/LinkButton.tsx';
import routes, { mainRoutes } from './routes';

const headerLinks = mainRoutes.map((route) => (
  <LinkButton key={route.path} path={route.path} name={route.name} />
));

const router = createBrowserRouter(routes, { basename: '/web-system-lab1-1/' });

const App: FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">{headerLinks}</div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
