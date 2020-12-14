import React, { useState } from "react";
import styles from "./styles.module.scss";
import ClassNames from "../../Utilities/ClassNames";
import VisiblePassSvg from "../../Assets/Svgs/components/VisiblePassSvg";
import InVisiblePassSvg from "../../Assets/Svgs/components/InvisiblePassSvg";

//Software Engineering Evaluation(module) Input

interface Props {
  hint: string;
  label: string;
  regex?: RegExp;
  className?: string;
  icon?: JSX.Element;
  isNumeric?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  type: "password" | "text";
  onIconPressed?: () => void;
  passwordCanBeVisible?: boolean;
  innerContainerClassName?: string;
  onChangeText: (text: string, isRegexFailed: boolean) => void;
}

export default function SEInput({
  hint,
  icon,
  type,
  regex,
  label,
  className,
  onChangeText,
  onIconPressed,
  labelClassName,
  inputClassName,
  isNumeric = false,
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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      inputContainerStyle = ClassNames(
        styles.input_container,
        styles.focused_input_container,
        className
      );
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
  }

  return (
    <div className={inputContainerStyle}>
      <div className={innerContainer}>
        <p className={labelStyle}>{label}</p>
        <input
          type={Type}
          value={Content}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          placeholder={IsFocused ? hint : ""}
          className={ClassNames(styles.input, inputClassName, labelClassName)}
        />
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
    </div>
  );
}