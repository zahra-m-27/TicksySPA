import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ConfirmEmailPage() {
  return (
    <div className={styles.container}>
      <div className={styles.message_box}>
        <p className={styles.message}>
          تایید حساب شما با موفقیت انجام شد از سایت خودتون لذت ببرید
        </p>
      </div>
      <Link to="">صفحه اصلی</Link>
    </div>
  );
}
