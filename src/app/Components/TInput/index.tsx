import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';
import {Tag} from 'antd';

interface Props {
  label?: string;
  regex?: RegExp;
  tags?: string[];
  content?: string;
  hasError?: boolean;
  isNumeric?: boolean;
  onEnter?: () => void;
  inputClassName?: string;
  onTagClose?: (index: number) => void;
  onChangeText: (text: string, HasError: boolean) => void;
}

export default function TInput({
  label,
  content,
  onEnter,
  onChangeText,
  hasError = false,
  inputClassName,
  onTagClose,
  isNumeric = false,
  regex,
  tags,
}: Props) {
  const tagColors = [
    'red',
    'gold',
    'lime',
    'cyan',
    'blue',
    'green',
    'purple',
    'orange',
    'magenta',
    'volcano',
    'geekblue',
  ];
  const [Content, setContent] = useState(content ?? '');
  const [HasError, setHasError] = useState(false);

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
    onChangeText(event.target.value, HasError);
  };

  let input_container_style = ClassNames(styles.input_class, inputClassName);
  if (HasError) {
    input_container_style = ClassNames(
      styles.input_class,
      inputClassName,
      styles.failed_regex_focused_input_container
    );
  }
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        dir="auto"
        value={Content}
        className={input_container_style}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onEnter && onEnter()}
      />
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
