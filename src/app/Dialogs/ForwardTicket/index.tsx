import styles from './styles.module.scss';
import Assets from '../../Assets';
import {MutableRefObject, useRef, useState} from 'react';
import TDropDown from '../../Components/TDropDown';
import TButton from '../../Components/TButton';
import CategoryItem from './CategoryItem';

interface Props {
  onDismissRef?: MutableRefObject<(() => void) | undefined>;
}

export default function ForwardTicketDialog({onDismissRef}: Props) {
  const [Topic, setTopic] = useState<string>();

  const categories = [
    {
      label: 'نقش پیش فرض',
      number: 1,
    },
    {
      label: 'نقش پیش فرض',
      number: 2,
    },
    {
      label: 'نقش پیش فرض',
      number: 3,
    },
    {
      label: 'نقش پیش فرض',
      number: 4,
    },
    {
      label: 'نقش پیش فرض',
      number: 5,
    },
    {
      label: 'نقش پیش فرض',
      number: 6,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Assets.SVGs.ArrowRight} className={styles.arrow_right} />
        <img src={Assets.Images.ArrowDown} className={styles.arrow_down} />
        <div className={styles.spliter} />
        <span className={styles.from}>From:</span>
        <span> سید علی علوی مسئول خدمات آموزش مجازی</span>
        <div className={styles.close_container}>
          <img
            data-testid="close-button"
            src={Assets.SVGs.Close2}
            className={styles.close}
            onClick={() =>
              onDismissRef && onDismissRef.current && onDismissRef.current()
            }
          />
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.label}>:عنوان تاپیک</span>
        <TDropDown
          className={styles.topic_drop_down}
          items={[
            {
              value: 'test1',
              label: 'تست 1',
            },
            {
              value: 'test2',
              label: 'تست 2',
            },
          ]}
          onSelect={(values) => setTopic(values[0])}
          selectedItem={[Topic]}
        />
        <span className={styles.label}>:دسته بندی</span>
        {!Topic && (
          <div className={styles.no_topic}>
            <img src={Assets.Images.Papers} />
            <p dir="auto">!شما هنوز تاپیکی را انتخاب نکرده اید</p>
          </div>
        )}
        {Topic && (
          <div className={styles.categories}>
            {categories.map((item, index) => (
              <CategoryItem
                key={index}
                label={item.label}
                number={item.number}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <TButton
          label="ارسال"
          onClick={() => undefined}
          backgroundColor="#0088e3"
        />
        <TButton
          label="انصراف"
          onClick={() => undefined}
          backgroundColor="#606f7b"
        />
      </div>
    </div>
  );
}
