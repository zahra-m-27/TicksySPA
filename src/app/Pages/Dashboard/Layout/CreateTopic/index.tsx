import React from "react";
import styles from "./styles.module.scss";
import Topic from "../../../../Assets/Images/Files/topic.png";
import Picture from "../../../../Assets/Svgs/components/camera.svg";
import { Button } from "antd";

export default function CreateTopic() {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.header}>
          تاپيک جدید
          <img src={Topic} />
        </div>
        <div className={styles.upload}>
          <label htmlFor="picture">
            <img src={Picture} className={styles.picture} />
          </label>
          <input type="file" id="picture" className={styles.upload_image} />

          <div className={styles.middle}>
            <label> عنوان:</label>
            <input type="text" />
            <label> شناسه:</label>
            <input type="text" />
          </div>
          <div className={styles.below}>
            <label> توضيح:</label>
            <input type="text" />
          </div>
          <Button type="primary" className={styles.enter_button}>
            ثبت
          </Button>
        </div>
      </div>
    </div>
  );
}
