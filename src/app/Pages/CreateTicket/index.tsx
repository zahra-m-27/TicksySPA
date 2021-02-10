import React, { useEffect, useRef, useState } from "react";
import { Button, message, Spin } from "antd";
import Assets from "../../Assets";
import { Link, useHistory, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import SEInput from "../../Components/SEInput";
import API from "../../API";
import TopicDto from "../../API/DTOs/TopicDto";

export default function CreateTicketPage() {
  const history = useHistory();
  const params = useParams<any>();
  const [Title, setTitle] = useState("");
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const tagRef = useRef<HTMLInputElement>(null);
  const [Tags, setTags] = useState<string[]>([]);
  const [Topic, setTopic] = useState<TopicDto>();
  const messageRef = useRef<HTMLInputElement>(null);
  const [CurrentTag, setCurrentTag] = useState<string>("");
  const [TitleHasError, setTitleHasError] = useState(false);
  const [Attachments, setAttachments] = useState<File[]>([]);
  const [MessageHasError, setMessageHasError] = useState(false);

  useEffect(() => {
    API.Topics.GetTopic({
      slug: params.username,
    })
      .then((response) => setTopic(response))
      .catch((error) => {
        if (error.status === 404) {
          message.error("تاپیک موردنظر یافت نشد.");
        } else {
          message.error("اشکالی در دریافت اطلاعات تایپک رخ داده.");
        }
      });
  }, []);

  const onCreateTicket = () => {
    setLoading(true);
    API.Topics.CreateTicket({
      priority: 1,
      title: Title,
      text: Message,
      slug: params.username,
      attachments: Attachments,
    })
      .then(() => history.replace("/dashboard/tickets"))
      .catch(() => {
        message.error("انجام این عملیات ممکن نیست");
      })
      .finally(() => setLoading(false));
  };

  const onTitleEnter = () => {
    if (messageRef && messageRef.current) {
      messageRef.current.focus();
    }
  };

  if (!Topic) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/contact-us">ارتباط با ما</Link>
          <Link to="/dashboard">داشبورد</Link>
          <Link to="/">خانه</Link>
          <Link to="/">تیکسی</Link>
          <Assets.SVGs.GridSVG />
          <img src={Assets.Images.Ticksy} alt="logo" />
        </div>
        <div className={styles.card_container}>
          <Spin size="large" className={styles.loading} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/contact-us">ارتباط با ما</Link>
        <Link to="/dashboard">داشبورد</Link>
        <Link to="/">خانه</Link>
        <Link to="/">تیکسی</Link>
        <Assets.SVGs.GridSVG />
        <img src={Assets.Images.Ticksy} alt="logo" />
      </div>
      <div className={styles.card_container}>
        <img
          alt=""
          className={styles.avatar}
          src={Topic.avatar ?? Assets.Images.GoogleImage}
        />
        <p className={styles.input_box_title}>{Topic.title}</p>
        <p className={styles.input_box_description} dir="auto">
          {Topic.description}
        </p>

        <SEInput
          label="موضوع"
          content={Title}
          onEnter={onTitleEnter}
          onChangeText={setTitle}
          hasError={TitleHasError}
          inputClassName={styles.input}
          className={styles.input_class}
          labelClassName={styles.input_label}
        />
        <SEInput
          minLines={5}
          content={Message}
          ref={messageRef}
          label="پيام شما..."
          onChangeText={setMessage}
          attachments={Attachments}
          hasError={MessageHasError}
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
          <Button
            loading={Loading}
            type="primary"
            className={styles.enter_button}
            onClick={onCreateTicket}
          >
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
