import {Button} from 'antd';
import Assets from '../../../../Assets';
import {useState} from 'react';
import styles from './styles.module.scss';

interface userData {
  role: string;
  id: number;
}

export default function UserManagement() {
  const users: userData[] = [
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
  ];
  const [UserMode, setUserMode] = useState(false);

  let user_mode_background_color;
  let role_mode_background_color;
  let user_mode_text_color;
  let role_mode_text_color;

  if (UserMode) {
    user_mode_background_color = 'white';
    user_mode_text_color = '#06239a';
  } else {
    role_mode_background_color = 'white';
    role_mode_text_color = '#06239a';
  }

  const onUserPress = () => {
    setUserMode(true);
  };
  const onRolePress = () => {
    setUserMode(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button type="primary" className={styles.add_button}>
          <span> افزودن نقش</span>
        </Button>
        <div className={styles.mode_box}>
          <div
            className={styles.select_mode}
            style={{
              backgroundColor: user_mode_background_color,
              color: user_mode_text_color,
            }}
            onClick={onUserPress}>
            <span> لیست کاربران</span>
          </div>
          <div
            className={styles.select_mode}
            style={{
              backgroundColor: role_mode_background_color,
              color: role_mode_text_color,
            }}
            onClick={onRolePress}>
            لیست نقش ها
          </div>
        </div>
      </div>
      <table className={styles.table_class}>
        <th>عملیات</th>
        <th>عنوان نقش</th>
        <th>ردیف</th>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>
                <img
                  src={Assets.Images.EditUsers}
                  alt=""
                  className={styles.edit_icon}
                />
                <img
                  src={Assets.Images.Delete}
                  alt=""
                  className={styles.delete_icon}
                />
              </td>
              <td>{user.role}</td>
              <td>{user.id}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
