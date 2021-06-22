import API from '../../../../../API';
import {Button, message} from 'antd';
import Assets from '../../../../../Assets';
import {useRef, useState} from 'react';
import styles from './styles.module.scss';
import {useHistory} from 'react-router-dom';
import SEInput from '../../../../../Components/SEInput';

export default function CreateTopic() {
  const history = useHistory();
  const [Title, setTitle] = useState('');
  const [Avatar, setAvatar] = useState<File>();
  const [Loading, setLoading] = useState(false);
  const [AvatarUrl, setAvatarUrl] = useState<any>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const [Description, setDescription] = useState('');
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [TitleHasError, setTitleHasError] = useState(false);
  const [DescriptionHasError, setDescriptionHasError] = useState(false);

  const onTitleEnter = () => {
    if (usernameRef && usernameRef.current) {
      usernameRef.current.focus();
    }
  };
  const onUsernameEnter = () => {
    if (descriptionRef && descriptionRef.current) {
      descriptionRef.current.focus();
    }
  };

  const onCreateTopic = () => {
    if (!Title) {
      setTitleHasError(true);
    }
    if (!Description) {
      setDescriptionHasError(true);
    }
    if (!Avatar) {
      message.error('برای تاپیک خود یک آواتار انتخاب کنید');
    }
    if (!Title || !Description || !Avatar) {
      return;
    }
    setTitleHasError(false);
    setDescriptionHasError(false);

    setLoading(true);
    API.Topics.CreateTopic({
      title: Title,
      avatar: Avatar,
      description: Description,
    })
      .then(() => {
        message.success('تاپیک با موفقیت ایجاد شد.');
        history.push('/dashboard/topics');
      })
      .catch((error) => {
        if (error.status === 403) {
          message.error('برای این عملیات نیاز هست تا احراز هویت کرده باشید');
        } else {
          message.error('انجام این عملیات ممکن نیست');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.header}>
          تاپيک جدید
          <img src={Assets.SVGs.Topic} alt="" />
        </div>
        <div className={styles.upload}>
          <label htmlFor="picture">
            <img
              alt=""
              className={styles.picture}
              src={AvatarUrl ?? Assets.Images.GoogleImage2}
            />
          </label>
          <input
            type="file"
            id="picture"
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
        <div className={styles.middle}>
          <label>:عنوان</label>
          <SEInput
            content={Title}
            onEnter={onTitleEnter}
            onChangeText={setTitle}
            hasError={TitleHasError}
            innerContainerClassName={styles.input}
          />
        </div>
        <div className={styles.below}>
          <label>:توضيح</label>
          <SEInput
            minLines={5}
            ref={descriptionRef}
            content={Description}
            onChangeText={setDescription}
            hasError={DescriptionHasError}
            innerContainerClassName={styles.input}
          />
        </div>
        <Button
          loading={Loading}
          type="primary"
          className={styles.enter_button}
          onClick={onCreateTopic}>
          ثبت
        </Button>
      </div>
    </div>
  );
}
