import React from 'react';
import {Button} from 'antd';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface IButton {
  label: string;
  testId?: string;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

interface Props {
  icon?: string;
  title: string;
  className?: string;
  buttons?: IButton[];
  headerClassName?: string;
  contentClassName?: string;
}

const EditTopicCard: React.FC<Props> = ({
  icon,
  title,
  className,
  buttons = [],
  headerClassName,
  contentClassName,
  children,
}) => {
  return (
    <div className={ClassNames(styles.card, className)}>
      <div className={ClassNames(styles.header, headerClassName)}>
        <img src={icon} />
        {title}
      </div>
      <div className={ClassNames(styles.content, contentClassName)}>
        {children}
      </div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          type="primary"
          onClick={button.onClick}
          loading={button.loading}
          data-testid={button.testId}
          className={button.className}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};
export default EditTopicCard;
