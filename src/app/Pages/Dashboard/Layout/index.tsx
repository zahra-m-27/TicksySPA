import routes from './routes';
import {Breadcrumb} from 'antd';
import Assets from '../../../Assets';
import styles from './styles.module.scss';
import {Route, Switch, Redirect, Link, useHistory} from 'react-router-dom';
import {breadcrumbFindRoute, getRoutes} from '../../../Utilities';

export default function DashboardLayout() {
  const history = useHistory();
  const breadcrumb = breadcrumbFindRoute(history.location.pathname, routes, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.dashboard_menu}>
          <Assets.SVGs.Menu />
        </div>
        تیکسی
        <Assets.SVGs.GridSVG className={styles.grid} />
        <img
          alt="logo"
          src={Assets.Images.Ticksy}
          onClick={() => history.push('/')}
        />
      </div>
      <div className={styles.breadcrumb}>
        {breadcrumb?.route && (
          <Breadcrumb style={{direction: 'rtl'}}>
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
            {breadcrumb.parents.map((parent, index) => (
              <Breadcrumb.Item key={index}>
                <Link to={'/dashboard' + parent.path}>{parent.name}</Link>
              </Breadcrumb.Item>
            ))}
            <Breadcrumb.Item>{breadcrumb.route.name}</Breadcrumb.Item>
          </Breadcrumb>
        )}
        <span>{breadcrumb?.route?.name}</span>
      </div>
      <Switch>
        {getRoutes(routes)
          .filter((route) => route.component || route.redirect)
          .map((route, index) => {
            if (route.redirect) {
              return (
                <Redirect
                  key={index}
                  exact={route.exact}
                  path={'/dashboard' + route.path}
                  to={'/dashboard' + route.redirect}
                />
              );
            }
            return (
              <Route
                key={index}
                path={'/dashboard' + route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
      </Switch>
    </>
  );
}
