import React from 'react';
import moment from 'jalali-moment';
import styles from './styles.module.scss';
import CategoryDto from '../../../../../../API/DTOs/CategoryDto';

interface Props {
  onClick: () => void;
  category: CategoryDto;
}

export default function Category({category, onClick}: Props) {
  return (
    <div className={styles.container} onClick={onClick}>
      <span className={styles.title}>{category.title}</span>
      <span className={styles.last_ticket}>
        آخرین فعالیت:{' '}
        <span>
          {moment
            .utc(category.get_last_ticket_date)
            .local()
            .locale('fa')
            .format('HH:mm YYYY/MM/DD')}
        </span>
      </span>
      <p className={styles.description}>{category.description}</p>
      <div className={styles.ticket_total_container}>
        <span className={styles.label}>تیکت های باز</span>
        <span className={styles.ticket_total}>
          {category.get_open_ticket_count}
        </span>
      </div>
      <span className={styles.label}>گروه مسئول</span>
      <span className={styles.role}>{category.admin_detail.title}</span>
    </div>
  );
}
