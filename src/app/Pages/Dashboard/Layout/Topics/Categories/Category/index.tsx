import React from 'react';
import moment from 'jalali-moment';
import styles from './styles.module.scss';
import Assets from '../../../../../../Assets';
import CategoryDto from '../../../../../../API/DTOs/CategoryDto';
import {Popconfirm} from 'antd';
import {useHistory} from 'react-router-dom';

interface Props {
  topicId: number;
  onClick: () => void;
  onDelete: () => void;
  category: CategoryDto;
}

export default function Category({
  category,
  topicId,
  onClick,
  onDelete,
}: Props) {
  const history = useHistory();

  return (
    <div className={styles.container} onClick={onClick}>
      <span className={styles.title}>{category.title}</span>
      {category.get_last_ticket_date ? (
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
      ) : (
        <span className={styles.no_last_ticket}>تاکنون فعالیتی نداشته</span>
      )}
      <p className={styles.description}>{category.description}</p>
      <div className={styles.ticket_total_container}>
        <span className={styles.label}>تیکت های باز</span>
        <span className={styles.ticket_total}>
          {category.get_open_ticket_count}
        </span>
      </div>
      <span className={styles.label}>گروه مسئول</span>
      <span className={styles.role}>{category.admin_detail.title}</span>
      <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
        <div
          data-testid="edit_category"
          onClick={() =>
            history.push(`/dashboard/topics/${topicId}/edit/${category.id}`)
          }>
          <Assets.SVGs.EditSVG className={styles.action_edit} />
        </div>
        <div className={styles.splitter} />
        <Popconfirm
          title="آیا از حذف این دسته بندی اطمینان دارید؟"
          okText="بله"
          cancelText="خیر"
          onConfirm={onDelete}>
          <div>
            <Assets.SVGs.TrashSVG className={styles.action_trash} />
          </div>
        </Popconfirm>
      </div>
    </div>
  );
}
