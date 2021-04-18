import React from 'react';
import ReactDOM from 'react-dom';
import Assets from '../../Assets';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface ITDialog {
  className?: string;
  onDismiss?: () => void;
  content: React.ReactNode;
}

export default function showDialog({className, content, onDismiss}: ITDialog) {
  let container = document.getElementById('TDialog');

  if (!container) {
    container = document.createElement('div');
    container.id = 'TDialog';
    container.setAttribute('style', 'display: contents');
    document.getElementById('root')?.appendChild(container);
  }

  const element = document.createElement('div');

  const onClose = () => {
    if (element && container) {
      ReactDOM.unmountComponentAtNode(element);
      container.removeChild(element);
      onDismiss && onDismiss();
    }
  };

  ReactDOM.render(
    <TDialog className={className} onDismiss={onClose} content={content} />,
    element
  );
  container.appendChild(element);

  return onClose;
}

function TDialog({className, content, onDismiss}: ITDialog) {
  return (
    <div className={styles.t_dialog} onClick={() => onDismiss && onDismiss()}>
      <div className={styles.t_dialog_bg} />
      <div
        className={ClassNames(styles.t_dialog_container, className)}
        onClick={(e) => e.stopPropagation()}>
        <span
          className={styles.t_dialog_multiply_box}
          onClick={() => onDismiss && onDismiss()}>
          <img src={Assets.SVGs.Close} className={styles.t_dialog_multiply} />
        </span>
        {content}
      </div>
    </div>
  );
}
