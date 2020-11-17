import React from "react";
import styles from "../SignIn/styles.module.scss";
import Background from "../../Assets/Svgs/components/Background.svg";
import Assets from "../../Assets";

function SignInPage() {
  return (
    <div>
      <Assets.Svgs.HeaderSvg className={styles.Header} />
      <img src={Background} className={styles.Background} />

      <h1 className={styles.Message1}>:) خوشحاليم كه ما رو انتخاب كرديد</h1>
      <p className={styles.Message2}>
        لورم اسپيوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ وبا
        <br />
        استفاده از طراحان گرافيك است.چاپگرها و متون بلكه روزنامه مجله در
        <br />
        ستون و سطر انچنان كه لازم است وبراي شرايط فعلي تكنولوژي موردنياز و
        <br />
        كاربردهاي متنوع با هدف بهبود ابزار كاربردي ميباشد كتابهاي زيادي
        <br />
        در شصت وسه درصد گذشته،حال وآینده شناخت فراوان جامعه و <br />
        .متخصصان را مي طلبد
      </p>
    </div>
  );
}

export default SignInPage;
