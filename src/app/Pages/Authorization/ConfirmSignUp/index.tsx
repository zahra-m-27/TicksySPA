import {Spin} from 'antd';
import API from '../../../API';
import Assets from '../../../Assets';
import styles from './styles.module.scss';
import {useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';

export default function ConfirmSignUpPage() {
  const history = useHistory();
  const location = useLocation();
  const [Result, setResult] = useState<boolean>();

  useEffect(() => {
    API.Users.ConfirmSignUp({
      token: new URLSearchParams(location.search).get('token') ?? '',
      uib64: new URLSearchParams(location.search).get('uib64') ?? '',
    })
      .then(() => setResult(true))
      .catch(() => setResult(false));
  }, []);

  if (Result === undefined) {
    return (
      <div className={styles.container}>
        <div className={styles.message_box}>
          <Spin size="large" />
        </div>
      </div>
    );
  }

  if (Result)
    return (
      <div className={styles.container}>
        <div className={styles.message_box}>
          <Assets.SVGs.SuccessTick className={styles.success} />
          <p className={styles.message}>
            تایید حساب شما با موفقیت انجام شد
            <br />
            از سایت خودتون لذت ببرید
          </p>
          <div className={styles.home} onClick={() => history.push('/')}>
            <Link to="/">صفحه اصلی</Link>
            <Assets.SVGs.Home />
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.message_box}>
        <Assets.SVGs.Failed className={styles.success} />
        <p className={styles.message}>
          تایید حساب شما موفقیت آمیز نبود
          <br />
          لطفا دوباره تلاش کنید
        </p>
        <div className={styles.home} onClick={() => history.push('/')}>
          <Link to="/">صفحه اصلی</Link>
          <Assets.SVGs.Home />
        </div>
      </div>
    </div>
  );
}
