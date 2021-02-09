import API from "../../../API";
import { Button, message } from "antd";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import SEInput from "../../../Components/SEInput";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  className?: string;
}

export default function ForgotPasswordInput({ className }: Props) {
  const history = useHistory();
  const location = useLocation();
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PasswordHasError, setPasswordHasError] = useState(false);
  const [ConfirmPasswordHasError, setConfirmPasswordHasError] = useState(false);

  const onPasswordEnter = () => {
    if (confirmPasswordRef && confirmPasswordRef.current) {
      confirmPasswordRef.current.focus();
    }
  };

  const onResetPassword = () => {
    if (!Password) {
      setPasswordHasError(true);
    }
    if (!ConfirmPassword) {
      setConfirmPasswordHasError(true);
    }
    if (ConfirmPassword !== Password) {
      setConfirmPasswordHasError(true);
    }
    if (!Password || !ConfirmPassword || ConfirmPassword !== Password) {
      return;
    }
    setPasswordHasError(false);
    setConfirmPasswordHasError(false);

    setLoading(true);
    API.Users.NewPasswordResetPassword({
      password: Password,
      token: new URLSearchParams(location.search).get("token") ?? "",
      uib64: new URLSearchParams(location.search).get("uib64") ?? "",
    })
      .then((response) => {
        localStorage.setItem("token", response.token);
        message.success("رمز عبور با موفقیت تغییر کرد.");
        history.replace("/");
      })
      .catch((error) => {
        if (error.status === 400) {
          message.error("ایمیل یا رمزعبور اشتباه است");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={className}>
      <p className={styles.input_box_title}>تغيير رمز عبور!</p>
      <SEInput
        type="password"
        label="گذرواژه"
        onEnter={onPasswordEnter}
        onChangeText={setPassword}
        hasError={PasswordHasError}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="password"
        label="تاييد گذرواژه"
        ref={confirmPasswordRef}
        onEnter={onResetPassword}
        inputClassName={styles.input}
        className={styles.input_class}
        onChangeText={setConfirmPassword}
        hasError={ConfirmPasswordHasError}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <Button
        type="primary"
        loading={Loading}
        onClick={onResetPassword}
        className={styles.enter_button}
      >
        ثبت
      </Button>
    </div>
  );
}
