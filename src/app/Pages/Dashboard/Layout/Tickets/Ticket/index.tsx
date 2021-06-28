import API from '../../../../../API';
import moment from 'jalali-moment';
import {message, Spin} from 'antd';
import Assets from '../../../../../Assets';
import styles from './styles.module.scss';
import {useParams} from 'react-router-dom';
import useUser from '../../../../../Hooks/useUser';
import React, {useEffect, useRef, useState} from 'react';
import SEInput from '../../../../../Components/SEInput';
import TicketDto from '../../../../../API/DTOs/TicketDto';
import showDialog from '../../../../../Components/TDialog';
import ForwardTicketDialog from '../../../../../Dialogs/ForwardTicket';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

export default function Ticket() {
  const {user} = useUser();
  const dismissDialog = useRef<() => void>();
  const params = useParams<{ticketId: string}>();
  const [Ticket, setTicket] = useState<TicketDto>();
  const [Message, setMessage] = useState('');
  const [Attachment, setAttachment] = useState<File>();
  const [Loading, setLoading] = useState(false);
  const [MessageHasError, setMessageHasError] = useState(false);

  const getData = () => {
    API.Tickets.GetTicket({id: parseInt(params.ticketId)}).then((response) => {
      setTicket(response);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const onSendMessage = () => {
    if (!Message) {
      setMessageHasError(true);
      return;
    }

    const attachments = [];

    if (Attachment) {
      attachments.push(Attachment);
    }

    setLoading(true);
    API.Tickets.CreateTicketMessage({
      id: parseInt(params.ticketId),
      text: Message,
      attachments: attachments,
    })
      .then(() => {
        getData();
        setMessage('');
        setAttachment(undefined);
      })
      .catch(() => message.error('ارسال پیام مقدور نیست'))
      .finally(() => setLoading(false));
  };

  if (!Ticket) {
    return (
      <div className={styles.container}>
        <Spin size="large" />
      </div>
    );
  }

  const onForwardingTicket = () => {
    dismissDialog.current = showDialog({
      content: (
        <ForwardTicketDialog
          ticketId={Ticket.id}
          onDismissRef={dismissDialog}
          section={Ticket.section.title}
          otherSections={Ticket.other_sections}
        />
      ),
      style: {
        maxWidth: 'unset',
        overflow: 'hidden',
        borderRadius: 15,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.ticket_info_container}>
        <div className={styles.ticket_info_top}>
          <span>{Ticket.title}</span>
          <span dir="auto">عنوان تیکت:</span>
        </div>
        <div className={styles.ticket_info_bottom}>
          <p>
            تاریخ شروع:{' '}
            {moment
              .utc(Ticket.creation_date)
              .local()
              .locale('fa')
              .format('YYYY/MM/D HH:mm')}
          </p>
          <p>
            آخرین آپدیت:
            {moment
              .utc(Ticket.last_update)
              .local()
              .locale('fa')
              .format('YYYY/MM/D HH:mm')}
          </p>
        </div>
      </div>
      {Ticket.tags && Ticket.tags.length > 0 && (
        <div className={styles.tags_container}>
          <p dir="auto">
            {Ticket.tags
              .split(',')
              .map((tag) => `#${tag}`)
              .join(' ')}
          </p>
          <Assets.SVGs.Hashtag className={styles.hashtag_icon} />
        </div>
      )}

      <div className={styles.chat_container}>
        <div className={styles.chat_container_header}>
          <div className={styles.items}>
            <img src={Assets.SVGs.History} alt="history" />
          </div>
          {!!Ticket.other_sections.length && (
            <div
              className={styles.items}
              onClick={onForwardingTicket}
              data-testid="forward-button">
              <img src={Assets.SVGs.ArrowRight} alt="forward" />
            </div>
          )}

          <p dir="auto">مسئول رسیدگی به درخواست شما: </p>
        </div>
        {Ticket.message_set.map((message, index) => {
          const unknownAvatar =
            message.user.id === user.id
              ? Assets.SVGs.MaleUserSVG
              : Assets.SVGs.OldMaleUserSVG;
          return (
            <div
              key={index}
              className={styles.message}
              style={{
                alignSelf:
                  message.user.id !== user.id ? 'flex-start' : 'flex-end',
              }}>
              <div
                className={styles.message_user}
                style={{
                  justifyContent:
                    message.user.id !== user.id ? 'flex-start' : 'flex-end',
                  transform: `translate(${
                    7 * (message.user.id !== user.id ? -1 : 1)
                  }px, -7px)`,
                }}>
                {message.user.id !== user.id && (
                  <img
                    alt=""
                    className={styles.message_user_avatar}
                    src={message.user.avatar ?? unknownAvatar}
                  />
                )}
                <p>{message.user.first_name + ' ' + message.user.last_name}</p>
                {message.user.id === user.id && (
                  <img
                    alt=""
                    className={styles.message_user_avatar}
                    src={message.user.avatar ?? unknownAvatar}
                  />
                )}
              </div>
              <div className={styles.message_content} dir="rtl">
                <FroalaEditorView
                  model={message.text}
                  config={{
                    key: 'yDJ6hT5jU7QUv4Xy4OZh4ABVJRDRNGGUO3ITru7M5a6a21j11e13l12l7w10h7==',
                  }}
                />
              </div>
              <div className={styles.message_time}>
                <p>
                  {moment
                    .utc(message.date)
                    .local()
                    .locale('fa')
                    .format('YYYY/MM/D')}
                </p>
                <p>
                  {moment
                    .utc(message.date)
                    .local()
                    .locale('fa')
                    .format('HH:mm')}
                </p>
              </div>
            </div>
          );
        })}

        <div className={styles.send_message}>
          {Attachment ? (
            <div className={styles.attachment}>
              <img
                alt="cancel"
                src={Assets.Images.Cancel}
                data-testid="cancel_attachment"
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
                data-testid="attach_input"
                onChange={(e) =>
                  e.target.files && setAttachment(e.target.files[0])
                }
                className={styles.attachment_input}
              />
            </>
          )}
          <SEInput
            minLines={2}
            content={Message}
            label="پیام شما..."
            onChangeText={setMessage}
            hasError={MessageHasError}
            data-testid="message_input"
            className={styles.send_message_input}
            innerContainerClassName={styles.send_message_input_innerContainer}
          />
          <div onClick={onSendMessage} data-testid="submit">
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
