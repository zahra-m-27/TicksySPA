import {useState} from 'react';
import {Link} from 'react-router-dom';
import Assets from '../../../../Assets';
import styles from './styles.module.scss';
import useUser from '../../../../Hooks/useUser';

export default function MobileNavigation() {
  const {isLogin, Logout} = useUser();
  const [Active, setActive] = useState<boolean>(false);

  return (
    <div
      data-active={Active}
      data-is-login={isLogin}
      className={styles.mobile_navigation}>
      <div className={styles.mobile_navigation_top_side}>
        <Assets.SVGs.GridView className={styles.mobile_navigation_grid_view} />
        <div className={styles.mobile_navigation_top_right_side}>
          <span className={styles.mobile_navigation_title}>تیکسی</span>
          <div
            className={styles.mobile_navigation_activator}
            onClick={() => setActive(!Active)}>
            <span className={styles.mobile_navigation_activator_top_line} />
            <span className={styles.mobile_navigation_activator_middle_line} />
            <span className={styles.mobile_navigation_activator_bottom_line} />
          </div>
        </div>
      </div>
      <div className={styles.mobile_navigation_drop_down}>
        {!isLogin && (
          <>
            <Link
              to="/sign-up"
              className={styles.mobile_navigation_drop_down_item}>
              ثبت‌نام
            </Link>
            <Link
              to="/sign-in"
              className={styles.mobile_navigation_drop_down_item}>
              ورود
            </Link>
          </>
        )}
        {isLogin && (
          <Link
            to="/dashboard"
            className={styles.mobile_navigation_drop_down_item}>
            داشبورد
          </Link>
        )}
        <div className={styles.mobile_navigation_drop_down_item}>
          ارتباط با ما
        </div>
        {isLogin && (
          <div
            onClick={Logout}
            className={styles.mobile_navigation_drop_down_item}>
            خروج
          </div>
        )}
      </div>
    </div>
  );
}
