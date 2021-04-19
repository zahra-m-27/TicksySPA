import styles from '../styles.module.scss';
import Assets from '../../../../../Assets';
import {useHistory} from 'react-router-dom';

interface Props {
  title: string;
  avatar: string;
  username: string;
  description: string;
}

export default function TopicCard({
  title,
  avatar,
  username,
  description,
}: Props) {
  const history = useHistory();

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img
          src={avatar ?? Assets.Images.TopicCardAvatar}
          className={styles.card_avatar}
          alt=""
          onClick={() => history.push('/dashboard/topics/' + username)}
        />
        <div
          className={styles.card_edit}
          onClick={() => history.push('/dashboard/topics/edit/' + username)}>
          <img
            src={Assets.Images.Edit}
            className={styles.card_edit_image}
            alt="edit"
          />
        </div>
      </div>
      <div className={styles.card_footer}>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
