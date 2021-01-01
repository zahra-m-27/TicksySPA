import React, { useState } from "react";
import styles from "./styles.module.scss";
import Assets from "../../../../Assets";
import { Button } from "antd";

interface Request {
  requestStatus: string;
  requestDate: string;
  expirationDate: string;
}

export default function SubmitCertificate() {
  const [UploadPage, setUploadPage] = useState(true);
  const [Attachments, setAttachments] = useState<File[]>([]);

  const onSelectFile = (file: File) => {
    setAttachments([file, ...Attachments]);
  };

  const onRemoveAttachment = (index: number) => {
    Attachments.splice(index, 1);
    setAttachments([...Attachments]);
  };

  let request: Request = {
    requestStatus: "در حال بررسی",
    requestDate: "1399/11/11",
    expirationDate: "1399/11/11",
  };

  {
    if (UploadPage) {
      return (
        <div className={styles.container_upload}>
          <div className={styles.top_part}>
            <div className={styles.title}>
              <img
                src={Assets.Images.FingerPrint}
                className={styles.title_image}
              />
              احراز هویت
            </div>
          </div>
          <div className={styles.upload_body}>
            <p className={styles.upload_text}>
              لطفا سند احراز هویت خود را بارگذاری کنید
            </p>

            <div className={styles.attachment_box}>
              <div className={styles.input_box}>
                <label htmlFor="attachment">
                  <img
                    src={Assets.Images.Upload}
                    className={styles.upload_icon}
                  />
                </label>
                <input
                  type={"file"}
                  id={"attachment"}
                  className={styles.input_file}
                  onChange={(e) => {
                    e.target.files &&
                      onSelectFile &&
                      onSelectFile(e.target.files[0]);
                  }}
                />
                {Attachments.map((attachment, i) => (
                  <div className={styles.attached_file} key={i}>
                    <img
                      src={Assets.Images.Cancel}
                      className={styles.cancel_icon}
                      onClick={() =>
                        onRemoveAttachment && onRemoveAttachment(i)
                      }
                    />
                    <p className={styles.file_name}>{attachment.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type={"primary"}
              className={styles.submit_button}
              onClick={() => {
                setUploadPage(false);
              }}
            >
              ثبت
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container_report}>
          <div className={styles.top_part}>
            <div className={styles.title}>
              <img
                src={Assets.Images.FingerPrint}
                className={styles.report_title_image}
              />
              احراز هویت
            </div>
          </div>
          <div className={styles.report_body}>
            <p className={styles.right_side}>
              <span>سند شما ثبت شد</span>
              <span>لطفا منتظر پاسخ ما باشین</span>
              <span>از صبر و شکیبایی شما </span>
              <span>سپاسگزاریم</span>
            </p>
            <div className={styles.divider} />
            <div className={styles.left_side}>
              <div className={styles.request_titles}>
                <span className={styles.request}>وضعیت درخواست:</span>
                <span className={styles.request}>تاریخ درخواست:</span>
                <span className={styles.request}>تاریخ انقضا:</span>
              </div>
              <div className={styles.request_data}>
                <div className={styles.request_data_container}>
                  {request.requestStatus}
                </div>
                <div className={styles.request_data_container}>
                  {request.requestDate}
                </div>
                <div className={styles.request_data_container}>
                  {request.expirationDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
