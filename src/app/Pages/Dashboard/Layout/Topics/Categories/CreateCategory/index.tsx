import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import TInput from '../../../../../../Components/TInput';
import Assets from '../../../../../../Assets';
import API from '../../../../../../API';
import {useHistory, useParams} from 'react-router-dom';
import TopicAdminListItemDto from '../../../../../../API/DTOs/TopicAdminListItemDto';
import TButton from '../../../../../../Components/TButton';
import {message, Spin} from 'antd';

export default function CreateCategory() {
  const history = useHistory();
  const isTyping = useRef<number>();
  const params = useParams<{topicId: string}>();

  const [Role, setRole] = useState<string>();
  const [RoleId, setRoleId] = useState<number>();
  const [Title, setTitle] = useState<string>('');
  const [Roles, setRoles] = useState<TopicAdminListItemDto[]>();
  const [Loading, setLoading] = useState<boolean>(false);
  const [Description, setDescription] = useState<string>('');
  const [SearchedRoles, setSearchedRoles] = useState<TopicAdminListItemDto[]>();

  useEffect(() => {
    API.Topics.GetTopicRoles({
      topicId: parseInt(params.topicId),
      limit: 1000,
      offset: 0,
    }).then((response) => setRoles(response.results));
  }, []);

  const onSearch = (value: string) => {
    const key = Math.random();
    isTyping.current = key;
    setTimeout(() => {
      if (key == isTyping.current) {
        setSearchedRoles(Roles?.filter((r) => r.title.includes(value)));
      }
    }, 500);
    setRole(value);
  };

  const onCreate = () => {
    if (!RoleId) {
      message.error('گروه مسئول این دسته بندی انتخاب نشده');
      return;
    }

    setLoading(true);

    API.Topics.CreateCategory({
      topicId: parseInt(params.topicId),
      admin: RoleId,
      title: Title,
      description: Description,
    })
      .then(() => {
        history.push('/dashboard/topics/' + params.topicId);
      })
      .catch(() => {
        setLoading(false);
        message.error('خطایی در ایجاد دسته بندی رخ داده است');
      });
  };

  if (Loading)
    return (
      <div className={styles.container}>
        <Spin size="large" />
      </div>
    );

  return (
    <div className={styles.container}>
      <TInput
        label="عنوان"
        content={Title}
        onChangeText={setTitle}
        inputContainerClassName={styles.input_container}
      />
      <TInput
        value={Role}
        label="نقش مسئول"
        onChangeText={onSearch}
        iconClassName={styles.input_icon}
        inputContainerClassName={styles.input_container}
        autoCompleteData={SearchedRoles?.map((item) => {
          return {
            value: item,
            label: item.title,
          };
        })}
        autoCompleteClassName={styles.auto_complete}
        autoCompleteItemClassName={styles.auto_complete_item}
        onAutoCompleteSelect={(value) => {
          setRoleId(value.id);
          setRole(value.title);
          setSearchedRoles([]);
        }}
        icon={Assets.Images.Search}
      />
      <TInput
        minLines={4}
        label="توضیحات"
        content={Description}
        onChangeText={setDescription}
        inputContainerClassName={styles.input_container}
      />

      <TButton
        onClick={onCreate}
        label="ثبت دسته بندی"
        className={styles.submit}
      />
    </div>
  );
}
