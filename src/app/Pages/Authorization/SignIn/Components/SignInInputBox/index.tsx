import React from "react";
import { Button } from "antd";
import SEInput from "../../../../../Components/SEInput";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

export default function SignInInputBox({ className }: Props) {
  return (
    <div className={className}>
      <p className={styles.input_box_title}>وارد شوید!</p>
      <SEInput
        type="text"
        label="ايميل"
        hint="example@gmail.com"
        onChangeText={() => {}}
        regex={
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
        }
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="password"
        label="گذرواژه"
        hint=""
        onChangeText={() => {}}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <Button type="primary" className={styles.enter_button}>
        ورود
      </Button>
      <a className={styles.forget_pass} href="">
        فراموشی گذرواژه
      </a>
    </div>
  );
}
