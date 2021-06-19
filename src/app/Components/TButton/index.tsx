import React from 'react';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface Props {
  label?: string;
  className?: string;
  onClick?: () => void;
  labelClassName?: string;
  backgroundColor?: string;
}

export default function TButton({
  label,
  onClick,
  className,
  labelClassName,
  backgroundColor,
}: Props) {
  return (
    <div
      className={ClassNames(styles.button, className)}
      onClick={onClick}
      style={{backgroundColor}}>
      <span className={ClassNames(styles.label, labelClassName)}>{label}</span>
    </div>
  );
}
