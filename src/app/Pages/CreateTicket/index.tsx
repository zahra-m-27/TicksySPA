import React, {useEffect, useRef, useState} from 'react';
import {Button, message, Spin} from 'antd';
import Assets from '../../Assets';
import {Link, useHistory, useParams} from 'react-router-dom';
import styles from './styles.module.scss';
import SEInput from '../../Components/SEInput';
import API from '../../API';
import TopicDto from '../../API/DTOs/TopicDto';
import useUser from '../../Hooks/useUser';
import TInput from '../../Components/TInput';
import TTextArea from '../../Components/TTextArea';
import SelectFile from '../../Components/SelectFile';

export default function CreateTicketPage() {
  const {user} = useUser();
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

  let content = <Spin size="large" className={styles.loading} />;

  if (Topic) {
    content = (
      <>
        <img
          alt=""
          className={styles.avatar}
          src={Topic.avatar ?? Assets.SVGs.DefaultAvatar}
        />
        <p className={styles.input_box_title}>{Topic.title}</p>
        <p className={styles.input_box_description} dir="auto">
          {Topic.description}
        </p>

        <TInput
          label="موضوع"
          content={Title}
          onEnter={onTitleEnter}
          onChangeText={setTitle}
          hasError={TitleHasError}
          inputClassName={styles.input}
          className={styles.input_container}
          labelClassName={styles.input_label}
        />

        <TTextArea content={Message} onChange={setMessage} />

        {/*<SEInput*/}
        {/*  minLines={5}*/}
        {/*  content={Message}*/}
        {/*  ref={messageRef}*/}
        {/*  label="پيام شما..."*/}
        {/*  onChangeText={setMessage}*/}
        {/*  attachments={Attachments}*/}
        {/*  hasError={MessageHasError}*/}
        {/*  inputClassName={styles.input}*/}
        {/*  className={styles.input_class}*/}
        {/*  onRemoveAttachment={(index) => {*/}
        {/*    Attachments.splice(index, 1);*/}
        {/*    setAttachments([...Attachments]);*/}
        {/*  }}*/}
        {/*  labelClassName={styles.input_label}*/}
        {/*  onSelectFile={(file) => setAttachments([file, ...Attachments])}*/}
        {/*/>*/}

        <div className={styles.tag_and_file_container}>
          <TInput
            tags={Tags}
            label="تگ ها"
            content={CurrentTag}
            onChangeText={setCurrentTag}
            className={styles.tag_input_container}
            onTagClose={(index) => {
              Tags.splice(index, 1);
              setTags([...Tags]);
            }}
            onEnter={() => {
              setTags([CurrentTag, ...Tags]);
              setCurrentTag('');
            }}
          />

          <SelectFile className={styles.tag_input_container} />
        </div>

        <div className={styles.submit_container}>
          <Button
            loading={Loading}
            type="primary"
            className={styles.enter_button}
            onClick={onCreateTicket}>
            ثبت
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
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
      <div className={styles.welcome}>
        <p dir="auto">
          {user.first_name + ' ' + user.last_name} عزیز خوش آمدید.
        </p>
      </div>
      <div className={styles.card_container}>{content}</div>
      {Topic && (
        <div className={styles.footer}>
          <p dir="auto">
            کلیه حقوق این وب سایت متعلق به دانشگاه خوارزمی میباشد.
          </p>
          <img src={Assets.SVGs.Copyright} />
        </div>
      )}
    </div>
  );
}
