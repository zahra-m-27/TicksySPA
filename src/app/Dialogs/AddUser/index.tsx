import styles from './styles.module.scss';
import Assets from '../../Assets';
import TInput from '../../Components/TInput';
import TButton from '../../Components/TButton';
import TDropDown from '../../Components/TDropDown';
import {MutableRefObject, useRef, useState} from 'react';
import showDialog from '../../Components/TDialog';

interface Props {
  onDismissRef?: MutableRefObject<(() => void) | undefined>;
}

export default function AddUserDialog({onDismissRef}: Props) {
  const dismissDialog = useRef<() => void>();
  const [SelectedRole, setSelectedRole] = useState<string>();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>افزودن کاربر</span>
        <img src={Assets.SVGs.AddUserMenu} />
      </div>
      <div className={styles.content}>
        <img src={Assets.SVGs.AddUser} className={styles.avatar} />
        <TInput label="نام و نام خانوادگی" />
        <TInput
          icon={Assets.Images.Search}
          label="ایمیل"
          iconClassName={styles.email_icon}
        />
        <TDropDown
          label="عنوان نقش"
          items={[
            {
              label: 'نقش 1',
              value: '1',
            },
            {
              label: 'نقش 2',
              value: '2',
            },
          ]}
          selectedItem={SelectedRole}
          onSelect={setSelectedRole}
        />

        <div className={styles.buttons}>
          <TButton
            onClick={() => {
              onDismissRef && onDismissRef.current && onDismissRef.current();
              dismissDialog.current = showDialog({
                content: <AddUserDialog onDismissRef={dismissDialog} />,
              });
            }}
            label="کاربر جدید"
          />
          <TButton
            label="ثبت کاربر"
            onClick={() => undefined}
            backgroundColor="#1354ac"
          />
        </div>
      </div>
    </div>
  );
}
