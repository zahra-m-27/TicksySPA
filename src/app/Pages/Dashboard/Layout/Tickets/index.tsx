import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";
import Assets from "../../../../Assets";
import SEInput from "../../../../Components/SEInput";
import ClassNames from "../../../../Utilities/ClassNames";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [CurrentPage, setCurrentPage] = useState(3);

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

  const openTicket = (id: string) => {
    history.push("/dashboard/tickets/" + id);
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
      <table className={styles.ticket_table}>
        <th>شناسه</th>
        <th>عنوان</th>
        <th>وضعیت تیکت</th>
        <th>تاریخ شروع</th>
        <th>آخرین فعالیت</th>
        {ticketList.map((ticket) => {
          return (
            <tr>
              <td
                className={styles.td_id}
                onClick={() => openTicket(ticket.id)}
              >
                {ticket.id}
              </td>
              <td
                className={styles.td_title}
                onClick={() => openTicket(ticket.id)}
              >
                {ticket.title}
              </td>
              <td className={styles.td_condition}>
                <div
                  className={styles.td_condition_container}
                  style={{
                    background: conditionClass(ticket.ticketCondition),
                  }}
                >
                  {ticket.ticketCondition}
                </div>
              </td>
              <td className={styles.td_start}>
                <span>{ticket.startDate}</span>
                <span className={styles.hour}>{ticket.startHour}</span>
              </td>
              <td className={styles.td_last}>
                <span>{ticket.lastActivityDate}</span>
                <span className={styles.hour}>{ticket.lastActivityHour}</span>
              </td>
            </tr>
          );
        })}
      </table>
      <div className={styles.pagination}>
        <Assets.Svgs.LessThan
          className={styles.move_button}
          onClick={() => setCurrentPage(CurrentPage - 1)}
        />
        <div className={styles.divider} />
        <div
          className={styles.pagination_page}
          onClick={() => setCurrentPage(CurrentPage - 1)}
        >
          {CurrentPage - 1}
        </div>
        <div className={ClassNames(styles.pagination_page, styles.active)}>
          {CurrentPage}
        </div>
        <div
          className={styles.pagination_page}
          onClick={() => setCurrentPage(CurrentPage + 1)}
        >
          {CurrentPage + 1}
        </div>
        <div className={styles.divider} />
        <Assets.Svgs.MoreThan
          className={styles.move_button}
          onClick={() => setCurrentPage(CurrentPage + 1)}
        />
      </div>
    </div>
  );
}
