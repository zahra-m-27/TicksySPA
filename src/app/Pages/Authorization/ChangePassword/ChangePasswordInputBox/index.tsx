import { Button } from "antd";
import styles from "./styles.module.scss";
import SEInput from "../../../../Components/SEInput";

interface Props {
  className?: string;
}

export default function ForgotPasswordInputBox({ className }: Props) {
  return (
    <div className={className}>
      <p className={styles.input_box_title}>تغيير رمز عبور!</p>
      <SEInput
        hint=""
        type="password"
        label="گذرواژه"
        onChangeText={() => {}}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        hint=""
        type="password"
        label="تاييد گذرواژه"
        onChangeText={() => {}}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <Button type="primary" className={styles.enter_button}>
        ثبت
      </Button>
    </div>
  );
}
