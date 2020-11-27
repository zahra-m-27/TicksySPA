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
            <li>
              <Link to="/sign-in" className={styles.nav_link}>
                ورود/ثبت نام
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className={styles.nav_link}>
                داشبورد
              </Link>
            </li>

            <li>
              <Link to="/..." className={styles.nav_link}>
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
