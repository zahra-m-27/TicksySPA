import styles from './styles.module.scss';
import Assets from '../../Assets';
import {MutableRefObject, useRef, useState} from 'react';
import TButton from '../../Components/TButton';
import CategoryItem from './CategoryItem';
import TInput from '../../Components/TInput';
import API from '../../API';
import TopicAllDetailDto from '../../API/DTOs/TopicAllDetailDto';
import TTooltipDropDown from '../../Components/TTooltipDropDown';
import {message} from 'antd';
import CategoryDto from '../../API/DTOs/CategoryDto';

interface Props {
  section: string;
  ticketId: number;
  otherSections: CategoryDto[];
  onDismissRef?: MutableRefObject<(() => void) | undefined>;
}

enum ForwardType {
  Topic,
  Role,
}

export default function ForwardTicketDialog({
  section,
  ticketId,
  onDismissRef,
  otherSections,
}: Props) {
  const isTyping = useRef<number>();
  const [Topic, setTopic] = useState<string>();
  const [SelectedCategory, setSelectedCategory] = useState<number>();
  const [SelectedTopic, setSelectedTopic] = useState<TopicAllDetailDto>();
  const [SearchedTopics, setSearchedTopics] = useState<TopicAllDetailDto[]>([]);
  const [CurrentForwardType, setCurrentForwardType] = useState<ForwardType>(
    ForwardType.Role
  );

  const searchTopics = (value: string) => {
    API.Topics.TopicAllDetail({
      limit: 5,
      offset: 0,
      search: value,
    }).then((response) => setSearchedTopics(response.results));
  };

  const onSearch = (value: string) => {
    const key = Math.random();
    isTyping.current = key;
    setTimeout(() => {
      if (key == isTyping.current) {
        searchTopics(value);
      }
    }, 500);
    setTopic(value);
  };

  const onClose = () => {
    setTopic('');
    setSelectedTopic(undefined);
    setSelectedCategory(undefined);
    onDismissRef && onDismissRef.current && onDismissRef.current();
  };

  const onForward = () => {
    if (SelectedCategory)
      API.Tickets.ForwardTicketSection({
        ticketId: ticketId,
        section: SelectedCategory,
      })
        .then(() => {
          message.success('تیکت با موفقیت انتقال یافت.');
          onClose();
        })
        .catch(() => {
          message.error('خطایی در انتقال تیکت وجود دارد.');
        });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TTooltipDropDown
          items={[
            {
              value: ForwardType.Topic,
              label: 'ارسال تیکت به سایر تاپیک ها',
            },
            {
              value: ForwardType.Role,
              label: 'ارسال تیکت به سایر نقش ها',
            },
          ]}
          selectedItem={CurrentForwardType}
          onSelect={setCurrentForwardType}>
          <>
            <img src={Assets.SVGs.ArrowRight} className={styles.arrow_right} />
            <img
              src={Assets.Images.ArrowDown}
              className={styles.arrow_down}
              data-testid="forwardType"
            />
          </>
        </TTooltipDropDown>
        <div className={styles.splitter} />
        <span className={styles.from}>From:</span>
        <span>{section}</span>
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
        {CurrentForwardType === ForwardType.Topic && (
          <TInput
            content={Topic}
            label="عنوان تاپیک"
            onChangeText={onSearch}
            data-testid="topicSearch"
            labelClassName={styles.label}
            className={styles.topic_drop_down}
            autoCompleteData={SearchedTopics.map((item) => {
              return {
                label: item.title,
                value: item,
              };
            })}
            onAutoCompleteSelect={(value) => {
              setTopic(value.title);
              setSelectedTopic(value);
              setSearchedTopics([]);
            }}
          />
        )}
        <span className={styles.label}>دسته بندی</span>
        {CurrentForwardType === ForwardType.Topic && (
          <>
            {!SelectedTopic && (
              <div className={styles.no_topic}>
                <img src={Assets.Images.Papers} />
                <p dir="auto">!شما هنوز تاپیکی را انتخاب نکرده اید</p>
              </div>
            )}
            {!!SelectedTopic && !!SelectedTopic.section_set && (
              <div className={styles.categories}>
                {SelectedTopic.section_set.map((item, index) => (
                  <CategoryItem
                    key={index}
                    label={item.title}
                    number={index + 1}
                    selected={item.id === SelectedCategory}
                    onClick={() => setSelectedCategory(item.id)}
                  />
                ))}
              </div>
            )}
          </>
        )}
        {CurrentForwardType === ForwardType.Role && (
          <div className={styles.categories}>
            {otherSections.map((item, index) => (
              <CategoryItem
                key={index}
                label={item.title}
                number={index + 1}
                selected={item.id === SelectedCategory}
                onClick={() => setSelectedCategory(item.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <TButton
          label="ارسال"
          onClick={onForward}
          className={styles.button}
          data-testid="submitButton"
          disabled={!SelectedCategory}
          backgroundColor={SelectedCategory ? '#0088e3' : '#96a2ab'}
        />
        <TButton
          label="انصراف"
          onClick={onClose}
          className={styles.button}
          backgroundColor="#606f7b"
          data-testid="cancelButton"
        />
      </div>
    </div>
  );
}
