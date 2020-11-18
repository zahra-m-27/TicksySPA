import React from "react";
import SEInput from "../../../../Components/SEInput";
import styles from './styles.module.scss'

function SignInInputBox() {
    return (
        <div className={styles.input_box_container}>
            <p className={styles.input_box_title}>وارد شوید!</p>
            <SEInput type={"text"} label={"ايميل"} hint={"example@gmail.com"} onChangeText={() => {}}
                     regex={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/}
                     innerContainerClassName={styles.inner_container}
                     inputClassName={styles.input}
                     className={styles.input_class}
            />
            <SEInput type={"password"} label={"گذرواژه"} hint={""} onChangeText={() => {}}
                     innerContainerClassName={styles.inner_container}
                     inputClassName={styles.input}
                     className={styles.input_class}
            />
            <button className={styles.enter_button} onClick={() => {}}>
                ورود
            </button>
            <a className={styles.forget_pass} href={''}>فراموشی گذرواژه </a>
        </div>
    );
}

export default SignInInputBox;