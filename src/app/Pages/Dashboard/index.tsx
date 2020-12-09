import React from "react";
import styles from "./styles.module.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LandingImage from "../../Assets/Images/Files/home.png";
import CreateTopic from "./CreateTopic";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.right_side}>
        <div className={styles.info}>
          <img src={LandingImage} className={styles.avatar} />
          <p>سید علی علوی</p>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link to="/manage-tickets"> مدیریت تیکت ها</Link>
            </li>
            <li>
              <Link to="/manage-topics"> مدیریت تاپیک ها</Link>
            </li>
            <li>
              <Link to="/manage-account"> مدیریت حساب</Link>
              {/*<p>مدیریت حساب</p>*/}
            </li>
            <li className={styles.exit}>
              <Link to="/">خروج</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.left_side}>
        <Router>
          <Switch>
            <Route path="/create-topic" component={CreateTopic} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
