import Topic from './Topic';
import API from '../../../API';
import {message} from 'antd';
import Assets from '../../../Assets';
import styles from './styles.module.scss';
import {useEffect, useRef, useState} from 'react';
import RecommendedTopicsDto from '../../../API/DTOs/RecommendedTopicsDto';

const initialTopics: RecommendedTopicsDto[] = new Array(6).fill({
  slug: 'test',
  avatar: Assets.Images.TopicIcon,
  title: 'لورم اپسیوم متن ساختگی',
  description: 'نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد',
});

export default function RecommendedTopics() {
  const IsMount = useRef(true);
  const [Topics, setTopics] = useState<RecommendedTopicsDto[]>(initialTopics);

  useEffect(() => {
    API.Topics.GetRecommendedTopics({
      offset: 0,
      limit: 100,
    })
      .then((response) => {
        if (IsMount.current)
          if (response.results.length) {
            setTopics(response.results);
          } else {
            message.error('متاسفانه هنوز تاپیک پیشنهادی ای وجود ندارد');
          }
      })
      .catch((error) => {
        message.error('خطایی در دریافت تاپیک های پیشنهادی به وجود آمده.');
      });
    return () => {
      IsMount.current = false;
    };
  }, []);

  return (
    <div className={styles.main}>
      <h2 className={styles.main_title}>تاپیک های پیشنهادی</h2>
      <div className={styles.topic_container}>
        {Topics.map((topic, key) => (
          <Topic
            key={key}
            topicId={topic.id}
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
