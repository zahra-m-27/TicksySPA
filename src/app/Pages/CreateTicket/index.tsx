import React, {useEffect, useRef, useState} from 'react';
import {message, Spin} from 'antd';
import Assets from '../../Assets';
import {Link, useHistory, useParams} from 'react-router-dom';
import styles from './styles.module.scss';
import API from '../../API';
import TopicDto from '../../API/DTOs/TopicDto';
import useUser from '../../Hooks/useUser';
import TInput from '../../Components/TInput';
import TTextArea from '../../Components/TTextArea';
import TSelectFile from '../../Components/TSelectFile';
import TDropDown from '../../Components/TDropDown';
import TButton from '../../Components/TButton';
import CategoryDto from '../../API/DTOs/CategoryDto';

export default function CreateTicketPage() {
  const {user} = useUser();
  const history = useHistory();
  const params = useParams<{topicId: string}>();
  const [Topic, setTopic] = useState<TopicDto>();
  const [Title, setTitle] = useState('');
  const [Message, setMessage] = useState('');
  const [Attachment, setAttachment] = useState<File>();
  const [Tags, setTags] = useState<string[]>([]);
  const [CurrentTag, setCurrentTag] = useState<string>('');
  const [SelectedCategory, setSelectedCategory] = useState<number>();
  const [Categories, setCategories] = useState<CategoryDto[]>([]);

  useEffect(() => {
    API.Topics.GetTopic({
      topicId: parseInt(params.topicId),
    })
      .then((response) => setTopic(response))
      .catch(() => {
        message.error('تاپیک موردنظر یافت نشد.');
      });
    API.Topics.GetTopicCategories({
      topicId: parseInt(params.topicId),
      limit: 100,
      offset: 0,
    })
      .then((response) => {
        setCategories(response.results);
      })
      .catch(() => undefined);
  }, [params.topicId]);

  const onCreateTicket = () => {
    API.Tickets.CreateTicket({
      priority: 1,
      title: Title,
      text: Message,
      tags: Tags.join(','),
      section: SelectedCategory ?? 0,
      attachments: Attachment ? [Attachment] : [],
    })
      .then(() => history.replace('/dashboard/tickets'))
      .catch(() => {
        message.error('انجام این عملیات ممکن نیست');
      });
  };

  let content = <Spin size="large" className={styles.loading} />;

  if (Topic && Categories && Categories.length) {
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

        <TDropDown<number>
          label="دسته بندی تیکت"
          className={styles.topic_type_container}
          items={Categories.map((item) => {
            return {
              label: item.title,
              value: item.id,
            };
          })}
          onSelect={(values) => setSelectedCategory(values[0])}
          selectedItem={SelectedCategory ? [SelectedCategory] : []}
        />

        <TInput
          label="موضوع"
          content={Title}
          onChangeText={setTitle}
          data-testid="title_input"
          inputClassName={styles.input}
          className={styles.input_container}
          labelClassName={styles.input_label}
        />

        <TTextArea content={Message} onChange={setMessage} />

        <div className={styles.tag_and_file_container}>
          <TInput
            tags={Tags}
            label="تگ ها"
            data-testid="tags_input"
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

          <TSelectFile
            className={styles.tag_input_container}
            onSelectFile={(file) => setAttachment(file)}
            onRemoveAttachment={() => setAttachment(undefined)}
          />
        </div>

        <div className={styles.submit_container}>
          <TButton onClick={onCreateTicket} label="ثبت" data-testid="submit" />
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
