import React, {CSSProperties} from 'react';
import ReactDOM from 'react-dom';
import Assets from '../../Assets';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface ITDialog {
  className?: string;
  style?: CSSProperties;
  onDismiss?: () => void;
  content: React.ReactNode;
}

export default function showDialog({
  style,
  content,
  className,
  onDismiss,
}: ITDialog) {
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
    <TDialog
      style={style}
      content={content}
      onDismiss={onClose}
      className={className}
      showDismiss={!!onDismiss}
    />,
    element
  );
  container.appendChild(element);

  return onClose;
}

function TDialog({
  style,
  content,
  className,
  onDismiss,
  showDismiss,
}: ITDialog & {showDismiss: boolean}) {
  return (
    <div className={styles.t_dialog} onClick={() => onDismiss && onDismiss()}>
      <div className={styles.t_dialog_bg} />
      <div
        style={style}
        className={ClassNames(styles.t_dialog_container, className)}
        onClick={(e) => e.stopPropagation()}>
        {showDismiss && (
          <span
            className={styles.t_dialog_multiply_box}
            onClick={() => onDismiss && onDismiss()}>
            <img src={Assets.SVGs.Close} className={styles.t_dialog_multiply} />
          </span>
        )}
        {content}
      </div>
    </div>
  );
}
