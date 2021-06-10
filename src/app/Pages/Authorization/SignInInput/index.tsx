import API from '../../../API';
import {Button, message} from 'antd';
import {useRef, useState} from 'react';
import styles from './styles.module.scss';
import SEInput from '../../../Components/SEInput';
import {Link, useHistory} from 'react-router-dom';
import useUser from '../../../Hooks/useUser';

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
        });
      })
      .catch((error) => {
        if (error.status === 400) {
          message.error('ایمیل یا رمزعبور اشتباه است');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={className}>
      <p className={styles.input_box_title}>وارد شوید!</p>
      <SEInput
        type="text"
        label="ايميل"
        regex={/^\S+@\S+$/}
        onEnter={onEmailEnter}
        onChangeText={setEmail}
        hasError={EmailHasError}
        hint="example@gmail.com"
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="password"
        label="گذرواژه"
        ref={passwordRef}
        onEnter={onSignIn}
        onChangeText={setPassword}
        hasError={PasswordHasError}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <Button
        type="primary"
        loading={Loading}
        onClick={onSignIn}
        className={styles.enter_button}>
        ورود
      </Button>
      <Link className={styles.switch} to="/sign-up">
        حساب کابری ندارم
      </Link>
      <Link className={styles.forget_pass} to="/forgot-password">
        فراموشی گذرواژه
      </Link>
    </div>
  );
}
