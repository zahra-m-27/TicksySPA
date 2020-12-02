import React from "react";
import styles from "./styles.module.scss";
import SignInInputBox from "./Components/SignInInputBox";

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.message_box}>
        <p className={styles.message1}>:) خوشحاليم كه ما رو انتخاب كرديد</p>
        <p className={styles.message2}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <SignInInputBox className={styles.input_box_container} />
    </div>
  );
}
