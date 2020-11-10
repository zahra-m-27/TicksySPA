import React from "react";
import logo from "./logo.svg";
import styles from 'styles.module.scss';

function Home() {
    return (
        <div className="App">
            <header className={styles.AppHeader}>
                <img src={logo} className={styles.AppLogo} alt="logo" />
                <p className={styles.AppName}>Ticksy</p>
            </header>
        </div>
    );
}

export default Home;
