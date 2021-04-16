import routes from './routes';
import UserProvider from './Providers/UserProvider';
import AuthorizedRoute from './Components/AuthorizedRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
