import React from "react";
import styles from "./styles.module.scss";
import Topic from "../../../../Assets/Images/Files/topic.png";
import Picture from "../../../../Assets/Images/Files/picture.png";
import { Button } from "antd";

export default function CreateTopic() {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <div className={styles.header}>
          تاپيک جدید
          <img src={Topic} />
        </div>
        <div className={styles.border1}>
          <div className={styles.upload}>
            <label>
              <input
                type="file"
                id="input-file"
                src={Picture}
                accept=".jpg , .png"
              />
            </label>
          </div>
        </div>
        <div className={styles.middle}>
          <label> عنوان:</label>
          <input type="text" />
          <label> شناسه:</label>
          <input type="text" />
        </div>
        <div className={styles.new}>
          <label> توضيح:</label>
          <input type="text" />
        </div>
        <Button type="primary" className={styles.enter_button}>
          ثبت
        </Button>
      </div>
    </div>
  );
}
/*
.upload{
    width:80px;
    height:80px;
    border-radius: 50%;
    margin-left:-50%;
    text-align:right;
    padding-bottom:10px;
}
.upload label{
    display: block;
    margin:5px;
    text-align:right;
    font-size:12px;
    color:#707070;
    opacity:0.8;
    direction: rtl;

}
//*.upload input {
    direction: rtl;
    box-shadow: 1px 2px 3px  #ccc;
    width:80px;
    height:80px;
    border-radius: 50%;
    padding: 30px 8px;

}
@media(min-width:500px){
.upload{
        width:450px;
    }
}

 */
