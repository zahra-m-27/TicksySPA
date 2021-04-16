import Topic from './Topic';
import API from '../../../API';
import {message} from 'antd';
import Assets from '../../../Assets';
import styles from './styles.module.scss';
import {useEffect, useState} from 'react';
import RecommendedTopicsDto from '../../../API/DTOs/RecommendedTopicsDto';

const initialTopics: RecommendedTopicsDto[] = new Array(6).fill({
  slug: 'test',
  avatar: Assets.Images.TopicIcon,
  title: 'لورم اپسیوم متن ساختگی',
  description: 'نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد',
});

export default function RecommendedTopics() {
  const [Topics, setTopics] = useState<RecommendedTopicsDto[]>(initialTopics);

  useEffect(() => {
    API.GetRecommendedTopics.GetRecommendedTopics({
      page: 1,
    })
      .then((response) => {
        if (response.results.length) {
          setTopics(response.results);
        } else {
          message.error('متاسفانه هنوز تاپیک پیشنهادی ای وجود ندارد');
        }
      })
      .catch((error) => {
        message.error('خطایی در دریافت تاپیک های پیشنهادی به وجود آمده.');
      });
  }, []);

  return (
    <div className={styles.main}>
      <h2 className={styles.main_title}>تاپیک های پیشنهادی</h2>
      <div className={styles.topic_container}>
        {Topics.map((topic, key) => (
          <Topic
            key={key}
            slug={topic.slug}
            icon={topic.avatar}
            title={topic.title}
            description={topic.description}
            badge={Assets.Images.TopicBadge}
          />
        ))}
      </div>
    </div>
  );
}
