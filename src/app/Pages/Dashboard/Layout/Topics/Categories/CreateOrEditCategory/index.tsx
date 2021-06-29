import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import TInput from '../../../../../../Components/TInput';
import Assets from '../../../../../../Assets';
import API from '../../../../../../API';
import {useHistory, useParams} from 'react-router-dom';
import TopicAdminListItemDto from '../../../../../../API/DTOs/TopicAdminListItemDto';
import TButton from '../../../../../../Components/TButton';
import {message, Spin} from 'antd';

export default function CreateOrEditCategory() {
  const history = useHistory();
  const isTyping = useRef<number>();
  const params = useParams<{topicId: string; sectionId: string}>();

  const [Role, setRole] = useState<string>();
  const [RoleId, setRoleId] = useState<number>();
  const [Title, setTitle] = useState<string>('');
  const [Roles, setRoles] = useState<TopicAdminListItemDto[]>();
  const [Loading, setLoading] = useState<boolean>(false);
  const [Description, setDescription] = useState<string>('');
  const [SearchedRoles, setSearchedRoles] = useState<TopicAdminListItemDto[]>();

  useEffect(() => {
    if (params.sectionId) {
      setLoading(true);
      API.Topics.GetCategory({
        topicId: parseInt(params.topicId),
        categoryId: parseInt(params.sectionId),
      })
        .then((response) => {
          setTitle(response.title);
          setDescription(response.description);
          setRole(response.admin_detail.title);
          setRoleId(response.admin_detail.id);
          setLoading(false);
        })
        .catch(() => undefined);
    }
    API.Topics.GetTopicRoles({
      topicId: parseInt(params.topicId),
      limit: 1000,
      offset: 0,
    })
      .then((response) => setRoles(response.results))
      .catch(() => undefined);
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

    if (params.sectionId) {
      API.Topics.UpdateCategory({
        categoryId: parseInt(params.sectionId),
        topicId: parseInt(params.topicId),
        title: Title,
        description: Description,
        admin: RoleId,
      })
        .then(() => {
          history.push('/dashboard/topics/' + params.topicId);
        })
        .catch(() => {
          setLoading(false);
          message.error('خطایی در بروزرسانی دسته بندی رخ داده است');
        });
    } else {
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
    }
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
        data-testid="title"
        onChangeText={setTitle}
        inputContainerClassName={styles.input_container}
      />
      <TInput
        content={Role}
        label="نقش مسئول"
        data-testid="role"
        onChangeText={onSearch}
        iconClassName={styles.input_icon}
        inputContainerClassName={styles.input_container}
        onFocus={() => !Role && onSearch(Role ?? '')}
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
        data-testid="description"
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
