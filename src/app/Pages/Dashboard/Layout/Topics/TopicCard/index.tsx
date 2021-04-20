import styles from './styles.module.scss';
import Assets from '../../../../../Assets';
import {useHistory} from 'react-router-dom';
import {useLayoutEffect, useRef} from 'react';

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
      <img
        alt="Topic Avatar"
        className={styles.card_avatar}
        src={avatar ?? Assets.Images.TopicCardAvatar}
        onClick={() => history.push('/dashboard/topics/' + username)}
      />
      <div className={styles.card_footer}>
        <img
          alt="edit"
          src={Assets.Images.Edit}
          className={styles.card_edit}
          onClick={() => history.push('/dashboard/topics/edit/' + username)}
        />
        <div
          className={styles.card_detail}
          onClick={() => history.push('/dashboard/topics/' + username)}>
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
