import { Button } from "antd";
import styles from "./styles.module.scss";
import SEInput from "../../../../Components/SEInput";

interface Props {
  className?: string;
}

export default function SignInInputBox({ className }: Props) {
  return (
    <div className={className}>
      <p className={styles.input_box_title}>ثبت نام کنید!</p>
      <SEInput
        type="text"
        label="نام خانوادگی"
        hint=""
        onChangeText={() => {}}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="text"
        label="ايميل"
        hint="example@gmail.com"
        onChangeText={() => {}}
        inputClassName={styles.input}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
        regex={
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
        }
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
        ثبت نام
      </Button>
    </div>
  );
}
