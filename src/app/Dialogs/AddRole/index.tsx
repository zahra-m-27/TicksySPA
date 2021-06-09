import styles from './styles.module.scss';
import Assets from '../../Assets';
import TInput from '../../Components/TInput';
import TButton from '../../Components/TButton';

export default function AddRoleDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>افزودن نقش</span>
        <img src={Assets.SVGs.AddUserMenu} />
      </div>
      <div className={styles.content}>
        <img src={Assets.SVGs.AddUser} className={styles.avatar} />
        <TInput label="عنوان نقش" />

        <div className={styles.buttons}>
          <TButton onClick={() => undefined} label="نقش جدید" />
          <TButton
            label="ثبت نقش"
            onClick={() => undefined}
            backgroundColor="#1354ac"
          />
        </div>
      </div>
    </div>
  );
}
