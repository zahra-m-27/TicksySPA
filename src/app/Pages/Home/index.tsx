import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import Topic from "./Components/Topic"

import LandingImage from "../../Assets/Images/Files/home.png";
import Grid from '../../Assets/Images/Files/grid.svg'
import TopicPic from "../../Assets/Images/Files/topic_pic.png"
import TopicBadge from "../../Assets/Images/Files/topic_badge.png"
import Facebook from "../../Assets/Images/Files/social/facebook.svg"
import Instagram from "../../Assets/Images/Files/social/instagram.svg"
import Linkedin from "../../Assets/Images/Files/social/linkedin.svg"
import Twitter from "../../Assets/Images/Files/social/twitter.svg"
import User from "../../Assets/Images/Files/user.svg"
import Flags from "../../Assets/Images/Files/flags.svg"
import Ticksy from "../../Assets/Images/Files/ticksy.png"
import { Descriptions } from "antd";


const topics = [
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    pic: TopicPic,
    badge: TopicBadge
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    pic: TopicPic,
    badge: TopicBadge
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    pic: TopicPic,
    badge: TopicBadge
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    pic: TopicPic,
    badge: TopicBadge
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    pic: TopicPic,
    badge: TopicBadge
  },
  {
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
    pic: TopicPic,
    badge: TopicBadge
  },
]


export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.landing_image} src={LandingImage} />

        <div className={styles.header}>


          <nav className={styles.nav}>
            <ul>
              <li className={styles.nav_link}>
                <Link style={{ color: "#103cb7", fontWeight: 'bold' }} to="/"><img src={Grid} />تیکسی</Link>
              </li>
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


          <div className={styles.title}>
            <h1>سامانه <span>تیکتینگ</span></h1>
            <h1>دانشگاه خوارزمی</h1>

            <h6>لورم اپسیوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.<br />
            چاپگر ها و متون بلکه روزنامه مجلمه در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار کاربردی میباشد</h6>
          </div>


        </div>
      </div>
      <main className={styles.main}>
        <h2 className={styles.main_title}>تاپیک های پیشنهادی</h2>
        <div className={styles.topic_container}>
          {
            topics.map(topic =>
              <Topic
                title={topic.title}
                description={topic.description}
                pic={topic.pic}
                badge={topic.badge}
              />
            )
          }
        </div>
      </main>


      <footer className={styles.footer}>

        <div className={styles.footer_contact}>

          <h1><img src={Ticksy} />سامانه تیکتینگ</h1>

          <div><img src={User} />supourtickcy@khu.com</div>
          <div><img src={Flags} /> تهران - خیابان شهید مفتح نرسیده به انقلاب  پلاک ۴۳ </div>
          <div><img src={Flags} />کرج - انتهای خیابان شهید بهشتی - میدان دانشگاه </div>

        </div>
        <div className={styles.footer_social}>

          <div><img src={Facebook} alt="facebook" /></div>
          <div><img src={Instagram} alt="instagram" /></div>
          <div><img src={Linkedin} alt="linkedin" /></div>
          <div><img src={Twitter} alt="twitter" /></div>

        </div>

      </footer>



    </>
  );
}
