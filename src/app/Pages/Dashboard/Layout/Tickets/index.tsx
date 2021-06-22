import API from '../../../../API';
import moment from 'jalali-moment';
import {Button, message} from 'antd';
import Assets from '../../../../Assets';
import styles from './styles.module.scss';
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import SEInput from '../../../../Components/SEInput';
import ClassNames from '../../../../Utilities/ClassNames';
import TicketListItemDto from '../../../../API/DTOs/TicketListItemDto';
import TPagination from '../../../../Components/TPagination';

export default function Tickets() {
  const history = useHistory();
  const params = useParams<{sectionId?: string}>();

  const [Id, setId] = useState('');
  const [Total, setTotal] = useState(1);
  const [Title, setTitle] = useState('');
  const [Search, setSearch] = useState('');
  const [PageSize, setPageSize] = useState(5);
  const [PageNumber, setPageNumber] = useState(0);
  const [Loading, setLoading] = useState<boolean>(false);
  const [Tickets, setTickets] = useState<TicketListItemDto[]>([]);

  const onSearch = () => {
    setSearch(Title ? Title : Id ? Id : '');
  };

  const getTickets = () => {
    setLoading(true);
    API.Tickets.GetTickets({
      limit: PageSize,
      search: Search,
      offset: PageNumber * PageSize,
      type: params.sectionId ? 2 : 1,
      section__topic: params.sectionId ? parseInt(params.sectionId) : undefined,
    })
      .then((response) => {
        setTickets(response.results);
        setTotal(response.count);
      })
      .catch(() => {
        message.error('خطایی در دریافت تیکت ها رخ داده است');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTickets();
  }, [PageNumber, Search]);

  const statusClassName = (status: string) => {
    if (status === '4') return '#295cc0';
    else if (status === '3') return '#3d6cc9';
    else if (status === '1') return '#44adf2';
    else if (status === '2') return '#0088e3';
  };

  const statusLabel = (status: string) => {
    if (status === '4') return 'بسته شده';
    else if (status === '3') return 'پاسخ داده شده';
    else if (status === '1') return 'در انتظار پاسخ';
    else if (status === '2') return 'در حال بررسی';
  };

  const openTicket = (id: number) => {
    history.push('/dashboard/ticket/' + id);
  };

  return (
    <div className={styles.container}>
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
            className={styles.search_button}>
            <img
              alt=""
              src={Assets.Images.Search}
              className={styles.search_image}
            />
            جستجو
          </Button>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>عنوان</th>
            <th>وضعیت تیکت</th>
            <th>تاریخ شروع</th>
            <th>آخرین فعالیت</th>
          </tr>
        </thead>
        <tbody>
          {Tickets.map((ticket, index) => {
            return (
              <tr key={index} onClick={() => openTicket(ticket.id)}>
                <td>{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>
                  <div
                    className={styles.td_condition_container}
                    style={{
                      background: statusClassName(ticket.status),
                    }}>
                    {statusLabel(ticket.status)}
                  </div>
                </td>
                <td>
                  <span>
                    {moment
                      .utc(ticket.creation_date)
                      .local()
                      .locale('fa')
                      .format('YYYY/MM/D')}
                  </span>
                  <span>
                    {moment
                      .utc(ticket.creation_date)
                      .local()
                      .locale('fa')
                      .format('HH:mm')}
                  </span>
                </td>
                <td>
                  <span>
                    {moment
                      .utc(ticket.last_update)
                      .local()
                      .locale('fa')
                      .format('YYYY/MM/D')}
                  </span>
                  <span>
                    {moment
                      .utc(ticket.creation_date)
                      .local()
                      .locale('fa')
                      .format('HH:mm')}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TPagination
        total={Total}
        pageSize={PageSize}
        pageNumber={PageNumber + 1}
        onChange={(value) => setPageNumber(value - 1)}
      />
    </div>
  );
}
