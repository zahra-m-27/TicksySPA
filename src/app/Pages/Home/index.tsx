import React from "react";
import styles from "./styles.module.scss";
import Assets from "../../Assets";

function Home() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Assets.Svgs.ReactLogoSvg className={styles.AppLogo} />
        <p className={styles.AppName}>Ticksy</p>
      </header>
    </div>
  );
}

export default Home;
