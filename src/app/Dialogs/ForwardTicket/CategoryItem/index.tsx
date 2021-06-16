import Assets from '../../../Assets';
import styles from './styles.module.scss';

interface Props {
  label: string;
  number: number;
}

export default function CategoryItem({label, number}: Props) {
  return (
    <div className={styles.container}>
      <span>{label}</span>
      <div className={styles.number_box}>
        <img src={Assets.Images.NumberBackground} />
        <span>{number}</span>
      </div>
    </div>
  );
}
