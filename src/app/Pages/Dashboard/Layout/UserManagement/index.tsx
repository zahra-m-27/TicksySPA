import {Button} from 'antd';
import Assets from '../../../../Assets';
import styles from './styles.module.scss';
import moment from 'jalali-moment';
import showDialog from '../../../../Components/TDialog';
import AddUserDialog from '../../../../Dialogs/AddUser';
import {useRef} from 'react';

interface UserData {
  id: number;
  name: string;
  role: string;
  topicId: number;
  register_date: Date;
}

export default function UserManagement() {
  const dismissDialog = useRef<() => void>();
  const users: UserData[] = [
    {
      topicId: 1,
      register_date: new Date(),
      name: 'محمد محمدی',
      role: 'کارشناس امور شهریه',
      id: 1,
    },
    {
      topicId: 1,
      register_date: new Date(),
      name: 'محمد محمدی',
      role: 'کارشناس امور شهریه',
      id: 1,
    },
    {
      topicId: 1,
      register_date: new Date(),
      name: 'محمد محمدی',
      role: 'کارشناس امور شهریه',
      id: 1,
    },
    {
      topicId: 1,
      register_date: new Date(),
      name: 'محمد محمدی',
      role: 'کارشناس امور شهریه',
      id: 1,
    },
    {
      topicId: 1,
      register_date: new Date(),
      name: 'محمد محمدی',
      role: 'کارشناس امور شهریه',
      id: 1,
    },
    {
      topicId: 1,
      register_date: new Date(),
      name: 'محمد محمدی',
      role: 'کارشناس امور شهریه',
      id: 1,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          type="primary"
          className={styles.add_button}
          onClick={() =>
            (dismissDialog.current = showDialog({
              content: <AddUserDialog onDismissRef={dismissDialog} />,
            }))
          }>
          افزودن کاربر
        </Button>
      </div>
      <table className={styles.table_class}>
        <th>ردیف</th>
        <th>نام نام خانوادگی</th>
        <th>عنوان نقش</th>
        <th>شماره تاپیک</th>
        <th>تاریخ عضویت</th>
        <th>عملیات</th>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.topicId}</td>
              <td>
                {moment
                  .utc(user.register_date)
                  .local()
                  .locale('fa')
                  .format('YYYY/MM/D')}
              </td>
              <td>
                <img
                  src={Assets.Images.EditUsers}
                  alt=""
                  className={styles.edit_icon}
                  onClick={() =>
                    (dismissDialog.current = showDialog({
                      content: <AddUserDialog onDismissRef={dismissDialog} />,
                    }))
                  }
                />
                <img
                  src={Assets.Images.Delete}
                  alt=""
                  className={styles.delete_icon}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
