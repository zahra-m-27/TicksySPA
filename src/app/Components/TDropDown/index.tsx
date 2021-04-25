import {useState} from 'react';
import Assets from '../../Assets';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface Item {
  value: string;
  label: string;
}

interface Props {
  items: Item[];
  label?: string;
  className?: string;
  selectedItem?: string;
  labelClassName?: string;
  onSelect?: (value: string) => void;
}

export default function TDropDown({
  label,
  items,
  onSelect,
  className,
  selectedItem,
  labelClassName,
}: Props) {
  const [Open, setOpen] = useState<boolean>(false);

  const label_style = ClassNames(styles.label, labelClassName);
  const container_style = ClassNames(styles.container, className);

  return (
    <div data-open={Open} className={container_style}>
      <p className={label_style}>{label}</p>
      <div onClick={() => setOpen(!Open)} className={styles.content}>
        <img
          alt="arrow down"
          src={Assets.SVGs.ArrowDown}
          className={styles.arrow_down}
        />
        <p className={styles.selected_item_label}>
          {items?.find((i) => i.value == selectedItem)?.label ?? 'انتخاب كنيد'}
        </p>
      </div>

      <div className={styles.items}>
        {items.map((item) => (
          <p
            key={item.value}
            className={styles.item}
            onClick={() => {
              setOpen(false);
              onSelect && onSelect(item.value);
            }}>
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}
