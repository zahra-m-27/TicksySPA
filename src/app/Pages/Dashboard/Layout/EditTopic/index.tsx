import styles from './styles.module.scss';
import {Tabs} from 'antd';
import {useState} from 'react';
import EditTopicDetail from './EditTopicDetail';
import UserManagement from '../UserManagement';
import RoleManagement from '../RoleManagement';

export default function EditTopic() {
  const [Tab, setTab] = useState('detail');

  return (
    <div className={styles.container}>
      <Tabs accessKey={Tab} onChange={(k) => setTab(k)}>
        <Tabs.TabPane tab="مشخصات" key="detail">
          <EditTopicDetail />
        </Tabs.TabPane>
        <Tabs.TabPane tab="کاربران" key="users">
          <UserManagement />
        </Tabs.TabPane>
        <Tabs.TabPane tab="نقش ها" key="roles">
          <RoleManagement />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
