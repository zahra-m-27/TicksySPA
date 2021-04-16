import Assets from '../../../Assets';
import styles from './styles.module.scss';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

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

          <p dir="auto">
            همه ما بارها و بار ها شده که به مسائل مختلف در دانشگاه بر بخوریم و
            نیاز داشته باشیم تا با جایی برای حل اون مشکل ارتباط بگیریم و راهی
            برای ارتباط با مسئول مربوطه پیدا نکنیم، حالا ما اینجا هستیم تا برای
            شما سامانه رو مهیا کنیم تا ارتباط پایداری بین مسئولان و دانشجویان
            ایجاد کنیم.
            <br /> در ضمن اگر در دانشگاه نقشی داشته باشی و نیاز باشه تا با عده
            ای دانشجویان ارتباط بگیرید کافیه تا مدارکت رو از طریق پروفایل برامون
            بفرستید و تاپیک خودتون رو ایجاد کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
