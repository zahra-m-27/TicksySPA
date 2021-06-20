import styles from './styles.module.scss';
import Assets from '../../Assets';
import TInput from '../../Components/TInput';
import TButton from '../../Components/TButton';
import TDropDown from '../../Components/TDropDown';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import showDialog from '../../Components/TDialog';
import TopicUsersListSerializerDto from '../../API/DTOs/TopicUsersListSerializerDto';
import API from '../../API';
import TopicAdminListItemDto from '../../API/DTOs/TopicAdminListItemDto';
import {message, Spin} from 'antd';
import UserSerializerRestrictedDto from '../../API/DTOs/UserSerializerRestrictedDto';

interface Props {
  topicId: number;
  onUpdate?: () => void;
  user?: TopicUsersListSerializerDto;
  onDismissRef?: MutableRefObject<(() => void) | undefined>;
}

export default function ManageTopicUserDialog({
  onDismissRef,
  onUpdate,
  topicId,
  user,
}: Props) {
  const isTyping = useRef<number>();
  const dismissDialog = useRef<() => void>();
  const [Email, setEmail] = useState<string>();
  const [SearchedUser, setSearchedUser] =
    useState<UserSerializerRestrictedDto[]>();
  const [UserId, setUserId] = useState<number | undefined>(user?.id);
  const [User, setUser] = useState<TopicUsersListSerializerDto | undefined>();
  const [SelectedRoles, setSelectedRoles] = useState<number[]>(
    user?.admin_set.map((a) => a.id) ?? []
  );
  const [Roles, setRoles] = useState<TopicAdminListItemDto[]>();
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    API.Topics.GetTopicRoles({topicId: topicId, offset: 0, limit: 100}).then(
      (response) => {
        setRoles(response.results);
      }
    );
  }, []);

  const onSearch = (value: string) => {
    const key = Math.random();
    isTyping.current = key;
    setTimeout(() => {
      if (key == isTyping.current) {
        API.Users.SearchEmail({search: value}).then((response) =>
          setSearchedUser(response)
        );
      }
    }, 1000);
    setEmail(value);
  };

  const onAddUser = async () => {
    if (!UserId) {
      message.error('کاربری انتخاب نشده.');
      return;
    }

    setLoading(true);

    const oldUserRoles = user?.admin_set.map((a) => a.id) ?? [];

    const addedRoles = SelectedRoles.filter((r) => !oldUserRoles.includes(r));
    const deletedRoles = oldUserRoles.filter((r) => !SelectedRoles.includes(r));

    for (const roleId of addedRoles) {
      const role = await API.Topics.GetRole({topicId: topicId, roleId: roleId});
      const users = role.users_detail;

      await API.Topics.UpdateRoleUsers({
        roleId: roleId,
        topicId: topicId,
        users: [...users.map((u) => u.id), UserId],
      });
    }

    for (const roleId of deletedRoles) {
      const role = await API.Topics.GetRole({topicId: topicId, roleId: roleId});
      const users = role.users_detail;

      await API.Topics.UpdateRoleUsers({
        roleId: roleId,
        topicId: topicId,
        users: users.map((u) => u.id).filter((i) => i != UserId),
      });
    }

    if (user) {
      message.success('نقش های کاربر بروز شد.');
    } else {
      message.success('کاربر به تاپیک اضافه شد.');
    }
    setLoading(false);
    onUpdate && onUpdate();
    onDismissRef && onDismissRef.current && onDismissRef.current();
  };

  const loading = !Roles || Loading;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{user ? 'ویرایش کاربر' : 'افزودن کاربر'}</span>
        <img src={Assets.SVGs.AddUserMenu} />
      </div>
      <div
        className={styles.content}
        style={{visibility: loading ? 'hidden' : undefined}}>
        <img
          src={
            user ? user.avatar ?? Assets.SVGs.MaleUserSVG : Assets.SVGs.AddUser
          }
          className={styles.avatar}
        />
        <TInput
          label="ایمیل"
          onChangeText={onSearch}
          readOnly={!!user?.email}
          disabled={!!user?.email}
          value={user?.email ?? Email}
          iconClassName={styles.email_icon}
          autoCompleteData={SearchedUser?.map((item) => {
            return {
              value: item,
              label: `${item.first_name} ${item.last_name} (${item.email})`,
            };
          })}
          onAutoCompleteSelect={(value) => {
            setUserId(value.id);
            setEmail(value.email);
            setSearchedUser([]);
            setUser(value);
          }}
          icon={user?.email ? undefined : Assets.Images.Search}
        />
        <TDropDown
          label="عنوان نقش"
          multiSelect
          items={
            Roles?.map((role) => {
              return {label: role.title, value: role.id};
            }) ?? []
          }
          selectedItem={SelectedRoles}
          onSelect={setSelectedRoles}
        />

        <div className={styles.buttons}>
          {!user && (
            <TButton
              onClick={() => {
                onAddUser();
                dismissDialog.current = showDialog({
                  content: (
                    <ManageTopicUserDialog
                      topicId={topicId}
                      onUpdate={onUpdate}
                      onDismissRef={dismissDialog}
                    />
                  ),
                });
              }}
              label="کاربر جدید"
            />
          )}
          <TButton label="ثبت" onClick={onAddUser} backgroundColor="#1354ac" />
        </div>
      </div>
      <Spin
        size="large"
        className={styles.loading}
        style={{display: loading ? undefined : 'none'}}
      />
    </div>
  );
}
