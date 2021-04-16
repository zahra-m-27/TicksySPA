import {Tag} from 'antd';
import Assets from '../../Assets';
import styles from './styles.module.scss';
import React, {useEffect, useState} from 'react';
import ClassNames from '../../Utilities/ClassNames';

interface Props {
  hint?: string;
  label?: string;
  regex?: RegExp;
  tags?: string[];
  minLines?: number;
  content?: string;
  className?: string;
  hasError?: boolean;
  icon?: JSX.Element;
  isNumeric?: boolean;
  onEnter?: () => void;
  attachments?: File[];
  inputClassName?: string;
  labelClassName?: string;
  type?: 'password' | 'text';
  onIconPressed?: () => void;
  passwordCanBeVisible?: boolean;
  innerContainerClassName?: string;
  onSelectFile?: (file: File) => void;
  onTagClose?: (index: number) => void;
  onRemoveAttachment?: (index: number) => void;
  onChangeText?: (text: string, HasError: boolean) => void;
}

const SEInput = React.forwardRef<HTMLTextAreaElement | HTMLInputElement, Props>(
  (
    {
      icon,
      tags,
      regex,
      label,
      content,
      onEnter,
      minLines,
      className,
      hint = '',
      onTagClose,
      attachments,
      onSelectFile,
      onChangeText,
      type = 'text',
      onIconPressed,
      labelClassName,
      inputClassName,
      hasError = false,
      isNumeric = false,
      onRemoveAttachment,
      innerContainerClassName,
      passwordCanBeVisible = true,
    }: Props,
    ref
  ) => {
    const [Type, setType] = useState(type);
    const [HasError, setHasError] = useState(false);
    const [IsFocused, setIsFocused] = useState(false);
    const [Content, setContent] = useState(content ?? '');

    useEffect(() => {
      setContent(content ?? '');
    }, [content]);

    useEffect(() => {
      setHasError(hasError);

      if (hasError) {
        setIsFocused(true);
      }
    }, [hasError]);

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      if (Content.length <= 0) {
        setIsFocused(false);
      }
    };

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

    let inputContainerStyle = ClassNames(styles.input_container, className);
    if (IsFocused) {
      if (HasError) {
        inputContainerStyle = ClassNames(
          styles.input_container,
          styles.focused_input_container,
          styles.failed_regex_focused_input_container,
          className
        );
      } else {
        inputContainerStyle = ClassNames(styles.input_container, className);
      }
    }

    let innerContainer = ClassNames(
      styles.inner_container,
      innerContainerClassName
    );
    if (IsFocused) {
      if (HasError) {
        innerContainer = ClassNames(
          styles.inner_container,
          styles.failed_regex_focused_label_color,
          innerContainerClassName
        );
      } else {
        innerContainer = ClassNames(
          styles.inner_container,
          styles.focused_input_container,
          innerContainerClassName
        );
      }
    }

    let labelStyle = ClassNames(styles.label, labelClassName);
    if (IsFocused) {
      if (HasError) {
        labelStyle = ClassNames(
          styles.label,
          styles.focused_label,
          styles.failed_regex_focused_label_color,
          labelClassName
        );
      } else {
        labelStyle = ClassNames(
          styles.label,
          styles.focused_label,
          labelClassName
        );
      }
    } else if ((tags && tags.length > 0) || attachments) {
      labelStyle = ClassNames(
        styles.label,
        styles.label_margin,
        labelClassName
      );
    }

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

    return (
      <div className={inputContainerStyle}>
        <div className={innerContainer}>
          <div className={styles.content}>
            {label && <p className={labelStyle}>{label}</p>}
            {minLines ? (
              <textarea
                rows={minLines}
                value={Content}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                placeholder={IsFocused ? hint : ''}
                className={ClassNames(
                  styles.input,
                  inputClassName,
                  labelClassName
                )}
                ref={ref as React.RefObject<HTMLTextAreaElement>}
              />
            ) : (
              <input
                dir="auto"
                type={Type}
                value={Content}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                placeholder={IsFocused ? hint : ''}
                className={ClassNames(
                  styles.input,
                  inputClassName,
                  labelClassName
                )}
                ref={ref as React.RefObject<HTMLInputElement>}
                onKeyDown={(e) => e.key === 'Enter' && onEnter && onEnter()}
              />
            )}
            {type === 'password' && (
              <div
                data-testid="password-visibility"
                onClick={() =>
                  setType(Type === 'password' ? 'text' : 'password')
                }>
                {Type === 'password' ? (
                  <Assets.SVGs.VisiblePassSvg className={styles.eye_svg} />
                ) : (
                  <Assets.SVGs.InvisiblePassSvg className={styles.eye_svg} />
                )}
              </div>
            )}
            {icon && (
              <div
                onClick={onIconPressed}
                className={styles.eye_svg}
                style={onIconPressed ? {cursor: 'pointer'} : {}}>
                {icon}
              </div>
            )}
          </div>
          {tags && tags.length > 0 && (
            <div
              className={ClassNames(styles.tags_container, styles.scrollview)}>
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
          {onSelectFile && attachments && (
            <div className={ClassNames(styles.attachments, styles.scrollview)}>
              <label htmlFor="attachment_input">
                <div className={ClassNames(styles.attachment, styles.new)}>
                  <img
                    alt=""
                    src={Assets.Images.Attach}
                    className={styles.attachment_icon}
                  />
                  <p className={styles.name}>چسباندن فایل</p>
                </div>
              </label>
              <input
                type="file"
                id="attachment_input"
                onChange={(e) =>
                  e.target.files &&
                  onSelectFile &&
                  onSelectFile(e.target.files[0])
                }
                className={styles.attachment_input}
              />
              {attachments &&
                attachments.map((attachment, i) => (
                  <div className={styles.attachment} key={i}>
                    <img
                      alt=""
                      src={Assets.Images.Cancel}
                      className={styles.attachment_icon}
                      onClick={() =>
                        onRemoveAttachment && onRemoveAttachment(i)
                      }
                    />
                    <p className={styles.name}>{attachment.name}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
export default SEInput;
