import { Button } from "antd";
import React, { useState } from "react";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";

interface Request {
  requestStatus: string;
  requestDate: string;
  expirationDate: string;
}

export default function SubmitCertificate() {
  const [Attachment, setAttachment] = useState<File>();
  const [UploadPage, setUploadPage] = useState(true);

  const onSelectFile = (file: File) => {
    setAttachment(file);
  };

  let request: Request = {
    requestStatus: "در حال بررسی",
    requestDate: "1399/11/11",
    expirationDate: "1399/11/11",
  };

  if (UploadPage) {
    return (
      <div className={styles.container_upload}>
        <div className={styles.top_part}>
          <div className={styles.title}>
            <img
              alt=""
              className={styles.title_image}
              src={Assets.Images.FingerPrint}
            />
            احراز هویت
          </div>
        </div>
        <div className={styles.upload_body}>
          <p className={styles.upload_text}>
            لطفا سند احراز هویت خود را بارگذاری کنید
          </p>

          <label htmlFor="attachment" className={styles.attachment_box}>
            <div className={styles.input_box}>
              <img
                alt=""
                src={Assets.Images.Upload}
                className={styles.upload_icon}
              />
              <p className={styles.file_name}>
                {Attachment?.name ?? "انتخاب فایل"}
              </p>
            </div>
          </label>
          <input
            type={"file"}
            id={"attachment"}
            className={styles.input_file}
            onChange={(e) => {
              e.target.files && onSelectFile && onSelectFile(e.target.files[0]);
            }}
          />

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
  }

  return (
    <div className={styles.container_report}>
      <div className={styles.top_part}>
        <div className={styles.title}>
          <img
            alt=""
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
          <div className={styles.request_data}>
            <div className={styles.request_container}>
              <span className={styles.request}>وضعیت درخواست:</span>
              <div className={styles.request_data_container}>
                {request.requestStatus}
              </div>
            </div>
            <div className={styles.request_container}>
              <span className={styles.request}>تاریخ درخواست:</span>
              <div className={styles.request_data_container}>
                {request.requestDate}
              </div>
            </div>
            <div className={styles.request_container}>
              <span className={styles.request}>تاریخ انقضا:</span>
              <div className={styles.request_data_container}>
                {request.expirationDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
