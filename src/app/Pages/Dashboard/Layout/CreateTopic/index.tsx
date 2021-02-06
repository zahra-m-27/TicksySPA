import { Button } from "antd";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import SEInput from "../../../../Components/SEInput";

export default function CreateTopic() {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.header}>
          تاپيک جدید
          <img src={Assets.SVGs.Topic} alt="" />
        </div>
        <div className={styles.upload}>
          <label htmlFor="picture">
            <img src={Assets.SVGs.Camera} className={styles.picture} alt="" />
          </label>
          <input type="file" id="picture" className={styles.upload_image} />
        </div>
        <div className={styles.middle}>
          <label>:عنوان</label>
          <SEInput
            onChangeText={() => {}}
            innerContainerClassName={styles.input}
          />
          <label>:شناسه</label>
          <SEInput
            onChangeText={() => {}}
            innerContainerClassName={styles.input}
          />
        </div>
        <div className={styles.below}>
          <label>:توضيح</label>
          <SEInput
            minLines={5}
            onChangeText={() => {}}
            innerContainerClassName={styles.input}
          />
        </div>
        <Button type="primary" className={styles.enter_button}>
          ثبت
        </Button>
      </div>
    </div>
  );
}
