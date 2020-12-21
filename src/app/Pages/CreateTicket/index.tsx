import React from "react";
import { Button, Tag } from "antd";
import SEInput from "../../Components/SEInput";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import TicksyLogo from "../../Assets/Images/Files/ticksy.png";

interface Props {
  className?: string;
}

export default function CreateTicket({ className }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav_link}>
              <img className={styles.ticksy_image} src={TicksyLogo} />
            </li>
            <li className={styles.nav_link}>
              <p className={styles.ticksy}> تيكسي</p>
            </li>
            <li className={styles.nav_link}>
              <Link to="/home">خانه</Link>
            </li>
            <li className={styles.nav_link}>
              <Link to="/dashboard">داشبورد</Link>
            </li>
            <li className={styles.nav_link}>
              <Link to="/contact-us">ارتباط با ما</Link>
            </li>
          </ul>
        </nav>
      </div>
      <label className={styles.upload_image2}>
        <input type="file" className={styles.upload_image} />
      </label>
      <p className={styles.input_box_title}>اسم تاپیک</p>

      <SEInput
        type="text"
        label="موضوع"
        hint=""
        onChangeText={() => {}}
        inputClassName={styles.input1}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <SEInput
        type="text"
        label="پيام شما..."
        hint=""
        onChangeText={() => {}}
        inputClassName={styles.input2}
        className={styles.input_class}
        labelClassName={styles.input_label}
        innerContainerClassName={styles.inner_container}
      />
      <Button type="primary" className={styles.enter_button}>
        ثبت
      </Button>

      <div className={className}></div>
    </div>
  );
}
