import { Button } from "antd";
import React, { useState } from "react";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import SEInput from "../../../../Components/SEInput";

export default function Profile() {
  const history = useHistory();
  const [CanChange, setCanChange] = useState<boolean>(false);

  return (
    <div className={styles.rectangle}>
      <div className={styles.header}>
        پروفايل
        <Assets.SVGs.ProfileIconSVG />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={Assets.SVGs.UserAvatar} className={styles.profile} alt="" />
          {CanChange && (
            <div className={styles.upload}>
              <label htmlFor="add">
                <Assets.SVGs.AddPhotoSVG className={styles.add_photo} />
              </label>
              <input type="file" id="add" className={styles.upload_image} />
            </div>
          )}
        </div>
        <div className={styles.right}>
          {CanChange ? (
            <div className={styles.change}>
              <p className={styles.small}>نام و خانوادگي</p>
              <SEInput onChangeText={() => {}} className={styles.input} />
              <p className={styles.small}>ايميل</p>
              <SEInput
                onChangeText={() => {}}
                className={styles.input}
                regex={
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
                }
              />
              <p className={styles.small}>تاريخ ثبت نام</p>
              <SEInput onChangeText={() => {}} className={styles.input} />
            </div>
          ) : (
            <>
              <p className={styles.big}>نام و خانوادگي</p>
              <p className={styles.small}> سيد علي علوي</p>
              <p className={styles.big}>ايميل</p>
              <p className={styles.small}>alialavi@gmail.com</p>
              <p className={styles.big}>تاريخ ثبت نام</p>
              <p className={styles.small}>97/04/11</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.actions}>
        {!CanChange && (
          <Button
            type="primary"
            onClick={() => history.push("/dashboard/submit-certificate")}
            className={styles.change_button}
          >
            احراز هویت
          </Button>
        )}
        <Button
          type="primary"
          onClick={() => setCanChange(!CanChange)}
          className={CanChange ? styles.change_button : styles.record_button}
        >
          {CanChange ? "ثبت" : "تغییر"}
        </Button>
      </div>
    </div>
  );
}
