import React from 'react';
import styles from './styles.module.scss';
import Assets from '../../Assets';
import ClassNames from '../../Utilities/ClassNames';

interface Props {
  total: number;
  pageSize: number;
  className?: string;
  pageNumber: number;
  onChange: (pageNumber: number) => void;
}

export default function TPagination({
  pageNumber,
  className,
  pageSize,
  onChange,
  total,
}: Props) {
  const lastPage = Math.ceil(total / pageSize);

  return (
    <div className={ClassNames(styles.pagination, className)}>
      <Assets.SVGs.MoreThan
        className={styles.move_button}
        onClick={() => pageNumber - 1 > 0 && onChange(pageNumber - 1)}
      />
      <div className={styles.divider} />
      {pageNumber - 1 > 0 && (
        <div
          className={styles.pagination_page}
          onClick={() => onChange(pageNumber - 1)}>
          {pageNumber - 1}
        </div>
      )}
      <div className={ClassNames(styles.pagination_page, styles.active)}>
        {pageNumber}
      </div>
      {pageNumber + 1 <= lastPage && (
        <div
          className={styles.pagination_page}
          onClick={() => onChange(pageNumber + 1)}>
          {pageNumber + 1}
        </div>
      )}
      <div className={styles.divider} />
      <Assets.SVGs.LessThan
        className={styles.move_button}
        onClick={() => pageNumber + 1 <= lastPage && onChange(pageNumber + 1)}
      />
    </div>
  );
}
