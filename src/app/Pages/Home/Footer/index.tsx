import Assets from '../../../Assets';
import styles from './styles.module.scss';

export default function Footer() {
  return (
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
          کرج - انتهای خیابان شهید بهشتی - میدان دانشگاه{' '}
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
  );
}
