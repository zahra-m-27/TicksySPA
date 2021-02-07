import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import styles from "./styles.module.scss";
import ConfirmEmailPage from "./ConfirmEmail";
import { Switch, Route } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPassword";
import ChangePasswordPage from "./ChangePassword";

export default function Authorization() {
  return (
    <div className={styles.container}>
      <div className={styles.header} />

      <Switch>
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/confirm-email" component={ConfirmEmailPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/change-password" component={ChangePasswordPage} />
      </Switch>
    </div>
  );
}
