import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Button, message, Spin} from 'antd';
import Assets from '../../Assets';
import {Link, useHistory, useParams} from 'react-router-dom';
import styles from './styles.module.scss';
import SEInput from '../../Components/SEInput';
import API from '../../API';
import TopicDto from '../../API/DTOs/TopicDto';
import DropDown from '../../Components/DropDown';
export default function CreateTicketPage() {
  const history = useHistory();
  const params = useParams<any>();
  const [Title, setTitle] = useState('');
  const [Message, setMessage] = useState('');
  const [Loading, setLoading] = useState(false);
  const [Tags, setTags] = useState<string[]>([]);
  const [Topic, setTopic] = useState<TopicDto>();
  const messageRef = useRef<HTMLInputElement>(null);
  const [CurrentTag, setCurrentTag] = useState<string>('');
  const [TitleHasError, setTitleHasError] = useState(false);
  const [Attachments, setAttachments] = useState<File[]>([]);
  const [MessageHasError, setMessageHasError] = useState(false);

  useEffect(() => {
    API.Topics.GetTopic({
      slug: params.username,
    })
      .then((response) => setTopic(response))
      .catch((error) => {
        if (error.status === 404) {
          message.error('تاپیک موردنظر یافت نشد.');
        } else {
          message.error('اشکالی در دریافت اطلاعات تایپک رخ داده.');
        }
      });
  }, []);

  const onCreateTicket = () => {
    setLoading(true);
    API.Topics.CreateTicket({
      priority: 1,
      title: Title,
      text: Message,
      tags: Tags.join(','),
      slug: params.username,
      attachments: Attachments,
    })
      .then(() => history.replace('/dashboard/tickets'))
      .catch(() => {
        message.error('انجام این عملیات ممکن نیست');
      })
      .finally(() => setLoading(false));
  };

  const onTitleEnter = () => {
    if (messageRef && messageRef.current) {
      messageRef.current.focus();
    }
  };

  if (!Topic) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/contact-us">ارتباط با ما</Link>
          <Link to="/dashboard">داشبورد</Link>
          <Link to="/">خانه</Link>
          <Link to="/">تیکسی</Link>
          <Assets.SVGs.GridSVG />
          <img src={Assets.Images.Ticksy} alt="logo" />
        </div>
        <div className={styles.card_container}>
          <Spin size="large" className={styles.loading} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <DropDown />
      <div className={styles.header}>
        <Link to="/contact-us">ارتباط با ما</Link>
        <Link to="/dashboard">داشبورد</Link>
        <Link to="/">خانه</Link>
        <Link to="/">تیکسی</Link>
        <Assets.SVGs.GridSVG />
        <img
          alt="logo"
          src={Assets.Images.Ticksy}
          onClick={() => history.push('/')}
        />
      </div>
      <div className={styles.card_container}>
        <img
          alt=""
          className={styles.avatar}
          src={Topic.avatar ?? Assets.Images.GoogleImage}
        />
      </div>
    </div>
  );
}
