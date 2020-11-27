import React from "react";
import styles from "./styles.module.scss";
import ConfirmEmailInputBox from "./Components/ConfirmEmailInputBox";
import {Link} from "react-router-dom";

export default function ConfirmEmailPage() {
    return (
        <div className={styles.container}>
            <div className={styles.message_box}>
                <p className={styles.message}>تایید حساب شما با موفقیت انجام شد از سایت خودتون لذت ببرید</p>
            </div>
            <Link
                to="../../../home/styles.module.scss">
                صفحه اصلی
            </Link>
            <ConfirmEmailInputBox className={styles.input_box_container} />
        </div>
    );
}