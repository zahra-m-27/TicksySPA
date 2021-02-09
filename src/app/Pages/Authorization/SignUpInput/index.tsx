import API from "../../../API";
import { Button, message } from "antd";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Link, useHistory } from "react-router-dom";
import SEInput from "../../../Components/SEInput";

interface Props {
  className?: string;
}

export default function SignInInput({ className }: Props) {
  const history = useHistory();
  const [Code, setCode] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LastName, setLastName] = useState("");
  const [Loading, setLoading] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const codeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [CodeHasError, setCodeHasError] = useState(false);
  const [EmailHasError, setEmailHasError] = useState(false);
  const [PasswordHasError, setPasswordHasError] = useState(false);
  const [LastNameHasError, setLastNameHasError] = useState(false);
  const [FirstNameHasError, setFirstNameHasError] = useState(false);

  const onFirstNameEnter = () => {
    if (lastNameRef && lastNameRef.current) {
      lastNameRef.current.focus();
    }
  };

  const onLastNameEnter = () => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
  };

  const onEmailEnter = () => {
    if (codeRef && codeRef.current) {
      codeRef.current.focus();
    }
  };

  const onCodeEnter = () => {
    if (passwordRef && passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const onSignUp = () => {
    if (!/^\S+@\S+$/.test(Email)) {
      setEmailHasError(true);
    }
    if (!FirstName) {
      setFirstNameHasError(true);
    }
    if (!LastName) {
      setLastNameHasError(true);
    }
    if (!Password) {
      setPasswordHasError(true);
    }
    if (!Password || !/^\S+@\S+$/.test(Email) || !LastName || !FirstName) {
      return;
    }
    setEmailHasError(false);
    setLastNameHasError(false);
    setFirstNameHasError(false);

    setLoading(true);
    API.Users.SignUp({
      code: Code,
      email: Email,
      password: Password,
      last_name: LastName,
      first_name: FirstName,
    })
      .then(() => {
        history.replace("/");
        message.success("ایمیل تاییدیه براتان ارسال شده است", 15);
      })
      .catch(async (error) => {
        if (error.status === 400) {
          let non_field_errors = (await error.json())?.non_field_errors;
          if (
            non_field_errors &&
            non_field_errors.length &&
            non_field_errors[0] === "email address has been taken befor"
          ) {
            message.error("این ایمیل قبلا در سامانه ثبت شده است");
          } else {
            message.error("ایمیل یا رمزعبور اشتباه است");
          }
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={className}>
      <p className={styles.input_box_title}>ثبت نام کنید!</p>
      <SEInput
        type="text"
        label="نام"
        onEnter={onFirstNameEnter}
        onChangeText={setFirstName}
        hasError={FirstNameHasError}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="text"
        ref={lastNameRef}
        label="نام خانوادگی"
        onEnter={onLastNameEnter}
        onChangeText={setLastName}
        hasError={LastNameHasError}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="text"
        label="ايميل"
        ref={emailRef}
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
        type="text"
        ref={codeRef}
        onEnter={onCodeEnter}
        onChangeText={setCode}
        hasError={CodeHasError}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        label="شماره دانشجویی / کد پرسنلی"
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="password"
        label="گذرواژه"
        ref={passwordRef}
        onEnter={onSignUp}
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
        onClick={onSignUp}
        className={styles.enter_button}
      >
        ثبت نام
      </Button>
      <Link className={styles.switch} to="/sign-in">
        حساب کابری دارم
      </Link>
    </div>
  );
}
