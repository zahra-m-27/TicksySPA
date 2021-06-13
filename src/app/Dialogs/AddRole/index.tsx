import styles from './styles.module.scss';
import Assets from '../../Assets';
import TInput from '../../Components/TInput';
import TButton from '../../Components/TButton';
import showDialog from '../../Components/TDialog';
import {MutableRefObject, useRef} from 'react';

interface Props {
  onDismissRef?: MutableRefObject<(() => void) | undefined>;
}

export default function AddRoleDialog({onDismissRef}: Props) {
  const dismissDialog = useRef<() => void>();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>افزودن نقش</span>
        <img src={Assets.SVGs.AddUserMenu} />
      </div>
      <div className={styles.content}>
        <img src={Assets.SVGs.AddUser} className={styles.avatar} />
        <TInput label="عنوان نقش" />

        <div className={styles.buttons}>
          <TButton
            onClick={() => {
              onDismissRef && onDismissRef.current && onDismissRef.current();
              dismissDialog.current = showDialog({
                content: <AddRoleDialog onDismissRef={dismissDialog} />,
              });
            }}
            label="نقش جدید"
          />
          <TButton
            label="ثبت نقش"
            onClick={() => undefined}
            backgroundColor="#1354ac"
          />
        </div>
      </div>
    </div>
  );
}
