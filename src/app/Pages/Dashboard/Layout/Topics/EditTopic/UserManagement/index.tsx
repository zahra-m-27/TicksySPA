import {message, Spin} from 'antd';
import Assets from '../../../../../../Assets';
import styles from './styles.module.scss';
import showDialog from '../../../../../../Components/TDialog';
import ManageTopicUserDialog from '../../../../../../Dialogs/ManageTopicUser';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from '../../../../../../API';
import {StarTwoTone} from '@ant-design/icons';
import TButton from '../../../../../../Components/TButton';
import TPagination from '../../../../../../Components/TPagination';
import TopicUsersListSerializerDto from '../../../../../../API/DTOs/TopicUsersListSerializerDto';

interface Props {
  onUpdate: MutableRefObject<(() => void) | undefined>;
}

export default function UserManagement({onUpdate}: Props) {
  const dismissDialog = useRef<() => void>();
  const params = useParams<{topicId: string}>();

  const [Total, setTotal] = useState(1);
  const [PageSize, setPageSize] = useState(5);
  const [PageNumber, setPageNumber] = useState(0);
  const [Users, setUsers] = useState<TopicUsersListSerializerDto[]>();

  const getData = () => {
    API.Topics.GetTopicUsers({
      limit: PageSize,
      offset: PageNumber * PageSize,
      topicId: parseInt(params.topicId),
    })
      .then((response) => {
        setTotal(response.count);
        setUsers(
          response.results.concat(
            new Array(
              (PageSize - (response.results.length % PageSize)) % PageSize
            ).fill({})
          )
        );
      })
      .catch(() => message.error('خطایی در گرفتن نقش های تاپیک رخ داده.'));
  };

  onUpdate.current = getData;
  useEffect(getData, [PageNumber]);

  let content = <Spin size="large" />;

  if (Users)
    content = (
      <div className={styles.not_data}>
        <Assets.SVGs.SadSvg />
        <span className={styles.not_data_text}>دسته بندی ای یافت نشد</span>

        <TButton
          backgroundColor="#1e77c9"
          label="کاربر جدید ایجاد کن"
          className={styles.create_no_data}
          labelClassName={styles.create_no_data_label}
          onClick={() =>
            (dismissDialog.current = showDialog({
              content: (
                <ManageTopicUserDialog
                  onUpdate={getData}
                  onDismissRef={dismissDialog}
                  topicId={parseInt(params.topicId)}
                />
              ),
            }))
          }
        />
      </div>
    );

  if (Users?.length)
    content = (
      <>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام نام خانوادگی</th>
              <th>عنوان نقش</th>
              <th>ایمیل</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user, index) => {
              if (!user.id) return <tr />;
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>
                    <div className={styles.user_name}>
                      <img
                        src={user.avatar ?? Assets.SVGs.MaleUserSVG}
                        alt="avatar"
                      />
                      <span>
                        {user.first_name} {user.last_name}
                      </span>
                      {user.is_creator && <StarTwoTone />}
                    </div>
                  </td>
                  <td>
                    {user.admin_set
                      .map((a) => a.title)
                      .concat(
                        user.is_creator && user.admin_set.length === 0
                          ? ['مدیر اصلی تاپیک']
                          : []
                      )
                      .join(', ')}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      alt="edit"
                      data-testid="edit_user"
                      src={Assets.Images.EditUsers}
                      className={styles.edit_icon}
                      onClick={() =>
                        (dismissDialog.current = showDialog({
                          content: (
                            <ManageTopicUserDialog
                              user={user}
                              onUpdate={getData}
                              onDismissRef={dismissDialog}
                              topicId={parseInt(params.topicId)}
                            />
                          ),
                        }))
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TPagination
          total={Total}
          pageSize={PageSize}
          pageNumber={PageNumber + 1}
          onChange={(value) => setPageNumber(value - 1)}
        />
      </>
    );
  return <div className={styles.container}>{content}</div>;
}
