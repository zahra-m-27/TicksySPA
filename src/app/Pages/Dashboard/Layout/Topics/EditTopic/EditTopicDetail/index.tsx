import {message, Spin} from 'antd';
import API from '../../../../../../API';
import Assets from '../../../../../../Assets';
import styles from './styles.module.scss';
import {useEffect, useRef, useState} from 'react';
import SEInput from '../../../../../../Components/SEInput';
import {useHistory, useParams} from 'react-router-dom';
import EditTopicCard from '../../../../../../Components/EditTopicCard';

export default function EditTopicDetail() {
  const history = useHistory();
  const params = useParams<{topicId: string}>();
  const [Avatar, setAvatar] = useState<File>();
  const [Title, setTitle] = useState('');
  const [AvatarUrl, setAvatarUrl] = useState<any>();
  const [Description, setDescription] = useState('');
  const [SaveLoading, setSaveLoading] = useState(false);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [TitleHasError, setTitleHasError] = useState(false);
  const [Loading, setLoading] = useState(!process.env.JEST_WORKER_ID);
  const [DescriptionHasError, setDescriptionHasError] = useState(false);

  useEffect(() => {
    setLoading(!process.env.JEST_WORKER_ID);
    API.Topics.GetTopic({
      topicId: parseInt(params.topicId),
    })
      .then((response) => {
        setTitle(response.title);
        setAvatarUrl(response.avatar);
        setDescription(response.description);
      })
      .catch(() => message.error('اشکالی در دریافت اطلاعات تایپک رخ داده.'))
      .finally(() => setLoading(false));
  }, []);

  const onEditTopic = () => {
    if (!Title) {
      setTitleHasError(true);
    }
    if (!Description) {
      setDescriptionHasError(true);
    }
    if (!Avatar && !AvatarUrl) {
      message.error('برای تاپیک خود یک آواتار انتخاب کنید');
    }
    if (!Title || !Description || !Avatar) {
      return;
    }
    setTitleHasError(false);
    setDescriptionHasError(false);

    setSaveLoading(true);
    API.Topics.UpdateTopic({
      title: Title,
      avatar: Avatar,
      description: Description,
      topicId: parseInt(params.topicId),
    })
      .then(() => {
        message.success('تاپیک با بروز شد.');
        history.push('/dashboard/topics');
      })
      .catch((error) => {
        if (error.status === 403) {
          message.error('برای این عملیات نیاز هست تا احراز هویت کرده باشید');
        } else {
          message.error('انجام این عملیات ممکن نیست');
        }
      })
      .finally(() => setSaveLoading(false));
  };

  const onTitleEnter = () => {
    if (descriptionRef && descriptionRef.current) {
      descriptionRef.current.focus();
    }
  };

  if (Loading) {
    return (
      <div className={styles.container}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <EditTopicCard
        title="ویرایش تاپيک"
        icon={Assets.SVGs.Topic}
        className={styles.detail_card}
        buttons={[
          {
            label: 'ثبت',
            testId: 'submit',
            onClick: onEditTopic,
            loading: SaveLoading,
            className: styles.enter_button,
          },
        ]}>
        <div className={styles.upload}>
          <label htmlFor="picture">
            <img
              alt="avatar"
              className={styles.picture}
              src={AvatarUrl ?? Assets.Images.GoogleImage2}
            />
          </label>
          <input
            type="file"
            id="picture"
            data-testid="avatar"
            className={styles.upload_image}
            onChange={(e) => {
              if (e.target.files) {
                setAvatar(e.target.files[0]);
                const fr = new FileReader();
                fr.onload = function () {
                  setAvatarUrl(fr.result);
                };
                fr.readAsDataURL(e.target.files[0]);
              }
            }}
          />
        </div>
        <div className={styles.inputs_container}>
          <div className={styles.middle}>
            <label>عنوان</label>
            <SEInput
              content={Title}
              data-testid="title"
              onEnter={onTitleEnter}
              onChangeText={setTitle}
              hasError={TitleHasError}
              innerContainerClassName={styles.input_container}
            />
          </div>
          <div className={styles.below}>
            <label>توضيح</label>
            <SEInput
              minLines={5}
              ref={descriptionRef}
              content={Description}
              data-testid="description"
              onChangeText={setDescription}
              hasError={DescriptionHasError}
              inputClassName={styles.description_input}
              innerContainerClassName={styles.input_container}
            />
          </div>
        </div>
      </EditTopicCard>
    </div>
  );
}
