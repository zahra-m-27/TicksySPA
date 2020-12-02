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
      <p className={styles.input_box_title}>فراموشي گذرواژه!</p>

      <SEInput
        type="text"
        label="ايميل"
        hint="example@gmail.com"
        onChangeText={() => {}}
        regex={
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
        }
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
