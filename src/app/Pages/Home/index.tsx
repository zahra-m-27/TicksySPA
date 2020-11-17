import React from "react";
import styles from "./styles.module.scss";
import Assets from "../../Assets";
import { Link } from "react-router-dom";

function Home() {
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
                to="/test"
                style={{
                  color: "#61dafb",
                }}
              >
                Test
              </Link>
            </li>
            <li style={{ display: "inline-block", paddingLeft: 20 }}>
              <Link
                to="/SignIn"
                style={{
                  color: "#61dafb",
                }}
              >
                SignIn
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

export default Home;
