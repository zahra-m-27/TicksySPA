import React, {useEffect, useRef, useState} from 'react';
import Assets from '../../Assets';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface Item<T> {
  value: T;
  label: string;
}

interface Props<T> {
  items: Item<T>[];
  className?: string;
  selectedItem?: T;
  children: React.ReactNode;
  onSelect?: (value: T) => void;
}

export default function TTooltipDropDown<T>({
  items,
  children,
  onSelect,
  className,
  selectedItem,
}: Props<T>) {
  const [Open, setOpen] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickContainer = () => setOpen(false);
    const onClickContent = (e: any) => {
      e.stopPropagation();
      setOpen(!Open);
    };
    container.current?.parentElement?.addEventListener(
      'click',
      onClickContainer,
      false
    );
    content.current?.addEventListener('click', onClickContent, false);
    return () => {
      container.current?.parentElement?.removeEventListener(
        'click',
        onClickContainer
      );
      content.current?.removeEventListener('click', onClickContent);
    };
  }, [Open]);

  const container_style = ClassNames(styles.container, className);

  return (
    <div ref={container} data-open={Open} className={container_style}>
      <div ref={content}>{children}</div>

      <div className={styles.items}>
        {items.map((item) => (
          <div
            key={`${item.value}`}
            className={styles.item}
            onClick={() => {
              setOpen(false);
              onSelect && onSelect(item.value);
            }}>
            <span>{item.label}</span>
            {selectedItem === item.value && (
              <div className={styles.checkmark}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
