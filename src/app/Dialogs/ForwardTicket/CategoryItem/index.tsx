import Assets from '../../../Assets';
import styles from './styles.module.scss';

interface Props {
  label: string;
  number: number;
  selected: boolean;
  onClick: () => void;
}

export default function CategoryItem({
  label,
  number,
  onClick,
  selected,
}: Props) {
  return (
    <div
      className={styles.container}
      onClick={onClick}
      data-selected={selected}>
      <span>{label}</span>
      <div className={styles.number_box}>
        <img src={Assets.Images.NumberBackground} />
        <span>{number}</span>
      </div>
    </div>
  );
}
