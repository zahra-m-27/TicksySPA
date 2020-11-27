import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import LandingImage from "../../Assets/Images/Files/home.png";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.landing_image} src={LandingImage} />
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav_link}>
              <Link to="/sign-in">ورود</Link>/<Link to="/sign-up">ثبت نام</Link>
            </li>
            <li className={styles.nav_link}>
              <Link to="/dashboard">داشبورد</Link>
            </li>
            <li className={styles.nav_link}>
              <Link to="/contact-us">ارتباط با ما</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
