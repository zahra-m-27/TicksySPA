import API from "../../../../API";
import moment from "jalali-moment";
import { Button, message } from "antd";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import SEInput from "../../../../Components/SEInput";
import TicketDto from "../../../../API/DTOs/TicketDto";
import ClassNames from "../../../../Utilities/ClassNames";

export default function Tickets() {
  const history = useHistory();
  const params = useParams<any>();
  const [Id, setId] = useState("");
  const [Title, setTitle] = useState("");
  const [Search, setSearch] = useState("");
  const [LastPage, setLastPage] = useState(1);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [Loading, setLoading] = useState<boolean>(false);
  const [Tickets, setTickets] = useState<TicketDto[]>([]);

  const onSearch = () => {
    setSearch(Title ? Title : Id ? Id : "");
    getTickets();
  };

  const getTickets = () => {
    setLoading(true);
    if (params.id)
      API.Tickets.GetTickets({
        status: 0,
        search: Search,
        page: CurrentPage,
      })
        .then((response) => {
          setTickets(response.results);
          setLastPage(response.count / 10);
        })
        .catch(() => {
          message.error("خطایی در دریافت تیکت ها رخ داده است");
        })
        .finally(() => setLoading(false));
    else
      API.Tickets.GetTickets({
        status: 0,
        search: Search,
        page: CurrentPage,
      })
        .then((response) => {
          setTickets(response.results);
          setLastPage(response.count / 10);
        })
        .catch(() => {
          message.error("خطایی در دریافت تیکت ها رخ داده است");
        })
        .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTickets();
  }, [CurrentPage]);

  const statusClassName = (status: string) => {
    if (status === "4") return "#295cc0";
    else if (status === "3") return "#3d6cc9";
    else if (status === "1") return "#44adf2";
    else if (status === "2") return "#0088e3";
  };

  const statusLabel = (status: string) => {
    if (status === "4") return "بسته شده";
    else if (status === "3") return "پاسخ داده شده";
    else if (status === "1") return "در انتظار پاسخ";
    else if (status === "2") return "در حال بررسی";
  };

  const openTicket = (id: number) => {
    history.push("/dashboard/tickets/" + id);
  };

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.inner_top}>
          <div className={styles.input}>
            <label className={styles.input_label}>شناسه</label>
            <SEInput onChangeText={setId} inputClassName={styles.inputs} />
          </div>
          <div className={styles.input}>
            <label className={styles.input_label}>عنوان</label>
            <SEInput onChangeText={setTitle} inputClassName={styles.inputs} />
          </div>
          <Button
            type="primary"
            loading={Loading}
            onClick={onSearch}
            className={styles.search_button}
          >
            <img
              alt=""
              src={Assets.Images.Search}
              className={styles.search_image}
            />
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
        {Tickets.map((ticket, index) => {
          return (
            <tr key={index}>
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
                    background: statusClassName(ticket.status),
                  }}
                >
                  {statusLabel(ticket.status)}
                </div>
              </td>
              <td className={styles.td_start}>
                <span>
                  {moment
                    .utc(ticket.creation_date)
                    .local()
                    .locale("fa")
                    .format("YYYY/MM/D")}
                </span>
                <span className={styles.hour}>
                  {moment
                    .utc(ticket.creation_date)
                    .local()
                    .locale("fa")
                    .format("HH:mm")}
                </span>
              </td>
              <td className={styles.td_last}>
                <span>
                  {moment
                    .utc(ticket.last_update)
                    .local()
                    .locale("fa")
                    .format("YYYY/MM/D")}
                </span>
                <span className={styles.hour}>
                  {moment
                    .utc(ticket.creation_date)
                    .local()
                    .locale("fa")
                    .format("HH:mm")}
                </span>
              </td>
            </tr>
          );
        })}
      </table>
      <div className={styles.pagination}>
        <Assets.SVGs.LessThan
          className={styles.move_button}
          onClick={() => CurrentPage - 1 > 0 && setCurrentPage(CurrentPage - 1)}
        />
        <div className={styles.divider} />
        {CurrentPage - 1 > 0 && (
          <div
            className={styles.pagination_page}
            onClick={() => setCurrentPage(CurrentPage - 1)}
          >
            {CurrentPage - 1}
          </div>
        )}
        <div className={ClassNames(styles.pagination_page, styles.active)}>
          {CurrentPage}
        </div>
        {CurrentPage + 1 < LastPage && (
          <div
            className={styles.pagination_page}
            onClick={() => setCurrentPage(CurrentPage + 1)}
          >
            {CurrentPage + 1}
          </div>
        )}
        <div className={styles.divider} />
        <Assets.SVGs.MoreThan
          className={styles.move_button}
          onClick={() =>
            CurrentPage + 1 < LastPage && setCurrentPage(CurrentPage + 1)
          }
        />
      </div>
    </div>
  );
}
