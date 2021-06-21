import styles from './styles.module.scss';
import {Button, Tabs} from 'antd';
import React, {useRef, useState} from 'react';
import EditTopicDetail from './EditTopicDetail';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import showDialog from '../../../../../Components/TDialog';
import ManageTopicRoleDialog from '../../../../../Dialogs/ManageTopicRole';
import TButton from '../../../../../Components/TButton';
import ManageTopicUserDialog from '../../../../../Dialogs/ManageTopicUser';
import {useParams} from 'react-router-dom';

export default function EditTopic() {
  const updateRoles = useRef<() => void>();
  const updateUsers = useRef<() => void>();
  const dismissDialog = useRef<() => void>();
  const params = useParams<{topicId: string}>();
  const [Tab, setTab] = useState('detail');

  let addTitle = '';
  if (Tab === 'roles') {
    addTitle = 'افزودن نقش';
  } else if (Tab === 'users') {
    addTitle = 'افزودن کاربر';
  }

  return (
    <div className={styles.container}>
      <Tabs
        accessKey={Tab}
        onChange={setTab}
        tabBarExtraContent={
          addTitle && {
            right: (
              <TButton
                label={addTitle}
                className={styles.add_button}
                onClick={() => {
                  if (Tab === 'roles')
                    dismissDialog.current = showDialog({
                      content: (
                        <ManageTopicRoleDialog
                          onDismissRef={dismissDialog}
                          onUpdate={updateRoles.current}
                          topicId={parseInt(params.topicId)}
                        />
                      ),
                    });
                  else
                    dismissDialog.current = showDialog({
                      content: (
                        <ManageTopicUserDialog
                          onDismissRef={dismissDialog}
                          onUpdate={updateUsers.current}
                          topicId={parseInt(params.topicId)}
                        />
                      ),
                    });
                }}
              />
            ),
          }
        }>
        <Tabs.TabPane tab="مشخصات" key="detail">
          <EditTopicDetail />
        </Tabs.TabPane>
        <Tabs.TabPane tab="کاربران" key="users">
          <UserManagement onUpdate={updateUsers} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="نقش ها" key="roles">
          <RoleManagement onUpdate={updateRoles} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
