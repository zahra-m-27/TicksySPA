import React from "react";
import { Button, Tag } from "antd";
import SEInput from "../../Components/SEInput";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Grid from "../../Assets/Images/Files/grid.svg";
import Assets from "../../Assets";

interface Props {
  className?: string;
}

export default function CreateTicket({ className }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/contact-us">ارتباط با ما</Link>
        <Link to="/dashboard">داشبورد</Link>
        <Link to="/home">خانه</Link>
        <Link to="/">تیکسی</Link>
        <img src={Grid} />
        <img src={Assets.Images.Ticksy} />
      </div>
      <div className={styles.card_container}>
        <label htmlFor="avatar">
          <img src={Assets.Images.GoogleImage} className={styles.avatar} />
        </label>
        <input type="file" id="avatar" className={styles.upload_image} />
        <p className={styles.input_box_title}>اسم تاپیک</p>
        <p className={styles.input_box_description} dir="auto">
          لورم اپسیوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.کتابهای زیادی در شصت و سه درصد گذشته ، حال و
          آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>

        <SEInput
          label="موضوع"
          onChangeText={() => {}}
          inputClassName={styles.input}
          className={styles.input_class}
          labelClassName={styles.input_label}
        />
        <SEInput
          minLines={5}
          label="پيام شما..."
          onChangeText={() => {}}
          handleAttachment={() => {}}
          inputClassName={styles.input}
          className={styles.input_class}
          labelClassName={styles.input_label}
        />

        <div className={styles.submit_container}>
          <Button type="primary" className={styles.enter_button}>
            ثبت
          </Button>
          <SEInput
            label="تگ ها"
            onChangeText={() => {}}
            inputClassName={styles.input}
            className={styles.tag_input_class}
            labelClassName={styles.input_label}
          />
        </div>

        <div className={className}></div>
      </div>
    </div>
  );
}
