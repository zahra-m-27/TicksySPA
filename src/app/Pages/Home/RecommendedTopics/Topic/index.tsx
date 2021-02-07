import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

interface Props {
  icon: string;
  title: string;
  badge: string;
  description: string;
}

export default function Topic({ title, description, icon, badge }: Props) {
  const history = useHistory();
  return (
    <div className={styles.topic} onClick={() => history.push("/ticket/test")}>
      <div className={styles.topic_badge}>
        <img src={badge} alt="" />
      </div>
      <div className={styles.topic_content}>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
      <div className={styles.topic_pic}>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
