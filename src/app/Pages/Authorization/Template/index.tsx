import styles from './styles.module.scss';

interface InputComponentProps {
  className: string;
}
export interface Props {
  message: string;
  messageHeader: string;
  inputComponent: React.ComponentType<InputComponentProps>;
}

export default function Template({
  message,
  messageHeader,
  inputComponent,
}: Props) {
  const InputComponent = inputComponent;

  return (
    <div className={styles.container}>
      <div className={styles.message_box}>
        <p className={styles.message_header}>{messageHeader}</p>
        <p className={styles.message} dir="auto">
          {message}
        </p>
      </div>
      <InputComponent className={styles.input_box_container} />
    </div>
  );
}
