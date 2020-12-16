import React from "react";
import styles from "./styles.module.scss";
import Topic from "../../../../Assets/Images/Files/topic.png";
import Picture from "../../../../Assets/Images/Files/picture.png";
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
          <img src={Picture} />
          <label>
            <input type="file" id="input-file" accept=".jpg" />
          </label>
        </div>
        <div className={styles.middle}>
          <label> عنوان:</label>
          <input type="text" />
          <label> شناسه:</label>
          <input type="text" />
        </div>
        <div className={styles.new}>
          <label> توضيح:</label>
          <input type="text" />
        </div>
        <Button type="primary" className={styles.enter_button}>
          ثبت
        </Button>
      </div>
    </div>
  );
}
