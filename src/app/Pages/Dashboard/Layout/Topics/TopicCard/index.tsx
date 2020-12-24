import React from "react";
import styles from "../styles.module.scss";
import Assets from "../../../../../Assets";

export default function TopicCard() {
  return (
    <div className={styles.card}>
      <img src={Assets.Images.TopicCard} />
      <div className={styles.card_content}>
        <div className={styles.card_content_header}>
          <div className={styles.topic_avatar}>
            <img src={Assets.Images.DotSquare2} />
            <img src={Assets.Images.ManTicket} className={styles.avatar} />
          </div>
        </div>
        <div className={styles.card_content_footer}>
          <div className={styles.card_content_footer_edit}>
            <img src={Assets.Images.EditProperty} />
          </div>
          <span>عنوان اول</span>
          <p>نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد</p>
        </div>
      </div>
    </div>
  );
}
