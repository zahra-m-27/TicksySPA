import API from '../../API';
import Assets from '../../Assets';
import {message, Spin} from 'antd';
import styles from './styles.module.scss';
import TInput from '../../Components/TInput';
import TButton from '../../Components/TButton';
import showDialog from '../../Components/TDialog';
import {MutableRefObject, useRef, useState} from 'react';

interface Props {
  title?: string;
  roleId?: number;
  topicId: number;
  users?: number[];
  onUpdate?: () => void;
  onDismissRef?: MutableRefObject<(() => void) | undefined>;
}

export default function ManageTopicRoleDialog({
  title,
  roleId,
  topicId,
  onUpdate,
  users = [],
  onDismissRef,
}: Props) {
  const dismissDialog = useRef<() => void>();
  const [Loading, setLoading] = useState<boolean>(false);
  const [Title, setTitle] = useState<string>(title ?? '');

  const onAddRole = () => {
    setLoading(true);

    if (!roleId)
      API.Topics.CreateRole({topicId: topicId, title: Title, users: users})
        .then(() => {
          message.success(`نقش ${Title} ایجاد شد`);
        })
        .catch(() => {
          message.error(`نقش ${Title} ایجاد نشد`);
        })
        .finally(() => {
          onUpdate && onUpdate();
          onDismissRef && onDismissRef.current && onDismissRef.current();
        });
    else
      API.Topics.UpdateRole({
        title: Title,
        users: users,
        roleId: roleId,
        topicId: topicId,
      })
        .then(() => {
          message.success(`نقش ${Title} بروز شد`);
        })
        .catch(() => {
          message.error(`نقش ${Title} بروز نشد`);
        })
        .finally(() => {
          onUpdate && onUpdate();
          onDismissRef && onDismissRef.current && onDismissRef.current();
        });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>افزودن نقش</span>
        <img src={Assets.SVGs.AddUserMenu} alt="add" />
      </div>
      <div
        className={styles.content}
        style={{visibility: Loading ? 'hidden' : undefined}}>
        <img src={Assets.SVGs.AddUser} className={styles.avatar} alt="add" />
        <TInput label="عنوان نقش" value={Title} onChangeText={setTitle} />

        <div className={styles.buttons}>
          {!roleId && (
            <TButton
              onClick={() => {
                onAddRole();
                onDismissRef && onDismissRef.current && onDismissRef.current();
                dismissDialog.current = showDialog({
                  content: (
                    <ManageTopicRoleDialog
                      topicId={topicId}
                      onUpdate={onUpdate}
                      onDismissRef={dismissDialog}
                    />
                  ),
                });
              }}
              label="نقش جدید"
            />
          )}
          <TButton label="ثبت" onClick={onAddRole} backgroundColor="#1354ac" />
        </div>
      </div>
      <Spin
        size="large"
        className={styles.loading}
        style={{display: Loading ? undefined : 'none'}}
      />
    </div>
  );
}
