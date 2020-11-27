import React from "react";
import styles from "./styles.module.scss";
import ForgotPasswordInputBox from "./Components/ForgotPasswordInputBox";

export default function ForgotPasswordPage() {
  return (
    <div className={styles.container}>
      <div className={styles.message_box}>
        <p className={styles.message1}>:) خوشحاليم كه ما رو انتخاب كرديد</p>
        <p className={styles.message2}>
          لورم اسپيوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ وبا استفاده
          از طراحان گرافيك است.چاپگرها و متون بلكه روزنامه مجله در ستون و سطر
          انچنان كه لازم است وبراي شرايط فعلي تكنولوژي موردنياز و كاربردهاي
          متنوع با هدف بهبود ابزار كاربردي ميباشد كتابهاي زيادي در شصت وسه درصد
          گذشته،حال وآینده شناخت فراوان جامعه و .متخصصان را مي طلبد
        </p>
      </div>
      <ForgotPasswordInputBox className={styles.input_box_container} />
    </div>
  );
}
