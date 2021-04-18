import Assets from '../../Assets';
import styles from './styles.module.scss';

export default function TicketSubmittedDialog() {
  return (
    <div className={styles.container}>
      <img alt="success" src={Assets.Images.Checked} className={styles.icon} />
      <p dir="auto" className={styles.title}>
        درخواست شما با موفقیت ارسال شد.
      </p>
      <p dir="auto" className={styles.message}>
        درخواست شما ارسال شد و در کوتاه ترین زمان پاسخ آن به شما ارائه خواهد شد.
        نتیجه درخواست خود را می توانید از داشبورد ببینید هم چنین نتیجه درخواست
        برایتان ایمیل خواهد شد
      </p>

      <div className={styles.id_container}>
        <p dir="auto">شناسه درخواست:</p>
        <p dir="auto" className={styles.id}>
          #1191
        </p>
      </div>
    </div>
  );
}
