import API from '../../../API';
import {Button, message} from 'antd';
import {useRef, useState} from 'react';
import styles from './styles.module.scss';
import useUser from '../../../Hooks/useUser';
import SEInput from '../../../Components/SEInput';
import {Link, useHistory} from 'react-router-dom';
import TButton from '../../../Components/TButton';

interface Props {
  className?: string;
}

export default function SignInInput({className}: Props) {
  const {Login} = useUser();
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [EmailHasError, setEmailHasError] = useState(false);
  const [PasswordHasError, setPasswordHasError] = useState(false);

  const onEmailEnter = () => {
    if (passwordRef && passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const onSignIn = () => {
    if (!/^\S+@\S+$/.test(Email)) {
      setEmailHasError(true);
    }
    if (!Password) {
      setPasswordHasError(true);
    }
    if (!Password || !/^\S+@\S+$/.test(Email)) {
      return;
    }
    setEmailHasError(false);
    setPasswordHasError(false);

    setLoading(true);
    API.Users.SignIn({
      username: Email,
      password: Password,
    })
      .then((response) => {
        localStorage.setItem('token', response.token);
        API.Users.GetProfile({}).then((response) => {
          Login(response);
          setLoading(false);
          if (history.location.pathname === '/sign-in') {
            history.push('/');
          }
        });
      })
      .catch((error) => {
        if (error.status === 400) {
          message.error('ایمیل یا رمزعبور اشتباه است');
        }
        setLoading(false);
      });
  };

  return (
    <form className={className}>
      <p className={styles.input_box_title}>وارد شوید!</p>
      <SEInput
        type="text"
        label="ايميل"
        name="email"
        regex={/^\S+@\S+$/}
        onEnter={onEmailEnter}
        onChangeText={setEmail}
        hasError={EmailHasError}
        hint="example@gmail.com"
        data-testid="email-input"
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        name="password"
        type="password"
        label="گذرواژه"
        ref={passwordRef}
        onEnter={onSignIn}
        onChangeText={setPassword}
        hasError={PasswordHasError}
        data-testid="password-input"
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <TButton
        label="ورود"
        onClick={onSignIn}
        data-testid="submit-button"
        className={styles.enter_button}
      />
      <Link className={styles.switch} to="/sign-up">
        حساب کابری ندارم
      </Link>
      <Link
        className={styles.forget_pass}
        to="/forgot-password"
        data-testid="forgot-button">
        فراموشی گذرواژه
      </Link>
    </form>
  );
}
