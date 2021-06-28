import API from '../../../../../API';
import moment from 'jalali-moment';
import Assets from '../../../../../Assets';
import styles from './styles.module.scss';
import {useEffect, useState} from 'react';
import {Button, message, Spin} from 'antd';
import UserIdentityDto from '../../../../../API/DTOs/UserIdentityDto';
import {useHistory} from 'react-router-dom';

export default function SubmitCertificate() {
  const history = useHistory();
  const [Loading, setLoading] = useState(false);
  const [Attachment, setAttachment] = useState<File>();
  const [Identity, setIdentity] = useState<UserIdentityDto>();

  const onSelectFile = (file: File) => {
    setAttachment(file);
  };

  useEffect(() => {
    setLoading(true);
    getIdentity();
  }, []);

  const getIdentity = () => {
    API.Users.GetIdentity({
      status: new URLSearchParams(history.location.search).get('status') ?? '1',
    })
      .then((response) => setIdentity(response))
      .finally(() => setLoading(false));
  };

  const onUploadCertificate = () => {
    setLoading(true);
    API.Users.UpdateIdentity({
      identifier_image: Attachment,
    })
      .then(() => {
        getIdentity();
      })
      .catch(() => {
        setLoading(false);
        message.error('مشکلی در ارسال مدرک احراز هویت رخ داده است.');
      });
  };

  const LoadingComponent = (
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
        <Spin size="large" />
      </div>
    </div>
  );

  if (!Identity) {
    return LoadingComponent;
  }

  if (Identity.status === '3') {
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
                {Attachment?.name ?? 'انتخاب فایل'}
              </p>
            </div>
          </label>
          <input
            type={'file'}
            id={'attachment'}
            className={styles.input_file}
            onChange={(e) => {
              e.target.files && onSelectFile && onSelectFile(e.target.files[0]);
            }}
          />

          <Button
            type={'primary'}
            loading={Loading}
            onClick={onUploadCertificate}
            className={styles.submit_button}>
            ثبت
          </Button>
        </div>
      </div>
    );
  }

  if (Loading) {
    return LoadingComponent;
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
        {Identity.status === '1' ? (
          <p className={styles.right_side}>
            <span>سند شما ثبت شد</span>
            <span>لطفا منتظر پاسخ ما باشین</span>
            <span>از صبر و شکیبایی شما </span>
            <span>سپاسگزاریم</span>
          </p>
        ) : (
          <p className={styles.right_side}>
            <span>سند شما تایید شد</span>
            <span>اکنون دسترسی ایجاد تاپیک در سامانه</span>
            <span>برای شما وجود دارد</span>
            <span>با سپاس</span>
          </p>
        )}
        <div className={styles.divider} />
        <div className={styles.left_side}>
          <div className={styles.request_data}>
            <div className={styles.request_container}>
              <span className={styles.request}>وضعیت درخواست:</span>
              <div className={styles.request_data_container}>
                {Identity.status === '1' ? 'در حال بررسی' : 'تایید شده'}
              </div>
            </div>
            <div className={styles.request_container}>
              <span className={styles.request}>تاریخ درخواست:</span>
              <div className={styles.request_data_container}>
                {moment
                  .utc(Identity.request_time ?? new Date())
                  .local()
                  .locale('fa')
                  .format('YYYY/MM/D')}
              </div>
            </div>
            {Identity.status === '1' && (
              <div className={styles.request_container}>
                <span className={styles.request}>تاریخ انقضا:</span>
                <div className={styles.request_data_container}>
                  {moment
                    .utc(Identity.request_time ?? new Date())
                    .add(1, 'week')
                    .local()
                    .locale('fa')
                    .format('YYYY/MM/D')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
