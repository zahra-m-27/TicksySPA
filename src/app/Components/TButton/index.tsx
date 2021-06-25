import React from 'react';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface Props {
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  labelClassName?: string;
  backgroundColor?: string;
}

export default function TButton({
  label,
  onClick,
  disabled,
  className,
  labelClassName,
  backgroundColor,
  ...props
}: Props) {
  return (
    <div
      onClick={onClick}
      data-disabled={disabled}
      style={{backgroundColor}}
      className={ClassNames(styles.button, className)}
      {...props}>
      <span className={ClassNames(styles.label, labelClassName)}>{label}</span>
    </div>
  );
}
