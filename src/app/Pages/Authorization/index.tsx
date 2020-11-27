import React from "react";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import ForgotPasswordPage from "./ForgotPassword";
import ChangePasswordPage from "./ChangePassword";
import ConfirmEmailpage from "./Components/ConfirmEmailInputBox";
import styles from "./styles.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Authorization() {
  return (
    <div className={styles.container}>
      <div className={styles.header} />

      <Router>
        <Switch>
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/change-password" component={ChangePasswordPage} />
          <Route path="/confirm-email" component={ConfirmEmailPage} />
        </Switch>
      </Router>
    </div>
  );
}
