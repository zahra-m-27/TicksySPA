import Topic from "./Topic";
import Assets from "../../Assets";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const topics = [
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
  },
];

export default function HomePage() {
  const [ActiveMobileHeader, setActiveMobileHeader] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.landing_image} src={Assets.Images.Home} alt="" />
        <div className={styles.content}>
          <nav className={styles.nav}>
            <ul>
              <li className={styles.nav_link}>
                <div
                  onClick={() => {
                    document.querySelector("#contact-us")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  ارتباط با ما
                </div>
              </li>
              <li className={styles.nav_link}>
                <Link to="/dashboard">داشبورد</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/sign-in">ورود</Link>/
                <Link to="/sign-up">ثبت‌نام</Link>
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
              <Assets.SVGs.GridView
                className={styles.mobile_header_grid_view}
              />
              <div className={styles.mobile_header_top_right_side}>
                <span className={styles.mobile_header_title}>تیکسی</span>
                <div
                  className={styles.mobile_header_activator}
                  onClick={() => setActiveMobileHeader(!ActiveMobileHeader)}
                >
                  <span className={styles.mobile_header_activator_top_line} />
                  <span
                    className={styles.mobile_header_activator_middle_line}
                  />
                  <span
                    className={styles.mobile_header_activator_bottom_line}
                  />
                </div>
              </div>
            </div>
            <div className={styles.mobile_header_drop_down}>
              <Link
                to="/sign-up"
                className={styles.mobile_header_drop_down_item}
              >
                ثبت‌نام
              </Link>
              <Link
                to="/sign-in"
                className={styles.mobile_header_drop_down_item}
              >
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
              چاپگر ها و متون بلکه روزنامه مجلمه در ستون و سطر آنچنان که لازم
              است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف
              بهبود ابزار کاربردی میباشد
            </p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <h2 className={styles.main_title}>تاپیک های پیشنهادی</h2>
        <div className={styles.topic_container}>
          {topics.map((topic) => (
            <Topic
              icon={topic.icon}
              title={topic.title}
              badge={topic.badge}
              description={topic.description}
            />
          ))}
        </div>
      </div>

      <footer className={styles.footer} id="contact-us">
        <div className={styles.footer_contact}>
          <p>
            <img src={Assets.Images.Ticksy} alt="logo" />
            سامانه تیکتینگ
          </p>

          <div>
            <Assets.SVGs.UserSVG />
            <span>supourtickcy@khu.com</span>
          </div>
          <div>
            <Assets.SVGs.LocationPinSVG /> تهران - خیابان شهید مفتح نرسیده به
            انقلاب پلاک ۴۳
          </div>
          <div>
            <Assets.SVGs.LocationPinSVG />
            کرج - انتهای خیابان شهید بهشتی - میدان دانشگاه{" "}
          </div>
        </div>
        <div className={styles.footer_social}>
          <div>
            <img src={Assets.SVGs.Facebook} alt="facebook" />
          </div>
          <div>
            <img src={Assets.SVGs.Instagram} alt="instagram" />
          </div>
          <div>
            <img src={Assets.SVGs.Linkedin} alt="linkedin" />
          </div>
          <div>
            <img src={Assets.SVGs.Twitter} alt="twitter" />
          </div>
        </div>
      </footer>
    </div>
  );
}
