import React from "react";
import SignInPage from "./SignIn";
import styles from "./styles.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Authorization() {
  return (
    <div className={styles.container}>
      <div className={styles.header} />

      <Router>
        <Switch>
          <Route path="/sign-in" component={SignInPage} />
        </Switch>
      </Router>
    </div>
  );
}
