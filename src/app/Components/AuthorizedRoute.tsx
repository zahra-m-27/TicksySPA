import {message} from 'antd';
import useUser from '../Hooks/useUser';
import Authorization from '../Pages/Authorization';
import {Route, RouteComponentProps, RouteProps} from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

export default function AuthorizedRoute({component, ...route}: Props) {
  const Component = component;
  const {isLogin} = useUser();

  return (
    <Route
      render={(props) => {
        if (!isLogin)
          message.error(
            'برای دسترسی به این بخش میبایست وارد حساب کاربری خودتون بشید'
          );
        return isLogin ? <Component {...props} /> : <Authorization />;
      }}
      {...route}
    />
  );
}
