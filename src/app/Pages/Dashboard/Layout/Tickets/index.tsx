import React from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";
import Assets from "../../../../Assets";
import SEInput from "../../../../Components/SEInput";

interface TicketListItems {
  id: string;
  title: string;
  startDate: string;
  startHour: string;
  ticketCondition: string;
  lastActivityDate: string;
  lastActivityHour: string;
}

export default function Tickets() {
  let ticketList: TicketListItems[] = [
    {
      id: "11198",
      title: "تیکت اول",
      ticketCondition: "در انتظار پاسخ",
      lastActivityDate: "1399/11/11",
      startDate: "1399/11/11",
      lastActivityHour: "11:52:17",
      startHour: "11:52:17",
    },
    {
      id: "11198",
      title: "تیکت اول",
      ticketCondition: "در حال پردازش",
      lastActivityDate: "1399/11/11",
      startDate: "1399/11/11",
      lastActivityHour: "11:52:17",
      startHour: "11:52:17",
    },
    {
      id: "11198",
      title: "تیکت اول",
      ticketCondition: "پاسخ داده شده",
      lastActivityDate: "1399/11/11",
      startDate: "1399/11/11",
      lastActivityHour: "11:52:17",
      startHour: "11:52:17",
    },
    {
      id: "11198",
      title: "تیکت اول",
      ticketCondition: "بسته",
      lastActivityDate: "1399/11/11",
      startDate: "1399/11/11",
      lastActivityHour: "11:52:17",
      startHour: "11:52:17",
    },
  ];

  const conditionClass = (s: string) => {
    if (s == "بسته") return "#295cc0";
    else if (s == "پاسخ داده شده") return "#3d6cc9";
    else if (s == "در انتظار پاسخ") return "#44adf2";
    else if (s == "در حال پردازش") return "#0088e3";
  };

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.inner_top}>
          <div className={styles.input}>
            <label className={styles.input_label}>شناسه</label>
            <SEInput onChangeText={() => {}} />
          </div>
          <div className={styles.input}>
            <label className={styles.input_label}>عنوان</label>
            <SEInput onChangeText={() => {}} />
          </div>
          <Button type="primary" className={styles.search_button}>
            <img src={Assets.Images.Search} className={styles.search_image} />
            جستجو
          </Button>
        </div>
      </div>
      <div>
        <table className={styles.ticket_table}>
          <th>شناسه</th>
          <th>عنوان</th>
          <th>وضعیت تیکت</th>
          <th>تاریخ شروع</th>
          <th>آخرین فعالیت</th>
          {ticketList.map((listItem) => {
            return (
              <tr>
                <td className={styles.td_id}>{listItem.id}</td>
                <td className={styles.td_title}>{listItem.title}</td>
                <td className={styles.td_condition}>
                  <div
                    className={styles.td_condition_container}
                    style={{
                      background: conditionClass(listItem.ticketCondition),
                    }}
                  >
                    {listItem.ticketCondition}
                  </div>
                </td>
                <td className={styles.td_start}>
                  <span>{listItem.startDate}</span>
                  <span className={styles.hour}>{listItem.startHour}</span>
                </td>
                <td className={styles.td_last}>
                  <span>{listItem.lastActivityDate}</span>
                  <span className={styles.hour}>
                    {listItem.lastActivityHour}
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
