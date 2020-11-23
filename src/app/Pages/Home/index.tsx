import React from "react";
import styles from "./styles.module.scss";
import Assets from "../../Assets";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <nav>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
            }}
          >
            <li style={{ display: "inline-block", paddingRight: 20 }}>
              <Link
                to="/"
                style={{
                  color: "#61dafb",
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ display: "inline-block" }}>
              <Link
                to="/404"
                style={{
                  color: "#61dafb",
                }}
              >
                NotFound
              </Link>
            </li>
            <li style={{ display: "inline-block", paddingLeft: 20 }}>
              <Link
                to="/sign-in"
                style={{
                  color: "#61dafb",
                }}
              >
                SignIn
              </Link>
            </li>
            <li style={{ display: "inline-block", paddingLeft: 20 }}>
              <Link
                to="/sign-up"
                style={{
                  color: "#61dafb",
                }}
              >
                SignUp
              </Link>
            </li>
            <li style={{ display: "inline-block", paddingLeft: 20 }}>
              <Link
                to="/forgot-password"
                style={{
                  color: "#61dafb",
                }}
              >
                Forgot Password
              </Link>
            </li>
          </ul>
        </nav>
        <Assets.Svgs.ReactLogoSvg className={styles.AppLogo} />
        <p className={styles.AppName}>Ticksy</p>
      </header>
    </div>
  );
}
