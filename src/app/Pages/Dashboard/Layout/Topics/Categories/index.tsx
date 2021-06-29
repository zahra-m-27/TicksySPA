import {message, Spin} from 'antd';
import Category from './Category';
import API from '../../../../../API';
import styles from './styles.module.scss';
import Assets from '../../../../../Assets';
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import TButton from '../../../../../Components/TButton';
import TopicDto from '../../../../../API/DTOs/TopicDto';
import CategoryDto from '../../../../../API/DTOs/CategoryDto';
import TPagination from '../../../../../Components/TPagination';

export default function Categories() {
  const history = useHistory();
  const params = useParams<{topicId: string}>();

  const [Total, setTotal] = useState(1);
  const [Topic, setTopic] = useState<TopicDto>();
  const [PageSize, setPageSize] = useState(100);
  const [PageNumber, setPageNumber] = useState(0);
  const [Categories, setCategories] = useState<CategoryDto[]>();

  const getData = () => {
    API.Topics.GetTopicCategories({
      limit: PageSize,
      offset: PageNumber * PageSize,
      topicId: parseInt(params.topicId),
    })
      .then((response) => {
        setTotal(response.count);
        setCategories(response.results);
      })
      .catch(() => {
        message.error('امکان گرفتن دسته بندی های این تاپیک وجود ندارد');
      });
    API.Topics.GetTopic({
      topicId: parseInt(params.topicId),
    }).then((response) => setTopic(response));
  };

  const onDelete = (categoryId: number) => {
    API.Topics.DeleteCategory({
      categoryId: categoryId,
      topicId: parseInt(params.topicId),
    })
      .then(() => {
        getData();
        message.success('دسته بندی حذف شد');
      })
      .catch(() => {
        message.error('خطایی در حذف دسته بندی رخ داده است');
      });
  };

  useEffect(getData, []);

  if (!Topic || !Categories) {
    return <Spin size="large" />;
  }

  let content = (
    <div className={styles.not_data}>
      <Assets.SVGs.SadSvg />
      <span className={styles.not_data_text}>دسته بندی ای یافت نشد</span>

      <TButton
        backgroundColor="#1e77c9"
        label="دسته بندی جدید ایجاد کن"
        className={styles.create_no_data}
        labelClassName={styles.create_no_data_label}
        onClick={() => history.push(`/dashboard/topics/${params.topicId}/new`)}
      />
    </div>
  );

  if (Categories.length)
    content = (
      <>
        <div className={styles.categories}>
          {Categories.map((category, key) => (
            <Category
              key={key}
              category={category}
              topicId={parseInt(params.topicId)}
              onClick={() => history.push('/dashboard/tickets/' + category.id)}
              onDelete={() => onDelete(category.id)}
            />
          ))}
        </div>
        <TPagination
          className={styles.pagination}
          total={Total}
          pageSize={PageSize}
          pageNumber={PageNumber + 1}
          onChange={(value) => setPageNumber(value - 1)}
        />
      </>
    );

  return (
    <div className={styles.container}>
      <div className={styles.topic}>
        <img src={Topic.avatar} alt="topic-avatar" />
        <span>{Topic.title}</span>

        <TButton
          label="ایجاد دسته بندی"
          className={styles.create_category}
          labelClassName={styles.create_category_label}
          onClick={() =>
            history.push(`/dashboard/topics/${params.topicId}/new`)
          }
        />
      </div>
      {content}
    </div>
  );
}
