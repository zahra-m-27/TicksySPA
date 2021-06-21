import API from '../../../API';
import {useState} from 'react';
import {Button, message} from 'antd';
import styles from './styles.module.scss';
import {useHistory} from 'react-router-dom';
import SEInput from '../../../Components/SEInput';

interface Props {
  className?: string;
}

export default function ForgotPasswordInput({className}: Props) {
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Loading, setLoading] = useState(false);
  const [EmailHasError, setEmailHasError] = useState(false);

  const onForgotPassword = () => {
    if (!/^\S+@\S+$/.test(Email)) {
      setEmailHasError(true);
      return;
    }
    setEmailHasError(false);

    setLoading(true);
    API.Users.RequestResetPassword({
      email: Email,
    })
      .then(() => {
        message.success('ایمیل تغییر رمزعبور براتان ارسال شده است', 15);
        history.replace('/');
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
      <p className={styles.input_box_title}>فراموشي گذرواژه!</p>

      <SEInput
        type="text"
        label="ايميل"
        regex={/^\S+@\S+$/}
        onChangeText={setEmail}
        hint="example@gmail.com"
        data-testid="email-input"
        hasError={EmailHasError}
        onEnter={onForgotPassword}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />

      <Button
        type="primary"
        loading={Loading}
        data-testid="submit-button"
        onClick={onForgotPassword}
        className={styles.enter_button}>
        ثبت
      </Button>
    </div>
  );
}
