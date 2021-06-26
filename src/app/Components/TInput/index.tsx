import {Tag} from 'antd';
import styles from './styles.module.scss';
import React, {InputHTMLAttributes, useEffect, useState} from 'react';
import ClassNames from '../../Utilities/ClassNames';

interface Item {
  value: any;
  label: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  label?: string;
  regex?: RegExp;
  tags?: string[];
  content?: string;
  minLines?: number;
  hasError?: boolean;
  className?: string;
  isNumeric?: boolean;
  onEnter?: () => void;
  iconClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  autoCompleteData?: Item[];
  autoCompleteClassName?: string;
  inputContainerClassName?: string;
  autoCompleteItemClassName?: string;
  onTagClose?: (index: number) => void;
  onAutoCompleteSelect?: (value: any) => void;
  onChangeText?: (text: string, HasError: boolean) => void;
}

export default function TInput({
  icon,
  tags,
  label,
  regex,
  content,
  onEnter,
  minLines,
  className,
  onTagClose,
  onChangeText,
  iconClassName,
  inputClassName,
  labelClassName,
  autoCompleteData,
  hasError = false,
  isNumeric = false,
  onAutoCompleteSelect,
  autoCompleteClassName,
  autoCompleteItemClassName,
  inputContainerClassName,
  ...props
}: Props) {
  const tagColors = ['#9fa8b1'];
  const [HasError, setHasError] = useState(false);
  const [Content, setContent] = useState(content ?? '');

  useEffect(() => {
    setContent(content ?? '');
  }, [content]);

  useEffect(() => {
    setHasError(hasError);
  }, [hasError]);

  const onChange = (event: React.ChangeEvent<any>) => {
    if (isNumeric && !/^\d*$/.test(event.target.value)) {
      setContent(event.target.value);
      setTimeout(() => {
        setContent('');
        setHasError(true);
      }, 150);
      return;
    }

    if (regex && !regex.test(event.target.value)) {
      setHasError(true);
    } else if (HasError) {
      setHasError(false);
    }

    setContent(event.target.value);
    onChangeText && onChangeText(event.target.value, HasError);
  };

  let input_style = ClassNames(styles.input_class, inputClassName);
  if (HasError) {
    input_style = ClassNames(styles.input_class, inputClassName);
  }

  let input_container_style = ClassNames(
    styles.input_container,
    inputContainerClassName
  );
  if (HasError) {
    input_container_style = ClassNames(
      styles.input_container,
      inputContainerClassName,
      styles.failed_regex_focused_input_container
    );
  }

  const label_style = ClassNames(styles.label, labelClassName);
  const container_style = ClassNames(styles.container, className);

  return (
    <div className={container_style}>
      <label className={label_style}>{label}</label>
      <div className={input_container_style} data-testid="input-container">
        {icon && (
          <img
            src={icon}
            className={[styles.icon, iconClassName].join(' ')}
            alt="icon"
          />
        )}
        {minLines ? (
          <textarea
            dir="rtl"
            rows={minLines}
            value={Content}
            onChange={onChange as any}
            className={input_style}
            {...(props as any)}
          />
        ) : (
          <input
            dir="rtl"
            value={Content}
            onChange={onChange}
            className={input_style}
            onKeyDown={(e) => e.key === 'Enter' && onEnter && onEnter()}
            {...props}
          />
        )}
      </div>

      <div
        className={ClassNames(
          styles.auto_complete_items,
          autoCompleteClassName
        )}
        data-active={!!autoCompleteData && !!autoCompleteData.length}>
        {autoCompleteData &&
          autoCompleteData.map((item) => (
            <div
              key={`${item.value}`}
              className={ClassNames(
                styles.auto_complete_item,
                autoCompleteItemClassName
              )}
              onClick={() =>
                onAutoCompleteSelect && onAutoCompleteSelect(item.value)
              }>
              <p>{item.label}</p>
            </div>
          ))}
      </div>

      {tags && tags.length > 0 && (
        <div className={styles.tags_container}>
          {tags.map((tag, i) => (
            <Tag
              key={tag}
              closable
              color={tagColors[i % tagColors.length]}
              onClose={() => onTagClose && onTagClose(i)}>
              #{tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
}
