import Assets from "../../../Assets";
import styles from "./styles.module.scss";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.landing_image} src={Assets.Images.Home} alt="" />
      <div>
        <MobileNavigation />
        <DesktopNavigation />

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
