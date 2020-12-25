import React, { useState } from "react";
import { Tag } from "antd";
import Assets from "../../Assets";
import styles from "./styles.module.scss";
import ClassNames from "../../Utilities/ClassNames";
import VisiblePassSvg from "../../Assets/Svgs/components/VisiblePassSvg";
import InVisiblePassSvg from "../../Assets/Svgs/components/InvisiblePassSvg";

//Software Engineering Evaluation(module) Input

interface Props {
  hint?: string;
  label?: string;
  regex?: RegExp;
  tags?: string[];
  minLines?: number;
  className?: string;
  icon?: JSX.Element;
  isNumeric?: boolean;
  onEnter?: () => void;
  attachments?: File[];
  inputClassName?: string;
  labelClassName?: string;
  type?: "password" | "text";
  onIconPressed?: () => void;
  passwordCanBeVisible?: boolean;
  innerContainerClassName?: string;
  onSelectFile?: (file: File) => void;
  onTagClose?: (index: number) => void;
  onRemoveAttachment?: (index: number) => void;
  onChangeText: (text: string, isRegexFailed: boolean) => void;
}

export default function SEInput({
  icon,
  tags,
  regex,
  label,
  onEnter,
  minLines,
  className,
  hint = "",
  onTagClose,
  attachments,
  onSelectFile,
  onChangeText,
  type = "text",
  onIconPressed,
  labelClassName,
  inputClassName,
  isNumeric = false,
  onRemoveAttachment,
  innerContainerClassName,
  passwordCanBeVisible = true,
}: Props) {
  const [Type, setType] = useState(type);
  const [Content, setContent] = useState("");
  const [IsFocused, setIsFocused] = useState(false);
  const [IsRegexFailed, setIsRegexFailed] = useState(false);

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
        setContent("");
        setIsRegexFailed(true);
      }, 150);
      return;
    }

    if (regex && !regex.test(event.target.value)) {
      setIsRegexFailed(true);
    } else if (IsRegexFailed) {
      setIsRegexFailed(false);
    }

    setContent(event.target.value);
    onChangeText(event.target.value, IsRegexFailed);
  };

  let inputContainerStyle = ClassNames(styles.input_container, className);
  if (IsFocused) {
    if (IsRegexFailed) {
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
    if (IsRegexFailed) {
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
    if (IsRegexFailed) {
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
    labelStyle = ClassNames(styles.label, styles.label_margin, labelClassName);
  }

  const tagColors = [
    "red",
    "gold",
    "lime",
    "cyan",
    "blue",
    "green",
    "purple",
    "orange",
    "magenta",
    "volcano",
    "geekblue",
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
              placeholder={IsFocused ? hint : ""}
              className={ClassNames(
                styles.input,
                inputClassName,
                labelClassName
              )}
            />
          ) : (
            <input
              type={Type}
              value={Content}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={onChange}
              onKeyDown={(e) =>
                e.key === "Enter" && onEnter && (onEnter(), setContent(""))
              }
              placeholder={IsFocused ? hint : ""}
              className={ClassNames(
                styles.input,
                inputClassName,
                labelClassName
              )}
            />
          )}
          {passwordCanBeVisible &&
            type === "password" &&
            (Type === "password" ? (
              <div onClick={() => setType("text")}>
                <VisiblePassSvg className={styles.eye_svg} />
              </div>
            ) : (
              <div onClick={() => setType("password")}>
                <InVisiblePassSvg className={styles.eye_svg} />
              </div>
            ))}
          {icon && (
            <div
              onClick={onIconPressed}
              className={styles.eye_svg}
              style={onIconPressed ? { cursor: "pointer" } : {}}
            >
              {icon}
            </div>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div className={ClassNames(styles.tags_container, styles.scrollview)}>
            {tags.map((tag, i) => (
              <Tag
                key={tag}
                closable
                color={tagColors[i % tagColors.length]}
                onClose={() => onTagClose && onTagClose(i)}
              >
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
                    src={Assets.Images.Cancel}
                    className={styles.attachment_icon}
                    onClick={() => onRemoveAttachment && onRemoveAttachment(i)}
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
