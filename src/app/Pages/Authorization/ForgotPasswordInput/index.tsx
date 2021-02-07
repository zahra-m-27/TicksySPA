import { Button } from "antd";
import styles from "./styles.module.scss";
import SEInput from "../../../Components/SEInput";

interface Props {
  className?: string;
}

export default function ForgotPasswordInput({ className }: Props) {
  return (
    <div className={className}>
      <p className={styles.input_box_title}>فراموشي گذرواژه!</p>

      <SEInput
        type="text"
        label="ايميل"
        regex={/^\S+@\S+$/}
        hint="example@gmail.com"
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
