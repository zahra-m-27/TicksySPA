import styles from "../styles.module.scss";
import Assets from "../../../../../Assets";
import { useHistory } from "react-router-dom";

interface Props {
  username: string;
}

export default function TopicCard({ username }: Props) {
  const history = useHistory();

  return (
    <div className={styles.card}>
      <img src={Assets.Images.TopicCard} alt="" />
      <div className={styles.card_content}>
        <div
          className={styles.card_content_header}
          onClick={() => history.push("/dashboard/tickets/" + username)}
        >
          <div className={styles.topic_avatar}>
            <img src={Assets.Images.DotSquare2} alt="" />
            <img
              alt=""
              className={styles.avatar}
              src={Assets.Images.ManTicket}
            />
          </div>
        </div>
        <div className={styles.card_content_footer}>
          <div
            className={styles.card_content_footer_edit}
            onClick={() => history.push("/dashboard/topics/edit/" + username)}
          >
            <img src={Assets.Images.EditProperty} alt="edit" />
          </div>
          <span>عنوان اول</span>
          <p>نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد</p>
        </div>
      </div>
    </div>
  );
}
