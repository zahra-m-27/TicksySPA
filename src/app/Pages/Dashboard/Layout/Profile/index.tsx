import React, { useState } from "react";
import styles from "./styles.module.scss";
import maleuser from "../../../../Assets/Svgs/components/male_user.svg";
import addprofile from "../../../../Assets/Svgs/components/AddProfile.svg";
import profile from "../../../../Assets/Svgs/components/profile.svg";
import SEInput from "../../../../Components/SEInput";
import { Button } from "antd";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.header}>
          پروفايل
          <img src={maleuser} />
        </div>
        <div className={styles.right}>
          <p className={styles.big}>نام و خانوادگي</p>
          <p className={styles.small}> سيد علي علوي</p>
          <p className={styles.big}>ايميل</p>
          <p className={styles.small}>alialavi@gmail.com</p>
          <p className={styles.big}>تاريخ ثبت نام</p>
          <p className={styles.small}>97/04/11</p>
        </div>
        <img src={profile} className={styles.profile} />
        <div className={styles.upload}>
          <label htmlFor="add">
            <img src={addprofile} className={styles.addprofile} />
          </label>
          <input type="file" id="add" className={styles.upload_image} />
        </div>

        <Button type="primary" className={styles.enter_button}>
          تغيير
        </Button>
      </div>
    </div>
  );
}
