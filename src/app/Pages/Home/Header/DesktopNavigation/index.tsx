import {Link} from 'react-router-dom';
import Assets from '../../../../Assets';
import styles from './styles.module.scss';
import useUser from '../../../../Hooks/useUser';

export default function DesktopNavigation() {
  const {isLogin, Logout} = useUser();

  return (
    <div className={styles.navigation}>
      {isLogin && (
        <div className={styles.link}>
          <div onClick={Logout}>خروج</div>
        </div>
      )}
      <div className={styles.link}>
        <div
          onClick={() =>
            document.querySelector('#contact-us')?.scrollIntoView({
              behavior: 'smooth',
            })
          }>
          ارتباط با ما
        </div>
      </div>
      {isLogin && (
        <div className={styles.link}>
          <Link to="/dashboard">داشبورد</Link>
        </div>
      )}
      {!isLogin && (
        <div className={styles.link}>
          <Link to="/sign-in">ورود</Link>
          <span>/</span>
          <Link to="/sign-up">ثبت‌نام</Link>
        </div>
      )}
      <div
        className={styles.link}
        style={{color: '#103cb7', fontWeight: 'bold'}}>
        تیکسی
        <Assets.SVGs.GridSVG />
        <img src={Assets.Images.Ticksy} alt="logo" />
      </div>
    </div>
  );
}
