import API from '../../../../API';
import TopicCard from './TopicCard';
import Assets from '../../../../Assets';
import styles from './styles.module.scss';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import TopicsDto from '../../../../API/DTOs/TopicsDto';
import {message} from 'antd';

export default function Topics() {
  const history = useHistory();
  const [Topics, setTopics] = useState<TopicsDto[]>([]);

  useEffect(() => {
    API.Topics.GetTopics({
      page: 1,
    })
      .then((response) => {
        setTopics(
          response.results
            .filter((a) => !Topics.find((b) => a.id === b.id))
            .concat(Topics)
        );
      })
      .catch((error) => {
        if (error.status === 403) {
          message.error('برای این عملیات نیاز هست تا احراز هویت کرده باشید');
        } else {
          message.error('انجام این عملیات ممکن نیست');
        }
      });
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.add_topic}
        onClick={() => history.push('/dashboard/topics/new')}>
        <p>افزودن</p>
        <img src={Assets.Images.Add} alt="" />
      </div>
      <div className={styles.cards}>
        {Topics.map((item, index) => (
          <TopicCard
            key={index}
            title={item.title}
            avatar={item.avatar}
            username={item.slug}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
