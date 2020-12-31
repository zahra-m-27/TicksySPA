import React, { useState } from "react";
import styles from "./styles.module.scss";
import Assets from "../../../../Assets";
import SEInput from "../../../../Components/SEInput";

export default function Ticket() {
  const [Attachment, setAttachment] = useState<File>();

  let ticket = {
    title: "تیکت اول",
    start_date: "1399/11/11",
    end_date: "1399/11/11",
    tags: ["هشتگ", "تست"],
    messages: [
      {
        type: "user",
        time: "00:00",
        date: "1399/11/11",
        username: "سید علی علوی (کاربر)",

        content:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      },
      {
        type: "admin",
        time: "00:00",
        date: "1399/11/11",
        username: "سید علی علوی (پشتیبان)",
        content:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.ticket_info_container}>
        <div className={styles.ticket_info_top}>
          <p>عنوان: {ticket.title}</p>
        </div>
        <div className={styles.ticket_info_bottom}>
          <p>تاریخ شروع: {ticket.start_date}</p>
          <p>تاریخ پایان: {ticket.end_date}</p>
        </div>
      </div>
      <div className={styles.tags_container}>
        <p dir="auto">{ticket.tags.map((tag) => `#${tag}`).join(" ")}</p>
        <Assets.Svgs.Hashtag className={styles.hashtag_icon} />
      </div>

      <div className={styles.chat_container}>
        {ticket.messages.map((message, index) => (
          <div
            key={index}
            className={styles.message}
            style={{
              alignSelf: message.type === "admin" ? "flex-start" : "flex-end",
            }}
          >
            <div
              className={styles.message_user}
              style={{
                justifyContent:
                  message.type === "admin" ? "flex-start" : "flex-end",
                transform: `translate(${
                  7 * (message.type === "admin" ? -1 : 1)
                }px, -7px)`,
              }}
            >
              {message.type === "admin" && (
                <Assets.Svgs.OldMaleUser
                  className={styles.message_user_avatar}
                />
              )}
              <p>{message.username}</p>
              {message.type === "user" && (
                <Assets.Svgs.MaleUser className={styles.message_user_avatar} />
              )}
            </div>
            <p dir="auto" className={styles.message_content}>
              {message.content}
            </p>
            <div className={styles.message_time}>
              <p>{message.time}</p>
              <p>{message.date}</p>
            </div>
          </div>
        ))}

        <div className={styles.send_message}>
          <label htmlFor="attach_input">
            <Assets.Svgs.Attach className={styles.send_message_icons} />
          </label>
          <input
            type="file"
            id="attach_input"
            onChange={(e) => e.target.files && setAttachment(e.target.files[0])}
            className={styles.attachment_input}
          />
          <SEInput
            minLines={2}
            label="پیام شما..."
            onChangeText={() => {}}
            className={styles.send_message_input}
            innerContainerClassName={styles.send_message_input_innerContainer}
          />
          <Assets.Svgs.PaperPlane className={styles.send_message_icons} />
        </div>
      </div>
    </div>
  );
}
