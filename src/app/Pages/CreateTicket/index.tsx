import React, { useState } from "react";
import { Button } from "antd";
import Assets from "../../Assets";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import SEInput from "../../Components/SEInput";

export default function CreateTicket() {
  const [Tags, setTags] = useState<string[]>([]);
  const [CurrentTag, setCurrentTag] = useState<string>("");
  const [Attachments, setAttachments] = useState<File[]>([]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/contact-us">ارتباط با ما</Link>
        <Link to="/dashboard">داشبورد</Link>
        <Link to="/home">خانه</Link>
        <Link to="/">تیکسی</Link>
        <Assets.SVGs.GridSVG />
        <img src={Assets.Images.Ticksy} alt="logo" />
      </div>
      <div className={styles.card_container}>
        <img src={Assets.Images.GoogleImage} className={styles.avatar} alt="" />
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
          attachments={Attachments}
          inputClassName={styles.input}
          className={styles.input_class}
          onRemoveAttachment={(index) => {
            Attachments.splice(index, 1);
            setAttachments([...Attachments]);
          }}
          labelClassName={styles.input_label}
          onSelectFile={(file) => setAttachments([file, ...Attachments])}
        />

        <div className={styles.submit_container}>
          <Button type="primary" className={styles.enter_button}>
            ثبت
          </Button>
          <SEInput
            tags={Tags}
            label="تگ ها"
            content={CurrentTag}
            onTagClose={(index) => {
              Tags.splice(index, 1);
              setTags([...Tags]);
            }}
            onChangeText={setCurrentTag}
            inputClassName={styles.input}
            onEnter={() => {
              setTags([CurrentTag, ...Tags]);
              setCurrentTag("");
            }}
            className={styles.tag_input_class}
            labelClassName={styles.input_label}
          />
        </div>
      </div>
    </div>
  );
}
