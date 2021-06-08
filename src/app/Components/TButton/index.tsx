import React from 'react';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  onClick?: () => void;
  backgroundColor?: string;
}

export default function TButton({onClick, label, backgroundColor}: Props) {
  return (
    <div className={styles.button} onClick={onClick} style={{backgroundColor}}>
      {label}
    </div>
  );
}
