import {Tag} from 'antd';
import styles from './styles.module.scss';
import {useEffect, useState} from 'react';
import ClassNames from '../../Utilities/ClassNames';

interface Props {
  label?: string;
  regex?: RegExp;
  tags?: string[];
  content?: string;
  hasError?: boolean;
  className?: string;
  isNumeric?: boolean;
  onEnter?: () => void;
  inputClassName?: string;
  labelClassName?: string;
  onTagClose?: (index: number) => void;
  onChangeText?: (text: string, HasError: boolean) => void;
}

export default function TInput({
  tags,
  label,
  regex,
  content,
  onEnter,
  className,
  onTagClose,
  onChangeText,
  inputClassName,
  labelClassName,
  hasError = false,
  isNumeric = false,
}: Props) {
  const tagColors = ['#9fa8b1'];
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
    onChangeText && onChangeText(event.target.value, HasError);
  };

  let input_style = ClassNames(styles.input_class, inputClassName);
  if (HasError) {
    input_style = ClassNames(
      styles.input_class,
      inputClassName,
      styles.failed_regex_focused_input_container
    );
  }

  const label_style = ClassNames(styles.label, labelClassName);
  const input_container_style = ClassNames(styles.container, className);

  return (
    <div className={input_container_style}>
      <label className={label_style}>{label}</label>
      <input
        dir="auto"
        value={Content}
        onChange={onChange}
        className={input_style}
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
