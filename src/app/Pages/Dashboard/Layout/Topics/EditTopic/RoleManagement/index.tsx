import {message, Spin} from 'antd';
import API from '../../../../../../API';
import styles from './styles.module.scss';
import {useParams} from 'react-router-dom';
import Assets from '../../../../../../Assets';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import TButton from '../../../../../../Components/TButton';
import showDialog from '../../../../../../Components/TDialog';
import ManageTopicRoleDialog from '../../../../../../Dialogs/ManageTopicRole';
import TPagination from '../../../../../../Components/TPagination';
import TopicAdminListItemDto from '../../../../../../API/DTOs/TopicAdminListItemDto';

interface Props {
  onUpdate: MutableRefObject<(() => void) | undefined>;
}

export default function RoleManagement({onUpdate}: Props) {
  const dismissDialog = useRef<() => void>();
  const params = useParams<{topicId: string}>();

  const [Total, setTotal] = useState(1);
  const [PageSize, setPageSize] = useState(5);
  const [PageNumber, setPageNumber] = useState(0);
  const [Roles, setRoles] = useState<TopicAdminListItemDto[]>();

  const getData = () => {
    API.Topics.GetTopicRoles({
      limit: PageSize,
      offset: PageNumber * PageSize,
      topicId: parseInt(params.topicId),
    })
      .then((response) => {
        setTotal(response.count);
        setRoles(
          response.results.concat(
            new Array(
              (PageSize - (response.results.length % PageSize)) % PageSize
            ).fill({})
          )
        );
      })
      .catch(() => {
        message.error('خطایی در گرفتن نقش های تاپیک رخ داده.');
      });
  };

  onUpdate.current = getData;
  useEffect(getData, [PageNumber]);

  let content = <Spin size="large" />;

  if (Roles)
    content = (
      <div className={styles.not_data}>
        <Assets.SVGs.SadSvg />
        <span className={styles.not_data_text}>دسته بندی ای یافت نشد</span>

        <TButton
          backgroundColor="#1e77c9"
          label="نقش جدید ایجاد کن"
          className={styles.create_no_data}
          labelClassName={styles.create_no_data_label}
          onClick={() =>
            (dismissDialog.current = showDialog({
              content: (
                <ManageTopicRoleDialog
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

  if (Roles?.length)
    content = (
      <>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>عنوان نقش</th>
              <th>تعداد مسئولان</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {Roles.map((role, index) => {
              if (!role.id) return <tr />;
              return (
                <tr key={index}>
                  <td>{role.id}</td>
                  <td>{role.title}</td>
                  <td>{role.users_detail.length}</td>
                  <td>
                    <img
                      alt="edit"
                      src={Assets.Images.EditUsers}
                      className={styles.edit_icon}
                      onClick={() =>
                        (dismissDialog.current = showDialog({
                          content: (
                            <ManageTopicRoleDialog
                              roleId={role.id}
                              onUpdate={getData}
                              title={role.title}
                              onDismissRef={dismissDialog}
                              topicId={parseInt(params.topicId)}
                              users={role.users_detail.map((u) => u.id)}
                            />
                          ),
                        }))
                      }
                    />
                    <img
                      alt="delete"
                      onClick={() => {
                        API.Topics.DeleteRole({
                          roleId: role.id,
                          topicId: parseInt(params.topicId),
                        })
                          .then(() => {
                            message.success(`نقش ${role.title} حذف شد.`);
                          })
                          .catch(() => {
                            message.error('خطایی در حذف نقش ها رخ داده.');
                          })
                          .finally(getData);
                      }}
                      src={Assets.Images.Delete}
                      className={styles.delete_icon}
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
