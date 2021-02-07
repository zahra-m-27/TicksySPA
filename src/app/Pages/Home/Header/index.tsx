import { useState } from "react";
import Assets from "../../../Assets";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
  const [ActiveMobileHeader, setActiveMobileHeader] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <img className={styles.landing_image} src={Assets.Images.Home} alt="" />
      <div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav_link}>
              <div
                onClick={() =>
                  document.querySelector("#contact-us")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                ارتباط با ما
              </div>
            </li>
            <li className={styles.nav_link}>
              <Link to="/dashboard">داشبورد</Link>
            </li>
            <li className={styles.nav_link}>
              <Link to="/sign-in">ورود</Link>/<Link to="/sign-up">ثبت‌نام</Link>
            </li>
            <li
              className={styles.nav_link}
              style={{ color: "#103cb7", fontWeight: "bold" }}
            >
              تیکسی
              <Assets.SVGs.GridSVG />
              <img src={Assets.Images.Ticksy} alt="logo" />
            </li>
          </ul>
        </nav>
        <header
          className={styles.mobile_header}
          data-active={ActiveMobileHeader}
        >
          <div className={styles.mobile_header_top_side}>
            <Assets.SVGs.GridView className={styles.mobile_header_grid_view} />
            <div className={styles.mobile_header_top_right_side}>
              <span className={styles.mobile_header_title}>تیکسی</span>
              <div
                className={styles.mobile_header_activator}
                onClick={() => setActiveMobileHeader(!ActiveMobileHeader)}
              >
                <span className={styles.mobile_header_activator_top_line} />
                <span className={styles.mobile_header_activator_middle_line} />
                <span className={styles.mobile_header_activator_bottom_line} />
              </div>
            </div>
          </div>
          <div className={styles.mobile_header_drop_down}>
            <Link to="/sign-up" className={styles.mobile_header_drop_down_item}>
              ثبت‌نام
            </Link>
            <Link to="/sign-in" className={styles.mobile_header_drop_down_item}>
              ورود
            </Link>
            <Link
              to="/dashboard"
              className={styles.mobile_header_drop_down_item}
            >
              داشبورد
            </Link>
            <div className={styles.mobile_header_drop_down_item}>
              ارتباط با ما
            </div>
          </div>
        </header>

        <div className={styles.title}>
          <p>
            سامانه <span>تیکتینگ</span>
          </p>
          <p>دانشگاه خوارزمی</p>

          <p>
            لورم اپسیوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. <br />
            چاپگر ها و متون بلکه روزنامه مجلمه در ستون و سطر آنچنان که لازم است
            و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود
            ابزار کاربردی میباشد
          </p>
        </div>
      </div>
    </div>
  );
}
