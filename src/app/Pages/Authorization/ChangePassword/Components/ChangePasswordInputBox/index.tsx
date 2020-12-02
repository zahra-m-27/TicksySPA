import React from "react";
import { Button } from "antd";
import SEInput from "../../../../../Components/SEInput";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

export default function ForgotPasswordInputBox({ className }: Props) {
  return (
    <div className={className}>
      <p className={styles.input_box_title}>تغيير رمز عبور!</p>
      <SEInput
        type="password"
        label="گذرواژه"
        hint=""
        onChangeText={() => {}}
        innerContainerClassName={styles.inner_container}
        inputClassName={styles.input}
        className={styles.input_class}
      />
      <SEInput
        type="password"
        label="تاييد گذرواژه"
        hint=""
        onChangeText={() => {}}
        innerContainerClassName={styles.inner_container}
        inputClassName={styles.input}
        className={styles.input_class}
      />
      <Button type="primary" className={styles.enter_button}>
        ثبت
      </Button>
    </div>
  );
}
