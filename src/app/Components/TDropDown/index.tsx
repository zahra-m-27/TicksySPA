import {useEffect, useRef, useState} from 'react';
import Assets from '../../Assets';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface Item<T> {
  value: T;
  label: string;
}

interface Props<T> {
  label?: string;
  items: Item<T>[];
  className?: string;
  selectedItem?: T[];
  multiSelect?: boolean;
  labelClassName?: string;
  onSelect?: (values: T[]) => void;
}

export default function TDropDown<T>({
  label,
  items,
  onSelect,
  className,
  multiSelect,
  selectedItem,
  labelClassName,
}: Props<T>) {
  const [Open, setOpen] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickContainer = () => setOpen(false);
    const onClickInput = (e: any) => {
      e.stopPropagation();
      setOpen(!Open);
    };
    container.current?.parentElement?.addEventListener(
      'click',
      onClickContainer,
      false
    );
    input.current?.addEventListener('click', onClickInput, false);
    return () => {
      container.current?.parentElement?.removeEventListener(
        'click',
        onClickContainer
      );
      input.current?.removeEventListener('click', onClickInput);
    };
  }, [Open]);

  const label_style = ClassNames(styles.label, labelClassName);
  const container_style = ClassNames(styles.container, className);

  const selectedLabel = items
    ?.filter((i) => selectedItem?.includes(i.value))
    .map((i) => i.label)
    ?.join(', ');

  return (
    <div ref={container} data-open={Open} className={container_style}>
      <p className={label_style}>{label}</p>
      <div
        ref={input}
        className={styles.content}
        data-testid="dropdown-container">
        <img
          alt="arrow down"
          src={Assets.SVGs.ArrowDown}
          className={styles.arrow_down}
        />
        <p className={styles.selected_item_label}>
          {selectedLabel.length ? selectedLabel : 'انتخاب كنيد'}
        </p>
      </div>

      <div className={styles.items}>
        {items.map((item) => (
          <div
            key={`${item.value}`}
            className={styles.item}
            onClick={() => {
              setOpen(!!multiSelect);
              if (selectedItem) {
                const index = selectedItem.indexOf(item.value);
                if (index >= 0) {
                  onSelect &&
                    onSelect(selectedItem.filter((v, i) => i != index));
                } else {
                  onSelect && onSelect([item.value, ...selectedItem]);
                }
              } else {
                onSelect && onSelect([item.value]);
              }
            }}>
            {multiSelect &&
              selectedItem &&
              selectedItem.indexOf(item.value) >= 0 && (
                <Assets.SVGs.CheckmarkSVG className={styles.checkmark} />
              )}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
