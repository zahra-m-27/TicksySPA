import { Link } from "react-router-dom";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";

export default function DesktopNavigation() {
  const isLogin = !!localStorage.getItem("token");

  return (
    <div className={styles.navigation}>
      <div className={styles.link}>
        <div
          onClick={() =>
            document.querySelector("#contact-us")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          ارتباط با ما
        </div>
      </div>
      {isLogin && (
        <div className={styles.link}>
          <Link to="/dashboard">داشبورد</Link>
        </div>
      )}
      {!isLogin && (
        <div className={styles.link}>
          <Link to="/sign-in">ورود</Link>
          <span>/</span>
          <Link to="/sign-up">ثبت‌نام</Link>
        </div>
      )}
      <div
        className={styles.link}
        style={{ color: "#103cb7", fontWeight: "bold" }}
      >
        تیکسی
        <Assets.SVGs.GridSVG />
        <img src={Assets.Images.Ticksy} alt="logo" />
      </div>
    </div>
  );
}
