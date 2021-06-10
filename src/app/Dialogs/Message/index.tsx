import Assets from '../../Assets';
import styles from './styles.module.scss';

interface Props {
  icon?: string;
  title?: string;
  message?: string;
  identifier?: string;
  identifier_label?: string;
}

export default function MessageDialog({
  title,
  message,
  identifier,
  identifier_label,
  icon = Assets.Images.Checked,
}: Props) {
  return (
    <div className={styles.container}>
      <img alt="success" src={icon} className={styles.icon} />
      {title && (
        <p dir="auto" className={styles.title}>
          {title}
        </p>
      )}
      {message && (
        <p dir="auto" className={styles.message}>
          {message}
        </p>
      )}
      {identifier && (
        <div className={styles.id_container}>
          <p dir="auto">{identifier_label}</p>
          <p dir="auto" className={styles.id}>
            {identifier}
          </p>
        </div>
      )}
    </div>
  );
}
