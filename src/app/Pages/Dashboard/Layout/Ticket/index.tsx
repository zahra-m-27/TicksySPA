import API from "../../../../API";
import moment from "jalali-moment";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import useUser from "../../../../Hooks/useUser";
import React, { useEffect, useState } from "react";
import SEInput from "../../../../Components/SEInput";
import MessageDto from "../../../../API/DTOs/MessageDto";
import TicketDto from "../../../../API/DTOs/TicketDto";
import { message, Spin } from "antd";

export default function Ticket() {
  const { user } = useUser();
  const params = useParams<any>();
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Ticket, setTicket] = useState<TicketDto>();
  const [Attachment, setAttachment] = useState<File>();
  const [Messages, setMessages] = useState<MessageDto[]>([]);
  const [MessageHasError, setMessageHasError] = useState(false);

  const getMessages = () => {
    API.Tickets.GetTicketMessages({
      id: params.id,
    })
      .then((response) => {
        setMessages(response);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMessages();
    API.Tickets.GetTicketDetail({ id: params.id }).then((response) => {
      setTicket(response);
    });
  }, []);

  const onSendMessage = () => {
    if (!Message) {
      setMessageHasError(true);
      return;
    }

    let attachments = [];

    if (Attachment) {
      attachments.push(Attachment);
    }

    setLoading(true);
    API.Tickets.CreateTicketMessage({
      id: params.id,
      text: Message,
      attachments: attachments,
    })
      .then(() => {
        getMessages();
      })
      .catch(() => {
        message.error("ارسال پیام مقدور نیست");
      });
  };

  if (!Ticket) {
    return (
      <div className={styles.container}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.ticket_info_container}>
        <div className={styles.ticket_info_top}>
          <p>عنوان: {Ticket.title}</p>
        </div>
        <div className={styles.ticket_info_bottom}>
          <p>
            تاریخ شروع:{" "}
            {moment
              .utc(Ticket.creation_date)
              .local()
              .locale("fa")
              .format("YYYY/MM/D HH:mm")}
          </p>
          <p>
            آخرین آپدیت:
            {moment
              .utc(Ticket.last_update)
              .local()
              .locale("fa")
              .format("YYYY/MM/D HH:mm")}
          </p>
        </div>
      </div>
      {Ticket.tags && Ticket.tags.length > 0 && (
        <div className={styles.tags_container}>
          <p dir="auto">
            {Ticket.tags
              .split(",")
              .map((tag) => `#${tag}`)
              .join(" ")}
          </p>
          <Assets.SVGs.Hashtag className={styles.hashtag_icon} />
        </div>
      )}

      <div className={styles.chat_container}>
        {Messages.map((message, index) => (
          <div
            key={index}
            className={styles.message}
            style={{
              alignSelf: message.id !== user.id ? "flex-start" : "flex-end",
            }}
          >
            <div
              className={styles.message_user}
              style={{
                justifyContent:
                  message.id !== user.id ? "flex-start" : "flex-end",
                transform: `translate(${
                  7 * (message.id !== user.id ? -1 : 1)
                }px, -7px)`,
              }}
            >
              {message.id !== user.id && (
                <img
                  alt=""
                  src={user.avatar ?? Assets.SVGs.MaleUserSVG}
                  className={styles.message_user_avatar}
                />
              )}
              <p>{message.user.first_name + " " + message.user.last_name}</p>
              {message.id === user.id && (
                <img
                  alt=""
                  src={user.avatar ?? Assets.SVGs.OldMaleUserSVG}
                  className={styles.message_user_avatar}
                />
              )}
            </div>
            <p dir="auto" className={styles.message_content}>
              {message.text}
            </p>
            <div className={styles.message_time}>
              <p>
                {moment
                  .utc(message.date)
                  .local()
                  .locale("fa")
                  .format("YYYY/MM/D")}
              </p>
              <p>
                {moment.utc(message.date).local().locale("fa").format("HH:mm")}
              </p>
            </div>
          </div>
        ))}

        <div className={styles.send_message}>
          {Attachment ? (
            <div className={styles.attachment}>
              <img
                alt="cancel"
                src={Assets.Images.Cancel}
                className={styles.attachment_icon}
                onClick={() => setAttachment(undefined)}
              />
              <p className={styles.name}>{Attachment?.name}</p>
            </div>
          ) : (
            <>
              <label htmlFor="attach_input">
                <Assets.SVGs.Attach className={styles.send_message_icons} />
              </label>
              <input
                type="file"
                id="attach_input"
                onChange={(e) =>
                  e.target.files && setAttachment(e.target.files[0])
                }
                className={styles.attachment_input}
              />
            </>
          )}
          <SEInput
            minLines={2}
            label="پیام شما..."
            onChangeText={setMessage}
            hasError={MessageHasError}
            className={styles.send_message_input}
            innerContainerClassName={styles.send_message_input_innerContainer}
          />
          <div onClick={onSendMessage}>
            {Loading ? (
              <Spin size="large" />
            ) : (
              <Assets.SVGs.PaperPlane className={styles.send_message_icons} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
