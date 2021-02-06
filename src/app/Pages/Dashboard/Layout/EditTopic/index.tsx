import React, { useState } from "react";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import SEInput from "../../../../Components/SEInput";
import TickCard from "../../../../Components/TickCard";
import ClassNames from "../../../../Utilities/ClassNames";

export default function EditTopic() {
  const [StartSearch, setStartSearch] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <TickCard
        title="اعضا"
        icon={Assets.SVGs.People}
        className={styles.member_card}
        contentClassName={styles.member_content}
      >
        {StartSearch ? (
          <div className={styles.search_box}>
            <SEInput
              onChangeText={() => {}}
              inputClassName={styles.search}
              className={styles.search_container}
              icon={<img src={Assets.SVGs.Search} alt="" />}
            />
            <img
              alt="cancel"
              src={Assets.SVGs.Cancel}
              className={styles.close_search}
              onClick={() => setStartSearch(false)}
            />
          </div>
        ) : (
          <div
            onClick={() => setStartSearch(true)}
            className={ClassNames(styles.member_container, styles.add_button)}
          >
            <img src={Assets.SVGs.Plus} alt="add member" />
            <p>افزودن عضو</p>
          </div>
        )}
        <div className={styles.member_container}>
          <img src={Assets.SVGs.Minus} alt="" />
          <p>alialavi@gmail.com</p>
        </div>
        <div className={styles.member_container}>
          <img src={Assets.SVGs.Minus} alt="" />
          <p>alialavi@gmail.com</p>
        </div>
        <div className={styles.member_container}>
          <img src={Assets.SVGs.Minus} alt="" />
          <p>alialavi@gmail.com</p>
        </div>
        <div className={styles.member_container}>
          <img src={Assets.SVGs.Minus} alt="" />
          <p>alialavi@gmail.com</p>
        </div>
        <div className={styles.member_container}>
          <img src={Assets.SVGs.Minus} alt="" />
          <p>alialavi@gmail.com</p>
        </div>
      </TickCard>
      <TickCard
        title="ویرایش تاپيک"
        icon={Assets.SVGs.Topic}
        className={styles.detail_card}
        buttons={[
          {
            label: "ثبت",
            className: styles.enter_button,
          },
        ]}
      >
        <div className={styles.upload}>
          <label htmlFor="picture">
            <img
              alt="avatar"
              src={Assets.SVGs.Camera}
              className={styles.picture}
            />
          </label>
          <input type="file" id="picture" className={styles.upload_image} />
        </div>
        <div className={styles.inputs_container}>
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
        </div>
      </TickCard>
    </div>
  );
}
