import routes from './routes';
import UserProvider from './Providers/UserProvider';
import AuthorizedRoute from './Components/AuthorizedRoute';
import {Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <UserProvider>
      <Switch>
        {routes.map((item, key) => {
          if (item.needAuthorize) {
            return (
              <AuthorizedRoute
                key={key}
                path={item.path}
                component={item.component}
              />
            );
          }
          return (
            <Route key={key} path={item.path} component={item.component} />
          );
        })}
      </Switch>
    </UserProvider>
  );
}
