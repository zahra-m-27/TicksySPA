import {Button} from 'antd';
import Assets from '../../../../Assets';
import styles from './styles.module.scss';
import showDialog from '../../../../Components/TDialog';
import AddRoleDialog from '../../../../Dialogs/AddRole';
import {useRef} from 'react';

interface RoleData {
  role: string;
  id: number;
}

export default function RoleManagement() {
  const dismissDialog = useRef<() => void>();

  const users: RoleData[] = [
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
    {role: 'کارشناس امور شهریه', id: 1},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          type="primary"
          className={styles.add_button}
          onClick={() =>
            (dismissDialog.current = showDialog({
              content: <AddRoleDialog onDismissRef={dismissDialog} />,
            }))
          }>
          افزودن نقش
        </Button>
      </div>
      <table className={styles.table_class}>
        <th>ردیف</th>
        <th>عنوان نقش</th>
        <th>عملیات</th>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.role}</td>
              <td>
                <img
                  src={Assets.Images.EditUsers}
                  alt=""
                  className={styles.edit_icon}
                  onClick={() =>
                    (dismissDialog.current = showDialog({
                      content: <AddRoleDialog onDismissRef={dismissDialog} />,
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
